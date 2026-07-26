"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function CookieConsent() {
  const [showBanner, setShowBanner] = useState(false);
  const [showPreferences, setShowPreferences] = useState(false);
  const [analytics, setAnalytics] = useState(true);
  const [marketing, setMarketing] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookie_consent");
    if (!consent) {
      setShowBanner(true);
    }
  }, []);

  const saveConsent = (type: "all" | "essential" | "custom") => {
    let settings = { essential: true, analytics: true, marketing: true };
    if (type === "essential") {
      settings = { essential: true, analytics: false, marketing: false };
    } else if (type === "custom") {
      settings = { essential: true, analytics, marketing };
    }

    localStorage.setItem("cookie_consent", JSON.stringify(settings));
    document.cookie = `sitestudio_cookie_consent=${encodeURIComponent(
      JSON.stringify(settings)
    )}; path=/; max-age=${365 * 24 * 60 * 60}`;

    setShowBanner(false);
    setShowPreferences(false);
  };

  if (!showBanner) return null;

  return (
    <div className="fixed bottom-4 left-4 right-4 md:left-6 md:right-auto md:max-w-md z-50 animate-in fade-in slide-in-from-bottom-5 duration-300">
      <div className="glass-panel p-6 rounded-2xl border border-indigo-500/30 shadow-2xl bg-slate-900/95 backdrop-blur-xl">
        <div className="flex items-start justify-between gap-3 mb-3">
          <div className="flex items-center gap-2">
            <span className="text-xl">🍪</span>
            <h3 className="font-bold text-white text-base">Slapukų Nustatymai (Cookies)</h3>
          </div>
        </div>

        <p className="text-slate-300 text-xs leading-relaxed mb-4">
          Naudojame slapukus svetainės veiklai užtikrinti, lankomumo analizei bei paslaugų kokybės gerinimui. Daugiau informacijos –{" "}
          <Link href="/slapuku-politika" className="text-indigo-400 underline hover:text-indigo-300">
            Slapukų politikoje
          </Link>.
        </p>

        {showPreferences && (
          <div className="space-y-3 my-4 border-t border-b border-slate-800/80 py-3 text-xs">
            <div className="flex items-center justify-between">
              <div>
                <span className="font-semibold text-white">Būtinieji slapukai</span>
                <p className="text-slate-400 text-[11px]">Reikalingi pagrindinėms funkcijoms.</p>
              </div>
              <input type="checkbox" checked disabled className="rounded bg-slate-800 text-indigo-500" />
            </div>

            <div className="flex items-center justify-between">
              <div>
                <span className="font-semibold text-white">Analitiniai slapukai</span>
                <p className="text-slate-400 text-[11px]">Lankomumo statistikai vertinti.</p>
              </div>
              <input
                type="checkbox"
                checked={analytics}
                onChange={(e) => setAnalytics(e.target.checked)}
                className="rounded bg-slate-800 text-indigo-500 cursor-pointer"
              />
            </div>

            <div className="flex items-center justify-between">
              <div>
                <span className="font-semibold text-white">Rinkodaros slapukai</span>
                <p className="text-slate-400 text-[11px]">Pasiūlymų pritaikymui.</p>
              </div>
              <input
                type="checkbox"
                checked={marketing}
                onChange={(e) => setMarketing(e.target.checked)}
                className="rounded bg-slate-800 text-indigo-500 cursor-pointer"
              />
            </div>
          </div>
        )}

        <div className="flex flex-col sm:flex-row gap-2 pt-2">
          {showPreferences ? (
            <button
              onClick={() => saveConsent("custom")}
              className="w-full py-2.5 px-4 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-xs transition"
            >
              Išsaugoti pasirinktus
            </button>
          ) : (
            <>
              <button
                onClick={() => saveConsent("all")}
                className="w-full py-2.5 px-4 rounded-xl bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-semibold text-xs shadow-md hover:opacity-95 transition"
              >
                Sutikti su visais
              </button>
              <button
                onClick={() => saveConsent("essential")}
                className="w-full py-2.5 px-4 rounded-xl glass-panel text-slate-300 hover:text-white font-medium text-xs border border-slate-700 transition"
              >
                Tik būtinieji
              </button>
            </>
          )}

          <button
            onClick={() => setShowPreferences(!showPreferences)}
            className="py-2.5 px-3 rounded-xl border border-slate-800 text-slate-400 hover:text-white text-xs font-medium transition text-center"
          >
            {showPreferences ? "Grįžti" : "Valdyti"}
          </button>
        </div>
      </div>
    </div>
  );
}
