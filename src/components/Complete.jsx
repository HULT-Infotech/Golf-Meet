import React from "react";
import golfIllustration from "../assets/HomePage/golfIllustration.svg";
import Illustration_Golf_Balls from "../assets/HomePage/Illustration_Golf_Balls.webp";
import glow_yellow from "../assets/HomePage/glow_yellow.svg";

const CompletePage = () => {
  return (
    <>
      <div className="mx-auto relative bg-gray-100 -mt-8 noise-bg-n z-10 pt-10 md:py-20">
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
            COMPETE WITH <br />
            GOLFERS FROM<br />
            ALL OVER INDIA
          </h1>
          <h1 className="text-[25px] text-[#014D4E] max-w-sm block md:hidden w-[90%] mx-auto mb-4 lg:text-[90px] font-quattrocento font-bold md:leading-[106.37px] text-center">
            EVEN AS YOU PLAY AT YOUR HOME COURSE.
          </h1>
          <p className="text-teal-700 font-sans text-lg mb-4 p-4 max-w-xl mx-auto">
            Unlike typical golf tournaments where the result depends on your form on the tournament day, Golf Meet gives you and everyone else a fair chance all year long.
          </p>
          {/* Golf balls illustration */}
          <div className="relative h-30 mb-8 p-10 md:p-0">
            <img
              src={Illustration_Golf_Balls}
              draggable="false"
              alt="Golf Balls"
              className="mx-auto md:w-1/2 lg:w-[29%]"
            />
          </div>
          
        </div>
        <div className="flex flex-col md:flex-row items-center justify-between gap-10">
          {/* Content for this flex container */}
        </div>
      </div>
      <div className="absolute z-50 flex justify-end top-[245rem] opacity-85 right-0 w-full">
        <img src={glow_yellow} alt="glow_yellow" className="w-2/3" />
      </div>
    </>
  );
};



export default CompletePage;