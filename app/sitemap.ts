import type { MetadataRoute } from "next";
import { prefixedLocales } from "@/lib/i18n";

// Real content-change dates — bump the matching constant when a page's content
// actually changes instead of stamping every request with the current time.
const SEO_OVERHAUL = new Date("2026-08-05");
const PORTFOLIO_UPDATED = new Date("2026-08-09");
const LEGAL_UPDATED = new Date("2026-08-03");

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://sitestudio.lt";

  const heroImages = [`${base}/works/leonamai.png`, `${base}/works/mini-social.png`];

  return [
    {
      url: `${base}/`,
      lastModified: PORTFOLIO_UPDATED,
      changeFrequency: "monthly" as const,
      priority: 1,
      images: heroImages,
    },
    ...prefixedLocales.map((locale) => ({
      url: `${base}/${locale}`,
      lastModified: PORTFOLIO_UPDATED,
      changeFrequency: "monthly" as const,
      priority: 0.8,
      images: heroImages,
    })),
    // Service hub + dedicated service pages.
    { url: `${base}/paslaugos`, lastModified: SEO_OVERHAUL, changeFrequency: "monthly" as const, priority: 0.9 },
    { url: `${base}/svetainiu-kurimas`, lastModified: SEO_OVERHAUL, changeFrequency: "monthly" as const, priority: 0.9 },
    { url: `${base}/el-parduotuviu-kurimas`, lastModified: SEO_OVERHAUL, changeFrequency: "monthly" as const, priority: 0.8 },
    { url: `${base}/svetainiu-atnaujinimas`, lastModified: SEO_OVERHAUL, changeFrequency: "monthly" as const, priority: 0.8 },
    { url: `${base}/interneto-sistemu-kurimas`, lastModified: SEO_OVERHAUL, changeFrequency: "monthly" as const, priority: 0.8 },
    { url: `${base}/ai-automatizavimas`, lastModified: SEO_OVERHAUL, changeFrequency: "monthly" as const, priority: 0.8 },
    // Portfolio hub + case studies.
    {
      url: `${base}/darbai`,
      lastModified: PORTFOLIO_UPDATED,
      changeFrequency: "monthly" as const,
      priority: 0.8,
      images: [
        `${base}/works/leonamai.png`,
        `${base}/works/situacija.png`,
        `${base}/works/mini-social.png`,
        `${base}/works/futtech-store.png`,
        `${base}/works/teisine-atrama.png`,
      ],
    },
    { url: `${base}/darbai/leonamai`, lastModified: SEO_OVERHAUL, changeFrequency: "yearly" as const, priority: 0.6, images: [`${base}/works/leonamai.png`] },
    { url: `${base}/darbai/situacija`, lastModified: SEO_OVERHAUL, changeFrequency: "yearly" as const, priority: 0.6, images: [`${base}/works/situacija.png`] },
    { url: `${base}/darbai/mini-social`, lastModified: SEO_OVERHAUL, changeFrequency: "yearly" as const, priority: 0.6, images: [`${base}/works/mini-social.png`] },
    { url: `${base}/darbai/futtech-store`, lastModified: PORTFOLIO_UPDATED, changeFrequency: "yearly" as const, priority: 0.6, images: [`${base}/works/futtech-store.png`] },
    // About + contact.
    { url: `${base}/apie`, lastModified: SEO_OVERHAUL, changeFrequency: "yearly" as const, priority: 0.7 },
    { url: `${base}/kontaktai`, lastModified: SEO_OVERHAUL, changeFrequency: "yearly" as const, priority: 0.7 },
    // Legal.
    { url: `${base}/privatumo-politika`, lastModified: LEGAL_UPDATED, changeFrequency: "yearly" as const, priority: 0.2 },
    { url: `${base}/slapuku-politika`, lastModified: LEGAL_UPDATED, changeFrequency: "yearly" as const, priority: 0.2 },
    { url: `${base}/naudojimo-salygos`, lastModified: LEGAL_UPDATED, changeFrequency: "yearly" as const, priority: 0.2 },
  ];
}
