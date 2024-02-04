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
              className="dark-div justify-evenly flex flex-col gap-4 rounded-[1.5em] min-w-[90%] md:min-w-[45%] h-[24em] md:h-[26em] p-7"
            >
              <div className='flex flex-col gap-2'>
                <h2 className="name font-black md:text-[1.5em]">{item.title}</h2>
                <div className="star">{item.star}</div>
              </div>
              <p className='text-[0.8em] md:text-[1em]'>{item.quote} </p>
              <div className="who flex relative w-[100%] justify-evenly">
               <img src={item.image} alt={item.title} className='rounded-[2em]' />
               <div className="name-place flex flex-col items-end">
                  <h3 className='text-[0.8em] md:text-[1em]'>{item.name}</h3>
                  <h3 className='text-[0.8em] md:text-[1em]'>{item.country}</h3>
               </div>
               </div> 
            </div>
          ))}  
      </div>
    </div>
    </>
  );
};
