"use client";

import { useState } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";
import { lt } from "@/lib/i18n/lt";

type ProjectType = {
  id: string;
  name: string;
  desc: string;
  basePrice: number;
  baseWeeks: number;
};

const PROJECT_TYPES: ProjectType[] = [
  {
    id: "landing",
    name: "Landing page (1 puslapis)",
    desc: "Vieno puslapio svetainė su aiškiu pasiūlymu, darbų galerija ir užklausos forma.",
    basePrice: 200,
    baseWeeks: 1,
  },
  {
    id: "service",
    name: "Reprezentacinė svetainė (iki 5 psl.)",
    desc: "Kelių puslapių svetainė paslaugų ar įmonės veiklai pristatyti su baziniu SEO.",
    basePrice: 350,
    baseWeeks: 2,
  },
  {
    id: "cms",
    name: "Verslo svetainė su CMS",
    desc: "Svetainė su patogia administravimo sistema — patys keičiate tekstus, nuotraukas ir kainas.",
    basePrice: 500,
    baseWeeks: 3,
  },
  {
    id: "ecommerce",
    name: "El. parduotuvė",
    desc: "Prekių katalogas, krepšelis, mokėjimų integracijos (Stripe/Montonio) ir užsakymų valdymas.",
    basePrice: 1200,
    baseWeeks: 4,
  },
  {
    id: "custom",
    name: "Individuali interneto sistema / MVP",
    desc: "Rezervacijų sistemos, klientų savitarnos paskyros, skaičiuoklės ar naujo produkto MVP.",
    basePrice: 1800,
    baseWeeks: 5,
  },
];

type Feature = {
  id: string;
  name: string;
  desc: string;
  price: number;
};

const FEATURES: Feature[] = [
  {
    id: "cms_addon",
    name: "Turinio valdymo sistema (CMS)",
    desc: "Galimybė savarankiškai redaguoti tekstus, nuotraukas ir kainas.",
    price: 150,
  },
  {
    id: "multilingual",
    name: "Daugiakalbystė (EN / PL / LV / RU)",
    desc: "Pilnas svetainės pritaikymas papildomoms kalboms ir tarptautiniam SEO.",
    price: 150,
  },
  {
    id: "payments",
    name: "Mokėjimų vartų integracija",
    desc: "Atsiskaitymai per el. bankininkystę, Stripe, Montonio ar Paysera.",
    price: 200,
  },
  {
    id: "booking",
    name: "Vizitų / rezervacijų sistema",
    desc: "Interaktyvus kalendorius su vizitų registracija ir el. pašto patvirtinimais.",
    price: 200,
  },
  {
    id: "automation",
    name: "AI / Procesų automatizavimas",
    desc: "Užklausų perkėlimas į Google Sheets, CRM arba pranešimai į Telegram.",
    price: 250,
  },
  {
    id: "copywriting",
    name: "Tekstų paruošimas ir struktūra",
    desc: "Parduodančių tekstų ir antraščių suformulavimas pagal jūsų veiklą.",
    price: 120,
  },
];

export default function SkaiciuoklePage() {
  const [selectedType, setSelectedType] = useState<string>("cms");
  const [selectedFeatures, setSelectedFeatures] = useState<string[]>([]);
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [statusMsg, setStatusMsg] = useState("");

  const currentType = PROJECT_TYPES.find((p) => p.id === selectedType) ?? PROJECT_TYPES[2];

  const toggleFeature = (id: string) => {
    setSelectedFeatures((prev) =>
      prev.includes(id) ? prev.filter((f) => f !== id) : [...prev, id]
    );
  };

  const featuresTotal = selectedFeatures.reduce((acc, id) => {
    const f = FEATURES.find((item) => item.id === id);
    return acc + (f ? f.price : 0);
  }, 0);

  const totalPrice = currentType.basePrice + featuresTotal;
  const totalWeeks = currentType.baseWeeks + (selectedFeatures.length > 2 ? 1 : 0);

  const crumbs = [
    { name: "Pradžia", href: "/" },
    { name: "Paslaugos", href: "/paslaugos" },
    { name: "Kainos skaičiuoklė" },
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");

    const selectedFeatureNames = selectedFeatures
      .map((id) => FEATURES.find((f) => f.id === id)?.name)
      .filter(Boolean)
      .join(", ");

    const payload = {
      name,
      contact,
      message: `[Kainos skaičiuoklės užklausa]\nProjektas: ${currentType.name}\nNumatyta kaina: nuo ${totalPrice} €\nTerminas: ~${totalWeeks} sav.\nPasirinkti priedai: ${selectedFeatureNames || "Nėra"}\n\nŽinutė: ${message || "Nėra papildomos žinutės"}`,
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) throw new Error();
      setStatus("success");
      setStatusMsg("Užklausa sėkmingai išsiųsta! Atsakysime per 1 darbo dieną.");
    } catch {
      setStatus("error");
      setStatusMsg("Klaida siunčiant užklausą. Prašome parašyti tiesiogiai į info@sitestudio.lt");
    }
  };

  return (
    <div className="min-h-screen bg-white text-[#0f172a] antialiased">
      <Navbar dict={lt} locale="lt" />

      <main id="turinys" className="pt-28 md:pt-32 pb-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <Breadcrumbs items={crumbs} />

          <header className="mt-6 max-w-3xl">
            <p className="section-label mb-3">Interaktyvus įrankis</p>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight">
              Svetainės <span className="text-[#2456d6]">kainos skaičiuoklė</span>
            </h1>
            <p className="mt-4 text-[#475569] text-base sm:text-lg leading-relaxed">
              Pasirinkite projekto tipą ir reikiamas funkcijas — sužinokite preliminarią investiciją bei įgyvendinimo terminą. Visiems projektams kaina ir terminas patvirtinami raštu prieš pradedant.
            </p>
          </header>

          <div className="mt-12 grid grid-cols-1 lg:grid-cols-3 gap-10 items-start">
            {/* Options selection (Left 2 cols) */}
            <div className="lg:col-span-2 space-y-10">
              {/* Step 1: Project Type */}
              <div>
                <h2 className="text-xl font-bold flex items-center gap-2">
                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#2456d6] text-white text-xs font-bold">1</span>
                  Pasirinkite projekto tipą
                </h2>
                <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {PROJECT_TYPES.map((type) => {
                    const isSelected = selectedType === type.id;
                    return (
                      <button
                        key={type.id}
                        type="button"
                        onClick={() => setSelectedType(type.id)}
                        className={`text-left p-5 rounded-2xl border transition-all ${
                          isSelected
                            ? "border-[#2456d6] bg-[#2456d6]/5 shadow-sm ring-1 ring-[#2456d6]"
                            : "border-[#0f172a]/10 bg-white hover:border-[#2456d6]/40"
                        }`}
                      >
                        <div className="flex justify-between items-center mb-1">
                          <p className="font-bold text-sm text-[#0f172a]">{type.name}</p>
                          <span className="text-xs font-semibold text-[#2456d6]">nuo {type.basePrice} €</span>
                        </div>
                        <p className="text-xs text-[#64748b] leading-relaxed">{type.desc}</p>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Step 2: Additional Features */}
              <div>
                <h2 className="text-xl font-bold flex items-center gap-2">
                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#2456d6] text-white text-xs font-bold">2</span>
                  Papildomos funkcijos ir priedai
                </h2>
                <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {FEATURES.map((feature) => {
                    const isChecked = selectedFeatures.includes(feature.id);
                    return (
                      <div
                        key={feature.id}
                        onClick={() => toggleFeature(feature.id)}
                        className={`cursor-pointer p-4 rounded-2xl border transition-all flex items-start gap-3 ${
                          isChecked
                            ? "border-[#2456d6] bg-[#2456d6]/5 shadow-sm"
                            : "border-[#0f172a]/10 bg-white hover:border-[#2456d6]/40"
                        }`}
                      >
                        <input
                          type="checkbox"
                          checked={isChecked}
                          onChange={() => {}}
                          className="mt-1 h-4 w-4 rounded border-gray-300 text-[#2456d6] focus:ring-[#2456d6]"
                        />
                        <div className="flex-1">
                          <div className="flex justify-between items-center">
                            <p className="font-semibold text-xs text-[#0f172a]">{feature.name}</p>
                            <span className="text-xs font-semibold text-[#2456d6]">+{feature.price} €</span>
                          </div>
                          <p className="text-[11px] text-[#64748b] mt-1">{feature.desc}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Step 3: Direct Inquiry Form */}
              <div className="rounded-2xl border border-[#0f172a]/10 bg-[#f6f8fb] p-8">
                <h2 className="text-xl font-bold mb-2">Gauti konkretų pasiūlymą šiam pasirinkimui</h2>
                <p className="text-sm text-[#475569] mb-6">
                  Užpildykite kontaktus — per 1 darbo dieną atsiųsime oficialų pasiūlymą su fiksuota kaina ir eiga.
                </p>

                {status === "success" ? (
                  <div className="rounded-xl bg-emerald-50 border border-emerald-200 p-5 text-emerald-800 text-sm font-medium">
                    {statusMsg}
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold text-[#334155] mb-1">Jūsų vardas arba įmonė</label>
                        <input
                          type="text"
                          required
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          placeholder="Vardenis"
                          className="w-full rounded-xl border border-[#0f172a]/10 bg-white px-3.5 py-2.5 text-sm focus:border-[#2456d6] focus:outline-none"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-[#334155] mb-1">El. paštas arba telefonas</label>
                        <input
                          type="text"
                          required
                          value={contact}
                          onChange={(e) => setContact(e.target.value)}
                          placeholder="vardas@imone.lt arba +370..."
                          className="w-full rounded-xl border border-[#0f172a]/10 bg-white px-3.5 py-2.5 text-sm focus:border-[#2456d6] focus:outline-none"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-[#334155] mb-1">Papildomi komentarai ar klausimai (nebūtina)</label>
                      <textarea
                        rows={3}
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        placeholder="Trumpai aprašykite veiklą arba konkrečius lūkesčius..."
                        className="w-full rounded-xl border border-[#0f172a]/10 bg-white px-3.5 py-2.5 text-sm focus:border-[#2456d6] focus:outline-none"
                      />
                    </div>
                    {status === "error" && (
                      <p className="text-xs text-rose-600 font-medium">{statusMsg}</p>
                    )}
                    <button
                      type="submit"
                      disabled={status === "submitting"}
                      className="w-full rounded-xl bg-[#2456d6] py-3 text-sm font-semibold text-white shadow-sm hover:bg-[#1a41ab] transition-colors disabled:opacity-50"
                    >
                      {status === "submitting" ? "Siunčiama..." : "Gauti pasiūlymą pagal šią sąmatą"}
                    </button>
                  </form>
                )}
              </div>
            </div>

            {/* Live calculation sticky card (Right col) */}
            <div className="sticky top-28 rounded-3xl border-2 border-[#2456d6] bg-white p-7 shadow-lg">
              <span className="text-xs font-bold uppercase tracking-wider text-[#2456d6]">Preliminari sąmata</span>
              <p className="mt-3 text-4xl font-extrabold text-[#0f172a]">nuo {totalPrice} €</p>
              <p className="text-xs text-[#64748b] mt-1">Kainos nurodytos be PVM</p>

              <div className="mt-6 border-t border-[#0f172a]/10 pt-4 space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-[#64748b]">Terminas:</span>
                  <span className="font-semibold text-[#0f172a]">~{totalWeeks} {totalWeeks === 1 ? "savaitė" : "savaitės"}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#64748b]">Bazinis sprendimas:</span>
                  <span className="font-semibold text-[#0f172a]">{currentType.basePrice} €</span>
                </div>
                {featuresTotal > 0 && (
                  <div className="flex justify-between">
                    <span className="text-[#64748b]">Priedai ({selectedFeatures.length}):</span>
                    <span className="font-semibold text-[#0f172a]">+{featuresTotal} €</span>
                  </div>
                )}
              </div>

              <div className="mt-6 rounded-xl bg-[#f6f8fb] p-4 text-xs text-[#475569] space-y-2">
                <p className="flex items-center gap-2">
                  <svg className="h-4 w-4 text-[#2456d6]" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.7 5.3a1 1 0 010 1.4l-8 8a1 1 0 01-1.4 0l-4-4a1 1 0 111.4-1.4L8 12.6l7.3-7.3a1 1 0 011.4 0z" clipRule="evenodd" />
                  </svg>
                  Tiesioginis ryšys su vykdytoju
                </p>
                <p className="flex items-center gap-2">
                  <svg className="h-4 w-4 text-[#2456d6]" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.7 5.3a1 1 0 010 1.4l-8 8a1 1 0 01-1.4 0l-4-4a1 1 0 111.4-1.4L8 12.6l7.3-7.3a1 1 0 011.4 0z" clipRule="evenodd" />
                  </svg>
                  Fiksuota kaina ir terminas raštu
                </p>
                <p className="flex items-center gap-2">
                  <svg className="h-4 w-4 text-[#2456d6]" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.7 5.3a1 1 0 010 1.4l-8 8a1 1 0 01-1.4 0l-4-4a1 1 0 111.4-1.4L8 12.6l7.3-7.3a1 1 0 011.4 0z" clipRule="evenodd" />
                  </svg>
                  Svetainė lieka 100% jūsų nuosavybė
                </p>
              </div>

              <div className="mt-6 text-center">
                <Link href="/kontaktai" className="text-xs font-semibold text-[#2456d6] hover:underline">
                  Turite nestandartinį poreikį? Rašykite mums →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer dict={lt} locale="lt" />
    </div>
  );
}
