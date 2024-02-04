import React, { MouseEvent } from 'react';
import rowonedata from './row_1_data';

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
  
  return (
    <>
      <div className="row-1-title-cont w-[100%] font-black">
        <h2 className='row-1-title text-[1em] md:text-[1.3em]'>
          Online Education Assistance
        </h2>
      </div>

      <div className="row-1-wrapper w-[100%]">
        <div className="row-1-cont flex gap-4 place-items-start">
          {rowonedata.map((item, index) => (
            <div
              key={index}
              className="dark-div rounded-[1.5em] min-w-[60%] md:min-w-[40%] h-[20em] p-4 pt-6 flex flex-col justify-evenly gap-4"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <div className="image-container w-[100%] h-[40%] flex place-content-center place-items-center">
               <img src={item.image} alt={item.title} className='svg-icon w-[140px] p-4' />
              </div>
              <p className='card-title font-black md:text-[1.5em]'>{item.title} </p>
              <div className="desc-container w-[100%] flex place-items-center overflow-scroll items-start place-content-center text-[0.7em] md:text-[1em]">
              <p className=''>{item.description} </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
