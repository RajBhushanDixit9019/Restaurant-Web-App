import { useState } from 'react';
import { Home, Users, Calendar, PieChart, Settings, Menu, X, Bell, BookOpen, ClipboardList, DollarSign, ChevronRight,Loader2, } from 'lucide-react';
import './AdminDashboard.css';

export default function AdminDashboard() {
  const [collapsed, setCollapsed] = useState(false);
  const [activePage, setActivePage] = useState('overview');
  const [loading, setLoading] = useState(false);
  
  // Sample data
  const reservations = [
    { id: 1, name: 'John Smith', date: '2023-05-15', time: '7:00 PM', guests: 4, status: 'confirmed' },
    { id: 2, name: 'Sarah Johnson', date: '2023-05-15', time: '7:30 PM', guests: 2, status: 'confirmed' },
    { id: 3, name: 'Michael Brown', date: '2023-05-16', time: '6:00 PM', guests: 6, status: 'pending' }
  ];
  
  const customers = [
    { id: 1, name: 'John Smith', email: 'john@example.com', visits: 12, lastVisit: '2023-05-10' },
    { id: 2, name: 'Sarah Johnson', email: 'sarah@example.com', visits: 8, lastVisit: '2023-05-12' },
    { id: 3, name: 'Michael Brown', email: 'michael@example.com', visits: 5, lastVisit: '2023-05-08' }
  ];
  
  const salesData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
    values: [12000, 19000, 15000, 18000, 21000]
  };

  const navItems = [
    { id: 'overview', icon: <Home size={20} />, label: 'Overview' },
    { id: 'reservations', icon: <Calendar size={20} />, label: 'Reservations' },
    { id: 'customers', icon: <Users size={20} />, label: 'Customers' },
    { id: 'menu', icon: <BookOpen size={20} />, label: 'Menu' },
    { id: 'reports', icon: <PieChart size={20} />, label: 'Reports' },
    { id: 'settings', icon: <Settings size={20} />, label: 'Settings' }
  ];

  const toggleSidebar = () => {
    setCollapsed(!collapsed);
  };

  const handleNavigation = (id) => {
    setLoading(true);
    setTimeout(() => {
      setActivePage(id);
      setLoading(false);
    }, 500);
  };

  const renderContent = () => {
    if (loading) {
      return (
        <div className="loading-container">
          <Loader2 className="spinner" size={48} />
          <p>Loading...</p>
        </div>
      );
    }

    switch (activePage) {
      case 'overview':
        return (
          <div>
            <h2 className="dashboard-title">Admin Overview</h2>
            
            <div className="stats-grid">
              <div className="stat-card">
                <h3 className="stat-label">Today's Reservations</h3>
                <p className="stat-value">{reservations.filter(r => r.date === '2023-05-15').length}</p>
              </div>
              <div className="stat-card">
                <h3 className="stat-label">Active Customers</h3>
                <p className="stat-value">{customers.length}</p>
              </div>
              <div className="stat-card">
                <h3 className="stat-label">Monthly Revenue</h3>
                <p className="stat-value">${salesData.values[salesData.values.length - 1].toLocaleString()}</p>
              </div>
            </div>
            
            <div className="content-grid">
              <div className="content-card">
                <div className="card-header">
                  <h3 className="card-title">Upcoming Reservations</h3>
                  <button className="view-all-btn">
                    View All <ChevronRight size={16} />
                  </button>
                </div>
                <div className="reservations-list">
                  {reservations.slice(0, 3).map(reservation => (
                    <div key={reservation.id} className="reservation-item">
                      <div className="reservation-info">
                        <span className="reservation-name">{reservation.name}</span>
                        <span className="reservation-details">
                          {reservation.date} • {reservation.time} • {reservation.guests} guests
                        </span>
                      </div>
                      <span className={`reservation-status ${reservation.status}`}>
                        {reservation.status.charAt(0).toUpperCase() + reservation.status.slice(1)}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="content-card">
                <div className="card-header">
                  <h3 className="card-title">Recent Customers</h3>
                  <button className="view-all-btn">
                    View All <ChevronRight size={16} />
                  </button>
                </div>
                <div className="customers-list">
                  {customers.slice(0, 3).map(customer => (
                    <div key={customer.id} className="customer-item">
                      <div className="customer-avatar">
                        {customer.name.charAt(0)}
                      </div>
                      <div className="customer-info">
                        <span className="customer-name">{customer.name}</span>
                        <span className="customer-details">
                          {customer.visits} visits • Last: {customer.lastVisit}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="content-card">
                <div className="card-header">
                  <h3 className="card-title">Sales Overview</h3>
                  <button className="view-all-btn">
                    View Report <ChevronRight size={16} />
                  </button>
                </div>
                <div className="sales-chart">
                  <div className="chart-bars">
                    {salesData.values.map((value, index) => (
                      <div key={index} className="chart-bar-container">
                        <div 
                          className="chart-bar" 
                          style={{ height: `${(value / 25000) * 100}%` }}
                        ></div>
                        <span className="chart-label">{salesData.labels[index]}</span>
                      </div>
                    ))}
                  </div>
                  <div className="chart-legend">
                    <div className="legend-item">
                      <span className="legend-color"></span>
                      <span className="legend-text">Monthly Revenue</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="content-card">
                <div className="card-header">
                  <h3 className="card-title">Quick Actions</h3>
                </div>
                <div className="quick-actions">
                  <button className="action-btn">
                    <Calendar size={18} />
                    <span>Add Reservation</span>
                  </button>
                  <button className="action-btn">
                    <BookOpen size={18} />
                    <span>Update Menu</span>
                  </button>
                  <button className="action-btn">
                    <Users size={18} />
                    <span>Add Staff</span>
                  </button>
                  <button className="action-btn">
                    <DollarSign size={18} />
                    <span>View Reports</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        );
        
      case 'reservations':
        return (
          <div className="page-container">
            <h2 className="page-title">Reservation Management</h2>
            
            <div className="table-actions">
              <div className="search-filter">
                <input className='search-input' type="text" placeholder="Search reservations..." />
                <select>
                  <option>All Status</option>
                  <option>Confirmed</option>
                  <option>Pending</option>
                  <option>Cancelled</option>
                </select>
                <input type="date" />
              </div>
              <button className="primary-btn">
                + Add Reservation
              </button>
            </div>
            
            <div className="data-table">
              <div className="table-header">
                <div className="header-cell">ID</div>
                <div className="header-cell">Name</div>
                <div className="header-cell">Date & Time</div>
                <div className="header-cell">Guests</div>
                <div className="header-cell">Status</div>
                <div className="header-cell">Actions</div>
              </div>
              
              {reservations.map(reservation => (
                <div key={reservation.id} className="table-row">
                  <div className="table-cell">{reservation.id}</div>
                  <div className="table-cell">{reservation.name}</div>
                  <div className="table-cell">
                    {reservation.date} • {reservation.time}
                  </div>
                  <div className="table-cell">{reservation.guests}</div>
                  <div className="table-cell">
                    <span className={`status-badge ${reservation.status}`}>
                      {reservation.status.charAt(0).toUpperCase() + reservation.status.slice(1)}
                    </span>
                  </div>
                  <div className="table-cell actions-cell">
                    <button className="table-action edit">Edit</button>
                    {reservation.status === 'pending' && (
                      <button className="table-action confirm">Confirm</button>
                    )}
                    <button className="table-action cancel">Cancel</button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );
        
      case 'customers':
        return (
          <div className="page-container">
            <h2 className="page-title">Customer Management</h2>
            
            <div className="table-actions">
              <div className="search-filter">
                <input type="text" placeholder="Search customers..." />
                <select>
                  <option>All Customers</option>
                  <option>Frequent (5+ visits)</option>
                  <option>Recent (Last 30 days)</option>
                </select>
              </div>
            </div>
            
            <div className="data-table">
              <div className="table-header">
                <div className="header-cell">ID</div>
                <div className="header-cell">Name</div>
                <div className="header-cell">Email</div>
                <div className="header-cell">Visits</div>
                <div className="header-cell">Last Visit</div>
                <div className="header-cell">Actions</div>
              </div>
              
              {customers.map(customer => (
                <div key={customer.id} className="table-row">
                  <div className="table-cell">{customer.id}</div>
                  <div className="table-cell">{customer.name}</div>
                  <div className="table-cell">{customer.email}</div>
                  <div className="table-cell">{customer.visits}</div>
                  <div className="table-cell">{customer.lastVisit}</div>
                  <div className="table-cell actions-cell">
                    <button className="table-action view">View</button>
                    <button className="table-action edit">Edit</button>
                    <button className="table-action message">Message</button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );
        
      case 'menu':
        return (
          <div className="page-container">
            <h2 className="page-title">Menu Management</h2>
            
            <div className="menu-tabs">
              <button className="menu-tab active">All Items</button>
              <button className="menu-tab">Starters</button>
              <button className="menu-tab">Main Courses</button>
              <button className="menu-tab">Desserts</button>
              <button className="menu-tab">Drinks</button>
            </div>
            
            <div className="table-actions">
              <div className="search-filter">
                <input type="text" placeholder="Search menu items..." />
              </div>
              <button className="primary-btn">
                + Add Menu Item
              </button>
            </div>
            
            <div className="empty-page">
              <BookOpen size={48} className="empty-page-icon" />
              <p className="empty-page-title">Menu Management</p>
              <p className="empty-page-text">Add, edit, or remove items from your restaurant menu</p>
              <button className="action-btn">
                Add Your First Item
              </button>
            </div>
          </div>
        );
        
      case 'reports':
        return (
          <div className="page-container">
            <h2 className="page-title">Reports & Analytics</h2>
            
            <div className="report-tabs">
              <button className="report-tab active">Sales</button>
              <button className="report-tab">Reservations</button>
              <button className="report-tab">Customers</button>
              <button className="report-tab">Inventory</button>
            </div>
            
            <div className="report-period">
              <select>
                <option>Last 7 Days</option>
                <option>Last 30 Days</option>
                <option>Last 3 Months</option>
                <option>Last 12 Months</option>
                <option>Custom Range</option>
              </select>
              <button className="export-btn">
                Export Report
              </button>
            </div>
            
            <div className="report-content">
              <div className="report-stats">
                <div className="report-stat">
                  <h3>Total Revenue</h3>
                  <p>$8,450.00</p>
                </div>
                <div className="report-stat">
                  <h3>Average Order Value</h3>
                  <p>$42.25</p>
                </div>
                <div className="report-stat">
                  <h3>Busiest Day</h3>
                  <p>Saturday</p>
                </div>
                <div className="report-stat">
                  <h3>New Customers</h3>
                  <p>24</p>
                </div>
              </div>
              
              <div className="report-chart">
                <div className="chart-placeholder">
                  <PieChart size={48} className="empty-page-icon" />
                  <p>Sales chart will appear here</p>
                </div>
              </div>
              
              <div className="report-table">
                <h3>Top Selling Items</h3>
                <div className="table-placeholder">
                  <ClipboardList size={48} className="empty-page-icon" />
                  <p>Top items table will appear here</p>
                </div>
              </div>
            </div>
          </div>
        );
        
      case 'settings':
        return (
          <div className="page-container">
            <h2 className="page-title">Restaurant Settings</h2>
            
            <div className="settings-tabs">
              <button className="settings-tab active">General</button>
              <button className="settings-tab">Staff</button>
              <button className="settings-tab">Online Ordering</button>
              <button className="settings-tab">Notifications</button>
              <button className="settings-tab">Integrations</button>
            </div>
            
            <div className="settings-form">
              <div className="form-section">
                <h3>Restaurant Information</h3>
                <div className="form-row">
                  <div className="form-group">
                    <label>Restaurant Name</label>
                    <input type="text" value="GoodBites" />
                  </div>
                  <div className="form-group">
                    <label>Phone Number</label>
                    <input type="text" value="(555) 123-4567" />
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group">
                    <label>Address</label>
                    <input type="text" value="123 Main Street" />
                  </div>
                  <div className="form-group">
                    <label>City</label>
                    <input type="text" value="Anytown" />
                  </div>
                </div>
              </div>
              
              <div className="form-section">
                <h3>Business Hours</h3>
                <div className="hours-grid">
                  {['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'].map(day => (
                    <div key={day} className="hours-row">
                      <div className="hours-day">{day}</div>
                      <div className="hours-time">
                        <select>
                          <option>11:00 AM</option>
                          <option>12:00 PM</option>
                        </select>
                        <span>to</span>
                        <select>
                          <option>9:00 PM</option>
                          <option>10:00 PM</option>
                          <option>11:00 PM</option>
                        </select>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="form-actions">
                <button className="cancel-btn">Cancel</button>
                <button className="save-btn">Save Changes</button>
              </div>
            </div>
          </div>
        );
        
      default:
        return <div className="page-container"><h2 className="page-title">Admin Dashboard</h2></div>;
    }
  };

  return (
    <div className="dashboard-container">
      {/* Sidebar */}
      <div className={`sidebar ${collapsed ? 'sidebar-collapsed' : ''}`}>
        <div className="sidebar-header">
          {!collapsed && <h1 className="brand-name">Admin Panel</h1>}
          <button 
            onClick={toggleSidebar} 
            className="sidebar-toggle"
          >
            {collapsed ? <Menu size={20} /> : <X size={20} />}
          </button>
        </div>
        
        <div className="nav-container">
          <ul className="nav-list">
            {navItems.map(item => (
              <li key={item.id}>
                <button
                  onClick={() => handleNavigation(item.id)}
                  className={`nav-item ${collapsed ? 'nav-item-collapsed' : ''} ${
                    activePage === item.id && !loading
                      ? 'nav-item-active' 
                      : ''
                  }`}
                >
                  <span className={collapsed ? '' : 'nav-icon'}>{item.icon}</span>
                  {!collapsed && <span>{item.label}</span>}
                </button>
              </li>
            ))}
          </ul>
        </div>
        
        <div className="sidebar-footer">
          {!collapsed && (
            <div className="support-box">
              <p className="support-text">System Status: <span className="status-online">Online</span></p>
              <p className="support-text">Version: 2.4.1</p>
            </div>
          )}
        </div>
      </div>
      
      {/* Main Content */}
      <div className="main-container">
        {/* Header */}
        <header className="main-header">
          <div className="header-left">
            <h2 className="header-title">Admin Dashboard</h2>
          </div>
          
          <div className="header-right">
            <button className="notification-btn">
              <Bell size={20} />
              <span className="notification-badge">3</span>
            </button>
            <div className="user-info">
              <div className="user-avatar admin">
                AD
              </div>
              {!collapsed && <span className="user-name">Admin</span>}
            </div>
          </div>
        </header>
        
        {/* Main Content */}
        <main className="main-content">
          {renderContent()}
        </main>
      </div>
    </div>
  );
}