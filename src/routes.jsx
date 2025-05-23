// src/routes.jsx
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import Login from './components/LoginPage.jsx';
import SignUp from './components/SignUpPage.jsx';
import AboutUs from './components/AboutUs.jsx';
import RestaurantDashboard from './components/RestaurantDashboard.jsx';
import ChiefLoginPage from './chief/ChiefLoginPage.jsx';
import ChiefDashboard from './chief/ChiefDashboard.jsx';
import AdminLoginPage from './admin/AdminLoginPage.jsx';
import AdminDashboard from './admin/AdminDashboard.jsx';

// Main application routes
function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/aboutus" element={<AboutUs/>}></Route>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/dashboard" element={<RestaurantDashboard />} />
        <Route path="/chief-login" element={<ChiefLoginPage/>}/>
        <Route path="/admin-login" element={<AdminLoginPage/>}/>
        <Route path="/chief-dashboard" element={<ChiefDashboard/>}/>
        <Route path="/admin-dashboard" element={<AdminDashboard/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;