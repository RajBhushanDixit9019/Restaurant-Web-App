// models/Reservation.js
const mongoose = require('mongoose');

const reservationSchema = new mongoose.Schema({
  customerId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  time: { type: Date, required: true },
  peopleCount: { type: Number, required: true },
});

module.exports = mongoose.model('Reservation', reservationSchema);
