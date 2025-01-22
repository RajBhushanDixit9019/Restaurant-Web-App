// models/Order.js
const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  customerId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  items: [
    {
      menuItemId: { type: mongoose.Schema.Types.ObjectId, ref: 'MenuItem' },
      quantity: { type: Number, required: true },
    },
  ],
  status: { type: String, default: 'pending' }, // 'pending', 'in-progress', 'completed'
});

module.exports = mongoose.model('Order', orderSchema);
