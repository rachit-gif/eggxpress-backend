// filepath: c:\eggxpresss\eggxpress_backend\nodeback\models\Product.js
const mongoose = require('mongoose');


const productSchema = new mongoose.Schema({
  name: String,
  price: Number,
  description: String,
  image: String,
  // Add other fields as needed
});

module.exports = mongoose.model('Product', productSchema);