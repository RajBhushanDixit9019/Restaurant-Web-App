import { useState } from 'react';
import { Home, User, Calendar, ShoppingBag, Clock, Settings, Menu, X, ChevronRight, Bell } from 'lucide-react';
import '../styles/RestaurantDashboard.css';

export default function RestaurantDashboard() {
  const [collapsed, setCollapsed] = useState(false);
  const [activePage, setActivePage] = useState('home');
  
  // Sample data for the dashboard
  const upcomingReservations = [];
  const recentOrders = [];
  const favoriteItems = [];

  const navItems = [
    { id: 'home', icon: <Home size={20} />, label: 'Dashboard' },
    { id: 'menu', icon: <ShoppingBag size={20} />, label: 'Menu' },
    { id: 'orders', icon: <Clock size={20} />, label: 'Orders' },
    { id: 'cart', icon: <Calendar size={20} />, label: 'Cart' },
    { id: 'profile', icon: <User size={20} />, label: 'Profile' }
  ];
  
  const toggleSidebar = () => {
    setCollapsed(!collapsed);
  };
  
  const renderContent = () => {
    switch (activePage) {
      case 'home':
        return (
          <div>
            <h2 className="dashboard-title">Dashboard Overview</h2>
            
            <div className="stats-grid">
              <div className="stat-card">
                <h3 className="stat-label">Upcoming Reservations</h3>
                <p className="stat-value">0</p>
              </div>
              <div className="stat-card">
                <h3 className="stat-label">Recent Orders</h3>
                <p className="stat-value">0</p>
              </div>
              <div className="stat-card">
                <h3 className="stat-label">Reward Points</h3>
                <p className="stat-value">0</p>
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
                <div className="empty-state">
                  <Calendar size={40} className="empty-icon" />
                  <p className="empty-text">No upcoming reservations</p>
                  <button className="action-btn">
                    Make a Reservation
                  </button>
                </div>
              </div>
              
              <div className="content-card">
                <div className="card-header">
                  <h3 className="card-title">Recent Orders</h3>
                  <button className="view-all-btn">
                    View All <ChevronRight size={16} />
                  </button>
                </div>
                <div className="empty-state">
                  <ShoppingBag size={40} className="empty-icon" />
                  <p className="empty-text">No orders yet</p>
                  <button className="action-btn">
                    Browse Menu
                  </button>
                </div>
              </div>
              
              <div className="content-card">
                <div className="card-header">
                  <h3 className="card-title">Your Favorite Items</h3>
                  <button className="view-all-btn">
                    View Menu <ChevronRight size={16} />
                  </button>
                </div>
                <div className="empty-state">
                  <Clock size={40} className="empty-icon" />
                  <p className="empty-text">No favorite items yet</p>
                  <button className="action-btn">
                    Explore Menu
                  </button>
                </div>
              </div>
              
              <div className="content-card">
                <div className="card-header">
                  <h3 className="card-title">Special Offers</h3>
                  <button className="view-all-btn">
                    All Offers <ChevronRight size={16} />
                  </button>
                </div>
                <div className="offer-card">
                  <p className="offer-title">15% Off Your Next Order</p>
                  <p className="offer-subtitle">Use code: TASTY15</p>
                  <p className="offer-expiry">Valid until May 15, 2025</p>
                </div>
                <div className="offer-card">
                  <p className="offer-title">Free Dessert</p>
                  <p className="offer-subtitle">With any order over $50</p>
                  <p className="offer-expiry">Valid until May 31, 2025</p>
                </div>
              </div>
            </div>
          </div>
        );
      case 'menu':
        return (
          <div className="page-container">
            <h2 className="page-title">Menu</h2>
            <div className="empty-page">
              <ShoppingBag size={48} className="empty-page-icon" />
              <p className="empty-page-title">Menu items will appear here</p>
              <p className="empty-page-text">Browse our delicious offerings and place your order</p>
              <button className="action-btn">
                Coming Soon
              </button>
            </div>
          </div>
        );
      case 'orders':
        return (
          <div className="page-container">
            <h2 className="page-title">Orders</h2>
            <div className="empty-page">
              <Clock size={48} className="empty-page-icon" />
              <p className="empty-page-title">No orders found</p>
              <p className="empty-page-text">Your current and past orders will appear here</p>
              <button className="action-btn">
                Start Ordering
              </button>
            </div>
          </div>
        );
      case 'cart':
        return (
          <div className="page-container">
            <h2 className="page-title">Cart</h2>
            <div className="empty-page">
              <Calendar size={48} className="empty-page-icon" />
              <p className="empty-page-title">Your cart is empty</p>
              <p className="empty-page-text">Add items to your cart to place an order</p>
              <button className="action-btn">
                Browse Menu
              </button>
            </div>
          </div>
        );
      case 'profile':
        return (
          <div className="page-container">
            <h2 className="page-title">Profile</h2>
            <div className="empty-page">
              <User size={48} className="empty-page-icon" />
              <p className="empty-page-title">Profile not set up</p>
              <p className="empty-page-text">Complete your profile to enhance your experience</p>
              <button className="action-btn">
                Set Up Profile
              </button>
            </div>
          </div>
        );
      default:
        return <div className="page-container"><h2 className="page-title">Dashboard</h2></div>;
    }
  };

  return (
    <div className="dashboard-container">
      {/* Sidebar */}
      <div className={`sidebar ${collapsed ? 'sidebar-collapsed' : ''}`}>
        <div className="sidebar-header">
          {!collapsed && <h1 className="brand-name">Bella Italia</h1>}
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
                  onClick={() => setActivePage(item.id)}
                  className={`nav-item ${collapsed ? 'nav-item-collapsed' : ''} ${
                    activePage === item.id 
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
              <p className="support-text">Need help?</p>
              <button className="support-btn">
                Contact Support
              </button>
            </div>
          )}
        </div>
      </div>
      
      {/* Main Content */}
      <div className="main-container">
        {/* Header */}
        <header className="main-header">
          <div className="header-left">
            <h2 className="header-title">Customer Dashboard</h2>
          </div>
          
          <div className="header-right">
            <button className="notification-btn">
              <Bell size={20} />
              <span className="notification-badge"></span>
            </button>
            <div className="user-info">
              <div className="user-avatar">
                JD
              </div>
              {!collapsed && <span className="user-name">John Doe</span>}
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