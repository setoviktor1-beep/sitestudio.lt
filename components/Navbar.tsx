"use client";

import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import type { Dict, Locale } from "@/lib/i18n";
import { locales, localeNames, localeFullNames, homePath } from "@/lib/i18n";
import Flag from "./Flag";

export default function Navbar({
  dict,
  locale = "lt",
  languagePaths,
}: {
  dict: Dict;
  locale?: Locale;
  languagePaths?: Partial<Record<Locale, string>>;
}) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const langRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (!langOpen) return;
    const handleClick = (e: MouseEvent) => {
      if (langRef.current && !langRef.current.contains(e.target as Node)) setLangOpen(false);
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, [langOpen]);

  const base = homePath(locale);
  const anchor = (hash: string) => (base === "/" ? `/#${hash}` : `${base}#${hash}`);

  // The Lithuanian site has real crawlable pages; other locales only have a
  // localized one-pager, so they keep the section anchors.
  const navLinks =
    locale === "lt"
      ? [
          { href: "/paslaugos", label: dict.nav.services },
          { href: "/darbai", label: dict.nav.works },
          { href: "/apie", label: "Apie" },
          { href: "/#kainos", label: dict.nav.pricing },
          { href: "/#duk", label: dict.nav.faq },
        ]
      : [
          { href: anchor("paslaugos"), label: dict.nav.services },
          { href: anchor("darbai"), label: dict.nav.works },
          { href: anchor("procesas"), label: dict.nav.process },
          { href: anchor("kainos"), label: dict.nav.pricing },
          { href: anchor("duk"), label: dict.nav.faq },
        ];

  const ctaHref = locale === "lt" ? "/kontaktai" : anchor("kontaktai");

  const langSwitcher = (
    <div ref={langRef} className="relative" aria-label="Language">
      <button
        onClick={() => setLangOpen(!langOpen)}
        aria-expanded={langOpen}
        aria-haspopup="menu"
        className="flex items-center gap-1.5 rounded-lg border border-black/10 bg-white px-2.5 py-1.5 text-xs font-semibold text-[#334155] hover:border-[#2456d6]/40 hover:text-[#2456d6] transition-colors"
      >
        <Flag locale={locale} className="h-3.5 w-5 rounded-[3px] shadow-sm ring-1 ring-black/10" />
        {localeNames[locale]}
        <svg
          className={`w-3 h-3 transition-transform ${langOpen ? "rotate-180" : ""}`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          aria-hidden="true"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {langOpen && (
        <div
          role="menu"
          className="absolute left-0 lg:left-auto lg:right-0 top-full mt-2 w-40 rounded-xl border border-black/5 bg-white py-1.5 shadow-xl"
        >
          {locales.map((l) => (
            <Link
              key={l}
              href={languagePaths?.[l] ?? homePath(l)}
              hrefLang={l}
              role="menuitem"
              onClick={() => {
                setLangOpen(false);
                setMobileMenuOpen(false);
              }}
              className={`flex items-center gap-2.5 px-3.5 py-2 text-sm transition-colors ${
                l === locale
                  ? "bg-[#2456d6]/10 font-semibold text-[#2456d6]"
                  : "text-[#334155] hover:bg-black/5"
              }`}
            >
              <Flag locale={l} className="h-3.5 w-5 rounded-[3px] shadow-sm ring-1 ring-black/10" />
              {localeFullNames[l]}
            </Link>
          ))}
        </div>
      )}
    </div>
  );

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/90 backdrop-blur-lg shadow-sm border-b border-black/5 py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 lg:px-8">
        {/* Logo */}
        <Link href={base} className="flex items-center gap-2.5 group" aria-label="SiteStudio">
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#2456d6] text-white font-bold text-lg transition-transform group-hover:scale-105">
            S
          </span>
          <span className="text-xl font-bold tracking-tight text-[#0f172a]">
            Site<span className="text-[#2456d6]">Studio</span>
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-[#334155]">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="hover:text-[#2456d6] transition-colors">
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-5">
          {langSwitcher}
          <Link
            href={ctaHref}
            className="rounded-xl bg-[#2456d6] px-5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-[#1a41ab] transition-colors"
          >
            {dict.nav.cta}
          </Link>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 text-[#0f172a]"
          aria-label={mobileMenuOpen ? dict.nav.menuClose : dict.nav.menuOpen}
          aria-expanded={mobileMenuOpen}
        >
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
            {mobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <nav className="lg:hidden bg-white border-b border-black/5 px-6 py-6 mt-3 space-y-4 shadow-xl">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block py-1 text-[#334155] hover:text-[#2456d6] font-medium"
            >
              {link.label}
            </Link>
          ))}
          <div className="pt-4 border-t border-black/5 space-y-4">
            {langSwitcher}
            <Link
              href={ctaHref}
              onClick={() => setMobileMenuOpen(false)}
              className="block rounded-xl bg-[#2456d6] text-white px-5 py-3 text-sm font-semibold text-center"
            >
              {dict.nav.cta}
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}
