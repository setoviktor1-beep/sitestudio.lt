import { headers } from "next/headers";
import { cache } from "react";
import { auth } from "./auth";

/**
 * Returns the current session (with the `role` field) or null.
 * Server components / route handlers only.
 * Cached per request so layouts and pages don't hit the DB twice.
 */
export const getSession = cache(async () => {
  return auth.api.getSession({
    headers: await headers(),
  });
});

/** True when the current user has the admin role. */
export async function isAdmin(): Promise<boolean> {
  const session = await getSession();
  return session?.user?.role === "admin";
}
