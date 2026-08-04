"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const STORAGE_KEY = "cookie-consent";

type Locale = "lt" | "en" | "pl" | "lv" | "et" | "ru";

const TEXTS: Record<
  Locale,
  { message: string; accept: string; decline: string; policy: string }
> = {
  lt: {
    message:
      "Šioje svetainėje naudojame slapukus lankomumo statistikai (Google Analytics). Sutikdami padedate mums tobulinti svetainę.",
    accept: "Sutinku",
    decline: "Nesutinku",
    policy: "Slapukų politika",
  },
  en: {
    message:
      "We use cookies for visit statistics (Google Analytics). By accepting you help us improve this website.",
    accept: "Accept",
    decline: "Decline",
    policy: "Cookie policy",
  },
  pl: {
    message:
      "Używamy plików cookie do statystyk odwiedzin (Google Analytics). Akceptując, pomagasz nam ulepszać stronę.",
    accept: "Akceptuję",
    decline: "Odrzucam",
    policy: "Polityka plików cookie",
  },
  lv: {
    message:
      "Šajā vietnē izmantojam sīkdatnes apmeklējumu statistikai (Google Analytics). Piekrītot jūs palīdzat mums uzlabot vietni.",
    accept: "Piekrītu",
    decline: "Nepiekrītu",
    policy: "Sīkdatņu politika",
  },
  et: {
    message:
      "Kasutame sellel lehel küpsiseid külastusstatistika jaoks (Google Analytics). Nõustudes aitad meil lehte paremaks muuta.",
    accept: "Nõustun",
    decline: "Keeldun",
    policy: "Küpsiste poliitika",
  },
  ru: {
    message:
      "На этом сайте мы используем cookie для статистики посещений (Google Analytics). Соглашаясь, вы помогаете нам улучшать сайт.",
    accept: "Принять",
    decline: "Отклонить",
    policy: "Политика cookie",
  },
};

function gtagCall(...args: unknown[]) {
  const w = window as unknown as {
    gtag?: (...a: unknown[]) => void;
    dataLayer?: unknown[];
  };
  if (typeof w.gtag === "function") {
    w.gtag(...args);
    return;
  }
  w.dataLayer = w.dataLayer || [];
  w.dataLayer.push(args);
}

function grantAnalytics() {
  gtagCall("consent", "update", { analytics_storage: "granted" });
}

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);
  const pathname = usePathname();

  const firstSegment = pathname?.split("/")[1] ?? "";
  const locale: Locale = (
    ["en", "pl", "lv", "et", "ru"] as const
  ).includes(firstSegment as Exclude<Locale, "lt">)
    ? (firstSegment as Locale)
    : "lt";
  const t = TEXTS[locale];

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored === "granted") {
      grantAnalytics();
    } else if (stored !== "denied") {
      setVisible(true);
    }
  }, []);

  if (!visible) return null;

  const choose = (choice: "granted" | "denied") => {
    localStorage.setItem(STORAGE_KEY, choice);
    if (choice === "granted") grantAnalytics();
    setVisible(false);
  };

  return (
    <div className="fixed inset-x-0 bottom-0 z-50 p-4 sm:p-6">
      <div className="mx-auto flex max-w-3xl flex-col gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-xl sm:flex-row sm:items-center">
        <p className="flex-1 text-sm text-slate-700">
          {t.message}{" "}
          <Link
            href="/slapuku-politika"
            className="font-medium text-slate-900 underline underline-offset-2 hover:text-slate-600"
          >
            {t.policy}
          </Link>
        </p>
        <div className="flex shrink-0 gap-3">
          <button
            type="button"
            onClick={() => choose("denied")}
            className="rounded-lg border border-slate-300 px-4 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-50"
          >
            {t.decline}
          </button>
          <button
            type="button"
            onClick={() => choose("granted")}
            className="rounded-lg bg-[#0f172a] px-4 py-2 text-sm font-medium text-white transition hover:bg-slate-700"
          >
            {t.accept}
          </button>
        </div>
      </div>
    </div>
  );
}
