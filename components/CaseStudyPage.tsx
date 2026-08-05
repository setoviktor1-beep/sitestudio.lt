import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";
import { getDict } from "@/lib/i18n";
import { siteGraph, webPageNode, breadcrumbNode, BASE_URL, ORG_ID } from "@/lib/jsonld";

export type CaseStudyContent = {
  path: string;
  metaTitle: string;
  metaDescription: string;
  breadcrumbName: string;
  projectType: string;
  h1: string;
  intro: string;
  /** Live project URL; null while the project is not publicly reachable. */
  liveUrl: string | null;
  liveDomain: string;
  image: { src: string; alt: string };
  problem: { title: string; body: string[] };
  solution: { title: string; body: string[] };
  features: string[];
  decisions: { title: string; body: string[] };
  tech?: string;
  relatedService: { href: string; label: string };
  otherCases: { href: string; label: string }[];
};

export default async function CaseStudyPage({ content }: { content: CaseStudyContent }) {
  const dict = await getDict("lt");
  const crumbs = [
    { name: "Pradžia", href: "/" },
    { name: "Darbai", href: "/darbai" },
    { name: content.breadcrumbName },
  ];

  const jsonLd = siteGraph(
    webPageNode(content.path, content.metaTitle, content.metaDescription),
    breadcrumbNode(content.path, crumbs),
    {
      "@type": "CreativeWork",
      "@id": `${BASE_URL}${content.path}#project`,
      name: content.breadcrumbName,
      description: content.metaDescription,
      creator: { "@id": ORG_ID },
      ...(content.liveUrl ? { url: content.liveUrl } : {}),
    },
  );

  return (
    <div className="min-h-screen bg-white text-[#0f172a] antialiased">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar dict={dict} locale="lt" />
      <main id="turinys" className="pt-28 md:pt-32">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <Breadcrumbs items={crumbs} />

          <header className="mt-6">
            <p className="section-label mb-3">{content.projectType}</p>
            <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight leading-tight">
              {content.h1}
            </h1>
            <p className="mt-5 text-[#475569] text-base sm:text-lg leading-relaxed">
              {content.intro}
            </p>
            {content.liveUrl ? (
              <a
                href={content.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[#2456d6] hover:underline"
              >
                Atsidaryti {content.liveDomain}
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                </svg>
              </a>
            ) : (
              <p className="mt-5 inline-block rounded-full bg-amber-100 px-4 py-1.5 text-xs font-semibold text-amber-800">
                Projektas šiuo metu kuriamas
              </p>
            )}
          </header>

          <div className="browser-frame mt-10">
            <div className="browser-frame-bar">
              <span className="browser-dot" />
              <span className="browser-dot" />
              <span className="browser-dot" />
              <span className="ml-3 flex-1 rounded-md bg-white border border-black/5 px-3 py-1 text-[11px] text-[#64748b]">
                {content.liveDomain}
              </span>
            </div>
            <div className="relative aspect-[16/10]">
              <Image
                src={content.image.src}
                alt={content.image.alt}
                fill
                priority
                sizes="(min-width: 1024px) 56rem, 100vw"
                className="object-cover object-top"
              />
            </div>
          </div>

          <section className="mt-12">
            <h2 className="text-2xl font-bold">{content.problem.title}</h2>
            {content.problem.body.map((p) => (
              <p key={p} className="mt-4 text-[#475569] leading-relaxed">{p}</p>
            ))}
          </section>

          <section className="mt-12">
            <h2 className="text-2xl font-bold">{content.solution.title}</h2>
            {content.solution.body.map((p) => (
              <p key={p} className="mt-4 text-[#475569] leading-relaxed">{p}</p>
            ))}
          </section>

          <section className="mt-12">
            <h2 className="text-2xl font-bold">Pagrindinės funkcijos</h2>
            <ul className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3">
              {content.features.map((feature) => (
                <li key={feature} className="flex items-start gap-2.5 rounded-xl bg-[#f6f8fb] border border-[#0f172a]/5 p-4 text-sm text-[#334155] leading-relaxed">
                  <svg className="mt-0.5 h-4 w-4 shrink-0 text-[#2456d6]" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fillRule="evenodd" d="M16.7 5.3a1 1 0 010 1.4l-8 8a1 1 0 01-1.4 0l-4-4a1 1 0 111.4-1.4L8 12.6l7.3-7.3a1 1 0 011.4 0z" clipRule="evenodd" />
                  </svg>
                  {feature}
                </li>
              ))}
            </ul>
          </section>

          <section className="mt-12">
            <h2 className="text-2xl font-bold">{content.decisions.title}</h2>
            {content.decisions.body.map((p) => (
              <p key={p} className="mt-4 text-[#475569] leading-relaxed">{p}</p>
            ))}
            {content.tech && (
              <p className="mt-4 text-sm text-[#64748b]">{content.tech}</p>
            )}
          </section>

          <section className="mt-12 flex flex-wrap items-center gap-3">
            <Link
              href={content.relatedService.href}
              className="inline-block rounded-full border border-[#0f172a]/10 bg-white px-4 py-2 text-sm font-medium text-[#334155] hover:border-[#2456d6]/40 hover:text-[#2456d6] transition-colors"
            >
              {content.relatedService.label}
            </Link>
            {content.otherCases.map((c) => (
              <Link
                key={c.href}
                href={c.href}
                className="inline-block rounded-full border border-[#0f172a]/10 bg-white px-4 py-2 text-sm font-medium text-[#334155] hover:border-[#2456d6]/40 hover:text-[#2456d6] transition-colors"
              >
                {c.label}
              </Link>
            ))}
          </section>

          <section className="my-16 rounded-2xl bg-[#0f172a] p-8 sm:p-12 text-center">
            <h2 className="text-2xl font-bold text-white">Norite panašaus sprendimo?</h2>
            <p className="mt-3 text-white/70 text-sm max-w-xl mx-auto">
              Papasakokite apie savo veiklą — per vieną darbo dieną atsakysime su konkrečiu pasiūlymu.
            </p>
            <Link href="/kontaktai" className="btn-primary mt-6">
              Gauti pasiūlymą
            </Link>
          </section>
        </div>
      </main>
      <Footer dict={dict} locale="lt" />
    </div>
  );
}
