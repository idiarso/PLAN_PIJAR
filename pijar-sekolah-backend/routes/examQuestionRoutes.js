const express = require('express');
const { ExamQuestion } = require('../models/ExamQuestion');
const router = express.Router();

// Get all exam questions
router.get('/', async (req, res) => {
  try {
    const examQuestions = await ExamQuestion.findAll();
    res.json(examQuestions);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch exam questions' });
  }
});

// Get exam question by id
router.get('/:id', async (req, res) => {
  try {
    const examQuestion = await ExamQuestion.findByPk(req.params.id);
    if (!examQuestion) return res.status(404).json({ error: 'Exam question not found' });
    res.json(examQuestion);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch exam question' });
  }
});

// Create new exam question
router.post('/', async (req, res) => {
  try {
    const newExamQuestion = await ExamQuestion.create(req.body);
    res.status(201).json(newExamQuestion);
  } catch (err) {
    res.status(400).json({ error: 'Failed to create exam question' });
  }
});

// Update exam question
router.put('/:id', async (req, res) => {
  try {
    const [updated] = await ExamQuestion.update(req.body, { where: { id: req.params.id } });
    if (!updated) return res.status(404).json({ error: 'Exam question not found' });
    const updatedExamQuestion = await ExamQuestion.findByPk(req.params.id);
    res.json(updatedExamQuestion);
  } catch (err) {
    res.status(400).json({ error: 'Failed to update exam question' });
  }
});

// Delete exam question
router.delete('/:id', async (req, res) => {
  try {
    const deleted = await ExamQuestion.destroy({ where: { id: req.params.id } });
    if (!deleted) return res.status(404).json({ error: 'Exam question not found' });
    res.status(204).send();
  } catch (err) {
    res.status(500).json({ error: 'Failed to delete exam question' });
  }
});

module.exports = router;
