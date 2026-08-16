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
    readTime: "6 min.",
    category: "Kainodara",
    content: {
      intro: "Planuojant naują svetainę, kainų rėžiai Lietuvos rinkoje gali svyruoti nuo 150 € pas pradedantį specialistą iki 5000+ € didelėse agentūrose. Šiame gide aiškiai apžvelgiame realias rinkos kainas ir kas jas lemia.",
      sections: [
        {
          heading: "Kainų kategorijos Lietuvoje",
          paragraphs: [
            "Starto / Landing page svetainė (iki 5 psl.): 200–500 €. Tai vieno ar kelių puslapių reprezentacinis sprendimas su kontaktų forma, greitu krovimu telefone ir baziniu SEO.",
            "Verslo svetainė su turinio valdymu (CMS): 500–1500 €. Sprendimas įmonėms, norinčioms pačioms pildyti darbus, straipsnius ir valdyti tekstus.",
            "El. parduotuvės ir individualios sistemos: nuo 1500–3000 €. Pilnas el. prekybos funkcionalumas su mokėjimais, sandėliu ir integracijomis.",
          ],
        },
        {
          heading: "Kas sudaro svetainės kainą?",
          paragraphs: [
            "1. Unikalus dizainas ir struktūra: šablonai kainuoja pigiau, tačiau individualiai pritaikytas dizainas žymiai geriau konvertuoja lankytojus į užklausas.",
            "2. Turinio valdymas: ar galėsite patys keisti tekstus, ar reikės kaskart kreiptis į programuotoją.",
            "3. Techninis SEO ir greitaveika: kokybiškas kodas be perteklinių įskiepių užtikrina aukštesnes pozicijas Google paieškoje.",
          ],
        },
      ],
      takeaways: [
        "Venkite paslėptų mėnesinių mokesčių už paprastus pakeitimus.",
        "Reikalaukite fiksuotos kainos ir termino raštu prieš pradedant darbus.",
        "Svetainė ir domenas visais atvejais turi priklausyti jums.",
      ],
    },
  },
  {
    slug: "kiek-kainuoja-el-parduotuves-kurimas",
    title: "Kiek kainuoja el. parduotuvės kūrimas ir paleidimas Lietuvoje?",
    description: "Ką reikia žinoti apie el. parduotuvės kainą: mokėjimai, pristatymas, dizainas ir nuolatinės išlaidos.",
    publishedAt: "2026-08-02",
    readTime: "7 min.",
    category: "El. komercija",
    content: {
      intro: "Elektroninė parduotuvė yra ne tik gražus katalogas, bet ir prekybos sistema su krepšeliu, mokėjimais bei užsakymų valdymu. Štai ką svarbu įvertinti skaičiuojant biudžetą.",
      sections: [
        {
          heading: "Būtinos el. parduotuvės funkcijos",
          paragraphs: [
            "Mokėjimų integracijos (Stripe, Montonio, Paysera ar banklinkai) leidžia pirkėjams atsiskaityti per kelias sekundes.",
            "Pristatymo moduliai (Omniva, DPD, LP Express paštomatai) automatizuoja siuntų lipdukų generavimą.",
            "Patogus prekių ir likučių valdymas taupo administratoriaus laiką kasdienėse operacijose.",
          ],
        },
      ],
      takeaways: [
        "Pirkimo procesas telefone turi būti kuo trumpesnis — mažiau žingsnių reiškia daugiau užsakymų.",
        "Rinkitės modernią technologiją, kuri atlaiko didelį lankytojų srautą per išpardavimus.",
      ],
    },
  },
  {
    slug: "nextjs-vs-wordpress",
    title: "Next.js prieš WordPress: kurį pasirinkti verslo svetainei?",
    description: "Išsamus Next.js ir WordPress palyginimas verslo savininkui: greitis, saugumas, priežiūros kaštai ir SEO galimybės.",
    publishedAt: "2026-08-03",
    readTime: "8 min.",
    category: "Technologijos",
    content: {
      intro: "Dešimtmečius dominavęs WordPress šiandien dažnai susiduria su lėtumu ir saugumo spragomis. Next.js (React) tapo naujuoju standartu modernioms verslo svetainėms.",
      sections: [
        {
          heading: "Greitis ir Google reitingai (Core Web Vitals)",
          paragraphs: [
            "WordPress svetainės su 20–30 įskiepių kraunasi 3–6 sekundes, kas atbaido mobiliuosius vartotojus.",
            "Next.js sukuria statinius HTML failus, kurie atsidaro per 20–50 milisekundžių — Google tai vertina aukščiausiais balais.",
          ],
        },
        {
          heading: "Saugumas ir priežiūra",
          paragraphs: [
            "WordPress reikalauja nuolatinių įskiepių atnaujinimų ir yra dažniausias programišių taikinys.",
            "Next.js aplikacijos neturi atviros duomenų bazės tiesiogiai internete, todėl yra praktiškai nepažeidžiamos įprastoms atakoms.",
          ],
        },
      ],
      takeaways: [
        "Reprezentacinėms svetainėms Next.js užtikrina maksimalų greitį ir ramybę dėl saugumo.",
        "Turinio valdymui galima prijungti šiuolaikinę Directus ar Sanity sistemą.",
      ],
    },
  },
  {
    slug: "svetaines-atnaujinimas-kada-verta",
    title: "Kada verta atnaujinti pasenusią svetainę: 7 aiškūs požymiai",
    description: "Kaip suprasti, kad jūsų svetainė atbaido klientus ir kada atnaujinimas atsiperka greičiausiai.",
    publishedAt: "2026-08-04",
    readTime: "5 min.",
    category: "Strategija",
    content: {
      intro: "Svetainė, sukurta prieš 5 ar 7 metus, šiandien dažnai atrodo pasenusi, lėtai kraunasi telefone ir nebekelia pasitikėjimo.",
      sections: [
        {
          heading: "7 signalai, kad laikas atnaujinimui",
          paragraphs: [
            "1. Svetainė nepritaikyta šiuolaikiniams išmaniesiems telefonams.",
            "2. Lankytojai ateina, bet nepateikia nė vienos užklausos.",
            "3. Negalite patys pasikeisti kainų ar įkelti naujų nuotraukų.",
            "4. Svetainės krovimas užtrunka ilgiau nei 2–3 sekundes.",
            "5. Google paieškoje nukritote žemiau konkurentų.",
            "6. Dizainas atrodo tarsi iš 2015 metų.",
            "7. Trūksta SSL sertifikato (naršyklė rodo 'Nesaugu').",
          ],
        },
      ],
      takeaways: [
        "Atnaujinant svarbu išsaugoti senus URL adresus (301 nukreipimai), kad neprarastumėte esamų SEO pozicijų.",
      ],
    },
  },
  {
    slug: "vietinis-seo-verslui",
    title: "Vietinis SEO: kaip paslaugų verslui užimti pirmąsias Google pozicijas?",
    description: "Praktinis gidas, kaip paslaugų meistrams ir įmonėms būti randamiems savo mieste ir rajone.",
    publishedAt: "2026-08-05",
    readTime: "6 min.",
    category: "SEO",
    content: {
      intro: "Kai žmogui prireikia vonios remonto, plytelių klojėjo ar dantų gydytojo, jis ieško: '[paslauga] [miestas]'. Kaip atsidurti viršuje?",
      sections: [
        {
          heading: "Svarbiausi vietinio SEO elementai",
          paragraphs: [
            "Google Business Profile (buvęs Google My Business): pilnai užpildytas profilis su atsiliepimais, darbo laiku ir nuotraukomis.",
            "Tikslingi svetainės puslapiai pagal regionus su Schema.org 'LocalBusiness' struktūriniais duomenimis.",
            "Klientų atsiliepimai su paminėtu miestu ar atliktų darbų vieta.",
          ],
        },
      ],
      takeaways: [
        "Vietinis SEO atneša pačius karščiausius klientus, pasiruošusius pirkti iš karto.",
      ],
    },
  },
  {
    slug: "kaip-pasiruosti-svetaines-kurimui",
    title: "Kaip pasiruošti svetainės kūrimui: 7 žingsnių kontrolinis sąrašas",
    description: "Ką pasiruošti prieš kreipiantis į programuotoją, kad projektas būtų įgyvendintas dvigubai greičiau ir sklandžiau.",
    publishedAt: "2026-08-06",
    readTime: "5 min.",
    category: "Gidai",
    content: {
      intro: "Pasiruošimas prieš pradedant darbus sutaupo savaites laiko ir leidžia iš karto gauti tikslų pasiūlymą.",
      sections: [
        {
          heading: "Kontrolinis sąrašas",
          paragraphs: [
            "1. Tikslas: ką svetainė turi daryti (rinkti užklausas, parduoti, registruoti vizitus).",
            "2. Paslaugų sąrašas ir bent preliminarūs kainų orientyrai.",
            "3. Kokybiškos atliktų darbų ar komandos nuotraukos.",
            "4. Logotipas ir pageidaujami stiliaus pavyzdžiai.",
            "5. Domeno pavadinimas (jei jau turite).",
          ],
        },
      ],
      takeaways: [
        "Net jei neturite pilnų tekstų, patyręs kūrėjas padės juos suformuluoti.",
      ],
    },
  },
  {
    slug: "kas-yra-turinio-valdymo-sistema",
    title: "Kas yra turinio valdymo sistema (CMS) ir kodėl verta ją turėti?",
    description: "Kaip veikia šiuolaikinė CMS ir kodėl nebereikia mokėti programuotojui už kiekvieną nuotraukos ar kainos pakeitimą.",
    publishedAt: "2026-08-07",
    readTime: "5 min.",
    category: "Technologijos",
    content: {
      intro: "Turinio valdymo sistema (angl. Content Management System) yra administravimo skydelis, kuriame redaguojate svetainės informaciją.",
      sections: [
        {
          heading: "Ką galite keisti patys?",
          paragraphs: [
            "Kainoraščius, paslaugų aprašymus ir kontaktus.",
            "Darbų galerijos nuotraukas ir projektų aprašymus.",
            "Naujienas, straipsnius ir klientų atsiliepimus.",
          ],
        },
      ],
      takeaways: [
        "Rinkitės sistemą, kurioje viskas aišku be specialių programavimo žinių.",
      ],
    },
  },
  {
    slug: "svetaines-greicio-optimizavimas",
    title: "Kodėl svetainės greitis tiesiogiai lemia užklausų skaičių ir pardavimus?",
    description: "Kiekviena papildoma krovimosi sekundė kainuoja 10–20% prarastų klientų. Kaip pasiekti 100/100 Google PageSpeed rezultatą.",
    publishedAt: "2026-08-08",
    readTime: "6 min.",
    category: "Optimizacija",
    content: {
      intro: "Šiuolaikinis vartotojas nelaukia — jei svetainė neatsidaro per 2 sekundes, jis grįžta į Google ir pasirenka konkurentą.",
      sections: [
        {
          heading: "Kaip pasiekiamas žaibiškas greitis",
          paragraphs: [
            "Next.js statinis generavimas (SSG) pateikia paruoštą HTML iš serverio krašto (Edge CDN).",
            "Paveikslėlių automatinis konvertavimas į naujos kartos AVIF ir WebP formatus.",
            "Šriftų išankstinis užkrovimas be išorinių 'render-blocking' užklausų.",
          ],
        },
      ],
      takeaways: [
        "Greita svetainė = aukštesnės pozicijos Google ir daugiau skambučių.",
      ],
    },
  },
  {
    slug: "ai-automatizavimas-smulkiam-verslui",
    title: "Kaip AI ir automatizavimas padeda smulkiam verslui taupyti laiką?",
    description: "Praktiniai pavyzdžiai: kaip automatiškai apdoroti užklausas, generuoti sąskaitas ir atsakyti klientams.",
    publishedAt: "2026-08-09",
    readTime: "7 min.",
    category: "Automatizavimas",
    content: {
      intro: "AI automatizavimas nebėra tik korporacijų privilegija. Net 1–5 darbuotojų įmonė gali sutaupyti 10+ valandų per savaitę.",
      sections: [
        {
          heading: "Realių procesų automatizavimas",
          paragraphs: [
            "1. Užklausos iš svetainės automatiškai nukeliauja į Google Sheets ir suformuoja Telegram pranešimą.",
            "2. El. laiškų atsakiklių ir pirminių sąmatų skaičiuoklių integravimas.",
            "3. Kliento priminimai apie vizitą SMS arba el. paštu.",
          ],
        },
      ],
      takeaways: [
        "Automatizuokite tik tas užduotis, kurios atima daugiausiai rutininio laiko.",
      ],
    },
  },
  {
    slug: "el-parduotuves-mokejimu-budai-lietuvoje",
    title: "Mokėjimų integracijos el. parduotuvėms Lietuvoje: Stripe, Montonio, Paysera",
    description: "Kuris mokėjimų surinkimo partneris geriausiai tinka jūsų verslui: komisiniai mokesčiai, funkcijos ir diegimas.",
    publishedAt: "2026-08-10",
    readTime: "6 min.",
    category: "El. komercija",
    content: {
      intro: "Lietuvos pirkėjai tikisi patogių atsiskaitymo būdų: el. bankininkystės, kortelių, Apple Pay ir Google Pay.",
      sections: [
        {
          heading: "Populiariausių sprendimų palyginimas",
          paragraphs: [
            "Montonio: ypač populiarus Baltijos šalyse, maži banklink mokesčiai, integruotas paštomatų lipdukų spausdinimas.",
            "Stripe: pasaulinis lyderis kortelių ir tarptautiniams mokėjimams, idealus abonementams ir prenumeratoms.",
            "Paysera: patikimas, seniai veikiantis sprendimas su plačiu atsiskaitymo būdų spektru.",
          ],
        },
      ],
      takeaways: [
        "Galime integruoti bet kurį pasirinktą mokėjimų operatorių.",
      ],
    },
  },
  {
    slug: "seo-klaidos-kuriu-reikia-vengti",
    title: "10 dažniausių SEO klaidų, dėl kurių verslo svetainės negauna lankytojų",
    description: "Ką dažniausiai praleidžia verslai: netinkamos meta žymos, lėtas krovimas, trūkstami struktūriniai duomenys ir kaip tai ištaisyti.",
    publishedAt: "2026-08-11",
    readTime: "7 min.",
    category: "SEO",
    content: {
      intro: "Turėti svetainę nepakanka — reikia, kad Google paieškos robotai suprastų jūsų turinį ir siūlytų jį ieškantiems žmonėms.",
      sections: [
        {
          heading: "Dažniausios klaidos",
          paragraphs: [
            "Dubliuoti arba per ilgi Meta Title ir Description įrašai.",
            "Nėra Schema.org struktūrinių duomenų (JSON-LD).",
            "Paveikslėliai be 'alt' aprašymų ir didžiulio svorio (kelis megabaitus).",
            "Nėra aiškios H1-H2-H3 antraščių hierarchijos.",
            "Lūžusios vidinės nuorodos ir 404 klaidos.",
          ],
        },
      ],
      takeaways: [
        "Kiekvienoje SiteStudio svetainėje techninis SEO sutvarkomas pagal aukščiausius standartus.",
      ],
    },
  },
  {
    slug: "kaip-sukurti-efektyvu-landing-page",
    title: "Kaip sukurti vieno puslapio svetainę (landing page), kuri konvertuoja?",
    description: "Anatomija sėkmingo landing page: antraštės, pasitikėjimo elementai, pasiūlymas ir CTA mygtukai.",
    publishedAt: "2026-08-12",
    readTime: "6 min.",
    category: "Dizainas",
    content: {
      intro: "Landing page tikslas — viena aiški konversija: skambutis, užklausa arba pirkinys.",
      sections: [
        {
          heading: "Struktūra, kuri veikia",
          paragraphs: [
            "Hero sekcija su aiškia verte: ką darote ir kuo esate naudingi.",
            "Problemos ir sprendimo pristatymas.",
            "Socialinis įrodymas: realūs darbai, atsiliepimai, garantijos.",
            "Aiškus, kontrastuojantis veiksmo mygtukas (CTA).",
          ],
        },
      ],
      takeaways: [
        "Nereikalingi blaškantys elementai mažina konversiją — palikite tik esmę.",
      ],
    },
  },
  {
    slug: "interneto-svetaines-prieziura",
    title: "Ką apima profesionali interneto svetainės priežiūra ir saugumas?",
    description: "Kodėl svetainei reikalingas nuolatinis monitoringas, atsarginės kopijos ir techninis atnaujinimas.",
    publishedAt: "2026-08-13",
    readTime: "5 min.",
    category: "Priežiūra",
    content: {
      intro: "Paleidus svetainę darbas nesibaigia — sklandžiam veikimui reikalinga nuolatinė priežiūra.",
      sections: [
        {
          heading: "Priežiūros paslaugos elementai",
          paragraphs: [
            "Kasdienės atsarginės kopijos saugioje debesų saugykloje.",
            "Veikimo ir pasiekiamumo stebėjimas (uptime monitoring).",
            "SSL sertifikatų atnaujinimas ir saugumo pataisos.",
            "Smulkūs turinio ir kontaktų atnaujinimai.",
          ],
        },
      ],
      takeaways: [
        "SiteStudio priežiūros planai prasideda vos nuo 8 €/mėn.",
      ],
    },
  },
  {
    slug: "b2b-svetainiu-kurimas",
    title: "B2B svetainių kūrimas: kaip pritraukti verslo klientus internete?",
    description: "Kuo B2B svetainės skiriasi nuo B2C ir kaip pateikti paslaugas įmonių vadovams bei pirkimų vadybininkams.",
    publishedAt: "2026-08-14",
    readTime: "6 min.",
    category: "B2B",
    content: {
      intro: "Verslo sprendimų priėmėjai vertina konkretumą, patirtį, terminus ir skaidrumą.",
      sections: [
        {
          heading: "Sėkmingos B2B svetainės taisyklės",
          paragraphs: [
            "Rodykite realius atliktus projektus ir atvejo analizes (case studies).",
            "Aiškiai aprašykite darbo procesą ir garantijas.",
            "Pateikite PDF katalogus ar specifikacijas atsisiuntimui.",
          ],
        },
      ],
      takeaways: [
        "B2B klientai vertina tiesioginį ryšį su kompetentingu specialistu.",
      ],
    },
  },
  {
    slug: "domenas-ir-talpinimas-verslui",
    title: "Domenas ir talpinimas (hostingas): ką svarbu žinoti prieš perkant?",
    description: "Kaip išsirinkti gerą .lt domeną, kuo skiriasi serveriai ir kodėl neverta permokėti.",
    publishedAt: "2026-08-14",
    readTime: "5 min.",
    category: "Gidai",
    content: {
      intro: "Domenas yra jūsų skaitmeninis adresas, o talpinimas — serveris, kuriame gyvena svetainė.",
      sections: [
        {
          heading: "Patarimai renkantis",
          paragraphs: [
            "Rinkitės trumpą, lengvai įsimenamą .lt domeną.",
            "Užtikrinkite, kad domenas registruojamas jūsų, o ne agentūros vardu.",
            "Rinkitės greitus serverius su NVMe diskais ir HTTP/3 palaikymu.",
          ],
        },
      ],
      takeaways: [
        "Visais atvejais domeno ir svetainės savininkas esate jūs.",
      ],
    },
  },
  {
    slug: "strukturiniai-duomenys-schema-org",
    title: "Kas yra Schema.org struktūriniai duomenys ir kodėl jie svarbūs Google?",
    description: "Kaip JSON-LD padeda Google ir AI asistentams (ChatGPT, Gemini) teisingai suprasti jūsų verslą ir rodyti išplėstinius rezultatus.",
    publishedAt: "2026-08-15",
    readTime: "6 min.",
    category: "SEO",
    content: {
      intro: "Schema.org yra universali kalba paieškos varikliams, paaiškinanti, kas yra puslapio turinyje.",
      sections: [
        {
          heading: "Nauda verslui",
          paragraphs: [
            "Išplėstiniai paieškos rezultatai (Rich Snippets) su DUK, kainomis ir reitingais.",
            "Geresnis supratimas Google AI Overviews ir LLM sistemose.",
            "Aukštesnis paspaudimų rodiklis (CTR) paieškos rezultatuose.",
          ],
        },
      ],
      takeaways: [
        "Visose SiteStudio svetainėse integruotas pilnas JSON-LD grafas.",
      ],
    },
  },
  {
    slug: "svetaines-konversiju-didinimas",
    title: "Kaip padidinti esamos svetainės konversijas be papildomo reklamos biudžeto?",
    description: "Paprasti, bet veiksmingi pakeitimai: formų trumpinimas, pasitikėjimo ženklai ir aiškūs veiksmo raginimai.",
    publishedAt: "2026-08-15",
    readTime: "6 min.",
    category: "Konversijos",
    content: {
      intro: "Jei turite lankytojų srautą, bet mažai užklausų, problema dažniausiai yra konversijos kelias.",
      sections: [
        {
          heading: "5 greiti būdai padidinti užklausų skaičių",
          paragraphs: [
            "1. Sutrumpinkite kontaktų formą iki 3 laukelių: vardas, telefonas/el. paštas, žinutė.",
            "2. Įdėkite paspaudžiamą telefono numerį viršutinėje juostoje.",
            "3. Prie kainų nurodykite 'kaina nuo' — tai sumažina nežinomybę.",
            "4. Rodykite realių darbų nuotraukas vietoj interneto nuotraukų.",
            "5. Pabrėžkite greitą atsakymo laiką (pvz., 'atsakome per 1 d. d.').",
          ],
        },
      ],
      takeaways: [
        "Mažiau trinties = daugiau užklausų iš to paties lankytojų skaičiaus.",
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
