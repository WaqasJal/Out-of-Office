import React from 'react';
import './Scrollbar.css'; // Import your component-specific CSS file

const Scrollbar = () => {
  return (
    <div className="custom-scrollbar">
      <div className="content">
        {/* Your component content goes here */}
        {/* For example, a long list of items */}
        <ul>
          {Array.from({ length: 30 }, (_, index) => (
            <li key={index}>Item {index + 1}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Scrollbar;