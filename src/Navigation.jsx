// Navigation.js
import React from 'react';
import './Navigation.css';
import { HashLink as Link } from 'react-router-hash-link';
import Socials from './Socials';
const Navigation = () => {
  return (
    <nav className="top-nav">
      <ul>
        <li><Link smooth to="#service">SERVICES</Link></li>
        <li><Link smooth to="#approach">APPROACH</Link></li>
        <li><Link smooth to="#work">WORK</Link></li>
        
      </ul>
      
    </nav>
  );
};

export default Navigation;
