import React, { useState, Text, StyleSheet } from "react";

//import './ApproachStyle.css'; // Import the CSS file
//import tailwind from 'tailwind';
import { motion } from "framer-motion";
import "./Mainvideo.css";

import mainv from "../src/videos/video.mp4";
import { Link } from "react-router-dom";
import logo from "../src/images/OOOLogo.svg";

const Mainvideo = () => {
  const envelopeUrl =
    "https://i.gyazo.com/3026017ee3360fed38839cbdeae666cb.png";
  // const deviceMobileUrl =
  //   "https://i.gyazo.com/43413e0f3483477e43a560fab4bd7984.png";
  const instagramLogoUrl =
    "https://i.gyazo.com/4ac32b19416a2e0be19f1873324801e0.png";
  const instagramProfileUrl = "https://www.instagram.com/outofofficeoriginal/";
  return (
    <div className="bg-custom-background-color relative w-full h-screen navbar scrollbar-thin scrollbar-thumb-gray-500 scrollbar-track-gray-500">
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
      <video
        className="absolute w-full h-screen inset-0 object-cover opacity-100"
        autoPlay
        loop
        muted
      >
        <source src={mainv} type="video/mp4" />
      </video>
      <div className="gradient-mask"></div>

      <div>
        <div className="p-4">
          <Link to="/">
            <div className="flex items-center w-16 h-16 fixed z-10">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
              ></motion.div>
            </div>
          </Link>
        </div>
      </div>
      {/* Bottom right icons */}
      <div className="fixed bottom-0 right-0 p-4 z-10">
        <div className="inline-flex items-center justify-end gap-[18px] relative">
          {[envelopeUrl].map((url, index) => (
            <Link to="/contactus">
              <img
                key={index}
                className="w-[24px] h-[24px]"
                alt={`Icon ${index + 1}`}
                src={url}
              />
            </Link>
          ))}
          {/* {[deviceMobileUrl].map((url, index) => (
              <img
                key={index}
                className="w-[24px] h-[24px]"
                alt={`Icon ${index + 1}`}
                src={url}
              />
            ))} */}
          <a
            href={instagramProfileUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            {[instagramLogoUrl].map((url, index) => (
              <img
                key={index}
                className="w-[24px] h-[24px]"
                alt={`Icon ${index + 1}`}
                src={url}
              />
            ))}
          </a>
        </div>
      </div>
    </div>
  );
};

export default Mainvideo;
