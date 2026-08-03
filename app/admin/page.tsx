import Link from "next/link";
import { pool } from "@/lib/db";
import { getSession } from "@/lib/session";

type LeadRow = {
  id: string;
  name: string;
  email: string;
  phone: string | null;
  message: string;
  created_at: string;
};

async function getRecentLeads(): Promise<LeadRow[]> {
  try {
    const { rows } = await pool.query<LeadRow>(
      `SELECT id, name, email, phone, message, created_at
       FROM contact_request
       ORDER BY created_at DESC
       LIMIT 100`
    );
    return rows;
  } catch {
    // Table is created lazily by the contact endpoint — empty until first lead.
    return [];
  }
}

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
  const [logs, leads] = await Promise.all([getRecentAuditLogs(), getRecentLeads()]);

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

      <section className="mb-8 rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
        <h2 className="mb-4 text-lg font-semibold">Kontaktų užklausos</h2>
        {leads.length === 0 ? (
          <p className="text-sm text-gray-600">Užklausų kol kas nėra.</p>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="border-b border-gray-200 text-gray-500">
                  <th className="py-2 pr-4 font-medium">Laikas</th>
                  <th className="py-2 pr-4 font-medium">Vardas</th>
                  <th className="py-2 pr-4 font-medium">Kontaktai</th>
                  <th className="py-2 font-medium">Žinutė</th>
                </tr>
              </thead>
              <tbody>
                {leads.map((lead) => (
                  <tr key={lead.id} className="border-b border-gray-100 align-top">
                    <td className="py-2 pr-4 whitespace-nowrap">
                      {new Date(lead.created_at).toLocaleString("lt-LT")}
                    </td>
                    <td className="py-2 pr-4">{lead.name}</td>
                    <td className="py-2 pr-4">
                      <div>{lead.email}</div>
                      {lead.phone && <div className="text-gray-500">{lead.phone}</div>}
                    </td>
                    <td className="max-w-md py-2 whitespace-pre-wrap">{lead.message}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </section>

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
