import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/SignUpPage.css';

function SignUpPage() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
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
    
    // Name validation
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    // Email validation
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    
    // Password validation
    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }
    
    // Confirm password validation
    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
    }
    
    return newErrors;
  };
  
  const handleSubmit = () => {
    const newErrors = validate();
    
    if (Object.keys(newErrors).length === 0) {
      setIsSubmitting(true);
      
      // Simulate API call
      setTimeout(() => {
        console.log('Form submitted successfully:', formData);
        
        // Instead of showing an alert, navigate to the dashboard
        setFormData({
          name: '',
          email: '',
          password: '',
          confirmPassword: ''
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
    <div className="signup-container">
      
      <main className="main-content">
        <div className="signup-form-container">
          <div className="signup-header">
            <h2 className="signup-title">Sign Up</h2>
          </div>
          
          <p className="signup-description">
            Sign up now to get exclusive deals, menu updates, and mouthwatering news straight to your inbox.
          </p>
          
          <div>
            <div className="form-group">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                className={`input-field ${errors.name ? 'input-error' : ''}`}
              />
              {errors.name && <p className="error-message">{errors.name}</p>}
            </div>
            
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
            
            <div className="form-group">
              <input
                type="password"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                placeholder="Confirm Password"
                className={`input-field ${errors.confirmPassword ? 'input-error' : ''}`}
              />
              {errors.confirmPassword && <p className="error-message">{errors.confirmPassword}</p>}
            </div>
            
            <div className="button-container">
              <button
                onClick={handleSubmit}
                disabled={isSubmitting}
                className="submit-button"
              >
                {isSubmitting ? 'Signing Up...' : 'Sign Up'}
              </button>
            </div>
          </div>
        </div>
      </main>
      
      <footer className="footer">
        {/* Footer content would go here */}
      </footer>
    </div>
  );
}

export default SignUpPage;