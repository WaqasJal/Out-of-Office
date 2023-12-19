import React from 'react';
import Navigation from "./Navigation";
import Socials from "./Socials";
import VideoBackground from './VideoBackground';

const Approach = () => {
  return (


    <section className='App-header' id='approach'>
      <Navigation />
      <Socials />

      <VideoBackground
        title="Discovery"
        description="We work to explore your unique needs, requirements and goals."
      />

      <VideoBackground
        title="Strategy"
        description="In order to succeed, you need to plan. We make this a collaborative process and give your team the knowledge and tools to build a framework for success."
      />

      <VideoBackground
        title="Execute"
        description="We take your goals and work towards them through various mediums of production."
      />
    </section>




  );

};

export default Approach;