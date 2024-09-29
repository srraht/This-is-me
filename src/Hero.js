import React from 'react';
import './Hero.css'; // We'll style the h›
import Navbar from './Navbar';
const Hero = () => {
    const scrollToSection = () => {
        document.getElementById('about').scrollIntoView({ behavior: 'smooth' });
    };
  return (
    <div id='hero' className="hero">
        <div className="hero-content">
        <h1>Hi, I'm Sarah</h1>
        <p>Click to learn more about me</p>
        <button className="cta-btn" onClick={scrollToSection}>Get Started</button>
      </div>
    </div>
  );
};

export default Hero;
