const express = require('express');
const { Setting } = require('../models/Setting');
const router = express.Router();

// Get all settings
router.get('/', async (req, res) => {
  try {
    const settings = await Setting.findAll();
    res.json(settings);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch settings' });
  }
});

// Get setting by id
router.get('/:id', async (req, res) => {
  try {
    const setting = await Setting.findByPk(req.params.id);
    if (!setting) return res.status(404).json({ error: 'Setting not found' });
    res.json(setting);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch setting' });
  }
});

// Create new setting
router.post('/', async (req, res) => {
  try {
    const newSetting = await Setting.create(req.body);
    res.status(201).json(newSetting);
  } catch (err) {
    res.status(400).json({ error: 'Failed to create setting' });
  }
});

// Update setting
router.put('/:id', async (req, res) => {
  try {
    const [updated] = await Setting.update(req.body, { where: { id: req.params.id } });
    if (!updated) return res.status(404).json({ error: 'Setting not found' });
    const updatedSetting = await Setting.findByPk(req.params.id);
    res.json(updatedSetting);
  } catch (err) {
    res.status(400).json({ error: 'Failed to update setting' });
  }
});

// Delete setting
router.delete('/:id', async (req, res) => {
  try {
    const deleted = await Setting.destroy({ where: { id: req.params.id } });
    if (!deleted) return res.status(404).json({ error: 'Setting not found' });
    res.status(204).send();
  } catch (err) {
    res.status(500).json({ error: 'Failed to delete setting' });
  }
});

module.exports = router;
