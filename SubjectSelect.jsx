import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css'; // use Home.css for styling

export default function SubjectSelect() {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem('quizUser') || 'null');

  React.useEffect(() => {
    if (!user) navigate('/register', { replace: true });
  }, [user, navigate]);

  const subjects = [
    { name: 'Web Development', slug: 'web', color: '#ab4e52', icon: '🌐' },
    { name: 'Networking', slug: 'networking', color: '#ff7f50', icon: '📡' },
    { name: 'Cyber Security', slug: 'security', color: '#6a5acd', icon: '🔒' },
    { name: 'Cloud Computing', slug: 'cloud', color: '#ffa500', icon: '☁️' },
  ];

  return (
    <div className="container">
      <h1 className="title">Choose Your Subject</h1>
      
    

      <div style={{ display:'flex', flexWrap:'wrap', justifyContent:'center', gap:'25px', marginTop:'25px' }}>
        {subjects.map(sub => (
          <div
            key={sub.slug}
            className="card"
            style={{ width:'220px', cursor:'pointer', borderTop:`5px solid ${sub.color}` }}
            onClick={() => navigate(`/quiz/${sub.slug}`)}
          >
            <div style={{ fontSize:'3rem', marginBottom:'10px', textAlign:'center' }}>{sub.icon}</div>
            <h3 style={{ color:'#ff7f50', textAlign:'center', marginBottom:'8px' }}>{sub.name}</h3>
            <p style={{ fontSize:'0.95rem', color:'#cfcfcf', textAlign:'center' }}>
            
            </p>
          </div>
        ))}
      </div>

      <div style={{marginTop:20, textAlign:'center'}}>
        <button className="btn secondary" onClick={() => navigate('/')}>Back to Home</button>
      </div>
    </div>
  );
}
