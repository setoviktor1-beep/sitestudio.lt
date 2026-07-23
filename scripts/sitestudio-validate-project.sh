#!/usr/bin/env bash
set -Eeuo pipefail

die() { printf 'ERROR: %s\n' "$*" >&2; exit 1; }
usage() { printf 'Usage: validate-project.sh --project ABSOLUTE_DIR [--profile static|next-payload] [--template]\n'; }
need() { command -v "$1" >/dev/null 2>&1 || die "Required command not found: $1"; }
error_count=0 warning_count=0
error() { printf 'FAIL: %s\n' "$*" >&2; error_count=$((error_count + 1)); }
warn() { printf 'WARN: %s\n' "$*" >&2; warning_count=$((warning_count + 1)); }
pass() { printf 'PASS: %s\n' "$*"; }

project="" profile="" template_mode=false
while (($#)); do
  case "$1" in
    --project) [[ $# -ge 2 ]] || die "Missing value for $1"; project="$2"; shift 2 ;;
    --profile) [[ $# -ge 2 ]] || die "Missing value for $1"; profile="$2"; shift 2 ;;
    --template) template_mode=true; shift ;;
    -h|--help) usage; exit 0 ;;
    *) die "Unknown argument: $1" ;;
  esac
done

for command_name in realpath rg find awk sed bash; do need "$command_name"; done
[[ "$project" == /* && -d "$project" && ! -L "$project" ]] || die "Project must be an absolute, existing non-symlink directory"
project="$(realpath -- "$project")"
[[ "$project" != "/" ]] || die "Refusing filesystem root"
manifest="$project/.sitestudio/project.env"
[[ -f "$manifest" && ! -L "$manifest" ]] || die "Missing non-secret SiteStudio ownership marker"

manifest_value() { awk -F= -v key="$1" '$1 == key {sub(/^[^=]*=/, ""); print; exit}' "$manifest"; }
managed="$(manifest_value SITESTUDIO_MANAGED)"
slug="$(manifest_value SITESTUDIO_PROJECT_SLUG)"
manifest_profile="$(manifest_value SITESTUDIO_PROFILE)"
domain="$(manifest_value SITESTUDIO_DOMAIN)"
[[ "$managed" == "true" ]] || die "Project marker does not opt into SiteStudio management"
[[ "$slug" =~ ^[a-z][a-z0-9-]{2,62}$ ]] || error "Invalid project slug in marker"
[[ "$domain" =~ ^([a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?\.)+[a-z]{2,63}$ ]] || error "Invalid canonical domain in marker"
[[ -n "$profile" ]] || profile="$manifest_profile"
[[ "$profile" == "$manifest_profile" ]] || error "Requested profile differs from marker"
[[ "$profile" == "static" || "$profile" == "next-payload" ]] || error "Unknown project profile"

if [[ "$template_mode" == false ]]; then
  unresolved="$(rg -l '__[A-Z0-9_]+__|<FULL_GIT_COMMIT_SHA>|<PIN_[A-Z0-9_]+>' "$project" --glob '!.git/**' --glob '!**/scripts/sitestudio-validate-project.sh' --glob '!**/scripts/validate-project.sh' 2>/dev/null || true)"
  [[ -z "$unresolved" ]] || error "Unresolved placeholders found in: $(printf '%s' "$unresolved" | tr '\n' ' ')"
fi

sensitive_files="$(find "$project" -path "$project/.git" -prune -o -type f \( -name '.env' -o -name '.env.local' -o -name '.env.production' -o -name '*.pem' -o -name '*.key' -o -name '*.p12' -o -name '*.sqlite*' -o -name '*.dump' \) -printf '%P\n')"
[[ -z "$sensitive_files" ]] || error "Forbidden sensitive file types present: $(printf '%s' "$sensitive_files" | tr '\n' ' ')"

workflow_dir="$project/.github/workflows"
if [[ -d "$workflow_dir" ]]; then
  unpinned_uses="$(rg -n '^[[:space:]]*(-[[:space:]]+)?uses:' "$workflow_dir" --glob '*.yml' --glob '*.yaml' 2>/dev/null | rg -v '@[0-9a-f]{40}([[:space:]]*(#.*)?)?$' || true)"
  [[ -z "$unpinned_uses" ]] || error "Every external Actions uses reference must be pinned to a full commit SHA: $unpinned_uses"
fi

in_memory_files="$(rg -l --pcre2 '(requestsByIp|attempts|rate.?limit[a-zA-Z_]*)[^\n=]*=[^\n]*new Map' "$project" --glob '!node_modules/**' --glob '!.git/**' --glob '!**/scripts/sitestudio-validate-project.sh' --glob '!**/scripts/validate-project.sh' 2>/dev/null || true)"
[[ -z "$in_memory_files" ]] || error "Production in-memory rate limit pattern found in: $(printf '%s' "$in_memory_files" | tr '\n' ' ')"

if [[ "$profile" == "static" ]]; then
  for required in site/index.html site/robots.txt site/sitemap.xml .github/workflows/pages.yml; do
    [[ -f "$project/$required" ]] || error "Missing static profile file: $required"
  done
  [[ ! -f "$project/site/index.html" ]] || {
    rg -q '<html[^>]+lang=' "$project/site/index.html" || error "HTML language is missing"
    rg -q '<title>[^<]+' "$project/site/index.html" || error "Document title is missing"
    rg -q 'name="description"' "$project/site/index.html" || error "Meta description is missing"
    rg -q 'rel="canonical"' "$project/site/index.html" || error "Canonical is missing"
    rg -q 'application/ld\+json' "$project/site/index.html" || error "JSON-LD is missing"
  }
  [[ ! -f "$project/site/robots.txt" ]] || rg -q '^Sitemap:[[:space:]]+https://' "$project/site/robots.txt" || error "robots.txt sitemap is missing"
  [[ ! -f "$project/site/sitemap.xml" ]] || rg -q '<urlset' "$project/site/sitemap.xml" || error "sitemap.xml is invalid"
  [[ ! -f "$project/.github/workflows/pages.yml" ]] || {
    rg -q 'actions/upload-pages-artifact@' "$project/.github/workflows/pages.yml" || error "Pages artifact action is missing"
    if ! rg -q 'actions/deploy-pages@[0-9a-f]{40}' "$project/.github/workflows/pages.yml"; then
      rg -q '/pages/deployment' "$project/.github/workflows/pages.yml" || error "Pages deployment action or API step is missing"
      rg -q 'ACTIONS_ID_TOKEN_REQUEST_TOKEN' "$project/.github/workflows/pages.yml" || error "Pages deployment OIDC step is missing"
    fi
  }
else
  for required in Dockerfile compose.production.yml .env.example .github/workflows/docker-image.yml; do
    [[ -f "$project/$required" ]] || error "Missing next-payload profile file: $required"
  done
  compose="$project/compose.production.yml"
  if [[ -f "$compose" ]]; then
    rg -q '^[[:space:]]*build:' "$compose" && error "Production Compose contains build"
    rg -qi 'image:.*:latest([[:space:]]|$)' "$compose" && error "Production Compose uses latest"
    rg -q '\$\{SITESTUDIO_IMAGE_TAG:\?' "$compose" || error "Application image does not require an explicit SHA tag"
    rg -q '^[[:space:]]*-[[:space:]]*(app|web|db|database)[[:space:]]*$' "$compose" && error "Forbidden shared Docker alias found"
    service_names="$(awk '/^services:[[:space:]]*$/{in_services=1;next} in_services && /^[^[:space:]]/{exit} in_services && /^  [a-zA-Z0-9_.-]+:[[:space:]]*$/{name=$1;sub(/:$/, "", name);print name}' "$compose")"
    while IFS= read -r service; do [[ -z "$service" || "$service" == "$slug-"* ]] || error "Service is not slug-prefixed: $service"; done <<< "$service_names"
  fi
  if [[ -f "$project/Dockerfile" ]]; then
    rg -qi '^[[:space:]]*(COPY|ADD)[[:space:]].*([/[:space:]]|^)media([/[:space:]]|$)' "$project/Dockerfile" && error "Dockerfile copies uploaded media"
  fi
  workflow="$project/.github/workflows/docker-image.yml"
  if [[ -f "$workflow" ]]; then
    rg -q 'docker/build-push-action@' "$workflow" || error "Docker build-push action is missing"
    rg -q 'ghcr\.io' "$workflow" || error "GHCR target is missing"
    rg -q '\$\{\{ github\.sha \}\}' "$workflow" || error "Full Git commit SHA tag is missing"
    rg -qi ":latest([[:space:],\"'}]|$)" "$workflow" && error "Workflow must not publish latest"
    rg -q 'packages:[[:space:]]*write' "$workflow" || error "GHCR package permission is missing"
  fi
  if [[ "$template_mode" == false ]]; then
    [[ -f "$project/package.json" ]] || error "Application package.json is missing"
    [[ -f "$project/package-lock.json" ]] || error "Locked dependencies are missing"
  else
    [[ -f "$project/package-lock.json" ]] || warn "Application and lockfile must be added before CI"
  fi
fi

((error_count == 0)) && pass "Static SiteStudio validation completed"
printf 'Result: %d failure(s), %d warning(s)\n' "$error_count" "$warning_count"
((error_count == 0)) || exit 1
