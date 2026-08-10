"use client";

import { useState } from "react";
import type { Dict, Locale } from "@/lib/i18n";
import { legalPath } from "@/lib/legal";

type Status = "idle" | "loading" | "success" | "error";

const inputClass =
  "w-full rounded-xl bg-[#f6f8fb] border border-[#0f172a]/10 px-4 py-3 text-sm text-[#0f172a] placeholder-[#94a3b8] focus:border-[#2456d6] focus:outline-none focus:ring-2 focus:ring-[#2456d6]/15 transition-all";

export default function Contact({ dict, locale = "lt" }: { dict: Dict; locale?: Locale }) {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const t = dict.contact;

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    setStatus("loading");
    setErrorMessage("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: data.get("name"),
          email: data.get("email"),
          phone: data.get("phone"),
          message: data.get("message"),
          website: data.get("website"),
        }),
      });

      if (res.ok) {
        setStatus("success");
        form.reset();
      } else {
        const payload = await res.json().catch(() => null);
        // Server validation messages are Lithuanian; show them only on the LT site.
        setErrorMessage(locale === "lt" && payload?.error ? payload.error : t.form.error);
        setStatus("error");
      }
    } catch {
      setErrorMessage(t.form.error);
      setStatus("error");
    }
  };

  return (
    <section id="kontaktai" className="py-20 md:py-24 bg-[#f6f8fb]">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Info side */}
          <div>
            <p className="section-label mb-3">{t.eyebrow}</p>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0f172a] tracking-tight leading-tight">
              {t.title}
            </h2>
            <p className="mt-4 text-[#475569] text-base sm:text-lg leading-relaxed max-w-xl">{t.sub}</p>

            <div className="mt-8 space-y-4 max-w-xl">
              <div className="flex items-center gap-4 bg-white p-5 rounded-2xl border border-[#0f172a]/10 shadow-soft">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#e8eefc] text-[#2456d6]">
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.6} stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                  </svg>
                </div>
                <div>
                  <div className="text-xs text-[#64748b]">{t.emailLabel}</div>
                  <a href="mailto:viktor@sitestudio.lt" className="text-[#0f172a] font-semibold hover:text-[#2456d6] transition-colors">
                    viktor@sitestudio.lt
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4 bg-white p-5 rounded-2xl border border-[#0f172a]/10 shadow-soft">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#e8eefc] text-[#2456d6]">
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.6} stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <div className="text-xs text-[#64748b]">{t.responseLabel}</div>
                  <div className="text-[#0f172a] font-semibold">{t.responseValue}</div>
                </div>
              </div>
            </div>
          </div>

          {/* Form side */}
          <div className="bg-white p-8 sm:p-10 rounded-2xl border border-[#0f172a]/10 shadow-card">
            {status === "success" ? (
              <div className="text-center py-12" role="status">
                <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-[#e8eefc]">
                  <svg className="h-7 w-7 text-[#2456d6]" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fillRule="evenodd" d="M16.7 5.3a1 1 0 010 1.4l-8 8a1 1 0 01-1.4 0l-4-4a1 1 0 111.4-1.4L8 12.6l7.3-7.3a1 1 0 011.4 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-[#0f172a] mb-2">{t.form.successTitle}</h3>
                <p className="text-[#475569] text-sm">{t.form.successText}</p>
                <button
                  onClick={() => setStatus("idle")}
                  className="mt-6 text-sm text-[#2456d6] hover:underline font-medium"
                >
                  {t.form.sendAnother}
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <h3 className="text-xl font-bold text-[#0f172a] mb-2">{t.form.heading}</h3>

                <div>
                  <label htmlFor="contact-name" className="block text-xs font-semibold text-[#334155] mb-1.5">
                    {t.form.name}
                  </label>
                  <input
                    id="contact-name"
                    name="name"
                    type="text"
                    required
                    minLength={2}
                    maxLength={200}
                    autoComplete="name"
                    placeholder={t.form.namePlaceholder}
                    className={inputClass}
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="contact-email" className="block text-xs font-semibold text-[#334155] mb-1.5">
                      {t.form.email}
                    </label>
                    <input
                      id="contact-email"
                      name="email"
                      type="email"
                      required
                      maxLength={320}
                      autoComplete="email"
                      placeholder="vardas@imone.lt"
                      className={inputClass}
                    />
                  </div>
                  <div>
                    <label htmlFor="contact-phone" className="block text-xs font-semibold text-[#334155] mb-1.5">
                      {t.form.phone}
                    </label>
                    <input
                      id="contact-phone"
                      name="phone"
                      type="tel"
                      maxLength={50}
                      autoComplete="tel"
                      placeholder="+370..."
                      className={inputClass}
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="contact-message" className="block text-xs font-semibold text-[#334155] mb-1.5">
                    {t.form.message}
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    required
                    minLength={10}
                    maxLength={5000}
                    rows={4}
                    placeholder={t.form.messagePlaceholder}
                    className={`${inputClass} resize-none`}
                  />
                </div>

                {/* Honeypot — hidden from humans, bots fill it */}
                <div className="hidden" aria-hidden="true">
                  <label htmlFor="contact-website">{t.form.honeypot}</label>
                  <input id="contact-website" name="website" type="text" tabIndex={-1} autoComplete="off" />
                </div>

                {status === "error" && (
                  <p className="rounded-xl bg-red-50 border border-red-200 px-4 py-3 text-sm text-red-700" role="alert">
                    {errorMessage}
                  </p>
                )}

                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="w-full btn-primary disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {status === "loading" ? t.form.submitting : t.form.submit}
                </button>

                <p className="text-center text-xs text-[#94a3b8]">
                  {t.form.consentPrefix}
                  <a href={legalPath(locale, "privacy")} className="underline hover:text-[#2456d6]">
                    {t.form.consentLink}
                  </a>
                  {t.form.consentSuffix}
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
