import type { Dict } from "@/lib/i18n";

export default function Automation({ dict }: { dict: Dict }) {
  return (
    <section className="py-20 md:py-24 bg-[#0f172a]">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="max-w-3xl mb-14">
          <p className="section-label mb-3">{dict.automation.eyebrow}</p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            {dict.automation.title}
          </h2>
          <p className="mt-4 text-white/70 text-base sm:text-lg">{dict.automation.sub}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {dict.automation.examples.map((example) => (
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
