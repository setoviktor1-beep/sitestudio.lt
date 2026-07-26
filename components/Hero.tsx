import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Background Orbs & Effects */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-gradient-to-tr from-indigo-600/30 to-purple-600/20 blur-[120px] rounded-full pointer-events-none -z-10" />
      <div className="absolute top-1/3 left-1/4 w-[300px] h-[200px] bg-blue-500/20 blur-[100px] rounded-full pointer-events-none -z-10" />

      <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 rounded-full glass-panel px-4 py-1.5 text-xs md:text-sm font-medium text-indigo-300 border border-indigo-500/30 mb-8 shadow-sm">
          <span className="flex h-2 w-2 rounded-full bg-indigo-400 animate-pulse" />
          <span>Šiuolaikinė Web Architektūra & Cloud Hostingas</span>
        </div>

        {/* Title */}
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white max-w-4xl mx-auto leading-[1.15]">
          Profesionalus Web Puslapių <span className="gradient-text">Kūrimas, Priežiūra Ir VPS</span> Talpinimas
        </h1>

        {/* Subtitle */}
        <p className="mt-6 text-lg md:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed font-normal">
          SiteStudio kuria ultra-greitus Next.js tinklapius, diegia patogų turinio valdymą (Directus CMS) bei užtikrina saugų, automatiškai prižiūrimą cloud VPS talpinimą.
        </p>

        {/* CTA Buttons */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="#kontaktai"
            className="w-full sm:w-auto rounded-xl bg-gradient-to-r from-indigo-500 via-purple-500 to-indigo-600 px-8 py-4 text-base font-semibold text-white shadow-xl shadow-indigo-500/30 hover:shadow-indigo-500/50 hover:scale-[1.02] transition-all"
          >
            Gauti Pasiūlymą
          </Link>
          <Link
            href="#paslaugos"
            className="w-full sm:w-auto rounded-xl glass-panel px-8 py-4 text-base font-semibold text-slate-200 hover:text-white hover:bg-slate-800/80 transition-all border border-slate-700/80"
          >
            Mūsų Paslaugos
          </Link>
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto border-t border-slate-800/80 pt-10">
          <div className="glass-panel p-4 rounded-2xl">
            <div className="text-3xl font-extrabold gradient-text">99.9%</div>
            <div className="text-xs text-slate-400 mt-1">Uptime Garantija</div>
          </div>
          <div className="glass-panel p-4 rounded-2xl">
            <div className="text-3xl font-extrabold text-indigo-400">&lt;100ms</div>
            <div className="text-xs text-slate-400 mt-1">Serverio Atsakas</div>
          </div>
          <div className="glass-panel p-4 rounded-2xl">
            <div className="text-3xl font-extrabold text-purple-400">100%</div>
            <div className="text-xs text-slate-400 mt-1">SSL & Saugumas</div>
          </div>
          <div className="glass-panel p-4 rounded-2xl">
            <div className="text-3xl font-extrabold text-pink-400">24/7</div>
            <div className="text-xs text-slate-400 mt-1">Monitoringas</div>
          </div>
        </div>
      </div>
    </section>
  );
}
