
const express = require('express');
const router = express.Router();
const { handleChatRequest } = require('../controllers/chatController');

router.post('/ask-jarvis', handleChatRequest);

module.exports = router;
