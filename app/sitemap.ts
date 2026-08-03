import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://sitestudio.lt";
  const lastModified = new Date();

  return [
    { url: `${base}/`, lastModified, changeFrequency: "monthly", priority: 1 },
    { url: `${base}/paslaugos`, lastModified, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/darbai`, lastModified, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/kontaktai`, lastModified, changeFrequency: "yearly", priority: 0.6 },
    { url: `${base}/privatumo-politika`, lastModified, changeFrequency: "yearly", priority: 0.2 },
    { url: `${base}/slapuku-politika`, lastModified, changeFrequency: "yearly", priority: 0.2 },
    { url: `${base}/naudojimo-salygos`, lastModified, changeFrequency: "yearly", priority: 0.2 },
  ];
}
