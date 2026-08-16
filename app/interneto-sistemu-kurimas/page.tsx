import type { Metadata } from "next";
import ServicePage, { type ServicePageContent } from "@/components/ServicePage";
import { pathAlternates } from "@/lib/i18n";

export const metadata: Metadata = {
  title: "Interneto sistemų kūrimas — rezervacijos, paskyros, MVP",
  description:
    "Individualių interneto sistemų kūrimas: rezervacijos, klientų paskyros, administravimo skydeliai, skaičiuoklės ir MVP. Pritaikyta jūsų verslo procesui.",
  alternates: { canonical: "/interneto-sistemu-kurimas", languages: pathAlternates("/interneto-sistemu-kurimas") },
};

const content: ServicePageContent = {
  path: "/interneto-sistemu-kurimas",
  metaTitle: "Interneto sistemų kūrimas — rezervacijos, paskyros, MVP",
  metaDescription:
    "Individualių interneto sistemų kūrimas: rezervacijų ir užsakymų sistemos, klientų paskyros, administravimo skydeliai, skaičiuoklės ir MVP naujam produktui.",
  breadcrumbName: "Interneto sistemų kūrimas",
  eyebrow: "Paslauga",
  h1: "Individualių interneto sistemų kūrimas",
  intro: [
    "Kai paruoštos programos nebetinka jūsų procesui, kuriame sistemą būtent jam: rezervacijas, užsakymų valdymą, klientų paskyras, skaičiuokles ar administravimo skydelius. Sistema dirba taip, kaip dirbate jūs — o ne atvirkščiai.",
    "Kuriame ir MVP (pirmines produkto versijas) pradedantiems produktams: greitai paleidžiama versija, su kuria galite išbandyti idėją su tikrais naudotojais prieš investuojant į pilną kūrimą.",
  ],
  audience: {
    title: "Kam ši paslauga skirta",
    items: [
      "Paslaugų verslams, kuriems reikia rezervacijų ar užsakymų sistemos",
      "Įmonėms, kurios klientų duomenis ir užsakymus tvarko lentelėse ir el. paštu",
      "Verslams, kuriems reikia klientų savitarnos — paskyrų, dokumentų, būsenų",
      "Steigėjams, norintiems išbandyti produkto idėją su MVP",
      "Įmonėms, kurioms paruošti sprendimai per brangūs arba per gremėzdiški",
    ],
  },
  deliverables: {
    title: "Ką gaunate",
    sub: "Sistemos apimtį apibrėžiame kartu — pradedame nuo to, kas duoda daugiausia naudos.",
    items: [
      "Sistema, suprojektuota pagal jūsų realų darbo procesą",
      "Klientų paskyros ir savitarna, kur to reikia",
      "Administravimo skydelis duomenims ir užsakymams valdyti",
      "Integracijos su jūsų naudojamomis sistemomis per API",
      "Saugus prisijungimas ir duomenų apsauga",
      "Galimybė sistemą plėsti dalimis, augant poreikiui",
    ],
  },
  sections: [
    {
      title: "Individuali sistema ar paruošta programa?",
      body: [
        "Paruoštos programos tinka standartiniams procesams — bet kai jūsų darbo eiga kitokia, prasideda kompromisai: pusė funkcijų nereikalingos, o reikalingų nėra. Individuali sistema daro tiksliai tai, ko reikia, be mėnesinių mokesčių už nenaudojamas funkcijas.",
        "Sąžiningas atsakymas kartais yra ir „jums užteks paruošto įrankio“ — jei matome, kad individualus kūrimas neatsipirks, taip ir pasakome. Ilgalaikis bendradarbiavimas svarbiau už vienkartinį projektą.",
      ],
    },
    {
      title: "MVP — greičiausias būdas patikrinti produkto idėją",
      body: [
        "Pilnas produktas kuriamas mėnesius, o rinka gali jį įvertinti kitaip, nei planavote. MVP leidžia per kelias savaites paleisti veikiančią pagrindinės funkcijos versiją, surinkti tikrų naudotojų atsiliepimus ir tik tada spręsti, kur investuoti toliau.",
        "Mūsų pačių produktas MiniSocial — socialinis tinklas su realaus laiko žinutėmis ir Android programėle — parodo, kokio sudėtingumo sistemas kuriame nuo nulio iki veikiančio produkto.",
      ],
    },
  ],
  process: {
    title: "Kaip vyksta sistemos kūrimas",
    steps: [
      {
        title: "Proceso analizė",
        description:
          "Išsiaiškiname, kaip dirbate dabar ir kur sistema duotų daugiausia naudos. Apibrėžiame apimtį.",
      },
      {
        title: "Pasiūlymas ir prototipas",
        description:
          "Gaunate pasiūlymą su kaina ir terminu. Didesniems projektams paruošiame ekranų prototipą.",
      },
      {
        title: "Kūrimas etapais",
        description:
          "Kuriame dalimis — svarbiausios funkcijos pirmiausia, tarpinius rezultatus rodome ir deriname.",
      },
      {
        title: "Paleidimas ir plėtra",
        description:
          "Paleidžiame sistemą, apmokome komandą ir toliau plečiame pagal realų naudojimą.",
      },
    ],
  },
  pricing: {
    title: "Kiek kainuoja individuali sistema",
    note: "Kiekviena sistema skirtinga, todėl kainą skaičiuojame pagal apimtį — po proceso analizės gaunate konkrečią sumą ir terminą raštu. Kainos be PVM.",
    rows: [
      {
        name: "MVP",
        price: "nuo 1800 €",
        description:
          "Pirminė produkto versija su pagrindine funkcija — greičiausias kelias patikrinti idėją rinkoje.",
      },
      {
        name: "Individualus pasiūlymas",
        price: "pagal apimtį",
        description:
          "Rezervacijos, užsakymų valdymas, klientų paskyros, skaičiuoklės, administravimo skydeliai.",
      },
      {
        name: "Plėtra etapais",
        price: "sutartinai",
        description:
          "Sistemą galima auginti dalimis — mokate už konkrečius etapus, ne už viską iš karto.",
      },
    ],
  },
  examples: {
    title: "Darbų pavyzdžiai",
    items: [
      {
        name: "MiniSocial — socialinis tinklas",
        href: "/darbai/mini-social",
        description:
          "Pilna interneto aplikacija: paskyros, įrašai, realaus laiko žinutės ir Android programėlė. Sukurta nuo nulio.",
      },
      {
        name: "Situacija — svetainė su turinio valdymu",
        href: "/darbai/situacija",
        description:
          "Individualiai pritaikyta turinio valdymo sistema — klientas pats valdo darbų galeriją.",
      },
    ],
  },
  faq: [
    {
      q: "Nuo ko pradėti, jei nežinau, ko tiksliai reikia?",
      a: "Nuo pokalbio apie tai, kaip dirbate dabar. Dažniausiai jau per pirmą pokalbį matyti, kurie darbai kartojasi ir kur sistema atsipirktų greičiausiai. Konsultacija neįpareigoja.",
    },
    {
      q: "Ar sistema veiks telefone?",
      a: "Taip — visos sistemos kuriamos taip, kad veiktų naršyklėje bet kuriame įrenginyje. Jei reikia, galime paruošti ir mobilią programėlę, kaip padarėme su MiniSocial.",
    },
    {
      q: "Kas prižiūri sistemą po paleidimo?",
      a: "Susitariame pagal poreikį: galime prižiūrėti, daryti atsargines kopijas ir plėsti sistemą toliau, arba perduoti ją jūsų komandai su dokumentacija.",
    },
    {
      q: "Kam priklauso sukurtos sistemos kodas?",
      a: "Jums — kaip ir svetainių atveju, sukurtas sprendimas yra jūsų nuosavybė.",
    },
  ],
  related: [
    { href: "/ai-automatizavimas", label: "AI ir automatizavimas" },
    { href: "/el-parduotuviu-kurimas", label: "El. parduotuvių kūrimas" },
    { href: "/svetainiu-kurimas", label: "Svetainių kūrimas" },
    { href: "/darbai", label: "Atlikti darbai" },
  ],
  cta: {
    title: "Turite procesą, kurį norite suskaitmeninti?",
    text: "Aprašykite, kaip dirbate dabar ir kas labiausiai trukdo — pasiūlysime sprendimą ir įvertinsime apimtį per vieną darbo dieną.",
  },
};

export default function InternetoSistemuKurimasPage() {
  return <ServicePage content={content} />;
}
