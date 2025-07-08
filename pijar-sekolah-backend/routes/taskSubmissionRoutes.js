const express = require('express');
const { TaskSubmission } = require('../models/TaskSubmission');
const router = express.Router();

// Get all task submissions
router.get('/', async (req, res) => {
  try {
    const taskSubmissions = await TaskSubmission.findAll();
    res.json(taskSubmissions);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch task submissions' });
  }
});

// Get task submission by id
router.get('/:id', async (req, res) => {
  try {
    const taskSubmission = await TaskSubmission.findByPk(req.params.id);
    if (!taskSubmission) return res.status(404).json({ error: 'Task submission not found' });
    res.json(taskSubmission);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch task submission' });
  }
});

// Create new task submission
router.post('/', async (req, res) => {
  try {
    const newTaskSubmission = await TaskSubmission.create(req.body);
    res.status(201).json(newTaskSubmission);
  } catch (err) {
    res.status(400).json({ error: 'Failed to create task submission' });
  }
});

// Update task submission
router.put('/:id', async (req, res) => {
  try {
    const [updated] = await TaskSubmission.update(req.body, { where: { id: req.params.id } });
    if (!updated) return res.status(404).json({ error: 'Task submission not found' });
    const updatedTaskSubmission = await TaskSubmission.findByPk(req.params.id);
    res.json(updatedTaskSubmission);
  } catch (err) {
    res.status(400).json({ error: 'Failed to update task submission' });
  }
});

// Delete task submission
router.delete('/:id', async (req, res) => {
  try {
    const deleted = await TaskSubmission.destroy({ where: { id: req.params.id } });
    if (!deleted) return res.status(404).json({ error: 'Task submission not found' });
    res.status(204).send();
  } catch (err) {
    res.status(500).json({ error: 'Failed to delete task submission' });
  }
});

module.exports = router;
