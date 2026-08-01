import Link from "next/link";

export default function Pricing() {
  const plans = [
    {
      name: "Startas",
      badge: null,
      price: "Nuo €290",
      description: "Puikiai tinka greitam reprezentacinės svetainės paleidimui.",
      features: [
        "Statinė Next.js svetainė",
        "Mobili versija & SEO",
        "Kontaktų forma su el. paštu",
        "Nemokamas SSL sertifikatas",
        "VPS talpinimas 1 mėn. nemokamai",
      ],
      popular: false,
      cta: "Užsakyti Startą",
    },
    {
      name: "Verslas CMS",
      badge: "Populiariausias",
      price: "Nuo €590",
      description: "Visapusiškas sprendimas su patogia Directus turinio valdymo sistema.",
      features: [
        "Next.js svetainė + Directus CMS",
        "Klientas pats keičia tekstus/nuotraukas",
        "Atskiras PostgreSQL konteineris",
        "Greita eiga & AEO optimizacija",
        "Automatinės S3 atsarginės kopijos",
        "Nemokamas palaikymas 3 mėn.",
      ],
      popular: true,
      cta: "Pasirinkti Verslą",
    },
    {
      name: "Enterprise App",
      badge: null,
      price: "Nuo €990",
      description: "Individualūs projektai su registracija, klientų skydeliu bei integracijomis.",
      features: [
        "Better Auth vartotojų registracija",
        "Kliento ir Admin skydeliai",
        "Directus CMS + DB migracijos",
        "Individualios API integracijos",
        "Dedikuota VPS infrastruktūra",
        "24/7 Monitoringas ir SLA",
      ],
      popular: false,
      cta: "Susisiekti",
    },
  ];

  return (
    <section id="kainos" className="py-24 bg-[#f7f7fb]">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-sm font-semibold text-[#7c3aed] uppercase tracking-wider mb-3">Kainodara</p>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-[#0b0b14] tracking-tight">
            Aiškios kainos, <span className="gradient-text">be paslėptų mokesčių</span>
          </h2>
          <p className="mt-4 text-[#6b6b80] text-base">
            Jokių paslėptų skaičiavimų — žinote, už ką mokate. Galimybė mokėti dalimis.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-center">
          {plans.map((plan, idx) => (
            <div
              key={idx}
              className={`bg-white p-8 rounded-3xl border relative flex flex-col justify-between ${
                plan.popular
                  ? "border-[#7c3aed] shadow-[0_20px_60px_-12px_rgba(124,58,237,0.15)] md:scale-105"
                  : "border-[#0b0b14]/10 shadow-soft"
              }`}
            >
              {plan.badge && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-gradient-to-r from-[#7c3aed] to-[#e11d48] px-4 py-1 text-xs font-bold text-white shadow-md whitespace-nowrap">
                  {plan.badge}
                </div>
              )}

              <div>
                <div className="text-xl font-bold text-[#0b0b14] mb-1">{plan.name}</div>
                <div className="text-4xl font-extrabold text-[#0b0b14] my-4">{plan.price}</div>
                <p className="text-[#6b6b80] text-sm mb-6">{plan.description}</p>

                <ul className="space-y-3 border-t border-[#0b0b14]/5 pt-6 mb-8">
                  {plan.features.map((feat, fIdx) => (
                    <li key={fIdx} className="flex items-center text-sm text-[#3b3b50]">
                      <span className="text-[#7c3aed] mr-2.5 font-bold">✓</span>
                      {feat}
                    </li>
                  ))}
                </ul>
              </div>

              <Link
                href="#kontaktai"
                className={`w-full text-center py-3.5 rounded-full font-semibold text-sm transition-all ${
                  plan.popular
                    ? "bg-gradient-to-r from-[#7c3aed] to-[#e11d48] text-white shadow-lg shadow-violet-500/20 hover:opacity-90"
                    : "bg-[#0b0b14] text-white hover:bg-[#1e1b4b]"
                }`}
              >
                {plan.cta}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
