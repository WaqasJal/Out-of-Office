// Socials.js
import React from 'react';
import './Socials.css';
import { HashLink as Link } from 'react-router-hash-link';

const Socials = () => {
  return (
    <div className="socials-container">
      <nav className="socials">
        <ul>
          <li>
            <a href="https://twitter.com/your-twitter" target="_blank" rel="noopener noreferrer">
              <img src="https://i.gyazo.com/3026017ee3360fed38839cbdeae666cb.png" alt="Email" />
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/your-instagram" target="_blank" rel="noopener noreferrer">
              <img src="https://i.gyazo.com/4ac32b19416a2e0be19f1873324801e0.png" alt="Instagram" />
            </a>
          </li>
        </ul>
        
      </nav>
      
    </div>
  );
};

export default Socials;
