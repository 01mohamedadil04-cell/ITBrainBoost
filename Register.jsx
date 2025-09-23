import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css'; // reuse Home.css

export default function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    if (!name.trim() || !email.trim()) {
      return alert('Please fill both name and email');
    }
    const user = { name: name.trim(), email: email.trim() };
    localStorage.setItem('quizUser', JSON.stringify(user));
    navigate('/subjects');
  }

  return (
    <div 
      className="container"
      style={{
        backgroundImage: "url('/bg.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        justifyContent: 'center',  // center vertically
      }}
    >
    
      <div className="hero" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: 0 }}>
        <h1 className="title">Register</h1>

        <div className="feature-card" style={{ maxWidth: '400px', width: '100%' }}>
          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <input className="input" placeholder="Your name" value={name} onChange={e=>setName(e.target.value)} />
            <input className="input" placeholder="Your email" type="email" value={email} onChange={e=>setEmail(e.target.value)} />

            <div style={{ display: 'flex', justifyContent: 'space-between', gap: '10px', marginTop: '12px' }}>
              <button className="btn primary" type="submit">Next</button>
              <button className="btn secondary" type="button" onClick={() => { localStorage.removeItem('quizUser'); setName(''); setEmail(''); }}>
                Clear
              </button>
            </div>
          </form>
        </div>
      </div>

      <div className="footer" style={{ marginTop: 30 }}>
        <p>Daily IT Quiz &copy; 2025 | Learn, Practice & Improve</p>
      </div>
    </div>
  );
}
