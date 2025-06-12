const mongoose = require('mongoose');
const Order = require('./models/Order');

mongoose.connect('mongodb+srv://rachitmdhr333:RachitManandhar3736@cluster0.0tceuav.mongodb.net/eggxpress?retryWrites=true&w=majority&appName=Cluster0', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(async () => {
    const newOrder = new Order({
      customerName: 'Test User',
      address: '123 Test St',
      quantity: 5
    });
    await newOrder.save();
    console.log('Order saved!');
    mongoose.disconnect();
  })
  .catch(err => console.error(err));

