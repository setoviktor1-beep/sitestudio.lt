import { betterAuth } from "better-auth";
import { pool } from "./db";
import { sendMail } from "./email";
import { writeAuditLog } from "./audit";

const rawUrl = process.env.BETTER_AUTH_URL;
const appUrl = rawUrl && rawUrl.startsWith("http") ? rawUrl : "http://localhost:3000";

/**
 * better-auth instance.
 *
 * - Uses the shared pg Pool (better-auth's built-in Kysely adapter).
 * - Schema is created via the CLI: `npm run auth:migrate` (see README).
 * - The `role` user field powers the /admin area ("user" | "admin").
 *   `input: false` means clients can never set it through the API.
 */
export const auth = betterAuth({
  appName: "Web App Template",
  baseURL: appUrl,
  secret: process.env.BETTER_AUTH_SECRET,
  database: pool,

  emailAndPassword: {
    enabled: true,
    minPasswordLength: 8,
    // Users must verify their email before they can sign in.
    requireEmailVerification: true,

    sendResetPassword: async ({ user, url }) => {
      await writeAuditLog({
        action: "password.reset_requested",
        userId: user.id,
        metadata: { email: user.email },
      });
      await sendMail({
        to: user.email,
        subject: "Reset your password",
        text: `Reset your password by opening this link:\n\n${url}\n\nIf you did not request this, you can ignore this email.`,
      });
    },

    onPasswordReset: async ({ user }) => {
      await writeAuditLog({
        action: "password.reset_completed",
        userId: user.id,
        metadata: { email: user.email },
      });
    },
  },

  emailVerification: {
    sendOnSignUp: true,
    autoSignInAfterVerification: true,
    sendVerificationEmail: async ({ user, url }) => {
      await sendMail({
        to: user.email,
        subject: "Verify your email address",
        text: `Welcome! Verify your email address by opening this link:\n\n${url}`,
      });
    },
  },

  user: {
    additionalFields: {
      role: {
        type: "string",
        defaultValue: "user",
        input: false,
      },
    },
  },

  databaseHooks: {
    user: {
      create: {
        after: async (user) => {
          await writeAuditLog({
            action: "user.signup",
            userId: user.id,
            metadata: { email: user.email },
          });
        },
      },
    },
    session: {
      create: {
        after: async (session) => {
          await writeAuditLog({
            action: "user.signin",
            userId: session.userId,
          });
        },
      },
    },
  },
});

export type Session = typeof auth.$Infer.Session;
