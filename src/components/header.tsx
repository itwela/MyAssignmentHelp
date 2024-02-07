import gsap from "gsap";
import DarkMode from "./dmprovider";
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
    <header ref={fadeTopOne} className="p-5 fixed w-full flex md:flex justify-between gap-10 items-center z-[51]">
      <div className="flex gap-7 items-center">
      <a href="/"> <img src="https://cdn1.myassignmenthelp.com/seo-revamp-assets/logo-icon.svg" alt="" className="logo cursor-pointer" /> </a>
      <p className="text-[1.4em]">My Assignment Help</p>
      </div>
      {/* Navigation Sections */}

      <div className="">
        <nav className=" flex items-center space-x-4">

          <a href="#" className="hover:text-[#ee8038]" onMouseDown={handleMenuToggle}>Resources</a>
          <div className="login flex gap-3 items-center">
              <a className="p-2 rounded-[0.5em] cursor-pointer hover:text-[#ee8038]">
                Login
              </a>

              <a href="#" className="p-2 rounded-[0.5em] bg-[#ee8038] cursor-pointer hover:text-[#faf9f6]">Sign Up</a>
          </div>
        </nav>

        <div className="menu-container header-div justify-evenly fixed top-[4.5em] left-0 w-full h-[50vh] z-50 p-5 flex flex-col gap-4">
          {/* Content for the white div */}
          <div className="p-5 flex flex-col gap-9 h-[100%]">
          <a href="#" className="hover:text-[#ee8038]">Services</a>
          <a href="#" className="hover:text-[#ee8038]">Experts</a>
          <a href="#" className="hover:text-[#ee8038]">Reviews</a>
          <a href="#" className="hover:text-[#ee8038]">About Us</a>
          <a href="#" className="hover:text-[#ee8038]">Resources</a>
          <a href="#" className="hover:text-[#ee8038]">Academic Tools</a>
          </div>

          <div className="w-[100%] flex justify-between">
          <div className="close cursor-pointer" onMouseDown={handleMenuToggle}>Close</div>

          <div className="login flex gap-3 items-center">
              <a className="p-2 rounded-[0.5em] bg-[#ee8038] cursor-pointer hover:text-[#faf9f6]">
                Login
              </a>

              <a href="#" className="hover:text-[#ee8038] cursor-pointer">Sign Up</a>
          </div>
         </div>
        </div>

      </div>
    </header>
  );
};
