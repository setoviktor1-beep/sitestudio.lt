import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Slapukų politika",
  description: "SiteStudio.lt slapukų politika: svetainė naudoja tik būtinuosius slapukus, analitinių ar rinkodaros slapukų nėra.",
  alternates: { canonical: "/slapuku-politika" },
};

export default function SlapukuPolitika() {
  return (
    <div className="min-h-screen bg-white text-[#0f172a]">
      <Navbar />
      <main className="pt-32 pb-20 max-w-3xl mx-auto px-6 lg:px-8">
        <Link href="/" className="text-xs font-semibold text-[#2456d6] hover:underline mb-6 inline-block">
          ← Grįžti į pagrindinį
        </Link>

        <h1 className="text-3xl sm:text-4xl font-extrabold mb-8">Slapukų politika</h1>

        <div className="space-y-6 text-sm leading-relaxed text-[#334155]">
          <p>
            Slapukai (angl. cookies) — tai maži tekstiniai failai, kuriuos svetainė
            išsaugo jūsų naršyklėje.
          </p>

          <h2 className="text-lg font-bold text-[#0f172a] pt-2">Kokius slapukus naudojame</h2>
          <p>
            <strong>sitestudio.lt</strong> šiuo metu nenaudoja jokių analitinių ar
            rinkodaros slapukų ir jokių trečiųjų šalių sekimo priemonių. Vienintelis
            atvejis, kai gali būti įrašomas slapukas — techninis sesijos slapukas,
            reikalingas prisijungus prie administravimo aplinkos (taikoma tik
            svetainės administratoriui, ne lankytojams).
          </p>
          <p>
            Kadangi nebūtinųjų slapukų nenaudojame, sutikimo juosta svetainėje
            nerodoma. Jei ateityje įdiegtume lankomumo analitiką, ši politika bus
            atnaujinta ir, jei reikės, paprašysime jūsų sutikimo.
          </p>

          <h2 className="text-lg font-bold text-[#0f172a] pt-2">Slapukų valdymas naršyklėje</h2>
          <p>
            Visus slapukus galite peržiūrėti, ištrinti arba užblokuoti savo naršyklės
            nustatymuose. Tai padarius, svetainė lankytojams veiks įprastai.
          </p>

          <p className="text-xs text-[#64748b] pt-4">Atnaujinta: 2026 m. rugpjūtis.</p>
        </div>
      </main>
      <Footer />
    </div>
  );
}
