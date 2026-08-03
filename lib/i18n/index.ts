import { lt } from "./lt";

export type Dict = typeof lt;

export const locales = ["lt", "en", "pl", "lv", "et", "ru"] as const;
export type Locale = (typeof locales)[number];

// Locales served under a URL prefix (/en, /pl, …); "lt" lives at the root.
export const prefixedLocales = locales.filter((l) => l !== "lt");

export const localeNames: Record<Locale, string> = {
  lt: "LT",
  en: "EN",
  pl: "PL",
  lv: "LV",
  et: "ET",
  ru: "RU",
};

export function isLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value);
}

export function homePath(locale: Locale): string {
  return locale === "lt" ? "/" : `/${locale}`;
}

export async function getDict(locale: Locale): Promise<Dict> {
  switch (locale) {
    case "en":
      return (await import("./en")).en;
    case "pl":
      return (await import("./pl")).pl;
    case "lv":
      return (await import("./lv")).lv;
    case "et":
      return (await import("./et")).et;
    case "ru":
      return (await import("./ru")).ru;
    default:
      return lt;
  }
}

/** hreflang map shared by all pages. */
export const languageAlternates: Record<string, string> = {
  lt: "/",
  en: "/en",
  pl: "/pl",
  lv: "/lv",
  et: "/et",
  ru: "/ru",
  "x-default": "/",
};
