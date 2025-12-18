import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css';

function Home() {
  const [counts, setCounts] = useState({ red: 0, blue: 0 });
  const [loading, setLoading] = useState(true);
  const [isDarkMode, setIsDarkMode] = useState(true); // Default dark mode
  const navigate = useNavigate();

  const API_URL = 'http://localhost:5000/api/counts';

  const fetchCounts = async () => {
    try {
      const res = await fetch(API_URL);
      if (!res.ok) throw new Error('Failed to fetch');
      const data = await res.json();
      setCounts({ red: data.red || 0, blue: data.blue || 0 });
      setLoading(false);
    } catch (err) {
      console.error('Error:', err);
      setLoading(false);
    }
  };

  const handleReset = async () => {
    if (window.confirm('Are you sure you want to reset all counts to zero?')) {
      try {
        const res = await fetch(`${API_URL}/reset`, { method: 'POST' });
        if (res.ok) {
          const data = await res.json();
          setCounts({ red: data.red, blue: data.blue });
          alert('Counts reset successfully!');
        }
      } catch (err) {
        alert('Error resetting counts');
      }
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('isLoggedIn');
    navigate('/login');
  };

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  useEffect(() => {
    fetchCounts();
    const interval = setInterval(fetchCounts, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className={`home-container ${isDarkMode ? 'dark-mode' : 'light-mode'}`}>
      {/* Dark/Light Mode Toggle - Centered at Top */}
      <div className="theme-toggle-center" onClick={toggleTheme}>
        <div className={`toggle-switch ${isDarkMode ? '' : 'active'}`}>
          <div className="toggle-knob"></div>
        </div>
        <span className="toggle-label">
          {isDarkMode ? 'Dark Mode' : 'Light Mode'}
        </span>
      </div>

      {/* Logout Button - Top Left */}
      <button className="logout-btn" onClick={handleLogout}>
        Logout
      </button>

      {/* Reset Button - Top Right */}
      <button className="reset-btn" onClick={handleReset}>
        Reset Counts
      </button>

      <h1>Outdoor Shooting Profiling System</h1>

      <div className="status">
        {loading ? 'Loading live data...' : 'Live Counts'}
      </div>

      <div className="buttons">
        <div className="count-wrapper">
          <div className="count-label red-label">Red</div>
          <div className="count-box red-glow">
            {counts.red}
          </div>
        </div>

        <div className="count-wrapper">
          <div className="count-label blue-label">Blue</div>
          <div className="count-box blue-glow">
            {counts.blue}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;