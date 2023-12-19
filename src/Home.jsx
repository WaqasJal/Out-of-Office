import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import RotateBackground from "./RotateBackground";
import Navigation from "./Navigation";
import Socials from "./Socials";
import Mainvideo from "./Mainvideo";
import logo from "../src/images/OOOLogo.svg";

const titleStyle = {
  fontFamily: "Inter  , sans-serif",
  fontSize: "200px",
  color: "#ffffff",
  textAlign: "center",
  fontWeight: "bold",
  position: "absolute",
  top: "50%",
  left: "50%",
  width: "100%",
  transform: "translate(-50%, -50%)",
  flexwrap: "wrap", /* Allow items to wrap on smaller screens */
  mixBlendMode: "difference", // Use mix-blend-mode to invert the text color based on the background
  filter: "invert(30%)",
};

const Home = () => {
  return (
    <>
      <Mainvideo />

      <Navigation />

      <div style={titleStyle}>OUT OF OFFICE&trade;</div>
    </>
  );
};

export default Home;
