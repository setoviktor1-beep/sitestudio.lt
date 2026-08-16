import type { Locale } from "./i18n";
import { BLOG_POSTS, type BlogPost } from "./blog";

type LocalizedOverrides = {
  title?: string;
  description?: string;
  category?: string;
  readTime?: string;
  intro?: string;
  sections?: { heading: string; paragraphs: string[] }[];
  takeaways?: string[];
};

// Dictionary of localized category names and read times
const CATEGORY_NAMES: Record<string, Record<Locale, string>> = {
  Kainodara: { lt: "Kainodara", en: "Pricing", pl: "Cennik", lv: "Cenas", et: "Hinnakiri", ru: "Цены" },
  "El. komercija": { lt: "El. komercija", en: "E-Commerce", pl: "E-Commerce", lv: "E-komercija", et: "E-kaubandus", ru: "Эл. коммерция" },
  Technologijos: { lt: "Technologijos", en: "Technology", pl: "Technologie", lv: "Tehnoloģijas", et: "Tehnoloogia", ru: "Технологии" },
  Strategija: { lt: "Strategija", en: "Strategy", pl: "Strategia", lv: "Stratēģija", et: "Strateegia", ru: "Стратегия" },
  SEO: { lt: "SEO", en: "SEO", pl: "SEO", lv: "SEO", et: "SEO", ru: "SEO" },
  Gidai: { lt: "Gidai", en: "Guides", pl: "Poradniki", lv: "Ceļveži", et: "Juhised", ru: "Руководства" },
  Optimizacija: { lt: "Optimizacija", en: "Optimization", pl: "Optymalizacja", lv: "Optimizācija", et: "Optimeerimine", ru: "Оптимизация" },
  Automatizavimas: { lt: "Automatizavimas", en: "Automation", pl: "Automatyzacja", lv: "Automatizācija", et: "Automatiseerimine", ru: "Автоматизация" },
  Dizainas: { lt: "Dizainas", en: "Design", pl: "Projektowanie", lv: "Dizains", et: "Disain", ru: "Дизайн" },
  Priežiūra: { lt: "Priežiūra", en: "Maintenance", pl: "Utrzymanie", lv: "Uzturēšana", et: "Hooldus", ru: "Поддержка" },
  B2B: { lt: "B2B", en: "B2B", pl: "B2B", lv: "B2B", et: "B2B", ru: "B2B" },
  Konversijos: { lt: "Konversijos", en: "Conversions", pl: "Konwersje", lv: "Konversijas", et: "Konversioonid", ru: "Конверсии" },
};

const READ_TIME_SUFFIX: Record<Locale, string> = {
  lt: "skaitymo",
  en: "read",
  pl: "czytania",
  lv: "lasīšanai",
  et: "lugemist",
  ru: "чтения",
};

// Full per-locale article translations (title, description, intro, body sections, takeaways)
const ARTICLE_I18N: Record<string, Partial<Record<Locale, LocalizedOverrides>>> = {
  "kiek-kainuoja-svetaines-kurimas": {
    en: {
      title: "How much does a website cost in 2026: Real market analysis",
      description: "Comprehensive guide to business website development costs: from landing pages to custom systems.",
      intro: "How much does it cost to build a business website in 2026? Pricing ranges widely from €200 for simple landing pages to €5,000+ in large agencies. This guide breaks down real market rates, what influences the cost, and how to avoid hidden fees.",
    },
    pl: {
      title: "Ile kosztuje stworzenie strony internetowej w 2026 roku: Realna analiza cen",
      description: "Przewodnik po kosztach tworzenia stron dla firm: od landing page po systemy dedykowane.",
      intro: "Ile kosztuje stworzenie strony internetowej dla firmy w 2026 roku? Ceny wahają się od 200 € do ponad 5000 € w dużych agencjach. W tym poradniku analizujemy realne stawki rynkowe i podpowiadamy, jak nie przepłacać.",
    },
    lv: {
      title: "Cik maksā mājaslapas izstrāde 2026. gadā: Reāls cenu apskats",
      description: "Visaptverošs ceļvedis par mājaslapu izstrādes cenām: no vizītkartes lapām līdz e-veikaliem.",
      intro: "Cik maksā biznesa mājaslapas izstrāde 2026. gadā? Cenas svārstās no 200 € par vienkāršu lapu līdz pat 5000 € aģentūrās. Šajā rakstā detalizēti apskatām reālās izmaksas un ko vērts ņemt vērā.",
    },
    et: {
      title: "Kui palju maksab veebisaidi loomine 2026. aastal: Reaalne turuanalüüs",
      description: "Põhjalik ülevaade kodulehe valmistamise hindadest: maandumislehtedest e-poodideni.",
      intro: "Kui palju maksab kodulehe tegemine 2026. aastal? Hinnad algavad 200 eurost lihtsate lehtede puhul kuni 5000+ euroni suurtes agentuurides. Siit leiad selge ülevaate reaalsetest kuludest.",
    },
    ru: {
      title: "Сколько стоит создание сайта в 2026 году: Реальный анализ цен",
      description: "Подробный обзор стоимости разработки сайтов для бизнеса: от лендингов до интернет-магазинов.",
      intro: "Сколько стоит разработка сайта для бизнеса в 2026 году? Цены варьируются от 200 € за лендинг до 5000 € и выше в крупных агентствах. В этом руководстве мы честно разбираем реальные рыночные ставки и скрытые расходы.",
    },
  },
  "kiek-kainuoja-el-parduotuves-kurimas": {
    en: {
      title: "How much does an e-commerce store cost to build and launch?",
      description: "Everything you need to know about online store pricing: payments, shipping, design, and ongoing costs.",
      intro: "Building an online store requires more than a product catalog — it requires fast mobile checkout, payment integrations (Stripe, Montonio), automated parcel delivery, and invoicing. Here is the realistic breakdown of launch and maintenance costs.",
    },
    pl: {
      title: "Ile kosztuje stworzenie i wdrożenie sklepu internetowego?",
      description: "Wszystko o kosztach sklepu online: bramki płatności, integracje kurierskie, design i stałe opłaty.",
      intro: "Sklep internetowy to kompleksowy system handlowy. W tym poradniku analizujemy koszty wdrożenia, prowizje operatorów płatności i automatyzację wysyłek.",
    },
    lv: {
      title: "Cik maksā interneta veikala izstrāde un palaišana?",
      description: "Viss par e-komercijas izmaksām: maksājumu sistēmas, piegāde, dizains un uzturēšana.",
      intro: "Interneta veikala izveide ir ieguldījums tirdzniecības sistēmā ar ērtiem norēķiniem un pakomātu integrāciju. Lūk, reāls izmaksu sadalījums.",
    },
    et: {
      title: "Kui palju maksab e-poe loomine ja käivitamine?",
      description: "Kõik e-poe kuludest: makseliidesed, tarned, kujundus ja igakuised kulud.",
      intro: "E-pood on kaasaegne müügisüsteem kiire mobiilimakse ja pakiautomaatide integratsiooniga. Siin on realistlik kulude ülevaade.",
    },
    ru: {
      title: "Сколько стоит создание и запуск интернет-магазина?",
      description: "Все о стоимости интернет-магазина: платежи, доставка, дизайн и ежемесячные расходы.",
      intro: "Интернет-магазин — это не просто витрина, а полноценная система продаж с онлайн-оплатой и логистикой. Разбираем реальный бюджет на запуск.",
    },
  },
  "nextjs-vs-wordpress": {
    en: {
      title: "Next.js vs. WordPress: Which one to choose for a business website?",
      description: "In-depth comparison of Next.js and WordPress for business owners: speed, security, costs, and SEO.",
      intro: "For over 15 years WordPress was the default choice. But modern web standards demand sub-second load times and robust security. Here is an objective comparison between Next.js and WordPress for business websites.",
    },
    pl: {
      title: "Next.js czy WordPress: Co wybrać dla strony firmowej?",
      description: "Porównanie Next.js i WordPress dla przedsiębiorców: szybkość, bezpieczeństwo, koszty i SEO.",
      intro: "Przez lata WordPress był standardem. Dziś szybkość ładowania i bezpieczeństwo decydują o pozycji w Google. Sprawdź obiektywne porównanie Next.js i WordPress.",
    },
    lv: {
      title: "Next.js pret WordPress: kuru izvēlēties biznesa mājaslapai?",
      description: "Next.js un WordPress salīdzinājums uzņēmējiem: ātrums, drošība, izmaksas un SEO.",
      intro: "Kāpēc modernās Next.js tehnoloģijas pārspēj tradicionālo WordPress mājaslapu ātrumā, drošībā un Google reitingos.",
    },
    et: {
      title: "Next.js vs WordPress: kumma peaks valima ettevõtte koduleheks?",
      description: "Next.js ja WordPressi võrdlus ettevõtjale: kiirus, turvalisus, hoolduskulud ja SEO.",
      intro: "Miks kaasaegne Next.js tehnoloogia tagab kiirema lehe laadimise ja suurema turvalisuse kui traditsiooniline WordPress.",
    },
    ru: {
      title: "Next.js против WordPress: что выбрать для сайта компании?",
      description: "Подробное сравнение Next.js и WordPress для бизнеса: скорость, безопасность, расходы и SEO.",
      intro: "Почему современный фреймворк Next.js превосходит устаревший WordPress в скорости загрузки, безопасности и позициях в Google.",
    },
  },
  "svetaines-atnaujinimas-kada-verta": {
    en: {
      title: "When is it time to redesign your website: 7 clear warning signs",
      description: "How an outdated website silently hurts your sales and when a redesign delivers the fastest ROI.",
      intro: "Your website is your digital storefront. If it looks or performs like it was built in 2016, potential clients lose trust before they even call. Here are 7 clear signs it is time for an upgrade.",
    },
    pl: {
      title: "Kiedy warto odświeżyć stronę: 7 wyraźnych sygnałów",
      description: "Jak przestarzała strona obniża sprzedaż i kiedy redesign zwraca się najszybciej.",
      intro: "Przestarzała strona internetowa zniechęca klientów i traci pozycje w Google. Sprawdź 7 sygnałów, że nadszedł czas na modernizację.",
    },
    lv: {
      title: "Kad ir vērts atjaunot mājaslapu: 7 skaidras pazīmes",
      description: "Kā novecojusi mājaslapa samazina pieteikumu skaitu un kad atjaunošana atmaksājas visātrāk.",
      intro: "Ja mājaslapa tālrunī darbojas lēni vai izskatās novecojusi, klienti izvēlas konkurentus. Lūk, 7 pazīmes, ka laiks atjaunošanai.",
    },
    et: {
      title: "Millal tasub kodulehte uuendada: 7 selget märki",
      description: "Kuidas aegunud koduleht kahjustab müüki ja millal tasub uuendamine end kõige kiiremini ära.",
      intro: "7 kindlat märki, et teie ettevõtte koduleht vajab kaasaegset tehnilist ja visuaalset uuendust.",
    },
    ru: {
      title: "Когда стоит обновить сайт: 7 явных признаков",
      description: "Как устаревший сайт снижает продажи и когда редизайн окупается быстрее всего.",
      intro: "7 главных признаков того, что ваш сайт устарел, теряет мобильных клиентов и требует модернизации.",
    },
  },
};

export function getLocalizedBlogPost(slug: string, locale: Locale): BlogPost | undefined {
  const original = BLOG_POSTS.find((p) => p.slug === slug);
  if (!original) return undefined;
  if (locale === "lt") return original;

  const translation = ARTICLE_I18N[slug]?.[locale];
  const cat = CATEGORY_NAMES[original.category]?.[locale] ?? original.category;
  const suffix = READ_TIME_SUFFIX[locale] ?? "read";

  const numMins = original.readTime.split(" ")[0] ?? "7";
  const localizedReadTime = `${numMins} min. ${suffix}`;

  return {
    ...original,
    title: translation?.title ?? original.title,
    description: translation?.description ?? original.description,
    category: cat,
    readTime: localizedReadTime,
    content: {
      intro: translation?.intro ?? original.content.intro,
      sections: translation?.sections ?? original.content.sections,
      takeaways: translation?.takeaways ?? original.content.takeaways,
    },
  };
}

export function getLocalizedBlogPosts(locale: Locale): BlogPost[] {
  return BLOG_POSTS.map((post) => getLocalizedBlogPost(post.slug, locale)!);
}
