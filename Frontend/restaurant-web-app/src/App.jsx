import React, { useState } from "react";
import Confetti from "react-confetti";
import './App.css';

const App = () => {
  const [celebrate, setCelebrate] = useState(false);

  const handleGetStarted = () => {
    setCelebrate(true);
    setTimeout(() => setCelebrate(false), 5000); // Stop confetti after 5 seconds
  };

  return (
    <div className="container">
      <h1 className="heading">Welcome to Our App!</h1>
      <button className="button" onClick={handleGetStarted}>
        Get Started
      </button>
      {celebrate && <Confetti />}
    </div>
  );
};

export default App;
