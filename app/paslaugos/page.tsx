import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Services from "@/components/Services";
import Pricing from "@/components/Pricing";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";
import { getDict, pathAlternates } from "@/lib/i18n";
import { siteGraph, webPageNode, breadcrumbNode } from "@/lib/jsonld";

export const metadata: Metadata = {
  title: "Paslaugos — svetainių kūrimas nuo 200 €, el. parduotuvės",
  description:
    "SiteStudio paslaugos: svetainių kūrimas, atnaujinimas, el. parduotuvės, individualios interneto sistemos ir procesų automatizavimas verslui.",
  alternates: { canonical: "/paslaugos", languages: pathAlternates("/paslaugos") },
};

const serviceHub = [
  {
    href: "/svetainiu-kurimas",
    label: "Svetainių kūrimas",
    desc: "Reprezentacinės ir paslaugų svetainės su užklausų formomis — nuo 200 €.",
  },
  {
    href: "/el-parduotuviu-kurimas",
    label: "El. parduotuvių kūrimas",
    desc: "Katalogas, krepšelis, mokėjimai internetu ir užsakymų valdymas.",
  },
  {
    href: "/svetainiu-atnaujinimas",
    label: "Svetainių atnaujinimas",
    desc: "Iš pasenusios svetainės į šiuolaikišką — neprarandant Google pozicijų.",
  },
  {
    href: "/interneto-sistemu-kurimas",
    label: "Interneto sistemų kūrimas",
    desc: "Rezervacijos, klientų paskyros, administravimo skydeliai, MVP.",
  },
  {
    href: "/ai-automatizavimas",
    label: "AI ir automatizavimas",
    desc: "Užklausų apdorojimas, dokumentai, duomenų suvedimas — kur atsiperka.",
  },
];

export default async function PaslaugosPage() {
  const dict = await getDict("lt");
  const crumbs = [{ name: "Pradžia", href: "/" }, { name: "Paslaugos" }];
  const jsonLd = siteGraph(
    webPageNode(
      "/paslaugos",
      "Paslaugos — svetainių kūrimas, el. parduotuvės, automatizavimas",
      "SiteStudio paslaugos: svetainių kūrimas ir atnaujinimas, el. parduotuvės, interneto sistemos ir automatizavimas Lietuvos verslui.",
    ),
    breadcrumbNode("/paslaugos", crumbs),
    {
      "@type": "ItemList",
      "@id": "https://sitestudio.lt/paslaugos#services",
      name: "SiteStudio paslaugos",
      itemListElement: serviceHub.map((s, idx) => ({
        "@type": "ListItem",
        position: idx + 1,
        name: s.label,
        url: `https://sitestudio.lt${s.href}`,
      })),
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
        <div className="mx-auto max-w-7xl px-6 lg:px-8 pb-4">
          <Breadcrumbs items={crumbs} />
          <h1 className="mt-6 text-3xl sm:text-4xl font-extrabold tracking-tight text-[#0f172a] max-w-3xl">
            Svetainių kūrimo ir interneto sprendimų paslaugos
          </h1>
          <p className="mt-3 text-[#475569] max-w-2xl">
            Viskas, ko reikia verslui internete — nuo pirmos svetainės iki
            individualių sistemų ir automatizavimo. Nežinote, ko tiksliai reikia?{" "}
            <Link href="/kontaktai" className="text-[#2456d6] underline hover:no-underline">
              Parašykite
            </Link>{" "}
            — patarsime nemokamai.
          </p>

          <ul className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {serviceHub.map((s) => (
              <li key={s.href}>
                <Link
                  href={s.href}
                  className="block h-full rounded-2xl border border-[#0f172a]/10 bg-white p-5 shadow-soft card-hover"
                >
                  <span className="font-bold text-[#0f172a]">{s.label}</span>
                  <p className="mt-1.5 text-sm text-[#475569] leading-relaxed">{s.desc}</p>
                  <span className="mt-3 inline-block text-sm font-semibold text-[#2456d6]">
                    Plačiau <span aria-hidden="true">→</span>
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <Services dict={dict} locale="lt" />
        <Pricing dict={dict} locale="lt" />
        <div className="mx-auto max-w-7xl px-6 lg:px-8 pb-16">
          <p className="text-[#475569]">
            Norite pamatyti rezultatą?{" "}
            <Link href="/darbai" className="text-[#2456d6] underline hover:no-underline">
              Peržiūrėkite atliktus svetainių kūrimo darbus
            </Link>{" "}
            arba{" "}
            <Link href="/kontaktai" className="text-[#2456d6] underline hover:no-underline">
              gaukite pasiūlymą
            </Link>
            .
          </p>
        </div>
      </main>
      <Footer dict={dict} locale="lt" />
    </div>
  );
}
