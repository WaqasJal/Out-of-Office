// RotatingBackground.js
import React, { useState } from 'react';
import { motion } from 'framer-motion';

const RotatingBackground = ({ backgroundImages, children }) => {
  const [rotation, setRotation] = useState(0);
  const [currentImage, setCurrentImage] = useState(0);

  const rotateBackground = () => {
    setRotation(rotation + 90);
    setCurrentImage((prev) => (prev + 1) % backgroundImages.length);
  };

  return (
    <motion.div
      className="rotating-background"
      onClick={rotateBackground}
      style={{
        rotate: `${rotation}deg`,
        backgroundImage: `url(${process.env.PUBLIC_URL}${backgroundImages[currentImage]})`,
      }}
    >
      {children}
    </motion.div>
  );
};

export default RotatingBackground;


