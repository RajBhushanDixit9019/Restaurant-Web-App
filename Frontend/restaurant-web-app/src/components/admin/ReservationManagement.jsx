// src/components/admin/ReservationManagement.jsx

import React, { useState, useEffect } from 'react';
import '../../styles/admin/ReservationManagement.css';

const ReservationManagement = () => {
  const [reservations, setReservations] = useState([]);

  // Fetch reservations from the API
  useEffect(() => {
    const fetchReservations = async () => {
      const response = await fetch('/api/reservations');
      const data = await response.json();
      setReservations(data);
    };
    fetchReservations();
  }, []);

  return (
    <div className="reservation-management">
      <h2>Reservation Management</h2>
      <table className="reservation-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Date</th>
            <th>Time</th>
            <th>Party Size</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {reservations.map((reservation) => (
            <tr key={reservation.id}>
              <td>{reservation.name}</td>
              <td>{reservation.date}</td>
              <td>{reservation.time}</td>
              <td>{reservation.partySize}</td>
              <td>
                <button>Update</button>
                <button>Cancel</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ReservationManagement;
