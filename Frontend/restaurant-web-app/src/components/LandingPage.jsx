import React from "react";
import Header from "./Header";
import Footer from "./Footer"
import img from "../assets/img.jpg";
import "../styles/LandingPage.css";
import LoginPage from "../components/customer/LoginPage";
import RegistrationPage from "../components/customer/RegistrationPage";
import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
   <>
   <Header/>
    <div className="landing-page">
      {/* Hero Section */}
      <div className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">Welcome to Our Restaurant</h1>
          <p className="hero-subtitle">
            Your one-stop solution for fine dining and seamless reservations.
          </p>
        </div>
       
        <div className="hero-image">
          <img src={img} alt="Fine dining experience" />
        </div>
      </div>

      {/* Authentication Section */}
      <div className="auth-section">
        <h2>Get Started</h2>
        <p>Log in or create a new account to access personalized features.</p>
        <div className="auth-buttons">
          <Link to="/login" className="btn-auth">
            Login
          </Link>
          <Link to="/register" className="btn-auth">
            Register
          </Link>
        </div>
      </div>

      {/* Features Section */}
      <div className="features">
        <div className="feature-card">
          <h2>Discover Our Menu</h2>
          <p>
            Indulge in a wide variety of dishes made with fresh ingredients.
          </p>
        </div>
        <div className="feature-card">
          <h2>Track Your Orders</h2>
          <p>
            Stay updated with real-time order tracking for a hassle-free
            experience.
          </p>
        </div>
        <div className="feature-card">
          <h2>Exclusive Reservations</h2>
          <p>Reserve your table and enjoy a personalized dining experience.</p>
        </div>
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default LandingPage;
