import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './components/LandingPage'; // Ensure this path is correct
import MenuPage from './components/customer/MenuPage'; // Replace with the actual component for the Menu
import ReservationForm from './components/customer/ReservationForm'; // Replace with the actual component for Reservations
import LoginPage from './components/customer/LoginPage'; // Replace with the actual Login component
import RegisterationPage from './components/customer/RegisterationPage'; // Replace with the actual Register component

const App = () => {
    return (
        <Router>
            <Routes>
                {/* Landing Page as the default route */}
                <Route path="/" element={<LandingPage />} />

                {/* Other Routes */}
                <Route path="/menu" element={<MenuPage />} />
                <Route path="/reservation" element={<ReservationForm />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/register" element={<RegisterationPage />} />
            </Routes>
        </Router>
    );
};

export default App;
