// Home.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../src/images/OOOLogo.svg';
import RotatingBackground from './RotatingBackground';

const Home = () => {
  const sections = ['work', 'services', 'approach'];
  const sectionImages = {
    work: '/images/Work.png',
    services: '/images/Services.png',
    approach: '/images/Approach.png',
  };

  const [activeSection, setActiveSection] = useState('work');

  const handleSectionChange = () => {
    const currentIndex = sections.indexOf(activeSection);
    const nextIndex = (currentIndex + 1) % sections.length;
    setActiveSection(sections[nextIndex]);
  };

  return (
    <div className="home">
      <RotatingBackground backgroundImages={[sectionImages[activeSection]]} onRotate={handleSectionChange}>
        <div>
          <img src={logo} alt="Company Logo" className="logo" />
          <h1>Welcome to the {activeSection} Section</h1>
          <nav>
            <Link to={`/${activeSection.toLowerCase()}`}>
              <button>Go to {sections[(sections.indexOf(activeSection) + 1) % sections.length]}</button>
            </Link>
          </nav>
        </div>
      </RotatingBackground>
    </div>
  );
};

export default Home;
