import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './AdminLoginPage.css';


function AdminLoginPage() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    adminId: '',
    password: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    if (errors[name]) {
      setErrors({ ...errors, [name]: '' });
    }
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.adminId.trim()) {
      newErrors.adminId = 'Admin ID is required';
    }

    if (!formData.password) {
      newErrors.password = 'Password is required';
    }

    return newErrors;
  };

  const handleSubmit = () => {
    const newErrors = validate();

    if (Object.keys(newErrors).length === 0) {
      setIsSubmitting(true);

      setTimeout(() => {
        console.log('Admin login submitted:', formData);
        setFormData({ adminId: '', password: '' });
        setIsSubmitting(false);
        navigate('/admin-dashboard');
      }, 1500);
    } else {
      setErrors(newErrors);
    }
  };

  return (
    <div className="admin-login-container">
      

      <div className="admin-header">
        <h2 className="admin-title">Admin Login</h2>
      </div>

      <p className="admin-description">Login to manage the system, users, and reports.</p>

      <div>
        <div className="admin-form-group">
          <input
            type="text"
            name="adminId"
            value={formData.adminId}
            onChange={handleChange}
            placeholder="Admin ID"
            className={`admin-input ${errors.adminId ? 'input-error' : ''}`}
          />
          {errors.adminId && <p className="error-message">{errors.adminId}</p>}
        </div>

        <div className="admin-form-group">
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Password"
            className={`admin-input ${errors.password ? 'input-error' : ''}`}
          />
          {errors.password && <p className="error-message">{errors.password}</p>}
        </div>

        <div className="admin-button-container">
          <button onClick={handleSubmit} disabled={isSubmitting} className="submit-button">
            {isSubmitting ? 'Logging in...' : 'Login'}
          </button>
        </div>
      </div>

      <footer className="footer"></footer>
    </div>
  );
}

export default AdminLoginPage;
