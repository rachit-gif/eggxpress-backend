const mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema({
  stars: { type: Number, required: true }, // rating for quality
  packaging: { type: Number, default: 0 }, // rating for packaging
  comment: { type: String, required: true },
  images: [{ type: String }], // Base64 strings or image URLs
  date: { type: String, default: () => new Date().toLocaleString() },
  orderId: String,
  productId: String,
  items: String,
  price: Number,
  email: String,
  name: { type: String, default: 'Anonymous' },
});

module.exports = mongoose.model('Review', reviewSchema);
