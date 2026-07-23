#!/usr/bin/env python3
"""Render allowlisted published Payload content into the static SiteStudio site."""

from __future__ import annotations

import argparse
import html
import json
import re
import sys
from datetime import datetime
from pathlib import Path
from urllib.parse import urlparse


ORIGIN = "https://sitestudio.lt"
EXPECTED_TENANT = "sitestudio.lt"
PAGE_PATHS = {
    "pradzia": "index.html",
    "paslaugos": "paslaugos/index.html",
    "darbai": "darbai/index.html",
    "procesas": "procesas/index.html",
    "kainos": "kainos/index.html",
    "duk": "duk/index.html",
    "kontaktai": "kontaktai/index.html",
    "privatumas": "privatumas/index.html",
}
PROJECT_ASSETS = {
    "/assets/projects/situacija-eu.webp",
    "/assets/projects/leonamai-lt.webp",
}


def required_text(value: object, label: str, maximum: int = 5000) -> str:
    if not isinstance(value, str) or not value.strip():
        raise ValueError(f"{label} must be a non-empty string")
    clean = value.strip()
    if len(clean) > maximum:
        raise ValueError(f"{label} exceeds {maximum} characters")
    return clean


def ordered(documents: object, label: str) -> list[dict[str, object]]:
    if not isinstance(documents, list):
        raise ValueError(f"{label} must be an array")
    result = []
    for index, document in enumerate(documents):
        if not isinstance(document, dict):
            raise ValueError(f"{label}[{index}] must be an object")
        result.append(document)
    return sorted(result, key=lambda item: int(item.get("order", 0)))


def replace_once(text: str, pattern: str, replacement: str, label: str, flags: int = 0) -> str:
    updated, count = re.subn(pattern, lambda _: replacement, text, count=1, flags=flags)
    if count != 1:
        raise ValueError(f"template marker not found exactly once: {label}")
    return updated


def replace_region(text: str, marker: str, rendered: str) -> str:
    pattern = (
        rf"(?P<indent>[ \t]*)<!-- CMS:{re.escape(marker)}:START -->.*?"
        rf"(?P=indent)<!-- CMS:{re.escape(marker)}:END -->"
    )

    def replacement(match: re.Match[str]) -> str:
        indent = match.group("indent")
        body = "\n".join(f"{indent}{line}" if line else "" for line in rendered.splitlines())
        return (
            f"{indent}<!-- CMS:{marker}:START -->\n"
            f"{body}\n"
            f"{indent}<!-- CMS:{marker}:END -->"
        )

    updated, count = re.subn(pattern, replacement, text, count=1, flags=re.DOTALL)
    if count != 1:
        raise ValueError(f"CMS region not found exactly once: {marker}")
    return updated


def update_meta(text: str, page: dict[str, object], slug: str) -> str:
    title = required_text(page.get("title"), f"pages.{slug}.title", 160)
    summary = required_text(page.get("summary"), f"pages.{slug}.summary", 500)
    seo = page.get("seo")
    if not isinstance(seo, dict):
        raise ValueError(f"pages.{slug}.seo must be an object")
    seo_title = required_text(seo.get("title"), f"pages.{slug}.seo.title", 160)
    description = required_text(seo.get("description"), f"pages.{slug}.seo.description", 180)
    canonical = required_text(seo.get("canonical"), f"pages.{slug}.seo.canonical", 300)
    expected = f"{ORIGIN}/" if slug == "pradzia" else f"{ORIGIN}/{slug}/"
    if canonical != expected:
        raise ValueError(f"pages.{slug}.seo.canonical must be {expected}")
    og_title = required_text(seo.get("ogTitle"), f"pages.{slug}.seo.ogTitle", 160)
    og_description = required_text(
        seo.get("ogDescription"), f"pages.{slug}.seo.ogDescription", 180
    )

    text = replace_once(text, r"<title>.*?</title>", f"<title>{html.escape(seo_title)}</title>", "title")
    text = replace_once(
        text,
        r'<meta name="description" content="[^"]*" />',
        f'<meta name="description" content="{html.escape(description, quote=True)}" />',
        "description",
    )
    text = replace_once(
        text,
        r'<link rel="canonical" href="[^"]*" />',
        f'<link rel="canonical" href="{canonical}" />',
        "canonical",
    )
    for property_name, value in (
        ("og:title", og_title),
        ("og:description", og_description),
        ("og:url", canonical),
    ):
        text = replace_once(
            text,
            rf'<meta property="{re.escape(property_name)}" content="[^"]*" />',
            f'<meta property="{property_name}" content="{html.escape(value, quote=True)}" />',
            property_name,
        )
    text = replace_once(
        text,
        r"<h1(?:\s[^>]*)?>.*?</h1>",
        f"<h1>{html.escape(title)}</h1>",
        f"{slug} h1",
        re.DOTALL,
    )
    if slug == "pradzia":
        return replace_once(
            text,
            r'<p class="hero-copy">.*?</p>',
            f'<p class="hero-copy">{html.escape(summary)}</p>',
            "home summary",
            re.DOTALL,
        )

    hero_pattern = re.compile(
        r'(<header class="page-hero">.*?<h1>.*?</h1>\s*)<p>.*?</p>',
        re.DOTALL,
    )
    hero_match = hero_pattern.search(text)
    if hero_match is None:
        raise ValueError(f"template marker not found exactly once: {slug} summary")
    return (
        text[: hero_match.start()]
        + hero_match.group(1)
        + f"<p>{html.escape(summary)}</p>"
        + text[hero_match.end() :]
    )


def service_cards(services: list[dict[str, object]], heading: int) -> str:
    if not services:
        raise ValueError("at least one published service is required")
    cards = []
    for index, service in enumerate(services, start=1):
        title = html.escape(required_text(service.get("title"), "service.title", 160))
        summary = html.escape(required_text(service.get("summary"), "service.summary", 500))
        body = html.escape(required_text(service.get("body"), "service.body", 2000))
        cards.append(
            "\n".join(
                [
                    '<article class="card">',
                    f'  <span class="card-number">{index:02d}</span>',
                    f"  <h{heading}>{title}</h{heading}>",
                    f"  <p>{summary} {body}</p>",
                    "</article>",
                ]
            )
        )
    return "\n".join(cards)


def project_cards(projects: list[dict[str, object]], heading: int, site_root: Path) -> str:
    if not projects:
        raise ValueError("at least one published project is required")
    cards = []
    for project in projects:
        title_raw = required_text(project.get("title"), "project.title", 160)
        summary_raw = required_text(project.get("summary"), "project.summary", 500)
        url = required_text(project.get("externalURL"), "project.externalURL", 500)
        parsed = urlparse(url)
        if parsed.scheme != "https" or not parsed.netloc:
            raise ValueError("project.externalURL must be an absolute HTTPS URL")
        asset = required_text(project.get("previewAssetPath"), "project.previewAssetPath", 300)
        if asset not in PROJECT_ASSETS or not (site_root / asset.removeprefix("/")).is_file():
            raise ValueError(f"project preview asset is not allowlisted: {asset}")
        title = html.escape(title_raw)
        summary = html.escape(summary_raw)
        safe_url = html.escape(url, quote=True)
        safe_asset = html.escape(asset, quote=True)
        aria = html.escape(f"Atidaryti {title_raw} svetainę naujame lange", quote=True)
        alt = html.escape(f"{title_raw} pagrindinio puslapio peržiūra", quote=True)
        cards.append(
            "\n".join(
                [
                    '<article class="work-card work-card-project">',
                    f'  <a class="work-card-whole" href="{safe_url}" target="_blank" rel="noopener noreferrer" aria-label="{aria}">',
                    '    <span class="work-media-link">',
                    f'      <img src="{safe_asset}" width="1440" height="900" loading="lazy" decoding="async" alt="{alt}" />',
                    "    </span>",
                    '    <span class="work-body">',
                    '      <span class="work-meta"><span class="tag">Verslo svetainė</span><span aria-hidden="true">↗</span></span>',
                    f'      <span class="work-title" role="heading" aria-level="{heading}">{title}</span>',
                    f'      <span class="muted-text">{summary}</span>',
                    f'      <span class="text-link work-card-link">Atidaryti {title} <span aria-hidden="true">↗</span></span>',
                    "    </span>",
                    "  </a>",
                    "</article>",
                ]
            )
        )
    return "\n".join(cards)


def faq_cards(faqs: list[dict[str, object]], limit: int | None = None) -> str:
    selected = faqs[:limit] if limit is not None else faqs
    if not selected:
        raise ValueError("at least one published FAQ is required")
    cards = []
    for index, faq in enumerate(selected):
        question = html.escape(required_text(faq.get("question"), "faq.question", 300))
        answer = html.escape(required_text(faq.get("answer"), "faq.answer", 3000))
        opened = " open" if index == 0 and limit is None else ""
        cards.append(
            "\n".join(
                [
                    f"<details{opened}>",
                    f"  <summary>{question}</summary>",
                    f'  <div class="faq-answer"><p>{answer}</p></div>',
                    "</details>",
                ]
            )
        )
    return "\n".join(cards)


def faq_json_ld(faqs: list[dict[str, object]]) -> str:
    data = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
            {
                "@type": "Question",
                "name": required_text(faq.get("question"), "faq.question", 300),
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": required_text(faq.get("answer"), "faq.answer", 3000),
                },
            }
            for faq in faqs
        ],
    }
    return json.dumps(data, ensure_ascii=False, indent=8)


def write_sitemap(site_root: Path, exported_at: object) -> None:
    timestamp = required_text(exported_at, "exportedAt", 100)
    try:
        lastmod = datetime.fromisoformat(timestamp.replace("Z", "+00:00")).date().isoformat()
    except ValueError as exc:
        raise ValueError("exportedAt must be an ISO-8601 timestamp") from exc
    routes = ["/", "/paslaugos/", "/darbai/", "/procesas/", "/kainos/", "/duk/", "/kontaktai/", "/privatumas/"]
    urls = "\n".join(
        f"  <url><loc>{ORIGIN}{route}</loc><lastmod>{lastmod}</lastmod></url>"
        for route in routes
    )
    (site_root / "sitemap.xml").write_text(
        '<?xml version="1.0" encoding="UTF-8"?>\n'
        '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n'
        f"{urls}\n"
        "</urlset>\n",
        encoding="utf-8",
    )


def render(source: Path, site_root: Path) -> None:
    data = json.loads(source.read_text(encoding="utf-8"))
    if not isinstance(data, dict) or data.get("schemaVersion") != 1:
        raise ValueError("unsupported CMS export schema")
    tenant = data.get("tenant")
    if not isinstance(tenant, dict) or tenant.get("domain") != EXPECTED_TENANT:
        raise ValueError("CMS export tenant is not sitestudio.lt")

    pages_raw = ordered(data.get("pages"), "pages")
    pages = {required_text(page.get("slug"), "page.slug", 100): page for page in pages_raw}
    if set(pages) != set(PAGE_PATHS):
        raise ValueError("published page set differs from the required SiteStudio routes")

    services = ordered(data.get("services"), "services")
    projects = ordered(data.get("projects"), "projects")
    faqs = ordered(data.get("faqs"), "faqs")

    for slug, relative in PAGE_PATHS.items():
        path = site_root / relative
        text = update_meta(path.read_text(encoding="utf-8"), pages[slug], slug)
        path.write_text(text, encoding="utf-8")

    home_path = site_root / "index.html"
    home = home_path.read_text(encoding="utf-8")
    home = replace_region(home, "SERVICES", service_cards(services, 3))
    home = replace_region(home, "PROJECTS", project_cards(projects, 3, site_root))
    home = replace_region(home, "FAQS", faq_cards(faqs, 3))
    settings = data.get("settings")
    if not isinstance(settings, dict) or not isinstance(settings.get("seo"), dict):
        raise ValueError("settings.seo is required")
    raw_json_ld = required_text(settings["seo"].get("jsonLd"), "settings.seo.jsonLd", 20_000)
    parsed_json_ld = json.loads(raw_json_ld)
    if parsed_json_ld.get("@type") not in {"Organization", "ProfessionalService"}:
        raise ValueError("settings.seo.jsonLd must describe Organization or ProfessionalService")
    rendered_json_ld = json.dumps(parsed_json_ld, ensure_ascii=False, indent=8)
    home = replace_once(
        home,
        r'<script type="application/ld\+json">.*?</script>',
        f'<script type="application/ld+json">\n{rendered_json_ld}\n    </script>',
        "home JSON-LD",
        re.DOTALL,
    )
    home_path.write_text(home, encoding="utf-8")

    services_path = site_root / "paslaugos" / "index.html"
    services_page = replace_region(
        services_path.read_text(encoding="utf-8"),
        "SERVICES",
        service_cards(services, 2),
    )
    services_path.write_text(services_page, encoding="utf-8")

    projects_path = site_root / "darbai" / "index.html"
    projects_page = replace_region(
        projects_path.read_text(encoding="utf-8"),
        "PROJECTS",
        project_cards(projects, 2, site_root),
    )
    projects_path.write_text(projects_page, encoding="utf-8")

    faq_path = site_root / "duk" / "index.html"
    faq_page = replace_region(faq_path.read_text(encoding="utf-8"), "FAQS", faq_cards(faqs))
    faq_page = replace_once(
        faq_page,
        r'<script type="application/ld\+json">.*?</script>',
        f'<script type="application/ld+json">\n{faq_json_ld(faqs)}\n    </script>',
        "FAQ JSON-LD",
        re.DOTALL,
    )
    faq_path.write_text(faq_page, encoding="utf-8")
    write_sitemap(site_root, data.get("exportedAt"))


def main() -> int:
    parser = argparse.ArgumentParser()
    parser.add_argument("--content", required=True, type=Path)
    parser.add_argument("--site-root", required=True, type=Path)
    args = parser.parse_args()
    try:
        if not args.content.is_file() or not args.site_root.is_dir():
            raise ValueError("content file and site root must exist")
        render(args.content.resolve(), args.site_root.resolve())
    except (OSError, ValueError, json.JSONDecodeError) as exc:
        print(f"FAIL: {exc}", file=sys.stderr)
        return 1
    print("PASS: rendered published sitestudio.lt tenant content")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
