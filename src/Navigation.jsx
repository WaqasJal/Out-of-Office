// Navigation.js
import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../src/images/OOOLogo.svg';
import './Navigation.css'; // Import your CSS file

const Navigation = () => {
  return (
    <div className="navigation">
      <Link to="/" className="logo-link">
        <img src={logo} alt="Company Logo" className="logo" />
      </Link>
      <div className="nav-links">
        <Link to="/work">Work</Link>
        <Link to="/services">Services</Link>
        <Link to="/approach">Approach</Link> 
      </div>
    </div>
  );
};

export default Navigation;
