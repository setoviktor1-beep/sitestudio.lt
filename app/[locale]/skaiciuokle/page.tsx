import type { Metadata } from "next";
import { notFound } from "next/navigation";
import SkaiciuokleCalculatorLocale from "@/components/SkaiciuokleCalculatorLocale";
import { isLocale, prefixedLocales, pathAlternates, type Locale } from "@/lib/i18n";
import { siteGraph, webPageNode, breadcrumbNode, ORG_ID, BASE_URL } from "@/lib/jsonld";

export const dynamicParams = false;

export function generateStaticParams() {
  return prefixedLocales.map((locale) => ({ locale }));
}

const CALC_META: Record<Exclude<Locale, "lt">, { title: string; description: string }> = {
  en: {
    title: "Website Price Calculator — get an estimate in 2 min | SiteStudio",
    description:
      "Interactive calculator for website, e-commerce, or custom web system pricing. Pick a project type and features to get an instant estimate and timeline.",
  },
  pl: {
    title: "Kalkulator ceny strony — wycena w 2 minuty | SiteStudio",
    description:
      "Interaktywny kalkulator kosztów strony, sklepu internetowego lub systemu webowego. Wybierz typ projektu i funkcje, aby uzyskać wycenę i termin.",
  },
  lv: {
    title: "Mājaslapas cenu kalkulators — tāme 2 minūtēs | SiteStudio",
    description:
      "Interaktīvs mājaslapas, e-veikala vai tīmekļa sistēmas cenu kalkulators. Izvēlieties projekta veidu un funkcijas, lai uzzinātu tāmi un termiņu.",
  },
  et: {
    title: "Kodulehe hinnakalkulaator — hinnang 2 minutiga | SiteStudio",
    description:
      "Interaktiivne kodulehe, e-poe või veebisüsteemi hinnakalkulaator. Valige projekti tüüp ja funktsioonid, et saada hinnang ja tähtaeg.",
  },
  ru: {
    title: "Калькулятор стоимости сайта — расчёт за 2 минуты | SiteStudio",
    description:
      "Интерактивный калькулятор стоимости сайта, интернет-магазина или веб-системы. Выберите тип проекта и функции, чтобы получить смету и сроки.",
  },
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale) || locale === "lt") return {};
  const meta = CALC_META[locale as Exclude<Locale, "lt">];
  return {
    // absolute: meta.title already carries "| SiteStudio" — the root
    // "%s | SiteStudio" template would otherwise duplicate it.
    title: { absolute: meta.title },
    description: meta.description,
    alternates: { canonical: `/${locale}/skaiciuokle`, languages: pathAlternates("/skaiciuokle") },
  };
}

export default async function LocalizedSkaiciuoklePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale) || locale === "lt") notFound();
  const meta = CALC_META[locale as Exclude<Locale, "lt">];
  const path = `/${locale}/skaiciuokle`;

  const webApplicationNode = {
    "@type": "WebApplication",
    "@id": `${BASE_URL}${path}#webapp`,
    name: meta.title.split(" | ")[0],
    description: meta.description,
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
    webPageNode(path, meta.title, meta.description, locale),
    webApplicationNode,
    breadcrumbNode(path, [
      { name: "Home", href: `/${locale}` },
      { name: "Services", href: `/${locale}/paslaugos` },
      { name: meta.title.split(" — ")[0] },
    ]),
  );

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <SkaiciuokleCalculatorLocale params={params} />
    </>
  );
}
