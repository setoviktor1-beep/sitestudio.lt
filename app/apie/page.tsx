import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";
import { getDict } from "@/lib/i18n";
import { siteGraph, webPageNode, breadcrumbNode, PERSON_ID } from "@/lib/jsonld";

export const metadata: Metadata = {
  title: "Apie SiteStudio — kas kuria jūsų svetainę",
  description:
    "SiteStudio — Viktor Seto svetainių ir interneto sistemų studija. Bendraujate tiesiogiai su žmogumi, kuris kuria jūsų projektą: be vadybininkų grandinės ir agentūros antkainio. Dirbame visoje Lietuvoje nuotoliu.",
  alternates: { canonical: "/apie" },
};

const values = [
  {
    title: "Tiesioginis ryšys su vykdytoju",
    body: "Nuo pirmo pokalbio iki paleidimo bendraujate su tuo pačiu žmogumi, kuris realiai kuria jūsų svetainę. Jokio „perduosiu programuotojams“ — klausimai atsakomi iš pirmų lūpų.",
  },
  {
    title: "Aiški apimtis ir kaina raštu",
    body: "Prieš pradedant darbus raštu sutariame, kas konkrečiai bus padaryta, kiek kainuos ir kada bus paruošta. Papildomi darbai — tik atskirai suderinus.",
  },
  {
    title: "Mažos studijos pranašumas",
    body: "Be biuro, vadybininkų ir agentūros antkainio — mokate už darbą, o ne už struktūrą. Sprendimai priimami greitai, o atsakomybė už rezultatą — vieno žmogaus, ne „komandos apskritai“.",
  },
  {
    title: "Sąžiningi faktai",
    body: "Rodome tik realius, veikiančius projektus ir nežadame to, ko negalime pamatuoti. Jei sprendimas jums neatsipirks — taip ir pasakysime.",
  },
];

export default async function ApiePage() {
  const dict = await getDict("lt");
  const crumbs = [{ name: "Pradžia", href: "/" }, { name: "Apie" }];

  const jsonLd = siteGraph(
    {
      ...webPageNode("/apie", "Apie SiteStudio — kas kuria jūsų svetainę",
        "SiteStudio — Viktor Seto svetainių ir interneto sistemų studija."),
      about: { "@id": PERSON_ID },
    },
    breadcrumbNode("/apie", crumbs),
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
            <p className="section-label mb-3">Apie studiją</p>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight">
              Kas kuria jūsų svetainę
            </h1>
            <p className="mt-5 text-[#475569] text-base sm:text-lg leading-relaxed">
              SiteStudio — tai <strong className="text-[#0f172a]">Viktor Seto</strong> svetainių ir
              interneto sistemų studija. Kuriu svetaines, el. parduotuves, individualias interneto
              aplikacijas ir automatizavimo sprendimus mažam ir vidutiniam verslui. Dirbu su
              klientais visoje Lietuvoje — nuotoliu, todėl miestas nesvarbus: viską suderiname
              el. paštu ir skambučiais.
            </p>
            <p className="mt-4 text-[#475569] text-base sm:text-lg leading-relaxed">
              Svarbiausias skirtumas nuo agentūros: čia nėra vadybininkų grandinės. Žmogus, kuriam
              rašote, ir žmogus, kuris kuria jūsų projektą — tas pats. Tai reiškia greitesnius
              atsakymus, tikslesnį rezultatą ir jokio „sugedusio telefono“.
            </p>
          </header>

          <section className="mt-14">
            <h2 className="text-2xl font-bold">Kuo vadovaujuosi dirbdamas</h2>
            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
              {values.map((v) => (
                <div key={v.title} className="rounded-2xl border border-[#0f172a]/10 bg-[#f6f8fb] p-7">
                  <h3 className="font-bold">{v.title}</h3>
                  <p className="mt-3 text-sm text-[#475569] leading-relaxed">{v.body}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="mt-14">
            <h2 className="text-2xl font-bold">Kaip dirbu techniškai</h2>
            <p className="mt-4 text-[#475569] leading-relaxed">
              Svetaines ir sistemas kuriu su šiuolaikinėmis technologijomis — Next.js, TypeScript,
              PostgreSQL — kurios užtikrina greitį, saugumą ir gerą matomumą paieškoje be sunkių
              šablonų ir dešimčių įskiepių. Klientui techninės detalės nebūtinos: jums svarbu, kad
              svetainė kraunasi greitai, veikia telefone ir ją lengva valdyti — kaip tai pasiekiama,
              lieka mano rūpestis.
            </p>
            <p className="mt-4 text-[#475569] leading-relaxed">
              Ką realiai moku, geriausiai parodo darbai: klientų svetainės{" "}
              <Link href="/darbai/leonamai" className="text-[#2456d6] underline hover:no-underline">leonamai.lt</Link>{" "}
              ir{" "}
              <Link href="/darbai/situacija" className="text-[#2456d6] underline hover:no-underline">situacija.eu</Link>,
              bei nuo nulio sukurtas socialinis tinklas{" "}
              <Link href="/darbai/mini-social" className="text-[#2456d6] underline hover:no-underline">MiniSocial</Link>{" "}
              su realaus laiko žinutėmis ir Android programėle. Visus projektus galite atsidaryti ir
              išbandyti patys — <Link href="/darbai" className="text-[#2456d6] underline hover:no-underline">visų darbų sąrašas čia</Link>.
            </p>
          </section>

          <section className="mt-14">
            <h2 className="text-2xl font-bold">Ką galiu padaryti jums</h2>
            <ul className="mt-6 space-y-3">
              {[
                { href: "/svetainiu-kurimas", label: "Svetainių kūrimas", desc: "reprezentacinės ir paslaugų svetainės su užklausų formomis" },
                { href: "/el-parduotuviu-kurimas", label: "El. parduotuvių kūrimas", desc: "katalogas, mokėjimai, užsakymų valdymas" },
                { href: "/svetainiu-atnaujinimas", label: "Svetainių atnaujinimas", desc: "iš pasenusios svetainės į šiuolaikišką, neprarandant Google pozicijų" },
                { href: "/interneto-sistemu-kurimas", label: "Interneto sistemų kūrimas", desc: "rezervacijos, klientų paskyros, MVP" },
                { href: "/ai-automatizavimas", label: "AI ir automatizavimas", desc: "pasikartojančių darbų automatizavimas ten, kur atsiperka" },
              ].map((s) => (
                <li key={s.href} className="text-[#475569] leading-relaxed">
                  <Link href={s.href} className="font-semibold text-[#2456d6] hover:underline">
                    {s.label}
                  </Link>{" "}
                  — {s.desc}
                </li>
              ))}
            </ul>
          </section>

          <section className="my-16 rounded-2xl bg-[#0f172a] p-8 sm:p-12 text-center">
            <h2 className="text-2xl font-bold text-white">Pasikalbėkime apie jūsų projektą</h2>
            <p className="mt-3 text-white/70 text-sm max-w-xl mx-auto">
              Parašykite, ko reikia — atsakysiu per vieną darbo dieną su klausimais arba konkrečiu
              pasiūlymu. Konsultacija neįpareigoja.
            </p>
            <Link href="/kontaktai" className="btn-primary mt-6">
              Susisiekti
            </Link>
          </section>
        </div>
      </main>
      <Footer dict={dict} locale="lt" />
    </div>
  );
}
