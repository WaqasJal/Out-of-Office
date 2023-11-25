// Home.js
import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../src/images/OOOLogo.svg';

const Home = () => {
    console.log('Home component rendered');  
  return (
    <div>
      <img src={logo} alt="Company Logo" className="logo" />
      <h1>Welcome to the Home Page</h1>
      <nav>
        <Link to="/work">work</Link>
        <Link to="/services">services</Link>
        <Link to="/approach">approach</Link>
      </nav>
    </div>
  );
};




export default Home;
