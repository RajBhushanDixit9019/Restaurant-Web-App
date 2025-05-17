import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/LoginPage.css';

function LoginPage() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: ''
      });
    }
  };
  
  const validate = () => {
    const newErrors = {};
    
    // Email validation
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    
    // Password validation
    if (!formData.password) {
      newErrors.password = 'Password is required';
    }
    
    return newErrors;
  };
  
  const handleSubmit = () => {
    const newErrors = validate();
    
    if (Object.keys(newErrors).length === 0) {
      setIsSubmitting(true);
      
      // Simulate API call
      setTimeout(() => {
        console.log('Login submitted successfully:', formData);
        
        setFormData({
          email: '',
          password: ''
        });
        setIsSubmitting(false);
        
        // Navigate to the restaurant dashboard
        navigate('/dashboard');
      }, 1500);
    } else {
      setErrors(newErrors);
    }
  };
  
  return (
    <div className="login-container">
      <h1 className="restaurant-name">My Restaurant</h1>
      
      <div className="login-header">
        <h2 className="login-title">Login</h2>
      </div>
      
      <p className="login-description">
        Login to manage your orders, check exclusive deals, and more.
      </p>
      
      <div>
        <div className="form-group">
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Your Email"
            className={`input-field ${errors.email ? 'input-error' : ''}`}
          />
          {errors.email && <p className="error-message">{errors.email}</p>}
        </div>
        
        <div className="form-group">
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Password"
            className={`input-field ${errors.password ? 'input-error' : ''}`}
          />
          {errors.password && <p className="error-message">{errors.password}</p>}
        </div>
        
        <div className="button-container">
          <button
            onClick={handleSubmit}
            disabled={isSubmitting}
            className="submit-button"
          >
            {isSubmitting ? 'Logging in...' : 'Login'}
          </button>
        </div>
      </div>
      
      <footer className="footer">
        {/* Footer content would go here */}
      </footer>
    </div>
  );
}

export default LoginPage;