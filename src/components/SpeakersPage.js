import React from 'react';
import { useNavigate } from 'react-router-dom';
import { retreatData } from '../data/retreatData';

const SpeakersPage = () => {
  const navigate = useNavigate();

  return (
    <div className="page-container">
      <button className="back-button" onClick={() => navigate('/')} style={{ color: 'black' }}>
        ←
      </button>
      
      <div className="page-header">
        <div className="container">
          <h1 className="page-title">Our Speakers</h1>
        </div>
      </div>

      <div className="container">
        <div style={{ display: 'grid', gap: '40px' }}>
          {retreatData.speakers.map((speaker) => (
            <div key={speaker.id} className="card">
              <div style={{ 
                display: 'grid', 
                gridTemplateColumns: '200px 1fr',
                gap: '30px',
                alignItems: 'start'
              }}>
                {/* Speaker Image */}
                <div style={{ textAlign: 'center' }}>
                  <img 
                    src={speaker.image} 
                    alt={speaker.name}
                    style={{
                      width: '180px',
                      height: '180px',
                      borderRadius: '50%',
                      objectFit: 'cover',
                      border: '4px solid #667eea',
                      boxShadow: '0 8px 25px rgba(102, 126, 234, 0.2)'
                    }}
                  />
                </div>

                {/* Speaker Info */}
                <div>
                  <h2 style={{ 
                    fontSize: '2rem', 
                    marginBottom: '10px',
                    color: 'white'
                  }}>
                    {speaker.name}
                  </h2>
                  
                  <div style={{ 
                    fontSize: '1.1rem', 
                    color: '#667eea',
                    fontWeight: '500',
                    marginBottom: '5px'
                  }}>
                    {speaker.title}
                  </div>
                  
                  <div style={{ 
                    fontSize: '1rem', 
                    color: 'rgba(255, 255, 255, 0.8)',
                    marginBottom: '20px'
                  }}>
                    {speaker.church}
                  </div>

                  <p style={{ 
                    lineHeight: '1.7',
                    color: 'rgba(255, 255, 255, 0.9)',
                    marginBottom: '30px'
                  }}>
                    {speaker.bio}
                  </p>

                  {/* Sessions */}
                  <div>
                    <h3 style={{ 
                      fontSize: '1.3rem',
                      marginBottom: '15px',
                      color: 'white',
                      borderBottom: '2px solid rgba(255, 255, 255, 0.2)',
                      paddingBottom: '8px'
                    }}>
                      Sessions
                    </h3>
                    <div style={{ display: 'grid', gap: '15px' }}>
                      {speaker.sessions.map((session, index) => (
                        <div key={index} style={{
                          padding: '15px',
                          backgroundColor: 'rgba(255, 255, 255, 0.1)',
                          borderRadius: '8px',
                          borderLeft: '4px solid #667eea',
                          border: '1px solid rgba(255, 255, 255, 0.2)'
                        }}>
                          <div style={{ 
                            fontWeight: '600',
                            marginBottom: '5px',
                            color: 'white'
                          }}>
                            {session.title}
                          </div>
                          <div style={{ 
                            fontSize: '14px',
                            color: '#667eea',
                            marginBottom: '8px'
                          }}>
                            ⏰ {session.time}
                          </div>
                          <div style={{ 
                            fontSize: '14px',
                            color: 'rgba(255, 255, 255, 0.8)',
                            lineHeight: '1.5'
                          }}>
                            {session.description}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}

          {/* Call to Action */}
          <div className="card" style={{ 
            textAlign: 'center',
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            color: 'white'
          }}>
            <p style={{ marginBottom: '20px', opacity: 0.9, color: 'rgba(255, 255, 255, 0.9)' }}>
              Not sure on where to find your cell group?
            </p>
            <button 
              className="btn btn-secondary"
              onClick={() => navigate('/cell-group')}
              style={{ 
                backgroundColor: 'white',
                color: '#667eea',
                border: 'none'
              }}
            >
              Find Your Cell Group
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpeakersPage;
