const express = require('express');
const { School } = require('../models/School');
const router = express.Router();

// Get all schools
router.get('/', async (req, res) => {
  try {
    const schools = await School.findAll();
    res.json(schools);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch schools' });
  }
});

// Get school by id
router.get('/:id', async (req, res) => {
  try {
    const school = await School.findByPk(req.params.id);
    if (!school) return res.status(404).json({ error: 'School not found' });
    res.json(school);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch school' });
  }
});

// Create new school
router.post('/', async (req, res) => {
  try {
    const newSchool = await School.create(req.body);
    res.status(201).json(newSchool);
  } catch (err) {
    res.status(400).json({ error: 'Failed to create school' });
  }
});

// Update school
router.put('/:id', async (req, res) => {
  try {
    const [updated] = await School.update(req.body, { where: { id: req.params.id } });
    if (!updated) return res.status(404).json({ error: 'School not found' });
    const updatedSchool = await School.findByPk(req.params.id);
    res.json(updatedSchool);
  } catch (err) {
    res.status(400).json({ error: 'Failed to update school' });
  }
});

// Delete school
router.delete('/:id', async (req, res) => {
  try {
    const deleted = await School.destroy({ where: { id: req.params.id } });
    if (!deleted) return res.status(404).json({ error: 'School not found' });
    res.status(204).send();
  } catch (err) {
    res.status(500).json({ error: 'Failed to delete school' });
  }
});

module.exports = router;
