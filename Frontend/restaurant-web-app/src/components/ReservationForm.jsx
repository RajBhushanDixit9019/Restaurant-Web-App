// src/components/ReservationForm.js

import React, { useState } from 'react';
import './styles/ReservationForm.css';

const ReservationForm = ({ handleReservation }) => {
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [partySize, setPartySize] = useState(2);

  const handleSubmit = (e) => {
    e.preventDefault();
    handleReservation({ date, time, partySize });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Make a Reservation</h2>
      <div>
        <label>Date</label>
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Time</label>
        <input
          type="time"
          value={time}
          onChange={(e) => setTime(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Party Size</label>
        <input
          type="number"
          value={partySize}
          onChange={(e) => setPartySize(e.target.value)}
          min="1"
          required
        />
      </div>
      <button type="submit">Reserve</button>
    </form>
  );
};

export default ReservationForm;
