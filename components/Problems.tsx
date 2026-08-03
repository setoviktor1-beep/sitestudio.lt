import type { Dict } from "@/lib/i18n";

export default function Problems({ dict }: { dict: Dict }) {
  return (
    <section className="py-20 md:py-24 bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="max-w-3xl mb-14">
          <p className="section-label mb-3">{dict.problems.eyebrow}</p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0f172a] tracking-tight">
            {dict.problems.title}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {dict.problems.items.map((item) => (
            <div key={item.problem} className="rounded-2xl border border-[#0f172a]/10 bg-[#f6f8fb] p-7 card-hover">
              <h3 className="text-lg font-bold text-[#0f172a] leading-snug">„{item.problem}“</h3>
              <div className="mt-4 h-px bg-[#0f172a]/8" />
              <p className="mt-4 text-sm text-[#475569] leading-relaxed">{item.solution}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
