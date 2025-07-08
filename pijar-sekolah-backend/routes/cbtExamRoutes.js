const express = require('express');
const { CBTExam } = require('../models/CBTExam');
const router = express.Router();

// Get all CBT exams
router.get('/', async (req, res) => {
  try {
    const exams = await CBTExam.findAll();
    res.json(exams);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch CBT exams' });
  }
});

// Get CBT exam by id
router.get('/:id', async (req, res) => {
  try {
    const exam = await CBTExam.findByPk(req.params.id);
    if (!exam) return res.status(404).json({ error: 'CBT exam not found' });
    res.json(exam);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch CBT exam' });
  }
});

// Create new CBT exam
router.post('/', async (req, res) => {
  try {
    const newExam = await CBTExam.create(req.body);
    res.status(201).json(newExam);
  } catch (err) {
    res.status(400).json({ error: 'Failed to create CBT exam' });
  }
});

// Update CBT exam
router.put('/:id', async (req, res) => {
  try {
    const [updated] = await CBTExam.update(req.body, { where: { id: req.params.id } });
    if (!updated) return res.status(404).json({ error: 'CBT exam not found' });
    const updatedExam = await CBTExam.findByPk(req.params.id);
    res.json(updatedExam);
  } catch (err) {
    res.status(400).json({ error: 'Failed to update CBT exam' });
  }
});

// Delete CBT exam
router.delete('/:id', async (req, res) => {
  try {
    const deleted = await CBTExam.destroy({ where: { id: req.params.id } });
    if (!deleted) return res.status(404).json({ error: 'CBT exam not found' });
    res.status(204).send();
  } catch (err) {
    res.status(500).json({ error: 'Failed to delete CBT exam' });
  }
});

module.exports = router;
