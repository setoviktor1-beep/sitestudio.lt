"use client";

import { useState } from "react";

export default function Faq() {
  const faqs = [
    {
      q: "Kiek laiko užtrunka puslapio kūrimas?",
      a: "Paprasta reprezentacinė svetainė sukuriama per 3–7 darbo dienas. Sudėtingesni projektai su Directus CMS ar vartotojų registracija užtrunka nuo 1 iki 3 savaičių.",
    },
    {
      q: "Ar galėsiu pats keisti svetainės turinį?",
      a: "Taip! Projektai su Directus CMS turi intuityvią valdymo panelę, kurioje galėsite redaguoti tekstus, nuotraukas, paslaugas bei straipsnius be jokių programavimo žinių.",
    },
    {
      q: "Kur bus talpinama mano svetainė?",
      a: "Svetainė talpinama šiuolaikinėje VPS infrastruktūroje (Docker konteineriuose per Coolify). Užtikrinamas nemokamas SSL (HTTPS) sertifikatas bei automatinės atsarginės kopijos.",
    },
    {
      q: "Ar teikiate palaikymą po svetainės paleidimo?",
      a: "Taip, teikiame nuolatinį techninį palaikymą, saugumo atnaujinimus, greitaveikos monitoringą bei pagalbą atsiradus klausimams.",
    },
    {
      q: "Ar kainos su PVM?",
      a: "Nurodytos kainos yra be PVM. Pasiūlyme visada matysite galutinę sumą su visais mokesčiais — jokių netikėtumų.",
    },
  ];

  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <section id="faq" className="py-24 bg-white">
      <div className="mx-auto max-w-3xl px-6 lg:px-8">
        <div className="text-center mb-14">
          <p className="text-sm font-semibold text-[#2563eb] uppercase tracking-wider mb-3">D.U.K.</p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0b0b14] tracking-tight">
            Dažniausiai užduodami <span className="gradient-text">klausimai</span>
          </h2>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={idx}
                className={`bg-[#f7f7fb] rounded-2xl overflow-hidden transition-all border ${
                  isOpen ? "border-[#2563eb]/20" : "border-transparent"
                }`}
              >
                <button
                  onClick={() => setOpenIdx(isOpen ? null : idx)}
                  className="w-full text-left p-5 font-semibold text-[#0b0b14] flex justify-between items-center text-base"
                >
                  <span>{faq.q}</span>
                  <span className={`text-[#2563eb] transition-transform duration-200 text-xl flex-shrink-0 ml-4 ${isOpen ? "rotate-180" : ""}`}>
                    ↓
                  </span>
                </button>
                {isOpen && (
                  <div className="px-5 pb-5 text-[#6b6b80] text-sm leading-relaxed">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
