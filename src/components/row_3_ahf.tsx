import React from 'react';
import rowthreedata from './row_3_data';

export const RowAHF = () => {
  return (
    <>
    <div className="row-1-title-cont w-[100%] font-black">
      <h2 className='row-1-title text-[1em] md:text-[1.3em]'>
      Assignment Help Features      
      </h2>
    </div>

    <div className="row-1-wrapper w-[100%]">
      <div className="row-1-cont flex gap-4 place-items-start">
      {rowthreedata.map((item, index) => (
           <div
           key={index}
           className="dark-div rounded-[1.5em] min-w-[90%] md:min-w-[45%] h-[30em] md:h-[42em] p-4 flex flex-col justify-evenly"
           >
            <div className="image-container w-[100%] h-[30%] flex place-content-center place-items-center">
               <img src={item.image} alt={item.title} className='' />
              </div>
              <p className='font-black md:text-[1.5em]'>{item.title} </p>
              <div className="desc-container w-[100%] h-[25%] flex place-items-center place-content-center text-[0.7em] md:text-[1em]">
              <p className=''>{item.description} </p>
              </div>
         </div>
          ))}      
      </div>
    </div>
    </>
  );
};
