import React from 'react';
import { useNavigate } from 'react-router-dom';

const LocationPage = () => {
  const navigate = useNavigate();
  const address = "경기 안성시 삼죽면 기솔리 270-5";

  const copyAddress = () => {
    navigator.clipboard.writeText(address);
    alert('Address copied to clipboard!');
  };

  return (
    <div className="page-container">
      <button className="back-button" onClick={() => navigate('/')}>
        ←
      </button>
      
      <div className="page-header">
        <div className="container">
          <h1 className="page-title">Retreat Location</h1>
        </div>
      </div>

      <div className="container">
        <div style={{ 
          maxWidth: '1000px', 
          margin: '0 auto',
          padding: '20px 0'
        }}>
          {/* Location Info Card */}
          <div className="card" style={{ marginBottom: '30px' }}>
            <div style={{ textAlign: 'center', marginBottom: '30px' }}>
              <div style={{ 
                fontSize: '3rem', 
                marginBottom: '15px',
                color: '#667eea'
              }}>
                📍
              </div>
              <h2 style={{ 
                fontSize: '2rem',
                marginBottom: '10px',
                color: 'white'
              }}>
                Saving Grace Retreat Location
              </h2>
              <p style={{ 
                fontSize: '1.2rem',
                color: 'rgba(255, 255, 255, 0.9)',
                marginBottom: '20px'
              }}>
              </p>
            </div>

            <div style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '20px',
              marginBottom: '30px'
            }}>
              <div style={{
                padding: '20px',
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                borderRadius: '8px',
                border: '1px solid rgba(255, 255, 255, 0.2)'
              }}>
                <h3 style={{ 
                  marginBottom: '10px',
                  color: '#667eea'
                }}>
                  🚌 Getting There
                </h3>
                <ul style={{ 
                  color: 'rgba(255, 255, 255, 0.9)',
                  lineHeight: '1.6',
                  paddingLeft: '20px'
                }}>
                  <li>The Bus will depart from church Friday at 8:00 PM</li>
                  <li>By public transport: Take bus to 안성버스터미널 and then someone will pick you up (Make sure to confirm before)</li>
                </ul>
              </div>

              <div style={{
                padding: '20px',
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                borderRadius: '8px',
                border: '1px solid rgba(255, 255, 255, 0.2)'
              }}>
                <h3 style={{ 
                  marginBottom: '10px',
                  color: '#667eea'
                }}>
                  🚨 Important
                </h3>
                <ul style={{ 
                  color: 'rgba(255, 255, 255, 0.9)',
                  lineHeight: '1.6',
                  paddingLeft: '20px'
                }}>
                  <li>For directions: Contact retreat Planning Team</li>
                  <li>Saturday: Be on the agreed place for pick up by 1 PM</li>
                  <li>Sunday: Be on the agreed place for pick up by 10 AM</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Map Card */}
          <div className="card">
            <h3 style={{ 
              fontSize: '1.5rem',
              marginBottom: '20px',
              color: 'white',
              textAlign: 'center'
            }}>
              📍 Retreat Location
            </h3>
            
            <div style={{
              position: 'relative',
              width: '100%',
              height: '300px',
              borderRadius: '12px',
              overflow: 'hidden',
              border: '2px solid rgba(255, 255, 255, 0.2)',
              backgroundColor: 'rgba(255, 255, 255, 0.05)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexDirection: 'column'
            }}>
              <div style={{
                fontSize: '3rem',
                marginBottom: '20px',
                color: '#667eea'
              }}>
                🏠
              </div>
              <div style={{
                fontSize: '1.2rem',
                color: 'white',
                textAlign: 'center',
                marginBottom: '10px',
                fontWeight: '500'
              }}>
                {address}
              </div>
            </div>

            <div style={{
              marginTop: '20px',
              textAlign: 'center',
              display: 'grid',
              gridTemplateColumns: '1fr 1fr 1fr',
              gap: '15px'
            }}>
              <a
                href={`https://map.naver.com/p/search/${encodeURIComponent(address)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
                style={{ textDecoration: 'none' }}
              >
                🗺️ Naver Maps
              </a>
              <a
                href={`https://map.kakao.com/link/search/${encodeURIComponent(address)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary"
                style={{ textDecoration: 'none' }}
              >
                🗺️ Kakao Maps
              </a>
              <button
                onClick={copyAddress}
                className="btn btn-secondary"
                style={{ 
                  textDecoration: 'none',
                  backgroundColor: 'rgba(255, 193, 7, 0.2)',
                  border: '1px solid rgba(255, 193, 7, 0.4)',
                  color: '#ffc107'
                }}
              >
                📋 Copy Address
              </button>
            </div>
          </div>

          {/* Important Notes */}
          <div className="card" style={{ 
            marginTop: '30px',
            backgroundColor: 'rgba(255, 193, 7, 0.1)',
            border: '2px solid rgba(255, 193, 7, 0.3)'
          }}>
            <h3 style={{ 
              marginBottom: '15px',
              color: '#ffc107'
            }}>
              ⚠️ Important Information
            </h3>
            <ul style={{ 
              color: 'rgba(255, 255, 255, 0.9)',
              lineHeight: '1.6',
              paddingLeft: '20px'
            }}>
              <li>Please arrive 15-20 minutes before the bus Departure</li>
              <li>Parking is available on-site</li>
              <li>Bring comfortable walking shoes for outdoor activities</li>
              <li>Weather-appropriate clothing recommended</li>
              <li>Contact the Planning Team if you need assistance</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LocationPage;
