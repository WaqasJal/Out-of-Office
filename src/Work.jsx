import React from 'react';

import VideoBackground from './VideoBackground';

const Work = () => {
  return (
    <div>
   
    {/* Include the Approach component */}
    <VideoBackground 
    title="C O R P O R A T E"
    description="Brands that inspire people to act."
    />
    {/* You can include multiple instances of the Approach component if needed */}
    <VideoBackground 
    title="S O C I A L  G O O D"
    description="Helping you close the trust gap."
    />

    <VideoBackground 
    title="P E R S O N A L I T I E S"
    description="Elevating your greatness."
    />
    
  </div>



  );

};

export default Work;