#!/usr/bin/env python3
"""Deterministic, network-free validation for the generated SiteStudio artifact."""

from __future__ import annotations

import html
import json
import re
import struct
import sys
import xml.etree.ElementTree as ET
from html.parser import HTMLParser
from pathlib import Path
from urllib.parse import urlparse


PROJECT_ROOT = Path(__file__).resolve().parents[1]
SITE_ROOT = PROJECT_ROOT / "site"
ORIGIN = "https://sitestudio.lt"
BASE_ROUTES = (
    "/",
    "/paslaugos/",
    "/darbai/",
    "/procesas/",
    "/kainos/",
    "/duk/",
    "/kontaktai/",
    "/privatumas/",
    "/apie/",
)
SERVICE_SLUGS = (
    "svetainiu-kurimas",
    "verslo-svetaines",
    "landing-page-kurimas",
    "payload-cms",
    "svetainiu-atnaujinimas",
    "seo-aeo-optimizavimas",
)
PROJECTS = {
    "situacija-eu": {
        "external": "https://situacija.eu",
        "desktop": "/assets/projects/situacija-eu.webp",
        "mobile": "/assets/projects/situacija-eu-mobile.webp",
    },
    "leonamai-lt": {
        "external": "https://www.leonamai.lt",
        "desktop": "/assets/projects/leonamai-lt.webp",
        "mobile": "/assets/projects/leonamai-lt-mobile.webp",
    },
}
ROUTES = {
    **{route: SITE_ROOT / ("index.html" if route == "/" else route.removeprefix("/") + "index.html") for route in BASE_ROUTES},
    **{
        f"/{slug}/": SITE_ROOT / slug / "index.html"
        for slug in SERVICE_SLUGS
    },
    **{
        f"/darbai/{slug}/": SITE_ROOT / "darbai" / slug / "index.html"
        for slug in PROJECTS
    },
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
        self.http_equiv: dict[str, str] = {}
        self.canonicals: list[str] = []
        self.hreflang: list[str] = []
        self.links: list[str] = []
        self.anchors: list[dict[str, str]] = []
        self.anchor_stack: list[dict[str, str]] = []
        self.linked_images: list[tuple[dict[str, str], dict[str, str] | None]] = []
        self.nested_anchors = 0
        self.ids: set[str] = set()
        self.images: list[dict[str, str]] = []
        self.sources: list[dict[str, str]] = []
        self.main_count = 0
        self.iframes = 0
        self.external_scripts: list[str] = []
        self.json_ld_parts: list[str] = []
        self.in_json_ld = False
        self.current_json_ld: list[str] = []
        self.text_parts: list[str] = []

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
            if values.get("http-equiv"):
                self.http_equiv[values["http-equiv"].lower()] = values.get("content", "")
        elif tag == "link":
            rel = values.get("rel", "").split()
            if "canonical" in rel:
                self.canonicals.append(values.get("href", ""))
            if values.get("hreflang"):
                self.hreflang.append(values["hreflang"])
        elif tag == "a":
            if self.anchor_stack:
                self.nested_anchors += 1
            self.links.append(values.get("href", ""))
            self.anchors.append(values)
            self.anchor_stack.append(values)
        elif tag == "img":
            self.images.append(values)
            self.linked_images.append((values, self.anchor_stack[-1] if self.anchor_stack else None))
        elif tag == "source":
            self.sources.append(values)
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
        elif tag == "a" and self.anchor_stack:
            self.anchor_stack.pop()
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
        self.text_parts.append(data)
        if self.in_title:
            self.title_parts.append(data)
        if self.heading_level is not None:
            self.heading_parts.append(data)
        if self.in_json_ld:
            self.current_json_ld.append(data)

    @property
    def title(self) -> str:
        return " ".join("".join(self.title_parts).split())

    @property
    def visible_text(self) -> str:
        return " ".join(" ".join(self.text_parts).split())


def route_for_href(href: str, source: Path) -> tuple[Path | None, str]:
    parsed = urlparse(href)
    if parsed.scheme in {"http", "https", "mailto", "tel"}:
        return None, parsed.fragment
    if href.startswith("#"):
        return source, href[1:]
    path = parsed.path
    if not path:
        return source, parsed.fragment
    target = SITE_ROOT / path.removeprefix("/") if path.startswith("/") else source.parent / path
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
            return (
                int.from_bytes(payload[4:7], "little") + 1,
                int.from_bytes(payload[7:10], "little") + 1,
            )
        offset += 8 + size + (size % 2)
    return None


def png_dimensions(path: Path) -> tuple[int, int] | None:
    data = path.read_bytes()[:24]
    if len(data) != 24 or data[:8] != b"\x89PNG\r\n\x1a\n":
        return None
    return struct.unpack(">II", data[16:24])


def parse_srcset(value: str) -> list[str]:
    return [candidate.strip().split()[0] for candidate in value.split(",") if candidate.strip()]


def local_asset(url: str) -> Path | None:
    parsed = urlparse(url)
    if parsed.scheme == "https" and parsed.netloc == "sitestudio.lt":
        return SITE_ROOT / parsed.path.removeprefix("/")
    if parsed.scheme:
        return None
    if parsed.path.startswith("/"):
        return SITE_ROOT / parsed.path.removeprefix("/")
    return None


def graph_nodes(schema: object) -> list[dict[str, object]]:
    if not isinstance(schema, dict):
        return []
    graph = schema.get("@graph")
    if isinstance(graph, list):
        return [node for node in graph if isinstance(node, dict)]
    return [schema]


def node_types(node: dict[str, object]) -> set[str]:
    raw = node.get("@type")
    if isinstance(raw, str):
        return {raw}
    if isinstance(raw, list):
        return {value for value in raw if isinstance(value, str)}
    return set()


def nodes_by_type(nodes: list[dict[str, object]], expected: str) -> list[dict[str, object]]:
    return [node for node in nodes if expected in node_types(node)]


def validate_schema(route: str, parser: PageParser) -> None:
    if len(parser.json_ld_parts) != 1:
        fail(f"{route}: expected one coherent JSON-LD graph")
        return
    try:
        schema = json.loads(parser.json_ld_parts[0])
    except json.JSONDecodeError as exc:
        fail(f"{route}: invalid JSON-LD: {exc}")
        return
    if not isinstance(schema, dict) or schema.get("@context") != "https://schema.org":
        fail(f"{route}: JSON-LD context must be https://schema.org")
        return
    nodes = graph_nodes(schema)
    types = {kind for node in nodes for kind in node_types(node)}
    forbidden = {"Review", "AggregateRating"}
    if types & forbidden:
        fail(f"{route}: fabricated rating/review schema is forbidden")
    ids = [node.get("@id") for node in nodes if isinstance(node.get("@id"), str)]
    if len(ids) != len(set(ids)):
        fail(f"{route}: JSON-LD @id values must be unique")
    if not nodes_by_type(nodes, "WebPage") and not nodes_by_type(nodes, "AboutPage") and not nodes_by_type(nodes, "ContactPage") and not nodes_by_type(nodes, "CollectionPage"):
        fail(f"{route}: WebPage-compatible JSON-LD node is missing")

    if route == "/":
        required_types = {"Organization", "ProfessionalService", "WebSite", "WebPage", "Service", "FAQPage"}
        missing = required_types - types
        if missing:
            fail(f"/: homepage graph is missing types {sorted(missing)}")
        if len(nodes_by_type(nodes, "Service")) != len(SERVICE_SLUGS):
            fail("/: homepage graph must contain one Service node per public service")
        organizations = nodes_by_type(nodes, "Organization")
        if len(organizations) != 1:
            fail("/: homepage graph needs one Organization node")
        else:
            organization = organizations[0]
            for key in ("areaServed", "contactPoint", "hasOfferCatalog"):
                if key not in organization:
                    fail(f"/: Organization.{key} is missing")
            if "sameAs" in organization:
                fail("/: sameAs must not be published without a verified public profile")
            if "founder" in organization or nodes_by_type(nodes, "Person"):
                fail("/: founder Person must not be published without visible verified identity")
        websites = nodes_by_type(nodes, "WebSite")
        if len(websites) != 1 or "publisher" not in websites[0]:
            fail("/: WebSite.publisher is missing")
        webpages = nodes_by_type(nodes, "WebPage")
        if len(webpages) != 1:
            fail("/: homepage needs one WebPage node")
        else:
            for key in ("isPartOf", "about", "mainEntity", "publisher"):
                if key not in webpages[0]:
                    fail(f"/: WebPage.{key} is missing")
        faq_nodes = nodes_by_type(nodes, "FAQPage")
        if len(faq_nodes) != 1 or len(faq_nodes[0].get("mainEntity", [])) != 3:
            fail("/: homepage FAQPage must match the three visible FAQs")

    if route in {f"/{slug}/" for slug in SERVICE_SLUGS}:
        if not {"Service", "WebPage", "BreadcrumbList"}.issubset(types):
            fail(f"{route}: Service + WebPage + BreadcrumbList graph is required")
        services = nodes_by_type(nodes, "Service")
        if len(services) != 1:
            fail(f"{route}: exactly one Service node is required")
        else:
            for key in ("provider", "areaServed", "serviceType", "url"):
                if key not in services[0]:
                    fail(f"{route}: Service.{key} is missing")

    if route.startswith("/darbai/") and route != "/darbai/":
        if not {"Article", "WebPage", "BreadcrumbList", "ImageObject"}.issubset(types):
            fail(f"{route}: Article + WebPage + BreadcrumbList + ImageObject graph is required")
        articles = nodes_by_type(nodes, "Article")
        if len(articles) != 1:
            fail(f"{route}: exactly one Article node is required")
        else:
            for key in (
                "headline",
                "description",
                "author",
                "datePublished",
                "dateModified",
                "image",
                "keywords",
                "mainEntityOfPage",
            ):
                if not articles[0].get(key):
                    fail(f"{route}: Article.{key} is missing")

    if route == "/duk/":
        faq_nodes = nodes_by_type(nodes, "FAQPage")
        if len(faq_nodes) != 1:
            fail("/duk/: FAQPage node is missing")
        else:
            for question in faq_nodes[0].get("mainEntity", []):
                if not isinstance(question, dict):
                    fail("/duk/: FAQ mainEntity must contain Question objects")
                    continue
                name = question.get("name")
                answer = question.get("acceptedAnswer")
                text = answer.get("text") if isinstance(answer, dict) else None
                if not isinstance(name, str) or name not in parser.visible_text:
                    fail("/duk/: FAQ question is not visible")
                if not isinstance(text, str) or text not in parser.visible_text:
                    fail("/duk/: FAQ answer is not visible")

    breadcrumbs = nodes_by_type(nodes, "BreadcrumbList")
    if route != "/" and len(breadcrumbs) != 1:
        fail(f"{route}: exactly one BreadcrumbList is required")
    for breadcrumb in breadcrumbs:
        items = breadcrumb.get("itemListElement")
        if not isinstance(items, list) or len(items) < 2:
            fail(f"{route}: BreadcrumbList needs at least two items")
            continue
        for position, item in enumerate(items, start=1):
            if not isinstance(item, dict) or item.get("position") != position or not item.get("name"):
                fail(f"{route}: invalid BreadcrumbList item at position {position}")


def validate_page(route: str, path: Path, titles: set[str]) -> PageParser:
    parser = PageParser()
    if not path.is_file():
        fail(f"{route}: missing HTML file {path.relative_to(PROJECT_ROOT)}")
        return parser
    if path.stat().st_size > 120_000:
        fail(f"{route}: HTML exceeds 120 KB")
    source = path.read_text(encoding="utf-8")
    parser.feed(source)
    if parser.html_lang != "lt":
        fail(f"{route}: html lang must be lt")
    if parser.hreflang:
        fail(f"{route}: hreflang is forbidden until a complete second language exists")
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
    if not parser.meta.get("robots", "").startswith("index,follow"):
        fail(f"{route}: robots must explicitly allow indexing")
    for key in (
        "og:title",
        "og:description",
        "og:url",
        "og:type",
        "og:image",
        "og:image:width",
        "og:image:height",
        "og:image:alt",
        "twitter:card",
        "twitter:title",
        "twitter:description",
        "twitter:image",
        "twitter:image:alt",
    ):
        if not parser.meta.get(key):
            fail(f"{route}: {key} is missing")
    if parser.meta.get("og:url") != expected_canonical:
        fail(f"{route}: og:url differs from canonical")
    if parser.meta.get("twitter:card") != "summary_large_image":
        fail(f"{route}: Twitter card must use summary_large_image")
    og_asset = local_asset(parser.meta.get("og:image", ""))
    if og_asset is None or not og_asset.is_file():
        fail(f"{route}: Open Graph image must be a local absolute image")
    h1_count = sum(level == 1 for level, _ in parser.headings)
    if h1_count != 1:
        fail(f"{route}: expected one h1, found {h1_count}")
    previous = 0
    for level, _ in parser.headings:
        if previous and level > previous + 1:
            fail(f"{route}: heading level jumps from h{previous} to h{level}")
        previous = level
    if parser.main_count != 1 or "main-content" not in parser.ids:
        fail(f"{route}: one main#main-content landmark is required")
    if parser.iframes:
        fail(f"{route}: automatically loaded iframe is forbidden")
    for script in parser.external_scripts:
        if script != "/contact.js" or route != "/kontaktai/":
            fail(f"{route}: JavaScript source is not allowlisted: {script}")
    if parser.nested_anchors:
        fail(f"{route}: nested anchor elements are forbidden")
    for image in parser.images:
        if not image.get("width") or not image.get("height"):
            fail(f"{route}: image is missing intrinsic dimensions")
        if "alt" not in image or not image.get("alt", "").strip():
            fail(f"{route}: image is missing meaningful alt")
        src = image.get("src", "")
        asset = local_asset(src)
        if asset is None or not asset.is_file():
            fail(f"{route}: image must be a present local asset: {src}")
        if image.get("srcset"):
            if not image.get("sizes"):
                fail(f"{route}: responsive image needs sizes")
            for candidate in parse_srcset(image["srcset"]):
                candidate_asset = local_asset(candidate)
                if candidate_asset is None or not candidate_asset.is_file():
                    fail(f"{route}: srcset asset is missing: {candidate}")
    for source_attrs in parser.sources:
        for candidate in parse_srcset(source_attrs.get("srcset", "")):
            candidate_asset = local_asset(candidate)
            if candidate_asset is None or not candidate_asset.is_file():
                fail(f"{route}: source srcset asset is missing: {candidate}")
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
    validate_schema(route, parser)
    return parser


def validate_project_images(parsed: dict[str, PageParser]) -> None:
    for slug, config in PROJECTS.items():
        desktop = SITE_ROOT / config["desktop"].removeprefix("/")
        mobile = SITE_ROOT / config["mobile"].removeprefix("/")
        for path, dimensions in ((desktop, (1440, 900)), (mobile, (390, 844))):
            if not path.is_file():
                fail(f"project screenshot is missing: {path.relative_to(SITE_ROOT)}")
                continue
            if path.stat().st_size > 150_000:
                fail(f"{path.relative_to(SITE_ROOT)} exceeds 150 KB")
            if webp_dimensions(path) != dimensions:
                fail(f"{path.relative_to(SITE_ROOT)} must be {dimensions[0]}x{dimensions[1]}")
        for route in ("/", "/darbai/"):
            images = [image for image in parsed[route].images if image.get("src") == config["desktop"]]
            if len(images) != 1:
                fail(f"{route}: expected one {config['desktop']} card image")
            anchors = [anchor for anchor in parsed[route].anchors if anchor.get("href") == config["external"]]
            if len(anchors) != 1:
                fail(f"{route}: expected one whole-card external link for {slug}")
            else:
                anchor = anchors[0]
                if "work-card-whole" not in anchor.get("class", "").split():
                    fail(f"{route}: {slug} external link must cover the project card")
                if anchor.get("target") != "_blank":
                    fail(f"{route}: {slug} external link must open a new tab")
                if set(anchor.get("rel", "").split()) != {"noopener", "noreferrer"}:
                    fail(f"{route}: {slug} external link needs noopener noreferrer")
                if "naujame lange" not in anchor.get("aria-label", ""):
                    fail(f"{route}: {slug} link must announce the new window")
            case_links = [
                anchor
                for anchor in parsed[route].anchors
                if anchor.get("href") == f"/darbai/{slug}/"
            ]
            if len(case_links) != 1:
                fail(f"{route}: internal project description link is missing for {slug}")
        detail_route = f"/darbai/{slug}/"
        for expected_src in (config["desktop"], config["mobile"]):
            images = [image for image in parsed[detail_route].images if image.get("src") == expected_src]
            if len(images) != 1 or not images[0].get("srcset") or not images[0].get("sizes"):
                fail(f"{detail_route}: responsive project image contract is incomplete for {expected_src}")
        external_anchors = [
            anchor
            for anchor in parsed[detail_route].anchors
            if anchor.get("href") == config["external"]
        ]
        if len(external_anchors) < 3:
            fail(f"{detail_route}: screenshots and text need safe live-site links")
        for anchor in external_anchors:
            if anchor.get("target") != "_blank" or set(anchor.get("rel", "").split()) != {
                "noopener",
                "noreferrer",
            }:
                fail(f"{detail_route}: every live-site link must be safely external")


def validate_redirects(sitemap_urls: set[str]) -> set[str]:
    path = SITE_ROOT / "redirect-map.json"
    try:
        entries = json.loads(path.read_text(encoding="utf-8"))
    except (OSError, json.JSONDecodeError) as exc:
        fail(f"redirect-map.json: {exc}")
        return set()
    if not isinstance(entries, list):
        fail("redirect-map.json must contain an array")
        return set()
    sources: set[str] = set()
    for entry in entries:
        if not isinstance(entry, dict):
            fail("redirect-map.json entries must be objects")
            continue
        source = entry.get("source")
        behavior = entry.get("behavior")
        target = entry.get("target")
        if not isinstance(source, str) or not source.startswith("/") or not source.endswith("/"):
            fail("redirect-map.json source must be a root-relative trailing-slash path")
            continue
        if source in sources:
            fail(f"redirect-map.json duplicate source: {source}")
        sources.add(source)
        if f"{ORIGIN}{source}" in sitemap_urls:
            fail(f"noindex migration URL leaked into sitemap: {source}")
        html_path = SITE_ROOT / source.removeprefix("/") / "index.html"
        if not html_path.is_file():
            fail(f"migration page is missing: {source}")
            continue
        parser = PageParser()
        parser.feed(html_path.read_text(encoding="utf-8"))
        if not parser.meta.get("robots", "").startswith("noindex,follow"):
            fail(f"{source}: migration page must be noindex,follow")
        if parser.main_count != 1 or sum(level == 1 for level, _ in parser.headings) != 1:
            fail(f"{source}: migration page needs one main and h1")
        if behavior == "redirect":
            if not isinstance(target, str):
                fail(f"{source}: redirect target is missing")
                continue
            absolute = f"{ORIGIN}{target}"
            if parser.canonicals != [absolute]:
                fail(f"{source}: redirect canonical must be {absolute}")
            if parser.http_equiv.get("refresh") != f"0; url={absolute}":
                fail(f"{source}: instant static redirect is missing")
            if target not in parser.links:
                fail(f"{source}: redirect fallback link is missing")
        elif behavior in {"removed", "legal-draft"}:
            if parser.canonicals != [f"{ORIGIN}{source}"]:
                fail(f"{source}: noindex removal page needs a self canonical")
            if "refresh" in parser.http_equiv:
                fail(f"{source}: removal page must not redirect to an unrelated page")
        else:
            fail(f"{source}: unknown migration behavior {behavior!r}")
    required = {
        "/en/",
        "/en/privacy-policy/",
        "/lt/privacy-policy/",
        "/lt/portfolio/london-handyman-pro/",
        "/en/portfolio/london-handyman-pro/",
        "/en/portfolio/ai-audit-saas/",
        "/paslaugu-teikimo-salygos/",
    }
    if not required.issubset(sources):
        fail(f"redirect map misses required legacy paths: {sorted(required - sources)}")
    return sources


def validate_sitemap(parsed: dict[str, PageParser]) -> set[str]:
    sitemap = SITE_ROOT / "sitemap.xml"
    try:
        root = ET.parse(sitemap).getroot()
    except (ET.ParseError, OSError) as exc:
        fail(f"sitemap.xml: {exc}")
        return set()
    namespace = {
        "sm": "http://www.sitemaps.org/schemas/sitemap/0.9",
        "image": "http://www.google.com/schemas/sitemap-image/1.1",
    }
    locations = [node.text or "" for node in root.findall("sm:url/sm:loc", namespace)]
    expected = {f"{ORIGIN}{route}" for route in ROUTES}
    if len(locations) != len(set(locations)):
        fail("sitemap.xml: duplicate URLs")
    if set(locations) != expected:
        fail(f"sitemap.xml: URLs differ from canonical route set")
    for node in root.findall("sm:url", namespace):
        loc = node.findtext("sm:loc", default="", namespaces=namespace)
        lastmod = node.findtext("sm:lastmod", default="", namespaces=namespace)
        if not re.fullmatch(r"\d{4}-\d{2}-\d{2}", lastmod):
            fail(f"sitemap.xml: invalid lastmod for {loc}")
        route = loc.removeprefix(ORIGIN)
        if route not in parsed or parsed[route].canonicals != [loc]:
            fail(f"sitemap.xml: {loc} is missing, noindex, or noncanonical")
        images = node.findall("image:image", namespace)
        if route.startswith("/darbai/") and route != "/darbai/":
            if len(images) != 1:
                fail(f"sitemap.xml: project route {route} needs one image entry")
            elif not images[0].findtext("image:loc", default="", namespaces=namespace).startswith(
                f"{ORIGIN}/assets/projects/"
            ):
                fail(f"sitemap.xml: project image URL is invalid for {route}")
        elif images:
            fail(f"sitemap.xml: unexpected image entry for {route}")
    return set(locations)


def validate_robots_and_llms() -> None:
    robots = (SITE_ROOT / "robots.txt").read_text(encoding="utf-8")
    for agent in ("Googlebot", "Bingbot", "OAI-SearchBot", "ChatGPT-User", "GPTBot"):
        if f"User-agent: {agent}\nAllow: /" not in robots:
            fail(f"robots.txt: explicit allow rule is missing for {agent}")
    if "User-agent: OAI-SearchBot" not in robots or "User-agent: GPTBot" not in robots:
        fail("robots.txt: search and training crawlers must have separate policies")
    if f"Sitemap: {ORIGIN}/sitemap.xml" not in robots:
        fail("robots.txt: canonical sitemap is missing")
    if re.search(r"cms\.sitestudio\.lt|/admin|/api", robots, re.IGNORECASE):
        fail("robots.txt must not disclose private CMS routes")
    required_links = (
        "/paslaugos/",
        "/darbai/",
        "/procesas/",
        "/kainos/",
        "/duk/",
        "/apie/",
        "/kontaktai/",
    )
    for filename in ("llms.txt", "llms-full.txt"):
        path = SITE_ROOT / filename
        if not path.is_file():
            fail(f"{filename} is missing")
            continue
        text = path.read_text(encoding="utf-8")
        if not text.startswith("# SiteStudio"):
            fail(f"{filename}: CommonMark H1 must identify SiteStudio")
        if not re.search(r"nėra .{0,80}garantija", text, re.IGNORECASE):
            fail(f"{filename}: must not claim guaranteed AI or search visibility")
        if re.search(
            r"cms\.sitestudio\.lt|/admin|/api/|token|\.env|privat(?:us|i) repo|VPS|Docker",
            text,
            re.IGNORECASE,
        ):
            fail(f"{filename}: private CMS or infrastructure information leaked")
    short = (SITE_ROOT / "llms.txt").read_text(encoding="utf-8")
    for route in required_links:
        if f"{ORIGIN}{route}" not in short:
            fail(f"llms.txt: required public link is missing: {route}")
    for domain in ("situacija.eu", "leonamai.lt"):
        if domain not in short:
            fail(f"llms.txt: public work example is missing: {domain}")


def validate_assets_and_css() -> None:
    og = SITE_ROOT / "assets" / "og" / "sitestudio-og.png"
    logo = SITE_ROOT / "assets" / "og" / "sitestudio-logo.png"
    if not og.is_file() or png_dimensions(og) != (1200, 630):
        fail("SiteStudio Open Graph PNG must be 1200x630")
    if not logo.is_file() or png_dimensions(logo) != (512, 512):
        fail("SiteStudio logo PNG must be 512x512")
    css = SITE_ROOT / "styles.css"
    text = css.read_text(encoding="utf-8")
    if css.stat().st_size > 100_000:
        fail("styles.css exceeds 100 KB")
    if text.count("{") != text.count("}"):
        fail("styles.css has unbalanced braces")
    if re.search(r"@import|url\(\s*['\"]?https?://", text, re.IGNORECASE):
        fail("styles.css must not load remote assets")
    for declaration in (
        "aspect-ratio: 16 / 10",
        "width: 100%",
        "height: 100%",
        "object-fit: cover",
        "@media (prefers-reduced-motion: reduce)",
        ":focus-visible",
    ):
        if declaration not in text:
            fail(f"styles.css: required responsive/accessibility rule is missing: {declaration}")


def validate_workflow() -> None:
    workflow_root = PROJECT_ROOT / ".github" / "workflows"
    for path in sorted(workflow_root.glob("*.y*ml")):
        for number, line in enumerate(path.read_text(encoding="utf-8").splitlines(), start=1):
            if re.match(r"^\s*(?:-\s*)?uses:", line) and not re.search(
                r"@[0-9a-f]{40}(?:\s+#.*)?$", line
            ):
                fail(f"{path.relative_to(PROJECT_ROOT)}:{number}: action is not pinned to a full SHA")
    pages = (workflow_root / "pages.yml").read_text(encoding="utf-8")
    required = (
        "shellcheck",
        "actionlint",
        "pa11y-ci",
        "lhci",
        "smoke-browser.mjs",
        "submit-indexnow.py",
        "needs: deploy",
    )
    for marker in required:
        if marker not in pages:
            fail(f"pages workflow is missing quality/deploy marker: {marker}")


def validate_indexnow() -> None:
    keys = [
        path
        for path in SITE_ROOT.glob("*.txt")
        if re.fullmatch(r"[0-9a-f]{32}\.txt", path.name)
    ]
    if len(keys) != 1:
        fail("exactly one public 32-character IndexNow verification file is required")
        return
    key = keys[0].stem
    if keys[0].read_text(encoding="utf-8").strip() != key:
        fail("IndexNow verification filename and file content must match")
    script = PROJECT_ROOT / "scripts" / "submit-indexnow.py"
    if not script.is_file() or key not in script.read_text(encoding="utf-8"):
        fail("IndexNow submission script must use the hosted verification key")


def validate_no_unmanaged_html(indexable: set[str], noindex: set[str]) -> None:
    allowed = indexable | noindex | {"/admin/"}
    discovered = {
        "/" if path == SITE_ROOT / "index.html" else f"/{path.parent.relative_to(SITE_ROOT).as_posix()}/"
        for path in SITE_ROOT.rglob("index.html")
    }
    extras = discovered - allowed
    if extras:
        fail(f"unmanaged HTML routes found: {sorted(extras)}")


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
    parsed = {route: validate_page(route, path, titles) for route, path in ROUTES.items()}
    validate_project_images(parsed)
    sitemap_urls = validate_sitemap(parsed)
    noindex_routes = validate_redirects(sitemap_urls)
    validate_robots_and_llms()
    validate_assets_and_css()
    validate_workflow()
    validate_indexnow()
    validate_no_unmanaged_html(set(ROUTES), noindex_routes)
    validate_forbidden_files()

    error_page = SITE_ROOT / "404.html"
    error_parser = PageParser()
    error_parser.feed(error_page.read_text(encoding="utf-8"))
    if error_parser.meta.get("robots") != "noindex,follow":
        fail("404.html: robots must be noindex,follow")
    admin = SITE_ROOT / "admin" / "index.html"
    admin_parser = PageParser()
    admin_parser.feed(admin.read_text(encoding="utf-8"))
    if not admin_parser.meta.get("robots", "").startswith("noindex"):
        fail("/admin/: static redirect must be noindex")
    if "https://cms.sitestudio.lt/admin" not in admin.read_text(encoding="utf-8"):
        fail("/admin/: CMS redirect target is missing")

    scripts = {
        path.relative_to(SITE_ROOT).as_posix()
        for path in SITE_ROOT.rglob("*.js")
        if path.is_file()
    }
    if scripts != {"contact.js"}:
        fail(f"client-side JavaScript allowlist differs: {sorted(scripts)}")
    if (SITE_ROOT / "CNAME").read_text(encoding="utf-8").strip() != "sitestudio.lt":
        fail("CNAME must contain sitestudio.lt")

    if ERRORS:
        for error in ERRORS:
            print(f"FAIL: {error}", file=sys.stderr)
        print(f"Result: {len(ERRORS)} failure(s)", file=sys.stderr)
        return 1
    print(
        f"PASS: {len(ROUTES)} canonical routes, redirects, schema, metadata, images, AI discovery and workflow gates"
    )
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
