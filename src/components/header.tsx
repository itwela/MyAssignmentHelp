import gsap from "gsap";
import { useGSAP } from "@gsap/react"; 
import { useRef } from 'react';
import hambIcon from '../assets/hamburger.png'
import hambIconWhite from '../assets/hamburger-white.png'

export const Header = () => {
  const fadeTopOne = useRef(null);

  useGSAP(() => {
    gsap.from(fadeTopOne.current, {
      y: -100, // Starting position (above the screen)
      opacity: 0, // Starting opacity (completely transparent)
      duration: 2.618, // Duration of the animation
      ease: "sine.out", // Easing function for smoother animation
    });
  });

  const handleMenuToggle = () => {
    // No need to use state for menu visibility
    // Just toggle a CSS class to control the opacity
    const menu = document.querySelector('.menu-container');
    if (menu) {
      menu.classList.toggle('menu-open');
    }
  };

  return (
    <header ref={fadeTopOne} className="p-5 fixed w-full flex md:flex justify-between gap-10 items-center z-[2]">
      <img src="https://cdn1.myassignmenthelp.com/seo-revamp-assets/logo-icon.svg" alt="" className="logo cursor-pointer" />
      
      {/* Navigation Sections */}
      <nav className="hidden md:flex items-center space-x-4">
        <a href="#" className="hover:text-gray-400">Services</a>
        <a href="#" className="hover:text-gray-400">Experts</a>
        <a href="#" className="hover:text-gray-400">Reviews</a>
        <a href="#" className="hover:text-gray-400">About Us</a>
        <a href="#" className="hover:text-gray-400">Resources</a>
        <a href="#" className="hover:text-gray-400">Academic Tools</a>
      </nav>

      {/* Mobile Navigation Button */}
      <div className="md:hidden">
        {/* Add your mobile navigation button here */}
        <nav className=" items-center space-x-4">
          <div className="hamburger flex flex-col leading-[0.5em] pb-[1em]" onClick={handleMenuToggle}>
            <span className="">___</span>
            <span className="">___</span>
            <span className="">___</span>
          </div>
        </nav>
        {/* Use a CSS class to control the opacity */}
        <div className="menu-container header-div justify-evenly fixed top-[4.8em] left-0 w-full h-[50vh] z-50 p-5 flex flex-col gap-4">
          {/* Content for the white div */}
          <a href="#" className="hover:text-gray-400">Services</a>
          <a href="#" className="hover:text-gray-400">Experts</a>
          <a href="#" className="hover:text-gray-400">Reviews</a>
          <a href="#" className="hover:text-gray-400">About Us</a>
          <a href="#" className="hover:text-gray-400">Resources</a>
          <a href="#" className="hover:text-gray-400">Academic Tools</a>
        </div>
      </div>
    </header>
  );
};
