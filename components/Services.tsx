export default function Services() {
  const services = [
    {
      icon: "💻",
      title: "Web Puslapių Kūrimas",
      description:
        "Kuriame itin greitus, modernius ir SEO pritaikytus tinklapius su Next.js & React. Unikalus dizainas, pritaikytas telefonams bei kompiuteriams.",
      features: ["Next.js 15 App Router", "Tailwind CSS v4 Dizainas", "Pilnas SEO & AEO optimizavimas", "Mobili versija"],
    },
    {
      icon: "🛠️",
      title: "Administravimas & Priežiūra",
      description:
        "Svetainės turinio atnaujinimai, techninė priežiūra, greitaveikos stebėjimas bei saugumo plėtiniai, kad jūsų verslas veiktų be pertrūkių.",
      features: ["Turinio atnaujinimai", "Saugumo atnaujinimai", "Svetainės greičio auditas", "Klaidų taisymas 24/7"],
    },
    {
      icon: "☁️",
      title: "Talpinimas & Cloud VPS",
      description:
        "Profesionalus hostingo sprendimas izoliuotuose Docker konteineriuose per Coolify. Nemokami SSL sertifikatai ir automatinės atsarginės kopijos.",
      features: ["Coolify Docker Hostingas", "Automatinis SSL (HTTPS)", "S3 Atsarginės kopijos", "Izoliuota PostgreSQL DB"],
    },
    {
      icon: "📝",
      title: "Directus CMS Integracija",
      description:
        "Patogi turinio valdymo sistema (CMS), leidžianti klientui pačiam lengvai keisti tekstus, nuotraukas, paslaugas bei straipsnius.",
      features: ["Intuityvi valdymo panelė", "Vartotojų rolių valdymas", "Medijos biblioteka", "Realaus laiko atnaujinimai"],
    },
  ];

  return (
    <section id="paslaugos" className="py-24 relative">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-xs uppercase font-bold tracking-widest text-indigo-400 mb-3">Mūsų Paslaugos</h2>
          <p className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Viskas, ko reikia jūsų <span className="gradient-text">skaitmeniniam verslui</span>
          </p>
          <p className="mt-4 text-slate-400 text-base sm:text-lg">
            Teikiame pilno ciklo paslaugas: nuo idėjos ir kodo iki saugaus talpinimo bei nuolatinės priežiūros.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="glass-panel glass-panel-hover p-8 rounded-3xl flex flex-col justify-between"
            >
              <div>
                <div className="text-4xl mb-5 inline-block p-3 rounded-2xl bg-indigo-950/60 border border-indigo-500/20">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">{service.title}</h3>
                <p className="text-slate-300 text-sm leading-relaxed mb-6">{service.description}</p>
              </div>

              <ul className="space-y-2.5 border-t border-slate-800/80 pt-6">
                {service.features.map((feature, fIdx) => (
                  <li key={fIdx} className="flex items-center text-xs sm:text-sm text-slate-300">
                    <span className="mr-2.5 text-indigo-400 font-bold">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
