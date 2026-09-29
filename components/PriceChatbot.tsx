"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import type { Locale } from "@/lib/i18n";
import { legalPath } from "@/lib/legal";
import { chatbotCopy, type ChatStep, type PriceId } from "@/lib/chatbot-copy";

type PriceItem = { id: string; title: string; description: string; price_kind: "from" | "quote"; price_amount: number | null; timeline: string | null };
type Message = { id: number; role: "assistant" | "visitor"; text: string };
type Step = ChatStep | "result" | "lead" | "success";
type Answer = { next?: ChatStep; priceId?: PriceId };

const answers: Record<ChatStep, Answer[]> = {
  service: [{ next: "new_site" }, { priceId: "ecommerce" }, { next: "site_update" }, { next: "system" }, { priceId: "automation_quote" }],
  new_site: [{ priceId: "website_start" }, { priceId: "website_business" }, { priceId: "website_quote" }],
  site_update: [{ priceId: "website_update_start" }, { priceId: "website_update_business" }],
  system: [{ priceId: "web_system_mvp" }, { priceId: "web_system_quote" }],
};
const timelineKinds: Partial<Record<PriceId, "short" | "medium" | "long" | "scope">> = {
  website_start: "short", website_business: "medium", website_update_start: "short",
  website_update_business: "medium", ecommerce: "long", web_system_mvp: "scope",
};
const card = "rounded-2xl border border-[#e8edf3] bg-white p-4";
const primaryButton = "w-full rounded-xl bg-[#2456d6] px-4 py-3 text-sm font-semibold text-white transition hover:bg-[#1a41ab]";
const secondaryButton = "w-full px-3 py-2 text-xs font-medium text-[#64748b] hover:text-[#2456d6]";
const inputClass = "mt-1.5 w-full rounded-xl border border-[#dbe3ec] px-3.5 py-2.5 text-sm font-normal focus:border-[#2456d6] focus:outline-none";

export default function PriceChatbot({ locale }: { locale: Locale }) {
  const t = chatbotCopy[locale];
  const [open, setOpen] = useState(false);
  const [step, setStep] = useState<Step>("service");
  const [items, setItems] = useState<PriceItem[]>([]);
  const [pricesStatus, setPricesStatus] = useState<"idle" | "loading" | "ready" | "error">("idle");
  const [messages, setMessages] = useState<Message[]>([{ id: 0, role: "assistant", text: t.greeting }]);
  const [selectedId, setSelectedId] = useState<PriceId | null>(null);
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [website, setWebsite] = useState("");
  const [consent, setConsent] = useState(false);
  const [sending, setSending] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const messageId = useRef(1);
  const transcriptRef = useRef<HTMLDivElement>(null);
  const selectedPrice = items.find((item) => item.id === selectedId);
  const selectedCopy = selectedId ? t.prices[selectedId] : null;
  const timelineKind = selectedId ? timelineKinds[selectedId] : null;
  const activeAnswers = step in answers ? step as ChatStep : null;

  useEffect(() => {
    if (!open || pricesStatus !== "idle") return;
    setPricesStatus("loading");
    fetch("/api/chatbot-prices", { cache: "no-store" })
      .then(async (response) => {
        if (!response.ok) throw new Error("Prices unavailable");
        const data = await response.json() as { items: PriceItem[] };
        if (!Array.isArray(data.items)) throw new Error("Invalid price response");
        return data.items;
      })
      .then((priceItems) => { setItems(priceItems); setPricesStatus("ready"); })
      .catch(() => setPricesStatus("error"));
  }, [open, pricesStatus]);

  useEffect(() => {
    transcriptRef.current?.scrollTo({ top: transcriptRef.current.scrollHeight, behavior: "smooth" });
  }, [messages, step, pricesStatus]);

  const push = (role: Message["role"], text: string) => setMessages((current) => [...current, { id: messageId.current++, role, text }]);

  const choose = (answer: Answer, label: string) => {
    push("visitor", label);
    if (answer.priceId) {
      setSelectedId(answer.priceId);
      setStep("result");
      push("assistant", items.some((item) => item.id === answer.priceId) ? t.resultIntro : t.noPrice);
    } else if (answer.next) {
      setStep(answer.next);
      push("assistant", t.questions[answer.next]);
    }
  };

  const restart = () => {
    setStep("service"); setSelectedId(null);
    setMessages([{ id: messageId.current++, role: "assistant", text: t.restartGreeting }]);
    setName(""); setContact(""); setWebsite(""); setConsent(false); setSubmitError("");
  };

  const submit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!selectedPrice || !consent) return;
    setSending(true); setSubmitError("");
    const trimmedContact = contact.trim();
    const isEmail = trimmedContact.includes("@");
    const price = selectedPrice.price_kind === "quote" ? "pagal apimtį" : `nuo ${selectedPrice.price_amount} € be PVM`;
    const message = ["[Pokalbių asistento užklausa]", `Kalba: ${locale.toUpperCase()}`, `Paslauga: ${selectedPrice.title}`,
      `Orientacinė kaina: ${price}`, `Aprašymas: ${selectedPrice.description}`,
      selectedPrice.timeline ? `Terminas: ${selectedPrice.timeline}` : ""].filter(Boolean).join("\n");
    try {
      const response = await fetch("/api/contact", {
        method: "POST", headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email: isEmail ? trimmedContact : "", phone: isEmail ? "" : trimmedContact, message, website }),
      });
      if (!response.ok) {
        const result = await response.json().catch(() => null);
        throw new Error(locale === "lt" && result?.error ? result.error : t.submitError);
      }
      setStep("success"); push("assistant", t.successDetail);
    } catch (error) {
      setSubmitError(error instanceof Error ? error.message : t.submitError);
    } finally { setSending(false); }
  };

  return (
    <div className="fixed bottom-4 right-4 z-50 sm:bottom-6 sm:right-6" lang={locale}>
      {open && (
        <section id="price-chatbot-dialog" role="dialog" aria-modal="false" aria-labelledby="price-chatbot-title"
          className="mb-3 flex h-[min(600px,calc(100dvh-6rem))] w-[calc(100vw-2rem)] max-w-[390px] flex-col overflow-hidden rounded-[24px] border border-[#e2e8f0] bg-white shadow-[0_24px_72px_rgba(15,23,42,0.18)]">
          <header className="flex items-center gap-3 border-b border-[#edf1f5] px-5 py-4">
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-[#2456d6] text-sm font-bold text-white" aria-hidden="true">S</span>
            <div className="min-w-0 flex-1"><h2 id="price-chatbot-title" className="text-sm font-semibold text-[#0f172a]">{t.title}</h2><p className="text-xs text-[#64748b]">{t.subtitle}</p></div>
            <button type="button" onClick={() => setOpen(false)} aria-label={t.close} className="flex h-9 w-9 items-center justify-center rounded-full text-[#64748b] transition hover:bg-[#f1f5f9] hover:text-[#0f172a] focus-visible:outline-2 focus-visible:outline-[#2456d6]">
              <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><path strokeLinecap="round" d="M6 6l12 12M18 6 6 18" /></svg>
            </button>
          </header>
          <div ref={transcriptRef} className="flex-1 space-y-3 overflow-y-auto bg-[#fafbfc] px-4 py-5" aria-live="polite" aria-relevant="additions text">
            {messages.map((message) => <div key={message.id} className={`flex ${message.role === "visitor" ? "justify-end" : "justify-start"}`}>
              <p className={`max-w-[88%] whitespace-pre-line rounded-2xl px-4 py-2.5 text-sm leading-relaxed ${message.role === "visitor" ? "rounded-br-md bg-[#2456d6] text-white" : "rounded-bl-md border border-[#e8edf3] bg-white text-[#334155]"}`}>{message.text}</p>
            </div>)}
            {pricesStatus === "loading" && <p className="text-center text-xs text-[#64748b]">{t.loading}</p>}
            {pricesStatus === "error" && <div className={`${card} text-sm text-[#475569]`}>
              <p>{t.loadError} <a className="font-medium text-[#2456d6] underline" href="mailto:viktor@sitestudio.lt">viktor@sitestudio.lt</a></p>
              <button type="button" onClick={() => setPricesStatus("idle")} className="mt-3 font-medium text-[#2456d6] hover:underline">{t.retry}</button>
            </div>}
            {activeAnswers && pricesStatus === "ready" && <div className="flex flex-col items-end gap-2 pt-1">
              {answers[activeAnswers].map((answer, index) => <button key={index} type="button" onClick={() => choose(answer, t.answers[activeAnswers][index])}
                className="max-w-[92%] rounded-full border border-[#cbd9fb] bg-white px-4 py-2.5 text-left text-sm font-medium text-[#2456d6] transition hover:border-[#2456d6] hover:bg-[#eef3ff] focus-visible:outline-2 focus-visible:outline-[#2456d6]">{t.answers[activeAnswers][index]}</button>)}
            </div>}
            {step === "result" && selectedPrice && selectedCopy && <div className={card}>
              <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-[#64748b]">{t.selection}</p>
              <h3 className="mt-1 text-sm font-semibold text-[#0f172a]">{selectedCopy.title}</h3>
              <p className="mt-3 text-2xl font-semibold tracking-tight text-[#0f172a]">{selectedPrice.price_kind === "quote" ? t.quote : `${t.from} ${selectedPrice.price_amount} €`}</p>
              {selectedPrice.price_kind === "from" && <p className="mt-0.5 text-xs text-[#64748b]">{t.excludingVat}</p>}
              <p className="mt-3 text-sm leading-relaxed text-[#475569]">{selectedCopy.description}</p>
              {timelineKind && <p className="mt-3 text-xs text-[#64748b]">{t.timeline}: {t.timelines[timelineKind]}</p>}
              <button type="button" onClick={() => setStep("lead")} className={`${primaryButton} mt-4`}>{t.proposal}</button>
              <button type="button" onClick={restart} className={`${secondaryButton} mt-2`}>{t.another}</button>
            </div>}
            {step === "result" && !selectedPrice && pricesStatus === "ready" && <div className={card}>
              <p className="text-sm text-[#475569]">{t.noPrice}</p>
              <a href="mailto:viktor@sitestudio.lt" className="mt-3 block text-sm font-semibold text-[#2456d6] hover:underline">{t.emailUs}</a>
              <button type="button" onClick={restart} className={`${secondaryButton} mt-2`}>{t.another}</button>
            </div>}
            {step === "lead" && selectedPrice && <form onSubmit={submit} className={`${card} space-y-3`}>
              <div><h3 className="font-semibold text-[#0f172a]">{t.leadTitle}</h3><p className="mt-1 text-xs leading-relaxed text-[#64748b]">{t.leadIntro}</p></div>
              <label className="block text-xs font-medium text-[#334155]">{t.name}<input required minLength={2} maxLength={200} value={name} onChange={(event) => setName(event.target.value)} autoComplete="name" className={inputClass} /></label>
              <label className="block text-xs font-medium text-[#334155]">{t.contact}<input required minLength={5} maxLength={320} value={contact} onChange={(event) => setContact(event.target.value)} autoComplete="off" placeholder={t.contactPlaceholder} className={inputClass} /></label>
              <div className="hidden" aria-hidden="true"><label>{t.honeypot}<input tabIndex={-1} autoComplete="off" value={website} onChange={(event) => setWebsite(event.target.value)} /></label></div>
              <label className="flex items-start gap-2 text-xs leading-relaxed text-[#64748b]"><input required type="checkbox" checked={consent} onChange={(event) => setConsent(event.target.checked)} className="mt-0.5 h-4 w-4 shrink-0 accent-[#2456d6]" />
                <span>{t.consent} <Link href={legalPath(locale, "privacy")} target="_blank" className="underline hover:text-[#2456d6]">{t.privacy}</Link>.</span></label>
              {submitError && <p role="alert" className="rounded-lg bg-red-50 px-3 py-2 text-xs text-red-700">{submitError}</p>}
              <button disabled={sending} type="submit" className={`${primaryButton} disabled:cursor-wait disabled:opacity-60`}>{sending ? t.sending : t.send}</button>
              <button type="button" onClick={() => setStep("result")} className={secondaryButton}>{t.back}</button>
            </form>}
            {step === "success" && <div className="rounded-2xl border border-[#dce9e1] bg-[#f5fbf7] p-4 text-center">
              <p className="font-semibold text-[#165c37]">{t.success}</p><p className="mt-1 text-sm text-[#426b50]">{t.successDetail}</p>
              <button type="button" onClick={restart} className="mt-3 text-xs font-semibold text-[#2456d6] hover:underline">{t.restart}</button>
            </div>}
          </div>
        </section>
      )}
      <button type="button" aria-expanded={open} aria-controls="price-chatbot-dialog" aria-label={open ? t.close : t.launcher} onClick={() => setOpen((current) => !current)}
        className="ml-auto flex items-center gap-2.5 rounded-full bg-[#2456d6] px-4 py-3 text-sm font-semibold text-white shadow-[0_8px_24px_rgba(36,86,214,0.25)] transition hover:-translate-y-0.5 hover:bg-[#1a41ab] focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-[#2456d6]">
        <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" d="M7.5 18.75 3.75 21l1.1-4.4A8.96 8.96 0 0 1 3 11.25C3 6.7 7.03 3 12 3s9 3.7 9 8.25-4.03 8.25-9 8.25a10 10 0 0 1-4.5-.75Z" /><path strokeLinecap="round" strokeLinejoin="round" d="M8 11.25h.01M12 11.25h.01M16 11.25h.01" /></svg>
        {!open && <span>{t.launcher}</span>}
      </button>
    </div>
  );
}
