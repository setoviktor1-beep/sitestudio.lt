import { pool } from "./db";

export type AuditAction =
  | "user.signup"
  | "user.signin"
  | "password.reset_requested"
  | "password.reset_completed";

/**
 * Writes one row into the `audit_log` table (see migrations/001_audit_log.sql).
 *
 * Failures are logged but never thrown: auditing must not break the auth flow
 * (e.g. while the migration has not been applied yet).
 */
export async function writeAuditLog(params: {
  action: AuditAction;
  userId?: string | null;
  metadata?: Record<string, unknown>;
}): Promise<void> {
  try {
    await pool.query(
      `INSERT INTO audit_log (user_id, action, metadata) VALUES ($1, $2, $3)`,
      [params.userId ?? null, params.action, JSON.stringify(params.metadata ?? {})]
    );
  } catch (error) {
    console.error("[audit] failed to write audit log:", error);
  }
}
