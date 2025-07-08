const express = require('express');
const { Content } = require('../models/Content');
const router = express.Router();

// Get all contents
router.get('/', async (req, res) => {
  try {
    const contents = await Content.findAll();
    res.json(contents);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch contents' });
  }
});

// Get content by id
router.get('/:id', async (req, res) => {
  try {
    const content = await Content.findByPk(req.params.id);
    if (!content) return res.status(404).json({ error: 'Content not found' });
    res.json(content);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch content' });
  }
});

// Create new content
router.post('/', async (req, res) => {
  try {
    const newContent = await Content.create(req.body);
    res.status(201).json(newContent);
  } catch (err) {
    res.status(400).json({ error: 'Failed to create content' });
  }
});

// Update content
router.put('/:id', async (req, res) => {
  try {
    const [updated] = await Content.update(req.body, { where: { id: req.params.id } });
    if (!updated) return res.status(404).json({ error: 'Content not found' });
    const updatedContent = await Content.findByPk(req.params.id);
    res.json(updatedContent);
  } catch (err) {
    res.status(400).json({ error: 'Failed to update content' });
  }
});

// Delete content
router.delete('/:id', async (req, res) => {
  try {
    const deleted = await Content.destroy({ where: { id: req.params.id } });
    if (!deleted) return res.status(404).json({ error: 'Content not found' });
    res.status(204).send();
  } catch (err) {
    res.status(500).json({ error: 'Failed to delete content' });
  }
});

module.exports = router;
