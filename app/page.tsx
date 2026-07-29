import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Process from "@/components/Process";
import Pricing from "@/components/Pricing";
import Faq from "@/components/Faq";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import CookieConsent from "@/components/CookieConsent";

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-[#0b0b14] antialiased">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Process />
        <Pricing />
        <Faq />
        <Contact />
      </main>
      <Footer />
      <CookieConsent />
    </div>
  );
}
