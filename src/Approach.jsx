import React from 'react';

import VideoBackground from './VideoBackground';

const Approach = () => {
  return (
    <div>
   
    {/* Include the Approach component */}
    <VideoBackground 
    title="D I S C O V E R Y"
    description="We work to explore your unique needs, requirements and goals"
    />
    {/* You can include multiple instances of the Approach component if needed */}
    <VideoBackground 
    title="S T R A T E G Y"
    description='In order to succeed, you need to plan. We make this a collaborative
                process and give your team the knowledge and tools to build a framework
                for success.'
    />

    <VideoBackground 
    title="E X E C U T E"
    description="We take your goals and work towards them through various mediums of 
                production."
    />
    
  </div>



  );

};

export default Approach;