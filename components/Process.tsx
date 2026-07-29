export default function Process() {
  const steps = [
    { number: "01", title: "Konsultacija & Analizė", description: "Išgryniname jūsų verslo tikslus, tikslinę auditoriją bei reikalingą funkcionalumą." },
    { number: "02", title: "Dizainas & Architektūra", description: "Paruošiame šiuolaikišką dizainą ir suplanuojame saugią duomenų struktūrą." },
    { number: "03", title: "Programavimas & Testavimas", description: "Kuriame švarų Next.js kodą, sujungiame CMS / Auth bei atliekame SEO auditą." },
    { number: "04", title: "Paleidimas & Priežiūra", description: "Talpiname Coolify VPS serveryje su automatiniu SSL ir teikiame 24/7 palaikymą." },
  ];

  return (
    <section id="procesas" className="py-24 bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-sm font-semibold text-[#2563eb] uppercase tracking-wider mb-3">Kaip dirbame</p>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-[#0b0b14] tracking-tight">
            Nuo užklausos iki <span className="gradient-text">sprendimo</span>
          </h2>
          <p className="mt-4 text-[#6b6b80] text-base">
            Aiškus procesas trimis žingsniais. Be sudėtingo techninio žargono.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, idx) => (
            <div key={idx} className="bg-[#f7f7fb] p-7 rounded-3xl relative overflow-hidden card-hover">
              <div className="text-6xl font-black text-black/5 absolute top-4 right-4 select-none">
                {step.number}
              </div>
              <div className="relative">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#2563eb] to-[#7c3aed] text-white text-sm font-bold flex items-center justify-center mb-4">
                  {step.number}
                </div>
                <h3 className="text-lg font-bold text-[#0b0b14] mb-2">{step.title}</h3>
                <p className="text-[#6b6b80] text-sm leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
