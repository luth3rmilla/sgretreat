import React from 'react';
import { useNavigate } from 'react-router-dom';
import { retreatData } from '../data/retreatData';

const SchedulePage = () => {
  const navigate = useNavigate();

  return (
    <div className="page-container">
      <button className="back-button" onClick={() => navigate('/')}>
        ←
      </button>
      
      <div className="page-header">
        <div className="container">
          <h1 className="page-title">Retreat Schedule</h1>
        </div>
      </div>

      <div className="container">
        <div style={{ display: 'grid', gap: '40px' }}>
          {/* Friday Schedule */}
          <div className="card">
            <h2 style={{ 
              fontSize: '2rem', 
              marginBottom: '20px', 
              borderBottom: '3px solid #667eea',
              paddingBottom: '10px',
              color: 'white'
            }}>
              Friday
            </h2>
            <div style={{ display: 'grid', gap: '15px' }}>
              {retreatData.schedule.friday.map((item, index) => (
                <div key={index} style={{
                  display: 'grid',
                  gridTemplateColumns: '120px 1fr',
                  gap: '20px',
                  padding: '15px',
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
                  borderRadius: '8px',
                  borderLeft: '4px solid #667eea',
                  border: '1px solid rgba(255, 255, 255, 0.2)'
                }}>
                  <div style={{ fontWeight: '600', color: '#667eea' }}>
                    {item.time}
                  </div>
                  <div>
                    <div style={{ fontWeight: '500', marginBottom: '5px', color: 'white' }}>
                      {item.activity}
                    </div>
                    {item.speaker && (
                      <div style={{ fontSize: '14px', color: 'rgba(255, 255, 255, 0.8)', marginBottom: '5px' }}>
                        Speaker: {item.speaker}
                      </div>
                    )}
                    {item.note && (
                      <div style={{ fontSize: '14px', color: '#ffc107', marginBottom: '5px', fontStyle: 'italic' }}>
                        Note: {item.note}
                      </div>
                    )}
                    <div style={{ fontSize: '14px', color: 'rgba(255, 255, 255, 0.7)' }}>
                      📍 {item.location}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Saturday Schedule */}
          <div className="card">
            <h2 style={{ 
              fontSize: '2rem', 
              marginBottom: '20px', 
              borderBottom: '3px solid #667eea',
              paddingBottom: '10px',
              color: 'white'
            }}>
              Saturday
            </h2>
            <div style={{ display: 'grid', gap: '15px' }}>
              {retreatData.schedule.saturday.map((item, index) => (
                <div key={index} style={{
                  display: 'grid',
                  gridTemplateColumns: '120px 1fr',
                  gap: '20px',
                  padding: '15px',
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
                  borderRadius: '8px',
                  borderLeft: '4px solid #667eea',
                  border: '1px solid rgba(255, 255, 255, 0.2)'
                }}>
                  <div style={{ fontWeight: '600', color: '#667eea' }}>
                    {item.time}
                  </div>
                  <div>
                    <div style={{ fontWeight: '500', marginBottom: '5px', color: 'white' }}>
                      {item.activity}
                    </div>
                    {item.speaker && (
                      <div style={{ fontSize: '14px', color: 'rgba(255, 255, 255, 0.8)', marginBottom: '5px' }}>
                        Speaker: {item.speaker}
                      </div>
                    )}
                    {item.note && (
                      <div style={{ fontSize: '14px', color: '#ffc107', marginBottom: '5px', fontStyle: 'italic' }}>
                        Note: {item.note}
                      </div>
                    )}
                    <div style={{ fontSize: '14px', color: 'rgba(255, 255, 255, 0.7)' }}>
                      📍 {item.location}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Sunday Schedule */}
          <div className="card">
            <h2 style={{ 
              fontSize: '2rem', 
              marginBottom: '20px', 
              borderBottom: '3px solid #667eea',
              paddingBottom: '10px',
              color: 'white'
            }}>
              Sunday
            </h2>
            <div style={{ display: 'grid', gap: '15px' }}>
              {retreatData.schedule.sunday.map((item, index) => (
                <div key={index} style={{
                  display: 'grid',
                  gridTemplateColumns: '120px 1fr',
                  gap: '20px',
                  padding: '15px',
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
                  borderRadius: '8px',
                  borderLeft: '4px solid #667eea',
                  border: '1px solid rgba(255, 255, 255, 0.2)'
                }}>
                  <div style={{ fontWeight: '600', color: '#667eea' }}>
                    {item.time}
                  </div>
                  <div>
                    <div style={{ fontWeight: '500', marginBottom: '5px', color: 'white' }}>
                      {item.activity}
                    </div>
                    {item.speaker && (
                      <div style={{ fontSize: '14px', color: 'rgba(255, 255, 255, 0.8)', marginBottom: '5px' }}>
                        Speaker: {item.speaker}
                      </div>
                    )}
                    {item.note && (
                      <div style={{ fontSize: '14px', color: '#ffc107', marginBottom: '5px', fontStyle: 'italic' }}>
                        Note: {item.note}
                      </div>
                    )}
                    <div style={{ fontSize: '14px', color: 'rgba(255, 255, 255, 0.7)' }}>
                      📍 {item.location}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Important Notes */}
          <div className="card" style={{ backgroundColor: 'rgba(255, 193, 7, 0.1)', border: '2px solid rgba(255, 193, 7, 0.3)' }}>
            <h3 style={{ color: '#ffc107', marginBottom: '15px' }}>📋 Important Notes</h3>
            <ul style={{ color: 'rgba(255, 255, 255, 0.9)', lineHeight: '1.6' }}>
            <li>The Schedule may be Subjected to changes along the way</li>
              <li>Please arrive 10-15 minutes before each session</li>
              <li>Cell group cannot be changed </li>
              <li>Bring your Bible, notebook and an excited heart for what the Lord will do</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SchedulePage;
