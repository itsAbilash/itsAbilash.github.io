import React from 'react';
import './Navbar.css';
import logo from '../../assets/AS-logo.png';
import { Link } from 'react-scroll';

const Navbar = () => {
  return (
    <div className='navbar'>
      <img src={logo} alt="Logo" className='logo' />

      <ul className='nav-menu'>
        <li>
          <Link to="hero" smooth={true} duration={500} offset={-70}>
            Home
          </Link>
        </li>
        <li>
          <Link to="about" smooth={true} duration={500} offset={-70}>
            About
          </Link>
        </li>
        <li>
          <Link to="contact" smooth={true} duration={500} offset={-70}>
            Contact
          </Link>
        </li>
        <li>
          <Link to="projects" smooth={true} duration={500} offset={-70}>
            Projects
          </Link>
        </li>
        <li>
          <Link to="experience" smooth={true} duration={500} offset={-70}>
            Experience
          </Link>
        </li>
      </ul>

      <div className="nav-connect">
        <Link to="contact" smooth={true} duration={500}>
          Connect With Me
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
