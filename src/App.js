// App.js
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { HashLink as Link } from 'react-router-hash-link';
import Home from './Home';
import Work from './Work';
import Socials from './Socials';
import Mainvideo from './Mainvideo';
import Services from './Services';
import Approach from './Approach';
import Navigation from './Navigation';
import { ContactUs } from './ContactUs';
import logo from './images/Services.jpg';
import './App.css'; // Import your global CSS file

const App = () => {
  return (
    <Router>
      
      <Navigation />
      <Socials/>
      

      <Home />
      <Services />
      <Approach />
      <Work />
    </Router>
  );
};

export default App;
