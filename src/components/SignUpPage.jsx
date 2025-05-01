import React from "react";
//import "../App.css";
import "../styles/SignUpPage.css";

function SignupPage() {
  return (
    <div className="signup-container">
      <h1 className="restaurant-name">My Restaurant</h1>
      
      <button className="signup-heading-button">Sing Up</button>
      
      <p className="signup-subtext">
        Sign up now to get exclusive deals, menu updates, and mouthwatering news straight to your inbox.
      </p>

      <form className="signup-form">
        <input type="text" placeholder="Your Name" />
        <input type="email" placeholder="Your Email" />
        <input type="password" placeholder="Password" />
        <input type="password" placeholder="Confirm Password" />
        <button className="signup-heading-button">Sign Up</button>
      </form>
    </div>
  );
}

export default SignupPage;
