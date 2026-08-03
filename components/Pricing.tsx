import Link from "next/link";

const plans = [
  {
    name: "Startas",
    badge: null,
    price: "nuo 490 €",
    audience: "Specialistams ir mažoms įmonėms, kurioms reikia tvarkingo prisistatymo internete.",
    includes: [
      "Vieno puslapio arba nedidelė (iki 3 psl.) svetainė",
      "Originalus dizainas, pritaikytas jūsų veiklai",
      "Mobili versija ir greitas veikimas",
      "Kontaktų forma į jūsų el. paštą",
      "Bazinis SEO ir žemėlapiai paieškai",
    ],
    excludes: "Neįtraukta: turinio valdymo sistema, el. parduotuvė, tekstų rašymas nuo nulio.",
    term: "Terminas: 1–2 savaitės",
    popular: false,
    cta: "Aptarti Starto planą",
  },
  {
    name: "Verslas",
    badge: "Dažniausias pasirinkimas",
    price: "nuo 990 €",
    audience: "Įmonėms, kurioms reikia pilnos svetainės ir galimybės pačioms valdyti turinį.",
    includes: [
      "Kelių puslapių svetainė (paslaugos, darbai, kontaktai)",
      "Turinio valdymas — patys keičiate tekstus ir nuotraukas",
      "Darbų galerija, naujienos ar tinklaraštis",
      "Kontaktų forma ir analitikos prijungimas",
      "Techninis SEO ir struktūriniai duomenys",
      "Apmokymas naudotis administravimo aplinka",
    ],
    excludes: "Neįtraukta: el. parduotuvės funkcijos, individualios integracijos.",
    term: "Terminas: 2–4 savaitės",
    popular: true,
    cta: "Aptarti Verslo planą",
  },
  {
    name: "Individualus sprendimas",
    badge: null,
    price: "individualus pasiūlymas",
    audience: "Verslams, kuriems reikia el. parduotuvės, rezervacijų, klientų paskyrų ar automatizavimo.",
    includes: [
      "El. parduotuvė su mokėjimais",
      "Rezervacijų ar užsakymų sistema",
      "Klientų paskyros ir administravimo skydelis",
      "API integracijos su jūsų naudojamomis sistemomis",
      "AI ir procesų automatizavimas",
    ],
    excludes: "Apimtis ir kaina — pagal konkretų poreikį, orientacinė pradžia nuo 1 900 €.",
    term: "Terminas: nuo 4 savaičių",
    popular: false,
    cta: "Aptarti projektą",
  },
];

export default function Pricing() {
  return (
    <section id="kainos" className="py-20 md:py-24 bg-[#f6f8fb]">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="max-w-3xl mb-14">
          <p className="section-label mb-3">Kainos</p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0f172a] tracking-tight">
            Aiškios kainos ir aiški apimtis
          </h2>
          <p className="mt-4 text-[#475569] text-base">
            Galutinę kainą patvirtiname raštu prieš pradedant darbus. Nurodytos kainos be PVM.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`bg-white p-8 rounded-2xl border relative flex flex-col ${
                plan.popular
                  ? "border-[#2456d6] shadow-[0_20px_50px_-16px_rgba(36,86,214,0.2)]"
                  : "border-[#0f172a]/10 shadow-soft"
              }`}
            >
              {plan.badge && (
                <div className="absolute -top-3 left-8 rounded-full bg-[#2456d6] px-4 py-1 text-xs font-bold text-white shadow-md whitespace-nowrap">
                  {plan.badge}
                </div>
              )}

              <div className="flex-1">
                <div className="text-lg font-bold text-[#0f172a]">{plan.name}</div>
                <div className="text-3xl font-extrabold text-[#0f172a] mt-2 mb-3">{plan.price}</div>
                <p className="text-[#475569] text-sm mb-6">{plan.audience}</p>

                <ul className="space-y-2.5 border-t border-[#0f172a]/5 pt-5 mb-5">
                  {plan.includes.map((feat) => (
                    <li key={feat} className="flex items-start text-sm text-[#334155]">
                      <svg className="mr-2.5 mt-0.5 h-4 w-4 shrink-0 text-[#2456d6]" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                        <path fillRule="evenodd" d="M16.7 5.3a1 1 0 010 1.4l-8 8a1 1 0 01-1.4 0l-4-4a1 1 0 111.4-1.4L8 12.6l7.3-7.3a1 1 0 011.4 0z" clipRule="evenodd" />
                      </svg>
                      {feat}
                    </li>
                  ))}
                </ul>

                <p className="text-xs text-[#64748b] leading-relaxed mb-2">{plan.excludes}</p>
                <p className="text-xs font-semibold text-[#334155] mb-6">{plan.term}</p>
              </div>

              <Link
                href="/#kontaktai"
                className={`w-full text-center py-3.5 rounded-xl font-semibold text-sm transition-colors ${
                  plan.popular
                    ? "bg-[#2456d6] text-white hover:bg-[#1a41ab]"
                    : "bg-[#0f172a] text-white hover:bg-[#1e293b]"
                }`}
              >
                {plan.cta}
              </Link>
            </div>
          ))}
        </div>

        <p className="mt-8 text-sm text-[#64748b] max-w-3xl">
          Svetainės talpinimas ir priežiūra — pagal poreikį: galime pasirūpinti paleidimu,
          saugiu talpinimu, atsarginėmis kopijomis ir atnaujinimais už sutartą mėnesinį mokestį.
        </p>
      </div>
    </section>
  );
}
