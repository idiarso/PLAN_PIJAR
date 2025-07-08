const express = require('express');
const { Grade } = require('../models/Grade');
const router = express.Router();

// Get all grades
router.get('/', async (req, res) => {
  try {
    const grades = await Grade.findAll();
    res.json(grades);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch grades' });
  }
});

// Get grade by id
router.get('/:id', async (req, res) => {
  try {
    const grade = await Grade.findByPk(req.params.id);
    if (!grade) return res.status(404).json({ error: 'Grade not found' });
    res.json(grade);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch grade' });
  }
});

// Create new grade
router.post('/', async (req, res) => {
  try {
    const newGrade = await Grade.create(req.body);
    res.status(201).json(newGrade);
  } catch (err) {
    res.status(400).json({ error: 'Failed to create grade' });
  }
});

// Update grade
router.put('/:id', async (req, res) => {
  try {
    const [updated] = await Grade.update(req.body, { where: { id: req.params.id } });
    if (!updated) return res.status(404).json({ error: 'Grade not found' });
    const updatedGrade = await Grade.findByPk(req.params.id);
    res.json(updatedGrade);
  } catch (err) {
    res.status(400).json({ error: 'Failed to update grade' });
  }
});

// Delete grade
router.delete('/:id', async (req, res) => {
  try {
    const deleted = await Grade.destroy({ where: { id: req.params.id } });
    if (!deleted) return res.status(404).json({ error: 'Grade not found' });
    res.status(204).send();
  } catch (err) {
    res.status(500).json({ error: 'Failed to delete grade' });
  }
});

module.exports = router;
