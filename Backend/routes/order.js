// routes/orders.js
const express = require('express');
const Order = require('../models/Order');
const { authenticateJWT } = require('../middleware/auth');
const router = express.Router();

// Create an order
router.post('/', authenticateJWT, async (req, res) => {
  const { items } = req.body;
  const order = new Order({ customerId: req.user.userId, items });
  await order.save();
  res.status(201).json(order);
});

// Update order status (Chef/Admin only)
router.put('/:id/status', authenticateJWT, async (req, res) => {
  if (!['admin', 'chef'].includes(req.user.role)) return res.status(403).send('Access denied');
  
  const { status } = req.body;
  const order = await Order.findByIdAndUpdate(req.params.id, { status }, { new: true });
  res.json(order);
});

module.exports = router;
