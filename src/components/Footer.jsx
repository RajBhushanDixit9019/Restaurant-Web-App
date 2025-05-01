import React from 'react';
import '../styles/Footer.css';
//import "../App.css";
import { FaFacebookF, FaInstagram, FaGoogle, FaYoutube } from "react-icons/fa";

function Footer() {
  return (
    <footer>
      <div className="footer-content">
        <p>© 2025 GoodBites. All rights reserved.</p>
        <p>252 Tasty News</p>
        <p>Address: 123 Foodie Street, Clean Town TX, 45678</p>
        <p>Phone: +1 (234) 567-8910</p>
        <p>Email: hello@goodbites.com</p>
        <div className="social-links">
          <p>Follow us on:</p>
          <div className="social-icons">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <FaFacebookF size={24} />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <FaInstagram size={24} />
            </a>
            <a href="https://google.com" target="_blank" rel="noopener noreferrer">
              <FaGoogle size={24} />
            </a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
              <FaYoutube size={24} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;