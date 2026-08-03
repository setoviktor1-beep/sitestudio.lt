import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Services from "@/components/Services";
import Pricing from "@/components/Pricing";
import Footer from "@/components/Footer";
import { getDict } from "@/lib/i18n";

export const metadata: Metadata = {
  title: "Paslaugos — svetainių kūrimas, el. parduotuvės, automatizavimas",
  description:
    "SiteStudio paslaugos: svetainių kūrimas ir atnaujinimas, el. parduotuvės, turinio valdymas, individualios interneto sistemos ir procesų automatizavimas Lietuvos verslui.",
  alternates: { canonical: "/paslaugos" },
};

export default async function PaslaugosPage() {
  const dict = await getDict("lt");
  return (
    <div className="min-h-screen bg-white text-[#0f172a] antialiased">
      <Navbar dict={dict} locale="lt" />
      <main className="pt-28 md:pt-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 pb-4">
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#0f172a]">
            Paslaugos
          </h1>
          <p className="mt-3 text-[#475569] max-w-2xl">
            Viskas, ko reikia verslui internete — nuo pirmos svetainės iki
            individualių sistemų ir automatizavimo. Nežinote, ko tiksliai reikia?{" "}
            <Link href="/kontaktai" className="text-[#2456d6] underline hover:no-underline">
              Parašykite
            </Link>{" "}
            — patarsime nemokamai.
          </p>
        </div>
        <Services dict={dict} />
        <Pricing dict={dict} locale="lt" />
      </main>
      <Footer dict={dict} locale="lt" />
    </div>
  );
}
