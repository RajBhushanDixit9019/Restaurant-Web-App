import React from 'react';
import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx';
import AboutUs from './components/AboutUs.jsx';
import ContactUs from './components/ContactUs.jsx';
import Footer from './components/Footer.jsx';
import './App.css';
function App() {
  return (
    <div className="restaurant-app">
      <Header class="Header"/>
      <Hero class="Hero" />
      <AboutUs class="AboutUs"/>
      <ContactUs class="ContactUs" />
      <Footer class="Footer" />
    </div>
  );
}

export default App;