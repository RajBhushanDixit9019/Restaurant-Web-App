// File path: src/components/ReservationForm.jsx
// Description: Allows users to choose a date, time, and party size for table reservation.

import React, { useState, useEffect } from "react";
import "../../styles/customer/ReservationForm.css";

const ReservationForm = () => {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [partySize, setPartySize] = useState(1);
  const [availableSlots, setAvailableSlots] = useState([]);

  useEffect(() => {
    // Fetch available slots based on the selected date
    const fetchAvailableSlots = async () => {
      const response = await fetch(`/api/available-slots?date=${date}`);
      const data = await response.json();
      setAvailableSlots(data);
    };

    if (date) {
      fetchAvailableSlots();
    }
  }, [date]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("/api/reservations", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ date, time, partySize }),
    });

    if (response.ok) {
      alert("Reservation Confirmed!");
    }
  };

  return (
    <div className="reservation-container">
      <h2>Table Reservation</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
        {availableSlots.length > 0 && (
          <select value={time} onChange={(e) => setTime(e.target.value)}>
            {availableSlots.map((slot) => (
              <option key={slot} value={slot}>
                {slot}
              </option>
            ))}
          </select>
        )}
        <input
          type="number"
          value={partySize}
          onChange={(e) => setPartySize(Number(e.target.value))}
          min="1"
        />
        <button type="submit">Reserve</button>
      </form>
    </div>
  );
};

export default ReservationForm;
