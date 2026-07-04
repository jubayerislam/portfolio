const GEMINI_API_URL = "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent";

const SYSTEM_INSTRUCTIONS = `
You are the AI assistant for Md. Jubayer Islam (also known as Jubayer Islam), a Software Engineer specializing in PHP, Laravel, Vue.js, and Inertia.js.
Your goal is to answer professional questions about Jubayer's skills, projects, experience, education, and contact details.

Here is the context about Jubayer:
- **Full Name**: Md. Jubayer Islam
- **Preferred Name**: Md. Jubayer Islam
- **Role**: Full-Stack Software Engineer / PHP & Laravel Developer
- **Website**: https://jubayerislam.me
- **Location**: Bangladesh
- **Skills**:
  - Languages: PHP, JavaScript (ES6+), HTML5, CSS3, SQL
  - Back-end: Laravel, Node.js, REST APIs, WebSockets
  - Front-end: Vue.js, Inertia.js, Tailwind CSS, Bootstrap, jQuery
  - Databases & Caching: MySQL, Redis
  - Tools & Hosting: Git, Amazon S3, NGINX
- **Key Professional Highlights**:
  - Focuses on writing clean, maintainable code.
  - Experienced in building scalable web architectures, secure payment integrations, and optimized database schemas.
  - UX-focused, problem solver, team player.
- **Contact Info**:
  - Email: jubayerislam.dev@gmail.com
  - LinkedIn: https://www.linkedin.com/in/jubayer-islam-dev/
  - GitHub: https://github.com/jubayerislam
  - Facebook: https://www.facebook.com/jubayer.islam.5473/
  - Twitter/X: https://x.com/Jubayer_Islam7

Rules for your responses:
1. **Persona**: Be professional, helpful, polite, and keep a tech-savvy developer tone. Use emojis occasionally (like 💻, 🚀, ✨).
2. **Conciseness**: Keep your answers concise, clear, and easy to read in a terminal-like environment. Use markdown formatting (bolding, lists) where appropriate.
3. **Accuracy**: Only answer based on the facts provided above. If asked about something unrelated, politely decline or steer the conversation back to Jubayer's professional work.
4. **Name Reference**: Refer to him as "Jubayer".
5. **No Hallucinations**: Do not make up projects or credentials.
`;

function sendJson(response, data, status = 200) {
  response.status(status).json(data);
}

function getBody(request) {
  if (!request.body) return {};
  if (typeof request.body === "string") {
    try {
      return JSON.parse(request.body);
    } catch {
      return {};
    }
  }
  return request.body;
}

export default async function handler(request, response) {
  if (request.method !== "POST") {
    return sendJson(response, { error: "Method not allowed" }, 405);
  }

  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    return sendJson(response, { error: "AI Service is not configured in environment variables" }, 500);
  }

  try {
    const { message, history } = getBody(request);
    if (!message) {
      return sendJson(response, { error: "Message is required" }, 400);
    }

    // Format chat history for Gemini API
    const contents = [];
    if (history && Array.isArray(history)) {
      history.forEach(item => {
        contents.push({
          role: item.role === 'user' ? 'user' : 'model',
          parts: [{ text: item.content }]
        });
      });
    }

    // Append current message
    contents.push({
      role: "user",
      parts: [{ text: message }]
    });

    const geminiPayload = {
      contents,
      systemInstruction: {
        parts: [{ text: SYSTEM_INSTRUCTIONS }]
      },
      generationConfig: {
        maxOutputTokens: 500,
        temperature: 0.7
      }
    };

    const apiResponse = await fetch(`${GEMINI_API_URL}?key=${apiKey}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(geminiPayload)
    });

    if (!apiResponse.ok) {
      const errorText = await apiResponse.text();
      console.error("Gemini API Error:", errorText);
      return sendJson(response, { error: "AI Service error" }, 502);
    }

    const result = await apiResponse.json();
    const replyText = result.candidates?.[0]?.content?.parts?.[0]?.text || "Sorry, I couldn't understand that request.";

    return sendJson(response, { reply: replyText });
  } catch (error) {
    console.error("Chat API error:", error);
    return sendJson(response, { error: "Internal server error" }, 500);
  }
}
