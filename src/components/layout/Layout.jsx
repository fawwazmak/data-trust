// src/components/layout/Layout.jsx
import { useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Sidebar from './Sidebar';
import Header from './Header';

const Layout = () => {
  const [sidebarExpanded, setSidebarExpanded] = useState(false);
  const location = useLocation();

  return (
    <div className="main-app" id="mainApp">
      {/* Animated Background */}
      <div className="bg-animation">
        <div className="bg-grid"></div>
        <div className="floating-shapes">
          <div className="shape shape-1"></div>
          <div className="shape shape-2"></div>
          <div className="shape shape-3"></div>
        </div>
      </div>

      <div className="app-container">
        <Sidebar 
          expanded={sidebarExpanded} 
          onToggle={() => setSidebarExpanded(!sidebarExpanded)} 
        />
        
        <div className={`main-content ${sidebarExpanded ? 'sidebar-expanded' : ''}`}>
          <Header onMenuToggle={() => setSidebarExpanded(!sidebarExpanded)} />
          
          <div className="content">
            <Outlet />
          </div>
        </div>
      </div>

      {/* AI Assistant */}
      <div className="ai-assistant">
        <i className="fas fa-robot"></i>
      </div>

      {/* Fingerprint Authentication */}
      <div className="fingerprint-auth">
        <i className="fas fa-fingerprint"></i>
      </div>
    </div>
  );
};

export default Layout;