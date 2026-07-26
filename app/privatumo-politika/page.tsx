import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function PrivatumoPolitika() {
  return (
    <div className="min-h-screen bg-[#0b0f19] text-slate-100">
      <Navbar />
      <main className="pt-36 pb-20 max-w-4xl mx-auto px-6 lg:px-8">
        <div className="glass-panel p-8 sm:p-12 rounded-3xl border border-slate-800">
          <Link href="/" className="text-xs font-semibold text-indigo-400 hover:underline mb-6 inline-block">
            ← Grįžti į pagrindinį
          </Link>

          <h1 className="text-3xl sm:text-5xl font-extrabold text-white mb-6">
            Privatumo <span className="gradient-text">Politika</span>
          </h1>

          <div className="prose prose-invert prose-slate max-w-none text-sm leading-relaxed space-y-6 text-slate-300">
            <p>
              Ši Privatumo politika nustato, kaip <strong>SiteStudio.lt</strong> renka, naudoja ir saugo jūsų asmens duomenis, kai naudojatės mūsų svetaine bei paslaugomis.
            </p>

            <h2 className="text-lg font-bold text-white mt-6 mb-2">1. Renkami Duomenys</h2>
            <p>Mūsų svetainėje gali būti renkami šie duomenys:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Jūsų pateiktas vardas, el. pašto adresas bei žinutės turinys pildant kontaktų formą.</li>
              <li>Paskyros duomenys (el. paštas, slaptažodžio maiša), kai registruojatės vartotojų sistemoje.</li>
              <li>Slapukų (Cookies) informacija apie lankomumą bei naudojimosi įpročius.</li>
            </ul>

            <h2 className="text-lg font-bold text-white mt-6 mb-2">2. Duomenų Naudojimo Tikslai</h2>
            <p>Surinkti duomenys naudojami griežtai pagal BDAR (GDPR) reikalavimus šiems tikslams:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Atsakyti į jūsų užklausas ir teikti pasiūlymus.</li>
              <li>Suteikti prieigą prie klientų valdymo skydelio ir paslaugų.</li>
              <li>Užtikrinti svetainės saugumą bei greitaveiką.</li>
            </ul>

            <h2 className="text-lg font-bold text-white mt-6 mb-2">3. Duomenų Saugumas Ir Teisės</h2>
            <p>
              Jūsų duomenys yra šifruojami ir saugomi saugiuose ES serveriuose. Jūs turite teisę bet kada pareikalauti susipažinti su savo duomenimis, juos pataisyti arba ištrinti, susisiekę el. paštu: <strong>info@sitestudio.lt</strong>.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
