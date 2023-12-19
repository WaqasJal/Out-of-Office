// Navigation.js
import React from 'react';
import './Socials.css';
import { HashLink as Link } from 'react-router-hash-link';

const Socials = () => {
  return (
    <nav className="socials">
      <ul>
        
        <li><a href="https://twitter.com/your-twitter" target="_blank" rel="noopener noreferrer">X</a></li>
        <li><a href="https://www.instagram.com/your-instagram" target="_blank" rel="noopener noreferrer">IG</a></li>
        
      </ul>
       
    </nav>
  );
};

export default Socials;
