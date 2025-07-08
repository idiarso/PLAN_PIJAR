const express = require('express');
const { ExamRoom } = require('../models/ExamRoom');
const router = express.Router();

// Get all exam rooms
router.get('/', async (req, res) => {
  try {
    const examRooms = await ExamRoom.findAll();
    res.json(examRooms);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch exam rooms' });
  }
});

// Get exam room by id
router.get('/:id', async (req, res) => {
  try {
    const examRoom = await ExamRoom.findByPk(req.params.id);
    if (!examRoom) return res.status(404).json({ error: 'Exam room not found' });
    res.json(examRoom);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch exam room' });
  }
});

// Create new exam room
router.post('/', async (req, res) => {
  try {
    const newExamRoom = await ExamRoom.create(req.body);
    res.status(201).json(newExamRoom);
  } catch (err) {
    res.status(400).json({ error: 'Failed to create exam room' });
  }
});

// Update exam room
router.put('/:id', async (req, res) => {
  try {
    const [updated] = await ExamRoom.update(req.body, { where: { id: req.params.id } });
    if (!updated) return res.status(404).json({ error: 'Exam room not found' });
    const updatedExamRoom = await ExamRoom.findByPk(req.params.id);
    res.json(updatedExamRoom);
  } catch (err) {
    res.status(400).json({ error: 'Failed to update exam room' });
  }
});

// Delete exam room
router.delete('/:id', async (req, res) => {
  try {
    const deleted = await ExamRoom.destroy({ where: { id: req.params.id } });
    if (!deleted) return res.status(404).json({ error: 'Exam room not found' });
    res.status(204).send();
  } catch (err) {
    res.status(500).json({ error: 'Failed to delete exam room' });
  }
});

module.exports = router;
