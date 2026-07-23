#!/usr/bin/env python3
"""Notify IndexNow about SiteStudio URLs only after a successful Pages deploy."""

from __future__ import annotations

import argparse
import json
import subprocess
import sys
import time
import urllib.error
import urllib.request
import xml.etree.ElementTree as ET
from pathlib import Path


ROOT = Path(__file__).resolve().parents[1]
SITE = ROOT / "site"
ORIGIN = "https://sitestudio.lt"
HOST = "sitestudio.lt"
KEY = "a4f9c2e70d6b41e8b9a3f2d15c7e408a"
ENDPOINT = "https://api.indexnow.org/IndexNow"


def git_text(revision: str, path: str) -> str | None:
    if not revision or set(revision) == {"0"}:
        return None
    result = subprocess.run(
        ["git", "show", f"{revision}:{path}"],
        cwd=ROOT,
        check=False,
        capture_output=True,
        text=True,
    )
    return result.stdout if result.returncode == 0 else None


def sitemap_urls(text: str) -> set[str]:
    try:
        root = ET.fromstring(text)
    except ET.ParseError as exc:
        raise ValueError(f"invalid sitemap: {exc}") from exc
    namespace = {"sm": "http://www.sitemaps.org/schemas/sitemap/0.9"}
    return {
        value
        for node in root.findall("sm:url/sm:loc", namespace)
        if (value := (node.text or "").strip()).startswith(f"{ORIGIN}/")
        or value == f"{ORIGIN}/"
    }


def redirect_urls(text: str | None) -> set[str]:
    if text is None:
        return set()
    try:
        entries = json.loads(text)
    except json.JSONDecodeError as exc:
        raise ValueError(f"invalid redirect map: {exc}") from exc
    urls = set()
    for entry in entries:
        source = entry.get("source") if isinstance(entry, dict) else None
        if isinstance(source, str) and source.startswith("/"):
            urls.add(f"{ORIGIN}{source}")
    return urls


def changed_files(before: str, after: str) -> set[str]:
    if not before or set(before) == {"0"}:
        return set()
    result = subprocess.run(
        ["git", "diff", "--name-only", before, after],
        cwd=ROOT,
        check=True,
        capture_output=True,
        text=True,
    )
    return {line.strip() for line in result.stdout.splitlines() if line.strip()}


def affected_urls(before: str, after: str) -> list[str]:
    current_sitemap = (SITE / "sitemap.xml").read_text(encoding="utf-8")
    current_redirects = (SITE / "redirect-map.json").read_text(encoding="utf-8")
    current = sitemap_urls(current_sitemap) | redirect_urls(current_redirects)

    previous_sitemap = git_text(before, "site/sitemap.xml")
    previous_redirects = git_text(before, "site/redirect-map.json")
    previous = (
        (sitemap_urls(previous_sitemap) if previous_sitemap else set())
        | redirect_urls(previous_redirects)
    )
    changed = changed_files(before, after)

    if not changed:
        return sorted(current | previous)

    global_prefixes = (
        ".github/workflows/",
        "scripts/",
        "site/assets/",
        "site/styles.css",
        "site/contact.js",
    )
    if any(path.startswith(global_prefixes) for path in changed):
        return sorted(current | previous)

    affected = (current - previous) | (previous - current)
    if "content/sitestudio.lt.json" in changed:
        affected |= current | previous
    for path in changed:
        if not path.startswith("site/"):
            continue
        relative = path.removeprefix("site/")
        if relative == "index.html":
            affected.add(f"{ORIGIN}/")
        elif relative.endswith("/index.html"):
            affected.add(f"{ORIGIN}/{relative.removesuffix('index.html')}")
        elif relative in {"sitemap.xml", "redirect-map.json", "robots.txt", "llms.txt", "llms-full.txt"}:
            affected |= current | previous
    return sorted(affected or current)


def validate_urls(urls: list[str]) -> None:
    if not urls or len(urls) > 10_000:
        raise ValueError("IndexNow URL count must be between 1 and 10000")
    for url in urls:
        if not (url == f"{ORIGIN}/" or url.startswith(f"{ORIGIN}/")):
            raise ValueError("IndexNow submission contains a non-SiteStudio URL")


def submit(urls: list[str]) -> None:
    payload = json.dumps(
        {
            "host": HOST,
            "key": KEY,
            "keyLocation": f"{ORIGIN}/{KEY}.txt",
            "urlList": urls,
        }
    ).encode("utf-8")
    request = urllib.request.Request(
        ENDPOINT,
        data=payload,
        headers={"Content-Type": "application/json; charset=utf-8"},
        method="POST",
    )
    last_error: Exception | None = None
    for attempt in range(1, 4):
        try:
            with urllib.request.urlopen(request, timeout=20) as response:
                if response.status not in {200, 202}:
                    raise RuntimeError(f"IndexNow returned HTTP {response.status}")
                print(f"PASS: IndexNow accepted {len(urls)} SiteStudio URL(s)")
                return
        except (urllib.error.URLError, RuntimeError) as exc:
            last_error = exc
            if attempt < 3:
                time.sleep(attempt * 2)
    raise RuntimeError("IndexNow submission failed after three attempts") from last_error


def main() -> int:
    parser = argparse.ArgumentParser()
    parser.add_argument("--before", default="")
    parser.add_argument("--after", default="HEAD")
    parser.add_argument(
        "--dry-run",
        action="store_true",
        help="Validate and print the URL count without making a network request.",
    )
    args = parser.parse_args()
    try:
        key_path = SITE / f"{KEY}.txt"
        if key_path.read_text(encoding="utf-8").strip() != KEY:
            raise ValueError("hosted IndexNow key file is missing or invalid")
        urls = affected_urls(args.before, args.after)
        validate_urls(urls)
        if args.dry_run:
            print(f"PASS: IndexNow dry run prepared {len(urls)} SiteStudio URL(s)")
        else:
            submit(urls)
    except (OSError, ValueError, RuntimeError, subprocess.CalledProcessError) as exc:
        print(f"FAIL: {exc}", file=sys.stderr)
        return 1
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
