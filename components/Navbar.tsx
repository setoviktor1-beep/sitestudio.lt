"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "glass-panel py-3 shadow-lg border-b border-slate-800/80" : "bg-transparent py-5"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 lg:px-8">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-tr from-indigo-600 to-violet-500 text-white font-bold text-xl shadow-md shadow-indigo-500/20 group-hover:scale-105 transition-transform">
            S
          </div>
          <span className="text-xl font-bold tracking-tight text-white">
            Site<span className="gradient-text">Studio</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-300">
          <Link href="#paslaugos" className="hover:text-white transition-colors">
            Paslaugos
          </Link>
          <Link href="#procesas" className="hover:text-white transition-colors">
            Procesas
          </Link>
          <Link href="#kainos" className="hover:text-white transition-colors">
            Kainodara
          </Link>
          <Link href="#faq" className="hover:text-white transition-colors">
            D.U.K.
          </Link>
          <Link href="#kontaktai" className="hover:text-white transition-colors">
            Kontaktai
          </Link>
        </nav>

        {/* Action Buttons */}
        <div className="hidden md:flex items-center gap-4">
          <Link
            href="/sign-in"
            className="text-sm font-medium text-slate-300 hover:text-white transition-colors px-4 py-2"
          >
            Prisijungti
          </Link>
          <Link
            href="/sign-up"
            className="rounded-xl bg-gradient-to-r from-indigo-500 to-purple-600 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-indigo-500/25 hover:opacity-95 hover:shadow-indigo-500/40 transition-all"
          >
            Registracija
          </Link>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden text-slate-300 hover:text-white p-2"
          aria-label="Meniu"
        >
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            {mobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden glass-panel border-b border-slate-800 px-6 py-6 mt-3 space-y-4">
          <Link
            href="#paslaugos"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-slate-200 hover:text-white font-medium"
          >
            Paslaugos
          </Link>
          <Link
            href="#procesas"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-slate-200 hover:text-white font-medium"
          >
            Procesas
          </Link>
          <Link
            href="#kainos"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-slate-200 hover:text-white font-medium"
          >
            Kainodara
          </Link>
          <Link
            href="#faq"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-slate-200 hover:text-white font-medium"
          >
            D.U.K.
          </Link>
          <Link
            href="#kontaktai"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-slate-200 hover:text-white font-medium"
          >
            Kontaktai
          </Link>
          <div className="pt-4 border-t border-slate-800 flex flex-col gap-3">
            <Link
              href="/sign-in"
              className="w-full text-center py-2.5 rounded-xl border border-slate-700 text-slate-200 font-medium"
            >
              Prisijungti
            </Link>
            <Link
              href="/sign-up"
              className="w-full text-center py-2.5 rounded-xl bg-indigo-600 text-white font-semibold"
            >
              Registracija
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
