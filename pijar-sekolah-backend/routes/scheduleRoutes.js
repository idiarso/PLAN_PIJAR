const express = require('express');
const { Schedule } = require('../models/Schedule');
const router = express.Router();

// Get all schedules
router.get('/', async (req, res) => {
  try {
    const schedules = await Schedule.findAll();
    res.json(schedules);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch schedules' });
  }
});

// Get schedule by id
router.get('/:id', async (req, res) => {
  try {
    const schedule = await Schedule.findByPk(req.params.id);
    if (!schedule) return res.status(404).json({ error: 'Schedule not found' });
    res.json(schedule);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch schedule' });
  }
});

// Create new schedule
router.post('/', async (req, res) => {
  try {
    const newSchedule = await Schedule.create(req.body);
    res.status(201).json(newSchedule);
  } catch (err) {
    res.status(400).json({ error: 'Failed to create schedule' });
  }
});

// Update schedule
router.put('/:id', async (req, res) => {
  try {
    const [updated] = await Schedule.update(req.body, { where: { id: req.params.id } });
    if (!updated) return res.status(404).json({ error: 'Schedule not found' });
    const updatedSchedule = await Schedule.findByPk(req.params.id);
    res.json(updatedSchedule);
  } catch (err) {
    res.status(400).json({ error: 'Failed to update schedule' });
  }
});

// Delete schedule
router.delete('/:id', async (req, res) => {
  try {
    const deleted = await Schedule.destroy({ where: { id: req.params.id } });
    if (!deleted) return res.status(404).json({ error: 'Schedule not found' });
    res.status(204).send();
  } catch (err) {
    res.status(500).json({ error: 'Failed to delete schedule' });
  }
});

module.exports = router;
