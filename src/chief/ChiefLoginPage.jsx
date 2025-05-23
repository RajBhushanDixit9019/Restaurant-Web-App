import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './ChiefLoginPage.css';

function ChiefLoginPage() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    chiefId: '',
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
    if (!formData.chiefId.trim()) {
      newErrors.chiefId = 'Chief ID is required';
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
        console.log('Chief login submitted:', formData);
        setFormData({ chiefId: '', password: '' });
        setIsSubmitting(false);
        navigate('/chief-dashboard');
      }, 1500);
    } else {
      setErrors(newErrors);
    }
  };

  return (
    <div className="chief-login-container">

      <div className="login-header">
        <h2 className="chief-title">Chief Login</h2>
      </div>

      <p className="chief-description">
        Login to manage kitchen orders and staff operations.
      </p>

      <div>
        <div className="chief-form-group">
          <input
            type="text"
            name="chiefId"
            value={formData.chiefId}
            onChange={handleChange}
            placeholder="Chief ID"
            className={`chief-input ${errors.chiefId ? 'chief-input-error' : ''}`}
          />
          {errors.chiefId && <p className="chief-error-message">{errors.chiefId}</p>}
        </div>

        <div className="chief-form-group">
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Password"
            className={`chief-input ${errors.password ? 'chief-input-error' : ''}`}
          />
          {errors.password && <p className="chief-error-message">{errors.password}</p>}
        </div>

        <div className="button-container">
          <button
            onClick={handleSubmit}
            disabled={isSubmitting}
            className="chief-submit-button"
          >
            {isSubmitting ? 'Logging in...' : 'Login'}
          </button>
        </div>
      </div>

      <footer className="footer"></footer>
    </div>
  );
}

export default ChiefLoginPage;
