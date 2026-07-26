import { redirect } from "next/navigation";
import { getSession } from "@/lib/session";

/**
 * Server-side admin guard: requires an authenticated session AND role=admin.
 * Regular users are sent back to their dashboard.
 */
export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getSession();
  if (!session) {
    redirect("/sign-in?callbackUrl=/admin");
  }
  if (session.user.role !== "admin") {
    redirect("/dashboard");
  }
  return <>{children}</>;
}
