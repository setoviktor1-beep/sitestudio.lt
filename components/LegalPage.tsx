import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";
import { getDict, homePath, type Locale } from "@/lib/i18n";
import {
  legalAlternates,
  legalDocuments,
  legalPath,
  type LegalKey,
} from "@/lib/legal";
import { breadcrumbNode, siteGraph, webPageNode } from "@/lib/jsonld";

const externalSources: Record<"privacy" | "cookies", { href: string; labelKey: "googleData" | "legalBases" | "complaints" | "cookieUsage" | "consent" }[]> = {
  privacy: [
    { href: "https://support.google.com/analytics/answer/11593727", labelKey: "googleData" },
    { href: "https://commission.europa.eu/law/law-topic/data-protection/information-business-and-organisations/legal-grounds-processing-data_en", labelKey: "legalBases" },
    { href: "https://vdai.lrv.lt/lt/veiklos-sritys-1/skundu-nagrinejimas/", labelKey: "complaints" },
  ],
  cookies: [
    { href: "https://support.google.com/analytics/answer/11397207", labelKey: "cookieUsage" },
    { href: "https://support.google.com/analytics/answer/12329599", labelKey: "consent" },
  ],
};

const sourceLabels: Record<Locale, Record<(typeof externalSources.privacy)[number]["labelKey"], string>> = {
  lt: { googleData: "Google Analytics — duomenų rinkimas", legalBases: "Europos Komisija — duomenų tvarkymo pagrindai", complaints: "VDAI — skundai ir duomenų subjektų teisės", cookieUsage: "Google Analytics 4 — slapukų naudojimas", consent: "Google Analytics — sutikimo valdymas" },
  en: { googleData: "Google Analytics — data collection", legalBases: "European Commission — legal grounds for processing", complaints: "VDAI — complaints and data-subject rights", cookieUsage: "Google Analytics 4 — cookie usage", consent: "Google Analytics — consent management" },
  pl: { googleData: "Google Analytics — gromadzenie danych", legalBases: "Komisja Europejska — podstawy przetwarzania", complaints: "VDAI — skargi i prawa osób", cookieUsage: "Google Analytics 4 — pliki cookie", consent: "Google Analytics — zarządzanie zgodą" },
  lv: { googleData: "Google Analytics — datu vākšana", legalBases: "Eiropas Komisija — apstrādes tiesiskais pamats", complaints: "VDAI — sūdzības un datu subjektu tiesības", cookieUsage: "Google Analytics 4 — sīkdatnes", consent: "Google Analytics — piekrišanas pārvaldība" },
  et: { googleData: "Google Analytics — andmete kogumine", legalBases: "Euroopa Komisjon — töötlemise õiguslik alus", complaints: "VDAI — kaebused ja andmesubjekti õigused", cookieUsage: "Google Analytics 4 — küpsised", consent: "Google Analytics — nõusoleku haldamine" },
  ru: { googleData: "Google Analytics — сбор данных", legalBases: "Европейская комиссия — основания обработки", complaints: "VDAI — жалобы и права субъектов", cookieUsage: "Google Analytics 4 — использование cookie", consent: "Google Analytics — управление согласием" },
};

export default async function LegalPage({ locale, documentKey }: { locale: Locale; documentKey: LegalKey }) {
  const dict = await getDict(locale);
  const document = legalDocuments[locale][documentKey];
  const path = legalPath(locale, documentKey);
  const crumbs = [{ name: document.back, href: homePath(locale) }, { name: document.title }];
  const jsonLd = siteGraph(
    webPageNode(path, document.title, document.description, locale),
    breadcrumbNode(path, crumbs),
  );

  return (
    <div className="min-h-screen bg-white text-[#0f172a]">
      {locale !== "lt" && (
        <script dangerouslySetInnerHTML={{ __html: `document.documentElement.lang=${JSON.stringify(locale)}` }} />
      )}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Navbar dict={dict} locale={locale} languagePaths={legalAlternates(documentKey)} />
      <main id="turinys" className="mx-auto max-w-4xl px-6 pb-20 pt-28 lg:px-8 md:pt-32">
        <Breadcrumbs items={crumbs} />
        <header className="mt-6 border-b border-slate-200 pb-8">
          <h1 className="text-3xl font-extrabold tracking-tight sm:text-4xl">{document.title}</h1>
          <p className="mt-4 max-w-3xl text-base leading-relaxed text-[#475569]">{document.intro}</p>
          <p className="mt-4 text-xs font-medium text-[#64748b]">{document.updatedLabel}</p>
        </header>

        <div className="mt-10 space-y-10 text-sm leading-7 text-[#334155]">
          {document.sections.map((section) => (
            <section key={section.heading}>
              <h2 className="text-xl font-bold text-[#0f172a]">{section.heading}</h2>
              {section.paragraphs?.map((paragraph) => <p key={paragraph} className="mt-4">{paragraph}</p>)}
              {section.bullets && (
                <ul className="mt-4 list-disc space-y-2 pl-5">
                  {section.bullets.map((item) => <li key={item}>{item}</li>)}
                </ul>
              )}
              {section.table && (
                <div className="mt-5 overflow-x-auto rounded-xl border border-slate-200">
                  <table className="min-w-full border-collapse text-left text-sm">
                    <thead className="bg-slate-50 text-[#0f172a]">
                      <tr>{section.table.headers.map((header) => <th key={header} scope="col" className="px-4 py-3 font-semibold">{header}</th>)}</tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200">
                      {section.table.rows.map((row) => (
                        <tr key={row[0]}>{row.map((cell, index) => <td key={`${row[0]}-${index}`} className="px-4 py-3 align-top">{cell}</td>)}</tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </section>
          ))}

          <section className="rounded-2xl bg-[#f6f8fb] p-6">
            <h2 className="text-lg font-bold text-[#0f172a]">{document.sourcesLabel}</h2>
            <ul className="mt-3 space-y-2">
              {documentKey === "terms" ? (
                <>
                  <li><Link className="text-[#2456d6] underline" href={legalPath(locale, "privacy")}>{legalDocuments[locale].privacy.title}</Link></li>
                  <li><Link className="text-[#2456d6] underline" href={legalPath(locale, "cookies")}>{legalDocuments[locale].cookies.title}</Link></li>
                </>
              ) : (
                externalSources[documentKey].map((source) => (
                  <li key={source.href}><a className="text-[#2456d6] underline" href={source.href} target="_blank" rel="noopener noreferrer">{sourceLabels[locale][source.labelKey]}</a></li>
                ))
              )}
              <li><a className="text-[#2456d6] underline" href="mailto:viktor@sitestudio.lt">viktor@sitestudio.lt</a></li>
            </ul>
          </section>
        </div>
      </main>
      <Footer dict={dict} locale={locale} />
    </div>
  );
}
