import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import CellGroupPopup from './CellGroupPopup';
import RoomMatesPopup from './RoomMatesPopup';
import Snackbar from './Snackbar';
import { retreatData } from '../data/retreatData';

const CellGroupResult = () => {
  const navigate = useNavigate();
  const [result, setResult] = useState(null);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [isRoomMatesPopupOpen, setIsRoomMatesPopupOpen] = useState(false);
  const [snackbar, setSnackbar] = useState({ isOpen: false, message: '', type: 'info' });

  // Function to get people in the same room
  const getRoomMates = () => {
    if (!result) return [];
    return retreatData.cellGroups.filter(member => 
      member.room === result.room && member.name !== result.name
    );
  };

  // Function to check if download is allowed based on time
  const isDownloadAllowed = (sessionType) => {
    const now = new Date();
    const retreatDate = new Date('2025-09-06'); // September 6, 2025
    
    // Check if it's the retreat date
    if (now.getDate() !== retreatDate.getDate() || 
        now.getMonth() !== retreatDate.getMonth() || 
        now.getFullYear() !== retreatDate.getFullYear()) {
      return false;
    }
    
    const currentHour = now.getHours();
    const currentMinute = now.getMinutes();
    const currentTime = currentHour * 60 + currentMinute;
    
    if (sessionType === 'Morning') {
      // After 10 AM (10:00 = 600 minutes)
      return currentTime >= 600;
    } else if (sessionType === 'Afternoon') {
      // After 5 PM (17:00 = 1020 minutes)
      return currentTime >= 1020;
    }
    
    return false;
  };

  useEffect(() => {
    const storedResult = sessionStorage.getItem('cellGroupResult');
    if (storedResult) {
      setResult(JSON.parse(storedResult));
    } else {
      navigate('/cell-group');
    }
  }, [navigate]);

  const handleDownloadPDF = (sessionType) => {
    // Check if download is allowed based on time
    if (!isDownloadAllowed(sessionType)) {
      setSnackbar({
        isOpen: true,
        message: "As Ecclesiastes says, there is a time for everything. This is not the time to download yet—please come back after each session.",
        type: 'warning'
      });
      return;
    }
    
    // Download actual PDF files
    const link = document.createElement('a');
    if (sessionType === 'Morning') {
      link.href = '/Saving Grace Retreat - Morning Session.pdf';
      link.download = 'Saving Grace Retreat - Morning Session.pdf';
      link.type = 'application/pdf';
    } else if (sessionType === 'Afternoon') {
      link.href = '/Saving Grace Retreat - Evening Session.pdf';
      link.download = 'Saving Grace Retreat - Evening Session.pdf';
      link.type = 'application/pdf';
    }
    
    // Ensure the link is properly configured for download
    link.style.display = 'none';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  if (!result) {
    return <div>Loading...</div>;
  }

  return (
    <div className="page-container">
      <div className="page-header">
        <button 
          className="back-button" 
          onClick={() => navigate('/cell-group')}
          style={{ color: 'black', fontSize: '24px' }}
        >
          ←
        </button>
        <h1 className="page-title">Your Cell Group Assignment</h1>
      </div>

      <div className="container">
        {/* Leader/Baptism Notes */}
        {(result.leader || result.baptism) && (
          <div className="card" style={{ 
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            color: 'white',
            backdropFilter: 'blur(20px)',
            border: '1px solid rgba(255, 255, 255, 0.2)',
            maxWidth: '600px',
            margin: '0 auto 30px',
            padding: '25px',
            textAlign: 'center'
          }}>
            <h2 style={{ 
              color: 'white', 
              marginBottom: '20px',
              fontSize: '24px',
              fontWeight: '600'
            }}>
              🎉 Special Notes
            </h2>
            <div style={{ display: 'flex', gap: '15px', justifyContent: 'center', flexWrap: 'wrap' }}>
              {result.leader && (
                <div style={{
                  background: 'rgba(255, 255, 255, 0.2)',
                  padding: '10px 20px',
                  borderRadius: '25px',
                  fontSize: '16px',
                  fontWeight: '500'
                }}>
                  👑 You are a Cell Group Leader!
                </div>
              )}
              {result.baptism && (
                <div style={{
                  background: 'rgba(255, 255, 255, 0.2)',
                  padding: '10px 20px',
                  borderRadius: '25px',
                  fontSize: '16px',
                  fontWeight: '500'
                }}>
                  ✝️ You are participating in Baptism!
                </div>
              )}
            </div>
          </div>
        )}

        {/* Main Result Card */}
        <div className="card" style={{ 
          background: 'rgba(255, 255, 255, 0.1)', 
          color: 'white',
          backdropFilter: 'blur(20px)',
          border: '1px solid rgba(255, 255, 255, 0.2)',
          maxWidth: '600px',
          margin: '0 auto 30px',
          padding: '30px'
        }}>
          <div style={{ textAlign: 'center', marginBottom: '30px' }}>
            <div style={{ 
              fontSize: '4rem', 
              marginBottom: '20px',
              color: '#667eea'
            }}>
              🏠
            </div>
            <h2 style={{ 
              fontSize: '2rem',
              marginBottom: '15px',
              color: 'white',
              fontWeight: '600'
            }}>
              Welcome, {result.name}!
            </h2>
            <p style={{ 
              color: 'rgba(255, 255, 255, 0.8)',
              fontSize: '18px',
              lineHeight: '1.6'
            }}>
              Here's your retreat assignment information:
            </p>
          </div>

          <div style={{
            display: 'grid',
            gap: '20px',
            marginBottom: '30px'
          }}>
            <div style={{
              background: 'rgba(255, 255, 255, 0.1)',
              padding: '20px',
              borderRadius: '12px',
              border: '1px solid rgba(255, 255, 255, 0.2)'
            }}>
              <h3 style={{ 
                color: '#667eea', 
                marginBottom: '10px',
                fontSize: '18px',
                fontWeight: '600'
              }}>
                🏠 Cell Group Leader:
              </h3>
              <p style={{ 
                color: 'white', 
                fontSize: '24px',
                fontWeight: '600',
                margin: '0'
              }}>
                {result.cell}
              </p>
              {result.leader && (
                <button
                  onClick={() => setIsPopupOpen(true)}
                  style={{
                    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                    color: 'white',
                    border: 'none',
                    padding: '8px 16px',
                    borderRadius: '8px',
                    fontSize: '14px',
                    cursor: 'pointer',
                    marginTop: '10px',
                    transition: 'all 0.3s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.transform = 'translateY(-1px)';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.transform = 'translateY(0)';
                  }}
                >
                  👥 View Full Cell Group
                </button>
              )}
            </div>

                         <div style={{
               background: 'rgba(255, 255, 255, 0.1)',
               padding: '20px',
               borderRadius: '12px',
               border: '1px solid rgba(255, 255, 255, 0.2)'
             }}>
               <h3 style={{ 
                 color: '#667eea', 
                 marginBottom: '10px',
                 fontSize: '18px',
                 fontWeight: '600'
               }}>
                 🏨 Room Assignment
               </h3>
               <p style={{ 
                 color: 'white', 
                 fontSize: '24px',
                 fontWeight: '600',
                 margin: '0'
               }}>
                 {result.room}
               </p>
               <button
                 onClick={() => setIsRoomMatesPopupOpen(true)}
                 style={{
                   background: 'linear-gradient(135deg, #f59e0b 0%, #d97706 100%)',
                   color: 'white',
                   border: 'none',
                   padding: '8px 16px',
                   borderRadius: '8px',
                   fontSize: '14px',
                   cursor: 'pointer',
                   marginTop: '10px',
                   transition: 'all 0.3s ease'
                 }}
                 onMouseEnter={(e) => {
                   e.target.style.transform = 'translateY(-1px)';
                 }}
                 onMouseLeave={(e) => {
                   e.target.style.transform = 'translateY(0)';
                 }}
               >
                 👥 View Room Mates ({getRoomMates().length})
               </button>
             </div>
          </div>

          {/* PDF Downloads */}
          <div style={{ marginBottom: '30px' }}>
            <h3 style={{ 
              color: 'white', 
              marginBottom: '20px',
              textAlign: 'center',
              fontSize: '20px',
              fontWeight: '600'
            }}>
              📚 Session Guides
            </h3>
            <div style={{
              display: 'grid',
              gap: '15px',
              gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))'
            }}>
                             <button
                 onClick={() => handleDownloadPDF('Morning')}
                 className="btn"
                 style={{
                   padding: '15px 20px',
                   fontSize: '16px',
                   fontWeight: '600',
                   background: isDownloadAllowed('Morning') 
                     ? 'linear-gradient(135deg, #10b981 0%, #059669 100%)'
                     : 'linear-gradient(135deg, #6b7280 0%, #4b5563 100%)',
                   color: 'white',
                   border: 'none',
                   borderRadius: '8px',
                   cursor: isDownloadAllowed('Morning') ? 'pointer' : 'not-allowed',
                   transition: 'all 0.3s ease',
                   display: 'flex',
                   alignItems: 'center',
                   justifyContent: 'center',
                   gap: '8px',
                   opacity: isDownloadAllowed('Morning') ? 1 : 0.6
                 }}
                 onMouseEnter={(e) => {
                   if (isDownloadAllowed('Morning')) {
                     e.target.style.transform = 'translateY(-2px)';
                     e.target.style.boxShadow = '0 8px 25px rgba(16, 185, 129, 0.4)';
                   }
                 }}
                 onMouseLeave={(e) => {
                   e.target.style.transform = 'translateY(0)';
                   e.target.style.boxShadow = 'none';
                 }}
               >
                 🌅 Morning Session Guide
                 {!isDownloadAllowed('Morning') && <span style={{ marginLeft: '8px', fontSize: '14px' }}>🔒</span>}
               </button>
               <button
                 onClick={() => handleDownloadPDF('Afternoon')}
                 className="btn"
                 style={{
                   padding: '15px 20px',
                   fontSize: '16px',
                   fontWeight: '600',
                   background: isDownloadAllowed('Afternoon') 
                     ? 'linear-gradient(135deg, #f59e0b 0%, #d97706 100%)'
                     : 'linear-gradient(135deg, #6b7280 0%, #4b5563 100%)',
                   color: 'white',
                   border: 'none',
                   borderRadius: '8px',
                   cursor: isDownloadAllowed('Afternoon') ? 'pointer' : 'not-allowed',
                   transition: 'all 0.3s ease',
                   display: 'flex',
                   alignItems: 'center',
                   justifyContent: 'center',
                   gap: '8px',
                   opacity: isDownloadAllowed('Afternoon') ? 1 : 0.6
                 }}
                 onMouseEnter={(e) => {
                   if (isDownloadAllowed('Afternoon')) {
                     e.target.style.transform = 'translateY(-2px)';
                     e.target.style.boxShadow = '0 8px 25px rgba(245, 158, 11, 0.4)';
                   }
                 }}
                 onMouseLeave={(e) => {
                   e.target.style.transform = 'translateY(0)';
                   e.target.style.boxShadow = 'none';
                 }}
               >
                 🌞 Evening Session Guide
                 {!isDownloadAllowed('Afternoon') && <span style={{ marginLeft: '8px', fontSize: '14px' }}>🔒</span>}
               </button>
            </div>
          </div>
        </div>

        {/* Important Information */}
        <div className="card" style={{ 
          background: 'rgba(255, 255, 255, 0.1)', 
          color: 'white',
          backdropFilter: 'blur(20px)',
          border: '1px solid rgba(255, 255, 255, 0.2)',
          maxWidth: '600px',
          margin: '0 auto',
          padding: '25px'
        }}>
          <h3 style={{ 
            color: 'white', 
            marginBottom: '20px',
            textAlign: 'center',
            fontSize: '20px',
            fontWeight: '600'
          }}>
            ℹ️ Important Information
          </h3>
          <ul style={{ 
            color: 'rgba(255, 255, 255, 0.8)',
            lineHeight: '1.8',
            paddingLeft: '20px',
            margin: '0'
          }}>
            <li>Neither rooms nor cell groups can be changed</li>
            <li>Please arrive 10 minutes before each session</li>
            <li>Bring your session guides and any materials mentioned</li>
            <li>Cell group meetings will be held in designated areas</li>
            <li>Contact your cell group leader or the retreat planning team if you have any questions</li>
            <li>Please keep the room clean and be mindful of others</li>
          </ul>
        </div>
      </div>

      {/* Cell Group Popup for Leaders */}
      <CellGroupPopup
        isOpen={isPopupOpen}
        onClose={() => setIsPopupOpen(false)}
        cellGroupName={result.cell}
        currentMember={result}
      />

      {/* Room Mates Popup */}
      <RoomMatesPopup
        isOpen={isRoomMatesPopupOpen}
        onClose={() => setIsRoomMatesPopupOpen(false)}
        roomMates={getRoomMates()}
        roomNumber={result.room}
        currentMember={result}
      />

      {/* Snackbar for time restriction messages */}
      <Snackbar
        isOpen={snackbar.isOpen}
        message={snackbar.message}
        type={snackbar.type}
        onClose={() => setSnackbar({ ...snackbar, isOpen: false })}
      />
    </div>
  );
};

export default CellGroupResult;
