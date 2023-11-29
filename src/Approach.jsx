// Approach.js
import React, {useState, Text, StyleSheet} from 'react';

//import './ApproachStyle.css'; // Import the CSS file
//import tailwind from 'tailwind';


function Approach  ()  {
  return (

    <body className="border-1 border-red-950 font-inter: InterVariable w-screen p-10 h-screen ">
      
       <img src= 
            "data:image/jpeg;base64,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"
            autoplay="{true}" loop muted 
            className="absolute z-10 w-auto  
            min-w-full min-h-full max-w-none
            opacity-10
            blur-50"> 
        </img> 

        {/* <div style="position:relative;width:fit-content;height:fit-content;">
            <a style="position:absolute;top:20px;right:1rem;opacity:0.8;" href="https://clipchamp.com/watch/ZrzSnjhoXQe?utm_source=embed&utm_medium=embed&utm_campaign=watch">
                <img loading="lazy" style="height:22px;" src="https://clipchamp.com/e.svg" alt="Made with Clipchamp" />
            </a>
            <iframe allow="autoplay;" allowfullscreen style="border:none" src="https://clipchamp.com/watch/ZrzSnjhoXQe/embed" width="640" height="360"></iframe>
        </div> */}

      <div>  
        <h1 className='
            m-4
            border-2
          text-white
            font-bold
            text-2xl
            mt-60

          border-indigo-500/100 
            mb-4'>
              
              D I S C O V E R Y
          
        </h1>
      </div>

      <div>
        <p className='
            border-2 
          text-white
          text-opacity-75
          text-3xl
          w-100
          h-60
          m-4
          border-indigo-500/100'>

            We work to explore your unique needs,<br /> requirements and goals. 
          
        </p>
      </div>
    </body>
  );
}




export default Approach;
