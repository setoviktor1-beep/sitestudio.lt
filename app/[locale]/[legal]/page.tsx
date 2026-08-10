import { notFound } from "next/navigation";
import LegalPage from "@/components/LegalPage";
import { isLocale, prefixedLocales } from "@/lib/i18n";
import { legalKeyFromSlug, legalKeys, legalMetadata, legalSlugs } from "@/lib/legal";

type Props = { params: Promise<{ locale: string; legal: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return prefixedLocales.flatMap((locale) => legalKeys.map((key) => ({ locale, legal: legalSlugs[locale][key] })));
}

export async function generateMetadata({ params }: Props) {
  const { locale, legal } = await params;
  if (!isLocale(locale) || locale === "lt") return {};
  const key = legalKeyFromSlug(locale, legal);
  if (!key) return {};
  return legalMetadata(locale, key);
}

export default async function LocalizedLegalPage({ params }: Props) {
  const { locale, legal } = await params;
  if (!isLocale(locale) || locale === "lt") notFound();
  const key = legalKeyFromSlug(locale, legal);
  if (!key) notFound();
  return <LegalPage locale={locale} documentKey={key} />;
}
