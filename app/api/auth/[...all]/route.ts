import { toNextJsHandler } from "better-auth/next-js";
import { auth } from "@/lib/auth";

// All better-auth endpoints live under /api/auth/* (sign-in, sign-up,
// session, verification, password reset, ...).
export const { GET, POST } = toNextJsHandler(auth.handler);
