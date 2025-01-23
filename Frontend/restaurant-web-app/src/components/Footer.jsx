import React from "react";
import { Link } from "react-router-dom";
import "../styles/Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-links">
        <Link to="/about" className="footer-link">
          About Us
        </Link>
        <Link to="/contact" className="footer-link">
          Contact
        </Link>
        <Link to="/privacy" className="footer-link">
          Privacy Policy
        </Link>
        <Link to="/terms" className="footer-link">
          Terms of Service
        </Link>
      </div>
      <p>&copy; 2025 MyRestaurant. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
