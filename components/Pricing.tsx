import Link from "next/link";

export default function Pricing() {
  const plans = [
    {
      name: "Startas",
      badge: "Smulkiam verslui",
      price: "Nuo €290",
      description: "Puikiai tinka greitam reprezentacinės svetainės paleidimui.",
      features: [
        "Statinė Next.js svetainė",
        "Mobili versija & SEO",
        "Kontaktų forma su el. paštu",
        "Nemokamas SSL sertifikatas",
        "VPS talpinimas 1 mėnesį nemokamai",
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
        "Klientas pati keičia tekstus/nuotraukas",
        "Atskiras PostgreSQL konteineris",
        "Grepita eiga & AEO optimizacija",
        "Automatinės S3 atsarginės kopijos",
        "Nemokamas palaikymas 3 mėn.",
      ],
      popular: true,
      cta: "Pasirinkti Verslą",
    },
    {
      name: "Enterprise App",
      badge: "Sistemoms & Proj.",
      price: "Nuo €990",
      description: "Individualūs web projektai su registracija, klientų skydeliu bei integracijomis.",
      features: [
        "Better Auth vartotojų registracija",
        "Kliento ir Admin skydeliai",
        "Directus CMS + DB migracijos",
        "Individualios API integracijos",
        "Dedikuota VPS infrastruktūra",
        "24/7 Monitoringas ir SLA",
      ],
      popular: false,
      cta: "Susisiekti Dėl Projekto",
    },
  ];

  return (
    <section id="kainos" className="py-24 relative">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-xs uppercase font-bold tracking-widest text-indigo-400 mb-3">Kainodara</h2>
          <p className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Aiški ir skaidri <span className="gradient-text">kainų struktūra</span>
          </p>
          <p className="mt-4 text-slate-400 text-base">Jokių paslėptų mokesčių. Galimybė mokėti dalimis.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {plans.map((plan, idx) => (
            <div
              key={idx}
              className={`glass-panel p-8 rounded-3xl flex flex-col justify-between relative ${
                plan.popular ? "border-indigo-500/50 shadow-2xl shadow-indigo-500/20 bg-slate-900/90" : ""
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-gradient-to-r from-indigo-500 to-purple-600 px-4 py-1 text-xs font-bold text-white shadow-md">
                  {plan.badge}
                </div>
              )}

              <div>
                <div className="text-xl font-bold text-white mb-1">{plan.name}</div>
                <div className="text-3xl font-extrabold text-white my-4">{plan.price}</div>
                <p className="text-slate-300 text-xs sm:text-sm mb-6">{plan.description}</p>

                <ul className="space-y-3 border-t border-slate-800/80 pt-6 mb-8">
                  {plan.features.map((feat, fIdx) => (
                    <li key={fIdx} className="flex items-center text-xs sm:text-sm text-slate-300">
                      <span className="text-indigo-400 mr-2 font-bold">✓</span>
                      {feat}
                    </li>
                  ))}
                </ul>
              </div>

              <Link
                href="#kontaktai"
                className={`w-full text-center py-3.5 rounded-xl font-semibold text-sm transition-all ${
                  plan.popular
                    ? "bg-gradient-to-r from-indigo-500 to-purple-600 text-white shadow-lg shadow-indigo-500/30 hover:opacity-95"
                    : "glass-panel text-slate-200 hover:text-white hover:bg-slate-800"
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
