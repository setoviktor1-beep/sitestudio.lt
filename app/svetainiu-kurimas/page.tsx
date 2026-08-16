import type { Metadata } from "next";
import ServicePage, { type ServicePageContent } from "@/components/ServicePage";
import { pathAlternates } from "@/lib/i18n";

export const metadata: Metadata = {
  title: "Svetainių kūrimas — kaina nuo 200 €, terminas nuo 1 savaitės",
  description:
    "Svetainių kūrimas verslui ir specialistams visoje Lietuvoje: reprezentacinės ir paslaugų svetainės su užklausų formomis, mobilia versija ir baziniu SEO. Aiški kaina raštu prieš pradedant.",
  alternates: { canonical: "/svetainiu-kurimas", languages: pathAlternates("/svetainiu-kurimas") },
};

const content: ServicePageContent = {
  path: "/svetainiu-kurimas",
  metaTitle: "Svetainių kūrimas — kaina nuo 200 €, terminas nuo 1 savaitės",
  metaDescription:
    "Svetainių kūrimas verslui ir specialistams visoje Lietuvoje: reprezentacinės ir paslaugų svetainės su užklausų formomis, mobilia versija ir baziniu SEO.",
  breadcrumbName: "Svetainių kūrimas",
  eyebrow: "Paslauga",
  h1: "Svetainių kūrimas verslui ir specialistams",
  intro: [
    "Kuriame internetines svetaines, kurios ne tik gerai atrodo, bet ir dirba: aiškiai pristato jūsų veiklą, kelia pasitikėjimą ir paverčia lankytojus užklausomis. Dirbame su verslais ir specialistais visoje Lietuvoje — susitikimai nebūtini, viską suderiname nuotoliu.",
    "Kiekviena svetainė kuriama individualiai pagal jūsų veiklą — be nuomojamų šablonų, su greitu veikimu telefone ir paieškai paruošta struktūra. Prieš pradedant darbus raštu sutariame apimtį, kainą ir terminą.",
  ],
  audience: {
    title: "Kam ši paslauga skirta",
    items: [
      "Meistrams ir paslaugų specialistams, kuriems reikia rimtai atrodančios svetainės su darbų galerija ir užklausų forma",
      "Mažoms ir vidutinėms įmonėms, kurios nori profesionaliai pristatyti paslaugas internete",
      "Verslams, kurių klientai ieško paslaugų per Google ir lygina kelis tiekėjus",
      "Pradedantiems verslams, kuriems reikia patikimo įvaizdžio nuo pirmos dienos",
    ],
  },
  deliverables: {
    title: "Ką gaunate",
    sub: "Konkreti apimtis fiksuojama pasiūlyme prieš pradedant darbus.",
    items: [
      "Originalus dizainas, pritaikytas jūsų veiklai ir klientams",
      "Mobili versija ir greitas veikimas visuose įrenginiuose",
      "Kontaktų ir užklausų formos tiesiai į jūsų el. paštą",
      "Bazinis SEO: struktūra, meta aprašymai, svetainės žemėlapis",
      "Analitikos prijungimas, kad matytumėte lankytojų srautą",
      "Paleidimas su jūsų domenu ir SSL sertifikatu",
    ],
  },
  sections: [
    {
      id: "turinio-valdymas",
      title: "Turinio valdymas — patys keičiate turinį be programuotojo",
      body: [
        "Didesnėms svetainėms įdiegiame turinio valdymo sistemą: tekstus, nuotraukas, kainas, darbų galeriją ar naujienas keičiate patys per suprantamą administravimo aplinką. Nereikia mokėti už kiekvieną smulkų pataisymą ir laukti, kol atsilaisvins programuotojas.",
        "Apmokome naudotis administravimo aplinka — dažniausiai užtenka valandos. Taip svetainė lieka gyva: nauji darbai, atnaujintos kainos ir naujienos pasiekia klientus iš karto.",
      ],
    },
    {
      title: "Kodėl svetainė, o ne tik socialiniai tinklai",
      body: [
        "Socialiniai tinklai tinka pasiekiamumui, bet sprendimą klientas dažniausiai priima svetainėje: čia jis randa paslaugų sąrašą, kainų orientyrus, atliktus darbus ir būdą susisiekti. Svetainė taip pat vienintelis kanalas, kurį pilnai kontroliuojate jūs, o ne platformos algoritmas.",
        "Gerai sutvarkyta svetainė dirba ir per Google paiešką: kai žmogus ieško paslaugos savo mieste, jis randa jus, o ne tik didžiuosius portalus. Todėl kiekvienoje svetainėje sutvarkome techninį SEO pagrindą — struktūrą, greitį, meta aprašymus ir struktūrinius duomenis.",
      ],
    },
  ],
  process: {
    title: "Kaip vyksta svetainės kūrimas",
    steps: [
      {
        title: "Pokalbis ir pasiūlymas",
        description:
          "Aptariame veiklą, tikslus ir biudžetą. Per 1–2 darbo dienas gaunate pasiūlymą su apimtimi, kaina ir terminu.",
      },
      {
        title: "Struktūra ir dizainas",
        description:
          "Paruošiame svetainės struktūrą ir dizainą, pritaikytą jūsų klientams. Deriname, kol rezultatas tinka.",
      },
      {
        title: "Kūrimas ir turinys",
        description:
          "Sukuriame svetainę, sudedame turinį, sutvarkome greitį, mobilią versiją ir bazinį SEO.",
      },
      {
        title: "Paleidimas ir priežiūra",
        description:
          "Paleidžiame su jūsų domenu, apmokome valdyti turinį ir, jei norite, toliau prižiūrime.",
      },
    ],
  },
  pricing: {
    title: "Kiek kainuoja svetainės kūrimas",
    note: "Kainos be PVM. Galutinė kaina patvirtinama raštu prieš pradedant darbus. Talpinimas — nuo 8 €/mėn. arba nuo 80 €/metams, galite talpinti ir pas savo tiekėją.",
    rows: [
      {
        name: "Startas",
        price: "nuo 200 €",
        description:
          "Landing page arba svetainė iki 5 puslapių su kontaktų forma ir baziniu SEO. Terminas — 1–2 savaitės.",
      },
      {
        name: "Verslas",
        price: "nuo 500 €",
        description:
          "Kelių puslapių svetainė su turinio valdymu, darbų galerija ir techniniu SEO. Terminas — 2–4 savaitės.",
      },
      {
        name: "Individualus",
        price: "pagal apimtį",
        description:
          "Didesnės svetainės su papildomomis funkcijomis — rezervacijomis, paskyromis ar integracijomis.",
      },
    ],
  },
  examples: {
    title: "Sukurtų svetainių pavyzdžiai",
    items: [
      {
        name: "Leonamai — vonios remonto meistras",
        href: "/darbai/leonamai",
        description:
          "Paslaugų svetainė su darbų galerija ir užklausų forma, pritaikyta vietinei Google paieškai.",
      },
      {
        name: "Situacija — plytelių klojimo meistras",
        href: "/darbai/situacija",
        description:
          "Svetainė su turinio valdymu — meistras pats atnaujina darbų nuotraukas be programuotojo.",
      },
    ],
  },
  faq: [
    {
      q: "Kiek laiko užtrunka sukurti svetainę?",
      a: "Nedidelė svetainė paruošiama per 1–2 savaites, kelių puslapių svetainė su turinio valdymu — per 2–4 savaites. Terminas priklauso ir nuo to, kaip greitai gauname jūsų tekstus bei nuotraukas.",
    },
    {
      q: "Ar svetainė bus pritaikyta telefonams?",
      a: "Taip, visos mūsų svetainės kuriamos „mobile first“ principu — didžioji dalis lankytojų ateina iš telefono, todėl mobili versija yra ne priedas, o pagrindas.",
    },
    {
      q: "Ar svetainė bus matoma Google paieškoje?",
      a: "Kiekvienoje svetainėje sutvarkome techninį SEO pagrindą: struktūrą, greitį, meta aprašymus, svetainės žemėlapį ir struktūrinius duomenis. Konkrečių pozicijų garantuoti negalime — jų negali garantuoti niekas — bet svetainė paruošiama taip, kad Google ją suprastų ir rodytų.",
    },
    {
      q: "Kam priklauso sukurta svetainė?",
      a: "Jums. Svetainė ir domenas visais atvejais lieka jūsų nuosavybė — galite talpinti pas mus arba pas savo tiekėją.",
    },
  ],
  related: [
    { href: "/svetainiu-atnaujinimas", label: "Svetainių atnaujinimas" },
    { href: "/el-parduotuviu-kurimas", label: "El. parduotuvių kūrimas" },
    { href: "/interneto-sistemu-kurimas", label: "Interneto sistemų kūrimas" },
    { href: "/darbai", label: "Atlikti darbai" },
  ],
  cta: {
    title: "Reikia svetainės jūsų verslui?",
    text: "Trumpai aprašykite savo veiklą — per vieną darbo dieną atsakysime su klausimais arba konkrečiu pasiūlymu su kaina ir terminu.",
  },
};

export default function SvetainiuKurimasPage() {
  return <ServicePage content={content} />;
}
