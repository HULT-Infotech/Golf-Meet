import React from 'react';
import bgPrize from "../assets/pddddd.png";
import flag from "../assets/GolfPrize/Vector.svg";
import bgMedal from "../assets/medd.png";
import p_1 from "../assets/Photosection/p1.webp";
import p_2 from "../assets/Photosection/p2.webp";

const GolfPrize = () => {
  return (
    <>
<div className="relative w-full -mt-12  xsm:h-[40vh] xh:h-[50vh]  xhh:h-[50vh]">
  {/* Background Image with specified gradient */}
  <div
    className="absolute inset-0 bulge-bottom"
    style={{
      background: `linear-gradient(180deg, rgba(17, 84, 125, 0.9) 13.28%, rgba(17, 84, 125, 0) 68%),
                  linear-gradient(0deg, rgba(1, 77, 78, 0.4), rgba(1, 77, 78, 0.4)),
                  url(${bgPrize})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat'
    }}
  >
  </div>
  
  {/* Content */}
  <div className="relative h-full flex md:py-32 xhhh:py-44 xsh:py-20 flex-col items-center justify-center text-white text-center bulge-bottom px-6">
    
        {/* Golf Flag Icon */}
        <div className="mb-4">
          <img src={flag} alt="Golf Flag" className="w-8 h-8 mx-auto" />
        </div>
        
        {/* GRAND PRIZE Text */}
        <h1 className="mb-0 xsm:text-[3.1rem] xsm:leading-[3rem] xhhh:text-[6.5rem] xhhh:leading-[7rem] leading-[4.5rem] text-[4.3rem] text-center"
            style={{  /* 64.71px at largest */
              fontFamily: 'Quattrocento, serif',
              fontWeight: 700,
              letterSpacing: '0.025em',  /* 2.5% */
              textShadow: '0px 0px 14px rgba(255, 255, 255, 0.45)',
              color: 'white',
              textAlign: 'center'
            }}>
          GRAND
        </h1>
        <h1 className="mb-5 xsm:text-[3.1rem] text-[4.3rem] xhhh:leading-[7rem] xhhh:text-[6.5rem] text-center"
            style={{
              fontFamily: 'Quattrocento, serif',
              fontWeight: 700,
              lineHeight: 'clamp(4.3rem, 8vw, 6rem)',  /* 64px at largest */
              letterSpacing: '0.025em',  /* 2.5% */
              textShadow: '0px 0px 14px rgba(255, 255, 255, 0.45)',
              color: 'white',
              textAlign: 'center'
            }}>
          PRIZE
        </h1>
        
        {/* Description */}
        <p className=" mb-5 max-w-md  leading-relaxed"
           style={{ 
             fontSize: 'clamp(1rem, 4vw, 1.5rem)',
             fontFamily: 'Quattrocento, serif',
             fontWeight: 400,
             color: 'white'
           }}>
          The top 5 players from India
          <br />
          get an all-expense paid
        </p>
        
        {/* GOLF VACATION IN Text */}
        <h2 className="font-normal xsm:text-[1.8rem] text-[2.3rem] xhhh:text-[3.7rem]  tracking-wider mb-0 leading-tight"
            style={{
              fontFamily: 'Quattrocento, serif',
             fontWeight: 400,
              color: 'white'
            }}>
          GOLF
        </h2>
        <h2 className="font-normal xsm:text-[1.8rem] text-[2.3rem] xhhh:text-[4rem] tracking-wider mb-2 leading-tight"
            style={{
              fontFamily: 'Quattrocento, serif',
             fontWeight: 400,
              color: 'white'
            }}>
          VACATION IN
        </h2>
        
        {/* VIETNAM Text */}
        <h2 
  className="font-normal xsm:text-[2.9rem] text-[3.5rem] xhhh:text-[6.5rem] tracking-widest leading-none"
  style={{
    textShadow: '2px 2px 14px rgba(255, 255, 255, 0.45), 0px 0px 14px rgba(255, 255, 255, 0.45)',
    fontFamily: 'Quattrocento, serif',
    fontWeight: 400,
    color: 'white'
  }}
>
  VIETNAM
</h2>
      </div>
    </div>
    <div className="w-full h-[77vh] xh:h-[40vh] xhh:h-[40vh] xhhh:h-[60vh] xsh:h-[50vh] overflow-hidden">
      {/* Main container with absolute positioning for independent sections */}
      <div className="w-full h-full relative">
        
        {/* Left side - Text content - Independent positioning */}
        <div className="absolute left-0  top-0 w-1/2 h-full flex items-center justify-center">
          <div className="text-[#014D4E]">
            <h3 className="mb-2 xl:text-[3rem] lg:text-[2.5rem] md:text-[1.9rem]"
              style={{
                fontFamily: 'Quattrocento, serif',
                fontWeight: 400,
              }}>
              WIN EXCITING
            </h3>
            <h1 className="xl:text-[64px] md:text-[50px] xsm:text-[3rem] leading-none"
            style={{
                fontFamily: 'Quattrocento, serif',
                fontWeight: 700,
              }}>
              MONTHLY
            </h1>
            <h1 className="xl:text-[64px] md:text-[50px]  xsm:text-[3rem] leading-none"
            style={{
                fontFamily: 'Quattrocento, serif',
                fontWeight: 700,
              }}>
              MEDALS
            </h1>
          </div>
        </div>
        
        {/* Right side - Medal Image - Extremely large size */}
        <div className="absolute right-0 top-0 -mt-32 xl:w-3/5 lg:w-7/12 md:w-3/6 h-full flex items-center justify-center">
          <img
            src={bgMedal}
            alt="Medal"
            className="object-contain"
            style={{
              maxHeight: '170%',
              maxWidth: '170%',
              width: '120%',
              height: '120%',
              transform: 'scale(1)'
            }}
          />
        </div>
        
      </div>
    </div>
    <div className="w-full min-h-[70vh] -mt-24 bg-white relative">
      {/* Heading Section - Improved fluid typography */}
      <div
        className="pt-6 sm:pt-8 md:pt-10 pb-4 sm:pb-6 px-4 text-center font-quattrocento"
        style={{ fontWeight: "700" }}
      >
        <h1
          className="font-bold text-teal-800 md:text-[2.2rem] xl:text-[2.5rem] lg:text-[2.3rem]"
        >
          ENJOY EXCLUSIVE
        </h1>
        <h1
          className="font-bold text-teal-800 md:text-[2.2rem] xl:text-[2.5rem] lg:text-[2.3rem]"
        >
          CURATED EVENTS
        </h1>
      </div>
      
      {/* Photos Container - Centered horizontally and side by side on larger screens */}
      <div className="px-4 md:px-8 lg:px-16 mx-auto xl:px-32 flex flex-col md:flex-row md:gap-6 justify-center">
        {/* First Photo */}
        <div className="mb-6 md:mb-0 xl:w-1/3 md:w-2/5">
          <div className="rounded-lg overflow-hidden">
            <img
              src={p_1}
              alt="People enjoying a social gathering at a golf club"
              className="w-full h-auto"
            />
          </div>
        </div>
        
        {/* Second Photo - Adding specific z-index to ensure it's above cost section */}
        <div className="relative xl:w-1/3 md:w-2/5">
          <div className="rounded-lg overflow-hidden">
            <img
              src={p_2}
              alt="Stand-up comedy event at an exclusive venue"
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>
    </div>
    </>
  );
};


export default GolfPrize;