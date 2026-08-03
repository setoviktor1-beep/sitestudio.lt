"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

const navLinks = [
  { href: "/#paslaugos", label: "Paslaugos" },
  { href: "/#darbai", label: "Darbai" },
  { href: "/#procesas", label: "Procesas" },
  { href: "/#kainos", label: "Kainos" },
  { href: "/#duk", label: "DUK" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
        <Link href="/" className="flex items-center gap-2.5 group" aria-label="SiteStudio — į pradžią">
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#2456d6] text-white font-bold text-lg transition-transform group-hover:scale-105">
            S
          </span>
          <span className="text-xl font-bold tracking-tight text-[#0f172a]">
            Site<span className="text-[#2456d6]">Studio</span>
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-[#334155]" aria-label="Pagrindinė navigacija">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="hover:text-[#2456d6] transition-colors">
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Primary CTA */}
        <div className="hidden md:block">
          <Link
            href="/#kontaktai"
            className="rounded-xl bg-[#2456d6] px-5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-[#1a41ab] transition-colors"
          >
            Gauti pasiūlymą
          </Link>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-[#0f172a]"
          aria-label={mobileMenuOpen ? "Uždaryti meniu" : "Atidaryti meniu"}
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
        <nav className="md:hidden bg-white border-b border-black/5 px-6 py-6 mt-3 space-y-4 shadow-xl" aria-label="Mobili navigacija">
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
          <div className="pt-4 border-t border-black/5">
            <Link
              href="/#kontaktai"
              onClick={() => setMobileMenuOpen(false)}
              className="block rounded-xl bg-[#2456d6] text-white px-5 py-3 text-sm font-semibold text-center"
            >
              Gauti pasiūlymą
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}
