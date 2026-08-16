"use client";

import Link from "next/link";
import Script from "next/script";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { type Locale } from "@/lib/i18n";
import { legalPath } from "@/lib/legal";

const STORAGE_KEY = "cookie-consent";
const GA_MEASUREMENT_ID = "G-5GZ1Y6V6XF";

const TEXTS: Record<Locale, { message: string; accept: string; decline: string; policy: string; settings: string }> = {
  lt: {
    message: "Naudojame Google Analytics tik gavę jūsų sutikimą, kad suprastume bendrą svetainės lankomumą. Reklamos sekimo nenaudojame.",
    accept: "Sutinku",
    decline: "Nesutinku",
    policy: "Slapukų politika",
    settings: "Slapukų nustatymai",
  },
  en: {
    message: "We use Google Analytics only with your consent to understand aggregate website traffic. We do not use advertising tracking.",
    accept: "Accept",
    decline: "Decline",
    policy: "Cookie policy",
    settings: "Cookie settings",
  },
  pl: {
    message: "Google Analytics uruchamiamy tylko za zgodą, aby analizować łączny ruch w witrynie. Nie używamy śledzenia reklamowego.",
    accept: "Akceptuję",
    decline: "Odrzucam",
    policy: "Polityka plików cookie",
    settings: "Ustawienia cookie",
  },
  lv: {
    message: "Google Analytics izmantojam tikai ar jūsu piekrišanu, lai izprastu kopējo apmeklētību. Reklāmas izsekošanu neizmantojam.",
    accept: "Piekrītu",
    decline: "Nepiekrītu",
    policy: "Sīkdatņu politika",
    settings: "Sīkdatņu iestatījumi",
  },
  et: {
    message: "Kasutame Google Analyticsit ainult teie nõusolekul, et mõista saidi üldist külastatavust. Reklaamijälgimist me ei kasuta.",
    accept: "Nõustun",
    decline: "Keeldun",
    policy: "Küpsiste poliitika",
    settings: "Küpsiste seaded",
  },
  ru: {
    message: "Google Analytics используется только с вашего согласия для анализа общей посещаемости. Рекламное отслеживание не применяется.",
    accept: "Принять",
    decline: "Отклонить",
    policy: "Политика cookie",
    settings: "Настройки cookie",
  },
};

function removeAnalyticsCookies() {
  document.cookie.split(";").forEach((cookie) => {
    const name = cookie.split("=")[0]?.trim();
    if (!name?.startsWith("_ga")) return;
    document.cookie = `${name}=; Max-Age=0; path=/; SameSite=Lax`;
    document.cookie = `${name}=; Max-Age=0; path=/; domain=.sitestudio.lt; SameSite=Lax`;
  });
}

export default function CookieConsent() {
  const [ready, setReady] = useState(false);
  const [visible, setVisible] = useState(false);
  const [analyticsEnabled, setAnalyticsEnabled] = useState(false);
  const pathname = usePathname();

  const firstSegment = pathname?.split("/")[1] ?? "";
  const locale: Locale = (["en", "pl", "lv", "et", "ru"] as const).includes(
    firstSegment as Exclude<Locale, "lt">,
  ) ? (firstSegment as Locale) : "lt";
  const t = TEXTS[locale];

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored === "granted") setAnalyticsEnabled(true);
    else if (stored !== "denied") setVisible(true);
    setReady(true);
  }, []);

  const choose = (choice: "granted" | "denied") => {
    localStorage.setItem(STORAGE_KEY, choice);
    if (choice === "granted") {
      const w = window as typeof window & { gtag?: (...args: unknown[]) => void };
      w.gtag?.("consent", "update", { analytics_storage: "granted" });
      w.gtag?.("config", GA_MEASUREMENT_ID, { allow_google_signals: false });
      setAnalyticsEnabled(true);
    } else {
      const w = window as typeof window & { gtag?: (...args: unknown[]) => void };
      w.gtag?.("consent", "update", { analytics_storage: "denied" });
      removeAnalyticsCookies();
      setAnalyticsEnabled(false);
    }
    setVisible(false);
  };

  if (!ready) return null;

  return (
    <>
      {analyticsEnabled && (
        <>
          <Script src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`} strategy="afterInteractive" />
          <Script id="google-analytics-consented" strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              window.gtag = gtag;
              gtag('consent', 'default', {
                analytics_storage: 'granted',
                ad_storage: 'denied',
                ad_user_data: 'denied',
                ad_personalization: 'denied'
              });
              gtag('js', new Date());
              gtag('config', '${GA_MEASUREMENT_ID}', { allow_google_signals: false });
            `}
          </Script>
        </>
      )}

      {visible ? (
        <div className="fixed inset-x-0 bottom-0 z-50 p-2 sm:p-6" role="dialog" aria-label={t.settings}>
          <div className="mx-auto flex max-w-3xl flex-col gap-2 rounded-2xl border border-slate-200 bg-white/98 p-3 shadow-xl backdrop-blur sm:flex-row sm:items-center sm:gap-4 sm:p-5">
            <p className="flex-1 text-xs leading-snug text-slate-700 sm:text-sm sm:leading-normal">
              {t.message}{" "}
              <Link href={legalPath(locale, "cookies")} className="font-medium text-slate-900 underline underline-offset-2 hover:text-slate-600">
                {t.policy}
              </Link>
            </p>
            <div className="flex shrink-0 gap-2 sm:gap-3">
              <button type="button" onClick={() => choose("denied")} className="flex-1 rounded-lg border border-slate-300 px-3 py-2 text-xs font-medium text-slate-700 transition hover:bg-slate-50 sm:flex-none sm:px-4 sm:text-sm">
                {t.decline}
              </button>
              <button type="button" onClick={() => choose("granted")} className="flex-1 rounded-lg bg-[#2456d6] px-3 py-2 text-xs font-medium text-white transition hover:bg-[#1a41ab] sm:flex-none sm:px-4 sm:text-sm">
                {t.accept}
              </button>
            </div>
          </div>
        </div>
      ) : (
        <button
          type="button"
          onClick={() => setVisible(true)}
          className="fixed bottom-3 left-3 z-40 rounded-lg border border-slate-300 bg-white/95 px-3 py-2 text-xs font-medium text-slate-600 shadow-sm backdrop-blur hover:text-[#2456d6]"
        >
          {t.settings}
        </button>
      )}
    </>
  );
}
