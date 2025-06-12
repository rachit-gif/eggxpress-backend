const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const Order = require('./models/Order');

const app = express();
const PORT = 5000;

// Connect to MongoDB
mongoose.connect('mongodb+srv://rachitmdhr333:RachitManandhar3736@cluster0.0tceuav.mongodb.net/eggxpress?retryWrites=true&w=majority&appName=Cluster0')
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((err) => {
    console.error('MongoDB connection error:', err);
  });

// Middleware to parse JSON and handle CORS
app.use(cors());
app.use(express.json());

// Test route to verify server is running
app.get('/api/test', (req, res) => {
  res.json({ message: 'API is working!' });
});

// Order submission route
const orderRoutes = require('./routes/orderRoutes'); // import route file
const userRoutes = require('./routes/userRoutes');
const reviewRoutes = require('./routes/reviewRoutes');
const productRoutes = require('./routes/productRoutes'); 
const feedbackRoutes = require('./routes/feedbackRoutes');

// Use routers
app.use('/api/orders', orderRoutes);                  // use it under /api/orders
app.use('/api/users', userRoutes);                     // use it under /api/users
app.use('/api/reviews', reviewRoutes);  
app.use('/api/products', productRoutes);                // use it under /api/products
app.use('/api/feedback', feedbackRoutes);                // use it under /api/feedback

// Start the server
app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});
