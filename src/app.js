
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
require('dotenv').config();

const chatRoutes = require('./routes/chatRoutes');

const app = express();

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));

// API routes
app.use('/api', chatRoutes);

// Serve the main page
app.get('/', (req, res) => {
  const html = `
    <script>
      window.ELEVEN_LABS_API_KEY = "${process.env.ELEVEN_LABS_API_KEY}";
      window.VOICE_ID = "${process.env.VOICE_ID}";
    </script>
  `;
  res.send(html + require('fs').readFileSync(path.join(__dirname, 'views', 'index.html'), 'utf8'));
});

module.exports = app;
