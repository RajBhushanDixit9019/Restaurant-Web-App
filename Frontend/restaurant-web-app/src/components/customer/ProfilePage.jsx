// File path: src/components/ProfilePage.jsx
// Description: Allows users to view and update their profile information (name, contact, etc.)

import React, { useEffect, useState } from 'react';
import './styles/customer/ProfilePage.css';

const ProfilePage = () => {
  const [user, setUser] = useState({});
  const [name, setName] = useState('');
  const [contact, setContact] = useState('');

  useEffect(() => {
    const fetchUserProfile = async () => {
      const token = localStorage.getItem('token');
      if (!token) return;
      const response = await fetch('/api/user/profile', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const data = await response.json();
      setUser(data);
      setName(data.name);
      setContact(data.contact);
    };

    fetchUserProfile();
  }, []);

  const handleUpdateProfile = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem('token');
    const response = await fetch('/api/user/update', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ name, contact }),
    });

    if (response.ok) {
      alert('Profile updated successfully!');
    }
  };

  return (
    <div className="profile-container">
      <h2>Profile</h2>
      <form onSubmit={handleUpdateProfile}>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Contact"
          value={contact}
          onChange={(e) => setContact(e.target.value)}
        />
        <button type="submit">Update Profile</button>
      </form>
    </div>
  );
};

export default ProfilePage;
