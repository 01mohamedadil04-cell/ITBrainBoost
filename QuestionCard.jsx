import React from 'react';
import '../pages/Home.css';

export default function QuestionCard({ question, options, onAnswer, disabled }) {
  return (
    <div className="question-card" style={{ marginTop: 20 }}>
      <h3 style={{ marginBottom: 15 }}>{question}</h3>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
        {options.map((option, i) => (
          <button
            key={i}
            className="btn secondary option-btn"
            onClick={() => onAnswer(i)}
            disabled={disabled}
            style={{
              textAlign: 'left',
              backgroundColor: 'rgba(0, 0, 0, 0.55)', 
              color: '#fff',
              border: '1px solid rgba(255,255,255,0.3)',
            }}
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
}
