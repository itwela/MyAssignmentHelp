import { Header } from "./components/header";
import { Footer } from "./components/footer";
import { Stats } from "./components/stats";
import { RowOEA } from "./components/row_1_oea";
import { RowAHS } from "./components/row_2_ahs";
import { RowAHF } from "./components/row_3_ahf";
import { Testimonials } from "./components/row_4_testimonials";
import { Form } from "./components/form";
import { useRef, useEffect, useLayoutEffect } from 'react';
import gsap from "gsap";

function App() {


  // scroll behavior fix
  useEffect(() => {
    // Save the current scroll position
    const scrollY = window.scrollY;
    
    // Disable scroll restoration
    if ('scrollRestoration' in history) {
      history.scrollRestoration = 'manual';
    }
  
    // Restore the scroll position after the page has reloaded
    window.scrollTo(0, scrollY);
  
    // Clean up
    return () => {
      // Re-enable scroll restoration when the component unmounts
      if ('scrollRestoration' in history) {
        history.scrollRestoration = 'auto';
      }
    };
  }, []);
  
  
  // initial intro animation
  const toplayer = useRef(null);
  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      const t1 = gsap.timeline()
      t1.from("#intro-slide", {
        yPercent: "-100",
        duration: 1.3,
        delay: 0.3,
      }).from(["#title-1", "#title-2", "#title-3"], {
        opacity: 0,
        y: "+=30",
        delay: 0.5,
        stagger: 0.5,
      }).to(["#title-1", "#title-2", "#title-3"], {
        opacity: 0,
        y: "-=30",
        delay: 0.5,
        stagger: 0.5,
      }).to("#intro-slide", {
        xPercent: "-100",
        duration: 1.618,
      }).from("#welcome-title", {
        opacity: 0,
        y: "+=30",
        delay: 0.5,
      }).from("#welcome-slide", {
        opacity: 100,
        xPercent: "0",
        duration: 1.5,
      }).to("#welcome-slide", {
        xPercent: "-100",
        duration: 1.618,
      })
    }, toplayer)

    return () => ctx.revert()
  }, [])

  return (
    <div>
      <Header />

      {/* into animation markup */}
      <div className="intro relative" ref={toplayer}>
        <div id="intro-slide" className="h-[100vh] text-[1.7em] text-black md:text-[3.2em] p-10 bg-gray-50 justify-center md:items-center absolute top-0 left-0 z-[1000] w-full flex flex-col gap-[5em] md:gap-[2em]">
          <h1 id='title-1'>Get Assignment Help...</h1>
          <h1 id='title-2'>From World's No.1...</h1>
          <h1 id='title-3'>Assignment Help Company!</h1>
        </div>
        <div id="welcome-slide" className="h-[100vh] opacity-0 text-[2em] md:text-[3.7em] p-10 bg-[#ee8038] justify-center items-center text-white  absolute top-0 left-0 z-[999] w-full flex flex-col gap-[5em] md:gap-[4em]">
          <h1 id='welcome-title'>Welcome.</h1>
        </div>
      </div>
      {/* intro animation markup END */}

      <main className="p-4 flex flex-col place-content-center place-items-center ">

      <div id="bug"  className="flex flex-col place-content-center place-items-center w-[100%] pt-[7em] pb-[3em]" >
        <div className="title-wrapper text-2xl text-center pb-4">
          <h1 className="title-text flex flex-col gap-3 place-items-center">
            <span className="text-[1.3em] font-black">Assignment Help</span>
            <span className="text-[0.6em] font-black"> Get Assignment Help From World's
               No.1 Assignment Help Company
            </span> 
          </h1>
        </div>
        <div className="main-content grid place-items-center grid-cols-1 grid-rows-auto gap-5 w-[90%] md:w-[80%]">
          <Stats/>
          <button className="p-4 rounded-[1em]">
              Hire an Expert
          </button>
        </div>
      </div>
      
      <div className="scrollers-home flex flex-col gap-8 w-[100%] pt-[3em]">
      <RowOEA/>
      <RowAHS/>
      <RowAHF/>
      <Testimonials/>
      <div className="form-container">
      <Form/>
      </div>
      </div>

      </main>

      <Footer/>
    </div>
  );
}

export default App;
