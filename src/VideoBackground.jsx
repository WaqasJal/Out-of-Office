// Approach.js
import React, {useState, Text, StyleSheet} from 'react';

//import './ApproachStyle.css'; // Import the CSS file
//import tailwind from 'tailwind';
import VideoApproach3 from '../src/videos/VideoApproach3.mp4'
import VideoApproach2 from '../src/videos/VideoApproach2.mp4'

function VideoBackground  ({title,description})  {
  return (
    <div className="relative w-full h-screen">

      <video className="absolute w-full h-screen inset-0 object-cover opacity-90" autoPlay loop muted>
        <source src={VideoApproach3} type="video/mp4" />
      </video>

      <div className="absolute flex flex-col justify-center-left items-center-left top-48 left-8">

        <h1 className="text-white font-bold text-2xl mt-20 mb-4 border-2 border-indigo-500/100 px-4 py-2">
          {title}
        </h1>

        <p className="text-white text-opacity-75 text-4xl border-2 border-indigo-500/100 px-4 py-2">
          {description}
        </p>

      </div>

      {/* <div className="absolute inset-x-0 bottom-0 ">

        <video className="absolute object-cover opacity-75" autoPlay loop muted>
          <source src={VideoApproach3} type="video/mp4" />
        </video>
        
      </div> */}


      {/* <div className="absolute inset-x-0 bottom-1 ">

        <video className="absolute object-cover opacity-75" autoPlay loop muted>
          <source src={VideoApproach3} type="video/mp4" />
        </video>

      </div> */}
      
    </div>

  );

}

export default VideoBackground;
