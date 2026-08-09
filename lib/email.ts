import nodemailer from "nodemailer";

/**
 * Email delivery can use Brevo's HTTPS API or an SMTP transport.
 *
 * Brevo is preferred when BREVO_API_KEY is set. This avoids relying on
 * outbound SMTP ports, which some VPS providers restrict. SMTP remains a
 * fallback for installations that do not use Brevo.
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

function sender() {
  const from = process.env.BREVO_SENDER ?? process.env.SMTP_FROM ?? "no-reply@example.com";
  const match = from.match(/^(.*?)\s*<([^>]+)>$/);

  return match
    ? { name: match[1].trim() || undefined, email: match[2].trim() }
    : { email: from.trim() };
}

async function sendWithBrevo(params: {
  to: string;
  subject: string;
  text: string;
  html?: string;
}): Promise<void> {
  const response = await fetch("https://api.brevo.com/v3/smtp/email", {
    method: "POST",
    headers: {
      "api-key": process.env.BREVO_API_KEY!,
      "content-type": "application/json",
    },
    body: JSON.stringify({
      sender: sender(),
      to: [{ email: params.to }],
      subject: params.subject,
      textContent: params.text,
      ...(params.html ? { htmlContent: params.html } : {}),
    }),
  });

  if (!response.ok) {
    // Do not include response details: they can contain account metadata.
    throw new Error(`Brevo delivery failed (HTTP ${response.status}).`);
  }
}

export async function sendMail(params: {
  to: string;
  subject: string;
  text: string;
  html?: string;
}): Promise<void> {
  if (process.env.BREVO_API_KEY) {
    await sendWithBrevo(params);
    return;
  }

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
