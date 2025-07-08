const express = require('express');
const { Report } = require('../models/Report');
const router = express.Router();

// Get all reports
router.get('/', async (req, res) => {
  try {
    const reports = await Report.findAll();
    res.json(reports);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch reports' });
  }
});

// Get report by id
router.get('/:id', async (req, res) => {
  try {
    const report = await Report.findByPk(req.params.id);
    if (!report) return res.status(404).json({ error: 'Report not found' });
    res.json(report);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch report' });
  }
});

// Create new report
router.post('/', async (req, res) => {
  try {
    const newReport = await Report.create(req.body);
    res.status(201).json(newReport);
  } catch (err) {
    res.status(400).json({ error: 'Failed to create report' });
  }
});

// Update report
router.put('/:id', async (req, res) => {
  try {
    const [updated] = await Report.update(req.body, { where: { id: req.params.id } });
    if (!updated) return res.status(404).json({ error: 'Report not found' });
    const updatedReport = await Report.findByPk(req.params.id);
    res.json(updatedReport);
  } catch (err) {
    res.status(400).json({ error: 'Failed to update report' });
  }
});

// Delete report
router.delete('/:id', async (req, res) => {
  try {
    const deleted = await Report.destroy({ where: { id: req.params.id } });
    if (!deleted) return res.status(404).json({ error: 'Report not found' });
    res.status(204).send();
  } catch (err) {
    res.status(500).json({ error: 'Failed to delete report' });
  }
});

module.exports = router;
