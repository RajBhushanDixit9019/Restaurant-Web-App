// routes/reservations.js
const express = require('express');
const Reservation = require('../models/Reservation');
const { authenticateJWT } = require('../middleware/auth');
const router = express.Router();

// Create a reservation
router.post('/', authenticateJWT, async (req, res) => {
  const { time, peopleCount } = req.body;
  const reservation = new Reservation({ customerId: req.user.userId, time, peopleCount });
  await reservation.save();
  res.status(201).json(reservation);
});

// Update a reservation
router.put('/:id', authenticateJWT, async (req, res) => {
  const { time, peopleCount } = req.body;
  const updatedReservation = await Reservation.findByIdAndUpdate(
    req.params.id,
    { time, peopleCount },
    { new: true }
  );
  res.json(updatedReservation);
});

// Delete a reservation
router.delete('/:id', authenticateJWT, async (req, res) => {
  await Reservation.findByIdAndDelete(req.params.id);
  res.status(204).send();
});

module.exports = router;
