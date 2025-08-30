import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import SchedulePage from './components/SchedulePage';
import CellGroupPage from './components/CellGroupPage';
import SpeakersPage from './components/SpeakersPage';
import CellGroupResult from './components/CellGroupResult';
import LocationPage from './components/LocationPage';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/schedule" element={<SchedulePage />} />
          <Route path="/cell-group" element={<CellGroupPage />} />
          <Route path="/speakers" element={<SpeakersPage />} />
          <Route path="/cell-group-result" element={<CellGroupResult />} />
          <Route path="/location" element={<LocationPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
