import type { Metadata } from "next";
import ServicePage, { type ServicePageContent } from "@/components/ServicePage";

export const metadata: Metadata = {
  title: "Svetainių atnaujinimas — iš pasenusios svetainės į šiuolaikišką",
  description:
    "Svetainių atnaujinimas: naujas dizainas, sutvarkyta mobili versija, greitis ir SEO klaidos. Turinį perkeliame be praradimų, senus adresus nukreipiame, kad neprarastumėte pozicijų Google.",
  alternates: { canonical: "/svetainiu-atnaujinimas" },
};

const content: ServicePageContent = {
  path: "/svetainiu-atnaujinimas",
  metaTitle: "Svetainių atnaujinimas — iš pasenusios svetainės į šiuolaikišką",
  metaDescription:
    "Svetainių atnaujinimas: naujas dizainas, sutvarkyta mobili versija, greitis ir SEO klaidos. Turinį perkeliame be praradimų, senus adresus nukreipiame.",
  breadcrumbName: "Svetainių atnaujinimas",
  eyebrow: "Paslauga",
  h1: "Svetainių atnaujinimas ir perkėlimas",
  intro: [
    "Sena svetainė dažnai dirba prieš verslą: telefone išsiderina, kraunasi lėtai, o dizainas sako klientui „čia seniai niekas nieko nekeitė“. Atnaujiname tokias svetaines taip, kad jos vėl keltų pasitikėjimą ir neštų užklausas.",
    "Svarbiausia atnaujinant — nieko neprarasti: turinį perkeliame pilnai, o senus adresus nukreipiame į naujus, kad išlaikytumėte turimas pozicijas Google paieškoje.",
  ],
  audience: {
    title: "Kada verta atnaujinti svetainę",
    items: [
      "Svetainė telefone atrodo blogai arba iš viso neprisitaiko prie ekrano",
      "Puslapiai kraunasi lėtai ir lankytojai išeina nesulaukę",
      "Dizainas sukurtas prieš daug metų ir nebeatspindi verslo lygio",
      "Svetainės nesimato Google paieškoje arba pozicijos krenta",
      "Turinio pakeitimai reikalauja programuotojo ir kainuoja kaskart",
      "Sena sistema nebeatnaujinama ir kelia saugumo rizikų",
    ],
  },
  deliverables: {
    title: "Ką gaunate",
    sub: "Prieš pasiūlymą peržiūrime esamą svetainę ir įvardijame, ką konkrečiai keisime.",
    items: [
      "Naujas dizainas, išlaikant jūsų prekės ženklo atpažįstamumą",
      "Pilnai sutvarkyta mobili versija",
      "Greitaveikos optimizavimas — svetainė kraunasi be laukimo",
      "Turinio perkėlimas be praradimų",
      "Senų adresų nukreipimai (301), kad neprarastumėte Google pozicijų",
      "Sutvarkytas techninis SEO: struktūra, meta aprašymai, žemėlapis",
    ],
  },
  sections: [
    {
      title: "Kodėl atnaujinant svarbiausia — nukreipimai ir turinys",
      body: [
        "Dažniausia klaida atnaujinant svetainę — paleisti naują versiją ir palikti senus adresus neveikiančius. Google tuomet praranda sukauptą puslapių istoriją, o pozicijos, kurias svetainė augino metais, dingsta per kelias savaites. Todėl prieš paleidimą sudarome senų adresų sąrašą ir kiekvieną nukreipiame į atitinkamą naują puslapį.",
        "Antra dažna klaida — perkėlimo metu „pasimetęs“ turinys: aprašymai, nuotraukos, klientų užklausų formos. Prieš darbus užfiksuojame, kas svetainėje yra, o po perkėlimo patikriname, kad viskas veiktų ir niekas nedingtų.",
      ],
    },
    {
      title: "Perėjimas nuo senų sistemų",
      body: [
        "Jei svetainė sukurta su sena, nebepalaikoma sistema, perkeliame ją į šiuolaikišką technologiją: svetainė tampa greitesnė, saugesnė ir pigesnė išlaikyti. Kur perėjimas neapsimoka, taip ir pasakome — kartais užtenka sutvarkyti esamą svetainę.",
      ],
    },
  ],
  process: {
    title: "Kaip vyksta atnaujinimas",
    steps: [
      {
        title: "Esamos svetainės peržiūra",
        description:
          "Peržiūrime dizainą, greitį, mobilią versiją ir SEO būklę. Įvardijame, ką keisime ir kodėl.",
      },
      {
        title: "Pasiūlymas ir planas",
        description:
          "Gaunate konkrečią kainą, terminą ir perkėlimo planą — kas bus perkelta, kas atnaujinta.",
      },
      {
        title: "Atnaujinimas ir perkėlimas",
        description:
          "Sukuriame naują versiją, perkeliame turinį, paruošiame senų adresų nukreipimus.",
      },
      {
        title: "Paleidimas ir patikra",
        description:
          "Paleidžiame naują svetainę, patikriname nukreipimus, formas ir matomumą paieškoje.",
      },
    ],
  },
  pricing: {
    title: "Kiek kainuoja svetainės atnaujinimas",
    note: "Kaina priklauso nuo esamos svetainės dydžio ir būklės — po peržiūros gaunate konkrečią sumą raštu. Kainos be PVM.",
    rows: [
      {
        name: "Nedidelė svetainė",
        price: "nuo 200 €",
        description:
          "Iki 5 puslapių svetainės atnaujinimas su turinio perkėlimu ir nukreipimais. 1–2 savaitės.",
      },
      {
        name: "Svetainė su turinio valdymu",
        price: "nuo 500 €",
        description:
          "Kelių puslapių svetainės atnaujinimas su turinio valdymo sistema ir techniniu SEO. 2–4 savaitės.",
      },
      {
        name: "Didesni perkėlimai",
        price: "pagal apimtį",
        description:
          "Perėjimas nuo senų sistemų, didelio turinio kiekio perkėlimas, papildomos funkcijos.",
      },
    ],
  },
  examples: {
    title: "Darbų pavyzdžiai",
    items: [
      {
        name: "Leonamai — vonios remonto meistras",
        href: "/darbai/leonamai",
        description:
          "Šiuolaikiška paslaugų svetainė su vietinei paieškai paruošta struktūra — toks rezultatas laukia ir po atnaujinimo.",
      },
      {
        name: "Situacija — plytelių klojimo meistras",
        href: "/darbai/situacija",
        description:
          "Svetainė su turinio valdymu: darbų nuotraukas meistras atnaujina pats, be programuotojo.",
      },
    ],
  },
  faq: [
    {
      q: "Ar atnaujinant svetainę prarasiu pozicijas Google?",
      a: "Tinkamai atlikus perkėlimą — ne. Senus adresus nukreipiame į naujus 301 nukreipimais, išsaugome turinį ir sutvarkome techninį SEO. Trumpalaikiai svyravimai perkėlimo metu galimi, bet sukaupta istorija išlieka.",
    },
    {
      q: "Ar galima atnaujinti tik dizainą, paliekant turinį?",
      a: "Taip — jei turinys geras, perkeliame jį į naują dizainą. Dažnai kartu pasiūlome sutvarkyti struktūrą ir tekstų aiškumą, nes nuo to tiesiogiai priklauso užklausų kiekis.",
    },
    {
      q: "Kiek laiko svetainė neveiks perkėlimo metu?",
      a: "Praktiškai neveiks — naują versiją paruošiame atskirai ir perjungiame tik tada, kai viskas patikrinta. Lankytojams pertrūkis dažniausiai nepastebimas.",
    },
  ],
  related: [
    { href: "/svetainiu-kurimas", label: "Svetainių kūrimas" },
    { href: "/el-parduotuviu-kurimas", label: "El. parduotuvių kūrimas" },
    { href: "/ai-automatizavimas", label: "AI ir automatizavimas" },
    { href: "/darbai", label: "Atlikti darbai" },
  ],
  cta: {
    title: "Jūsų svetainei reikia atnaujinimo?",
    text: "Atsiųskite svetainės adresą — peržiūrėsime ir per vieną darbo dieną parašysime, ką verta keisti ir kiek tai kainuotų.",
  },
};

export default function SvetainiuAtnaujinimasPage() {
  return <ServicePage content={content} />;
}
