// Services.js
import React from 'react';

import VideoBackground from './VideoBackground';


const Services = () => {
  return (
    <div>
  
    {/* Include the Approach component */}
    <VideoBackground 
    title="B R A N D  S T R A T E G Y"
    description="Authentic brands always win. We help you sculpt your purpose,
                values, narrative and core creative identity. When we're done,
                you will be sought."
    />
    {/* You can include multiple instances of the Approach component if needed */}
    <VideoBackground 
    title="S T O R Y  T H R O U G H  V I D E O"
    description="video tells a story. We harness the power of video to bring
                out the impact of your brand through visual."
    />
    
  </div>


  );

};

export default Services;
