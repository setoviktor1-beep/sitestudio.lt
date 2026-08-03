const items = [
  {
    problem: "Svetainė pasenusi arba jos apskritai nėra",
    solution:
      "Sukuriame šiuolaikišką svetainę, kuri telefone ir kompiuteryje atrodo profesionaliai ir kelia pasitikėjimą dar prieš pirmą skambutį.",
  },
  {
    problem: "Iš svetainės neateina užklausos",
    solution:
      "Struktūrą, tekstus ir formas dėliojame taip, kad lankytojas suprastų, ką siūlote, ir turėtų aiškų kelią susisiekti.",
  },
  {
    problem: "Pasikartojantys darbai ryja laiką",
    solution:
      "Užklausų registravimą, dokumentus ir duomenų suvedimą automatizuojame — sistema dirba, o jūs užsiimate klientais.",
  },
];

export default function Problems() {
  return (
    <section className="py-20 md:py-24 bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="max-w-3xl mb-14">
          <p className="section-label mb-3">Kodėl verslai kreipiasi</p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0f172a] tracking-tight">
            Pažįstamos situacijos — ir kaip jas sprendžiame
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {items.map((item) => (
            <div key={item.problem} className="rounded-2xl border border-[#0f172a]/10 bg-[#f6f8fb] p-7 card-hover">
              <h3 className="text-lg font-bold text-[#0f172a] leading-snug">
                „{item.problem}“
              </h3>
              <div className="mt-4 h-px bg-[#0f172a]/8" />
              <p className="mt-4 text-sm text-[#475569] leading-relaxed">{item.solution}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
