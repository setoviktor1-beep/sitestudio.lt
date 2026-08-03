const examples = [
  {
    title: "Užklausos — iš karto į jūsų sistemą",
    description:
      "Kliento užpildyta forma automatiškai atsiduria jūsų el. pašte, Excel lentelėje ar CRM — su visais duomenimis, be rankinio perrašinėjimo.",
  },
  {
    title: "Dokumentų apdorojimas",
    description:
      "Sąskaitos, sutartys ar aktai suformuojami automatiškai pagal jūsų šabloną — vietoj pusvalandžio kopijavimo į Word.",
  },
  {
    title: "Atsakymai į dažnus klausimus",
    description:
      "AI asistentas svetainėje atsako į pasikartojančius klientų klausimus apie kainas, terminus ir paslaugas — jūs atsakote tik į rimtas užklausas.",
  },
  {
    title: "El. laiškų rūšiavimas ir suvedimas",
    description:
      "Užklausos iš el. pašto automatiškai surūšiuojamos ir suvedamos į lentelę ar sistemą, kad nė viena nepasimestų.",
  },
];

export default function Automation() {
  return (
    <section className="py-20 md:py-24 bg-[#0f172a]">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="max-w-3xl mb-14">
          <p className="section-label mb-3">Automatizavimas</p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            AI ne dėl mados — dėl sutaupytų valandų
          </h2>
          <p className="mt-4 text-white/70 text-base sm:text-lg">
            Automatizuojame tik tuos darbus, kur skaičiuojasi: jei sprendimas netaupo
            laiko ar pinigų, taip ir pasakome. Keli pavyzdžiai, ką galima padaryti:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {examples.map((example) => (
            <div key={example.title} className="rounded-2xl border border-white/10 bg-white/5 p-7">
              <h3 className="text-lg font-bold text-white mb-2">{example.title}</h3>
              <p className="text-sm text-white/70 leading-relaxed">{example.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
