const express = require('express');
const { ReferenceReading } = require('../models/ReferenceReading');
const router = express.Router();

// Get all reference readings
router.get('/', async (req, res) => {
  try {
    const referenceReadings = await ReferenceReading.findAll();
    res.json(referenceReadings);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch reference readings' });
  }
});

// Get reference reading by id
router.get('/:id', async (req, res) => {
  try {
    const referenceReading = await ReferenceReading.findByPk(req.params.id);
    if (!referenceReading) return res.status(404).json({ error: 'Reference reading not found' });
    res.json(referenceReading);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch reference reading' });
  }
});

// Create new reference reading
router.post('/', async (req, res) => {
  try {
    const newReferenceReading = await ReferenceReading.create(req.body);
    res.status(201).json(newReferenceReading);
  } catch (err) {
    res.status(400).json({ error: 'Failed to create reference reading' });
  }
});

// Update reference reading
router.put('/:id', async (req, res) => {
  try {
    const [updated] = await ReferenceReading.update(req.body, { where: { id: req.params.id } });
    if (!updated) return res.status(404).json({ error: 'Reference reading not found' });
    const updatedReferenceReading = await ReferenceReading.findByPk(req.params.id);
    res.json(updatedReferenceReading);
  } catch (err) {
    res.status(400).json({ error: 'Failed to update reference reading' });
  }
});

// Delete reference reading
router.delete('/:id', async (req, res) => {
  try {
    const deleted = await ReferenceReading.destroy({ where: { id: req.params.id } });
    if (!deleted) return res.status(404).json({ error: 'Reference reading not found' });
    res.status(204).send();
  } catch (err) {
    res.status(500).json({ error: 'Failed to delete reference reading' });
  }
});

module.exports = router;
