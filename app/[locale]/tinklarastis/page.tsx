import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";
import { prefixedLocales, type Locale, getDict, languageAlternates } from "@/lib/i18n";
import { siteGraph, webPageNode, breadcrumbNode } from "@/lib/jsonld";
import { getLocalizedBlogPosts } from "@/lib/blog-i18n";

export const dynamicParams = false;

export function generateStaticParams() {
  return prefixedLocales.map((locale) => ({ locale }));
}

type Props = {
  params: Promise<{ locale: string }>;
};

const BLOG_TITLES: Record<Locale, { title: string; desc: string; eyebrow: string }> = {
  lt: { title: "Tinklaraštis ir gidai", desc: "Praktiniai patarimai verslui apie svetainių kūrimą, kainas, SEO ir technologijas.", eyebrow: "Žinių bazė" },
  en: { title: "Blog & Guides", desc: "Practical advice for business on website development, pricing, SEO, and modern technologies.", eyebrow: "Knowledge Base" },
  pl: { title: "Blog i Poradniki", desc: "Praktyczne porady dla firm o tworzeniu stron internetowych, cennikach, SEO i technologiach.", eyebrow: "Baza Wiedzy" },
  lv: { title: "Blogs un Ceļveži", desc: "Praktiski padomi uzņēmumiem par mājaslapu izstrādi, cenām, SEO un tehnoloģijām.", eyebrow: "Zināšanu Bāze" },
  et: { title: "Blogi ja Juhised", desc: "Praktilised nõuanded ettevõtetele kodulehtede valmistamisest, hindadest ja SEO-st.", eyebrow: "Teadmusbaas" },
  ru: { title: "Блог и Руководства", desc: "Практические советы для бизнеса о разработке сайтов, ценах, SEO и веб-технологиях.", eyebrow: "База Знаний" },
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  if (!prefixedLocales.includes(locale as any)) return {};

  const info = BLOG_TITLES[locale as Locale] ?? BLOG_TITLES.en;
  const canonical = `https://sitestudio.lt/${locale}/tinklarastis`;

  return {
    // absolute: the string already carries "| SiteStudio" — the root
    // "%s | SiteStudio" template would otherwise duplicate it.
    title: { absolute: `${info.title} | SiteStudio` },
    description: info.desc,
    alternates: {
      canonical,
      languages: languageAlternates,
    },
  };
}

export default async function LocalizedBlogHub({ params }: Props) {
  const { locale: rawLocale } = await params;
  if (!prefixedLocales.includes(rawLocale as any)) notFound();
  const locale = rawLocale as Locale;

  const dict = await getDict(locale);
  const info = BLOG_TITLES[locale] ?? BLOG_TITLES.en;
  const posts = getLocalizedBlogPosts(locale);
  const path = `/${locale}/tinklarastis`;

  const crumbs = [
    { name: dict.nav.works === "Realizacje" ? "Start" : "Home", href: `/${locale}` },
    { name: info.title },
  ];

  const jsonLd = siteGraph(
    webPageNode(path, info.title, info.desc),
    breadcrumbNode(path, crumbs)
  );

  return (
    <div className="min-h-screen bg-white text-[#0f172a] antialiased">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar dict={dict} locale={locale} />

      <main id="turinys" className="pt-28 md:pt-32 pb-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <Breadcrumbs items={crumbs} />

          <header className="mt-8 max-w-3xl">
            <p className="section-label mb-3">{info.eyebrow}</p>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#0f172a]">
              {info.title}
            </h1>
            <p className="mt-4 text-[#475569] text-base sm:text-lg leading-relaxed">
              {info.desc}
            </p>
          </header>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <article
                key={post.slug}
                className="flex flex-col justify-between rounded-3xl border border-[#0f172a]/10 bg-white p-7 shadow-sm transition-all hover:border-[#2456d6]/40 hover:shadow-md"
              >
                <div>
                  <div className="flex items-center justify-between text-xs text-[#64748b] mb-4">
                    <span className="rounded-full bg-[#e8eefc] px-3 py-1 font-semibold text-[#2456d6]">
                      {post.category}
                    </span>
                    <span>{post.readTime}</span>
                  </div>

                  <h2 className="text-lg font-bold tracking-tight text-[#0f172a] hover:text-[#2456d6] transition-colors">
                    <Link href={`/${locale}/tinklarastis/${post.slug}`}>
                      {post.title}
                    </Link>
                  </h2>

                  <p className="mt-3 text-sm text-[#475569] leading-relaxed line-clamp-3">
                    {post.description}
                  </p>
                </div>

                <div className="mt-6 pt-5 border-t border-[#0f172a]/5 flex items-center justify-between text-xs">
                  <span className="text-[#64748b]">{post.publishedAt}</span>
                  <Link
                    href={`/${locale}/tinklarastis/${post.slug}`}
                    className="font-bold text-[#2456d6] hover:underline flex items-center gap-1"
                  >
                    Read guide →
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </main>

      <Footer dict={dict} locale={locale} />
    </div>
  );
}
