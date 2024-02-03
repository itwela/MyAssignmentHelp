import React from 'react';
import rowfourdata from './row_4_data';


export const Testimonials = () => {
  return (
    <>
    <div className="row-1-title-cont w-[100%] font-black">
      <h2 className='row-1-title text-[1em] md:text-[1.3em]'>
      MyAssignmentHelp Testimonials      
      </h2>
    </div>

    <div className="row-1-wrapper w-[100%]">
      <div className="row-1-cont flex gap-4 place-items-start">
      {rowfourdata.map((item, index) => (
            <div
              key={index}
              className="dark-div rounded-[1.5em] min-w-[90%] md:min-w-[45%] h-[15em] md:h-[22em]"
            >
              <div className="image-container w-[100%] h-[60%] flex place-content-center place-items-center">
               <img src={item.image} alt={item.title} className='' />
              </div>
              <div className="desc-container w-[100%] h-[40%] flex place-items-center place-content-center">
              <p className=''>{item.quote} </p>
              </div>
            </div>
          ))}  
      </div>
    </div>
    </>
  );
};
