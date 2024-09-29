import React from 'react';
import './ThankYou.css';

const ThankYou = () => {
    const scrollBack = () => {
        document.getElementById('hero').scrollIntoView({ behavior: 'smooth' });
    };
  return (
    <div className="thanks">
        <div className="thanks-content">
        <h1>Thanks for scrolling</h1>
        <button className="back-btn" onClick={scrollBack}>Back to Top</button>
      </div>
    </div>
  );
};

export default ThankYou;
