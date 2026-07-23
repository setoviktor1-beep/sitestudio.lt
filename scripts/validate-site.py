#!/usr/bin/env python3
"""Deterministic, network-free checks for the SiteStudio static artifact."""

from __future__ import annotations

import json
import re
import sys
import xml.etree.ElementTree as ET
from html.parser import HTMLParser
from pathlib import Path
from urllib.parse import urlparse


PROJECT_ROOT = Path(__file__).resolve().parents[1]
SITE_ROOT = PROJECT_ROOT / "site"
ORIGIN = "https://sitestudio.lt"
PROJECT_PREVIEWS = {
    "/assets/projects/situacija-eu.webp": "https://situacija.eu",
    "/assets/projects/leonamai-lt.webp": "https://www.leonamai.lt",
}
PROJECT_PREVIEW_WIDTH = 1440
PROJECT_PREVIEW_HEIGHT = 900
PROJECT_PREVIEW_MAX_BYTES = 150_000
ROUTES = {
    "/": SITE_ROOT / "index.html",
    "/paslaugos/": SITE_ROOT / "paslaugos" / "index.html",
    "/darbai/": SITE_ROOT / "darbai" / "index.html",
    "/procesas/": SITE_ROOT / "procesas" / "index.html",
    "/kainos/": SITE_ROOT / "kainos" / "index.html",
    "/duk/": SITE_ROOT / "duk" / "index.html",
    "/kontaktai/": SITE_ROOT / "kontaktai" / "index.html",
    "/privatumas/": SITE_ROOT / "privatumas" / "index.html",
}
ERRORS: list[str] = []


def fail(message: str) -> None:
    ERRORS.append(message)


class PageParser(HTMLParser):
    def __init__(self) -> None:
        super().__init__(convert_charrefs=True)
        self.html_lang = ""
        self.title_parts: list[str] = []
        self.in_title = False
        self.headings: list[tuple[int, str]] = []
        self.heading_level: int | None = None
        self.heading_parts: list[str] = []
        self.meta: dict[str, str] = {}
        self.canonicals: list[str] = []
        self.links: list[str] = []
        self.anchors: list[dict[str, str]] = []
        self.current_anchor: dict[str, str] | None = None
        self.linked_images: list[tuple[dict[str, str], dict[str, str] | None]] = []
        self.nested_anchors = 0
        self.ids: set[str] = set()
        self.images: list[dict[str, str]] = []
        self.main_count = 0
        self.iframes = 0
        self.external_scripts: list[str] = []
        self.json_ld_parts: list[str] = []
        self.in_json_ld = False
        self.current_json_ld: list[str] = []

    def handle_starttag(self, tag: str, attrs: list[tuple[str, str | None]]) -> None:
        values = {key: value or "" for key, value in attrs}
        if "id" in values:
            self.ids.add(values["id"])
        if tag == "html":
            self.html_lang = values.get("lang", "")
        elif tag == "title":
            self.in_title = True
        elif re.fullmatch(r"h[1-6]", tag):
            self.heading_level = int(tag[1])
            self.heading_parts = []
        elif tag == "meta":
            key = values.get("name") or values.get("property")
            if key:
                self.meta[key] = values.get("content", "")
        elif tag == "link" and "canonical" in values.get("rel", "").split():
            self.canonicals.append(values.get("href", ""))
        elif tag == "a":
            if self.current_anchor is not None:
                self.nested_anchors += 1
            self.links.append(values.get("href", ""))
            self.anchors.append(values)
            self.current_anchor = values
        elif tag == "img":
            self.images.append(values)
            self.linked_images.append((values, self.current_anchor))
        elif tag == "main":
            self.main_count += 1
        elif tag == "iframe":
            self.iframes += 1
        elif tag == "script":
            script_type = values.get("type", "")
            if script_type == "application/ld+json":
                self.in_json_ld = True
                self.current_json_ld = []
            elif values.get("src"):
                self.external_scripts.append(values["src"])

    def handle_endtag(self, tag: str) -> None:
        if tag == "title":
            self.in_title = False
        elif tag == "a":
            self.current_anchor = None
        elif self.heading_level is not None and tag == f"h{self.heading_level}":
            text = " ".join("".join(self.heading_parts).split())
            self.headings.append((self.heading_level, text))
            self.heading_level = None
            self.heading_parts = []
        elif tag == "script" and self.in_json_ld:
            self.json_ld_parts.append("".join(self.current_json_ld))
            self.in_json_ld = False
            self.current_json_ld = []

    def handle_data(self, data: str) -> None:
        if self.in_title:
            self.title_parts.append(data)
        if self.heading_level is not None:
            self.heading_parts.append(data)
        if self.in_json_ld:
            self.current_json_ld.append(data)

    @property
    def title(self) -> str:
        return " ".join("".join(self.title_parts).split())


def route_for_href(href: str, source: Path) -> tuple[Path | None, str]:
    parsed = urlparse(href)
    if parsed.scheme in {"http", "https", "mailto", "tel"}:
        return None, parsed.fragment
    if href.startswith("#"):
        return source, href[1:]
    path = parsed.path
    if not path:
        return source, parsed.fragment
    if path.startswith("/"):
        relative = path.removeprefix("/")
        target = SITE_ROOT / relative
    else:
        target = source.parent / path
    if path.endswith("/") or target.is_dir():
        target = target / "index.html"
    return target.resolve(), parsed.fragment


def webp_dimensions(path: Path) -> tuple[int, int] | None:
    data = path.read_bytes()
    if len(data) < 30 or data[:4] != b"RIFF" or data[8:12] != b"WEBP":
        return None
    offset = 12
    while offset + 8 <= len(data):
        kind = data[offset : offset + 4]
        size = int.from_bytes(data[offset + 4 : offset + 8], "little")
        payload = data[offset + 8 : offset + 8 + size]
        if kind == b"VP8 " and len(payload) >= 10 and payload[3:6] == b"\x9d\x01\x2a":
            width = int.from_bytes(payload[6:8], "little") & 0x3FFF
            height = int.from_bytes(payload[8:10], "little") & 0x3FFF
            return width, height
        if kind == b"VP8X" and len(payload) >= 10:
            width = int.from_bytes(payload[4:7], "little") + 1
            height = int.from_bytes(payload[7:10], "little") + 1
            return width, height
        offset += 8 + size + (size % 2)
    return None


def validate_page(route: str, path: Path, titles: set[str]) -> PageParser:
    if not path.is_file():
        fail(f"{route}: missing HTML file {path.relative_to(PROJECT_ROOT)}")
        return PageParser()
    if path.stat().st_size > 100_000:
        fail(f"{route}: HTML exceeds 100 KB")
    parser = PageParser()
    parser.feed(path.read_text(encoding="utf-8"))
    if parser.html_lang != "lt":
        fail(f"{route}: html lang must be lt")
    if not parser.title:
        fail(f"{route}: title is missing")
    elif parser.title in titles:
        fail(f"{route}: duplicate title {parser.title!r}")
    else:
        titles.add(parser.title)
    description = parser.meta.get("description", "")
    if not 50 <= len(description) <= 180:
        fail(f"{route}: description length must be 50-180 characters")
    expected_canonical = f"{ORIGIN}{route}"
    if parser.canonicals != [expected_canonical]:
        fail(f"{route}: canonical must be {expected_canonical}")
    for key in ("og:title", "og:description", "og:url", "og:type"):
        if not parser.meta.get(key):
            fail(f"{route}: {key} is missing")
    if parser.meta.get("og:url") != expected_canonical:
        fail(f"{route}: og:url differs from canonical")
    h1_count = sum(level == 1 for level, _ in parser.headings)
    if h1_count != 1:
        fail(f"{route}: expected one h1, found {h1_count}")
    previous = 0
    for level, _ in parser.headings:
        if previous and level > previous + 1:
            fail(f"{route}: heading level jumps from h{previous} to h{level}")
        previous = level
    if parser.main_count != 1:
        fail(f"{route}: expected one main landmark")
    if "main-content" not in parser.ids:
        fail(f"{route}: main-content target is missing")
    if parser.iframes:
        fail(f"{route}: automatically loaded iframe is forbidden")
    for source in parser.external_scripts:
        if source != "/contact.js" or route != "/kontaktai/":
            fail(f"{route}: JavaScript source is not allowlisted: {source}")
        elif not (SITE_ROOT / source.removeprefix("/")).is_file():
            fail(f"{route}: local JavaScript file is missing: {source}")
    if parser.nested_anchors:
        fail(f"{route}: nested anchor elements are forbidden")
    for image in parser.images:
        if not image.get("width") or not image.get("height"):
            fail(f"{route}: image is missing intrinsic dimensions")
        if "alt" not in image:
            fail(f"{route}: image is missing alt")
        src = image.get("src", "")
        parsed_src = urlparse(src)
        if not src:
            fail(f"{route}: image is missing src")
        elif parsed_src.scheme in {"http", "https"}:
            fail(f"{route}: remote image hotlink is forbidden: {src}")
        elif src.startswith("/"):
            image_path = (SITE_ROOT / src.removeprefix("/")).resolve()
            if not image_path.is_file():
                fail(f"{route}: image file is missing: {src}")
    for raw_json in parser.json_ld_parts:
        try:
            json.loads(raw_json)
        except json.JSONDecodeError as exc:
            fail(f"{route}: invalid JSON-LD: {exc}")
    for href in parser.links:
        if not href or href.startswith(("javascript:", "data:")):
            fail(f"{route}: unsafe or empty href {href!r}")
            continue
        target, fragment = route_for_href(href, path)
        if target is None:
            continue
        try:
            target.relative_to(SITE_ROOT.resolve())
        except ValueError:
            fail(f"{route}: link leaves site root: {href}")
            continue
        if not target.is_file():
            fail(f"{route}: broken internal link {href}")
            continue
        if fragment:
            target_parser = PageParser()
            target_parser.feed(target.read_text(encoding="utf-8"))
            if fragment not in target_parser.ids:
                fail(f"{route}: missing fragment target {href}")
    return parser


def validate_project_previews(parsed_pages: dict[str, PageParser]) -> None:
    for src, href in PROJECT_PREVIEWS.items():
        path = SITE_ROOT / src.removeprefix("/")
        if not path.is_file():
            fail(f"project preview is missing: {src}")
            continue
        if path.stat().st_size > PROJECT_PREVIEW_MAX_BYTES:
            fail(f"{src}: exceeds {PROJECT_PREVIEW_MAX_BYTES} bytes")
        dimensions = webp_dimensions(path)
        if dimensions != (PROJECT_PREVIEW_WIDTH, PROJECT_PREVIEW_HEIGHT):
            fail(f"{src}: expected {PROJECT_PREVIEW_WIDTH}x{PROJECT_PREVIEW_HEIGHT}, found {dimensions}")
        for route in ("/", "/darbai/"):
            images = [image for image in parsed_pages[route].images if image.get("src") == src]
            if len(images) != 1:
                fail(f"{route}: expected one {src} image, found {len(images)}")
                continue
            image = images[0]
            expected_attrs = {
                "width": str(PROJECT_PREVIEW_WIDTH),
                "height": str(PROJECT_PREVIEW_HEIGHT),
                "loading": "lazy",
                "decoding": "async",
            }
            for name, value in expected_attrs.items():
                if image.get(name) != value:
                    fail(f"{route}: {src} must have {name}={value!r}")
            if not image.get("alt", "").strip():
                fail(f"{route}: {src} must have meaningful alt text")
            anchors = [anchor for anchor in parsed_pages[route].anchors if anchor.get("href") == href]
            if len(anchors) != 1:
                fail(f"{route}: expected one whole-card link to {href}, found {len(anchors)}")
                continue
            for anchor in anchors:
                if "work-card-whole" not in anchor.get("class", "").split():
                    fail(f"{route}: project link to {href} must cover the whole card")
                if anchor.get("target") != "_blank":
                    fail(f"{route}: project link to {href} must open in a new tab")
                if "naujame lange" not in anchor.get("aria-label", ""):
                    fail(f"{route}: project link to {href} must announce the new window")
                if set(anchor.get("rel", "").split()) != {"noopener", "noreferrer"}:
                    fail(f"{route}: project link to {href} needs rel='noopener noreferrer'")
            linked_images = [
                linked_anchor
                for linked_image, linked_anchor in parsed_pages[route].linked_images
                if linked_image.get("src") == src
            ]
            if len(linked_images) != 1 or linked_images[0] is None:
                fail(f"{route}: {src} must be wrapped in one anchor")
            elif linked_images[0].get("href") != href:
                fail(f"{route}: {src} must link to {href}")


def validate_sitemap() -> None:
    sitemap = SITE_ROOT / "sitemap.xml"
    try:
        root = ET.parse(sitemap).getroot()
    except (ET.ParseError, OSError) as exc:
        fail(f"sitemap.xml: {exc}")
        return
    namespace = {"sm": "http://www.sitemaps.org/schemas/sitemap/0.9"}
    locations = [node.text or "" for node in root.findall("sm:url/sm:loc", namespace)]
    expected = [f"{ORIGIN}{route}" for route in ROUTES]
    if len(locations) != len(set(locations)):
        fail("sitemap.xml: duplicate URLs")
    if set(locations) != set(expected):
        fail("sitemap.xml: URLs differ from published route set")
    for node in root.findall("sm:url", namespace):
        lastmod = node.findtext("sm:lastmod", default="", namespaces=namespace)
        if not re.fullmatch(r"\d{4}-\d{2}-\d{2}", lastmod):
            fail("sitemap.xml: every URL needs YYYY-MM-DD lastmod")


def validate_css() -> None:
    css = SITE_ROOT / "styles.css"
    text = css.read_text(encoding="utf-8")
    if css.stat().st_size > 80_000:
        fail("styles.css exceeds 80 KB")
    if text.count("{") != text.count("}"):
        fail("styles.css has unbalanced braces")
    if re.search(r"@import|url\(\s*['\"]?https?://", text, re.IGNORECASE):
        fail("styles.css must not load remote assets")
    for declaration in ("aspect-ratio: 16 / 10", "width: 100%", "height: 100%", "object-fit: cover"):
        if declaration not in text:
            fail(f"styles.css: project preview rule is missing {declaration}")


def validate_workflows() -> None:
    workflow_root = PROJECT_ROOT / ".github" / "workflows"
    for path in sorted(workflow_root.glob("*.y*ml")):
        for number, line in enumerate(path.read_text(encoding="utf-8").splitlines(), start=1):
            if re.match(r"^\s*(?:-\s*)?uses:", line) and not re.search(r"@[0-9a-f]{40}(?:\s+#.*)?$", line):
                fail(f"{path.relative_to(PROJECT_ROOT)}:{number}: action is not pinned to a full SHA")


def validate_forbidden_files() -> None:
    forbidden_names = {".env", ".env.local", ".env.production", "results.tsv"}
    forbidden_suffixes = {".pem", ".key", ".p12", ".dump", ".sqlite", ".sqlite3"}
    for path in PROJECT_ROOT.rglob("*"):
        if ".git" in path.parts:
            continue
        if path.is_file() and (path.name in forbidden_names or path.suffix in forbidden_suffixes):
            fail(f"forbidden file: {path.relative_to(PROJECT_ROOT)}")


def main() -> int:
    titles: set[str] = set()
    parsed_pages = {route: validate_page(route, path, titles) for route, path in ROUTES.items()}
    validate_project_previews(parsed_pages)
    home_types = []
    for raw in parsed_pages["/"].json_ld_parts:
        try:
            home_types.append(json.loads(raw).get("@type"))
        except json.JSONDecodeError:
            pass
    if not {"Organization", "ProfessionalService"}.intersection(home_types):
        fail("/: Organization or ProfessionalService JSON-LD is missing")
    faq_types = []
    for raw in parsed_pages["/duk/"].json_ld_parts:
        try:
            faq_types.append(json.loads(raw).get("@type"))
        except json.JSONDecodeError:
            pass
    if "FAQPage" not in faq_types:
        fail("/duk/: FAQPage JSON-LD is missing")

    error_page = SITE_ROOT / "404.html"
    error_parser = PageParser()
    error_parser.feed(error_page.read_text(encoding="utf-8"))
    if error_parser.meta.get("robots") != "noindex,follow":
        fail("404.html: robots must be noindex,follow")
    if sum(level == 1 for level, _ in error_parser.headings) != 1:
        fail("404.html: expected one h1")

    validate_sitemap()
    validate_css()
    validate_workflows()
    validate_forbidden_files()

    robots = (SITE_ROOT / "robots.txt").read_text(encoding="utf-8")
    if f"Sitemap: {ORIGIN}/sitemap.xml" not in robots:
        fail("robots.txt: canonical sitemap is missing")
    if (SITE_ROOT / "CNAME").read_text(encoding="utf-8").strip() != "sitestudio.lt":
        fail("CNAME must contain sitestudio.lt")
    scripts = {
        path.relative_to(SITE_ROOT).as_posix()
        for path in SITE_ROOT.rglob("*.js")
        if path.is_file()
    }
    if scripts != {"contact.js"}:
        fail(f"client-side JavaScript allowlist differs: {sorted(scripts)}")

    admin = (SITE_ROOT / "admin" / "index.html").read_text(encoding="utf-8")
    expected_admin = "https://cms.sitestudio.lt/admin"
    if f'content="0; url={expected_admin}"' not in admin:
        fail("admin redirect target is missing")
    if f'href="{expected_admin}"' not in admin:
        fail("admin fallback link is missing")

    if ERRORS:
        for error in ERRORS:
            print(f"FAIL: {error}", file=sys.stderr)
        print(f"Result: {len(ERRORS)} failure(s)", file=sys.stderr)
        return 1
    print(f"PASS: {len(ROUTES)} routes, HTML, CSS, links, sitemap, SEO and workflow pins")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
