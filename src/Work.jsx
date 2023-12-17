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
    title="WORK"
    description="i, aliquam convallis turpis. Nunc et sem tempus, hendrerit arcu in, laoreet risus. Morbi ut metus tristique, venenatis ante ut"
    />
    </section>



  );

};

export default Work;