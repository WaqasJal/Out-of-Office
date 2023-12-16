// Services.js
import React from 'react';

import VideoBackground from './VideoBackground';


const Services = () => {
  return (
    <section className='App-header' id='service'>
    <div>
  
    {/* Include the Approach component */}
    <VideoBackground 
    title="BRAND STRATEGY"
    description="Authentic brands always win. We help you sculpt your purpose,
                values, narrative and core creative identity. When we're done,
                you will be sought."
    />
    {/* You can include multiple instances of the Approach component if needed */}
    <VideoBackground 
    title="STORY THROUGH VIDEO"
    description="video tells a story. We harness the power of video to bring
                out the impact of your brand through visual."
    />
    
  </div>
  </section>

  );

};

export default Services;
