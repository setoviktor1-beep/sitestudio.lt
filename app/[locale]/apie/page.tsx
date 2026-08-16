import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";
import { getDict, isLocale, prefixedLocales, type Locale, pathAlternates } from "@/lib/i18n";
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
    title: `About SiteStudio — Web Development Studio`,
    description: dict.meta.description,
    alternates: { canonical: `/${locale}/apie`, languages: pathAlternates("/apie") },
  };
}

export default async function LocalizedApiePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale) || locale === "lt") notFound();
  const dict = await getDict(locale as Locale);

  const crumbs = [
    { name: "Home", href: `/${locale}` },
    { name: "About" },
  ];

  const jsonLd = siteGraph(
    webPageNode(`/${locale}/apie`, `About SiteStudio`, dict.meta.description, locale),
    breadcrumbNode(`/${locale}/apie`, crumbs),
  );

  return (
    <div className="min-h-screen bg-white text-[#0f172a] antialiased">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar dict={dict} locale={locale as Locale} />

      <main id="turinys" className="pt-28 md:pt-32 pb-20">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <Breadcrumbs items={crumbs} />

          <header className="mt-6">
            <p className="section-label mb-3">About the Studio</p>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight">
              About SiteStudio
            </h1>
            <p className="mt-5 text-[#475569] text-base sm:text-lg leading-relaxed">
              SiteStudio is a web development and automation studio founded by <strong className="text-[#0f172a]">Viktor Seto</strong>. We build modern websites, e-commerce stores, custom web applications and business workflow automations for growing companies.
            </p>
            <p className="mt-4 text-[#475569] text-base sm:text-lg leading-relaxed">
              Direct contact with the developer who builds your project: no account manager bureaucracy, fast response times, and clear fixed prices agreed before the work begins.
            </p>
          </header>

          <section className="mt-12 rounded-2xl bg-[#f6f8fb] border border-[#0f172a]/5 p-8">
            <h2 className="text-xl font-bold">Our Core Principles</h2>
            <ul className="mt-5 space-y-3 text-sm text-[#334155]">
              <li><strong>Direct Developer Contact:</strong> You communicate directly with the engineer working on your project.</li>
              <li><strong>Fixed Price & Deadline:</strong> Clear written quotes with no unexpected hidden extras.</li>
              <li><strong>Modern Technology Stack:</strong> Next.js, React, TypeScript, and high-performance server architecture.</li>
              <li><strong>Ongoing Support:</strong> Secure hosting, automated backups, and technical maintenance.</li>
            </ul>
          </section>

          <section className="mt-12 text-center rounded-3xl bg-[#2456d6] p-8 md:p-12 text-white">
            <h2 className="text-2xl font-bold">Have a project in mind?</h2>
            <p className="mt-2 text-white/80 text-sm">
              Send us a short description of your project and get a quote within one business day.
            </p>
            <div className="mt-6">
              <Link href={`/${locale}/kontaktai`} className="rounded-xl bg-white px-6 py-2.5 text-sm font-bold text-[#2456d6] shadow-sm hover:bg-[#f8fafc] transition-colors inline-block">
                {dict.nav.cta}
              </Link>
            </div>
          </section>
        </div>
      </main>

      <Footer dict={dict} locale={locale as Locale} />
    </div>
  );
}
