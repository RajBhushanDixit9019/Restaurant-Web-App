// File path: src/components/ReservationTrackingPage.jsx
// Description: Displays the user's upcoming and past reservations.

import React, { useEffect, useState } from 'react';
import './styles/customer/ReservationTrackingPage.css';

const ReservationTrackingPage = () => {
  const [reservations, setReservations] = useState([]);

  useEffect(() => {
    const fetchReservations = async () => {
      const response = await fetch('/api/reservations');
      const data = await response.json();
      setReservations(data);
    };

    fetchReservations();
  }, []);

  return (
    <div className="reservation-tracking-container">
      <h2>Reservation Tracking</h2>
      <ul>
        {reservations.map((reservation) => (
          <li key={reservation.id}>
            <p>Reservation ID: {reservation.id}</p>
            <p>Date: {reservation.date}</p>
            <p>Time: {reservation.time}</p>
            <p>Party Size: {reservation.partySize}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ReservationTrackingPage;
