import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";
import { prefixedLocales, type Locale, getDict, languageAlternates } from "@/lib/i18n";
import { siteGraph, webPageNode, breadcrumbNode } from "@/lib/jsonld";
import { BLOG_POSTS } from "@/lib/blog";
import { getLocalizedBlogPost, getLocalizedBlogPosts } from "@/lib/blog-i18n";

export const dynamicParams = false;

export function generateStaticParams() {
  const params: { locale: string; slug: string }[] = [];
  for (const locale of prefixedLocales) {
    for (const post of BLOG_POSTS) {
      params.push({ locale, slug: post.slug });
    }
  }
  return params;
}

type Props = {
  params: Promise<{ locale: string; slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, slug } = await params;
  if (!prefixedLocales.includes(locale as any)) return {};

  const post = getLocalizedBlogPost(slug, locale as Locale);
  if (!post) return {};

  const canonical = `https://sitestudio.lt/${locale}/tinklarastis/${slug}`;

  return {
    title: `${post.title} | SiteStudio`,
    description: post.description,
    alternates: {
      canonical,
      languages: languageAlternates,
    },
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
      publishedTime: post.publishedAt,
      url: canonical,
    },
  };
}

export default async function LocalizedBlogPostPage({ params }: Props) {
  const { locale: rawLocale, slug } = await params;
  if (!prefixedLocales.includes(rawLocale as any)) notFound();
  const locale = rawLocale as Locale;

  const post = getLocalizedBlogPost(slug, locale);
  if (!post) notFound();

  const dict = await getDict(locale);
  const path = `/${locale}/tinklarastis/${slug}`;

  const crumbs = [
    { name: dict.nav.works === "Realizacje" ? "Start" : "Home", href: `/${locale}` },
    { name: dict.nav.blog, href: `/${locale}/tinklarastis` },
    { name: post.title },
  ];

  const articleNode = {
    "@type": "BlogPosting",
    "@id": `https://sitestudio.lt${path}#article`,
    headline: post.title,
    description: post.description,
    datePublished: post.publishedAt,
    dateModified: post.publishedAt,
    author: {
      "@type": "Person",
      name: "Viktor Seto",
      jobTitle: "Founder & Lead Developer",
      url: "https://sitestudio.lt/apie",
    },
    publisher: {
      "@type": "Organization",
      name: "SiteStudio",
      url: "https://sitestudio.lt",
    },
    mainEntityOfPage: {
      "@id": `https://sitestudio.lt${path}#webpage`,
    },
  };

  const jsonLd = siteGraph(
    webPageNode(path, post.title, post.description),
    articleNode,
    breadcrumbNode(path, crumbs),
  );

  const otherPosts = getLocalizedBlogPosts(locale).filter((p) => p.slug !== post.slug).slice(0, 3);

  return (
    <div className="min-h-screen bg-white text-[#0f172a] antialiased">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar dict={dict} locale={locale} />

      <main id="turinys" className="pt-28 md:pt-32 pb-20">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <Breadcrumbs items={crumbs} />

          <article className="mt-8">
            <header>
              <div className="flex items-center gap-3 text-xs font-semibold text-[#64748b] mb-3">
                <span className="rounded-full bg-[#e8eefc] px-3 py-1 text-[#2456d6] font-medium">
                  {post.category}
                </span>
                <span>•</span>
                <time dateTime={post.publishedAt}>{post.publishedAt}</time>
                <span>•</span>
                <span>{post.readTime}</span>
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-extrabold tracking-tight text-[#0f172a] leading-[1.2]">
                {post.title}
              </h1>
              <p className="mt-6 text-lg sm:text-xl text-[#475569] leading-relaxed font-normal border-l-4 border-[#2456d6] pl-4">
                {post.content.intro}
              </p>
            </header>

            <div className="mt-10 space-y-10 border-t border-[#0f172a]/10 pt-10 text-base leading-relaxed text-[#334155]">
              {post.content.sections.map((section) => (
                <section key={section.heading} className="space-y-4">
                  <h2 className="text-2xl font-bold text-[#0f172a] tracking-tight">
                    {section.heading}
                  </h2>
                  {section.paragraphs.map((p, idx) => (
                    <p key={idx} className="leading-relaxed">
                      {p}
                    </p>
                  ))}
                </section>
              ))}

              {post.content.takeaways.length > 0 && (
                <div className="mt-10 rounded-2xl bg-[#f6f8fb] border border-[#0f172a]/10 p-7">
                  <h3 className="text-lg font-bold text-[#0f172a] mb-3">Key Takeaways</h3>
                  <ul className="space-y-2 text-sm text-[#334155]">
                    {post.content.takeaways.map((takeaway, idx) => (
                      <li key={idx} className="flex items-start gap-2.5">
                        <svg className="mt-0.5 h-4 w-4 shrink-0 text-[#2456d6]" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M16.7 5.3a1 1 0 010 1.4l-8 8a1 1 0 01-1.4 0l-4-4a1 1 0 111.4-1.4L8 12.6l7.3-7.3a1 1 0 011.4 0z" clipRule="evenodd" />
                        </svg>
                        <span>{takeaway}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            {/* Author box */}
            <div className="mt-12 rounded-3xl border border-[#0f172a]/10 bg-[#f6f8fb] p-8 flex flex-col sm:flex-row items-center sm:items-start gap-6">
              <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-[#2456d6] text-white font-extrabold text-2xl">
                V
              </div>
              <div className="flex-1 text-center sm:text-left">
                <h3 className="text-lg font-bold text-[#0f172a]">Viktor Seto</h3>
                <p className="text-xs text-[#2456d6] font-semibold mt-0.5">Founder & Lead Developer @ SiteStudio</p>
                <p className="mt-2 text-sm text-[#475569] leading-relaxed">
                  Passionate about building blazing-fast websites, custom web applications, and business workflow automations. Direct contact with clients without agency overhead.
                </p>
              </div>
            </div>

            {/* CTA */}
            <div className="mt-10 rounded-3xl bg-[#0f172a] p-8 sm:p-10 text-white text-center sm:text-left flex flex-col sm:flex-row justify-between items-center gap-6">
              <div>
                <h3 className="text-xl sm:text-2xl font-bold">Ready to build or upgrade your website?</h3>
                <p className="mt-2 text-white/70 text-sm max-w-md">
                  Get in touch for a fixed-price quote and timeline within 1 business day.
                </p>
              </div>
              <Link
                href={`/${locale}/kontaktai`}
                className="btn-primary shrink-0 !bg-[#2456d6] !text-white hover:!bg-[#1a41ab]"
              >
                {dict.nav.cta}
              </Link>
            </div>

            {/* Other articles */}
            {otherPosts.length > 0 && (
              <div className="mt-16 border-t border-[#0f172a]/10 pt-12">
                <h3 className="text-2xl font-bold text-[#0f172a] mb-6">More Guides</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {otherPosts.map((other) => (
                    <Link
                      key={other.slug}
                      href={`/${locale}/tinklarastis/${other.slug}`}
                      className="rounded-2xl border border-[#0f172a]/10 p-5 hover:border-[#2456d6] hover:shadow-sm transition-all flex flex-col justify-between"
                    >
                      <div>
                        <span className="text-[11px] font-semibold text-[#2456d6] bg-[#e8eefc] px-2.5 py-0.5 rounded-full">
                          {other.category}
                        </span>
                        <h4 className="font-bold text-sm text-[#0f172a] mt-2 line-clamp-2">
                          {other.title}
                        </h4>
                      </div>
                      <p className="text-xs text-[#2456d6] font-semibold mt-4">
                        Read →
                      </p>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </article>
        </div>
      </main>

      <Footer dict={dict} locale={locale} />
    </div>
  );
}
