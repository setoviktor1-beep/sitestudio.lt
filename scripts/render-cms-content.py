#!/usr/bin/env python3
"""Render one allowlisted Payload tenant into a deterministic static website."""

from __future__ import annotations

import argparse
import html
import json
import re
import sys
from datetime import datetime, timezone
from pathlib import Path
from urllib.parse import urlparse


ORIGIN = "https://sitestudio.lt"
EXPECTED_TENANT = "sitestudio.lt"
OG_IMAGE = "/assets/og/sitestudio-og.png"
PAGE_PATHS = {
    "pradzia": "index.html",
    "paslaugos": "paslaugos/index.html",
    "darbai": "darbai/index.html",
    "procesas": "procesas/index.html",
    "kainos": "kainos/index.html",
    "duk": "duk/index.html",
    "kontaktai": "kontaktai/index.html",
    "privatumas": "privatumas/index.html",
    "apie": "apie/index.html",
}
SERVICE_SLUGS = (
    "svetainiu-kurimas",
    "verslo-svetaines",
    "landing-page-kurimas",
    "payload-cms",
    "svetainiu-atnaujinimas",
    "seo-aeo-optimizavimas",
)
LEGACY_SERVICE_SLUGS = {
    "statine-verslo-svetaine",
    "turinio-architektura",
    "nextjs-payload-cms",
    "kokybe-ir-prieziura",
}
PROJECTS = {
    "situacija-eu": {
        "externalURL": "https://situacija.eu",
        "previewAssetPath": "/assets/projects/situacija-eu.webp",
        "mobileAssetPath": "/assets/projects/situacija-eu-mobile.webp",
        "observations": [
            "Aiški paslaugų ir darbų pristatymo struktūra",
            "Matomas kelias susisiekti su paslaugos teikėju",
            "Pagrindinis puslapis pritaikytas mažiems ekranams",
        ],
        "technologies": ["Semantinis HTML", "Responsive CSS", "HTTPS"],
    },
    "leonamai-lt": {
        "externalURL": "https://www.leonamai.lt",
        "previewAssetPath": "/assets/projects/leonamai-lt.webp",
        "mobileAssetPath": "/assets/projects/leonamai-lt-mobile.webp",
        "observations": [
            "Paslaugos pristatomos aiškiomis turinio grupėmis",
            "Pagrindiniame puslapyje matomi darbų ir kontaktų keliai",
            "Sąsaja prisitaiko prie mobiliojo ekrano",
        ],
        "technologies": ["Semantinis HTML", "Responsive CSS", "HTTPS"],
    },
}
REDIRECT_MAP = (
    {
        "source": "/lt/",
        "behavior": "redirect",
        "target": "/",
        "reason": "Lietuviška pradžios versija perkelta į kanoninį domeno šaknies URL.",
    },
    {
        "source": "/lt/privacy-policy/",
        "behavior": "redirect",
        "target": "/privatumas/",
        "reason": "Lietuviška privatumo informacija turi naują kanoninį URL.",
    },
    {
        "source": "/en/privacy-policy/",
        "behavior": "redirect",
        "target": "/privatumas/",
        "reason": "Ankstesnė privatumo nuoroda pakeista aktualiu viešu privatumo puslapiu.",
    },
    {
        "source": "/privacy-policy/",
        "behavior": "redirect",
        "target": "/privatumas/",
        "reason": "Ankstesnė privatumo nuoroda pakeista aktualiu viešu privatumo puslapiu.",
    },
    {
        "source": "/portfolio/",
        "behavior": "redirect",
        "target": "/darbai/",
        "reason": "Darbų galerija turi naują kanoninį URL.",
    },
    {
        "source": "/lt/portfolio/",
        "behavior": "redirect",
        "target": "/darbai/",
        "reason": "Lietuviška darbų galerija turi naują kanoninį URL.",
    },
    {
        "source": "/en/",
        "behavior": "removed",
        "target": None,
        "reason": "Pilna angliška svetainės versija šiuo metu nepalaikoma.",
    },
    {
        "source": "/en/portfolio/",
        "behavior": "removed",
        "target": None,
        "reason": "Pilna angliška darbų galerija šiuo metu nepalaikoma.",
    },
    {
        "source": "/lt/portfolio/london-handyman-pro/",
        "behavior": "removed",
        "target": None,
        "reason": "Projektas nėra tikras viešas SiteStudio darbas.",
    },
    {
        "source": "/en/portfolio/london-handyman-pro/",
        "behavior": "removed",
        "target": None,
        "reason": "Projektas nėra tikras viešas SiteStudio darbas.",
    },
    {
        "source": "/en/portfolio/ai-audit-saas/",
        "behavior": "removed",
        "target": None,
        "reason": "Projektas nėra tikras viešas SiteStudio darbas.",
    },
    {
        "source": "/paslaugu-teikimo-salygos/",
        "behavior": "legal-draft",
        "target": None,
        "reason": "Paslaugų teikimo sąlygų tekstas nėra galutinai teisiškai patvirtintas.",
    },
)


SERVICE_FALLBACKS = {
    "svetainiu-kurimas": {
        "body": (
            "Sukuriame semantišką, greitai užsikraunančią ir telefonams pritaikytą svetainę. "
            "Pradedame nuo auditorijos, turinio ir aiškaus lankytojo veiksmo, o technologiją "
            "parenkame pagal realų administravimo poreikį.\n\n"
            "Į darbą įeina informacijos architektūra, originali sąsaja, techninis SEO, "
            "prieinamumo pagrindai ir automatinės kokybės patikros prieš publikavimą."
        ),
        "order": 10,
        "slug": "svetainiu-kurimas",
        "summary": "Pilnas verslo svetainės kelias nuo struktūros iki patikrinto publikavimo.",
        "title": "Svetainių kūrimas",
    },
    "verslo-svetaines": {
        "body": (
            "Verslo svetainei svarbu greitai paaiškinti, kam skirta paslauga, kuo ji naudinga "
            "ir kaip susisiekti. Turinį dėliojame pagal lankytojo klausimus, o ne pagal vidinę "
            "įmonės struktūrą.\n\n"
            "Sprendimas gali būti statinis ir itin lengvas arba turėti atskirą turinio valdymą, "
            "jeigu redagavimo nauda pateisina papildomą infrastruktūrą."
        ),
        "order": 20,
        "slug": "verslo-svetaines",
        "summary": "Aiški, patikima ir lengvai prižiūrima paslaugų verslo svetainė.",
        "title": "Verslo svetainės",
    },
    "landing-page-kurimas": {
        "body": (
            "Vieno tikslo puslapis sutelkia dėmesį į konkretų pasiūlymą, auditoriją ir veiksmą. "
            "Suderiname antraščių hierarchiją, įrodymų vietas, dažniausius klausimus ir kontaktinį "
            "kelią be perteklinių efektų.\n\n"
            "Puslapis kuriamas kaip greitas, savarankiškas URL su unikalia metadata, analitikai "
            "paruoštais veiksmais ir aiškiu plėtros keliu."
        ),
        "order": 30,
        "slug": "landing-page-kurimas",
        "summary": "Koncentruotas nukreipimo puslapis vienam pasiūlymui ir aiškiam veiksmui.",
        "title": "Landing page kūrimas",
    },
    "payload-cms": {
        "body": (
            "Payload CMS pasirenkame tada, kai turinį turi valdyti redaktoriai, reikalingi "
            "juodraščiai, publikavimo teisės, struktūriniai modeliai ar kelių svetainių valdymas. "
            "Viešai svetainei pateikiama tik siaura publikuoto turinio projekcija.\n\n"
            "Turinio valdymas atskiriamas nuo viešos svetainės: lankytojams pateikiama patikrinta "
            "statinė versija, kuri išlieka pasiekiama ir laikinai sutrikus administravimui."
        ),
        "order": 40,
        "slug": "payload-cms",
        "summary": "Struktūrinis turinio valdymas su rolėmis, juodraščiais ir saugiu publikavimu.",
        "title": "Payload CMS",
    },
    "svetainiu-atnaujinimas": {
        "body": (
            "Atnaujinimą pradedame nuo turinio, indeksuojamų URL, greičio ir prieinamumo audito. "
            "Išsaugome vertingus adresus, suplanuojame migraciją ir tik tada keičiame struktūrą "
            "ar vizualinę sistemą.\n\n"
            "Tikslas – ne kosmetinis perpiešimas, o aiškesnė informacija, mažesnė techninė rizika "
            "ir patikimas publikavimo procesas."
        ),
        "order": 50,
        "slug": "svetainiu-atnaujinimas",
        "summary": "Saugus turinio, dizaino ir techninio pagrindo atnaujinimas.",
        "title": "Svetainių atnaujinimas",
    },
    "seo-aeo-optimizavimas": {
        "body": (
            "SEO ir AEO pradedame nuo techniškai pasiekiamo, semantiško ir naudingo turinio. "
            "Sutvarkome canonical, sitemap, metadata, vidines nuorodas ir su matomu turiniu "
            "sutampančius struktūrinius duomenis.\n\n"
            "Atsakymų sistemoms padeda aiškios sąvokos, trumpos išvados, tikslūs DUK ir viešo "
            "turinio Markdown santrauka. Nė vienas failas ar schema negarantuoja pozicijų."
        ),
        "order": 60,
        "slug": "seo-aeo-optimizavimas",
        "summary": "Techninis SEO, atsakymams pritaikytas turinys ir patikimi struktūriniai duomenys.",
        "title": "SEO ir AEO optimizavimas",
    },
}


def required_text(value: object, label: str, maximum: int = 10_000) -> str:
    if not isinstance(value, str) or not value.strip():
        raise ValueError(f"{label} must be a non-empty string")
    clean = value.strip()
    if len(clean) > maximum:
        raise ValueError(f"{label} exceeds {maximum} characters")
    return clean


def ordered(documents: object, label: str) -> list[dict[str, object]]:
    if not isinstance(documents, list):
        raise ValueError(f"{label} must be an array")
    result: list[dict[str, object]] = []
    for index, document in enumerate(documents):
        if not isinstance(document, dict):
            raise ValueError(f"{label}[{index}] must be an object")
        result.append(document)
    return sorted(result, key=lambda item: int(item.get("order", item.get("navigationOrder", 0))))


def iso_timestamp(value: object, label: str, fallback: str) -> str:
    raw = value if isinstance(value, str) and value else fallback
    try:
        parsed = datetime.fromisoformat(raw.replace("Z", "+00:00"))
    except ValueError as exc:
        raise ValueError(f"{label} must be an ISO-8601 timestamp") from exc
    if parsed.tzinfo is None:
        parsed = parsed.replace(tzinfo=timezone.utc)
    return parsed.astimezone(timezone.utc).isoformat().replace("+00:00", "Z")


def route_url(route: str) -> str:
    return f"{ORIGIN}{route}"


def escape(value: object) -> str:
    return html.escape(str(value), quote=True)


def json_script(graph: dict[str, object]) -> str:
    return json.dumps(graph, ensure_ascii=False, indent=2).replace("</", "<\\/")


def metadata_head(
    *,
    title: str,
    description: str,
    canonical: str,
    schema: dict[str, object],
    og_type: str = "website",
    image: str = OG_IMAGE,
    image_width: int = 1200,
    image_height: int = 630,
    image_type: str = "image/png",
    image_alt: str = "SiteStudio – aiškios, greitos ir saugios verslo svetainės",
    contact_script: bool = False,
) -> str:
    absolute_image = image if image.startswith("https://") else f"{ORIGIN}{image}"
    script = '    <script src="/contact.js" defer></script>\n' if contact_script else ""
    return f"""  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>{escape(title)}</title>
    <meta name="description" content="{escape(description)}" />
    <meta name="robots" content="index,follow,max-image-preview:large" />
    <meta name="theme-color" content="#111827" />
    <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
    <link rel="canonical" href="{escape(canonical)}" />
    <meta property="og:locale" content="lt_LT" />
    <meta property="og:type" content="{escape(og_type)}" />
    <meta property="og:site_name" content="SiteStudio" />
    <meta property="og:title" content="{escape(title)}" />
    <meta property="og:description" content="{escape(description)}" />
    <meta property="og:url" content="{escape(canonical)}" />
    <meta property="og:image" content="{escape(absolute_image)}" />
    <meta property="og:image:type" content="{escape(image_type)}" />
    <meta property="og:image:width" content="{image_width}" />
    <meta property="og:image:height" content="{image_height}" />
    <meta property="og:image:alt" content="{escape(image_alt)}" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="{escape(title)}" />
    <meta name="twitter:description" content="{escape(description)}" />
    <meta name="twitter:image" content="{escape(absolute_image)}" />
    <meta name="twitter:image:alt" content="{escape(image_alt)}" />
    <link rel="stylesheet" href="/styles.css" />
{script}    <script type="application/ld+json">
{json_script(schema)}
    </script>
  </head>"""


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


def page_seo(page: dict[str, object], slug: str) -> tuple[str, str, str]:
    seo = page.get("seo")
    if not isinstance(seo, dict):
        raise ValueError(f"pages.{slug}.seo must be an object")
    title = required_text(seo.get("title"), f"pages.{slug}.seo.title", 160)
    description = required_text(seo.get("description"), f"pages.{slug}.seo.description", 180)
    canonical = required_text(seo.get("canonical"), f"pages.{slug}.seo.canonical", 300)
    expected = f"{ORIGIN}/" if slug == "pradzia" else f"{ORIGIN}/{slug}/"
    if canonical != expected:
        raise ValueError(f"pages.{slug}.seo.canonical must be {expected}")
    if seo.get("noIndex") is True:
        raise ValueError(f"published page {slug} cannot be noindex")
    return title, description, canonical


def breadcrumb_graph(route: str, name: str, parent: tuple[str, str] | None = None) -> dict[str, object]:
    items: list[dict[str, object]] = [
        {"@type": "ListItem", "position": 1, "name": "Pradžia", "item": f"{ORIGIN}/"}
    ]
    if parent:
        items.append(
            {
                "@type": "ListItem",
                "position": 2,
                "name": parent[0],
                "item": route_url(parent[1]),
            }
        )
    items.append(
        {
            "@type": "ListItem",
            "position": len(items) + 1,
            "name": name,
            "item": route_url(route),
        }
    )
    return {
        "@type": "BreadcrumbList",
        "@id": f"{route_url(route)}#breadcrumb",
        "itemListElement": items,
    }


def base_page_graph(
    slug: str,
    title: str,
    description: str,
    canonical: str,
    updated_at: str,
    faqs: list[dict[str, object]],
) -> dict[str, object]:
    page_type = {
        "apie": "AboutPage",
        "kontaktai": "ContactPage",
        "paslaugos": "CollectionPage",
        "darbai": "CollectionPage",
    }.get(slug, "WebPage")
    route = "/" if slug == "pradzia" else f"/{slug}/"
    graph: list[dict[str, object]] = [
        {
            "@type": page_type,
            "@id": f"{canonical}#webpage",
            "url": canonical,
            "name": title,
            "description": description,
            "inLanguage": "lt-LT",
            "dateModified": updated_at,
            "isPartOf": {"@id": f"{ORIGIN}/#website"},
            "about": {"@id": f"{ORIGIN}/#organization"},
        }
    ]
    if slug != "pradzia":
        graph.append(breadcrumb_graph(route, title.split(" | ")[0]))
    if slug == "duk":
        graph.append(
            {
                "@type": "FAQPage",
                "@id": f"{canonical}#faq",
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
        )
        graph[0]["mainEntity"] = {"@id": f"{canonical}#faq"}
    return {"@context": "https://schema.org", "@graph": graph}


def homepage_graph(
    settings: dict[str, object],
    title: str,
    description: str,
    updated_at: str,
    services: list[dict[str, object]],
    faqs: list[dict[str, object]],
) -> dict[str, object]:
    organization_id = f"{ORIGIN}/#organization"
    website_id = f"{ORIGIN}/#website"
    webpage_id = f"{ORIGIN}/#webpage"
    service_nodes = [
        {
            "@type": "Service",
            "@id": f"{ORIGIN}/{required_text(service.get('slug'), 'service.slug', 100)}/#service",
            "name": required_text(service.get("title"), "service.title", 160),
            "description": required_text(service.get("summary"), "service.summary", 500),
            "serviceType": required_text(service.get("title"), "service.title", 160),
            "url": f"{ORIGIN}/{required_text(service.get('slug'), 'service.slug', 100)}/",
            "provider": {"@id": organization_id},
            "areaServed": {"@type": "Country", "name": "Lietuva"},
        }
        for service in services
    ]
    organization: dict[str, object] = {
        "@type": ["Organization", "ProfessionalService"],
        "@id": organization_id,
        "name": required_text(settings.get("siteName"), "settings.siteName", 160),
        "url": f"{ORIGIN}/",
        "description": required_text(settings.get("tagline"), "settings.tagline", 500),
        "logo": {
            "@type": "ImageObject",
            "@id": f"{ORIGIN}/#logo",
            "url": f"{ORIGIN}/assets/og/sitestudio-logo.png",
            "contentUrl": f"{ORIGIN}/assets/og/sitestudio-logo.png",
            "width": 512,
            "height": 512,
            "caption": "SiteStudio",
        },
        "image": {"@id": f"{ORIGIN}/#logo"},
        "areaServed": {"@type": "Country", "name": "Lietuva"},
        "knowsLanguage": ["lt"],
        "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "SiteStudio paslaugos",
            "itemListElement": [{"@id": node["@id"]} for node in service_nodes],
        },
    }
    email = settings.get("contactEmail")
    if isinstance(email, str) and email.strip():
        organization["contactPoint"] = {
            "@type": "ContactPoint",
            "contactType": "customer service",
            "email": email.strip().lower(),
            "availableLanguage": ["Lithuanian"],
        }
    faq_node = {
        "@type": "FAQPage",
        "@id": f"{ORIGIN}/#faq",
        "mainEntity": [
            {
                "@type": "Question",
                "name": required_text(faq.get("question"), "faq.question", 300),
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": required_text(faq.get("answer"), "faq.answer", 3000),
                },
            }
            for faq in faqs[:3]
        ],
    }
    return {
        "@context": "https://schema.org",
        "@graph": [
            organization,
            {
                "@type": "WebSite",
                "@id": website_id,
                "url": f"{ORIGIN}/",
                "name": "SiteStudio",
                "inLanguage": "lt-LT",
                "publisher": {"@id": organization_id},
            },
            {
                "@type": "WebPage",
                "@id": webpage_id,
                "url": f"{ORIGIN}/",
                "name": title,
                "description": description,
                "inLanguage": "lt-LT",
                "dateModified": updated_at,
                "isPartOf": {"@id": website_id},
                "publisher": {"@id": organization_id},
                "about": [{"@id": node["@id"]} for node in service_nodes],
                "mainEntity": [
                    {"@id": organization_id},
                    *[{"@id": node["@id"]} for node in service_nodes],
                    {"@id": faq_node["@id"]},
                ],
            },
            *service_nodes,
            faq_node,
        ],
    }


def update_base_page(
    text: str,
    page: dict[str, object],
    slug: str,
    updated_at: str,
    settings: dict[str, object],
    services: list[dict[str, object]],
    faqs: list[dict[str, object]],
) -> str:
    display_title = required_text(page.get("title"), f"pages.{slug}.title", 160)
    summary = required_text(page.get("summary"), f"pages.{slug}.summary", 500)
    title, description, canonical = page_seo(page, slug)
    schema = (
        homepage_graph(settings, title, description, updated_at, services, faqs)
        if slug == "pradzia"
        else base_page_graph(slug, title, description, canonical, updated_at, faqs)
    )
    head = metadata_head(
        title=title,
        description=description,
        canonical=canonical,
        schema=schema,
        contact_script=slug == "kontaktai",
    )
    text = replace_once(text, r"  <head>.*?  </head>", head, f"{slug} head", re.DOTALL)
    text = replace_once(
        text,
        r"<h1(?:\s[^>]*)?>.*?</h1>",
        f"<h1>{escape(display_title)}</h1>",
        f"{slug} h1",
        re.DOTALL,
    )
    if slug == "pradzia":
        text = replace_once(
            text,
            r'<p class="hero-copy">.*?</p>',
            f'<p class="hero-copy">{escape(summary)}</p>',
            "home summary",
            re.DOTALL,
        )
    else:
        hero_pattern = re.compile(
            r'(<header class="page-hero">.*?<h1>.*?</h1>\s*)<p>.*?</p>',
            re.DOTALL,
        )
        hero_match = hero_pattern.search(text)
        if hero_match is None:
            raise ValueError(f"template marker not found exactly once: {slug} summary")
        text = (
            text[: hero_match.start()]
            + hero_match.group(1)
            + f"<p>{escape(summary)}</p>"
            + text[hero_match.end() :]
        )
    if 'href="/apie/"' not in text:
        text = text.replace(
            '<a href="/privatumas/">Privatumas</a>',
            '<a href="/apie/">Apie</a><a href="/privatumas/">Privatumas</a>',
        )
    return text


def header(active: str = "") -> str:
    links = [
        ("paslaugos", "/paslaugos/", "Paslaugos"),
        ("darbai", "/darbai/", "Darbai"),
        ("procesas", "/procesas/", "Procesas"),
        ("kainos", "/kainos/", "Kainos"),
        ("duk", "/duk/", "DUK"),
    ]
    navigation = "".join(
        f'<li><a href="{href}"{" aria-current=\"page\"" if key == active else ""}>{label}</a></li>'
        for key, href, label in links
    )
    return f"""    <a class="skip-link" href="#main-content">Pereiti prie turinio</a>
    <header class="site-header">
      <div class="container header-inner">
        <a class="brand" href="/" aria-label="SiteStudio pradinis puslapis"><span class="brand-mark" aria-hidden="true">S/</span><span class="brand-name">SiteStudio</span></a>
        <nav class="primary-nav" aria-label="Pagrindinė navigacija"><ul class="nav-list">{navigation}</ul></nav>
        <a class="button button-small header-cta" href="/kontaktai/">Aptarti projektą</a>
      </div>
    </header>"""


def footer() -> str:
    return """    <footer class="site-footer">
      <div class="container footer-grid">
        <div class="footer-brand"><a class="brand" href="/"><span class="brand-mark" aria-hidden="true">S/</span><span>SiteStudio</span></a><p>Originalios, greitos ir saugiai publikuojamos verslo svetainės.</p></div>
        <nav class="footer-links" aria-label="Poraštės navigacija"><a href="/paslaugos/">Paslaugos</a><a href="/darbai/">Darbai</a><a href="/procesas/">Procesas</a><a href="/kainos/">Kainos</a><a href="/duk/">DUK</a><a href="/kontaktai/">Kontaktai</a><a href="/apie/">Apie</a><a href="/privatumas/">Privatumas</a></nav>
      </div>
      <div class="container footer-bottom"><span>© 2026 SiteStudio</span><span>Sukurta greičiui, aiškumui ir prieinamumui.</span></div>
    </footer>"""


def service_cards(services: list[dict[str, object]], heading: int) -> str:
    cards = []
    for index, service in enumerate(services, start=1):
        slug = required_text(service.get("slug"), "service.slug", 100)
        title = escape(required_text(service.get("title"), "service.title", 160))
        summary = escape(required_text(service.get("summary"), "service.summary", 500))
        cards.append(
            "\n".join(
                [
                    '<article class="card service-card">',
                    f'  <span class="card-number">{index:02d}</span>',
                    f"  <h{heading}>{title}</h{heading}>",
                    f"  <p>{summary}</p>",
                    f'  <a class="text-link" href="/{escape(slug)}/">Plačiau apie paslaugą <span aria-hidden="true">→</span></a>',
                    "</article>",
                ]
            )
        )
    return "\n".join(cards)


def project_cards(projects: list[dict[str, object]], heading: int, site_root: Path) -> str:
    cards = []
    for project in projects:
        slug = required_text(project.get("slug"), "project.slug", 100)
        config = PROJECTS.get(slug)
        if config is None:
            raise ValueError(f"project is not allowlisted: {slug}")
        title_raw = required_text(project.get("title"), "project.title", 160)
        summary_raw = required_text(project.get("summary"), "project.summary", 500)
        url = required_text(project.get("externalURL"), "project.externalURL", 500)
        asset = required_text(project.get("previewAssetPath"), "project.previewAssetPath", 300)
        if url != config["externalURL"] or asset != config["previewAssetPath"]:
            raise ValueError(f"project public URL or asset differs from allowlist: {slug}")
        if not (site_root / asset.removeprefix("/")).is_file():
            raise ValueError(f"project preview asset is missing: {asset}")
        title = escape(title_raw)
        cards.append(
            "\n".join(
                [
                    '<article class="work-card work-card-project">',
                    f'  <a class="work-card-whole" href="{escape(url)}" target="_blank" rel="noopener noreferrer" aria-label="Atidaryti {title} svetainę naujame lange">',
                    '    <span class="work-media-link">',
                    f'      <img src="{escape(asset)}" srcset="{escape(asset)} 1440w" sizes="(max-width: 43rem) 100vw, 50vw" width="1440" height="900" loading="lazy" decoding="async" alt="{title} pagrindinio puslapio desktop peržiūra" />',
                    "    </span>",
                    '    <span class="work-body">',
                    '      <span class="work-meta"><span class="tag">Verslo svetainė</span><span aria-hidden="true">↗</span></span>',
                    f'      <span class="work-title" role="heading" aria-level="{heading}">{title}</span>',
                    f'      <span class="muted-text">{escape(summary_raw)}</span>',
                    f'      <span class="text-link work-card-link">Atidaryti {title} <span aria-hidden="true">↗</span></span>',
                    "    </span>",
                    "  </a>",
                    f'  <a class="case-study-link" href="/darbai/{escape(slug)}/">Skaityti projekto aprašymą <span aria-hidden="true">→</span></a>',
                    "</article>",
                ]
            )
        )
    return "\n".join(cards)


def faq_cards(faqs: list[dict[str, object]], limit: int | None = None) -> str:
    selected = faqs[:limit] if limit is not None else faqs
    cards = []
    for index, faq in enumerate(selected):
        question = escape(required_text(faq.get("question"), "faq.question", 300))
        answer = escape(required_text(faq.get("answer"), "faq.answer", 3000))
        opened = " open" if index == 0 and limit is None else ""
        cards.append(
            f"<details{opened}>\n"
            f"  <summary>{question}</summary>\n"
            f'  <div class="faq-answer"><p>{answer}</p></div>\n'
            "</details>"
        )
    return "\n".join(cards)


def normalize_services(raw_services: list[dict[str, object]], exported_at: str) -> list[dict[str, object]]:
    by_slug = {
        required_text(service.get("slug"), "service.slug", 100): service
        for service in raw_services
    }
    if set(by_slug) == LEGACY_SERVICE_SLUGS:
        by_slug = {slug: dict(value) for slug, value in SERVICE_FALLBACKS.items()}
    if set(SERVICE_SLUGS) != set(by_slug):
        raise ValueError("published service set differs from the allowlisted SiteStudio services")
    result = []
    for slug in SERVICE_SLUGS:
        service = dict(by_slug[slug])
        service["slug"] = slug
        service.setdefault("createdAt", exported_at)
        service.setdefault("updatedAt", exported_at)
        service.setdefault(
            "seo",
            {
                "canonical": f"{ORIGIN}/{slug}/",
                "description": service["summary"],
                "noIndex": False,
                "ogDescription": service["summary"],
                "ogTitle": service["title"],
                "title": f"{service['title']} | SiteStudio",
            },
        )
        result.append(service)
    return result


def normalize_projects(raw_projects: list[dict[str, object]], exported_at: str) -> list[dict[str, object]]:
    by_slug = {
        required_text(project.get("slug"), "project.slug", 100): dict(project)
        for project in raw_projects
    }
    if set(by_slug) != set(PROJECTS):
        raise ValueError("published project set differs from the public SiteStudio portfolio")
    result = []
    for slug in PROJECTS:
        project = by_slug[slug]
        project.setdefault("createdAt", exported_at)
        project.setdefault("updatedAt", exported_at)
        project.setdefault(
            "seo",
            {
                "canonical": f"{ORIGIN}/darbai/{slug}/",
                "description": project["summary"],
                "noIndex": False,
                "ogDescription": project["summary"],
                "ogTitle": project["title"],
                "title": f"{project['title']} – projekto aprašymas | SiteStudio",
            },
        )
        result.append(project)
    return result


def service_page(service: dict[str, object], exported_at: str) -> str:
    slug = required_text(service.get("slug"), "service.slug", 100)
    title = required_text(service.get("title"), "service.title", 160)
    summary = required_text(service.get("summary"), "service.summary", 500)
    body = required_text(service.get("body"), "service.body", 5000)
    seo = service.get("seo")
    if not isinstance(seo, dict):
        raise ValueError(f"services.{slug}.seo must be an object")
    seo_title = required_text(seo.get("title"), f"services.{slug}.seo.title", 160)
    description = required_text(seo.get("description"), f"services.{slug}.seo.description", 180)
    canonical = required_text(seo.get("canonical"), f"services.{slug}.seo.canonical", 300)
    if canonical != f"{ORIGIN}/{slug}/" or seo.get("noIndex") is True:
        raise ValueError(f"services.{slug} has invalid canonical or noindex state")
    created = iso_timestamp(service.get("createdAt"), f"services.{slug}.createdAt", exported_at)
    modified = iso_timestamp(service.get("updatedAt"), f"services.{slug}.updatedAt", exported_at)
    service_id = f"{canonical}#service"
    schema = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "WebPage",
                "@id": f"{canonical}#webpage",
                "url": canonical,
                "name": seo_title,
                "description": description,
                "inLanguage": "lt-LT",
                "datePublished": created,
                "dateModified": modified,
                "isPartOf": {"@id": f"{ORIGIN}/#website"},
                "about": {"@id": service_id},
                "mainEntity": {"@id": service_id},
            },
            {
                "@type": "Service",
                "@id": service_id,
                "name": title,
                "description": summary,
                "serviceType": title,
                "url": canonical,
                "provider": {"@id": f"{ORIGIN}/#organization"},
                "areaServed": {"@type": "Country", "name": "Lietuva"},
            },
            breadcrumb_graph(f"/{slug}/", title, ("Paslaugos", "/paslaugos/")),
        ],
    }
    paragraphs = "\n".join(f"          <p>{escape(value)}</p>" for value in re.split(r"\n+", body) if value)
    related = "".join(
        f'<li><a href="/{other}/">{escape(SERVICE_FALLBACKS[other]["title"])}</a></li>'
        for other in SERVICE_SLUGS
        if other != slug
    )
    return f"""<!doctype html>
<html lang="lt">
{metadata_head(title=seo_title, description=description, canonical=canonical, schema=schema)}
  <body>
{header("paslaugos")}
    <main id="main-content">
      <header class="page-hero">
        <div class="container">
          <nav class="breadcrumbs" aria-label="Kelio nuorodos"><a href="/">Pradžia</a> / <a href="/paslaugos/">Paslaugos</a> / {escape(title)}</nav>
          <p class="eyebrow">SiteStudio paslauga</p>
          <h1>{escape(title)}</h1>
          <p>{escape(summary)}</p>
        </div>
      </header>
      <section class="section">
        <div class="container detail-grid">
          <article class="prose">
            <p class="eyebrow">Sprendimo principas</p>
            <h2>Aiški apimtis ir patikrinamas rezultatas</h2>
{paragraphs}
            <h2>Ką tikriname prieš publikavimą</h2>
            <ul class="check-list">
              <li>Semantinę antraščių ir nuorodų struktūrą</li>
              <li>Mobilų vaizdą, klaviatūros fokusą ir vaizdų matmenis</li>
              <li>Metadata, canonical, sitemap ir struktūrinius duomenis</li>
              <li>Vidines nuorodas, build rezultatą ir saugų publikavimą</li>
            </ul>
          </article>
          <aside class="card detail-aside">
            <span class="card-number">01</span>
            <h2>Aptarkime užduotį</h2>
            <p>Pirmiausia išsiaiškiname auditoriją, svarbiausią veiksmą ir turinio apimtį.</p>
            <a class="button button-accent" href="/kontaktai/">Aprašyti projektą</a>
          </aside>
        </div>
      </section>
      <section class="section section-soft">
        <div class="container measure">
          <p class="eyebrow">Susijusios paslaugos</p>
          <h2>Vienas techninis sprendimas nėra visas projektas</h2>
          <ul class="related-links">{related}</ul>
        </div>
      </section>
    </main>
{footer()}
  </body>
</html>
"""


def project_page(project: dict[str, object], exported_at: str) -> str:
    slug = required_text(project.get("slug"), "project.slug", 100)
    config = PROJECTS[slug]
    title = required_text(project.get("title"), "project.title", 160)
    summary = required_text(project.get("summary"), "project.summary", 500)
    external_url = required_text(project.get("externalURL"), "project.externalURL", 500)
    desktop = required_text(project.get("previewAssetPath"), "project.previewAssetPath", 300)
    mobile = required_text(config["mobileAssetPath"], f"{slug}.mobileAssetPath", 300)
    seo = project.get("seo")
    if not isinstance(seo, dict):
        raise ValueError(f"projects.{slug}.seo must be an object")
    seo_title = required_text(seo.get("title"), f"projects.{slug}.seo.title", 160)
    description = required_text(seo.get("description"), f"projects.{slug}.seo.description", 180)
    canonical = required_text(seo.get("canonical"), f"projects.{slug}.seo.canonical", 300)
    if canonical != f"{ORIGIN}/darbai/{slug}/" or seo.get("noIndex") is True:
        raise ValueError(f"projects.{slug} has invalid canonical or noindex state")
    created = iso_timestamp(project.get("createdAt"), f"projects.{slug}.createdAt", exported_at)
    modified = iso_timestamp(project.get("updatedAt"), f"projects.{slug}.updatedAt", exported_at)
    article_id = f"{canonical}#article"
    image_id = f"{canonical}#primaryimage"
    schema = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "WebPage",
                "@id": f"{canonical}#webpage",
                "url": canonical,
                "name": seo_title,
                "description": description,
                "inLanguage": "lt-LT",
                "datePublished": created,
                "dateModified": modified,
                "isPartOf": {"@id": f"{ORIGIN}/#website"},
                "about": {"@id": article_id},
                "mainEntity": {"@id": article_id},
                "primaryImageOfPage": {"@id": image_id},
            },
            {
                "@type": "Article",
                "@id": article_id,
                "headline": title,
                "description": summary,
                "url": canonical,
                "mainEntityOfPage": {"@id": f"{canonical}#webpage"},
                "author": {"@id": f"{ORIGIN}/#organization"},
                "publisher": {"@id": f"{ORIGIN}/#organization"},
                "datePublished": created,
                "dateModified": modified,
                "image": {"@id": image_id},
                "about": {"@type": "WebSite", "name": title, "url": external_url},
                "keywords": config["technologies"],
            },
            {
                "@type": "ImageObject",
                "@id": image_id,
                "contentUrl": f"{ORIGIN}{desktop}",
                "url": f"{ORIGIN}{desktop}",
                "width": 1440,
                "height": 900,
                "caption": f"{title} pagrindinio puslapio desktop peržiūra",
            },
            breadcrumb_graph(f"/darbai/{slug}/", title, ("Darbai", "/darbai/")),
        ],
    }
    observations = "".join(f"<li>{escape(value)}</li>" for value in config["observations"])
    technologies = "".join(f"<li>{escape(value)}</li>" for value in config["technologies"])
    published_date = created[:10]
    modified_date = modified[:10]
    return f"""<!doctype html>
<html lang="lt">
{metadata_head(title=seo_title, description=description, canonical=canonical, schema=schema, og_type="article", image=desktop, image_width=1440, image_height=900, image_type="image/webp", image_alt=f"{title} pagrindinio puslapio peržiūra")}
  <body>
{header("darbai")}
    <main id="main-content">
      <header class="page-hero">
        <div class="container">
          <nav class="breadcrumbs" aria-label="Kelio nuorodos"><a href="/">Pradžia</a> / <a href="/darbai/">Darbai</a> / {escape(title)}</nav>
          <p class="eyebrow">Viešas SiteStudio darbų pavyzdys</p>
          <h1>{escape(title)}</h1>
          <p>{escape(summary)}</p>
          <p class="content-dates">Publikuota <time datetime="{published_date}">{published_date}</time> · Atnaujinta <time datetime="{modified_date}">{modified_date}</time></p>
        </div>
      </header>
      <section class="section">
        <div class="container project-shots">
          <figure class="project-shot project-shot-desktop">
            <a href="{escape(external_url)}" target="_blank" rel="noopener noreferrer" aria-label="Atidaryti {escape(title)} svetainę naujame lange">
              <img src="{escape(desktop)}" srcset="{escape(desktop)} 1440w" sizes="(max-width: 64rem) 100vw, 70vw" width="1440" height="900" decoding="async" alt="{escape(title)} pagrindinio puslapio desktop ekrano vaizdas" />
            </a>
            <figcaption>Desktop pagrindinio puslapio viršutinė dalis.</figcaption>
          </figure>
          <figure class="project-shot project-shot-mobile">
            <a href="{escape(external_url)}" target="_blank" rel="noopener noreferrer" aria-label="Atidaryti {escape(title)} svetainę naujame lange iš mobilios peržiūros">
              <img src="{escape(mobile)}" srcset="{escape(mobile)} 390w" sizes="(max-width: 43rem) 78vw, 390px" width="390" height="844" loading="lazy" decoding="async" alt="{escape(title)} pagrindinio puslapio mobile ekrano vaizdas" />
            </a>
            <figcaption>Mobile pagrindinio puslapio viršutinė dalis.</figcaption>
          </figure>
        </div>
      </section>
      <section class="section section-soft">
        <div class="container detail-grid">
          <article class="prose">
            <p class="eyebrow">Viešai matoma apžvalga</p>
            <h2>Ką galima įvertinti gyvoje svetainėje</h2>
            <ul class="check-list">{observations}</ul>
            <p>Šiame puslapyje pateikiama tik viešai naršyklėje matoma projekto informacija. Jame nėra neviešų kliento duomenų, administravimo turinio ar išgalvotų rezultatų.</p>
            <a class="text-link" href="{escape(external_url)}" target="_blank" rel="noopener noreferrer">Atidaryti gyvą {escape(title)} svetainę <span aria-hidden="true">↗</span></a>
          </article>
          <aside class="card detail-aside">
            <span class="card-number">01</span>
            <h2>Technologijos ir principai</h2>
            <ul class="check-list">{technologies}</ul>
          </aside>
        </div>
      </section>
    </main>
{footer()}
  </body>
</html>
"""


def about_page(page: dict[str, object], exported_at: str, faqs: list[dict[str, object]]) -> str:
    title, description, canonical = page_seo(page, "apie")
    updated = iso_timestamp(page.get("updatedAt"), "pages.apie.updatedAt", exported_at)
    schema = base_page_graph("apie", title, description, canonical, updated, faqs)
    return f"""<!doctype html>
<html lang="lt">
{metadata_head(title=title, description=description, canonical=canonical, schema=schema)}
  <body>
{header()}
    <main id="main-content">
      <header class="page-hero">
        <div class="container">
          <nav class="breadcrumbs" aria-label="Kelio nuorodos"><a href="/">Pradžia</a> / Apie</nav>
          <p class="eyebrow">Apie SiteStudio</p>
          <h1>{escape(required_text(page.get("title"), "pages.apie.title", 160))}</h1>
          <p>{escape(required_text(page.get("summary"), "pages.apie.summary", 500))}</p>
        </div>
      </header>
      <section class="section">
        <div class="container detail-grid">
          <article class="prose">
            <h2>Mažiausia pakankama technologija</h2>
            <p>SiteStudio kuria verslo svetaines Lietuvos rinkai ir nuotoliniam bendradarbiavimui. Statinę architektūrą renkamės, kai svarbiausia greitis ir paprasta priežiūra; Payload CMS – kai turinį realiai turi valdyti redaktoriai.</p>
            <h2>Kokybė turi būti pakartojama</h2>
            <p>Metadata, struktūriniai duomenys, nuorodos, prieinamumas ir build tikrinami automatizuotai. Publikuojama tik žalia versija, o vieša svetainė nepriklauso nuo veikiančio CMS.</p>
            <h2>Faktai svarbiau už pažadus</h2>
            <p>Nenaudojame išgalvotų įvertinimų, klientų skaičių ar rezultatų. Darbų pavyzdžiai siejami su gyvomis viešomis svetainėmis, kurias lankytojas gali patikrinti pats.</p>
          </article>
          <aside class="card detail-aside">
            <span class="card-number">S/</span>
            <h2>Darbo kryptis</h2>
            <ul class="check-list">
              <li>Aiški informacijos architektūra</li>
              <li>Originalus responsive dizainas</li>
              <li>SEO, AEO ir prieinamumo pagrindai</li>
              <li>Saugus, izoliuotas publikavimas</li>
            </ul>
          </aside>
        </div>
      </section>
    </main>
{footer()}
  </body>
</html>
"""


def noindex_head(title: str, description: str, canonical: str, refresh: str | None = None) -> str:
    refresh_meta = (
        f'    <meta http-equiv="refresh" content="0; url={escape(refresh)}" />\n' if refresh else ""
    )
    return f"""  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>{escape(title)}</title>
    <meta name="description" content="{escape(description)}" />
    <meta name="robots" content="noindex,follow,noarchive" />
{refresh_meta}    <link rel="canonical" href="{escape(canonical)}" />
    <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
    <link rel="stylesheet" href="/styles.css" />
  </head>"""


def migration_page(entry: dict[str, object]) -> str:
    source = required_text(entry["source"], "redirect source", 300)
    behavior = required_text(entry["behavior"], "redirect behavior", 50)
    reason = required_text(entry["reason"], "redirect reason", 500)
    target = entry.get("target")
    if behavior == "redirect":
        if not isinstance(target, str):
            raise ValueError(f"redirect target missing for {source}")
        absolute_target = route_url(target)
        body = f"""          <p class="eyebrow">Adresas pasikeitė</p>
          <h1>Puslapis perkeltas</h1>
          <p>{escape(reason)}</p>
          <a class="button button-accent" href="{escape(target)}">Atidaryti naują puslapį</a>"""
        head = noindex_head(
            "Puslapis perkeltas | SiteStudio",
            reason,
            absolute_target,
            absolute_target,
        )
    elif behavior == "legal-draft":
        body = f"""          <p class="eyebrow">Nepublikuotas dokumentas</p>
          <h1>Paslaugų teikimo sąlygos dar nepatvirtintos</h1>
          <p>{escape(reason)}</p>
          <p>Šis puslapis nėra galiojantis sąlygų dokumentas ir nėra teisinės konsultacijos pakaitalas.</p>
          <a class="button button-accent" href="/kontaktai/">Susisiekti</a>"""
        head = noindex_head(
            "Paslaugų teikimo sąlygos nepublikuotos | SiteStudio",
            reason,
            route_url(source),
        )
    else:
        body = f"""          <p class="eyebrow">Turinys pašalintas</p>
          <h1>Šis projektas nepublikuojamas</h1>
          <p>{escape(reason)}</p>
          <a class="button button-accent" href="/darbai/">Peržiūrėti tikrus darbus</a>"""
        if source == "/en/":
            body = f"""          <p class="eyebrow">Kalbos versija nepalaikoma</p>
          <h1>English version is not available</h1>
          <p>{escape(reason)}</p>
          <a class="button button-accent" href="/">Atidaryti lietuvišką svetainę</a>"""
        head = noindex_head(
            "Turinys nepublikuojamas | SiteStudio",
            reason,
            route_url(source),
        )
    return f"""<!doctype html>
<html lang="lt">
{head}
  <body>
{header()}
    <main id="main-content" class="status-page">
      <section class="container status-panel">
{body}
      </section>
    </main>
{footer()}
  </body>
</html>
"""


def write_llms(
    site_root: Path,
    pages: dict[str, dict[str, object]],
    services: list[dict[str, object]],
    projects: list[dict[str, object]],
    faqs: list[dict[str, object]],
) -> None:
    service_links = "\n".join(
        f"- [{required_text(service.get('title'), 'service.title', 160)}]({ORIGIN}/{required_text(service.get('slug'), 'service.slug', 100)}/): {required_text(service.get('summary'), 'service.summary', 500)}"
        for service in services
    )
    project_links = "\n".join(
        f"- [{required_text(project.get('title'), 'project.title', 160)} – projekto aprašymas]({ORIGIN}/darbai/{required_text(project.get('slug'), 'project.slug', 100)}/): {required_text(project.get('summary'), 'project.summary', 500)}"
        for project in projects
    )
    llms = f"""# SiteStudio

> SiteStudio kuria originalias, greitas ir saugiai publikuojamas verslo svetaines Lietuvos rinkai. Pagrindinė auditorija – paslaugų verslai ir organizacijos, kurioms reikia aiškaus turinio, patikimo techninio pagrindo ir pamatuojamų kokybės vartų.

Pagrindinis oficialus URL: {ORIGIN}/

## Paslaugos

{service_links}

## Svarbiausi puslapiai

- [Paslaugos]({ORIGIN}/paslaugos/): visų paslaugų apžvalga.
- [Darbai]({ORIGIN}/darbai/): vieši SiteStudio darbų pavyzdžiai.
- [Procesas]({ORIGIN}/procesas/): darbų etapai ir kokybės vartai.
- [Kainos]({ORIGIN}/kainos/): pasiūlymo ir apimties principai.
- [DUK]({ORIGIN}/duk/): atsakymai į dažniausius klausimus.
- [Apie SiteStudio]({ORIGIN}/apie/): veiklos ir techninių sprendimų principai.
- [Kontaktai]({ORIGIN}/kontaktai/): oficialus kontaktinis puslapis.

## Vieši darbų pavyzdžiai

{project_links}

situacija.eu ir leonamai.lt šiame domene pateikiami tik kaip vieši SiteStudio darbų pavyzdžiai su nuorodomis į gyvas svetaines.

Šis Markdown failas yra informacinė viešo turinio santrauka. Jo naudojimas nėra Google, kitos paieškos sistemos ar AI matomumo ir reitingavimo garantija.
"""
    full_services = "\n\n".join(
        f"## {required_text(service.get('title'), 'service.title', 160)}\n\n"
        f"URL: {ORIGIN}/{required_text(service.get('slug'), 'service.slug', 100)}/\n\n"
        f"{required_text(service.get('summary'), 'service.summary', 500)}\n\n"
        f"{required_text(service.get('body'), 'service.body', 5000)}"
        for service in services
    )
    full_projects = "\n\n".join(
        f"## {required_text(project.get('title'), 'project.title', 160)}\n\n"
        f"SiteStudio puslapis: {ORIGIN}/darbai/{required_text(project.get('slug'), 'project.slug', 100)}/\n\n"
        f"Gyva svetainė: {required_text(project.get('externalURL'), 'project.externalURL', 500)}\n\n"
        f"{required_text(project.get('summary'), 'project.summary', 500)}"
        for project in projects
    )
    public_faqs = [
        faq
        for faq in faqs
        if not re.search(
            r"\b(?:VPS|Docker|GitHub Actions|serveris|konteineris)\b",
            required_text(faq.get("question"), "faq.question", 300)
            + " "
            + required_text(faq.get("answer"), "faq.answer", 3000),
            re.IGNORECASE,
        )
    ]
    full_faqs = "\n\n".join(
        f"### {required_text(faq.get('question'), 'faq.question', 300)}\n\n"
        f"{required_text(faq.get('answer'), 'faq.answer', 3000)}"
        for faq in public_faqs
    )
    full = f"""# SiteStudio – išsamus viešo turinio eksportas

> SiteStudio yra svetainių kūrimo studija Lietuvos rinkai. Ji kuria statines ir turinio valdymą turinčias verslo svetaines, daug dėmesio skirdama informacijos architektūrai, greičiui, prieinamumui, SEO, AEO ir saugiam publikavimui.

Oficiali svetainė: {ORIGIN}/

Auditorija: paslaugų verslai, specialistai ir organizacijos, kurioms reikia naujos svetainės, nukreipimo puslapio, Payload CMS, esamos svetainės atnaujinimo arba SEO ir AEO sutvarkymo.

Aptarnaujama rinka: Lietuva; projektai gali būti vykdomi nuotoliniu būdu.

# Paslaugos

{full_services}

# Darbai

{full_projects}

Projektų puslapiuose naudojama tik viešai naršyklėje matoma informacija. Nevieši klientų duomenys, administravimo turinys ir išgalvoti rezultatai nepateikiami.

# Procesas

{required_text(pages['procesas'].get('summary'), 'pages.procesas.summary', 500)}

SiteStudio darbą skirsto į aiškius etapus: užduoties ir auditorijos išgryninimą, turinio struktūrą, dizainą bei įgyvendinimą, automatines patikras ir kontroliuojamą publikavimą. Produkcinė versija publikuojama tik po sėkmingų patikrų.

# Kainų principai

{required_text(pages['kainos'].get('summary'), 'pages.kainos.summary', 500)}

Pasiūlymas priklauso nuo turinio apimties, unikalių komponentų, integracijų, administravimo ir priežiūros poreikio. Išgalvotos fiksuotos kainos ar nepatvirtinti pažadai nepateikiami.

# Dažniausi klausimai

{full_faqs}

# Apie ir kontaktai

Apie SiteStudio: {ORIGIN}/apie/

Kontaktai: {ORIGIN}/kontaktai/

Privatumo informacija: {ORIGIN}/privatumas/

Šis Markdown eksportas apima tik viešą SiteStudio turinį ir neteikia neviešos ar vidinės techninės informacijos. Šių informacinių failų naudojimas nėra paieškos ar AI matomumo ir reitingavimo garantija.
"""
    (site_root / "llms.txt").write_text(llms, encoding="utf-8")
    (site_root / "llms-full.txt").write_text(full, encoding="utf-8")


def write_robots(site_root: Path) -> None:
    (site_root / "robots.txt").write_text(
        """User-agent: Googlebot
Allow: /

User-agent: Bingbot
Allow: /

User-agent: OAI-SearchBot
Allow: /

User-agent: ChatGPT-User
Allow: /

User-agent: GPTBot
Allow: /

User-agent: *
Allow: /

Sitemap: https://sitestudio.lt/sitemap.xml
""",
        encoding="utf-8",
    )


def write_sitemap(
    site_root: Path,
    pages: dict[str, dict[str, object]],
    services: list[dict[str, object]],
    projects: list[dict[str, object]],
    exported_at: str,
) -> None:
    routes: list[tuple[str, str, dict[str, str] | None]] = []
    for slug in PAGE_PATHS:
        route = "/" if slug == "pradzia" else f"/{slug}/"
        updated = iso_timestamp(pages[slug].get("updatedAt"), f"pages.{slug}.updatedAt", exported_at)
        routes.append((route, updated[:10], None))
    for service in services:
        slug = required_text(service.get("slug"), "service.slug", 100)
        updated = iso_timestamp(service.get("updatedAt"), f"services.{slug}.updatedAt", exported_at)
        routes.append((f"/{slug}/", updated[:10], None))
    for project in projects:
        slug = required_text(project.get("slug"), "project.slug", 100)
        updated = iso_timestamp(project.get("updatedAt"), f"projects.{slug}.updatedAt", exported_at)
        routes.append(
            (
                f"/darbai/{slug}/",
                updated[:10],
                {
                    "loc": f"{ORIGIN}{required_text(project.get('previewAssetPath'), 'project.previewAssetPath', 300)}",
                    "title": f"{required_text(project.get('title'), 'project.title', 160)} pagrindinio puslapio peržiūra",
                },
            )
        )
    route_lines = []
    for route, lastmod, image_data in routes:
        line = f"  <url>\n    <loc>{escape(route_url(route))}</loc>\n    <lastmod>{lastmod}</lastmod>"
        if image_data:
            line += (
                "\n    <image:image>"
                f"\n      <image:loc>{escape(image_data['loc'])}</image:loc>"
                f"\n      <image:title>{escape(image_data['title'])}</image:title>"
                "\n    </image:image>"
            )
        line += "\n  </url>"
        route_lines.append(line)
    (site_root / "sitemap.xml").write_text(
        '<?xml version="1.0" encoding="UTF-8"?>\n'
        '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"\n'
        '        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">\n'
        + "\n".join(route_lines)
        + "\n</urlset>\n",
        encoding="utf-8",
    )


def render(source: Path, site_root: Path) -> None:
    data = json.loads(source.read_text(encoding="utf-8"))
    if not isinstance(data, dict) or data.get("schemaVersion") not in {1, 2}:
        raise ValueError("unsupported CMS export schema")
    tenant = data.get("tenant")
    if not isinstance(tenant, dict) or tenant.get("domain") != EXPECTED_TENANT:
        raise ValueError("CMS export tenant is not sitestudio.lt")
    exported_at = iso_timestamp(data.get("exportedAt"), "exportedAt", datetime.now(timezone.utc).isoformat())
    pages_raw = ordered(data.get("pages"), "pages")
    pages = {required_text(page.get("slug"), "page.slug", 100): dict(page) for page in pages_raw}
    if "apie" not in pages:
        pages["apie"] = {
            "slug": "apie",
            "summary": "SiteStudio jungia aiškų turinį, originalų dizainą ir pakartojamus techninės kokybės vartus.",
            "title": "Svetainės kuriamos kaip patikima verslo sistema",
            "updatedAt": exported_at,
            "seo": {
                "canonical": f"{ORIGIN}/apie/",
                "description": "Apie SiteStudio požiūrį į verslo svetainių architektūrą, dizainą, techninę kokybę, SEO, AEO ir saugų publikavimą.",
                "noIndex": False,
                "ogDescription": "Aiškus turinys, originalus dizainas ir pakartojami kokybės vartai.",
                "ogTitle": "Apie SiteStudio",
                "title": "Apie SiteStudio – darbo ir kokybės principai",
            },
        }
    if set(pages) != set(PAGE_PATHS):
        raise ValueError("published page set differs from the required SiteStudio routes")
    settings = data.get("settings")
    if not isinstance(settings, dict):
        raise ValueError("published site settings are required")
    services = normalize_services(ordered(data.get("services"), "services"), exported_at)
    projects = normalize_projects(ordered(data.get("projects"), "projects"), exported_at)
    faqs = ordered(data.get("faqs"), "faqs")
    if len(faqs) < 3:
        raise ValueError("at least three published FAQs are required")

    about_path = site_root / PAGE_PATHS["apie"]
    about_path.parent.mkdir(parents=True, exist_ok=True)
    about_path.write_text(about_page(pages["apie"], exported_at, faqs), encoding="utf-8")

    for slug, relative in PAGE_PATHS.items():
        if slug == "apie":
            continue
        path = site_root / relative
        updated = iso_timestamp(pages[slug].get("updatedAt"), f"pages.{slug}.updatedAt", exported_at)
        rendered = update_base_page(
            path.read_text(encoding="utf-8"),
            pages[slug],
            slug,
            updated,
            settings,
            services,
            faqs,
        )
        path.write_text(rendered, encoding="utf-8")

    home_path = site_root / "index.html"
    home = home_path.read_text(encoding="utf-8")
    home = replace_region(home, "SERVICES", service_cards(services, 3))
    home = replace_region(home, "PROJECTS", project_cards(projects, 3, site_root))
    home = replace_region(home, "FAQS", faq_cards(faqs, 3))
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
    faq_path.write_text(faq_page, encoding="utf-8")

    for service in services:
        slug = required_text(service.get("slug"), "service.slug", 100)
        output = site_root / slug / "index.html"
        output.parent.mkdir(parents=True, exist_ok=True)
        output.write_text(service_page(service, exported_at), encoding="utf-8")

    for project in projects:
        slug = required_text(project.get("slug"), "project.slug", 100)
        output = site_root / "darbai" / slug / "index.html"
        output.parent.mkdir(parents=True, exist_ok=True)
        output.write_text(project_page(project, exported_at), encoding="utf-8")

    for entry in REDIRECT_MAP:
        source_route = required_text(entry["source"], "redirect source", 300)
        output = site_root / source_route.removeprefix("/") / "index.html"
        output.parent.mkdir(parents=True, exist_ok=True)
        output.write_text(migration_page(entry), encoding="utf-8")
    (site_root / "redirect-map.json").write_text(
        json.dumps(REDIRECT_MAP, ensure_ascii=False, indent=2) + "\n",
        encoding="utf-8",
    )

    write_llms(site_root, pages, services, projects, faqs)
    write_robots(site_root)
    write_sitemap(site_root, pages, services, projects, exported_at)


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
