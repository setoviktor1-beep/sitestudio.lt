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
import { siteGraph, webPageNode, faqNode } from "@/lib/jsonld";

export default function HomePage({ dict, locale }: { dict: Dict; locale: Locale }) {
  const path = homePath(locale) === "/" ? "" : homePath(locale);
  const jsonLd = siteGraph(
    webPageNode(path || "/", dict.meta.title, dict.meta.description),
    // FAQ content below is rendered visibly by the Faq component.
    faqNode(path || "/", dict.faq.items),
  );

  return (
    <div className="min-h-screen bg-white text-[#0f172a] antialiased">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar dict={dict} locale={locale} />
      <main id="turinys">
        <Hero dict={dict} locale={locale} />
        <Problems dict={dict} />
        <Services dict={dict} locale={locale} />
        <WhyUs dict={dict} />
        <Works dict={dict} locale={locale} showAllLink />
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
