// src/components/chef/OrderStatus.jsx

import React from 'react';
import '../../styles/chef/OrderStatus.css';

const OrderStatus = ({ orders }) => {
  return (
    <div className="order-status">
      <h3>Order Status</h3>
      <ul>
        {orders.map((order) => (
          <li key={order.id} className={`order-status-item ${order.status.toLowerCase().replace(' ', '-')}`}>
            <p><strong>Order #{order.id}</strong></p>
            <p>Status: {order.status}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default OrderStatus;
