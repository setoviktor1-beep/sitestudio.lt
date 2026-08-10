import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import CookieConsent from "@/components/CookieConsent";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://sitestudio.lt"),
  title: {
    default: "Svetainių kūrimas verslui Lietuvoje | SiteStudio",
    template: "%s | SiteStudio",
  },
  description:
    "Profesionalus svetainių kūrimas verslui: internetinės svetainės, el. parduotuvės ir individualios interneto sistemos visoje Lietuvoje. Aiški kaina ir terminas raštu, tiesioginis ryšys su vykdytoju.",
  alternates: {
    canonical: "/",
    languages: {
      lt: "/",
      en: "/en",
      pl: "/pl",
      lv: "/lv",
      et: "/et",
      ru: "/ru",
      "x-default": "/",
    },
  },
  openGraph: {
    type: "website",
    locale: "lt_LT",
    url: "https://sitestudio.lt",
    siteName: "SiteStudio",
    title: "Svetainių kūrimas verslui Lietuvoje | SiteStudio",
    description:
      "Internetinės svetainės, el. parduotuvės ir interneto sistemos Lietuvos verslui. Aiški kaina, aiškus terminas, tiesioginis ryšys su vykdytoju.",
  },
  // og:image and twitter:image come from app/opengraph-image.tsx.
  twitter: {
    card: "summary_large_image",
    title: "Svetainių kūrimas verslui Lietuvoje | SiteStudio",
    description:
      "Internetinės svetainės, el. parduotuvės ir interneto sistemos Lietuvos verslui.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="lt" className={`scroll-smooth ${inter.variable} ${jakarta.variable}`}>
      <body className="min-h-screen bg-white text-[#0f172a] antialiased">
        <a
          href="#turinys"
          className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[100] focus:rounded-xl focus:bg-[#2456d6] focus:px-4 focus:py-2.5 focus:text-sm focus:font-semibold focus:text-white"
        >
          Pereiti prie turinio
        </a>
        {children}
        <CookieConsent />
      </body>
    </html>
  );
}
