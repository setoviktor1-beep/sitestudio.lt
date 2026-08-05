import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";
import { getDict } from "@/lib/i18n";
import {
  siteGraph,
  webPageNode,
  serviceNode,
  breadcrumbNode,
  faqNode,
} from "@/lib/jsonld";

export type ServicePageContent = {
  path: string;
  metaTitle: string;
  metaDescription: string;
  breadcrumbName: string;
  eyebrow: string;
  h1: string;
  intro: string[];
  audience: { title: string; items: string[] };
  deliverables: { title: string; sub?: string; items: string[] };
  sections?: { id?: string; title: string; body: string[] }[];
  process?: { title: string; steps: { title: string; description: string }[] };
  pricing?: {
    title: string;
    note?: string;
    rows: { name: string; price: string; description: string }[];
  };
  examples?: { title: string; items: { name: string; href: string; description: string }[] };
  faq?: { q: string; a: string }[];
  related: { href: string; label: string }[];
  cta: { title: string; text: string };
};

export default async function ServicePage({ content }: { content: ServicePageContent }) {
  const dict = await getDict("lt");
  const crumbs = [
    { name: "Pradžia", href: "/" },
    { name: "Paslaugos", href: "/paslaugos" },
    { name: content.breadcrumbName },
  ];

  const jsonLd = siteGraph(
    webPageNode(content.path, content.metaTitle, content.metaDescription),
    serviceNode(
      content.path,
      content.breadcrumbName,
      content.metaDescription,
      content.pricing?.rows.map((r) => ({ name: r.name, price: r.price })),
    ),
    breadcrumbNode(content.path, crumbs),
    ...(content.faq ? [faqNode(content.path, content.faq)] : []),
  );

  return (
    <div className="min-h-screen bg-white text-[#0f172a] antialiased">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar dict={dict} locale="lt" />
      <main id="turinys" className="pt-28 md:pt-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <Breadcrumbs items={crumbs} />

          <header className="mt-6 max-w-3xl">
            <p className="section-label mb-3">{content.eyebrow}</p>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight">
              {content.h1}
            </h1>
            {content.intro.map((p) => (
              <p key={p} className="mt-5 text-[#475569] text-base sm:text-lg leading-relaxed">
                {p}
              </p>
            ))}
            <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <Link href="/kontaktai" className="btn-primary">
                Gauti pasiūlymą
              </Link>
              <Link href="/darbai" className="btn-ghost">
                Žiūrėti atliktus darbus
              </Link>
            </div>
          </header>

          {/* Audience */}
          <section className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="rounded-2xl bg-[#f6f8fb] border border-[#0f172a]/5 p-8">
              <h2 className="text-xl font-bold">{content.audience.title}</h2>
              <ul className="mt-5 space-y-3">
                {content.audience.items.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm text-[#334155] leading-relaxed">
                    <svg className="mt-0.5 h-4 w-4 shrink-0 text-[#2456d6]" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                      <path fillRule="evenodd" d="M16.7 5.3a1 1 0 010 1.4l-8 8a1 1 0 01-1.4 0l-4-4a1 1 0 111.4-1.4L8 12.6l7.3-7.3a1 1 0 011.4 0z" clipRule="evenodd" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl bg-white border border-[#0f172a]/10 shadow-soft p-8">
              <h2 className="text-xl font-bold">{content.deliverables.title}</h2>
              {content.deliverables.sub && (
                <p className="mt-2 text-sm text-[#64748b]">{content.deliverables.sub}</p>
              )}
              <ul className="mt-5 space-y-3">
                {content.deliverables.items.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm text-[#334155] leading-relaxed">
                    <svg className="mt-0.5 h-4 w-4 shrink-0 text-[#2456d6]" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                      <path fillRule="evenodd" d="M16.7 5.3a1 1 0 010 1.4l-8 8a1 1 0 01-1.4 0l-4-4a1 1 0 111.4-1.4L8 12.6l7.3-7.3a1 1 0 011.4 0z" clipRule="evenodd" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* Unique long-form sections */}
          {content.sections?.map((section) => (
            <section key={section.title} id={section.id} className="mt-16 max-w-3xl scroll-mt-28">
              <h2 className="text-2xl font-bold">{section.title}</h2>
              {section.body.map((p) => (
                <p key={p} className="mt-4 text-[#475569] leading-relaxed">
                  {p}
                </p>
              ))}
            </section>
          ))}

          {/* Process */}
          {content.process && (
            <section className="mt-16">
              <h2 className="text-2xl font-bold">{content.process.title}</h2>
              <ol className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {content.process.steps.map((step, idx) => (
                  <li key={step.title} className="rounded-2xl border border-[#0f172a]/10 p-6 bg-white shadow-soft">
                    <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#e8eefc] text-sm font-bold text-[#2456d6]">
                      {idx + 1}
                    </span>
                    <h3 className="mt-4 font-bold">{step.title}</h3>
                    <p className="mt-2 text-sm text-[#475569] leading-relaxed">{step.description}</p>
                  </li>
                ))}
              </ol>
            </section>
          )}

          {/* Pricing */}
          {content.pricing && (
            <section className="mt-16">
              <h2 className="text-2xl font-bold">{content.pricing.title}</h2>
              <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
                {content.pricing.rows.map((row) => (
                  <div key={row.name} className="rounded-2xl border border-[#0f172a]/10 bg-[#f6f8fb] p-7">
                    <h3 className="font-bold">{row.name}</h3>
                    <p className="mt-1 text-2xl font-extrabold text-[#2456d6]">{row.price}</p>
                    <p className="mt-3 text-sm text-[#475569] leading-relaxed">{row.description}</p>
                  </div>
                ))}
              </div>
              {content.pricing.note && (
                <p className="mt-5 text-sm text-[#64748b] max-w-3xl">{content.pricing.note}</p>
              )}
            </section>
          )}

          {/* Portfolio examples */}
          {content.examples && (
            <section className="mt-16">
              <h2 className="text-2xl font-bold">{content.examples.title}</h2>
              <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {content.examples.items.map((ex) => (
                  <Link
                    key={ex.href}
                    href={ex.href}
                    className="rounded-2xl border border-[#0f172a]/10 bg-white shadow-soft p-7 card-hover block"
                  >
                    <h3 className="font-bold text-[#0f172a]">{ex.name}</h3>
                    <p className="mt-2 text-sm text-[#475569] leading-relaxed">{ex.description}</p>
                    <span className="mt-4 inline-block text-sm font-semibold text-[#2456d6]">
                      Skaityti projekto istoriją <span aria-hidden="true">→</span>
                    </span>
                  </Link>
                ))}
              </div>
            </section>
          )}

          {/* FAQ */}
          {content.faq && (
            <section className="mt-16 max-w-3xl">
              <h2 className="text-2xl font-bold">Dažni klausimai</h2>
              <div className="mt-6 space-y-4">
                {content.faq.map((item) => (
                  <details key={item.q} className="group rounded-2xl border border-[#0f172a]/10 bg-white p-6">
                    <summary className="cursor-pointer list-none font-semibold text-[#0f172a] flex items-center justify-between gap-4">
                      {item.q}
                      <svg className="h-4 w-4 shrink-0 text-[#64748b] transition-transform group-open:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </summary>
                    <p className="mt-4 text-sm text-[#475569] leading-relaxed">{item.a}</p>
                  </details>
                ))}
              </div>
            </section>
          )}

          {/* Related services */}
          <section className="mt-16">
            <h2 className="text-lg font-bold">Susijusios paslaugos</h2>
            <ul className="mt-4 flex flex-wrap gap-3">
              {content.related.map((rel) => (
                <li key={rel.href}>
                  <Link
                    href={rel.href}
                    className="inline-block rounded-full border border-[#0f172a]/10 bg-white px-4 py-2 text-sm font-medium text-[#334155] hover:border-[#2456d6]/40 hover:text-[#2456d6] transition-colors"
                  >
                    {rel.label}
                  </Link>
                </li>
              ))}
            </ul>
          </section>

          {/* CTA */}
          <section className="my-16 rounded-2xl bg-[#0f172a] p-8 sm:p-12 text-center">
            <h2 className="text-2xl font-bold text-white">{content.cta.title}</h2>
            <p className="mt-3 text-white/70 text-sm max-w-xl mx-auto">{content.cta.text}</p>
            <Link href="/kontaktai" className="btn-primary mt-6">
              Susisiekti dėl pasiūlymo
            </Link>
          </section>
        </div>
      </main>
      <Footer dict={dict} locale="lt" />
    </div>
  );
}
