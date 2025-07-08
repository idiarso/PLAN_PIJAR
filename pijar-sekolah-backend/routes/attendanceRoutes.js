const express = require('express');
const { Attendance } = require('../models/Attendance');
const router = express.Router();

// Get all attendances
router.get('/', async (req, res) => {
  try {
    const attendances = await Attendance.findAll();
    res.json(attendances);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch attendances' });
  }
});

// Get attendance by id
router.get('/:id', async (req, res) => {
  try {
    const attendance = await Attendance.findByPk(req.params.id);
    if (!attendance) return res.status(404).json({ error: 'Attendance not found' });
    res.json(attendance);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch attendance' });
  }
});

// Create new attendance
router.post('/', async (req, res) => {
  try {
    const newAttendance = await Attendance.create(req.body);
    res.status(201).json(newAttendance);
  } catch (err) {
    res.status(400).json({ error: 'Failed to create attendance' });
  }
});

// Update attendance
router.put('/:id', async (req, res) => {
  try {
    const [updated] = await Attendance.update(req.body, { where: { id: req.params.id } });
    if (!updated) return res.status(404).json({ error: 'Attendance not found' });
    const updatedAttendance = await Attendance.findByPk(req.params.id);
    res.json(updatedAttendance);
  } catch (err) {
    res.status(400).json({ error: 'Failed to update attendance' });
  }
});

// Delete attendance
router.delete('/:id', async (req, res) => {
  try {
    const deleted = await Attendance.destroy({ where: { id: req.params.id } });
    if (!deleted) return res.status(404).json({ error: 'Attendance not found' });
    res.status(204).send();
  } catch (err) {
    res.status(500).json({ error: 'Failed to delete attendance' });
  }
});

module.exports = router;
