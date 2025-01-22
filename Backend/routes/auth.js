// routes/auth.js
const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jwt-simple');
const User = require('../models/User');
const { JWT_SECRET } = process.env;

const router = express.Router();

router.post('/login', async (req, res) => {
  const { email, password } = req.body;
  
  const user = await User.findOne({ email });
  if (!user) return res.status(404).send('User not found');

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) return res.status(400).send('Invalid credentials');

  const token = jwt.encode({ userId: user._id, role: user.role }, JWT_SECRET);
  res.json({ token });
});

module.exports = router;
