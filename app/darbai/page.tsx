import Link from "next/link";
import Navbar from "@/components/Navbar";
import Works from "@/components/Works";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";
import { getDict } from "@/lib/i18n";
import { siteGraph, webPageNode, breadcrumbNode, portfolioListNode } from "@/lib/jsonld";
import { portfolioProjects } from "@/lib/portfolio";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Atlikti svetainių kūrimo darbai",
  description:
    "SiteStudio atlikti darbai: leonamai.lt, situacija.eu, teisinėatrama.lt, mini-social.online ir demonstracinė el. parduotuvė futtech.store.",
  keywords: ["atlikti svetainių kūrimo darbai", "svetainių kūrimo portfolio", "SiteStudio projektai", "interneto svetainių pavyzdžiai"],
  path: "/darbai",
  image: "/works/leonamai.png",
});

export default async function DarbaiPage() {
  const dict = await getDict("lt");
  const crumbs = [{ name: "Pradžia", href: "/" }, { name: "Darbai" }];
  const jsonLd = siteGraph(
    webPageNode(
      "/darbai",
      "Atlikti svetainių kūrimo darbai",
      "SiteStudio atlikti svetainių kūrimo darbai: realūs, veikiantys klientų projektai ir nuosavi produktai.",
    ),
    breadcrumbNode("/darbai", crumbs),
    portfolioListNode(
      "/darbai",
      "SiteStudio atlikti svetainių kūrimo darbai",
      dict.works.items.map((work, index) => ({
        name: work.title,
        description: work.description,
        caseStudy: portfolioProjects[index].caseStudy,
        liveUrl: portfolioProjects[index].liveUrl,
        image: portfolioProjects[index].image,
      })),
    ),
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
          <h1 className="mt-6 text-3xl sm:text-4xl font-extrabold tracking-tight max-w-3xl">
            Atlikti svetainių kūrimo darbai
          </h1>
          <p className="mt-3 text-[#475569] max-w-2xl">
            Rodome tik realius projektus: klientų svetaines, kurias galite atsidaryti dabar,
            ir veikiančius nuosavus produktus — kiekvienas aiškiai pažymėtas.
            Prie užbaigtų projektų rasite ir išsamias projektų istorijas.
          </p>
        </div>
        <Works dict={dict} locale="lt" />
        <div className="mx-auto max-w-7xl px-6 lg:px-8 pb-20">
          <div className="rounded-2xl bg-[#0f172a] p-8 sm:p-10 text-center">
            <h2 className="text-2xl font-bold text-white">Norite tokio rezultato savo verslui?</h2>
            <p className="mt-2 text-white/70 text-sm">
              Papasakokite apie savo veiklą — pasiūlysime sprendimą ir konkrečią kainą.
            </p>
            <Link href="/kontaktai" className="btn-primary mt-6">
              Gauti pasiūlymą
            </Link>
          </div>
        </div>
      </main>
      <Footer dict={dict} locale="lt" />
    </div>
  );
}
