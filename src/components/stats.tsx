import React, { useEffect, useRef } from 'react';

export const Stats = () => {
  const statRef1 = useRef(null);
  const statRef2 = useRef(null);
  const statRef3 = useRef(null);

  const animateValue = (start: number, end: number, duration: number, ref: React.MutableRefObject<HTMLSpanElement | null>) => {
    let startTimestamp: number | null = null;
    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      const currentValue = (progress * (end - start) + start).toLocaleString(undefined, { maximumFractionDigits: 1 });
      ref.current!.innerHTML = `${currentValue}/5`;
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    window.requestAnimationFrame(step);
  };
  
const animateValueFraction = (start: number, end: number, duration: number, ref: React.MutableRefObject<HTMLSpanElement | null>, isFraction: boolean = false) => {
  let startTimestamp: number | null = null;
  const step = (timestamp: number) => {
    if (!startTimestamp) startTimestamp = timestamp;
    const progress = Math.min((timestamp - startTimestamp) / duration, 1);
    let currentValue;
    if (isFraction) {
      currentValue = (progress * (end - start) + start).toLocaleString(undefined, { maximumFractionDigits: 1 });
    } else {
      currentValue = Math.floor(progress * (end - start) + start).toLocaleString();
    }
    ref.current!.innerHTML = isFraction ? `${currentValue}/5` : currentValue;
    if (progress < 1) {
      window.requestAnimationFrame(step);
    }
  };
  window.requestAnimationFrame(step);
};
  

  useEffect(() => {
    animateValueFraction(0, 2269529, 2000, statRef1);
    animateValueFraction(0, 5267, 2000, statRef2);
    animateValue(0, 4.9, 2000, statRef3);
  }, []);

  return (
    <>
      <section className="wrapper p-4 relative flex gap-5 h-[12em] w-[100%] justify-items-evenly place-items-center">
        <div className="stat-one w-[80%] flex flex-col place-items-center">
          <span ref={statRef1} className='text-[2em]'>0</span>
          <span> DELIVERED ORDERS </span>
        </div>
        <div className="stat-two w-[80%]  flex flex-col place-items-center">
          <span ref={statRef2} className='text-[2em]'>0</span>
          <span> EXPERTS </span>
        </div>
        <div className="stat-three w-[80%]  flex flex-col place-items-center">
          <span ref={statRef3} className='text-[2em]'>0</span>
          <span>CLIENT RATING </span>
        </div>
      </section>
    </>
  );
};
