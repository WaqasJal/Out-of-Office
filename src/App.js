// App.js
import React from 'react';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home';
import Work from './Work';

import Services from './Services';
import Approach from './Approach';
import Navigation from './Navigation';
import { ContactUs } from './ContactUs';

import './App.css'; // Import your global CSS file

import { Helmet } from 'react-helmet';

const App = () => {
  return (
    <div>
      <Helmet>
      <link
    rel="icon"
    type="image/gif"
    href="public\ooo.gif"
  />
      </Helmet>
    <Router>
      <div className="app">
        <Routes> 
          <Route path="/" element={<Home />} />
          <Route path="/work" element={<Work />} />
          <Route path="/services" element={<Services />} />
          <Route path="/approach" element={<Approach/>} />
          <Route path="/contactus" element={<ContactUs/>} />
        </Routes>
      </div>
    </Router>
    </div>
  );
};

export default App;
