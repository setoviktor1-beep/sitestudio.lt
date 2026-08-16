import Link from "next/link";
import type { Dict, Locale } from "@/lib/i18n";
import { homePath } from "@/lib/i18n";

export default function Pricing({ dict, locale = "lt" }: { dict: Dict; locale?: Locale }) {
  const base = homePath(locale);
  const contactHref = base === "/" ? "/#kontaktai" : `${base}#kontaktai`;

  return (
    <section id="kainos" className="py-20 md:py-24 bg-[#f6f8fb]">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="max-w-3xl mb-14">
          <p className="section-label mb-3">{dict.pricing.eyebrow}</p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0f172a] tracking-tight">
            {dict.pricing.title}
          </h2>
          <p className="mt-4 text-[#475569] text-base">{dict.pricing.sub}</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch">
          {dict.pricing.plans.map((plan, idx) => {
            const isHighlighted = idx === 1;
            return (
              <div
                key={plan.name}
                className={`bg-white p-8 rounded-2xl border relative flex flex-col transition-transform ${
                  isHighlighted
                    ? "border-2 pricing-highlight z-10"
                    : "border-[#0f172a]/10 shadow-soft"
                }`}
              >
                {isHighlighted && (
                  <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 rounded-full bg-[#2456d6] px-4 py-1.5 text-xs font-semibold text-white shadow-soft">
                    Populiariausias pasirinkimas
                  </span>
                )}
                <div className="flex-1">
                  <div className="text-lg font-bold text-[#0f172a]">{plan.name}</div>
                  <div className="text-3xl font-extrabold text-[#0f172a] mt-2 mb-3">{plan.price}</div>
                  <p className="text-[#475569] text-sm mb-6">{plan.audience}</p>

                  <ul className="space-y-2.5 border-t border-[#0f172a]/5 pt-5 mb-5">
                    {plan.includes.map((feat) => (
                      <li key={feat} className="flex items-start text-sm text-[#334155]">
                        <svg className="mr-2.5 mt-0.5 h-4 w-4 shrink-0 text-[#2456d6]" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                          <path fillRule="evenodd" d="M16.7 5.3a1 1 0 010 1.4l-8 8a1 1 0 01-1.4 0l-4-4a1 1 0 111.4-1.4L8 12.6l7.3-7.3a1 1 0 011.4 0z" clipRule="evenodd" />
                        </svg>
                        {feat}
                      </li>
                    ))}
                  </ul>

                  <p className="text-xs text-[#64748b] leading-relaxed mb-2">{plan.excludes}</p>
                  <p className="text-xs font-semibold text-[#334155] mb-1">{plan.term}</p>
                  <p className="text-xs font-semibold text-[#2456d6] mb-6">{plan.hosting}</p>
                </div>

                <Link
                  href={contactHref}
                  className={`w-full text-center py-3.5 rounded-xl font-semibold text-sm transition-colors ${
                    isHighlighted
                      ? "bg-[#2456d6] text-white hover:bg-[#1a41ab]"
                      : "bg-[#0f172a] text-white hover:bg-[#2456d6]"
                  }`}
                >
                  {plan.cta}
                </Link>
              </div>
            );
          })}
        </div>

        <p className="mt-8 text-sm text-[#64748b] max-w-3xl">{dict.pricing.hostingNote}</p>
      </div>
    </section>
  );
}
