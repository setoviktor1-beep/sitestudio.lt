import type { Locale } from "@/lib/i18n";

const flags: Record<Locale, React.ReactNode> = {
  lt: (
    <>
      <rect width="60" height="40" fill="#FDB913" />
      <rect y="13.33" width="60" height="13.34" fill="#006A44" />
      <rect y="26.67" width="60" height="13.33" fill="#C1272D" />
    </>
  ),
  en: (
    <>
      <rect width="60" height="40" fill="#012169" />
      <path d="M0,0 L60,40 M60,0 L0,40" stroke="#fff" strokeWidth="8" />
      <path d="M0,0 L60,40 M60,0 L0,40" stroke="#C8102E" strokeWidth="4" />
      <path d="M30,0 V40 M0,20 H60" stroke="#fff" strokeWidth="13" />
      <path d="M30,0 V40 M0,20 H60" stroke="#C8102E" strokeWidth="8" />
    </>
  ),
  pl: (
    <>
      <rect width="60" height="20" fill="#fff" />
      <rect y="20" width="60" height="20" fill="#DC143C" />
    </>
  ),
  lv: (
    <>
      <rect width="60" height="40" fill="#9E3039" />
      <rect y="16" width="60" height="8" fill="#fff" />
    </>
  ),
  et: (
    <>
      <rect width="60" height="13.33" fill="#0072CE" />
      <rect y="13.33" width="60" height="13.34" fill="#000" />
      <rect y="26.67" width="60" height="13.33" fill="#fff" />
    </>
  ),
  ru: (
    <>
      <rect width="60" height="13.33" fill="#fff" />
      <rect y="13.33" width="60" height="13.34" fill="#0039A6" />
      <rect y="26.67" width="60" height="13.33" fill="#D52B1E" />
    </>
  ),
};

export default function Flag({ locale, className }: { locale: Locale; className?: string }) {
  return (
    <svg
      viewBox="0 0 60 40"
      className={className}
      aria-hidden="true"
      focusable="false"
      preserveAspectRatio="xMidYMid slice"
    >
      {flags[locale]}
    </svg>
  );
}
