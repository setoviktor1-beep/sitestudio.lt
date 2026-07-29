import Link from "next/link";
import HeroCanvas from "./HeroCanvas";

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 md:pt-44 md:pb-32 overflow-hidden hero-gradient">
      {/* Interactive particle canvas */}
      <HeroCanvas />

      {/* Glow orbs */}
      <div className="hero-glow top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-[#2563eb]/25" />
      <div className="hero-glow top-1/4 right-1/4 w-[300px] h-[200px] bg-[#7c3aed]/20" />
      <div className="hero-glow top-1/3 left-1/4 w-[250px] h-[180px] bg-[#ff5a1f]/10" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 rounded-full bg-white/5 backdrop-blur border border-white/10 px-4 py-1.5 text-xs md:text-sm font-medium text-blue-300 mb-8">
          <span className="flex h-2 w-2 rounded-full bg-blue-400 animate-pulse" />
          <span>Nuo idėjos iki veikiančios svetainės — greitai ir aiškiai</span>
        </div>

        {/* Title */}
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white max-w-4xl mx-auto leading-[1.1]" style={{ fontFamily: '"Plus Jakarta Sans", Inter, sans-serif' }}>
          Svetainės ir sistemos,
          <br />
          <span className="gradient-text">kurie dirba už jus</span>
        </h1>

        {/* Subtitle */}
        <p className="mt-6 text-lg md:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
          Kuriame ultra-greitus Next.js tinklapius, diegiame Directus CMS ir užtikriname saugų VPS talpinimą su automatiniu SSL bei 24/7 monitoringu.
        </p>

        {/* CTA Buttons */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="#kontaktai"
            className="w-full sm:w-auto rounded-full bg-white text-[#0b0b14] px-8 py-4 text-base font-semibold shadow-xl hover:scale-[1.02] transition-all"
          >
            Gauti pasiūlymą
          </Link>
          <Link
            href="#paslaugos"
            className="w-full sm:w-auto rounded-full bg-white/5 backdrop-blur border border-white/15 px-8 py-4 text-base font-semibold text-white hover:bg-white/10 transition-all"
          >
            Mūsų paslaugos →
          </Link>
        </div>

        {/* Trust line */}
        <p className="mt-6 text-sm text-slate-400">
          Nemokama konsultacija · be įsipareigojimų · atsakome per 24 val.
        </p>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
          {[
            { value: "nuo 290€", label: "Svetainė su SEO" },
            { value: "24 val.", label: "Atsakymas į užklausą" },
            { value: "99.9%", label: "Uptime garantija" },
            { value: "<100ms", label: "Serverio atsakas" },
          ].map((stat, i) => (
            <div key={i} className="bg-white/5 backdrop-blur border border-white/10 p-5 rounded-2xl text-left">
              <div className="text-2xl md:text-3xl font-extrabold text-white">{stat.value}</div>
              <div className="text-xs text-slate-400 mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
