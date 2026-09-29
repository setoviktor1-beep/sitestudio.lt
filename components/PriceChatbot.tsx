"use client";

import Link from "next/link";
import { useEffect, useMemo, useRef, useState } from "react";

type PriceItem = {
  id: string;
  title: string;
  description: string;
  price_kind: "from" | "quote";
  price_amount: number | null;
  timeline: string | null;
};

type ChatMessage = { id: number; role: "assistant" | "visitor"; text: string };
type QuestionStep = "service" | "new_site" | "site_update" | "system";
type Step = QuestionStep | "result" | "lead" | "success";
type Answer = { label: string; next?: QuestionStep; priceId?: string };

const QUESTIONS: Record<Exclude<Step, "result" | "lead" | "success">, { text: string; answers: Answer[] }> = {
  service: {
    text: "Kuo galiu padėti?",
    answers: [
      { label: "Sukurti naują svetainę", next: "new_site" },
      { label: "Sukurti el. parduotuvę", priceId: "ecommerce" },
      { label: "Atnaujinti esamą svetainę", next: "site_update" },
      { label: "Sukurti sistemą ar MVP", next: "system" },
      { label: "Automatizuoti procesą su AI", priceId: "automation_quote" },
    ],
  },
  new_site: {
    text: "Kokio tipo svetainės reikia?",
    answers: [
      { label: "Landing page arba iki 5 puslapių", priceId: "website_start" },
      { label: "Noriu pats keisti tekstus ir nuotraukas", priceId: "website_business" },
      { label: "Didesnė svetainė ar papildomos funkcijos", priceId: "website_quote" },
    ],
  },
  site_update: {
    text: "Koks atnaujinimas būtų tinkamiausias?",
    answers: [
      { label: "Nedidelė svetainė iki 5 puslapių", priceId: "website_update_start" },
      { label: "Keli puslapiai ir turinio valdymas", priceId: "website_update_business" },
    ],
  },
  system: {
    text: "Kuris sprendimas artimiausias jūsų poreikiui?",
    answers: [
      { label: "MVP — pirmoji produkto versija", priceId: "web_system_mvp" },
      { label: "Rezervacijos, paskyros ar integracijos", priceId: "web_system_quote" },
    ],
  },
};

export default function PriceChatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [step, setStep] = useState<Step>("service");
  const [items, setItems] = useState<PriceItem[]>([]);
  const [pricesStatus, setPricesStatus] = useState<"idle" | "loading" | "ready" | "error">("idle");
  const [messages, setMessages] = useState<ChatMessage[]>([
    { id: 0, role: "assistant", text: "Labas! Padėsiu išsirinkti paslaugą ir sužinoti orientacinę kainą. Kuo galiu padėti?" },
  ]);
  const [selectedPriceId, setSelectedPriceId] = useState<string | null>(null);
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [website, setWebsite] = useState("");
  const [consent, setConsent] = useState(false);
  const [submitState, setSubmitState] = useState<"idle" | "sending" | "error">("idle");
  const [submitError, setSubmitError] = useState("");
  const messageId = useRef(1);
  const transcriptRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isOpen || pricesStatus !== "idle") return;

    setPricesStatus("loading");
    fetch("/api/chatbot-prices", { cache: "no-store" })
      .then(async (response) => {
        if (!response.ok) throw new Error("Nepavyko įkelti kainoraščio.");
        const data = await response.json() as { items: PriceItem[] };
        if (!Array.isArray(data.items)) throw new Error("Kainoraščio atsakymas netinkamas.");
        return data;
      })
      .then((data) => {
        setItems(data.items);
        setPricesStatus("ready");
      })
      .catch(() => {
        setPricesStatus("error");
      });
  }, [isOpen, pricesStatus]);

  useEffect(() => {
    transcriptRef.current?.scrollTo({ top: transcriptRef.current.scrollHeight, behavior: "smooth" });
  }, [messages, step]);

  const selectedPrice = useMemo(
    () => items.find((item) => item.id === selectedPriceId) ?? null,
    [items, selectedPriceId]
  );

  const pushMessage = (role: ChatMessage["role"], text: string) => {
    setMessages((current) => [...current, { id: messageId.current++, role, text }]);
  };

  const handleAnswer = (answer: Answer) => {
    pushMessage("visitor", answer.label);

    if (answer.priceId) {
      const item = items.find((candidate) => candidate.id === answer.priceId);
      setSelectedPriceId(answer.priceId);
      setStep("result");
      if (item) {
        const price = item.price_kind === "quote" ? "Kaina nustatoma pagal apimtį." : `Orientacinė kaina — nuo ${item.price_amount} € be PVM.`;
        pushMessage("assistant", `${item.title}. ${price} ${item.description}${item.timeline ? ` Terminas: ${item.timeline}.` : ""}`);
      } else {
        pushMessage("assistant", "Šiam pasirinkimui kainoraščio įrašo neradau. Parašykite mums — įvertinsime individualiai.");
      }
      return;
    }

    if (answer.next) {
      setStep(answer.next);
      pushMessage("assistant", QUESTIONS[answer.next].text);
    }
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!selectedPrice || !consent) return;

    setSubmitState("sending");
    setSubmitError("");
    const trimmedContact = contact.trim();
    const isEmail = trimmedContact.includes("@");
    const price = selectedPrice.price_kind === "quote"
      ? "pagal apimtį"
      : `nuo ${selectedPrice.price_amount} € be PVM`;
    const message = [
      "[Pokalbių asistento užklausa]",
      `Paslauga: ${selectedPrice.title}`,
      `Orientacinė kaina: ${price}`,
      `Aprašymas: ${selectedPrice.description}`,
      selectedPrice.timeline ? `Terminas: ${selectedPrice.timeline}` : "",
    ].filter(Boolean).join("\n");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          email: isEmail ? trimmedContact : "",
          phone: isEmail ? "" : trimmedContact,
          message,
          website,
        }),
      });

      if (!response.ok) {
        const result = await response.json().catch(() => null);
        throw new Error(result?.error || "Nepavyko išsiųsti užklausos.");
      }

      setStep("success");
      pushMessage("assistant", "Ačiū! Gavome jūsų užklausą ir susisieksime nurodytu kontaktu.");
    } catch (error) {
      setSubmitState("error");
      setSubmitError(error instanceof Error ? error.message : "Nepavyko išsiųsti užklausos.");
    } finally {
      setSubmitState((current) => current === "error" ? "error" : "idle");
    }
  };

  const startOver = () => {
    setStep("service");
    setSelectedPriceId(null);
    setMessages([
      { id: messageId.current++, role: "assistant", text: "Pradėkime iš naujo. Kuo galiu padėti?" },
    ]);
    setName("");
    setContact("");
    setWebsite("");
    setConsent(false);
    setSubmitState("idle");
    setSubmitError("");
  };

  const answerSet = step === "service" || step === "new_site" || step === "site_update" || step === "system"
    ? QUESTIONS[step]
    : null;

  return (
    <div className="fixed bottom-4 right-4 z-50 sm:bottom-6 sm:right-6">
      {isOpen && (
        <section
          role="dialog"
          aria-modal="false"
          aria-labelledby="price-chatbot-title"
          id="price-chatbot-dialog"
          className="mb-3 flex h-[min(660px,calc(100dvh-6rem))] w-[calc(100vw-2rem)] max-w-[420px] flex-col overflow-hidden rounded-2xl border border-[#0f172a]/10 bg-white shadow-[0_24px_80px_rgba(15,23,42,0.22)]"
        >
          <header className="flex items-center justify-between bg-[#0f172a] px-5 py-4 text-white">
            <div>
              <h2 id="price-chatbot-title" className="text-sm font-bold">SiteStudio konsultantas</h2>
              <p className="mt-0.5 text-xs text-white/70">Paslaugos ir orientacinė kaina</p>
            </div>
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              aria-label="Uždaryti pokalbį"
              className="flex h-9 w-9 items-center justify-center rounded-full text-xl text-white/80 transition hover:bg-white/10 hover:text-white"
            >
              ×
            </button>
          </header>

          <div ref={transcriptRef} className="flex-1 space-y-3 overflow-y-auto bg-[#f6f8fb] px-4 py-4" aria-live="polite" aria-relevant="additions text">
            {messages.map((message) => (
              <div key={message.id} className={`flex ${message.role === "visitor" ? "justify-end" : "justify-start"}`}>
                <p className={`max-w-[88%] whitespace-pre-line rounded-2xl px-3.5 py-2.5 text-sm leading-relaxed ${message.role === "visitor" ? "rounded-br-md bg-[#2456d6] text-white" : "rounded-bl-md border border-[#0f172a]/5 bg-white text-[#334155] shadow-sm"}`}>
                  {message.text}
                </p>
              </div>
            ))}

            {pricesStatus === "loading" && <p className="text-center text-xs text-[#64748b]">Įkeliamas kainoraštis…</p>}
            {pricesStatus === "error" && (
              <div className="rounded-xl border border-amber-200 bg-amber-50 p-3 text-sm text-amber-900">
                Kainoraščio nepavyko įkelti. Galite parašyti mums adresu{" "}
                <a className="font-semibold underline" href="mailto:viktor@sitestudio.lt">viktor@sitestudio.lt</a>.
                <button type="button" onClick={() => setPricesStatus("idle")} className="mt-2 block text-xs font-semibold underline">Bandyti dar kartą</button>
              </div>
            )}

            {answerSet && pricesStatus === "ready" && (
              <div className="flex flex-col items-end gap-2 pt-1">
                {answerSet.answers.map((answer) => (
                  <button
                    key={answer.label}
                    type="button"
                    onClick={() => handleAnswer(answer)}
                    className="max-w-[92%] rounded-xl border border-[#2456d6]/25 bg-white px-3.5 py-2.5 text-left text-sm font-medium text-[#1a41ab] shadow-sm transition hover:border-[#2456d6] hover:bg-[#e8eefc] focus-visible:outline-offset-2"
                  >
                    {answer.label}
                  </button>
                ))}
              </div>
            )}

            {step === "result" && selectedPrice && (
              <div className="rounded-2xl border border-[#2456d6]/20 bg-white p-4 shadow-sm">
                <p className="text-xs font-semibold uppercase tracking-wide text-[#2456d6]">Jūsų pasirinkimas</p>
                <h3 className="mt-1 font-bold text-[#0f172a]">{selectedPrice.title}</h3>
                <p className="mt-2 text-2xl font-extrabold text-[#0f172a]">
                  {selectedPrice.price_kind === "quote" ? "Pagal apimtį" : `Nuo ${selectedPrice.price_amount} €`}
                </p>
                <p className="mt-1 text-xs text-[#64748b]">Kaina be PVM{selectedPrice.timeline ? ` · ${selectedPrice.timeline}` : ""}</p>
                <p className="mt-3 text-sm text-[#475569]">{selectedPrice.description}</p>
                <button type="button" onClick={() => setStep("lead")} className="mt-4 w-full rounded-xl bg-[#2456d6] px-4 py-3 text-sm font-semibold text-white transition hover:bg-[#1a41ab]">
                  Noriu gauti pasiūlymą
                </button>
                <button type="button" onClick={startOver} className="mt-2 w-full px-3 py-2 text-xs font-medium text-[#64748b] hover:text-[#2456d6]">
                  Pasirinkti kitą paslaugą
                </button>
              </div>
            )}

            {step === "result" && !selectedPrice && pricesStatus === "ready" && (
              <div className="rounded-2xl border border-amber-200 bg-white p-4 shadow-sm">
                <p className="text-sm text-[#475569]">Šiam pasirinkimui tikslaus kainoraščio įrašo nėra. Parašykite mums ir įvertinsime poreikį individualiai.</p>
                <a href="mailto:viktor@sitestudio.lt" className="mt-3 block text-center text-sm font-semibold text-[#2456d6] hover:underline">Rašyti el. paštu</a>
                <button type="button" onClick={startOver} className="mt-2 w-full px-3 py-2 text-xs font-medium text-[#64748b] hover:text-[#2456d6]">Pasirinkti kitą paslaugą</button>
              </div>
            )}

            {step === "lead" && selectedPrice && (
              <form onSubmit={handleSubmit} className="space-y-3 rounded-2xl border border-[#0f172a]/10 bg-white p-4 shadow-sm">
                <div>
                  <h3 className="font-bold text-[#0f172a]">Palikite kontaktą</h3>
                  <p className="mt-1 text-xs leading-relaxed text-[#64748b]">Atsakysime dėl „{selectedPrice.title}“ ir šio kainos įverčio.</p>
                </div>
                <label className="block text-xs font-semibold text-[#334155]">
                  Vardas
                  <input required minLength={2} maxLength={200} value={name} onChange={(event) => setName(event.target.value)} autoComplete="name" className="mt-1.5 w-full rounded-xl border border-[#0f172a]/10 px-3.5 py-2.5 text-sm font-normal focus:border-[#2456d6] focus:outline-none" />
                </label>
                <label className="block text-xs font-semibold text-[#334155]">
                  El. paštas arba telefono numeris
                  <input required minLength={5} maxLength={320} value={contact} onChange={(event) => setContact(event.target.value)} autoComplete="off" placeholder="vardas@imone.lt arba +370…" className="mt-1.5 w-full rounded-xl border border-[#0f172a]/10 px-3.5 py-2.5 text-sm font-normal focus:border-[#2456d6] focus:outline-none" />
                </label>
                <div className="hidden" aria-hidden="true">
                  <label>Palikite tuščią<input tabIndex={-1} autoComplete="off" value={website} onChange={(event) => setWebsite(event.target.value)} /></label>
                </div>
                <label className="flex items-start gap-2 text-xs leading-relaxed text-[#64748b]">
                  <input required type="checkbox" checked={consent} onChange={(event) => setConsent(event.target.checked)} className="mt-0.5 h-4 w-4 shrink-0 accent-[#2456d6]" />
                  <span>Leidžiu panaudoti kontaktą atsakant į užklausą. <Link href="/privatumo-politika" target="_blank" className="underline hover:text-[#2456d6]">Privatumo politika</Link>.</span>
                </label>
                {submitError && <p role="alert" className="rounded-lg bg-red-50 px-3 py-2 text-xs text-red-700">{submitError}</p>}
                <button disabled={submitState === "sending"} type="submit" className="w-full rounded-xl bg-[#2456d6] px-4 py-3 text-sm font-semibold text-white transition hover:bg-[#1a41ab] disabled:cursor-wait disabled:opacity-60">
                  {submitState === "sending" ? "Siunčiama…" : "Siųsti užklausą"}
                </button>
                <button type="button" onClick={() => setStep("result")} className="w-full px-3 py-1.5 text-xs font-medium text-[#64748b] hover:text-[#2456d6]">Grįžti prie įverčio</button>
              </form>
            )}

            {step === "success" && (
              <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-4 text-center">
                <p className="font-semibold text-emerald-900">Užklausa išsiųsta</p>
                <p className="mt-1 text-sm text-emerald-800">Susisieksime jūsų nurodytu kontaktu.</p>
                <button type="button" onClick={startOver} className="mt-3 text-xs font-semibold text-[#2456d6] hover:underline">Pradėti naują pokalbį</button>
              </div>
            )}
          </div>
        </section>
      )}

      <button
        type="button"
        aria-expanded={isOpen}
        aria-controls="price-chatbot-dialog"
        aria-label={isOpen ? "Uždaryti paslaugų konsultantą" : "Atidaryti paslaugų konsultantą"}
        onClick={() => setIsOpen((open) => !open)}
        className="ml-auto flex items-center gap-2 rounded-full bg-[#2456d6] px-5 py-3.5 text-sm font-semibold text-white shadow-[0_8px_30px_rgba(36,86,214,0.35)] transition hover:-translate-y-0.5 hover:bg-[#1a41ab] focus-visible:outline-offset-4"
      >
        <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 18.75 3.75 21l1.1-4.4A8.96 8.96 0 0 1 3 11.25C3 6.7 7.03 3 12 3s9 3.7 9 8.25-4.03 8.25-9 8.25a10 10 0 0 1-4.5-.75Z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M8 11.25h.01M12 11.25h.01M16 11.25h.01" />
        </svg>
        {isOpen ? "Uždaryti" : "Pasitarti dėl paslaugos"}
      </button>
    </div>
  );
}
