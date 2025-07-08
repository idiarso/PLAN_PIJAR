const express = require('express');
const { QuestionPackage } = require('../models/QuestionPackage');
const router = express.Router();

// Get all question packages
router.get('/', async (req, res) => {
  try {
    const questionPackages = await QuestionPackage.findAll();
    res.json(questionPackages);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch question packages' });
  }
});

// Get question package by id
router.get('/:id', async (req, res) => {
  try {
    const questionPackage = await QuestionPackage.findByPk(req.params.id);
    if (!questionPackage) return res.status(404).json({ error: 'Question package not found' });
    res.json(questionPackage);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch question package' });
  }
});

// Create new question package
router.post('/', async (req, res) => {
  try {
    const newQuestionPackage = await QuestionPackage.create(req.body);
    res.status(201).json(newQuestionPackage);
  } catch (err) {
    res.status(400).json({ error: 'Failed to create question package' });
  }
});

// Update question package
router.put('/:id', async (req, res) => {
  try {
    const [updated] = await QuestionPackage.update(req.body, { where: { id: req.params.id } });
    if (!updated) return res.status(404).json({ error: 'Question package not found' });
    const updatedQuestionPackage = await QuestionPackage.findByPk(req.params.id);
    res.json(updatedQuestionPackage);
  } catch (err) {
    res.status(400).json({ error: 'Failed to update question package' });
  }
});

// Delete question package
router.delete('/:id', async (req, res) => {
  try {
    const deleted = await QuestionPackage.destroy({ where: { id: req.params.id } });
    if (!deleted) return res.status(404).json({ error: 'Question package not found' });
    res.status(204).send();
  } catch (err) {
    res.status(500).json({ error: 'Failed to delete question package' });
  }
});

module.exports = router;
