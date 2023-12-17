// App.js
import React from 'react';

import { HashLink as Link } from 'react-router-hash-link';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
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
import Scrollbar from './Scrollbar';

const App = () => {
  return (
    <Router>
      <div className="app">
        <Routes> 
          <Route path="/" element={<Home />} />
          <Route path="/work" element={<Work />} />
          <Route path="/services" element={<Services />} />
          <Route path="/approach" element={<Approach/>} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
