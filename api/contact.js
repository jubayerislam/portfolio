const TELEGRAM_API_BASE = "https://api.telegram.org";

function buildTelegramMessage({ name, email, subject, message }) {
  return [
    "New contact form submission",
    "",
    `Name: ${name}`,
    `Email: ${email}`,
    `Subject: ${subject}`,
    "Message:",
    message,
  ].join("\n");
}

function sendJson(response, data, status = 200) {
  response.status(status).json(data);
}

function getBody(request) {
  if (!request.body) {
    return {};
  }

  if (typeof request.body === "string") {
    return JSON.parse(request.body);
  }

  return request.body;
}

export default async function handler(request, response) {
  if (request.method !== "POST") {
    return sendJson(response, { message: "Method not allowed" }, 405);
  }

  const botToken = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_CHAT_ID;

  if (!botToken || !chatId) {
    return sendJson(response, { message: "Server is not configured" }, 500);
  }

  try {
    const { name, email, subject, message } = getBody(request);

    if (!name || !email || !subject || !message) {
      return sendJson(response, { message: "All fields are required" }, 400);
    }

    const telegramResponse = await fetch(
      `${TELEGRAM_API_BASE}/bot${botToken}/sendMessage`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          chat_id: chatId,
          text: buildTelegramMessage({ name, email, subject, message }),
        }),
      }
    );

    if (!telegramResponse.ok) {
      const errorText = await telegramResponse.text();
      console.error("Telegram API error:", errorText);
      return sendJson(response, { message: "Failed to send message" }, 502);
    }

    return sendJson(response, { message: "Message sent successfully" });
  } catch (error) {
    console.error("Contact API error:", error);
    return sendJson(response, { message: "Invalid request" }, 400);
  }
}
