import React from 'react';
import '../styles/Loader.css';

function Loader() {
  return (
    <div className="loader-container">
      <div className="loader-content">
        <div className="loader-logo">
          <span>My Restaurant</span>
        </div>
        <div className="loader-spinner">
          <div className="circle-container">
            {[...Array(5)].map((_, i) => (
              <div key={i} className={`circle circle-${i + 1}`}></div>
            ))}
          </div>
        </div>
        <div className="loader-text">
          <span>Loading</span>
          <span className="dots">
            <span className="dot">.</span>
            <span className="dot">.</span>
            <span className="dot">.</span>
          </span>
        </div>
      </div>
    </div>
  );
}

export default Loader;