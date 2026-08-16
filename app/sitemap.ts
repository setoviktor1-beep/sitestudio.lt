import type { MetadataRoute } from "next";
import { prefixedLocales } from "@/lib/i18n";
import { legalKeys, legalPath } from "@/lib/legal";
import { BLOG_POSTS } from "@/lib/blog";
import { portfolioProjects } from "@/lib/portfolio";

const CONTENT_UPDATED = new Date("2026-08-16");
const LEGAL_UPDATED = new Date("2026-08-10");

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://sitestudio.lt";

  const heroImages = [`${base}/works/leonamai.png`, `${base}/works/mini-social.png`];
  const allPortfolioImages = [
    `${base}/works/leonamai.png`,
    `${base}/works/situacija.png`,
    `${base}/works/mini-social.png`,
    `${base}/works/futtech-store.png`,
    `${base}/works/teisine-atrama.png`,
  ];

  // 1. Core LT pages
  const coreLtPages: MetadataRoute.Sitemap = [
    { url: `${base}/`, lastModified: CONTENT_UPDATED, changeFrequency: "weekly", priority: 1.0, images: heroImages },
    { url: `${base}/paslaugos`, lastModified: CONTENT_UPDATED, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/svetainiu-kurimas`, lastModified: CONTENT_UPDATED, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/el-parduotuviu-kurimas`, lastModified: CONTENT_UPDATED, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/svetainiu-atnaujinimas`, lastModified: CONTENT_UPDATED, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/interneto-sistemu-kurimas`, lastModified: CONTENT_UPDATED, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/ai-automatizavimas`, lastModified: CONTENT_UPDATED, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/skaiciuokle`, lastModified: CONTENT_UPDATED, changeFrequency: "monthly", priority: 0.85 },
    { url: `${base}/darbai`, lastModified: CONTENT_UPDATED, changeFrequency: "monthly", priority: 0.8, images: allPortfolioImages },
    ...portfolioProjects.map((p) => ({
      url: `${base}${p.caseStudy}`,
      lastModified: CONTENT_UPDATED,
      changeFrequency: "monthly" as const,
      priority: 0.7,
      images: [`${base}${p.image}`],
    })),
    { url: `${base}/tinklarastis`, lastModified: CONTENT_UPDATED, changeFrequency: "weekly", priority: 0.85 },
    ...BLOG_POSTS.map((post) => ({
      url: `${base}/tinklarastis/${post.slug}`,
      lastModified: new Date(post.publishedAt),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
    { url: `${base}/apie`, lastModified: CONTENT_UPDATED, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/kontaktai`, lastModified: CONTENT_UPDATED, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/privatumo-politika`, lastModified: LEGAL_UPDATED, changeFrequency: "yearly", priority: 0.2 },
    { url: `${base}/slapuku-politika`, lastModified: LEGAL_UPDATED, changeFrequency: "yearly", priority: 0.2 },
    { url: `${base}/naudojimo-salygos`, lastModified: LEGAL_UPDATED, changeFrequency: "yearly", priority: 0.2 },
  ];

  // 2. Multilingual locale pages (5 locales: en, pl, lv, et, ru)
  const localizedPages: MetadataRoute.Sitemap = prefixedLocales.flatMap((locale) => [
    { url: `${base}/${locale}`, lastModified: CONTENT_UPDATED, changeFrequency: "weekly" as const, priority: 0.8, images: heroImages },
    { url: `${base}/${locale}/paslaugos`, lastModified: CONTENT_UPDATED, changeFrequency: "monthly" as const, priority: 0.7 },
    { url: `${base}/${locale}/svetainiu-kurimas`, lastModified: CONTENT_UPDATED, changeFrequency: "monthly" as const, priority: 0.7 },
    { url: `${base}/${locale}/el-parduotuviu-kurimas`, lastModified: CONTENT_UPDATED, changeFrequency: "monthly" as const, priority: 0.7 },
    { url: `${base}/${locale}/svetainiu-atnaujinimas`, lastModified: CONTENT_UPDATED, changeFrequency: "monthly" as const, priority: 0.7 },
    { url: `${base}/${locale}/interneto-sistemu-kurimas`, lastModified: CONTENT_UPDATED, changeFrequency: "monthly" as const, priority: 0.7 },
    { url: `${base}/${locale}/ai-automatizavimas`, lastModified: CONTENT_UPDATED, changeFrequency: "monthly" as const, priority: 0.7 },
    { url: `${base}/${locale}/skaiciuokle`, lastModified: CONTENT_UPDATED, changeFrequency: "monthly" as const, priority: 0.75 },
    { url: `${base}/${locale}/darbai`, lastModified: CONTENT_UPDATED, changeFrequency: "monthly" as const, priority: 0.7, images: allPortfolioImages },
    ...portfolioProjects.map((p) => ({
      url: `${base}/${locale}${p.caseStudy}`,
      lastModified: CONTENT_UPDATED,
      changeFrequency: "monthly" as const,
      priority: 0.6,
      images: [`${base}${p.image}`],
    })),
    { url: `${base}/${locale}/tinklarastis`, lastModified: CONTENT_UPDATED, changeFrequency: "weekly" as const, priority: 0.75 },
    ...BLOG_POSTS.map((post) => ({
      url: `${base}/${locale}/tinklarastis/${post.slug}`,
      lastModified: new Date(post.publishedAt),
      changeFrequency: "monthly" as const,
      priority: 0.6,
    })),
    { url: `${base}/${locale}/apie`, lastModified: CONTENT_UPDATED, changeFrequency: "monthly" as const, priority: 0.6 },
    { url: `${base}/${locale}/kontaktai`, lastModified: CONTENT_UPDATED, changeFrequency: "monthly" as const, priority: 0.7 },
    ...legalKeys.map((key) => ({
      url: `${base}${legalPath(locale, key)}`,
      lastModified: LEGAL_UPDATED,
      changeFrequency: "yearly" as const,
      priority: 0.2,
    })),
  ]);

  return [...coreLtPages, ...localizedPages];
}
