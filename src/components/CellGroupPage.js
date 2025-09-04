import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { findMember } from '../data/retreatData';

const CellGroupPage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    birthday: ''
  });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    // Simulate API call delay
    setTimeout(() => {
      const member = findMember(formData.name, formData.birthday);
      
      if (member) {
        // Store result in session storage
        sessionStorage.setItem('cellGroupResult', JSON.stringify(member));
        navigate('/cell-group-result');
      } else {
        setError('Invalid name or birthday. Please try again.');
      }
      setLoading(false);
    }, 1000);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="page-container">
      <div className="page-header">
        <button 
          className="back-button" 
          onClick={() => navigate('/')}
          style={{ color: 'black', fontSize: '24px' }}
        >
          ←
        </button>
        <h1 className="page-title">Find Your Cell Group</h1>
      </div>

      <div className="container">
        <div className="card" style={{ 
          background: 'rgba(255, 255, 255, 0.1)', 
          color: 'white',
          backdropFilter: 'blur(20px)',
          border: '1px solid rgba(255, 255, 255, 0.2)',
          maxWidth: '500px',
          margin: '0 auto'
        }}>
          <h2 style={{ textAlign: 'center', marginBottom: '30px', color: 'white' }}>
            Enter Your Information
          </h2>
          
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name" style={{ color: 'white', marginBottom: '8px', display: 'block' }}>
                Full Name:
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="form-input"
                style={{
                  width: '100%',
                  padding: '12px',
                  border: '1px solid rgba(255, 255, 255, 0.3)',
                  borderRadius: '8px',
                  background: 'rgba(255, 255, 255, 0.1)',
                  color: 'white',
                  fontSize: '16px'
                }}
                placeholder="Enter your full name"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="birthday" style={{ color: 'white', marginBottom: '8px', display: 'block' }}>
                Birthday (YYYYMMDD):
              </label>
              <input
                type="password"
                id="birthday"
                name="birthday"
                value={formData.birthday}
                onChange={handleChange}
                className="form-input"
                style={{
                  width: '100%',
                  padding: '12px',
                  border: '1px solid rgba(255, 255, 255, 0.3)',
                  borderRadius: '8px',
                  background: 'rgba(255, 255, 255, 0.1)',
                  color: 'white',
                  fontSize: '16px'
                }}
                placeholder="e.g., 19950115"
                pattern="[0-9]{8}"
                maxLength="8"
                required
              />
            </div>

            {error && (
              <div className="error" style={{ 
                color: '#ff6b6b', 
                textAlign: 'center', 
                marginBottom: '20px',
                padding: '10px',
                background: 'rgba(255, 107, 107, 0.1)',
                borderRadius: '8px',
                border: '1px solid rgba(255, 107, 107, 0.3)'
              }}>
                {error}
              </div>
            )}

            <button
              type="submit"
              className="btn"
              disabled={loading}
              style={{
                width: '100%',
                padding: '15px',
                fontSize: '18px',
                fontWeight: '600',
                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                color: 'white',
                border: 'none',
                borderRadius: '8px',
                cursor: loading ? 'not-allowed' : 'pointer',
                opacity: loading ? 0.7 : 1,
                transition: 'all 0.3s ease'
              }}
            >
              {loading ? 'Finding...' : 'Find My Cell Group'}
            </button>
          </form>
        </div>

        <div className="card" style={{ 
          background: 'rgba(255, 255, 255, 0.1)', 
          color: 'white',
          backdropFilter: 'blur(20px)',
          border: '1px solid rgba(255, 255, 255, 0.2)',
          maxWidth: '500px',
          margin: '20px auto 0',
          padding: '20px'
        }}>
          <h3 style={{ color: 'white', marginBottom: '15px' }}>Need Help?</h3>
          <p style={{ color: 'rgba(255, 255, 255, 0.8)', marginBottom: '15px' }}>
            Enter just your first name (unless you know that there is someone else with the same name in the church, then enter your surname as well. PS: no Korean characters) and your birthday in YYYYMMDD format.
          </p>
          <p style={{ color: 'rgba(255, 255, 255, 0.8)', fontSize: '14px' }}>
            Example: If your birthday is January 15, 1995, enter: 19950115
          </p>
        </div>

        <div className="card" style={{ 
          background: 'rgba(255, 255, 255, 0.1)', 
          color: 'white',
          backdropFilter: 'blur(20px)',
          border: '1px solid rgba(255, 255, 255, 0.2)',
          maxWidth: '500px',
          margin: '20px auto 0',
          padding: '20px'
        }}>
          <h3 style={{ color: 'white', marginBottom: '15px' }}>Demo Information</h3>
          <p style={{ color: 'rgba(255, 255, 255, 0.8)', marginBottom: '10px' }}>
            <strong>Name:</strong> Jane
          </p>
          <p style={{ color: 'rgba(255, 255, 255, 0.8)' }}>
            <strong>Birthday:</strong> 19960210
          </p>
          <br />
          <p style={{ color: 'rgba(255, 255, 255, 0.8)', marginBottom: '10px' }}>
            <strong>Name:</strong> Jieun Park
          </p>
          <p style={{ color: 'rgba(255, 255, 255, 0.8)' }}>
            <strong>Birthday:</strong> 19960210
          </p>
        </div>
      </div>
    </div>
  );
};

export default CellGroupPage;
