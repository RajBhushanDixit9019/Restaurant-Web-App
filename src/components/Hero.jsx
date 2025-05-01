import React from 'react';
import '../styles/Hero.css';
//import "../App.css";
import heroBackground from '../images/headerimg1.jpg';  // <-- import image

function Hero() {
  return (
    <section
      className="hero"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${heroBackground})`
      }}
    >
      <div className="hero-content">
        <h1>Welcome to GoodBites</h1>
        <p>Delicious flavors. Memorable moments.</p>
        <button className="cta-button">Explore Menu</button>
      </div>
    </section>
  );
}

export default Hero;
