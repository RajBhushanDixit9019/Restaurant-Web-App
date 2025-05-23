import { useState } from 'react';
import { Home, Clock, Utensils, CheckCircle, XCircle, Loader2, ChefHat, List, Settings, X, Menu } from 'lucide-react';
import './ChiefDashboard.css';

export default function ChiefDashboard() {
  const [collapsed, setCollapsed] = useState(false);
  const [activePage, setActivePage] = useState('orders');
  const [loading, setLoading] = useState(false);
  
  // Sample orders data
  const [orders, setOrders] = useState([
    {
      id: 1,
      table: 'Table 5',
      items: [
        { name: 'Margherita Pizza', quantity: 1, status: 'pending' },
        { name: 'Caesar Salad', quantity: 2, status: 'pending' }
      ],
      time: '12:30 PM',
      status: 'pending'
    },
    {
      id: 2,
      table: 'Table 3',
      items: [
        { name: 'Spaghetti Carbonara', quantity: 1, status: 'preparing' },
        { name: 'Garlic Bread', quantity: 1, status: 'preparing' }
      ],
      time: '12:45 PM',
      status: 'preparing'
    },
    {
      id: 3,
      table: 'Takeaway #42',
      items: [
        { name: 'Chicken Burger', quantity: 1, status: 'ready' },
        { name: 'Fries', quantity: 1, status: 'ready' }
      ],
      time: '1:00 PM',
      status: 'ready'
    }
  ]);

  const navItems = [
    { id: 'orders', icon: <List size={20} />, label: 'Orders' },
    { id: 'menu', icon: <Utensils size={20} />, label: 'Menu' },
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

  const updateOrderStatus = (orderId, newStatus) => {
    setOrders(orders.map(order => 
      order.id === orderId ? { ...order, status: newStatus } : order
    ));
  };

  const updateItemStatus = (orderId, itemName, newStatus) => {
    setOrders(orders.map(order => 
      order.id === orderId 
        ? { 
            ...order, 
            items: order.items.map(item => 
              item.name === itemName ? { ...item, status: newStatus } : item
            ),
            status: order.items.every(i => i.status === 'ready') ? 'ready' : 'preparing'
          } 
        : order
    ));
  };

  const renderContent = () => {
    if (loading) {
      return (
        <div className="chef-loading-container">
          <Loader2 className="chef-spinner" size={48} />
          <p>Loading...</p>
        </div>
      );
    }

    switch (activePage) {
      case 'orders':
        return (
          <div className="chef-orders-container">
            <h2 className="chef-dashboard-title">Kitchen Orders</h2>
            
            <div className="chef-order-status-tabs">
              <button className="chef-status-tab active">All Orders ({orders.length})</button>
              <button className="chef-status-tab">Pending ({orders.filter(o => o.status === 'pending').length})</button>
              <button className="chef-status-tab">Preparing ({orders.filter(o => o.status === 'preparing').length})</button>
              <button className="chef-status-tab">Ready ({orders.filter(o => o.status === 'ready').length})</button>
            </div>
            
            <div className="chef-orders-grid">
              {orders.map(order => (
                <div key={order.id} className={`chef-order-card ${order.status}`}>
                  <div className="chef-order-header">
                    <h3>Order #{order.id}</h3>
                    <div className="chef-order-meta">
                      <span className="chef-order-time">{order.time}</span>
                      <span className="chef-order-table">{order.table}</span>
                    </div>
                  </div>
                  
                  <div className="chef-order-items">
                    {order.items.map((item, index) => (
                      <div key={index} className="chef-order-item">
                        <div className="chef-item-info">
                          <span className="chef-item-quantity">{item.quantity}x</span>
                          <span className="chef-item-name">{item.name}</span>
                        </div>
                        <div className="chef-item-actions">
                          <span className={`chef-item-status ${item.status}`}>
                            {item.status.charAt(0).toUpperCase() + item.status.slice(1)}
                          </span>
                          {item.status === 'pending' && (
                            <button 
                              onClick={() => updateItemStatus(order.id, item.name, 'preparing')}
                              className="chef-action-btn chef-start-btn"
                            >
                              Start
                            </button>
                          )}
                          {item.status === 'preparing' && (
                            <button 
                              onClick={() => updateItemStatus(order.id, item.name, 'ready')}
                              className="chef-action-btn chef-complete-btn"
                            >
                              Complete
                            </button>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  <div className="chef-order-footer">
                    <div className="chef-order-status">
                      Status: <span className={`chef-status-badge ${order.status}`}>
                        {order.status.charAt(0).toUpperCase() + order.status.slice(1)}
                      </span>
                    </div>
                    <div className="chef-order-actions">
                      {order.status === 'pending' && (
                        <button 
                          onClick={() => updateOrderStatus(order.id, 'preparing')}
                          className="chef-action-btn chef-start-all-btn"
                        >
                          Start All
                        </button>
                      )}
                      {order.status === 'preparing' && (
                        <button 
                          onClick={() => updateOrderStatus(order.id, 'ready')}
                          className="chef-action-btn chef-complete-all-btn"
                        >
                          Complete All
                        </button>
                      )}
                      {order.status === 'ready' && (
                        <button className="chef-action-btn chef-served-btn" disabled>
                          Awaiting Pickup
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              ))}
              
              {orders.length === 0 && (
                <div className="chef-empty-state">
                  <ChefHat size={48} className="chef-empty-icon" />
                  <p className="chef-empty-title">No orders at the moment</p>
                  <p className="chef-empty-text">When new orders arrive, they'll appear here.</p>
                </div>
              )}
            </div>
          </div>
        );
        
      case 'menu':
        return (
          <div className="chef-orders-container">
            <h2 className="chef-dashboard-title">Menu Items</h2>
            <div className="chef-empty-state">
              <Utensils size={48} className="chef-empty-icon" />
              <p className="chef-empty-title">Menu Management</p>
              <p className="chef-empty-text">View and manage menu items and ingredients</p>
              <button className="chef-action-btn chef-start-btn">
                Coming Soon
              </button>
            </div>
          </div>
        );
        
      case 'settings':
        return (
          <div className="chef-orders-container">
            <h2 className="chef-dashboard-title">Kitchen Settings</h2>
            <div className="chef-empty-state">
              <Settings size={48} className="chef-empty-icon" />
              <p className="chef-empty-title">Kitchen Preferences</p>
              <p className="chef-empty-text">Configure kitchen display and notifications</p>
              <button className="chef-action-btn chef-start-btn">
                Coming Soon
              </button>
            </div>
          </div>
        );
        
      default:
        return <div className="chef-orders-container"><h2 className="chef-dashboard-title">Chef Dashboard</h2></div>;
    }
  };

  return (
    <div className="chef-dashboard-container">
      {/* Sidebar */}
      <div className={`chef-sidebar ${collapsed ? 'chef-sidebar-collapsed' : ''}`}>
        <div className="chef-sidebar-header">
          {!collapsed && <h1 className="chef-brand-name">Kitchen View</h1>}
          <button 
            onClick={toggleSidebar} 
            className="chef-sidebar-toggle"
          >
            {collapsed ? <Menu size={20} /> : <X size={20} />}
          </button>
        </div>
        
        <div className="chef-nav-container">
          <ul className="chef-nav-list">
            {navItems.map(item => (
              <li key={item.id}>
                <button
                  onClick={() => handleNavigation(item.id)}
                  className={`chef-nav-item ${collapsed ? 'chef-nav-item-collapsed' : ''} ${
                    activePage === item.id && !loading
                      ? 'chef-nav-item-active' 
                      : ''
                  }`}
                >
                  <span className={`chef-nav-icon ${collapsed ? '' : ''}`}>{item.icon}</span>
                  {!collapsed && <span>{item.label}</span>}
                </button>
              </li>
            ))}
          </ul>
        </div>
        
        <div className="chef-sidebar-footer">
          {!collapsed && (
            <div className="chef-support-box">
              <p className="chef-support-text">Need help in the kitchen?</p>
              <button className="chef-support-btn">
                Call Manager
              </button>
            </div>
          )}
        </div>
      </div>
      
      {/* Main Content */}
      <div className="chef-main-container">
        {/* Header */}
        <header className="chef-main-header">
          <div className="chef-header-left">
            <h2 className="chef-header-title">Chef Dashboard</h2>
          </div>
          
          <div className="chef-header-right">
            <div className="chef-kitchen-status">
              <div className="chef-status-indicator"></div>
              <span className="chef-status-text">Kitchen Active</span>
            </div>
            <div className="chef-user-info">
              <div className="chef-user-avatar">
                <ChefHat size={18} />
              </div>
              {!collapsed && <span className="chef-user-name">Chef Michael</span>}
            </div>
          </div>
        </header>
        
        {/* Main Content */}
        <main className="chef-main-content">
          {renderContent()}
        </main>
        
        
      </div>
    </div>
  );
}