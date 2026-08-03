import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-white text-[#0f172a] flex flex-col">
      <Navbar />
      <main className="flex-1 flex items-center justify-center px-6 pt-24 pb-16">
        <div className="text-center max-w-md">
          <p className="section-label mb-3">Klaida 404</p>
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            Toks puslapis nerastas
          </h1>
          <p className="mt-4 text-[#475569]">
            Puslapis galėjo būti perkeltas arba adresas įvestas neteisingai.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link href="/" className="btn-primary">Grįžti į pradžią</Link>
            <Link href="/kontaktai" className="btn-ghost">Susisiekti</Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
