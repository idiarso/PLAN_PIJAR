const express = require('express');
const { Task } = require('../models/Task');
const router = express.Router();

// Get all tasks
router.get('/', async (req, res) => {
  try {
    const tasks = await Task.findAll();
    res.json(tasks);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch tasks' });
  }
});

// Get task by id
router.get('/:id', async (req, res) => {
  try {
    const task = await Task.findByPk(req.params.id);
    if (!task) return res.status(404).json({ error: 'Task not found' });
    res.json(task);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch task' });
  }
});

// Create new task
router.post('/', async (req, res) => {
  try {
    const newTask = await Task.create(req.body);
    res.status(201).json(newTask);
  } catch (err) {
    res.status(400).json({ error: 'Failed to create task' });
  }
});

// Update task
router.put('/:id', async (req, res) => {
  try {
    const [updated] = await Task.update(req.body, { where: { id: req.params.id } });
    if (!updated) return res.status(404).json({ error: 'Task not found' });
    const updatedTask = await Task.findByPk(req.params.id);
    res.json(updatedTask);
  } catch (err) {
    res.status(400).json({ error: 'Failed to update task' });
  }
});

// Delete task
router.delete('/:id', async (req, res) => {
  try {
    const deleted = await Task.destroy({ where: { id: req.params.id } });
    if (!deleted) return res.status(404).json({ error: 'Task not found' });
    res.status(204).send();
  } catch (err) {
    res.status(500).json({ error: 'Failed to delete task' });
  }
});

module.exports = router;
