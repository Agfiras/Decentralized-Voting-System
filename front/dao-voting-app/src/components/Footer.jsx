import React from 'react';

const Footer = () => (
  <footer style={{
    width: '100%',
    maxWidth: 1100,
    margin: '48px auto 24px auto',
    padding: '32px 0',
    borderTop: '1px solid #353945',
    textAlign: 'center',
    color: '#fff',
    background: 'transparent',
  }}>
    <div style={{ 
      color: '#d1d5db', 
      fontSize: 16, 
      opacity: 0.8,
      fontWeight: 400 
    }}>
      Made with <span style={{ color: '#ff3860', fontWeight: 600 }}>love</span> 😁
    </div>
  </footer>
);

export default Footer; 