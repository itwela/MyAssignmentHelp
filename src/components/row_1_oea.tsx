import React, { useEffect, useRef } from 'react';

export const RowOEA = () => {
    return (
      <>
        <div className="row-1 flex flex-col gap-2 w-[100%]">
            <h2 className='row-1-title'>
            Online Education assistance
            </h2>
            <div className="croller-wrapper flex place-content-start overflow-x-scroll">
              <div className="row-1-wrapper flex gap-3">
              <div className="dark-div row-1-container w-[13em] h-[10em]">
              </div>
              <div className="dark-div row-1-container w-[13em] h-[10em]">
              </div>
              <div className="dark-div row-1-container w-[13em] h-[10em]">
              </div>
              </div>
            </div>
        </div>
      </>
    );
  };