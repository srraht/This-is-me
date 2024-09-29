import '@fortawesome/fontawesome-free/css/all.min.css';
import React from 'react';
import './Navbar.css'
import resume from '/Users/smarit/Desktop/Coding Projects/This is me/dojo-blog/src/Tran_Sarah_Resume.pdf'
const Navbar = () => {
    return (
      <nav className="navbar">
        <div className="social-media">
        <a href="https://github.com/srraht" target="_blank" rel="noopener noreferrer" className="social-icon">
          <i className="fab fa-github"></i>
        </a>
        <a href="https://www.linkedin.com/in/sarah-m-tran" target="_blank" rel="noopener noreferrer" className="social-icon">
          <i className="fab fa-linkedin"></i>
        </a>
        <a href="https://www.instagram.com/srrahs_music/" target="_blank" rel="noopener noreferrer" className="social-icon">
          <i className="fab fa-instagram"></i>
        </a>
      </div>
        <div className="links">
          <a href="/">Home</a>
          <a href="#about">About</a>
          <a href="#gallery">Art</a>
          <a href={resume} className="resume" target="_blank" rel="noopener noreferrer">Resume</a>
        </div>
      </nav>
    );
  }
   
  export default Navbar;