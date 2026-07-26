-- Audit log for authentication-related user actions.
-- Applied by scripts/migrate.mjs (`npm run db:migrate`).
-- The better-auth core tables are created separately via `npm run auth:migrate`.

CREATE TABLE IF NOT EXISTS audit_log (
  id         uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id    text,                              -- references better-auth "user".id (text), nullable for anonymous events
  action     text NOT NULL,                     -- e.g. user.signup, user.signin, password.reset_requested
  metadata   jsonb NOT NULL DEFAULT '{}'::jsonb,
  created_at timestamptz NOT NULL DEFAULT now()
);

CREATE INDEX IF NOT EXISTS audit_log_user_id_idx ON audit_log (user_id);
CREATE INDEX IF NOT EXISTS audit_log_created_at_idx ON audit_log (created_at DESC);
