import React from 'react';
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
  const navigate = useNavigate();

  const navigationItems = [
    {
      title: 'Schedule',
      description: 'View the complete retreat schedule and activities',
      icon: '📅',
      path: '/schedule'
    },
    {
      title: 'Find Your Cell Group',
      description: 'Enter your name and password to find your assigned cell group and room',
      icon: '🏠',
      path: '/cell-group'
    },
    {
      title: 'Speakers',
      description: 'Meet our amazing speakers and learn about their sessions',
      icon: '🎤',
      path: '/speakers'
    },
    {
      title: 'Retreat Location',
      description: 'View the retreat location and get directions',
      icon: '📍',
      path: '/location'
    }
  ];

  return (
    <div className="hero-section">
      <div className="hero-content">
        <h1 className="hero-title">Saving Grace Retreat 2025</h1>
        <p className="hero-subtitle">
        “A new commandment I give to you, that you love one another: just as I have loved you, you also are to love one another.
        <br></br>By this all people will know that you are my disciples, if you have love for one another.”
        <br></br>John 13:34-35
        </p>
        
        <div className="navigation-grid">
          {navigationItems.map((item, index) => (
            <div
              key={index}
              className="nav-card"
              onClick={() => navigate(item.path)}
            >
              <div className="nav-icon">{item.icon}</div>
              <h3 className="nav-title">{item.title}</h3>
              <p className="nav-description">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
