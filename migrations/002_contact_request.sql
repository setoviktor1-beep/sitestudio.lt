-- Leads submitted through the public contact form.
-- The API also creates this table on demand (CREATE TABLE IF NOT EXISTS),
-- because the production image does not run migrations at deploy time.
CREATE TABLE IF NOT EXISTS contact_request (
  id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  message TEXT NOT NULL,
  ip_hash TEXT,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE INDEX IF NOT EXISTS contact_request_created_at_idx
  ON contact_request (created_at DESC);
