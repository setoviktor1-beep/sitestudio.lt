export default function Process() {
  const steps = [
    {
      number: "01",
      title: "Pokalbis ir pasiūlymas",
      description:
        "Aptariame jūsų veiklą, tikslus ir biudžetą. Per 1–2 darbo dienas gaunate konkretų pasiūlymą su apimtimi, kaina ir terminu.",
    },
    {
      number: "02",
      title: "Struktūra ir dizainas",
      description:
        "Paruošiame svetainės struktūrą ir dizainą, pritaikytą jūsų klientams. Deriname tol, kol rezultatas jums tinka.",
    },
    {
      number: "03",
      title: "Kūrimas ir turinys",
      description:
        "Sukuriame svetainę, sudedame turinį, sutvarkome greitį, mobilią versiją ir bazinį SEO. Prieš paleidimą viską peržiūrite.",
    },
    {
      number: "04",
      title: "Paleidimas ir priežiūra",
      description:
        "Paleidžiame svetainę su jūsų domenu, apmokome valdyti turinį ir, jei norite, toliau prižiūrime bei tobuliname.",
    },
  ];

  return (
    <section id="procesas" className="py-20 md:py-24 bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="max-w-3xl mb-14">
          <p className="section-label mb-3">Kaip dirbame</p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0f172a] tracking-tight">
            Keturi žingsniai nuo užklausos iki veikiančios svetainės
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step) => (
            <div key={step.number} className="bg-[#f6f8fb] p-7 rounded-2xl relative overflow-hidden card-hover border border-[#0f172a]/5">
              <div className="text-6xl font-black text-[#0f172a]/5 absolute top-4 right-4 select-none" aria-hidden="true">
                {step.number}
              </div>
              <div className="relative">
                <div className="w-10 h-10 rounded-xl bg-[#2456d6] text-white text-sm font-bold flex items-center justify-center mb-4">
                  {step.number}
                </div>
                <h3 className="text-lg font-bold text-[#0f172a] mb-2">{step.title}</h3>
                <p className="text-[#475569] text-sm leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
