// src/components/Cart.js

import React from "react";
import "../styles/Cart.css";

const Cart = ({ cartItems, removeFromCart, totalAmount }) => {
  return (
    <div className="cart">
      <h2>Your Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul>
          {cartItems.map((item) => (
            <li key={item.id}>
              <p>
                {item.name} - ${item.price}
              </p>
              <button onClick={() => removeFromCart(item.id)}>Remove</button>
            </li>
          ))}
        </ul>
      )}
      <h3>Total: ${totalAmount.toFixed(2)}</h3>
    </div>
  );
};

export default Cart;
