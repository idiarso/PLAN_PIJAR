const express = require('express');
const { VirtualClassroom } = require('../models/VirtualClassroom');
const router = express.Router();

// Get all virtual classrooms
router.get('/', async (req, res) => {
  try {
    const virtualClassrooms = await VirtualClassroom.findAll();
    res.json(virtualClassrooms);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch virtual classrooms' });
  }
});

// Get virtual classroom by id
router.get('/:id', async (req, res) => {
  try {
    const virtualClassroom = await VirtualClassroom.findByPk(req.params.id);
    if (!virtualClassroom) return res.status(404).json({ error: 'Virtual classroom not found' });
    res.json(virtualClassroom);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch virtual classroom' });
  }
});

// Create new virtual classroom
router.post('/', async (req, res) => {
  try {
    const newVirtualClassroom = await VirtualClassroom.create(req.body);
    res.status(201).json(newVirtualClassroom);
  } catch (err) {
    res.status(400).json({ error: 'Failed to create virtual classroom' });
  }
});

// Update virtual classroom
router.put('/:id', async (req, res) => {
  try {
    const [updated] = await VirtualClassroom.update(req.body, { where: { id: req.params.id } });
    if (!updated) return res.status(404).json({ error: 'Virtual classroom not found' });
    const updatedVirtualClassroom = await VirtualClassroom.findByPk(req.params.id);
    res.json(updatedVirtualClassroom);
  } catch (err) {
    res.status(400).json({ error: 'Failed to update virtual classroom' });
  }
});

// Delete virtual classroom
router.delete('/:id', async (req, res) => {
  try {
    const deleted = await VirtualClassroom.destroy({ where: { id: req.params.id } });
    if (!deleted) return res.status(404).json({ error: 'Virtual classroom not found' });
    res.status(204).send();
  } catch (err) {
    res.status(500).json({ error: 'Failed to delete virtual classroom' });
  }
});

module.exports = router;
