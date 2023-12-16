import React, { useState, Text, StyleSheet } from "react";

//import './ApproachStyle.css'; // Import the CSS file
//import tailwind from 'tailwind';
import { motion } from "framer-motion";


import mainv from "../src/videos/video.mp4";
import { Link } from "react-router-dom";
import logo from "../src/images/OOOLogo.svg";

const Mainvideo = () => {
  return (
    <div className="bg-custom-background-color relative w-full h-screen navbar scrollbar-thin scrollbar-thumb-gray-500 scrollbar-track-gray-500">
      <video className="absolute w-full h-screen inset-0 object-cover opacity-100" autoPlay loop muted>
        <source src={mainv} type="video/mp4" />
      </video>
      <div>
        <div className="p-4">
          <Link to="/">
            <div className="flex items-center w-16 h-16 fixed z-10">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 5, repeat: Infinity, ease: 'linear' }}
              >
                
              </motion.div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Mainvideo;