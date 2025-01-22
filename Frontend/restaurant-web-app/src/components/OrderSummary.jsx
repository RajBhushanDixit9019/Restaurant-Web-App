// src/components/OrderSummary.js

import React from "react";
import "../styles/OrderSummary.css";

const OrderSummary = ({ cartItems, totalAmount, placeOrder }) => {
  return (
    <div className="order-summary">
      <h2>Order Summary</h2>
      <ul>
        {cartItems.map((item) => (
          <li key={item.id}>
            <p>
              {item.name} - ${item.price}
            </p>
          </li>
        ))}
      </ul>
      <h3>Total: ${totalAmount.toFixed(2)}</h3>
      <button onClick={placeOrder}>Place Order</button>
    </div>
  );
};

export default OrderSummary;
