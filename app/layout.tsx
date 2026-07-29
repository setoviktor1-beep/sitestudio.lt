import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
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
  title: "SiteStudio.lt — Web Puslapių Kūrimas, Administravimas Ir VPS Hostingas",
  description: "Modernių Next.js svetainių kūrimas, Directus CMS integracija, techninis administravimas bei saugus Docker VPS talpinimas Lietuvoje.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="lt" className={`scroll-smooth ${inter.variable} ${jakarta.variable}`}>
      <body className="min-h-screen bg-white text-[#0b0b14] antialiased selection:bg-blue-500/20 selection:text-[#2563eb]">
        {children}
      </body>
    </html>
  );
}
