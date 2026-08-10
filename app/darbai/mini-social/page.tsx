import CaseStudyPage, { type CaseStudyContent } from "@/components/CaseStudyPage";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "MiniSocial — socialinis tinklas su Android programėle",
  description:
    "Projekto istorija: mini-social.online — SiteStudio sukurta pilna interneto aplikacija: registracija, įrašai, realaus laiko žinutės ir Android programėlė. Parodo, kokio sudėtingumo sistemas kuriame.",
  path: "/darbai/mini-social",
  image: "/works/mini-social.png",
  keywords: ["interneto aplikacijų kūrimas", "socialinio tinklo kūrimas", "Android programėlė", "mini-social.online"],
});

const content: CaseStudyContent = {
  path: "/darbai/mini-social",
  metaTitle: "MiniSocial — socialinis tinklas su Android programėle",
  metaDescription:
    "mini-social.online — SiteStudio sukurta pilna interneto aplikacija: registracija, įrašai, realaus laiko žinutės ir Android programėlė.",
  breadcrumbName: "MiniSocial",
  projectType: "SiteStudio produktas — interneto aplikacija",
  h1: "MiniSocial — socialinis tinklas, sukurtas nuo nulio",
  intro:
    "MiniSocial — mūsų pačių produktas: pilnai veikiantis socialinis tinklas su registracija, įrašais, diskusijomis, žinutėmis realiu laiku ir Android programėle. Jį kūrėme kaip įrodymą, kokio sudėtingumo sistemas galime pastatyti nuo nulio iki veikiančio produkto.",
  liveUrl: "https://mini-social.online",
  liveDomain: "mini-social.online",
  image: {
    src: "/works/mini-social.png",
    alt: "mini-social.online aplikacijos sąsaja — įrašų srautas ir diskusijos",
  },
  problem: {
    title: "Kodėl kūrėme savo produktą",
    body: [
      "Klientui, užsakančiam individualią sistemą, svarbiausias klausimas — ar vykdytojas realiai moka pastatyti veikiantį produktą, o ne tik svetainę. Geriausias atsakymas — parodyti tokį produktą gyvai. MiniSocial yra būtent tai: sistema, kurią galite atsidaryti, užsiregistruoti ir išbandyti patys.",
    ],
  },
  solution: {
    title: "Kas sukurta",
    body: [
      "Pastatėme pilną interneto aplikaciją: naudotojų registracija ir paskyros, įrašų srautas su diskusijomis, žinutės realiu laiku, pranešimai ir mobili Android programėlė. Visa tai veikia kaip vientisas produktas su savo infrastruktūra.",
      "Tie patys sprendimai — paskyros, realaus laiko funkcijos, pranešimai, mobilios programėlės — naudojami ir klientų projektuose: rezervacijų sistemose, klientų savitarnose, vidinėse verslo sistemose.",
    ],
  },
  features: [
    "Naudotojų registracija ir paskyros",
    "Įrašai, komentarai ir diskusijos",
    "Žinutės realiu laiku",
    "Pranešimai apie naujus įvykius",
    "Android programėlė",
    "Administravimo ir moderavimo įrankiai",
  ],
  decisions: {
    title: "Technologiniai ir UX sprendimai",
    body: [
      "Realaus laiko funkcijos — žinutės ir pranešimai — reikalauja kitokios architektūros nei įprasta svetainė: nuolatinio ryšio tarp naršyklės ir serverio, greitos duomenų bazės ir apgalvoto našumo. MiniSocial parodo, kad šias problemas mokame spręsti praktiškai.",
      "Sąsaja kurta pagal principą, kad socialinis produktas turi veikti telefone taip pat sklandžiai kaip kompiuteryje — nuo pirmo prisilietimo iki žinutės išsiuntimo.",
    ],
  },
  tech: "Techninis pagrindas: Next.js, TypeScript, PostgreSQL, realaus laiko ryšys per WebSocket, Android programėlė su Capacitor.",
  relatedService: { href: "/interneto-sistemu-kurimas", label: "Paslauga: interneto sistemų kūrimas" },
  otherCases: [
    { href: "/darbai/leonamai", label: "Kitas projektas: Leonamai" },
    { href: "/darbai/situacija", label: "Kitas projektas: Situacija" },
  ],
};

export default function MiniSocialCasePage() {
  return <CaseStudyPage content={content} />;
}
