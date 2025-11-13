import { useState } from 'react';
import Login from '../components/auth/Login';
import Signup from '../components/Auth/Signup';

const LoginPage = () => {
  const [activeTab, setActiveTab] = useState('login');

  return (
    <div className="login-page">
      <div className="login-container">
        {/* Animated Background */}
        <div className="login-bg-animation">
          <div className="login-bg-grid"></div>
          <div className="login-floating-shapes">
            <div className="login-shape login-shape-1"></div>
            <div className="login-shape login-shape-2"></div>
            <div className="login-shape login-shape-3"></div>
          </div>
        </div>

        {activeTab === 'login' ? (
          <Login switchToSignup={() => setActiveTab('signup')} />
        ) : (
          <Signup switchToLogin={() => setActiveTab('login')} />
        )}
      </div>
    </div>
  );
};

export default LoginPage;