const mongoose = require('mongoose');

const feedbackSchema = new mongoose.Schema({
  user: String, // or userId if you want to link to a user
  message: { type: String, required: true },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Feedback', feedbackSchema);