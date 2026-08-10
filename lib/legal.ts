import type { Locale } from "@/lib/i18n";
import type { Metadata } from "next";

export const legalKeys = ["privacy", "cookies", "terms"] as const;
export type LegalKey = (typeof legalKeys)[number];

export type LegalSection = {
  heading: string;
  paragraphs?: string[];
  bullets?: string[];
  table?: {
    headers: [string, string, string];
    rows: [string, string, string][];
  };
};

export type LegalDocument = {
  title: string;
  description: string;
  back: string;
  updatedLabel: string;
  intro: string;
  sections: LegalSection[];
  sourcesLabel: string;
};

export const legalSlugs: Record<Locale, Record<LegalKey, string>> = {
  lt: {
    privacy: "privatumo-politika",
    cookies: "slapuku-politika",
    terms: "naudojimo-salygos",
  },
  en: {
    privacy: "privacy-policy",
    cookies: "cookie-policy",
    terms: "terms-of-service",
  },
  pl: {
    privacy: "polityka-prywatnosci",
    cookies: "polityka-plikow-cookie",
    terms: "regulamin-uslug",
  },
  lv: {
    privacy: "privatuma-politika",
    cookies: "sikdatnu-politika",
    terms: "pakalpojumu-noteikumi",
  },
  et: {
    privacy: "privaatsuspoliitika",
    cookies: "kupsiste-poliitika",
    terms: "teenusetingimused",
  },
  ru: {
    privacy: "politika-konfidencialnosti",
    cookies: "politika-cookie",
    terms: "usloviya-okazaniya-uslug",
  },
};

export function legalPath(locale: Locale, key: LegalKey): string {
  const slug = legalSlugs[locale][key];
  return locale === "lt" ? `/${slug}` : `/${locale}/${slug}`;
}

export function legalAlternates(key: LegalKey): Record<string, string> {
  return {
    lt: legalPath("lt", key),
    en: legalPath("en", key),
    pl: legalPath("pl", key),
    lv: legalPath("lv", key),
    et: legalPath("et", key),
    ru: legalPath("ru", key),
    "x-default": legalPath("lt", key),
  };
}

export function legalKeyFromSlug(locale: Locale, slug: string): LegalKey | null {
  return legalKeys.find((key) => legalSlugs[locale][key] === slug) ?? null;
}

const lt: Record<LegalKey, LegalDocument> = {
  privacy: {
    title: "Privatumo politika",
    description:
      "Kaip SiteStudio renka, naudoja, saugo ir perduoda asmens duomenis, įskaitant kontaktų formą, paskyras, Brevo, Telegram ir Google Analytics.",
    back: "Grįžti į pagrindinį",
    updatedLabel: "Atnaujinta: 2026 m. rugpjūčio 10 d.",
    intro:
      "Šioje politikoje paaiškiname, kokius asmens duomenis tvarko sitestudio.lt, kokiais tikslais ir kokias teises turite. Duomenų valdytojas yra SiteStudio; privatumo klausimais rašykite viktor@sitestudio.lt.",
    sections: [
      {
        heading: "1. Kokius duomenis renkame",
        bullets: [
          "Kontaktų forma: vardas, el. paštas, neprivalomas telefono numeris, žinutė, pateikimo laikas ir vienkryptė IP adreso maiša apsaugai nuo piktnaudžiavimo.",
          "Paskyra: vardas, el. paštas, saugi slaptažodžio maiša, patvirtinimo ir atkūrimo duomenys, sesijos bei saugumo audito įrašai.",
          "Techniniai duomenys: užklausos laikas, naršyklės ir įrenginio informacija, IP adresas tiek, kiek būtina ryšiui, serverio saugumui ir klaidų diagnostikai.",
          "Google Analytics 4, tik gavus sutikimą: puslapių peržiūros, sąveikos, sesijų statistika, apytikslė geografinė vieta, naršyklės, įrenginio ir nukreipiančio šaltinio informacija. Į kontaktų formas įvestų duomenų į Analytics nesiunčiame.",
        ],
      },
      {
        heading: "2. Tikslai ir teisiniai pagrindai",
        bullets: [
          "Atsakyti į užklausą, parengti pasiūlymą ir imtis veiksmų prieš sudarant sutartį — BDAR 6 straipsnio 1 dalies b punktas.",
          "Teikti paskyros, projekto ir priežiūros funkcijas bei vykdyti sutartį — BDAR 6 straipsnio 1 dalies b punktas.",
          "Apsaugoti svetainę, užkirsti kelią brukalui ir tirti klaidas — teisėtas interesas pagal BDAR 6 straipsnio 1 dalies f punktą.",
          "Matuoti lankomumą per Google Analytics — jūsų sutikimas pagal BDAR 6 straipsnio 1 dalies a punktą. Sutikimą galite bet kada atšaukti.",
          "Vykdyti apskaitos ir kitas teisines prievoles — BDAR 6 straipsnio 1 dalies c punktas.",
        ],
      },
      {
        heading: "3. Kam duomenys gali būti perduodami",
        paragraphs: [
          "Duomenis gauna tik tiekėjai, būtini svetainei ir ryšiui administruoti: serverio bei duomenų bazės infrastruktūra, Brevo (el. laiškų pristatymas), Telegram (kontaktų formos pranešimai) ir, tik sutikus, Google Analytics. Tiekėjai duomenis tvarko pagal savo sąlygas ir taikomas duomenų apsaugos sutartis.",
          "Kai tiekėjas ar jo subtvarkytojas veikia už Europos ekonominės erdvės ribų, perdavimas grindžiamas taikomu Europos Komisijos tinkamumo sprendimu, standartinėmis sutarčių sąlygomis ar kita teisėta apsaugos priemone. Duomenų neparduodame ir nenaudojame trečiųjų šalių tiesioginei rinkodarai.",
        ],
      },
      {
        heading: "4. Saugojimo terminai",
        bullets: [
          "Užklausos — iki 2 metų nuo paskutinio kontakto, o sudarius sutartį — tiek, kiek reikia sutarčiai ir teisės aktuose nustatytiems terminams.",
          "Paskyros duomenys — kol paskyra aktyvi, o ją uždarius reikalingi saugumo ir audito įrašai paprastai ne ilgiau kaip 2 metus.",
          "Serverio ir saugumo žurnalai — paprastai iki 12 mėnesių, nebent incidento tyrimui reikia ilgiau.",
          "Google Analytics naudotojo ir įvykio lygmens duomenys — pagal GA4 nustatytą laikotarpį, ne ilgiau kaip 14 mėnesių; agreguotos ataskaitos gali būti saugomos ilgiau.",
        ],
      },
      {
        heading: "5. Jūsų teisės",
        paragraphs: [
          "Galite prašyti susipažinti su savo duomenimis, juos ištaisyti, ištrinti, apriboti tvarkymą, nesutikti su teisėtu interesu grindžiamu tvarkymu ir, kai taikoma, gauti duomenis perkeliamu formatu. Sutikimą analitikai galite atšaukti slapukų nustatymuose; tai neturi įtakos ankstesnio tvarkymo teisėtumui.",
          "Prašymą siųskite viktor@sitestudio.lt. Atsakysime per BDAR nustatytą terminą. Taip pat galite pateikti skundą Valstybinei duomenų apsaugos inspekcijai (vdai.lrv.lt).",
        ],
      },
      {
        heading: "6. Saugumas ir politikos pakeitimai",
        paragraphs: [
          "Naudojame HTTPS, ribotą prieigą, slaptažodžių maišą, duomenų bazės prieigos kontrolę, atsargines kopijas ir technines apsaugos priemones. Vis dėlto nė vienas perdavimo ar saugojimo būdas nėra visiškai nerizikingas.",
          "Politiką atnaujiname pasikeitus svetainei, tiekėjams ar teisės reikalavimams. Naujausia versija ir jos data visada skelbiama šiame puslapyje.",
        ],
      },
    ],
    sourcesLabel: "Naudingos nuorodos",
  },
  cookies: {
    title: "Slapukų politika",
    description:
      "SiteStudio slapukų politika: būtinosios technologijos, Google Analytics 4 slapukai, jų paskirtis, galiojimas ir sutikimo valdymas.",
    back: "Grįžti į pagrindinį",
    updatedLabel: "Atnaujinta: 2026 m. rugpjūčio 10 d.",
    intro:
      "Slapukai ir panašios technologijos saugo informaciją naršyklėje. Būtinosios technologijos padeda svetainei veikti, o Google Analytics įjungiama tik tada, kai aiškiai sutinkate.",
    sections: [
      {
        heading: "1. Naudojamos technologijos",
        table: {
          headers: ["Pavadinimas", "Paskirtis", "Trukmė"],
          rows: [
            ["cookie-consent (localStorage)", "Išsaugo jūsų pasirinkimą dėl analitikos", "Iki pasirinkimo pakeitimo arba naršyklės duomenų išvalymo"],
            ["Prisijungimo / sesijos slapukai", "Paskyros autentifikavimas, saugumas ir sesijos palaikymas", "Sesijos metu arba iki techniniame slapuke nurodyto termino"],
            ["_ga", "Google Analytics atskiria statistinius lankytojus", "Iki 2 metų"],
            ["_ga_<ID>", "Google Analytics išsaugo sesijos būseną", "Iki 2 metų"],
          ],
        },
      },
      {
        heading: "2. Google Analytics",
        paragraphs: [
          "Naudojame Google Analytics 4 (matavimo ID G-5GZ1Y6V6XF), kad suprastume bendrą puslapių lankomumą ir naudojimą. Analitikos scenarijus neįkeliamas ir duomenys Google nesiunčiami, kol nepasirenkate „Sutinku“.",
          "Reklamos, remarketingo ir suasmenintos reklamos slapukų šioje svetainėje nekonfigūruojame. Kontaktų formų turinys į Google Analytics nesiunčiamas.",
        ],
      },
      {
        heading: "3. Kaip valdyti pasirinkimą",
        paragraphs: [
          "Sutikimą galite duoti, atmesti arba vėliau pakeisti paspaudę „Slapukų nustatymai“ puslapio apačioje. Atšaukus sutikimą pašaliname šiai svetainei prieinamus Google Analytics slapukus ir nebesiunčiame naujų analitikos duomenų.",
          "Slapukus taip pat galite ištrinti ar blokuoti naršyklės nustatymuose. Būtinųjų slapukų blokavimas gali sutrikdyti prisijungimo ar administravimo funkcijas, tačiau viešą turinį galėsite skaityti.",
        ],
      },
      {
        heading: "4. Daugiau informacijos",
        paragraphs: [
          "Apie su slapukais susijusį asmens duomenų tvarkymą, gavėjus, saugojimą ir jūsų teises skaitykite Privatumo politikoje. Klausimus siųskite viktor@sitestudio.lt.",
        ],
      },
    ],
    sourcesLabel: "Naudingos nuorodos",
  },
  terms: {
    title: "Paslaugų teikimo sąlygos",
    description:
      "SiteStudio paslaugų sąlygos: darbų apimtis, atsiskaitymas, kliento pareigos, intelektinė nuosavybė, talpinimas, portfolio ir atsakomybė.",
    back: "Grįžti į pagrindinį",
    updatedLabel: "Atnaujinta: 2026 m. rugpjūčio 10 d.",
    intro:
      "Šios bendrosios sąlygos taikomos SiteStudio svetainių, el. parduotuvių, interneto sistemų, automatizavimo, talpinimo ir priežiūros paslaugoms, jei raštu nesusitariame kitaip.",
    sections: [
      {
        heading: "1. Pasiūlymas ir darbų apimtis",
        paragraphs: [
          "Prieš darbus raštu suderiname rezultatą, apimtį, kainą, terminus ir priėmimo tvarką. Svetainėje nurodytos kainos yra orientacinės „nuo“ kainos be PVM. Papildomi darbai atliekami tik suderinus jų kainą ir poveikį terminui.",
        ],
      },
      {
        heading: "2. Kliento pareigos ir terminai",
        paragraphs: [
          "Klientas laiku pateikia turinį, prieigas, pastabas ir patvirtinimus bei užtikrina, kad perduodamą tekstą, ženklus, nuotraukas ir kitą medžiagą turi teisę naudoti. Klientui vėluojant pateikti informaciją, darbų terminas atitinkamai pasislenka.",
        ],
      },
      {
        heading: "3. Atsiskaitymas ir priėmimas",
        paragraphs: [
          "Jei pasiūlyme nenurodyta kitaip, prieš pradedant mokama sutarta avanso dalis, o likutis — patvirtinus darbą ir prieš viešą paleidimą ar galutinį perdavimą. Apie pastebėtus neatitikimus klientas praneša per suderintą peržiūros laiką; taisome tai, kas patenka į sutartą apimtį.",
        ],
      },
      {
        heading: "4. Intelektinė nuosavybė ir portfolio",
        paragraphs: [
          "Visiškai atsiskaičius, klientui perduodamos sutartyje nurodytos teisės į individualiai sukurtą dizainą, kodą ir turinį. Trečiųjų šalių, atvirojo kodo, šriftų, įskiepių ir platformų komponentams lieka galioti jų licencijos. Domenas registruojamas kliento vardu, jei nesusitariama kitaip.",
          "Jei raštu nesusitariame dėl konfidencialumo, viešai paleistą projektą galime faktiškai nurodyti SiteStudio portfolio, pateikti jo ekrano vaizdą, viešą nuorodą ir bendrą atliktų darbų aprašymą. Konfidencialios informacijos ir neviešų rezultatų neskelbiame.",
        ],
      },
      {
        heading: "5. Talpinimas, priežiūra ir trečiosios šalys",
        paragraphs: [
          "Talpinimas, atsarginės kopijos, atnaujinimai ir priežiūra teikiami tik jei įtraukti į pasiūlymą ar atskirą planą. Klientas gali perkelti svetainę kitur; gavus visus mokėjimus perduodame sutartus failus ir duomenis.",
          "Domenų registratoriai, mokėjimų sistemos, analitika, el. paštas, turinio valdymo sistemos ir kiti tiekėjai veikia pagal savo sąlygas. Negarantuojame jų nepertraukiamo veikimo, bet padedame valdyti integraciją ir spręsti sutrikimus pagal sutartą priežiūros apimtį.",
        ],
      },
      {
        heading: "6. Atsakomybė, nutraukimas ir ginčai",
        paragraphs: [
          "Atsakome už tiesioginius nuostolius tiek, kiek juos sukėlė mūsų esminis sutarties pažeidimas ir kiek leidžia taikoma teisė. Neatsakome už kliento pateiktą neteisėtą turinį, kliento ar trečiųjų šalių pakeitimus, prarastas prieigas, tiekėjų sutrikimus ar netiesioginius nuostolius, išskyrus atvejus, kai atsakomybės riboti negalima.",
          "Bet kuri šalis gali nutraukti tęstines paslaugas pagal pasiūlyme sutartą įspėjimo terminą. Iki nutraukimo atlikti darbai ir patirtos išlaidos apmokami. Ginčus pirmiausia sprendžiame derybomis, o nepavykus — pagal Lietuvos Respublikos teisę kompetentingame teisme.",
        ],
      },
      {
        heading: "7. Kontaktai ir pakeitimai",
        paragraphs: [
          "Klausimus siųskite viktor@sitestudio.lt. Atnaujintos sąlygos taikomos naujiems užsakymams nuo jų paskelbimo; jau sudarytoms sutartims taikoma raštu sutarta versija.",
        ],
      },
    ],
    sourcesLabel: "Susiję dokumentai",
  },
};

const en: Record<LegalKey, LegalDocument> = {
  privacy: {
    title: "Privacy Policy",
    description:
      "How SiteStudio collects, uses, retains and shares personal data through enquiries, accounts, Brevo, Telegram and Google Analytics.",
    back: "Back to home",
    updatedLabel: "Updated: 10 August 2026",
    intro:
      "This policy explains how sitestudio.lt processes personal data and what rights you have. The data controller is SiteStudio; contact viktor@sitestudio.lt with privacy questions.",
    sections: [
      { heading: "1. Data we collect", bullets: [
        "Enquiries: name, email address, optional phone number, message, submission time and a one-way IP-address hash used to prevent abuse.",
        "Accounts: name, email address, secure password hash, verification and recovery data, sessions and security audit records.",
        "Technical data: request time, browser and device information and an IP address where necessary for communication, server security and error diagnostics.",
        "Google Analytics 4, only after consent: page views, interactions, session statistics, approximate location, browser, device and referrer information. We do not send contact-form contents to Analytics.",
      ] },
      { heading: "2. Purposes and legal bases", bullets: [
        "To answer an enquiry, prepare a quotation and take pre-contractual steps — GDPR Article 6(1)(b).",
        "To provide account, project and maintenance functions and perform a contract — GDPR Article 6(1)(b).",
        "To secure the site, prevent spam and diagnose faults — legitimate interests under GDPR Article 6(1)(f).",
        "To measure usage with Google Analytics — your consent under GDPR Article 6(1)(a), which you may withdraw at any time.",
        "To meet accounting and other legal obligations — GDPR Article 6(1)(c).",
      ] },
      { heading: "3. Recipients and international transfers", paragraphs: [
        "Data is disclosed only to providers needed to operate the site and communications: hosting and database infrastructure, Brevo for email delivery, Telegram for contact-form notifications and, only with consent, Google Analytics.",
        "Where a provider or sub-processor operates outside the EEA, transfers rely on an applicable European Commission adequacy decision, Standard Contractual Clauses or another lawful safeguard. We do not sell personal data or provide it to third parties for their direct marketing.",
      ] },
      { heading: "4. Retention", bullets: [
        "Enquiries: up to 2 years after the last contact, or longer where a contract and legal retention duties apply.",
        "Account data: while the account is active; necessary security and audit records are normally retained for no more than 2 years after closure.",
        "Server and security logs: normally up to 12 months, unless an incident requires longer investigation.",
        "Google Analytics user- and event-level data: under the GA4 setting, no longer than 14 months; aggregated reports may remain longer.",
      ] },
      { heading: "5. Your rights", paragraphs: [
        "You may request access, correction, erasure, restriction, object to processing based on legitimate interests and, where applicable, data portability. You can withdraw analytics consent in Cookie settings without affecting earlier lawful processing.",
        "Email requests to viktor@sitestudio.lt. We respond within the period required by the GDPR. You may also complain to the Lithuanian State Data Protection Inspectorate (vdai.lrv.lt) or your local supervisory authority.",
      ] },
      { heading: "6. Security and changes", paragraphs: [
        "We use HTTPS, restricted access, password hashing, database access controls, backups and technical safeguards. No transmission or storage method is completely risk-free.",
        "We update this policy when the site, providers or legal requirements change. The current version and update date are always published here.",
      ] },
    ],
    sourcesLabel: "Useful links",
  },
  cookies: {
    title: "Cookie Policy",
    description:
      "SiteStudio cookie policy covering essential technology, Google Analytics 4 cookies, purposes, duration and consent controls.",
    back: "Back to home",
    updatedLabel: "Updated: 10 August 2026",
    intro:
      "Cookies and similar technologies store information in your browser. Essential technology operates the website; Google Analytics is enabled only after you clearly consent.",
    sections: [
      { heading: "1. Technologies we use", table: { headers: ["Name", "Purpose", "Duration"], rows: [
        ["cookie-consent (localStorage)", "Stores your analytics choice", "Until you change it or clear browser data"],
        ["Sign-in / session cookies", "Account authentication, security and session continuity", "For the session or the period stated in the technical cookie"],
        ["_ga", "Google Analytics distinguishes statistical visitors", "Up to 2 years"],
        ["_ga_<ID>", "Google Analytics preserves session state", "Up to 2 years"],
      ] } },
      { heading: "2. Google Analytics", paragraphs: [
        "We use Google Analytics 4 (measurement ID G-5GZ1Y6V6XF) to understand aggregate traffic and use. The analytics script is not loaded and data is not sent to Google until you select Accept.",
        "We do not configure advertising, remarketing or personalised-ad cookies on this site, and contact-form content is never sent to Google Analytics.",
      ] },
      { heading: "3. Managing your choice", paragraphs: [
        "You may accept, reject or later change your choice through Cookie settings at the bottom of the page. When consent is withdrawn, we remove Google Analytics cookies accessible to this site and stop new analytics collection.",
        "You can also delete or block cookies in your browser. Blocking essential cookies may affect sign-in or administration, but public content remains available.",
      ] },
      { heading: "4. More information", paragraphs: [
        "See the Privacy Policy for details about personal-data processing, recipients, retention and your rights. Contact viktor@sitestudio.lt with questions.",
      ] },
    ],
    sourcesLabel: "Useful links",
  },
  terms: {
    title: "Terms of Service",
    description:
      "SiteStudio terms covering scope, payment, client responsibilities, intellectual property, hosting, portfolio use and liability.",
    back: "Back to home",
    updatedLabel: "Updated: 10 August 2026",
    intro:
      "These general terms apply to SiteStudio websites, online shops, web systems, automation, hosting and maintenance unless we agree otherwise in writing.",
    sections: [
      { heading: "1. Proposal and scope", paragraphs: ["Before work begins, we agree in writing on deliverables, scope, price, timing and acceptance. Prices shown on the website are indicative ‘from’ prices excluding VAT. Additional work requires agreement on price and timing."] },
      { heading: "2. Client responsibilities and timing", paragraphs: ["The client supplies content, access, feedback and approvals on time and confirms the right to use all text, marks, images and other materials supplied. Delays in client input move the delivery schedule accordingly."] },
      { heading: "3. Payment and acceptance", paragraphs: ["Unless the proposal says otherwise, an agreed deposit is paid before work starts and the balance after approval but before public launch or final handover. The client reports discrepancies during the agreed review period; items within scope are corrected."] },
      { heading: "4. Intellectual property and portfolio", paragraphs: [
        "After full payment, the client receives the rights specified in the agreement to bespoke design, code and content. Third-party, open-source, font, plugin and platform components remain subject to their licences. Domains are registered to the client unless agreed otherwise.",
        "Unless confidentiality is agreed in writing, SiteStudio may factually reference a publicly launched project in its portfolio, show a screenshot, public link and general description of the work. We do not publish confidential information or non-public results.",
      ] },
      { heading: "5. Hosting, maintenance and third parties", paragraphs: [
        "Hosting, backups, updates and maintenance are included only when stated in a proposal or separate plan. The client may move the site elsewhere; once all invoices are paid, we provide the agreed files and data.",
        "Registrars, payment services, analytics, email, content-management systems and other providers operate under their own terms. We cannot guarantee uninterrupted third-party service, but support integration and incidents within the agreed maintenance scope.",
      ] },
      { heading: "6. Liability, termination and disputes", paragraphs: [
        "We are liable for direct loss caused by our material breach only to the extent permitted by law. We are not liable for unlawful client content, client or third-party changes, lost credentials, provider outages or indirect loss, except where liability cannot lawfully be limited.",
        "Either party may end ongoing services with the notice agreed in the proposal. Work completed and costs incurred remain payable. Disputes are first addressed by negotiation and, if unresolved, under Lithuanian law in the competent court.",
      ] },
      { heading: "7. Contact and changes", paragraphs: ["Questions: viktor@sitestudio.lt. Updated terms apply to new orders from publication; existing contracts follow the version agreed in writing."] },
    ],
    sourcesLabel: "Related documents",
  },
};

const pl: Record<LegalKey, LegalDocument> = {
  privacy: {
    title: "Polityka prywatności",
    description: "Jak SiteStudio gromadzi, wykorzystuje, przechowuje i udostępnia dane w formularzach, kontach, Brevo, Telegramie i Google Analytics.",
    back: "Wróć na stronę główną",
    updatedLabel: "Aktualizacja: 10 sierpnia 2026 r.",
    intro: "Niniejsza polityka wyjaśnia, jak sitestudio.lt przetwarza dane osobowe i jakie prawa przysługują użytkownikowi. Administratorem danych jest SiteStudio; pytania prosimy kierować na viktor@sitestudio.lt.",
    sections: [
      { heading: "1. Gromadzone dane", bullets: [
        "Formularz kontaktowy: imię, adres e-mail, opcjonalny numer telefonu, wiadomość, czas wysłania oraz jednokierunkowy skrót adresu IP używany do ochrony przed nadużyciami.",
        "Konto: imię, adres e-mail, bezpieczny skrót hasła, dane weryfikacji i odzyskiwania, sesje oraz rejestry audytu bezpieczeństwa.",
        "Dane techniczne: czas żądania, informacje o przeglądarce i urządzeniu oraz adres IP w zakresie niezbędnym do komunikacji, bezpieczeństwa serwera i diagnostyki.",
        "Google Analytics 4, wyłącznie po zgodzie: odsłony, interakcje, statystyki sesji, przybliżona lokalizacja, przeglądarka, urządzenie i źródło odesłania. Treści formularzy nie są wysyłane do Analytics.",
      ] },
      { heading: "2. Cele i podstawy prawne", bullets: [
        "Odpowiedź na zapytanie, przygotowanie oferty i działania przed zawarciem umowy — art. 6 ust. 1 lit. b RODO.",
        "Obsługa konta, projektu i utrzymania oraz wykonanie umowy — art. 6 ust. 1 lit. b RODO.",
        "Bezpieczeństwo witryny, zapobieganie spamowi i diagnostyka — prawnie uzasadniony interes, art. 6 ust. 1 lit. f RODO.",
        "Pomiar ruchu przez Google Analytics — zgoda, art. 6 ust. 1 lit. a RODO, którą można wycofać w każdej chwili.",
        "Obowiązki księgowe i prawne — art. 6 ust. 1 lit. c RODO.",
      ] },
      { heading: "3. Odbiorcy i transfery międzynarodowe", paragraphs: [
        "Dane otrzymują tylko dostawcy niezbędni do działania witryny: infrastruktura hostingu i bazy danych, Brevo do dostarczania e-maili, Telegram do powiadomień z formularza oraz — po zgodzie — Google Analytics.",
        "Transfer poza EOG opiera się na decyzji Komisji Europejskiej o adekwatności, standardowych klauzulach umownych lub innej zgodnej z prawem ochronie. Nie sprzedajemy danych ani nie przekazujemy ich na potrzeby marketingu bezpośredniego osób trzecich.",
      ] },
      { heading: "4. Okres przechowywania", bullets: [
        "Zapytania: do 2 lat od ostatniego kontaktu, a przy umowie — przez okres wymagany do jej realizacji i obowiązków prawnych.",
        "Dane konta: przez czas aktywności konta; niezbędne rejestry bezpieczeństwa zwykle nie dłużej niż 2 lata po zamknięciu.",
        "Logi serwera i bezpieczeństwa: zwykle do 12 miesięcy, chyba że incydent wymaga dłuższego badania.",
        "Dane Google Analytics na poziomie użytkownika i zdarzeń: zgodnie z ustawieniem GA4, maksymalnie 14 miesięcy; raporty zbiorcze mogą pozostać dłużej.",
      ] },
      { heading: "5. Prawa użytkownika", paragraphs: [
        "Można żądać dostępu, sprostowania, usunięcia, ograniczenia, sprzeciwić się przetwarzaniu opartemu na uzasadnionym interesie oraz — gdy ma zastosowanie — przeniesienia danych. Zgodę na analitykę można wycofać w Ustawieniach cookie.",
        "Wnioski: viktor@sitestudio.lt. Odpowiadamy w terminie wymaganym przez RODO. Skargę można złożyć do litewskiego organu VDAI (vdai.lrv.lt) lub właściwego lokalnego organu nadzorczego.",
      ] },
      { heading: "6. Bezpieczeństwo i zmiany", paragraphs: [
        "Stosujemy HTTPS, ograniczenia dostępu, haszowanie haseł, kontrolę bazy danych, kopie zapasowe i zabezpieczenia techniczne. Żadna metoda nie eliminuje całego ryzyka.",
        "Politykę aktualizujemy po zmianie witryny, dostawców lub prawa. Aktualna wersja i data są zawsze publikowane tutaj.",
      ] },
    ],
    sourcesLabel: "Przydatne linki",
  },
  cookies: {
    title: "Polityka plików cookie",
    description: "Pliki niezbędne i Google Analytics 4 w SiteStudio: cel, czas działania oraz zarządzanie zgodą.",
    back: "Wróć na stronę główną",
    updatedLabel: "Aktualizacja: 10 sierpnia 2026 r.",
    intro: "Pliki cookie i podobne technologie zapisują informacje w przeglądarce. Technologie niezbędne zapewniają działanie strony, a Google Analytics uruchamia się dopiero po wyraźnej zgodzie.",
    sections: [
      { heading: "1. Używane technologie", table: { headers: ["Nazwa", "Cel", "Czas"], rows: [
        ["cookie-consent (localStorage)", "Zapamiętuje wybór dotyczący analityki", "Do zmiany wyboru lub usunięcia danych przeglądarki"],
        ["Pliki logowania / sesji", "Uwierzytelnianie, bezpieczeństwo i utrzymanie sesji", "Przez sesję lub okres wskazany w pliku technicznym"],
        ["_ga", "Google Analytics rozróżnia statystycznych użytkowników", "Do 2 lat"],
        ["_ga_<ID>", "Google Analytics zachowuje stan sesji", "Do 2 lat"],
      ] } },
      { heading: "2. Google Analytics", paragraphs: [
        "Korzystamy z Google Analytics 4 (identyfikator G-5GZ1Y6V6XF) do analizy zbiorczego ruchu. Skrypt nie jest ładowany, a dane nie trafiają do Google przed wybraniem „Akceptuję”.",
        "Nie konfigurujemy reklam, remarketingu ani spersonalizowanych plików reklamowych. Treść formularzy nie trafia do Google Analytics.",
      ] },
      { heading: "3. Zarządzanie wyborem", paragraphs: [
        "Zgodę można zaakceptować, odrzucić lub później zmienić przez „Ustawienia cookie” na dole strony. Po wycofaniu usuwamy dostępne dla witryny pliki Google Analytics i wstrzymujemy nowy pomiar.",
        "Pliki można też usuwać i blokować w przeglądarce. Blokada plików niezbędnych może wpłynąć na logowanie lub administrację, ale treść publiczna pozostaje dostępna.",
      ] },
      { heading: "4. Więcej informacji", paragraphs: ["Szczegóły o przetwarzaniu danych, odbiorcach, okresach i prawach znajdują się w Polityce prywatności. Kontakt: viktor@sitestudio.lt."] },
    ],
    sourcesLabel: "Przydatne linki",
  },
  terms: {
    title: "Regulamin usług",
    description: "Warunki SiteStudio: zakres, płatności, obowiązki klienta, własność intelektualna, hosting, portfolio i odpowiedzialność.",
    back: "Wróć na stronę główną",
    updatedLabel: "Aktualizacja: 10 sierpnia 2026 r.",
    intro: "Niniejsze warunki dotyczą usług SiteStudio w zakresie stron, sklepów internetowych, systemów, automatyzacji, hostingu i utrzymania, chyba że pisemnie uzgodnimy inaczej.",
    sections: [
      { heading: "1. Oferta i zakres", paragraphs: ["Przed rozpoczęciem pisemnie uzgadniamy rezultat, zakres, cenę, terminy i odbiór. Ceny na stronie są orientacyjnymi cenami „od”, bez VAT. Dodatkowe prace wymagają uzgodnienia ceny i wpływu na termin."] },
      { heading: "2. Obowiązki klienta i terminy", paragraphs: ["Klient terminowo dostarcza treści, dostępy, uwagi i akceptacje oraz potwierdza prawo do korzystania z przekazanych materiałów. Opóźnienie po stronie klienta odpowiednio przesuwa harmonogram."] },
      { heading: "3. Płatność i odbiór", paragraphs: ["Jeśli oferta nie stanowi inaczej, uzgodniona zaliczka jest płatna przed rozpoczęciem, a saldo po akceptacji i przed publikacją lub przekazaniem. Niezgodności należy zgłosić w uzgodnionym czasie; poprawiamy elementy objęte zakresem."] },
      { heading: "4. Własność intelektualna i portfolio", paragraphs: [
        "Po pełnej płatności klient otrzymuje określone w umowie prawa do indywidualnego projektu, kodu i treści. Komponenty zewnętrzne, open source, fonty, wtyczki i platformy podlegają własnym licencjom. Domenę rejestruje się na klienta, o ile nie uzgodniono inaczej.",
        "Jeśli nie uzgodniono poufności, SiteStudio może rzeczowo przedstawić publicznie uruchomiony projekt w portfolio, wraz ze zrzutem ekranu, publicznym linkiem i ogólnym opisem. Nie publikujemy informacji poufnych ani wyników niepublicznych.",
      ] },
      { heading: "5. Hosting, utrzymanie i strony trzecie", paragraphs: [
        "Hosting, kopie, aktualizacje i utrzymanie są objęte usługą tylko wtedy, gdy wskazuje je oferta lub osobny plan. Po rozliczeniu klient może przenieść witrynę i otrzyma uzgodnione pliki oraz dane.",
        "Rejestratorzy, płatności, analityka, e-mail, CMS i inni dostawcy działają według własnych warunków. Nie gwarantujemy ich ciągłości, lecz wspieramy integrację i incydenty w uzgodnionym zakresie.",
      ] },
      { heading: "6. Odpowiedzialność, rozwiązanie i spory", paragraphs: [
        "Odpowiadamy za bezpośrednią szkodę wynikającą z istotnego naruszenia w zakresie dozwolonym prawem. Nie odpowiadamy za bezprawne treści klienta, zmiany osób trzecich, utracone dostępy, awarie dostawców ani szkody pośrednie, o ile prawa nie można ograniczyć.",
        "Usługi ciągłe można zakończyć z okresem wypowiedzenia z oferty. Wykonane prace i koszty pozostają płatne. Spory rozwiązujemy najpierw polubownie, a następnie według prawa litewskiego przed właściwym sądem.",
      ] },
      { heading: "7. Kontakt i zmiany", paragraphs: ["Kontakt: viktor@sitestudio.lt. Nowe warunki dotyczą nowych zamówień od publikacji; istniejące umowy zachowują pisemnie uzgodnioną wersję."] },
    ],
    sourcesLabel: "Powiązane dokumenty",
  },
};

const lv: Record<LegalKey, LegalDocument> = {
  privacy: {
    title: "Privātuma politika",
    description: "Kā SiteStudio vāc, izmanto, glabā un nodod datus saziņas formās, kontos, Brevo, Telegram un Google Analytics.",
    back: "Atgriezties sākumlapā",
    updatedLabel: "Atjaunināts: 2026. gada 10. augustā",
    intro: "Šī politika skaidro, kā sitestudio.lt apstrādā personas datus un kādas ir jūsu tiesības. Datu pārzinis ir SiteStudio; rakstiet uz viktor@sitestudio.lt.",
    sections: [
      { heading: "1. Mūsu vāktie dati", bullets: [
        "Saziņas forma: vārds, e-pasts, neobligāts tālrunis, ziņojums, iesniegšanas laiks un vienvirziena IP adreses jaucējvērtība aizsardzībai pret ļaunprātīgu izmantošanu.",
        "Konts: vārds, e-pasts, droša paroles jaucējvērtība, verifikācijas un atkopšanas dati, sesijas un drošības audita ieraksti.",
        "Tehniskie dati: pieprasījuma laiks, pārlūka un ierīces dati un IP adrese, ciktāl tas vajadzīgs savienojumam, drošībai un diagnostikai.",
        "Google Analytics 4 tikai pēc piekrišanas: lapu skatījumi, mijiedarbība, sesiju statistika, aptuvenā atrašanās vieta, pārlūks, ierīce un novirzītājs. Formu saturu Analytics nenododam.",
      ] },
      { heading: "2. Nolūki un tiesiskais pamats", bullets: [
        "Atbildēt uz pieprasījumu un sagatavot piedāvājumu — VDAR 6. panta 1. punkta b) apakšpunkts.",
        "Nodrošināt kontu, projektu un uzturēšanu, izpildīt līgumu — VDAR 6. panta 1. punkta b) apakšpunkts.",
        "Drošība, surogātpasta novēršana un diagnostika — leģitīmās intereses, VDAR 6. panta 1. punkta f) apakšpunkts.",
        "Apmeklējuma mērīšana ar Google Analytics — piekrišana, VDAR 6. panta 1. punkta a) apakšpunkts; to var atsaukt.",
        "Grāmatvedības un juridiskie pienākumi — VDAR 6. panta 1. punkta c) apakšpunkts.",
      ] },
      { heading: "3. Saņēmēji un starptautiska nodošana", paragraphs: [
        "Datus saņem tikai vietnes darbībai nepieciešamie pakalpojumu sniedzēji: hostings un datubāze, Brevo e-pastu piegādei, Telegram formas paziņojumiem un — pēc piekrišanas — Google Analytics.",
        "Nodošana ārpus EEZ balstās uz Eiropas Komisijas lēmumu par aizsardzības līmeņa pietiekamību, līguma standartklauzulām vai citu likumīgu garantiju. Datus nepārdodam un nenododam trešo pušu tiešajam mārketingam.",
      ] },
      { heading: "4. Glabāšanas termiņi", bullets: [
        "Pieprasījumi — līdz 2 gadiem pēc pēdējās saziņas vai ilgāk, ja pastāv līgums un juridiski pienākumi.",
        "Konta dati — kamēr konts ir aktīvs; nepieciešamie drošības ieraksti parasti ne ilgāk kā 2 gadus pēc slēgšanas.",
        "Servera un drošības žurnāli — parasti līdz 12 mēnešiem, ja vien incidents neprasa ilgāku izmeklēšanu.",
        "Google Analytics lietotāju un notikumu dati — atbilstoši GA4 iestatījumam, ne ilgāk kā 14 mēnešus; apkopoti pārskati var palikt ilgāk.",
      ] },
      { heading: "5. Jūsu tiesības", paragraphs: [
        "Jūs varat pieprasīt piekļuvi, labošanu, dzēšanu, ierobežošanu, iebilst pret leģitīmajās interesēs balstītu apstrādi un attiecīgā gadījumā saņemt pārnesamus datus. Piekrišanu analītikai var atsaukt Sīkdatņu iestatījumos.",
        "Rakstiet uz viktor@sitestudio.lt. Atbildēsim VDAR termiņā. Sūdzību var iesniegt Lietuvas VDAI (vdai.lrv.lt) vai savas valsts uzraudzības iestādei.",
      ] },
      { heading: "6. Drošība un izmaiņas", paragraphs: [
        "Izmantojam HTTPS, ierobežotu piekļuvi, paroļu jaukšanu, datubāzes kontroli, rezerves kopijas un tehniskus aizsardzības līdzekļus. Neviena metode nav pilnīgi bez riska.",
        "Politiku atjauninām, mainoties vietnei, piegādātājiem vai tiesību aktiem. Aktuālā versija un datums vienmēr ir publicēti šeit.",
      ] },
    ],
    sourcesLabel: "Noderīgas saites",
  },
  cookies: {
    title: "Sīkdatņu politika",
    description: "SiteStudio nepieciešamās tehnoloģijas un Google Analytics 4 sīkdatnes: nolūks, ilgums un piekrišanas kontrole.",
    back: "Atgriezties sākumlapā",
    updatedLabel: "Atjaunināts: 2026. gada 10. augustā",
    intro: "Sīkdatnes un līdzīgas tehnoloģijas glabā informāciju pārlūkā. Nepieciešamās tehnoloģijas nodrošina vietnes darbību; Google Analytics ieslēdzas tikai pēc skaidras piekrišanas.",
    sections: [
      { heading: "1. Izmantotās tehnoloģijas", table: { headers: ["Nosaukums", "Nolūks", "Ilgums"], rows: [
        ["cookie-consent (localStorage)", "Saglabā analītikas izvēli", "Līdz izvēles maiņai vai pārlūka datu dzēšanai"],
        ["Pieteikšanās / sesijas sīkdatnes", "Autentifikācija, drošība un sesija", "Sesijas laikā vai tehniskajā sīkdatnē noteikto laiku"],
        ["_ga", "Google Analytics nošķir statistiskos apmeklētājus", "Līdz 2 gadiem"],
        ["_ga_<ID>", "Google Analytics saglabā sesijas stāvokli", "Līdz 2 gadiem"],
      ] } },
      { heading: "2. Google Analytics", paragraphs: [
        "Izmantojam Google Analytics 4 (ID G-5GZ1Y6V6XF) kopējās apmeklētības izpratnei. Skripts netiek ielādēts un dati Google netiek sūtīti, pirms izvēlaties „Piekrītu”.",
        "Reklāmas, atkārtotā mārketinga un personalizētas reklāmas sīkdatnes nekonfigurējam. Formu saturs Analytics netiek nosūtīts.",
      ] },
      { heading: "3. Izvēles pārvaldība", paragraphs: [
        "Piekrišanu var dot, noraidīt vai vēlāk mainīt ar „Sīkdatņu iestatījumi” lapas apakšā. Atsaucot piekrišanu, dzēšam vietnei pieejamās Analytics sīkdatnes un pārtraucam jaunu datu vākšanu.",
        "Sīkdatnes var dzēst vai bloķēt arī pārlūkā. Nepieciešamo sīkdatņu bloķēšana var traucēt pieteikšanos vai administrēšanu, bet publiskais saturs paliks pieejams.",
      ] },
      { heading: "4. Papildu informācija", paragraphs: ["Par datu apstrādi, saņēmējiem, termiņiem un tiesībām lasiet Privātuma politikā. Kontakts: viktor@sitestudio.lt."] },
    ],
    sourcesLabel: "Noderīgas saites",
  },
  terms: {
    title: "Pakalpojumu sniegšanas noteikumi",
    description: "SiteStudio noteikumi par apjomu, samaksu, klienta pienākumiem, intelektuālo īpašumu, hostingu, portfolio un atbildību.",
    back: "Atgriezties sākumlapā",
    updatedLabel: "Atjaunināts: 2026. gada 10. augustā",
    intro: "Šie noteikumi attiecas uz SiteStudio vietņu, e-veikalu, tīmekļa sistēmu, automatizācijas, hostinga un uzturēšanas pakalpojumiem, ja rakstiski nevienojamies citādi.",
    sections: [
      { heading: "1. Piedāvājums un apjoms", paragraphs: ["Pirms darba rakstiski saskaņojam rezultātu, apjomu, cenu, termiņus un pieņemšanu. Vietnē norādītās cenas ir orientējošas „no” cenas bez PVN. Papildu darbiem jāsaskaņo cena un termiņš."] },
      { heading: "2. Klienta pienākumi un termiņi", paragraphs: ["Klients laikus nodrošina saturu, piekļuves, atsauksmes un apstiprinājumus un garantē tiesības izmantot nodotos materiālus. Klienta kavējumi attiecīgi pagarina grafiku."] },
      { heading: "3. Samaksa un pieņemšana", paragraphs: ["Ja piedāvājumā nav noteikts citādi, avansu maksā pirms darba, bet atlikumu — pēc apstiprināšanas un pirms publicēšanas vai nodošanas. Neatbilstības ziņo pārbaudes laikā; labojam saskaņotajā apjomā."] },
      { heading: "4. Intelektuālais īpašums un portfolio", paragraphs: [
        "Pēc pilnas samaksas klientam nododam līgumā noteiktās tiesības uz individuālo dizainu, kodu un saturu. Trešo pušu, atvērtā koda, fontu, spraudņu un platformu komponentiem paliek to licences. Domēns ir klienta vārdā, ja nav citas vienošanās.",
        "Ja nav rakstiskas konfidencialitātes vienošanās, SiteStudio drīkst faktiski norādīt publiski palaistu projektu portfolio, rādīt ekrānattēlu, publisko saiti un vispārīgu darba aprakstu. Konfidenciālu un nepublisku informāciju nepublicējam.",
      ] },
      { heading: "5. Hostings, uzturēšana un trešās puses", paragraphs: [
        "Hostings, rezerves kopijas, atjauninājumi un uzturēšana ietilpst tikai tad, ja tie norādīti piedāvājumā vai plānā. Pēc pilnas samaksas klients var pārvietot vietni un saņemt saskaņotos failus un datus.",
        "Reģistratori, maksājumi, analītika, e-pasts, CMS un citi piegādātāji darbojas pēc saviem noteikumiem. To nepārtrauktu darbību negarantējam, bet palīdzam saskaņotajā uzturēšanas apjomā.",
      ] },
      { heading: "6. Atbildība, izbeigšana un strīdi", paragraphs: [
        "Atbildam par tiešiem zaudējumiem būtiska pārkāpuma dēļ tikai likumā atļautajā apmērā. Neatbildam par nelikumīgu klienta saturu, trešo pušu izmaiņām, zaudētām piekļuvēm, piegādātāju kļūmēm vai netiešiem zaudējumiem, ja vien atbildību nevar ierobežot.",
        "Pastāvīgus pakalpojumus var izbeigt ar piedāvājumā noteikto brīdinājumu. Veiktais darbs un izmaksas ir apmaksājamas. Strīdus vispirms risinām sarunās, pēc tam saskaņā ar Lietuvas tiesībām kompetentajā tiesā.",
      ] },
      { heading: "7. Kontakti un izmaiņas", paragraphs: ["Jautājumi: viktor@sitestudio.lt. Atjauninājumi attiecas uz jauniem pasūtījumiem; esošajiem līgumiem — rakstiski saskaņotā versija."] },
    ],
    sourcesLabel: "Saistītie dokumenti",
  },
};

const et: Record<LegalKey, LegalDocument> = {
  privacy: {
    title: "Privaatsuspoliitika",
    description: "Kuidas SiteStudio kogub, kasutab, säilitab ja edastab andmeid kontaktivormis, kontodel, Brevos, Telegramis ja Google Analyticsis.",
    back: "Tagasi avalehele",
    updatedLabel: "Uuendatud: 10. augustil 2026",
    intro: "See poliitika selgitab, kuidas sitestudio.lt töötleb isikuandmeid ja millised on teie õigused. Vastutav töötleja on SiteStudio; kirjutage viktor@sitestudio.lt.",
    sections: [
      { heading: "1. Kogutavad andmed", bullets: [
        "Kontaktvorm: nimi, e-post, valikuline telefon, sõnum, saatmise aeg ja kuritarvituse vältimiseks ühesuunaline IP-aadressi räsi.",
        "Konto: nimi, e-post, turvaline parooliräsi, kinnitamise ja taastamise andmed, seansid ning turbeauditi kirjed.",
        "Tehnilised andmed: päringu aeg, brauseri ja seadme info ning IP-aadress ühenduse, serveriturbe ja diagnostika jaoks vajalikus ulatuses.",
        "Google Analytics 4 ainult nõusolekul: lehevaated, toimingud, seansistatistika, ligikaudne asukoht, brauser, seade ja suunaja. Vormi sisu Analyticsisse ei saadeta.",
      ] },
      { heading: "2. Eesmärgid ja õiguslik alus", bullets: [
        "Päringule vastamine, pakkumise ettevalmistamine ja lepingueelsed sammud — GDPR art 6(1)(b).",
        "Konto, projekti ja hoolduse pakkumine ning lepingu täitmine — GDPR art 6(1)(b).",
        "Turve, rämpsposti tõkestamine ja diagnostika — õigustatud huvi, GDPR art 6(1)(f).",
        "Google Analyticsiga kasutuse mõõtmine — nõusolek, GDPR art 6(1)(a), mille saab igal ajal tagasi võtta.",
        "Raamatupidamis- ja õiguslike kohustuste täitmine — GDPR art 6(1)(c).",
      ] },
      { heading: "3. Saajad ja rahvusvaheline edastamine", paragraphs: [
        "Andmeid saavad ainult saidi toimimiseks vajalikud teenusepakkujad: majutus ja andmebaas, Brevo e-kirjade jaoks, Telegram vormiteavitusteks ning nõusolekul Google Analytics.",
        "Edastamine väljapoole EMP-d tugineb Euroopa Komisjoni kaitse piisavuse otsusele, lepingu tüüptingimustele või muule seaduslikule tagatisele. Me ei müü andmeid ega anna neid kolmandate isikute otseturunduseks.",
      ] },
      { heading: "4. Säilitamine", bullets: [
        "Päringud: kuni 2 aastat viimasest kontaktist või kauem, kui leping ja seadus seda nõuavad.",
        "Kontoandmed: konto aktiivsuse ajal; vajalikud turbekirjed üldjuhul kuni 2 aastat pärast sulgemist.",
        "Serveri- ja turbelogid: üldjuhul kuni 12 kuud, kui intsident ei nõua pikemat uurimist.",
        "Google Analyticsi kasutaja- ja sündmuseandmed: GA4 seadistuse järgi kuni 14 kuud; koondaruanded võivad säilida kauem.",
      ] },
      { heading: "5. Teie õigused", paragraphs: [
        "Võite taotleda juurdepääsu, parandamist, kustutamist, piiramist, esitada vastuväite õigustatud huvil põhinevale töötlemisele ja vajaduse korral andmete ülekandmist. Analüütika nõusoleku saab küpsiste seadetes tagasi võtta.",
        "Saatke taotlus viktor@sitestudio.lt. Vastame GDPR-is nõutud ajal. Kaebuse võib esitada Leedu VDAI-le (vdai.lrv.lt) või kohalikule järelevalveasutusele.",
      ] },
      { heading: "6. Turvalisus ja muudatused", paragraphs: [
        "Kasutame HTTPS-i, piiratud ligipääsu, paroolide räsimist, andmebaasi kontrolli, varukoopiaid ja tehnilisi kaitsemeetmeid. Ükski meetod pole täiesti riskivaba.",
        "Uuendame poliitikat saidi, teenusepakkujate või õiguse muutumisel. Kehtiv versioon ja kuupäev avaldatakse siin.",
      ] },
    ],
    sourcesLabel: "Kasulikud lingid",
  },
  cookies: {
    title: "Küpsiste poliitika",
    description: "SiteStudio vajalikud tehnoloogiad ja Google Analytics 4 küpsised: eesmärk, kestus ja nõusoleku juhtimine.",
    back: "Tagasi avalehele",
    updatedLabel: "Uuendatud: 10. augustil 2026",
    intro: "Küpsised ja sarnased tehnoloogiad salvestavad brauseris teavet. Vajalikud tehnoloogiad hoiavad saidi töös; Google Analytics käivitub alles selge nõusoleku järel.",
    sections: [
      { heading: "1. Kasutatavad tehnoloogiad", table: { headers: ["Nimi", "Eesmärk", "Kestus"], rows: [
        ["cookie-consent (localStorage)", "Salvestab analüütika valiku", "Valiku muutmise või brauseriandmete kustutamiseni"],
        ["Sisselogimise / seansi küpsised", "Autentimine, turve ja seansi hoidmine", "Seansi ajal või tehnilises küpsises määratud aja"],
        ["_ga", "Google Analytics eristab statistilisi külastajaid", "Kuni 2 aastat"],
        ["_ga_<ID>", "Google Analytics säilitab seansi olekut", "Kuni 2 aastat"],
      ] } },
      { heading: "2. Google Analytics", paragraphs: [
        "Kasutame Google Analytics 4 (ID G-5GZ1Y6V6XF), et mõista koondkülastatavust. Skripti ei laadita ega andmeid Google'ile saadeta enne, kui valite „Nõustun“.",
        "Reklaami-, uuesti turundamise ega isikupärastatud reklaami küpsiseid me ei seadista. Vormi sisu Analyticsisse ei saadeta.",
      ] },
      { heading: "3. Valiku juhtimine", paragraphs: [
        "Nõusoleku saab anda, keelata või hiljem muuta lehe allosas oleva „Küpsiste seaded“ kaudu. Tagasivõtmisel kustutame saidile kättesaadavad Analyticsi küpsised ja lõpetame uue mõõtmise.",
        "Küpsiseid saab kustutada või blokeerida ka brauseris. Vajalikud küpsised võivad mõjutada sisselogimist või haldust, kuid avalik sisu jääb kättesaadavaks.",
      ] },
      { heading: "4. Lisateave", paragraphs: ["Andmetöötluse, saajate, säilitamise ja õiguste kohta lugege privaatsuspoliitikast. Kontakt: viktor@sitestudio.lt."] },
    ],
    sourcesLabel: "Kasulikud lingid",
  },
  terms: {
    title: "Teenusetingimused",
    description: "SiteStudio tingimused: töö ulatus, tasumine, kliendi kohustused, intellektuaalomand, majutus, portfolio ja vastutus.",
    back: "Tagasi avalehele",
    updatedLabel: "Uuendatud: 10. augustil 2026",
    intro: "Need tingimused kehtivad SiteStudio veebisaitide, e-poodide, süsteemide, automatiseerimise, majutuse ja hoolduse teenustele, kui kirjalikult ei lepita teisiti.",
    sections: [
      { heading: "1. Pakkumine ja ulatus", paragraphs: ["Enne töö algust lepime kirjalikult kokku tulemuse, ulatuse, hinna, ajakava ja vastuvõtu. Veebihinnad on soovituslikud „alates“ hinnad ilma käibemaksuta. Lisatöö hind ja tähtaeg lepitakse eraldi kokku."] },
      { heading: "2. Kliendi kohustused ja ajakava", paragraphs: ["Klient annab õigel ajal sisu, ligipääsud, tagasiside ja kinnitused ning tagab õiguse kasutada kõiki materjale. Kliendi viivitus nihutab ajakava vastavalt."] },
      { heading: "3. Maksmine ja vastuvõtt", paragraphs: ["Kui pakkumine ei ütle teisiti, tasutakse kokkulepitud ettemaks enne tööd ja jääk pärast heakskiitu, enne avaldamist või üleandmist. Puudustest teatatakse kokkulepitud ülevaatusajal; ulatusse kuuluvad osad parandame."] },
      { heading: "4. Intellektuaalomand ja portfolio", paragraphs: [
        "Pärast täielikku tasumist saab klient lepingus määratud õigused eritellimusel disainile, koodile ja sisule. Kolmandate osapoolte, avatud lähtekoodi, fontide, pistikprogrammide ja platvormide litsentsid jäävad kehtima. Domeen registreeritakse kliendile, kui pole teisiti kokku lepitud.",
        "Kui konfidentsiaalsust pole kirjalikult kokku lepitud, võib SiteStudio avalikult käivitatud projekti faktiliselt portfolios näidata koos ekraanipildi, avaliku lingi ja üldkirjeldusega. Konfidentsiaalset ega mitteavalikku infot ei avaldata.",
      ] },
      { heading: "5. Majutus, hooldus ja kolmandad osapooled", paragraphs: [
        "Majutus, varukoopiad, uuendused ja hooldus kuuluvad teenusesse ainult pakkumise või eraldi plaani alusel. Pärast täielikku tasumist võib klient saidi mujale viia ja saab kokkulepitud failid ning andmed.",
        "Registripidajad, maksed, analüütika, e-post, CMS ja muud pakkujad tegutsevad oma tingimustel. Me ei taga nende katkestusteta tööd, kuid aitame kokkulepitud hoolduse piires.",
      ] },
      { heading: "6. Vastutus, lõpetamine ja vaidlused", paragraphs: [
        "Vastutame olulise rikkumisega põhjustatud otsese kahju eest seadusega lubatud ulatuses. Me ei vastuta kliendi ebaseadusliku sisu, kolmandate isikute muudatuste, kadunud ligipääsude, pakkujate rikete või kaudse kahju eest, välja arvatud juhul, kui piirang pole lubatud.",
        "Püsiva teenuse võib lõpetada pakkumises määratud etteteatamisega. Tehtud töö ja kulud tuleb tasuda. Vaidlused lahendame esmalt läbirääkimistega, seejärel Leedu õiguse järgi pädevas kohtus.",
      ] },
      { heading: "7. Kontakt ja muudatused", paragraphs: ["Küsimused: viktor@sitestudio.lt. Uuendatud tingimused kehtivad uutele tellimustele; olemasolevatele lepingutele jääb kirjalikult kokku lepitud versioon."] },
    ],
    sourcesLabel: "Seotud dokumendid",
  },
};

const ru: Record<LegalKey, LegalDocument> = {
  privacy: {
    title: "Политика конфиденциальности",
    description: "Как SiteStudio собирает, использует, хранит и передаёт данные из форм, аккаунтов, Brevo, Telegram и Google Analytics.",
    back: "Вернуться на главную",
    updatedLabel: "Обновлено: 10 августа 2026 г.",
    intro: "Эта политика объясняет, как sitestudio.lt обрабатывает персональные данные и какими правами вы обладаете. Оператор данных — SiteStudio; вопросы направляйте на viktor@sitestudio.lt.",
    sections: [
      { heading: "1. Какие данные мы собираем", bullets: [
        "Форма связи: имя, e-mail, необязательный телефон, сообщение, время отправки и односторонний хеш IP-адреса для защиты от злоупотреблений.",
        "Аккаунт: имя, e-mail, защищённый хеш пароля, данные проверки и восстановления, сессии и записи аудита безопасности.",
        "Технические данные: время запроса, сведения о браузере и устройстве, IP-адрес в объёме, необходимом для связи, безопасности и диагностики.",
        "Google Analytics 4 только после согласия: просмотры, взаимодействия, статистика сессий, примерное местоположение, браузер, устройство и источник перехода. Содержимое форм в Analytics не отправляется.",
      ] },
      { heading: "2. Цели и правовые основания", bullets: [
        "Ответ на запрос, подготовка предложения и преддоговорные действия — ст. 6(1)(b) GDPR.",
        "Работа аккаунта, проекта и обслуживания, исполнение договора — ст. 6(1)(b) GDPR.",
        "Безопасность, предотвращение спама и диагностика — законный интерес, ст. 6(1)(f) GDPR.",
        "Измерение посещаемости Google Analytics — согласие, ст. 6(1)(a) GDPR, которое можно отозвать.",
        "Бухгалтерские и иные юридические обязанности — ст. 6(1)(c) GDPR.",
      ] },
      { heading: "3. Получатели и международная передача", paragraphs: [
        "Данные получают только необходимые поставщики: инфраструктура хостинга и базы данных, Brevo для e-mail, Telegram для уведомлений формы и, после согласия, Google Analytics.",
        "Передача за пределы ЕЭЗ основывается на решении Еврокомиссии об адекватности, стандартных договорных положениях или иной законной гарантии. Мы не продаём данные и не передаём их для прямого маркетинга третьих лиц.",
      ] },
      { heading: "4. Сроки хранения", bullets: [
        "Запросы: до 2 лет после последнего контакта либо дольше при наличии договора и юридических обязанностей.",
        "Данные аккаунта: пока аккаунт активен; необходимые записи безопасности обычно не более 2 лет после закрытия.",
        "Серверные журналы и журналы безопасности: обычно до 12 месяцев, если расследование инцидента не требует большего срока.",
        "Пользовательские данные и события Google Analytics: согласно настройке GA4, не более 14 месяцев; агрегированные отчёты могут храниться дольше.",
      ] },
      { heading: "5. Ваши права", paragraphs: [
        "Вы можете запросить доступ, исправление, удаление, ограничение, возразить против обработки на основе законного интереса и, когда применимо, получить переносимые данные. Согласие на аналитику отзывается в настройках cookie.",
        "Пишите на viktor@sitestudio.lt. Мы ответим в срок GDPR. Жалобу можно направить в литовскую VDAI (vdai.lrv.lt) либо в местный надзорный орган.",
      ] },
      { heading: "6. Безопасность и изменения", paragraphs: [
        "Мы используем HTTPS, ограничение доступа, хеширование паролей, контроль базы данных, резервные копии и технические меры. Ни один способ не устраняет риск полностью.",
        "Политика обновляется при изменении сайта, поставщиков или закона. Актуальная версия и дата всегда размещены здесь.",
      ] },
    ],
    sourcesLabel: "Полезные ссылки",
  },
  cookies: {
    title: "Политика cookie",
    description: "Необходимые технологии и cookie Google Analytics 4 на SiteStudio: назначение, срок и управление согласием.",
    back: "Вернуться на главную",
    updatedLabel: "Обновлено: 10 августа 2026 г.",
    intro: "Cookie и похожие технологии сохраняют сведения в браузере. Необходимые технологии обеспечивают работу сайта; Google Analytics включается только после явного согласия.",
    sections: [
      { heading: "1. Используемые технологии", table: { headers: ["Название", "Назначение", "Срок"], rows: [
        ["cookie-consent (localStorage)", "Сохраняет выбор по аналитике", "До изменения выбора или очистки данных браузера"],
        ["Cookie входа / сессии", "Аутентификация, безопасность и поддержание сессии", "На время сессии или срок, указанный техническим cookie"],
        ["_ga", "Google Analytics различает статистических посетителей", "До 2 лет"],
        ["_ga_<ID>", "Google Analytics сохраняет состояние сессии", "До 2 лет"],
      ] } },
      { heading: "2. Google Analytics", paragraphs: [
        "Мы используем Google Analytics 4 (ID G-5GZ1Y6V6XF), чтобы понимать совокупную посещаемость. Скрипт не загружается и данные не отправляются Google до выбора «Принять».",
        "Рекламные, ремаркетинговые и персонализированные рекламные cookie не настраиваются. Содержимое форм в Analytics не отправляется.",
      ] },
      { heading: "3. Управление выбором", paragraphs: [
        "Можно согласиться, отказаться или позже изменить выбор через «Настройки cookie» внизу страницы. При отзыве мы удаляем доступные сайту cookie Analytics и прекращаем новый сбор.",
        "Cookie также можно удалить или заблокировать в браузере. Блокировка необходимых cookie может повлиять на вход и администрирование, но публичный контент останется доступен.",
      ] },
      { heading: "4. Дополнительная информация", paragraphs: ["Подробнее об обработке, получателях, сроках и правах — в Политике конфиденциальности. Контакт: viktor@sitestudio.lt."] },
    ],
    sourcesLabel: "Полезные ссылки",
  },
  terms: {
    title: "Условия оказания услуг",
    description: "Условия SiteStudio: объём работ, оплата, обязанности клиента, интеллектуальная собственность, хостинг, портфолио и ответственность.",
    back: "Вернуться на главную",
    updatedLabel: "Обновлено: 10 августа 2026 г.",
    intro: "Эти условия применяются к сайтам, магазинам, веб-системам, автоматизации, хостингу и обслуживанию SiteStudio, если письменно не согласовано иное.",
    sections: [
      { heading: "1. Предложение и объём", paragraphs: ["До начала письменно согласуются результат, объём, цена, сроки и приёмка. Цены на сайте — ориентировочные «от», без НДС. Дополнительная работа требует согласования цены и срока."] },
      { heading: "2. Обязанности клиента и сроки", paragraphs: ["Клиент вовремя предоставляет контент, доступы, отзывы и подтверждения и гарантирует право использовать все материалы. Задержки клиента соответственно сдвигают график."] },
      { heading: "3. Оплата и приёмка", paragraphs: ["Если предложение не устанавливает иное, аванс оплачивается до начала, остаток — после одобрения и до публикации или передачи. Несоответствия сообщаются в согласованный период; элементы в рамках объёма исправляются."] },
      { heading: "4. Интеллектуальная собственность и портфолио", paragraphs: [
        "После полной оплаты клиент получает предусмотренные договором права на индивидуальный дизайн, код и контент. Сторонние, открытые, шрифтовые, плагинные и платформенные компоненты остаются под своими лицензиями. Домен регистрируется на клиента, если не согласовано иное.",
        "Если конфиденциальность письменно не согласована, SiteStudio может фактически показать публично запущенный проект в портфолио, включая скриншот, публичную ссылку и общее описание. Конфиденциальные и непубличные сведения не публикуются.",
      ] },
      { heading: "5. Хостинг, обслуживание и третьи лица", paragraphs: [
        "Хостинг, резервные копии, обновления и обслуживание входят только при указании в предложении или плане. После полной оплаты клиент может перенести сайт и получить согласованные файлы и данные.",
        "Регистраторы, платежи, аналитика, e-mail, CMS и другие поставщики работают по своим условиям. Мы не гарантируем их непрерывность, но помогаем в согласованном объёме обслуживания.",
      ] },
      { heading: "6. Ответственность, прекращение и споры", paragraphs: [
        "Мы отвечаем за прямой ущерб от существенного нарушения в допускаемом законом объёме. Мы не отвечаем за незаконный контент клиента, изменения третьих лиц, утраченные доступы, сбои поставщиков или косвенный ущерб, кроме случаев, когда ограничение недопустимо.",
        "Постоянные услуги прекращаются с уведомлением по предложению. Выполненная работа и расходы оплачиваются. Споры сначала решаются переговорами, затем по литовскому праву в компетентном суде.",
      ] },
      { heading: "7. Контакты и изменения", paragraphs: ["Вопросы: viktor@sitestudio.lt. Обновлённые условия применяются к новым заказам; для действующих договоров действует письменно согласованная версия."] },
    ],
    sourcesLabel: "Связанные документы",
  },
};

export const legalDocuments: Record<Locale, Record<LegalKey, LegalDocument>> = {
  lt,
  en,
  pl,
  lv,
  et,
  ru,
};

export function legalMetadata(locale: Locale, key: LegalKey): Metadata {
  const document = legalDocuments[locale][key];
  const path = legalPath(locale, key);
  const image = "https://sitestudio.lt/opengraph-image";
  return {
    title: document.title,
    description: document.description,
    alternates: { canonical: path, languages: legalAlternates(key) },
    openGraph: {
      type: "website",
      locale: locale === "lt" ? "lt_LT" : locale,
      url: `https://sitestudio.lt${path}`,
      siteName: "SiteStudio",
      title: document.title,
      description: document.description,
      images: [{ url: image, alt: document.title }],
    },
    twitter: {
      card: "summary_large_image",
      title: document.title,
      description: document.description,
      images: [image],
    },
  };
}
