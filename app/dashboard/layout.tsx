import { redirect } from "next/navigation";
import { getSession } from "@/lib/session";

/**
 * Server-side guard for the whole /dashboard section.
 * (middleware.ts only does an optimistic cookie check — this is the real one.)
 */
export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getSession();
  if (!session) {
    redirect("/sign-in?callbackUrl=/dashboard");
  }
  return <>{children}</>;
}
