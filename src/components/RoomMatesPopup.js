import React from 'react';

const RoomMatesPopup = ({ isOpen, onClose, roomMates, roomNumber, currentMember }) => {
  if (!isOpen) return null;

  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      background: 'rgba(0, 0, 0, 0.8)',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      zIndex: 1000,
      padding: '20px'
    }}>
      <div style={{
        background: 'linear-gradient(135deg, #0a0a1a 0%, #15152e 100%)',
        borderRadius: '16px',
        padding: '30px',
        maxWidth: '500px',
        width: '100%',
        maxHeight: '80vh',
        overflow: 'auto',
        border: '2px solid rgba(255, 255, 255, 0.2)',
        boxShadow: '0 20px 40px rgba(0, 0, 0, 0.5)',
        position: 'relative'
      }}>
        {/* Close button */}
        <button
          onClick={onClose}
          style={{
            position: 'absolute',
            top: '15px',
            right: '20px',
            background: 'none',
            border: 'none',
            color: 'white',
            fontSize: '24px',
            cursor: 'pointer',
            padding: '5px',
            borderRadius: '50%',
            width: '40px',
            height: '40px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            transition: 'all 0.3s ease'
          }}
          onMouseEnter={(e) => {
            e.target.style.background = 'rgba(255, 255, 255, 0.1)';
          }}
          onMouseLeave={(e) => {
            e.target.style.background = 'none';
          }}
        >
          ×
        </button>

        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '30px' }}>
          <h2 style={{ 
            color: 'white', 
            fontSize: '28px', 
            marginBottom: '10px',
            fontWeight: '600'
          }}>
            🛏️ Room {roomNumber}
          </h2>
          <p style={{ 
            color: 'rgba(255, 255, 255, 0.8)', 
            fontSize: '16px',
            marginBottom: '20px'
          }}>
            People sharing this room with you
          </p>
        </div>

        {/* Room Mates List */}
        <div style={{ marginBottom: '25px' }}>
          <h3 style={{ 
            color: 'white', 
            marginBottom: '20px',
            fontSize: '20px',
            fontWeight: '500'
          }}>
            Room Mates ({roomMates.length})
          </h3>
          
          {roomMates.length > 0 ? (
            <div style={{
              display: 'grid',
              gap: '15px'
            }}>
              {roomMates.map((roomMate, index) => (
                <div key={index} style={{
                  background: 'rgba(255, 255, 255, 0.1)',
                  padding: '20px',
                  borderRadius: '12px',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                  backdropFilter: 'blur(10px)',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  flexWrap: 'wrap',
                  gap: '10px'
                }}>
                  <div style={{ flex: 1 }}>
                    <div style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '10px'
                    }}>
                      <span style={{ 
                        color: 'white', 
                        fontSize: '18px', 
                        fontWeight: '600' 
                      }}>
                        {roomMate.name}
                      </span>
                      {roomMate.leader && (
                        <span style={{
                          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                          color: 'white',
                          padding: '4px 8px',
                          borderRadius: '12px',
                          fontSize: '12px',
                          fontWeight: '500'
                        }}>
                          Leader
                        </span>
                      )}
                      {roomMate.baptism && (
                        <span style={{
                          background: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
                          color: 'white',
                          padding: '4px 8px',
                          borderRadius: '12px',
                          fontSize: '12px',
                          fontWeight: '500'
                        }}>
                          Baptism
                        </span>
                      )}
                    </div>
                  </div>
                  
                  {roomMate.name === currentMember?.name && (
                    <div style={{
                      background: 'rgba(255, 255, 255, 0.2)',
                      padding: '6px 12px',
                      borderRadius: '8px',
                      fontSize: '12px',
                      color: 'white',
                      fontWeight: '500'
                    }}>
                      You
                    </div>
                  )}
                </div>
              ))}
            </div>
          ) : (
            <div style={{
              background: 'rgba(255, 255, 255, 0.1)',
              padding: '30px',
              borderRadius: '12px',
              border: '1px solid rgba(255, 255, 255, 0.2)',
              textAlign: 'center'
            }}>
              <p style={{ 
                color: 'rgba(255, 255, 255, 0.8)', 
                fontSize: '16px',
                margin: '0'
              }}>
                You have this room all to yourself! 🎉
              </p>
            </div>
          )}
        </div>

        {/* Footer */}
        <div style={{
          textAlign: 'center',
          paddingTop: '20px',
          borderTop: '1px solid rgba(255, 255, 255, 0.2)'
        }}>
          <button
            onClick={onClose}
            style={{
              background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
              color: 'white',
              border: 'none',
              padding: '12px 30px',
              borderRadius: '8px',
              fontSize: '16px',
              fontWeight: '500',
              cursor: 'pointer',
              transition: 'all 0.3s ease'
            }}
            onMouseEnter={(e) => {
              e.target.style.transform = 'translateY(-2px)';
              e.target.style.boxShadow = '0 8px 25px rgba(102, 126, 234, 0.4)';
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = 'translateY(0)';
              e.target.style.boxShadow = 'none';
            }}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default RoomMatesPopup;
