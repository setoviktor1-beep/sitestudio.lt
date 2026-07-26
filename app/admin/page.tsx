import Link from "next/link";
import { pool } from "@/lib/db";
import { getSession } from "@/lib/session";

type AuditRow = {
  id: string;
  user_id: string | null;
  action: string;
  metadata: Record<string, unknown>;
  created_at: string;
};

async function getRecentAuditLogs(): Promise<AuditRow[]> {
  try {
    const { rows } = await pool.query<AuditRow>(
      `SELECT id, user_id, action, metadata, created_at
       FROM audit_log
       ORDER BY created_at DESC
       LIMIT 50`
    );
    return rows;
  } catch {
    // Table may not exist yet (migration not run) — show empty state.
    return [];
  }
}

export default async function AdminPage() {
  const session = (await getSession())!;
  const logs = await getRecentAuditLogs();

  return (
    <main className="mx-auto max-w-4xl px-6 py-10">
      <header className="mb-8 flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Admin area</h1>
          <p className="text-gray-600">
            Signed in as {session.user.email} (role: {session.user.role})
          </p>
        </div>
        <Link
          href="/dashboard"
          className="rounded-lg border border-gray-300 px-4 py-2 text-sm font-medium transition hover:bg-gray-100"
        >
          Back to dashboard
        </Link>
      </header>

      <section className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
        <h2 className="mb-4 text-lg font-semibold">Recent audit log</h2>
        {logs.length === 0 ? (
          <p className="text-sm text-gray-600">
            No audit entries yet (or the <code>audit_log</code> migration has
            not been applied).
          </p>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="border-b border-gray-200 text-gray-500">
                  <th className="py-2 pr-4 font-medium">Time</th>
                  <th className="py-2 pr-4 font-medium">Action</th>
                  <th className="py-2 pr-4 font-medium">User ID</th>
                  <th className="py-2 font-medium">Metadata</th>
                </tr>
              </thead>
              <tbody>
                {logs.map((log) => (
                  <tr key={log.id} className="border-b border-gray-100">
                    <td className="py-2 pr-4 whitespace-nowrap">
                      {new Date(log.created_at).toLocaleString()}
                    </td>
                    <td className="py-2 pr-4 font-mono text-xs">{log.action}</td>
                    <td className="max-w-40 truncate py-2 pr-4 font-mono text-xs">
                      {log.user_id ?? "—"}
                    </td>
                    <td className="max-w-60 truncate py-2 font-mono text-xs">
                      {JSON.stringify(log.metadata)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </section>
    </main>
  );
}
