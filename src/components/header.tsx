import gsap from "gsap";
import DarkMode from "./dmprovider";
import { useGSAP } from "@gsap/react"; 
import { useLayoutEffect, useRef, useState } from 'react';
import navigationSections from './headerLinks'; // Importing the navigation sections array
import sectionData from './headerData'; // Import section data

export const Header = () => {
  
  const fadeTopOne = useRef<HTMLDivElement>(null); // Define the type of useRef
  const [selectedSection, setSelectedSection] = useState<string | null>(null); // Define the type of useState

  useGSAP(() => {
    gsap.from(fadeTopOne.current, {
      y: -100, // Starting position (above the screen)
      opacity: 0, // Starting opacity (completely transparent)
      duration: 2.618, // Duration of the animation
      ease: "sine.out", // Easing function for smoother animation
    });
  });

  const handleSectionClick = (section: string) => {
    setSelectedSection(section === selectedSection ? null : section);
  };

  const menuContainer = useRef<HTMLDivElement>(null);
  const [isOpen, setIsOpen] = useState(false);
  const [isItemsCLicked, setIsItemsClicked] = useState(false);

  function handleMenuClicked(){
    setIsOpen(!isOpen)
  }

  function handleItemsClicked(){
    setIsItemsClicked(!isItemsCLicked)
  }

  useGSAP(() => {
      if (isOpen) {
          gsap.to(["#box", "#boxkid"], {
          yPercent: -20,
          duration: 1.3,
          delay: 0.3,
          stagger: 0.216,
          ease: "back",
          opacity: 0,
        }),
          gsap.to(["#box", "#boxkid"], {
          yPercent: 0,
          duration: 1.3,
          delay: 0.3,
          stagger: 0.216,
          ease: "back",
          opacity: 100,
        }),
        console.log(isOpen)
      }
      if (!isOpen) {
        gsap.from(["#boxkid"], {
          yPercent: 200,
          duration: 1.3,
          delay: 0.3,
          stagger: 0.216,
          ease: "back",
        }),
        
        gsap.to(["#box"], {
          yPercent: -200,
          duration: 3.3,
          delay: 1.8,
          stagger: 0.216,
          ease:"elastic.out",
        });
        console.log(isOpen)
    }
  }, {dependencies: [isOpen, setIsOpen], scope: menuContainer})

  

  return (
    <div ref={fadeTopOne} className="fixed pt-10 w-[100%] flex md:flex gap-5 items-center z-[2]">
      <header ref={menuContainer} className="p-5 fixed w-[100%] flex md:flex gap-5 items-center z-[2]">
         <div className="flex justify-between w-[100%]">
          <div className="left-side flex gap-7 items-center">
            <a href="/" className="hidden md:flex text-[1.4em] text-[#ee8038] cursor-pointer">MyAssignmentHelp</a>
            <a id="toggle" href="#" className="hover:text-[#ee8038] md:flex hidden cursor-pointer" onClick={handleMenuClicked}>Resources</a>
            <a id="toggle" href="#" className="flex justify-around leading-[0.4em] flex-col md:hidden pb-[1em]"  onClick={handleMenuClicked}>
              <span>___</span>
              <span>___</span>
              <span>___</span>
            </a>
            <a href="/"> <img src="https://cdn1.myassignmenthelp.com/seo-revamp-assets/logo-icon.svg" alt="" className="logo cursor-pointer md:hidden" /> </a>
            </div>
          
          {/* Navigation Sections */}
            <nav className=" flex items-center space-x-4">
              <div className="login flex gap-3 items-center">
                  <a className="p-2 rounded-[0.5em] cursor-pointer hover:text-[#ee8038]">
                    Login
                  </a>

                  <a href="#" className="p-2 rounded-[0.5em] bg-[#ee8038] cursor-pointer hover:text-[#faf9f6]">
                    Sign Up
                  </a>
              </div>
            </nav>
          </div> 

          <div id="box" className="menu-container header-div justify-evenly fixed top-[5.5em] rounded-[1.5em] ml-[0.7em] left-0 md:w-[50vw] w-full  z-10 p-5 flex flex-col gap-4 z-10">
            {/* Content for the white div */}
            <div className="p-5 flex flex-col gap-9 h-[100%]">
              {navigationSections.map((section: string, index: number) => (
                <ul id="boxkid" key={index} className="nav-links flex justify-start gap-[7em] cursor-pointer" onClick={() => handleSectionClick(section)}>
                  {section}
                  <div id="items" className="nav-items flex flex-col gap-[2em] w-[85%] place-items-start">
                  {selectedSection === section && sectionData[section].map((item: string, idx: number) => (
                        <li className="link-list cursor-pointer"  key={idx} dangerouslySetInnerHTML={{ __html: item }}></li>
                  ))}
                  </div>
                </ul>
              ))}
            </div>
            <div className="w-[100%] flex justify-between pl-2 pb-2 ">
              <div className="close cursor-pointer hover:text-[#ee8038] p-4"  onClick={handleMenuClicked}>x</div>
            </div>
          </div>
      </header>
    </div>
  );
};
