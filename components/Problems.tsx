import type { Dict } from "@/lib/i18n";

const icons = [
  // outdated monitor
  <path key="monitor" strokeLinecap="round" strokeLinejoin="round" d="M3.75 5.25h16.5v10.5H3.75zM8.25 20.25h7.5M12 15.75v4.5M8.25 9l2.25 2.25L15 7.5" />,
  // inbox / leads
  <path key="inbox" strokeLinecap="round" strokeLinejoin="round" d="M3 12h4.5l1.5 3h6l1.5-3H21M3 12l1.6-6.4A1.5 1.5 0 016.05 4.5h11.9a1.5 1.5 0 011.45 1.1L21 12m-18 0v6a1.5 1.5 0 001.5 1.5h15A1.5 1.5 0 0021 18v-6" />,
  // repeat / automation
  <path key="repeat" strokeLinecap="round" strokeLinejoin="round" d="M16.02 9.35h4.99V4.36M4.98 19.64v-4.99h4.99m6.72-6.72a7.5 7.5 0 00-12.55 3.42m.84 3.3a7.5 7.5 0 0012.55 3.42" />,
];

export default function Problems({ dict }: { dict: Dict }) {
  return (
    <section className="relative py-20 md:py-24 bg-white bg-dot-grid">
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="max-w-3xl mb-14">
          <p className="section-label mb-3">{dict.problems.eyebrow}</p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0f172a] tracking-tight">
            {dict.problems.title}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {dict.problems.items.map((item, idx) => (
            <div key={item.problem} className="rounded-2xl border border-[#0f172a]/10 bg-[#f6f8fb] p-7 card-hover">
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-white text-[#2456d6] shadow-soft">
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.6} stroke="currentColor" aria-hidden="true">
                  {icons[idx]}
                </svg>
              </div>
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
