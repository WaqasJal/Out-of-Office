// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes, BrowserRouter } from 'react-router-dom';
import {HashLink as Link } from 'react-router-hash-link';
import Home from './Home';
import Work from './Work';
import Mainvideo from './Mainvideo';
import Services from './Services';
import Approach from './Approach';
import Navigation from './Navigation';
import { ContactUs } from './ContactUs';
import logo from './images/Services.jpg'
import './App.css'; // Import your global CSS file

const App = () => {
  return (
    <BrowserRouter>
      <Navigation />
      
      <Home/>
      
      
    
      <Services/>  
        
      
    </BrowserRouter>
  );
};

export default App;
