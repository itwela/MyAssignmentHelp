import React, { MouseEvent, useState, useRef } from 'react';
import rowthreedata from './row_3_data';
import { DotLottiePlayer, Controls } from '@dotlottie/react-player';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);


export const RowAHF = () => {

  const handleMouseEnter = (event: MouseEvent<HTMLDivElement>) => {
    const darkDiv = event.currentTarget;
    const cardTitle = darkDiv.querySelector('.card-title');
    if (cardTitle) {
      cardTitle.classList.add('orange-title');
    }
  };

  const handleMouseLeave = (event: MouseEvent<HTMLDivElement>) => {
    const darkDiv = event.currentTarget;
    const cardTitle = darkDiv.querySelector('.card-title');
    if (cardTitle) {
      cardTitle.classList.remove('orange-title');
    }
  };

      // hover sorting ------------
  
      const [activeIndex, setActiveIndex] = useState(-1);

      const handleMouseEnterButton = (index: number) => {
        setActiveIndex(index);
      };
    
      const handleMouseLeaveButton = () => {
        setActiveIndex(-1);
      };
    
      // Function to reorder rowonedata based on activeIndex
      const reorderData = (activeIndex: number) => {
        if (activeIndex === -1) return rowthreedata;
    
        const hoveredItem = rowthreedata[activeIndex];
        const remainingItems = rowthreedata.filter((item, index) => index !== activeIndex);
    
        return [hoveredItem, ...remainingItems];
      };
    
      // Reorder rowonedata based on activeIndex
      const reorderedData = reorderData(activeIndex);

      const animateTitle = useRef(null);
      const animateLottie = useRef(null);
      
      useGSAP(() => {
        const title = animateTitle.current;
        const lottie = animateLottie.current;
    
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: title,
            start: 'top center',
            end: 'bottom 80%',
            scrub: 1,
          },
        });
    
        tl.from(title, { x: '-100%', duration: 0.518, opacity: 0, ease: "sine.inOut" })
        .from(lottie, { x: '100%', duration: 0.518, opacity: 0, ease: "sine.inOut" });
    
      }, []);
  

  return (
    <>

      {/* desktop version */}
      <div className="row-1-wrapper hidden w-[100%] md:h-[50vh] mt-[7em] mb-[3em] md:flex justify-evenly items-center">
        <div ref={animateTitle} className="row-1-cont no-sb overflow-y-hidden p-4 flex md:w-[40%] gap-4 place-items-start">
            {reorderedData.map((item, index) => (
              <div
                key={index}
                className="rounded-[1.5em] min-w-[60%] md:min-w-[100%] p-4 pt-6 flex flex-col justify-evenly gap-4"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <div className="image-container w-[100%]  flex place-content-center place-items-center">
                {/* <img src={item.image} alt={item.title} className='svg-icon w-[140px] p-4' /> */}
                </div>
                <p className='card-title font-black md:text-[1.5em] lg:text-[3em]'>{item.title} </p>
                <div className="desc-container w-[100%] flex place-items-center overflow-scroll md:overflow-visible items-start place-content-center text-[0.7em] md:text-[1em]">
                <p className=''>{item.description} </p>
                </div>

                  {/* Buttons */}
                  <div className="btn-wrapper pt-4">
                    <div className='w-[100%] flex place-content-center justify-center gap-7'>
                    {rowthreedata.map((item, index) => (
                      <button
                        key={index}
                        className='text-[0.7em] p-2  rounded-[1.5em]'
                        onMouseEnter={() => handleMouseEnterButton(index)}
                        // onMouseLeave={handleMouseLeaveButton}
                        style={{
                          backgroundColor: activeIndex === index ? 'blue' : 'gray',
                          border: 'none',
                          cursor: 'pointer',
                        }}
                          >
                        </button>
                        ))}
                    </div> 
                    </div>
                    {/* button end */}

              </div>
            ))}
        </div>
        <div ref={animateLottie} className="row-1-title-cont w-[50%] font-black flex flex-col">

          <div className='animation-el scale-[80%]'>
          <DotLottiePlayer
          src="https://lottie.host/bcc95896-632b-46b1-9bf5-dab406d0272c/363egOnhCZ.lottie"
          autoplay
          loop
        >
        </DotLottiePlayer>
          </div>
        </div>
      </div>
      {/* end */}

      {/* mobile version */}
      <div className="row-1-wrapper w-[100%] h-[70vh] flex flex-col place-items-center mb-[3em] md:hidden">
      <div className="row-1-title-cont w-[70%] h-[70%] font-black">

        <div className='animation-el'>
        <DotLottiePlayer
        src="https://lottie.host/bcc95896-632b-46b1-9bf5-dab406d0272c/363egOnhCZ.lottie"
        autoplay
        loop
        >
        </DotLottiePlayer>
        </div>
      </div>
        
        <div className="row-1-cont translate-y-[-0.5em] custom-scrollbar overflow-y-hidden p-4 flex gap-4 place-items-center w-[70%]">
            {rowthreedata.map((item, index) => (
              <div
                key={index}
                className="rounded-[1.5em] text-center place-items-center min-w-[100%] h-[15em] p-9 pt-6 flex flex-col justify-evenly"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <p className='card-title font-black md:text-[1.5em] lg:text-[3em] translate-y-[1em]'>{item.title} </p>
                <div className="desc-container overflow-hidden w-[100%] flex place-items-center place-content-center text-[0.7em]">
                <p className=''>{item.description} </p>
                </div>
              </div>
            ))}
        </div>
      </div>
      {/* end */}

    </>
  );
};
