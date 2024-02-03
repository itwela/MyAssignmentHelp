import React, { useState } from 'react';
import lightModeIcon from '../assets/night-mode-light.png';
import darkModeIcon from '../assets/night-mode-dark.png';

const DarkMode: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const handleDarkModeToggle = () => {
    // Toggle the dark mode state
    setIsDarkMode((prevMode) => !prevMode);
  };

  // Use useEffect to toggle classes based on the updated state
  React.useEffect(() => {
    // Toggle classes on HTML body
    document.body.classList.toggle('dark-mode-body', isDarkMode);
    // Toggle classes on header if it exists
    const header = document.querySelector('header');
    if (header) {
      header.classList.toggle('dark-mode-header', isDarkMode);
    }
    // Toggle classes on footer if it exists
    const footer = document.querySelector('footer');
    if (footer) {
      footer.classList.toggle('dark-mode-footer', isDarkMode);
    }
    // Toggle classes on sections
    const sections = document.querySelectorAll('section');
    sections.forEach((section) => {
        section.classList.toggle('dark-mode-section', isDarkMode);
    });
  }, [isDarkMode]); // Run this effect whenever isDarkMode changes

  return (
    <img
      id="darkModeToggle"
      className='dark-icon md:w-[40px] w-[20px]'
      src={isDarkMode ? lightModeIcon : darkModeIcon}
      onClick={handleDarkModeToggle}
    />
  );
};

export default DarkMode;
