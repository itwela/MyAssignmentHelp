import React from 'react';
import rowonedata from './row_1_data';

export const RowOEA = () => {
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
              className="dark-div rounded-[1.5em] min-w-[90%] md:min-w-[45%] h-[20em] md:h-[35em] p-4 flex flex-col justify-evenly"
            >
              <div className="image-container w-[100%] h-[40%] flex place-content-center place-items-center">
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
