// LogoCircle.jsx
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const LogoCircle = ({ label, additionalText, onRotateClick }) => {
    return (
        <div className="relative w-[282px] h-[282px] bg-[#040a0d] rounded-[197px] overflow-hidden flex items-center justify-center relative">
            {/* Logo */}
            <img
                className="w-[222px] h-[222px] transform"
                alt="A"
                src="https://i.gyazo.com/21c930ac73c8b1430c2a8dde2ed6b0df.png"
            />

            {/* Text with animations */}
            <AnimatePresence mode="wait">
                <motion.div
                    initial={{ x: '100%' }}
                    animate={{ x: 0 }}
                    exit={{ x: '-100%' }}
                    transition={{ ease: 'easeOut', duration: 0.1 }}
                    onComplete={onRotateClick} // Trigger the next rotation
                    className="absolute transform -translate-x-1/8 -translate-y-1/2"
                >
                    <div className="relative w-[122px] h-[32px] font-NAV text-white text-[length:var(--NAV-font-size)] text-center tracking-[var(--NAV-letter-spacing)] leading-[var(--NAV-line-height)] [font-style:var(--NAV-font-style)]">
                        {label}
                    </div>
                    <div className="max-w-[600px] bg-[#040a0d] rounded-lg p-4 absolute left-[50%] translate-x-[100px] top-[50%] translate-y-[215px]">
                        <p className="text-white">{additionalText}</p>
                    </div>
                </motion.div>
            </AnimatePresence>
        </div>
    );
};

export default LogoCircle;
