import React from 'react';

const HeroSection = ({ onCreatePoll }) => (
  <section style={{
    width: '100%',
    maxWidth: 700,
    margin: '0 auto',
    textAlign: 'center',
    padding: '48px 0 32px 0',
  }}>
    <h1 style={{ fontSize: 48, fontWeight: 900, margin: '0 0 18px 0', color: '#fff', letterSpacing: -1 }}>
      Vote Without Rigging
    </h1>
    <p style={{ color: '#d1d5db', fontSize: 20, margin: '0 0 32px 0', fontWeight: 400 }}>
    "The vote is the most powerful instrument ever devised by human beings for breaking down injustice and destroying the terrible walls which imprison people because they are different from others.”
    Lyndon B. Johnson
    </p>
    <button
      onClick={onCreatePoll}
      style={{
        background: '#fff',
        color: '#181a20',
        border: 'none',
        borderRadius: 32,
        padding: '16px 38px',
        fontWeight: 700,
        fontSize: 20,
        boxShadow: '0 2px 12px rgba(0,0,0,0.10)',
        cursor: 'pointer',
        marginBottom: 24,
      }}
    >
      Create poll
    </button>
  </section>
);

export default HeroSection; 