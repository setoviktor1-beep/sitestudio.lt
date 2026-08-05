import Image from "next/image";
import Link from "next/link";
import type { Dict, Locale } from "@/lib/i18n";

type WorkMeta = {
  /** Live site URL; null while the project is not publicly reachable. */
  url: string | null;
  domain: string;
  image: string;
  /** Dedicated Lithuanian case-study page. */
  caseStudy: string | null;
  status: "client" | "own" | "development";
};

// Index-aligned with dict.works.items.
const workMeta: WorkMeta[] = [
  {
    url: "https://leonamai.lt",
    domain: "leonamai.lt",
    image: "/works/leonamai.png",
    caseStudy: "/darbai/leonamai",
    status: "client",
  },
  {
    url: "https://situacija.eu",
    domain: "situacija.eu",
    image: "/works/situacija.png",
    caseStudy: "/darbai/situacija",
    status: "client",
  },
  {
    url: "https://mini-social.online",
    domain: "mini-social.online",
    image: "/works/mini-social.png",
    caseStudy: "/darbai/mini-social",
    status: "own",
  },
  {
    // teisinėatrama.lt is not reachable yet — no outbound link until it works.
    url: null,
    domain: "teisinėatrama.lt",
    image: "/works/teisine-atrama.png",
    caseStudy: null,
    status: "development",
  },
];

const statusLabels: Record<WorkMeta["status"], string> = {
  client: "Kliento projektas",
  own: "SiteStudio produktas",
  development: "Kuriama",
};

export default function Works({
  dict,
  locale = "lt",
  showAllLink = false,
}: {
  dict: Dict;
  locale?: Locale;
  showAllLink?: boolean;
}) {
  const isLt = locale === "lt";

  return (
    <section id="darbai" className="py-20 md:py-24 bg-[#f6f8fb]">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="max-w-3xl mb-14">
          <p className="section-label mb-3">{dict.works.eyebrow}</p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0f172a] tracking-tight">
            {dict.works.title}
          </h2>
          <p className="mt-4 text-[#475569] text-base sm:text-lg">{dict.works.sub}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {dict.works.items.map((work, idx) => {
            const meta = workMeta[idx];
            const caseHref = isLt ? meta.caseStudy : null;
            return (
              <article key={meta.domain} className="browser-frame card-hover flex flex-col">
                <div className="browser-frame-bar">
                  <span className="browser-dot" />
                  <span className="browser-dot" />
                  <span className="browser-dot" />
                  <span className="ml-3 flex-1 rounded-md bg-white border border-black/5 px-3 py-1 text-[11px] text-[#64748b]">
                    {meta.domain}
                  </span>
                  {isLt && (
                    <span
                      className={`rounded-full px-2.5 py-0.5 text-[10px] font-semibold ${
                        meta.status === "development"
                          ? "bg-amber-100 text-amber-800"
                          : "bg-[#e8eefc] text-[#2456d6]"
                      }`}
                    >
                      {statusLabels[meta.status]}
                    </span>
                  )}
                </div>
                <div className="relative aspect-[16/10] overflow-hidden border-b border-black/5 bg-[#f6f8fb]">
                  <Image
                    src={meta.image}
                    alt={work.title}
                    fill
                    sizes="(min-width: 768px) 50vw, 100vw"
                    className="object-cover object-top"
                  />
                </div>
                <div className="p-7 flex flex-col flex-1">
                  <h3 className="text-xl font-bold text-[#0f172a]">
                    {caseHref ? (
                      <Link href={caseHref} className="hover:text-[#2456d6] transition-colors">
                        {work.title}
                      </Link>
                    ) : (
                      work.title
                    )}
                  </h3>
                  <p className="mt-3 text-sm text-[#475569] leading-relaxed">{work.description}</p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {work.tags.map((tag) => (
                      <span key={tag} className="rounded-full bg-[#e8eefc] px-3 py-1 text-xs font-medium text-[#2456d6]">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2 border-t border-black/5 pt-4 text-sm font-semibold">
                    {caseHref && (
                      <Link href={caseHref} className="text-[#2456d6] hover:underline">
                        Skaityti projekto istoriją <span aria-hidden="true">→</span>
                      </Link>
                    )}
                    {meta.url && (
                      <a
                        href={meta.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-[#64748b] hover:text-[#2456d6] transition-colors"
                      >
                        {meta.domain}
                        <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor" aria-hidden="true">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                        </svg>
                      </a>
                    )}
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {isLt && showAllLink && (
          <div className="mt-10">
            <Link href="/darbai" className="text-sm font-semibold text-[#2456d6] hover:underline">
              Visi atlikti svetainių kūrimo darbai <span aria-hidden="true">→</span>
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
