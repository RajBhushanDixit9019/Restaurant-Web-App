// src/components/Header.js

import React from "react";
import { Link } from "react-router-dom";
import "../styles/Header.css";

const Header = () => {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <a href="#" target="_blank">
              Home
            </a>
          </li>
          <li>
            <a href="#" target="_blank">
              Menu
            </a>
          </li>
          <li>
            <a href="#" target="_blank">
              Cart
            </a>
          </li>
          <li>
            <a href="#" target="_blank">
              Order Tracking
            </a>
          </li>
          <li>
            <a href="#" target="_blank">
              Profile
            </a>
          </li>
          <li>
            <a href="#" target="_blank">
              Reservations
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
