import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { getDict } from "@/lib/i18n";

export const metadata: Metadata = {
  title: "Paslaugų teikimo sąlygos",
  description: "SiteStudio.lt paslaugų teikimo sąlygos: darbų apimtis, atsiskaitymas, intelektinė nuosavybė ir atsakomybė.",
  alternates: { canonical: "/naudojimo-salygos" },
};

export default async function NaudojimoSalygos() {
  const dict = await getDict("lt");
  return (
    <div className="min-h-screen bg-white text-[#0f172a]">
      <Navbar dict={dict} locale="lt" />
      <main className="pt-32 pb-20 max-w-3xl mx-auto px-6 lg:px-8">
        <Link href="/" className="text-xs font-semibold text-[#2456d6] hover:underline mb-6 inline-block">
          ← Grįžti į pagrindinį
        </Link>

        <h1 className="text-3xl sm:text-4xl font-extrabold mb-8">Paslaugų teikimo sąlygos</h1>

        <div className="space-y-6 text-sm leading-relaxed text-[#334155]">
          <h2 className="text-lg font-bold text-[#0f172a]">1. Paslaugų apimtis</h2>
          <p>
            SiteStudio teikia svetainių, el. parduotuvių ir interneto sistemų kūrimo,
            atnaujinimo, priežiūros bei procesų automatizavimo paslaugas. Konkreti
            darbų apimtis, kaina ir terminai kiekvienam projektui suderinami raštu
            (el. paštu arba sutartyje) prieš pradedant darbus. Darbai, nenumatyti
            suderintoje apimtyje, vertinami ir derinami atskirai.
          </p>

          <h2 className="text-lg font-bold text-[#0f172a] pt-2">2. Atsiskaitymas</h2>
          <p>
            Įprastai taikomas dalinis išankstinis mokėjimas pradedant darbus, o
            likusi dalis apmokama prieš svetainės paleidimą. Tiksli atsiskaitymo
            tvarka nurodoma pasiūlyme. Svetainėje skelbiamos kainos yra orientacinės
            „nuo“ kainos be PVM; galutinė kaina visada patvirtinama raštu.
          </p>

          <h2 className="text-lg font-bold text-[#0f172a] pt-2">3. Intelektinė nuosavybė</h2>
          <p>
            Atlikus pilną atsiskaitymą, sukurta svetainė, jos dizainas ir turinys
            tampa kliento nuosavybe, išskyrus atvirojo kodo komponentus, kuriems
            taikomos jų licencijos. Domenas visada registruojamas kliento vardu.
          </p>

          <h2 className="text-lg font-bold text-[#0f172a] pt-2">4. Talpinimas ir priežiūra</h2>
          <p>
            Talpinimo ir priežiūros paslaugos teikiamos pagal atskirą susitarimą už
            sutartą mėnesinį mokestį. Klientas gali bet kada perimti svetainės
            talpinimą pas kitą tiekėją — perduodame visus failus ir duomenis.
          </p>

          <h2 className="text-lg font-bold text-[#0f172a] pt-2">5. Atsakomybė</h2>
          <p>
            Įsipareigojame atlikti darbus kokybiškai ir per suderintus terminus.
            Neatsakome už nuostolius, atsiradusius dėl trečiųjų šalių paslaugų
            (pvz., domenų registratorių, mokėjimų sistemų) sutrikimų, tačiau visada
            padedame tokius sutrikimus spręsti.
          </p>

          <h2 className="text-lg font-bold text-[#0f172a] pt-2">6. Kontaktai</h2>
          <p>
            Klausimai dėl šių sąlygų —{" "}
            <a href="mailto:viktor@sitestudio.lt" className="text-[#2456d6] underline">viktor@sitestudio.lt</a>.
          </p>

          <p className="text-xs text-[#64748b] pt-4">Atnaujinta: 2026 m. rugpjūtis.</p>
        </div>
      </main>
      <Footer dict={dict} locale="lt" />
    </div>
  );
}
