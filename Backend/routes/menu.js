// routes/menu.js
const express = require('express');
const MenuItem = require('../models/MenuItem');
const { authenticateJWT } = require('../middleware/auth');
const router = express.Router();

// Add a new menu item (Admin only)
router.post('/', authenticateJWT, async (req, res) => {
  if (req.user.role !== 'admin') return res.status(403).send('Access denied');

  const { name, description, price } = req.body;
  const newMenuItem = new MenuItem({ name, description, price });
  await newMenuItem.save();
  res.status(201).json(newMenuItem);
});

// Get all menu items
router.get('/', async (req, res) => {
  const menuItems = await MenuItem.find();
  res.json(menuItems);
});

// Update a menu item (Admin only)
router.put('/:id', authenticateJWT, async (req, res) => {
  if (req.user.role !== 'admin') return res.status(403).send('Access denied');

  const updatedItem = await MenuItem.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(updatedItem);
});

// Delete a menu item (Admin only)
router.delete('/:id', authenticateJWT, async (req, res) => {
  if (req.user.role !== 'admin') return res.status(403).send('Access denied');
  
  await MenuItem.findByIdAndDelete(req.params.id);
  res.status(204).send();
});

module.exports = router;
