/**
 * Applies the app's SQL migrations (everything in migrations/*.sql)
 * against DATABASE_URL. Idempotent — safe to run on every deploy.
 *
 * Usage: DATABASE_URL=... node scripts/migrate.mjs   (or `npm run db:migrate`)
 *
 * Note: the better-auth core tables are managed by the better-auth CLI
 * (`npm run auth:migrate`), not by this script.
 */
import { readdirSync, readFileSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";
import pg from "pg";

const databaseUrl = process.env.DATABASE_URL;
if (!databaseUrl) {
  console.error("DATABASE_URL is not set");
  process.exit(1);
}

const migrationsDir = join(dirname(fileURLToPath(import.meta.url)), "..", "migrations");
const files = readdirSync(migrationsDir)
  .filter((f) => f.endsWith(".sql"))
  .sort();

const pool = new pg.Pool({ connectionString: databaseUrl });

try {
  for (const file of files) {
    console.log(`Applying ${file} ...`);
    await pool.query(readFileSync(join(migrationsDir, file), "utf8"));
  }
  console.log("Migrations applied.");
} finally {
  await pool.end();
}
