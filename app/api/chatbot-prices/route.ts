import { NextResponse } from "next/server";
import { pool } from "@/lib/db";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

let tableReady: Promise<void> | null = null;

function ensureTable(): Promise<void> {
  if (!tableReady) {
    tableReady = (async () => {
      await pool.query(`
        CREATE TABLE IF NOT EXISTS chatbot_price_item (
          id TEXT PRIMARY KEY,
          title TEXT NOT NULL,
          description TEXT NOT NULL,
          price_kind TEXT NOT NULL CHECK (price_kind IN ('from', 'quote')),
          price_amount INTEGER,
          timeline TEXT,
          active BOOLEAN NOT NULL DEFAULT true,
          display_order INTEGER NOT NULL DEFAULT 0,
          updated_at TIMESTAMPTZ NOT NULL DEFAULT now(),
          CHECK (
            (price_kind = 'from' AND price_amount IS NOT NULL AND price_amount >= 0)
            OR (price_kind = 'quote' AND price_amount IS NULL)
          )
        )
      `);

      await pool.query(`
        INSERT INTO chatbot_price_item
          (id, title, description, price_kind, price_amount, timeline, display_order)
        VALUES
          ('website_start', 'Svetainė iki 5 puslapių', 'Landing page arba nedidelė reprezentacinė svetainė be turinio valdymo sistemos.', 'from', 200, '1–2 savaitės', 10),
          ('website_business', 'Svetainė su turinio valdymu', 'Kelių puslapių svetainė, kurioje patys galėsite keisti tekstus ir nuotraukas.', 'from', 500, '2–4 savaitės', 20),
          ('website_update_start', 'Nedidelės svetainės atnaujinimas', 'Iki 5 puslapių svetainės atnaujinimas su turinio perkėlimu.', 'from', 200, '1–2 savaitės', 30),
          ('website_update_business', 'Svetainės atnaujinimas su turinio valdymu', 'Kelių puslapių svetainės atnaujinimas su turinio valdymu ir techniniu SEO.', 'from', 500, '2–4 savaitės', 40),
          ('website_quote', 'Didesnė arba individuali svetainė', 'Didesnės svetainės su papildomomis funkcijomis — rezervacijomis, paskyromis ar integracijomis.', 'quote', NULL, NULL, 45),
          ('ecommerce', 'El. parduotuvė', 'Bazinis katalogas, krepšelis, mokėjimų integracija ir užsakymų valdymas.', 'from', 1200, 'Nuo 4 savaičių', 50),
          ('web_system_mvp', 'Interneto sistemos MVP', 'Pirminė produkto versija su pagrindine funkcija.', 'from', 1800, 'Pagal apimtį', 60),
          ('web_system_quote', 'Individuali interneto sistema', 'Rezervacijos, klientų paskyros, skaičiuoklės, integracijos ar kita individuali sistema.', 'quote', NULL, NULL, 70),
          ('automation_quote', 'AI ir procesų automatizavimas', 'Kaina nustatoma įvertinus procesą ir reikalingas integracijas.', 'quote', NULL, NULL, 80)
        ON CONFLICT (id) DO NOTHING
      `);
    })().catch((error) => {
      tableReady = null;
      throw error;
    });
  }

  return tableReady;
}

export async function GET() {
  try {
    await ensureTable();
    const { rows } = await pool.query(
      `SELECT id, title, description, price_kind, price_amount, timeline
       FROM chatbot_price_item
       WHERE active = true
       ORDER BY display_order ASC, title ASC`
    );

    return NextResponse.json({ items: rows });
  } catch (error) {
    console.error("[chatbot-prices] failed to load price list:", error);
    return NextResponse.json(
      { error: "Nepavyko įkelti kainoraščio." },
      { status: 503 }
    );
  }
}
