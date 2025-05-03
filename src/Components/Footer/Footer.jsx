import React from 'react';
import './Footer.css';
import logo from '../../assets/AS-logo.png';
import { FaUser } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="footer-content">
        {/* Left: Bio */}
        <div className="footer-left">
            <img src={logo} alt="Logo" className='logo'/>
          <p>I am a Data Analyst that converts data into useful insights to grow business</p>
        </div>

        {/* Right: Email Subscribe */}
        <div className="footer-right">
          <div className="subscribe-box">
            <FaUser className="subscribe-icon" />
            <input type="email" placeholder="Enter your email" />
          </div>
          <button>Subscribe</button>
        </div>
      </div>

      {/* Bottom: Copyright */}
      <div className="footer-bottom">
        <p>© 2025 Abilash Sivakumar. All rights reserved.</p>
        <div className="footer-links">
          <a href="#">Back to the Top</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
