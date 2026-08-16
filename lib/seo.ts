import type { Metadata } from "next";
import { BASE_URL } from "@/lib/jsonld";
import { pathAlternates } from "@/lib/i18n";

export function pageMetadata({
  title,
  description,
  path,
  image = "/opengraph-image",
  keywords,
}: {
  title: string;
  description: string;
  path: string;
  image?: string;
  keywords?: string[];
}): Metadata {
  const url = `${BASE_URL}${path}`;
  const imageUrl = image.startsWith("http") ? image : `${BASE_URL}${image}`;
  return {
    title,
    description,
    keywords,
    alternates: { canonical: path, languages: pathAlternates(path) },
    openGraph: {
      type: "website",
      locale: "lt_LT",
      url,
      siteName: "SiteStudio",
      title,
      description,
      images: [{ url: imageUrl, alt: title }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [imageUrl],
    },
  };
}

