import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Services from './Services';

const Home = () => {
    const envelopeUrl = 'https://i.gyazo.com/3026017ee3360fed38839cbdeae666cb.png';
    const deviceMobileUrl = 'https://i.gyazo.com/43413e0f3483477e43a560fab4bd7984.png';
    const instagramLogoUrl = 'https://i.gyazo.com/4ac32b19416a2e0be19f1873324801e0.png';

    const labels = ['WORK', 'SERVICES', 'APPROACH'];
    const additionalTexts = [
        // Text for WORK
        "Elevating brands; through the power of video, with stories that inspire.",
        // Text for SERVICES
        "We help shape how you’re perceived; expressing who you are, why you’re different, and why people should care",
        // Text for APPROACH
        "We initiate an immersive discovery process, understand your needs, and develop the right strategy to drive your brand forward.",
    ];

    const [additionalTextIndex, setAdditionalTextIndex] = useState(0);
    const [index, setIndex] = useState(0);
    const [rotationDuration, setRotationDuration] = useState(0.1); // Adjust the rotation duration as needed

    const handleServicesClick = () => {
        setIndex((prevIndex) => (prevIndex + 1) % labels.length);
    };

    useEffect(() => {
        // Update rotation duration and additional text index when index changes
        switch (index) {
            case 0:
                setRotationDuration(0.1);
                setAdditionalTextIndex(0);
                break;
            case 1:
                setRotationDuration(0.1); // Adjust the duration for SERVICES
                setAdditionalTextIndex(1);
                break;
            case 2:
                setRotationDuration(0.1);
                setAdditionalTextIndex(2);
                break;
            default:
                setRotationDuration(0.1);
                setAdditionalTextIndex(0);
                break;
        }
    }, [index]);

    return (
        <div className="relative bg-[#0d1418] flex flex-col justify-center items-center w-full h-screen">

        

            <Services onRotateClick={handleServicesClick} />

            {/* Bottom left text */}
            <div className="fixed bottom-0 left-0 p-4">
                <div className="relative w-fit mt-[-1.00px] font-normal text-white text-24 tracking-0 leading-normal">
                    OUT OF OFFICE ™
                </div>
            </div>

            {/* Bottom middle content */}
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/8">
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
                            key={labels[index]}
                            initial={{ x: '100%' }}
                            animate={{ x: 0 }}
                            exit={{ x: '-100%' }}
                            transition={{ ease: 'easeOut', duration: rotationDuration }}
                            onComplete={handleServicesClick} // Trigger the next rotation
                            className="absolute transform -translate-x-1/8 -translate-y-1/2"
                        >
                            <div className="relative w-[122px] h-[32px] font-NAV text-white text-[length:var(--NAV-font-size)] text-center tracking-[var(--NAV-letter-spacing)] leading-[var(--NAV-line-height)] [font-style:var(--NAV-font-style)]">
                                {labels[index]}
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </div>
            </div>

            {/* Text box on the right side of the circle with the logo */}
            <div className="absolute left-[50%] translate-x-[100px] top-[50%] translate-y-[215px] p-16">
                <div className="max-w-[600px]  rounded-lg p-4">
                    <p className="text-white">{additionalTexts[additionalTextIndex]}</p>
                </div>
            </div>



            {/* Bottom right icons */}
            <div className="fixed bottom-0 right-0 p-4">
                <div className="inline-flex items-center justify-end gap-[18px] relative">
                    {[envelopeUrl, deviceMobileUrl, instagramLogoUrl].map((url, index) => (
                        <img key={index} className="w-[24px] h-[24px]" alt={`Icon ${index + 1}`} src={url} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Home;
