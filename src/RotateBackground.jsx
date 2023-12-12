import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const RotateBackground = ({ onRotateClick }) => {
    const [rotation, setRotation] = useState(0);

    const handleRotateClick = () => {
        // Rotate by 120 degrees on each click
        setRotation(rotation + 120);
        // Call the onRotateClick prop
        onRotateClick();
    };

    useEffect(() => {
        // Prevent scrolling on both x and y axes
        document.body.style.overflow = 'hidden';

        // Cleanup on component unmount
        return () => {
            document.body.style.overflow = 'auto';
        };
    }, []);

    return (
        <div className=" relative w-[1920px] h-[1080px] bg-neutral-900">

            <div className='grayscale'>

                <motion.div
                    style={{ originX: 0.4071, originY: 0.4 }}
                    className="w-[2999px] h-full translate-x-[-500px] top-[0px]"
                    animate={{ rotate: rotation, translateX: -255 }}
                    onClick={handleRotateClick}
                    transition={{ duration: 0.25 }}
                >
                    <motion.img
                        src="https://i.gyazo.com/7d6e3e61af41bee4bec0674e29e98f0c.png"
                        alt="Background Image"
                        onError={(e) => console.error('Error loading image:', e)}
                    />
                </motion.div>
            </div>
            {/* Right triangle at the bottom left with a 30-degree angle */}
            {/* <svg
    className="absolute -bottom-5 left-0 w-4/6 h-5/6"
    style={{ transform: 'rotate(0deg)' }}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="-50 -50 200 200" // Increase the viewBox size
    preserveAspectRatio="none"
>
    <polygon points="0,100 100,100 0,0" fill="#040A0DF2" />
</svg> */}


        </div>
    );
};

export default RotateBackground;
