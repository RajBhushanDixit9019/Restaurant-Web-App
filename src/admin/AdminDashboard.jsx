import { useState } from 'react';
import styled, { keyframes, createGlobalStyle } from 'styled-components';
import { Home, Users, Calendar, PieChart, Settings, Menu, X, Bell, BookOpen, ClipboardList, DollarSign, ChevronRight, Loader2 } from 'lucide-react';

// Keyframes for animations
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

// Define a color palette based on the provided CSS
const colors = {
  primaryColor: '#00796b',
  primaryDark: '#004d40',
  primaryLight: '#e0f7fa',
  accentColor: '#80cbc4',
  errorColor: '#d32f2f',
  textDark: '#212121',
  textLight: '#ffffff',
  shadow: '0 8px 16px rgba(0, 0, 0, 0.3)',
  cardShadow: '0 6px 12px rgba(0, 0, 0, 0.1)',
  grayLight: '#f5f5f5',
  grayMedium: '#e0e0e0',
  grayDark: '#616161',
  statusConfirmedBg: '#d1fae5',
  statusConfirmedText: '#065f46',
  statusPendingBg: '#fef3c7',
  statusPendingText: '#92400e',
  statusCancelledBg: '#fee2e2',
  statusCancelledText: '#b91c1c',
  actionEditBg: '#dbeafe',
  actionEditText: '#1e40af',
  actionEditHoverBg: '#3b82f6',
  actionViewBg: '#e0f7fa', // primary-light
  actionViewText: '#004d40', // primary-dark
  actionViewHoverBg: '#00796b', // primary-color
  actionConfirmBg: '#d1fae5',
  actionConfirmText: '#065f46',
  actionConfirmHoverBg: '#10b981',
  actionMessageBg: '#e0f2fe',
  actionMessageText: '#0369a1',
  actionMessageHoverBg: '#0ea5e9',
};

// Global Styles for html, body, and universal box-sizing
const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap');
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

/* Dashboard Container */
export const DashboardContainer = styled.div`
  display: flex;
  height: 100vh; /* Use 100vh to ensure it takes full viewport height */
  width: 100%;
  background-color: ${colors.primaryLight};
`;

/* Sidebar Styles */
export const Sidebar = styled.div`
  background-color: white;
  box-shadow: ${colors.shadow};
  width: ${props => (props.collapsed ? '4rem' : '16rem')};
  height: 100%;
  transition: all 0.3s;
  display: flex;
  flex-direction: column;
  border-top-right-radius: 15px;
  border-bottom-right-radius: 15px;
  z-index: 10;

  @media (max-width: 768px) {
    width: ${props => (props.collapsed ? '4rem' : '5rem')}; /* Adjust collapsed width for mobile */
  }
`;

export const SidebarHeader = styled.div`
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${colors.primaryColor};
  border-top-right-radius: 15px;
`;

export const BrandName = styled.h1`
  font-size: 1.3rem;
  font-weight: 700;
  color: white;
  animation: ${fadeSlideUp} 0.5s ease forwards;
  
  @media (max-width: 768px) {
    display: none;
  }
`;

export const SidebarToggle = styled.button`
  padding: 0.25rem;
  border-radius: 0.375rem;
  color: white;
  background-color: rgba(255, 255, 255, 0.2);
  border: none;
  cursor: pointer;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: rgba(255, 255, 255, 0.3);
  }
`;

/* Navigation */
export const NavContainer = styled.div`
  flex: 1;
  padding: 1rem 0;
`;

export const NavList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin: 10px;
  list-style-type: none;
`;

export const NavItem = styled.button`
  display: flex;
  align-items: center;
  padding: 0.75rem 1rem;
  width: ${props => (props.collapsed ? 'auto' : '90%')};
  margin: 7px auto;
  color: ${colors.textDark};
  background-color: #ffffff;
  border-radius: 25px;
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: ${colors.cardShadow};
  
  &:hover {
    background-color: ${colors.primaryLight};
    transform: translateY(-2px);
    box-shadow: 0 8px 16px rgba(0, 150, 136, 0.4);
  }

  ${props => props.collapsed && `
    justify-content: center;
    padding: 0.75rem;
    width: auto;
  `}

  ${props => props.active && `
    background-color: ${colors.primaryDark};
    color: ${colors.textLight};
    font-weight: 600;
  `}
`;

export const NavIcon = styled.span`
  display: flex; /* Ensure flex for centering icon */
  align-items: center;
  justify-content: center;
  min-width: 20px; /* Give it a minimum width */
  height: 20px; /* Give it a minimum height */
  flex-shrink: 0; /* Prevent it from shrinking */
  margin-right: 0.75rem;
  color: ${props => (props.active ? colors.textLight : colors.primaryDark)}; /* Use active prop here */
  
  ${props => props.collapsed && `
    margin-right: 0;
  `}
`;

export const NavLabel = styled.span`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  ${props => props.collapsed && `
    display: none;
  `}
`;

/* Sidebar Footer */
export const SidebarFooter = styled.div`
  padding: 1rem;
  background-color: white;
  border-bottom-right-radius: 15px;
`;

export const SupportBox = styled.div`
  padding: 0.75rem;
  background-color: ${colors.primaryLight};
  border-radius: 12px;
  text-align: center;
  box-shadow: ${colors.cardShadow};
`;

export const SupportText = styled.p`
  color: ${colors.primaryDark};
  font-size: 0.875rem;
  margin-bottom: 0.5rem;
  font-weight: 500;
`;

export const StatusOnline = styled.span`
  color: #10b981; /* Specific green for online status */
  font-weight: 600;
`;

/* Main Content Area */
export const MainContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  height: 100%;
`;

export const MainHeader = styled.header`
  background-color: white;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  padding: 1rem 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-top-left-radius: 15px;
`;

export const HeaderLeft = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;
`;

export const HeaderTitle = styled.h2`
  font-size: 1.4rem;
  font-weight: 700;
  color: ${colors.primaryDark};
`;

export const HeaderRight = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;
`;

/* Notification Button */
export const NotificationBtn = styled.button`
  position: relative;
  padding: 0.5rem;
  border-radius: 50%;
  background: none;
  border: none;
  cursor: pointer;
  color: ${colors.primaryDark};
`;

export const NotificationBadge = styled.span`
  position: absolute;
  top: 0;
  right: 0;
  width: 0.75rem;
  height: 0.75rem;
  background-color: ${colors.errorColor};
  border-radius: 50%;
`;

/* User Info */
export const UserInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
`;

export const UserAvatar = styled.div`
  height: 2.5rem;
  width: 2.5rem;
  border-radius: 50%;
  background-color: ${colors.primaryColor};
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: 600;
  box-shadow: ${colors.cardShadow};

  &.admin {
    background-color: ${colors.primaryDark};
  }
`;

export const UserName = styled.span`
  font-weight: 600;
  color: ${colors.primaryDark};
  @media (max-width: 480px) {
    display: none;
  }
`;

/* Main Content */
export const MainContent = styled.main`
  flex: 1;
  overflow: auto;
  padding: 1.5rem;
  background-color: ${colors.primaryLight};
`;

/* Dashboard Title */
export const DashboardTitle = styled.h2`
  font-size: 1.8rem;
  font-weight: 700;
  color: ${colors.primaryDark};
  margin-bottom: 1.5rem;
  text-align: center;
`;

/* Stats Grid */
export const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
  margin-bottom: 2rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const StatCard = styled.div`
  background-color: white;
  padding: 1.5rem;
  border-radius: 15px;
  box-shadow: ${colors.shadow};
  animation: ${fadeSlideUp} 0.5s ease forwards;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 20px rgba(0, 150, 136, 0.4);
  }
`;

export const StatLabel = styled.h3`
  font-size: 1rem;
  font-weight: 600;
  color: ${colors.textDark};
  margin-bottom: 0.5rem;
`;

export const StatValue = styled.p`
  font-size: 2rem;
  font-weight: 700;
  color: ${colors.primaryDark};
`;

/* Content Grid */
export const ContentGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const ContentCard = styled.div`
  background-color: white;
  border-radius: 15px;
  padding: 1.25rem;
  box-shadow: ${colors.shadow};
  animation: ${fadeSlideUp} 0.7s ease forwards;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 20px rgba(0, 150, 136, 0.4);
  }
`;

export const CardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.25rem;
  border-bottom: 2px dashed ${colors.primaryLight};
  padding-bottom: 0.75rem;
`;

export const CardTitle = styled.h3`
  font-size: 1.2rem;
  font-weight: 600;
  color: ${colors.primaryDark};
`;

export const ViewAllBtn = styled.button`
  display: flex;
  align-items: center;
  gap: 0.25rem;
  padding: 0.25rem 0.5rem;
  font-size: 0.85rem;
  border-radius: 20px;
  border: none;
  background-color: ${colors.primaryLight};
  color: ${colors.primaryDark};
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background-color: ${colors.primaryColor};
    color: white;
  }
`;

/* Reservations List */
export const ReservationsList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const ReservationItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.75rem;
  border-radius: 12px;
  background-color: ${colors.grayLight};
`;

export const ReservationInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ReservationName = styled.span`
  font-weight: 600;
  color: ${colors.textDark};
`;

export const ReservationDetails = styled.span`
  font-size: 0.85rem;
  color: ${colors.textDark};
`;

export const ReservationStatus = styled.span`
  font-size: 0.75rem;
  padding: 0.35rem 0.75rem;
  border-radius: 25px;
  font-weight: 500;
  background-color: ${props => {
    if (props.status === 'confirmed') return colors.statusConfirmedBg;
    if (props.status === 'pending') return colors.statusPendingBg;
    return colors.statusCancelledBg;
  }};
  color: ${props => {
    if (props.status === 'confirmed') return colors.statusConfirmedText;
    if (props.status === 'pending') return colors.statusPendingText;
    return colors.statusCancelledText;
  }};
`;

/* Customers List */
export const CustomersList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const CustomerItem = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 0.75rem;
  border-radius: 12px;
  background-color: ${colors.grayLight};
`;

export const CustomerAvatar = styled.div`
  height: 2.5rem;
  width: 2.5rem;
  border-radius: 50%;
  background-color: ${colors.primaryColor};
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: 600;
`;

export const CustomerInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

export const CustomerName = styled.span`
  font-weight: 600;
  color: ${colors.textDark};
`;

export const CustomerDetails = styled.span`
  font-size: 0.85rem;
  color: ${colors.textDark};
`;

/* Sales Chart */
export const SalesChart = styled.div`
  height: 220px;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const ChartBars = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  height: 180px;
`;

export const ChartBarContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 18%;
`;

export const ChartBar = styled.div`
  width: 100%;
  background-color: ${colors.primaryColor};
  border-radius: 10px 10px 0 0;
  transition: height 1s ease;
`;

export const ChartLabel = styled.span`
  margin-top: 0.5rem;
  font-size: 0.85rem;
  color: ${colors.textDark};
`;

export const ChartLegend = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
`;

export const LegendItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

export const LegendColor = styled.span`
  height: 0.75rem;
  width: 0.75rem;
  border-radius: 2px;
  background-color: ${colors.primaryColor};
`;

export const LegendText = styled.span`
  font-size: 0.85rem;
  color: ${colors.textDark};
`;

/* Quick Actions */
export const QuickActions = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const ActionBtn = styled.button`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem;
  border-radius: 15px;
  background-color: ${colors.primaryLight};
  color: ${colors.primaryDark};
  border: none;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background-color: ${colors.primaryColor};
    color: white;
    transform: translateY(-3px);
    box-shadow: 0 6px 12px rgba(0, 150, 136, 0.4);
  }
`;

/* Page Container (for other pages) */
export const PageContainer = styled.div`
  padding: 1rem;
  animation: ${fadeSlideUp} 0.5s ease forwards;
`;

export const PageTitle = styled.h2`
  font-size: 1.8rem;
  font-weight: 700;
  color: ${colors.primaryDark};
  margin-bottom: 1.5rem;
  text-align: center;
`;

/* Table Actions */
export const TableActions = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 1.5rem;
  flex-wrap: wrap; /* Allow wrapping on smaller screens */
  gap: 1rem; /* Gap for wrapped items */

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1rem;
  }
`;

export const SearchFilter = styled.div`
  display: flex;
  gap: 0.75rem;
  flex-wrap: wrap; /* Allow wrapping for search/filter inputs */
`;

export const SearchInput = styled.input`
  padding: 0.5rem 1rem;
  border-radius: 20px;
  border: 1px solid ${colors.grayMedium};
  font-size: 0.9rem;
  background-color: white;
  color: ${colors.textDark};
  
  &:focus {
    outline: none;
    border-color: ${colors.primaryColor};
    box-shadow: 0 0 0 3px rgba(0, 150, 136, 0.2);
  }
`;

export const Select = styled.select`
  padding: 0.5rem 1rem;
  border-radius: 20px;
  border: 1px solid ${colors.grayMedium};
  font-size: 0.9rem;
  background-color: white;
  color: ${colors.textDark};
  
  &:focus {
    outline: none;
    border-color: ${colors.primaryColor};
    box-shadow: 0 0 0 3px rgba(0, 150, 136, 0.2);
  }
`;

export const PrimaryBtn = styled.button`
  padding: 0.5rem 1.25rem;
  border-radius: 20px;
  background-color: ${colors.primaryDark};
  color: white;
  border: none;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background-color: ${colors.primaryColor};
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(0, 150, 136, 0.4);
  }
`;

/* Data Table */
export const DataTable = styled.div`
  background: white;
  border-radius: 15px;
  overflow: hidden;
  box-shadow: ${colors.shadow};
  animation: ${fadeSlideUp} 0.7s ease forwards;
`;

export const TableHeader = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  padding: 1rem;
  background-color: ${colors.primaryDark};
  color: white;
  font-weight: 600;

  @media (max-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
    div:nth-child(n+4) {
      display: none;
    }
  }
  @media (max-width: 480px) {
    grid-template-columns: repeat(2, 1fr);
    div:nth-child(n+3) {
      display: none;
    }
  }
`;

export const HeaderCell = styled.div`
  display: flex;
  align-items: center;
  padding: 0 10px;
  text-align: left;
`;

export const TableRow = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  padding: 1rem;
  border-bottom: 1px solid ${colors.grayMedium};
  transition: background-color 0.3s ease;

  &:last-child {
    border-bottom: none;
  }
  &:hover {
    background-color: ${colors.primaryLight};
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
    div:nth-child(n+4) {
      display: none;
    }
  }
  @media (max-width: 480px) {
    grid-template-columns: repeat(2, 1fr);
    div:nth-child(n+3) {
      display: none;
    }
  }
`;

export const TableCell = styled.div`
  display: flex;
  align-items: center;
  color: ${colors.textDark};
`;

export const StatusBadge = styled.span`
  padding: 0.35rem 0.75rem;
  border-radius: 25px;
  font-size: 0.75rem;
  font-weight: 600;
  background-color: ${props => {
    if (props.status === 'confirmed' || props.status === 'ready') return colors.statusConfirmedBg;
    if (props.status === 'pending') return colors.statusPendingBg;
    return colors.statusCancelledBg;
  }};
  color: ${props => {
    if (props.status === 'confirmed' || props.status === 'ready') return colors.statusConfirmedText;
    if (props.status === 'pending') return colors.statusPendingText;
    return colors.statusCancelledText;
  }};
`;

export const ActionsCell = styled.div`
  display: flex;
  gap: 0.5rem;
`;

export const TableActionButton = styled.button`
  padding: 0.25rem 0.5rem;
  border-radius: 15px;
  font-size: 0.75rem;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease;

  &.edit {
    background-color: ${colors.actionEditBg};
    color: ${colors.actionEditText};
    &:hover {
      background-color: ${colors.actionEditHoverBg};
      color: white;
    }
  }
  &.view {
    background-color: ${colors.actionViewBg};
    color: ${colors.actionViewText};
    &:hover {
      background-color: ${colors.actionViewHoverBg};
      color: white;
    }
  }
  &.confirm {
    background-color: ${colors.actionConfirmBg};
    color: ${colors.actionConfirmText};
    &:hover {
      background-color: ${colors.actionConfirmHoverBg};
      color: white;
    }
  }
  &.cancel, &.delete {
    background-color: ${colors.statusCancelledBg};
    color: ${colors.statusCancelledText};
    &:hover {
      background-color: ${colors.errorColor};
      color: white;
    }
  }
  &.message {
    background-color: ${colors.actionMessageBg};
    color: ${colors.actionMessageText};
    &:hover {
      background-color: ${colors.actionMessageHoverBg};
      color: white;
    }
  }
`;

/* Menu Tabs and Settings Tabs */
export const MenuTabs = styled.div`
  display: flex;
  gap: 0.75rem;
  margin-bottom: 2rem;
  overflow-x: auto;
  padding-bottom: 0.75rem;
`;

export const MenuTab = styled.button`
  padding: 0.75rem 1.5rem;
  border-radius: 25px;
  background-color: white;
  border: 2px solid ${colors.primaryLight};
  font-size: 0.9rem;
  font-weight: 500;
  white-space: nowrap;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: ${colors.cardShadow};
  color: ${colors.textDark};

  &.active {
    background-color: ${colors.primaryColor};
    color: white;
    border-color: ${colors.primaryColor};
  }
`;

export const SettingsTabs = styled(MenuTabs)``;
export const SettingsTab = styled(MenuTab)``;
export const ReportTabs = styled(MenuTabs)``;
export const ReportTab = styled(MenuTab)``;

/* Empty Page */
export const EmptyPage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 3rem;
  text-align: center;
  background-color: white;
  border-radius: 15px;
  box-shadow: ${colors.shadow};
  margin-top: 2rem;
  animation: ${fadeSlideUp} 0.9s ease forwards;
`;

export const EmptyPageIcon = styled.div`
  color: ${colors.primaryColor};
  margin-bottom: 1.5rem;
`;

export const EmptyPageTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 700;
  color: ${colors.primaryDark};
  margin-bottom: 0.5rem;
`;

export const EmptyPageText = styled.p`
  color: ${colors.textDark};
  margin-bottom: 1.5rem;
  max-width: 400px;
  font-weight: 500;
`;

/* Report Period and Content */
export const ReportPeriod = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 1.5rem;
  flex-wrap: wrap; /* Allow wrapping on smaller screens */
  gap: 1rem; /* Gap for wrapped items */
`;

export const ExportBtn = styled(PrimaryBtn)``;

export const ReportContent = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem; /* Consistent gap */

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
  /* Specific layout for larger screens as per original CSS */
  @media (min-width: 1024px) {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: auto auto;
    /* The original CSS had these commented out or as class-based styles.
       With styled-components, these would be applied directly to the styled components if needed.
       For now, keeping them as comments as they were in the original.
    .report-chart {
      grid-column: 1 / 2;
      grid-row: 2 / 3;
    }
    .report-table {
      grid-column: 2 / 3;
      grid-row: 1 / 3;
    } */
  }
`;

export const ReportStats = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1.5rem;
  margin-bottom: 2rem; /* Adjusted from original to fit grid layout */
  background-color: white;
  padding: 1.5rem;
  border-radius: 15px;
  box-shadow: ${colors.shadow};
`;

export const ReportStat = styled.div`
  text-align: center;
  h3 {
    font-size: 1rem;
    font-weight: 600;
    color: ${colors.textDark};
    margin-bottom: 0.5rem;
  }
  p {
    font-size: 1.75rem;
    font-weight: 700;
    color: ${colors.primaryDark};
  }
`;

export const ReportChart = styled(ContentCard)`
  /* Reusing ContentCard styles, adding specific report chart padding */
  padding: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 250px;
`;

export const ChartPlaceholder = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 3rem;
  color: ${colors.textDark};
  p {
    margin-top: 10px;
    font-size: 15px;
  }
`;

export const ReportTable = styled(ContentCard)`
  /* Reusing ContentCard styles, adding specific report table padding */
  padding: 1.5rem;
  h3 {
    font-size: 20px;
    color: ${colors.primaryDark};
    margin-bottom: 20px;
  }
`;

export const TablePlaceholder = styled(ChartPlaceholder)``;

/* Settings Form */
export const SettingsForm = styled.div`
  background-color: white;
  border-radius: 15px;
  padding: 1.5rem;
  box-shadow: ${colors.shadow};
`;

export const FormSection = styled.div`
  margin-bottom: 2rem;
  h3 {
    font-size: 1.25rem;
    font-weight: 600;
    color: ${colors.primaryDark};
    margin-bottom: 1rem;
    border-bottom: 2px solid ${colors.primaryLight};
    padding-bottom: 0.5rem;
  }
`;

export const FormRow = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
  margin-bottom: 1rem;
`;

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const Label = styled.label`
  font-size: 0.9rem;
  font-weight: 600;
  color: ${colors.textDark};
`;

export const Input = styled.input`
  padding: 0.75rem;
  border-radius: 10px;
  border: 1px solid ${colors.grayMedium};
  font-size: 0.9rem;
  backbroundColor: black;
  color: ${colors.textDark};

  &:focus {
    outline: none;
    border-color: ${colors.primaryColor};
    box-shadow: 0 0 0 3px rgba(0, 150, 136, 0.2);
  }
`;

/* Hours Grid */
export const HoursGrid = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const HoursRow = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
`;

export const HoursDay = styled.div`
  width: 120px;
  font-weight: 600;
  color: ${colors.textDark};
`;

export const HoursTime = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  flex-wrap: wrap; /* Allow wrapping for time selects */
`;

export const FormActions = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 1rem;
  margin-top: 2rem;
`;

export const CancelBtn = styled.button`
  padding: 0.75rem 1.5rem;
  border-radius: 20px;
  background-color: ${colors.grayLight};
  color: ${colors.textDark};
  border: none;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background-color: ${colors.grayMedium};
  }
`;

export const SaveBtn = styled(PrimaryBtn)``;

/* Loading Container */
export const LoadingContainer = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: ${colors.primaryColor};
`;

export const Spinner = styled(Loader2)`
  animation: ${spin} 1s linear infinite;
  margin-bottom: 1.5rem;
  color: ${colors.primaryColor};
`;


export default function App() {
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
        <LoadingContainer>
          <Spinner size={48} />
          <p>Loading...</p>
        </LoadingContainer>
      );
    }

    switch (activePage) {
      case 'overview':
        return (
          <div>
            <DashboardTitle>Admin Overview</DashboardTitle>

            <StatsGrid>
              <StatCard>
                <StatLabel>Today's Reservations</StatLabel>
                <StatValue>{reservations.filter(r => r.date === '2023-05-15').length}</StatValue>
              </StatCard>
              <StatCard>
                <StatLabel>Active Customers</StatLabel>
                <StatValue>{customers.length}</StatValue>
              </StatCard>
              <StatCard>
                <StatLabel>Monthly Revenue</StatLabel>
                <StatValue>${salesData.values[salesData.values.length - 1].toLocaleString()}</StatValue>
              </StatCard>
            </StatsGrid>

            <ContentGrid>
              <ContentCard>
                <CardHeader>
                  <CardTitle>Upcoming Reservations</CardTitle>
                  <ViewAllBtn>
                    View All <ChevronRight size={16} />
                  </ViewAllBtn>
                </CardHeader>
                <ReservationsList>
                  {reservations.slice(0, 3).map(reservation => (
                    <ReservationItem key={reservation.id}>
                      <ReservationInfo>
                        <ReservationName>{reservation.name}</ReservationName>
                        <ReservationDetails>
                          {reservation.date} • {reservation.time} • {reservation.guests} guests
                        </ReservationDetails>
                      </ReservationInfo>
                      <ReservationStatus status={reservation.status}>
                        {reservation.status.charAt(0).toUpperCase() + reservation.status.slice(1)}
                      </ReservationStatus>
                    </ReservationItem>
                  ))}
                </ReservationsList>
              </ContentCard>

              <ContentCard>
                <CardHeader>
                  <CardTitle>Recent Customers</CardTitle>
                  <ViewAllBtn>
                    View All <ChevronRight size={16} />
                  </ViewAllBtn>
                </CardHeader>
                <CustomersList>
                  {customers.slice(0, 3).map(customer => (
                    <CustomerItem key={customer.id}>
                      <CustomerAvatar>
                        {customer.name.charAt(0)}
                      </CustomerAvatar>
                      <CustomerInfo>
                        <CustomerName>{customer.name}</CustomerName>
                        <CustomerDetails>
                          {customer.visits} visits • Last: {customer.lastVisit}
                        </CustomerDetails>
                      </CustomerInfo>
                    </CustomerItem>
                  ))}
                </CustomersList>
              </ContentCard>

              <ContentCard>
                <CardHeader>
                  <CardTitle>Sales Overview</CardTitle>
                  <ViewAllBtn>
                    View Report <ChevronRight size={16} />
                  </ViewAllBtn>
                </CardHeader>
                <SalesChart>
                  <ChartBars>
                    {salesData.values.map((value, index) => (
                      <ChartBarContainer key={index}>
                        <ChartBar style={{ height: `${(value / 25000) * 100}%` }} />
                        <ChartLabel>{salesData.labels[index]}</ChartLabel>
                      </ChartBarContainer>
                    ))}
                  </ChartBars>
                  <ChartLegend>
                    <LegendItem>
                      <LegendColor />
                      <LegendText>Monthly Revenue</LegendText>
                    </LegendItem>
                  </ChartLegend>
                </SalesChart>
              </ContentCard>

              <ContentCard>
                <CardHeader>
                  <CardTitle>Quick Actions</CardTitle>
                </CardHeader>
                <QuickActions>
                  <ActionBtn>
                    <Calendar size={18} />
                    <span>Add Reservation</span>
                  </ActionBtn>
                  <ActionBtn>
                    <BookOpen size={18} />
                    <span>Update Menu</span>
                  </ActionBtn>
                  <ActionBtn>
                    <Users size={18} />
                    <span>Add Staff</span>
                  </ActionBtn>
                  <ActionBtn>
                    <DollarSign size={18} />
                    <span>View Reports</span>
                  </ActionBtn>
                </QuickActions>
              </ContentCard>
            </ContentGrid>
          </div>
        );

      case 'reservations':
        return (
          <PageContainer>
            <PageTitle>Reservation Management</PageTitle>

            <TableActions>
              <SearchFilter>
                <SearchInput type="text" placeholder="Search reservations..." />
                <Select>
                  <option>All Status</option>
                  <option>Confirmed</option>
                  <option>Pending</option>
                  <option>Cancelled</option>
                </Select>
                <SearchInput type="date" /> {/* Changed to SearchInput for consistency */}
              </SearchFilter>
              <PrimaryBtn>
                + Add Reservation
              </PrimaryBtn>
            </TableActions>

            <DataTable>
              <TableHeader>
                <HeaderCell>ID</HeaderCell>
                <HeaderCell>Name</HeaderCell>
                <HeaderCell>Date & Time</HeaderCell>
                <HeaderCell>Guests</HeaderCell>
                <HeaderCell>Status</HeaderCell>
                <HeaderCell>Actions</HeaderCell>
              </TableHeader>

              {reservations.map(reservation => (
                <TableRow key={reservation.id}>
                  <TableCell>{reservation.id}</TableCell>
                  <TableCell>{reservation.name}</TableCell>
                  <TableCell>
                    {reservation.date} • {reservation.time}
                  </TableCell>
                  <TableCell>{reservation.guests}</TableCell>
                  <TableCell>
                    <StatusBadge status={reservation.status}>
                      {reservation.status.charAt(0).toUpperCase() + reservation.status.slice(1)}
                    </StatusBadge>
                  </TableCell>
                  <ActionsCell>
                    <TableActionButton className="edit">Edit</TableActionButton>
                    {reservation.status === 'pending' && (
                      <TableActionButton className="confirm">Confirm</TableActionButton>
                    )}
                    <TableActionButton className="cancel">Cancel</TableActionButton>
                  </ActionsCell>
                </TableRow>
              ))}
            </DataTable>
          </PageContainer>
        );

      case 'customers':
        return (
          <PageContainer>
            <PageTitle>Customer Management</PageTitle>

            <TableActions>
              <SearchFilter>
                <SearchInput type="text" placeholder="Search customers..." />
                <Select>
                  <option>All Customers</option>
                  <option>Frequent (5+ visits)</option>
                  <option>Recent (Last 30 days)</option>
                </Select>
              </SearchFilter>
            </TableActions>

            <DataTable>
              <TableHeader>
                <HeaderCell>ID</HeaderCell>
                <HeaderCell>Name</HeaderCell>
                <HeaderCell>Email</HeaderCell>
                <HeaderCell>Visits</HeaderCell>
                <HeaderCell>Last Visit</HeaderCell>
                <HeaderCell>Actions</HeaderCell>
              </TableHeader>

              {customers.map(customer => (
                <TableRow key={customer.id}>
                  <TableCell>{customer.id}</TableCell>
                  <TableCell>{customer.name}</TableCell>
                  <TableCell>{customer.email}</TableCell>
                  <TableCell>{customer.visits}</TableCell>
                  <TableCell>{customer.lastVisit}</TableCell>
                  <ActionsCell>
                    <TableActionButton className="view">View</TableActionButton>
                    <TableActionButton className="edit">Edit</TableActionButton>
                    <TableActionButton className="message">Message</TableActionButton>
                  </ActionsCell>
                </TableRow>
              ))}
            </DataTable>
          </PageContainer>
        );

      case 'menu':
        return (
          <PageContainer>
            <PageTitle>Menu Management</PageTitle>

            <MenuTabs>
              <MenuTab className="active">All Items</MenuTab>
              <MenuTab>Starters</MenuTab>
              <MenuTab>Main Courses</MenuTab>
              <MenuTab>Desserts</MenuTab>
              <MenuTab>Drinks</MenuTab>
            </MenuTabs>

            <TableActions>
              <SearchFilter>
                <SearchInput type="text" placeholder="Search menu items..." />
              </SearchFilter>
              <PrimaryBtn>
                + Add Menu Item
              </PrimaryBtn>
            </TableActions>

            <EmptyPage>
              <EmptyPageIcon><BookOpen size={48} /></EmptyPageIcon>
              <EmptyPageTitle>Menu Management</EmptyPageTitle>
              <EmptyPageText>Add, edit, or remove items from your restaurant menu</EmptyPageText>
              <ActionBtn>
                Add Your First Item
              </ActionBtn>
            </EmptyPage>
          </PageContainer>
        );

      case 'reports':
        return (
          <PageContainer>
            <PageTitle>Reports & Analytics</PageTitle>

            <ReportTabs>
              <ReportTab className="active">Sales</ReportTab>
              <ReportTab>Reservations</ReportTab>
              <ReportTab>Customers</ReportTab>
              <ReportTab>Inventory</ReportTab>
            </ReportTabs>

            <ReportPeriod>
              <Select>
                <option>Last 7 Days</option>
                <option>Last 30 Days</option>
                <option>Last 3 Months</option>
                <option>Last 12 Months</option>
                <option>Custom Range</option>
              </Select>
              <ExportBtn>
                Export Report
              </ExportBtn>
            </ReportPeriod>

            <ReportContent>
              <ReportStats>
                <ReportStat>
                  <h3>Total Revenue</h3>
                  <p>$8,450.00</p>
                </ReportStat>
                <ReportStat>
                  <h3>Average Order Value</h3>
                  <p>$42.25</p>
                </ReportStat>
                <ReportStat>
                  <h3>Busiest Day</h3>
                  <p>Saturday</p>
                </ReportStat>
                <ReportStat>
                  <h3>New Customers</h3>
                  <p>24</p>
                </ReportStat>
              </ReportStats>

              <ReportChart>
                <ChartPlaceholder>
                  <EmptyPageIcon><PieChart size={48} /></EmptyPageIcon>
                  <p>Sales chart will appear here</p>
                </ChartPlaceholder>
              </ReportChart>

              <ReportTable>
                <h3>Top Selling Items</h3>
                <TablePlaceholder>
                  <EmptyPageIcon><ClipboardList size={48} /></EmptyPageIcon>
                  <p>Top items table will appear here</p>
                </TablePlaceholder>
              </ReportTable>
            </ReportContent>
          </PageContainer>
        );

      case 'settings':
        return (
          <PageContainer>
            <PageTitle>Restaurant Settings</PageTitle>

            <SettingsTabs>
              <SettingsTab className="active">General</SettingsTab>
              <SettingsTab>Staff</SettingsTab>
              <SettingsTab>Online Ordering</SettingsTab>
              <SettingsTab>Notifications</SettingsTab>
              <SettingsTab>Integrations</SettingsTab>
            </SettingsTabs>

            <SettingsForm>
              <FormSection>
                <h3>Restaurant Information</h3>
                <FormRow>
                  <FormGroup>
                    <Label>Restaurant Name</Label>
                    <Input type="text" value="GoodBites" />
                  </FormGroup>
                  <FormGroup>
                    <Label>Phone Number</Label>
                    <Input type="text" value="(555) 123-4567" />
                  </FormGroup>
                </FormRow>
                <FormRow>
                  <FormGroup>
                    <Label>Address</Label>
                    <Input type="text" value="123 Main Street" />
                  </FormGroup>
                  <FormGroup>
                    <Label>City</Label>
                    <Input type="text" value="Anytown" />
                  </FormGroup>
                </FormRow>
              </FormSection>

              <FormSection>
                <h3>Business Hours</h3>
                <HoursGrid>
                  {['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'].map(day => (
                    <HoursRow key={day}>
                      <HoursDay>{day}</HoursDay>
                      <HoursTime>
                        <Select>
                          <option>11:00 AM</option>
                          <option>12:00 PM</option>
                        </Select>
                        <span>to</span>
                        <Select>
                          <option>9:00 PM</option>
                          <option>10:00 PM</option>
                          <option>11:00 PM</option>
                        </Select>
                      </HoursTime>
                    </HoursRow>
                  ))}
                </HoursGrid>
              </FormSection>

              <FormActions>
                <CancelBtn>Cancel</CancelBtn>
                <SaveBtn>Save Changes</SaveBtn>
              </FormActions>
            </SettingsForm>
          </PageContainer>
        );

      default:
        return <PageContainer><PageTitle>Admin Dashboard</PageTitle></PageContainer>;
    }
  };

  return (
    <>
      <GlobalStyle /> {/* Apply global styles */}
      <DashboardContainer>
        {/* Sidebar */}
        <Sidebar collapsed={collapsed}>
          <SidebarHeader>
            {!collapsed && <BrandName>Admin Panel</BrandName>}
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
                    <NavIcon collapsed={collapsed} active={activePage === item.id && !loading}>{item.icon}</NavIcon>
                    {!collapsed && <NavLabel collapsed={collapsed}>{item.label}</NavLabel>}
                  </NavItem>
                </li>
              ))}
            </NavList>
          </NavContainer>

          <SidebarFooter>
            {!collapsed && (
              <SupportBox>
                <SupportText>System Status: <StatusOnline>Online</StatusOnline></SupportText>
                <SupportText>Version: 2.4.1</SupportText>
              </SupportBox>
            )}
          </SidebarFooter>
        </Sidebar>

        {/* Main Content */}
        <MainContainer>
          {/* Header */}
          <MainHeader>
            <HeaderLeft>
              <HeaderTitle>Admin Dashboard</HeaderTitle>
            </HeaderLeft>

            <HeaderRight>
              <NotificationBtn>
                <Bell size={20} />
                <NotificationBadge /> {/* No text, just a dot */}
              </NotificationBtn>
              <UserInfo>
                <UserAvatar className="admin">
                  AD
                </UserAvatar>
                {!collapsed && <UserName>Admin</UserName>}
              </UserInfo>
            </HeaderRight>
          </MainHeader>

          {/* Main Content */}
          <MainContent>
            {renderContent()}
          </MainContent>
        </MainContainer>
      </DashboardContainer>
    </>
  );
}
