// File path: src/components/OrderTrackingPage.jsx
// Description: Displays the user's current orders and their status.

import React, { useEffect, useState } from "react";
import "../../styles/customer/OrderTrackingPage.css";

const OrderTrackingPage = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const fetchOrders = async () => {
      const response = await fetch("/api/orders");
      const data = await response.json();
      setOrders(data);
    };

    fetchOrders();
  }, []);

  return (
    <div className="order-tracking-container">
      <h2>Order Tracking</h2>
      <ul>
        {orders.map((order) => (
          <li key={order.id}>
            <p>Order ID: {order.id}</p>
            <p>Status: {order.status}</p>
            <p>Items: {order.items.join(", ")}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default OrderTrackingPage;
