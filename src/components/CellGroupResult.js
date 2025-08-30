import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { retreatData } from '../data/retreatData';

const CellGroupResult = () => {
  const navigate = useNavigate();
  const [result, setResult] = useState(null);

  useEffect(() => {
    const storedResult = sessionStorage.getItem('cellGroupResult');
    if (storedResult) {
      setResult(JSON.parse(storedResult));
    } else {
      // If no result stored, redirect back to cell group page
      navigate('/cell-group');
    }
  }, [navigate]);

  const handleDownloadPDF = (type) => {
    // In a real application, this would download actual PDF files
    // For now, we'll simulate the download
    const link = document.createElement('a');
    link.href = `#${type}-pdf`; // Placeholder
    link.download = retreatData.pdfDownloads[type].filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    // Show success message
    alert(`${retreatData.pdfDownloads[type].title} download started!`);
  };

  if (!result) {
    return (
      <div className="page-container">
        <div className="container" style={{ textAlign: 'center', padding: '50px 0' }}>
          <div className="loading" style={{ margin: '0 auto 20px' }}></div>
          <p>Loading your information...</p>
        </div>
      </div>
    );
  }

  const { member, cellGroup } = result;

  return (
    <div className="page-container">
      <button className="back-button" onClick={() => navigate('/')}>
        ←
      </button>
      
      <div className="page-header">
        <div className="container">
          <h1 className="page-title">Your Retreat Information</h1>
        </div>
      </div>

      <div className="container">
        <div style={{ 
          maxWidth: '800px', 
          margin: '0 auto',
          padding: '20px 0'
        }}>
          {/* Welcome Card */}
          <div className="card" style={{ 
            textAlign: 'center',
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            color: 'white',
            marginBottom: '30px'
          }}>
            <div style={{ fontSize: '3rem', marginBottom: '15px' }}>
              🎉
            </div>
            <h2 style={{ fontSize: '2rem', marginBottom: '10px' }}>
              Welcome, {member.name}!
            </h2>
            <p style={{ fontSize: '1.1rem', opacity: 0.9 }}>
              We're excited to have you join us for this amazing retreat experience.
            </p>
          </div>

          {/* Cell Group Information */}
          <div className="card" style={{ marginBottom: '30px' }}>
            <h3 style={{ 
              fontSize: '1.5rem',
              marginBottom: '20px',
              color: '#ffffff',
              borderBottom: '2px solid #e2e8f0',
              paddingBottom: '10px'
            }}>
              📋 Your Assignment
            </h3>
            
            <div style={{ display: 'grid', gap: '20px' }}>
              <div style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: '20px',
                padding: '20px',
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                borderRadius: '8px',
                border: '1px solid rgba(255, 255, 255, 0.2)'
              }}>
                <div>
                  <div style={{ 
                    fontSize: '14px',
                    color: 'rgba(255, 255, 255, 0.7)',
                    marginBottom: '5px'
                  }}>
                    Cell Group
                  </div>
                  <div style={{ 
                    fontSize: '1.2rem',
                    fontWeight: '600',
                    color: 'white'
                  }}>
                    {cellGroup.name}
                  </div>
                </div>
                
                <div>
                  <div style={{ 
                    fontSize: '14px',
                    color: 'rgba(255, 255, 255, 0.7)',
                    marginBottom: '5px'
                  }}>
                    Room Assignment
                  </div>
                  <div style={{ 
                    fontSize: '1.2rem',
                    fontWeight: '600',
                    color: 'white'
                  }}>
                    {cellGroup.room}
                  </div>
                </div>
              </div>

              <div style={{
                padding: '20px',
                backgroundColor: 'rgba(102, 126, 234, 0.1)',
                borderRadius: '8px',
                border: '1px solid rgba(102, 126, 234, 0.3)'
              }}>
                <div style={{ 
                  fontSize: '14px',
                  color: '#667eea',
                  marginBottom: '5px'
                }}>
                  Cell Group Leader
                </div>
                <div style={{ 
                  fontSize: '1.1rem',
                  fontWeight: '600',
                  color: 'white'
                }}>
                  {cellGroup.leader}
                </div>
              </div>
            </div>
          </div>

          {/* PDF Downloads */}
          <div className="card" style={{ marginBottom: '30px' }}>
            <h3 style={{ 
              fontSize: '1.5rem',
              marginBottom: '20px',
              color: '#ffffff',
              borderBottom: '2px solid #e2e8f0',
              paddingBottom: '10px'
            }}>
              📄 Session Materials
            </h3>
            
            <p style={{ 
              color: 'rgba(255, 255, 255, 0.8)',
              marginBottom: '20px',
              lineHeight: '1.6'
            }}>
              Download your session guides and materials for the retreat.
            </p>

            <div style={{ display: 'grid', gap: '15px' }}>
                              <div style={{
                  display: 'grid',
                  gridTemplateColumns: '1fr auto',
                  gap: '20px',
                  alignItems: 'center',
                  padding: '20px',
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
                  borderRadius: '8px',
                  border: '1px solid rgba(255, 255, 255, 0.2)'
                }}>
                  <div>
                    <div style={{ 
                      fontWeight: '600',
                      marginBottom: '5px',
                      color: 'white'
                    }}>
                      {retreatData.pdfDownloads.morningSessions.title}
                    </div>
                    <div style={{ 
                      fontSize: '14px',
                      color: 'rgba(255, 255, 255, 0.7)'
                    }}>
                      {retreatData.pdfDownloads.morningSessions.description}
                    </div>
                  </div>
                <button
                  className="btn btn-primary"
                  onClick={() => handleDownloadPDF('morningSessions')}
                >
                  📥 Download
                </button>
              </div>

              <div style={{
                display: 'grid',
                gridTemplateColumns: '1fr auto',
                gap: '20px',
                alignItems: 'center',
                padding: '20px',
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                borderRadius: '8px',
                border: '1px solid rgba(255, 255, 255, 0.2)'
              }}>
                <div>
                  <div style={{ 
                    fontWeight: '600',
                    marginBottom: '5px',
                    color: 'white'
                  }}>
                    {retreatData.pdfDownloads.afternoonSessions.title}
                  </div>
                  <div style={{ 
                    fontSize: '14px',
                    color: 'rgba(255, 255, 255, 0.7)'
                  }}>
                    {retreatData.pdfDownloads.afternoonSessions.description}
                  </div>
                </div>
                <button
                  className="btn btn-primary"
                  onClick={() => handleDownloadPDF('afternoonSessions')}
                >
                  📥 Download
                </button>
              </div>
            </div>
          </div>

          {/* Important Information */}
          <div className="card" style={{ 
            backgroundColor: '#fef3c7',
            border: '2px solid #f59e0b'
          }}>
            <h3 style={{ 
              marginBottom: '15px',
              color: '#92400e'
            }}>
              ⚠️ Important Information
            </h3>
            <ul style={{ 
              color: '#92400e',
              lineHeight: '1.6',
              paddingLeft: '20px'
            }}>
              <li>Please arrive at your assigned room 10 minutes before cell group time</li>
              <li>Bring your Bible, notebook, and any downloaded materials</li>
              <li>Cell group sessions are mandatory for all participants</li>
              <li>If you have any questions, contact your cell group leader</li>
              <li>Room assignments are final and cannot be changed</li>
            </ul>
          </div>

          {/* Action Buttons */}
          <div style={{ 
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '15px',
            marginTop: '30px'
          }}>
            <button
              className="btn btn-secondary"
              onClick={() => navigate('/schedule')}
            >
              📅 View Schedule
            </button>
            <button
              className="btn btn-primary"
              onClick={() => navigate('/')}
            >
              🏠 Back to Home
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CellGroupResult;
