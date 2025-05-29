import React from "react";
import golfIllustration from "../assets/HomePage/golfIllustration.svg";
import Illustration_Golf_Balls from "../assets/home-2.svg";
// import glow_yellow from "../assets/HomePage/glow_yellow.svg";

const CompletePage = () => {
  return (
    <>
      <div className="mx-auto relative  -mt-8 z-10 pt-10 md:py-20 md:hidden">
        
          {/* Golf balls illustration */}
          <div className="relative h-30 mb-8 p-10 md:p-0">
            <img
              src={Illustration_Golf_Balls}
              draggable="false"
              alt="Golf Balls"
              className="mx-auto md:w-1/2 split:w-3/5 lg:w-[29%]"
            />
          </div>
        <div className="text-center mt-8 mb-8">
          <h1 className="text-[40px] leading-[40px] hidden md:block w-auto mb-8 lg:text-[90px] font-quattrocento font-bold md:leading-[106.37px] tracking-[0.025em] text-center"
          style={{
            background: 'linear-gradient(180deg, rgba(255, 180, 30, 0.9) 0%, #014D4E 27%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            textFillColor: 'transparent',
            textShadow: '0px 0px 1px rgba(0, 0, 0, 0.15)',
            filter: 'drop-shadow(0px 0.5px 0.5px rgba(0, 0, 0, 0.2))',}}>
            COMPETE WITH <br />
            GOLFERS FROM<br />
            ALL OVER INDIA
          </h1>
          <h1 className="text-[42px]  leading-[45px] block md:hidden w-[95%] mx-auto mb-4 lg:text-[90px] font-quattrocento font-bold md:leading-[106.37px] tracking-[0.025em] text-center"
          style={{
            background: 'linear-gradient(180deg, rgba(255, 180, 30, 0.9) 0%, #014D4E 15%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            textFillColor: 'transparent',
            textShadow: '0px 0px 1px rgba(0, 0, 0, 0.15)',
            filter: 'drop-shadow(0px 0.5px 0.5px rgba(0, 0, 0, 0.2))',}}>
            NO HANDICAPS, <br />
ONLY RAW <br />SCORES MATTER.
          </h1>
          <p className="text-teal-700 font-sans text-lg mb-4 p-4 max-w-xl mx-auto">
          For authentic ranking, only the raw scores submitted by your playing partners will be used. </p>
          
        </div>
        <div className="flex flex-col md:flex-row items-center justify-between gap-10">
          {/* Content for this flex container */}
        </div>
      </div>
      {/* <div className="absolute z-50 flex justify-end top-[245rem] opacity-85 right-0 w-full">
        <img src={glow_yellow} alt="glow_yellow" className="w-2/3" />
      </div> */}
      <div className="mx-auto relative -mt-8 z-10 pt-10 md:py-20 md:block hidden">
  {/* Mobile Layout - Centered */}
  <div className="block md:hidden">
    {/* Golf balls illustration for mobile */}
    <div className="relative h-30 mb-8 p-10">
      <img
        src={Illustration_Golf_Balls}
        draggable="false"
        alt="Golf Balls"
        className="mx-auto w-3/4"
      />
    </div>
    
    <div className="text-center mt-8 mb-8">
      <h1 className="text-[42px] leading-[45px] w-[95%] mx-auto mb-4 font-quattrocento font-bold tracking-[0.025em] text-center"
      style={{
        background: 'linear-gradient(180deg, rgba(255, 180, 30, 0.9) 0%, #014D4E 15%)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        backgroundClip: 'text',
        textFillColor: 'transparent',
        textShadow: '0px 0px 1px rgba(0, 0, 0, 0.15)',
        filter: 'drop-shadow(0px 0.5px 0.5px rgba(0, 0, 0, 0.2))',
      }}>
        NO HANDICAPS, <br /> ONLY RAW <br />SCORES MATTER.
      </h1>
      <p className="text-teal-700 font-sans text-lg mb-4 p-4 max-w-xl mx-auto">
        For authentic ranking, only the raw scores submitted by your playing partners will be used.
      </p>
    </div>
  </div>

  {/* Desktop Layout - Side by Side */}
  <div className="hidden md:flex justify-between gap-10 relative min-h-[500px] px-8 lg:px-16">
    {/* Left side - Image positioned at absolute bottom */}
    <div className="flex-1 relative pl-4 lg:pl-8">
      <img
        src={Illustration_Golf_Balls}
        draggable="false"
        alt="Golf Balls"
        className="absolute bottom-0 left-4 lg:left-8 w-full max-w-md object-contain"
      />
    </div>
    
    {/* Right side - Content */}
    <div className="flex-1 flex flex-col justify-center text-left pr-4 lg:pr-8">
      <h1 className="text-[36px] leading-[40px] lg:text-[48px] lg:leading-[52px] xl:text-[56px] xl:leading-[60px] mb-6 font-quattrocento font-bold tracking-[0.025em]"
      style={{
        background: 'linear-gradient(180deg, rgba(255, 180, 30, 0.9) 0%, #014D4E 27%)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        backgroundClip: 'text',
        textFillColor: 'transparent',
        textShadow: '0px 0px 1px rgba(0, 0, 0, 0.15)',
        filter: 'drop-shadow(0px 0.5px 0.5px rgba(0, 0, 0, 0.2))',
      }}>
        NO HANDICAPS,<br />
        ONLY RAW SCORES<br />
        MATTER.
      </h1>
      <p className="text-black font-sans text-xl lg:text-[1.6rem] max-w-lg">
        For authentic ranking, only the raw <br /> scores submitted by your playing <br /> partners will be used.
      </p>
    </div>
  </div>
</div>
    </>
  );
};



export default CompletePage;