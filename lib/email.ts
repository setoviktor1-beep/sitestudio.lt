import nodemailer from "nodemailer";

/**
 * SMTP transport configured entirely through environment variables.
 *
 * If SMTP_HOST is not set (local development without a mail server),
 * emails are printed to the server console instead of being sent,
 * so verification / reset links remain reachable during development.
 */
const smtpConfigured = Boolean(process.env.SMTP_HOST);

const transporter = smtpConfigured
  ? nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT ?? 587),
      secure: process.env.SMTP_SECURE === "true", // true for port 465, false for 587/STARTTLS
      auth: process.env.SMTP_USER
        ? { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS }
        : undefined,
    })
  : null;

export async function sendMail(params: {
  to: string;
  subject: string;
  text: string;
  html?: string;
}): Promise<void> {
  const from = process.env.SMTP_FROM ?? "no-reply@example.com";

  if (!transporter) {
    console.log(
      `[email] SMTP not configured — would send to ${params.to}\n` +
        `  Subject: ${params.subject}\n  Body:\n${params.text}`
    );
    return;
  }

  await transporter.sendMail({
    from,
    to: params.to,
    subject: params.subject,
    text: params.text,
    html: params.html,
  });
}
