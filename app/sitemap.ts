import type { MetadataRoute } from "next";
import { prefixedLocales } from "@/lib/i18n";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://sitestudio.lt";
  const lastModified = new Date();

  return [
    { url: `${base}/`, lastModified, changeFrequency: "monthly" as const, priority: 1 },
    ...prefixedLocales.map((locale) => ({
      url: `${base}/${locale}`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.9,
    })),
    { url: `${base}/paslaugos`, lastModified, changeFrequency: "monthly" as const, priority: 0.8 },
    { url: `${base}/darbai`, lastModified, changeFrequency: "monthly" as const, priority: 0.7 },
    { url: `${base}/kontaktai`, lastModified, changeFrequency: "yearly" as const, priority: 0.6 },
    { url: `${base}/privatumo-politika`, lastModified, changeFrequency: "yearly" as const, priority: 0.2 },
    { url: `${base}/slapuku-politika`, lastModified, changeFrequency: "yearly" as const, priority: 0.2 },
    { url: `${base}/naudojimo-salygos`, lastModified, changeFrequency: "yearly" as const, priority: 0.2 },
  ];
}
