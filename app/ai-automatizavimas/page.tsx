import type { Metadata } from "next";
import ServicePage, { type ServicePageContent } from "@/components/ServicePage";
import { pathAlternates } from "@/lib/i18n";

export const metadata: Metadata = {
  title: "AI ir verslo procesų automatizavimas — sutaupytos darbo valandos",
  description:
    "AI ir automatizavimo sprendimai verslui: užklausų apdorojimas, dokumentų formavimas, duomenų suvedimas ir atsakymai į dažnus klausimus.",
  alternates: { canonical: "/ai-automatizavimas", languages: pathAlternates("/ai-automatizavimas") },
};

const content: ServicePageContent = {
  path: "/ai-automatizavimas",
  metaTitle: "AI ir verslo procesų automatizavimas — sutaupytos darbo valandos",
  metaDescription:
    "AI ir automatizavimo sprendimai verslui: užklausų apdorojimas, dokumentų formavimas, duomenų suvedimas į lenteles ar CRM, atsakymai į dažnus klausimus.",
  breadcrumbName: "AI ir automatizavimas",
  eyebrow: "Paslauga",
  h1: "AI ir verslo procesų automatizavimas",
  intro: [
    "Automatizuojame pasikartojančius darbus, kurie kasdien ryja jūsų ar darbuotojų laiką: užklausų apdorojimą, dokumentų formavimą, duomenų suvedimą į lenteles ar CRM, atsakymus į dažnus klausimus.",
    "Mūsų principas paprastas: AI ne dėl mados, o dėl sutaupytų valandų. Jei matome, kad sprendimas netaupys laiko ar pinigų — taip ir pasakome, dar prieš jums ką nors užsakant.",
  ],
  audience: {
    title: "Kada automatizavimas atsiperka",
    items: [
      "Užklausas iš formų, el. pašto ar žinučių kas nors perrašinėja ranka į lentelę ar sistemą",
      "Sąskaitos, sutartys ar aktai kaskart formuojami kopijuojant į Word",
      "Darbuotojai kasdien atsakinėja į tuos pačius klientų klausimus",
      "Duomenys tarp dviejų sistemų keliauja per žmogų",
      "Norite AI naudoti darbe, bet nežinote, nuo ko pradėti praktiškai",
    ],
  },
  deliverables: {
    title: "Ką galime automatizuoti",
    sub: "Pradedame nuo vieno proceso, kuris atsiperka greičiausiai — ne nuo „visko iš karto“.",
    items: [
      "Užklausų surinkimas ir automatinis suvedimas į el. paštą, Excel ar CRM",
      "Dokumentų (sąskaitų, sutarčių, aktų) formavimas pagal jūsų šabloną",
      "AI asistentas svetainėje, atsakantis į dažnus klientų klausimus",
      "El. laiškų rūšiavimas ir duomenų ištraukimas iš jų",
      "Duomenų sinchronizavimas tarp jūsų naudojamų sistemų",
      "Išmanios formos, kurios pačios paruošia užklausos santrauką",
    ],
  },
  sections: [
    {
      title: "Kaip skaičiuojame, ar automatizavimas atsiperka",
      body: [
        "Prieš siūlydami sprendimą suskaičiuojame paprastą dalyką: kiek valandų per mėnesį procesas kainuoja dabar ir kiek kainuos jo automatizavimas. Jei rankinis darbas užima kelias valandas per mėnesį — automatizuoti dažniausiai neverta, ir mes tai pasakome. Jei valandos susideda į dienas — sprendimas atsiperka per kelis mėnesius.",
        "Todėl pirmas žingsnis visada yra pokalbis apie jūsų realius procesus, o ne technologijų sąrašas. Automatizavimą diegiame ten, kur skaičiai aiškūs.",
      ],
    },
    {
      title: "AI su saiku — be perteklinių pažadų",
      body: [
        "AI įrankiai gerai atlieka konkrečias, apibrėžtas užduotis: ištraukti duomenis iš laiško, atsakyti į dažną klausimą pagal jūsų pateiktą informaciją, paruošti dokumento juodraštį. Jie nepakeičia žmogaus sprendimuose, kur reikia atsakomybės — ir mes tokių pažadų neduodame.",
        "Kiekvienas mūsų diegiamas AI sprendimas turi aiškias ribas: ką daro automatiškai, o kada perduoda žmogui. Taip klientai gauna greitį, o jūs išlaikote kontrolę.",
      ],
    },
  ],
  process: {
    title: "Kaip vyksta automatizavimo projektas",
    steps: [
      {
        title: "Procesų peržiūra",
        description:
          "Aptariame, kokie darbai kartojasi ir kiek laiko užima. Išrenkame tuos, kur automatizavimas atsiperka.",
      },
      {
        title: "Sprendimas ir kaina",
        description:
          "Pasiūlome konkretų sprendimą su kaina ir numatomu sutaupytu laiku — raštu, prieš pradedant.",
      },
      {
        title: "Diegimas ir bandymas",
        description:
          "Įdiegiame automatizavimą ir kartu išbandome su tikrais duomenimis, kol veikia patikimai.",
      },
      {
        title: "Priežiūra ir plėtra",
        description:
          "Stebime veikimą, deriname pagal grįžtamąjį ryšį ir automatizuojame kitus procesus, kai pirmasis atsiperka.",
      },
    ],
  },
  pricing: {
    title: "Kiek kainuoja automatizavimas",
    note: "Kaina priklauso nuo proceso sudėtingumo ir integracijų. Po procesų peržiūros gaunate konkrečią sumą raštu. Kainos be PVM.",
    rows: [
      {
        name: "Individualus pasiūlymas",
        price: "pagal apimtį",
        description:
          "Nuo vienos automatizuotos užduoties iki kelių susietų procesų su AI asistentu.",
      },
      {
        name: "Startas nuo mažo",
        price: "vienas procesas",
        description:
          "Rekomenduojame pradėti nuo vieno proceso — pamatuojate naudą prieš plečiant toliau.",
      },
      {
        name: "Kartu su svetaine",
        price: "sutartinai",
        description:
          "Automatizavimą dažnai diegiame kartu su nauja svetaine ar sistema — taip pigiau nei atskirai.",
      },
    ],
  },
  examples: {
    title: "Susiję darbai",
    items: [
      {
        name: "MiniSocial — interneto aplikacija",
        href: "/darbai/mini-social",
        description:
          "Sistema su realaus laiko funkcijomis ir automatiniais pranešimais — technologinis pagrindas, ant kurio statome ir automatizavimą.",
      },
    ],
  },
  faq: [
    {
      q: "Ar automatizavimui reikia keisti mano dabartines sistemas?",
      a: "Dažniausiai ne — automatizavimą jungiame prie to, ką jau naudojate: el. pašto, Excel, CRM ar buhalterinės sistemos. Sistemas keisti siūlome tik tada, kai esamos realiai trukdo.",
    },
    {
      q: "Kas nutinka, kai AI nežino atsakymo?",
      a: "Sprendimas perduoda užklausą žmogui — AI asistentas atsako tik pagal jūsų patvirtintą informaciją, o neaiškiais atvejais nukreipia į jus. Ribas nustatome kartu diegimo metu.",
    },
    {
      q: "Ar mano duomenys saugūs?",
      a: "Duomenų srautus apibrėžiame prieš diegiant: kas kur siunčiama, kas saugoma ir kiek laiko. Naudojame tik tuos įrankius, kurių sąlygos suderinamos su jūsų veikla, o asmens duomenų tvarkymą deriname su BDAR reikalavimais.",
    },
  ],
  related: [
    { href: "/interneto-sistemu-kurimas", label: "Interneto sistemų kūrimas" },
    { href: "/svetainiu-kurimas", label: "Svetainių kūrimas" },
    { href: "/el-parduotuviu-kurimas", label: "El. parduotuvių kūrimas" },
    { href: "/darbai", label: "Atlikti darbai" },
  ],
  cta: {
    title: "Kuris darbas jūsų įmonėje kartojasi dažniausiai?",
    text: "Aprašykite procesą, kuris ryja daugiausiai laiko — įvertinsime, ar jį verta automatizuoti, ir atsakysime per vieną darbo dieną.",
  },
};

export default function AiAutomatizavimasPage() {
  return <ServicePage content={content} />;
}
