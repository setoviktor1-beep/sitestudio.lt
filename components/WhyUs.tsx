const reasons = [
  {
    title: "Bendraujate su vykdytoju, ne su vadybininku",
    description:
      "Nuo pirmo pokalbio iki paleidimo kalbate su tuo pačiu žmogumi, kuris ir kuria jūsų svetainę. Jokio sugedusio telefono principo.",
  },
  {
    title: "Aiški apimtis ir kaina prieš pradedant",
    description:
      "Prieš darbus raštu sutariame, kas konkrečiai bus padaryta, kiek kainuos ir kada bus paruošta. Papildomi darbai — tik atskirai suderinus.",
  },
  {
    title: "Šiuolaikiška technologija be žargono",
    description:
      "Svetainės veikia greitai, saugiai ir gerai atrodo paieškoje. Kaip tai pasiekiame techniškai — mūsų rūpestis, jums svarbus rezultatas.",
  },
  {
    title: "Nepaliekame po paleidimo",
    description:
      "Paleidus svetainę padedame ją prižiūrėti: atnaujiname turinį, stebime veikimą, darome atsargines kopijas ir taisome smulkmenas.",
  },
];

export default function WhyUs() {
  return (
    <section className="py-20 md:py-24 bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="max-w-3xl mb-14">
          <p className="section-label mb-3">Kodėl SiteStudio</p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0f172a] tracking-tight">
            Maža studija — dideliais standartais
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {reasons.map((reason, idx) => (
            <div key={reason.title} className="flex gap-5 rounded-2xl border border-[#0f172a]/10 p-7 card-hover">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#e8eefc] text-sm font-bold text-[#2456d6]">
                {String(idx + 1).padStart(2, "0")}
              </span>
              <div>
                <h3 className="text-lg font-bold text-[#0f172a] mb-1.5">{reason.title}</h3>
                <p className="text-sm text-[#475569] leading-relaxed">{reason.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
