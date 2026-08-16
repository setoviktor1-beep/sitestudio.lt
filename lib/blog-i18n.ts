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
    "en": {
      "title": "How much does it cost to build a website in 2026: a real pricing breakdown",
      "description": "A thorough overview of website pricing in Lithuania: from brochure sites to online stores. Find out what actually makes up the price.",
      "intro": "How much does it cost to build a website in Lithuania in 2026? This is probably the most common question asked by business owners, professionals, and company managers. Market prices span a very wide range — from €150 with a beginner freelancer to €10,000 or more at large digital agencies. In this in-depth guide we take an honest look at the real situation on the Lithuanian market, the price ranges for each category, and explain exactly what you're paying for and how to avoid overpaying.",
      "sections": [
        {
          "heading": "1. The main website categories and price ranges",
          "paragraphs": [
            "Starter / landing page website (from €200 to €500): This is a single-page solution designed to present one specific service, product, or a tradesperson's personal brand. The price includes a custom design, a mobile version, an inquiry form sent straight to email or Telegram, basic SEO, and a fast launch within 1–2 weeks.",
            "Business website with a content management system (from €500 to €1,500): A multi-page website (e.g. Home, About Us, Services, Portfolio, Pricing, Contact) with a convenient content management system (CMS). This option is ideal for small and medium businesses that want to update their portfolio photos, edit service descriptions, and publish news themselves.",
            "Online stores and custom systems (from €1,200 to €4,000+): A full-featured e-commerce or self-service system with a product catalog, shopping cart, automated payments (Stripe, Montonio, Paysera), parcel-locker label generation, and customer accounts."
          ]
        },
        {
          "heading": "2. What makes up the final website quote?",
          "paragraphs": [
            "Design and user experience (UI/UX): The cheapest route is a purchased ready-made template used by thousands of other websites. A structure designed individually around your business costs more, but pays off with a far higher conversion rate — visitors understand the offer and submit an inquiry.",
            "Technology foundation: Modern technologies such as Next.js and React deliver lightning-fast load times (as low as 50 ms) and top-tier security, unlike old WordPress setups weighed down by dozens of slow plugins.",
            "Technical SEO groundwork: This isn't just meta descriptions — it's Schema.org structured data, a correct H1–H3 heading hierarchy, canonical links, a sitemap.xml, and OpenGraph integration for social networks."
          ]
        },
        {
          "heading": "3. Hidden costs agencies often stay quiet about",
          "paragraphs": [
            "Maintenance and support fees: Some agencies require mandatory contracts of €50–200/month just to keep the site running. Under the SiteStudio model, maintenance costs as little as €8–10/month, or the site is handed over for the client to manage entirely on their own.",
            "Content-editing fees: If a website is built without a convenient CMS, a developer may charge €30–50 per hour for every photo or price change. With a modern CMS in place, you make all changes yourself in a matter of minutes.",
            "Domain and server ownership: Always insist that the .lt domain and hosting account are registered in your company's name, not the contractor agency's."
          ]
        },
        {
          "heading": "4. How to save money wisely when building a website",
          "paragraphs": [
            "Before contacting a developer, write down a clear list of your services, rough pricing, and prepare genuine photos of completed work. The fewer unknowns at the start, the more accurate and lower the final quote will be.",
            "Choose direct contact with the person doing the work: when working with an independent specialized studio, you communicate directly with the developer, so you're not paying for a chain of agency account managers, fancy offices, and administrative markups.",
            "Don't rush to pick the cheapest offer purely based on the number. Ask the developer to show at least 2–3 real, live projects they built themselves (not mockups) — check their speed with Google PageSpeed Insights and read whether the text on the site sounds professional."
          ]
        },
        {
          "heading": "5. Real-world pricing examples from practice",
          "paragraphs": [
            "To keep prices from feeling abstract, let's look at real project types. A single tradesperson's services website with a portfolio gallery and an inquiry form, optimized for local Google search (similar to leonamai.lt for a bathroom renovation specialist) — this is a typical 'Starter' category project, falling into the €200–500 range.",
            "A business website with a content management system, where the client updates their portfolio photos themselves without a developer's help (similar to situacija.eu for a tiling specialist) — this falls into the 'Business' category, costing from €500 to €1,500 depending on the number of pages and integrations.",
            "A custom web system or web application with accounts, real-time features, and payments (similar to a social-network-type app) goes beyond the scope of a standard website and is treated as a separate software project — usually starting from €1,800 and up, depending on the amount of functionality."
          ]
        },
        {
          "heading": "6. Frequently asked questions about pricing",
          "paragraphs": [
            "Can the price change during the project? If the scope was agreed in writing before work began, the price does not change. It can only increase if you yourself request additional features that weren't in the original proposal — and this is always agreed in advance.",
            "Do I need to pay a deposit? Usually yes — part of the sum is paid before work begins, with the remainder due once the result is accepted. This protects both sides: the developer gets assurance the project is serious, and the client isn't paying for work that hasn't started yet.",
            "Why is the price shown as 'from'? The exact amount is influenced by the number of pages, the volume of content, the integrations required, and the complexity of the design. That's why a specific figure is always given in a written proposal after a short conversation about your needs, rather than guessed in advance."
          ]
        }
      ],
      "takeaways": [
        "A serious brochure website starts from €200–500, and from €500 with content management included.",
        "Insist on a fixed price and a written deadline agreement before work begins.",
        "Never buy a website without a guarantee that the code and domain will be 100% your own property.",
        "Before signing a contract, ask to see at least a few real, live projects by the developer."
      ]
    },
    "pl": {
      "title": "Ile kosztuje stworzenie strony internetowej w 2026 roku: rzetelna analiza cen",
      "description": "Szczegółowy przegląd cen stron internetowych na Litwie: od stron wizytówek po sklepy internetowe. Dowiedz się, z czego składa się cena.",
      "intro": "Ile kosztuje stworzenie strony internetowej na Litwie w 2026 roku? To chyba najczęściej zadawane pytanie przedsiębiorców, specjalistów i menedżerów firm. Widełki cenowe na rynku są bardzo szerokie — od 150 € u początkującego freelancera do 10 000 € lub więcej w dużych agencjach cyfrowych. W tym obszernym przewodniku szczerze przeanalizujemy realną sytuację na litewskim rynku, przedstawimy widełki cenowe dla poszczególnych kategorii oraz wyjaśnimy, za co tak naprawdę płacisz i jak nie przepłacić.",
      "sections": [
        {
          "heading": "1. Podstawowe kategorie stron i widełki cenowe",
          "paragraphs": [
            "Strona startowa / Landing page (od 200 € do 500 €): To jednostronicowe rozwiązanie wizytówkowe, przeznaczone do prezentacji jednej konkretnej usługi, produktu lub wizerunku fachowca. W tej cenie mieści się unikalny design, wersja mobilna, formularz kontaktowy wysyłający zapytania bezpośrednio na e-mail lub Telegram, podstawowe SEO oraz szybkie uruchomienie w ciągu 1–2 tygodni.",
            "Strona firmowa z systemem zarządzania treścią (od 500 € do 1 500 €): Wielostronicowa witryna (np. Start, O nas, Usługi, Galeria realizacji, Cennik, Kontakt) z wygodnym systemem administracyjnym (CMS). Ten wariant idealnie sprawdza się w małych i średnich firmach, które chcą samodzielnie aktualizować zdjęcia realizacji, uzupełniać opisy usług i publikować aktualności.",
            "Sklepy internetowe i systemy indywidualne (od 1 200 € do 4 000+ €): Pełnoprawny system sprzedażowy lub samoobsługowy z katalogiem produktów, koszykiem, zautomatyzowanymi płatnościami (Stripe, Montonio, Paysera), generowaniem etykiet do paczkomatów oraz kontami klientów."
          ]
        },
        {
          "heading": "2. Co składa się na ostateczną wycenę strony?",
          "paragraphs": [
            "Design i doświadczenie użytkownika (UI/UX): Najtańsza droga to zakupiony gotowy szablon, wykorzystywany przez tysiące innych stron. Struktura zaprojektowana indywidualnie pod Twoją działalność kosztuje więcej, ale zwraca się poprzez znacznie wyższy współczynnik konwersji — odwiedzający rozumieją ofertę i zostawiają zapytanie.",
            "Podstawa technologiczna: Nowoczesne technologie, takie jak Next.js i React, zapewniają błyskawiczną szybkość ładowania (do 50 ms) oraz najwyższy poziom bezpieczeństwa, w przeciwieństwie do starych rozwiązań opartych na WordPressie, przeciążonych dziesiątkami spowalniających wtyczek.",
            "Techniczne przygotowanie SEO: To nie tylko meta opisy, ale też dane strukturalne Schema.org, poprawna hierarchia nagłówków H1–H3, linki kanoniczne, mapa strony Sitemap.xml oraz integracja z OpenGraph dla mediów społecznościowych."
          ]
        },
        {
          "heading": "3. Ukryte koszty, o których agencje często milczą",
          "paragraphs": [
            "Opłaty za utrzymanie i wsparcie: Niektóre agencje wymagają obowiązkowych umów w wysokości 50–200 €/mies. tylko za to, żeby strona działała. W modelu SiteStudio utrzymanie kosztuje zaledwie 8–10 €/mies. albo strona jest w pełni przekazywana klientowi do samodzielnego zarządzania.",
            "Opłaty za edycję treści: Jeśli strona została zbudowana bez wygodnego CMS, za każdą zmianę zdjęcia czy ceny programista może pobierać stawkę godzinową w wysokości 30–50 €. Po wdrożeniu nowoczesnego CMS wszystkie zmiany wprowadzasz sam w ciągu minuty.",
            "Własność domeny i serwera: Zawsze wymagaj, aby domena .lt oraz konto hostingowe były zarejestrowane na nazwę Twojej firmy, a nie agencji wykonawczej."
          ]
        },
        {
          "heading": "4. Jak sensownie zaoszczędzić przy tworzeniu strony?",
          "paragraphs": [
            "Zanim skontaktujesz się z wykonawcą, spisz jasną listę swoich usług, orientacyjne ceny i przygotuj prawdziwe zdjęcia zrealizowanych prac. Im mniej niewiadomych na starcie — tym dokładniejsza i niższa jest ostateczna wycena.",
            "Wybieraj bezpośredni kontakt z wykonawcą: współpracując z niezależnym, wyspecjalizowanym studiem, rozmawiasz bezpośrednio z programistą, więc nie płacisz za łańcuch menedżerów agencji, drogie biura i marże administracyjne.",
            "Nie spiesz się z wyborem najtańszej oferty tylko dlatego, że to najniższa liczba. Poproś twórcę o pokazanie przynajmniej 2–3 realnie działających, samodzielnie stworzonych projektów (nie makiet) — sprawdź ich szybkość w Google PageSpeed Insights i przeczytaj, czy teksty na stronie brzmią profesjonalnie."
          ]
        },
        {
          "heading": "5. Realne przykłady cenowe z praktyki",
          "paragraphs": [
            "Aby ceny nie były abstrakcyjne, spójrzmy na realne typy projektów. Strona usług jednego fachowca z galerią realizacji i formularzem zapytań, dostosowana do lokalnego wyszukiwania w Google (podobnie jak leonamai.lt dla fachowca od remontów łazienek) — to typowy projekt z kategorii „Start”, mieszczący się w widełkach 200–500 €.",
            "Strona firmowa z systemem zarządzania treścią, gdzie klient sam aktualizuje zdjęcia realizacji bez pomocy programisty (podobnie jak situacija.eu dla fachowca od układania płytek) — to już kategoria „Biznes”, kosztująca od 500 € do 1500 €, w zależności od liczby podstron i integracji.",
            "Indywidualny system internetowy lub aplikacja webowa z kontami użytkowników, funkcjami czasu rzeczywistego i płatnościami (podobnie jak aplikacja typu sieć społecznościowa) wykracza już poza ramy standardowej strony i jest traktowana jako osobny projekt programistyczny — zazwyczaj od 1800 € wzwyż, w zależności od zakresu funkcji."
          ]
        },
        {
          "heading": "6. Najczęściej zadawane pytania dotyczące ceny",
          "paragraphs": [
            "Czy cena może się zmienić w trakcie realizacji? Jeśli zakres jest uzgodniony pisemnie przed rozpoczęciem prac, cena się nie zmienia. Może wzrosnąć tylko wtedy, gdy sam poprosisz o dodatkowe funkcje, których nie było w pierwotnej ofercie — a to zawsze jest wcześniej uzgadniane.",
            "Czy trzeba wpłacić zaliczkę? Najczęściej tak, część kwoty płaci się przed rozpoczęciem prac, a resztę — po odebraniu efektu. To chroni obie strony: wykonawca ma gwarancję, że projekt jest poważny, a klient — że nie płaci za pracę, która jeszcze się nie rozpoczęła.",
            "Dlaczego cena podawana jest jako „od”? Dokładną kwotę kształtuje liczba podstron, ilość treści, wymagane integracje i złożoność designu. Dlatego konkretna kwota zawsze podawana jest w pisemnej ofercie po krótkiej rozmowie o Twoich potrzebach, a nie zgadywana z góry."
          ]
        }
      ],
      "takeaways": [
        "Start poważnej strony wizytówkowej zaczyna się od 200–500 €, z systemem zarządzania treścią — od 500 €.",
        "Wymagaj pisemnej umowy z ustaloną ceną i terminem przed rozpoczęciem prac.",
        "Nigdy nie kupuj strony bez gwarancji, że kod i domena będą w 100% Twoją własnością.",
        "Przed podpisaniem umowy poproś o pokazanie kilku realnych, działających projektów twórcy."
      ]
    },
    "lv": {
      "title": "Cik maksā mājaslapas izstrāde 2026. gadā: reāla cenu analīze",
      "description": "Izvērsts interneta vietņu cenu pārskats Lietuvā: no reprezentatīvām mājaslapām līdz e-veikaliem. Uzziniet, no kā veidojas cena.",
      "intro": "Cik maksā izveidot interneta mājaslapu Lietuvā 2026. gadā? Tas ir droši vien biežāk uzdotais jautājums, ko uzdod uzņēmēji, speciālisti un uzņēmumu vadītāji. Cenu diapazoni tirgū ir ļoti plaši — no 150 € pie iesācēja pašnodarbinātā speciālista līdz 10 000 € vai vairāk lielās digitālajās aģentūrās. Šajā izvērstajā ceļvedī atklāti izanalizēsim reālo Lietuvas tirgus situāciju, dažādu kategoriju cenu diapazonus un paskaidrosim, par ko jūs patiesībā maksājat un kā nepārmaksāt.",
      "sections": [
        {
          "heading": "1. Galvenās mājaslapu kategorijas un cenu diapazoni",
          "paragraphs": [
            "Sākuma / Landing page mājaslapa (no 200 € līdz 500 €): Tas ir vienas lapas reprezentatīvs risinājums, kas paredzēts vienas konkrētas pakalpojuma, produkta vai amatnieka personīgā tēla prezentēšanai. Šajā cenā ietilpst unikāls dizains, mobilā versija, pieprasījuma forma tieši uz e-pastu vai Telegram, bāzes SEO un ātra palaišana 1–2 nedēļu laikā.",
            "Biznesa mājaslapa ar satura vadības sistēmu (no 500 € līdz 1500 €): Vairāku lapu (piem., Sākums, Par mums, Pakalpojumi, Darbu galerija, Cenas, Kontakti) mājaslapa ar ērtu administrēšanas sistēmu (CMS). Šis variants lieliski piemērots maziem un vidējiem uzņēmumiem, kuri paši vēlas atjaunināt paveikto darbu fotogrāfijas, papildināt pakalpojumu aprakstus un publicēt jaunumus.",
            "E-veikali un individuālas sistēmas (no 1200 € līdz 4000+ €): Pilnvērtīga tirdzniecības vai pašapkalpošanās sistēma ar preču katalogu, iepirkumu grozu, automatizētiem maksājumiem (Stripe, Montonio, Paysera), pakomātu uzlīmju ģenerēšanu un klientu kontiem."
          ]
        },
        {
          "heading": "2. No kā veidojas galīgā mājaslapas tāme?",
          "paragraphs": [
            "Dizains un lietotāja pieredze (UI/UX): Lētākais ceļš — nopirkta gatava veidne, ko izmanto tūkstošiem citu mājaslapu. Individuāli jūsu darbībai izstrādāta struktūra maksā vairāk, taču atmaksājas ar krietni augstāku konversijas rādītāju — apmeklētāji saprot piedāvājumu un atstāj pieprasījumu.",
            "Tehnoloģiskais pamats: Mūsdienīgas tehnoloģijas, piemēram, Next.js un React, nodrošina zibens ātru ielādes ātrumu (līdz 50 ms) un augstāko drošības līmeni, atšķirībā no vecajiem WordPress risinājumiem, kas pārslogoti ar desmitiem palēninošu spraudņu.",
            "Tehniskā SEO sagatavošana: Tas ir ne tikai meta apraksti, bet arī Schema.org strukturētie dati, pareiza H1–H3 virsrakstu hierarhija, kanoniskās saites, Sitemap.xml un OpenGraph integrācija sociālajiem tīkliem."
          ]
        },
        {
          "heading": "3. Slēptās izmaksas, par kurām aģentūras bieži klusē",
          "paragraphs": [
            "Uzturēšanas un atbalsta maksas: Dažas aģentūras pieprasa obligātus 50–200 €/mēn. līgumus vienkārši par to, lai mājaslapa turpinātu darboties. SiteStudio modelī uzturēšana maksā tikai 8–10 €/mēn., vai arī mājaslapa tiek pilnībā nodota klienta pārvaldībā.",
            "Maksa par satura rediģēšanu: Ja mājaslapa izveidota bez ērtas CMS, par katru foto vai cenas maiņu izstrādātājs var pieprasīt 30–50 € stundas likmi. Ieviešot mūsdienīgu CMS, visas izmaiņas veicat paši minūtes laikā.",
            "Domēna un servera īpašumtiesības: Vienmēr pieprasiet, lai .lt domēns un hostinga konts būtu reģistrēti jūsu uzņēmuma, nevis izpildītāja aģentūras vārdā."
          ]
        },
        {
          "heading": "4. Kā prātīgi ietaupīt, izstrādājot mājaslapu?",
          "paragraphs": [
            "Pirms vēršaties pie izstrādātāja, skaidri sarakstiet savu pakalpojumu sarakstu, orientējošās cenas un sagatavojiet reālas paveikto darbu fotogrāfijas. Jo mazāk nezināmo starta brīdī — jo precīzāka un mazāka būs gala tāme.",
            "Izvēlieties tiešu saziņu ar izpildītāju: strādājot ar neatkarīgu specializētu studiju, jūs sazināties tieši ar izstrādātāju, tāpēc nemaksājat par aģentūras vadītāju ķēdi, greznus birojus un administrēšanas uzcenojumus.",
            "Nesteidzieties izvēlēties lētāko piedāvājumu vienkārši tāpēc, ka tas ir lētākais. Palūdziet izstrādātājam parādīt vismaz 2–3 reāli funkcionējošus, viņa paša izstrādātus projektus (nevis maketus) — pārbaudiet to ātrumu ar Google PageSpeed Insights un izlasiet, vai teksts mājaslapā skan profesionāli."
          ]
        },
        {
          "heading": "5. Reāli cenu piemēri no prakses",
          "paragraphs": [
            "Lai cenas nebūtu abstraktas, apskatīsim reālus projektu tipus. Viena meistara pakalpojumu mājaslapa ar darbu galeriju un pieprasījuma formu, pielāgota vietējai Google meklēšanai (līdzīgi kā leonamai.lt vannas istabu remonta meistaram) — tas ir tipisks 'Sākuma' kategorijas projekts, kas iekļaujas 200–500 € diapazonā.",
            "Biznesa mājaslapa ar satura vadības sistēmu, kur klients pats atjaunina darbu fotogrāfijas bez izstrādātāja palīdzības (līdzīgi kā situacija.eu flīzēšanas meistaram) — tā jau ir 'Biznesa' kategorija, kas maksā no 500 € līdz 1500 €, atkarībā no lapu skaita un integrācijām.",
            "Individuāla interneta sistēma vai tiešsaistes lietotne ar kontiem, reāllaika funkcijām un maksājumiem (līdzīgi kā sociālā tīkla tipa lietotne) jau pārsniedz standarta mājaslapas robežas un tiek vērtēta kā atsevišķs programmatūras projekts — parasti no 1800 € un vairāk, atkarībā no funkciju apjoma."
          ]
        },
        {
          "heading": "6. Biežāk uzdotie jautājumi par cenu",
          "paragraphs": [
            "Vai cena var mainīties darba gaitā? Ja apjoms saskaņots rakstiski pirms darba sākuma, cena nemainās. Tā var pieaugt tikai tad, ja jūs paši pieprasāt papildu funkcijas, kuru nebija sākotnējā piedāvājumā — un tas vienmēr tiek saskaņots iepriekš.",
            "Vai jāmaksā avanss? Parasti jā — daļa summas tiek samaksāta pirms darba sākuma, bet atlikums — pēc rezultāta pieņemšanas. Tas aizsargā abas puses: izstrādātājs saņem garantiju, ka projekts ir nopietns, bet klients — ka nemaksā par vēl nesākto darbu.",
            "Kāpēc cena norādīta ar 'no'? Precīzu summu ietekmē lapu skaits, satura apjoms, nepieciešamās integrācijas un dizaina sarežģītība. Tāpēc konkrēta summa vienmēr tiek sniegta rakstiskā piedāvājumā pēc īsas sarunas par jūsu vajadzībām, nevis uzminēta iepriekš."
          ]
        }
      ],
      "takeaways": [
        "Nopietnas reprezentatīvas mājaslapas starts sākas no 200–500 €, ar satura vadību — no 500 €.",
        "Pieprasiet fiksētas cenas un termiņa līgumu rakstiski pirms darba sākuma.",
        "Nekad nepērciet mājaslapu bez garantijas, ka kods un domēns būs 100% jūsu īpašums.",
        "Pirms līguma parakstīšanas palūdziet redzēt vismaz dažus reālus, funkcionējošus izstrādātāja projektus."
      ]
    },
    "et": {
      "title": "Kui palju maksab veebilehe loomine 2026. aastal: tegelik hinnaanalüüs",
      "description": "Põhjalik ülevaade veebilehtede hindadest: esindusveebilehtedest kuni e-poodideni. Teada saad, millest hind koosneb.",
      "intro": "Kui palju maksab veebilehe loomine 2026. aastal? See on ilmselt kõige sagedamini küsitav küsimus, mida esitavad ettevõtjad, spetsialistid ja ettevõtete juhid. Turul on hinnavahemikud äärmiselt laiad — alustava vabakutselise 150 eurost kuni 10 000 euroni või rohkemgi suurtes digiagentuurides. Selles põhjalikus juhendis analüüsime avameelselt reaalset turuolukorda, erinevate kategooriate hinnavahemikke ning selgitame, mille eest sa tegelikult maksad ja kuidas mitte üle maksta.",
      "sections": [
        {
          "heading": "1. Peamised veebilehe kategooriad ja hinnavahemikud",
          "paragraphs": [
            "Start / Landing page (200–500 €): Ühe lehega esinduslahendus, mis on mõeldud ühe konkreetse teenuse, toote või meistri isikliku maine tutvustamiseks. Hinna sisse kuuluvad unikaalne disain, mobiiliversioon, päringuvorm otse e-postile või Telegrami, baas-SEO ja kiire käivitus 1–2 nädalaga.",
            "Ettevõtte veebileht sisuhaldussüsteemiga (500–1500 €): Mitme lehega (nt Avaleht, Meist, Teenused, Tööde galerii, Hinnad, Kontaktid) veebileht koos mugava haldussüsteemiga (CMS). See variant sobib ideaalselt väikestele ja keskmise suurusega ettevõtetele, kes soovivad ise uuendada tehtud tööde fotosid, täiendada teenuste kirjeldusi ja avaldada uudiseid.",
            "E-poed ja kohandatud süsteemid (1200–4000+ €): Täisväärtuslik kauplemis- või iseteenindussüsteem koos tootekataloogiga, ostukorviga, automatiseeritud maksetega (Stripe, Montonio, Paysera), pakiautomaadi kleebiste genereerimisega ja klientide kontodega."
          ]
        },
        {
          "heading": "2. Millest koosneb lõplik veebilehe eelarve?",
          "paragraphs": [
            "Disain ja kasutajakogemus (UI/UX): Odavaim tee — ostetud valmismall, mida kasutavad tuhanded teised veebilehed. Sinu tegevusalale individuaalselt kavandatud struktuur maksab rohkem, kuid tasub end ära oluliselt kõrgema konversioonimääraga — külastajad mõistavad pakkumist ja saadavad päringu.",
            "Tehnoloogiline alus: Kaasaegsed tehnoloogiad nagu Next.js ja React tagavad välkkiire laadimiskiiruse (kuni 50 ms) ja kõrgeima turvalisuse, erinevalt vanadest WordPress-lahendustest, mis on ülekoormatud kümnete aeglustavate pluginatega.",
            "Tehniline SEO ettevalmistus: See pole ainult meta-kirjeldused, vaid ka Schema.org struktureeritud andmed, õige H1–H3 pealkirjade hierarhia, canonical-lingid, Sitemap.xml ja OpenGraph integratsioon sotsiaalmeediaga."
          ]
        },
        {
          "heading": "3. Varjatud kulud, millest agentuurid tihti vaikivad",
          "paragraphs": [
            "Hooldus- ja tugiteenuse tasud: Mõned agentuurid nõuavad kohustuslikke 50–200 €/kuus lepinguid vaid selle eest, et veebileht üldse töötaks. SiteStudio mudelis maksab hooldus vaid 8–10 €/kuus, või antakse veebileht kliendile üle täielikult iseseisvaks haldamiseks.",
            "Tasud sisu muutmise eest: Kui veebileht on loodud ilma mugava sisuhaldussüsteemita (CMS), võib arendaja iga foto või hinna muutmise eest küsida 30–50 € tunnitasu. Kaasaegse CMS-i kasutuselevõtuga teed kõik muudatused ise minutiga.",
            "Domeeni ja serveri omandiõigus: Nõua alati, et .lt domeen ja majutuskonto oleksid registreeritud sinu ettevõtte, mitte teostava agentuuri nimele."
          ]
        },
        {
          "heading": "4. Kuidas veebilehe loomisel targalt kokku hoida?",
          "paragraphs": [
            "Enne arendajaga ühenduse võtmist pane selgelt kirja oma teenuste loetelu, esialgsed hinnad ja valmista ette päris tehtud tööde fotod. Mida vähem lahtisi küsimusi alguses, seda täpsem ja väiksem on lõplik eelarve.",
            "Vali otsene suhtlus teostajaga: sõltumatu spetsialiseeritud stuudioga töötades suhtled otse arendajaga, mistõttu ei maksa agentuuri projektijuhtide ahela, luksuslike kontorite ega halduslisatasude eest.",
            "Ära vali kiirustades pelgalt kõige odavamat pakkumist ainult numbri pärast. Palu arendajal näidata vähemalt 2–3 päriselt töötavat, tema enda loodud projekti (mitte makette) — kontrolli nende kiirust Google PageSpeed Insightsi kaudu ja loe, kas veebilehe tekst kõlab professionaalselt."
          ]
        },
        {
          "heading": "5. Reaalsed hinnanäited praktikast",
          "paragraphs": [
            "Et hinnad ei jääks abstraktseks, vaatame reaalseid projektitüüpe. Ühe meistri teenuste veebileht koos tööde galerii ja päringuvormiga, kohandatud kohalikule Google'i otsingule (sarnaselt näiteks vannitoa remondimeistri lehele) — see on tüüpiline 'Starditasandi' projekt, mis jääb 200–500 € vahemikku.",
            "Ettevõtte veebileht sisuhaldussüsteemiga, kus klient uuendab ise tehtud tööde fotosid ilma arendaja abita (sarnaselt plaatimismeistri lehele) — see on juba 'Ettevõtte' kategooria, mille hind on 500–1500 €, olenevalt lehtede arvust ja integratsioonidest.",
            "Kohandatud veebisüsteem või veebirakendus kontode, reaalajas funktsioonide ja maksetega (sarnaselt sotsiaalvõrgustiku tüüpi rakendusele) ületab juba tavapärase veebilehe raamid ja seda hinnatakse eraldi tarkvaraprojektina — tavaliselt alates 1800 eurost ja rohkem, olenevalt funktsioonide hulgast."
          ]
        },
        {
          "heading": "6. Korduma kippuvad küsimused hinna kohta",
          "paragraphs": [
            "Kas hind võib töö käigus muutuda? Kui maht on kirjalikult kokku lepitud enne alustamist, hind ei muutu. See võib kasvada ainult siis, kui sina ise soovid lisafunktsioone, mida algses pakkumises polnud — ja seda lepitakse alati eelnevalt kokku.",
            "Kas tuleb maksta ettemaks? Enamasti jah, osa summast tasutakse enne töö algust ja ülejäänu pärast tulemuse vastuvõtmist. See kaitseb mõlemat poolt: arendaja saab kindluse, et projekt on tõsine, ja klient kindluse, et ei maksa veel alustamata töö eest.",
            "Miks kuvatakse hind sõnaga 'alates'? Täpset summat mõjutavad lehtede arv, sisu hulk, vajalikud integratsioonid ja disaini keerukus. Seetõttu esitatakse konkreetne summa alati kirjaliku pakkumisena pärast lühikest vestlust sinu vajaduste kohta, mitte ette ära arvatuna."
          ]
        }
      ],
      "takeaways": [
        "Tõsise esindusveebilehe start algab 200–500 eurost, sisuhaldusega alates 500 eurost.",
        "Nõua kirjalikku lepingut fikseeritud hinna ja tähtajaga enne töö algust.",
        "Ära kunagi osta veebilehte ilma garantiita, et kood ja domeen on 100% sinu omandis.",
        "Enne lepingu allkirjastamist palu näha vähemalt paari reaalset, töötavat arendaja projekti."
      ]
    },
    "ru": {
      "title": "Сколько стоит создание сайта в 2026 году: реальный анализ цен",
      "description": "Подробный обзор цен на создание сайтов в Литве: от имиджевых сайтов до интернет-магазинов. Узнайте, из чего складывается цена.",
      "intro": "Сколько стоит создать сайт в Литве в 2026 году? Это, пожалуй, самый частый вопрос, который задают предприниматели, специалисты и руководители компаний. Ценовой диапазон на рынке очень широк — от 150 € у начинающего фрилансера до 10 000 € и более в крупных цифровых агентствах. В этом подробном гиде мы честно разберём реальную ситуацию на литовском рынке, ценовые категории и объясним, за что вы на самом деле платите и как не переплатить.",
      "sections": [
        {
          "heading": "1. Основные категории сайтов и ценовые диапазоны",
          "paragraphs": [
            "Стартовый сайт / лендинг (от 200 € до 500 €): это одностраничное имиджевое решение для представления конкретной услуги, продукта или личного бренда мастера. В цену входит уникальный дизайн, мобильная версия, форма заявки, отправляющая данные прямо на email или в Telegram, базовое SEO и быстрый запуск за 1–2 недели.",
            "Бизнес-сайт с системой управления контентом (от 500 € до 1 500 €): сайт из нескольких страниц (например, Главная, О нас, Услуги, Галерея работ, Цены, Контакты) с удобной админ-панелью (CMS). Этот вариант идеально подходит малым и средним компаниям, которые хотят самостоятельно обновлять фотографии выполненных работ, заполнять описания услуг и публиковать новости.",
            "Интернет-магазины и индивидуальные системы (от 1 200 € до 4 000+ €): полноценная торговая или сервисная система с каталогом товаров, корзиной, автоматизированными платежами (Stripe, Montonio, Paysera), генерацией этикеток для почтоматов и личными кабинетами клиентов."
          ]
        },
        {
          "heading": "2. Из чего складывается итоговая смета сайта?",
          "paragraphs": [
            "Дизайн и пользовательский опыт (UI/UX): самый дешёвый путь — купленный готовый шаблон, который используют тысячи других сайтов. Структура, спроектированная индивидуально под вашу деятельность, стоит дороже, но окупается гораздо более высокой конверсией — посетители понимают предложение и оставляют заявку.",
            "Технологическая основа: современные технологии, такие как Next.js и React, обеспечивают молниеносную скорость загрузки (до 50 мс) и высочайшую безопасность, в отличие от старых решений на WordPress, перегруженных десятками замедляющих плагинов.",
            "Техническая SEO-подготовка: это не только мета-описания, но и структурированные данные Schema.org, правильная иерархия заголовков H1–H3, канонические ссылки, Sitemap.xml и интеграция OpenGraph для социальных сетей."
          ]
        },
        {
          "heading": "3. Скрытые расходы, о которых агентства часто умалчивают",
          "paragraphs": [
            "Плата за обслуживание и поддержку: некоторые агентства требуют обязательный договор на 50–200 €/мес. просто за то, чтобы сайт работал. В модели SiteStudio обслуживание стоит всего 8–10 €/мес., либо сайт полностью передаётся в управление самому клиенту.",
            "Плата за редактирование контента: если сайт создан без удобной CMS, за каждое изменение фотографии или цены программист может брать почасовую ставку 30–50 €. При внедрении современной CMS все изменения вы вносите сами за минуту.",
            "Владение доменом и сервером: всегда требуйте, чтобы домен .lt и хостинг-аккаунт были зарегистрированы на имя вашей компании, а не подрядного агентства."
          ]
        },
        {
          "heading": "4. Как разумно сэкономить при создании сайта?",
          "paragraphs": [
            "Прежде чем обращаться к разработчику, чётко пропишите список своих услуг, ориентировочные цены и подготовьте реальные фотографии выполненных работ. Чем меньше неизвестных на старте — тем точнее и меньше будет итоговая смета.",
            "Выбирайте прямую связь с исполнителем: работая с независимой специализированной студией, вы общаетесь напрямую с разработчиком и не платите за цепочку менеджеров агентства, дорогие офисы и административные наценки.",
            "Не спешите выбирать самое дешёвое предложение только из-за цифры. Попросите разработчика показать хотя бы 2–3 реально работающих проекта, созданных им самим (не макеты) — проверьте их скорость через Google PageSpeed Insights и убедитесь, что текст на сайте звучит профессионально."
          ]
        },
        {
          "heading": "5. Реальные примеры цен из практики",
          "paragraphs": [
            "Чтобы цены не выглядели абстрактно, рассмотрим реальные типы проектов. Сайт услуг одного мастера с галереей работ и формой заявки, оптимизированный под локальный поиск Google (похоже на leonamai.lt для мастера по ремонту ванных) — это типичный проект категории «Стартовый», попадающий в диапазон 200–500 €.",
            "Бизнес-сайт с системой управления контентом, где клиент сам обновляет фотографии работ без помощи программиста (похоже на situacija.eu для мастера по укладке плитки) — это уже категория «Бизнес», от 500 € до 1500 €, в зависимости от количества страниц и интеграций.",
            "Индивидуальная веб-система или веб-приложение с личными кабинетами, функциями реального времени и платежами (похоже на приложение социальной сети) уже выходит за рамки стандартного сайта и оценивается как отдельный программный проект — как правило, от 1800 € и выше, в зависимости от объёма функций."
          ]
        },
        {
          "heading": "6. Часто задаваемые вопросы о цене",
          "paragraphs": [
            "Может ли цена измениться в ходе работы? Если объём согласован письменно до начала работ, цена не меняется. Она может вырасти только если вы сами запрашиваете дополнительные функции, которых не было в первоначальном предложении — и это всегда согласуется заранее.",
            "Нужно ли платить аванс? Как правило, да: часть суммы оплачивается перед началом работ, остаток — после приёмки результата. Это защищает обе стороны: разработчик получает гарантию серьёзности проекта, а клиент — гарантию, что не платит за ещё не начатую работу.",
            "Почему цена указана «от»? На точную сумму влияет количество страниц, объём контента, необходимые интеграции и сложность дизайна. Поэтому конкретная сумма всегда предоставляется в виде письменного предложения после короткого разговора о ваших потребностях, а не угадывается заранее."
          ]
        }
      ],
      "takeaways": [
        "Старт серьёзного имиджевого сайта начинается от 200–500 €, с системой управления контентом — от 500 €.",
        "Требуйте письменный договор с фиксированной ценой и сроком до начала работ.",
        "Никогда не покупайте сайт без гарантии, что код и домен будут на 100% в вашей собственности.",
        "Перед подписанием договора попросите показать хотя бы несколько реальных, работающих проектов разработчика."
      ]
    }
  },
  "kiek-kainuoja-el-parduotuves-kurimas": {
    "en": {
      "title": "How much does it cost to build and launch an online store in Lithuania?",
      "description": "What you need to know about online store pricing: payments, delivery, design, and ongoing costs.",
      "intro": "E-commerce in Lithuania and across the European Union is entering a stage of maturity. Shoppers now expect not just attractive product photos, but lightning-fast page loads on smartphones, convenient one-click checkout (Apple Pay, Google Pay, Montonio), and instant parcel-locker selection. In this guide we take a detailed look at online store pricing, platform choice, and the integrations you'll need.",
      "sections": [
        {
          "heading": "1. Online store pricing tiers",
          "paragraphs": [
            "Basic online store (from €1,000 to €1,800): A solution for a starting retail business with up to 100 products. Includes a product catalog, categories, shopping cart, checkout form, and integration with Lithuanian banks (Montonio or Stripe) and Omniva / DPD parcel lockers.",
            "Advanced business online store (from €2,000 to €4,500): A store built for a large product range, with advanced product filters, variants (sizes, colors), discount codes, abandoned-cart reminders, multi-language support, and automatic invoicing.",
            "Custom B2B and wholesale systems (from €4,000): Built for companies with different price lists per customer group, integrations with warehouse management software (Rivilė, Būtent, Stekas), and custom order limits."
          ]
        },
        {
          "heading": "2. Essential integrations and their costs",
          "paragraphs": [
            "Payment collection: The most popular choice in Lithuania is Montonio, charging as little as €0.05–0.10 per bank transfer, or Stripe for international credit cards and Apple Pay. Once these gateways are integrated, a customer can check out in 10 seconds.",
            "Delivery automation: Omniva, DPD, and LP Express integrations let shoppers pick the nearest parcel locker on a map, while the administrator can print a shipping label with a single click.",
            "Accounting and invoices: Automatic PDF invoice generation and emailing to the buyer saves hundreds of hours of bookkeeping work per year."
          ]
        },
        {
          "heading": "3. Ongoing costs of running an online store",
          "paragraphs": [
            "Domain (.lt): around €10–12 per year.",
            "Secure, fast hosting: from €10 to €30 per month, depending on traffic and database size.",
            "Payment provider fees: charged only on actual completed sales (a fixed fee per transaction)."
          ]
        },
        {
          "heading": "4. Which technology suits an online store?",
          "paragraphs": [
            "Two directions dominate the market: ready-made SaaS platforms (Shopify and similar) with a monthly subscription fee and ownership limitations, and a custom-built system that belongs to you entirely.",
            "A custom-built online store (for example, on Next.js with a PostgreSQL database) means you don't pay a monthly 'rental' fee to a platform, you can freely change the design and features, and your customer and order data always stays in a database you control, not on a third party's servers.",
            "This kind of solution requires a larger initial budget, but over time, as turnover grows, it pays off — you don't pay a percentage fee on every sale to a platform, only fixed payment-provider fees."
          ]
        },
        {
          "heading": "5. How to prepare your product range before launch",
          "paragraphs": [
            "Product descriptions: prepare a unique description of at least 2–3 sentences for each product — text copied from the manufacturer's website counts as duplicate content in Google's eyes and hurts your search rankings.",
            "Photos: consistent-format product photos on a light background build trust. If you have many products, consider a single professional photo shoot — it's cheaper than photographing each item separately.",
            "Category structure: plan a clear, shallow category tree (no more than 2–3 levels), so shoppers can find a product in a few clicks instead of wandering through dozens of subcategories."
          ]
        }
      ],
      "takeaways": [
        "The simplicity of the checkout process on mobile has the biggest impact on sales.",
        "Choose modern, fast technology that can handle traffic spikes during promotions.",
        "Automate shipping labels and invoices from the very first day your store launches.",
        "A custom system pays off more than a SaaS platform in the long run if you plan to grow."
      ]
    },
    "pl": {
      "title": "Ile kosztuje stworzenie i uruchomienie sklepu internetowego na Litwie?",
      "description": "Co warto wiedzieć o cenie sklepu internetowego: płatności, dostawa, design i koszty stałe.",
      "intro": "Handel elektroniczny na Litwie i w całej Unii Europejskiej wchodzi w fazę dojrzałości. Kupujący oczekują nie tylko ładnych zdjęć produktów, ale też błyskawicznego ładowania stron na smartfonie, wygodnych systemów płatności jednym kliknięciem (Apple Pay, Google Pay, Montonio) oraz natychmiastowego wyboru paczkomatu. W tym przewodniku szczegółowo omówimy koszt stworzenia sklepu internetowego, wybór platformy oraz niezbędne integracje.",
      "sections": [
        {
          "heading": "1. Poziomy cenowe sklepów internetowych",
          "paragraphs": [
            "Podstawowy sklep internetowy (od 1 000 € do 1 800 €): Rozwiązanie dla początkującej działalności handlowej z maksymalnie 100 produktami. Obejmuje katalog produktów, kategorie, koszyk, formularz płatności, integrację z litewskimi bankami (Montonio lub Stripe) oraz paczkomatami Omniva / DPD.",
            "Rozszerzony sklep firmowy (od 2 000 € do 4 500 €): Sklep dla dużego asortymentu z zaawansowanymi filtrami produktów, wariantami (rozmiary, kolory), kodami rabatowymi, przypomnieniami o porzuconych koszykach, wielojęzycznością oraz automatycznymi fakturami.",
            "Indywidualne systemy B2B i handlu hurtowego (od 4 000 €): Przeznaczone dla firm z różnymi cennikami w zależności od grupy klientów, integracjami z programami magazynowymi (Rivilė, Būtent, Stekas) oraz indywidualnymi limitami zamówień."
          ]
        },
        {
          "heading": "2. Niezbędne integracje i ich koszty",
          "paragraphs": [
            "Obsługa płatności: Najpopularniejszy wybór na Litwie to Montonio, pobierający jedynie 0,05–0,10 € za przelew bankowy, lub Stripe dla międzynarodowych kart kredytowych i Apple Pay. Po zintegrowaniu tych bramek kupujący finalizuje płatność w ciągu 10 sekund.",
            "Automatyzacja dostaw: Integracje z Omniva, DPD, LP Express pozwalają kupującemu wybrać najbliższy paczkomat na mapie, a administratorowi — wydrukować etykietę przesyłki jednym kliknięciem.",
            "Księgowość i faktury: Automatyczne generowanie i wysyłanie faktur PDF do kupującego drogą mailową oszczędza setki godzin pracy księgowego rocznie."
          ]
        },
        {
          "heading": "3. Stałe koszty utrzymania sklepu internetowego",
          "paragraphs": [
            "Domena (.lt): około 10–12 € rocznie.",
            "Bezpieczny i szybki hosting: od 10 € do 30 € miesięcznie, w zależności od ruchu na stronie i wielkości bazy danych.",
            "Prowizje pośredników płatności: naliczane wyłącznie od faktycznie zrealizowanej sprzedaży (stała opłata za transakcję)."
          ]
        },
        {
          "heading": "4. Jaka technologia sprawdzi się w sklepie internetowym?",
          "paragraphs": [
            "Na rynku dominują dwa kierunki: gotowe platformy SaaS (Shopify i podobne) z miesięcznym abonamentem i ograniczeniami praw własności, oraz indywidualnie stworzony system, który w pełni należy do Ciebie.",
            "Indywidualnie zbudowany sklep internetowy (np. oparty na Next.js z bazą danych PostgreSQL) oznacza, że nie płacisz miesięcznego czynszu platformie, możesz swobodnie zmieniać design i funkcje, a dane o klientach i zamówieniach zawsze pozostają w zarządzanej przez Ciebie bazie danych, a nie na serwerze zewnętrznego dostawcy.",
            "Takie rozwiązanie wymaga wyższego budżetu początkowego, ale z czasem, wraz ze wzrostem obrotów, zwraca się — nie płacisz platformie procentowej opłaty od każdej sprzedaży, tylko stałą prowizję pośrednika płatności."
          ]
        },
        {
          "heading": "5. Jak przygotować asortyment przed uruchomieniem?",
          "paragraphs": [
            "Opisy produktów: dla każdego produktu przygotuj unikalny opis liczący co najmniej 2–3 zdania — tekst skopiowany ze strony producenta w oczach Google jest treścią zduplikowaną i pogarsza Twoje pozycje w wyszukiwarce.",
            "Zdjęcia: zdjęcia produktów o jednolitym formacie i jasnym tle zwiększają zaufanie. Jeśli produktów jest dużo, rozważ profesjonalną sesję zdjęciową jednorazowo — jest to tańsze niż fotografowanie każdego produktu osobno.",
            "Struktura kategorii: zaplanuj jasne, płytkie drzewo kategorii (nie więcej niż 2–3 poziomy), aby kupujący znalazł produkt w kilku kliknięciach, a nie błądził po dziesiątkach podkategorii."
          ]
        }
      ],
      "takeaways": [
        "Największy wpływ na sprzedaż ma prostota kroków płatności na telefonie.",
        "Wybieraj nowoczesną, szybką technologię, która wytrzymuje skoki ruchu podczas promocji.",
        "Automatyzuj etykiety przesyłek i faktury od pierwszego dnia działania sklepu.",
        "Indywidualny system zwraca się z czasem bardziej niż platforma SaaS, jeśli planujesz wzrost."
      ]
    },
    "lv": {
      "title": "Cik maksā e-veikala izstrāde un palaišana Lietuvā?",
      "description": "Kas jāzina par e-veikala cenu: maksājumi, piegāde, dizains un pastāvīgās izmaksas.",
      "intro": "Elektroniskā tirdzniecība Lietuvā un visā Eiropas Savienībā piedzīvo brieduma posmu. Pircēji sagaida ne tikai skaistas preču fotogrāfijas, bet arī zibens ātru lapu ielādi viedtālrunī, ērtu vienas piedziņas apmaksas sistēmu (Apple Pay, Google Pay, Montonio) un momentānu pakomātu izvēli. Šajā ceļvedī detalizēti izanalizēsim e-veikala izstrādes cenu, platformu izvēli un nepieciešamās integrācijas.",
      "sections": [
        {
          "heading": "1. E-veikalu cenu līmeņi",
          "paragraphs": [
            "Bāzes e-veikals (no 1000 € līdz 1800 €): Risinājums biznesa sākumam ar līdz 100 precēm. Ietver preču katalogu, kategorijas, iepirkumu grozu, apmaksas formu, integrāciju ar Lietuvas bankām (Montonio vai Stripe) un Omniva / DPD pakomātiem.",
            "Paplašināts biznesa e-veikals (no 2000 € līdz 4500 €): Lielam sortimentam paredzēts veikals ar uzlabotiem preču filtriem, variantiem (izmēri, krāsas), atlaižu kodiem, pamesto grozu atgādinājumiem, daudzvalodību un automātiskiem rēķiniem.",
            "Individuālas B2B un vairumtirdzniecības sistēmas (no 4000 €): Paredzētas uzņēmumiem ar atšķirīgām cenu lapām pēc klientu grupām, integrācijām ar noliktavas vadības programmām (Rivilė, Būtent, Stekas) un individuāliem pasūtījumu limitiem."
          ]
        },
        {
          "heading": "2. Nepieciešamās integrācijas un to izmaksas",
          "paragraphs": [
            "Maksājumu iekasēšana: Populārākā izvēle Lietuvā — Montonio, kas iekasē tikai 0,05–0,10 € par bankas pārskaitījumu, vai Stripe starptautiskām kredītkartēm un Apple Pay. Integrējot šos vārtus, pircējs norēķinās 10 sekunžu laikā.",
            "Piegādes automatizācija: Omniva, DPD, LP Express integrācijas ļauj pircējam kartē izvēlēties tuvāko pakomātu, bet administratoram — ar viena pogas klikšķi izdrukāt sūtījuma uzlīmi.",
            "Grāmatvedība un rēķini: Automātiska PDF rēķinu ģenerēšana un nosūtīšana pircējam uz e-pastu ietaupa simtiem grāmatveža darba stundu gadā."
          ]
        },
        {
          "heading": "3. Pastāvīgās e-veikala uzturēšanas izmaksas",
          "paragraphs": [
            "Domēns (.lt): apmēram 10–12 € gadā.",
            "Drošs un ātrs hostings: no 10 € līdz 30 € mēnesī, atkarībā no apmeklētāju plūsmas un datubāzes apjoma.",
            "Maksājumu starpnieku komisijas: tiek aprēķinātas tikai no reāli notikušajiem pārdošanas darījumiem (fiksēta maksa par transakciju)."
          ]
        },
        {
          "heading": "4. Kāda tehnoloģija piemērota e-veikalam?",
          "paragraphs": [
            "Tirgū dominē divi virzieni: gatavas SaaS platformas (Shopify un tamlīdzīgas) ar ikmēneša abonēšanas maksu un īpašumtiesību ierobežojumiem, un individuāli izstrādāta sistēma, kas pilnībā pieder jums.",
            "Individuāli izstrādāts e-veikals (piem., Next.js pamata ar PostgreSQL datubāzi) nozīmē, ka nemaksājat ikmēneša 'nomas' maksu platformai, varat brīvi mainīt dizainu un funkcijas, un dati par klientiem un pasūtījumiem vienmēr paliek jūsu pārvaldītā datubāzē, nevis trešās puses serverī.",
            "Šādam risinājumam nepieciešams lielāks sākotnējais budžets, taču ilgtermiņā, augot apgrozījumam, tas atmaksājas — nemaksājat procentuālu maksu no katras pārdošanas platformai, tikai fiksētas maksājumu starpnieka komisijas."
          ]
        },
        {
          "heading": "5. Kā sagatavot sortimentu pirms palaišanas?",
          "paragraphs": [
            "Preču apraksti: katrai precei sagatavojiet vismaz 2–3 teikumu unikālu aprakstu — no ražotāja mājaslapas nokopēts teksts Google acīs ir dublēts saturs un pasliktina jūsu pozīcijas meklēšanā.",
            "Fotogrāfijas: vienāda formāta, gaiša fona produktu fotogrāfijas palielina uzticību. Ja preču ir daudz, apsveriet profesionālu fotosesiju uzreiz — tas ir lētāk nekā fotografēt katru preci atsevišķi.",
            "Kategoriju struktūra: iepriekš izplānojiet skaidru, neseklu kategoriju koku (ne vairāk kā 2–3 līmeņi), lai pircējs atrastu preci dažu klikšķu laikā, nevis maldītos pa desmitiem apakškategoriju."
          ]
        }
      ],
      "takeaways": [
        "Vislielāko ietekmi uz pārdošanu atstāj apmaksas soļu vienkāršība telefonā.",
        "Izvēlieties modernu, ātru tehnoloģiju, kas iztur slodzes pieaugumu akciju laikā.",
        "Automatizējiet sūtījumu uzlīmes un rēķinus jau no pirmās veikala palaišanas dienas.",
        "Individuāla sistēma ilgtermiņā atmaksājas vairāk nekā SaaS platforma, ja plānojat augt."
      ]
    },
    "et": {
      "title": "Kui palju maksab e-poe loomine ja käivitamine?",
      "description": "Mida on vaja teada e-poe hinna kohta: maksed, tarne, disain ja jooksvad kulud.",
      "intro": "E-kaubandus elab läbi küpsemisetappi. Ostjad eeldavad mitte ainult ilusaid tootepilte, vaid ka välkkiiret lehe laadimist nutitelefonis, mugavat ühe klikiga maksesüsteemi (Apple Pay, Google Pay, Montonio) ning kohest pakiautomaadi valikut. Selles juhendis analüüsime detailselt e-poe loomise hinda, platvormi valikut ja vajalikke integratsioone.",
      "sections": [
        {
          "heading": "1. E-poodide hinnatasemed",
          "paragraphs": [
            "Baas-e-pood (1000–1800 €): Lahendus alustavale kaubandusettevõttele kuni 100 tootega. Sisaldab tootekataloogi, kategooriaid, ostukorvi, maksevormi, integratsiooni pankadega (Montonio või Stripe) ning Omniva/DPD pakiautomaatidega.",
            "Laiendatud ettevõtte e-pood (2000–4500 €): Suurele tootevalikule mõeldud pood täiustatud tootefiltrite, variantide (suurused, värvid), soodustuskoodide, mahajäetud ostukorvi meeldetuletuste, mitmekeelsuse ja automaatsete arvete koostamisega.",
            "Kohandatud B2B ja hulgimüügisüsteemid (alates 4000 €): Mõeldud ettevõtetele, kellel on erinevad hinnakirjad kliendigruppide kaupa, integratsioonid laohaldusprogrammidega ja individuaalsed tellimuslimiidid."
          ]
        },
        {
          "heading": "2. Vajalikud integratsioonid ja nende kulud",
          "paragraphs": [
            "Maksete kogumine: Populaarseim valik — Montonio, mille tasu on vaid 0,05–0,10 € pangaülekande kohta, või Stripe rahvusvaheliste krediitkaartide ja Apple Pay jaoks. Nende maksevärvate integreerimisel saab ostja tasuda 10 sekundiga.",
            "Tarne automatiseerimine: Omniva, DPD, LP Express integratsioonid võimaldavad ostjal kaardil valida lähima pakiautomaadi ning administraatoril printida saatelehe kleebis ühe nupuvajutusega.",
            "Raamatupidamine ja arved: Automaatne PDF-arvete genereerimine ja saatmine ostjale e-postile säästab sadu raamatupidaja töötunde aastas."
          ]
        },
        {
          "heading": "3. E-poe jooksvad ülalpidamiskulud",
          "paragraphs": [
            "Domeen (.lt): umbes 10–12 € aastas.",
            "Turvaline ja kiire majutus (hosting): 10–30 € kuus, olenevalt külastajate hulgast ja andmebaasi mahust.",
            "Maksevahendajate vahendustasud: arvestatakse ainult reaalselt toimunud müügitehingutest (fikseeritud tasu tehingu kohta)."
          ]
        },
        {
          "heading": "4. Milline tehnoloogia sobib e-poele?",
          "paragraphs": [
            "Turul domineerivad kaks suunda: valmis SaaS-platvormid (Shopify ja sarnased) kuutasu ja omandiõiguse piirangutega, ning individuaalselt loodud süsteem, mis kuulub täielikult sinule.",
            "Individuaalselt loodud e-pood (nt Next.js baasil koos PostgreSQL andmebaasiga) tähendab, et sa ei maksa igakuist 'rendi' tasu platvormile, saad vabalt muuta disaini ja funktsioone, ning kliendi- ja tellimuseandmed jäävad alati sinu enda hallatavasse andmebaasi, mitte kolmanda osapoole serverisse.",
            "Sellise lahenduse jaoks on vaja suuremat algeelarvet, kuid pikas perspektiivis, käibe kasvades, tasub see end ära — ei maksa protsentuaalset tasu platvormile iga müügi pealt, vaid ainult fikseeritud maksevahendaja vahendustasu."
          ]
        },
        {
          "heading": "5. Kuidas valmistada tootevalik enne käivitamist ette?",
          "paragraphs": [
            "Tootekirjeldused: valmista igale tootele vähemalt 2–3 lauset unikaalset kirjeldust — tootja veebilehelt kopeeritud tekst on Google'i silmis dubleeritud sisu ja halvendab sinu otsingupositsioone.",
            "Fotod: ühtses formaadis, heleda taustaga tootefotod suurendavad usaldust. Kui tooteid on palju, kaalu professionaalset fotosessiooni korraga — see on odavam kui fotografeerida iga toodet eraldi.",
            "Kategooriastruktuur: planeeri selge, mitte liiga sügav kategooriapuu (mitte rohkem kui 2–3 taset), et ostja leiaks toote paari klikiga, mitte ei ekslejat kümnete alamkategooriate vahel."
          ]
        }
      ],
      "takeaways": [
        "Müüki mõjutab kõige rohkem maksmise sammude lihtsus telefonis.",
        "Vali kaasaegne, kiire tehnoloogia, mis peab vastu kampaaniate ajal tekkivatele koormuspiikidele.",
        "Automatiseeri saatelehed ja arved juba poe esimesest tööpäevast alates.",
        "Individuaalne süsteem tasub end pikas perspektiivis paremini ära kui SaaS-platvorm, kui plaanid kasvada."
      ]
    },
    "ru": {
      "title": "Сколько стоит создание и запуск интернет-магазина в Литве?",
      "description": "Что нужно знать о цене интернет-магазина: платежи, доставка, дизайн и постоянные расходы.",
      "intro": "Электронная коммерция в Литве и во всём Евросоюзе переживает этап зрелости. Покупатели ожидают не только красивых фотографий товаров, но и молниеносной загрузки страниц на смартфоне, удобной системы оплаты в один клик (Apple Pay, Google Pay, Montonio) и мгновенного выбора почтомата. В этом гиде мы подробно разберём цену создания интернет-магазина, выбор платформы и необходимые интеграции.",
      "sections": [
        {
          "heading": "1. Ценовые уровни интернет-магазинов",
          "paragraphs": [
            "Базовый интернет-магазин (от 1 000 € до 1 800 €): решение для начинающего торгового бизнеса с ассортиментом до 100 товаров. Включает каталог товаров, категории, корзину, форму оформления заказа, интеграцию с литовскими банками (Montonio или Stripe) и почтоматами Omniva / DPD.",
            "Расширенный бизнес-магазин (от 2 000 € до 4 500 €): магазин для большого ассортимента с продвинутыми фильтрами товаров, вариантами (размеры, цвета), промокодами, напоминаниями о брошенных корзинах, многоязычностью и автоматическими счетами-фактурами.",
            "Индивидуальные системы B2B и оптовой торговли (от 4 000 €): для компаний с разными прайс-листами по группам клиентов, интеграциями с системами складского учёта (Rivilė, Būtent, Stekas) и индивидуальными лимитами заказов."
          ]
        },
        {
          "heading": "2. Необходимые интеграции и их стоимость",
          "paragraphs": [
            "Приём платежей: самый популярный выбор в Литве — Montonio, с комиссией всего 0,05–0,10 € за банковский перевод, либо Stripe для международных платежей картой и Apple Pay. Подключив эти платёжные шлюзы, покупатель оформляет оплату за 10 секунд.",
            "Автоматизация доставки: интеграции с Omniva, DPD, LP Express позволяют покупателю выбрать ближайший почтомат на карте, а администратору — распечатать этикетку посылки одним нажатием кнопки.",
            "Учёт и счета: автоматическая генерация и отправка PDF-счетов покупателю на email экономит сотни часов работы бухгалтера в год."
          ]
        },
        {
          "heading": "3. Постоянные расходы на содержание интернет-магазина",
          "paragraphs": [
            "Домен (.lt): около 10–12 € в год.",
            "Безопасный и быстрый хостинг: от 10 € до 30 € в месяц, в зависимости от посещаемости и объёма базы данных.",
            "Комиссии платёжных посредников: рассчитываются только с реально совершённых продаж (фиксированная плата за транзакцию)."
          ]
        },
        {
          "heading": "4. Какая технология подходит для интернет-магазина?",
          "paragraphs": [
            "На рынке доминируют два направления: готовые SaaS-платформы (Shopify и аналоги) с ежемесячной подпиской и ограничениями прав собственности, и индивидуально созданная система, которая полностью принадлежит вам.",
            "Индивидуально созданный интернет-магазин (например, на базе Next.js с базой данных PostgreSQL) означает, что вы не платите ежемесячную «арендную» плату платформе, можете свободно менять дизайн и функции, а данные о клиентах и заказах всегда остаются в управляемой вами базе данных, а не на стороннем сервере.",
            "Такое решение требует большего первоначального бюджета, но со временем, по мере роста оборота, окупается — вы не платите процент с каждой продажи платформе, только фиксированные комиссии платёжного посредника."
          ]
        },
        {
          "heading": "5. Как подготовить ассортимент перед запуском?",
          "paragraphs": [
            "Описания товаров: для каждого товара подготовьте уникальное описание хотя бы из 2–3 предложений — скопированный с сайта производителя текст в глазах Google является дублированным контентом и ухудшает ваши позиции в поиске.",
            "Фотографии: продуктовые фотографии единого формата на светлом фоне повышают доверие. Если товаров много, рассмотрите профессиональную фотосессию за один раз — это дешевле, чем фотографировать каждый товар отдельно.",
            "Структура категорий: спланируйте понятное, неглубокое дерево категорий (не более 2–3 уровней), чтобы покупатель находил товар за несколько кликов, а не блуждал среди десятков подкатегорий."
          ]
        }
      ],
      "takeaways": [
        "На продажи сильнее всего влияет простота шагов оплаты на телефоне.",
        "Выбирайте современную, быструю технологию, которая выдерживает скачки трафика во время акций.",
        "Автоматизируйте этикетки для посылок и счета с первого дня запуска магазина.",
        "Индивидуальная система со временем окупается лучше, чем SaaS-платформа, если вы планируете расти."
      ]
    }
  },
  "nextjs-vs-wordpress": {
    "en": {
      "title": "Next.js vs. WordPress: which one should you choose for a business website?",
      "description": "A detailed comparison of Next.js and WordPress for business owners: speed, security, maintenance costs, and SEO potential.",
      "intro": "For more than 15 years, WordPress was the default choice for almost any website. But the web has changed: users demand pages that open instantly on their phones, and Google's algorithms mercilessly penalize slow websites. Next.js, a new-generation framework built on React, has become the leader among modern technologies. In this article we objectively compare both technologies from a business perspective.",
      "sections": [
        {
          "heading": "1. Speed and Google Core Web Vitals",
          "paragraphs": [
            "Traditional WordPress runs dynamically: every time a visitor arrives, the server executes PHP code, runs dozens of SQL queries against the database, and only then generates the page. Even with caching plugins, load times often reach 2–5 seconds.",
            "Next.js uses static site generation (SSG) and edge server technology. Pages are prepared in advance and open in 20–50 milliseconds. In Google PageSpeed tests, Next.js websites easily score 95–100."
          ]
        },
        {
          "heading": "2. Security and the plugin 'hell'",
          "paragraphs": [
            "The average WordPress website runs 25–40 different third-party plugins (contact forms, SEO, speed, security, translations). Each plugin is a potential security hole — WordPress is the most attacked CMS in the world.",
            "Next.js websites have no exposed database or vulnerable PHP engine sitting directly on the internet. The code is compiled and secure, so you don't need to worry that your site will 'break' or get infected with malicious code after a routine update."
          ]
        },
        {
          "heading": "3. Content management convenience",
          "paragraphs": [
            "There's a common myth that choosing Next.js means you can no longer manage content yourself. On the contrary: Next.js integrates with a modern 'headless' content management system (Directus, Sanity, or Strapi). The admin environment is far cleaner, faster, and free of WordPress's clutter of promotional notifications."
          ]
        },
        {
          "heading": "4. Comparison summary for businesses",
          "paragraphs": [
            "WordPress is a good fit for: personal, non-commercial blogs or projects with a minimal budget of around €100, where speed and security aren't critical.",
            "Next.js is a good fit for: business websites, service providers, online stores, and growing companies for whom flawless speed, SEO rankings, and long-term reliability matter."
          ]
        },
        {
          "heading": "5. Long-term maintenance costs — an often-overlooked factor",
          "paragraphs": [
            "WordPress demands constant attention: every month you need to update the core system, the theme, and all 25–40 plugins. Miss one update and the site becomes vulnerable — this is exactly how most WordPress websites end up infected with malware or blacklisted by search engines.",
            "A Next.js website needs no such constant 'firefighting'. The code is compiled once, there are far fewer dependencies, and security patches are limited to rarer, controlled updates. That means fewer surprise bills for 'emergency site recovery after a hack'.",
            "Over the long term (3–5 years), the total cost of ownership for a Next.js website often ends up lower than WordPress, even though the initial build cost may be slightly higher."
          ]
        },
        {
          "heading": "6. The migration question: can you move from WordPress to Next.js?",
          "paragraphs": [
            "Yes, and it can happen without losing content. During a professional migration, all existing content (text, images, articles) is moved to the new system, and — most importantly — all old URLs are preserved or redirected with 301 redirects, so Google search rankings don't just survive but usually improve over time thanks to the much better speed.",
            "We recommend planning a migration once a WordPress site already shows clear signs of aging: slow loading, frequent plugin conflicts, or simply no longer meeting modern design standards."
          ]
        }
      ],
      "takeaways": [
        "Next.js delivers 5–10x faster loading compared to a standard WordPress setup.",
        "Lower long-term maintenance costs thanks to zero plugin-conflict risk.",
        "Higher Google Core Web Vitals scores directly improve search rankings.",
        "Migrating from WordPress to Next.js can be done without losing any SEO rankings."
      ]
    },
    "pl": {
      "title": "Next.js kontra WordPress: co wybrać dla strony firmowej?",
      "description": "Szczegółowe porównanie Next.js i WordPress z perspektywy właściciela biznesu: szybkość, bezpieczeństwo, koszty utrzymania i możliwości SEO.",
      "intro": "Przez ponad 15 lat WordPress był domyślnym wyborem dla niemal każdej strony internetowej. Jednak internet się zmienił: użytkownicy oczekują błyskawicznie otwierających się stron na telefonie, a algorytmy Google bezlitośnie karzą wolne witryny. Framework nowej generacji Next.js (oparty na React) stał się liderem nowoczesnych technologii. W tym artykule obiektywnie porównujemy obie technologie z perspektywy biznesowej.",
      "sections": [
        {
          "heading": "1. Szybkość i Google Core Web Vitals",
          "paragraphs": [
            "Tradycyjny WordPress działa dynamicznie: za każdym razem, gdy odwiedzający wchodzi na stronę, serwer wykonuje kod PHP, przeprowadza dziesiątki zapytań SQL do bazy danych i dopiero wtedy generuje stronę. Nawet z wtyczkami do cache'owania czas ładowania często sięga 2–5 sekund.",
            "Next.js wykorzystuje generowanie statyczne (SSG / Static Site Generation) oraz technologię serwerów brzegowych (Edge). Strony są przygotowywane z wyprzedzeniem i otwierają się w ciągu 20–50 milisekund. W teście Google PageSpeed strony na Next.js z łatwością osiągają wynik 95–100 punktów."
          ]
        },
        {
          "heading": "2. Bezpieczeństwo i „piekło” wtyczek",
          "paragraphs": [
            "Przeciętna strona na WordPressie korzysta z 25–40 różnych wtyczek od różnych autorów (formularze kontaktowe, SEO, szybkość, bezpieczeństwo, tłumaczenia). Każda wtyczka to potencjalna luka bezpieczeństwa — WordPress jest najczęściej atakowanym systemem CMS na świecie.",
            "Strony na Next.js nie posiadają otwartej bazy danych ani podatnego silnika PHP bezpośrednio dostępnego w internecie. Kod jest skompilowany i bezpieczny, więc nie musisz się obawiać, że po kolejnej aktualizacji strona „padnie” lub zostanie zainfekowana złośliwym kodem."
          ]
        },
        {
          "heading": "3. Wygoda zarządzania treścią",
          "paragraphs": [
            "Powszechny mit głosi, że wybierając Next.js nie można już samodzielnie zarządzać treścią. Wręcz przeciwnie: Next.js łączy się z nowoczesnym systemem CMS typu „Headless” (Directus, Sanity lub Strapi). Środowisko administracyjne jest znacznie czystsze, szybsze i pozbawione charakterystycznego dla WordPressa chaosu z komunikatami reklamowymi."
          ]
        },
        {
          "heading": "4. Podsumowanie porównania dla biznesu",
          "paragraphs": [
            "WordPress sprawdza się w przypadku: osobistych, niekomercyjnych blogów lub projektów z minimalnym budżetem 100 €, gdzie szybkość i bezpieczeństwo nie są kluczowe.",
            "Next.js sprawdza się w przypadku: firmowych stron wizytówkowych, dostawców usług, sklepów internetowych i rozwijających się firm, dla których liczy się nienaganna szybkość, pozycje w SEO i długoterminowa niezawodność."
          ]
        },
        {
          "heading": "5. Długoterminowe koszty utrzymania — często pomijany czynnik",
          "paragraphs": [
            "WordPress wymaga ciągłej uwagi: co miesiąc trzeba aktualizować sam system, szablon oraz wszystkie 25–40 wtyczek. Pominięcie jednej aktualizacji sprawia, że strona staje się podatna na ataki — właśnie w ten sposób większość witryn na WordPressie zostaje zainfekowana złośliwym kodem lub trafia na „czarne listy” wyszukiwarek.",
            "Strona na Next.js nie wymaga takiego ciągłego „gaszenia pożarów”. Kod jest kompilowany raz, zależności jest znacznie mniej, a poprawki bezpieczeństwa ograniczają się do rzadszych, kontrolowanych aktualizacji. Oznacza to mniej niespodziewanych rachunków za „pilne przywracanie strony po włamaniu”.",
            "W dłuższej perspektywie (3–5 lat) łączny koszt posiadania strony na Next.js często okazuje się niższy niż w przypadku WordPressa, mimo że początkowy koszt stworzenia strony może być nieco wyższy."
          ]
        },
        {
          "heading": "6. Kwestia migracji: czy można przejść z WordPressa na Next.js?",
          "paragraphs": [
            "Tak, i odbywa się to bez utraty treści. Podczas profesjonalnej migracji cała istniejąca treść (teksty, zdjęcia, artykuły) zostaje przeniesiona do nowego systemu, a co najważniejsze — wszystkie stare adresy URL są zachowywane lub przekierowywane przekierowaniami 301, dzięki czemu pozycje w wyszukiwarce Google nie tylko nie znikają, ale zwykle po pewnym czasie się poprawiają dzięki znacznie lepszej szybkości.",
            "Zalecamy planowanie migracji wtedy, gdy strona na WordPressie zaczyna wykazywać wyraźne oznaki przestarzałości: wolne ładowanie, częste konflikty wtyczek lub po prostu nieprzystawanie do współczesnych standardów designu."
          ]
        }
      ],
      "takeaways": [
        "Next.js zapewnia 5–10 razy szybsze ładowanie w porównaniu ze standardowym WordPressem.",
        "Niższe długoterminowe koszty utrzymania dzięki zerowemu ryzyku konfliktów między wtyczkami.",
        "Wyższe wyniki Google Core Web Vitals bezpośrednio poprawiają pozycje w wyszukiwarce.",
        "Migracja z WordPressa na Next.js może przebiec bez żadnej utraty pozycji SEO."
      ]
    },
    "lv": {
      "title": "Next.js vai WordPress: ko izvēlēties biznesa mājaslapai?",
      "description": "Izvērsts Next.js un WordPress salīdzinājums biznesa īpašniekam: ātrums, drošība, uzturēšanas izmaksas un SEO iespējas.",
      "intro": "Vairāk nekā 15 gadus WordPress bija noklusējuma izvēle gandrīz jebkurai interneta vietnei. Taču internets ir mainījies: lietotāji pieprasa acumirklī atveramas lapas telefonā, bet Google algoritmi nežēlīgi soda lēnas mājaslapas. Jaunās paaudzes ietvars Next.js (uz React bāzes) ir kļuvis par moderno tehnoloģiju līderi. Šajā rakstā objektīvi salīdzinām abas tehnoloģijas no biznesa skatpunkta.",
      "sections": [
        {
          "heading": "1. Ātrums un Google Core Web Vitals",
          "paragraphs": [
            "Tradicionālais WordPress darbojas dinamiski: katru reizi, kad apmeklētājs atver lapu, serveris izpilda PHP kodu, veic desmitiem SQL vaicājumu datubāzē un tikai tad ģenerē lapu. Pat ar kešošanas spraudņiem ielādes laiks bieži sasniedz 2–5 sekundes.",
            "Next.js izmanto statisko ģenerēšanu (SSG / Static Site Generation) un servera malas (Edge) tehnoloģiju. Lapas tiek sagatavotas iepriekš un atveras 20–50 milisekunžu laikā. Google PageSpeed testā Next.js mājaslapas viegli sasniedz 95–100 punktu novērtējumu."
          ]
        },
        {
          "heading": "2. Drošība un spraudņu 'elle'",
          "paragraphs": [
            "Vidēja WordPress mājaslapa izmanto 25–40 dažādu autoru spraudņus (kontaktu formas, SEO, ātrums, drošība, tulkojumi). Katrs spraudnis ir potenciāla drošības sprauga — WordPress ir pasaulē visbiežāk uzbruktā CMS.",
            "Next.js mājaslapās nav atvērtas datubāzes vai ievainojama PHP dzinēja tieši internetā. Kods ir kompilēts un drošs, tāpēc jums nav jābaidās, ka pēc kārtējā atjauninājuma mājaslapa 'salūzīs' vai tiks inficēta ar ļaunprātīgu kodu."
          ]
        },
        {
          "heading": "3. Satura vadības ērtums",
          "paragraphs": [
            "Izplatīts mīts, ka, izvēloties Next.js, vairs nevar pats pārvaldīt saturu. Gluži pretēji: Next.js tiek savienots ar mūsdienīgu 'Headless' satura vadības sistēmu (Directus, Sanity vai Strapi). Administrēšanas vide ir daudz tīrāka, ātrāka un tajā nav WordPress raksturīgā haosa ar reklāmas paziņojumiem."
          ]
        },
        {
          "heading": "4. Salīdzinājuma kopsavilkums biznesam",
          "paragraphs": [
            "WordPress piemērots: personīgiem, nekomerciāliem blogiem vai projektiem ar minimālu 100 € budžetu, kur ātrums un drošība nav kritiski.",
            "Next.js piemērots: reprezentatīvām biznesa mājaslapām, pakalpojumu sniedzējiem, e-veikaliem un augošiem uzņēmumiem, kuriem svarīgs nevainojams ātrums, SEO pozīcijas un ilgtermiņa uzticamība."
          ]
        },
        {
          "heading": "5. Ilgtermiņa uzturēšanas izmaksas — bieži aizmirsts faktors",
          "paragraphs": [
            "WordPress prasa pastāvīgu uzmanību: katru mēnesi jāatjaunina pati sistēma, tēma un visi 25–40 spraudņi. Palaižot garām vienu atjauninājumu, mājaslapa kļūst neaizsargāta — tieši tā vairums WordPress mājaslapu tiek inficētas ar ļaunprātīgu kodu vai nonāk meklētāju 'melnajos sarakstos'.",
            "Next.js mājaslapai šāda pastāvīga 'ugunsgrēku dzēšana' nav nepieciešama. Kods tiek kompilēts vienreiz, atkarību ir krietni mazāk, bet drošības labojumi aprobežojas ar retākiem, kontrolētiem atjauninājumiem. Tas nozīmē mazāk negaidītu rēķinu par 'steidzamu mājaslapas atjaunošanu pēc uzlaušanas'.",
            "Ilgtermiņā (3–5 gadi) kopējās Next.js mājaslapas īpašumtiesību izmaksas bieži izrādās mazākas nekā WordPress, neraugoties uz to, ka sākotnējā izstrādes cena var būt nedaudz augstāka."
          ]
        },
        {
          "heading": "6. Migrācijas jautājums: vai iespējams pāriet no WordPress uz Next.js?",
          "paragraphs": [
            "Jā, un tas notiek bez satura zaudēšanas. Profesionālas migrācijas laikā viss esošais saturs (teksti, fotogrāfijas, raksti) tiek pārnests uz jauno sistēmu, bet, kas ir svarīgākais, — visas vecās URL adreses tiek saglabātas vai novirzītas ar 301 novirzīšanu, tāpēc Google meklēšanas pozīcijas ne tikai nepazūd, bet parasti pēc kāda laika pat uzlabojas, pateicoties krietni labākam ātrumam.",
            "Iesakām migrāciju plānot tad, kad WordPress mājaslapa jau rāda skaidras novecošanas pazīmes: lēnu ielādi, biežus spraudņu konfliktus vai vienkārši vairs neatbilst mūsdienu dizaina standartiem."
          ]
        }
      ],
      "takeaways": [
        "Next.js nodrošina 5–10 reizes ātrāku ielādi salīdzinot ar standarta WordPress.",
        "Mazākas ilgtermiņa uzturēšanas izmaksas, jo praktiski nav spraudņu konfliktu riska.",
        "Augstāki Google Core Web Vitals rādītāji tieši uzlabo pozīcijas meklēšanā.",
        "Migrācija no WordPress uz Next.js var notikt bez jebkādas SEO pozīciju zaudēšanas."
      ]
    },
    "et": {
      "title": "Next.js versus WordPress: kumba valida ettevõtte veebilehe jaoks?",
      "description": "Põhjalik Next.js ja WordPress võrdlus ettevõtjale: kiirus, turvalisus, hoolduskulud ja SEO võimalused.",
      "intro": "Enam kui 15 aastat oli WordPress peaaegu iga veebilehe vaikevalik. Aga internet on muutunud: kasutajad nõuavad telefonis välkkiiresti avanevaid lehti, samas kui Google'i algoritmid karistavad aeglaseid veebilehti halastamatult. Uue põlvkonna raamistik Next.js (React'i baasil) on saanud kaasaegse tehnoloogia liidriks. Selles artiklis võrdleme mõlemat tehnoloogiat objektiivselt ettevõtja vaatenurgast.",
      "sections": [
        {
          "heading": "1. Kiirus ja Google Core Web Vitals",
          "paragraphs": [
            "Traditsiooniline WordPress töötab dünaamiliselt: iga kord, kui külastaja lehele siseneb, käivitab server PHP-koodi, teeb kümneid SQL-päringuid andmebaasi ja alles siis genereerib lehe. Isegi vahemälu-pluginatega on laadimisaeg tihti 2–5 sekundit.",
            "Next.js kasutab staatilist genereerimist (SSG / Static Site Generation) ja serveri servatehnoloogiat (Edge). Lehed valmistatakse ette juba varem ja avanevad 20–50 millisekundiga. Google PageSpeed testis saavutavad Next.js veebilehed kergesti 95–100 punkti."
          ]
        },
        {
          "heading": "2. Turvalisus ja pluginate 'põrgu'",
          "paragraphs": [
            "Keskmine WordPress-veebileht kasutab 25–40 erinevat kolmandate osapoolte pluginat (kontaktivormid, SEO, kiirus, turvalisus, tõlked). Iga plugin on potentsiaalne turva-auk — WordPress on maailma kõige sagedamini rünnatud sisuhaldussüsteem.",
            "Next.js veebilehtedel pole avatud andmebaasi ega haavatavat PHP-mootorit otse internetis. Kood on kompileeritud ja turvaline, seega ei pea sa kartma, et järgmise uuenduse järel veebileht 'kokku kukub' või saastub pahavaraga."
          ]
        },
        {
          "heading": "3. Sisuhalduse mugavus",
          "paragraphs": [
            "Levinud müüt on, et Next.js'i valides ei saa enam ise sisu hallata. Vastupidi: Next.js ühendatakse kaasaegse 'headless' sisuhaldussüsteemiga (Directus, Sanity või Strapi). Administreerimiskeskkond on palju puhtam, kiirem ja ilma WordPressi kaosele omaste reklaamteadeteta."
          ]
        },
        {
          "heading": "4. Võrdluse kokkuvõte ettevõtjale",
          "paragraphs": [
            "WordPress sobib: isiklikele mittekommertslikele blogidele või minimaalse 100 € eelarvega projektidele, kus kiirus ja turvalisus pole kriitilised.",
            "Next.js sobib: esinduslikele ettevõtte veebilehtedele, teenusepakkujatele, e-poodidele ja kasvavatele ettevõtetele, kellele on olulised laitmatu kiirus, SEO positsioonid ja pikaajaline usaldusväärsus."
          ]
        },
        {
          "heading": "5. Pikaajalised hoolduskulud — sageli unustatud tegur",
          "paragraphs": [
            "WordPress nõuab pidevat tähelepanu: iga kuu tuleb uuendada nii süsteemi ennast, teemat kui ka kõiki 25–40 pluginat. Ühe uuenduse vahelejätmine muudab veebilehe haavatavaks — just nii saastub enamik WordPress-veebilehti pahavaraga või satub otsingumootorite 'mustadesse nimekirjadesse'.",
            "Next.js veebileht ei vaja sellist pidevat 'tulekahjude kustutamist'. Kood kompileeritakse ühe korra, sõltuvusi on palju vähem ning turvaparandused piirduvad harvemate, kontrollitud uuendustega. See tähendab vähem üllatavaid arveid 'kiireloomulise taastamise eest pärast häkkimist'.",
            "Pikas perspektiivis (3–5 aastat) on Next.js veebilehe kogu omandikulu tihti väiksem kui WordPressil, hoolimata sellest, et esialgne loomiskulu võib olla mõnevõrra kõrgem."
          ]
        },
        {
          "heading": "6. Migratsiooniküsimus: kas WordPressilt Next.js'ile üleminek on võimalik?",
          "paragraphs": [
            "Jah, ja see toimub ilma sisu kaotamata. Professionaalse migratsiooni käigus kantakse kogu olemasolev sisu (tekstid, pildid, artiklid) üle uude süsteemi ning kõige tähtsam — kõik vanad URL-aadressid säilitatakse või suunatakse 301-suunamistega ümber, mistõttu Google'i otsingupositsioonid mitte ainult ei kao, vaid tavaliselt paranevad mõne aja pärast tänu oluliselt paremale kiirusele.",
            "Soovitame migratsiooni planeerida siis, kui WordPress-veebileht näitab juba selgeid vananemise märke: aeglast laadimist, sagedasi pluginate konflikte või lihtsalt ei vasta enam kaasaegse disaini standarditele."
          ]
        }
      ],
      "takeaways": [
        "Next.js tagab 5–10 korda kiirema laadimise võrreldes tavalise WordPressiga.",
        "Väiksemad pikaajalised hoolduskulud tänu nullilähedasele pluginate konfliktide riskile.",
        "Kõrgemad Google Core Web Vitals hinded parandavad otseselt otsingupositsioone.",
        "Migratsioon WordPressilt Next.js'ile võib toimuda ilma igasuguse SEO positsioonide kaotuseta."
      ]
    },
    "ru": {
      "title": "Next.js против WordPress: что выбрать для бизнес-сайта?",
      "description": "Подробное сравнение Next.js и WordPress для владельца бизнеса: скорость, безопасность, расходы на обслуживание и возможности SEO.",
      "intro": "Более 15 лет WordPress был решением по умолчанию практически для любого сайта. Но интернет изменился: пользователи требуют мгновенно открывающихся страниц на телефоне, а алгоритмы Google безжалостно штрафуют медленные сайты. Фреймворк нового поколения Next.js (на основе React) стал лидером современных технологий. В этой статье мы объективно сравниваем обе технологии с точки зрения бизнеса.",
      "sections": [
        {
          "heading": "1. Скорость и Google Core Web Vitals",
          "paragraphs": [
            "Традиционный WordPress работает динамически: при каждом заходе посетителя сервер выполняет PHP-код, делает десятки SQL-запросов к базе данных и только потом генерирует страницу. Даже с плагинами кэширования время загрузки часто достигает 2–5 секунд.",
            "Next.js использует статическую генерацию (SSG / Static Site Generation) и технологию edge-серверов. Страницы подготавливаются заранее и открываются за 20–50 миллисекунд. В тесте Google PageSpeed сайты на Next.js легко набирают 95–100 баллов."
          ]
        },
        {
          "heading": "2. Безопасность и «ад» плагинов",
          "paragraphs": [
            "Средний сайт на WordPress использует 25–40 различных сторонних плагинов (контактные формы, SEO, скорость, безопасность, переводы). Каждый плагин — это потенциальная брешь в безопасности: WordPress — самая часто атакуемая CMS в мире.",
            "На сайтах Next.js нет открытой базы данных или уязвимого PHP-движка, работающего напрямую в интернете. Код скомпилирован и безопасен, поэтому вам не нужно бояться, что после очередного обновления сайт «упадёт» или будет заражён вредоносным кодом."
          ]
        },
        {
          "heading": "3. Удобство управления контентом",
          "paragraphs": [
            "Распространён миф, что выбрав Next.js, невозможно самостоятельно управлять контентом. На самом деле всё наоборот: Next.js сочетается с современной «headless» системой управления контентом (Directus, Sanity или Strapi). Административная среда гораздо чище, быстрее и не имеет хаоса рекламных уведомлений, характерного для WordPress."
          ]
        },
        {
          "heading": "4. Итог сравнения для бизнеса",
          "paragraphs": [
            "WordPress подходит: для личных некоммерческих блогов или проектов с минимальным бюджетом от 100 €, где скорость и безопасность не критичны.",
            "Next.js подходит: имиджевым бизнес-сайтам, поставщикам услуг, интернет-магазинам и растущим компаниям, для которых важны безупречная скорость, позиции в SEO и долгосрочная надёжность."
          ]
        },
        {
          "heading": "5. Долгосрочные расходы на обслуживание — часто забываемый фактор",
          "paragraphs": [
            "WordPress требует постоянного внимания: каждый месяц нужно обновлять саму систему, тему и все 25–40 плагинов. Пропустив одно обновление, сайт становится уязвимым — именно так большинство сайтов на WordPress заражаются вредоносным кодом или попадают в «чёрные списки» поисковых систем.",
            "Сайту на Next.js такое постоянное «тушение пожаров» не требуется. Код компилируется один раз, зависимостей значительно меньше, а исправления безопасности ограничиваются более редкими, контролируемыми обновлениями. Это означает меньше неожиданных счетов за «срочное восстановление сайта после взлома».",
            "В долгосрочной перспективе (3–5 лет) общая стоимость владения сайтом на Next.js часто оказывается ниже, чем WordPress, несмотря на то, что первоначальная стоимость разработки может быть немного выше."
          ]
        },
        {
          "heading": "6. Вопрос миграции: можно ли перейти с WordPress на Next.js?",
          "paragraphs": [
            "Да, и это происходит без потери контента. В ходе профессиональной миграции весь существующий контент (тексты, фотографии, статьи) переносится в новую систему, а главное — все старые URL-адреса сохраняются или перенаправляются через 301-редиректы, поэтому позиции в поиске Google не только не теряются, но чаще всего со временем улучшаются благодаря значительно более высокой скорости.",
            "Мы рекомендуем планировать миграцию тогда, когда сайт на WordPress уже показывает явные признаки устаревания: медленную загрузку, частые конфликты плагинов или просто не соответствует современным стандартам дизайна."
          ]
        }
      ],
      "takeaways": [
        "Next.js обеспечивает загрузку в 5–10 раз быстрее по сравнению со стандартным WordPress.",
        "Меньшие долгосрочные расходы на обслуживание благодаря нулевому риску конфликтов плагинов.",
        "Более высокие баллы Google Core Web Vitals напрямую улучшают позиции в поиске.",
        "Миграция с WordPress на Next.js может пройти без какой-либо потери позиций в SEO."
      ]
    }
  },
  "svetaines-atnaujinimas-kada-verta": {
    "en": {
      "title": "When is it worth redesigning an outdated website: 7 clear warning signs",
      "description": "How to tell that your website is driving customers away, and when a redesign pays off the fastest.",
      "intro": "A website is your business's digital office or storefront. If your real-world office is tidy, yet your website looks like it was built in 2016, a potential customer forms the wrong impression about the quality of your services before the first phone call even happens. Here are 7 clear signs that a website redesign is overdue.",
      "sections": [
        {
          "heading": "1. 7 signs it's time to redesign your website",
          "paragraphs": [
            "1. Poor performance on mobile: More than 70% of users browse on smartphones today. If the text is too small, buttons are hard to tap, and forms break on mobile, you're losing the bulk of your inquiries.",
            "2. Visitors arrive but no inquiries come in (low conversion): If you see visitor traffic in Google Analytics but aren't getting calls or emails, the problem is a confusing structure, an unclear offer, or a complicated contact form.",
            "3. Slow load time (over 3 seconds): Studies show that if a page takes longer than 3 seconds to load, 40% of users go back to Google and pick a competitor.",
            "4. You can't update information yourself: If changing a phone number or uploading a new photo means tracking down your old developer and waiting weeks, your website is technically outdated.",
            "5. Browser security warnings: A missing or misconfigured SSL certificate scares visitors away with a 'Not secure' warning.",
            "6. Falling Google search rankings: Google's algorithms constantly raise technical requirements. Outdated websites are gradually pushed to the second and third page of search results.",
            "7. Visual datedness: Design trends change. A bright, spacious, minimalist design builds trust and creates a professional impression."
          ]
        },
        {
          "heading": "2. How to redesign a website without losing SEO rankings",
          "paragraphs": [
            "The critical mistake when redesigning a website is changing page URLs without 301 redirects. If a page on the old site ranked well in Google, changing its address without a redirect will result in Google seeing a 404 error and dropping you from search results.",
            "During a professional redesign, a full map of all old URLs is drawn up and 301 redirects are configured, so existing rankings aren't just preserved — they usually improve after the redesign thanks to better speed."
          ]
        },
        {
          "heading": "3. Partial refresh or full rebuild — how to decide?",
          "paragraphs": [
            "A partial refresh (design refresh, speed optimization, adding new pages to the existing structure) works well when the site's technical foundation is still adequate but it needs a visual and content update. This is the cheaper and faster path.",
            "A full rebuild is needed when the site is built on outdated technology (old WordPress, static HTML with no admin capability at all) or when the structure no longer matches your current business offering. In that case it's worth treating the redesign as a new project with content migration, rather than as a 'fix'."
          ]
        },
        {
          "heading": "4. What to expect during the redesign process",
          "paragraphs": [
            "First, an analysis of the existing website is carried out: which pages get the most traffic from Google, which URLs need to be preserved, and which information is outdated or no longer relevant.",
            "Then a new structure and design are planned, content is migrated and updated, redirects are configured, and only then is the site launched publicly. We recommend carrying out the whole process in a separate staging environment, so the main website keeps running uninterrupted right up until launch."
          ]
        }
      ],
      "takeaways": [
        "A website redesign is an investment in increasing conversions, not just a cosmetic change.",
        "You must preserve old URLs with 301 redirects so you don't lose Google traffic.",
        "Mobile usability and load speed should be the top priorities of any redesign.",
        "Before choosing between a partial refresh and a full rebuild, assess whether the problem is technical or purely visual."
      ]
    },
    "pl": {
      "title": "Kiedy warto zaktualizować przestarzałą stronę: 7 wyraźnych sygnałów",
      "description": "Jak rozpoznać, że Twoja strona odstrasza klientów i kiedy aktualizacja zwraca się najszybciej.",
      "intro": "Strona internetowa jest cyfrowym biurem lub witryną Twojej firmy. Jeśli w realnym życiu Twoje biuro jest zadbane, a strona internetowa wygląda, jakby powstała w 2016 roku, potencjalny klient wyrabia sobie błędne wyobrażenie o jakości Twoich usług jeszcze przed pierwszym kontaktem. Oto 7 wyraźnych sygnałów wskazujących, że aktualizacja strony jest pilna.",
      "sections": [
        {
          "heading": "1. 7 sygnałów, że czas zaktualizować stronę",
          "paragraphs": [
            "1. Słabe działanie na telefonie: Ponad 70% użytkowników dziś przegląda internet na smartfonach. Jeśli na telefonie tekst jest zbyt mały, przyciski trudno kliknąć, a formularze się psują — tracisz większość zapytań.",
            "2. Odwiedzający przychodzą, ale zapytań brak (niska konwersja): Jeśli w Google Analytics widzisz ruch na stronie, ale nie otrzymujesz telefonów ani wiadomości, problemem jest zawiła struktura, niejasna oferta lub skomplikowany formularz kontaktowy.",
            "3. Wolny czas ładowania (> 3 sekundy): Badania pokazują, że jeśli strona ładuje się dłużej niż 3 sekundy, 40% użytkowników wraca do Google i wybiera konkurenta.",
            "4. Nie możesz samodzielnie zmienić informacji: Jeśli aby zmienić numer telefonu lub dodać nowe zdjęcie, musisz szukać dawnego programisty i czekać tygodniami, Twoja strona jest technicznie przestarzała.",
            "5. Ostrzeżenia bezpieczeństwa w przeglądarce: Brakujący lub źle skonfigurowany certyfikat SSL straszy odwiedzających komunikatem „Strona niezabezpieczona”.",
            "6. Spadające pozycje w wyszukiwarce Google: Algorytmy Google nieustannie zaostrzają wymagania techniczne. Przestarzałe strony są stopniowo spychane na drugą i trzecią stronę wyników wyszukiwania.",
            "7. Wizualne przestarzenie: Trendy w designie się zmieniają. Jasny, przestronny, minimalistyczny design buduje zaufanie i tworzy wizerunek profesjonalizmu."
          ]
        },
        {
          "heading": "2. Jak zaktualizować stronę bez utraty pozycji SEO?",
          "paragraphs": [
            "Krytycznym błędem podczas aktualizacji strony jest zmiana adresów URL bez przekierowań 301. Jeśli stara podstrona była dobrze pozycjonowana w Google, a po zmianie adresu bez przekierowania Google otrzyma błąd 404, usunie Cię z wyników wyszukiwania.",
            "Podczas profesjonalnej aktualizacji tworzona jest mapa wszystkich starych adresów i konfigurowane są przekierowania 301, dzięki czemu obecne pozycje nie tylko są zachowane, ale po aktualizacji zwykle się poprawiają dzięki lepszej szybkości."
          ]
        },
        {
          "heading": "3. Aktualizacja etapowa czy całkowita — jak zdecydować?",
          "paragraphs": [
            "Aktualizacja etapowa (odświeżenie designu, optymalizacja szybkości, dodanie nowych podstron do istniejącej struktury) sprawdza się, gdy podstawa strony jest wciąż technologicznie adekwatna, ale potrzebna jest odnowa wizualna i treściowa. To tańsza i szybsza droga.",
            "Całkowita przebudowa jest konieczna, gdy strona zbudowana jest w przestarzałej technologii (stary WordPress, statyczny HTML bez żadnej możliwości administrowania) lub struktura nie odpowiada już obecnym usługom firmy. W takim przypadku warto potraktować aktualizację jako nowy projekt z migracją treści, a nie jako „poprawkę”."
          ]
        },
        {
          "heading": "4. Czego się spodziewać w trakcie procesu aktualizacji?",
          "paragraphs": [
            "Najpierw przeprowadzana jest analiza obecnej strony: które podstrony generują najwięcej ruchu z Google, które adresy URL muszą być zachowane, jakie informacje są przestarzałe lub nieaktualne.",
            "Następnie projektowana jest nowa struktura i design, przenoszona i aktualizowana jest treść, konfigurowane są przekierowania, i dopiero wtedy strona jest publikowana. Cały proces zaleca się przeprowadzić w osobnym środowisku testowym, aby główna strona działała nieprzerwanie aż do momentu uruchomienia."
          ]
        }
      ],
      "takeaways": [
        "Aktualizacja strony to inwestycja w zwiększenie konwersji, a nie tylko kosmetyczna zmiana.",
        "Konieczne jest zachowanie starych adresów URL poprzez przekierowania 301, aby nie stracić ruchu z Google.",
        "Wygoda mobilna i szybkość ładowania powinny być najważniejszymi priorytetami aktualizacji.",
        "Przed wyborem między aktualizacją etapową a całkowitą przebudową oceń, czy problem jest technologiczny, czy tylko wizualny."
      ]
    },
    "lv": {
      "title": "Kad ir vērts atjaunināt novecojušu mājaslapu: 7 skaidras pazīmes",
      "description": "Kā saprast, ka jūsu mājaslapa atbaida klientus un kad atjaunināšana atmaksājas visātrāk.",
      "intro": "Interneta vietne ir jūsu biznesa digitālais birojs jeb vitrīna. Ja reālajā dzīvē jūsu birojs ir sakārtots, bet mājaslapa internetā izskatās, it kā izveidota 2016. gadā, potenciālais klients izveido kļūdainu iespaidu par jūsu pakalpojumu kvalitāti jau pirms pirmā zvana. Lūk, 7 skaidras pazīmes, kas liecina, ka mājaslapas atjaunināšana ir neatliekama.",
      "sections": [
        {
          "heading": "1. 7 signāli, ka pienācis laiks atjaunināt mājaslapu",
          "paragraphs": [
            "1. Slikta darbība telefonā: Vairāk nekā 70% lietotāju šodien pārlūko internetu ar viedtālruņiem. Ja telefonā teksts ir pārāk sīks, pogas grūti nospiežamas, bet formas 'lūst' — jūs zaudējat lielāko daļu pieprasījumu.",
            "2. Apmeklētāji nāk, bet pieprasījumu nav (zema konversija): Ja Google Analytics redzat apmeklētāju plūsmu, bet zvanu vai vēstuļu nesagaidāt, problēma ir mulsinoša struktūra, neskaidrs piedāvājums vai sarežģīta kontaktu forma.",
            "3. Lēns ielādes laiks (> 3 sekundes): Pētījumi rāda, ka, ja lapa ielādējas ilgāk par 3 sekundēm, 40% lietotāju atgriežas atpakaļ pie Google un izvēlas konkurentu.",
            "4. Nevarat paši mainīt informāciju: Ja, lai mainītu tālruņa numuru vai augšupielādētu jaunu fotogrāfiju, jāmeklē bijušais izstrādātājs un jāgaida nedēļām, jūsu mājaslapa ir tehniski novecojusi.",
            "5. Drošības brīdinājumi pārlūkā: Trūkstošs vai nepareizi konfigurēts SSL sertifikāts baida apmeklētājus ar uzrakstu 'Vietne nav droša'.",
            "6. Krītošas Google meklēšanas pozīcijas: Google algoritmi pastāvīgi paaugstina tehniskās prasības. Novecojušas mājaslapas pamazām tiek nobīdītas uz otro un trešo meklēšanas lapu.",
            "7. Vizuāla novecošana: Dizaina tendences mainās. Gaišs, plašs, minimālistisks dizains rada uzticību un profesionalitātes iespaidu."
          ]
        },
        {
          "heading": "2. Kā atjaunināt mājaslapu, nezaudējot SEO pozīcijas?",
          "paragraphs": [
            "Kritiska kļūda, atjauninot mājaslapu, — mainīt lapu adreses (URL) bez 301 novirzīšanas. Ja vecās mājaslapas lapa bija labi reitingota Google, mainot adresi bez novirzīšanas, Google saņems 404 kļūdu un izslēgs jūs no meklēšanas.",
            "Profesionālas atjaunināšanas laikā tiek sastādīta visu veco adrešu karte un konfigurēta 301 novirzīšana, tāpēc esošās pozīcijas ne tikai tiek saglabātas, bet pēc atjaunināšanas parasti pat pieaug, pateicoties labākam ātrumam."
          ]
        },
        {
          "heading": "3. Pakāpeniska vai pilnīga atjaunināšana — kā izlemt?",
          "paragraphs": [
            "Pakāpeniska atjaunināšana (dizaina atsvaidzināšana, ātruma optimizācija, jaunu lapu pievienošana esošajai struktūrai) piemērota, kad mājaslapas pamats tehnoloģiski vēl ir adekvāts, bet nepieciešams vizuāls un satura atjauninājums. Tas ir lētāks un ātrāks ceļš.",
            "Pilnīga pārbūve nepieciešama, kad mājaslapa izveidota ar novecojušu tehnoloģiju (vecs WordPress, statisks HTML bez jebkādas administrēšanas iespējas) vai struktūra vairs neatbilst pašreizējiem biznesa pakalpojumiem. Šādā gadījumā uz atjaunināšanu ir vērts skatīties kā uz jaunu projektu ar satura migrāciju, nevis kā uz 'labojumu'."
          ]
        },
        {
          "heading": "4. Ko sagaidīt atjaunināšanas procesa laikā?",
          "paragraphs": [
            "Vispirms tiek veikta esošās mājaslapas analīze: kuras lapas saņem visvairāk plūsmas no Google, kuras URL adreses jāsaglabā, kāda informācija ir novecojusi vai vairs neaktuāla.",
            "Tad tiek izstrādāta jauna struktūra un dizains, pārnests un atjaunināts saturs, konfigurēta novirzīšana, un tikai pēc tam mājaslapa tiek publiskota. Visu procesu ieteicams veikt atsevišķā testa vidē, lai galvenā mājaslapa darbotos nepārtraukti līdz pat palaišanas brīdim."
          ]
        }
      ],
      "takeaways": [
        "Mājaslapas atjaunināšana ir investīcija konversiju palielināšanā, nevis tikai kosmētiska izmaiņa.",
        "Nepieciešams saglabāt vecās URL adreses ar 301 novirzīšanu, lai nezaudētu Google plūsmu.",
        "Mobilā ērtība un ielādes ātrums jāizvirza kā svarīgākās atjaunināšanas prioritātes.",
        "Pirms izlemjat starp pakāpenisku un pilnīgu pārbūvi, izvērtējiet, vai problēma ir tehnoloģiska, vai tikai vizuāla."
      ]
    },
    "et": {
      "title": "Millal tasub vananenud veebileht uuendada: 7 selget tunnust",
      "description": "Kuidas mõista, et sinu veebileht peletab kliente eemale ja millal uuendus end kõige kiiremini ära tasub.",
      "intro": "Veebileht on sinu ettevõtte digitaalne kontor ehk vaateaken. Kui su päris kontor on korras, aga veebileht näeb välja, nagu oleks loodud 2016. aastal, tekib potentsiaalsel kliendil vale mulje sinu teenuste kvaliteedist juba enne esimest kõnet. Siin on 7 selget tunnust, mis näitavad, et veebilehe uuendamine on hädavajalik.",
      "sections": [
        {
          "heading": "1. 7 märki, et veebilehte on aeg uuendada",
          "paragraphs": [
            "1. Kehv toimimine telefonis: Rohkem kui 70% kasutajatest sirvib täna internetti nutitelefonis. Kui telefonis on tekst liiga väike, nuppe on raske vajutada ja vormid ei tööta korralikult — kaotad suure osa päringutest.",
            "2. Külastajaid on, aga päringuid pole (madal konversioon): Kui näed Google Analyticsis külastajate liiklust, aga kõnesid või kirju ei tule, on probleem segases struktuuris, ebaselges pakkumises või keerulises kontaktivormis.",
            "3. Aeglane laadimisaeg (> 3 sekundit): Uuringud näitavad, et kui leht laadib kauem kui 3 sekundit, pöördub 40% kasutajatest tagasi Google'isse ja valib konkurendi.",
            "4. Sa ei saa ise infot muuta: Kui telefoninumbri muutmiseks või uue foto lisamiseks tuleb otsida taga vana arendajat ja oodata nädalaid, on sinu veebileht tehniliselt vananenud.",
            "5. Turvahoiatused brauseris: Puuduv või valesti seadistatud SSL-sertifikaat hirmutab külastajaid teatega 'Veebileht pole turvaline'.",
            "6. Langevad Google'i otsingupositsioonid: Google'i algoritmid karmistavad pidevalt tehnilisi nõudeid. Vananenud veebilehed lükatakse aegamööda otsingu teisele ja kolmandale lehele.",
            "7. Visuaalne vananemine: Disainitrendid muutuvad. Hele, avar, minimalistlik disain tekitab usaldust ja loob professionaalse mulje."
          ]
        },
        {
          "heading": "2. Kuidas uuendada veebilehte ilma SEO positsioone kaotamata?",
          "paragraphs": [
            "Kriitiline viga veebilehe uuendamisel on lehtede aadresside (URL) muutmine ilma 301-suunamisteta. Kui vana veebilehe leht oli Google'is hästi reastatud, saab pärast aadressi muutmist ilma suunamiseta Google 404-vea ja eemaldab su otsingust.",
            "Professionaalse uuenduse käigus koostatakse kõikide vanade aadresside kaart ja seadistatakse 301-suunamised, mistõttu olemasolevad positsioonid mitte ainult ei säili, vaid pärast uuendust tavaliselt paranevad tänu paremale kiirusele."
          ]
        },
        {
          "heading": "3. Etapiviisiline või täielik uuendus — kuidas otsustada?",
          "paragraphs": [
            "Etapiviisiline uuendus (disaini värskendamine, kiiruse optimeerimine, uute lehtede lisamine olemasolevale struktuurile) sobib, kui veebilehe tehniline alus on veel adekvaatne, kuid vajab visuaalset ja sisulist uuendamist. See on odavam ja kiirem tee.",
            "Täielik ümberehitus on vajalik, kui veebileht on loodud vananenud tehnoloogiaga (vana WordPress, staatiline HTML ilma haldusvõimaluseta) või struktuur ei vasta enam praegustele äriteenustele. Sellisel juhul tasub uuendust vaadata kui uut projekti koos sisu migreerimisega, mitte kui 'parandust'."
          ]
        },
        {
          "heading": "4. Mida oodata uuendusprotsessi ajal?",
          "paragraphs": [
            "Kõigepealt analüüsitakse olemasolevat veebilehte: millised lehed saavad Google'ist kõige rohkem liiklust, millised URL-aadressid tuleb säilitada, milline info on vananenud või pole enam aktuaalne.",
            "Seejärel kavandatakse uus struktuur ja disain, kantakse üle ja uuendatakse sisu, seadistatakse suunamised ning alles siis avaldatakse veebileht avalikult. Kogu protsessi soovitatakse läbi viia eraldi testkeskkonnas, et põhiveebileht töötaks katkematult kuni avaldamise hetkeni."
          ]
        }
      ],
      "takeaways": [
        "Veebilehe uuendamine on investeering konversioonide suurendamisse, mitte lihtsalt kosmeetiline muudatus.",
        "Vanad URL-aadressid tuleb kindlasti säilitada 301-suunamiste abil, et mitte kaotada Google'i liiklust.",
        "Mobiilne mugavus ja laadimiskiirus peavad olema uuenduse tähtsaimad prioriteedid.",
        "Enne etapiviisilise ja täieliku ümberehituse vahel valimist hinda, kas probleem on tehnoloogiline või ainult visuaalne."
      ]
    },
    "ru": {
      "title": "Когда стоит обновлять устаревший сайт: 7 явных признаков",
      "description": "Как понять, что ваш сайт отпугивает клиентов, и когда обновление окупается быстрее всего.",
      "intro": "Сайт — это цифровой офис или витрина вашего бизнеса. Если в реальной жизни ваш офис ухожен, а сайт в интернете выглядит так, будто создан в 2016 году, потенциальный клиент составит ошибочное впечатление о качестве ваших услуг ещё до первого звонка. Вот 7 явных признаков, указывающих на то, что обновление сайта нельзя откладывать.",
      "sections": [
        {
          "heading": "1. 7 сигналов, что пора обновить сайт",
          "paragraphs": [
            "1. Плохая работа на телефоне: сегодня более 70% пользователей заходят в интернет со смартфонов. Если на телефоне текст слишком мелкий, кнопки трудно нажимать, а формы ломаются — вы теряете большую часть заявок.",
            "2. Посетители приходят, но заявок нет (низкая конверсия): если вы видите трафик в Google Analytics, но звонков или писем не получаете, проблема в запутанной структуре, неясном предложении или сложной контактной форме.",
            "3. Медленная загрузка (> 3 секунд): исследования показывают, что если страница грузится дольше 3 секунд, 40% пользователей возвращаются в Google и выбирают конкурента.",
            "4. Вы не можете сами изменить информацию: если для изменения номера телефона или загрузки новой фотографии нужно искать бывшего программиста и ждать неделями, ваш сайт технически устарел.",
            "5. Предупреждения о безопасности в браузере: отсутствующий или неправильно настроенный SSL-сертификат пугает посетителей надписью «Сайт небезопасен».",
            "6. Падающие позиции в поиске Google: алгоритмы Google постоянно ужесточают технические требования. Устаревшие сайты постепенно вытесняются на вторую и третью страницу поиска.",
            "7. Визуальное устаревание: тенденции дизайна меняются. Светлый, просторный, минималистичный дизайн повышает доверие и создаёт образ профессионализма."
          ]
        },
        {
          "heading": "2. Как обновить сайт без потери позиций в SEO?",
          "paragraphs": [
            "Критическая ошибка при обновлении сайта — изменение адресов страниц (URL) без 301-редиректов. Если старая страница сайта хорошо ранжировалась в Google, то после смены адреса без редиректа Google получит ошибку 404 и уберёт вас из поиска.",
            "В ходе профессионального обновления составляется карта всех старых адресов и настраиваются 301-редиректы, поэтому существующие позиции не только сохраняются, но после обновления чаще всего повышаются благодаря более высокой скорости."
          ]
        },
        {
          "heading": "3. Поэтапное или полное обновление — как решить?",
          "paragraphs": [
            "Поэтапное обновление (обновление дизайна, оптимизация скорости, добавление новых страниц к существующей структуре) подходит, когда технологическая база сайта ещё адекватна, но нужно визуальное и контентное обновление. Это более дешёвый и быстрый путь.",
            "Полное пересоздание необходимо, когда сайт создан на устаревшей технологии (старый WordPress, статический HTML без какой-либо возможности управления) или структура больше не соответствует текущим бизнес-услугам. В этом случае стоит рассматривать обновление как новый проект с миграцией контента, а не как «починку»."
          ]
        },
        {
          "heading": "4. Чего ожидать в процессе обновления?",
          "paragraphs": [
            "Сначала проводится анализ существующего сайта: какие страницы получают больше всего трафика из Google, какие URL-адреса необходимо сохранить, какая информация устарела или больше не актуальна.",
            "Затем проектируется новая структура и дизайн, переносится и обновляется контент, настраиваются редиректы, и только после этого сайт публикуется. Весь процесс рекомендуется проводить в отдельной тестовой среде, чтобы основной сайт работал бесперебойно вплоть до момента запуска."
          ]
        }
      ],
      "takeaways": [
        "Обновление сайта — это инвестиция в рост конверсий, а не просто косметическое изменение.",
        "Необходимо сохранить старые URL-адреса через 301-редиректы, чтобы не потерять трафик из Google.",
        "Удобство на мобильных устройствах и скорость загрузки должны быть главными приоритетами обновления.",
        "Прежде чем выбирать между поэтапным обновлением и полным пересозданием, оцените, техническая проблема это или лишь визуальная."
      ]
    }
  },
  "vietinis-seo-verslui": {
    "en": {
      "title": "Local SEO: how can a service business rank on the first page of Google?",
      "description": "A practical guide for service tradespeople and companies on being found in their city and district.",
      "intro": "When someone's car breaks down, or they need a tiler, a dentist, or a lawyer, they rarely browse social media — they open Google and type: 'bathroom renovation Vilnius', 'car service Kaunas', or 'dentist Klaipėda'. Local SEO is the most powerful way to reach the hottest, most ready-to-buy customers.",
      "sections": [
        {
          "heading": "1. Google Business Profile (formerly Google My Business)",
          "paragraphs": [
            "The first and most important step is to create and verify your company's profile on Google Maps. Fill in every field: your exact company name, the areas you serve, business hours, a price list of your services, and high-quality photos.",
            "The importance of reviews: Regularly ask satisfied customers to leave a Google review. Reply to every review — Google's algorithms treat this as a sign of an active, trustworthy business."
          ]
        },
        {
          "heading": "2. Website structure for local SEO",
          "paragraphs": [
            "Naturally use the cities and regions you serve throughout your text and meta tags.",
            "Add Schema.org 'LocalBusiness' or 'ProfessionalService' structured data, specifying the country, city, business hours, and email you serve.",
            "Create a clear contact page with an interactive map and clickable phone numbers."
          ]
        },
        {
          "heading": "3. NAP consistency — an often-overlooked factor",
          "paragraphs": [
            "NAP (Name, Address, Phone) means your company name, address, and phone number must be written identically everywhere online: on your website, your Google Business Profile, your Facebook page, and in various business directories (manodarbas.lt, 118.lt, and similar).",
            "If one page says 'UAB Pavyzdys' and another says 'Pavyzdys UAB' with a differently formatted phone number, Google's algorithms find it harder to link these entries to the same company, which weakens the trustworthiness of your local search results."
          ]
        },
        {
          "heading": "4. Serving multiple cities or districts",
          "paragraphs": [
            "If you provide services in several cities or districts (e.g. Vilnius, Kaunas, and surrounding areas), the most effective strategy is to create a separate page with unique content for each main service region, rather than one generic 'We serve all of Lithuania' text.",
            "Each such page should include at least a few unique sentences about that specific region — for example, mentioning the districts or streets where you work — so that Google doesn't treat the pages as duplicate content."
          ]
        }
      ],
      "takeaways": [
        "Local SEO attracts customers with the highest purchase intent.",
        "Google Business Profile and reviews are the direct key to the top of the 'Google 3-Pack' map results.",
        "A technically well-built website helps you outrank competitors even without expensive advertising.",
        "Keep the exact same company name, address, and phone format across every source online."
      ]
    },
    "pl": {
      "title": "Lokalne SEO: jak firma usługowa może zdobyć czołowe pozycje w Google?",
      "description": "Praktyczny przewodnik, jak fachowcy i firmy usługowe mogą być łatwo znajdowani w swoim mieście i regionie.",
      "intro": "Kiedy komuś psuje się samochód, potrzebuje glazurnika, dentysty lub prawnika, rzadko przegląda media społecznościowe — otwiera Google i wpisuje: „remont łazienki Wilno”, „warsztat samochodowy Kowno” lub „dentysta Kłajpeda”. Lokalne SEO (Local SEO) to najpotężniejszy sposób na pozyskanie klientów najbardziej gotowych do zakupu.",
      "sections": [
        {
          "heading": "1. Google Business Profile (dawniej Google My Business)",
          "paragraphs": [
            "Pierwszym i najważniejszym krokiem jest stworzenie i zweryfikowanie profilu firmy w Mapach Google. Wypełnij wszystkie pola: dokładną nazwę firmy, obsługiwane obszary, godziny pracy, cennik usług i wysokiej jakości zdjęcia.",
            "Znaczenie opinii: Regularnie proś zadowolonych klientów o pozostawienie opinii w Google. Odpowiadaj na każdą opinię — algorytmy Google traktują to jako oznakę aktywnej, wiarygodnej firmy."
          ]
        },
        {
          "heading": "2. Struktura strony dla lokalnego SEO",
          "paragraphs": [
            "W tekstach i meta znacznikach naturalnie używaj nazw miast i regionów, w których świadczysz usługi.",
            "Wdróż dane strukturalne Schema.org typu „LocalBusiness” lub „ProfessionalService”, wskazując obsługiwany kraj, miasto, godziny pracy i adres e-mail.",
            "Stwórz przejrzystą podstronę kontaktową z interaktywną mapą i klikalnymi numerami telefonów."
          ]
        },
        {
          "heading": "3. Spójność NAP — często niedostrzegany czynnik",
          "paragraphs": [
            "NAP (Name, Address, Phone) oznacza, że nazwa Twojej firmy, adres i numer telefonu muszą być zapisane identycznie wszędzie w internecie: na stronie, w profilu Google Business, na stronie Facebook i w różnych katalogach firm (odpowiedniki manodarbas.lt, 118.lt itp.).",
            "Jeśli na jednej podstronie napiszesz „Firma Przykład Sp. z o.o.”, a na innej — „Przykład Sp. z o.o.” z innym formatem telefonu, algorytmom Google trudniej powiązać te wpisy z tą samą firmą, co osłabia wiarygodność Twojego lokalnego wyniku wyszukiwania."
          ]
        },
        {
          "heading": "4. Obsługa kilku miast lub regionów",
          "paragraphs": [
            "Jeśli świadczysz usługi w kilku miastach lub regionach (np. w Wilnie, Kownie i okolicznych rejonach), najskuteczniejszą strategią jest stworzenie osobnej podstrony z unikalną treścią dla każdego głównego regionu obsługi, a nie jednego ogólnego tekstu „Obsługujemy całą Litwę”.",
            "Każda taka podstrona powinna zawierać przynajmniej kilka unikalnych zdań o konkretnym regionie — np. wymienione dzielnice lub ulice, na których pracujesz — aby Google nie uznał podstron za zduplikowaną treść."
          ]
        }
      ],
      "takeaways": [
        "Lokalne SEO przyciąga klientów o najwyższej intencji zakupowej.",
        "Google Business Profile i opinie to bezpośredni klucz do szczytu „Google 3-Pack” na mapie.",
        "Technicznie uporządkowana strona pomaga wyprzedzić konkurencję nawet bez drogiej reklamy.",
        "Zachowuj jednolity format nazwy firmy, adresu i telefonu we wszystkich źródłach internetowych."
      ]
    },
    "lv": {
      "title": "Vietējais SEO: kā pakalpojumu biznesam ieņemt pirmās Google pozīcijas?",
      "description": "Praktisks ceļvedis, kā pakalpojumu meistariem un uzņēmumiem kļūt atrodamiem savā pilsētā un rajonā.",
      "intro": "Kad cilvēkam salūst automašīna, ir nepieciešams flīzētājs, zobārsts vai jurists, viņš reti pārlūko sociālos tīklus — viņš atver Google un ievada: 'vannas istabas remonts Viļņā', 'autoserviss Kauņā' vai 'zobārsts Klaipēdā'. Vietējais SEO (Local SEO) ir spēcīgākais veids, kā iegūt vissiltākos, jau pirkšanai gatavos klientus.",
      "sections": [
        {
          "heading": "1. Google Business Profile (bijušais Google My Business)",
          "paragraphs": [
            "Pirmais un svarīgākais solis — izveidot un verificēt sava uzņēmuma profilu Google kartēs. Aizpildiet visus laukus: precīzu uzņēmuma nosaukumu, apkalpojamās teritorijas, darba laiku, pakalpojumu cenrādi un kvalitatīvas fotogrāfijas.",
            "Atsauksmju nozīme: Regulāri lūdziet apmierinātus klientus atstāt atsauksmi Google. Atbildiet uz katru atsauksmi — Google algoritmi to vērtē kā aktīvu, uzticamu biznesu."
          ]
        },
        {
          "heading": "2. Mājaslapas struktūra vietējam SEO",
          "paragraphs": [
            "Tekstos un meta tagos dabiski izmantojiet pilsētas un reģionus, kuros sniedzat pakalpojumus.",
            "Integrējiet Schema.org 'LocalBusiness' vai 'ProfessionalService' strukturētos datus, norādot apkalpoto valsti, pilsētu, darba laiku un e-pastu.",
            "Izveidojiet skaidru kontaktu lapu ar interaktīvu karti un nospiežamiem tālruņa numuriem."
          ]
        },
        {
          "heading": "3. NAP konsekvence — bieži nepamanīts faktors",
          "paragraphs": [
            "NAP (Name, Address, Phone) nozīmē, ka jūsu uzņēmuma nosaukumam, adresei un tālruņa numuram jābūt identiski uzrakstītiem visur internetā: mājaslapā, Google Business profilā, Facebook lapā un dažādos biznesa katalogos (līdzīgi kā manodarbas.lt, 118.lt un citos).",
            "Ja vienā lapā rakstāt 'SIA Piemērs', bet citā — 'Piemērs SIA' ar citādu tālruņa formātu, Google algoritmiem ir grūtāk saistīt šos ierakstus ar to pašu uzņēmumu, un tas vājina jūsu vietējā meklēšanas rezultāta uzticamību."
          ]
        },
        {
          "heading": "4. Vairāku pilsētu vai rajonu apkalpošana",
          "paragraphs": [
            "Ja pakalpojumus sniedzat vairākās pilsētās vai rajonos (piem., Viļņā, Kauņā un apkārtējos rajonos), efektīvākā stratēģija — katram galvenajam apkalpošanas reģionam izveidot atsevišķu, ar unikālu saturu balstītu lapu, nevis vienu vispārīgu tekstu 'Apkalpojam visu Lietuvu'.",
            "Katrā šādā lapā vajadzētu būt vismaz dažiem unikāliem teikumiem par konkrēto reģionu — piem., minētiem rajoniem vai ielām, kurās strādājat — lai Google neuzskatītu lapas par dublētu saturu."
          ]
        }
      ],
      "takeaways": [
        "Vietējais SEO piesaista klientus ar vislielāko pirkšanas nodomu.",
        "Google Business Profile un atsauksmes ir tiešā atslēga uz 'Google 3-Pack' kartes virsotni.",
        "Tehniski sakārtota mājaslapa palīdz apsteigt konkurentus pat bez dārgas reklāmas.",
        "Ievērojiet vienādu uzņēmuma nosaukuma, adreses un tālruņa formātu visos interneta avotos."
      ]
    },
    "et": {
      "title": "Kohalik SEO: kuidas teenindusettevõte saab Google'i esikohad?",
      "description": "Praktiline juhend, kuidas meistrid ja ettevõtted saavad olla leitavad oma linnas ja piirkonnas.",
      "intro": "Kui inimesel läheb auto rikki, tal on vaja plaatimismeistrit, hambaarsti või juristi, ei sirvi ta tavaliselt sotsiaalmeediat — ta avab Google'i ja sisestab: 'vannitoa remont Tallinn', 'autoteenindus Tartu' või 'hambaarst Pärnu'. Kohalik SEO (Local SEO) on võimsaim viis leida kõige kuumemaid, ostuvalmis kliente.",
      "sections": [
        {
          "heading": "1. Google Business Profile (endine Google My Business)",
          "paragraphs": [
            "Esimene ja kõige tähtsam samm — luua ja verifitseerida oma ettevõtte profiil Google Kaartidel. Täida kõik väljad: täpne ettevõtte nimi, teenindatavad piirkonnad, lahtiolekuajad, teenuste hinnakiri ja kvaliteetsed fotod.",
            "Arvustuste tähtsus: Palu regulaarselt rahulolevatel klientidel jätta Google'i arvustus. Vasta igale arvustusele — Google'i algoritmid hindavad seda kui aktiivset, usaldusväärset ettevõtet."
          ]
        },
        {
          "heading": "2. Veebilehe struktuur kohalikuks SEO-ks",
          "paragraphs": [
            "Kasuta tekstides ja meta-siltides loomulikult linnu ja piirkondi, kus pakud teenuseid.",
            "Integreeri Schema.org 'LocalBusiness' või 'ProfessionalService' struktureeritud andmed, näidates teenindatavat riiki, linna, lahtiolekuaega ja e-posti.",
            "Loo selge kontaktileht interaktiivse kaardi ja klikitavate telefoninumbritega."
          ]
        },
        {
          "heading": "3. NAP järjepidevus — sageli tähelepanuta jäetud tegur",
          "paragraphs": [
            "NAP (Name, Address, Phone) tähendab, et sinu ettevõtte nimi, aadress ja telefoninumber peavad olema kirjutatud täpselt ühtemoodi kõikjal internetis: veebilehel, Google Business profiilil, Facebooki lehel ja erinevates ettevõtete kataloogides.",
            "Kui ühel lehel kirjutad 'OÜ Näide' ja teisel 'Näide OÜ' erineva telefoniformaadiga, on Google'i algoritmidel raskem neid kandeid sama ettevõttega siduda ning see nõrgendab sinu kohaliku otsingutulemuse usaldusväärsust."
          ]
        },
        {
          "heading": "4. Mitme linna või piirkonna teenindamine",
          "paragraphs": [
            "Kui pakud teenuseid mitmes linnas või piirkonnas (nt Tallinnas, Tartus ja ümberkaudsetes valdades), on kõige tõhusam strateegia luua igale peamisele teeninduspiirkonnale eraldi, unikaalsel sisul põhinev leht, mitte üks üldine 'Teenindame kogu Eestit' tekst.",
            "Igal sellisel lehel peaks olema vähemalt paar unikaalset lauset konkreetse piirkonna kohta — näiteks mainitud linnaosad või tänavad, kus töötad — et Google ei peaks lehti dubleeritud sisuks."
          ]
        }
      ],
      "takeaways": [
        "Kohalik SEO toob kliente, kellel on suurim ostukavatsus.",
        "Google Business Profile ja arvustused on otsene võti Google'i kolmiku kaardilipiku tippu jõudmiseks.",
        "Tehniliselt korras veebileht aitab konkurentidest mööduda ka ilma kalli reklaamita.",
        "Kasuta kõikjal internetis ühtset ettevõtte nime, aadressi ja telefoni formaati."
      ]
    },
    "ru": {
      "title": "Локальное SEO: как сервисному бизнесу занять первые позиции Google?",
      "description": "Практический гид, как мастерам услуг и компаниям быть найденными в своём городе и районе.",
      "intro": "Когда у человека ломается машина, требуется мастер по укладке плитки, стоматолог или юрист, он редко просматривает социальные сети — он открывает Google и вводит: «ремонт ванной Вильнюс», «автосервис Каунас» или «стоматолог Клайпеда». Локальное SEO (Local SEO) — это самый мощный способ получить самых «горячих», готовых покупать клиентов.",
      "sections": [
        {
          "heading": "1. Google Business Profile (бывший Google My Business)",
          "paragraphs": [
            "Первый и самый важный шаг — создать и верифицировать профиль своей компании в Google Картах. Заполните все поля: точное название компании, обслуживаемые территории, часы работы, прайс-лист услуг и качественные фотографии.",
            "Важность отзывов: регулярно просите довольных клиентов оставить отзыв в Google. Отвечайте на каждый отзыв — алгоритмы Google расценивают это как признак активного, надёжного бизнеса."
          ]
        },
        {
          "heading": "2. Структура сайта для локального SEO",
          "paragraphs": [
            "В текстах и мета-тегах естественным образом используйте города и регионы, в которых вы предоставляете услуги.",
            "Внедрите структурированные данные Schema.org «LocalBusiness» или «ProfessionalService», указав обслуживаемую страну, город, часы работы и email.",
            "Создайте понятную контактную страницу с интерактивной картой и кликабельными номерами телефонов."
          ]
        },
        {
          "heading": "3. Последовательность NAP — часто незамеченный фактор",
          "paragraphs": [
            "NAP (Name, Address, Phone — название, адрес, телефон) означает, что название вашей компании, адрес и номер телефона должны быть написаны одинаково везде в интернете: на сайте, в профиле Google Business, на странице Facebook и в различных бизнес-каталогах (manodarbas.lt, 118.lt и подобных).",
            "Если на одной странице вы пишете «UAB Pavyzdys», а на другой — «Pavyzdys UAB» с другим форматом телефона, алгоритмам Google сложнее связать эти записи с одной и той же компанией, и это ослабляет доверие к вашему результату в локальном поиске."
          ]
        },
        {
          "heading": "4. Обслуживание нескольких городов или районов",
          "paragraphs": [
            "Если вы предоставляете услуги в нескольких городах или районах (например, в Вильнюсе, Каунасе и соседних районах), самая эффективная стратегия — создать для каждого основного региона обслуживания отдельную страницу с уникальным контентом, а не один общий текст «Обслуживаем всю Литву».",
            "Каждая такая страница должна содержать хотя бы несколько уникальных предложений о конкретном регионе — например, упомянутые районы или улицы, где вы работаете — чтобы Google не расценил страницы как дублированный контент."
          ]
        }
      ],
      "takeaways": [
        "Локальное SEO привлекает клиентов с наибольшим намерением купить.",
        "Google Business Profile и отзывы — прямой ключ к попаданию на вершину «Google 3-Pack» на карте.",
        "Технически аккуратный сайт помогает обойти конкурентов даже без дорогой рекламы.",
        "Придерживайтесь единого формата названия компании, адреса и телефона во всех источниках в интернете."
      ]
    }
  },
  "kaip-pasiruosti-svetaines-kurimui": {
    "en": {
      "title": "How to prepare for building a website: a 7-step checklist",
      "description": "What to prepare before contacting a developer so your project gets done twice as fast and smoothly.",
      "intro": "Building a website can take 1 week or stretch out to 3 months. The most common cause of delay isn't development work — it's the client not being prepared: missing text, missing photos, unclear goals. This checklist will help you prepare so the work goes as smoothly and stress-free as possible.",
      "sections": [
        {
          "heading": "1. A 7-step checklist",
          "paragraphs": [
            "1. Define the main goal of your website: What do you want a visitor to do? Call, fill out an inquiry form, download a price list, or buy a product.",
            "2. Write down your list of services: For each service, prepare at least a short description of what it's for and what problems it solves.",
            "3. Gather visual materials: You'll need a logo in vector format (SVG, AI, or high-resolution PNG) and real photos of completed work or your team.",
            "4. Pick 2–3 examples you like: Show the developer websites whose aesthetics, structure, or usability appeal to you.",
            "5. Prepare your contact information: Company registration details, official email, phone number, business hours.",
            "6. Register your domain: If you don't already have one, check availability and register the .lt domain you want in your own name.",
            "7. Set a realistic budget and timeline: Decide by when the website absolutely must launch."
          ]
        },
        {
          "heading": "2. Common mistakes that delay projects",
          "paragraphs": [
            "Missing text: the most common cause of delay. If there's no text, the developer can't finish the page layout — the design 'hangs' waiting for content. It's best to prepare at least a draft text for each page in advance, even if it gets edited later.",
            "Slow decision-making: if decisions have to be made by a team of several people, or by a manager who's rarely available, every approval stage can drag on for weeks. Appoint one responsible person to make final decisions on text and design.",
            "Vague change requests: instead of 'I'd like it to look better', be specific — 'I'd like a bigger font in the heading' or 'I'd like a different button color'. Specific comments let changes be implemented in one pass instead of five attempts."
          ]
        },
        {
          "heading": "3. What to prepare if you need an online store",
          "paragraphs": [
            "In addition to the general list, an online store requires you to prepare in advance: a full product list with prices, dimensions, and descriptions, delivery terms and prices for different regions, your return and exchange policy, and information about VAT rates."
          ]
        }
      ],
      "takeaways": [
        "Good preparation lets the developer give you a fixed price without later extra fees.",
        "Real photos always perform better than stock photos bought from image banks.",
        "Appoint one person responsible for decisions — it speeds up the project many times over."
      ]
    },
    "pl": {
      "title": "Jak przygotować się do stworzenia strony: lista kontrolna w 7 krokach",
      "description": "Co przygotować przed kontaktem z programistą, aby projekt zrealizować dwa razy szybciej i sprawniej.",
      "intro": "Proces tworzenia strony internetowej może trwać 1 tydzień lub rozciągnąć się do 3 miesięcy. Najczęstszą przyczyną opóźnień nie są prace programistyczne, lecz brak przygotowania zamawiającego: brakujące teksty, zdjęcia, niejasne cele. Ta lista kontrolna pomoże się przygotować tak, aby prace przebiegały maksymalnie sprawnie i bez stresu.",
      "sections": [
        {
          "heading": "1. Lista kontrolna w 7 krokach",
          "paragraphs": [
            "1. Określ główny cel strony: Co chcesz, aby zrobił odwiedzający? Zadzwonił, wypełnił formularz zapytania, pobrał cennik czy kupił produkt.",
            "2. Spisz listę oferowanych usług: Dla każdej usługi przygotuj przynajmniej krótki opis, dla kogo jest przeznaczona i jakie problemy rozwiązuje.",
            "3. Zbierz materiały wizualne: Potrzebne jest logo w formacie wektorowym (SVG, AI lub PNG wysokiej rozdzielczości) oraz prawdziwe zdjęcia zrealizowanych prac lub zespołu.",
            "4. Wybierz 2–3 podobające się przykłady: Pokaż twórcy strony, których estetyka, struktura lub wygoda Ci się podobają.",
            "5. Przygotuj dane kontaktowe: Dane rejestrowe firmy, oficjalny e-mail, numer telefonu, godziny pracy.",
            "6. Zarejestruj domenę: Jeśli jeszcze jej nie masz, sprawdź dostępność i zarejestruj wybraną domenę .lt na swoje nazwisko/firmę.",
            "7. Ustal realny budżet i terminy: Określ, kiedy strona musi zostać uruchomiona."
          ]
        },
        {
          "heading": "2. Najczęstsze błędy powodujące opóźnienia projektu",
          "paragraphs": [
            "Brak tekstów: najczęstsza przyczyna opóźnień. Jeśli nie ma tekstów, programista nie może dokończyć makiety podstrony — design „zawisa” w oczekiwaniu na treść. Najlepiej wcześniej przygotować przynajmniej wersję roboczą tekstu dla każdej podstrony, nawet jeśli zostanie później zredagowana.",
            "Opóźnianie decyzji: jeśli decyzje musi podejmować zespół kilku osób lub rzadko dostępny kierownik, każdy etap zatwierdzania może trwać tygodniami. Wyznacz jedną odpowiedzialną osobę, która będzie podejmować ostateczne decyzje dotyczące tekstu i designu.",
            "Niejasne prośby o zmiany: zamiast „chciałbym, żeby wyglądało lepiej”, sprecyzuj — „chciałbym większej czcionki w nagłówku” lub „chciałbym innego koloru przycisku”. Konkretne uwagi pozwalają wprowadzić zmiany za jednym razem, a nie po pięciu próbach."
          ]
        },
        {
          "heading": "3. Co przygotować, jeśli potrzebny jest sklep internetowy",
          "paragraphs": [
            "Dodatkowo do ogólnej listy, dla sklepu internetowego niezbędne jest wcześniejsze przygotowanie: pełnej listy produktów z cenami, wymiarami i opisami, warunków i cen dostawy dla różnych regionów, zasad zwrotów i wymiany oraz informacji o stawkach VAT."
          ]
        }
      ],
      "takeaways": [
        "Dobre przygotowanie pozwala twórcy podać stałą cenę bez późniejszych dodatkowych opłat.",
        "Prawdziwe zdjęcia zawsze działają lepiej niż zakupione z internetowych fotobanków.",
        "Wyznacz jedną odpowiedzialną osobę do podejmowania decyzji — to przyspiesza projekt kilkukrotnie."
      ]
    },
    "lv": {
      "title": "Kā sagatavoties mājaslapas izstrādei: 7 soļu kontrolsaraksts",
      "description": "Ko sagatavot pirms vēršanās pie izstrādātāja, lai projekts tiktu īstenots divreiz ātrāk un raitāk.",
      "intro": "Mājaslapas izstrādes process var ilgt 1 nedēļu vai izstiepties līdz 3 mēnešiem. Biežākais kavēšanās iemesls — nevis programmēšanas darbi, bet pasūtītāja nesagatavotība: trūkst tekstu, fotogrāfiju, neskaidri mērķi. Šis kontrolsaraksts palīdzēs sagatavoties tā, lai darbs norisinātos maksimāli raiti un bez stresa.",
      "sections": [
        {
          "heading": "1. 7 soļu kontrolsaraksts",
          "paragraphs": [
            "1. Nosakiet mājaslapas galveno mērķi: Ko vēlaties, lai apmeklētājs paveic? Piezvana, aizpilda pieprasījuma formu, lejupielādē cenrādi vai nopērk preci.",
            "2. Sarakstiet sniegto pakalpojumu sarakstu: Katram pakalpojumam sagatavojiet vismaz īsu aprakstu, kam tas paredzēts un kādas problēmas risina.",
            "3. Savāciet vizuālo materiālu: Nepieciešams logotips vektoru formātā (SVG, AI vai augstas izšķirtspējas PNG) un reālas paveikto darbu vai komandas fotogrāfijas.",
            "4. Izvēlieties 2–3 patīkošus piemērus: Parādiet izstrādātājam mājaslapas, kuru estētika, struktūra vai ērtība jums patīk.",
            "5. Sagatavojiet kontaktinformāciju: Uzņēmuma rekvizīti, oficiālais e-pasts, tālruņa numurs, darba laiks.",
            "6. Reģistrējiet domēnu: Ja vēl nav, pārbaudiet un reģistrējiet vēlamo .lt domēnu savā vārdā.",
            "7. Nosakiet reālu budžetu un termiņus: Izlemiet, kad mājaslapai jābūt palaistai."
          ]
        },
        {
          "heading": "2. Biežākās kļūdas, kuru dēļ projekts kavējas",
          "paragraphs": [
            "Tekstu trūkums: biežākais kavēšanās iemesls. Ja tekstu nav, izstrādātājs nevar pabeigt lapas maketu — dizains 'iekaras', gaidot saturu. Vislabāk iepriekš sagatavot vismaz melnrakstu tekstu katrai lapai, pat ja tas vēlāk tiks rediģēts.",
            "Lēmumu pieņemšanas kavēšanās: ja lēmumi jāpieņem vairāku cilvēku komandai vai vadītājam, kas reti pieejams, katrs apstiprināšanas posms var ieilgt nedēļām. Nozīmējiet vienu atbildīgo personu, kas pieņems galīgos lēmumus par tekstu un dizainu.",
            "Neskaidri izmaiņu pieprasījumi: tā vietā, lai teiktu 'gribētu, lai izskatās labāk', konkretizējiet — 'gribētu lielāku šrifta izmēru virsrakstā' vai 'gribētu citu pogas krāsu'. Konkrēti komentāri ļauj izmaiņas ieviest vienā reizē, nevis piecos mēģinājumos."
          ]
        },
        {
          "heading": "3. Ko sagatavot, ja nepieciešams e-veikals",
          "paragraphs": [
            "Papildus vispārējam sarakstam, e-veikalam nepieciešams iepriekš sagatavot: pilnu preču sarakstu ar cenām, izmēriem un aprakstiem, piegādes nosacījumus un cenas dažādiem reģioniem, atgriešanas un maiņas kārtību, kā arī informāciju par PVN likmēm."
          ]
        }
      ],
      "takeaways": [
        "Laba sagatavošanās ļauj izstrādātājam sniegt fiksētu cenu bez vēlākām papildu maksām.",
        "Reālas fotogrāfijas vienmēr darbojas labāk nekā no fotobankām pirktas.",
        "Nozīmējiet vienu atbildīgo personu lēmumu pieņemšanai — tas paātrina projektu vairākas reizes."
      ]
    },
    "et": {
      "title": "Kuidas valmistuda veebilehe loomiseks: 7-sammuline kontrollnimekiri",
      "description": "Mida valmistada ette enne arendajaga ühenduse võtmist, et projekt valmiks kaks korda kiiremini ja sujuvamalt.",
      "intro": "Veebilehe loomisprotsess võib võtta aega 1 nädala või venida 3 kuuni. Kõige sagedasem viivituse põhjus pole programmeerimistöö, vaid tellija ettevalmistamatus: puuduvad tekstid, fotod, ebaselged eesmärgid. See kontrollnimekiri aitab valmistuda nii, et töö kulgeks maksimaalselt sujuvalt ja stressivabalt.",
      "sections": [
        {
          "heading": "1. 7-sammuline kontrollnimekiri",
          "paragraphs": [
            "1. Määra veebilehe peamine eesmärk: Mida sa soovid, et külastaja teeks? Helistaks, täidaks päringuvormi, laadiks alla hinnakirja või ostaks toote.",
            "2. Pane kirja pakutavate teenuste loetelu: Iga teenuse kohta valmista vähemalt lühike kirjeldus, kellele see on mõeldud ja mis probleeme lahendab.",
            "3. Kogu kokku visuaalne materjal: Vajalik on logo vektorformaadis (SVG, AI või kõrge resolutsiooniga PNG) ja päris tehtud tööde või meeskonna fotod.",
            "4. Vali 2–3 meeldivat näidet: Näita arendajale veebilehti, mille esteetika, struktuur või mugavus sulle meeldib.",
            "5. Valmista ette kontaktinfo: Ettevõtte rekvisiidid, ametlik e-post, telefoninumber, lahtiolekuajad.",
            "6. Registreeri domeen: Kui sul veel pole, kontrolli ja registreeri soovitud .lt domeen enda nimele.",
            "7. Määra reaalne eelarve ja tähtajad: Otsusta, millal veebileht peab käivituma."
          ]
        },
        {
          "heading": "2. Kõige levinumad vead, mis viivitavad projekti",
          "paragraphs": [
            "Tekstide puudumine: kõige sagedasem viivituse põhjus. Kui tekste pole, ei saa arendaja lehe maketti lõpetada — disain jääb sisu ootama. Kõige parem on eelnevalt valmistada iga lehe jaoks vähemalt mustandtekst, isegi kui seda hiljem redigeeritakse.",
            "Otsuste tegemise venimine: kui otsuseid peab tegema mitmeliikmeline meeskond või juht, keda on raske kätte saada, võib iga kinnitusetapp venida nädalaid. Määra üks vastutav isik, kes teeb lõplikud otsused teksti ja disaini kohta.",
            "Ebaselged muudatussoovid: 'sooviksin, et näeks parem välja' asemel konkretiseeri — 'sooviksin suuremat kirjafonti pealkirjas' või 'sooviksin nupule teist värvi'. Konkreetsed kommentaarid võimaldavad muudatused teha korraga, mitte viie katse jooksul."
          ]
        },
        {
          "heading": "3. Mida valmistada ette, kui vaja on e-poodi",
          "paragraphs": [
            "Lisaks üldisele nimekirjale on e-poe jaoks vaja eelnevalt valmistada: täielik tootenimekiri hindade, mõõtude ja kirjeldustega, tarnetingimused ja hinnad erinevatele piirkondadele, tagastamise ja vahetamise kord ning info käibemaksumäärade kohta."
          ]
        }
      ],
      "takeaways": [
        "Hea ettevalmistus võimaldab arendajal esitada fikseeritud hinna ilma hilisemate lisatasudeta.",
        "Päris fotod töötavad alati paremini kui internetist ostetud pildipankade pildid.",
        "Määra üks vastutav isik otsuste tegemiseks — see kiirendab projekti mitmekordselt."
      ]
    },
    "ru": {
      "title": "Как подготовиться к созданию сайта: контрольный список из 7 шагов",
      "description": "Что подготовить перед обращением к программисту, чтобы проект был реализован вдвое быстрее и без сбоев.",
      "intro": "Процесс создания сайта может занять 1 неделю, а может растянуться до 3 месяцев. Самая частая причина задержек — не работа программиста, а неподготовленность заказчика: не хватает текстов, фотографий, не ясны цели. Этот контрольный список поможет подготовиться так, чтобы работа шла максимально гладко и без стресса.",
      "sections": [
        {
          "heading": "1. Контрольный список из 7 шагов",
          "paragraphs": [
            "1. Определите основную цель сайта: чего вы хотите, чтобы достиг посетитель? Позвонил, заполнил форму заявки, скачал прайс-лист или купил товар.",
            "2. Составьте список предоставляемых услуг: для каждой услуги подготовьте хотя бы краткое описание — для кого она и какие проблемы решает.",
            "3. Соберите визуальные материалы: понадобится логотип в векторном формате (SVG, AI или PNG высокого разрешения) и реальные фотографии выполненных работ или команды.",
            "4. Выберите 2–3 понравившихся примера: покажите разработчику сайты, чья эстетика, структура или удобство вам нравятся.",
            "5. Подготовьте контактную информацию: реквизиты компании, официальный email, номер телефона, часы работы.",
            "6. Зарегистрируйте домен: если ещё нет, проверьте доступность и зарегистрируйте нужный домен .lt на своё имя.",
            "7. Определите реальный бюджет и сроки: решите, когда сайт должен быть запущен."
          ]
        },
        {
          "heading": "2. Частые ошибки, из-за которых проект задерживается",
          "paragraphs": [
            "Нехватка текстов: самая частая причина задержки. Если текстов нет, программист не может завершить макет страницы — дизайн «зависает» в ожидании контента. Лучше заранее подготовить хотя бы черновой текст для каждой страницы, даже если позже он будет отредактирован.",
            "Задержка в принятии решений: если решения должна принимать команда из нескольких человек или руководитель, до которого редко можно дозвониться, каждый этап согласования может затянуться на недели. Назначьте одного ответственного человека, который будет принимать окончательные решения по тексту и дизайну.",
            "Неясные запросы на изменения: вместо «хотелось бы, чтобы выглядело получше», конкретизируйте — «хотелось бы более крупный шрифт в заголовке» или «хотелось бы кнопку другого цвета». Конкретные комментарии позволяют внести изменения за один раз, а не за пять попыток."
          ]
        },
        {
          "heading": "3. Что подготовить, если нужен интернет-магазин",
          "paragraphs": [
            "Дополнительно к общему списку для интернет-магазина необходимо заранее подготовить: полный список товаров с ценами, размерами и описаниями, условия и стоимость доставки для разных регионов, порядок возврата и обмена, а также информацию о ставках НДС."
          ]
        }
      ],
      "takeaways": [
        "Хорошая подготовка позволяет разработчику предоставить фиксированную цену без последующих дополнительных платежей.",
        "Реальные фотографии всегда работают лучше, чем купленные в фотобанках.",
        "Назначьте одного ответственного человека для принятия решений — это ускоряет проект в несколько раз."
      ]
    }
  },
  "kas-yra-turinio-valdymo-sistema": {
    "en": {
      "title": "What is a content management system (CMS) and why is it worth having?",
      "description": "How a modern CMS works and why you no longer need to pay a developer for every photo or price change.",
      "intro": "A content management system (CMS) is a dedicated admin environment that lets a website owner independently create, edit, and publish content without any programming knowledge. In this article we explain how modern CMS platforms work and why they're essential for every active business.",
      "sections": [
        {
          "heading": "1. Why does a business need a content management system?",
          "paragraphs": [
            "Independence and speed: Service prices changing, a new service launching, or fresh photos of a just-finished project to upload? With a CMS, you make these changes in 2 minutes from a computer or phone.",
            "Zero extra costs: You no longer need to email a developer, wait days for a reply, and pay €30–50 for every text correction.",
            "SEO vitality: Google's algorithms favor regularly updated websites. New articles, portfolio pieces, and FAQ answers help attract more organic traffic."
          ]
        },
        {
          "heading": "2. Modern headless CMS vs. legacy systems",
          "paragraphs": [
            "Traditional systems (like old WordPress) are often slow, cluttered with unnecessary menu items, and vulnerable to attacks.",
            "Modern 'headless' CMS platforms (such as Directus) run separately from the website itself. They're fast, intuitive, come with convenient image-cropping tools, and let you train a staff member to use them in under an hour."
          ]
        },
        {
          "heading": "3. What exactly can you edit through a CMS?",
          "paragraphs": [
            "Depending on the type of website, the admin environment typically lets you change: page text and headings, your list of services and prices, portfolio gallery photos, blog or news posts, FAQ questions and answers, and contact information.",
            "More complex structural changes to the website's architecture (creating new page types, changing the design) still remain the developer's responsibility — a CMS is meant for managing content, not structure."
          ]
        },
        {
          "heading": "4. When is a CMS not worth installing?",
          "paragraphs": [
            "If your website is a single-page (landing page) solution whose content rarely changes (once a year or less), installing a full CMS could be an unnecessary extra cost. In that case it's simpler and cheaper to just ask the developer to make the occasional change directly.",
            "A CMS becomes a worthwhile investment once content changes at least once a month — new projects being added, prices changing, articles being published."
          ]
        }
      ],
      "takeaways": [
        "A CMS gives you full freedom to manage your business information without technical middlemen.",
        "A headless CMS ensures maximum security and ease of administration.",
        "A CMS is worth choosing if you plan to update content at least once a month."
      ]
    },
    "pl": {
      "title": "Czym jest system zarządzania treścią (CMS) i dlaczego warto go mieć?",
      "description": "Jak działa nowoczesny CMS i dlaczego nie trzeba już płacić programiście za każdą zmianę zdjęcia czy ceny.",
      "intro": "System zarządzania treścią (ang. Content Management System, w skrócie CMS) to specjalne środowisko administracyjne, pozwalające właścicielowi strony samodzielnie tworzyć, edytować i publikować treści bez żadnej wiedzy programistycznej. W tym artykule wyjaśniamy, jak działają nowoczesne systemy CMS i dlaczego są niezbędne dla każdej aktywnej firmy.",
      "sections": [
        {
          "heading": "1. Dlaczego firma potrzebuje systemu zarządzania treścią?",
          "paragraphs": [
            "Samodzielność i szybkość: Zmieniają się ceny usług, pojawiła się nowa usługa lub chcesz dodać świeże zdjęcia z ukończonej realizacji? Korzystając z CMS, zmiany wprowadzasz w 2 minuty z komputera lub telefonu.",
            "Zerowe dodatkowe koszty: Nie musisz już pisać do programisty, czekać kilka dni na odpowiedź i płacić 30–50 € za każdą poprawkę tekstową.",
            "Żywotność SEO: Algorytmy Google pozytywnie oceniają regularnie aktualizowane strony. Nowe artykuły, realizacje i odpowiedzi w FAQ pomagają przyciągnąć więcej ruchu organicznego."
          ]
        },
        {
          "heading": "2. Nowoczesne Headless CMS kontra stare systemy",
          "paragraphs": [
            "Tradycyjne systemy (np. stary WordPress) są często wolne, przeciążone niepotrzebnymi pozycjami menu i podatne na ataki.",
            "Nowoczesne systemy „Headless” CMS (np. Directus) działają niezależnie od samej strony. Są błyskawiczne, intuicyjne, mają wygodne narzędzia do kadrowania zdjęć i pozwalają nauczyć pracownika obsługi w ciągu zaledwie godziny."
          ]
        },
        {
          "heading": "3. Co konkretnie można edytować przez CMS?",
          "paragraphs": [
            "W zależności od typu strony, przez środowisko administracyjne zwykle można zmieniać: teksty i nagłówki podstron, listę usług i ceny, zdjęcia galerii realizacji/portfolio, wpisy na blogu lub w aktualnościach, pytania i odpowiedzi w FAQ oraz dane kontaktowe.",
            "Bardziej złożona zmiana strukturalna architektury strony (tworzenie nowych typów podstron, zmiana designu) nadal pozostaje w kompetencji programisty — CMS służy do zarządzania treścią, nie strukturą."
          ]
        },
        {
          "heading": "4. Kiedy nie warto wdrażać CMS?",
          "paragraphs": [
            "Jeśli Twoja strona to jednostronicowe rozwiązanie (landing page), którego treść zmienia się rzadko (raz w roku lub rzadziej), wdrożenie pełnego CMS może być zbędnym dodatkowym kosztem. W takim przypadku prościej i taniej jest poprosić twórcę o wprowadzenie rzadkich zmian bezpośrednio.",
            "CMS staje się wartościową inwestycją, gdy treść zmienia się przynajmniej raz w miesiącu — dodawane są nowe realizacje, zmieniają się ceny, publikowane są artykuły."
          ]
        }
      ],
      "takeaways": [
        "CMS daje pełną swobodę zarządzania informacjami o firmie bez technicznych pośredników.",
        "Headless CMS zapewnia maksymalne bezpieczeństwo i prostotę administracji.",
        "Warto wybrać CMS, jeśli treść planujesz aktualizować przynajmniej raz w miesiącu."
      ]
    },
    "lv": {
      "title": "Kas ir satura vadības sistēma (CMS) un kāpēc ir vērts to izmantot?",
      "description": "Kā darbojas mūsdienīga CMS un kāpēc vairs nav jāmaksā izstrādātājam par katru fotogrāfijas vai cenas maiņu.",
      "intro": "Satura vadības sistēma (angļu val. Content Management System, saīsināti CMS) — tā ir īpaša administrēšanas vide, kas ļauj mājaslapas īpašniekam patstāvīgi izveidot, rediģēt un publicēt saturu bez jebkādām programmēšanas zināšanām. Šajā rakstā paskaidrojam, kā darbojas mūsdienīgas CMS un kāpēc tās ir nepieciešamas ikvienam dzīvam biznesam.",
      "sections": [
        {
          "heading": "1. Kāpēc biznesam nepieciešama satura vadības sistēma?",
          "paragraphs": [
            "Patstāvība un ātrums: Mainījušās pakalpojumu cenas, radies jauns pakalpojums vai vēlaties augšupielādēt tikko pabeigta objekta fotogrāfijas? Izmantojot CMS, izmaiņas veicat 2 minūšu laikā no datora vai telefona.",
            "Nulles papildu izmaksas: Jums vairs nav jāraksta izstrādātājam, jāgaida viņa atbilde vairākas dienas un jāmaksā 30–50 € par katru teksta labojumu.",
            "SEO dzīvotspēja: Google algoritmi pozitīvi vērtē regulāri atjauninātas mājaslapas. Jauni raksti, darbi un BUJ atbildes palīdz piesaistīt vairāk organiskās plūsmas."
          ]
        },
        {
          "heading": "2. Mūsdienīgas Headless CMS pretstatā vecajām sistēmām",
          "paragraphs": [
            "Tradicionālās sistēmas (piem., vecs WordPress) bieži ir lēnas, pārslogotas ar nevajadzīgiem izvēlnes punktiem un neaizsargātas pret uzbrukumiem.",
            "Mūsdienīgas 'Headless' CMS (piem., Directus) darbojas atsevišķi no pašas mājaslapas. Tās ir zibens ātras, intuitīvas, ar ērtiem fotogrāfiju apstrādes rīkiem un ļauj apmācīt darbinieku to lietošanā vien stundas laikā."
          ]
        },
        {
          "heading": "3. Ko konkrēti var rediģēt caur CMS?",
          "paragraphs": [
            "Atkarībā no mājaslapas veida, administrēšanas vidē parasti var mainīt: lapu tekstus un virsrakstus, pakalpojumu sarakstu un cenas, darbu/portfolio galerijas fotogrāfijas, bloga vai jaunumu ierakstus, BUJ jautājumus un atbildes, kā arī kontaktinformāciju.",
            "Sarežģītāka strukturāla mājaslapas arhitektūra (jaunu lapu tipu veidošana, dizaina maiņa) tomēr paliek izstrādātāja kompetencē — CMS paredzēta satura, nevis struktūras pārvaldībai."
          ]
        },
        {
          "heading": "4. Kad CMS nav vērts ieviest?",
          "paragraphs": [
            "Ja jūsu mājaslapa ir vienas lapas (landing page) risinājums, kura saturs mainās reti (reizi gadā vai retāk), pilnas CMS ieviešana var būt nevajadzīgas papildu izmaksas. Šādā gadījumā vienkāršāk un lētāk palūgt izstrādātājam veikt retās izmaiņas tieši.",
            "CMS kļūst par vērtīgu ieguldījumu, kad saturs mainās vismaz reizi mēnesī — tiek pievienoti jauni darbi, mainās cenas, tiek publicēti raksti."
          ]
        }
      ],
      "takeaways": [
        "CMS sniedz pilnīgu brīvību pārvaldīt sava biznesa informāciju bez tehniskiem starpniekiem.",
        "Headless CMS nodrošina maksimālu drošību un administrēšanas vienkāršību.",
        "CMS ir vērts izvēlēties, ja saturu plānojat atjaunināt vismaz reizi mēnesī."
      ]
    },
    "et": {
      "title": "Mis on sisuhaldussüsteem (CMS) ja miks tasub see kasutusele võtta?",
      "description": "Kuidas töötab kaasaegne CMS ja miks pole enam vaja maksta arendajale iga foto või hinna muutmise eest.",
      "intro": "Sisuhaldussüsteem (ingl Content Management System, lühendatult CMS) on spetsiaalne haldamiskeskkond, mis võimaldab veebilehe omanikul iseseisvalt luua, redigeerida ja avaldada sisu ilma igasuguste programmeerimisoskusteta. Selles artiklis selgitame, kuidas kaasaegsed CMS-id töötavad ja miks on need vajalikud igale elavale ettevõttele.",
      "sections": [
        {
          "heading": "1. Miks on ettevõttele CMS hädavajalik?",
          "paragraphs": [
            "Iseseisvus ja kiirus: Kas teenuste hinnad muutuvad, on lisandunud uus teenus või soovid lisada värskelt valminud objekti fotosid? CMS-i kasutades teed muudatused 2 minutiga arvutist või telefonist.",
            "Nulllisakulud: Sul pole enam vaja arendajale kirjutada, oodata mitu päeva vastust ega maksta 30–50 € iga tekstiparanduse eest.",
            "SEO elujõulisus: Google'i algoritmid hindavad positiivselt regulaarselt uuendatavaid veebilehti. Uued artiklid, tööd ja KKK vastused aitavad ligi meelitada rohkem orgaanilist liiklust."
          ]
        },
        {
          "heading": "2. Kaasaegsed Headless CMS-id vanade süsteemide vastu",
          "paragraphs": [
            "Traditsioonilised süsteemid (nt vana WordPress) on tihti aeglased, üle koormatud tarbetute menüüpunktidega ja rünnetele haavatavad.",
            "Kaasaegsed 'headless' CMS-id (nt Directus) töötavad eraldi veebilehest endast. Need on välkkiired, intuitiivsed, mugavate pilditöötlusvahenditega ning võimaldavad töötajat koolitada vaid ühe tunniga."
          ]
        },
        {
          "heading": "3. Mida saab CMS-i kaudu konkreetselt redigeerida?",
          "paragraphs": [
            "Olenevalt veebilehe tüübist saab haldamiskeskkonna kaudu tavaliselt muuta: lehtede tekste ja pealkirju, teenuste nimekirja ja hindu, tööde/portfoolio galerii fotosid, blogi- või uudistepostitusi, KKK küsimusi ja vastuseid ning kontaktinfot.",
            "Keerukam struktuurne veebilehe arhitektuur (uute lehetüüpide loomine, disaini muutmine) jääb siiski arendaja pädevusse — CMS on mõeldud sisu, mitte struktuuri haldamiseks."
          ]
        },
        {
          "heading": "4. Millal ei tasu CMS-i kasutusele võtta?",
          "paragraphs": [
            "Kui sinu veebileht on üheleheline (landing page) lahendus, mille sisu muutub harva (kord aastas või harvemini), võib täielik CMS olla tarbetu lisakulu. Sellisel juhul on lihtsam ja odavam paluda arendajal teha harvad muudatused otse.",
            "CMS muutub väärtuslikuks investeeringuks siis, kui sisu muutub vähemalt kord kuus — lisandub uusi töid, muutuvad hinnad, avaldatakse artikleid."
          ]
        }
      ],
      "takeaways": [
        "CMS annab täieliku vabaduse hallata oma ettevõtte infot ilma tehniliste vahemeesteta.",
        "Headless CMS tagab maksimaalse turvalisuse ja haldamise lihtsuse.",
        "CMS tasub valida, kui plaanid sisu uuendada vähemalt kord kuus."
      ]
    },
    "ru": {
      "title": "Что такое система управления контентом (CMS) и почему стоит её иметь?",
      "description": "Как работает современная CMS и почему больше не нужно платить программисту за каждое изменение фотографии или цены.",
      "intro": "Система управления контентом (англ. Content Management System, сокращённо CMS) — это специальная административная среда, позволяющая владельцу сайта самостоятельно создавать, редактировать и публиковать контент без каких-либо навыков программирования. В этой статье мы объясняем, как работают современные CMS и почему они необходимы каждому активному бизнесу.",
      "sections": [
        {
          "heading": "1. Почему бизнесу необходима система управления контентом?",
          "paragraphs": [
            "Самостоятельность и скорость: меняются цены услуг, появилась новая услуга или хотите загрузить свежие фотографии только что завершённого объекта? С помощью CMS изменения вы вносите за 2 минуты с компьютера или телефона.",
            "Нулевые дополнительные расходы: вам больше не нужно писать программисту, ждать его ответа несколько дней и платить 30–50 € за каждую текстовую правку.",
            "Жизнеспособность SEO: алгоритмы Google положительно оценивают регулярно обновляемые сайты. Новые статьи, работы и ответы на частые вопросы помогают привлекать больше органического трафика."
          ]
        },
        {
          "heading": "2. Современные Headless CMS против старых систем",
          "paragraphs": [
            "Традиционные системы (например, старый WordPress) часто медленные, перегружены ненужными пунктами меню и уязвимы для атак.",
            "Современные «headless» CMS (например, Directus) работают отдельно от самого сайта. Они молниеносные, интуитивно понятные, имеют удобные инструменты обрезки фотографий и позволяют обучить сотрудника работе с ними всего за час."
          ]
        },
        {
          "heading": "3. Что конкретно можно редактировать через CMS?",
          "paragraphs": [
            "В зависимости от типа сайта, через административную среду обычно можно изменять: тексты и заголовки страниц, список услуг и цены, фотографии в галерее работ/портфолио, записи блога или новостей, вопросы и ответы FAQ, а также контактную информацию.",
            "Более сложная структурная архитектура сайта (создание новых типов страниц, изменение дизайна) всё равно остаётся в компетенции программиста — CMS предназначена для управления контентом, а не структурой."
          ]
        },
        {
          "heading": "4. Когда CMS не стоит внедрять?",
          "paragraphs": [
            "Если ваш сайт — это одностраничное решение (лендинг), контент которого меняется редко (раз в год или реже), внедрение полноценной CMS может быть излишним дополнительным расходом. В таком случае проще и дешевле попросить разработчика вносить редкие изменения напрямую.",
            "CMS становится оправданной инвестицией, когда контент меняется хотя бы раз в месяц — добавляются новые работы, меняются цены, публикуются статьи."
          ]
        }
      ],
      "takeaways": [
        "CMS даёт полную свободу управлять информацией о своём бизнесе без технических посредников.",
        "Headless CMS обеспечивает максимальную безопасность и простоту администрирования.",
        "CMS стоит выбирать, если контент вы планируете обновлять хотя бы раз в месяц."
      ]
    }
  },
  "svetaines-greicio-optimizavimas": {
    "en": {
      "title": "Why website speed directly determines your number of inquiries and sales",
      "description": "Every extra second of load time costs you 10–20% of potential customers. How to reach a 100/100 Google PageSpeed score.",
      "intro": "Today's internet user is impatient. Studies by Google and Deloitte show that when a website's load time increases by just 1 second, conversions drop by up to 20%, and the bounce rate rises by more than 30%. Website performance is no longer just a technical metric for developers — it's a direct factor in your business's revenue.",
      "sections": [
        {
          "heading": "1. How speed affects Google rankings (Core Web Vitals)",
          "paragraphs": [
            "Google officially uses Core Web Vitals metrics as a ranking factor:",
            "LCP (Largest Contentful Paint): how long it takes for the main content block to appear on screen. Target: under 2.5 seconds (Next.js achieves under 0.8s).",
            "INP (Interaction to Next Paint): how quickly the website responds to a click. Target: under 200 ms.",
            "CLS (Cumulative Layout Shift): whether elements jump around on screen while the page loads. Target: under 0.1."
          ]
        },
        {
          "heading": "2. How is maximum speed achieved?",
          "paragraphs": [
            "Image optimization: Images are automatically converted to next-generation AVIF and WebP formats, reducing their size by up to 80% without any loss of quality.",
            "Static generation (SSG) and edge CDN: HTML is served from the server closest to the user, with no delay.",
            "Font and code compression: No heavy third-party scripts or libraries that block the browser from rendering."
          ]
        },
        {
          "heading": "3. How to check your website's speed",
          "paragraphs": [
            "The free Google PageSpeed Insights tool shows your website's score (0–100) on both mobile and desktop within seconds, while pointing out specific problems — oversized images, inefficient hosting, or render-blocking scripts.",
            "We recommend running this test regularly, especially after any major changes to your website — a new plugin, an extra script, or a large image upload — since a single unoptimized element can drop your score by dozens of points."
          ]
        },
        {
          "heading": "4. The impact of third-party scripts",
          "paragraphs": [
            "Google Analytics, the Facebook Pixel, live chat widgets, and other third-party tools are useful, but each one adds extra code weight. It's important that these scripts load asynchronously (without interrupting the rendering of your main content) and only after user consent, as required by GDPR and the ePrivacy Directive.",
            "Smart script management is one of the most commonly overlooked, yet most impactful, speed optimization factors on large business websites."
          ]
        }
      ],
      "takeaways": [
        "A fast website = higher Google rankings and more orders.",
        "Next.js static generation ensures instant loading even on a weak mobile connection.",
        "Check your speed regularly with Google PageSpeed Insights, especially after making changes to your site."
      ]
    },
    "pl": {
      "title": "Dlaczego szybkość strony bezpośrednio wpływa na liczbę zapytań i sprzedaż?",
      "description": "Każda dodatkowa sekunda ładowania kosztuje 10–20% utraconych klientów. Jak osiągnąć wynik 100/100 w Google PageSpeed.",
      "intro": "Współczesny użytkownik internetu jest niecierpliwy. Badania przeprowadzone przez Google i Deloitte pokazują: gdy czas ładowania strony wydłuża się o zaledwie 1 sekundę, liczba konwersji spada nawet o 20%, a współczynnik odrzuceń (bounce rate) wzrasta o ponad 30%. Wydajność strony to już nie tylko techniczny wskaźnik dla programistów — to bezpośredni czynnik wpływający na przychody Twojej firmy.",
      "sections": [
        {
          "heading": "1. Jak szybkość wpływa na rankingi Google (Core Web Vitals)",
          "paragraphs": [
            "Google oficjalnie wykorzystuje metryki Core Web Vitals jako czynnik rankingowy:",
            "LCP (Largest Contentful Paint): po jakim czasie na ekranie pojawia się główny blok treści. Cel — < 2,5 sekundy (Next.js osiąga < 0,8 s).",
            "INP (Interaction to Next Paint): jak szybko strona reaguje na kliknięcie. Cel — < 200 ms.",
            "CLS (Cumulative Layout Shift): czy elementy nie „skaczą” po ekranie podczas ładowania strony. Cel — < 0,1."
          ]
        },
        {
          "heading": "2. Jak osiągnąć maksymalną szybkość?",
          "paragraphs": [
            "Optymalizacja zdjęć: Obrazy są automatycznie konwertowane do nowoczesnych formatów AVIF i WebP, co zmniejsza ich rozmiar nawet o 80% bez utraty jakości.",
            "Generowanie statyczne (SSG) i Edge CDN: Kod HTML dostarczany jest z serwera znajdującego się najbliżej użytkownika, bez opóźnień.",
            "Kompresja czcionek i kodu: Nie są wykorzystywane ciężkie zewnętrzne skrypty ani biblioteki, które blokują renderowanie w przeglądarce."
          ]
        },
        {
          "heading": "3. Jak sprawdzić szybkość swojej strony?",
          "paragraphs": [
            "Bezpłatne narzędzie Google PageSpeed Insights w ciągu kilku sekund pokazuje wynik Twojej strony (0–100) zarówno w wersji mobilnej, jak i desktopowej, wskazując przy tym konkretne problemy — zbyt duże obrazy, nieefektywny hosting czy blokujące skrypty.",
            "Zalecamy przeprowadzanie tego testu regularnie, zwłaszcza po większych zmianach na stronie — nowej wtyczce, dodatkowym skrypcie lub dużym pliku graficznym, ponieważ jeden nieoptymalny element może obniżyć wynik o dziesiątki punktów."
          ]
        },
        {
          "heading": "4. Wpływ skryptów zewnętrznych",
          "paragraphs": [
            "Google Analytics, Facebook Pixel, okienka czatu na żywo i inne narzędzia zewnętrzne są przydatne, ale każde z nich dodaje dodatkowe obciążenie kodem. Ważne, aby te skrypty były ładowane asynchronicznie (bez przerywania renderowania głównej treści) i tylko po uzyskaniu zgody użytkownika, zgodnie z wymogami RODO i dyrektywy ePrivacy.",
            "Sprytne zarządzanie skryptami to jeden z najczęściej niedocenianych, ale najbardziej znaczących czynników optymalizacji szybkości w dużych stronach firmowych."
          ]
        }
      ],
      "takeaways": [
        "Szybka strona = wyższe pozycje w Google i więcej zamówień.",
        "Generowanie statyczne Next.js zapewnia błyskawiczne ładowanie nawet przy słabym mobilnym połączeniu internetowym.",
        "Regularnie sprawdzaj szybkość przez Google PageSpeed Insights, zwłaszcza po zmianach na stronie."
      ]
    },
    "lv": {
      "title": "Kāpēc mājaslapas ātrums tieši ietekmē pieprasījumu skaitu un pārdošanu?",
      "description": "Katra papildu ielādes sekunde izmaksā 10–20% zaudētu klientu. Kā sasniegt 100/100 Google PageSpeed rezultātu.",
      "intro": "Mūsdienu interneta lietotājs ir nepacietīgs. 'Google' un 'Deloitte' veiktie pētījumi rāda: pagarinoties mājaslapas ielādes laikam tikai par 1 sekundi, konversiju skaits krīt līdz 20%, bet atlēkšanas rādītājs (bounce rate) pieaug vairāk nekā par 30%. Mājaslapas veiktspēja vairs nav tikai izstrādātāju tehniskais rādītājs — tas ir tiešs jūsu biznesa ieņēmumu faktors.",
      "sections": [
        {
          "heading": "1. Kā ātrums ietekmē Google reitingus (Core Web Vitals)",
          "paragraphs": [
            "Google oficiāli izmanto Core Web Vitals metrikas kā reitingēšanas faktoru:",
            "LCP (Largest Contentful Paint): cik ilgā laikā ekrānā parādās galvenais satura bloks. Mērķis — < 2,5 sekundes (Next.js sasniedz < 0,8 s).",
            "INP (Interaction to Next Paint): cik ātri mājaslapa reaģē uz klikšķi. Mērķis — < 200 ms.",
            "CLS (Cumulative Layout Shift): vai lapas ielādes laikā elementi 'nelēkā' pa ekrānu. Mērķis — < 0,1."
          ]
        },
        {
          "heading": "2. Kā tiek sasniegts maksimālais ātrums?",
          "paragraphs": [
            "Fotogrāfiju optimizācija: Attēli automātiski tiek konvertēti jaunās paaudzes AVIF un WebP formātos, samazinot to svaru līdz 80% bez kvalitātes zuduma.",
            "Statiskā ģenerēšana (SSG) un Edge CDN: HTML kods tiek piegādāts no lietotājam tuvākā servera bez kavēšanās.",
            "Fontu un koda saspiešana: Netiek izmantoti smagi ārējie skripti vai bibliotēkas, kas bloķē pārlūka atveidošanu."
          ]
        },
        {
          "heading": "3. Kā pārbaudīt savas mājaslapas ātrumu?",
          "paragraphs": [
            "Bezmaksas Google PageSpeed Insights rīks dažu sekunžu laikā parāda jūsu mājaslapas rezultātu (0–100) gan mobilajā, gan datora versijā, vienlaikus norādot konkrētas problēmas — pārāk lielus attēlus, neefektīvu hostingu vai bloķējošus skriptus.",
            "Iesakām šo testu veikt regulāri, īpaši pēc jebkādām lielākām izmaiņām mājaslapā — jauna spraudņa, papildu skripta vai liela attēla augšupielādes, jo viens neoptimizēts elements var samazināt rezultātu par desmitiem punktu."
          ]
        },
        {
          "heading": "4. Trešo pušu skriptu ietekme",
          "paragraphs": [
            "Google Analytics, Facebook Pixel, tiešsaistes tērzēšanas (chat) logi un citi trešo pušu rīki ir noderīgi, taču katrs no tiem pievieno papildu koda slodzi. Svarīgi, lai šie skripti tiktu ielādēti asinhroni (nepārtraucot galvenā satura atveidošanu) un tikai pēc lietotāja piekrišanas saņemšanas, kā to pieprasa VDAR un ePrivacy direktīva.",
            "Gudra skriptu pārvaldība — viens no biežāk nepamanītajiem, bet nozīmīgākajiem ātruma optimizācijas faktoriem lielās biznesa mājaslapās."
          ]
        }
      ],
      "takeaways": [
        "Ātra mājaslapa = augstākas pozīcijas Google un vairāk pasūtījumu.",
        "Next.js statiskā ģenerēšana nodrošina zibens ātru ielādi pat pie vāja mobilā interneta savienojuma.",
        "Regulāri pārbaudiet ātrumu ar Google PageSpeed Insights, īpaši pēc izmaiņām mājaslapā."
      ]
    },
    "et": {
      "title": "Miks veebilehe kiirus mõjutab otseselt päringute arvu ja müüki?",
      "description": "Iga lisasekund laadimisajas maksab 10–20% kaotatud kliente. Kuidas saavutada 100/100 Google PageSpeed tulemus.",
      "intro": "Kaasaegne internetikasutaja on kannatamatu. Google'i ja Deloitte'i uuringud näitavad: kui veebilehe laadimisaeg pikeneb vaid 1 sekundi võrra, langeb konversioonide arv kuni 20%, ning tagasipõrke määr (bounce rate) kasvab enam kui 30%. Veebilehe kiirus pole enam ainult arendajate tehniline näitaja — see on otsene sinu ettevõtte tulude tegur.",
      "sections": [
        {
          "heading": "1. Kuidas kiirus mõjutab Google'i pingeridu (Core Web Vitals)",
          "paragraphs": [
            "Google kasutab ametlikult Core Web Vitals mõõdikuid pingerea tegurina:",
            "LCP (Largest Contentful Paint): kui kiiresti ilmub ekraanile põhisisu plokk. Eesmärk — alla 2,5 sekundi (Next.js saavutab alla 0,8 s).",
            "INP (Interaction to Next Paint): kui kiiresti veebileht reageerib klikile. Eesmärk — alla 200 ms.",
            "CLS (Cumulative Layout Shift): kas laadimise ajal elemendid 'hüppavad' ekraanil. Eesmärk — alla 0,1."
          ]
        },
        {
          "heading": "2. Kuidas saavutatakse maksimaalne kiirus?",
          "paragraphs": [
            "Piltide optimeerimine: Pildid konverteeritakse automaatselt uue põlvkonna AVIF ja WebP formaatidesse, vähendades nende suurust kuni 80% ilma kvaliteedikadu tekitamata.",
            "Staatiline genereerimine (SSG) ja Edge CDN: HTML-kood serveeritakse kasutajale kõige lähemal asuvast serverist ilma viivituseta.",
            "Fondi- ja koodikompressioon: Ei kasutata raskeid väliseid skripte ega teeke, mis blokeeriks brauseri renderdamist."
          ]
        },
        {
          "heading": "3. Kuidas kontrollida oma veebilehe kiirust?",
          "paragraphs": [
            "Tasuta Google PageSpeed Insights tööriist näitab mõne sekundiga sinu veebilehe hinde (0–100) nii mobiilis kui ka arvutiversioonis, tuues samas välja konkreetsed probleemid — liiga suured pildid, ebaefektiivne majutus või blokeerivad skriptid.",
            "Soovitame seda testi teha regulaarselt, eriti pärast suuremaid muudatusi veebilehel — uut pluginat, lisaskripti või suure pildi üleslaadimist, sest üks optimeerimata element võib hinnet mitmekümne punkti võrra langetada."
          ]
        },
        {
          "heading": "4. Kolmandate osapoolte skriptide mõju",
          "paragraphs": [
            "Google Analytics, Facebook Pixel, otsevestluse aknad ja teised kolmandate osapoolte tööriistad on kasulikud, kuid iga neist lisab koodile täiendava koormuse. Oluline on, et need skriptid laaditaks asünkroonselt (peamise sisu kuvamist katkestamata) ja alles pärast kasutaja nõusoleku saamist, nagu nõuab GDPR ja ePrivacy direktiiv.",
            "Nutikas skriptihaldus on üks sagedamini tähelepanuta jäävaid, kuid olulisemaid kiiruse optimeerimise tegureid suurte ettevõtte veebilehtede puhul."
          ]
        }
      ],
      "takeaways": [
        "Kiire veebileht = kõrgemad Google'i positsioonid ja rohkem tellimusi.",
        "Next.js'i staatiline genereerimine tagab välkkiire laadimise ka nõrga mobiilse internetiühenduse korral.",
        "Kontrolli regulaarselt kiirust Google PageSpeed Insightsi kaudu, eriti pärast veebilehe muudatusi."
      ]
    },
    "ru": {
      "title": "Почему скорость сайта напрямую влияет на количество заявок и продажи?",
      "description": "Каждая дополнительная секунда загрузки стоит 10–20% потерянных клиентов. Как достичь результата 100/100 в Google PageSpeed.",
      "intro": "Современный пользователь интернета нетерпелив. Исследования Google и Deloitte показывают: при увеличении времени загрузки сайта всего на 1 секунду количество конверсий падает до 20%, а показатель отказов (bounce rate) вырастает более чем на 30%. Производительность сайта — это уже не просто технический показатель для программистов, а прямой фактор доходов вашего бизнеса.",
      "sections": [
        {
          "heading": "1. Как скорость влияет на рейтинги Google (Core Web Vitals)",
          "paragraphs": [
            "Google официально использует метрики Core Web Vitals как фактор ранжирования:",
            "LCP (Largest Contentful Paint): за какое время на экране появляется основной блок контента. Цель — < 2,5 секунды (Next.js достигает < 0,8 с).",
            "INP (Interaction to Next Paint): насколько быстро сайт реагирует на клик. Цель — < 200 мс.",
            "CLS (Cumulative Layout Shift): не «прыгают» ли элементы на экране во время загрузки страницы. Цель — < 0,1."
          ]
        },
        {
          "heading": "2. Как достигается максимальная скорость?",
          "paragraphs": [
            "Оптимизация изображений: картинки автоматически конвертируются в форматы нового поколения AVIF и WebP, уменьшая их вес до 80% без потери качества.",
            "Статическая генерация (SSG) и Edge CDN: HTML-код отдаётся с сервера, ближайшего к пользователю, без задержек.",
            "Сжатие шрифтов и кода: не используются тяжёлые сторонние скрипты или библиотеки, блокирующие отрисовку в браузере."
          ]
        },
        {
          "heading": "3. Как проверить скорость своего сайта?",
          "paragraphs": [
            "Бесплатный инструмент Google PageSpeed Insights за несколько секунд показывает балл вашего сайта (0–100) как в мобильной, так и в десктопной версии, одновременно указывая конкретные проблемы — слишком большие изображения, неэффективный хостинг или блокирующие скрипты.",
            "Рекомендуем проводить этот тест регулярно, особенно после любых крупных изменений на сайте — установки нового плагина, дополнительного скрипта или загрузки большого изображения, поскольку один неоптимизированный элемент может снизить балл на десятки пунктов."
          ]
        },
        {
          "heading": "4. Влияние сторонних скриптов",
          "paragraphs": [
            "Google Analytics, Facebook Pixel, окошки живого чата и другие сторонние инструменты полезны, но каждый из них добавляет дополнительную нагрузку кода. Важно, чтобы эти скрипты загружались асинхронно (не прерывая отрисовку основного контента) и только после получения согласия пользователя, как того требуют GDPR и директива ePrivacy.",
            "Разумное управление скриптами — один из часто незамеченных, но самых значимых факторов оптимизации скорости на крупных бизнес-сайтах."
          ]
        }
      ],
      "takeaways": [
        "Быстрый сайт = более высокие позиции в Google и больше заказов.",
        "Статическая генерация Next.js обеспечивает молниеносную загрузку даже при слабом мобильном интернете.",
        "Регулярно проверяйте скорость через Google PageSpeed Insights, особенно после изменений на сайте."
      ]
    }
  },
  "ai-automatizavimas-smulkiam-verslui": {
    "en": {
      "title": "How AI and automation help small businesses save time",
      "description": "Practical examples: how to automatically process inquiries, generate invoices, and respond to customers.",
      "intro": "Artificial intelligence and process automation are no longer the exclusive privilege of big tech corporations. Today, even a company with 1–5 employees, or a sole tradesperson, can automate repetitive tasks and save 10 to 20 hours of valuable time every week.",
      "sections": [
        {
          "heading": "1. What can realistically be automated today?",
          "paragraphs": [
            "Instant inquiry routing: When a customer fills out a form on your website, the data automatically lands in Google Sheets or your CRM, and you receive a notification on your phone (Telegram / WhatsApp) with the customer's number and request.",
            "Automatic replies and preliminary quotes: The system automatically sends the customer a confirmation email with a service catalog, FAQ answers, or a preliminary price calculator.",
            "Invoice and document generation: Once a buyer completes a payment or confirms an order, a VAT invoice is automatically generated and sent to both bookkeeping and the customer."
          ]
        },
        {
          "heading": "2. How to start intelligently",
          "paragraphs": [
            "There's one rule — automate only where it pays off. There's no need to install complex, expensive systems where a simple connection between your website and your email or CRM will do."
          ]
        },
        {
          "heading": "3. AI assistants in customer service",
          "paragraphs": [
            "With AI's help, you can automatically answer frequently asked questions (price, timelines, business hours) even before a customer contacts you directly — for that, a well-prepared FAQ section on your website is enough, one that AI search engines (ChatGPT, Perplexity, Google AI Overviews) can cite directly when answering a user.",
            "In more advanced scenarios, you can automate the initial classification of inquiries — the system recognizes whether it's a pricing question, a technical issue, or a partnership proposal, and routes it to the right person or provides an automatic initial reply."
          ]
        },
        {
          "heading": "4. Where automation shouldn't replace a human",
          "paragraphs": [
            "It's important to understand the line: automation is great for repetitive, rule-based processes (data transfer, notifications, invoice generation), but complex conversations with customers that require individual judgment (price negotiations, discussing complex projects) should remain in human hands — over-automating these can create a cold, untrustworthy customer service impression."
          ]
        }
      ],
      "takeaways": [
        "Automation lets your business work 24/7, even while you're resting.",
        "Start with the simplest processes: logging inquiries and sending instant notifications.",
        "A well-prepared FAQ section on your website acts as the first line of automated customer service."
      ]
    },
    "pl": {
      "title": "Jak AI i automatyzacja pomagają małym firmom oszczędzać czas?",
      "description": "Praktyczne przykłady: jak automatycznie obsługiwać zapytania, generować faktury i odpowiadać klientom.",
      "intro": "Sztuczna inteligencja i automatyzacja procesów to już nie tylko przywilej wielkich korporacji technologicznych. Dziś nawet firma zatrudniająca 1–5 osób lub niezależny fachowiec może zautomatyzować powtarzalne czynności i oszczędzić od 10 do 20 cennych godzin każdego tygodnia.",
      "sections": [
        {
          "heading": "1. Co realnie można zautomatyzować już dziś?",
          "paragraphs": [
            "Natychmiastowe przekierowywanie zapytań: Gdy klient wypełni formularz na stronie, dane automatycznie trafiają do Google Sheets lub CRM, a Ty na telefon (Telegram / WhatsApp) otrzymujesz powiadomienie z numerem klienta i jego potrzebą.",
            "Automatyczne odpowiedzi i wstępne wyceny: System automatycznie wysyła klientowi wiadomość potwierdzającą wraz z katalogiem usług, odpowiedziami z FAQ lub wstępnym kalkulatorem cen.",
            "Generowanie faktur i dokumentów: Po dokonaniu płatności lub potwierdzeniu zamówienia przez kupującego, automatycznie generowana jest faktura VAT i wysyłana do księgowości oraz klienta."
          ]
        },
        {
          "heading": "2. Jak mądrze zacząć?",
          "paragraphs": [
            "Zasada jest jedna — automatyzuj tylko tam, gdzie się to opłaca. Nie trzeba wdrażać skomplikowanych, drogich systemów tam, gdzie wystarczy proste połączenie między stroną a Twoim e-mailem lub CRM."
          ]
        },
        {
          "heading": "3. Asystenci AI w obsłudze klienta",
          "paragraphs": [
            "Za pomocą sztucznej inteligencji można automatycznie odpowiadać na najczęściej zadawane pytania (cena, terminy, godziny pracy) jeszcze zanim klient bezpośrednio się skontaktuje — wystarczy dobrze przygotowana sekcja FAQ na stronie, którą wyszukiwarki AI (ChatGPT, Perplexity, Google AI Overviews) mogą bezpośrednio cytować, odpowiadając użytkownikowi.",
            "W bardziej złożonych scenariuszach można zautomatyzować wstępną klasyfikację zapytań — system rozpoznaje, czy jest to pytanie o cenę, problem techniczny czy propozycja współpracy, i kieruje je do odpowiedniej osoby lub udziela automatycznej wstępnej odpowiedzi."
          ]
        },
        {
          "heading": "4. Gdzie automatyzacja nie powinna zastępować człowieka",
          "paragraphs": [
            "Ważne jest zrozumienie granicy: automatyzacja doskonale sprawdza się w powtarzalnych, opartych na regułach procesach (przenoszenie danych, powiadomienia, generowanie faktur), natomiast złożone rozmowy z klientami wymagające indywidualnej decyzji (negocjacje cenowe, omawianie skomplikowanych projektów) powinny pozostać w rękach człowieka — nadmierna automatyzacja może tu stworzyć zimne, budzące nieufność wrażenie obsługi klienta."
          ]
        }
      ],
      "takeaways": [
        "Automatyzacja pozwala firmie działać 24/7, nawet gdy Ty odpoczywasz.",
        "Zacznij od najprostszych procesów: rejestrowania zapytań i natychmiastowych powiadomień.",
        "Dobrze przygotowana sekcja FAQ na stronie działa jak pierwsza linia automatycznej obsługi klienta."
      ]
    },
    "lv": {
      "title": "Kā MI un automatizācija palīdz mazam biznesam ietaupīt laiku?",
      "description": "Praktiski piemēri: kā automātiski apstrādāt pieprasījumus, ģenerēt rēķinus un atbildēt klientiem.",
      "intro": "Mākslīgais intelekts un procesu automatizācija vairs nav tikai lielo tehnoloģiju korporāciju privilēģija. Šodien pat 1–5 darbinieku uzņēmums vai patstāvīgi strādājošs meistars var automatizēt atkārtotus darbus un ietaupīt no 10 līdz 20 vērtīga laika stundu katru nedēļu.",
      "sections": [
        {
          "heading": "1. Ko reāli var automatizēt jau šodien?",
          "paragraphs": [
            "Momentāna pieprasījumu novirzīšana: Klientam aizpildot formu mājaslapā, dati automātiski nonāk Google Sheets vai CRM sistēmā, bet jums uz telefonu (Telegram / WhatsApp) tiek nosūtīts paziņojums ar klienta numuru un vajadzību.",
            "Automātiskas atbildes un sākotnējās tāmes: Sistēma automātiski nosūta klientam apstiprinājuma vēstuli ar pakalpojumu katalogu, BUJ atbildēm vai orientējošu cenu kalkulatoru.",
            "Rēķinu un dokumentu ģenerēšana: Pircējam veicot maksājumu vai apstiprinot pasūtījumu, automātiski tiek izveidots PVN rēķins un nosūtīts grāmatvedībai un klientam."
          ]
        },
        {
          "heading": "2. Kā prātīgi sākt?",
          "paragraphs": [
            "Noteikums ir viens — automatizējiet tikai tur, kur tas atmaksājas. Nav vajadzības ieviest sarežģītas, dārgas sistēmas tur, kur pietiek ar vienkāršu mājaslapas savienojumu ar jūsu e-pastu vai CRM."
          ]
        },
        {
          "heading": "3. MI asistenti klientu apkalpošanā",
          "paragraphs": [
            "Ar mākslīgā intelekta palīdzību var automātiski atbildēt uz biežāk uzdotajiem jautājumiem (cenu, termiņiem, darba laiku) vēl pirms klients sazinās tieši — tam pietiek ar mājaslapā labi sagatavotu BUJ sadaļu, ko MI meklētājsistēmas (ChatGPT, Perplexity, Google AI Overviews) var tieši citēt, atbildot lietotājam.",
            "Sarežģītākos scenārijos var automatizēt sākotnējo pieprasījumu klasificēšanu — sistēma atpazīst, vai tas ir cenas jautājums, tehniska problēma vai sadarbības piedāvājums, un novirza to attiecīgajai personai vai sniedz automātisku sākotnēju atbildi."
          ]
        },
        {
          "heading": "4. Kur automatizācijai nevajadzētu aizstāt cilvēku",
          "paragraphs": [
            "Svarīgi saprast robežu: automatizācija lieliski der atkārtotiem, uz noteikumiem balstītiem procesiem (datu pārnese, paziņojumi, rēķinu ģenerēšana), taču sarežģītas, individuāla lēmuma prasošas sarunas ar klientiem (sarunas par cenu, sarežģītu projektu apspriešana) jāatstāj cilvēka ziņā — pārmērīga automatizācija šeit var radīt aukstu, neuzticamu klientu apkalpošanas iespaidu."
          ]
        }
      ],
      "takeaways": [
        "Automatizācija ļauj biznesam strādāt 24/7, pat kad jūs atpūšaties.",
        "Sāciet ar vienkāršākajiem procesiem: pieprasījumu reģistrēšanu un momentāniem paziņojumiem.",
        "Labi sagatavota BUJ sadaļa mājaslapā darbojas kā pirmā automātiskās klientu apkalpošanas līnija."
      ]
    },
    "et": {
      "title": "Kuidas AI ja automatiseerimine aitavad väikeettevõttel aega säästa?",
      "description": "Praktilised näited: kuidas automaatselt töödelda päringuid, genereerida arveid ja vastata klientidele.",
      "intro": "Tehisintellekt ja protsesside automatiseerimine pole enam ainult suurte tehnoloogiakorporatsioonide privileeg. Täna saab isegi 1–5 töötajaga ettevõte või iseseisvalt töötav meister automatiseerida korduvaid ülesandeid ja säästa 10–20 tundi väärtuslikku aega igal nädalal.",
      "sections": [
        {
          "heading": "1. Mida saab juba täna reaalselt automatiseerida?",
          "paragraphs": [
            "Koheselt suunatud päringud: Kui klient täidab veebilehel vormi, jõuavad andmed automaatselt Google Sheetsi või CRM-i, ning sinu telefonile (Telegram/WhatsApp) saadetakse teade kliendi numbri ja vajadusega.",
            "Automaatsed vastused ja esialgsed hinnapakkumised: Süsteem saadab kliendile automaatselt kinnituskirja koos teenuste kataloogi, KKK vastuste või esialgse hinnakalkulaatoriga.",
            "Arvete ja dokumentide genereerimine: Pärast ostja makse sooritamist või tellimuse kinnitamist genereeritakse automaatselt käibemaksuarve ja saadetakse raamatupidajale ning kliendile."
          ]
        },
        {
          "heading": "2. Kuidas targalt alustada?",
          "paragraphs": [
            "Reegel on üks — automatiseeri ainult seal, kus see end ära tasub. Pole vaja paigaldada keerulisi kalleid süsteeme sinna, kus piisab lihtsast ühendusest veebilehe ja sinu e-posti või CRM-i vahel."
          ]
        },
        {
          "heading": "3. AI-assistendid klienditeeninduses",
          "paragraphs": [
            "Tehisintellekti abil saab automaatselt vastata kõige sagedamini esitatud küsimustele (hind, tähtajad, tööaeg) juba enne, kui klient otse ühendust võtab — selleks piisab veebilehel heast KKK jaotisest, mida AI otsingumootorid (ChatGPT, Perplexity, Google AI Overviews) saavad otse kasutaja päringule vastates tsiteerida.",
            "Keerulisematel juhtudel saab automatiseerida esialgse päringute klassifitseerimise — süsteem tuvastab, kas tegemist on hinnaküsimuse, tehnilise probleemi või koostööpakkumisega, ning suunab vastavale inimesele või annab automaatse esialgse vastuse."
          ]
        },
        {
          "heading": "4. Kus automatiseerimine ei tohiks inimest asendada",
          "paragraphs": [
            "Oluline on mõista piiri: automatiseerimine sobib suurepäraselt korduvatele, reeglipõhistele protsessidele (andmete ülekandmine, teavitused, arvete genereerimine), kuid keerukad, individuaalset otsust nõudvad vestlused klientidega (hinnaläbirääkimised, keeruliste projektide arutamine) peaksid jääma inimese kätesse — liigne automatiseerimine võib siin tekitada külma, umbusaldust tekitava klienditeeninduse mulje."
          ]
        }
      ],
      "takeaways": [
        "Automatiseerimine võimaldab ettevõttel töötada 24/7, isegi kui sina puhkad.",
        "Alusta kõige lihtsamatest protsessidest: päringute registreerimisest ja koheste teavituste saatmisest.",
        "Hästi koostatud KKK jaotis veebilehel toimib esimese automaatse klienditeeninduse liinina."
      ]
    },
    "ru": {
      "title": "Как ИИ и автоматизация помогают малому бизнесу экономить время?",
      "description": "Практические примеры: как автоматически обрабатывать заявки, генерировать счета и отвечать клиентам.",
      "intro": "Искусственный интеллект и автоматизация процессов больше не являются привилегией только крупных технологических корпораций. Сегодня даже компания с 1–5 сотрудниками или самостоятельно работающий мастер может автоматизировать повторяющиеся задачи и экономить от 10 до 20 часов дорогого времени каждую неделю.",
      "sections": [
        {
          "heading": "1. Что реально можно автоматизировать уже сегодня?",
          "paragraphs": [
            "Мгновенная передача заявок: когда клиент заполняет форму на сайте, данные автоматически попадают в Google Sheets или CRM, а вам на телефон (Telegram / WhatsApp) приходит уведомление с номером клиента и его запросом.",
            "Автоматические ответы и предварительные сметы: система автоматически отправляет клиенту письмо-подтверждение с каталогом услуг, ответами на частые вопросы или предварительным калькулятором цены.",
            "Генерация счетов и документов: после того как покупатель совершил оплату или подтвердил заказ, автоматически генерируется счёт-фактура с НДС и отправляется бухгалтерии и клиенту."
          ]
        },
        {
          "heading": "2. Как разумно начать?",
          "paragraphs": [
            "Правило одно — автоматизируйте только там, где это окупается. Не нужно внедрять сложные дорогие системы там, где достаточно простой связки между сайтом и вашей почтой или CRM."
          ]
        },
        {
          "heading": "3. ИИ-ассистенты в обслуживании клиентов",
          "paragraphs": [
            "С помощью искусственного интеллекта можно автоматически отвечать на часто задаваемые вопросы (цена, сроки, часы работы) ещё до того, как клиент напрямую свяжется с вами — для этого достаточно хорошо составленного раздела FAQ на сайте, который поисковые системы ИИ (ChatGPT, Perplexity, Google AI Overviews) могут напрямую цитировать, отвечая пользователю.",
            "В более сложных сценариях можно автоматизировать первичную классификацию заявок — система распознаёт, это вопрос о цене, техническая проблема или предложение о сотрудничестве, и направляет соответствующему человеку либо предоставляет автоматический первичный ответ."
          ]
        },
        {
          "heading": "4. Где автоматизация не должна заменять человека",
          "paragraphs": [
            "Важно понимать границу: автоматизация отлично подходит для повторяющихся, основанных на правилах процессов (перенос данных, уведомления, генерация счетов), однако сложные разговоры с клиентами, требующие индивидуального решения (переговоры о цене, обсуждение сложных проектов), должны оставаться в руках человека — чрезмерная автоматизация здесь может создать холодное, вызывающее недоверие впечатление от обслуживания клиентов."
          ]
        }
      ],
      "takeaways": [
        "Автоматизация позволяет бизнесу работать 24/7, даже когда вы отдыхаете.",
        "Начните с самых простых процессов: регистрации заявок и мгновенных уведомлений.",
        "Хорошо составленный раздел FAQ на сайте работает как первая линия автоматического обслуживания клиентов."
      ]
    }
  },
  "el-parduotuves-mokejimu-budai-lietuvoje": {
    "en": {
      "title": "Payment integrations for online stores in Lithuania: Stripe, Montonio, Paysera",
      "description": "Which payment partner best fits your business: fees, features, and setup.",
      "intro": "The checkout process is where a sale either happens or the cart gets abandoned. If a buyer can't find their preferred bank or a card-payment option, they simply leave for a competitor. In this guide we compare the three most popular payment gateways in Lithuania: Montonio, Stripe, and Paysera.",
      "sections": [
        {
          "heading": "1. Montonio — the Baltic leader",
          "paragraphs": [
            "Advantages: Very low banklink fees (as little as €0.05–0.10 per transaction), a single convenient window covering all banks in Lithuania, Latvia, Estonia, and Poland, and built-in parcel-locker label printing.",
            "Best suited for: Any online store whose main market is Lithuania and the Baltic states."
          ]
        },
        {
          "heading": "2. Stripe — the global standard",
          "paragraphs": [
            "Advantages: Flawless Apple Pay and Google Pay support, credit card payments from any country in the world, and convenient management of subscriptions and recurring payments.",
            "Best suited for: International trade, digital products, SaaS services."
          ]
        },
        {
          "heading": "3. Paysera — the classic solution",
          "paragraphs": [
            "Advantages: Years of experience, a wide range of additional payment methods (payments at retail chains, leasing).",
            "Drawbacks: A somewhat dated user interface compared to Montonio or Stripe."
          ]
        },
        {
          "heading": "4. Can you integrate several payment methods at once?",
          "paragraphs": [
            "Yes, and it's often the best strategy — choose Montonio as your primary partner (bank transfers for the local market), and connect Stripe alongside it for cards and Apple/Google Pay. This way, the buyer always sees the checkout method most convenient for them, regardless of which country they're purchasing from.",
            "Technically, integrating several payment partners isn't any more complex — what matters is that the online store's system is built so that new payment methods can be added later without a major rewrite."
          ]
        },
        {
          "heading": "5. Security and GDPR requirements",
          "paragraphs": [
            "None of the partners mentioned above require you to store the customer's card data yourself — all sensitive information is processed directly on the payment partner's servers according to the PCI DSS security standard. This means less liability and risk for your business.",
            "The only thing that matters is correctly configuring the success and failure payment webhooks, so that the order status in your system always matches the actual payment result."
          ]
        }
      ],
      "takeaways": [
        "For local commerce, Montonio currently offers the best balance of price and features.",
        "For international trade and Apple Pay checkout, integrating Stripe is essential.",
        "Combining several payment partners increases conversions, since buyers choose whichever method is most convenient for them."
      ]
    },
    "pl": {
      "title": "Integracje płatnicze dla sklepów internetowych na Litwie: Stripe, Montonio, Paysera",
      "description": "Który partner płatniczy najlepiej pasuje do Twojej firmy: prowizje, funkcje i wdrożenie.",
      "intro": "Proces płatności to miejsce, w którym dochodzi albo do sprzedaży, albo do porzucenia koszyka. Jeśli kupujący nie znajdzie swojego ulubionego banku lub sposobu płatności kartą, po prostu przejdzie do konkurencji. W tym przewodniku porównujemy trzy najpopularniejsze bramki płatnicze na Litwie: Montonio, Stripe i Paysera.",
      "sections": [
        {
          "heading": "1. Montonio — lider krajów bałtyckich",
          "paragraphs": [
            "Zalety: Wyjątkowo niskie opłaty za przelewy bankowe (zaledwie 0,05–0,10 € za operację), jedno wygodne okno dla wszystkich banków litewskich, łotewskich, estońskich i polskich, zintegrowane drukowanie etykiet do paczkomatów.",
            "Dla kogo: Dla wszystkich sklepów internetowych, których głównym rynkiem jest Litwa i kraje bałtyckie."
          ]
        },
        {
          "heading": "2. Stripe — światowy standard",
          "paragraphs": [
            "Zalety: Nienaganne wsparcie Apple Pay i Google Pay, płatności kartami kredytowymi z dowolnego kraju świata, wygodne zarządzanie subskrypcjami i płatnościami cyklicznymi.",
            "Dla kogo: Dla handlu międzynarodowego, produktów cyfrowych, usług SaaS."
          ]
        },
        {
          "heading": "3. Paysera — klasyczne rozwiązanie",
          "paragraphs": [
            "Zalety: Wieloletnie doświadczenie, szeroki wybór dodatkowych sposobów płatności (płatności w centrach handlowych, leasing).",
            "Wady: Nieco starszy interfejs użytkownika w porównaniu z Montonio czy Stripe."
          ]
        },
        {
          "heading": "4. Czy można zintegrować kilka sposobów płatności jednocześnie?",
          "paragraphs": [
            "Tak, i to często najlepsza strategia — wybrać Montonio jako głównego partnera (przelewy bankowe dla rynku lokalnego), a obok niego podłączyć Stripe dla kart oraz Apple/Google Pay. Dzięki temu kupujący zawsze widzi najwygodniejszy dla siebie sposób płatności, niezależnie od kraju, z którego kupuje.",
            "Technicznie integracja kilku partnerów płatniczych nie jest bardziej skomplikowana — najważniejsze, aby system sklepu internetowego był zaprojektowany tak, by nowe metody płatności można było dodawać w przyszłości bez większej przebudowy."
          ]
        },
        {
          "heading": "5. Wymogi bezpieczeństwa i RODO",
          "paragraphs": [
            "Żaden z wymienionych partnerów nie wymaga, abyś sam przechowywał dane karty klienta — wszystkie wrażliwe informacje są przetwarzane bezpośrednio na serwerach partnera płatniczego zgodnie ze standardem bezpieczeństwa PCI DSS. Oznacza to mniejszą odpowiedzialność i ryzyko dla Twojej firmy.",
            "Ważne jest jedynie poprawne skonfigurowanie adresów zwrotnych (webhooków) dla udanych i nieudanych płatności, aby status zamówienia w Twoim systemie zawsze odpowiadał rzeczywistemu wynikowi płatności."
          ]
        }
      ],
      "takeaways": [
        "Dla handlu lokalnego Montonio obecnie oferuje najlepszy stosunek ceny do funkcjonalności.",
        "Dla handlu międzynarodowego i płatności Apple Pay konieczna jest integracja Stripe.",
        "Łączenie kilku partnerów płatniczych zwiększa konwersję, ponieważ kupujący wybiera najwygodniejszy dla siebie sposób."
      ]
    },
    "lv": {
      "title": "Maksājumu integrācijas e-veikaliem Lietuvā: Stripe, Montonio, Paysera",
      "description": "Kurš maksājumu iekasēšanas partneris vislabāk piemērots jūsu biznesam: komisijas maksas, funkcijas un ieviešana.",
      "intro": "Apmaksas process ir vieta, kur notiek vai nu pārdošana, vai groza pamešana. Ja pircējs neatrod savu iecienīto banku vai norēķina veidu ar karti, viņš vienkārši dodas pie konkurenta. Šajā ceļvedī salīdzinām trīs populārākos maksājumu vārtus Lietuvā: Montonio, Stripe un Paysera.",
      "sections": [
        {
          "heading": "1. Montonio — Baltijas valstu līderis",
          "paragraphs": [
            "Priekšrocības: Ļoti mazas banklink maksas (tikai 0,05–0,10 € par operāciju), viens ērts logs visām Lietuvas, Latvijas, Igaunijas un Polijas bankām, integrēta pakomātu uzlīmju drukāšana.",
            "Kam piemērots: Visiem e-veikaliem, kuru galvenais tirgus ir Lietuva un Baltijas valstis."
          ]
        },
        {
          "heading": "2. Stripe — Pasaules standarts",
          "paragraphs": [
            "Priekšrocības: Nevainojams Apple Pay un Google Pay atbalsts, norēķini ar kredītkartēm no jebkuras pasaules valsts, ērta abonementu un atkārtotu maksājumu pārvaldība.",
            "Kam piemērots: Starptautiskajai tirdzniecībai, digitāliem produktiem, SaaS pakalpojumiem."
          ]
        },
        {
          "heading": "3. Paysera — Klasisks risinājums",
          "paragraphs": [
            "Priekšrocības: Ilggadēja pieredze, plašs papildu norēķinu veidu klāsts (maksājumi tirdzniecības centros, līzings).",
            "Trūkumi: Nedaudz vecāka lietotāja saskarne, salīdzinot ar Montonio vai Stripe."
          ]
        },
        {
          "heading": "4. Vai iespējams integrēt vairākus maksājumu veidus vienlaikus?",
          "paragraphs": [
            "Jā, un tā bieži ir labākā stratēģija — par galveno partneri izvēlēties Montonio (bankas pārskaitījumi vietējam tirgum), bet līdzās tam pieslēgt Stripe kartēm un Apple/Google Pay. Tā pircējs vienmēr redz sev ērtāko norēķinu veidu neatkarīgi no tā, no kuras valsts viņš pērk.",
            "Tehniski vairāku maksājumu partneru integrēšana nav sarežģītāka — svarīgākais, lai e-veikala sistēma būtu izstrādāta tā, ka jaunus apmaksas veidus var pievienot bez lielas pārrakstīšanas nākotnē."
          ]
        },
        {
          "heading": "5. Drošības un VDAR prasības",
          "paragraphs": [
            "Neviens no minētajiem partneriem nepieprasa, lai jūs paši glabātu klienta kartes datus — visa jutīgā informācija tiek apstrādāta tieši maksājumu partnera serveros saskaņā ar PCI DSS drošības standartu. Tas nozīmē mazāku atbildību un risku jūsu biznesam.",
            "Svarīgi tikai pareizi konfigurēt veiksmīga un neveiksmīga maksājuma atgriešanas adreses (webhooks), lai pasūtījuma statuss jūsu sistēmā vienmēr atbilstu reālajam maksājuma rezultātam."
          ]
        }
      ],
      "takeaways": [
        "Vietējai tirdzniecībai Montonio šobrīd piedāvā labāko cenas un funkciju attiecību.",
        "Starptautiskajai tirdzniecībai un Apple Pay norēķiniem nepieciešams integrēt Stripe.",
        "Vairāku maksājumu partneru apvienošana palielina konversiju, jo pircējs izvēlas sev ērtāko veidu."
      ]
    },
    "et": {
      "title": "Maksete integratsioonid e-poele: Stripe, Montonio, Paysera",
      "description": "Milline maksekogumispartner sobib sinu ettevõttele kõige paremini: vahendustasud, funktsioonid ja kasutuselevõtt.",
      "intro": "Maksmisprotsess on koht, kus toimub kas müük või ostukorvi hülgamine. Kui ostja ei leia oma lemmikpanka või sobivat kaardimakse võimalust, lahkub ta lihtsalt konkurendi juurde. Selles juhendis võrdleme kolme populaarseimat maksevärava lahendust: Montonio, Stripe ja Paysera.",
      "sections": [
        {
          "heading": "1. Montonio — Balti riikide liider",
          "paragraphs": [
            "Eelised: Väga madalad pangalingi tasud (vaid 0,05–0,10 € tehingu kohta), üks mugav aken kõikidele Eesti, Läti, Leedu ja Poola pankadele, integreeritud pakiautomaadi kleebiste printimine.",
            "Kellele sobib: Kõikidele e-poodidele, mille peamine turg on Eesti ja Balti riigid."
          ]
        },
        {
          "heading": "2. Stripe — Ülemaailmne standard",
          "paragraphs": [
            "Eelised: Laitmatu Apple Pay ja Google Pay tugi, krediitkaardimaksed igast maailma riigist, mugav tellimuste ja korduvate maksete haldus.",
            "Kellele sobib: Rahvusvahelisele kaubandusele, digitoodetele, SaaS-teenustele."
          ]
        },
        {
          "heading": "3. Paysera — Klassikaline lahendus",
          "paragraphs": [
            "Eelised: Pikaajaline kogemus, lai valik lisamaksevõimalusi (maksed kauplustes, liising).",
            "Puudused: Mõnevõrra vananenum kasutajaliides võrreldes Montonio või Stripega."
          ]
        },
        {
          "heading": "4. Kas saab korraga integreerida mitu makseviisi?",
          "paragraphs": [
            "Jah, ja see on tihti parim strateegia — vali põhipartneriks Montonio (pangaülekanded kohalikule turule) ja lisa kõrvale Stripe kaartide ning Apple/Google Pay jaoks. Nii näeb ostja alati talle kõige mugavamat makseviisi, sõltumata sellest, millisest riigist ta ostab.",
            "Tehniliselt pole mitme maksepartneri integreerimine keerulisem — oluline on, et e-poe süsteem oleks projekteeritud nii, et uusi makseviise saaks tulevikus lisada ilma suure ümberkirjutamiseta."
          ]
        },
        {
          "heading": "5. Turvalisuse ja GDPR nõuded",
          "paragraphs": [
            "Ükski eelnimetatud partneritest ei nõua, et sina ise säilitaksid kliendi kaardiandmeid — kogu tundlik info töödeldakse otse maksepartneri serverites vastavalt PCI DSS turvastandardile. See tähendab väiksemat vastutust ja riski sinu ettevõttele.",
            "Oluline on ainult õigesti seadistada edukate ja ebaõnnestunud maksete tagasisuunamise aadressid (webhookid), et tellimuse staatus sinu süsteemis alati vastaks tegelikule maksetulemusele."
          ]
        }
      ],
      "takeaways": [
        "Kohalikule kaubandusele pakub Montonio praegu parimat hinna ja funktsioonide suhet.",
        "Rahvusvahelise kaubanduse ja Apple Pay maksete jaoks on vajalik Stripe integreerimine.",
        "Mitme maksepartneri kombineerimine suurendab konversiooni, sest ostja valib talle sobivaima viisi."
      ]
    },
    "ru": {
      "title": "Интеграции платежей для интернет-магазинов в Литве: Stripe, Montonio, Paysera",
      "description": "Какой партнёр по приёму платежей лучше всего подходит вашему бизнесу: комиссии, функции и внедрение.",
      "intro": "Процесс оплаты — это то место, где происходит либо продажа, либо отказ от корзины. Если покупатель не находит способ оплаты через свой любимый банк или картой, он просто уходит к конкуренту. В этом гиде мы сравниваем три самых популярных платёжных шлюза в Литве: Montonio, Stripe и Paysera.",
      "sections": [
        {
          "heading": "1. Montonio — лидер стран Балтии",
          "paragraphs": [
            "Преимущества: очень низкие комиссии за банковский перевод (всего 0,05–0,10 € за операцию), одно удобное окно для всех банков Литвы, Латвии, Эстонии и Польши, встроенная печать этикеток для почтоматов.",
            "Кому подходит: всем интернет-магазинам, чей основной рынок — Литва и страны Балтии."
          ]
        },
        {
          "heading": "2. Stripe — мировой стандарт",
          "paragraphs": [
            "Преимущества: безупречная поддержка Apple Pay и Google Pay, оплата картой из любой страны мира, удобное управление подписками и повторяющимися платежами.",
            "Кому подходит: международной торговле, цифровым продуктам, SaaS-сервисам."
          ]
        },
        {
          "heading": "3. Paysera — классическое решение",
          "paragraphs": [
            "Преимущества: многолетний опыт, широкий выбор дополнительных способов оплаты (платежи в торговых центрах, лизинг).",
            "Недостатки: несколько устаревший пользовательский интерфейс по сравнению с Montonio или Stripe."
          ]
        },
        {
          "heading": "4. Можно ли интегрировать несколько способов оплаты одновременно?",
          "paragraphs": [
            "Да, и это часто лучшая стратегия — выбрать основным партнёром Montonio (банковские переводы для локального рынка), а рядом подключить Stripe для карт и Apple/Google Pay. Так покупатель всегда видит наиболее удобный для себя способ оплаты, независимо от того, из какой страны он покупает.",
            "Технически интеграция нескольких платёжных партнёров не сложнее — главное, чтобы система интернет-магазина была спроектирована так, чтобы новые способы оплаты можно было добавлять без масштабной переработки в будущем."
          ]
        },
        {
          "heading": "5. Требования безопасности и GDPR",
          "paragraphs": [
            "Ни один из упомянутых партнёров не требует, чтобы вы сами хранили данные карты клиента — вся конфиденциальная информация обрабатывается напрямую на серверах платёжного партнёра по стандарту безопасности PCI DSS. Это означает меньшую ответственность и риск для вашего бизнеса.",
            "Важно лишь правильно настроить адреса возврата для успешных и неуспешных платежей (webhook'и), чтобы статус заказа в вашей системе всегда соответствовал реальному результату оплаты."
          ]
        }
      ],
      "takeaways": [
        "Для локальной торговли Montonio на данный момент предлагает лучшее соотношение цены и функций.",
        "Для международной торговли и оплаты через Apple Pay необходимо интегрировать Stripe.",
        "Сочетание нескольких платёжных партнёров повышает конверсию, поскольку покупатель выбирает наиболее удобный для себя способ."
      ]
    }
  },
  "seo-klaidos-kuriu-reikia-vengti": {
    "en": {
      "title": "10 common SEO mistakes that stop business websites from getting visitors",
      "description": "What businesses most often overlook: incorrect meta tags, slow loading, missing structured data, and how to fix it.",
      "intro": "Building a visually attractive website is only half the job. If the website has technical SEO mistakes, Google's search crawlers simply won't understand it, or will undervalue it. Here are 10 critical SEO mistakes we see when analyzing business websites in Lithuania.",
      "sections": [
        {
          "heading": "1. 10 critical SEO mistakes",
          "paragraphs": [
            "1. Duplicate or overly long Meta Title and Description tags (Google truncates titles longer than 60 characters).",
            "2. Missing Schema.org JSON-LD structured data — Google doesn't understand what is an organization, a service, or an FAQ.",
            "3. Slow pages caused by unoptimized, multi-megabyte images without WebP/AVIF formats.",
            "4. Incorrect heading hierarchy (e.g. multiple H1 tags on one page, or an H3 before an H2).",
            "5. Poor mobile version and elements jumping around while loading (CLS issue).",
            "6. Broken internal links and 404 errors without proper 301 redirects.",
            "7. Missing or uninformative image 'alt' attributes.",
            "8. A messy robots.txt file that blocks important pages from being indexed.",
            "9. No sitemap.xml file, or one that lists pages that no longer exist.",
            "10. Missing canonical tags, causing content duplication."
          ]
        },
        {
          "heading": "2. How to check whether your website has these mistakes",
          "paragraphs": [
            "The free Google Search Console tool shows which pages Google has indexed at all, what errors have been detected, and which keywords your website already ranks for. This is the first step to understanding your website's actual SEO health.",
            "The Google Rich Results Test tool lets you check whether your structured data (Schema.org) is correct and whether Google recognizes it at all."
          ]
        },
        {
          "heading": "3. How risky are these mistakes in the long run?",
          "paragraphs": [
            "SEO mistakes rarely cause instantly visible damage — they work gradually. A website without structured data keeps 'working', but slowly loses its chance of reaching the top of search results, where competitors with a well-organized technical foundation overtake it month after month.",
            "Since fixing these mistakes is much cheaper during the initial build of a new website than reworking an already-live one later, it's worth including a technical SEO check in the original project scope rather than leaving it for a 'later stage'."
          ]
        }
      ],
      "takeaways": [
        "Technical SEO is the foundation — without it, no amount of content will reach the top of Google.",
        "SiteStudio builds a 100% technically sound SEO architecture into every website.",
        "Regularly check your website using the free Google Search Console tool."
      ]
    },
    "pl": {
      "title": "10 najczęstszych błędów SEO, przez które strony firmowe nie mają odwiedzających",
      "description": "Co najczęściej pomijają firmy: niewłaściwe meta znaczniki, wolne ładowanie, brakujące dane strukturalne i jak to naprawić.",
      "intro": "Stworzenie wizualnie atrakcyjnej strony to dopiero połowa sukcesu. Jeśli strona zawiera techniczne błędy SEO, roboty wyszukiwarki Google po prostu jej nie zrozumieją lub ją zdegradują. Oto 10 krytycznych błędów SEO, które widzimy analizując strony firmowe na Litwie.",
      "sections": [
        {
          "heading": "1. Lista 10 krytycznych błędów SEO",
          "paragraphs": [
            "1. Zduplikowane lub zbyt długie meta tytuły i opisy (Google przycina tytuły dłuższe niż 60 znaków).",
            "2. Brakujące dane strukturalne Schema.org JSON-LD — Google nie rozumie, czym jest organizacja, usługa czy FAQ.",
            "3. Wolne strony z powodu nieoptymalizowanych, kilkumegabajtowych zdjęć bez formatów WebP/AVIF.",
            "4. Nieprawidłowa hierarchia nagłówków (np. kilka H1 na jednej podstronie lub H3 przed H2).",
            "5. Słaba wersja mobilna i „skaczące” elementy podczas ładowania (błąd CLS).",
            "6. Zepsute linki wewnętrzne i błędy 404 bez poprawnych przekierowań 301.",
            "7. Brakujące lub nieinformacyjne atrybuty „alt” obrazów.",
            "8. Nieuporządkowany plik robots.txt, blokujący indeksowanie ważnych podstron.",
            "9. Brak pliku Sitemap.xml lub wskazane w nim nieistniejące podstrony.",
            "10. Brakujące znaczniki kanoniczne (canonical), powodujące duplikację treści."
          ]
        },
        {
          "heading": "2. Jak sprawdzić, czy Twoja strona ma te błędy?",
          "paragraphs": [
            "Bezpłatne narzędzie Google Search Console pokazuje, które podstrony Google w ogóle zindeksował, jakie błędy zostały wykryte i przez jakie słowa kluczowe Twoja strona już się pojawia w wynikach wyszukiwania. To pierwszy krok do zrozumienia rzeczywistego stanu SEO Twojej strony.",
            "Narzędzie Google Rich Results Test pozwala sprawdzić, czy Twoje dane strukturalne (Schema.org) są poprawne i czy Google w ogóle je rozpoznaje."
          ]
        },
        {
          "heading": "3. Dlaczego te błędy są ryzykowne w długiej perspektywie?",
          "paragraphs": [
            "Błędy SEO rzadko powodują natychmiastową, zauważalną szkodę — działają stopniowo. Strona bez danych strukturalnych nadal „działa”, ale powoli traci szansę na znalezienie się na szczycie wyników wyszukiwania, gdzie konkurenci z uporządkowaną bazą techniczną wyprzedzają ją miesiąc po miesiącu.",
            "Ponieważ naprawienie tych błędów jest znacznie tańsze podczas tworzenia nowej strony niż przy późniejszej przebudowie już działającej witryny, warto uwzględnić techniczny audyt SEO w pierwotnym zakresie projektu, a nie zostawiać go na „później”."
          ]
        }
      ],
      "takeaways": [
        "Techniczne SEO to fundament — bez niego żadna treść nie osiągnie szczytu Google.",
        "SiteStudio wdraża w każdej stronie w 100% technicznie uporządkowaną architekturę SEO.",
        "Regularnie sprawdzaj swoją stronę za pomocą bezpłatnego narzędzia Google Search Console."
      ]
    },
    "lv": {
      "title": "10 biežākās SEO kļūdas, kuru dēļ biznesa mājaslapas nesaņem apmeklētājus",
      "description": "Ko biznesi visbiežāk palaiž garām: nepareizi meta tagi, lēna ielāde, trūkstoši strukturētie dati un kā to novērst.",
      "intro": "Izveidot vizuāli pievilcīgu mājaslapu ir tikai puse darba. Ja mājaslapai ir tehniskas SEO kļūdas, Google meklēšanas roboti vienkārši to nesapratīs vai novērtēs zemāk. Lūk, 10 kritiskas SEO kļūdas, ko redzam, analizējot biznesa mājaslapas Lietuvā.",
      "sections": [
        {
          "heading": "1. 10 kritisko SEO kļūdu saraksts",
          "paragraphs": [
            "1. Dublēti vai pārāk gari Meta Title un Description ieraksti (Google nogriež nosaukumus, kas garāki par 60 rakstzīmēm).",
            "2. Trūkstoši Schema.org JSON-LD strukturētie dati — Google nesaprot, kas ir organizācija, pakalpojums vai BUJ.",
            "3. Lēnas lapas nepietiekami optimizētu, vairāku megabaitu lielu attēlu dēļ bez WebP/AVIF formātiem.",
            "4. Nepareiza virsrakstu hierarhija (piem., vairāki H1 vienā lapā vai H3 pirms H2).",
            "5. Slikta mobilā versija un elementu 'lēkāšana' ielādes laikā (CLS kļūda).",
            "6. Salauztas iekšējās saites un 404 kļūdas bez pareizas 301 novirzīšanas.",
            "7. Trūkstoši vai neinformatīvi attēlu 'alt' atribūti.",
            "8. Nesakārtots robots.txt fails, kas bloķē svarīgu lapu indeksāciju.",
            "9. Nav Sitemap.xml faila, vai tajā norādītas neesošas lapas.",
            "10. Trūkstoši kanoniskie (canonical) tagi, kas rada satura dublēšanos."
          ]
        },
        {
          "heading": "2. Kā pārbaudīt, vai jūsu mājaslapai ir šīs kļūdas?",
          "paragraphs": [
            "Bezmaksas Google Search Console rīks parāda, kuras lapas Google vispār ir indeksējis, kādas kļūdas atklātas un ar kādiem atslēgvārdiem jūsu mājaslapa jau parādās meklēšanā. Tas ir pirmais solis, lai saprastu reālo savas mājaslapas SEO stāvokli.",
            "Google Rich Results Test rīks ļauj pārbaudīt, vai jūsu strukturētie dati (Schema.org) ir pareizi un vai Google tos vispār atpazīst."
          ]
        },
        {
          "heading": "3. Kāpēc šīs kļūdas ir riskantas ilgtermiņā?",
          "paragraphs": [
            "SEO kļūdas reti izraisa acumirklī pamanāmu kaitējumu — tās iedarbojas pakāpeniski. Mājaslapa bez strukturētiem datiem turpina 'darboties', taču lēnām zaudē iespējas nonākt meklēšanas rezultātu augšgalā, kur konkurenti ar sakārtotu tehnisko bāzi to apsteidz mēnesi pēc mēneša.",
            "Tā kā šīs kļūdas ir daudz lētāk novērst jaunas mājaslapas izstrādes laikā nekā vēlāk pārtaisot jau darbojošos mājaslapu, ir vērts tehnisko SEO pārbaudi iekļaut sākotnējā projekta apjomā, nevis atstāt 'vēlākam posmam'."
          ]
        }
      ],
      "takeaways": [
        "Tehniskais SEO ir pamats — bez tā nekāds saturs nesasniegs Google virsotni.",
        "SiteStudio visās mājaslapās integrē 100% tehniski sakārtotu SEO arhitektūru.",
        "Regulāri pārbaudiet savu mājaslapu, izmantojot bezmaksas Google Search Console rīku."
      ]
    },
    "et": {
      "title": "10 kõige levinumat SEO viga, mille tõttu ettevõtte veebilehed ei saa külastajaid",
      "description": "Mida ettevõtted kõige sagedamini vahele jätavad: valed meta-sildid, aeglane laadimine, puuduvad struktureeritud andmed ja kuidas seda parandada.",
      "intro": "Visuaalselt atraktiivse veebilehe loomine on ainult pool tööst. Kui veebilehel on tehnilisi SEO vigu, ei mõista Google'i otsingurobotid seda lihtsalt õigesti või alahindavad seda. Siin on 10 kriitilist SEO viga, mida näeme ettevõtete veebilehti analüüsides.",
      "sections": [
        {
          "heading": "1. 10 kriitilise SEO vea nimekiri",
          "paragraphs": [
            "1. Dubleeritud või liiga pikad Meta Title ja Description sissekanded (Google lõikab ära pealkirjad, mis on pikemad kui 60 tähemärki).",
            "2. Puuduvad Schema.org JSON-LD struktureeritud andmed — Google ei mõista, mis on organisatsioon, teenus või KKK.",
            "3. Aeglased lehed optimeerimata, mitme megabaidi suuruste piltide tõttu ilma WebP/AVIF formaatideta.",
            "4. Vale pealkirjade hierarhia (nt mitu H1 ühel lehel või H3 enne H2-te).",
            "5. Halb mobiiliversioon ja elementide hüplemine laadimise ajal (CLS viga).",
            "6. Katkised sisemised lingid ja 404-vead ilma korrektsete 301-suunamisteta.",
            "7. Puuduvad või mitteinformatiivsed piltide 'alt'-atribuudid.",
            "8. Korrastamata robots.txt fail, mis blokeerib oluliste lehtede indekseerimist.",
            "9. Puudub Sitemap.xml fail või selles viidatakse olematutele lehtedele.",
            "10. Puuduvad canonical-sildid, mis põhjustavad sisu dubleerimist."
          ]
        },
        {
          "heading": "2. Kuidas kontrollida, kas sinu veebilehel on neid vigu?",
          "paragraphs": [
            "Tasuta Google Search Console tööriist näitab, millised lehed Google üldse indekseeris, millised vead avastati ja milliste märksõnadega sinu veebileht juba otsingus kuvatakse. See on esimene samm, et mõista oma veebilehe reaalset SEO olukorda.",
            "Google Rich Results Test tööriist võimaldab kontrollida, kas sinu struktureeritud andmed (Schema.org) on korrektsed ja kas Google need üldse ära tunneb."
          ]
        },
        {
          "heading": "3. Miks on need vead pikas perspektiivis riskantsed?",
          "paragraphs": [
            "SEO vead põhjustavad harva silmapaistvat kahju kohe — need mõjuvad järk-järgult. Veebileht ilma struktureeritud andmeteta 'töötab' edasi, kuid kaotab aeglaselt võimaluse jõuda otsingutulemuste tippu, kus konkurendid korrastatud tehnilise baasiga temast kuu-kuult mööda lähevad.",
            "Kuna neid vigu on palju odavam parandada uue veebilehe loomise ajal kui hiljem juba töötavat veebilehte ümber tehes, tasub tehnilise SEO kontrolli projekti algsesse mahtu kaasata, mitte jätta 'hilisemaks etapiks'."
          ]
        }
      ],
      "takeaways": [
        "Tehniline SEO on alus — ilma selleta ei jõua ükski sisu Google'i tippu.",
        "SiteStudio integreerib kõikidesse veebilehtedesse 100% tehniliselt korras SEO-arhitektuuri.",
        "Kontrolli regulaarselt oma veebilehte tasuta Google Search Console tööriistaga."
      ]
    },
    "ru": {
      "title": "10 самых частых SEO-ошибок, из-за которых бизнес-сайты не получают посетителей",
      "description": "Что чаще всего упускают компании: неправильные мета-теги, медленная загрузка, отсутствующие структурированные данные и как это исправить.",
      "intro": "Создать визуально привлекательный сайт — это только половина дела. Если на сайте есть технические SEO-ошибки, поисковые роботы Google просто не поймут его или недооценят. Вот 10 критических SEO-ошибок, которые мы видим, анализируя бизнес-сайты в Литве.",
      "sections": [
        {
          "heading": "1. Список из 10 критических SEO-ошибок",
          "paragraphs": [
            "1. Дублированные или слишком длинные записи Meta Title и Description (Google обрезает заголовки длиннее 60 символов).",
            "2. Отсутствующие структурированные данные Schema.org JSON-LD — Google не понимает, что перед ним: организация, услуга или FAQ.",
            "3. Медленные страницы из-за неоптимизированных, весящих несколько мегабайт изображений без форматов WebP/AVIF.",
            "4. Неправильная иерархия заголовков (например, несколько H1 на одной странице или H3 перед H2).",
            "5. Плохая мобильная версия и «прыжки» элементов при загрузке (ошибка CLS).",
            "6. Битые внутренние ссылки и ошибки 404 без правильных 301-редиректов.",
            "7. Отсутствующие или неинформативные атрибуты 'alt' у изображений.",
            "8. Неаккуратный файл robots.txt, блокирующий индексацию важных страниц.",
            "9. Отсутствует файл Sitemap.xml, либо в нём указаны несуществующие страницы.",
            "10. Отсутствующие канонические (canonical) теги, вызывающие дублирование контента."
          ]
        },
        {
          "heading": "2. Как проверить, есть ли на вашем сайте эти ошибки?",
          "paragraphs": [
            "Бесплатный инструмент Google Search Console показывает, какие страницы Google вообще проиндексировал, какие ошибки обнаружены и по каким ключевым словам ваш сайт уже показывается в поиске. Это первый шаг к пониманию реального состояния SEO вашего сайта.",
            "Инструмент Google Rich Results Test позволяет проверить, правильны ли ваши структурированные данные (Schema.org) и распознаёт ли их Google вообще."
          ]
        },
        {
          "heading": "3. Насколько эти ошибки рискованны в долгосрочной перспективе?",
          "paragraphs": [
            "SEO-ошибки редко вызывают мгновенно заметный ущерб — они действуют постепенно. Сайт без структурированных данных продолжает «работать», но постепенно теряет возможности оказаться на вершине результатов поиска, где конкуренты с аккуратной технической базой обгоняют его месяц за месяцем.",
            "Поскольку исправить эти ошибки гораздо дешевле на этапе создания нового сайта, чем позже переделывать уже работающий сайт, стоит включить техническую SEO-проверку в первоначальный объём проекта, а не оставлять на «более поздний этап»."
          ]
        }
      ],
      "takeaways": [
        "Техническое SEO — это фундамент, без которого никакой контент не достигнет вершины Google.",
        "SiteStudio внедряет на всех сайтах на 100% технически аккуратную SEO-архитектуру.",
        "Регулярно проверяйте свой сайт через бесплатный инструмент Google Search Console."
      ]
    }
  },
  "kaip-sukurti-efektyvu-landing-page": {
    "en": {
      "title": "How to build a landing page that actually converts",
      "description": "The anatomy of a successful landing page: headlines, trust elements, the offer, and CTA buttons.",
      "intro": "A landing page has a single purpose — turning a visitor into a customer. There are no distracting menu items or unnecessary links here. Every element, color, and word should lead toward one action: an inquiry, a call, or a purchase.",
      "sections": [
        {
          "heading": "1. The structure of a successful landing page",
          "paragraphs": [
            "Hero section: A clear value proposition within 3 seconds. Who you are, what you offer, and why it's worth choosing you.",
            "Social proof: Real customer reviews, certifications, photos of completed work.",
            "Problem-and-solution contrast: Show the problems your customer faces and how your service solves them.",
            "A simple inquiry form: No more than 2–3 fields (Name, Contact, Message)."
          ]
        },
        {
          "heading": "2. Common mistakes when building a landing page",
          "paragraphs": [
            "Too much information in one place: trying to describe all your services, your company's entire history, and every benefit on a single page creates chaos. A landing page has one goal — one offer.",
            "A vague call to action (CTA): a button that reads 'Learn more' is weak. A specific, action-naming text — 'Get a free quote' or 'Request a callback' — converts far better.",
            "A long, complicated form: every extra field in a form reduces the likelihood a visitor will fill it out. Ask only for the bare essentials — you'll clarify the rest during the actual conversation."
          ]
        },
        {
          "heading": "3. Why technology matters for landing page speed",
          "paragraphs": [
            "Since landing pages are often used together with paid advertising (Google Ads, Meta Ads), every extra second of load time directly costs you money — you're paying for the clicks, and a slow-loading page will lose part of your already-paid-for visitors before they even see the offer.",
            "That's why it's worth applying the same principle to a landing page's technology foundation as to the entire website — static generation and minimal use of external scripts, so the page opens in milliseconds rather than seconds."
          ]
        }
      ],
      "takeaways": [
        "One page — one clear message and one main call-to-action button.",
        "Remove every distracting element so the visitor's attention stays on the offer.",
        "If you're running paid ads, page speed directly affects your ad budget's efficiency."
      ]
    },
    "pl": {
      "title": "Jak stworzyć jednostronicową stronę (landing page), która konwertuje?",
      "description": "Anatomia skutecznego landing page: nagłówki, elementy budujące zaufanie, oferta i przyciski CTA.",
      "intro": "Landing page (strona docelowa) ma jeden jedyny cel — zamienić odwiedzającego w klienta. Nie ma tu żadnych rozpraszających pozycji menu ani zbędnych linków. Każdy element, kolor i słowo musi prowadzić do jednego działania: zapytania, telefonu lub zakupu.",
      "sections": [
        {
          "heading": "1. Struktura skutecznego landing page",
          "paragraphs": [
            "Sekcja hero: Jasna propozycja wartości w ciągu 3 sekund. Kim jesteś, co oferujesz i dlaczego warto wybrać właśnie Ciebie.",
            "Dowód społeczny (Social Proof): Prawdziwe opinie klientów, certyfikaty, zdjęcia zrealizowanych prac.",
            "Kontrast problemu i rozwiązania: Pokaż, z jakimi problemami boryka się klient i jak Twoja usługa je rozwiązuje.",
            "Prosty formularz zapytania: Nie więcej niż 2–3 pola (Imię, Kontakt, Wiadomość)."
          ]
        },
        {
          "heading": "2. Najczęstsze błędy przy tworzeniu landing page",
          "paragraphs": [
            "Zbyt dużo informacji w jednym miejscu: próba opowiedzenia o wszystkich usługach, całej historii firmy i wszystkich zaletach na jednej podstronie tworzy chaos. Landing page ma jeden cel — jedną ofertę.",
            "Niejasne wezwanie do działania (CTA): przycisk z napisem „Dowiedz się więcej” jest słaby. Konkretny, nazywający działanie tekst — „Uzyskaj bezpłatną wycenę” lub „Zamów rozmowę” — konwertuje znacznie lepiej.",
            "Długi, skomplikowany formularz: każde dodatkowe pole w formularzu zmniejsza prawdopodobieństwo, że odwiedzający go wypełni. Proś tylko o niezbędne informacje, resztę wyjaśnisz już podczas rozmowy."
          ]
        },
        {
          "heading": "3. Znaczenie technologii dla szybkości landing page",
          "paragraphs": [
            "Ponieważ landing page jest często wykorzystywany razem z reklamą płatną (Google Ads, Meta Ads), każda dodatkowa sekunda ładowania bezpośrednio kosztuje pieniądze — płacisz za kliknięcia, a wolno ładująca się strona traci część już opłaconych odwiedzających, zanim jeszcze zobaczą ofertę.",
            "Dlatego dla podstawy technologicznej landing page warto wybrać tę samą zasadę co dla całej strony — generowanie statyczne i minimalną liczbę skryptów zewnętrznych, aby strona otwierała się w milisekundach, a nie w sekundach."
          ]
        }
      ],
      "takeaways": [
        "Jedna strona — jeden jasny przekaz i jeden główny przycisk działania.",
        "Usuń wszystkie rozpraszające elementy, aby odwiedzający skupił się na ofercie.",
        "Jeśli korzystasz z reklamy płatnej, szybkość strony bezpośrednio wpływa na efektywność Twojego budżetu reklamowego."
      ]
    },
    "lv": {
      "title": "Kā izveidot vienas lapas mājaslapu (landing page), kas konvertē?",
      "description": "Veiksmīga landing page anatomija: virsraksti, uzticības elementi, piedāvājums un CTA pogas.",
      "intro": "Landing page (nosūtīšanas lapa) ir tikai viens mērķis — pārvērst apmeklētāju par klientu. Šeit nav nekādu novēršošu izvēlnes punktu vai lieku saišu. Katram elementam, krāsai un vārdam jāved uz vienu darbību: pieprasījumu, zvanu vai pirkumu.",
      "sections": [
        {
          "heading": "1. Veiksmīga Landing Page struktūra",
          "paragraphs": [
            "Hero sekcija: Skaidrs vērtības piedāvājums 3 sekunžu laikā. Kas jūs esat, ko piedāvājat un kāpēc izvēlēties tieši jūs.",
            "Sociālais pierādījums (Social Proof): Reālas klientu atsauksmes, sertifikāti, paveikto darbu fotogrāfijas.",
            "Problēmas un risinājuma kontrasts: Parādiet, ar kādām problēmām saskaras klients un kā jūsu pakalpojums tās atrisina.",
            "Vienkārša pieprasījuma forma: Ne vairāk par 2–3 laukiem (Vārds, Kontakti, Ziņa)."
          ]
        },
        {
          "heading": "2. Biežākās kļūdas, veidojot landing page",
          "paragraphs": [
            "Pārāk daudz informācijas vienuviet: mēģinājums pastāstīt par visiem pakalpojumiem, visu uzņēmuma vēsturi un visām priekšrocībām vienā lapā rada haosu. Landing page ir viens mērķis — viens piedāvājums.",
            "Neskaidrs aicinājums uz darbību (CTA): poga ar uzrakstu 'Uzzināt vairāk' ir vāja. Konkrēts, darbību nosaucošs teksts — 'Saņemt bezmaksas tāmi' vai 'Pieteikt zvanu' — konvertē krietni labāk.",
            "Gara, sarežģīta forma: katrs papildu lauks formā samazina iespēju, ka apmeklētājs to aizpildīs. Lūdziet tikai nepieciešamāko informāciju, pārējos jautājumus noskaidrosiet jau sarunas laikā."
          ]
        },
        {
          "heading": "3. Tehnoloģijas nozīme landing page ātrumam",
          "paragraphs": [
            "Tā kā landing page bieži tiek izmantota kopā ar maksas reklāmu (Google Ads, Meta Ads), katra papildu ielādes sekunde tieši maksā naudu — jūs maksājat par klikšķiem, un lēni ielādēta lapa zaudēs daļu jau apmaksāto apmeklētāju vēl pirms tie ieraudzīs piedāvājumu.",
            "Tāpēc landing page tehnoloģiskajam pamatam ir vērts izvēlēties to pašu principu kā visai mājaslapai — statisko ģenerēšanu un minimālu ārējo skriptu skaitu, lai lapa atvērtos milisekunžu, nevis sekunžu laikā."
          ]
        }
      ],
      "takeaways": [
        "Viena lapa — viens skaidrs vēstījums un viena galvenā darbības poga.",
        "Novērsiet visus novēršošos elementus, lai apmeklētājs koncentrētos uz piedāvājumu.",
        "Ja izmantojat maksas reklāmu, lapas ātrums tieši ietekmē jūsu reklāmas budžeta efektivitāti."
      ]
    },
    "et": {
      "title": "Kuidas luua konverteeriv üheleheline veebileht (landing page)?",
      "description": "Eduka landing page'i anatoomia: pealkirjad, usalduselemendid, pakkumine ja CTA nupud.",
      "intro": "Landing page'il (suunamislehel) on ainult üks eesmärk — muuta külastaja kliendiks. Siin pole segavaid menüüpunkte ega üleliigseid linke. Iga element, värv ja sõna peab viima ühe tegevuseni: päringu, kõne või ostuni.",
      "sections": [
        {
          "heading": "1. Eduka landing page'i struktuur",
          "paragraphs": [
            "Hero-sektsioon: Selge väärtuspakkumine 3 sekundiga. Kes sa oled, mida pakud ja miks tasub just sind valida.",
            "Sotsiaalne tõestus (Social Proof): Päris klientide arvustused, sertifikaadid, tehtud tööde fotod.",
            "Probleemi ja lahenduse kontrast: Näita, milliste probleemidega klient kokku puutub ja kuidas sinu teenus need lahendab.",
            "Lihtne päringuvorm: Mitte rohkem kui 2–3 välja (nimi, kontakt, sõnum)."
          ]
        },
        {
          "heading": "2. Kõige sagedasemad vead landing page'i loomisel",
          "paragraphs": [
            "Liiga palju infot ühes kohas: katse rääkida kõikidest teenustest, kogu ettevõtte ajaloost ja kõikidest eelistest ühel lehel loob kaose. Landing page'il peab olema üks eesmärk — üks pakkumine.",
            "Ebaselge tegevuskutse (CTA): nupp tekstiga 'Loe rohkem' on nõrk. Konkreetne, tegevust nimetav tekst — 'Küsi tasuta hinnapakkumist' või 'Telli kõne' — konverteerib oluliselt paremini.",
            "Pikk, keeruline vorm: iga lisaväli vormis vähendab tõenäosust, et külastaja selle täidab. Küsi ainult kõige vajalikumat infot, ülejäänud küsimused selgitad juba vestluse käigus."
          ]
        },
        {
          "heading": "3. Tehnoloogia tähtsus landing page'i kiirusele",
          "paragraphs": [
            "Kuna landing page'i kasutatakse tihti koos tasulise reklaamiga (Google Ads, Meta Ads), maksab iga lisasekund laadimisajas otse raha — maksad klikkide eest, ja aeglaselt laadiv leht kaotab osa juba tasutud külastajatest juba enne, kui nad pakkumist näevad.",
            "Seetõttu tasub landing page'i tehnoloogilise aluse jaoks valida sama põhimõte, mis kogu veebilehe puhul — staatiline genereerimine ja minimaalne väliste skriptide hulk, et leht avaneks millisekunditega, mitte sekunditega."
          ]
        }
      ],
      "takeaways": [
        "Üks leht — üks selge sõnum ja üks peamine tegevusnupp.",
        "Eemalda kõik segavad elemendid, et külastaja keskenduks pakkumisele.",
        "Kui kasutad tasulist reklaami, mõjutab lehe kiirus otseselt sinu reklaamieelarve tõhusust."
      ]
    },
    "ru": {
      "title": "Как создать одностраничный сайт (лендинг), который конвертирует?",
      "description": "Анатомия успешного лендинга: заголовки, элементы доверия, предложение и кнопки CTA.",
      "intro": "У лендинга (посадочной страницы) единственная цель — превратить посетителя в клиента. Здесь нет никаких отвлекающих пунктов меню или лишних ссылок. Каждый элемент, цвет и слово должны вести к одному действию: заявке, звонку или покупке.",
      "sections": [
        {
          "heading": "1. Структура успешного лендинга",
          "paragraphs": [
            "Hero-секция: ясное ценностное предложение за 3 секунды. Кто вы, что предлагаете и почему стоит выбрать именно вас.",
            "Социальное доказательство (Social Proof): реальные отзывы клиентов, сертификаты, фотографии выполненных работ.",
            "Контраст проблемы и решения: покажите, с какими проблемами сталкивается клиент и как ваша услуга их решает.",
            "Простая форма заявки: не более 2–3 полей (Имя, Контакты, Сообщение)."
          ]
        },
        {
          "heading": "2. Частые ошибки при создании лендинга",
          "paragraphs": [
            "Слишком много информации в одном месте: попытка рассказать обо всех услугах, всей истории компании и всех преимуществах на одной странице создаёт хаос. У лендинга должна быть одна цель — одно предложение.",
            "Неясный призыв к действию (CTA): кнопка с надписью «Узнать больше» слабая. Конкретный, называющий действие текст — «Получить бесплатную смету» или «Заказать звонок» — конвертирует значительно лучше.",
            "Длинная, сложная форма: каждое дополнительное поле в форме снижает вероятность того, что посетитель её заполнит. Просите только самую необходимую информацию, остальные вопросы вы выясните уже в разговоре."
          ]
        },
        {
          "heading": "3. Важность технологии для скорости лендинга",
          "paragraphs": [
            "Поскольку лендинг часто используется вместе с платной рекламой (Google Ads, Meta Ads), каждая дополнительная секунда загрузки напрямую стоит денег — вы платите за клики, а медленно загружающаяся страница потеряет часть уже оплаченных посетителей ещё до того, как они увидят предложение.",
            "Поэтому для технологической основы лендинга стоит выбирать тот же принцип, что и для всего сайта — статическую генерацию и минимальное количество внешних скриптов, чтобы страница открывалась за миллисекунды, а не секунды."
          ]
        }
      ],
      "takeaways": [
        "Одна страница — одно ясное сообщение и одна главная кнопка действия.",
        "Уберите все отвлекающие элементы, чтобы посетитель сосредоточился на предложении.",
        "Если вы используете платную рекламу, скорость страницы напрямую влияет на эффективность вашего рекламного бюджета."
      ]
    }
  },
  "interneto-svetaines-prieziura": {
    "en": {
      "title": "What does professional website maintenance and security actually cover?",
      "description": "Why a website needs ongoing monitoring, backups, and technical updates.",
      "intro": "The work doesn't end once a website launches. The internet is a dynamic environment: new browser requirements appear, security protocols get updated, and servers need regular backups. In this guide we explain why maintenance is the best insurance policy for your business.",
      "sections": [
        {
          "heading": "1. What does professional maintenance cover?",
          "paragraphs": [
            "Daily backups: Stored in an independent cloud storage, so that in the event of any disaster the website can be restored within 15 minutes.",
            "Uptime monitoring: Automated systems check the website's availability every minute. If an outage occurs, the developer responds immediately.",
            "Security certificates and updates: Renewing SSL certificates, installing security patches, and protecting against DDoS attacks."
          ]
        },
        {
          "heading": "2. What happens without maintenance?",
          "paragraphs": [
            "Without regular maintenance, a website gradually 'ages' — outdated technology becomes vulnerable to new security threats, and without backups, any server failure or accidental deletion can mean a total loss of data.",
            "An even more common problem is an expired or misconfigured SSL certificate. In that case, the browser displays a 'Connection not secure' warning, which instantly destroys a visitor's trust, and they simply close the page."
          ]
        },
        {
          "heading": "3. How to choose a maintenance plan based on your website type",
          "paragraphs": [
            "A static brochure website without a database only needs a basic plan — backups, uptime monitoring, and occasional security updates.",
            "An online store or a website with a database (orders, customer accounts) needs more frequent backups (daily rather than weekly) and a faster response time in case of an outage, since downtime here directly means lost sales."
          ]
        }
      ],
      "takeaways": [
        "SiteStudio maintenance plans start from €8–10/month with no long-term mandatory commitment.",
        "Without backups, any server incident can mean irreversible data loss.",
        "Online stores and systems with a database require more frequent and active maintenance than a static website."
      ]
    },
    "pl": {
      "title": "Co obejmuje profesjonalna opieka i bezpieczeństwo strony internetowej?",
      "description": "Dlaczego strona potrzebuje ciągłego monitoringu, kopii zapasowych i aktualizacji technicznych.",
      "intro": "Po uruchomieniu strony praca się nie kończy. Internet to dynamiczne środowisko: pojawiają się nowe wymagania przeglądarek, aktualizowane są protokoły bezpieczeństwa, a serwery wymagają regularnych kopii zapasowych. W tym przewodniku wyjaśniamy, dlaczego opieka techniczna jest najlepszym ubezpieczeniem dla Twojej firmy.",
      "sections": [
        {
          "heading": "1. Co obejmuje profesjonalna opieka techniczna?",
          "paragraphs": [
            "Codzienne kopie zapasowe: Przechowywane w niezależnym magazynie w chmurze, aby w razie awarii stronę można było przywrócić w ciągu 15 minut.",
            "Monitoring działania (Uptime monitoring): Automatyczne systemy sprawdzają dostępność strony co minutę. W przypadku awarii programista reaguje natychmiast.",
            "Certyfikaty bezpieczeństwa i aktualizacje: Odnawianie certyfikatów SSL, wdrażanie pakietów zabezpieczeń i ochrona przed atakami DDoS."
          ]
        },
        {
          "heading": "2. Co się dzieje, gdy brakuje opieki technicznej?",
          "paragraphs": [
            "Bez regularnej opieki strona stopniowo „się starzeje” — przestarzałe technologie stają się podatne na nowe zagrożenia bezpieczeństwa, a bez kopii zapasowych każda awaria serwera czy przypadkowe usunięcie danych może oznaczać całkowitą utratę danych.",
            "Jeszcze częstszym problemem jest wygasły lub źle skonfigurowany certyfikat SSL. Przeglądarka pokazuje wtedy ostrzeżenie „Połączenie niezabezpieczone”, które natychmiast burzy zaufanie odwiedzającego, który po prostu zamyka stronę."
          ]
        },
        {
          "heading": "3. Jak wybrać plan opieki technicznej według typu strony?",
          "paragraphs": [
            "Dla statycznej strony wizytówkowej bez bazy danych wystarczy plan podstawowy — kopie zapasowe, monitoring działania i rzadkie aktualizacje bezpieczeństwa.",
            "Dla sklepu internetowego lub strony z bazą danych (zamówienia, konta klientów) zalecane są częstsze kopie zapasowe (codziennie, a nie raz w tygodniu) i szybszy czas reakcji w przypadku awarii, ponieważ przestój oznacza tu bezpośrednio utraconą sprzedaż."
          ]
        }
      ],
      "takeaways": [
        "Plany opieki technicznej SiteStudio zaczynają się od 8–10 €/mies. bez żadnych długoterminowych zobowiązań.",
        "Bez kopii zapasowych każdy incydent na serwerze może oznaczać nieodwracalną utratę danych.",
        "Sklepy internetowe i systemy z bazą danych wymagają częstszej i bardziej aktywnej opieki niż statyczna strona."
      ]
    },
    "lv": {
      "title": "Ko ietver profesionāla mājaslapas uzturēšana un drošība?",
      "description": "Kāpēc mājaslapai nepieciešams pastāvīgs monitorings, rezerves kopijas un tehniska atjaunināšana.",
      "intro": "Palaižot mājaslapu, darbs nebeidzas. Internets ir dinamiska vide: rodas jaunas pārlūku prasības, tiek atjaunināti drošības protokoli, bet serveriem nepieciešamas regulāras rezerves kopijas. Šajā ceļvedī paskaidrojam, kāpēc uzturēšana ir labākā apdrošināšana jūsu biznesam.",
      "sections": [
        {
          "heading": "1. Ko ietver profesionāla uzturēšana?",
          "paragraphs": [
            "Ikdienas rezerves kopijas: Tiek glabātas neatkarīgā mākoņa krātuvē, lai jebkuras avārijas gadījumā mājaslapu varētu atjaunot 15 minūšu laikā.",
            "Darbības monitorings (Uptime monitoring): Automātiskas sistēmas pārbauda mājaslapas pieejamību ik minūti. Iestājoties traucējumam, izstrādātājs reaģē nekavējoties.",
            "Drošības sertifikāti un atjauninājumi: SSL sertifikātu atjaunināšana, drošības pakotņu ieviešana un aizsardzība pret DDoS uzbrukumiem."
          ]
        },
        {
          "heading": "2. Kas notiek, ja uzturēšanas nav?",
          "paragraphs": [
            "Bez regulāras uzturēšanas mājaslapa pamazām 'noveco' — novecojušas tehnoloģijas kļūst neaizsargātas pret jauniem drošības draudiem, bet bez rezerves kopijām jebkurš servera bojājums vai nejauša dzēšana var nozīmēt pilnīgu datu zaudējumu.",
            "Vēl biežāka problēma — beidzies vai nepareizi konfigurēts SSL sertifikāts. Pārlūks šādā gadījumā rāda brīdinājumu 'Savienojums nav drošs', kas acumirklī sagrauj apmeklētāja uzticību, un viņš vienkārši aizver lapu."
          ]
        },
        {
          "heading": "3. Kā izvēlēties uzturēšanas plānu atbilstoši mājaslapas tipam?",
          "paragraphs": [
            "Statiskai reprezentatīvai mājaslapai bez datubāzes pietiek ar bāzes plānu — rezerves kopijām, darbības monitoringu un retiem drošības atjauninājumiem.",
            "E-veikalam vai mājaslapai ar datubāzi (pasūtījumi, klientu konti) ieteicama biežāka rezerves kopiju veidošana (katru dienu, nevis reizi nedēļā) un ātrāks reaģēšanas laiks traucējuma gadījumā, jo šeit apstājusies darbība tieši nozīmē zaudētu pārdošanu."
          ]
        }
      ],
      "takeaways": [
        "SiteStudio uzturēšanas plāni sākas no 8–10 €/mēn. bez jebkādām ilgtermiņa obligātām saistībām.",
        "Bez rezerves kopijām jebkurš servera incidents var nozīmēt neatgriezenisku datu zudumu.",
        "E-veikaliem un sistēmām ar datubāzi nepieciešama biežāka un aktīvāka uzturēšana nekā statiskai mājaslapai."
      ]
    },
    "et": {
      "title": "Mida hõlmab professionaalne veebilehe hooldus ja turvalisus?",
      "description": "Miks vajab veebileht pidevat jälgimist, varukoopiaid ja tehnilist uuendamist.",
      "intro": "Pärast veebilehe käivitamist töö ei lõpe. Internet on dünaamiline keskkond: tekivad uued brauserinõuded, uuendatakse turvaprotokolle, serverid vajavad regulaarseid varukoopiaid. Selles juhendis selgitame, miks hooldus on sinu ettevõtte parim kindlustus.",
      "sections": [
        {
          "heading": "1. Mida hõlmab professionaalne hooldus?",
          "paragraphs": [
            "Igapäevased varukoopiad: Salvestatakse sõltumatus pilvehoidlas, et mis tahes avarii korral saaks veebilehe taastada 15 minutiga.",
            "Toimimise jälgimine (uptime monitoring): Automaatsed süsteemid kontrollivad veebilehe kättesaadavust iga minut. Tõrke korral reageerib arendaja koheselt.",
            "Turvasertifikaadid ja uuendused: SSL-sertifikaatide uuendamine, turvapakettide paigaldamine ja kaitse DDoS-rünnete eest."
          ]
        },
        {
          "heading": "2. Mis juhtub, kui hooldust pole?",
          "paragraphs": [
            "Ilma regulaarse hoolduseta veebileht järk-järgult 'vananeb' — vananenud tehnoloogiad muutuvad haavatavaks uutele turvaohtudele ning ilma varukoopiateta võib mis tahes serveririke või ekslik kustutamine tähendada täielikku andmete kaotust.",
            "Veel sagedasem probleem — aegunud või valesti seadistatud SSL-sertifikaat. Brauser kuvab sel juhul hoiatuse 'Ühendus pole turvaline', mis hetkega hävitab külastaja usalduse ning ta lihtsalt sulgeb lehe."
          ]
        },
        {
          "heading": "3. Kuidas valida hooldusplaan vastavalt veebilehe tüübile?",
          "paragraphs": [
            "Staatilisele esindusveebilehele ilma andmebaasita piisab baasplaanist — varukoopiad, toimimise jälgimine ja harvad turvauuendused.",
            "E-poele või andmebaasiga veebilehele (tellimused, kliendikontod) soovitatakse tihedamat varundamist (iga päev, mitte kord nädalas) ja kiiremat reageerimisaega tõrke korral, sest siin tähendab töö seiskumine otseselt kaotatud müüki."
          ]
        }
      ],
      "takeaways": [
        "SiteStudio hooldusplaanid algavad 8–10 €/kuus ilma pikaajaliste kohustuslike siduvate lepinguteta.",
        "Ilma varukoopiateta võib mis tahes serveriintsident tähendada pöördumatut andmete kaotust.",
        "E-poodidele ja andmebaasiga süsteemidele on vaja tihedamat ja aktiivsemat hooldust kui staatilisele veebilehele."
      ]
    },
    "ru": {
      "title": "Что включает профессиональное обслуживание и безопасность сайта?",
      "description": "Почему сайту нужен постоянный мониторинг, резервные копии и техническое обновление.",
      "intro": "После запуска сайта работа не заканчивается. Интернет — динамичная среда: появляются новые требования браузеров, обновляются протоколы безопасности, а серверам нужны регулярные резервные копии. В этом гиде мы объясняем, почему обслуживание — лучшая страховка для вашего бизнеса.",
      "sections": [
        {
          "heading": "1. Что включает профессиональное обслуживание?",
          "paragraphs": [
            "Ежедневные резервные копии: хранятся в независимом облачном хранилище, чтобы в случае любой аварии сайт можно было восстановить за 15 минут.",
            "Мониторинг работоспособности (Uptime monitoring): автоматические системы проверяют доступность сайта каждую минуту. При сбое программист реагирует немедленно.",
            "Сертификаты безопасности и обновления: обновление SSL-сертификатов, установка пакетов безопасности и защита от DDoS-атак."
          ]
        },
        {
          "heading": "2. Что происходит, если обслуживания нет?",
          "paragraphs": [
            "Без регулярного обслуживания сайт постепенно «стареет» — устаревшие технологии становятся уязвимы для новых угроз безопасности, а без резервных копий любой сбой сервера или случайное удаление может означать полную потерю данных.",
            "Ещё более частая проблема — истёкший или неправильно настроенный SSL-сертификат. В таком случае браузер показывает предупреждение «Соединение небезопасно», которое мгновенно разрушает доверие посетителя, и он просто закрывает страницу."
          ]
        },
        {
          "heading": "3. Как выбрать план обслуживания в зависимости от типа сайта?",
          "paragraphs": [
            "Для статичного имиджевого сайта без базы данных достаточно базового плана — резервных копий, мониторинга работоспособности и редких обновлений безопасности.",
            "Для интернет-магазина или сайта с базой данных (заказы, личные кабинеты клиентов) рекомендуется более частое создание резервных копий (ежедневно, а не раз в неделю) и более быстрое время реагирования в случае сбоя, поскольку здесь остановка работы напрямую означает потерянные продажи."
          ]
        }
      ],
      "takeaways": [
        "Планы обслуживания SiteStudio начинаются от 8–10 €/мес без каких-либо долгосрочных обязательных обязательств.",
        "Без резервных копий любой инцидент на сервере может означать безвозвратную потерю данных.",
        "Интернет-магазинам и системам с базой данных требуется более частое и активное обслуживание, чем статичному сайту."
      ]
    }
  },
  "b2b-svetainiu-kurimas": {
    "en": {
      "title": "Building B2B websites: how to attract business customers online",
      "description": "How B2B websites differ from B2C, and how to present your services to company managers and procurement specialists.",
      "intro": "Business-to-business (B2B) buyers behave completely differently from private consumers. Here, decisions are made rationally, weighing experience, timelines, financial stability, and risk. A B2B website needs to speak a professional, specific language.",
      "sections": [
        {
          "heading": "1. Success factors for a B2B website",
          "paragraphs": [
            "Detailed case studies: Show specific completed projects, including the challenges, the solutions, and the results achieved.",
            "Technical documentation and specifications: The ability to download PDF catalogs, drawings, or certificates.",
            "Direct contact with a specialist: B2B managers don't want to talk to sales bots — they want a fast response from a competent expert."
          ]
        },
        {
          "heading": "2. The particulars of the B2B buying cycle",
          "paragraphs": [
            "Unlike B2C, where a purchasing decision is often made within minutes, a B2B buying cycle can last weeks or months, and several people are involved in the decision — a manager, a procurement specialist, sometimes a technical expert too. The website needs to contain enough information for each of them to find answers relevant to them without an extra phone call.",
            "That's why it's especially important for a B2B website to have downloadable documents (PDF presentations, specifications) that a procurement manager can forward to colleagues for internal discussion."
          ]
        },
        {
          "heading": "3. Content strategy for a B2B website",
          "paragraphs": [
            "A blog with expert articles about the challenges and solutions in your field strengthens professional authority and helps attract organic traffic through specific, less competitive keywords — the kind searched for by B2B buyers, not mass-market consumers.",
            "Clearly stated certifications, standards compliance (ISO and similar), and years of industry experience act as some of the strongest trust signals in a B2B context."
          ]
        }
      ],
      "takeaways": [
        "For a B2B website, transparency, experience, and a clear collaboration process matter most.",
        "B2B purchasing decisions are often made by a team, so the website needs to provide information for every participant.",
        "An expert blog builds authority and attracts targeted B2B keywords."
      ]
    },
    "pl": {
      "title": "Tworzenie stron B2B: jak przyciągnąć klientów biznesowych w internecie?",
      "description": "Czym strony B2B różnią się od B2C i jak prezentować usługi menedżerom firm oraz specjalistom ds. zakupów.",
      "intro": "Klienci biznes-do-biznes (B2B) zachowują się zupełnie inaczej niż konsumenci indywidualni. Tu decyzje podejmowane są racjonalnie, z oceną doświadczenia, terminów, stabilności finansowej i ryzyka. Strona B2B musi mówić profesjonalnym, konkretnym językiem.",
      "sections": [
        {
          "heading": "1. Czynniki sukcesu strony B2B",
          "paragraphs": [
            "Szczegółowe studia przypadków (Case Studies): Pokazuj konkretne zrealizowane projekty wraz z wyzwaniami, rozwiązaniami i osiągniętymi rezultatami.",
            "Dokumentacja techniczna i specyfikacje: Możliwość pobrania katalogów PDF, rysunków technicznych lub certyfikatów.",
            "Bezpośredni kontakt ze specjalistą: Menedżerowie B2B nie chcą rozmawiać z chatbotami sprzedażowymi — chcą szybkiej odpowiedzi od kompetentnego eksperta."
          ]
        },
        {
          "heading": "2. Specyfika cyklu zakupowego B2B",
          "paragraphs": [
            "W odróżnieniu od B2C, gdzie decyzja zakupowa często zapada w ciągu kilku minut, cykl zakupowy B2B może trwać tygodnie lub miesiące, a w decyzji uczestniczy kilka osób — kierownik, specjalista ds. zakupów, czasem także ekspert techniczny. Strona musi zawierać wystarczająco dużo informacji, aby każdy z nich znalazł odpowiedzi bez konieczności dodatkowego telefonu.",
            "Dlatego na stronie B2B szczególnie ważne jest posiadanie dokumentów do pobrania (prezentacji PDF, specyfikacji), które specjalista ds. zakupów mógłby przesłać kolegom do wewnętrznego omówienia."
          ]
        },
        {
          "heading": "3. Strategia treści dla strony B2B",
          "paragraphs": [
            "Blog z eksperckimi artykułami na temat wyzwań i rozwiązań w Twojej branży wzmacnia autorytet zawodowy i pomaga przyciągnąć ruch organiczny poprzez konkretne, mniej konkurencyjne słowa kluczowe, których szukają właśnie kupujący B2B, a nie klienci masowi.",
            "Wyraźnie wskazane certyfikaty, zgodność ze standardami (ISO i podobne) oraz wieloletnie doświadczenie działają w kontekście B2B jako jedne z najsilniejszych sygnałów zaufania."
          ]
        }
      ],
      "takeaways": [
        "Na stronie B2B najważniejsze są przejrzystość, doświadczenie i jasny proces współpracy.",
        "Decyzja zakupowa B2B często podejmowana jest przez zespół, dlatego strona musi mieć informacje dla każdego uczestnika.",
        "Ekspercki blog wzmacnia autorytet i przyciąga docelowe słowa kluczowe B2B."
      ]
    },
    "lv": {
      "title": "B2B mājaslapu izstrāde: kā piesaistīt biznesa klientus internetā?",
      "description": "Kā B2B mājaslapas atšķiras no B2C un kā prezentēt pakalpojumus uzņēmumu vadītājiem un iepirkumu vadītājiem.",
      "intro": "Bizness biznesam (B2B) pircēji uzvedas pilnīgi savādāk nekā privātie patērētāji. Šeit lēmumi tiek pieņemti racionāli, vērtējot pieredzi, termiņus, finansiālo stabilitāti un riskus. B2B mājaslapai jārunā profesionālā, konkrētā valodā.",
      "sections": [
        {
          "heading": "1. B2B mājaslapas panākumu faktori",
          "paragraphs": [
            "Izvērsti gadījumu izpētes (Case Studies): Rādiet konkrētus paveiktos projektus ar izaicinājumiem, risinājumiem un sasniegtajiem rezultātiem.",
            "Tehniskā dokumentācija un specifikācijas: Iespēja lejupielādēt PDF katalogus, rasējumus vai sertifikātus.",
            "Tieša saikne ar speciālistu: B2B vadītāji nevēlas sazināties ar pārdošanas robotiem — viņi vēlas ātru atbildi no kompetenta eksperta."
          ]
        },
        {
          "heading": "2. B2B pirkšanas cikla īpatnības",
          "paragraphs": [
            "Atšķirībā no B2C, kur pirkuma lēmums bieži tiek pieņemts dažu minūšu laikā, B2B pirkšanas cikls var ilgt nedēļas vai mēnešus, un lēmumā piedalās vairāki cilvēki — vadītājs, iepirkumu speciālists, dažreiz arī tehniskais eksperts. Mājaslapai jāsatur pietiekami daudz informācijas, lai katrs no viņiem atrastu sev aktuālas atbildes bez papildu zvana.",
            "Tāpēc B2B mājaslapā ir īpaši svarīgi izmantot lejupielādējamus dokumentus (PDF prezentācijas, specifikācijas), ko iepirkumu vadītājs varētu pārsūtīt kolēģiem iekšējai apspriešanai."
          ]
        },
        {
          "heading": "3. Satura stratēģija B2B mājaslapai",
          "paragraphs": [
            "Blogs ar ekspertu rakstiem par jūsu nozares izaicinājumiem un risinājumiem stiprina profesionālu autoritāti un palīdz piesaistīt organisko plūsmu caur specifiskiem, mazāk konkurētspējīgiem atslēgvārdiem, ar kuriem meklē tieši B2B pircēji, nevis plaša patēriņa klienti.",
            "Skaidri norādīti sertifikāti, standartu atbilstība (ISO un līdzīgi) un ilggadēja darbības pieredze B2B kontekstā darbojas kā vieni no spēcīgākajiem uzticības signāliem."
          ]
        }
      ],
      "takeaways": [
        "B2B mājaslapā vissvarīgākā ir caurspīdīgums, pieredze un skaidrs sadarbības process.",
        "B2B pirkšanas lēmumu bieži pieņem komanda, tāpēc mājaslapai jāsatur informācija katram dalībniekam.",
        "Ekspertu blogs stiprina autoritāti un piesaista mērķtiecīgus B2B atslēgvārdus."
      ]
    },
    "et": {
      "title": "B2B veebilehtede loomine: kuidas meelitada äriklientidele suunatud veebis?",
      "description": "Millega erineb B2B veebileht B2C-st ja kuidas esitada teenuseid ettevõtete juhtidele ning ostujuhtidele.",
      "intro": "Ettevõtete vahelised (B2B) ostjad käituvad täiesti erinevalt eraisikutest tarbijatest. Siin tehakse otsuseid ratsionaalselt, hinnates kogemust, tähtaegu, finantsstabiilsust ja riske. B2B veebileht peab rääkima professionaalses, konkreetses keeles.",
      "sections": [
        {
          "heading": "1. B2B veebilehe edu tegurid",
          "paragraphs": [
            "Põhjalikud juhtumianalüüsid (Case Studies): Näita konkreetseid tehtud projekte koos väljakutsete, lahenduste ja saavutatud tulemustega.",
            "Tehniline dokumentatsioon ja spetsifikatsioonid: Võimalus alla laadida PDF-kataloogid, joonised või sertifikaadid.",
            "Otsene kontakt spetsialistiga: B2B juhid ei taha suhelda müügirobotitega — nad soovivad kiiret vastust pädevalt eksperdilt."
          ]
        },
        {
          "heading": "2. B2B ostutsükli eripärad",
          "paragraphs": [
            "Erinevalt B2C-st, kus ostuotsus tehakse tihti mõne minutiga, võib B2B ostutsükkel kesta nädalaid või kuid, ning otsuses osaleb mitu inimest — juht, ostuspetsialist, mõnikord ka tehniline ekspert. Veebilehel peab olema piisavalt infot, et igaüks neist leiaks endale olulised vastused ilma lisakõneta.",
            "Seetõttu on B2B veebilehel eriti oluline omada allalaaditavaid dokumente (PDF-esitlusi, spetsifikatsioone), mida ostujuht saaks kolleegidele sisearutelu jaoks edasi saata."
          ]
        },
        {
          "heading": "3. Sisustrateegia B2B veebilehele",
          "paragraphs": [
            "Ekspertartiklitega blogi sinu valdkonna väljakutsete ja lahenduste kohta tugevdab professionaalset autoriteeti ning aitab meelitada orgaanilist liiklust spetsiifiliste, vähem konkureerivate märksõnade kaudu, mida otsivad just B2B ostjad, mitte laiatarbekliendid.",
            "Selgelt märgitud sertifikaadid, standarditele vastavus (ISO ja sarnased) ning pikaajaline tegevuskogemus toimivad B2B kontekstis ühte tugevaimana usaldussignaalina."
          ]
        }
      ],
      "takeaways": [
        "B2B veebilehel on kõige tähtsam läbipaistvus, kogemus ja selge koostööprotsess.",
        "B2B ostuotsuse teeb tihti meeskond, seega peab veebilehel olema infot igale osalejale.",
        "Ekspertblogi tugevdab autoriteeti ja meelitab ligi sihtotstarbelisi B2B märksõnu."
      ]
    },
    "ru": {
      "title": "Создание B2B-сайтов: как привлечь бизнес-клиентов в интернете?",
      "description": "Чем B2B-сайты отличаются от B2C и как представить услуги руководителям компаний и менеджерам по закупкам.",
      "intro": "Покупатели в сегменте B2B (бизнес для бизнеса) ведут себя совершенно иначе, чем частные потребители. Здесь решения принимаются рационально, с оценкой опыта, сроков, финансовой стабильности и рисков. B2B-сайт должен говорить на профессиональном, конкретном языке.",
      "sections": [
        {
          "heading": "1. Факторы успеха B2B-сайта",
          "paragraphs": [
            "Подробные кейс-стади (Case Studies): показывайте конкретные реализованные проекты с вызовами, решениями и достигнутыми результатами.",
            "Техническая документация и спецификации: возможность скачать PDF-каталоги, чертежи или сертификаты.",
            "Прямая связь со специалистом: руководители в B2B не хотят общаться с ботами продаж — им нужен быстрый ответ от компетентного эксперта."
          ]
        },
        {
          "heading": "2. Особенности цикла закупки в B2B",
          "paragraphs": [
            "В отличие от B2C, где решение о покупке часто принимается за несколько минут, цикл закупки в B2B может длиться недели или месяцы, и в принятии решения участвуют несколько человек — руководитель, специалист по закупкам, иногда и технический эксперт. Сайт должен содержать достаточно информации, чтобы каждый из них находил актуальные для себя ответы без дополнительного звонка.",
            "Поэтому на B2B-сайте особенно важно иметь скачиваемые документы (PDF-презентации, спецификации), которые менеджер по закупкам мог бы переслать коллегам для внутреннего обсуждения."
          ]
        },
        {
          "heading": "3. Контент-стратегия для B2B-сайта",
          "paragraphs": [
            "Блог с экспертными статьями о вызовах и решениях в вашей области укрепляет профессиональный авторитет и помогает привлекать органический трафик по специфическим, менее конкурентным ключевым словам, по которым ищут именно B2B-покупатели, а не массовые потребители.",
            "Чётко указанные сертификаты, соответствие стандартам (ISO и подобные) и многолетний опыт деятельности в контексте B2B работают как одни из самых сильных сигналов доверия."
          ]
        }
      ],
      "takeaways": [
        "На B2B-сайте важнее всего прозрачность, опыт и понятный процесс сотрудничества.",
        "Решение о покупке в B2B часто принимается командой, поэтому сайт должен содержать информацию для каждого участника.",
        "Экспертный блог укрепляет авторитет и привлекает целевые B2B-ключевые слова."
      ]
    }
  },
  "domenas-ir-talpinimas-verslui": {
    "en": {
      "title": "Domain and hosting: what matters before you buy",
      "description": "How to choose a good .lt domain, how servers differ, and why you shouldn't overpay.",
      "intro": "A domain is your company's address on the internet, and hosting is the server where your website's files are stored. Choosing these elements correctly ensures speed, security, and smooth email delivery.",
      "sections": [
        {
          "heading": "1. Rules for choosing a domain",
          "paragraphs": [
            "For the Lithuanian market, choose the .lt extension — it builds the most trust and helps with local SEO.",
            "Avoid hyphens or words that are hard to type.",
            "Always register the domain under your own company or personal name."
          ]
        },
        {
          "heading": "2. Choosing a server",
          "paragraphs": [
            "Choose modern servers with NVMe SSD storage, HTTP/3, and either LiteSpeed or Nginx web servers."
          ]
        },
        {
          "heading": "3. Why does the server's physical location matter?",
          "paragraphs": [
            "If your main customers are in Lithuania or the Baltic states, a server located geographically close (in Europe) ensures shorter data travel time (latency) and a faster page response, compared to a server on another continent.",
            "It also matters that the server infrastructure complies with GDPR requirements — your customers' data should be stored in data centers located within the European Union."
          ]
        },
        {
          "heading": "4. Email addresses on your own domain",
          "paragraphs": [
            "Once you have your own domain, it's worth setting up professional email addresses right away (e.g. info@yourcompany.lt) instead of using free gmail.com or yahoo.com addresses. This builds significantly more trust with both customers and business partners.",
            "It's important to correctly configure the SPF, DKIM, and DMARC records in your domain settings — without them, your emails may end up in recipients' spam folders even if the content is entirely legitimate."
          ]
        }
      ],
      "takeaways": [
        "The website and domain should always belong to you, not to an agency.",
        "Choose servers whose data centers are located within the European Union — this matters both for speed and for GDPR compliance.",
        "Set up professional email addresses on your own domain with correct SPF/DKIM/DMARC records."
      ]
    },
    "pl": {
      "title": "Domena i hosting: co warto wiedzieć przed zakupem?",
      "description": "Jak wybrać dobrą domenę .lt, czym różnią się serwery i dlaczego nie warto przepłacać.",
      "intro": "Domena to adres Twojej firmy w internecie, a hosting — serwer, na którym przechowywane są pliki strony. Właściwy wybór tych elementów zapewnia szybkość, bezpieczeństwo i sprawne działanie poczty e-mail.",
      "sections": [
        {
          "heading": "1. Zasady wyboru domeny",
          "paragraphs": [
            "Dla rynku litewskiego wybieraj końcówkę .lt — budzi ona największe zaufanie i wspomaga lokalne SEO.",
            "Unikaj myślników i trudnych do zapisania słów.",
            "Domenę zawsze rejestruj na nazwę swojej firmy lub swoje własne."
          ]
        },
        {
          "heading": "2. Wybór serwera",
          "paragraphs": [
            "Wybieraj nowoczesne serwery z dyskami NVMe SSD, obsługą HTTP/3 oraz serwerami WWW LiteSpeed lub Nginx."
          ]
        },
        {
          "heading": "3. Dlaczego istotna jest fizyczna lokalizacja serwera?",
          "paragraphs": [
            "Jeśli Twoi główni klienci znajdują się na Litwie lub w krajach bałtyckich, serwer zlokalizowany geograficznie blisko (w Europie) zapewnia niższe opóźnienie transmisji danych i szybszą reakcję strony w porównaniu z serwerem na innym kontynencie.",
            "Ważne jest też, aby infrastruktura serwera spełniała wymogi RODO — dane o Twoich klientach powinny być przechowywane w centrach danych zlokalizowanych na terytorium Unii Europejskiej."
          ]
        },
        {
          "heading": "4. Adresy e-mail we własnej domenie",
          "paragraphs": [
            "Posiadając własną domenę, warto od razu skonfigurować profesjonalne adresy e-mail (np. info@twojafirma.pl) zamiast bezpłatnych adresów gmail.com czy yahoo.com. Buduje to znacznie większe zaufanie zarówno u klientów, jak i partnerów biznesowych.",
            "Ważne jest poprawne skonfigurowanie rekordów SPF, DKIM i DMARC w ustawieniach domeny — bez nich wysyłane przez Ciebie wiadomości mogą trafiać do folderu spam odbiorców, nawet jeśli ich treść jest w pełni legalna."
          ]
        }
      ],
      "takeaways": [
        "Strona i domena w każdym przypadku muszą należeć do Ciebie, a nie do agencji.",
        "Wybieraj serwery, których centra danych znajdują się w Unii Europejskiej — jest to ważne zarówno dla szybkości, jak i zgodności z RODO.",
        "Skonfiguruj profesjonalne adresy e-mail we własnej domenie z poprawnymi rekordami SPF/DKIM/DMARC."
      ]
    },
    "lv": {
      "title": "Domēns un hostings: kas jāzina pirms iegādes?",
      "description": "Kā izvēlēties labu .lt domēnu, kā atšķiras serveri un kāpēc nav vērts pārmaksāt.",
      "intro": "Domēns ir jūsu uzņēmuma adrese internetā, bet hostings — serveris, kurā tiek glabāti mājaslapas faili. Pareiza šo elementu izvēle nodrošina ātrumu, drošību un raitu e-pasta darbību.",
      "sections": [
        {
          "heading": "1. Domēna izvēles noteikumi",
          "paragraphs": [
            "Lietuvas tirgum izvēlieties .lt galotni — tā rada vislielāko uzticību un palīdz vietējam SEO.",
            "Izvairieties no defisēm vai grūti uzrakstāmiem vārdiem.",
            "Domēnu vienmēr reģistrējiet sava uzņēmuma vai savā personīgajā vārdā."
          ]
        },
        {
          "heading": "2. Servera izvēle",
          "paragraphs": [
            "Izvēlieties modernus serverus ar NVMe SSD diskiem, HTTP/3 un LiteSpeed vai Nginx web serveriem."
          ]
        },
        {
          "heading": "3. Kāpēc svarīgi, kur fiziski atrodas serveris?",
          "paragraphs": [
            "Ja jūsu galvenie klienti atrodas Lietuvā vai Baltijas valstīs, serveris, kas ģeogrāfiski atrodas tuvu (Eiropā), nodrošina īsāku datu ceļošanas laiku (latenci) un ātrāku lapas atbildi, salīdzinot ar serveri citā kontinentā.",
            "Tāpat svarīgi, lai servera infrastruktūra atbilstu VDAR prasībām — datiem par jūsu klientiem jābūt glabātiem datu centros, kas atrodas Eiropas Savienības teritorijā."
          ]
        },
        {
          "heading": "4. E-pasta adreses savā domēnā",
          "paragraphs": [
            "Iegūstot savu domēnu, ir vērts uzreiz izveidot profesionālas e-pasta adreses (piem., info@jusuuznemums.lt) nevis izmantot bezmaksas gmail.com vai yahoo.com adreses. Tas rada krietni vairāk uzticības gan klientiem, gan biznesa partneriem.",
            "Svarīgi pareizi konfigurēt SPF, DKIM un DMARC ierakstus domēna iestatījumos — bez tiem jūsu sūtītās vēstules var nonākt saņēmēju surogātpasta (spam) mapēs, pat ja saturs ir pilnīgi likumīgs."
          ]
        }
      ],
      "takeaways": [
        "Mājaslapai un domēnam visos gadījumos jāpieder jums, nevis aģentūrai.",
        "Izvēlieties serverus, kuru datu centri atrodas Eiropas Savienībā — tas svarīgi gan ātrumam, gan VDAR atbilstībai.",
        "Konfigurējiet profesionālas e-pasta adreses savā domēnā ar pareiziem SPF/DKIM/DMARC ierakstiem."
      ]
    },
    "et": {
      "title": "Domeen ja majutus (hosting): mida on oluline teada enne ostmist?",
      "description": "Kuidas valida hea .lt domeen, milles erinevad serverid ja miks ei tasu üle maksta.",
      "intro": "Domeen on sinu ettevõtte aadress internetis, majutus (hosting) aga server, kus säilitatakse veebilehe faile. Nende elementide õige valik tagab kiiruse, turvalisuse ja sujuva e-posti toimimise.",
      "sections": [
        {
          "heading": "1. Domeeni valiku reeglid",
          "paragraphs": [
            "Kohalikul turul vali .ee laiend (Leedu turul .lt) — see tekitab suurimat usaldust ja aitab kohalikku SEO-d.",
            "Väldi sidekriipse või raskesti kirjutatavaid sõnu.",
            "Registreeri domeen alati oma ettevõtte või isikliku nime alla."
          ]
        },
        {
          "heading": "2. Serveri valik",
          "paragraphs": [
            "Vali kaasaegsed serverid NVMe SSD-ketaste, HTTP/3 ning LiteSpeed'i või Nginx veebiserveritega."
          ]
        },
        {
          "heading": "3. Miks on oluline, kus füüsiliselt server asub?",
          "paragraphs": [
            "Kui sinu peamised kliendid on Eestis või Baltikumis, tagab geograafiliselt lähedal (Euroopas) asuv server väiksema andmete liikumisaja (latentsuse) ja kiirema lehe vastuse võrreldes teisel mandril asuva serveriga.",
            "Samuti on oluline, et serveri infrastruktuur vastaks GDPR-i nõuetele — andmed sinu klientide kohta peaksid asuma Euroopa Liidu territooriumil asuvates andmekeskustes."
          ]
        },
        {
          "heading": "4. E-posti aadressid oma domeenil",
          "paragraphs": [
            "Oma domeeni omades tasub kohe seadistada professionaalsed e-posti aadressid (nt info@sinuettevote.ee) tasuta gmail.com või yahoo.com aadresside asemel. See tekitab oluliselt rohkem usaldust nii klientide kui ka äripartnerite seas.",
            "Oluline on domeeni seadetes õigesti seadistada SPF, DKIM ja DMARC kirjed — ilma nendeta võivad sinu saadetud kirjad sattuda saajate rämpsposti kausta, isegi kui sisu on täiesti seaduslik."
          ]
        }
      ],
      "takeaways": [
        "Veebileht ja domeen peavad igal juhul kuuluma sulle, mitte agentuurile.",
        "Vali serverid, mille andmekeskused asuvad Euroopa Liidus — see on oluline nii kiiruse kui ka GDPR-i vastavuse jaoks.",
        "Seadista oma domeenil professionaalsed e-posti aadressid koos õigete SPF/DKIM/DMARC kirjetega."
      ]
    },
    "ru": {
      "title": "Домен и хостинг: что важно знать перед покупкой?",
      "description": "Как выбрать хороший домен .lt, чем отличаются серверы и почему не стоит переплачивать.",
      "intro": "Домен — это адрес вашей компании в интернете, а хостинг — сервер, на котором хранятся файлы сайта. Правильный выбор этих элементов обеспечивает скорость, безопасность и бесперебойную работу электронной почты.",
      "sections": [
        {
          "heading": "1. Правила выбора домена",
          "paragraphs": [
            "Для литовского рынка выбирайте окончание .lt — оно вызывает наибольшее доверие и помогает локальному SEO.",
            "Избегайте дефисов или трудно произносимых слов.",
            "Всегда регистрируйте домен на имя своей компании или на своё личное имя."
          ]
        },
        {
          "heading": "2. Выбор сервера",
          "paragraphs": [
            "Выбирайте современные серверы с дисками NVMe SSD, HTTP/3 и веб-серверами LiteSpeed или Nginx."
          ]
        },
        {
          "heading": "3. Почему важно, где физически находится сервер?",
          "paragraphs": [
            "Если ваши основные клиенты находятся в Литве или странах Балтии, сервер, расположенный географически близко (в Европе), обеспечивает меньшую задержку передачи данных (латентность) и более быстрый отклик страницы по сравнению с сервером на другом континенте.",
            "Также важно, чтобы инфраструктура сервера соответствовала требованиям GDPR — данные о ваших клиентах должны храниться в дата-центрах, находящихся на территории Европейского союза."
          ]
        },
        {
          "heading": "4. Электронная почта на своём домене",
          "paragraphs": [
            "Имея собственный домен, стоит сразу настроить профессиональные адреса электронной почты (например, info@vashakompaniya.lt) вместо бесплатных адресов gmail.com или yahoo.com. Это вызывает значительно больше доверия как у клиентов, так и у деловых партнёров.",
            "Важно правильно настроить записи SPF, DKIM и DMARC в настройках домена — без них ваши отправляемые письма могут попадать в папку спама получателей, даже если содержание полностью легитимно."
          ]
        }
      ],
      "takeaways": [
        "Сайт и домен во всех случаях должны принадлежать вам, а не агентству.",
        "Выбирайте серверы, дата-центры которых находятся в Евросоюзе — это важно и для скорости, и для соответствия GDPR.",
        "Настройте профессиональные адреса электронной почты на своём домене с правильными записями SPF/DKIM/DMARC."
      ]
    }
  },
  "strukturiniai-duomenys-schema-org": {
    "en": {
      "title": "What is Schema.org structured data and why does it matter to Google?",
      "description": "How JSON-LD helps Google and AI assistants (ChatGPT, Gemini) correctly understand your business and display rich results.",
      "intro": "Schema.org structured data is a universal semantic language that helps search engines (Google, Bing) and AI agents (ChatGPT, Perplexity, Google Gemini) precisely understand your website's content.",
      "sections": [
        {
          "heading": "1. Why is structured data essential in 2026?",
          "paragraphs": [
            "Rich results: In Google search, your website appears with FAQ answers, service prices, star ratings, and an author profile.",
            "AI search readiness (GEO / AEO): AI search engines rely on Schema.org JSON-LD graphs to provide accurate answers to users."
          ]
        },
        {
          "heading": "2. The most important structured data types for a business website",
          "paragraphs": [
            "Organization / ProfessionalService: defines your company as an entity — its name, contacts, and the area it serves. This is the foundation on which all other structured data on the website relies.",
            "Service and Offer: describe your specific services and their prices in a machine-readable format Google understands, letting search engines more accurately match your website to the service a user is searching for.",
            "BreadcrumbList: shows a page's position within the website's structure, and can be displayed in Google search as a convenient link trail right below the title.",
            "FAQPage: structures frequently asked questions so that both Google and AI assistants can cite them directly when answering a user's query, without the user needing to visit the website at all."
          ]
        },
        {
          "heading": "3. How to check whether structured data is working correctly",
          "paragraphs": [
            "Google offers a free 'Rich Results Test' tool — paste in your website's address and it shows what structured data Google has detected and whether there are any errors. It's useful to check this after every major website update.",
            "It's important that the information stated in your structured data always matches what's actually visible on the website page — Google actively penalizes websites whose JSON-LD data doesn't match the content shown to users."
          ]
        }
      ],
      "takeaways": [
        "Every SiteStudio website comes with a comprehensive JSON-LD Schema.org graph built in.",
        "Structured data is the foundation not just for Google, but also for AI search assistants (ChatGPT, Perplexity) to understand your business.",
        "Regularly check your structured data using the free Google Rich Results Test tool."
      ]
    },
    "pl": {
      "title": "Czym są dane strukturalne Schema.org i dlaczego są ważne dla Google?",
      "description": "Jak JSON-LD pomaga Google i asystentom AI (ChatGPT, Gemini) prawidłowo zrozumieć Twoją firmę i wyświetlać rozszerzone wyniki.",
      "intro": "Dane strukturalne Schema.org to uniwersalny język semantyczny, pomagający wyszukiwarkom (Google, Bing) i agentom AI (ChatGPT, Perplexity, Google Gemini) dokładnie zrozumieć treść Twojej strony.",
      "sections": [
        {
          "heading": "1. Dlaczego dane strukturalne są niezbędne w 2026 r.?",
          "paragraphs": [
            "Wyniki rozszerzone (Rich Snippets): W wynikach wyszukiwania Google Twoja strona wyświetlana jest z odpowiedziami FAQ, cenami usług, gwiazdkami oceny i profilem autora.",
            "Przygotowanie do wyszukiwania AI (GEO / AEO): Wyszukiwarki oparte na sztucznej inteligencji opierają się na grafach JSON-LD Schema.org, aby dostarczać użytkownikom dokładne odpowiedzi."
          ]
        },
        {
          "heading": "2. Najważniejsze typy danych strukturalnych dla strony firmowej",
          "paragraphs": [
            "Organization / ProfessionalService: definiuje Twoją firmę jako podmiot — nazwę, dane kontaktowe, obsługiwany obszar. To fundament, na którym opierają się wszystkie pozostałe dane strukturalne na stronie.",
            "Service i Offer: opisują konkretne oferowane przez Ciebie usługi i ich ceny w formacie zrozumiałym dla maszyn i Google, dzięki czemu wyszukiwarka może dokładniej powiązać Twoją stronę z usługą poszukiwaną przez użytkownika.",
            "BreadcrumbList: pokazuje miejsce podstrony w strukturze witryny i w wynikach wyszukiwania Google może być wyświetlany jako wygodna ścieżka nawigacji bezpośrednio pod tytułem.",
            "FAQPage: strukturyzuje najczęściej zadawane pytania w sposób umożliwiający ich bezpośrednie cytowanie zarówno przez Google, jak i asystentów AI, odpowiadających na zapytanie użytkownika bez konieczności odwiedzania strony."
          ]
        },
        {
          "heading": "3. Jak sprawdzić, czy dane strukturalne działają poprawnie?",
          "paragraphs": [
            "Google oferuje bezpłatne narzędzie „Rich Results Test” — po wklejeniu adresu swojej strony pokazuje ono, jakie dane strukturalne Google wykrył i czy nie zawierają błędów. Warto to sprawdzać po każdej większej aktualizacji strony.",
            "Ważne, aby informacje wskazane w danych strukturalnych zawsze odpowiadały temu, co rzeczywiście widać na podstronie — Google aktywnie karze strony, których dane JSON-LD nie odpowiadają treści widocznej dla użytkownika."
          ]
        }
      ],
      "takeaways": [
        "We wszystkich stronach SiteStudio wdrażany jest szczegółowy graf JSON-LD Schema.org.",
        "Dane strukturalne są podstawą zrozumienia nie tylko dla Google, ale i dla asystentów wyszukiwania AI (ChatGPT, Perplexity).",
        "Regularnie sprawdzaj dane strukturalne za pomocą bezpłatnego narzędzia Google Rich Results Test."
      ]
    },
    "lv": {
      "title": "Kas ir Schema.org strukturētie dati un kāpēc tie svarīgi Google?",
      "description": "Kā JSON-LD palīdz Google un MI asistentiem (ChatGPT, Gemini) pareizi izprast jūsu biznesu un rādīt paplašinātus rezultātus.",
      "intro": "Schema.org strukturētie dati — tā ir universāla semantiska valoda, kas palīdz meklētājsistēmām (Google, Bing) un MI aģentiem (ChatGPT, Perplexity, Google Gemini) precīzi izprast jūsu mājaslapas saturu.",
      "sections": [
        {
          "heading": "1. Kāpēc strukturētie dati ir nepieciešami 2026. gadā?",
          "paragraphs": [
            "Paplašinātie rezultāti (Rich Snippets): Google meklēšanā jūsu mājaslapa tiek rādīta ar BUJ atbildēm, pakalpojumu cenām, zvaigznītēm un autora profilu.",
            "MI meklēšanas sagatavošana (GEO / AEO): Mākslīgā intelekta meklētājsistēmas balstās uz Schema.org JSON-LD grafiem, lai sniegtu precīzas atbildes lietotājiem."
          ]
        },
        {
          "heading": "2. Svarīgākie strukturēto datu tipi biznesa mājaslapai",
          "paragraphs": [
            "Organization / ProfessionalService: definē jūsu uzņēmumu kā subjektu — nosaukumu, kontaktus, apkalpoto teritoriju. Tas ir pamats, uz kura balstās visi pārējie strukturētie dati mājaslapā.",
            "Service un Offer: apraksta jūsu konkrētos sniegtos pakalpojumus un to cenas mašīnlasāmā, Google saprotamā formātā, tāpēc meklētājsistēma var precīzāk saistīt jūsu mājaslapu ar lietotāja meklēto pakalpojumu.",
            "BreadcrumbList: rāda lapas vietu mājaslapas struktūrā un Google meklēšanā var tikt attēlots kā ērts navigācijas ceļš tieši zem nosaukuma.",
            "FAQPage: strukturē biežāk uzdotos jautājumus tā, lai tos varētu tieši citēt gan Google, gan MI asistenti, atbildot uz lietotāja pieprasījumu bez nepieciešamības apmeklēt mājaslapu."
          ]
        },
        {
          "heading": "3. Kā pārbaudīt, vai strukturētie dati darbojas pareizi?",
          "paragraphs": [
            "Google piedāvā bezmaksas 'Rich Results Test' rīku — ielīmējot savas mājaslapas adresi, tas parāda, kādus strukturētos datus Google ir atklājis un vai tajos nav kļūdu. Tas noderīgi jāpārbauda pēc katras lielākas mājaslapas atjaunināšanas.",
            "Svarīgi, lai strukturētajos datos norādītā informācija vienmēr atbilstu tam, kas reāli redzams mājaslapas lapā — Google aktīvi soda mājaslapas, kuru JSON-LD dati neatbilst lietotājam rādītajam saturam."
          ]
        }
      ],
      "takeaways": [
        "Visās SiteStudio mājaslapās tiek ieviests izvērsts JSON-LD Schema.org grafs.",
        "Strukturētie dati ir ne tikai Google, bet arī MI meklēšanas asistentu (ChatGPT, Perplexity) izpratnes pamats.",
        "Regulāri pārbaudiet strukturētos datus ar bezmaksas Google Rich Results Test rīku."
      ]
    },
    "et": {
      "title": "Mis on Schema.org struktureeritud andmed ja miks need Google'ile olulised on?",
      "description": "Kuidas JSON-LD aitab Google'il ja AI-assistentidel (ChatGPT, Gemini) sinu ettevõtet õigesti mõista ja kuvada laiendatud otsingutulemusi.",
      "intro": "Schema.org struktureeritud andmed on universaalne semantiline keel, mis aitab otsingumootoritel (Google, Bing) ja AI-agentidel (ChatGPT, Perplexity, Google Gemini) täpselt mõista sinu veebilehe sisu.",
      "sections": [
        {
          "heading": "1. Miks on struktureeritud andmed 2026. aastal hädavajalikud?",
          "paragraphs": [
            "Laiendatud tulemused (Rich Snippets): Google'i otsingus kuvatakse sinu veebilehte koos KKK vastuste, teenuste hindade, tärnihinnangute ja autoriprofiiliga.",
            "AI-otsingu ettevalmistus (GEO / AEO): Tehisintellekti otsingumootorid toetuvad Schema.org JSON-LD graafidele, et anda kasutajatele täpseid vastuseid."
          ]
        },
        {
          "heading": "2. Kõige olulisemad struktureeritud andmete tüübid ettevõtte veebilehele",
          "paragraphs": [
            "Organization / ProfessionalService: määratleb sinu ettevõtte kui üksuse — nime, kontaktid, teenindatava piirkonna. See on alus, millele toetuvad kõik teised struktureeritud andmed veebilehel.",
            "Service ja Offer: kirjeldavad sinu konkreetseid pakutavaid teenuseid ja nende hindu masinloetavas, Google'ile mõistetavas formaadis, mistõttu saab otsingumootor täpsemalt siduda sinu veebilehe kasutaja otsitava teenusega.",
            "BreadcrumbList: näitab lehe asukohta veebilehe struktuuris ja seda saab Google'i otsingus kuvada mugava viitade rajana otse pealkirja all.",
            "FAQPage: struktureerib korduma kippuvad küsimused nii, et neid saavad otse tsiteerida nii Google kui ka AI-assistendid, vastates kasutaja päringule ilma vajaduseta veebilehte külastada."
          ]
        },
        {
          "heading": "3. Kuidas kontrollida, kas struktureeritud andmed töötavad õigesti?",
          "paragraphs": [
            "Google pakub tasuta 'Rich Results Test' tööriista — sisestades oma veebilehe aadressi, näitab see, milliseid struktureeritud andmeid Google tuvastas ja kas neis on vigu. Seda on kasulik kontrollida pärast iga suuremat veebilehe uuendust.",
            "Oluline on, et struktureeritud andmetes märgitud info alati vastaks sellele, mis reaalselt veebilehe leheküljel nähtav on — Google karistab aktiivselt veebilehti, mille JSON-LD andmed ei vasta kasutajale kuvatavale sisule."
          ]
        }
      ],
      "takeaways": [
        "Kõikidesse SiteStudio veebilehtedesse paigaldatakse põhjalik JSON-LD Schema.org graaf.",
        "Struktureeritud andmed on aluseks mitte ainult Google'i, vaid ka AI-otsinguassistentide (ChatGPT, Perplexity) mõistmisele.",
        "Kontrolli regulaarselt struktureeritud andmeid tasuta Google Rich Results Test tööriistaga."
      ]
    },
    "ru": {
      "title": "Что такое структурированные данные Schema.org и почему они важны для Google?",
      "description": "Как JSON-LD помогает Google и ИИ-ассистентам (ChatGPT, Gemini) правильно понимать ваш бизнес и показывать расширенные результаты.",
      "intro": "Структурированные данные Schema.org — это универсальный семантический язык, помогающий поисковым системам (Google, Bing) и ИИ-агентам (ChatGPT, Perplexity, Google Gemini) точно понимать содержание вашего сайта.",
      "sections": [
        {
          "heading": "1. Почему структурированные данные необходимы в 2026 году?",
          "paragraphs": [
            "Расширенные результаты (Rich Snippets): в поиске Google ваш сайт отображается с ответами FAQ, ценами услуг, звёздочками и профилем автора.",
            "Подготовка к ИИ-поиску (GEO / AEO): поисковые системы искусственного интеллекта опираются на графы Schema.org JSON-LD, чтобы давать пользователям точные ответы."
          ]
        },
        {
          "heading": "2. Важнейшие типы структурированных данных для бизнес-сайта",
          "paragraphs": [
            "Organization / ProfessionalService: определяет вашу компанию как субъект — название, контакты, обслуживаемую территорию. Это основа, на которой строятся все остальные структурированные данные сайта.",
            "Service и Offer: описывают конкретные предоставляемые вами услуги и их цены в машиночитаемом, понятном Google формате, благодаря чему поисковая система может точнее связать ваш сайт с услугой, которую ищет пользователь.",
            "BreadcrumbList: показывает место страницы в структуре сайта и в поиске Google может отображаться как удобная цепочка ссылок сразу под заголовком.",
            "FAQPage: структурирует часто задаваемые вопросы так, чтобы их могли напрямую цитировать как Google, так и ИИ-ассистенты, отвечая на запрос пользователя без необходимости заходить на сайт."
          ]
        },
        {
          "heading": "3. Как проверить, правильно ли работают структурированные данные?",
          "paragraphs": [
            "Google предлагает бесплатный инструмент «Rich Results Test» — вставив адрес своего сайта, он показывает, какие структурированные данные обнаружил Google и нет ли в них ошибок. Это полезно проверять после каждого крупного обновления сайта.",
            "Важно, чтобы информация, указанная в структурированных данных, всегда соответствовала тому, что реально видно на странице сайта — Google активно штрафует сайты, чьи данные JSON-LD не соответствуют контенту, показываемому пользователю."
          ]
        }
      ],
      "takeaways": [
        "На всех сайтах SiteStudio внедряется полноценный граф JSON-LD Schema.org.",
        "Структурированные данные — это основа понимания не только для Google, но и для ИИ-поисковых ассистентов (ChatGPT, Perplexity).",
        "Регулярно проверяйте структурированные данные через бесплатный инструмент Google Rich Results Test."
      ]
    }
  },
  "svetaines-konversiju-didinimas": {
    "en": {
      "title": "How to increase conversions on an existing website without a bigger ad budget",
      "description": "Simple but effective changes: shorter forms, trust signals, and clear calls to action.",
      "intro": "Many businesses assume that getting more orders means spending twice as much on advertising. But often it's enough to clean up the conversion path (CRO) on your existing website to get twice as many inquiries from the same number of visitors.",
      "sections": [
        {
          "heading": "1. 5 quick steps to boost conversions",
          "paragraphs": [
            "1. Shorten your forms: remove unnecessary fields — a name and a contact method are enough.",
            "2. A clear phone button on mobile: let customers call you with a single tap.",
            "3. Show price guidance: 'from €X' removes uncertainty and filters for serious customers.",
            "4. Show real completed work: visual proof works better than long blocks of text.",
            "5. Highlight your response speed: for example, 'We respond within 1 business day'."
          ]
        },
        {
          "heading": "2. How to measure whether the changes are working",
          "paragraphs": [
            "Before making any changes, record your current conversion rate (the percentage of visitors who submit an inquiry) using Google Analytics. Without this baseline number, you can't objectively assess whether the changes actually helped.",
            "We recommend rolling out changes one at a time and monitoring results for at least 2–4 weeks before making the next one — this way you'll clearly see which specific change had the biggest effect, instead of guessing based on an overall result."
          ]
        },
        {
          "heading": "3. Trust elements that actually work",
          "paragraphs": [
            "Real examples of completed work with links to live websites work better than any written promise of quality — the visitor can check the result of your work themselves.",
            "A clearly stated price (even if it's just an approximate 'from €X') removes the biggest barrier — uncertainty. Customers who don't dare ask about price often simply leave for a competitor who states it openly.",
            "A specific response time ('we respond within 1 business day') reduces the fear that an inquiry will 'go nowhere' — it's one of the simplest yet most effective trust-building tools."
          ]
        }
      ],
      "takeaways": [
        "Less friction in forms = more inquiries from the same amount of visitor traffic.",
        "Before changing your website, record your baseline conversion rate so you can objectively compare results.",
        "Roll out changes one at a time so you can clearly see which one had the biggest effect."
      ]
    },
    "pl": {
      "title": "Jak zwiększyć konwersje istniejącej strony bez dodatkowego budżetu reklamowego?",
      "description": "Proste, ale skuteczne zmiany: skracanie formularzy, elementy budujące zaufanie i jasne wezwania do działania.",
      "intro": "Wiele firm uważa, że aby otrzymywać więcej zamówień, trzeba wydać dwa razy więcej pieniędzy na reklamę. Jednak często wystarczy uporządkować ścieżkę konwersji istniejącej strony (CRO), aby z tej samej liczby odwiedzających otrzymać dwa razy więcej zapytań.",
      "sections": [
        {
          "heading": "1. 5 szybkich kroków zwiększających konwersję",
          "paragraphs": [
            "1. Skróć formularze: usuń zbędne pola — wystarczy imię i kontakt.",
            "2. Wyraźny przycisk telefonu na urządzeniach mobilnych: pozwól klientowi zadzwonić jednym kliknięciem.",
            "3. Podaj orientacyjne ceny: „od X €” eliminuje niepewność i filtruje poważnych klientów.",
            "4. Pokazuj prawdziwe zrealizowane prace: dowód wizualny działa lepiej niż długie teksty.",
            "5. Podkreślaj szybkość odpowiedzi: np. „Odpowiadamy w ciągu 1 dnia roboczego”."
          ]
        },
        {
          "heading": "2. Jak zmierzyć, czy zmiany działają?",
          "paragraphs": [
            "Zanim wprowadzisz zmiany, zapisz obecny wskaźnik konwersji (jaki procent odwiedzających zostawia zapytanie) za pomocą Google Analytics. Bez tej wyjściowej liczby nie da się obiektywnie ocenić, czy zmiany rzeczywiście pomogły.",
            "Zaleca się wdrażanie zmian pojedynczo i obserwowanie wyników przez przynajmniej 2–4 tygodnie przed wprowadzeniem kolejnej — dzięki temu wyraźnie zobaczysz, która konkretna zmiana dała największy efekt, zamiast zgadywać na podstawie ogólnego wyniku."
          ]
        },
        {
          "heading": "3. Elementy budujące zaufanie, które naprawdę działają",
          "paragraphs": [
            "Prawdziwe przykłady zrealizowanych prac z linkami do działających stron działają lepiej niż jakakolwiek tekstowa obietnica jakości — odwiedzający może sam sprawdzić efekt Twojej pracy.",
            "Wyraźnie podana cena (nawet jeśli tylko orientacyjna „od X €”) usuwa największą barierę — niepewność. Klienci, którzy nie odważają się zapytać o cenę, często po prostu odchodzą do konkurenta, który podaje ją otwarcie.",
            "Konkretny czas odpowiedzi („odpowiadamy w ciągu 1 dnia roboczego”) zmniejsza obawę, że zapytanie „przepadnie” — to jeden z najprostszych, a zarazem najskuteczniejszych sposobów budowania zaufania."
          ]
        }
      ],
      "takeaways": [
        "Mniej tarcia w formularzach = więcej zapytań z tej samej liczby odwiedzających.",
        "Przed wprowadzeniem zmian zapisz wyjściowy wskaźnik konwersji, aby móc obiektywnie porównać wyniki.",
        "Wdrażaj zmiany pojedynczo, aby wyraźnie widzieć, która z nich dała największy efekt."
      ]
    },
    "lv": {
      "title": "Kā palielināt esošās mājaslapas konversijas bez papildu reklāmas budžeta?",
      "description": "Vienkārši, bet efektīvi pasākumi: formu saīsināšana, uzticības zīmes un skaidri aicinājumi uz darbību.",
      "intro": "Daudzi biznesi domā, ka, lai iegūtu vairāk pasūtījumu, jāiztērē divreiz vairāk naudas reklāmai. Taču bieži vien pietiek sakārtot esošās mājaslapas konversijas ceļu (CRO), lai no tā paša apmeklētāju skaita saņemtu divreiz vairāk pieprasījumu.",
      "sections": [
        {
          "heading": "1. 5 ātri konversijas palielināšanas soļi",
          "paragraphs": [
            "1. Saīsiniet formas: noņemiet nevajadzīgos laukus — pietiek ar vārdu un kontaktu.",
            "2. Skaidra tālruņa poga mobilajā versijā: ļaujiet klientam piezvanīt ar vienu klikšķi.",
            "3. Norādiet cenu orientierus: 'no X €' novērš nezināšanu un filtrē nopietnus klientus.",
            "4. Rādiet reālus paveiktos darbus: vizuāls pierādījums darbojas labāk nekā gari teksti.",
            "5. Uzsveriet atbildes ātrumu: piem., 'Atbildam 1 darba dienas laikā'."
          ]
        },
        {
          "heading": "2. Kā izmērīt, vai izmaiņas darbojas?",
          "paragraphs": [
            "Pirms izmaiņu veikšanas nofiksējiet pašreizējo konversijas rādītāju (cik procenti apmeklētāju atstāj pieprasījumu) ar Google Analytics. Bez šī sākotnējā skaitļa nav iespējams objektīvi izvērtēt, vai izmaiņas patiešām palīdzēja.",
            "Ieteicams izmaiņas ieviest pa vienai un vērot rezultātus vismaz 2–4 nedēļas pirms nākamās, tā skaidri redzēsiet, kura konkrētā izmaiņa deva vislielāko efektu, nevis mēģināsiet uzminēt no kopējā rezultāta."
          ]
        },
        {
          "heading": "3. Uzticības elementi, kas reāli darbojas",
          "paragraphs": [
            "Reāli paveikto darbu piemēri ar saitēm uz funkcionējošām mājaslapām darbojas labāk nekā jebkurš tekstuāls solījums par kvalitāti — apmeklētājs var pats pārbaudīt jūsu darba rezultātu.",
            "Skaidri norādīta cena (kaut vai tikai orientējoša 'no X €') novērš lielāko barjeru — nezināšanu. Klienti, kas neuzdrīkstas jautāt cenu, bieži vienkārši dodas pie konkurenta, kurš to norāda atklāti.",
            "Konkrēts atbildes laiks ('atbildam 1 darba dienas laikā') mazina bažas, ka pieprasījums 'nogrims aizmirstībā' — tas ir viens no vienkāršākajiem, taču efektīvākajiem uzticības rīkiem."
          ]
        }
      ],
      "takeaways": [
        "Mazāk berzes formās = vairāk pieprasījumu no tā paša apmeklētāju plūsmas.",
        "Pirms mājaslapas maiņas nofiksējiet sākotnējo konversijas rādītāju, lai varētu objektīvi salīdzināt rezultātus.",
        "Ieviesiet izmaiņas pa vienai, lai skaidri redzētu, kura no tām deva vislielāko efektu."
      ]
    },
    "et": {
      "title": "Kuidas suurendada olemasoleva veebilehe konversioone ilma lisareklaamieelarveta?",
      "description": "Lihtsad, kuid tõhusad muudatused: vormide lühendamine, usaldusmärgid ja selged tegevuskutsed.",
      "intro": "Paljud ettevõtted arvavad, et rohkemate tellimuste saamiseks tuleb kulutada topelt rohkem raha reklaamile. Kuid tihti piisab olemasoleva veebilehe konversioonitee (CRO) korrastamisest, et samast külastajate arvust saaksid kaks korda rohkem päringuid.",
      "sections": [
        {
          "heading": "1. 5 kiiret sammu konversiooni suurendamiseks",
          "paragraphs": [
            "1. Lühenda vorme: eemalda tarbetud väljad — piisab nimest ja kontaktist.",
            "2. Selge telefoninupp mobiilis: lase kliendil helistada ühe klikiga.",
            "3. Märgi hinnaorientiirid: 'alates X €' eemaldab teadmatuse ja filtreerib tõsised kliendid.",
            "4. Näita päris tehtud töid: visuaalne tõestus töötab paremini kui pikad tekstid.",
            "5. Rõhuta vastamiskiirust: nt 'Vastame 1 tööpäeva jooksul'."
          ]
        },
        {
          "heading": "2. Kuidas mõõta, kas muudatused toimivad?",
          "paragraphs": [
            "Enne muudatuste tegemist fikseeri praegune konversioonimäär (kui suur protsent külastajatest jätab päringu) Google Analyticsis. Ilma selle algnäitajata pole võimalik objektiivselt hinnata, kas muudatused tegelikult aitasid.",
            "Soovitatav on muudatusi rakendada ükshaaval ja jälgida tulemusi vähemalt 2–4 nädalat enne järgmise tegemist — nii näed selgelt, milline konkreetne muudatus andis suurima efekti, mitte ei pea seda üldtulemusest ära arvama."
          ]
        },
        {
          "heading": "3. Usalduselemendid, mis reaalselt toimivad",
          "paragraphs": [
            "Päris tehtud tööde näited koos linkidega töötavatele veebilehtedele toimivad paremini kui mis tahes tekstiline lubadus kvaliteedi kohta — külastaja saab ise sinu töö tulemust kontrollida.",
            "Selgelt märgitud hind (kas või orienteeruv 'alates X €') eemaldab suurima takistuse — teadmatuse. Kliendid, kes ei julge hinda küsida, lahkuvad tihti lihtsalt konkurendi juurde, kes selle avalikult näitab.",
            "Konkreetne vastamisaeg ('vastame 1 tööpäeva jooksul') vähendab hirmu, et päring 'kaob kuhugi' — see on üks lihtsamaid, kuid tõhusamaid usaldusmeetmeid."
          ]
        }
      ],
      "takeaways": [
        "Vähem hõõrdumist vormides = rohkem päringuid samast külastajate hulgast.",
        "Enne veebilehe muutmist fikseeri algne konversioonimäär, et saaksid tulemusi objektiivselt võrrelda.",
        "Rakenda muudatusi ükshaaval, et selgelt näha, milline neist andis suurima efekti."
      ]
    },
    "ru": {
      "title": "Как повысить конверсию существующего сайта без дополнительного рекламного бюджета?",
      "description": "Простые, но эффективные изменения: сокращение форм, знаки доверия и ясные призывы к действию.",
      "intro": "Многие компании считают, что для получения большего количества заказов нужно тратить вдвое больше денег на рекламу. Однако часто достаточно привести в порядок путь конверсии существующего сайта (CRO), чтобы с того же числа посетителей получать вдвое больше заявок.",
      "sections": [
        {
          "heading": "1. 5 быстрых шагов для повышения конверсии",
          "paragraphs": [
            "1. Сократите формы: уберите ненужные поля — достаточно имени и контакта.",
            "2. Понятная кнопка звонка на мобильном: дайте клиенту возможность позвонить в один клик.",
            "3. Укажите ориентиры цен: «от X €» устраняет неопределённость и отсеивает серьёзных клиентов.",
            "4. Показывайте реальные выполненные работы: визуальное доказательство работает лучше, чем длинные тексты.",
            "5. Подчеркните скорость ответа: например, «Отвечаем в течение 1 рабочего дня»."
          ]
        },
        {
          "heading": "2. Как измерить, работают ли изменения?",
          "paragraphs": [
            "Прежде чем вносить изменения, зафиксируйте текущий показатель конверсии (какой процент посетителей оставляет заявку) через Google Analytics. Без этого исходного числа невозможно объективно оценить, действительно ли изменения помогли.",
            "Рекомендуется внедрять изменения по одному и наблюдать результаты хотя бы 2–4 недели перед следующим — так вы чётко увидите, какое конкретное изменение дало наибольший эффект, а не будете гадать по общему результату."
          ]
        },
        {
          "heading": "3. Элементы доверия, которые реально работают",
          "paragraphs": [
            "Реальные примеры выполненных работ со ссылками на действующие сайты работают лучше, чем любое текстовое обещание качества — посетитель может сам проверить результат вашей работы.",
            "Чётко указанная цена (даже если только ориентировочная «от X €») устраняет самый большой барьер — неопределённость. Клиенты, которые не решаются спросить цену, часто просто уходят к конкуренту, который указывает её открыто.",
            "Конкретное время ответа («отвечаем в течение 1 рабочего дня») снижает страх того, что заявка «уйдёт в никуда» — это одно из самых простых, но эффективных средств повышения доверия."
          ]
        }
      ],
      "takeaways": [
        "Меньше трения в формах = больше заявок с того же потока посетителей.",
        "Перед изменением сайта зафиксируйте исходный показатель конверсии, чтобы объективно сравнить результаты.",
        "Внедряйте изменения по одному, чтобы чётко видеть, какое из них дало наибольший эффект."
      ]
    }
  }
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
