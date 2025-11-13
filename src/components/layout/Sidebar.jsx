// src/components/layout/Sidebar.jsx
import { useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';

const Sidebar = ({ expanded, onToggle }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const { logout } = useAuth();

  const menuItems = [
    {
      section: 'Main Navigation',
      items: [
        { icon: 'fas fa-tachometer-alt', text: 'Dashboard', page: 'dashboard' },
        { icon: 'fas fa-user-shield', text: 'Consent Management', page: 'consent' },
        { icon: 'fas fa-history', text: 'Activity Log', page: 'activity' }
      ]
    },
    {
      section: 'Data Protection',
      items: [
        { icon: 'fas fa-exclamation-triangle', text: 'Breach Reports', badge: 3, page: 'breach' },
        { icon: 'fas fa-file-contract', text: 'Data Requests', page: 'requests' }
      ]
    },
    {
      section: 'Account',
      items: [
        { icon: 'fas fa-user-circle', text: 'My Profile', page: 'profile' },
        { icon: 'fas fa-shield-alt', text: 'Security', page: 'security' },
        { icon: 'fas fa-sign-out-alt', text: 'Logout', action: 'logout' }
      ]
    }
  ];

  const handleMenuItemClick = (item) => {
    if (item.page && item.page !== 'logout') {
      navigate(`/${item.page}`);
    } else if (item.action === 'logout') {
      logout();
      navigate('/login');
    }
  };

  const isActive = (page) => {
    return location.pathname === `/${page}`;
  };

  return (
    <div className={`sidebar glass ${expanded ? 'expanded' : ''}`}>
      <div className="sidebar-header">
        <div className="logo">
          <div className="logo-icon">
            <i className="fas fa-shield-alt"></i>
          </div>
          <div className="logo-text">DataTrust</div>
        </div>
      </div>

      <div className="sidebar-menu">
        {menuItems.map((section, sectionIndex) => (
          <div key={sectionIndex} className="menu-section">
            <div className="menu-title">{section.section}</div>
            {section.items.map((item, itemIndex) => (
              <a
                key={itemIndex}
                href="#"
                className={`menu-item ${isActive(item.page) ? 'active' : ''}`}
                onClick={(e) => {
                  e.preventDefault();
                  handleMenuItemClick(item);
                }}
              >
                <i className={item.icon}></i>
                <span className="menu-text">{item.text}</span>
                {item.badge && <span className="menu-badge">{item.badge}</span>}
              </a>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;