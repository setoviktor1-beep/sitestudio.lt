import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Problems from "@/components/Problems";
import Services from "@/components/Services";
import WhyUs from "@/components/WhyUs";
import Works from "@/components/Works";
import Process from "@/components/Process";
import Pricing from "@/components/Pricing";
import Automation from "@/components/Automation";
import Faq from "@/components/Faq";
import { faqs } from "@/components/faq-data";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "SiteStudio",
  url: "https://sitestudio.lt",
  email: "info@sitestudio.lt",
  description:
    "Svetainių, el. parduotuvių ir interneto sistemų kūrimo studija mažam ir vidutiniam Lietuvos verslui. Taip pat — svetainių atnaujinimas, priežiūra ir procesų automatizavimas.",
  areaServed: { "@type": "Country", name: "Lietuva" },
  knowsLanguage: "lt",
  sameAs: [] as string[],
  makesOffer: [
    { "@type": "Offer", itemOffered: { "@type": "Service", name: "Svetainių kūrimas" } },
    { "@type": "Offer", itemOffered: { "@type": "Service", name: "El. parduotuvių kūrimas" } },
    { "@type": "Offer", itemOffered: { "@type": "Service", name: "Svetainių atnaujinimas" } },
    { "@type": "Offer", itemOffered: { "@type": "Service", name: "Individualios interneto sistemos" } },
    { "@type": "Offer", itemOffered: { "@type": "Service", name: "AI ir procesų automatizavimas" } },
  ],
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.q,
    acceptedAnswer: { "@type": "Answer", text: faq.a },
  })),
};

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-[#0f172a] antialiased">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Navbar />
      <main>
        <Hero />
        <Problems />
        <Services />
        <WhyUs />
        <Works />
        <Process />
        <Pricing />
        <Automation />
        <Faq />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
