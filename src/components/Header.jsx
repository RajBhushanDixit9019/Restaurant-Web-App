// src/components/Header.jsx
import React from 'react';
import "../App.css";
import "../styles/Header.css";
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header>
      <div className="logo">GoodBites</div>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/#about">About Us</Link></li>
          <li><Link to="/#contact">Contact Us</Link></li>
          <li><Link to="/login">Login</Link></li>
          <li><Link to="/signup">Sign Up</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;