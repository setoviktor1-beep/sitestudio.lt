import CaseStudyPage, { type CaseStudyContent } from "@/components/CaseStudyPage";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "FutTech — demonstracinė el. parduotuvė su Stripe ir Directus",
  description:
    "Projekto istorija: futtech.store — pilnai veikianti demonstracinė el. parduotuvė su 20 prekių katalogu, Stripe testiniais mokėjimais, klientų paskyromis ir Directus CMS.",
  path: "/darbai/futtech-store",
  image: "/works/futtech-store.png",
  keywords: ["el. parduotuvės kūrimas", "Stripe integracija", "Directus CMS", "futtech.store"],
});

const content: CaseStudyContent = {
  path: "/darbai/futtech-store",
  metaTitle: "FutTech — demonstracinė el. parduotuvė su Stripe ir Directus",
  metaDescription:
    "futtech.store — pilnai veikianti demonstracinė el. parduotuvė su katalogu, krepšeliu, Stripe testiniais mokėjimais, klientų paskyromis ir Directus CMS.",
  breadcrumbName: "FutTech",
  projectType: "SiteStudio produktas — el. parduotuvės demonstracija",
  h1: "FutTech — pilnai veikianti el. parduotuvės demonstracija",
  intro:
    "FutTech parodo visą šiuolaikinės el. parduotuvės kelią — nuo 20 prekių katalogo ir krepšelio iki testinio atsiskaitymo, užsakymų valdymo ir kliento savitarnos. Tai demonstracinė aplinka: reali prekyba nevykdoma, todėl visas funkcijas galima saugiai išbandyti.",
  liveUrl: "https://futtech.store",
  liveDomain: "futtech.store",
  image: {
    src: "/works/futtech-store.png",
    alt: "futtech.store pradžios puslapis — technologijų el. parduotuvės katalogas ir pasiūlymai",
  },
  problem: {
    title: "Užduotis",
    body: [
      "El. parduotuvė yra daugiau nei gražus katalogas. Reikia sujungti prekes, likučius, krepšelį, pristatymą, mokėjimus, klientų paskyras, užsakymų istoriją ir administravimo aplinką taip, kad visas pirkimo kelias būtų aiškus ir patikimas.",
      "Tikslas buvo sukurti viešai išbandomą pavyzdį, kuris parodytų ne vien maketą, o realiai veikiančią parduotuvės architektūrą nuo turinio valdymo iki apmokėjimo patvirtinimo.",
    ],
  },
  solution: {
    title: "Sprendimas",
    body: [
      "Sukūrėme greitą, telefonams pritaikytą technologijų parduotuvę su penkiomis kategorijomis ir 20 realistiškai aprašytų prekių. Pirkėjas gali filtruoti katalogą, peržiūrėti produkto informaciją, valdyti krepšelį, pasirinkti pristatymo būdą ir pereiti visą Stripe testinio mokėjimo procesą.",
      "Prisijungęs klientas turi savo dashboard: mato užsakymų statistiką, istoriją, būsenas, pristatymo informaciją ir profilio duomenis. Turinys bei užsakymai valdomi per Directus CMS, o prisijungti galima el. paštu arba per Google OAuth.",
    ],
  },
  features: [
    "20 prekių katalogas su kategorijomis ir likučiais",
    "Produkto puslapiai, krepšelis ir pristatymo pasirinkimas",
    "Stripe testinis atsiskaitymas ir webhook patvirtinimai",
    "Kliento paskyra, užsakymų istorija ir būsenos",
    "Google OAuth ir prisijungimas el. paštu",
    "Directus CMS prekėms ir užsakymams valdyti",
    "Slapukų sutikimas ir teisiniai puslapiai",
    "Docker ir Coolify diegimas VPS serveryje",
  ],
  decisions: {
    title: "Technologiniai ir UX sprendimai",
    body: [
      "Mokėjimai sąmoningai apriboti Stripe testine aplinka — lankytojas gali pereiti visą atsiskaitymo srautą su testine kortele, bet realūs pinigai niekada nenuskaitomi. Kortelės duomenys parduotuvėje nekaupiami.",
      "Parduotuvės sąsaja kurta mobile-first principu, o turinys atskirtas nuo programos per Directus. Tai leidžia administratoriui keisti prekes ir užsakymų būsenas nekeičiant kodo, o pačiai parduotuvei išlikti greitai ir saugiai.",
    ],
  },
  tech: "Techninis pagrindas: Next.js, TypeScript, PostgreSQL, Directus CMS, Better Auth, Google OAuth, Stripe testinė aplinka, Docker ir Coolify.",
  relatedService: { href: "/el-parduotuviu-kurimas", label: "Paslauga: el. parduotuvių kūrimas" },
  otherCases: [
    { href: "/darbai/mini-social", label: "Kitas projektas: MiniSocial" },
    { href: "/darbai/situacija", label: "Kitas projektas: Situacija" },
  ],
};

export default function FutTechStoreCasePage() {
  return <CaseStudyPage content={content} />;
}
