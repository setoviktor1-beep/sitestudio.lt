import type { MetadataRoute } from "next";
import { prefixedLocales } from "@/lib/i18n";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://sitestudio.lt";
  const lastModified = new Date();

  const heroImages = [`${base}/works/leonamai.png`, `${base}/works/mini-social.png`];

  return [
    {
      url: `${base}/`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 1,
      images: heroImages,
    },
    ...prefixedLocales.map((locale) => ({
      url: `${base}/${locale}`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.9,
      images: heroImages,
    })),
    { url: `${base}/paslaugos`, lastModified, changeFrequency: "monthly" as const, priority: 0.8 },
    {
      url: `${base}/darbai`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.7,
      images: [
        `${base}/works/leonamai.png`,
        `${base}/works/situacija.png`,
        `${base}/works/mini-social.png`,
        `${base}/works/teisine-atrama.png`,
      ],
    },
    { url: `${base}/kontaktai`, lastModified, changeFrequency: "yearly" as const, priority: 0.6 },
    { url: `${base}/privatumo-politika`, lastModified, changeFrequency: "yearly" as const, priority: 0.2 },
    { url: `${base}/slapuku-politika`, lastModified, changeFrequency: "yearly" as const, priority: 0.2 },
    { url: `${base}/naudojimo-salygos`, lastModified, changeFrequency: "yearly" as const, priority: 0.2 },
  ];
}
