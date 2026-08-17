"use client";

import { useState } from "react";
import type { Dict } from "@/lib/i18n";

export default function Faq({ dict }: { dict: Dict }) {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <section id="duk" className="py-20 md:py-24 bg-white">
      <div className="mx-auto max-w-3xl px-6 lg:px-8">
        <div className="mb-12">
          <p className="section-label mb-3">{dict.faq.eyebrow}</p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0f172a] tracking-tight">
            {dict.faq.title}
          </h2>
        </div>

        <div className="space-y-3">
          {dict.faq.items.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={faq.q}
                className={`bg-[#f6f8fb] rounded-2xl overflow-hidden transition-all duration-200 border ${
                  isOpen ? "border-[#2456d6]/25 shadow-sm" : "border-transparent hover:border-black/5"
                }`}
              >
                <button
                  onClick={() => setOpenIdx(isOpen ? null : idx)}
                  className="w-full text-left p-5 font-semibold text-[#0f172a] flex justify-between items-center text-base cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2456d6]"
                  aria-expanded={isOpen}
                >
                  <span>{faq.q}</span>
                  <svg
                    className={`h-5 w-5 shrink-0 ml-4 text-[#2456d6] transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                      isOpen ? "rotate-180" : ""
                    }`}
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                  </svg>
                </button>
                <div
                  className={`grid transition-[grid-template-rows] duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                    isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden transition-opacity duration-300">
                    <div className="px-5 pb-5 text-[#475569] text-sm leading-relaxed">{faq.a}</div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
