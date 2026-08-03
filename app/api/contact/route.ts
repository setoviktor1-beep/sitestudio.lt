import { NextRequest, NextResponse } from "next/server";
import { pool } from "@/lib/db";
import { sendMail } from "@/lib/email";

export const runtime = "nodejs";

/**
 * Contact form endpoint.
 *
 * Reliability model: the request is first persisted to PostgreSQL
 * (source of truth), then a notification email is attempted best-effort.
 * Success is reported only after the DB insert commits, so no lead is
 * ever lost to a flaky SMTP connection.
 */

// Migration lives in migrations/002_contact_request.sql; the runtime image
// doesn't run migrations on deploy, so ensure the table exists on first use.
let tableReady: Promise<void> | null = null;
function ensureTable(): Promise<void> {
  if (!tableReady) {
    tableReady = pool
      .query(
        `CREATE TABLE IF NOT EXISTS contact_request (
           id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
           name TEXT NOT NULL,
           email TEXT NOT NULL,
           phone TEXT,
           message TEXT NOT NULL,
           ip_hash TEXT,
           created_at TIMESTAMPTZ NOT NULL DEFAULT now()
         )`
      )
      .then(() => undefined)
      .catch((err) => {
        tableReady = null; // retry on next request
        throw err;
      });
  }
  return tableReady;
}

// Simple in-memory rate limit: max 5 requests per IP per 10 minutes.
// Single-instance deployment, so process memory is sufficient.
const WINDOW_MS = 10 * 60 * 1000;
const MAX_PER_WINDOW = 5;
const hits = new Map<string, number[]>();

function rateLimited(ip: string): boolean {
  const now = Date.now();
  const list = (hits.get(ip) ?? []).filter((t) => now - t < WINDOW_MS);
  if (list.length >= MAX_PER_WINDOW) {
    hits.set(ip, list);
    return true;
  }
  list.push(now);
  hits.set(ip, list);
  if (hits.size > 5000) {
    // Prevent unbounded growth under address-spoofing floods.
    for (const [key, times] of hits) {
      if (times.every((t) => now - t >= WINDOW_MS)) hits.delete(key);
    }
  }
  return false;
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

export async function POST(request: NextRequest) {
  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Netinkama užklausa." }, { status: 400 });
  }

  // Honeypot: real users never fill this hidden field. Pretend success.
  if (typeof body.website === "string" && body.website.trim() !== "") {
    return NextResponse.json({ ok: true });
  }

  const name = typeof body.name === "string" ? body.name.trim() : "";
  const email = typeof body.email === "string" ? body.email.trim() : "";
  const phone = typeof body.phone === "string" ? body.phone.trim() : "";
  const message = typeof body.message === "string" ? body.message.trim() : "";

  if (name.length < 2 || name.length > 200) {
    return NextResponse.json({ error: "Įrašykite vardą (2–200 simbolių)." }, { status: 400 });
  }
  if (!EMAIL_RE.test(email) || email.length > 320) {
    return NextResponse.json({ error: "Įrašykite teisingą el. pašto adresą." }, { status: 400 });
  }
  if (phone.length > 50) {
    return NextResponse.json({ error: "Telefono numeris per ilgas." }, { status: 400 });
  }
  if (message.length < 10 || message.length > 5000) {
    return NextResponse.json({ error: "Žinutė turi būti 10–5000 simbolių." }, { status: 400 });
  }

  const ip =
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "unknown";
  if (rateLimited(ip)) {
    return NextResponse.json(
      { error: "Per daug užklausų. Pabandykite po kelių minučių arba parašykite info@sitestudio.lt." },
      { status: 429 }
    );
  }

  try {
    await ensureTable();
    await pool.query(
      `INSERT INTO contact_request (name, email, phone, message, ip_hash)
       VALUES ($1, $2, $3, $4, md5($5))`,
      [name, email, phone || null, message, ip]
    );
  } catch (err) {
    console.error("[contact] failed to store request:", err);
    return NextResponse.json(
      { error: "Nepavyko išsiųsti užklausos. Pabandykite dar kartą arba parašykite info@sitestudio.lt." },
      { status: 500 }
    );
  }

  // Best-effort notification — the lead is already safe in the DB.
  const notifyTo = process.env.CONTACT_EMAIL || "info@sitestudio.lt";
  try {
    await sendMail({
      to: notifyTo,
      subject: `Nauja užklausa iš sitestudio.lt — ${name}`,
      text:
        `Vardas: ${name}\nEl. paštas: ${email}\nTelefonas: ${phone || "—"}\n\n` +
        `Žinutė:\n${message}`,
    });
  } catch (err) {
    console.error("[contact] notification email failed (lead stored):", err);
  }

  return NextResponse.json({ ok: true });
}
