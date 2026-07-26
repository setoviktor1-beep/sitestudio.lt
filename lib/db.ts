import { Pool } from "pg";

/**
 * Shared PostgreSQL connection pool.
 * better-auth uses this pool directly (built-in Kysely integration),
 * and the app reuses it for audit-log / admin queries.
 */
const globalForPg = globalThis as unknown as { pgPool?: Pool };

export const pool: Pool =
  globalForPg.pgPool ??
  new Pool({
    connectionString: process.env.DATABASE_URL,
    max: 10,
  });

if (process.env.NODE_ENV !== "production") {
  // Avoid creating a new pool on every hot-reload in development.
  globalForPg.pgPool = pool;
}
