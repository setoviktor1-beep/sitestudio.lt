export type BlogPost = {
  slug: string;
  title: string;
  description: string;
  publishedAt: string;
  readTime: string;
  category: string;
  content: {
    intro: string;
    sections: { heading: string; paragraphs: string[] }[];
    takeaways: string[];
  };
};

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "kiek-kainuoja-svetaines-kurimas",
    title: "Kiek kainuoja interneto svetainės kūrimas 2026 metais: reali kainų analizė",
    description: "Išsami interneto svetainių kainų apžvalga Lietuvoje: nuo reprezentacinių svetainių iki el. parduotuvių. Sužinokite, kas sudaro kainą.",
    publishedAt: "2026-08-01",
    readTime: "8 min.",
    category: "Kainodara",
    content: {
      intro: "Kiek kainuoja sukurti interneto svetainę Lietuvoje 2026 metais? Tai bene dažniausiai užduodamas klausimas, kurį užduoda verslininkai, specialistai ir įmonių vadovai. Kainų rėžiai rinkoje yra itin platūs — nuo 150 € pas pradedantį laisvai samdomą specialistą iki 10 000 € ar daugiau didelėse skaitmeninėse agentūrose. Šiame išsamiame gide atvirai išanalizuosime realią Lietuvos rinkos situaciją, skirtingų kategorijų kainų rėžius bei paaiškinsime, už ką iš tiesų mokate ir kaip nepermokėti.",
      sections: [
        {
          heading: "1. Pagrindinės svetainių kategorijos ir kainų rėžiai",
          paragraphs: [
            "Starto / Landing page svetainė (nuo 200 € iki 500 €): Tai vieno puslapio reprezentacinis sprendimas, skirtas vienai konkrečiai paslaugai, produktui ar asmeniniam meistro įvaizdžiui pristatyti. Į šią kainą įeina unikalus dizainas, mobili versija, užklausos forma tiesiai į el. paštą arba Telegram, bazinis SEO ir greitas paleidimas per 1–2 savaites.",
            "Verslo svetainė su turinio valdymo sistema (nuo 500 € iki 1 500 €): Kelių puslapių (pvz., Pradžia, Apie mus, Paslaugos, Darbų galerija, Kainos, Kontaktai) svetainė su patogia administravimo sistema (CMS). Šis variantas idealiai tinka mažoms ir vidutinėms įmonėms, kurios nori pačios atnaujinti atliktų darbų nuotraukas, pildyti paslaugų aprašymus ir publikuoti naujienas.",
            "El. parduotuvės ir individualios sistemos (nuo 1 200 € iki 4 000+ €): Pilnavertė prekybos arba savitarnos sistema su prekių katalogu, pirkinių krepšeliu, automatizuotais mokėjimais (Stripe, Montonio, Paysera), paštomatų lipdukų generavimu bei klientų paskyromis.",
          ],
        },
        {
          heading: "2. Kas sudaro galutinę svetainės sąmatą?",
          paragraphs: [
            "Dizainas ir vartotojo patirtis (UI/UX): Pigiausias kelias — nupirktas gatavas šablonas, kurį naudoja tūkstančiai kitų svetainių. Individualiai pagal jūsų veiklą suprojektuota struktūra kainuoja daugiau, tačiau atsiperka kur kas aukštesniu konversijos rodikliu — lankytojai supranta pasiūlymą ir pateikia užklausą.",
            "Technologinis pagrindas: Šiuolaikinės technologijos, tokios kaip Next.js ir React, užtikrina žaibišką krovimosi greitį (iki 50 ms) ir aukščiausią saugumą, priešingai nei seni WordPress sprendimai, perkrauti dešimtimis lėtėjančių įskiepių.",
            "Techninis SEO paruošimas: Tai ne tik meta aprašymai, bet ir Schema.org struktūriniai duomenys, teisinga H1–H3 antraščių hierarchija, Canonical nuorodos, Sitemap.xml ir OpenGraph socialinių tinklų integracija.",
          ],
        },
        {
          heading: "3. Paslėpti kaštai, apie kuriuos agentūros dažnai nutyli",
          paragraphs: [
            "Priežiūros ir palaikymo mokesčiai: Kai kurios agentūros reikalauja privalomų 50–200 €/mėn. sutarčių vien už tai, kad svetainė veiktų. SiteStudio modelyje priežiūra kainuoja vos 8–10 €/mėn. arba svetainė perduodama pilnai valdyti pačiam klientui.",
            "Mokesčiai už turinio redagavimą: Jei svetainė sukurta be patogios TVS (CMS), už kiekvieną nuotraukos ar kainos pakeitimą programuotojas gali prašyti 30–50 € valandinio įkainio. Įsidiegus šiuolaikinę CMS, visus pakeitimus atliekate patys per minutę.",
            "Domeno ir serverio nuosavybė: Visada reikalaukite, kad .lt domenas ir talpinimo paskyra būtų registruoti jūsų įmonės vardu, o ne vykdytojo agentūros.",
          ],
        },
        {
          heading: "4. Kaip protingai sutaupyti kuriant svetainę?",
          paragraphs: [
            "Prieš kreipdamiesi į kūrėją, aiškiai susirašykite savo paslaugų sąrašą, preliminarias kainas ir paruoškite realias atliktų darbų nuotraukas. Kuo mažiau nežinomųjų starto metu — tuo tikslesnė ir mažesnė galutinė sąmata.",
            "Rinkitės tiesioginį ryšį su vykdytoju: dirbant su nepriklausoma specializuota studija, bendraujate tiesiai su programuotoju, todėl nemokate už agentūros vadybininkų grandinę, prabangius biurus ir administravimo antkainius.",
          ],
        },
      ],
      takeaways: [
        "Rimtos reprezentacinės svetainės startas prasideda nuo 200–500 €, su turinio valdymu — nuo 500 €.",
        "Reikalaukite fiksuotos kainos ir termino sutarties raštu prieš pradedant darbus.",
        "Niekada nepirkite svetainės be garantijos, kad kodas ir domenas bus 100% jūsų nuosavybė.",
      ],
    },
  },
  {
    slug: "kiek-kainuoja-el-parduotuves-kurimas",
    title: "Kiek kainuoja el. parduotuvės kūrimas ir paleidimas Lietuvoje?",
    description: "Ką reikia žinoti apie el. parduotuvės kainą: mokėjimai, pristatymas, dizainas ir nuolatinės išlaidos.",
    publishedAt: "2026-08-02",
    readTime: "9 min.",
    category: "El. komercija",
    content: {
      intro: "Elektroninė prekyba Lietuvoje ir visoje Europos Sąjungoje išgyvena brandos etapą. Pirkėjai tikisi ne tik gražių prekių nuotraukų, bet ir žaibiško puslapių krovimosi išmaniajame telefone, patogios atsiskaitymo vienu paspaudimu sistemos (Apple Pay, Google Pay, Montonio) bei momentinio paštomatų pasirinkimo. Šiame gide detaliai išnagrinėsime el. parduotuvės kūrimo kainą, platformų pasirinkimą ir būtinas integracijas.",
      sections: [
        {
          heading: "1. El. parduotuvių kainų lygiai",
          paragraphs: [
            "Bazinė el. parduotuvė (nuo 1 000 € iki 1 800 €): Sprendimas pradedančiam prekybos verslui su iki 100 prekių. Apima prekių katalogą, kategorijas, pirkinių krepšelį, atsiskaitymo formą, integraciją su Lietuvos bankais (Montonio arba Stripe) ir Omniva / DPD paštomatais.",
            "Išplėstinė verslo el. parduotuvė (nuo 2 000 € iki 4 500 €): Dideliam asortimentui skirta parduotuvė su pažangiais prekių filtrais, variantais (dydžiai, spalvos), nuolaidų kodais, apleistų krepšelių priminimais, daugiakalbyste ir automatinėmis sąskaitomis-faktūromis.",
            "Individualios B2B ir didmeninės prekybos sistemos (nuo 4 000 €): Skirtos įmonėms su skirtingais kainininkais pagal klientų grupes, integracijomis su sandėlio valdymo programomis (Rivilė, Būtent, Stekas) ir individualiais užsakymų limitais.",
          ],
        },
        {
          heading: "2. Būtinos integracijos ir jų kaštai",
          paragraphs: [
            "Mokėjimų surinkimas: Populiariausias pasirinkimas Lietuvoje — Montonio, imantis vos 0,05–0,10 € už bankinį pavedimą, arba Stripe tarptautinėms kredito kortelėms ir Apple Pay. Integravus šiuos vartus, pirkėjas atsiskaito per 10 sekundžių.",
            "Pristatymo automatizavimas: Omniva, DPD, LP Express integracijos leidžia pirkėjui žemėlapyje pasirinkti artimiausią paštomatą, o administratoriui — vienu mygtuko paspaudimu atspausdinti siuntos lipduką.",
            "Apskaita ir sąskaitos: Automatinis PDF sąskaitų-faktūrų generavimas ir išsiuntimas pirkėjui el. paštu taupo šimtus buhalterio darbo valandų per metus.",
          ],
        },
        {
          heading: "3. Nuolatiniai el. parduotuvės išlaikymo kaštai",
          paragraphs: [
            "Domenas (.lt): apie 10–12 € per metus.",
            "Saugus ir greitas talpinimas (hostingas): nuo 10 € iki 30 € per mėnesį, priklausomai nuo lankytojų srauto ir duomenų bazės apimties.",
            "Mokėjimų tarpininkų komisiniai: skaičiuojami tik nuo realiai įvykusių pardavimų (fiksuotas mokestis už transakciją).",
          ],
        },
      ],
      takeaways: [
        "Didžiausią įtaką pardavimams daro atsiskaitymo žingsnių paprastumas telefone.",
        "Rinkitės modernią, greitą technologiją, kuri atlaiko srauto šuolius akcijų metu.",
        "Automatizuokite siuntų lipdukus ir sąskaitas nuo pat pirmos parduotuvės paleidimo dienos.",
      ],
    },
  },
  {
    slug: "nextjs-vs-wordpress",
    title: "Next.js prieš WordPress: kurį pasirinkti verslo svetainei?",
    description: "Išsamus Next.js ir WordPress palyginimas verslo savininkui: greitis, saugumas, priežiūros kaštai ir SEO galimybės.",
    publishedAt: "2026-08-03",
    readTime: "10 min.",
    category: "Technologijos",
    content: {
      intro: "Daugiau nei 15 metų WordPress buvo numatytasis pasirinkimas beveik bet kuriai interneto svetainei. Tačiau internetas pasikeitė: vartotojai reikalauja akimirksniu atsidarančių puslapių telefone, o Google algoritmai negailestingai baudžia lėtas svetaines. Naujos kartos karkasas Next.js (React pagrindu) tapo modernių technologijų lyderiu. Šiame straipsnyje objektyviai palyginame abi technologijas verslo požiūriu.",
      sections: [
        {
          heading: "1. Greitis ir Google Core Web Vitals",
          paragraphs: [
            "Tradicinis WordPress veikia dinamiškai: kaskart lankytojui užėjus, serveris vykdo PHP kodą, atlieka dešimtis SQL užklausų į duomenų bazę ir tik tada sugeneruoja puslapį. Net su kešavimo įskiepiais krovimosi laikas dažnai siekia 2–5 sekundes.",
            "Next.js naudoja statinį generavimą (SSG / Static Site Generation) ir serverio krašto (Edge) technologiją. Puslapiai paruošiami iš anksto ir atsidaro per 20–50 milisekundžių. Google PageSpeed teste Next.js svetainės lengvai pasiekia 95–100 balų įvertinimą.",
          ],
        },
        {
          heading: "2. Saugumas ir įskiepių 'pragaras'",
          paragraphs: [
            "Vidutinė WordPress svetainė naudoja 25–40 skirtingų autorių įskiepių (kontaktų formos, SEO, greitis, saugumas, vertimai). Kiekvienas įskiepis yra potenciali saugumo spraga — WordPress yra pati dažniausiai atakuojama TVS pasaulyje.",
            "Next.js svetainėse nėra atviros duomenų bazės ar pažeidžiamo PHP variklio tiesiogiai internete. Kodas yra sukompiliuotas ir saugus, todėl jums nereikia baimintis, kad po eilinio atnaujinimo svetainė 'nulūš' ar bus užkrėsta kenkėjišku kodu.",
          ],
        },
        {
          heading: "3. Turinio valdymo patogumas",
          paragraphs: [
            "Paplitęs mitas, kad pasirinkus Next.js nebegalima patiems valdyti turinio. Priešingai: Next.js sujungiamas su modernia 'Headless' turinio valdymo sistema (Directus, Sanity ar Strapi). Administratoriaus aplinka yra daug švaresnė, greitesnė ir neturi WordPress chaoso su reklaminiais pranešimais.",
          ],
        },
        {
          heading: "4. Palyginimo santrauka verslui",
          paragraphs: [
            "WordPress tinka: asmeniniams nekomerciniams tinklaraščiams arba projektams su minimaliu 100 € biudžetu, kur greitis ir saugumas nėra kritiniai.",
            "Next.js tinka: reprezentacinėms verslo svetainėms, paslaugų teikėjams, el. parduotuvėms ir augančioms įmonėms, kurioms svarbus nepriekaištingas greitis, SEO pozicijos ir ilgalaikis patikimumas.",
          ],
        },
      ],
      takeaways: [
        "Next.js užtikrina 5–10 kartų greitesnį užkrovimą lyginant su standartiniu WordPress.",
        "Mažesnės ilgalaikės priežiūros išlaidos dėl nulinės įskiepių konfliktų rizikos.",
        "Aukštesni Google Core Web Vitals balai tiesiogiai gerina pozicijas paieškoje.",
      ],
    },
  },
  {
    slug: "svetaines-atnaujinimas-kada-verta",
    title: "Kada verta atnaujinti pasenusią svetainę: 7 aiškūs požymiai",
    description: "Kaip suprasti, kad jūsų svetainė atbaido klientus ir kada atnaujinimas atsiperka greičiausiai.",
    publishedAt: "2026-08-04",
    readTime: "7 min.",
    category: "Strategija",
    content: {
      intro: "Interneto svetainė yra jūsų verslo skaitmeninis biuras arba vitrina. Jei realiame gyvenime jūsų biuras tvarkingas, o svetainė internete atrodo lyg sukurta 2016 metais, potencialus klientas susidaro klaidingą įspūdį apie jūsų paslaugų kokybę dar prieš pirmą skambutį. Štai 7 aiškūs požymiai, rodantys, kad svetainės atnaujinimas yra neatidėliotinas.",
      sections: [
        {
          heading: "1. 7 signalai, kad laikas atnaujinti svetainę",
          paragraphs: [
            "1. Prastas veikimas telefone: Daugiau nei 70% vartotojų šiandien naršo išmaniaisiais telefonais. Jei telefone tekstas per smulkus, mygtukai sunkiai paspaudžiami, o formos lūžta — prarandate didžiąją dalį užklausų.",
            "2. Lankytojai ateina, bet užklausų nėra (žema konversija): Jei matote lankytojų srautą Google Analytics, tačiau skambučių ar laiškų nesulaukiate, problema yra paini struktūra, neaiškus pasiūlymas arba sudėtinga kontaktų forma.",
            "3. Lėtas krovimosi laikas (> 3 sekundės): Tyrimai rodo, kad jei puslapis kraunasi ilgiau nei 3 sekundes, 40% vartotojų grįžta atgal į Google ir pasirenka konkurentą.",
            "4. Negalite patys pasikeisti informacijos: Jei norint pakeisti telefono numerį ar įkelti naują nuotrauką tenka ieškoti buvusio programuotojo ir laukti savaitėmis, jūsų svetainė yra techniškai pasenusi.",
            "5. Saugumo įspėjimai naršyklėje: Trūkstamas arba neteisingai sukonfigūruotas SSL sertifikatas gąsdina lankytojus užrašu 'Svetainė nesaugi'.",
            "6. Krentančios Google paieškos pozicijos: Google algoritmai nuolat griežtina techninius reikalavimus. Pasenusios svetainės pamažu stumiamos į antrą ir trečią paieškos puslapį.",
            "7. Vizualinis pasenimas: Dizaino tendencijos keičiasi. Šviesus, erdvus, minimalistinis dizainas kelia pasitikėjimą ir kuria profesionalumo įvaizdį.",
          ],
        },
        {
          heading: "2. Kaip atnaujinti svetainę neprarandant SEO pozicijų?",
          paragraphs: [
            "Kritinė klaida atnaujinant svetainę — pakeisti puslapių adresus (URL) be 301 nukreipimų. Jei senos svetainės puslapis buvo gerai reitinguojamas Google, pakeitus adresą be nukreipimo Google gaus 404 klaidą ir pašalins jus iš paieškos.",
            "Profesionalaus atnaujinimo metu sudaromas visų senų adresų žemėlapis ir sukonfigūruojami 301 nukreipimai, todėl esamos pozicijos ne tik išsaugomos, bet po atnaujinimo dažniausiai pakyla dėl geresnio greičio.",
          ],
        },
      ],
      takeaways: [
        "Svetainės atnaujinimas yra investicija į konversijų didinimą, o ne tiesiog kosmetinis pakeitimas.",
        "Būtina išsaugoti senus URL adresus per 301 nukreipimus, kad neprarastumėte Google srauto.",
        "Mobilus patogumas ir krovimosi greitis turi būti svarbiausi atnaujinimo prioritetai.",
      ],
    },
  },
  {
    slug: "vietinis-seo-verslui",
    title: "Vietinis SEO: kaip paslaugų verslui užimti pirmąsias Google pozicijas?",
    description: "Praktinis gidas, kaip paslaugų meistrams ir įmonėms būti randamiems savo mieste ir rajone.",
    publishedAt: "2026-08-05",
    readTime: "8 min.",
    category: "SEO",
    content: {
      intro: "Kai žmogui sugenda automobilis, prireikia plytelių klojėjo, odontologo ar teisininko, jis retai naršo socialinius tinklus — jis atsidaro Google ir veda: 'vonios remontas Vilnius', 'autoservisas Kaune' arba 'odontologas Klaipėdoje'. Vietinis SEO (Local SEO) yra galingiausias būdas gauti pačius karščiausius, pirkti pasiruošusius klientus.",
      sections: [
        {
          heading: "1. Google Business Profile (buvęs Google My Business)",
          paragraphs: [
            "Pirmas ir svarbiausias žingsnis — susikurti ir verifikuoti savo įmonės profilį Google žemėlapiuose. Užpildykite visus laukus: tikslų įmonės pavadinimą, aptarnaujamas teritorijas, darbo valandas, paslaugų kainininką ir kokybiškas nuotraukas.",
            "Atsiliepimų svarba: Reguliariai prašykite patenkintų klientų palikti atsiliepimą Google. Atsakykite į kiekvieną atsiliepimą — Google algoritmai tai vertina kaip aktyvų, patikimą verslą.",
          ],
        },
        {
          heading: "2. Svetainės struktūra vietiniam SEO",
          paragraphs: [
            "Tekstuose ir meta žymose natūraliai naudokite miestus ir regionus, kuriuose teikiate paslaugas.",
            "Integruokite Schema.org 'LocalBusiness' arba 'ProfessionalService' struktūrinius duomenis, nurodydami aptarnaujamą šalį, miestą, darbo laiką ir el. paštą.",
            "Sukurkite aiškų kontaktų puslapį su interaktyviu žemėlapiu ir paspaudžiamais telefono numeriais.",
          ],
        },
      ],
      takeaways: [
        "Vietinis SEO pritraukia klientus su didžiausia pirkimo intencija.",
        "Google Business Profile ir atsiliepimai yra tiesioginis raktas į 'Google 3-Pack' žemėlapio viršūnę.",
        "Techniškai tvarkinga svetainė padeda aplenkti konkurentus net be brangios reklamos.",
      ],
    },
  },
  {
    slug: "kaip-pasiruosti-svetaines-kurimui",
    title: "Kaip pasiruošti svetainės kūrimui: 7 žingsnių kontrolinis sąrašas",
    description: "Ką pasiruošti prieš kreipiantis į programuotoją, kad projektas būtų įgyvendintas dvigubai greičiau ir sklandžiau.",
    publishedAt: "2026-08-06",
    readTime: "7 min.",
    category: "Gidai",
    content: {
      intro: "Svetainės kūrimo procesas gali užtrukti 1 savaitę arba išsitęsti iki 3 mėnesių. Dažniausia vėlavimo priežastis — ne programavimo darbai, o užsakovo nepasiruošimas: trūksta tekstų, nuotraukų, neaiškūs tikslai. Šis kontrolinis sąrašas padės pasiruošti taip, kad darbai vyktų maksimaliai sklandžiai ir be streso.",
      sections: [
        {
          heading: "1. 7 žingsnių kontrolinis sąrašas",
          paragraphs: [
            "1. Apsibrėžkite pagrindinį svetainės tikslą: Ko norite, kad lankytojas pasiektų? Paskambintų, užpildytų užklausos formą, atsisiųstų kainyną ar nusipirktų prekę.",
            "2. Susirašykite teikiamų paslaugų sąrašą: Kiekvienai paslaugai paruoškite bent trumpą aprašymą, kam ji skirta ir kokias problemas sprendžia.",
            "3. Surinkite vizualinę medžiagą: Reikalingas logotipas vektoriniu formatu (SVG, AI arba aukštos raiškos PNG) ir tikros atliktų darbų ar komandos nuotraukos.",
            "4. Išsirinkite 2–3 patinkančius pavyzdžius: Parodykite kūrėjui svetaines, kurių estetika, struktūra ar patogumas jums patinka.",
            "5. Paruoškite kontaktinę informaciją: Įmonės rekvizitai, oficialus el. paštas, telefono numeris, darbo laikas.",
            "6. Užregistruokite domeną: Jei dar neturite, pasitikrinkite ir užregistruokite norimą .lt domeną savo vardu.",
            "7. Nusistatykite realų biudžetą ir terminus: Apsibrėžkite, kada svetainė privalo startuoti.",
          ],
        },
      ],
      takeaways: [
        "Geras pasiruošimas leidžia kūrėjui pateikti fiksuotą kainą be vėlesnių papildomų mokesčių.",
        "Tikros nuotraukos visada veikia geriau nei perkamos iš interneto fotobankų.",
      ],
    },
  },
  {
    slug: "kas-yra-turinio-valdymo-sistema",
    title: "Kas yra turinio valdymo sistema (CMS) ir kodėl verta ją turėti?",
    description: "Kaip veikia šiuolaikinė CMS ir kodėl nebereikia mokėti programuotojui už kiekvieną nuotraukos ar kainos pakeitimą.",
    publishedAt: "2026-08-07",
    readTime: "7 min.",
    category: "Technologijos",
    content: {
      intro: "Turinio valdymo sistema (angl. Content Management System, sutrumpintai CMS) — tai speciali administravimo aplinka, leidžianti svetainės savininkui savarankiškai kurti, redaguoti ir skelbti turinį be jokių programavimo žinių. Šiame straipsnyje paaiškiname, kaip veikia modernios CMS ir kodėl jos yra būtinos kiekvienam gyvam verslui.",
      sections: [
        {
          heading: "1. Kodėl verslui būtina turinio valdymo sistema?",
          paragraphs: [
            "Savarankiškumas ir greitis: Keičiasi paslaugų kainos, atsirado nauja paslauga ar norite įkelti šviežiai baigto objekto nuotraukas? Naudodamiesi CMS, pakeitimus atliekate per 2 minutes iš kompiuterio ar telefono.",
            "Nuliniiai papildomi kaštai: Jums nebereikia rašyti programuotojui, laukti jo atsakymo kelias dienas ir mokėti 30–50 € už kiekvieną tekstinį pataisymą.",
            "SEO gyvybingumas: Google algoritmai teigiamai vertina reguliariai atnaujinamas svetaines. Nauji straipsniai, darbai ir DUK atsakymai padeda pritraukti daugiau organinio srauto.",
          ],
        },
        {
          heading: "2. Šiuolaikinės Headless CMS prieš senąsias sistemas",
          paragraphs: [
            "Tradicinės sistemos (pvz., senas WordPress) dažnai yra lėtos, perkrautos nereikalingais meniu punktais ir pažeidžiamos atakoms.",
            "Modernios 'Headless' CMS (pvz., Directus) veikia atskirai nuo pačios svetainės. Jos yra žaibiškos, intuityvios, turi patogius nuotraukų karpymo įrankius ir leidžia apmokyti darbuotoją naudotis vos per vieną valandą.",
          ],
        },
      ],
      takeaways: [
        "CMS suteikia pilną laisvę valdyti savo verslo informaciją be techninių tarpininkų.",
        "Headless CMS užtikrina maksimalų saugumą ir administravimo paprastumą.",
      ],
    },
  },
  {
    slug: "svetaines-greicio-optimizavimas",
    title: "Kodėl svetainės greitis tiesiogiai lemia užklausų skaičių ir pardavimus?",
    description: "Kiekviena papildoma krovimosi sekundė kainuoja 10–20% prarastų klientų. Kaip pasiekti 100/100 Google PageSpeed rezultatą.",
    publishedAt: "2026-08-08",
    readTime: "8 min.",
    category: "Optimizacija",
    content: {
      intro: "Šiuolaikinis interneto vartotojas yra nekantrus. 'Google' ir 'Deloitte' atlikti tyrimai rodo: svetainės užkrovimo laikui pailgėjus vos 1 sekunde, konversijų skaičius krenta iki 20%, o atmetimo rodiklis (bounce rate) išauga daugiau nei 30%. Svetainės greitaveika nebėra tik programuotojų techninis rodiklis — tai tiesioginis jūsų verslo pajamų veiksnys.",
      sections: [
        {
          heading: "1. Kaip greitis veikia Google reitingus (Core Web Vitals)",
          paragraphs: [
            "Google oficialiai naudoja Core Web Vitals metrikas kaip reitingavimo faktorių:",
            "LCP (Largest Contentful Paint): per kiek laiko ekrane atsiranda pagrindinis turinio blokas. Tikslas — < 2.5 sekundės (Next.js pasiekia < 0.8 s).",
            "INP (Interaction to Next Paint): kaip greitai svetainė reaguoja į paspaudimą. Tikslas — < 200 ms.",
            "CLS (Cumulative Layout Shift): ar kraunantis puslapiui elementai nešokinėja ekrane. Tikslas — < 0.1.",
          ],
        },
        {
          heading: "2. Kaip pasiekiamas maksimalus greitis?",
          paragraphs: [
            "Nuotraukų optimizavimas: Paveikslėliai automatiškai konvertuojami į naujos kartos AVIF ir WebP formatus, sumažinant jų svorį iki 80% be kokybės praradimo.",
            "Statinis generavimas (SSG) ir Edge CDN: HTML kodas pateikiamas iš arčiausiai vartotojo esančio serverio be vėlinimo.",
            "Šriftų ir kodo suspaudimas: Nenaudojami sunkūs išoriniai skriptai ar bibliotekos, kurios blokuoja naršyklės atvaizdavimą.",
          ],
        },
      ],
      takeaways: [
        "Greita svetainė = aukštesnės pozicijos Google ir daugiau užsakymų.",
        "Next.js statinis generavimas užtikrina žaibišką krovimąsi net prie silpno mobiliojo interneto ryšio.",
      ],
    },
  },
  {
    slug: "ai-automatizavimas-smulkiam-verslui",
    title: "Kaip AI ir automatizavimas padeda smulkiam verslui taupyti laiką?",
    description: "Praktiniai pavyzdžiai: kaip automatiškai apdoroti užklausas, generuoti sąskaitas ir atsakyti klientams.",
    publishedAt: "2026-08-09",
    readTime: "8 min.",
    category: "Automatizavimas",
    content: {
      intro: "Dirbtinis intelektas ir procesų automatizavimas nebėra tik didžiųjų technologijų korporacijų privilegija. Šiandien net 1–5 darbuotojų įmonė arba savarankiškai dirbantis meistras gali automatizuoti pasikartojančius darbus ir sutaupyti nuo 10 iki 20 valandų brangaus laiko kiekvieną savaitę.",
      sections: [
        {
          heading: "1. Ką realiai galima automatizuoti jau šiandien?",
          paragraphs: [
            "Momentinis užklausų nukreipimas: Klientui užpildžius formą svetainėje, duomenys automatiškai patenka į Google Sheets arba CRM, o jums į telefoną (Telegram / WhatsApp) atsiunčiamas pranešimas su kliento numeriu ir poreikiu.",
            "Automatiniai atsakymai ir pirminės sąmatos: Sistema automatiškai išsiunčia klientui patvirtinimo laišką su paslaugų katalogu, DUK atsakymais arba preliminaria kainos skaičiuokle.",
            "Sąskaitų ir dokumentų generavimas: Pirkėjui atlikus mokėjimą ar patvirtinus užsakymą, automatiškai sugeneruojama PVM sąskaita-faktūra ir išsiunčiama buhalterijai bei klientui.",
          ],
        },
        {
          heading: "2. Kaip protingai pradėti?",
          paragraphs: [
            "Taisyklė viena — automatizuokite tik ten, kur atsiperka. Nereikia diegti sudėtingų brangių sistemų ten, kur užtenka paprasto sujungimo tarp svetainės ir jūsų el. pašto ar CRM.",
          ],
        },
      ],
      takeaways: [
        "Automatizavimas leidžia verslui dirbti 24/7, net kai jūs ilsitės.",
        "Pradėkite nuo paprasčiausių procesų: užklausų registravimo ir momentinių pranešimų.",
      ],
    },
  },
  {
    slug: "el-parduotuves-mokejimu-budai-lietuvoje",
    title: "Mokėjimų integracijos el. parduotuvėms Lietuvoje: Stripe, Montonio, Paysera",
    description: "Kuris mokėjimų surinkimo partneris geriausiai tinka jūsų verslui: komisiniai mokesčiai, funkcijos ir diegimas.",
    publishedAt: "2026-08-10",
    readTime: "8 min.",
    category: "El. komercija",
    content: {
      intro: "Atsiskaitymo procesas yra ta vieta, kur įvyksta arba pardavimas, arba krepšelio apleidimas. Jei pirkėjas neranda savo mėgstamo banko ar atsiskaitymo kortele būdo, jis paprasčiausiai išeina pas konkurentą. Šiame gide palyginame tris populiariausius mokėjimų vartus Lietuvoje: Montonio, Stripe ir Paysera.",
      sections: [
        {
          heading: "1. Montonio — Baltijos šalių lyderis",
          paragraphs: [
            "Privalumai: Itin maži banklink mokesčiai (vos 0,05–0,10 € už operaciją), vienas patogus langas visiems Lietuvos, Latvijos, Estijos ir Lenkijos bankams, integruotas paštomatų lipdukų spausdinimas.",
            "Kam tinka: Visoms el. parduotuvėms, kurių pagrindinė rinka yra Lietuva ir Baltijos šalys.",
          ],
        },
        {
          heading: "2. Stripe — Pasaulinis standartas",
          paragraphs: [
            "Privalumai: Nepriekaištingas Apple Pay ir Google Pay palaikymas, atsiskaitymai kredito kortelėmis iš bet kurios pasaulio šalies, patogus prenumeratų ir pasikartojančių mokėjimų valdymas.",
            "Kam tinka: Tarptautinei prekybai, skaitmeniniams produktams, SaaS paslaugoms.",
          ],
        },
        {
          heading: "3. Paysera — Klasikinis sprendimas",
          paragraphs: [
            "Privalumai: Ilgametė patirtis, platus papildomų atsiskaitymo būdų pasirinkimas (mokėjimai prekybos centruose, lizingas).",
            "Trūkumai: Šiek tiek senesnė vartotojo sąsaja lyginant su Montonio ar Stripe.",
          ],
        },
      ],
      takeaways: [
        "Vietinei prekybai Montonio šiuo metu siūlo geriausią kainos ir funkcijų santykį.",
        "Tarptautinei prekybai ir Apple Pay atsiskaitymams būtina integruoti Stripe.",
      ],
    },
  },
  {
    slug: "seo-klaidos-kuriu-reikia-vengti",
    title: "10 dažniausių SEO klaidų, dėl kurių verslo svetainės negauna lankytojų",
    description: "Ką dažniausiai praleidžia verslai: netinkamos meta žymos, lėtas krovimas, trūkstami struktūriniai duomenys ir kaip tai ištaisyti.",
    publishedAt: "2026-08-11",
    readTime: "9 min.",
    category: "SEO",
    content: {
      intro: "Sukurti vizualiai patrauklią svetainę yra tik pusė darbo. Jei svetainė turi techninių SEO klaidų, Google paieškos robotai jos tiesiog nesupras arba nuvertins. Štai 10 kritinių SEO klaidų, kurias matome analizuodami verslo svetaines Lietuvoje.",
      sections: [
        {
          heading: "1. 10 kritinių SEO klaidų sąrašas",
          paragraphs: [
            "1. Dubliuoti arba per ilgi Meta Title ir Description įrašai (Google nukerpa ilgesnius nei 60 simbolių pavadinimus).",
            "2. Trūkstami Schema.org JSON-LD struktūriniai duomenys — Google nesupranta, kas yra organizacija, paslauga ar DUK.",
            "3. Lėti puslapiai dėl neoptimizuotų, kelių megabaitų dydžio nuotraukų be WebP/AVIF formatų.",
            "4. Netaisyklinga antraščių hierarchija (pvz., keli H1 viename puslapyje arba H3 prieš H2).",
            "5. Prasta mobili versija ir elementų šokinėjimas kraunantis (CLS klaida).",
            "6. Lūžusios vidinės nuorodos ir 404 klaidos be teisingų 301 nukreipimų.",
            "7. Trūkstami arba neinformatyvūs paveikslėlių 'alt' atributai.",
            "8. Netvarkingas robots.txt failas, blokuojantis svarbių puslapių indeksavimą.",
            "9. Nėra Sitemap.xml failo arba jame nurodyti neegzistuojantys puslapiai.",
            "10. Trūkstamos kanoninės (canonical) žymos, sukeliančios turinio dubliavimą.",
          ],
        },
      ],
      takeaways: [
        "Techninis SEO yra pamatas — be jo joks turinys nepasieks Google viršūnės.",
        "SiteStudio visose svetainėse integruoja 100% techniškai tvarkingą SEO architektūrą.",
      ],
    },
  },
  {
    slug: "kaip-sukurti-efektyvu-landing-page",
    title: "Kaip sukurti vieno puslapio svetainę (landing page), kuri konvertuoja?",
    description: "Anatomija sėkmingo landing page: antraštės, pasitikėjimo elementai, pasiūlymas ir CTA mygtukai.",
    publishedAt: "2026-08-12",
    readTime: "8 min.",
    category: "Dizainas",
    content: {
      intro: "Landing page (nukreipimo puslapis) turi vienintelį tikslą — paversti lankytoją klientu. Čia nėra jokių blaškančių meniu punktų ar perteklinių nuorodų. Kiekvienas elementas, spalva ir žodis turi vesti link vieno veiksmo: užklausos, skambučio arba pirkimo.",
      sections: [
        {
          heading: "1. Sėkmingo Landing Page struktūra",
          paragraphs: [
            "Hero sekcija: Aiškus vertės pasiūlymas per 3 sekundes. Kas jūs esate, ką siūlote ir kodėl verta rinktis jus.",
            "Socialinis įrodymas (Social Proof): Realūs klientų atsiliepimai, sertifikatai, atliktų darbų nuotraukos.",
            "Problemos ir sprendimo kontrastas: Parodykite, su kokiomis problemomis susiduria klientas ir kaip jūsų paslauga jas išsprendžia.",
            "Paprasta užklausos forma: Ne daugiau 2–3 laukelių (Vardas, Kontaktai, Žinutė).",
          ],
        },
      ],
      takeaways: [
        "Vienas puslapis — viena aiški žinutė ir vienas pagrindinis veiksmo mygtukas.",
        "Pašalinkite visus blaškančius elementus, kad lankytojas sutelktų dėmesį į pasiūlymą.",
      ],
    },
  },
  {
    slug: "interneto-svetaines-prieziura",
    title: "Ką apima profesionali interneto svetainės priežiūra ir saugumas?",
    description: "Kodėl svetainei reikalingas nuolatinis monitoringas, atsarginės kopijos ir techninis atnaujinimas.",
    publishedAt: "2026-08-13",
    readTime: "7 min.",
    category: "Priežiūra",
    content: {
      intro: "Paleidus svetainę darbas nesibaigia. Internetas yra dinamiška aplinka: atsiranda nauji naršyklių reikalavimai, atnaujinami saugumo protokolai, o serveriams reikalingos reguliarios atsarginės kopijos. Šiame gide paaiškiname, kodėl priežiūra yra geriausias draudimas jūsų verslui.",
      sections: [
        {
          heading: "1. Ką apima profesionali priežiūra?",
          paragraphs: [
            "Kasdienės atsarginės kopijos: Saugomos nepriklausomoje debesų saugykloje, kad bet kokios avarijos atveju svetainę būtų galima atstatyti per 15 minučių.",
            "Veikimo stebėjimas (Uptime monitoring): Automatinės sistemos tikrina svetainės pasiekiamumą kas minutę. Įvykus sutrikimui, programuotojas reaguoja iš karto.",
            "Saugumo sertifikatai ir atnaujinimai: SSL sertifikatų atnaujinimas, saugumo paketų diegimas ir apsauga nuo DDoS atakų.",
          ],
        },
      ],
      takeaways: [
        "SiteStudio priežiūros planai prasideda nuo 8–10 €/mėn. be jokių ilgalaikių privalomų įsipareigojimų.",
      ],
    },
  },
  {
    slug: "b2b-svetainiu-kurimas",
    title: "B2B svetainių kūrimas: kaip pritraukti verslo klientus internete?",
    description: "Kuo B2B svetainės skiriasi nuo B2C ir kaip pateikti paslaugas įmonių vadovams bei pirkimų vadybininkams.",
    publishedAt: "2026-08-14",
    readTime: "8 min.",
    category: "B2B",
    content: {
      intro: "Verslas verslui (B2B) pirkėjai elgiasi visiškai kitaip nei privatūs vartotojai. Čia sprendimai priimami racionaliai, vertinant patirtį, terminus, finansinį stabilumą ir rizikas. B2B svetainė turi kalbėti profesionalia, konkrečia kalba.",
      sections: [
        {
          heading: "1. B2B svetainės sėkmės faktoriai",
          paragraphs: [
            "Išsamios atvejo analizės (Case Studies): Rodykite konkrečius atliktus projektus su iššūkiais, sprendimais ir pasiektais rezultatais.",
            "Techninė dokumentacija ir specifikacijos: Galimybė atsisiųsti PDF katalogus, brėžinius ar sertifikatus.",
            "Tiesioginis ryšys su specialistu: B2B vadovai nenori bendrauti su pardavimų robotais — jie nori greito atsakymo iš kompetentingo eksperto.",
          ],
        },
      ],
      takeaways: [
        "B2B svetainėje svarbiausia skaidrumas, patirtis ir aiškus bendradarbiavimo procesas.",
      ],
    },
  },
  {
    slug: "domenas-ir-talpinimas-verslui",
    title: "Domenas ir talpinimas (hostingas): ką svarbu žinoti prieš perkant?",
    description: "Kaip išsirinkti gerą .lt domeną, kuo skiriasi serveriai ir kodėl neverta permokėti.",
    publishedAt: "2026-08-14",
    readTime: "7 min.",
    category: "Gidai",
    content: {
      intro: "Domenas yra jūsų įmonės adresas internete, o talpinimas (hostingas) — serveris, kuriame saugomi svetainės failai. Teisingas šių elementų pasirinkimas užtikrina greitį, saugumą ir sklandų el. pašto veikimą.",
      sections: [
        {
          heading: "1. Domeno pasirinkimo taisyklės",
          paragraphs: [
            "Lietuvos rinkai rinkitės .lt galūnę — ji kelia didžiausią pasitikėjimą ir padeda vietiniam SEO.",
            "Venkite brūkšnelių ar sunkiai parašomų žodžių.",
            "Domeną visada registruokite savo įmonės ar asmeniniu vardu.",
          ],
        },
        {
          heading: "2. Serverio pasirinkimas",
          paragraphs: [
            "Rinkitės modernius serverius su NVMe SSD diskais, HTTP/3 ir LiteSpeed arba Nginx web serveriais.",
          ],
        },
      ],
      takeaways: [
        "Svetainė ir domenas visais atvejais privalo priklausyti jums, o ne agentūrai.",
      ],
    },
  },
  {
    slug: "strukturiniai-duomenys-schema-org",
    title: "Kas yra Schema.org struktūriniai duomenys ir kodėl jie svarbūs Google?",
    description: "Kaip JSON-LD padeda Google ir AI asistentams (ChatGPT, Gemini) teisingai suprasti jūsų verslą ir rodyti išplėstinius rezultatus.",
    publishedAt: "2026-08-15",
    readTime: "8 min.",
    category: "SEO",
    content: {
      intro: "Schema.org struktūriniai duomenys — tai universali semantinė kalba, padedanti paieškos sistemoms (Google, Bing) ir AI agentams (ChatGPT, Perplexity, Google Gemini) tiksliai suprasti jūsų svetainės turinį.",
      sections: [
        {
          heading: "1. Kodėl struktūriniai duomenys yra būtini 2026 m.?",
          paragraphs: [
            "Išplėstiniai rezultatai (Rich Snippets): Google paieškoje jūsų svetainė rodoma su DUK atsakymais, paslaugų kainomis, žvaigždutėmis ir autoriaus profiliu.",
            "AI paieškos paruošimas (GEO / AEO): Dirbtinio intelekto paieškos varikliai remiasi Schema.org JSON-LD grafais, kad pateiktų tikslius atsakymus vartotojams.",
          ],
        },
      ],
      takeaways: [
        "Visose SiteStudio svetainėse diegiamas išsamus JSON-LD Schema.org grafas.",
      ],
    },
  },
  {
    slug: "svetaines-konversiju-didinimas",
    title: "Kaip padidinti esamos svetainės konversijas be papildomo reklamos biudžeto?",
    description: "Paprasti, bet veiksmingi pakeitimai: formų trumpinimas, pasitikėjimo ženklai ir aiškūs veiksmo raginimai.",
    publishedAt: "2026-08-15",
    readTime: "8 min.",
    category: "Konversijos",
    content: {
      intro: "Daugelis verslų mano, kad norint gauti daugiau užsakymų, reikia išleisti dvigubai daugiau pinigų reklamai. Tačiau dažnai pakanka sutvarkyti esamos svetainės konversijos kelią (CRO), kad iš to paties lankytojų skaičiaus gautumėte dvigubai daugiau užklausų.",
      sections: [
        {
          heading: "1. 5 greiti konversijos didinimo žingsniai",
          paragraphs: [
            "1. Sutrumpinkite formas: pašalinkite nereikalingus laukelius — užtenka vardo ir kontakto.",
            "2. Aiškus telefono mygtukas mobiliajame: leiskite klientui paskambinti vienu paspaudimu.",
            "3. Nurodykite kainų orientyrus: 'nuo X €' pašalina nežinomybę ir filtruoja rimtus klientus.",
            "4. Rodykite tikrus atliktus darbus: vizualus įrodymas veikia geriau nei ilgi tekstai.",
            "5. Pabrėžkite atsakymo greitį: pvz., 'Atsakome per 1 darbo dieną'.",
          ],
        },
      ],
      takeaways: [
        "Mažiau trinties formose = daugiau užklausų iš to paties lankytojų srauto.",
      ],
    },
  },
];

export function getAllBlogSlugs(): string[] {
  return BLOG_POSTS.map((p) => p.slug);
}

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return BLOG_POSTS.find((p) => p.slug === slug);
}
