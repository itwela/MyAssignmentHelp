import React, { MouseEvent, useState } from 'react';
import rowonedata from './row_1_data';
import { DotLottiePlayer, Controls } from '@dotlottie/react-player';


export const RowOEA = () => {

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
      if (activeIndex === -1) return rowonedata;
  
      const hoveredItem = rowonedata[activeIndex];
      const remainingItems = rowonedata.filter((item, index) => index !== activeIndex);
  
      return [hoveredItem, ...remainingItems];
    };
  
    // Reorder rowonedata based on activeIndex
    const reorderedData = reorderData(activeIndex);
  

  return (
    <>

      {/* desktop version */}
      <div className="row-1-wrapper hidden w-[100%] md:h-[50vh] mt-[7em] mb-[3em] md:flex justify-around items-center">
        <div className="row-1-cont no-sb overflow-y-hidden p-4 flex md:w-[40%] gap-4 place-items-center">
            {reorderedData.map((item, index) => (
              <div
                key={index}
                className="rounded-[1.5em] min-w-[60%] md:min-w-[100%] p-4 pt-6 flex flex-col justify-evenly gap-4 place-content-center"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <p className='card-title font-black md:text-[1.5em] lg:text-[3em]'>{item.title} </p>
                <div className="desc-container w-[100%] flex place-items-center overflow-scroll md:overflow-visible items-start place-content-center text-[1em] ">
                    <p className=''>{item.description} </p>
                </div>

                  {/* Buttons */}
                  <div className="btn-wrapper pt-4">
                    <div className='w-[100%] flex place-content-center justify-center gap-7'>
                    {rowonedata.map((item, index) => (
                      <button
                        key={index}
                        className='text-[0.7em] p-4 rounded-[1.5em]'
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

        <div className="row-1-title-cont w-[50%] font-black flex flex-col">

      <div className='animation-el scale-[80%]'>
      <DotLottiePlayer
      src="https://lottie.host/34c0482a-888a-47b3-8efb-c057b46378e5/pyKAz1LWt2.lottie"
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
        src="https://lottie.host/34c0482a-888a-47b3-8efb-c057b46378e5/pyKAz1LWt2.lottie"
        autoplay
        loop
        >
        </DotLottiePlayer>
        </div>
      </div>
        
        <div className="row-1-cont translate-y-[-0.5em] custom-scrollbar overflow-y-hidden p-4 flex gap-4 place-items-center w-[70%]">
            {rowonedata.map((item, index) => (
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
