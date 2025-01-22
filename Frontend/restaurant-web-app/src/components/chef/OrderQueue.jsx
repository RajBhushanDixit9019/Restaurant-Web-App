// src/components/chef/OrderQueue.jsx

import React from 'react';
import '../../styles/chef/OrderQueue.css';

const OrderQueue = ({ orders }) => {
  return (
    <div className="order-queue">
      <h3>Order Queue</h3>
      <ul>
        {orders.map((order) => (
          <li key={order.id} className={order.status === 'In Progress' ? 'in-progress' : 'pending'}>
            <p><strong>Order #{order.id}</strong></p>
            <p>Items: {order.items.join(', ')}</p>
            <p>Special Instructions: {order.specialInstructions || 'None'}</p>
            <button>{order.status === 'Pending' ? 'Mark as In Progress' : 'Mark as Ready'}</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default OrderQueue;
