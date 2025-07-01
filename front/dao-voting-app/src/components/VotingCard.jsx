import React from 'react';

const VotingCard = ({ title, forVotes, againstVotes, onVote, loading }) => (
  <div style={{
    background: '#23262f',
    borderRadius: 18,
    boxShadow: '0 2px 16px rgba(0,0,0,0.10)',
    padding: 24,
    color: '#fff',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: 220,
    height: 220,
    margin: '0 auto',
    marginBottom: 5,
    marginTop: 10,
    justifyContent: 'space-between',
  }}>
    <div style={{ width: '100%', flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
      <div style={{ fontWeight: 700, fontSize: 20, marginBottom: 8, textAlign: 'center' }}>{title}</div>
      <div style={{ display: 'flex', gap: 10, marginBottom: 8, marginTop: 4 }}>
        <span style={{ background: '#181a20', color: '#22a06b', borderRadius: 8, padding: '2px 10px', fontSize: 13, fontWeight: 600 }}>
          Yes: {forVotes}
        </span>
        <span style={{ background: '#181a20', color: '#ff3860', borderRadius: 8, padding: '2px 10px', fontSize: 13, fontWeight: 600 }}>
          No: {againstVotes}
        </span>
      </div>
    </div>
    <div style={{ display: 'flex', gap: 16, width: '100%' }}>
      <button
        onClick={() => onVote(true)}
        disabled={loading}
        style={{
          background: 'linear-gradient(90deg, #22a06b 0%, #374bdf 100%)',
          color: '#fff',
          border: 'none',
          borderRadius: 12,
          padding: '10px 0',
          fontWeight: 700,
          fontSize: 18,
          width: '50%',
          cursor: loading ? 'not-allowed' : 'pointer',
          opacity: loading ? 0.7 : 1,
        }}
      >
        Yes
      </button>
      <button
        onClick={() => onVote(false)}
        disabled={loading}
        style={{
          background: 'linear-gradient(90deg, #11ab68 0%, #a31540 100%)',
          color: '#fff',
          border: 'none',
          borderRadius: 12,
          padding: '10px 0',
          fontWeight: 700,
          fontSize: 18,
          width: '50%',
          cursor: loading ? 'not-allowed' : 'pointer',
          opacity: loading ? 0.7 : 1,
        }}
      >
        No
      </button>
    </div>
  </div>
);

export default VotingCard; 