import React from 'react';
import '../styles/AboutUs.css';
//import "../App.css";
import img1 from '../images/diningtableimg1.jpg';
import img2 from '../images/diningtableimg2.jpg';

function AboutUs() {
  return (
    <section className="about-us" id="about">
      <h2>About Us</h2>
      <div className="about-content">
        <div className="content-row">
          <div className="image-container">
            <img src={img1} alt="Restaurant table setting" />
          </div>
          <div className="text-container">
            <p>
              At GreenBite, we believe food should be more than just fuel – it should bring joy, comfort, and connection. That's why we serve up vibrant dishes made from fresh, high-quality ingredients, cooked with care and bursting with flavor.
            </p>
          </div>
        </div>
        
        <div className="content-row reversed">
          
          <div className="image-container">
            <img src={img2} alt="Delicious food spread" />
          </div>
          <div className="text-container">
            <p>
              Whether you're here for a quick bite, a cozy meal with loved ones, or just to treat yourself – we've got something special waiting for you. Our menu is inspired by a love for local flavors, global inspiration, and a sprinkle of happiness in every dish.
            </p>
            <p className="promise">
              Come hungry. Leave happy. That's our promise.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutUs;