const express = require('express');
const { Announcement } = require('../models/Announcement');
const router = express.Router();

// Get all announcements
router.get('/', async (req, res) => {
  try {
    const announcements = await Announcement.findAll();
    res.json(announcements);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch announcements' });
  }
});

// Get announcement by id
router.get('/:id', async (req, res) => {
  try {
    const announcement = await Announcement.findByPk(req.params.id);
    if (!announcement) return res.status(404).json({ error: 'Announcement not found' });
    res.json(announcement);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch announcement' });
  }
});

// Create new announcement
router.post('/', async (req, res) => {
  try {
    const newAnnouncement = await Announcement.create(req.body);
    res.status(201).json(newAnnouncement);
  } catch (err) {
    res.status(400).json({ error: 'Failed to create announcement' });
  }
});

// Update announcement
router.put('/:id', async (req, res) => {
  try {
    const [updated] = await Announcement.update(req.body, { where: { id: req.params.id } });
    if (!updated) return res.status(404).json({ error: 'Announcement not found' });
    const updatedAnnouncement = await Announcement.findByPk(req.params.id);
    res.json(updatedAnnouncement);
  } catch (err) {
    res.status(400).json({ error: 'Failed to update announcement' });
  }
});

// Delete announcement
router.delete('/:id', async (req, res) => {
  try {
    const deleted = await Announcement.destroy({ where: { id: req.params.id } });
    if (!deleted) return res.status(404).json({ error: 'Announcement not found' });
    res.status(204).send();
  } catch (err) {
    res.status(500).json({ error: 'Failed to delete announcement' });
  }
});

module.exports = router;
