// Services.js
import React from 'react';
import Navigation from "./Navigation";
import Socials from "./Socials";
import VideoBackground from './VideoBackground';


const Services = () => {
  return (
    
    <section className='App-header' id='service'>
    <Navigation />
    <Socials/>
  
    {/* Include the Approach component */}
    <VideoBackground 
    title="SERVICES"
    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum aliquet cursus lacus at eleifend. Ut sit amet erat non est mollis volutpat. Morbi rutrum eleifend urna, at luctus libero molestie nec. Morbi mollis, ex vel laoreet auctor, neque lacus aliquam ex, vel hendrerit ipsum risus vitae eros. "
    />
    {/* You can include multiple instances of the Approach component if needed */}
    <VideoBackground 
    title="MORE"
    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum aliquet cursus lacus at eleifend.  "
    />
    {/* You can include multiple instances of the Approach component if needed */}
    
 
  </section>

  );

};

export default Services;
