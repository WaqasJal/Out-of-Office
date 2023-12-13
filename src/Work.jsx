import React from 'react';

import VideoBackground from './VideoBackground';

const Work = () => {
  return (
    <div>
   
    {/* Include the Approach component */}
    <VideoBackground 
    title="CORPORATE"
    description="Brands that inspire people to act."
    />
    {/* You can include multiple instances of the Approach component if needed */}
    <VideoBackground 
    title="SOCIAL GOOD"
    description="Helping you close the trust gap."
    />

    <VideoBackground 
    title="PERSONALITIES"
    description="Elevating your greatness."
    />
    
  </div>



  );

};

export default Work;