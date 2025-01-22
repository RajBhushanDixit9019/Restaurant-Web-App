// File path: src/components/MenuPage.jsx
// Description: Fetches and displays the menu items with their description, price, and an "Add to Cart" button.

import React, { useState, useEffect } from "react";
import "../../styles/customer/MenuPage.css";

const MenuPage = () => {
  const [menuItems, setMenuItems] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const fetchMenu = async () => {
      const response = await fetch("/api/menu");
      const data = await response.json();
      setMenuItems(data);
    };

    fetchMenu();
  }, []);

  const handleAddToCart = (item) => {
    setCart([...cart, item]);
  };

  const handleRemoveFromCart = (item) => {
    setCart(cart.filter((cartItem) => cartItem.id !== item.id));
  };

  return (
    <div className="menu-container">
      <h2>Menu</h2>
      <div className="menu-items">
        {menuItems.map((item) => (
          <div key={item.id} className="menu-item">
            <img src={item.image} alt={item.name} />
            <div>
              <h3>{item.name}</h3>
              <p>{item.description}</p>
              <p>${item.price}</p>
              <button onClick={() => handleAddToCart(item)}>Add to Cart</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MenuPage;
