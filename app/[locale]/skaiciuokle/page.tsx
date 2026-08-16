"use client";

import { use, useState } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";
import { type Locale } from "@/lib/i18n";
import { en } from "@/lib/i18n/en";
import { pl } from "@/lib/i18n/pl";
import { lv } from "@/lib/i18n/lv";
import { et } from "@/lib/i18n/et";
import { ru } from "@/lib/i18n/ru";

type ProjectType = {
  id: string;
  name: string;
  desc: string;
  basePrice: number;
  baseWeeks: number;
};

type Feature = {
  id: string;
  name: string;
  desc: string;
  price: number;
};

const DICTS = { en, pl, lv, et, ru };

const CALC_TEXTS: Record<
  Locale,
  {
    eyebrow: string;
    title: string;
    titleAccent: string;
    desc: string;
    step1: string;
    step2: string;
    step3: string;
    from: string;
    estimateTitle: string;
    timeline: string;
    week: string;
    weeks: string;
    baseSolution: string;
    addons: string;
    vatNotice: string;
    formTitle: string;
    formDesc: string;
    nameLabel: string;
    contactLabel: string;
    msgLabel: string;
    submitBtn: string;
    submittingBtn: string;
    successMsg: string;
    errorMsg: string;
    directContact: string;
    fixedPriceNotice: string;
    fullOwnershipNotice: string;
    customNeedText: string;
    projectTypes: ProjectType[];
    features: Feature[];
  }
> = {
  lt: {} as any,
  en: {
    eyebrow: "Interactive Tool",
    title: "Website",
    titleAccent: "Price Calculator",
    desc: "Select your project type and desired features to get an immediate price estimate and timeline. All projects are backed by a fixed written quote.",
    step1: "Select project type",
    step2: "Additional features & integrations",
    step3: "Get official quote for this configuration",
    from: "from",
    estimateTitle: "Estimated Cost",
    timeline: "Timeline:",
    week: "week",
    weeks: "weeks",
    baseSolution: "Base package:",
    addons: "Add-ons",
    vatNotice: "Prices without VAT",
    formTitle: "Request a proposal for this estimate",
    formDesc: "Fill in your contact details — we will reply with an official proposal within 1 business day.",
    nameLabel: "Your name or company",
    contactLabel: "Email or phone number",
    msgLabel: "Additional comments or requirements (optional)",
    submitBtn: "Get official proposal for this estimate",
    submittingBtn: "Sending...",
    successMsg: "Request sent successfully! We will get back to you within 1 business day.",
    errorMsg: "Error sending request. Please email us directly at info@sitestudio.lt",
    directContact: "Direct contact with the lead developer",
    fixedPriceNotice: "Fixed price & timeline in writing",
    fullOwnershipNotice: "100% full ownership of your site",
    customNeedText: "Have a custom project requirement? Contact us →",
    projectTypes: [
      { id: "landing", name: "Landing Page (1 page)", desc: "One-page website with a clear offer, portfolio gallery, and inquiry form.", basePrice: 200, baseWeeks: 1 },
      { id: "service", name: "Business Website (up to 5 pages)", desc: "Multi-page website for companies and specialists with basic SEO.", basePrice: 350, baseWeeks: 2 },
      { id: "cms", name: "Website with Content Management (CMS)", desc: "Easy admin panel to edit texts, images, and prices without a developer.", basePrice: 500, baseWeeks: 3 },
      { id: "ecommerce", name: "Online Store (E-Commerce)", desc: "Product catalog, shopping cart, Stripe / Montonio payments, and order tracking.", basePrice: 1200, baseWeeks: 4 },
      { id: "custom", name: "Custom Web System / MVP", desc: "Online booking systems, customer portals, custom calculators, or SaaS MVP.", basePrice: 1800, baseWeeks: 5 },
    ],
    features: [
      { id: "cms_addon", name: "Content Management System (CMS)", desc: "Easily update content, blog posts, and photos independently.", price: 150 },
      { id: "multilingual", name: "Multilingual Support (EN / PL / LV / RU)", desc: "Full localization and international SEO setup.", price: 150 },
      { id: "payments", name: "Payment Gateway Integration", desc: "Accept online banking, Apple Pay, Google Pay, and Stripe.", price: 200 },
      { id: "booking", name: "Online Booking / Appointment Calendar", desc: "Interactive calendar with automatic email confirmations.", price: 200 },
      { id: "automation", name: "AI & Process Automation", desc: "Sync inquiries to CRM, Google Sheets, or Telegram alerts.", price: 250 },
      { id: "copywriting", name: "Professional Copywriting & Structure", desc: "Persuasive sales copywriting tailored to your target audience.", price: 120 },
    ],
  },
  pl: {
    eyebrow: "Interaktywne narzędzie",
    title: "Kalkulator",
    titleAccent: "ceny strony",
    desc: "Wybierz typ projektu i funkcje, aby natychmiast poznać szacunkowy koszt i czas realizacji.",
    step1: "Wybierz rodzaj strony",
    step2: "Dodatkowe funkcje i integracje",
    step3: "Otrzymaj ofertę dla tej konfiguracji",
    from: "od",
    estimateTitle: "Szacunkowy koszt",
    timeline: "Czas realizacji:",
    week: "tydzień",
    weeks: "tygodnie",
    baseSolution: "Pakiet bazowy:",
    addons: "Dodatki",
    vatNotice: "Ceny netto",
    formTitle: "Poproś o oficjalną wycenę",
    formDesc: "Wypełnij formularz — odpowiemy w ciągu 1 dnia roboczego.",
    nameLabel: "Imię i nazwisko lub nazwa firmy",
    contactLabel: "Email lub numer telefonu",
    msgLabel: "Dodatkowe uwagi (opcjonalnie)",
    submitBtn: "Otrzymaj oficjalną wycenę",
    submittingBtn: "Wysyłanie...",
    successMsg: "Wiadomość wysłana pomyślnie! Skontaktujemy się w ciągu 1 dnia roboczego.",
    errorMsg: "Błąd wysyłania. Napisz do nas bezpośrednio na info@sitestudio.lt",
    directContact: "Bezpośredni kontakt z wykonawcą",
    fixedPriceNotice: "Gwarancja stałej ceny i terminu na piśmie",
    fullOwnershipNotice: "100% własności kodu i domeny",
    customNeedText: "Masz niestandardowy projekt? Napisz do nas →",
    projectTypes: [
      { id: "landing", name: "Landing page (1 strona)", desc: "Jednostronicowa witryna z ofertą i formularzem kontaktowym.", basePrice: 200, baseWeeks: 1 },
      { id: "service", name: "Strona firmowa (do 5 podstron)", desc: "Wizytówka firmy z opisem usług i bazowym SEO.", basePrice: 350, baseWeeks: 2 },
      { id: "cms", name: "Strona z panelem CMS", desc: "Intuicyjny panel do samodzielnej edycji tekstów i zdjęć.", basePrice: 500, baseWeeks: 3 },
      { id: "ecommerce", name: "Sklep internetowy (E-Commerce)", desc: "Katalog produktów, koszyk, płatności online i zamówienia.", basePrice: 1200, baseWeeks: 4 },
      { id: "custom", name: "Dedykowana aplikacja / MVP", desc: "Systemy rezerwacji, panele klienta, kalkulatory, MVP.", basePrice: 1800, baseWeeks: 5 },
    ],
    features: [
      { id: "cms_addon", name: "System zarządzania treścią (CMS)", desc: "Samodzielna edycja tekstów i galerii bez programisty.", price: 150 },
      { id: "multilingual", name: "Wersja wielojęzyczna", desc: "Tłumaczenie i optymalizacja międzynarodowego SEO.", price: 150 },
      { id: "payments", name: "Bramka płatności online", desc: "Obsługa BLIK, kart i szybkich przelewów bankowych.", price: 200 },
      { id: "booking", name: "System rezerwacji / kalendarz", desc: "Automatyczne rezerwacje z powiadomieniami email.", price: 200 },
      { id: "automation", name: "Automatyzacja procesów i AI", desc: "Synchronizacja z CRM, arkuszami i powiadomienia Telegram.", price: 250 },
      { id: "copywriting", name: "Teksty sprzedażowe", desc: "Profesjonalnie przygotowane treści dla Twojej branży.", price: 120 },
    ],
  },
  lv: {
    eyebrow: "Interaktīvs rīks",
    title: "Mājaslapas",
    titleAccent: "cenu kalkulators",
    desc: "Izvēlieties projekta veidu un funkcijas, lai uzzinātu provizoriskās izmaksas un izstrādes termiņu.",
    step1: "Izvēlieties mājaslapas veidu",
    step2: "Papildu funkcijas un integrācijas",
    step3: "Saņemt piedāvājumu šai konfigurācijai",
    from: "no",
    estimateTitle: "Provizoriskā tāme",
    timeline: "Termiņš:",
    week: "nedēļa",
    weeks: "nedēļas",
    baseSolution: "Bāzes risinājums:",
    addons: "Papildinājumi",
    vatNotice: "Cenas norādītas bez PVN",
    formTitle: "Saņemt precīzu piedāvājumu",
    formDesc: "Aizpildiet kontaktinformāciju — atbildēsim 1 darba dienas laikā.",
    nameLabel: "Jūsu vārds vai uzņēmums",
    contactLabel: "E-pasts vai tālrunis",
    msgLabel: "Papildu komentāri (neobligāti)",
    submitBtn: "Saņemt piedāvājumu",
    submittingBtn: "Nosūta...",
    successMsg: "Pieteikums veiksmīgi nosūtīts! Atbildēsim 1 darba dienas laikā.",
    errorMsg: "Kļūda nosūtot pieteikumu. Rakstiet uz info@sitestudio.lt",
    directContact: "Tiešs kontakts ar izstrādātāju",
    fixedPriceNotice: "Fiksēta cena un termiņš rakstiski",
    fullOwnershipNotice: "100% pilna mājaslapas īpašumtiesība",
    customNeedText: "Nepieciešams individuāls risinājums? Sazinieties ar mums →",
    projectTypes: [
      { id: "landing", name: "Landing lapa (1 lappuse)", desc: "Vienas lapas vietne ar piedāvājumu un pieteikuma formu.", basePrice: 200, baseWeeks: 1 },
      { id: "service", name: "Uzņēmuma mājaslapa (līdz 5 lpp.)", desc: "Reprezentatīva mājaslapa uzņēmumiem ar bāzes SEO.", basePrice: 350, baseWeeks: 2 },
      { id: "cms", name: "Mājaslapa ar CMS vadības paneli", desc: "Ērta sistēma patstāvīgai tekstu un attēlu mainīšanai.", basePrice: 500, baseWeeks: 3 },
      { id: "ecommerce", name: "Interneta veikals (E-Commerce)", desc: "Preču katalogs, grozs, maksājumi un pasūtījumu vadība.", basePrice: 1200, baseWeeks: 4 },
      { id: "custom", name: "Individuāla sistēma / MVP", desc: "Rezervācijas, klientu portāli vai jauna produkta MVP.", basePrice: 1800, baseWeeks: 5 },
    ],
    features: [
      { id: "cms_addon", name: "Satura vadības sistēma (CMS)", desc: "Iespēja pašiem atjaunot saturu bez programmētāja.", price: 150 },
      { id: "multilingual", name: "Daudzvalodu atbalsts", desc: "Pilnīga lokalizācija un starptautiskais SEO.", price: 150 },
      { id: "payments", name: "Maksājumu sistēmu integrācija", desc: "Banklink, karšu un Apple Pay norēķini.", price: 200 },
      { id: "booking", name: "Tiešsaistes rezervāciju kalendārs", desc: "Automātiska vizīšu pieteikšana un apstiprinājumi.", price: 200 },
      { id: "automation", name: "AI un procesu automatizācija", desc: "Pieteikumu sinhronizācija ar CRM un Telegram.", price: 250 },
      { id: "copywriting", name: "Tekstu sagatavošana", desc: "Pārliecinoši teksti atbilstoši jūsu nozarei.", price: 120 },
    ],
  },
  et: {
    eyebrow: "Interaktiivne tööriist",
    title: "Kodulehe",
    titleAccent: "hinnakalkulaator",
    desc: "Valige projekti tüüp ja funktsioonid, et saada kohene hinnang investeeringule ja teostusajale.",
    step1: "Valige kodulehe tüüp",
    step2: "Lisafunktsioonid ja liidestused",
    step3: "Küsi ametlikku hinnapakkumist",
    from: "alates",
    estimateTitle: "Eeldatav maksumus",
    timeline: "Teostusaeg:",
    week: "nädal",
    weeks: "nädalat",
    baseSolution: "Baaspakett:",
    addons: "Lisad",
    vatNotice: "Hinnad ei sisalda käibemaksu",
    formTitle: "Küsi ametlikku pakkumist",
    formDesc: "Sisestage oma kontaktandmed — vastame 1 tööpäeva jooksul.",
    nameLabel: "Teie nimi või ettevõte",
    contactLabel: "E-post või telefoninumber",
    msgLabel: "Lisamärkused (valikuline)",
    submitBtn: "Küsi hinnapakkumist",
    submittingBtn: "Saadan...",
    successMsg: "Päring edukalt saadetud! Vastame 1 tööpäeva jooksul.",
    errorMsg: "Viga saatmisel. Kirjutage aadressile info@sitestudio.lt",
    directContact: "Otsene suhtlus arendajaga",
    fixedPriceNotice: "Fikseeritud hind ja tähtaeg kirjalikult",
    fullOwnershipNotice: "100% kodulehe omandiõigus kuulub teile",
    customNeedText: "Erisoovidega projekt? Kirjutage meile →",
    projectTypes: [
      { id: "landing", name: "Maandumisleht (1 lehekülg)", desc: "Üheleheline veebileht selge pakkumise ja kontaktivormiga.", basePrice: 200, baseWeeks: 1 },
      { id: "service", name: "Ettevõtte koduleht (kuni 5 lk)", desc: "Terviklik esindusleht teenuste tutvustamiseks ja baas-SEO.", basePrice: 350, baseWeeks: 2 },
      { id: "cms", name: "Koduleht CMS haldussüsteemiga", desc: "Mugav haldusliides tekstide ja piltide muutmiseks.", basePrice: 500, baseWeeks: 3 },
      { id: "ecommerce", name: "E-pood (E-Commerce)", desc: "Tootekataloog, ostukorv, pangalingid ja tarneliidestused.", basePrice: 1200, baseWeeks: 4 },
      { id: "custom", name: "Eriotstarbeline veebisüsteem / MVP", desc: "Broneerimissüsteemid, kliendiportaalid või idufirma MVP.", basePrice: 1800, baseWeeks: 5 },
    ],
    features: [
      { id: "cms_addon", name: "Sisuhaldussüsteem (CMS)", desc: "Tekstide ja piltide muutmine ilma programmeerijata.", price: 150 },
      { id: "multilingual", name: "Mitmekeelsus", desc: "Lehe täielik lokaliseerimine ja rahvusvaheline SEO.", price: 150 },
      { id: "payments", name: "Makseliidese integratsioon", desc: "Pangalingid (Montonio, Stripe), kaardimaksed.", price: 200 },
      { id: "booking", name: "Broneerimissüsteem / kalender", desc: "Aegade broneerimine ja automaatsed kinnituskirjad.", price: 200 },
      { id: "automation", name: "AI ja protsesside automatiseerimine", desc: "Andmete edastamine CRM-i, Google Sheetsi ja Telegrami.", price: 250 },
      { id: "copywriting", name: "Müügitekstide koostamine", desc: "Professionaalsed tekstid teie sihtrühmale.", price: 120 },
    ],
  },
  ru: {
    eyebrow: "Интерактивный инструмент",
    title: "Калькулятор",
    titleAccent: "стоимости сайта",
    desc: "Выберите тип проекта и необходимые функции, чтобы мгновенно узнать примерную стоимость и сроки реализации.",
    step1: "Выберите тип сайта",
    step2: "Дополнительные функции и интеграции",
    step3: "Получить официальное предложение",
    from: "от",
    estimateTitle: "Примерная смета",
    timeline: "Срок разработки:",
    week: "неделя",
    weeks: "недели",
    baseSolution: "Базовый пакет:",
    addons: "Дополнения",
    vatNotice: "Цены без учета НДС",
    formTitle: "Запросить официальную смету",
    formDesc: "Заполните контакты — мы ответим с подробным предложением в течение 1 рабочего дня.",
    nameLabel: "Ваше имя или компания",
    contactLabel: "Email или номер телефона",
    msgLabel: "Дополнительные пожелания (необязательно)",
    submitBtn: "Получить предложение по этой смете",
    submittingBtn: "Отправка...",
    successMsg: "Заявка успешно отправлена! Мы свяжемся с вами в течение 1 рабочего дня.",
    errorMsg: "Ошибка отправки. Пожалуйста, напишите нам на info@sitestudio.lt",
    directContact: "Прямой контакт с разработчиком",
    fixedPriceNotice: "Фиксированная цена и сроки в договоре",
    fullOwnershipNotice: "100% владение кодом и доменом",
    customNeedText: "Нужен индивидуальный проект? Свяжитесь с нами →",
    projectTypes: [
      { id: "landing", name: "Лендинг (1 страница)", desc: "Одностраничный сайт с понятным предложением и формой заявки.", basePrice: 200, baseWeeks: 1 },
      { id: "service", name: "Корпоративный сайт (до 5 стр.)", desc: "Представительский сайт для услуг компании с базовым SEO.", basePrice: 350, baseWeeks: 2 },
      { id: "cms", name: "Сайт с удобной CMS (админкой)", desc: "Самостоятельное редактирование текстов, цен и фото без программиста.", basePrice: 500, baseWeeks: 3 },
      { id: "ecommerce", name: "Интернет-магазин (E-Commerce)", desc: "Каталог товаров, корзина, онлайн-оплата и управление заказами.", basePrice: 1200, baseWeeks: 4 },
      { id: "custom", name: "Индивидуальная веб-система / MVP", desc: "Системы онлайн-записи, личные кабинеты клиентов, калькуляторы.", basePrice: 1800, baseWeeks: 5 },
    ],
    features: [
      { id: "cms_addon", name: "Система управления контентом (CMS)", desc: "Редактирование текстов и галерей без помощи программиста.", price: 150 },
      { id: "multilingual", name: "Мультиязычность", desc: "Полная локализация сайта и международное SEO.", price: 150 },
      { id: "payments", name: "Подключение платежной системы", desc: "Прием банковских карт, Stripe, Apple Pay, Google Pay.", price: 200 },
      { id: "booking", name: "Онлайн-запись и календарь", desc: "Интерактивный календарь с автоматическими подтверждениями.", price: 200 },
      { id: "automation", name: "AI и автоматизация процессов", desc: "Перенос заявок в CRM, Google Sheets и уведомления в Telegram.", price: 250 },
      { id: "copywriting", name: "Продающие тексты и структура", desc: "Написание профессиональных текстов под вашу сферу.", price: 120 },
    ],
  },
};

export default function LocalizedCalculatorPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: rawLocale } = use(params);
  const locale = (["en", "pl", "lv", "et", "ru"].includes(rawLocale)
    ? rawLocale
    : "en") as "en" | "pl" | "lv" | "et" | "ru";

  const t = CALC_TEXTS[locale];
  const dict = DICTS[locale];

  const [selectedType, setSelectedType] = useState<string>("cms");
  const [selectedFeatures, setSelectedFeatures] = useState<string[]>([]);
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [statusMsg, setStatusMsg] = useState("");

  const currentType = t.projectTypes.find((p) => p.id === selectedType) ?? t.projectTypes[2];

  const toggleFeature = (id: string) => {
    setSelectedFeatures((prev) =>
      prev.includes(id) ? prev.filter((f) => f !== id) : [...prev, id]
    );
  };

  const featuresTotal = selectedFeatures.reduce((acc, id) => {
    const f = t.features.find((item) => item.id === id);
    return acc + (f ? f.price : 0);
  }, 0);

  const totalPrice = currentType.basePrice + featuresTotal;
  const totalWeeks = currentType.baseWeeks + (selectedFeatures.length > 2 ? 1 : 0);

  const crumbs = [
    { name: dict.nav.works === "Realizacje" ? "Start" : "Home", href: `/${locale}` },
    { name: dict.nav.services, href: `/${locale}/paslaugos` },
    { name: t.titleAccent },
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");

    const selectedFeatureNames = selectedFeatures
      .map((id) => t.features.find((f) => f.id === id)?.name)
      .filter(Boolean)
      .join(", ");

    const payload = {
      name,
      contact,
      message: `[${locale.toUpperCase()} Calculator Inquiry]\nProject: ${currentType.name}\nEstimated Price: from ${totalPrice} €\nTimeline: ~${totalWeeks} ${totalWeeks === 1 ? t.week : t.weeks}\nSelected Add-ons: ${selectedFeatureNames || "None"}\n\nMessage: ${message || "No additional message"}`,
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) throw new Error();
      setStatus("success");
      setStatusMsg(t.successMsg);
    } catch {
      setStatus("error");
      setStatusMsg(t.errorMsg);
    }
  };

  return (
    <div className="min-h-screen bg-white text-[#0f172a] antialiased">
      <Navbar dict={dict} locale={locale} />

      <main id="turinys" className="pt-28 md:pt-32 pb-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <Breadcrumbs items={crumbs} />

          <header className="mt-6 max-w-3xl">
            <p className="section-label mb-3">{t.eyebrow}</p>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight">
              {t.title} <span className="text-[#2456d6]">{t.titleAccent}</span>
            </h1>
            <p className="mt-4 text-[#475569] text-base sm:text-lg leading-relaxed">
              {t.desc}
            </p>
          </header>

          <div className="mt-12 grid grid-cols-1 lg:grid-cols-3 gap-10 items-start">
            <div className="lg:col-span-2 space-y-10">
              {/* Step 1 */}
              <div>
                <h2 className="text-xl font-bold flex items-center gap-2">
                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#2456d6] text-white text-xs font-bold">1</span>
                  {t.step1}
                </h2>
                <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {t.projectTypes.map((type) => {
                    const isSelected = selectedType === type.id;
                    return (
                      <button
                        key={type.id}
                        type="button"
                        onClick={() => setSelectedType(type.id)}
                        className={`text-left p-5 rounded-2xl border transition-all ${
                          isSelected
                            ? "border-[#2456d6] bg-[#2456d6]/5 shadow-sm ring-1 ring-[#2456d6]"
                            : "border-[#0f172a]/10 bg-white hover:border-[#2456d6]/40"
                        }`}
                      >
                        <div className="flex justify-between items-center mb-1">
                          <p className="font-bold text-sm text-[#0f172a]">{type.name}</p>
                          <span className="text-xs font-semibold text-[#2456d6]">{t.from} {type.basePrice} €</span>
                        </div>
                        <p className="text-xs text-[#64748b] leading-relaxed">{type.desc}</p>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Step 2 */}
              <div>
                <h2 className="text-xl font-bold flex items-center gap-2">
                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#2456d6] text-white text-xs font-bold">2</span>
                  {t.step2}
                </h2>
                <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {t.features.map((feature) => {
                    const isChecked = selectedFeatures.includes(feature.id);
                    return (
                      <div
                        key={feature.id}
                        onClick={() => toggleFeature(feature.id)}
                        className={`cursor-pointer p-4 rounded-2xl border transition-all flex items-start gap-3 ${
                          isChecked
                            ? "border-[#2456d6] bg-[#2456d6]/5 shadow-sm"
                            : "border-[#0f172a]/10 bg-white hover:border-[#2456d6]/40"
                        }`}
                      >
                        <input
                          type="checkbox"
                          checked={isChecked}
                          onChange={() => {}}
                          className="mt-1 h-4 w-4 rounded border-gray-300 text-[#2456d6] focus:ring-[#2456d6]"
                        />
                        <div className="flex-1">
                          <div className="flex justify-between items-center">
                            <p className="font-semibold text-xs text-[#0f172a]">{feature.name}</p>
                            <span className="text-xs font-semibold text-[#2456d6]">+{feature.price} €</span>
                          </div>
                          <p className="text-[11px] text-[#64748b] mt-1">{feature.desc}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Step 3: Form */}
              <div className="rounded-2xl border border-[#0f172a]/10 bg-[#f6f8fb] p-8">
                <h2 className="text-xl font-bold mb-2">{t.formTitle}</h2>
                <p className="text-sm text-[#475569] mb-6">{t.formDesc}</p>

                {status === "success" ? (
                  <div className="rounded-xl bg-emerald-50 border border-emerald-200 p-5 text-emerald-800 text-sm font-medium">
                    {statusMsg}
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold text-[#334155] mb-1">{t.nameLabel}</label>
                        <input
                          type="text"
                          required
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          className="w-full rounded-xl border border-[#0f172a]/10 bg-white px-3.5 py-2.5 text-sm focus:border-[#2456d6] focus:outline-none"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-[#334155] mb-1">{t.contactLabel}</label>
                        <input
                          type="text"
                          required
                          value={contact}
                          onChange={(e) => setContact(e.target.value)}
                          className="w-full rounded-xl border border-[#0f172a]/10 bg-white px-3.5 py-2.5 text-sm focus:border-[#2456d6] focus:outline-none"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-[#334155] mb-1">{t.msgLabel}</label>
                      <textarea
                        rows={3}
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        className="w-full rounded-xl border border-[#0f172a]/10 bg-white px-3.5 py-2.5 text-sm focus:border-[#2456d6] focus:outline-none"
                      />
                    </div>
                    {status === "error" && (
                      <p className="text-xs text-rose-600 font-medium">{statusMsg}</p>
                    )}
                    <button
                      type="submit"
                      disabled={status === "submitting"}
                      className="w-full rounded-xl bg-[#2456d6] py-3 text-sm font-semibold text-white shadow-sm hover:bg-[#1a41ab] transition-colors disabled:opacity-50"
                    >
                      {status === "submitting" ? t.submittingBtn : t.submitBtn}
                    </button>
                  </form>
                )}
              </div>
            </div>

            {/* Right column estimate summary */}
            <div className="sticky top-28 rounded-3xl border-2 border-[#2456d6] bg-white p-7 shadow-lg">
              <span className="text-xs font-bold uppercase tracking-wider text-[#2456d6]">{t.estimateTitle}</span>
              <p className="mt-3 text-4xl font-extrabold text-[#0f172a]">{t.from} {totalPrice} €</p>
              <p className="text-xs text-[#64748b] mt-1">{t.vatNotice}</p>

              <div className="mt-6 border-t border-[#0f172a]/10 pt-4 space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-[#64748b]">{t.timeline}</span>
                  <span className="font-semibold text-[#0f172a]">~{totalWeeks} {totalWeeks === 1 ? t.week : t.weeks}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#64748b]">{t.baseSolution}</span>
                  <span className="font-semibold text-[#0f172a]">{currentType.basePrice} €</span>
                </div>
                {featuresTotal > 0 && (
                  <div className="flex justify-between">
                    <span className="text-[#64748b]">{t.addons} ({selectedFeatures.length}):</span>
                    <span className="font-semibold text-[#0f172a]">+{featuresTotal} €</span>
                  </div>
                )}
              </div>

              <div className="mt-6 rounded-xl bg-[#f6f8fb] p-4 text-xs text-[#475569] space-y-2">
                <p className="flex items-center gap-2">
                  <svg className="h-4 w-4 text-[#2456d6]" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.7 5.3a1 1 0 010 1.4l-8 8a1 1 0 01-1.4 0l-4-4a1 1 0 111.4-1.4L8 12.6l7.3-7.3a1 1 0 011.4 0z" clipRule="evenodd" />
                  </svg>
                  {t.directContact}
                </p>
                <p className="flex items-center gap-2">
                  <svg className="h-4 w-4 text-[#2456d6]" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.7 5.3a1 1 0 010 1.4l-8 8a1 1 0 01-1.4 0l-4-4a1 1 0 111.4-1.4L8 12.6l7.3-7.3a1 1 0 011.4 0z" clipRule="evenodd" />
                  </svg>
                  {t.fixedPriceNotice}
                </p>
                <p className="flex items-center gap-2">
                  <svg className="h-4 w-4 text-[#2456d6]" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.7 5.3a1 1 0 010 1.4l-8 8a1 1 0 01-1.4 0l-4-4a1 1 0 111.4-1.4L8 12.6l7.3-7.3a1 1 0 011.4 0z" clipRule="evenodd" />
                  </svg>
                  {t.fullOwnershipNotice}
                </p>
              </div>

              <div className="mt-6 text-center">
                <Link href={`/${locale}/kontaktai`} className="text-xs font-semibold text-[#2456d6] hover:underline">
                  {t.customNeedText}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer dict={dict} locale={locale} />
    </div>
  );
}
