import React from 'react';

const Header = ({ onConnect, account }) => (
  <header style={{
    width: '100%',
    background: 'rgba(30,32,40,0.95)',
    borderRadius: 24,
    margin: '24px auto 32px auto',
    maxWidth: 1100,
    padding: '18px 36px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    boxShadow: '0 2px 24px rgba(0,0,0,0.12)',
  }}>
    <span style={{ fontWeight: 800, fontSize: 28, color: '#374bdf', letterSpacing: 1 }}>
      Your<span style={{ color: '#11ab68' }}>Votes</span>
    </span>
    {account ? (
      <span style={{ 
        background: '#353945',
        color: '#ffffff', 
        padding: '8px 18px', 
        borderRadius: 18, 
        fontSize: 16, 
        border: '2px solid rgba(34, 160, 107, 1)',
        fontWeight: 500,
        display: 'inline-block',
        minWidth: '120px',
        textAlign: 'center'
      }}>
        {account.slice(0, 6)}...{account.slice(-4)}
      </span>
    ) : (
      <button
        onClick={onConnect}
        style={{
          background: 'linear-gradient(90deg, #22a06b 0%, #374bdf 100%)',
          color: '#fff',
          border: 'none',
          borderRadius: 18,
          padding: '10px 28px',
          fontWeight: 700,
          fontSize: 18,
          cursor: 'pointer',
          boxShadow: '0 2px 8px rgba(55,114,255,0.10)',
        }}
      >
        Connect wallet
      </button>
    )}
  </header>
);

export default Header; 