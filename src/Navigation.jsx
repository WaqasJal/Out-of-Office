// Nav.js
import React from 'react';
import './Navigation.css';
import { HashLink as Link } from 'react-router-hash-link';


const Navigation = () => {
  return (
    <nav className="top-nav">
      <ul>
        <li><Link smooth to="#service">SERVICES</Link></li>
        <li><Link smooth to="#section2">APPROACH</Link></li>
        <li><Link smooth to="#section3">WORK</Link></li>
      </ul>
    </nav>
  );
};

export default Navigation;
