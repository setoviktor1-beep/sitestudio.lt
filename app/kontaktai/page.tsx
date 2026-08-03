import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Kontaktai",
  description:
    "Susisiekite su SiteStudio dėl svetainės, el. parduotuvės ar automatizavimo. Atsakome per vieną darbo dieną. El. paštas: info@sitestudio.lt.",
  alternates: { canonical: "/kontaktai" },
};

export default function KontaktaiPage() {
  return (
    <div className="min-h-screen bg-white text-[#0f172a] antialiased">
      <Navbar />
      <main className="pt-16">
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
