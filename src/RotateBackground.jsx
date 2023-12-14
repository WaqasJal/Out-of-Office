import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const RotateBackground = ({ onRotateClick }) => {
    const [rotation, setRotation] = useState(0);

    const handleRotateClick = () => {
        // Rotate by 120 degrees on each click
        setRotation(rotation - 120);
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
        <div className="relative w-[1920px] h-[1080px] bg-neutral-900">

            <div>

                <motion.div
                    style={{ originX: 0.4071, originY: 0.4 }}
                    className="w-[2999px] h-full translate-x-[-500px] top-[0px]"
                    initial={{ rotate: 0, translateX: 0 }}
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
        </div>
    );
};

export default RotateBackground;
