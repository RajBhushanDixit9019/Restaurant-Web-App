import React from 'react';
import { Link } from 'react-router-dom';
import '@/styles/LandingPage.css';

const LandingPage = () => {
    return (
        <div className="landing-page">
            <div className="hero-section">
                <h1>Welcome to Gourmet Delight</h1>
                <p>Your one-stop solution for fine dining and seamless reservations.</p>
                <div className="hero-buttons">
                    <Link to="/menu" className="btn-primary">Explore Menu</Link>
                    <Link to="/reservation" className="btn-secondary">Make a Reservation</Link>
                </div>
            </div>

            <div className="auth-section">
                <h2>Get Started</h2>
                <p>Log in or create a new account to access personalized features.</p>
                <div className="auth-buttons">
                    <Link to="/login" className="btn-auth">Login</Link>
                    <Link to="/register" className="btn-auth">Register</Link>
                </div>
            </div>

            <div className="features">
                <div className="feature-card">
                    <h2>Discover Our Menu</h2>
                    <p>Indulge in a wide variety of dishes made with fresh ingredients.</p>
                </div>
                <div className="feature-card">
                    <h2>Track Your Orders</h2>
                    <p>Stay updated with real-time order tracking for a hassle-free experience.</p>
                </div>
                <div className="feature-card">
                    <h2>Exclusive Reservations</h2>
                    <p>Reserve your table and enjoy a personalized dining experience.</p>
                </div>
            </div>
        </div>
    );
};

export default LandingPage;