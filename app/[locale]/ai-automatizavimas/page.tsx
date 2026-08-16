import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import Services from "@/components/Services";
import Automation from "@/components/Automation";
import Pricing from "@/components/Pricing";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";
import { getDict, isLocale, prefixedLocales, type Locale } from "@/lib/i18n";
import { siteGraph, webPageNode, breadcrumbNode } from "@/lib/jsonld";

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
    title: `${dict.services.items[5]?.title ?? "AI & Automation"} — SiteStudio`,
    description: dict.services.items[5]?.description ?? dict.meta.description,
    alternates: { canonical: `/${locale}/ai-automatizavimas` },
  };
}

export default async function LocalizedAiAutomatizavimasPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale) || locale === "lt") notFound();
  const dict = await getDict(locale as Locale);

  const crumbs = [
    { name: "Home", href: `/${locale}` },
    { name: dict.nav.services, href: `/${locale}/paslaugos` },
    { name: dict.services.items[5]?.title ?? "AI & Automation" },
  ];

  const jsonLd = siteGraph(
    webPageNode(
      `/${locale}/ai-automatizavimas`,
      `${dict.services.items[5]?.title ?? "AI & Automation"} — SiteStudio`,
      dict.services.items[5]?.description ?? "",
      locale,
    ),
    breadcrumbNode(`/${locale}/ai-automatizavimas`, crumbs),
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
        <Automation dict={dict} />
        <Services dict={dict} locale={locale as Locale} />
        <Pricing dict={dict} locale={locale as Locale} />
      </main>
      <Footer dict={dict} locale={locale as Locale} />
    </div>
  );
}
