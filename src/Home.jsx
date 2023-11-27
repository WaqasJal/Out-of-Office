// Home.js
import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../src/images/OOOLogo.svg';
import backgroundImages from '../src/images/Work.png'
import RotatingBackground from './RotatingBackground';

const Home = () => {
  const backgroundImages = [
    '/images/Work.png',
    '/images/Services.png',
    '/images/Approach.png',
  ];

  return (
    <RotatingBackground backgroundImages={backgroundImages}>
      <div>
        <img src={logo} alt="Company Logo" className="logo" />
        <h1>Welcome to the Home Page</h1>
        <nav>
          <Link to="/work">work</Link>
          <Link to="/services">services</Link>
          <Link to="/approach">approach</Link>
        </nav>
      </div>
    </RotatingBackground>
  );
};

export default Home;
