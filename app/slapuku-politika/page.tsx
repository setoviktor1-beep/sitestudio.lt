import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function SlapukuPolitika() {
  return (
    <div className="min-h-screen bg-[#0b0f19] text-slate-100">
      <Navbar />
      <main className="pt-36 pb-20 max-w-4xl mx-auto px-6 lg:px-8">
        <div className="glass-panel p-8 sm:p-12 rounded-3xl border border-slate-800">
          <Link href="/" className="text-xs font-semibold text-indigo-400 hover:underline mb-6 inline-block">
            ← Grįžti į pagrindinį
          </Link>

          <h1 className="text-3xl sm:text-5xl font-extrabold text-white mb-6">
            Slapukų <span className="gradient-text">Politika</span> (Cookies)
          </h1>

          <div className="prose prose-invert prose-slate max-w-none text-sm leading-relaxed space-y-6 text-slate-300">
            <p>
              Šioje Slapukų politikoje paaiškinama, kaip **SiteStudio.lt** naudoja slapukus (cookies) bei panašias technologijas jūsų lankymosi patirčiai gerinti.
            </p>

            <h2 className="text-lg font-bold text-white mt-6 mb-2">1. Kas Yra Slapukai?</h2>
            <p>
              Slapukai yra maži tekstiniai failai, saugomi jūsų įrenginio naršyklėje. Jie padeda svetainei įsiminti jūsų pasirinkimus bei užtikrina sklandų vartotojo paskyros veikimą.
            </p>

            <h2 className="text-lg font-bold text-white mt-6 mb-2">2. Naudojami Slapukai</h2>
            <ul className="list-disc pl-5 space-y-2">
              <li><strong>Būtinieji slapukai:</strong> Reikalingi sesijos valdymui (`sitestudio_session`, `XSRF-TOKEN`) bei slapukų sutikimo būsenai atsiminti.</li>
              <li><strong>Analitiniai slapukai:</strong> Padeda mums suprasti lankytojų srautą bei tobulinti puslapio greitaveiką.</li>
            </ul>

            <h2 className="text-lg font-bold text-white mt-6 mb-2">3. Slapukų Valdymas</h2>
            <p>
              Jūs galite bet kada pakeisti arba atšaukti savo sutikimą naudodami slapukų valdymo skydelį svetainės apačioje arba pakeitę savo naršyklės nustatymus.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
