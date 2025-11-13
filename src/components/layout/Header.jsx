// src/components/layout/Header.jsx
import { useState, useRef, useEffect } from 'react';
import { useAuth } from '../../contexts/AuthContext';

const Header = ({ onMenuToggle }) => {
  const [notificationsOpen, setNotificationsOpen] = useState(false);
  const { user } = useAuth();
  const notificationsRef = useRef(null);

  const notifications = [
    { message: "New data access request from QuickCredit", time: "10 minutes ago", unread: true },
    { message: "Your data health score has improved by 5 points", time: "2 hours ago", unread: true },
    { message: "NIMC accessed your identity data for verification", time: "Yesterday", unread: false },
    { message: "Weekly data protection summary is ready", time: "2 days ago", unread: false },
    { message: "Data breach alert: Unauthorized access attempt blocked", time: "3 days ago", unread: false }
  ];

  const unreadCount = notifications.filter(n => n.unread).length;

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (notificationsRef.current && !notificationsRef.current.contains(event.target)) {
        setNotificationsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const clearNotifications = () => {
    // In a real app, this would update the backend
    setNotificationsOpen(false);
  };

  return (
    <div className="header glass">
      <div className="header-left">
        <button className="menu-toggle" onClick={onMenuToggle}>
          <i className="fas fa-bars"></i>
        </button>
        <div className="page-title">Dashboard</div>
      </div>

      <div className="header-right">
        <div className="search-bar">
          <i className="fas fa-search"></i>
          <input type="text" placeholder="Search organizations, data types..." />
        </div>
        
        <div className="notification-container" ref={notificationsRef}>
          <div 
            className="notification-bell" 
            onClick={() => setNotificationsOpen(!notificationsOpen)}
          >
            <i className="fas fa-bell"></i>
            {unreadCount > 0 && (
              <span className="notification-badge">{unreadCount}</span>
            )}
          </div>
          
          {notificationsOpen && (
            <div className="notification-dropdown active">
              <div className="notification-header">
                <div className="notification-title">Notifications</div>
                <button 
                  className="notification-clear" 
                  onClick={clearNotifications}
                >
                  Clear All
                </button>
              </div>
              <div className="notification-list">
                {notifications.map((notification, index) => (
                  <div 
                    key={index} 
                    className={`notification-item ${notification.unread ? 'unread' : ''}`}
                  >
                    <div className="notification-message">{notification.message}</div>
                    <div className="notification-time">{notification.time}</div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        <div className="user-actions">
          <button className="btn btn-primary">
            <i className="fas fa-sync-alt"></i> Refresh Data
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;