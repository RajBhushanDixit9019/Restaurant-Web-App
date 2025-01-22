// src/components/admin/MenuManagement.jsx

import React, { useState, useEffect } from 'react';
import '../../styles/admin/MenuManagement.css';

const MenuManagement = () => {
  const [menuItems, setMenuItems] = useState([]);
  const [newItem, setNewItem] = useState({ name: '', description: '', price: '', category: '' });
  
  // Fetch menu items from the API
  useEffect(() => {
    const fetchMenuItems = async () => {
      const response = await fetch('/api/menu');
      const data = await response.json();
      setMenuItems(data);
    };
    fetchMenuItems();
  }, []);

  // Add new menu item
  const handleAddItem = async () => {
    const response = await fetch('/api/menu', {
      method: 'POST',
      body: JSON.stringify(newItem),
      headers: { 'Content-Type': 'application/json' },
    });
    const data = await response.json();
    setMenuItems([...menuItems, data]);
    setNewItem({ name: '', description: '', price: '', category: '' });
  };

  return (
    <div className="menu-management">
      <h2>Menu Management</h2>
      <div className="add-item-form">
        <input
          type="text"
          placeholder="Name"
          value={newItem.name}
          onChange={(e) => setNewItem({ ...newItem, name: e.target.value })}
        />
        <input
          type="text"
          placeholder="Description"
          value={newItem.description}
          onChange={(e) => setNewItem({ ...newItem, description: e.target.value })}
        />
        <input
          type="number"
          placeholder="Price"
          value={newItem.price}
          onChange={(e) => setNewItem({ ...newItem, price: e.target.value })}
        />
        <input
          type="text"
          placeholder="Category"
          value={newItem.category}
          onChange={(e) => setNewItem({ ...newItem, category: e.target.value })}
        />
        <button onClick={handleAddItem}>Add Item</button>
      </div>
      <table className="menu-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Description</th>
            <th>Price</th>
            <th>Category</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {menuItems.map((item) => (
            <tr key={item.id}>
              <td>{item.name}</td>
              <td>{item.description}</td>
              <td>{item.price}</td>
              <td>{item.category}</td>
              <td>
                <button>Edit</button>
                <button>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MenuManagement;
