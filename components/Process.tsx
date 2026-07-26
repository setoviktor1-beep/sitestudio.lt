export default function Process() {
  const steps = [
    {
      number: "01",
      title: "Konsultacija & Analizė",
      description: "Išgryniname jūsų verslo tikslus, tikslinę auditoriją bei reikalingą funkcionalumą.",
    },
    {
      number: "02",
      title: "Dizainas & Architektūra",
      description: "Paruošiame šiuolaikišką, patogų dizainą ir suplanuojame saugią duomenų struktūrą.",
    },
    {
      number: "03",
      title: "Programavimas & Testavimas",
      description: "Kuriame švarų Next.js kodą, sujungiame Directus CMS / Auth bei atliekame SEO auditą.",
    },
    {
      number: "04",
      title: "Paleidimas & Priežiūra",
      description: "Talpiname projektą Coolify VPS serveryje su automatiniu SSL ir teikiame 24/7 palaikymą.",
    },
  ];

  return (
    <section id="procesas" className="py-20 relative bg-slate-950/50">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-xs uppercase font-bold tracking-widest text-indigo-400 mb-3">Darbo Eiga</h2>
          <p className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Nuo idėjos iki <span className="gradient-text">sėkmingo paleidimo</span>
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, idx) => (
            <div key={idx} className="glass-panel p-6 rounded-2xl relative overflow-hidden group">
              <div className="text-5xl font-black text-slate-800/80 group-hover:text-indigo-500/20 transition-colors absolute top-4 right-4 select-none">
                {step.number}
              </div>
              <div className="text-xs font-bold text-indigo-400 uppercase tracking-wider mb-2">Žingsnis {step.number}</div>
              <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
              <p className="text-slate-300 text-sm leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
