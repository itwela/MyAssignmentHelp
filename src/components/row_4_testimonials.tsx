import React from 'react';

export const Testimonials = () => {
  return (
    <>
    <div className="row-1-title-cont w-[100%] font-black">
      <h2 className='row-1-title text-[1em] md:text-[1.3em]'>
      Testimonials      
      </h2>
    </div>

    <div className="row-1-wrapper w-[100%]">
      <div className="row-1-cont flex gap-4 place-items-start">
        <div className="dark-div rounded-[1.5em] min-w-[90%] md:min-w-[60%]  h-[15em]"></div>
        <div className="dark-div rounded-[1.5em] min-w-[90%] md:min-w-[60%]  h-[15em]"></div>
        <div className="dark-div rounded-[1.5em] min-w-[90%] md:min-w-[60%] h-[15em]"></div>
      </div>
    </div>
    </>
  );
};
