import Image from "next/image";
import type { Dict } from "@/lib/i18n";

const workUrls = [
  { url: "https://leonamai.lt", domain: "leonamai.lt", image: "/works/leonamai.png" },
  { url: "https://situacija.eu", domain: "situacija.eu", image: "/works/situacija.png" },
  { url: "https://mini-social.online", domain: "mini-social.online", image: "/works/mini-social.png" },
  {
    url: "https://xn--teisinatrama-jvb.lt",
    domain: "teisinėatrama.lt",
    image: "/works/teisine-atrama.png",
  },
];

export default function Works({ dict }: { dict: Dict }) {
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
          {dict.works.items.map((work, idx) => (
            <a
              key={workUrls[idx].url}
              href={workUrls[idx].url}
              target="_blank"
              rel="noopener noreferrer"
              className="group block browser-frame card-hover"
            >
              <div className="browser-frame-bar">
                <span className="browser-dot" />
                <span className="browser-dot" />
                <span className="browser-dot" />
                <span className="ml-3 flex-1 rounded-md bg-white border border-black/5 px-3 py-1 text-[11px] text-[#64748b]">
                  {workUrls[idx].domain}
                </span>
                <svg className="h-4 w-4 text-[#94a3b8] group-hover:text-[#2456d6] transition-colors" fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                </svg>
              </div>
              <div className="relative aspect-[16/10] overflow-hidden border-b border-black/5 bg-[#f6f8fb]">
                <Image
                  src={workUrls[idx].image}
                  alt={work.title}
                  fill
                  sizes="(min-width: 768px) 50vw, 100vw"
                  className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
                />
              </div>
              <div className="p-7">
                <h3 className="text-xl font-bold text-[#0f172a] group-hover:text-[#2456d6] transition-colors">
                  {work.title}
                </h3>
                <p className="mt-3 text-sm text-[#475569] leading-relaxed">{work.description}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {work.tags.map((tag) => (
                    <span key={tag} className="rounded-full bg-[#e8eefc] px-3 py-1 text-xs font-medium text-[#2456d6]">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
