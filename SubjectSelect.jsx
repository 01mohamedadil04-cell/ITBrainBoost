import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import './Home.css';

export default function SubjectSelect() {
  const navigate = useNavigate();

  const subjects = [
    { name: 'Web Development', slug: 'web', color: '#ab4e52', icon: '🌐' },
    { name: 'Networking', slug: 'networking', color: '#ff7f50', icon: '📡' },
    { name: 'Cyber Security', slug: 'security', color: '#6a5acd', icon: '🔒' },
    { name: 'Cloud Computing', slug: 'cloud', color: '#ffa500', icon: '☁️' },
  ];

  return (
    <div className="subject-page">
      {/* Header */}
      <Header />

      {/* Page Title */}
      <h1 className="title">Choose Your Subject</h1>

      {/* Subject Cards */}
      <div className="features">
        {subjects.map((s) => (
          <div
            key={s.slug}
            className="feature-card"
            style={{ '--card-color': s.color }}
            onClick={() => navigate(`/quiz/${s.slug}`)}
            tabIndex={0} // keyboard accessible
            onKeyDown={(e) => e.key === 'Enter' && navigate(`/quiz/${s.slug}`)}
          >
            <div className="feature-icon">{s.icon}</div>
            <div className="feature-name">{s.name}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
