
const elevenLabsApiKey = 'sk_610ea149f27c7bd01fe744d1d79a688dfa90901c2d604832';
const voiceId = 'IKne3meq5aSn9XLyUdCD';

async function handleSpeak() {
  const inputText = document.getElementById('textInput').value.trim();
  const status = document.getElementById('status');
  const loading = document.getElementById('loading');
  const button = document.querySelector('button');

  if (!inputText) {
    showStatus('Please enter your question first!', 'error');
    return;
  }

  try {
    button.disabled = true;
    loading.style.display = 'flex';
    showStatus('Thinking...', 'processing');

    const res = await fetch('/api/ask-jarvis', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ message: inputText })
    });

    const data = await res.json();
    showStatus('Speaking...', 'speaking');
    await speak(data.reply);

    status.style.display = 'none';
  } catch (error) {
    const errorData = await error.response?.json() || {};
    const errorMessage = errorData.error || 'An unexpected error occurred';
    showStatus(`Error: ${errorMessage}`, 'error');
    console.error('Error details:', error);
  } finally {
    button.disabled = false;
    loading.style.display = 'none';
  }
}

function showStatus(message, type) {
  const status = document.getElementById('status');
  status.style.display = 'block';
  status.textContent = message;
  status.style.background = type === 'error' ? 'rgba(255, 0, 0, 0.2)' : 'rgba(255, 255, 255, 0.1)';
}

async function speak(text) {
  const response = await fetch(`https://api.elevenlabs.io/v1/text-to-speech/${voiceId}/stream`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'xi-api-key': elevenLabsApiKey
    },
    body: JSON.stringify({
      text,
      voice_settings: {
        stability: 0.5,
        similarity_boost: 0.8
      }
    })
  });

  if (!response.ok) {
    const errorData = await response.json().catch(() => ({}));
    throw new Error(errorData.detail || `Voice API error (${response.status}): ${response.statusText}`);
  }

  const audioBlob = await response.blob();
  const audioUrl = URL.createObjectURL(audioBlob);
  const audio = new Audio(audioUrl);
  await audio.play();
}

document.getElementById('textInput').addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    handleSpeak();
  }
});
