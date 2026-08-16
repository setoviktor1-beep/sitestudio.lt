import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import Works from "@/components/Works";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";
import { getDict, isLocale, prefixedLocales, type Locale } from "@/lib/i18n";
import { portfolioProjects } from "@/lib/portfolio";
import { siteGraph, webPageNode, portfolioListNode, breadcrumbNode } from "@/lib/jsonld";

export const dynamicParams = false;

export function generateStaticParams() {
  return prefixedLocales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const dict = await getDict(locale as Locale);

  return {
    title: `${dict.nav.works} — SiteStudio`,
    description: dict.works.sub,
    alternates: { canonical: `/${locale}/darbai` },
  };
}

export default async function LocalizedWorksPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale) || locale === "lt") notFound();
  const dict = await getDict(locale as Locale);

  const crumbs = [
    { name: "Home", href: `/${locale}` },
    { name: dict.nav.works },
  ];

  const works = portfolioProjects.map((p, idx) => ({
    ...p,
    title: dict.works.items[idx]?.title ?? p.name,
    description: dict.works.items[idx]?.description ?? "",
    tags: dict.works.items[idx]?.tags ?? [],
  }));

  const jsonLd = siteGraph(
    webPageNode(`/${locale}/darbai`, `${dict.nav.works} — SiteStudio`, dict.works.sub, locale),
    portfolioListNode(
      `/${locale}/darbai`,
      dict.works.title,
      works.map((w) => ({
        name: `${w.title} — ${w.domain}`,
        description: w.description,
        caseStudy: `/${locale}${w.caseStudy}`,
        liveUrl: w.liveUrl,
        image: w.image,
      })),
      locale,
    ),
    breadcrumbNode(`/${locale}/darbai`, crumbs),
  );

  return (
    <div className="min-h-screen bg-white text-[#0f172a] antialiased">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar dict={dict} locale={locale as Locale} />
      <main id="turinys" className="pt-28 md:pt-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 pb-4">
          <Breadcrumbs items={crumbs} />
        </div>
        <Works dict={dict} locale={locale as Locale} />
      </main>
      <Footer dict={dict} locale={locale as Locale} />
    </div>
  );
}
