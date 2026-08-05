import type { Metadata } from "next";
import CaseStudyPage, { type CaseStudyContent } from "@/components/CaseStudyPage";

export const metadata: Metadata = {
  title: "Situacija — svetainė plytelių klojimo meistrui su turinio valdymu",
  description:
    "Projekto istorija: situacija.eu — svetainė plytelių klojimo meistrui Pabradėje, Švenčionyse ir Vilniuje su darbų galerija ir turinio valdymo sistema, leidžiančia pačiam atnaujinti nuotraukas.",
  alternates: { canonical: "/darbai/situacija" },
};

const content: CaseStudyContent = {
  path: "/darbai/situacija",
  metaTitle: "Situacija — svetainė plytelių klojimo meistrui su turinio valdymu",
  metaDescription:
    "situacija.eu — svetainė plytelių klojimo meistrui Pabradėje, Švenčionyse ir Vilniuje su darbų galerija ir turinio valdymo sistema.",
  breadcrumbName: "Situacija",
  projectType: "Kliento projektas — svetainė su turinio valdymu",
  h1: "Situacija — svetainė plytelių klojimo meistrui",
  intro:
    "Svetainė plytelių klojimo meistrui, dirbančiam Pabradėje, Švenčionyse ir Vilniuje. Pagrindinis reikalavimas — kad meistras galėtų pats atnaujinti darbų nuotraukas be programuotojo pagalbos.",
  liveUrl: "https://situacija.eu",
  liveDomain: "situacija.eu",
  image: {
    src: "/works/situacija.png",
    alt: "situacija.eu pradžios puslapis — plytelių klojimo darbų pristatymas",
  },
  problem: {
    title: "Užduotis",
    body: [
      "Plytelių klojimo versle darbų nuotraukos yra pagrindinis pardavimo argumentas — bet jos ir dažniausiai atnaujinamas turinys. Svetainė, kurioje kiekvienam nuotraukų atnaujinimui reikia samdyti programuotoją, greitai tampa negyva: galerija sensta, o nauji darbai klientų nepasiekia.",
    ],
  },
  solution: {
    title: "Sprendimas",
    body: [
      "Sukūrėme svetainę su turinio valdymo sistema, pritaikyta būtent šiam poreikiui: meistras prisijungia, įkelia naujų darbų nuotraukas, ir jos iš karto matomos svetainėje. Administravimo aplinka apribota iki to, ko realiai reikia — be perteklinių funkcijų, kuriose lengva pasimesti.",
      "Svetainės struktūra pristato paslaugas ir aptarnaujamus miestus taip, kad klientai iš Pabradės, Švenčionių ir Vilniaus rastų meistrą vietinėje paieškoje.",
    ],
  },
  features: [
    "Darbų galerija, kurią meistras pildo pats",
    "Suprantama turinio valdymo aplinka",
    "Paslaugų aprašymai ir aptarnaujamos teritorijos",
    "Kontaktų forma užklausoms",
    "Mobili versija ir greitas veikimas",
    "Vietinei paieškai paruošta struktūra",
  ],
  decisions: {
    title: "SEO ir UX sprendimai",
    body: [
      "Didžiausias UX sprendimas — ne lankytojo, o savininko pusėje: turinio valdymas suprojektuotas taip, kad nuotraukos įkėlimas užtruktų minutes ir nereikalautų jokių techninių žinių. Gyva, nuolat pildoma galerija naudinga ir paieškai — svetainė rodo Google, kad veikla aktyvi.",
      "Lankytojo kelias trumpas: pamatyti darbus, suprasti, kur meistras dirba, ir palikti užklausą. Visa struktūra dėliota šiam keliui, be nereikalingų tarpinių puslapių.",
    ],
  },
  relatedService: { href: "/svetainiu-kurimas", label: "Paslauga: svetainių kūrimas" },
  otherCases: [
    { href: "/darbai/leonamai", label: "Kitas projektas: Leonamai" },
    { href: "/darbai/mini-social", label: "Kitas projektas: MiniSocial" },
  ],
};

export default function SituacijaCasePage() {
  return <CaseStudyPage content={content} />;
}
