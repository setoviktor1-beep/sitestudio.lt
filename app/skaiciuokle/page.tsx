import type { Metadata } from "next";
import SkaiciuokleCalculator from "@/components/SkaiciuokleCalculator";
import { pathAlternates } from "@/lib/i18n";
import { siteGraph, webPageNode, breadcrumbNode, ORG_ID, BASE_URL } from "@/lib/jsonld";

export const metadata: Metadata = {
  title: "Svetainės kainos skaičiuoklė — sužinokite kainą per 2 min.",
  description:
    "Interaktyvi svetainės, el. parduotuvės ar interneto sistemos kainos skaičiuoklė. Pasirinkite projekto tipą ir funkcijas — gaukite preliminarią kainą ir terminą.",
  alternates: { canonical: "/skaiciuokle", languages: pathAlternates("/skaiciuokle") },
};

export default function SkaiciuoklePage() {
  const path = "/skaiciuokle";
  const name = "Svetainės kainos skaičiuoklė";
  const description =
    "Interaktyvi svetainės, el. parduotuvės ar interneto sistemos kainos skaičiuoklė su preliminaria kaina ir terminu.";

  const webApplicationNode = {
    "@type": "WebApplication",
    "@id": `${BASE_URL}${path}#webapp`,
    name,
    description,
    url: `${BASE_URL}${path}`,
    applicationCategory: "BusinessApplication",
    operatingSystem: "Any (web browser)",
    isAccessibleForFree: true,
    provider: { "@id": ORG_ID },
    offers: {
      "@type": "Offer",
      priceCurrency: "EUR",
      price: "0",
    },
  };

  const jsonLd = siteGraph(
    webPageNode(path, name, description),
    webApplicationNode,
    breadcrumbNode(path, [
      { name: "Pradžia", href: "/" },
      { name: "Paslaugos", href: "/paslaugos" },
      { name: "Kainos skaičiuoklė" },
    ]),
  );

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <SkaiciuokleCalculator />
    </>
  );
}
