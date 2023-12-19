// Services.js
import React from "react";
import Navigation from "./Navigation";
import Socials from "./Socials";
import VideoBackground from "./VideoBackground";

const Services = () => {
  return (
    <section className="App-header" id="service">
      <Navigation />

      {/* Include the Approach component */}
      <VideoBackground
        title="Brand Strategy"
        description="Authentic brands always win. We help you sculpt your purpose, values, narrative and core creative identity. When we're done, you will be sought."
      />
      {/* You can include multiple instances of the Approach component if needed */}
      <VideoBackground
        title="Story through video"
        description="Video tells a story. We harness the power of video to bring out the impact of your brand through visual."
      />
      {/* You can include multiple instances of the Approach component if needed */}
    </section>
  );
};

export default Services;
