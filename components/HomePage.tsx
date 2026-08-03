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
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import type { Dict, Locale } from "@/lib/i18n";
import { homePath } from "@/lib/i18n";

export default function HomePage({ dict, locale }: { dict: Dict; locale: Locale }) {
  const organizationJsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "SiteStudio",
    url: `https://sitestudio.lt${homePath(locale) === "/" ? "" : homePath(locale)}`,
    email: "info@sitestudio.lt",
    description: dict.meta.description,
    areaServed: { "@type": "Country", name: "Lietuva" },
    knowsLanguage: ["lt", "en", "pl", "lv", "et", "ru"],
    makesOffer: dict.services.items.map((s) => ({
      "@type": "Offer",
      itemOffered: { "@type": "Service", name: s.title },
    })),
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: dict.faq.items.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: { "@type": "Answer", text: faq.a },
    })),
  };

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
      <Navbar dict={dict} locale={locale} />
      <main>
        <Hero dict={dict} locale={locale} />
        <Problems dict={dict} />
        <Services dict={dict} />
        <WhyUs dict={dict} />
        <Works dict={dict} />
        <Process dict={dict} />
        <Pricing dict={dict} locale={locale} />
        <Automation dict={dict} />
        <Faq dict={dict} />
        <Contact dict={dict} locale={locale} />
      </main>
      <Footer dict={dict} locale={locale} />
    </div>
  );
}
