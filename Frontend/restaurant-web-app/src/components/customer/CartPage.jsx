// File path: src/components/CartPage.jsx
// Description: Displays the items added to the cart and provides an option to proceed to checkout.

import React from 'react';
import '@/styles/customer/CartPage.css';

const CartPage = ({ cart }) => {
  const handleCheckout = async () => {
    const response = await fetch('/api/orders', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ items: cart }),
    });

    if (response.ok) {
      alert('Order placed successfully!');
    }
  };

  return (
    <div className="cart-container">
      <h2>Cart</h2>
      <ul>
        {cart.map((item, index) => (
          <li key={index}>
            {item.name} - ${item.price}
          </li>
        ))}
      </ul>
      <button onClick={handleCheckout}>Checkout</button>
    </div>
  );
};

export default CartPage;
