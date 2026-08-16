import Link from "next/link";
import Image from "next/image";
import type { Dict, Locale } from "@/lib/i18n";
import { homePath } from "@/lib/i18n";

export default function Hero({ dict, locale = "lt" }: { dict: Dict; locale?: Locale }) {
  const base = homePath(locale);
  const anchor = (hash: string) => (base === "/" ? `/#${hash}` : `${base}#${hash}`);

  return (
    <section className="hero-surface relative pt-32 pb-16 md:pt-44 md:pb-24 overflow-hidden">
      {/* Background decoration */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 right-[-10%] h-[420px] w-[420px] rounded-full bg-[#2456d6]/10 blur-3xl" />
        <div className="absolute top-1/3 left-[-8%] h-[320px] w-[320px] rounded-full bg-[#7c9ef0]/15 blur-3xl" />
        <div className="absolute bottom-[-20%] right-[20%] h-[280px] w-[280px] rounded-full bg-[#5eead4]/10 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text */}
          <div>
            <p className="section-label mb-4 hero-fade-up">{dict.hero.eyebrow}</p>
            <h1 className="hero-fade-up hero-delay-1 text-4xl sm:text-5xl lg:text-[3.4rem] font-extrabold tracking-tight text-[#0f172a] leading-[1.12]">
              {dict.hero.h1a}
              <br />
              <span className="text-[#2456d6]">{dict.hero.h1b}</span>
            </h1>
            <p className="hero-fade-up hero-delay-2 mt-6 text-lg text-[#475569] max-w-xl leading-relaxed">{dict.hero.sub}</p>

            <div className="hero-fade-up hero-delay-3 mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <Link href={locale === "lt" ? "/kontaktai" : anchor("kontaktai")} className="btn-primary">
                {dict.hero.ctaPrimary}
              </Link>
              <Link href={locale === "lt" ? "/darbai" : anchor("darbai")} className="btn-ghost">
                {dict.hero.ctaSecondary}
              </Link>
            </div>

            <ul className="hero-fade-up hero-delay-4 mt-8 space-y-2 text-sm text-[#475569]">
              {dict.hero.bullets.map((item) => (
                <li key={item} className="flex items-center gap-2.5">
                  <svg className="h-4 w-4 shrink-0 text-[#2456d6]" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fillRule="evenodd" d="M16.7 5.3a1 1 0 010 1.4l-8 8a1 1 0 01-1.4 0l-4-4a1 1 0 111.4-1.4L8 12.6l7.3-7.3a1 1 0 011.4 0z" clipRule="evenodd" />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Visual — real client work */}
          <div className="relative hidden sm:block lg:pl-4 lg:scale-[1.12] lg:origin-left">
            <div className="hero-fade-up hero-delay-2">
              <div className="browser-frame">
                <div className="browser-frame-bar">
                  <span className="browser-dot" />
                  <span className="browser-dot" />
                  <span className="browser-dot" />
                  <span className="ml-3 flex-1 rounded-md bg-white border border-black/5 px-3 py-1 text-[11px] text-[#64748b]">
                    leonamai.lt
                  </span>
                </div>
                <div className="relative aspect-[16/10]">
                  <Image
                    src="/works/leonamai.png"
                    alt="leonamai.lt svetainė"
                    fill
                    priority
                    sizes="(min-width: 1024px) 50vw, 90vw"
                    className="object-cover object-top"
                  />
                </div>
              </div>
            </div>

            <div className="hero-fade-up hero-delay-4 hero-float absolute -bottom-12 -left-8 lg:-left-14 w-[54%]">
              <div className="browser-frame !shadow-[0_28px_60px_-20px_rgba(15,23,42,0.35)]">
                <div className="browser-frame-bar">
                  <span className="browser-dot" />
                  <span className="browser-dot" />
                  <span className="browser-dot" />
                  <span className="ml-3 flex-1 rounded-md bg-white border border-black/5 px-3 py-1 text-[10px] text-[#64748b]">
                    mini-social.online
                  </span>
                </div>
                <div className="relative aspect-[16/10]">
                  <Image
                    src="/works/mini-social.png"
                    alt="mini-social.online aplikacija"
                    fill
                    sizes="(min-width: 1024px) 25vw, 45vw"
                    className="object-cover object-top"
                  />
                </div>
              </div>
            </div>

            <div className="hero-fade-up hero-delay-5 absolute -top-6 -right-4 lg:-right-10 flex items-center gap-2 rounded-full bg-white px-4 py-2 text-xs font-semibold text-[#0f172a] shadow-lg ring-1 ring-black/5">
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500" />
              </span>
              {dict.hero.badge}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
