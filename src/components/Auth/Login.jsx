// src/components/auth/Login.jsx
import { useState } from 'react';
import { useAuth } from '../../contexts/AuthContext';

const Login = ({ switchToSignup }) => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    rememberMe: false
  });
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const { login } = useAuth();

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Simulate API call
      const users = JSON.parse(localStorage.getItem('datatrust_users')) || [];
      const user = users.find(u => u.email === formData.email && u.password === formData.password);
      
      if (user) {
        login(user);
      } else {
        alert('Invalid email or password');
      }
    } catch (error) {
      console.error('Login error:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login-card glass">
      <div className="login-header">
        <div className="login-logo">
          <div className="login-logo-icon">
            <i className="fas fa-shield-alt"></i>
          </div>
          <div className="login-logo-text">DataTrust</div>
        </div>
        <p className="login-tagline">Advanced Data Protection Platform</p>
      </div>

      <form className="login-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="email">Email Address</label>
          <div className="input-with-icon">
            <i className="fas fa-envelope"></i>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              required
            />
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="password">Password</label>
          <div className="input-with-icon">
            <i className="fas fa-lock"></i>
            <input
              type={showPassword ? 'text' : 'password'}
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter your password"
              required
            />
            <button
              type="button"
              className="password-toggle"
              onClick={() => setShowPassword(!showPassword)}
            >
              <i className={`fas fa-${showPassword ? 'eye-slash' : 'eye'}`}></i>
            </button>
          </div>
        </div>

        <div className="form-options">
          <label className="remember-me">
            <input
              type="checkbox"
              id="rememberMe"
              name="rememberMe"
              checked={formData.rememberMe}
              onChange={handleChange}
            />
            <span className="checkmark"></span>
            Remember me
          </label>
          <a href="#" className="forgot-password">
            Forgot Password?
          </a>
        </div>

        <button
          type="submit"
          className="btn btn-primary login-btn"
          disabled={loading}
        >
          {loading ? (
            <i className="fas fa-spinner fa-spin"></i>
          ) : (
            <i className="fas fa-sign-in-alt"></i>
          )}
          {loading ? 'Signing In...' : 'Sign In'}
        </button>

        <div className="login-divider">
          <span>or continue with</span>
        </div>

        <div className="social-login">
          <button type="button" className="btn btn-outline social-btn">
            <i className="fab fa-google"></i> Google
          </button>
          <button type="button" className="btn btn-outline social-btn">
            <i className="fab fa-microsoft"></i> Microsoft
          </button>
        </div>

        <div className="signup-link">
          Don't have an account?{' '}
          <a href="#" onClick={switchToSignup}>
            Sign up here
          </a>
        </div>
      </form>

      <div className="security-badges">
        <div className="badge-item">
          <i className="fas fa-lock"></i>
          <span>End-to-End Encrypted</span>
        </div>
        <div className="badge-item">
          <i className="fas fa-shield-alt"></i>
          <span>NDPC Compliant</span>
        </div>
      </div>
    </div>
  );
};

export default Login;