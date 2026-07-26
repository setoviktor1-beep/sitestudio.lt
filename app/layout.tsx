import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "SiteStudio.lt — Web Puslapių Kūrimas, Administravimas Ir VPS Hostingas",
  description: "Modernių Next.js svetainių kūrimas, Directus CMS integracija, techninis administravimas bei saugus Docker VPS talpinimas Lietuvoje.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="lt" className="scroll-smooth">
      <body className="min-h-screen bg-[#0b0f19] text-slate-100 antialiased selection:bg-indigo-500 selection:text-white">
        {children}
      </body>
    </html>
  );
}
