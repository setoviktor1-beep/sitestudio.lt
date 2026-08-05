import type { Metadata } from "next";
import CaseStudyPage, { type CaseStudyContent } from "@/components/CaseStudyPage";

export const metadata: Metadata = {
  title: "Leonamai — svetainė vonios remonto meistrui",
  description:
    "Projekto istorija: leonamai.lt — paslaugų svetainė vonios remonto meistrui Lentvaryje, Vilniuje ir Trakuose. Darbų galerija, užklausų forma ir vietinei Google paieškai paruošta struktūra.",
  alternates: { canonical: "/darbai/leonamai" },
};

const content: CaseStudyContent = {
  path: "/darbai/leonamai",
  metaTitle: "Leonamai — svetainė vonios remonto meistrui",
  metaDescription:
    "leonamai.lt — paslaugų svetainė vonios remonto meistrui Lentvaryje, Vilniuje ir Trakuose: darbų galerija, užklausų forma ir vietinei paieškai paruošta struktūra.",
  breadcrumbName: "Leonamai",
  projectType: "Kliento projektas — paslaugų svetainė",
  h1: "Leonamai — svetainė vonios remonto meistrui",
  intro:
    "Paslaugų svetainė vonios remonto meistrui, dirbančiam Lentvaryje, Vilniuje ir Trakuose. Tikslas — kad klientai, ieškantys vonios remonto savo mieste, rastų meistrą Google paieškoje ir galėtų iš karto pamatyti darbus bei palikti užklausą.",
  liveUrl: "https://leonamai.lt",
  liveDomain: "leonamai.lt",
  image: {
    src: "/works/leonamai.png",
    alt: "leonamai.lt pradžios puslapis — vonios remonto paslaugų pristatymas su darbų nuotraukomis",
  },
  problem: {
    title: "Užduotis",
    body: [
      "Vonios remonto meistrui reikėjo pirmos rimtos svetainės: iki tol klientai ateidavo tik per rekomendacijas, o internete veiklos pristatymo nebuvo. Konkurencinėje rinkoje klientas, negalintis internete pamatyti darbų pavyzdžių ir kainų orientyro, dažnai renkasi tą, kurį randa paieškoje pirmą.",
    ],
  },
  solution: {
    title: "Sprendimas",
    body: [
      "Sukūrėme paslaugų svetainę, kurios centre — atliktų darbų nuotraukos ir aiškus paslaugų sąrašas. Struktūra dėliota pagal tai, ko klientas realiai ieško: vonios remontas konkrečiame mieste, darbų pavyzdžiai, būdas greitai susisiekti.",
      "Užklausų forma atkeliauja tiesiai į meistro el. paštą — be tarpinių sistemų, kurių smulkiam verslui nereikia administruoti.",
    ],
  },
  features: [
    "Atliktų darbų galerija su realiomis nuotraukomis",
    "Paslaugų aprašymai su aiškia struktūra",
    "Užklausų forma tiesiai į el. paštą",
    "Mobili versija — dauguma klientų ateina iš telefono",
    "Vietinei paieškai pritaikyta struktūra (Lentvaris, Vilnius, Trakai)",
    "Greitas krovimasis ir techninis SEO pagrindas",
  ],
  decisions: {
    title: "SEO ir UX sprendimai",
    body: [
      "Svetainė optimizuota vietinei paieškai: puslapių struktūra ir tekstai dėlioti pagal miestus, kuriuose meistras dirba, kad Google suprastų aptarnaujamą teritoriją. Darbų nuotraukos — pagrindinis pasitikėjimo argumentas šioje srityje — iškeltos į pirmą planą.",
      "Sąmoningai atsisakėme visko, kas trukdytų greičiui: sunkių galerijų karuselių ir nereikalingų skriptų. Lankytojas per kelias sekundes supranta, ką meistras daro, kur dirba ir kaip susisiekti.",
    ],
  },
  relatedService: { href: "/svetainiu-kurimas", label: "Paslauga: svetainių kūrimas" },
  otherCases: [
    { href: "/darbai/situacija", label: "Kitas projektas: Situacija" },
    { href: "/darbai/mini-social", label: "Kitas projektas: MiniSocial" },
  ],
};

export default function LeonamaiCasePage() {
  return <CaseStudyPage content={content} />;
}
