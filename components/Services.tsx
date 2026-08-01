export default function Services() {
  const services = [
    {
      icon: "🌐",
      title: "Svetainių kūrimas",
      price: "Nuo 290€",
      description: "Modernios, greitos ir SEO pritaikytos svetainės su Next.js 15 ir Tailwind CSS v4.",
      features: ["Next.js 15 App Router", "Pilnas SEO & AEO", "Mobili versija", "Kontaktų forma"],
    },
    {
      icon: "🛠️",
      title: "Administravimas & Priežiūra",
      price: "Nuoma nuo 45€/mėn",
      description: "Turinio atnaujinimai, techninė priežiūra, greitaveikos stebėjimas ir saugumo atnaujinimai.",
      features: ["Turinio atnaujinimai", "Saugumo auditai", "Greičio optimizavimas", "Klaidų taisymas 24/7"],
    },
    {
      icon: "☁️",
      title: "Talpinimas & Cloud VPS",
      price: "Įskaičiuota",
      description: "Profesionalus hostingas izoliuotuose Docker konteineriuose per Coolify. Automatinis SSL ir S3 atsarginės kopijos.",
      features: ["Coolify Docker", "Automatinis SSL", "S3 atsarginės kopijos", "Izoliuota PostgreSQL"],
    },
    {
      icon: "📝",
      title: "Directus CMS Integracija",
      price: "Nuo 590€",
      description: "Patogi turinio valdymo sistema, leidžianti klientui pačiam lengvai keisti tekstus, nuotraukas ir paslaugas.",
      features: ["Intuityvi valdymo panelė", "Vartotojų rolės", "Medijos biblioteka", "Realaus laiko atnaujinimai"],
    },
  ];

  return (
    <section id="paslaugos" className="py-24 bg-[#f7f7fb]">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-sm font-semibold text-[#7c3aed] uppercase tracking-wider mb-3">Paslaugos</p>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-[#0b0b14] tracking-tight">
            Pasirinkite, ko reikia <span className="gradient-text">šiandien</span>
          </h2>
          <p className="mt-4 text-[#6b6b80] text-base sm:text-lg">
            Aiškios paslaugos su aiškiomis kainomis. Jei nesate tikri — užpildykite formą ir pakonsultuosime nemokamai.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-3xl border border-[#0b0b14]/10 card-hover shadow-soft"
            >
              <div className="flex items-start justify-between mb-5">
                <div className="text-4xl p-3 rounded-2xl bg-[#f7f7fb] border border-[#0b0b14]/5">
                  {service.icon}
                </div>
                <span className="text-sm font-bold text-[#7c3aed] bg-violet-50 px-3 py-1 rounded-full">
                  {service.price}
                </span>
              </div>
              <h3 className="text-2xl font-bold text-[#0b0b14] mb-2">{service.title}</h3>
              <p className="text-[#6b6b80] text-sm leading-relaxed mb-6">{service.description}</p>
              <ul className="space-y-2.5 border-t border-[#0b0b14]/5 pt-6">
                {service.features.map((feature, fIdx) => (
                  <li key={fIdx} className="flex items-center text-sm text-[#3b3b50]">
                    <span className="mr-2.5 text-[#7c3aed] font-bold">✓</span>
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
