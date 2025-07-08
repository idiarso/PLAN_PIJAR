const express = require('express');
const { ExamSchedule } = require('../models/ExamSchedule');
const router = express.Router();

// Get all exam schedules
router.get('/', async (req, res) => {
  try {
    const examSchedules = await ExamSchedule.findAll();
    res.json(examSchedules);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch exam schedules' });
  }
});

// Get exam schedule by id
router.get('/:id', async (req, res) => {
  try {
    const examSchedule = await ExamSchedule.findByPk(req.params.id);
    if (!examSchedule) return res.status(404).json({ error: 'Exam schedule not found' });
    res.json(examSchedule);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch exam schedule' });
  }
});

// Create new exam schedule
router.post('/', async (req, res) => {
  try {
    const newExamSchedule = await ExamSchedule.create(req.body);
    res.status(201).json(newExamSchedule);
  } catch (err) {
    res.status(400).json({ error: 'Failed to create exam schedule' });
  }
});

// Update exam schedule
router.put('/:id', async (req, res) => {
  try {
    const [updated] = await ExamSchedule.update(req.body, { where: { id: req.params.id } });
    if (!updated) return res.status(404).json({ error: 'Exam schedule not found' });
    const updatedExamSchedule = await ExamSchedule.findByPk(req.params.id);
    res.json(updatedExamSchedule);
  } catch (err) {
    res.status(400).json({ error: 'Failed to update exam schedule' });
  }
});

// Delete exam schedule
router.delete('/:id', async (req, res) => {
  try {
    const deleted = await ExamSchedule.destroy({ where: { id: req.params.id } });
    if (!deleted) return res.status(404).json({ error: 'Exam schedule not found' });
    res.status(204).send();
  } catch (err) {
    res.status(500).json({ error: 'Failed to delete exam schedule' });
  }
});

module.exports = router;
