"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/85 backdrop-blur-lg shadow-sm border-b border-black/5 py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 lg:px-8">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <div
            className={`flex h-10 w-10 items-center justify-center rounded-2xl text-white font-bold text-xl transition-all group-hover:scale-105 ${
              scrolled
                ? "bg-gradient-to-br from-[#7c3aed] to-[#e11d48] shadow-md shadow-violet-500/20"
                : "bg-white/10 backdrop-blur border border-white/20"
            }`}
          >
            S
          </div>
          <span className={`text-xl font-bold tracking-tight ${scrolled ? "text-[#0b0b14]" : "text-white"}`}>
            Site<span className="gradient-text">Studio</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className={`hidden md:flex items-center gap-8 text-sm font-medium ${scrolled ? "text-[#3b3b50]" : "text-white/80"}`}>
          <Link href="#paslaugos" className="hover:text-[#7c3aed] transition-colors">
            Paslaugos
          </Link>
          <Link href="#procesas" className="hover:text-[#7c3aed] transition-colors">
            Procesas
          </Link>
          <Link href="#kainos" className="hover:text-[#7c3aed] transition-colors">
            Kainodara
          </Link>
          <Link href="#faq" className="hover:text-[#7c3aed] transition-colors">
            D.U.K.
          </Link>
          <Link href="#kontaktai" className="hover:text-[#7c3aed] transition-colors">
            Kontaktai
          </Link>
        </nav>

        {/* Action Buttons */}
        <div className="hidden md:flex items-center gap-4">
          <Link
            href="/sign-in"
            className={`text-sm font-medium transition-colors px-4 py-2 ${
              scrolled ? "text-[#3b3b50] hover:text-[#0b0b14]" : "text-white/80 hover:text-white"
            }`}
          >
            Prisijungti
          </Link>
          <Link
            href="/sign-up"
            className={`rounded-full px-5 py-2.5 text-sm font-semibold transition-all ${
              scrolled
                ? "bg-[#0b0b14] text-white hover:bg-[#1e1b4b] shadow-lg"
                : "bg-white/10 backdrop-blur border border-white/20 text-white hover:bg-white/20"
            }`}
          >
            Gauti pasiūlymą
          </Link>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className={`md:hidden p-2 ${scrolled ? "text-[#0b0b14]" : "text-white"}`}
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
        <div className="md:hidden bg-white border-b border-black/5 px-6 py-6 mt-3 space-y-4 shadow-xl">
          <Link href="#paslaugos" onClick={() => setMobileMenuOpen(false)} className="block text-[#3b3b50] hover:text-[#7c3aed] font-medium">
            Paslaugos
          </Link>
          <Link href="#procesas" onClick={() => setMobileMenuOpen(false)} className="block text-[#3b3b50] hover:text-[#7c3aed] font-medium">
            Procesas
          </Link>
          <Link href="#kainos" onClick={() => setMobileMenuOpen(false)} className="block text-[#3b3b50] hover:text-[#7c3aed] font-medium">
            Kainodara
          </Link>
          <Link href="#faq" onClick={() => setMobileMenuOpen(false)} className="block text-[#3b3b50] hover:text-[#7c3aed] font-medium">
            D.U.K.
          </Link>
          <Link href="#kontaktai" onClick={() => setMobileMenuOpen(false)} className="block text-[#3b3b50] hover:text-[#7c3aed] font-medium">
            Kontaktai
          </Link>
          <div className="pt-4 border-t border-black/5 flex flex-col gap-3">
            <Link href="/sign-in" className="text-sm font-medium text-[#3b3b50] hover:text-[#0b0b14]">
              Prisijungti
            </Link>
            <Link href="#kontaktai" className="rounded-full bg-[#0b0b14] text-white px-5 py-3 text-sm font-semibold text-center">
              Gauti pasiūlymą
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
