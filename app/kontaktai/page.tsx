import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";
import { getDict } from "@/lib/i18n";
import { siteGraph, webPageNode, breadcrumbNode } from "@/lib/jsonld";

export const metadata: Metadata = {
  title: "Kontaktai — gaukite pasiūlymą dėl svetainės",
  description:
    "Susisiekite su SiteStudio dėl svetainės, el. parduotuvės, interneto sistemos ar automatizavimo. Atsakome per vieną darbo dieną. El. paštas: viktor@sitestudio.lt.",
  alternates: { canonical: "/kontaktai" },
};

export default async function KontaktaiPage() {
  const dict = await getDict("lt");
  const crumbs = [{ name: "Pradžia", href: "/" }, { name: "Kontaktai" }];
  const jsonLd = siteGraph(
    webPageNode(
      "/kontaktai",
      "Kontaktai — gaukite pasiūlymą dėl svetainės",
      "Susisiekite su SiteStudio dėl svetainės, el. parduotuvės, interneto sistemos ar automatizavimo.",
    ),
    breadcrumbNode("/kontaktai", crumbs),
  );

  return (
    <div className="min-h-screen bg-white text-[#0f172a] antialiased">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar dict={dict} locale="lt" />
      <main id="turinys" className="pt-28 md:pt-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <Breadcrumbs items={crumbs} />
          <h1 className="mt-6 text-3xl sm:text-4xl font-extrabold tracking-tight max-w-3xl">
            Susisiekite dėl svetainės ar sistemos
          </h1>
        </div>
        <Contact dict={dict} locale="lt" />
      </main>
      <Footer dict={dict} locale="lt" />
    </div>
  );
}
