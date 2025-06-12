const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  name: String,
  email: String,
  phone: String,
  address: {
    city: String,
    area: String,
    landmark: String,
    notes: String,
    isDefault: Boolean
  },
  deliveryLocation: {
    lat: Number,
    lng: Number
  },
  items: Array,
  total: Number,
  status: String,
  paymentMethod: String,
  createdAt: String
});

module.exports = mongoose.model('Order', orderSchema);