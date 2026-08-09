/**
 * Optional Telegram notification channel for new contact-form requests.
 * Configure both TELEGRAM_BOT_TOKEN and TELEGRAM_CHAT_ID to enable it.
 */
export async function sendTelegramContactNotification(params: {
  name: string;
  email: string;
  phone?: string;
  message: string;
}): Promise<void> {
  const token = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_CHAT_ID;

  if (!token || !chatId) return;

  const text = [
    "Nauja užklausa iš sitestudio.lt",
    "",
    `Vardas: ${params.name}`,
    `El. paštas: ${params.email}`,
    `Telefonas: ${params.phone || "—"}`,
    "",
    "Žinutė:",
    params.message,
  ].join("\n");

  const response = await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify({
      chat_id: chatId,
      text,
      disable_web_page_preview: true,
    }),
  });

  if (!response.ok) {
    throw new Error(`Telegram delivery failed (HTTP ${response.status}).`);
  }
}
