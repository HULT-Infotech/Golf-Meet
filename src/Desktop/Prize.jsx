import React from 'react';
import bgPrize from "../assets/pd.png";
import flag from "../assets/GolfPrize/Vector.svg";
import bgMedal from "../assets/pdd.png";

const GolfPrize = () => {
  return (
    <>
    <div className="relative w-full -mt-12  h-[100vh]">
      {/* Background Image */}
      <div
        className="absolute inset-0 bulge-top  bg-cover bg-center"
        style={{
          backgroundImage: `url(${bgPrize})`,
        }}
      >
      </div>
      
      {/* Content */}
      <div className="relative h-full flex flex-col items-center justify-center text-white text-center bulge-bottom px-6">
        {/* Golf Flag Icon */}
        <div className="mb-4">
          <img src={flag} alt="Golf Flag" className="w-8 h-8 mx-auto" />
        </div>
        
        {/* GRAND PRIZE Text */}
        <h1 className="mb-0 xsm:text-[3.1rem] xsm:leading-[3rem] leading-[4.5rem] text-[4.3rem] text-center"
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
        <h1 className="mb-5 xsm:text-[3.1rem] text-[4.3rem] text-center"
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
        <p className=" mb-5 max-w-md leading-relaxed"
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
        <h2 className="font-normal xsm:text-[1.8rem] text-[2.3rem]  tracking-wider mb-0 leading-tight"
            style={{
              fontFamily: 'Quattrocento, serif',
             fontWeight: 400,
              color: 'white'
            }}>
          GOLF
        </h2>
        <h2 className="font-normal xsm:text-[1.8rem] text-[2.3rem] tracking-wider mb-2 leading-tight"
            style={{
              fontFamily: 'Quattrocento, serif',
             fontWeight: 400,
              color: 'white'
            }}>
          VACATION IN
        </h2>
        
        {/* VIETNAM Text */}
        <h2 
  className="font-normal xsm:text-[2.9rem] text-[3.5rem] tracking-widest leading-none"
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
    <div className="w-full h-[77vh] overflow-hidden">
      {/* Main container with flexbox layout for side-by-side content */}
      <div className="w-full h-full flex justify-center items-center">
        {/* Left side - Text content - Container centered, text left-aligned */}
        <div className="w-1/2 flex flex-col items-center justify-center text-[#014D4E]">
          <div className="flex flex-col items-start">
            <h3 className="mb-2"
              style={{
                fontSize: 'clamp(1.5rem, 7vw, 3rem)',
                fontFamily: 'Quattrocento, serif',
                fontWeight: 400,
              }}>
              WIN EXCITING
            </h3>
            <h1 className="text-[64px] xsm:text-[3rem] leading-none"
            style={{
                fontFamily: 'Quattrocento, serif',
                fontWeight: 700,
              }}>
              MONTHLY
            </h1>
            <h1 className="text-[64px] xsm:text-[3rem] leading-none"
            style={{
                fontFamily: 'Quattrocento, serif',
                fontWeight: 700,
              }}>
              MEDALS
            </h1>
          </div>
        </div>
        
        {/* Right side - Medal Image - Positioned at the top */}
        <div className="w-1/3 relative flex justify-center items-start h-full -mt-80">
          <img
            src={bgMedal}
            alt="Medal"
            className="object-contain"
            style={{
              maxHeight: '80vh',
              position: 'absolute',
              top: 0
            }}
          />
        </div>
      </div>
    </div>
    </>
  );
};


export default GolfPrize;