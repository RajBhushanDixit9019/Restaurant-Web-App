import { useState } from 'react';
import { Home, Clock, Utensils, CheckCircle, XCircle, Loader2, ChefHat, List, Settings, X, Menu } from 'lucide-react';
import styled, { keyframes, css } from 'styled-components';

// Keyframe animations
const fadeSlideUp = keyframes`
  0% {
    opacity: 0;
    transform: translateY(20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
`;

const spin = keyframes`
  to {
    transform: rotate(360deg);
  }
`;

// Theme variables
const theme = {
  colors: {
    primary: '#00796b',
    primaryDark: '#004d40',
    primaryLight: '#e0f7fa',
    accent: '#80cbc4',
    error: '#d32f2f',
    textDark: '#000000',
    textLight: '#ffffff',
    pending: '#f59e0b',
    preparing: '#3b82f6',
    ready: '#10b981',
  },
  shadows: {
    card: '0 6px 12px rgba(0, 0, 0, 0.1)',
    main: '0 8px 16px rgba(0, 0, 0, 0.3)',
    focus: '0 8px 16px rgba(0, 150, 136, 0.4)',
  },
  borderRadius: {
    small: '12px',
    medium: '15px',
    large: '20px',
    xlarge: '25px',
  },
};

// Base styles
const GlobalStyles = styled.div`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;
  }

  html, body {
    height: 100%;
    width: 100%;
  }
`;

// Dashboard Container
const DashboardContainer = styled.div`
  display: flex;
  height: 100vh;
  width: 100%;
  background-color: ${theme.colors.primaryLight};
`;

// Sidebar Styles
const Sidebar = styled.div`
  background-color: white;
  box-shadow: ${theme.shadows.main};
  width: 16rem;
  transition: all 0.3s;
  display: flex;
  flex-direction: column;
  border-top-right-radius: ${theme.borderRadius.medium};
  border-bottom-right-radius: ${theme.borderRadius.medium};

  ${props => props.collapsed && css`
    width: 4rem;
  `}
`;

const SidebarHeader = styled.div`
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${theme.colors.primary};
  border-top-right-radius: ${theme.borderRadius.medium};
`;

const BrandName = styled.h1`
  font-size: 1.3rem;
  font-weight: 700;
  color: white;
  animation: ${fadeSlideUp} 0.5s ease forwards;
`;

const SidebarToggle = styled.button`
  padding: 0.25rem;
  border-radius: 0.375rem;
  color: white;
  background-color: rgba(255, 255, 255, 0.2);
  border: none;
  cursor: pointer;

  &:hover {
    background-color: rgba(255, 255, 255, 0.3);
  }
`;

// Navigation
const NavContainer = styled.div`
  flex: 1;
  padding: 1rem 0;
`;

const NavList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin: 10px;
`;

const NavItem = styled.button`
  display: flex;
  align-items: center;
  padding: 0.75rem 1rem;
  width: 90%;
  margin: 7px auto;
  color: ${theme.colors.textDark};
  background-color: #ffffff;
  border-radius: ${theme.borderRadius.xlarge};
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: ${theme.shadows.card};

  &:hover {
    background-color: ${theme.colors.primaryLight};
    transform: translateY(-2px);
    box-shadow: ${theme.shadows.focus};
  }

  ${props => props.collapsed && css`
    justify-content: center;
    padding: 0.75rem;
    width: auto;
  `}

  ${props => props.active && css`
    background-color: ${theme.colors.primaryDark};
    color: ${theme.colors.textLight};
    font-weight: 600;
  `}
`;

const NavIcon = styled.span`
  margin-right: 0.75rem;
  color: ${theme.colors.primaryDark};

  ${props => props.active && css`
    color: ${theme.colors.textLight};
  `}
`;

// Sidebar Footer
const SidebarFooter = styled.div`
  padding: 1rem;
  background-color: white;
  border-bottom-right-radius: ${theme.borderRadius.medium};
`;

const SupportBox = styled.div`
  padding: 0.75rem;
  background-color: ${theme.colors.primaryLight};
  border-radius: ${theme.borderRadius.small};
  text-align: center;
  box-shadow: ${theme.shadows.card};
`;

const SupportText = styled.p`
  color: ${theme.colors.primaryDark};
  font-size: 0.875rem;
  margin-bottom: 0.5rem;
  font-weight: 500;
`;

const SupportButton = styled.button`
  background-color: ${theme.colors.primaryDark};
  color: white;
  width: 100%;
  padding: 0.5rem;
  border-radius: ${theme.borderRadius.large};
  font-size: 0.875rem;
  font-weight: bold;
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background-color: #00251a;
  }
`;

// Main Content Area
const MainContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  overflow: hidden;
`;

const MainHeader = styled.header`
  background-color: white;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  padding: 1rem 2rem;
  display: flex;
  margin:10px;
  align-items: center;
  justify-content: space-between;
  border-top-left-radius: ${theme.borderRadius.medium};
`;

const HeaderLeft = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;
`;

const HeaderTitle = styled.h2`
  font-size: 1.4rem;
  font-weight: 700;
  color: ${theme.colors.primaryDark};
`;

const HeaderRight = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;
`;

// User Info
const UserInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
`;

const UserAvatar = styled.div`
  height: 2.5rem;
  width: 2.5rem;
  border-radius: 50%;
  background-color: ${theme.colors.primary};
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: 600;
  box-shadow: ${theme.shadows.card};
`;

const UserName = styled.span`
  font-weight: 600;
  color: ${theme.colors.primaryDark};
`;

// Main Content
const MainContent = styled.main`
  flex: 1;
  overflow: auto;
  padding: 1.5rem;
  background-color: ${theme.colors.primaryLight};
`;

// Orders Container
const OrdersContainer = styled.div`
  padding: 1rem;
`;

const DashboardTitle = styled.h2`
  font-size: 1.8rem;
  font-weight: 700;
  color: ${theme.colors.primaryDark};
  margin-bottom: 1.5rem;
  text-align: center;
`;

// Status Tabs
const OrderStatusTabs = styled.div`
  display: flex;
  gap: 0.75rem;
  margin-bottom: 2rem;
  overflow-x: auto;
  padding-bottom: 0.75rem;
`;

const StatusTab = styled.button`
  padding: 0.75rem 1.5rem;
  border-radius: ${theme.borderRadius.xlarge};
  background-color: white;
  border: 2px solid ${theme.colors.primaryLight};
  font-size: 0.9rem;
  font-weight: 500;
  white-space: nowrap;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: ${theme.shadows.card};
  color: ${theme.colors.primaryDark}; // Add this line to ensure text is visible

  &.active {
    background-color: ${theme.colors.primary};
    color: white;
    border-color: ${theme.colors.primary};
  }

  &:not(.active) {
    color: ${theme.colors.textDark}; // Explicitly set color for inactive tabs
  }
`;

// Orders Grid
const OrdersGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 1.5rem;
  color:black;
`;

// Order Cards
const OrderCard = styled.div`
  background-color: white;
  border-radius: ${theme.borderRadius.medium};
  padding: 1.25rem;
  box-shadow: ${theme.shadows.main};
  border-left: 6px solid ${theme.colors.primary};
  transition: transform 0.3s ease;
  animation: ${fadeSlideUp} 1s ease forwards;
  animation-delay: 0.2s;

  &:hover {
    transform: translateY(-5px);
    box-shadow: ${theme.shadows.focus};
  }

  ${props => props.status === 'pending' && css`
    border-left-color: ${theme.colors.pending};
  `}

  ${props => props.status === 'preparing' && css`
    border-left-color: ${theme.colors.preparing};
  `}

  ${props => props.status === 'ready' && css`
    border-left-color: ${theme.colors.ready};
  `}
`;

// Order Header
const OrderHeader = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 1rem;
  padding-bottom: 0.75rem;
  border-bottom: 2px dashed ${theme.colors.primaryLight};
`;

const OrderMeta = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  font-size: 0.9rem;
  color: #555;
`;

const OrderTime = styled.span`
  font-weight: 600;
`;

const OrderTable = styled.span`
  font-size: 0.8rem;
  font-weight: 500;
`;

// Order Items
const OrderItems = styled.div`
  margin: 1rem 0;
`;

const OrderItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.75rem 0;
  border-bottom: 1px dashed ${theme.colors.primaryLight};

  &:last-child {
    border-bottom: none;
  }
`;

const ItemInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
`;

const ItemQuantity = styled.span`
  font-weight: 700;
  color: ${theme.colors.primary};
`;

const ItemName = styled.span`
  font-weight: 600;
`;

// Item Status
const ItemStatus = styled.span`
  font-size: 0.75rem;
  padding: 0.35rem 0.75rem;
  border-radius: ${theme.borderRadius.xlarge};
  font-weight: 500;

  ${props => props.status === 'pending' && css`
    background-color: #fef3c7;
    color: #92400e;
  `}

  ${props => props.status === 'preparing' && css`
    background-color: #dbeafe;
    color: #1e40af;
  `}

  ${props => props.status === 'ready' && css`
    background-color: #d1fae5;
    color: #065f46;
  `}
`;

// Action Buttons
const ActionButton = styled.button`
  padding: 0.5rem 1rem;
  border-radius: ${theme.borderRadius.large};
  font-size: 0.8rem;
  font-weight: bold;
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: ${theme.shadows.card};

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  }

  ${props => props.variant === 'start' && css`
    background-color: ${theme.colors.primaryDark};
    color: white;
  `}

  ${props => props.variant === 'complete' && css`
    background-color: ${theme.colors.primaryDark};
    color: white;
  `}

  ${props => props.variant === 'served' && css`
    background-color: ${theme.colors.accent};
    color: white;
    cursor: not-allowed;
  `}
`;

// Order Footer
const OrderFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 1rem;
  padding-top: 0.75rem;
  border-top: 2px dashed ${theme.colors.primaryLight};
`;

const OrderStatus = styled.div`
  font-size: 0.9rem;
  font-weight: 500;
`;

const StatusBadge = styled.span`
  padding: 0.5rem 1rem;
  border-radius: ${theme.borderRadius.xlarge};
  font-size: 0.8rem;
  font-weight: 600;

  ${props => props.status === 'pending' && css`
    background-color: #fef3c7;
    color: #92400e;
  `}

  ${props => props.status === 'preparing' && css`
    background-color: #dbeafe;
    color: #1e40af;
  `}

  ${props => props.status === 'ready' && css`
    background-color: #d1fae5;
    color: #065f46;
  `}
`;

// Kitchen Status
const KitchenStatus = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  font-size: 0.9rem;
`;

const StatusIndicator = styled.div`
  width: 0.85rem;
  height: 0.85rem;
  border-radius: 50%;
  background-color: ${theme.colors.primary};
`;

const StatusText = styled.span`
  color: #555;
  font-weight: 600;
`;

// Loading State
const LoadingContainer = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: ${theme.colors.primary};
`;

const Spinner = styled(Loader2)`
  animation: ${spin} 1s linear infinite;
  margin-bottom: 1.5rem;
  color: ${theme.colors.primary};
`;

// Empty State
const EmptyState = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 3rem;
  text-align: center;
  background-color: white;
  border-radius: ${theme.borderRadius.medium};
  box-shadow: ${theme.shadows.main};
  margin-top: 2rem;
  animation: ${fadeSlideUp} 1s ease forwards;
  animation-delay: 0.6s;
`;

const EmptyIcon = styled.div`
  color: ${theme.colors.primary};
  margin-bottom: 1.5rem;
  font-size: 3rem;
`;

const EmptyTitle = styled.p`
  font-size: 1.5rem;
  font-weight: 700;
  color: ${theme.colors.primaryDark};
  margin-bottom: 0.5rem;
`;

const EmptyText = styled.p`
  color: #333;
  margin-bottom: 1.5rem;
  max-width: 400px;
  font-weight: 600;
`;

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
        <LoadingContainer>
          <Spinner size={48} />
          <p>Loading...</p>
        </LoadingContainer>
      );
    }

    switch (activePage) {
      case 'orders':
        return (
          <OrdersContainer>
            <DashboardTitle>Kitchen Orders</DashboardTitle>
            
            <OrderStatusTabs>
              <StatusTab className="active">All Orders ({orders.length})</StatusTab>
              <StatusTab>Pending ({orders.filter(o => o.status === 'pending').length})</StatusTab>
              <StatusTab>Preparing ({orders.filter(o => o.status === 'preparing').length})</StatusTab>
              <StatusTab>Ready ({orders.filter(o => o.status === 'ready').length})</StatusTab>
            </OrderStatusTabs>
            
            <OrdersGrid>
              {orders.map(order => (
                <OrderCard key={order.id} status={order.status}>
                  <OrderHeader>
                    <h3>Order #{order.id}</h3>
                    <OrderMeta>
                      <OrderTime>{order.time}</OrderTime>
                      <OrderTable>{order.table}</OrderTable>
                    </OrderMeta>
                  </OrderHeader>
                  
                  <OrderItems>
                    {order.items.map((item, index) => (
                      <OrderItem key={index}>
                        <ItemInfo>
                          <ItemQuantity>{item.quantity}x</ItemQuantity>
                          <ItemName>{item.name}</ItemName>
                        </ItemInfo>
                        <div>
                          <ItemStatus status={item.status}>
                            {item.status.charAt(0).toUpperCase() + item.status.slice(1)}
                          </ItemStatus>
                          {item.status === 'pending' && (
                            <ActionButton 
                              onClick={() => updateItemStatus(order.id, item.name, 'preparing')}
                              variant="start"
                            >
                              Start
                            </ActionButton>
                          )}
                          {item.status === 'preparing' && (
                            <ActionButton 
                              onClick={() => updateItemStatus(order.id, item.name, 'ready')}
                              variant="complete"
                            >
                              Complete
                            </ActionButton>
                          )}
                        </div>
                      </OrderItem>
                    ))}
                  </OrderItems>
                  
                  <OrderFooter>
                    <OrderStatus>
                      Status: <StatusBadge status={order.status}>
                        {order.status.charAt(0).toUpperCase() + order.status.slice(1)}
                      </StatusBadge>
                    </OrderStatus>
                    <div>
                      {order.status === 'pending' && (
                        <ActionButton 
                          onClick={() => updateOrderStatus(order.id, 'preparing')}
                          variant="start"
                        >
                          Start All
                        </ActionButton>
                      )}
                      {order.status === 'preparing' && (
                        <ActionButton 
                          onClick={() => updateOrderStatus(order.id, 'ready')}
                          variant="complete"
                        >
                          Complete All
                        </ActionButton>
                      )}
                      {order.status === 'ready' && (
                        <ActionButton variant="served" disabled>
                          Awaiting Pickup
                        </ActionButton>
                      )}
                    </div>
                  </OrderFooter>
                </OrderCard>
              ))}
              
              {orders.length === 0 && (
                <EmptyState>
                  <EmptyIcon as={ChefHat} size={48} />
                  <EmptyTitle>No orders at the moment</EmptyTitle>
                  <EmptyText>When new orders arrive, they'll appear here.</EmptyText>
                </EmptyState>
              )}
            </OrdersGrid>
          </OrdersContainer>
        );
        
      case 'menu':
        return (
          <OrdersContainer>
            <DashboardTitle>Menu Items</DashboardTitle>
            <EmptyState>
              <EmptyIcon as={Utensils} size={48} />
              <EmptyTitle>Menu Management</EmptyTitle>
              <EmptyText>View and manage menu items and ingredients</EmptyText>
              <ActionButton variant="start">
                Coming Soon
              </ActionButton>
            </EmptyState>
          </OrdersContainer>
        );
        
      case 'settings':
        return (
          <OrdersContainer>
            <DashboardTitle>Kitchen Settings</DashboardTitle>
            <EmptyState>
              <EmptyIcon as={Settings} size={48} />
              <EmptyTitle>Kitchen Preferences</EmptyTitle>
              <EmptyText>Configure kitchen display and notifications</EmptyText>
              <ActionButton variant="start">
                Coming Soon
              </ActionButton>
            </EmptyState>
          </OrdersContainer>
        );
        
      default:
        return <OrdersContainer><DashboardTitle>Chef Dashboard</DashboardTitle></OrdersContainer>;
    }
  };

  return (
    <GlobalStyles>
      <DashboardContainer>
        {/* Sidebar */}
        <Sidebar collapsed={collapsed}>
          <SidebarHeader>
            {!collapsed && <BrandName>Kitchen View</BrandName>}
            <SidebarToggle onClick={toggleSidebar}>
              {collapsed ? <Menu size={20} /> : <X size={20} />}
            </SidebarToggle>
          </SidebarHeader>
          
          <NavContainer>
            <NavList>
              {navItems.map(item => (
                <li key={item.id}>
                  <NavItem
                    onClick={() => handleNavigation(item.id)}
                    collapsed={collapsed}
                    active={activePage === item.id && !loading}
                  >
                    <NavIcon active={activePage === item.id && !loading}>{item.icon}</NavIcon>
                    {!collapsed && <span>{item.label}</span>}
                  </NavItem>
                </li>
              ))}
            </NavList>
          </NavContainer>
          
          <SidebarFooter>
            {!collapsed && (
              <SupportBox>
                <SupportText>Need help in the kitchen?</SupportText>
                <SupportButton>
                  Call Manager
                </SupportButton>
              </SupportBox>
            )}
          </SidebarFooter>
        </Sidebar>
        
        {/* Main Content */}
        <MainContainer>
          {/* Header */}
          <MainHeader>
            <HeaderLeft>
              <HeaderTitle>Chef Dashboard</HeaderTitle>
            </HeaderLeft>
            
            <HeaderRight>
              <KitchenStatus>
                <StatusIndicator />
                <StatusText>Kitchen Active</StatusText>
              </KitchenStatus>
              <UserInfo>
                <UserAvatar>
                  <ChefHat size={18} />
                </UserAvatar>
                {!collapsed && <UserName>Chef Michael</UserName>}
              </UserInfo>
            </HeaderRight>
          </MainHeader>
          
          {/* Main Content */}
          <MainContent>
            {renderContent()}
          </MainContent>
        </MainContainer>
      </DashboardContainer>
    </GlobalStyles>
  );
}