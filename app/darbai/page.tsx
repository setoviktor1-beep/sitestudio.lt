import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Works from "@/components/Works";
import Footer from "@/components/Footer";
import { getDict } from "@/lib/i18n";

export const metadata: Metadata = {
  title: "Darbai — atlikti projektai",
  description:
    "SiteStudio atlikti darbai: veikiančios svetainės ir aplikacijos — leonamai.lt, situacija.eu, mini-social.online ir teisinėatrama.lt. Realūs projektai, kuriuos galite atsidaryti.",
  alternates: { canonical: "/darbai" },
};

const portfolioUrls = [
  "https://leonamai.lt",
  "https://situacija.eu",
  "https://mini-social.online",
  "https://xn--teisinatrama-jvb.lt",
];

export default async function DarbaiPage() {
  const dict = await getDict("lt");
  const portfolioJsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "SiteStudio atlikti darbai",
    itemListElement: dict.works.items.map((work, idx) => ({
      "@type": "ListItem",
      position: idx + 1,
      item: {
        "@type": "WebSite",
        name: work.title,
        url: portfolioUrls[idx],
        description: work.description,
      },
    })),
  };
  return (
    <div className="min-h-screen bg-white text-[#0f172a] antialiased">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(portfolioJsonLd) }}
      />
      <Navbar dict={dict} locale="lt" />
      <main className="pt-16">
        <Works dict={dict} />
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
