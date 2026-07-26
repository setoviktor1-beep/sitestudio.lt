"use client";

import { useState } from "react";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    // Simulate sending email
    await new Promise((resolve) => setTimeout(resolve, 800));
    setLoading(false);
    setSubmitted(true);
  };

  return (
    <section id="kontaktai" className="py-24 relative">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Info Side */}
          <div>
            <h2 className="text-xs uppercase font-bold tracking-widest text-indigo-400 mb-3">Kontaktai</h2>
            <p className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
              Pradėkime jūsų <span className="gradient-text">projektą šiandien</span>
            </p>
            <p className="mt-4 text-slate-300 text-base sm:text-lg leading-relaxed">
              Turite idėją, norite atnaujinti esamą svetainę ar ieškote patikimo talpinimo sprendimo? Susisiekite su mumis ir pateiksime geriausią pasiūlymą.
            </p>

            <div className="mt-8 space-y-6">
              <div className="flex items-center gap-4 glass-panel p-4 rounded-2xl">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-600/20 text-indigo-400 text-xl font-bold">
                  ✉️
                </div>
                <div>
                  <div className="text-xs text-slate-400">El. paštas</div>
                  <div className="text-white font-semibold text-sm sm:text-base">info@sitestudio.lt</div>
                </div>
              </div>

              <div className="flex items-center gap-4 glass-panel p-4 rounded-2xl">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-purple-600/20 text-purple-400 text-xl font-bold">
                  🌐
                </div>
                <div>
                  <div className="text-xs text-slate-400">Infrastruktūra</div>
                  <div className="text-white font-semibold text-sm sm:text-base">Lietuvos VPS & Cloud Host</div>
                </div>
              </div>
            </div>
          </div>

          {/* Form Side */}
          <div className="glass-panel p-8 sm:p-10 rounded-3xl border border-slate-800">
            {submitted ? (
              <div className="text-center py-12">
                <div className="text-5xl mb-4">🎉</div>
                <h3 className="text-2xl font-bold text-white mb-2">Ačiū за užklausą!</h3>
                <p className="text-slate-300 text-sm">Susisieksime su jumis per kelias valandas.</p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-6 text-xs text-indigo-400 hover:underline"
                >
                  Siųsti kitą žinutę
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <h3 className="text-xl font-bold text-white mb-2">Parašykite mums žinutę</h3>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">Vardas / Įmonė</label>
                  <input
                    type="text"
                    required
                    placeholder="Vardas Pavardė"
                    className="w-full rounded-xl bg-slate-900/80 border border-slate-700/80 px-4 py-3 text-sm text-white placeholder-slate-500 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">El. pašto adresas</label>
                  <input
                    type="email"
                    required
                    placeholder="vardas@imone.lt"
                    className="w-full rounded-xl bg-slate-900/80 border border-slate-700/80 px-4 py-3 text-sm text-white placeholder-slate-500 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">Žinutė / Projekto aprašymas</label>
                  <textarea
                    required
                    rows={4}
                    placeholder="Aprašykite savo poreikius ar klausimą..."
                    className="w-full rounded-xl bg-slate-900/80 border border-slate-700/80 px-4 py-3 text-sm text-white placeholder-slate-500 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full rounded-xl bg-gradient-to-r from-indigo-500 to-purple-600 py-3.5 text-sm font-semibold text-white shadow-lg shadow-indigo-500/25 hover:opacity-95 transition-all disabled:opacity-50"
                >
                  {loading ? "Siunčiama..." : "Siųsti Užklausą"}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
