import Link from "next/link";

/**
 * Stylized browser mockup — a stand-in for real screenshots that keeps the
 * hero honest (no stock photos) while showing what SiteStudio builds.
 */
function SiteMockup() {
  return (
    <div className="browser-frame" aria-hidden="true">
      <div className="browser-frame-bar">
        <span className="browser-dot" />
        <span className="browser-dot" />
        <span className="browser-dot" />
        <span className="ml-3 flex-1 rounded-md bg-white border border-black/5 px-3 py-1 text-[11px] text-[#64748b]">
          jusuverslas.lt
        </span>
      </div>
      <div className="p-5 space-y-4">
        <div className="flex items-center justify-between">
          <div className="h-3 w-20 rounded bg-[#0f172a]/80" />
          <div className="flex gap-2">
            <div className="h-2.5 w-10 rounded bg-[#e2e8f0]" />
            <div className="h-2.5 w-10 rounded bg-[#e2e8f0]" />
            <div className="h-2.5 w-14 rounded bg-[#2456d6]" />
          </div>
        </div>
        <div className="space-y-2 pt-2">
          <div className="h-4 w-3/4 rounded bg-[#cbd5e1]" />
          <div className="h-4 w-1/2 rounded bg-[#cbd5e1]" />
          <div className="h-2.5 w-2/3 rounded bg-[#e2e8f0]" />
        </div>
        <div className="flex gap-2 pt-1">
          <div className="h-8 w-28 rounded-lg bg-[#2456d6]" />
          <div className="h-8 w-24 rounded-lg border border-[#e2e8f0] bg-white" />
        </div>
        <div className="grid grid-cols-3 gap-3 pt-2">
          {[0, 1, 2].map((i) => (
            <div key={i} className="rounded-lg border border-[#eef2f7] bg-[#f6f8fb] p-3 space-y-2">
              <div className="h-6 w-6 rounded-md bg-[#e8eefc]" />
              <div className="h-2 w-full rounded bg-[#e2e8f0]" />
              <div className="h-2 w-2/3 rounded bg-[#e2e8f0]" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Hero() {
  return (
    <section className="hero-surface relative pt-32 pb-16 md:pt-44 md:pb-24 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text */}
          <div>
            <p className="section-label mb-4">Svetainių ir interneto sistemų studija</p>
            <h1 className="text-4xl sm:text-5xl lg:text-[3.4rem] font-extrabold tracking-tight text-[#0f172a] leading-[1.12]">
              Svetainė, kuri padeda parduoti.
              <br />
              <span className="text-[#2456d6]">Sistemos, kurios taupo laiką.</span>
            </h1>
            <p className="mt-6 text-lg text-[#475569] max-w-xl leading-relaxed">
              Kuriame svetaines, el. parduotuves ir individualias interneto sistemas
              mažam ir vidutiniam Lietuvos verslui. Aiški apimtis, aiški kaina ir
              terminas — dar prieš pradedant darbus.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <Link href="/#kontaktai" className="btn-primary">
                Gauti pasiūlymą
              </Link>
              <Link href="/#darbai" className="btn-ghost">
                Žiūrėti darbus
              </Link>
            </div>

            <ul className="mt-8 space-y-2 text-sm text-[#475569]">
              {[
                "Bendraujate tiesiogiai su projekto vykdytoju",
                "Kaina ir terminas sutariami raštu prieš pradedant",
                "Atsakome per vieną darbo dieną",
              ].map((item) => (
                <li key={item} className="flex items-center gap-2.5">
                  <svg className="h-4 w-4 shrink-0 text-[#2456d6]" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fillRule="evenodd" d="M16.7 5.3a1 1 0 010 1.4l-8 8a1 1 0 01-1.4 0l-4-4a1 1 0 111.4-1.4L8 12.6l7.3-7.3a1 1 0 011.4 0z" clipRule="evenodd" />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Visual */}
          <div className="relative hidden sm:block">
            <SiteMockup />
          </div>
        </div>
      </div>
    </section>
  );
}
