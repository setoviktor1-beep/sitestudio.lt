import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";
import { getDict, isLocale, prefixedLocales, type Locale, pathAlternates } from "@/lib/i18n";
import { portfolioProjects } from "@/lib/portfolio";
import { siteGraph, webPageNode, breadcrumbNode } from "@/lib/jsonld";

export const dynamicParams = false;

export function generateStaticParams() {
  const params: { locale: string; slug: string }[] = [];
  for (const locale of prefixedLocales) {
    for (const project of portfolioProjects) {
      params.push({ locale, slug: project.id });
    }
  }
  return params;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { locale, slug } = await params;
  if (!isLocale(locale)) return {};
  const project = portfolioProjects.find((p) => p.id === slug);
  if (!project) return {};

  const dict = await getDict(locale as Locale);
  const idx = portfolioProjects.findIndex((p) => p.id === slug);
  const item = dict.works.items[idx];

  const title = `${item?.title ?? project.name} — SiteStudio Case Study`;
  const description = item?.description ?? project.domain;

  return {
    title,
    description,
    alternates: { canonical: `/${locale}/darbai/${slug}`, languages: pathAlternates(`/darbai/${slug}`) },
    openGraph: {
      type: "website",
      url: `https://sitestudio.lt/${locale}/darbai/${slug}`,
      title,
      description,
      siteName: "SiteStudio",
      images: [project.image],
    },
  };
}

export default async function LocalizedCaseStudyPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  if (!isLocale(locale) || locale === "lt") notFound();
  const project = portfolioProjects.find((p) => p.id === slug);
  if (!project) notFound();

  const dict = await getDict(locale as Locale);
  const idx = portfolioProjects.findIndex((p) => p.id === slug);
  const item = dict.works.items[idx];
  const path = `/${locale}/darbai/${slug}`;

  const crumbs = [
    { name: "Home", href: `/${locale}` },
    { name: dict.nav.works, href: `/${locale}/darbai` },
    { name: project.name },
  ];

  const jsonLd = siteGraph(
    webPageNode(path, `${item?.title ?? project.name} — SiteStudio`, item?.description ?? "", locale),
    breadcrumbNode(path, crumbs),
  );

  return (
    <div className="min-h-screen bg-white text-[#0f172a] antialiased">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar dict={dict} locale={locale as Locale} />

      <main id="turinys" className="pt-28 md:pt-32 pb-20">
        <div className="mx-auto max-w-5xl px-6 lg:px-8">
          <Breadcrumbs items={crumbs} />

          <header className="mt-8 max-w-3xl">
            <span className="inline-block rounded-full bg-[#e8eefc] px-3.5 py-1 text-xs font-bold text-[#2456d6] mb-4">
              {project.status === "client" ? "Client Project" : "Live Product / Showcase"}
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#0f172a]">
              {item?.title ?? project.name}
            </h1>
            <p className="mt-4 text-lg text-[#475569] leading-relaxed">
              {item?.description}
            </p>
            <div className="mt-6 flex items-center gap-4">
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary inline-flex items-center gap-2"
              >
                <span>Visit {project.domain}</span>
                <span aria-hidden="true">↗</span>
              </a>
              <Link href={`/${locale}/kontaktai`} className="btn-ghost">
                {dict.nav.cta}
              </Link>
            </div>
          </header>

          <div className="mt-10 rounded-2xl overflow-hidden border border-[#0f172a]/10 shadow-lg bg-[#f6f8fb]">
            <div className="relative aspect-[16/10] w-full">
              <Image
                src={project.image}
                alt={project.name}
                fill
                className="object-cover object-top"
                sizes="(min-width: 1024px) 80vw, 100vw"
                priority
              />
            </div>
          </div>

          <section className="mt-12 rounded-2xl bg-[#f6f8fb] border border-[#0f172a]/5 p-8">
            <h2 className="text-xl font-bold mb-4">Key Features & Highlights</h2>
            <div className="flex flex-wrap gap-2.5">
              {item?.tags?.map((tag) => (
                <span key={tag} className="rounded-lg bg-white px-3 py-1.5 text-xs font-semibold text-[#2456d6] border border-[#0f172a]/5 shadow-sm">
                  {tag}
                </span>
              ))}
            </div>
          </section>

          <section className="mt-12 border-t border-[#0f172a]/10 pt-8 flex justify-between items-center">
            <Link href={`/${locale}/darbai`} className="text-sm font-bold text-[#2456d6] hover:underline">
              ← {dict.nav.works}
            </Link>
            <Link href={`/${locale}/kontaktai`} className="rounded-xl bg-[#2456d6] px-5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-[#1a41ab] transition-colors">
              {dict.nav.cta}
            </Link>
          </section>
        </div>
      </main>

      <Footer dict={dict} locale={locale as Locale} />
    </div>
  );
}
