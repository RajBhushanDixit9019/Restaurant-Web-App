// src/components/Profile.js

import React, { useState } from 'react';
import './styles/Profile.css';

const Profile = ({ user, updateProfile }) => {
  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);

  const handleSubmit = (e) => {
    e.preventDefault();
    updateProfile({ name, email });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Profile</h2>
      <div>
        <label>Name</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Email</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <button type="submit">Update Profile</button>
    </form>
  );
};

export default Profile;
