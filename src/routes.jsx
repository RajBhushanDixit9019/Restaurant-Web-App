// src/routes.jsx
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import Login from './components/LoginPage.jsx';
import SignUp from './components/SignUpPage.jsx';
import AboutUs from './components/AboutUs.jsx';

// Main application routes
function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/aboutus" element={<AboutUs/>}></Route>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;