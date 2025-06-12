const express = require('express');
const router = express.Router();
const Feedback = require('../models/Feedback');

// Save feedback
router.post('/', async (req, res) => {
  try {
    const feedback = new Feedback(req.body);
    await feedback.save();
    res.status(201).json(feedback);
  } catch (err) {
    res.status(500).json({ message: 'Failed to save feedback.' });
  }
});

// (Optional) Get all feedbacks
router.get('/', async (req, res) => {
  try {
    const feedbacks = await Feedback.find().sort({ createdAt: -1 });
    res.json(feedbacks);
  } catch (err) {
    res.status(500).json({ message: 'Failed to fetch feedbacks.' });
  }
});

module.exports = router;