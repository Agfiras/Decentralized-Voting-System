import React, { useState } from 'react';

const VotingCard = ({ title, forVotes, againstVotes, onVote, loading }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [yesButtonHovered, setYesButtonHovered] = useState(false);
  const [noButtonHovered, setNoButtonHovered] = useState(false);

  return (
    <div 
      style={{
        background: '#23262f',
        borderRadius: 18,
        boxShadow: isHovered 
          ? '0 8px 32px rgba(41, 149, 122, 0.25)' 
          : '0 2px 16px rgba(41, 149, 122, 0.1)',
        padding: 24,
        color: '#fff',
        display: 'flex',
        flexDirection: 'column',
        width: 280,
        height: 280,
        marginBottom: 5,
        marginTop: 10,
        transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
        transform: isHovered ? 'scale(1.05) translateY(-4px)' : 'scale(1) translateY(0)',
        cursor: 'pointer',
        willChange: 'transform, box-shadow',
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
    <div style={{ display: 'flex', gap: 10, marginBottom: 12, alignSelf: 'flex-start' }}>
      <span style={{background: '#181a20', color: '#22a06b', borderRadius: 8, padding: '2px 10px', fontSize: 13, fontWeight: 600, }}>
        Yes: {forVotes}
      </span>
      <span style={{ background: '#181a20', color: '#374bdf', borderRadius: 8, padding: '2px 10px', fontSize: 13, fontWeight: 600 }}>
        No: {againstVotes}
      </span>
    </div>
    <div style={{ width: '100%', flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
      <div style={{ fontWeight: 700, fontSize: 20, marginBottom: 8, textAlign: 'center' }}>{title}</div>
    </div>
    <div style={{ display: 'flex', gap: 16, width: '100%' }}>
      <button
        onClick={() => onVote(true)}
        disabled={loading}
        onMouseEnter={() => setYesButtonHovered(true)}
        onMouseLeave={() => setYesButtonHovered(false)}
        style={{
          // background: 'linear-gradient(90deg, #22a06b 0%, #374bdf 100%)',
          background: yesButtonHovered && !loading ? '#28b76a' : '#22a06b',
          color: '#fff',
          border: 'none',
          borderRadius: 12,
          padding: '10px 0',
          fontWeight: 700,
          fontSize: 18,
          width: '50%',
          cursor: loading ? 'not-allowed' : 'pointer',
          opacity: loading ? 0.7 : 1,
          transition: 'all 0.2s ease',
          transform: yesButtonHovered && !loading ? 'translateY(-2px) scale(1.02)' : 'translateY(0) scale(1)',
          boxShadow: yesButtonHovered && !loading ? '0 4px 12px rgba(34, 160, 107, 0.3)' : '0 2px 4px rgba(0,0,0,0.1)',
        }}
      >
        Yes
      </button>
      <button
        onClick={() => onVote(false)}
        disabled={loading}
        onMouseEnter={() => setNoButtonHovered(true)}
        onMouseLeave={() => setNoButtonHovered(false)}
        style={{
          // background: 'linear-gradient(90deg, #11ab68 0%, #a31540 100%)',
          background: noButtonHovered && !loading ? '#4a5cff' : '#374bdf',
          color: '#fff',
          border: 'none',
          borderRadius: 12,
          padding: '10px 0',
          fontWeight: 700,
          fontSize: 18,
          width: '50%',
          cursor: loading ? 'not-allowed' : 'pointer',
          opacity: loading ? 0.7 : 1,
          transition: 'all 0.2s ease',
          transform: noButtonHovered && !loading ? 'translateY(-2px) scale(1.02)' : 'translateY(0) scale(1)',
          boxShadow: noButtonHovered && !loading ? '0 4px 12px rgba(55, 75, 223, 0.3)' : '0 2px 4px rgba(0,0,0,0.1)',
        }}
      >
        No
      </button>
    </div>
    </div>
  );
};

export default VotingCard; 