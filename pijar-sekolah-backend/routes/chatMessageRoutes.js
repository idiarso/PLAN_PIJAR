const express = require('express');
const { ChatMessage } = require('../models/ChatMessage');
const router = express.Router();

// Get all chat messages
router.get('/', async (req, res) => {
  try {
    const chatMessages = await ChatMessage.findAll();
    res.json(chatMessages);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch chat messages' });
  }
});

// Get chat message by id
router.get('/:id', async (req, res) => {
  try {
    const chatMessage = await ChatMessage.findByPk(req.params.id);
    if (!chatMessage) return res.status(404).json({ error: 'Chat message not found' });
    res.json(chatMessage);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch chat message' });
  }
});

// Create new chat message
router.post('/', async (req, res) => {
  try {
    const newChatMessage = await ChatMessage.create(req.body);
    res.status(201).json(newChatMessage);
  } catch (err) {
    res.status(400).json({ error: 'Failed to create chat message' });
  }
});

// Update chat message
router.put('/:id', async (req, res) => {
  try {
    const [updated] = await ChatMessage.update(req.body, { where: { id: req.params.id } });
    if (!updated) return res.status(404).json({ error: 'Chat message not found' });
    const updatedChatMessage = await ChatMessage.findByPk(req.params.id);
    res.json(updatedChatMessage);
  } catch (err) {
    res.status(400).json({ error: 'Failed to update chat message' });
  }
});

// Delete chat message
router.delete('/:id', async (req, res) => {
  try {
    const deleted = await ChatMessage.destroy({ where: { id: req.params.id } });
    if (!deleted) return res.status(404).json({ error: 'Chat message not found' });
    res.status(204).send();
  } catch (err) {
    res.status(500).json({ error: 'Failed to delete chat message' });
  }
});

module.exports = router;
