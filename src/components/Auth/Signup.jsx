// src/components/auth/Signup.jsx
import { useState } from 'react';
import { useAuth } from '../../contexts/AuthContext';

const Signup = ({ switchToLogin }) => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    userType: '',
    password: '',
    confirmPassword: ''
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [passwordStrength, setPasswordStrength] = useState({ strength: 0, text: '' });
  const [agreeTerms, setAgreeTerms] = useState(false);
  const [loading, setLoading] = useState(false);
  const { signup, login } = useAuth();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    if (name === 'password') {
      checkPasswordStrength(value);
    }
  };

  const checkPasswordStrength = (password) => {
    let strength = 0;
    let text = '';

    if (password.length >= 8) strength++;
    if (password.match(/([a-z].*[A-Z])|([A-Z].*[a-z])/)) strength++;
    if (password.match(/([0-9])/)) strength++;
    if (password.match(/([!,%,&,@,#,$,^,*,?,_,~])/)) strength++;

    switch(strength) {
      case 0:
      case 1:
        text = 'Weak password';
        break;
      case 2:
        text = 'Medium password';
        break;
      case 3:
        text = 'Strong password';
        break;
      case 4:
        text = 'Very strong password';
        break;
    }

    setPasswordStrength({ strength, text });
  };

  const getStrengthBarClass = () => {
    switch(passwordStrength.strength) {
      case 1: return 'strength-weak';
      case 2: return 'strength-medium';
      case 3: return 'strength-strong';
      case 4: return 'strength-very-strong';
      default: return '';
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      if (!agreeTerms) {
        alert('Please agree to the Terms of Service and Privacy Policy');
        return;
      }

      if (formData.password !== formData.confirmPassword) {
        alert('Passwords do not match');
        return;
      }

      if (formData.password.length < 8) {
        alert('Password must be at least 8 characters long');
        return;
      }

      if (!/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/.test(formData.password)) {
        alert('Password must contain uppercase, lowercase, and numbers');
        return;
      }

      const newUser = signup(formData);
      login(newUser);
      
    } catch (error) {
      console.error('Signup error:', error);
      alert('An error occurred during signup');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="signup-card glass">
      <div className="signup-header">
        <div className="signup-logo">
          <div className="signup-logo-icon">
            <i className="fas fa-shield-alt"></i>
          </div>
          <div className="signup-logo-text">DataTrust</div>
        </div>
        <p className="signup-tagline">Create Your Secure Account</p>
      </div>

      <form className="signup-form" onSubmit={handleSubmit}>
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="firstName">First Name</label>
            <div className="input-with-icon">
              <i className="fas fa-user"></i>
              <input
                type="text"
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                placeholder="Enter your first name"
                required
              />
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="lastName">Last Name</label>
            <div className="input-with-icon">
              <i className="fas fa-user"></i>
              <input
                type="text"
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                placeholder="Enter your last name"
                required
              />
            </div>
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="signupEmail">Email Address</label>
          <div className="input-with-icon">
            <i className="fas fa-envelope"></i>
            <input
              type="email"
              id="signupEmail"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              required
            />
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="phone">Phone Number</label>
          <div className="input-with-icon">
            <i className="fas fa-phone"></i>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Enter your phone number"
              required
            />
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="userType">Account Type</label>
          <div className="input-with-icon">
            <i className="fas fa-user-tag"></i>
            <select
              id="userType"
              name="userType"
              value={formData.userType}
              onChange={handleChange}
              required
            >
              <option value="">Select account type</option>
              <option value="individual">Individual</option>
              <option value="business">Business</option>
              <option value="government">Government Agency</option>
            </select>
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="signupPassword">Password</label>
          <div className="input-with-icon">
            <i className="fas fa-lock"></i>
            <input
              type={showPassword ? 'text' : 'password'}
              id="signupPassword"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Create a password"
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
          <div className="password-strength">
            <div className={`strength-bar ${getStrengthBarClass()}`}></div>
          </div>
          <div className="strength-text">
            {passwordStrength.text || 'Password must be at least 8 characters with uppercase, lowercase, and numbers'}
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="confirmPassword">Confirm Password</label>
          <div className="input-with-icon">
            <i className="fas fa-lock"></i>
            <input
              type={showConfirmPassword ? 'text' : 'password'}
              id="confirmPassword"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              placeholder="Confirm your password"
              required
            />
            <button
              type="button"
              className="password-toggle"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
            >
              <i className={`fas fa-${showConfirmPassword ? 'eye-slash' : 'eye'}`}></i>
            </button>
          </div>
        </div>

        <div className="terms-agreement">
          <input
            type="checkbox"
            id="agreeTerms"
            checked={agreeTerms}
            onChange={(e) => setAgreeTerms(e.target.checked)}
            required
          />
          <label htmlFor="agreeTerms">
            I agree to the <a href="#">Terms of Service</a> and <a href="#">Privacy Policy</a>
          </label>
        </div>

        <button
          type="submit"
          className="btn btn-primary signup-btn"
          disabled={loading}
        >
          {loading ? (
            <i className="fas fa-spinner fa-spin"></i>
          ) : (
            <i className="fas fa-user-plus"></i>
          )}
          {loading ? 'Creating Account...' : 'Create Account'}
        </button>

        <div className="signup-divider">
          <span>or sign up with</span>
        </div>

        <div className="social-signup">
          <button type="button" className="btn btn-outline social-btn">
            <i className="fab fa-google"></i> Google
          </button>
          <button type="button" className="btn btn-outline social-btn">
            <i className="fab fa-microsoft"></i> Microsoft
          </button>
        </div>

        <div className="login-link">
          Already have an account?{' '}
          <a href="#" onClick={switchToLogin}>
            Sign in here
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

export default Signup;