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
      a: "Taip, teikiame nuolatinį techninį palaikymą, saugumo atnaujinimus, greitaveikos monitoringą bei pagalba atsiradus klausimams.",
    },
    {
      q: "Kas nutinka su slapukais (Cookies)?",
      a: "Visi mūsų kuriami projektai atitinka bendrąjį duomenų apsaugos reglamentą (BDAR / GDPR). Svetainėje įdiegtas slapukų sutikimo modulis, leidžiantis vartotojui valdyti savo privatumo nustatymus.",
    },
  ];

  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <section id="faq" className="py-20 relative bg-slate-950/40">
      <div className="mx-auto max-w-4xl px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="text-xs uppercase font-bold tracking-widest text-indigo-400 mb-3">D.U.K.</h2>
          <p className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Dažniausiai užduodami <span className="gradient-text">klausimai</span>
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={idx}
                className="glass-panel rounded-2xl overflow-hidden transition-colors border border-slate-800/80"
              >
                <button
                  onClick={() => setOpenIdx(isOpen ? null : idx)}
                  className="w-full text-left p-6 font-bold text-white flex justify-between items-center text-base sm:text-lg"
                >
                  <span>{faq.q}</span>
                  <span className={`text-indigo-400 transition-transform duration-200 text-xl ${isOpen ? "rotate-180" : ""}`}>
                    ↓
                  </span>
                </button>
                {isOpen && (
                  <div className="px-6 pb-6 text-slate-300 text-sm leading-relaxed border-t border-slate-800/50 pt-4">
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
