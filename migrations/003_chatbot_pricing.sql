-- Public prices used by the homepage's guided service selector.
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
);

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
ON CONFLICT (id) DO NOTHING;

-- The chatbot accepts either an email address or a phone number.
ALTER TABLE contact_request ALTER COLUMN email DROP NOT NULL;
