import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";
import { getDict, pathAlternates } from "@/lib/i18n";
import { BLOG_POSTS, getBlogPostBySlug } from "@/lib/blog";
import {
  siteGraph,
  webPageNode,
  breadcrumbNode,
  PERSON_ID,
} from "@/lib/jsonld";

export const dynamicParams = false;

export function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);
  if (!post) return {};

  const title = `${post.title} | SiteStudio`;
  const description = post.description;

  return {
    title,
    description,
    alternates: {
      canonical: `/tinklarastis/${post.slug}`,
      languages: pathAlternates(`/tinklarastis/${post.slug}`),
    },
    openGraph: {
      type: "article",
      url: `https://sitestudio.lt/tinklarastis/${post.slug}`,
      title,
      description,
      siteName: "SiteStudio",
      images: ["/opengraph-image"],
      publishedTime: post.publishedAt,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["/opengraph-image"],
    },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);
  if (!post) notFound();

  const dict = await getDict("lt");
  const path = `/tinklarastis/${post.slug}`;

  const crumbs = [
    { name: "Pradžia", href: "/" },
    { name: "Gidai ir straipsniai", href: "/tinklarastis" },
    { name: post.title },
  ];

  const articleNode = {
    "@type": "BlogPosting",
    "@id": `https://sitestudio.lt${path}#article`,
    headline: post.title,
    description: post.description,
    image: ["https://sitestudio.lt/opengraph-image"],
    datePublished: post.publishedAt,
    dateModified: post.publishedAt,
    author: {
      "@id": PERSON_ID,
    },
    publisher: {
      "@id": "https://sitestudio.lt/#organization",
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

  const otherPosts = BLOG_POSTS.filter((p) => p.slug !== post.slug).slice(0, 3);

  return (
    <div className="min-h-screen bg-white text-[#0f172a] antialiased">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar dict={dict} locale="lt" />

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
                <span>{post.readTime} skaitymo</span>
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
                  <h3 className="text-lg font-bold text-[#0f172a] mb-3">Pagrindinės išvados</h3>
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

            {/* Related pages block for the pricing post */}
            {post.slug === "kiek-kainuoja-svetaines-kurimas" && (
              <div className="mt-10 rounded-2xl border border-[#0f172a]/10 bg-[#f6f8fb] p-7">
                <h3 className="text-base font-bold text-[#0f172a] mb-4">Susiję puslapiai</h3>
                <ul className="space-y-3">
                  <li>
                    <Link
                      href="/svetainiu-kurimas"
                      className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#2456d6] hover:underline"
                    >
                      <span>→</span>
                      Svetainių kūrimas — kainos, apimtis ir procesas
                    </Link>
                    <p className="mt-0.5 text-xs text-[#64748b]">
                      Išsami informacija apie paslaugą su kainų lentele ir DUK.
                    </p>
                  </li>
                  <li>
                    <Link
                      href="/skaiciuokle"
                      className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#2456d6] hover:underline"
                    >
                      <span>→</span>
                      Svetainės kainos skaičiuoklė
                    </Link>
                    <p className="mt-0.5 text-xs text-[#64748b]">
                      Suskaičiuokite orientacinę savo svetainės kainą per 2 minutes.
                    </p>
                  </li>
                </ul>
              </div>
            )}

            {/* Author Box */}
            <div className="mt-12 rounded-2xl border border-[#0f172a]/10 p-6 flex flex-col sm:flex-row items-start sm:items-center gap-4 bg-white">
              <div className="h-12 w-12 rounded-full bg-[#2456d6] text-white flex items-center justify-center font-bold text-lg">
                VS
              </div>
              <div>
                <p className="font-bold text-sm text-[#0f172a]">Viktor Seto</p>
                <p className="text-xs text-[#64748b]">Svetainių ir interneto sistemų kūrėjas • SiteStudio įkūrėjas</p>
                <p className="text-xs text-[#475569] mt-1">Padeda Lietuvos verslams kurti greitas, konvertuojančias svetaines ir automatizuoti procesus.</p>
              </div>
            </div>

            {/* CTA Banner */}
            <div className="mt-12 rounded-3xl bg-[#2456d6] p-8 text-white">
              <h2 className="text-2xl font-bold">Turite klausimų dėl savo svetainės?</h2>
              <p className="mt-2 text-white/80 text-sm">
                Pasitarkite tiesiogiai su kūrėju — per vieną darbo dieną atsakysime ir pateiksime rekomendacijas.
              </p>
              <div className="mt-5">
                <Link href="/kontaktai" className="rounded-xl bg-white px-6 py-2.5 text-sm font-bold text-[#2456d6] shadow-sm hover:bg-[#f8fafc] transition-colors inline-block">
                  Gauti nemokamą konsultaciją
                </Link>
              </div>
            </div>

            {/* Related Posts */}
            {otherPosts.length > 0 && (
              <div className="mt-16 border-t border-[#0f172a]/10 pt-10">
                <h2 className="text-xl font-bold text-[#0f172a] mb-6">Kiti naudingi gidai ir straipsniai</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {otherPosts.map((op) => (
                    <Link
                      key={op.slug}
                      href={`/tinklarastis/${op.slug}`}
                      className="group flex flex-col justify-between rounded-xl border border-[#0f172a]/10 p-5 hover:border-[#2456d6] transition-all bg-white"
                    >
                      <div>
                        <span className="text-[11px] font-semibold text-[#2456d6]">{op.category}</span>
                        <h3 className="font-bold text-sm text-[#0f172a] mt-1 group-hover:text-[#2456d6] transition-colors line-clamp-2">
                          {op.title}
                        </h3>
                      </div>
                      <p className="text-xs text-[#64748b] mt-4">{op.readTime}</p>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </article>
        </div>
      </main>

      <Footer dict={dict} locale="lt" />
    </div>
  );
}
