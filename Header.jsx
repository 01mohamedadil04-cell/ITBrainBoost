import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../pages/Home.css';

export default function Header() {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem('quizUser') || 'null');

  const handleLogout = () => {
    localStorage.removeItem('quizUser');
    navigate('/', { replace: true });
  };

  return (
    <header className="header-fixed">
      <h2 className="logo-text">ITBrainBooster</h2>
      {user && (
        <button className="btn secondary" onClick={handleLogout}>
          Logout
        </button>
      )}
    </header>
  );
}
