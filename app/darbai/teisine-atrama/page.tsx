import type { Metadata } from "next";
import CaseStudyPage, { type CaseStudyContent } from "@/components/CaseStudyPage";

export const metadata: Metadata = {
  title: "Teisinė Atrama — teisinės pagalbos svetainė",
  description:
    "Projekto istorija: teisinėatrama.lt — profesionali teisinės pagalbos svetainė su paslaugų pristatymu, specialistės profiliu, DUK ir teisiniais straipsniais.",
  alternates: { canonical: "/darbai/teisine-atrama" },
};

const content: CaseStudyContent = {
  path: "/darbai/teisine-atrama",
  metaTitle: "Teisinė Atrama — teisinės pagalbos svetainė",
  metaDescription:
    "teisinėatrama.lt — profesionali teisinės pagalbos svetainė su aiškiu paslaugų pristatymu, specialistės profiliu, DUK ir teisiniais straipsniais.",
  breadcrumbName: "Teisinė Atrama",
  projectType: "Kliento projektas — teisinių paslaugų svetainė",
  h1: "Teisinė Atrama — aiškus teisinės pagalbos pristatymas internete",
  intro:
    "Teisinė Atrama pristato teisinę pagalbą vykdymo procesuose, skolų klausimais, dokumentų rengimo ir konsultacijų srityse. Svetainė sukurta taip, kad sudėtingoje situacijoje esantis žmogus greitai suprastų siūlomas paslaugas, specialistės kompetenciją ir kaip susisiekti.",
  liveUrl: "https://xn--teisinatrama-jvb.lt",
  liveDomain: "teisinėatrama.lt",
  image: {
    src: "/works/teisine-atrama.png",
    alt: "teisinėatrama.lt pradžios puslapis — teisinės pagalbos ir vykdymo procesų paslaugų pristatymas",
  },
  problem: {
    title: "Užduotis",
    body: [
      "Teisinės paslaugos klientui dažnai reikalingos įtemptu ir neaiškiu momentu. Informacija turi būti profesionali, tiksli ir suprantama, tačiau negali žadėti garantuoto rezultato ar sudaryti klaidingo advokato statuso įspūdžio.",
      "Reikėjo vienoje vietoje aiškiai pristatyti pagalbą vykdymo procesuose, skolų valdymą, dokumentų rengimą ir konsultacijas, kartu parodyti specialistės patirtį bei suteikti paprastą kelią susisiekti.",
    ],
  },
  solution: {
    title: "Sprendimas",
    body: [
      "Sukūrėme solidžią, telefonams pritaikytą paslaugų svetainę, kurioje lankytojo kelias prasideda nuo konkrečių problemų ir sprendimų. Atskiros paslaugų kortelės, specialistės pristatymas ir dažniausiai užduodami klausimai padeda įvertinti, kokios pagalbos reikia.",
      "SEO struktūra papildyta naudingu teisiniu turiniu. Straipsniai atsako į konkrečius žmonių klausimus ir kartu stiprina svetainės matomumą paieškoje, o kontaktinė informacija išlieka lengvai pasiekiama visame puslapyje.",
    ],
  },
  features: [
    "Aiškus teisinių paslaugų ir situacijų pristatymas",
    "Specialistės patirties ir kompetencijos profilis",
    "Dažniausiai užduodamų klausimų skiltis",
    "SEO pritaikyti teisiniai straipsniai",
    "Kontaktai ir greitas kelias konsultacijai",
    "Mobili versija ir greitas krovimasis",
    "Privatumo bei atsakomybės paaiškinimai",
    "HTTPS ir saugi VPS infrastruktūra",
  ],
  decisions: {
    title: "Turinio, SEO ir pasitikėjimo sprendimai",
    body: [
      "Dizainui pasirinkta santūri tamsiai mėlyna ir aukso spalvų kryptis, kuri padeda perteikti profesionalumą neapsunkindama turinio. Svarbiausi teiginiai parašyti paprasta kalba, o paslaugos susietos su realiomis klientų situacijomis.",
      "Ypatingas dėmesys skirtas teisiniam tikslumui: svetainė aiškiai pristato teisininkės kompetenciją ir paslaugų ribas. Techninis SEO, struktūriniai duomenys, sitemap ir teminiai straipsniai sudaro pagrindą ilgalaikiam organiniam matomumui.",
    ],
  },
  tech: "Techninis pagrindas: semantinis HTML, CSS ir JavaScript, Nginx, Directus CMS administravimo aplinka, PostgreSQL, Docker ir HTTPS.",
  relatedService: { href: "/svetainiu-kurimas", label: "Paslauga: svetainių kūrimas" },
  otherCases: [
    { href: "/darbai/leonamai", label: "Kitas projektas: Leonamai" },
    { href: "/darbai/futtech-store", label: "Kitas projektas: FutTech" },
  ],
};

export default function TeisineAtramaCasePage() {
  return <CaseStudyPage content={content} />;
}
