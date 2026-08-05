import type { Metadata } from "next";
import { notFound } from "next/navigation";
import HomePage from "@/components/HomePage";
import { getDict, isLocale, prefixedLocales, languageAlternates } from "@/lib/i18n";

export const dynamicParams = false;

export function generateStaticParams() {
  return prefixedLocales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const dict = await getDict(locale);
  return {
    // absolute: the dictionary titles already carry the brand — the root
    // "%s | SiteStudio" template would duplicate it.
    title: { absolute: dict.meta.title },
    description: dict.meta.description,
    alternates: {
      canonical: `/${locale}`,
      languages: languageAlternates,
    },
    openGraph: {
      type: "website",
      locale,
      url: `https://sitestudio.lt/${locale}`,
      siteName: "SiteStudio",
      title: dict.meta.title,
      description: dict.meta.description,
      // Defining openGraph here replaces the inherited one, so re-attach the
      // shared social image (served by app/opengraph-image.tsx).
      images: ["/opengraph-image"],
    },
    twitter: {
      card: "summary_large_image",
      title: dict.meta.title,
      description: dict.meta.description,
      images: ["/opengraph-image"],
    },
  };
}

export default async function LocaleHome({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale) || locale === "lt") notFound();
  const dict = await getDict(locale);

  return (
    <>
      {/* Root layout renders <html lang="lt">; correct it for this locale. */}
      <script
        dangerouslySetInnerHTML={{
          __html: `document.documentElement.lang=${JSON.stringify(locale)}`,
        }}
      />
      <HomePage dict={dict} locale={locale} />
    </>
  );
}
