const express = require('express');
const { ReportCard } = require('../models/ReportCard');
const router = express.Router();

// Get all report cards
router.get('/', async (req, res) => {
  try {
    const reportCards = await ReportCard.findAll();
    res.json(reportCards);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch report cards' });
  }
});

// Get report card by id
router.get('/:id', async (req, res) => {
  try {
    const reportCard = await ReportCard.findByPk(req.params.id);
    if (!reportCard) return res.status(404).json({ error: 'Report card not found' });
    res.json(reportCard);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch report card' });
  }
});

// Create new report card
router.post('/', async (req, res) => {
  try {
    const newReportCard = await ReportCard.create(req.body);
    res.status(201).json(newReportCard);
  } catch (err) {
    res.status(400).json({ error: 'Failed to create report card' });
  }
});

// Update report card
router.put('/:id', async (req, res) => {
  try {
    const [updated] = await ReportCard.update(req.body, { where: { id: req.params.id } });
    if (!updated) return res.status(404).json({ error: 'Report card not found' });
    const updatedReportCard = await ReportCard.findByPk(req.params.id);
    res.json(updatedReportCard);
  } catch (err) {
    res.status(400).json({ error: 'Failed to update report card' });
  }
});

// Delete report card
router.delete('/:id', async (req, res) => {
  try {
    const deleted = await ReportCard.destroy({ where: { id: req.params.id } });
    if (!deleted) return res.status(404).json({ error: 'Report card not found' });
    res.status(204).send();
  } catch (err) {
    res.status(500).json({ error: 'Failed to delete report card' });
  }
});

module.exports = router;
