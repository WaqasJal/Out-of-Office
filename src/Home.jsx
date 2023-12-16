import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import RotateBackground from "./RotateBackground";
import Navigation from "./Navigation";
import Mainvideo from "./Mainvideo";


const titleStyle = {
  fontFamily: 'Tahoma  , sans-serif',
  fontSize: '200px',
  color: '#e2dccb',
  textAlign: 'center',
  fontWeight: 'bold',
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '100%',
  mixBlendMode: 'difference', // Use mix-blend-mode to invert the text color based on the background
  filter: 'invert(0%)',
};

const Home = () => {
  return (
    <section className='App-header' id='home'>
      <>
        <Mainvideo />
        <div style={titleStyle}>
          OUT OF OFFICE&trade;
        </div>
      </>
    </section>
  );
};

export default Home;
