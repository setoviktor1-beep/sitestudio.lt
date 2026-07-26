import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function NaudojimoSalygos() {
  return (
    <div className="min-h-screen bg-[#0b0f19] text-slate-100">
      <Navbar />
      <main className="pt-36 pb-20 max-w-4xl mx-auto px-6 lg:px-8">
        <div className="glass-panel p-8 sm:p-12 rounded-3xl border border-slate-800">
          <Link href="/" className="text-xs font-semibold text-indigo-400 hover:underline mb-6 inline-block">
            ← Grįžti į pagrindinį
          </Link>

          <h1 className="text-3xl sm:text-5xl font-extrabold text-white mb-6">
            Naudojimo <span className="gradient-text">Sąlygos</span>
          </h1>

          <div className="prose prose-invert prose-slate max-w-none text-sm leading-relaxed space-y-6 text-slate-300">
            <p>
              Sveiki atvykę į **SiteStudio.lt**. Naudodamiesi mūsų paslaugomis, jūs sutinkate su šiomis Naudojimo sąlygomis.
            </p>

            <h2 className="text-lg font-bold text-white mt-6 mb-2">1. Paslaugų Teikimas</h2>
            <p>
              SiteStudio teikia web svetainių kūrimo, administravimo bei VPS talpinimo paslaugas pagal su klientu suderintą sąlygų aprašą ir pasirinktą paslaugų planą.
            </p>

            <h2 className="text-lg font-bold text-white mt-6 mb-2">2. Intelektinė Nuosavybė</h2>
            <p>
              Sukurta svetainė ir jos turinys, atlikus pilną atsiskaitymą, tampa kliento nuosavybe, išskyrus licencijuojamus atvirojo kodo komponentus bei sisteminius kodo modulius.
            </p>

            <h2 className="text-lg font-bold text-white mt-6 mb-2">3. Atsakomybė</h2>
            <p>
              SiteStudio įsipareigoja užtikrinti aukščiausią paslaugų kokybę, 99.9% serveryje veikiančių sistemų pasiekiamumą bei reguliarų duomenų kopijavimą.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
