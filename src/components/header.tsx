import gsap from "gsap";
import { useGSAP } from "@gsap/react"; 
import { useRef } from 'react';




export const Header = () => {

  const fadeTopOne = useRef(null);

  useGSAP(() => {
    gsap.from(fadeTopOne.current, {
        y: -100, // Starting position (above the screen)
        opacity: 0, // Starting opacity (completely transparent)
        duration: 2.618, // Duration of the animation
        ease: "sine.out", // Easing function for smoother animation
    })
  })

  return (
    <header ref={fadeTopOne} className="p-5 fixed w-full md:flex justify-center gap-10 items-center z-[2]">
      <img src="https://cdn1.myassignmenthelp.com/seo-revamp-assets/logo-icon.svg" alt="" className="logo" />
      
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
      </div>
    </header>
  );
};
