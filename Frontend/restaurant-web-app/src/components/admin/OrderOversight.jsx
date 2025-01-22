// src/components/admin/OrderOversight.jsx

import React, { useState, useEffect } from 'react';
import '../../styles/admin/OrderOversight.css';

const OrderOversight = () => {
  const [orders, setOrders] = useState([]);

  // Fetch active orders from the API
  useEffect(() => {
    const fetchOrders = async () => {
      const response = await fetch('/api/orders');
      const data = await response.json();
      setOrders(data);
    };
    fetchOrders();
  }, []);

  return (
    <div className="order-oversight">
      <h2>Order Oversight</h2>
      <table className="order-table">
        <thead>
          <tr>
            <th>Order ID</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => (
            <tr key={order.id}>
              <td>{order.id}</td>
              <td>{order.status}</td>
              <td>
                <button>Mark as Completed</button>
                <button>Update Status</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default OrderOversight;
