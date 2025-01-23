import React from "react";
import { Link } from "react-router-dom";
import "../styles/Header.css";

const Header = () => {
  return (
    <header className="header">
      <Link to="/" className="header-logo">
        My Restaurant
      </Link>
      <nav className="header-nav">
        <Link to="/" className="header-nav-item">
          Home
        </Link>
        <Link to="/menu" className="header-nav-item">
          Menu
        </Link>
        <Link to="/cart" className="header-nav-item">
          Cart
        </Link>
        <Link to="/order-tracking" className="header-nav-item">
          Order Tracking
        </Link>
        <Link to="/profile" className="header-nav-item">
          Profile
        </Link>
        <Link to="/reservations" className="header-nav-item">
          Reservations
        </Link>
      </nav>
    </header>
  );
};

export default Header; 
