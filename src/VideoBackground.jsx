import React from "react";

//import './ApproachStyle.css'; // Import the CSS file
//import tailwind from 'tailwind';
import { motion } from "framer-motion";
import VideoApproach3 from "../src/videos/VideoApproach3.mp4";

import { Link } from "react-router-dom";
import logo from "../src/images/OOOLogo.svg";

function VideoBackground({ title, description, videoUrl }) {
  const envelopeUrl =
    "https://i.gyazo.com/3026017ee3360fed38839cbdeae666cb.png";
  // const deviceMobileUrl =
  //   "https://i.gyazo.com/43413e0f3483477e43a560fab4bd7984.png";
  const instagramLogoUrl =
    "https://i.gyazo.com/4ac32b19416a2e0be19f1873324801e0.png";
  const instagramProfileUrl = "https://www.instagram.com/outofofficeoriginal/";
  return (
    <div className="bg-custom-background-color relative w-full h-screen navbar scrollbar-thin scrollbar-thumb-gray-500 scrollbar-track-gray-500">
      <video
        className="absolute w-full h-screen inset-0 object-cover opacity-10"
        autoPlay
        loop
        muted
        playsInline
        controls={false} // Set controls to false to hide the default video controls
      >
        <source src={VideoApproach3} type="video/mp4" />
      </video>
      <div className="p-4">
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
      <div className="absolute top-1/2 transform lg:mt-[-350px] left-4 text-left mt-[-300px] md:mt-[-200px] ">
        <h1 className="py-24 text-white font-bold text-xl mb-2 md:mb-4  md:py-16 max-w-md md:max-w-2xl text-white text-3xl md:text-2xl lg:text-xl font-bold font-['Inter'] uppercase tracking-[11.21px]">
          {title}
        </h1>
        <div className="lg:mt-[-50px]  text-white text-opacity-75 text-3xl md:text-4xl lg:text-4xl  mt-[-50px] md:py-8 max-w-md md:max-w-2xl text-white font-thin font-['Inter'] whitespace-normal">
          {description}
        </div>
      </div>

      {/* Bottom left text */}
      <div className="fixed  bottom-0 left-0 p-4 inline-flex items-center justify-end gap-[18px] opacity-70">
        <div className="relative w-fit  font-normal text-white text-24 tracking-0 leading-normal">
          OUT OF OFFICE ™
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
}

export default VideoBackground;
