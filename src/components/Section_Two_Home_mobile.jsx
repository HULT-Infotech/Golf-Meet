import React from "react";
import golfIllustration from "../assets/HomePage/golfIllustration.svg";
import Illustration_Golf_Balls from "../assets/HomePage/Illustration_Golf_Balls.webp";
// import glow_yellow from "../assets/HomePage/glow_yellow.svg";

const CompletePage = () => {
  return (
    <>
      <div className="mx-auto relative  -mt-8 z-10 pt-10 md:py-20">
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
          <h1 className="text-[34px]  leading-[45px] xsm:text-[24px] xsm:leading-[20px] block md:hidden w-[95%] mx-auto mb-4 lg:text-[90px] font-quattrocento font-bold md:leading-[106.37px] tracking-[0.025em] text-center"
          style={{
            background: 'linear-gradient(180deg, rgba(255, 180, 30, 0.9) 0%, #014D4E 15%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            textFillColor: 'transparent',
            textShadow: '0px 0px 1px rgba(0, 0, 0, 0.15)',
            filter: 'drop-shadow(0px 0.5px 0.5px rgba(0, 0, 0, 0.2))',}}>
            PLAY WITH ASSIGNED <br />
            YOUR GOLF MEET <br />
             RANK

          </h1>
          <h1 className="text-[22px] xsm:text-[20px] text-[#014D4E] max-w-sm block md:hidden w-[90%] mx-auto mb-4 lg:text-[90px] font-quattrocento font-bold md:leading-[106.37px] text-center">
            PLAY AT LOCAL COURSES AND <br /> DATES OF YOUR CHOICE.
          </h1>
          
          
        </div>
    <div className="h-auto pb-16   ">
    <div className="max-w-md  rounded-2xl mx-4   bg-[#01383A] noise-bg-new overflow-hidden shadow-lg" style={{
      color: "white",
      padding: "2rem 1.5rem",
      textAlign: "center"
    }}>
      {/* Card Title */}
      <h2 
        className="font-quattrocento font-bold mb-7" 
        style={{
          fontSize: "clamp(2.25rem, 12vw, 4.5rem)", // reduced min for small screens
          background: "linear-gradient(180deg, #FFF2BF 0%, #F4D455 100%)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          backgroundClip: "text",
          textFillColor: "transparent",
          lineHeight: "1.3",
          display: "inline-block",
        }}
      >
        YOUR BEST <br /> 12 ROUNDS <br /> MATTER.
      </h2>
      
      <div className="w-full h-px mb-4" style={{
        background: "linear-gradient(270deg, rgba(255, 255, 255, 0) 0%, #FFFFFF 50%, rgba(255, 255, 255, 0) 100%)"
      }}></div>
      
      {/* Card Subtitle */}
      <div className="mb-4">
        <h3 className="text-white text-3xl font-quattrocento font-semibold mb-4">
          SO, PLAY AS MANY <br /> ROUNDS AS YOU CAN <br />BEFORE DECEMBER 31.
        </h3>
        <div className="w-full h-px mb-12" style={{
          background: "linear-gradient(270deg, rgba(255, 255, 255, 0) 0%, #FFFFFF 50%, rgba(255, 255, 255, 0) 100%)"
        }}></div>
      </div>
      
      {/* Important Section */}
      <div className="text-center mb-4">
        <p className="font-semibold font-sans text-[1.1rem] mb-5 text-white">IMPORTANT</p>
        
        <p className="text-[.95rem] opacity-80 mb-4 max-w-72 mx-auto font-thin text-white font-sans">
          Since most golfers book their rounds through club memberships or as complementary rounds from credit cards, the Golf Meet tournament fee does not cover green fees.
        </p>
        
        <p className="text-[.95rem] max-w-72 opacity-80 mx-auto font-thin text-white font-sans">
          This also gives you and fellow contestants the freedom and flexibility to book your preferred tee time directly with the golf course.
        </p>
      </div>
    </div>
    </div>
      </div>
      {/* <div className="absolute z-50 flex justify-end top-[245rem] opacity-85 right-0 w-full">
        <img src={glow_yellow} alt="glow_yellow" className="w-2/3" />
      </div> */}
    </>
  );
};



export default CompletePage;