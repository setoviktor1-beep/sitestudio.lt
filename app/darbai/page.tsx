import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Works from "@/components/Works";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Darbai — atlikti projektai",
  description:
    "SiteStudio atlikti darbai: veikiančios svetainės Lietuvos paslaugų verslams — leonamai.lt ir situacija.eu. Realūs, gyvi projektai, kuriuos galite atsidaryti.",
  alternates: { canonical: "/darbai" },
};

export default function DarbaiPage() {
  return (
    <div className="min-h-screen bg-white text-[#0f172a] antialiased">
      <Navbar />
      <main className="pt-16">
        <Works />
        <div className="mx-auto max-w-7xl px-6 lg:px-8 pb-20">
          <div className="rounded-2xl bg-[#0f172a] p-8 sm:p-10 text-center">
            <h2 className="text-2xl font-bold text-white">Norite tokio rezultato savo verslui?</h2>
            <p className="mt-2 text-white/70 text-sm">
              Papasakokite apie savo veiklą — pasiūlysime sprendimą ir konkrečią kainą.
            </p>
            <Link href="/kontaktai" className="btn-primary mt-6">
              Gauti pasiūlymą
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
