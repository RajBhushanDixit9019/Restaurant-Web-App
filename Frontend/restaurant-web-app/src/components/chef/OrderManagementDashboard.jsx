// src/components/chef/OrderManagementDashboard.jsx

import React, { useState, useEffect } from 'react';
import OrderQueue from './OrderQueue';
import OrderStatus from './OrderStatus';
import '../../styles/chef/OrderManagementDashboard.css';

const OrderManagementDashboard = () => {
  const [orders, setOrders] = useState([]);
  
  // Fetch orders on mount (API or WebSocket could be used)
  useEffect(() => {
    const fetchOrders = async () => {
      // Simulating an API call or WebSocket event to fetch orders
      const fetchedOrders = [
        { id: 1, items: ['Burger', 'Fries'], status: 'Pending', specialInstructions: 'No onions' },
        { id: 2, items: ['Pizza'], status: 'In Progress', specialInstructions: '' },
        // more orders...
      ];
      setOrders(fetchedOrders);
    };
    
    fetchOrders();
  }, []);
  
  return (
    <div className="order-management-dashboard">
      <h2>Order Management</h2>
      <OrderQueue orders={orders} />
      <OrderStatus orders={orders} />
    </div>
  );
};

export default OrderManagementDashboard;
