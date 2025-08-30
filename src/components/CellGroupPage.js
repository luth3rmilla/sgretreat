import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { findMember } from '../data/retreatData';

const CellGroupPage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    password: ''
  });
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error when user starts typing
    if (error) setError('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 1000));

    const result = findMember(formData.name, formData.password);
    
    if (result) {
      // Store the result in sessionStorage for the result page
      sessionStorage.setItem('cellGroupResult', JSON.stringify(result));
      navigate('/cell-group-result');
    } else {
      setError('Invalid name or password. Please try again.');
    }
    
    setIsLoading(false);
  };

  return (
    <div className="page-container">
      <button className="back-button" onClick={() => navigate('/')}>
        ←
      </button>
      
      <div className="page-header">
        <div className="container">
          <h1 className="page-title">Find Your Cell Group</h1>
        </div>
      </div>

      <div className="container">
        <div style={{ 
          maxWidth: '500px', 
          margin: '0 auto',
          padding: '20px 0'
        }}>
          <div className="card">
            <div style={{ textAlign: 'center', marginBottom: '30px' }}>
              <div style={{ 
                fontSize: '3rem', 
                marginBottom: '15px',
                color: '#667eea'
              }}>
                🏠
              </div>
              <h2 style={{ 
                fontSize: '1.8rem',
                marginBottom: '10px',
                color: '#ffffff'
              }}>
                Welcome to the Retreat!
              </h2>
              <p style={{ 
                color: '#64748b',
                lineHeight: '1.6'
              }}>
                Enter your name and password to find your assigned cell group and room information.
              </p>
            </div>

            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name" className="form-label">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="form-input"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Enter your full name"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="password" className="form-label">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  className="form-input"
                  value={formData.password}
                  onChange={handleInputChange}
                  placeholder="Enter your password"
                  required
                />
              </div>

              {error && (
                <div className="error" style={{ marginBottom: '20px' }}>
                  {error}
                </div>
              )}

              <button
                type="submit"
                className="btn btn-primary"
                disabled={isLoading}
                style={{ width: '100%' }}
              >
                {isLoading ? (
                  <>
                    <span className="loading" style={{ marginRight: '10px' }}></span>
                    Finding your group...
                  </>
                ) : (
                  'Find My Cell Group'
                )}
              </button>
            </form>

            <div style={{ 
              marginTop: '30px',
              padding: '20px',
              backgroundColor: 'rgba(255, 255, 255, 0.1)',
              borderRadius: '8px',
              border: '1px solid rgba(255, 255, 255, 0.2)'
            }}>
              <h4 style={{ 
                marginBottom: '10px',
                color: 'white'
              }}>
                💡 Need Help?
              </h4>
              <p style={{ 
                fontSize: '14px',
                color: 'rgba(255, 255, 255, 0.8)',
                lineHeight: '1.5'
              }}>
                If you're having trouble finding your information, please contact the retreat planning team.
              </p>
            </div>
          </div>

          {/* Sample Data Info */}
          <div className="card" style={{ 
            marginTop: '20px',
            backgroundColor: '#fef3c7',
            border: '2px solid #f59e0b'
          }}>
            <h4 style={{ 
              marginBottom: '10px',
              color: '#92400e'
            }}>
              🧪 PS:
            </h4>
            <p style={{ 
              fontSize: '14px',
              color: '#92400e',
              lineHeight: '1.5'
            }}>
              Your username should be your name and your password your Birthday, eg:
            </p>
            <ul style={{ 
              fontSize: '14px',
              color: '#92400e',
              marginTop: '10px',
              paddingLeft: '20px'
            }}>
              <li>JohnDoe 19990101</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CellGroupPage;
