import type { Metadata } from "next";
import ServicePage, { type ServicePageContent } from "@/components/ServicePage";

export const metadata: Metadata = {
  title: "El. parduotuvių kūrimas — parduotuvė su mokėjimais ir užsakymų valdymu",
  description:
    "Elektroninių parduotuvių kūrimas Lietuvos verslui: produktų katalogas, krepšelis, mokėjimai internetu, užsakymų valdymas ir pristatymo integracijos. Individualus pasiūlymas pagal apimtį.",
  alternates: { canonical: "/el-parduotuviu-kurimas" },
};

const content: ServicePageContent = {
  path: "/el-parduotuviu-kurimas",
  metaTitle: "El. parduotuvių kūrimas — parduotuvė su mokėjimais ir užsakymų valdymu",
  metaDescription:
    "Elektroninių parduotuvių kūrimas Lietuvos verslui: produktų katalogas, krepšelis, mokėjimai internetu, užsakymų valdymas ir pristatymo integracijos.",
  breadcrumbName: "El. parduotuvių kūrimas",
  eyebrow: "Paslauga",
  h1: "El. parduotuvių kūrimas verslui",
  intro: [
    "Kuriame elektronines parduotuves, kuriose patogu pirkti ir kurias patogu valdyti: produktų katalogas su paieška, krepšelis, mokėjimai internetu ir užsakymų valdymas vienoje vietoje.",
    "Parduotuvę pritaikome jūsų asortimentui ir procesui — nuo kelių produktų iki pilno katalogo su pristatymo integracijomis. Apimtį, kainą ir terminą suderiname raštu prieš pradedant darbus.",
  ],
  audience: {
    title: "Kam ši paslauga skirta",
    items: [
      "Prekybininkams, kurie nori pradėti pardavinėti internetu be didelių platformų mokesčių",
      "Verslams, kurie parduoda per socialinius tinklus ir nori tvarkingo užsakymų proceso",
      "Gamintojams ir amatininkams, kuriems reikia savo produkcijos katalogo su užsakymais",
      "Įmonėms, kurioms esama parduotuvė per lėta arba per brangi išlaikyti",
    ],
  },
  deliverables: {
    title: "Ką gaunate",
    sub: "Konkreti apimtis fiksuojama pasiūlyme pagal jūsų asortimentą ir procesus.",
    items: [
      "Produktų katalogas su kategorijomis ir paieška",
      "Krepšelis ir aiškus pirkimo procesas telefone bei kompiuteryje",
      "Mokėjimų priėmimas internetu (banko nuorodos, kortelės)",
      "Užsakymų valdymas ir automatiniai laiškai pirkėjams",
      "Pristatymo būdai ir integracijos pagal poreikį",
      "Produktų valdymas — kainas, aprašymus ir likučius keičiate patys",
    ],
  },
  sections: [
    {
      title: "Nuosava parduotuvė ar platforma?",
      body: [
        "Prekyvietės ir nuomojamos platformos leidžia startuoti greitai, bet ilgainiui kainuoja: mėnesio mokesčiai, komisiniai nuo pardavimų ir ribotos galimybės išsiskirti. Nuosava parduotuvė yra jūsų turtas — be komisinių nuo kiekvieno užsakymo ir su pilna turinio bei dizaino kontrole.",
        "Nuosava parduotuvė taip pat dirba paieškoje: produktų puslapiai su tvarkingais aprašymais ir struktūriniais duomenimis pasiekia pirkėjus, kurie prekės ieško per Google, o ne platformos viduje.",
      ],
    },
    {
      title: "Greitis ir pasitikėjimas — du dalykai, kurie lemia pardavimus",
      body: [
        "Internetinėje prekyboje lankytojas sprendžia per kelias sekundes: jei puslapis kraunasi lėtai arba pirkimo procesas painus, jis išeina pas konkurentą. Todėl parduotuves kuriame ant greitos, šiuolaikiškos technologijos — be perkrautų šablonų ir dešimčių įskiepių.",
        "Pasitikėjimą kuria aiškios pristatymo bei grąžinimo sąlygos, saugus atsiskaitymas ir tvarkingas dizainas. Visa tai sudedame nuo pat pradžių, kad pirkėjui nekiltų abejonių paliekant kortelės duomenis.",
      ],
    },
  ],
  process: {
    title: "Kaip vyksta el. parduotuvės kūrimas",
    steps: [
      {
        title: "Poreikių aptarimas",
        description:
          "Išsiaiškiname asortimentą, mokėjimo ir pristatymo poreikius. Gaunate pasiūlymą su apimtimi ir kaina.",
      },
      {
        title: "Struktūra ir dizainas",
        description:
          "Suprojektuojame katalogą, produkto puslapį ir pirkimo procesą, pritaikytą jūsų pirkėjams.",
      },
      {
        title: "Kūrimas ir integracijos",
        description:
          "Sukuriame parduotuvę, prijungiame mokėjimus, pristatymą ir sudedame pirmus produktus.",
      },
      {
        title: "Paleidimas ir apmokymas",
        description:
          "Paleidžiame parduotuvę, apmokome valdyti produktus ir užsakymus, padedame po starto.",
      },
    ],
  },
  pricing: {
    title: "Kiek kainuoja el. parduotuvė",
    note: "El. parduotuvės apimtis labai priklauso nuo asortimento ir integracijų, todėl kainą skaičiuojame individualiai. Pasiūlyme visada matote galutinę sumą ir kas į ją įeina. Kainos be PVM.",
    rows: [
      {
        name: "Individualus pasiūlymas",
        price: "pagal apimtį",
        description:
          "Katalogas, krepšelis, mokėjimai, užsakymų valdymas ir pristatymo integracijos pagal jūsų poreikį.",
      },
      {
        name: "Terminas",
        price: "nuo 4 sav.",
        description:
          "Tikslų terminą nurodome pasiūlyme — jis priklauso nuo produktų kiekio ir integracijų skaičiaus.",
      },
      {
        name: "Talpinimas ir priežiūra",
        price: "pagal poreikį",
        description:
          "Galime pasirūpinti paleidimu, talpinimu, atsarginėmis kopijomis ir tolesne priežiūra.",
      },
    ],
  },
  examples: {
    title: "Susiję darbai",
    items: [
      {
        name: "FutTech — demonstracinė el. parduotuvė",
        href: "/darbai/futtech-store",
        description:
          "Pilnas katalogo, krepšelio, testinių mokėjimų, kliento paskyros ir turinio valdymo sprendimas, kurį galite išbandyti gyvai.",
      },
      {
        name: "Leonamai — paslaugų svetainė",
        href: "/darbai/leonamai",
        description:
          "Kliento svetainė su užklausų forma ir vietine paieška — tas pats kokybės standartas taikomas ir parduotuvėms.",
      },
    ],
  },
  faq: [
    {
      q: "Kodėl nenurodote fiksuotos el. parduotuvės kainos?",
      a: "Parduotuvės apimtis labai skiriasi: kelių produktų parduotuvė su banko nuorodomis ir šimtų prekių katalogas su pristatymo bei apskaitos integracijomis yra skirtingo dydžio projektai. Todėl pirmiausia išsiaiškiname poreikį, o tada pateikiame konkrečią kainą raštu.",
    },
    {
      q: "Kokius mokėjimo būdus galima prijungti?",
      a: "Dažniausiai jungiame banko nuorodas ir mokėjimo korteles per Lietuvoje veikiančius mokėjimų tarpininkus. Konkretų tarpininką parenkame pagal jūsų apyvartą ir poreikius.",
    },
    {
      q: "Ar galėsiu pats valdyti produktus ir užsakymus?",
      a: "Taip — produktus, kainas, aprašymus ir likučius valdote patys per administravimo aplinką, o apie naujus užsakymus gaunate pranešimus. Apmokome naudotis sistema.",
    },
    {
      q: "Ar parduotuvę galima plėsti vėliau?",
      a: "Taip. Dažnas kelias — pradėti nuo bazinės parduotuvės ir vėliau prijungti papildomas integracijas, nuolaidų sistemas ar automatizavimą, kai pardavimai paauga.",
    },
  ],
  related: [
    { href: "/svetainiu-kurimas", label: "Svetainių kūrimas" },
    { href: "/interneto-sistemu-kurimas", label: "Interneto sistemų kūrimas" },
    { href: "/ai-automatizavimas", label: "AI ir automatizavimas" },
    { href: "/darbai", label: "Atlikti darbai" },
  ],
  cta: {
    title: "Planuojate prekybą internetu?",
    text: "Papasakokite apie asortimentą ir kaip dirbate dabar — pasiūlysime sprendimą ir konkrečią kainą per vieną darbo dieną.",
  },
};

export default function ElParduotuviuKurimasPage() {
  return <ServicePage content={content} />;
}
