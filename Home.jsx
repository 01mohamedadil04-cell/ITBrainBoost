import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

export default function Home() {
  const user = JSON.parse(localStorage.getItem('quizUser') || 'null');

  const containerStyle = {
    backgroundImage: "url('/bg.jpg')",
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    minHeight: '100vh',
    padding: '40px 20px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    color: '#f1f1f1',
  };

  return (
    <div style={containerStyle}>
     
      

      
      <div className="hero">
        <h1 className="title">
          Welcome {user ? user.name : 'to ITBrainBoostr'}!
        </h1>
       
        <Link to={user ? "/subjects" : "/register"}>
          <button className="btn primary">Get Started</button>
        </Link>
      </div>

      
      <div className="features">
        <div className="feature-card"><h3>Web Development</h3></div>
        <div className="feature-card"><h3>Networking</h3></div>
        <div className="feature-card"><h3>Cyber Security</h3></div>
        <div className="feature-card"><h3>Cloud Computing</h3></div>
      </div>

      
      <div className="footer">
        <p>Daily IT Quiz &copy; 2025 | Learn, Practice & Improve</p>
      </div>
    </div>
  );
}
