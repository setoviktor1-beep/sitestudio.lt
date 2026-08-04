import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const GA_MEASUREMENT_ID = "G-5GZ1Y6V6XF";

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
    default: "Svetainių kūrimas verslui — SiteStudio",
    template: "%s — SiteStudio",
  },
  description:
    "SiteStudio kuria svetaines, el. parduotuves ir interneto sistemas mažam ir vidutiniam Lietuvos verslui. Aiški kaina, aiškus terminas, tiesioginis ryšys su vykdytoju.",
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
    title: "Svetainių kūrimas verslui — SiteStudio",
    description:
      "Svetainės, el. parduotuvės ir interneto sistemos Lietuvos verslui. Aiški kaina, aiškus terminas, tiesioginis ryšys su vykdytoju.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Svetainių kūrimas verslui — SiteStudio",
    description:
      "Svetainės, el. parduotuvės ir interneto sistemos Lietuvos verslui.",
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
        {children}
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_MEASUREMENT_ID}');
          `}
        </Script>
      </body>
    </html>
  );
}
