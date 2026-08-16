import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";
import { getDict } from "@/lib/i18n";
import { BLOG_POSTS } from "@/lib/blog";
import { siteGraph, webPageNode, breadcrumbNode } from "@/lib/jsonld";

export const metadata: Metadata = {
  title: "Gidai ir straipsniai apie svetainių kūrimą ir SEO — SiteStudio",
  description:
    "Ekspertiniai gidai, kainų analizė, techninio SEO patarimai ir rekomendacijos Lietuvos verslui.",
  alternates: {
    canonical: "/tinklarastis",
  },
};

export default async function BlogHubPage() {
  const dict = await getDict("lt");
  const crumbs = [
    { name: "Pradžia", href: "/" },
    { name: "Gidai ir straipsniai" },
  ];

  const jsonLd = siteGraph(
    webPageNode(
      "/tinklarastis",
      "Gidai ir straipsniai apie svetainių kūrimą — SiteStudio",
      "Ekspertiniai gidai, kainų analizė ir SEO patarimai Lietuvos verslui.",
    ),
    breadcrumbNode("/tinklarastis", crumbs),
  );

  return (
    <div className="min-h-screen bg-white text-[#0f172a] antialiased">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar dict={dict} locale="lt" />

      <main id="turinys" className="pt-28 md:pt-32 pb-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <Breadcrumbs items={crumbs} />

          <header className="mt-6 max-w-3xl">
            <p className="section-label mb-3">Žinių bazė ir patarimai</p>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight">
              Gidai ir straipsniai <span className="text-[#2456d6]">verslui</span>
            </h1>
            <p className="mt-5 text-[#475569] text-base sm:text-lg leading-relaxed">
              Praktinės įžvalgos apie svetainių kūrimo kainas, technologijų pasirinkimą (Next.js vs WordPress), vietinį SEO ir procesų automatizavimą.
            </p>
          </header>

          <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {BLOG_POSTS.map((post) => (
              <article
                key={post.slug}
                className="group flex flex-col justify-between rounded-2xl border border-[#0f172a]/10 bg-white p-7 shadow-sm hover:border-[#2456d6] hover:shadow-md transition-all"
              >
                <div>
                  <div className="flex items-center justify-between text-xs font-semibold text-[#64748b] mb-4">
                    <span className="rounded-full bg-[#e8eefc] px-3 py-0.5 text-[#2456d6] font-medium">
                      {post.category}
                    </span>
                    <span>{post.readTime}</span>
                  </div>
                  <h2 className="text-lg font-bold text-[#0f172a] group-hover:text-[#2456d6] transition-colors leading-snug">
                    <Link href={`/tinklarastis/${post.slug}`}>
                      {post.title}
                    </Link>
                  </h2>
                  <p className="mt-3 text-sm text-[#475569] leading-relaxed line-clamp-3">
                    {post.description}
                  </p>
                </div>

                <div className="mt-6 border-t border-[#0f172a]/5 pt-4 flex items-center justify-between text-xs font-semibold text-[#2456d6]">
                  <Link href={`/tinklarastis/${post.slug}`} className="inline-flex items-center gap-1 hover:underline">
                    Skaityti gidą <span>→</span>
                  </Link>
                  <time dateTime={post.publishedAt} className="text-[#94a3b8] font-normal">
                    {post.publishedAt}
                  </time>
                </div>
              </article>
            ))}
          </div>

          <section className="mt-16 rounded-3xl bg-[#2456d6] p-8 md:p-12 text-white">
            <div className="max-w-2xl">
              <h2 className="text-2xl sm:text-3xl font-extrabold">Reikia patarimo dėl svetainės projekto?</h2>
              <p className="mt-3 text-white/80 text-sm sm:text-base leading-relaxed">
                Parašykite mums — atsakysime per vieną darbo dieną ir pakonsultuosime be jokių įsipareigojimų.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Link href="/kontaktai" className="rounded-xl bg-white px-6 py-3 text-sm font-bold text-[#2456d6] shadow-md hover:bg-[#f8fafc] transition-colors">
                  Susisiekti su mumis
                </Link>
              </div>
            </div>
          </section>
        </div>
      </main>

      <Footer dict={dict} locale="lt" />
    </div>
  );
}
