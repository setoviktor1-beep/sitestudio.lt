// Shared JSON-LD graph for sitestudio.lt.
//
// Only verified, publicly valid facts belong here: no phone, street address,
// legal-entity code, ratings or social profiles until they actually exist.

export const BASE_URL = "https://sitestudio.lt";

export const ORG_ID = `${BASE_URL}/#organization`;
export const PERSON_ID = `${BASE_URL}/#person`;
export const WEBSITE_ID = `${BASE_URL}/#website`;

/** ProfessionalService node — the SiteStudio studio itself. */
export const organizationNode = {
  "@type": "ProfessionalService",
  "@id": ORG_ID,
  name: "SiteStudio",
  url: BASE_URL,
  email: "viktor@sitestudio.lt",
  description:
    "Svetainių, el. parduotuvių ir interneto sistemų kūrimo studija mažam ir vidutiniam Lietuvos verslui.",
  areaServed: { "@type": "Country", name: "Lietuva" },
  knowsLanguage: ["lt", "en", "pl", "lv", "et", "ru"],
  founder: { "@id": PERSON_ID },
};

/** Person node — Viktor Seto, the person actually doing the work. */
export const personNode = {
  "@type": "Person",
  "@id": PERSON_ID,
  name: "Viktor Seto",
  url: `${BASE_URL}/apie`,
  jobTitle: "Svetainių ir interneto sistemų kūrėjas",
  worksFor: { "@id": ORG_ID },
};

/** WebSite node. */
export const websiteNode = {
  "@type": "WebSite",
  "@id": WEBSITE_ID,
  name: "SiteStudio",
  url: BASE_URL,
  inLanguage: "lt",
  publisher: { "@id": ORG_ID },
};

type JsonLdNode = Record<string, unknown>;

/** Wraps the core entity nodes plus page-specific nodes into one @graph. */
export function siteGraph(...extraNodes: JsonLdNode[]) {
  return {
    "@context": "https://schema.org",
    "@graph": [organizationNode, personNode, websiteNode, ...extraNodes],
  };
}

/** WebPage node for a given path. */
export function webPageNode(path: string, name: string, description: string, language = "lt"): JsonLdNode {
  return {
    "@type": "WebPage",
    "@id": `${BASE_URL}${path}#webpage`,
    url: `${BASE_URL}${path}`,
    name,
    description,
    inLanguage: language,
    isPartOf: { "@id": WEBSITE_ID },
  };
}

/** Portfolio projects that are visibly rendered on a page. */
export function portfolioListNode(
  path: string,
  name: string,
  items: { name: string; description: string; caseStudy: string; liveUrl: string; image: string }[],
  language = "lt",
): JsonLdNode {
  return {
    "@type": "ItemList",
    "@id": `${BASE_URL}${path}#portfolio`,
    name,
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "CreativeWork",
        "@id": `${BASE_URL}${item.caseStudy}#project`,
        name: item.name,
        description: item.description,
        url: `${BASE_URL}${item.caseStudy}`,
        sameAs: item.liveUrl,
        image: `${BASE_URL}${item.image}`,
        inLanguage: language,
        creator: { "@id": ORG_ID },
      },
    })),
  };
}

/** Service node for a dedicated service landing page. */
export function serviceNode(
  path: string,
  name: string,
  description: string,
  offers?: { name: string; price: string }[],
): JsonLdNode {
  const node: JsonLdNode = {
    "@type": "Service",
    "@id": `${BASE_URL}${path}#service`,
    name,
    description,
    url: `${BASE_URL}${path}`,
    provider: { "@id": ORG_ID },
    areaServed: { "@type": "Country", name: "Lietuva" },
  };
  if (offers && offers.length > 0) {
    node.offers = offers.map((o) => ({
      "@type": "Offer",
      name: o.name,
      description: o.price,
      priceCurrency: "EUR",
    }));
  }
  return node;
}

/** BreadcrumbList node from ordered items; last item has no URL. */
export function breadcrumbNode(
  path: string,
  items: { name: string; href?: string }[],
): JsonLdNode {
  return {
    "@type": "BreadcrumbList",
    "@id": `${BASE_URL}${path}#breadcrumb`,
    itemListElement: items.map((item, idx) => ({
      "@type": "ListItem",
      position: idx + 1,
      name: item.name,
      ...(item.href ? { item: `${BASE_URL}${item.href}` } : {}),
    })),
  };
}

/** FAQPage node — pass only Q&A pairs that are visibly rendered on the page. */
export function faqNode(path: string, items: { q: string; a: string }[]): JsonLdNode {
  return {
    "@type": "FAQPage",
    "@id": `${BASE_URL}${path}#faq`,
    mainEntity: items.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: { "@type": "Answer", text: faq.a },
    })),
  };
}
