import React from 'react';
import './HeroSection.css';

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
      className="squishy squishy-classic"
      style={{
        marginBottom: 24,
      }}
    >
      <span style={{ color: '#374bdf' }}>Create</span> <span style={{ color: '#11ab68' }}>poll</span>
    </button>
  </section>
);

export default HeroSection; 