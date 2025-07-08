# Maxx — AI Assistant 🤖🔥

**Maxx** is a bold, intelligent, and hilariously sarcastic AI assistant built with [Groq's LLaMA 4 model](https://groq.com/), designed by [Mayansh Bangali](https://github.com/Mayanshh). It's not your typical chatbot — Maxx roasts you, guides you, and drops savage advice with chaotic energy.

Built to be funny, lightweight, and fast, Maxx runs entirely on a Node.js + Express backend and a clean frontend UI, calling the Groq API dynamically.

---

## 💡 Key Features

- 🎭 Sarcastic Indian personality AI assistant (`Maxx`)
- 🔥 Powered by `Groq` + `LLaMA 4 Scout 17B`
- 🌐 REST API with dynamic prompt injection
- ⚡ Lightweight, blazing fast response using `Groq API`
- 💬 Easily extendable character/persona setup
- 💻 Minimal and responsive frontend UI

---

## 🛠 Tech Stack

| Layer       | Technology               |
|-------------|--------------------------|
| Backend     | Node.js, Express         |
| Frontend    | HTML, CSS, JS            |
| AI Model    | LLaMA 4 via Groq API     |
| Hosting     | GitHub (currently)       |
| Security    | dotenv, .env, push rules |

---

## 📁 Project Structure

Maxx---AI-assistant/
├── index.js # Entry point for backend
├── .env # API Key config (not committed)
├── public/
│ ├── index.html # Frontend UI
│ ├── style.css # UI styling
│ └── script.js # Main JS logic
├── src/
│ └── controllers/
│ └── chatController.js # Groq API interaction
├── package.json
└── README.md


---

## ⚙️ Setup & Run Locally

### 1. Clone the repo

```bash
git clone https://github.com/Mayanshh/Maxx---AI-assistant.git
cd Maxx---AI-assistant
2. Install dependencies
npm install
3. Set your Groq API key
Create a .env file:

touch .env
Add your API key:

GROQ_API_KEY=your_groq_api_key_here
4. Start the server
node index.js
Visit: http://localhost:3000

🧠 Prompt Template

Maxx is configured with a unique prompt:

You are a funny, bold, intelligent, sarcastic Indian character developed by Mayansh Bangali. You use strong language, humor, and wit. Start every sentence with a cuss word and deliver savage yet helpful responses.
You can edit this inside chatController.js.

🚀 Deployment

Compatible with platforms like Render, Railway, or Vercel
Make sure .env is configured securely and .gitignore is updated
📌 TODO / Future Plans

🧠 Integrate memory/context storage (Vector DB)
⚙️ Add command modes (/motivate, /debug, /roast)
🌍 Deploy full-stack version with frontend hosting
🤝 Contributions

Pull requests welcome! Make Maxx even more badass.

🧑‍💻 Author

Mayansh Bangali
 [LinkedIn](https://in.linkedin.com/in/mayansh-bangali-17ab86331)

📢 Disclaimer

Maxx may use offensive language as part of its personality. It's intentionally designed for humor and not meant for professional use.

🌟 Star this project if Maxx roasted you into productivity 💪

