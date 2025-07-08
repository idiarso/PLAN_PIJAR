const express = require('express');
const { QuestionAnalysis } = require('../models/QuestionAnalysis');
const router = express.Router();

// Get all question analyses
router.get('/', async (req, res) => {
  try {
    const questionAnalyses = await QuestionAnalysis.findAll();
    res.json(questionAnalyses);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch question analyses' });
  }
});

// Get question analysis by id
router.get('/:id', async (req, res) => {
  try {
    const questionAnalysis = await QuestionAnalysis.findByPk(req.params.id);
    if (!questionAnalysis) return res.status(404).json({ error: 'Question analysis not found' });
    res.json(questionAnalysis);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch question analysis' });
  }
});

// Create new question analysis
router.post('/', async (req, res) => {
  try {
    const newQuestionAnalysis = await QuestionAnalysis.create(req.body);
    res.status(201).json(newQuestionAnalysis);
  } catch (err) {
    res.status(400).json({ error: 'Failed to create question analysis' });
  }
});

// Update question analysis
router.put('/:id', async (req, res) => {
  try {
    const [updated] = await QuestionAnalysis.update(req.body, { where: { id: req.params.id } });
    if (!updated) return res.status(404).json({ error: 'Question analysis not found' });
    const updatedQuestionAnalysis = await QuestionAnalysis.findByPk(req.params.id);
    res.json(updatedQuestionAnalysis);
  } catch (err) {
    res.status(400).json({ error: 'Failed to update question analysis' });
  }
});

// Delete question analysis
router.delete('/:id', async (req, res) => {
  try {
    const deleted = await QuestionAnalysis.destroy({ where: { id: req.params.id } });
    if (!deleted) return res.status(404).json({ error: 'Question analysis not found' });
    res.status(204).send();
  } catch (err) {
    res.status(500).json({ error: 'Failed to delete question analysis' });
  }
});

module.exports = router;
