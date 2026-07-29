"use client";

import { useState } from "react";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 800));
    setLoading(false);
    setSubmitted(true);
  };

  return (
    <section id="kontaktai" className="py-24 bg-[#f7f7fb]">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Info Side */}
          <div>
            <p className="text-sm font-semibold text-[#2563eb] uppercase tracking-wider mb-3">Kontaktai</p>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-[#0b0b14] tracking-tight leading-tight">
              Pradėkime jūsų <span className="gradient-text">projektą šiandien</span>
            </h2>
            <p className="mt-4 text-[#6b6b80] text-base sm:text-lg leading-relaxed">
              Turite idėją, norite atnaujinti esamą svetainę ar ieškote patikimo talpinimo sprendimo? Susisiekite ir pateiksime geriausią pasiūlymą per 24 valandas.
            </p>

            <div className="mt-8 space-y-4">
              <div className="flex items-center gap-4 bg-white p-5 rounded-2xl border border-black/5 shadow-[0_4px_20px_rgba(20,18,60,0.03)]">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-xl">
                  ✉️
                </div>
                <div>
                  <div className="text-xs text-[#6b6b80]">El. paštas</div>
                  <div className="text-[#0b0b14] font-semibold">info@sitestudio.lt</div>
                </div>
              </div>

              <div className="flex items-center gap-4 bg-white p-5 rounded-2xl border border-black/5 shadow-[0_4px_20px_rgba(20,18,60,0.03)]">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-violet-50 text-xl">
                  🌐
                </div>
                <div>
                  <div className="text-xs text-[#6b6b80]">Infrastruktūra</div>
                  <div className="text-[#0b0b14] font-semibold">Lietuvos VPS & Cloud Host</div>
                </div>
              </div>

              <div className="flex items-center gap-4 bg-white p-5 rounded-2xl border border-black/5 shadow-[0_4px_20px_rgba(20,18,60,0.03)]">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-orange-50 text-xl">
                  ⚡
                </div>
                <div>
                  <div className="text-xs text-[#6b6b80]">Atsakymas</div>
                  <div className="text-[#0b0b14] font-semibold">Per 24 valandas</div>
                </div>
              </div>
            </div>
          </div>

          {/* Form Side */}
          <div className="bg-white p-8 sm:p-10 rounded-3xl border border-black/5 shadow-[0_8px_40px_rgba(20,18,60,0.06)]">
            {submitted ? (
              <div className="text-center py-12">
                <div className="text-5xl mb-4">✅</div>
                <h3 className="text-2xl font-bold text-[#0b0b14] mb-2">Ačiū už užklausą!</h3>
                <p className="text-[#6b6b80] text-sm">Susisieksime su jumis per kelias valandas.</p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-6 text-sm text-[#2563eb] hover:underline font-medium"
                >
                  Siųsti kitą žinutę
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <h3 className="text-xl font-bold text-[#0b0b14] mb-2">Parašykite mums žinutę</h3>

                <div>
                  <label className="block text-xs font-semibold text-[#3b3b50] mb-1.5">Vardas / Įmonė</label>
                  <input
                    type="text"
                    required
                    placeholder="Vardas Pavardė"
                    className="w-full rounded-xl bg-[#f7f7fb] border border-black/5 px-4 py-3 text-sm text-[#0b0b14] placeholder-[#9ca3af] focus:border-[#2563eb] focus:outline-none focus:ring-2 focus:ring-blue-500/10 transition-all"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#3b3b50] mb-1.5">El. pašto adresas</label>
                  <input
                    type="email"
                    required
                    placeholder="vardas@imone.lt"
                    className="w-full rounded-xl bg-[#f7f7fb] border border-black/5 px-4 py-3 text-sm text-[#0b0b14] placeholder-[#9ca3af] focus:border-[#2563eb] focus:outline-none focus:ring-2 focus:ring-blue-500/10 transition-all"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#3b3b50] mb-1.5">Žinutė / Projekto aprašymas</label>
                  <textarea
                    required
                    rows={4}
                    placeholder="Aprašykite savo poreikius ar klausimą..."
                    className="w-full rounded-xl bg-[#f7f7fb] border border-black/5 px-4 py-3 text-sm text-[#0b0b14] placeholder-[#9ca3af] focus:border-[#2563eb] focus:outline-none focus:ring-2 focus:ring-blue-500/10 transition-all resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full rounded-full bg-gradient-to-r from-[#2563eb] to-[#7c3aed] py-3.5 text-sm font-semibold text-white shadow-lg shadow-blue-500/20 hover:opacity-90 disabled:opacity-50 transition-all"
                >
                  {loading ? "Siunčiama..." : "Siųsti užklausą →"}
                </button>

                <p className="text-center text-xs text-[#9ca3af]">
                  Atsakome per 24 val. · Jūsų duomenys saugomi pagal BDAR
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
