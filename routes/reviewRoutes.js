const express = require('express');
const router = express.Router();
const Review = require('../models/Review');

// Create a new review
router.post('/', async (req, res) => {
  try {
    const review = new Review(req.body);
    await review.save();
    res.json({ success: true, review });
  } catch (err) {
    res.json({ success: false, message: err.message });
  }
});

module.exports = router;
