// Home.js
import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../src/images/OOOLogo.svg';
import backgroundImage1 from '../src/images/Work.png';
import backgroundImage2 from '../src/images/Services.jpg';
import backgroundImage3 from '../src/images/Approach.jpg';

import RotatingBackground from './RotatingBackground';

const Home = () => {
  const backgroundImages = [
    backgroundImage1,
    backgroundImage2,
    backgroundImage3,
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
