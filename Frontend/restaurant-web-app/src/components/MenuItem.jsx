// src/components/MenuItem.js

import React from "react";
import "../styles/MenuItem.css";

const MenuItem = ({ item, addToCart }) => {
  return (
    <div className="menu-item">
      <img src={item.imageUrl} alt={item.name} />
      <h3>{item.name}</h3>
      <p>{item.description}</p>
      <span>{`$${item.price.toFixed(2)}`}</span>
      <button onClick={() => addToCart(item)}>Add to Cart</button>
    </div>
  );
};

export default MenuItem;
