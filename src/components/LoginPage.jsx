import React from "react";
//import "../App.css";
import "../styles/LoginPage.css";

function LoginPage() {
  return (
    <div className="login-container">
      <h1 className="restaurant-name">My Restaurant</h1>
      
      <button className="login-heading-button">Login</button>
      
      <p className="login-subtext">
        Login to manage your orders, check exclusive deals, and more.
      </p>

      <form className="login-form">
        <input type="email" placeholder="Your Email" />
        <input type="password" placeholder="Password" />
        <button type="submit" className="login-submit-button">Login</button>
      </form>
    </div>
  );
}


export default LoginPage;
