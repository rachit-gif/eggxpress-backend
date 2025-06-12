const Order = require('../models/Order');

// Save a new order
exports.createOrder = async (req, res) => {
  try {
    const order = new Order(req.body);
    await order.save();
    res.json({ success: true, message: 'Order saved!' });
  } catch (err) {
    res.status(500).json({ success: false, message: 'Error saving order.' });
  }
};

// Get all orders (optional)
exports.getAllOrders = async (req, res) => {
  try {
    const orders = await Order.find();
    res.json(orders);
  } catch (err) {
    res.status(500).json({ success: false, message: 'Error fetching orders.' });
  }
};
