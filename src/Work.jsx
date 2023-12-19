import React from 'react';
import Navigation from "./Navigation";
import Socials from "./Socials";
import VideoBackground from './VideoBackground';

const Work = () => {
  return (
    <section className='App-header' id='work'>
      <Navigation />
        <Socials/>
    <VideoBackground 
    title="corporate"
    description="Brands that inspire people to act."
    />
    {/* Include the Approach component */}
    <VideoBackground 
    title="Social Good"
    description="Helping you close the trust gap."
    />
    <VideoBackground 
    title="Personalities"
    description="Elevating your greatness."
    />
    </section>



  );

};

export default Work;