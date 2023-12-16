import React, { useState, Text, StyleSheet } from "react";

//import './ApproachStyle.css'; // Import the CSS file
//import tailwind from 'tailwind';
import { motion } from "framer-motion";

import VideoApproach3 from "../src/videos/VideoApproach3.mp4";
import VideoApproach2 from "../src/videos/VideoApproach2.mp4";
import { Link } from "react-router-dom";
import logo from "../src/images/OOOLogo.svg";

function VideoBackground({ title, description }) {
  return (
    <div className="bg-custom-background-color relative w-full h-screen navbar scrollbar-thin scrollbar-thumb-gray-500 scrollbar-track-gray-500">
      <video
        className="absolute w-full h-screen inset-0 object-cover opacity-90"
        autoPlay
        loop
        muted
      >
        <source src={VideoApproach3} type="video/mp4" />
      </video>
      <div>
        <div className="p-4 ">
          <Link to="/">
            <div className=" flex items-center w-16 h-16 fixed z-10">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
              >
                <img src={logo} alt="Company Logo" className="logo" />
              </motion.div>
            </div>
          </Link>
        </div>
        <div className="absolute flex flex-col justify-center-left items-center-left top-48 left-8 ">
          <h1 className="text-white font-bold text-2xl mt-20 mb-4  px-4 py-2 w-[567px] text-white text-[19px] font-bold font-['Inter'] uppercase tracking-[11.21px]">
            {title}
          </h1>
          <p className="text-white text-opacity-75 text-4xl  px-4 py-2 w-[567px] text-white text-5xl font-thin font-['Inter']">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}

export default VideoBackground;
