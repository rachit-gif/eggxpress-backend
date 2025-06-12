const express = require('express');
const router = express.Router();
const Order = require('../models/Order');
const {createOrder, getAllOrders} = require('../controllers/orderController')

router.post('/', createOrder);
router.get('/', getAllOrders);

module.exports = router;
