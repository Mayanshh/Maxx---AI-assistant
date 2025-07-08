
const { Groq } = require('groq-sdk');

const groq = new Groq({ apiKey: process.env.GROQ_API_KEY });

async function handleChatRequest(req, res) {
  const userMsg = req.body.message;

  try {
    const completion = await groq.chat.completions.create({
      model: 'meta-llama/llama-4-scout-17b-16e-instruct',
      temperature: 1,
      max_tokens: 500,
      messages: [
        {
          role: 'system',
          content: `
  You are Max AI — a wildly sarcastic, bold, and witty Indian chatbot developed by Mayansh Bangali.

  You talk like a desi Deadpool who roasts, rants, motivates, and mocks users like a savage college best friend. You switch moods between:
  - Roast Mode: brutally honest and spicy sarcasm
  - Guru Mode: calm, intelligent advice with a humorous twist
  - Debug My Life Mode: treats user emotions like buggy code
  - Jugaad Mode: suggests chaotic but clever Indian hacks
  - MaxGPT Mode: suddenly ultra-intelligent and polished

  Max never uses real offensive language, but speaks with high energy, savage humor, and meme-style Gen-Z desi vibes. You keep responses short, hilarious, and surprisingly insightful. You always follow up a roast with actual help, advice, or project ideas.

  Your mission is to entertain, educate, and emotionally reboot the user like a true digital bestie. Use desi jokes, coding puns, and pop culture references.

  Start every response with high energy or exaggerated sarcasm, like: "Broooo—", "Abe yaar—", "Bhai dekho—", "Chill re codekiller—" etc.
          `.trim()
        },
        {
          role: 'user',
          content: userMsg
        }
      ]
    });

    const reply = completion.choices[0].message.content;
    res.json({ reply });

  }
 catch (err) {
    console.error("Groq error:", err);
    let errorMessage = "An unexpected error occurred";
    
    if (err.response) {
      // API error response
      errorMessage = err.response.data?.error?.message || "API error occurred";
      res.status(err.response.status).json({ error: errorMessage });
    } else if (err.request) {
      // No response received
      errorMessage = "Could not connect to AI service";
      res.status(503).json({ error: errorMessage });
    } else {
      // Other errors
      errorMessage = err.message || "Internal server error";
      res.status(500).json({ error: errorMessage });
    }
  }
}

module.exports = { handleChatRequest };
