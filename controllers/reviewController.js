const Review = require('../models/Review');

// Create a review
exports.createReview = async (req, res) => {
  try {
    const review = new Review(req.body);
    await review.save();
    res.json({ success: true, message: 'Review submitted!' });
  } catch (err) {
    res.status(500).json({ success: false, message: 'Failed to submit review.' });
  }
};

// Get all reviews
exports.getAllReviews = async (req, res) => {
  try {
    const reviews = await Review.find();
    res.json(reviews);
  } catch (err) {
    res.status(500).json({ success: false, message: 'Error getting reviews.' });
  }
};
