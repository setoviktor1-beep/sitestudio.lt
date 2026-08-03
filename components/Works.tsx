const works = [
  {
    url: "https://leonamai.lt",
    domain: "leonamai.lt",
    title: "Leonamai — vonios remonto meistras",
    description:
      "Svetainė vonios remonto paslaugoms Lentvaryje, Vilniuje ir Trakuose: darbų galerija, paslaugų aprašymai ir užklausų forma, pritaikyta vietinei Google paieškai.",
    tags: ["Paslaugų svetainė", "Vietinis SEO", "Užklausų forma"],
  },
  {
    url: "https://situacija.eu",
    domain: "situacija.eu",
    title: "Situacija — plytelių klojimo meistras",
    description:
      "Svetainė plytelių klojimo meistrui Pabradėje, Švenčionyse ir Vilniuje: atliktų darbų pristatymas ir turinio valdymo sistema, leidžianti pačiam atnaujinti darbų nuotraukas.",
    tags: ["Paslaugų svetainė", "Turinio valdymas", "Darbų galerija"],
  },
];

export default function Works() {
  return (
    <section id="darbai" className="py-20 md:py-24 bg-[#f6f8fb]">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="max-w-3xl mb-14">
          <p className="section-label mb-3">Darbai</p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0f172a] tracking-tight">
            Veikiančios svetainės, kurias galite atsidaryti dabar
          </h2>
          <p className="mt-4 text-[#475569] text-base sm:text-lg">
            Rodome tik realius, gyvus projektus — jokių maketų „iš stalčiaus“.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {works.map((work) => (
            <a
              key={work.url}
              href={work.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group block browser-frame card-hover"
            >
              <div className="browser-frame-bar">
                <span className="browser-dot" />
                <span className="browser-dot" />
                <span className="browser-dot" />
                <span className="ml-3 flex-1 rounded-md bg-white border border-black/5 px-3 py-1 text-[11px] text-[#64748b]">
                  {work.domain}
                </span>
                <svg className="h-4 w-4 text-[#94a3b8] group-hover:text-[#2456d6] transition-colors" fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                </svg>
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
