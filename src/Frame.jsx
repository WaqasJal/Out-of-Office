import PropTypes from "prop-types";
import React from "react";

export const Frame = ({ className, text = "F I R S T N A M E" }) => {
  return (
    <div
      className={`flex w-[400px] items-center gap-[10px] px-0 py-[40px] relative border-b [border-bottom-style:solid] border-white ${className}`}
    >
      <div
        style={{
          fontFamily: 'Inter, sans-serif',
          fontWeight: 'bold', // Added for bold text
          fontSize: '0.75rem', // equivalent to text-xs
          letterSpacing: '0.177em', // equivalent to tracking-[7.08px]
          textTransform: 'uppercase',
          color: 'white',
        }}
      >
        {text}
      </div>
    </div>
  );
};

Frame.propTypes = {
  text: PropTypes.string,
};

export default Frame;
