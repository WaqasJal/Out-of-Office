// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home';
import Work from './Work';
import Services from './Services';
import Approach from './Approach';
import Navigation from './Navigation';
import './App.css'; // Import your global CSS file

const App = () => {
  return (
    <Router>
      <div className="app">
        <Routes> 
          <Route path="/" element={<Home />} />
          <Route path="/work" element={<Work />} />
          <Route path="/services" element={<Services />} />
          <Route path="/approach" element={<Approach />} />
        </Routes>
        <Navigation />
      </div>
    </Router>
  );
};

export default App;
