import React from "react";
import { Link } from "react-router-dom";
import logo from "../src/images/OOOLogo.svg";
 // Replace with your image path

function ImageBackground({ title, description, backgroundColor }) {
  // Style for the colored rectangle
  const backgroundStyle = {
    backgroundColor: backgroundColor || "#000", // Default to black if no color is provided
    position: "absolute",
    width: "100%",
    height: "100%",
    opacity: 0.1, // Adjust opacity as needed
    color: "#fff", // Set text color to white
  };

  return (
    <div style={backgroundStyle}>
      <div className="p-4 ">
        <Link to="/">
          <div className="flex items-center w-16 h-16 fixed z-10">
            <img src={logo} alt="Company Logo" className="logo" />
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
  );
}

export default ImageBackground;