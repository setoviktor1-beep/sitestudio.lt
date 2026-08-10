import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { getDict } from "@/lib/i18n";

export const metadata: Metadata = {
  title: "Privatumo politika",
  description: "SiteStudio.lt privatumo politika: kokius duomenis renkame, kam juos naudojame ir kokias teises turite.",
  alternates: { canonical: "/privatumo-politika" },
};

export default async function PrivatumoPolitika() {
  const dict = await getDict("lt");
  return (
    <div className="min-h-screen bg-white text-[#0f172a]">
      <Navbar dict={dict} locale="lt" />
      <main className="pt-32 pb-20 max-w-3xl mx-auto px-6 lg:px-8">
        <Link href="/" className="text-xs font-semibold text-[#2456d6] hover:underline mb-6 inline-block">
          ← Grįžti į pagrindinį
        </Link>

        <h1 className="text-3xl sm:text-4xl font-extrabold mb-8">Privatumo politika</h1>

        <div className="space-y-6 text-sm leading-relaxed text-[#334155]">
          <p>
            Šioje politikoje aprašome, kokius asmens duomenis renka svetainė{" "}
            <strong>sitestudio.lt</strong> (toliau — SiteStudio), kam jie naudojami
            ir kokias teises turite. Duomenų valdytojo kontaktas:{" "}
            <a href="mailto:viktor@sitestudio.lt" className="text-[#2456d6] underline">viktor@sitestudio.lt</a>.
          </p>

          <h2 className="text-lg font-bold text-[#0f172a] pt-2">1. Kokius duomenis renkame</h2>
          <p>
            Kai pateikiate užklausą per kontaktų formą, išsaugome jūsų nurodytą vardą
            (arba įmonės pavadinimą), el. pašto adresą, telefono numerį (jei nurodėte)
            ir žinutės turinį. Apsaugai nuo piktnaudžiavimo taip pat išsaugoma
            neatstatoma jūsų IP adreso santrauka (maiša).
          </p>
          <p>
            Svetainės naršymo statistikos ar rinkodaros sekimo priemonių šiuo metu
            nenaudojame.
          </p>

          <h2 className="text-lg font-bold text-[#0f172a] pt-2">2. Kam naudojame duomenis</h2>
          <ul className="list-disc pl-5 space-y-1">
            <li>Atsakyti į jūsų užklausą ir parengti pasiūlymą.</li>
            <li>Susisiekti dėl užsakytų paslaugų vykdymo.</li>
            <li>Užtikrinti svetainės saugumą (apsauga nuo automatinio brukalo).</li>
          </ul>
          <p>
            Duomenų neperduodame tretiesiems asmenims rinkodaros tikslais ir
            nenaudojame jokiems kitiems tikslams nei išvardinta.
          </p>

          <h2 className="text-lg font-bold text-[#0f172a] pt-2">3. Kiek laiko saugome</h2>
          <p>
            Užklausų duomenis saugome tiek, kiek reikia susirašinėjimui ir galimam
            bendradarbiavimui, bet ne ilgiau kaip 2 metus nuo paskutinio kontakto,
            nebent tęsiasi sutartiniai santykiai.
          </p>

          <h2 className="text-lg font-bold text-[#0f172a] pt-2">4. Jūsų teisės</h2>
          <p>
            Turite teisę susipažinti su savo duomenimis, prašyti juos ištaisyti ar
            ištrinti, apriboti tvarkymą arba pateikti skundą Valstybinei duomenų
            apsaugos inspekcijai (vdai.lrv.lt). Dėl bet kurios teisės kreipkitės
            el. paštu{" "}
            <a href="mailto:viktor@sitestudio.lt" className="text-[#2456d6] underline">viktor@sitestudio.lt</a> —
            atsakysime ne vėliau kaip per 30 dienų.
          </p>

          <h2 className="text-lg font-bold text-[#0f172a] pt-2">5. Duomenų saugumas</h2>
          <p>
            Svetainė pasiekiama tik šifruotu HTTPS ryšiu, o užklausų duomenys saugomi
            Europos Sąjungoje esančiame serveryje su ribota prieiga.
          </p>

          <p className="text-xs text-[#64748b] pt-4">Atnaujinta: 2026 m. rugpjūtis.</p>
        </div>
      </main>
      <Footer dict={dict} locale="lt" />
    </div>
  );
}
