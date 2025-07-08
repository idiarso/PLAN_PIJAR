const express = require('express');
const { Notification } = require('../models/Notification');
const router = express.Router();

// Get all notifications
router.get('/', async (req, res) => {
  try {
    const notifications = await Notification.findAll();
    res.json(notifications);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch notifications' });
  }
});

// Get notification by id
router.get('/:id', async (req, res) => {
  try {
    const notification = await Notification.findByPk(req.params.id);
    if (!notification) return res.status(404).json({ error: 'Notification not found' });
    res.json(notification);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch notification' });
  }
});

// Create new notification
router.post('/', async (req, res) => {
  try {
    const newNotification = await Notification.create(req.body);
    res.status(201).json(newNotification);
  } catch (err) {
    res.status(400).json({ error: 'Failed to create notification' });
  }
});

// Update notification
router.put('/:id', async (req, res) => {
  try {
    const [updated] = await Notification.update(req.body, { where: { id: req.params.id } });
    if (!updated) return res.status(404).json({ error: 'Notification not found' });
    const updatedNotification = await Notification.findByPk(req.params.id);
    res.json(updatedNotification);
  } catch (err) {
    res.status(400).json({ error: 'Failed to update notification' });
  }
});

// Delete notification
router.delete('/:id', async (req, res) => {
  try {
    const deleted = await Notification.destroy({ where: { id: req.params.id } });
    if (!deleted) return res.status(404).json({ error: 'Notification not found' });
    res.status(204).send();
  } catch (err) {
    res.status(500).json({ error: 'Failed to delete notification' });
  }
});

module.exports = router;
