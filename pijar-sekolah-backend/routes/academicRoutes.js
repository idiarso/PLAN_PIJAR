const express = require('express');
const { Academic } = require('../models/Academic');
const router = express.Router();

// Get all academics
router.get('/', async (req, res) => {
  try {
    const academics = await Academic.findAll();
    res.json(academics);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch academics' });
  }
});

// Get academic by id
router.get('/:id', async (req, res) => {
  try {
    const academic = await Academic.findByPk(req.params.id);
    if (!academic) return res.status(404).json({ error: 'Academic not found' });
    res.json(academic);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch academic' });
  }
});

// Create new academic
router.post('/', async (req, res) => {
  try {
    const newAcademic = await Academic.create(req.body);
    res.status(201).json(newAcademic);
  } catch (err) {
    res.status(400).json({ error: 'Failed to create academic' });
  }
});

// Update academic
router.put('/:id', async (req, res) => {
  try {
    const [updated] = await Academic.update(req.body, { where: { id: req.params.id } });
    if (!updated) return res.status(404).json({ error: 'Academic not found' });
    const updatedAcademic = await Academic.findByPk(req.params.id);
    res.json(updatedAcademic);
  } catch (err) {
    res.status(400).json({ error: 'Failed to update academic' });
  }
});

// Delete academic
router.delete('/:id', async (req, res) => {
  try {
    const deleted = await Academic.destroy({ where: { id: req.params.id } });
    if (!deleted) return res.status(404).json({ error: 'Academic not found' });
    res.status(204).send();
  } catch (err) {
    res.status(500).json({ error: 'Failed to delete academic' });
  }
});

module.exports = router;
