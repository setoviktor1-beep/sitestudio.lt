import Link from "next/link";
import type { Dict, Locale } from "@/lib/i18n";

// Dedicated LT landing pages per service card (index-aligned with dict.services.items).
const serviceCardLinks = [
  { href: "/svetainiu-kurimas", label: "Plačiau apie svetainių kūrimą" },
  { href: "/el-parduotuviu-kurimas", label: "Plačiau apie el. parduotuvių kūrimą" },
  { href: "/svetainiu-kurimas#turinio-valdymas", label: "Turinio valdymas svetainėse" },
  { href: "/svetainiu-atnaujinimas", label: "Plačiau apie svetainių atnaujinimą" },
  { href: "/interneto-sistemu-kurimas", label: "Plačiau apie interneto sistemas" },
  { href: "/ai-automatizavimas", label: "Plačiau apie AI automatizavimą" },
];

const icons = [
  // globe
  <path key="globe" strokeLinecap="round" strokeLinejoin="round" d="M12 21a9 9 0 100-18 9 9 0 000 18zm0 0c2.5-2.4 3.75-5.4 3.75-9S14.5 5.4 12 3m0 18c-2.5-2.4-3.75-5.4-3.75-9S9.5 5.4 12 3M3.6 9h16.8M3.6 15h16.8" />,
  // cart
  <path key="cart" strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.9l.4 1.5m0 0L6.75 13.5h10.5l2.25-8.25H4.55zm2.2 14.25a1.5 1.5 0 103 0m6 0a1.5 1.5 0 103 0" />,
  // edit
  <path key="edit" strokeLinecap="round" strokeLinejoin="round" d="M16.86 4.49l1.69-1.69a1.88 1.88 0 112.65 2.65L7.5 19.15l-4.5 1.35 1.35-4.5L16.86 4.49zm0 0L19.5 7.13" />,
  // refresh
  <path key="refresh" strokeLinecap="round" strokeLinejoin="round" d="M16.02 9.35h4.99V4.36M4.98 19.64v-4.99h4.99m6.72-6.72a7.5 7.5 0 00-12.55 3.42m.84 3.3a7.5 7.5 0 0012.55 3.42" />,
  // cog
  <path key="cog" strokeLinecap="round" strokeLinejoin="round" d="M10.34 3.94c.09-.54.56-.94 1.11-.94h1.1c.55 0 1.02.4 1.11.94l.15.89c.06.37.31.68.64.85.34.17.72.19 1.06.04l.85-.36c.5-.21 1.09-.03 1.37.44l.55.95c.28.48.16 1.08-.26 1.42l-.7.55c-.29.23-.44.59-.44.96s.15.73.44.96l.7.55c.42.34.54.94.26 1.42l-.55.95a1.13 1.13 0 01-1.37.44l-.85-.36a1.13 1.13 0 00-1.06.04c-.33.17-.58.48-.64.85l-.15.89c-.09.54-.56.94-1.11.94h-1.1c-.55 0-1.02-.4-1.11-.94l-.15-.89a1.13 1.13 0 00-.64-.85 1.13 1.13 0 00-1.06-.04l-.85.36c-.5.21-1.09.03-1.37-.44l-.55-.95a1.13 1.13 0 01.26-1.42l.7-.55c.29-.23.44-.59.44-.96s-.15-.73-.44-.96l-.7-.55a1.13 1.13 0 01-.26-1.42l.55-.95c.28-.47.87-.65 1.37-.44l.85.36c.34.15.72.13 1.06-.04.33-.17.58-.48.64-.85l.15-.89zM15 12a3 3 0 11-6 0 3 3 0 016 0z" />,
  // spark
  <path key="spark" strokeLinecap="round" strokeLinejoin="round" d="M9.81 15.9L9 20.25l6.75-8.25h-4.56l.81-4.35L4.5 15.9h5.31zM15.75 3.75l.47 1.28 1.28.47-1.28.47-.47 1.28-.47-1.28-1.28-.47 1.28-.47.47-1.28zM19.5 9l.35.96.96.35-.96.35-.35.96-.35-.96-.96-.35.96-.35L19.5 9z" />,
];

export default function Services({ dict, locale = "lt" }: { dict: Dict; locale?: Locale }) {
  return (
    <section id="paslaugos" className="py-20 md:py-24 bg-[#f6f8fb]">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="max-w-3xl mb-14">
          <p className="section-label mb-3">{dict.services.eyebrow}</p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0f172a] tracking-tight">
            {dict.services.title}
          </h2>
          <p className="mt-4 text-[#475569] text-base sm:text-lg">{dict.services.sub}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {dict.services.items.map((service, idx) => (
            <div key={service.title} className="bg-white p-7 rounded-2xl border border-[#0f172a]/10 card-hover shadow-soft flex flex-col">
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-[#e8eefc] text-[#2456d6]">
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.6} stroke="currentColor" aria-hidden="true">
                  {icons[idx]}
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#0f172a] mb-2">{service.title}</h3>
              <p className="text-[#475569] text-sm leading-relaxed mb-5">{service.description}</p>
              <ul className="mt-auto space-y-2 border-t border-[#0f172a]/5 pt-5">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-start text-sm text-[#334155]">
                    <svg className="mr-2.5 mt-0.5 h-4 w-4 shrink-0 text-[#2456d6]" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                      <path fillRule="evenodd" d="M16.7 5.3a1 1 0 010 1.4l-8 8a1 1 0 01-1.4 0l-4-4a1 1 0 111.4-1.4L8 12.6l7.3-7.3a1 1 0 011.4 0z" clipRule="evenodd" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
              {locale === "lt" && serviceCardLinks[idx] && (
                <Link
                  href={serviceCardLinks[idx].href}
                  className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-[#2456d6] hover:underline min-h-[44px] py-2.5"
                >
                  {serviceCardLinks[idx].label}
                  <span aria-hidden="true">→</span>
                </Link>
              )}
            </div>
          ))}
        </div>

        <p className="mt-10 text-sm text-[#64748b] max-w-3xl">{dict.services.hostingNote}</p>
      </div>
    </section>
  );
}
