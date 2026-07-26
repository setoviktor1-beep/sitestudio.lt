import { NextResponse } from "next/server";
import { pool } from "@/lib/db";

// Never prerender: the health check must run live (used by Docker HEALTHCHECK).
export const dynamic = "force-dynamic";

export async function GET() {
  try {
    await pool.query("SELECT 1");
    return NextResponse.json({ status: "ok", db: "up" });
  } catch {
    return NextResponse.json(
      { status: "degraded", db: "down" },
      { status: 503 }
    );
  }
}
