import type { Dict } from "@/lib/i18n";

export default function Process({ dict }: { dict: Dict }) {
  return (
    <section id="procesas" className="py-20 md:py-24 bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="max-w-3xl mb-14">
          <p className="section-label mb-3">{dict.process.eyebrow}</p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0f172a] tracking-tight">
            {dict.process.title}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {dict.process.steps.map((step, idx) => {
            const number = String(idx + 1).padStart(2, "0");
            return (
              <div key={number} className="bg-[#f6f8fb] p-7 rounded-2xl relative overflow-hidden card-hover border border-[#0f172a]/5">
                <div className="text-6xl font-black text-[#0f172a]/5 absolute top-4 right-4 select-none" aria-hidden="true">
                  {number}
                </div>
                <div className="relative">
                  <div className="w-10 h-10 rounded-xl bg-[#2456d6] text-white text-sm font-bold flex items-center justify-center mb-4">
                    {number}
                  </div>
                  <h3 className="text-lg font-bold text-[#0f172a] mb-2">{step.title}</h3>
                  <p className="text-[#475569] text-sm leading-relaxed">{step.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
