import React from "react";
import Illustration_Golfers_Mobile from "../assets/fair.webp";
import Img from "../assets/video.svg";
import leftGolfImage from '../assets/howddd.svg'; 
import rightGolfImage from '../assets/howddddd.svg';
import topGolfImage from '../assets/top-golf.svg';

const FairPlaySection = () => {
  return (
    <>
      {/* First Section - Introduction */}
      <section className="md:hidden relative  bg-gray-100 pb-36 noise-bg-n md:min-h-[100vh] pt-10 drop-shadow-xl w-full flex flex-col justify-between p-4 sm:p-0 md:px-8 text-center">
        <div className="absolute z-10 bottom-0 left-0 right-0 flex justify-center items-center w-full">
          <img
            src={Illustration_Golfers_Mobile}
            alt="Illustration of Golfers"
            className="w-[86vw] md:w-[65vw] split:w-[60vw] object-contain"
          />
        </div>

        

        <div className="mx-auto max-w-4xl relative">
          <h6 className="xsm:text-lg text-xl font-semibold mb-10 md:text-lg lg:text-xl relative z-10">
          INTRODUCING
          </h6>
          <h1 className="xsm:text-5xl mb-6 text-6xl text-[#014D4E] md:text-6xl lg:text-7xl mx-auto uppercase font-quattrocento font-bold xl:text-[96px] xl:leading-[106.37px] tracking-[0.025em] text-center relative z-10"
          style={{
            background: 'linear-gradient(180deg, rgba(255, 180, 30, 0.9) 0%, #014D4E 24%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            textFillColor: 'transparent',
            textShadow: '0px 0px 1px rgba(0, 0, 0, 0.15)',
            filter: 'drop-shadow(0px 0.5px 0.5px rgba(0, 0, 0, 0.2))',}}>
            The <br /> Golf Meet
            <br />
            <span className="block mt-2 md:mt-4">Handicap</span>
          </h1>
        </div>
        <div className="bg-[#014D4E] px-1 mb-4 py-[.2rem] rounded-lg relative z-20 text-white">
        <h2 className="w-64 text-center mx-auto text-[1.3rem] xsm:font-medium font-medium text-2xl xsm:text-xl md:text-xl md:w-auto uppercase tracking-wide my-4 md:my-6 lg:my-10">
          Play Fair. No More Handicap Inflation!
        </h2>
        </div>
        <p className="mt-4 text-lg md:text-2xl my-4 md:my-6 lg:my-10 mx-auto max-w-sm xsm:text-sm sm:max-w-md md:max-w-2xl lg:max-w-3xl">
          Golf Meet uses machine learning to compute the accurate handicap of
          each player, based on their scores on each hole of every course they
          have played.
        </p>

        <div className="mb-3 md:mb-8 lg:mb-12">
          <p className="font-semibold text-[1.6rem] xsm:text-2xl mx-auto max-w-sm sm:max-w-sm md:max-w-lg lg:max-w-3xl lg:p-5 text-[#211E16]">
            With the Golf Meet handicap, <br /> all that matters is your <br /> consistency.
          </p>
          <p className="mt-3  font-semibold text-[1.6rem] xsm:text-2xl max-w-xs sm:max-w-sm md:max-w-md mx-auto text-[#211E16]">
            Not your age or gender.
          </p>
        </div>
        <img
              src={Img}
              alt=""
              className="w-[80%] split:hidden xsm:w-[92%] right-0 absolute z-20 [bottom:clamp(-4.6rem,-22vw,-10rem)] md:-bottom-32"
            />
      </section>
        <div className="hidden md:flex w-full   flex-col noise-bg-optim bg-gray-50 relative">
            {/* Main container for proper stacking context */}
            <div className="flex flex-col w-full">
              {/* Images positioned as background */}
              <div className="w-full h-auto xhhh:h-screen relative">
                {/* Left image */}
                <img
                  src={leftGolfImage}
                  className="absolute xl:top-16 md:top-28 lg:top-28 left-0 w-1/4 h-full object-contain z-1"
                  alt="Left golf meet"
                />
                
                {/* Right image */}
                <img
                  src={rightGolfImage}
                  className="absolute xl:top-16 md:top-28 lg:top-28 xhhh:top-[7.2rem] right-0 w-1/3 h-full object-contain z-1"
                  alt="Right golf meet"
                />
                
                {/* Top image positioned above the green section */}
                <img
                  src={topGolfImage}
                  className="absolute bottom-0 right-0 w-1/2 h-auto object-contain z-5"
                  alt="Top golf decoration"
                />
                
                {/* Card positioned on top of the images */}
                <div className="relative w-full h-full flex items-center justify-center md:mt-8 xhhh:mt-32 lg:mt-24 p-4">
                  <div className="xl:max-w-lg lg:max-w-md md:max-w-sm xhhh:max-w-2xl w-full bg-white shadow-lg p-9 md:p-8 z-20 xhhh:py-[4.7rem]">
                    <div className="mx-auto relative">
                      <h6 className="text-base xsm:text-sm md:text-base xhhh:text-lg font-semibold mb-6 relative z-10 text-center">
                        INTRODUCING
                      </h6>
                       
                      <div className="relative">
                        <h1                   
                          className="xsm:text-3xl font-quattrocento mb-4 text-4xl text-center md:text-4xl xl:text-6xl xhhh:text-7xl mx-auto uppercase font-bold tracking-wider relative z-10"                   
                          style={{                     
                            background: 'linear-gradient(180deg, rgba(255, 180, 30, 0.9) 0%, #014D4E 24%)',                     
                            WebkitBackgroundClip: 'text',                     
                            WebkitTextFillColor: 'transparent',                     
                            backgroundClip: 'text',                   
                          }}                 
                        >                   
                          The <br /> Golf Meet <br />                   
                          <span className="block mt-1 md:mt-2">Handicap</span>                 
                        </h1>
                        {/* Stronger shadow layer */}
                        <h1                   
                          className="xsm:text-3xl font-quattrocento mb-4 text-4xl text-center md:text-4xl xl:text-6xl xhhh:text-7xl  mx-auto uppercase font-bold tracking-wider absolute top-0 left-0 w-full -z-1"
                          style={{
                            color: 'rgba(0, 0, 0, 0.08)',
                            transform: 'translate(2px, 2px)'
                          }}
                        >                   
                          The <br /> Golf Meet <br />                   
                          <span className="block mt-1 md:mt-2">Handicap</span>                 
                        </h1>
                      </div>
                    </div>
                    
                    <div className="bg-[#014D4E] px-1 mb-3 py-1 rounded-lg relative z-20">
                      <h2 className="w-full text-center mx-auto text-base xsm:text-sm md:text-base xl:text-2xl xhhh:text-3xl uppercase tracking-wide my-2 md:my-1 xl:my-3 text-white font-medium">
                        Play Fair. No More Handicap <br />Inflation!
                      </h2>
                    </div>
                    
                    <p className="mt-3 text-sm md:text-xs lg:text-sm xhhh:text-xl my-3 md:my-4 opacity-85 mx-auto text-center">
                      Golf Meet uses machine learning to compute the accurate handicap of
                      each player, based on their scores on each hole of every course they
                      have played.
                    </p>
                    
                    <div className="mb-2 md:mb-4 text-center">
                      <p className="font-semibold lg:w-[95%] text-lg xsm:text-base md:text-base xhhh:text-xl lg:text-base mx-auto text-[#211E16]">
                        With the Golf Meet handicap, all<br /> that matters is your consistency.
                      </p>
                      <p className="mt-2 font-semibold text-lg xsm:text-base md:text-base lg:text-base xhhh:text-xl mx-auto text-[#211E16]">
                        Not your age or gender.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
      
              {/* Top wavy section */}
              <section className="w-full md:h-[300px]  relative md:-mt-[20rem] lg:-mt-80 z-9">
                {/* SVG wave at bottom of this section */}
                <svg
                  className="absolute bottom-0 left-0 w-full"
                  viewBox="0 0 1440 100"
                  preserveAspectRatio="none"
                >
                  <defs>
                    {/* Updated noise filter from noise-bg-newest */}
                    <filter id="noiseFilterTop">
                      <feTurbulence
                        type="fractalNoise"
                        baseFrequency="0.8"
                        numOctaves="4"
                        stitchTiles="stitch"
                      />
                    </filter>
      
                    {/* Updated pattern with the same color and opacity */}
                    <pattern id="noisePatternTop" patternUnits="userSpaceOnUse" width="100" height="100">
                      <rect width="100" height="100" fill="#002327" />
                      <rect width="100" height="100" filter="url(#noiseFilterTop)" opacity="0.2" />
                    </pattern>
                  </defs>
                  
                  <path
                    d="M0,20 C300,-20 360,25 720,40 C1080,90 1260,80 1840,75 L1540,100 L0,100 Z"
                    fill="url(#noisePatternTop)"
                  />
                </svg>
              </section>
      
              {/* Main green section with the updated noise background pattern */}
              <section className="w-full py-12 -mt-2 px-10 md:px-20 lg:h-[50vh] xhh:h-[20vh] xhhh:h-[25rem] bulge-bottom-desk flex items-center justify-center relative z-10 noise-bg-newest">
                <div className="text-center text-white w-full max-w-4xl mx-auto">
                  <div className="flex flex-col md:flex-row justify-center items-center space-y-8 md:space-y-0">
                    {/* MEET Section */}
                    <div className="flex-1 px-4">
                      <h2 className="text-3xl md:text-4xl lg:text-6xl font-quattrocento font-bold tracking-wider mb-2">
                        MEET
                      </h2>
                      <p className="font-quattrocentoSans font-light text-sm md:text-sm lg:text-lg">
                        Meet new golfers in<br />your area.
                      </p>
                    </div>
                    
                    {/* Bullet Point */}
                    <div className="hidden md:block mx-4">
                      <div className="w-2 h-2 lg:w-3 lg:h-3 bg-white rounded-full"></div>
                    </div>
                    
                    {/* PLAY Section */}
                    <div className="flex-1 px-4">
                      <h2 className="text-3xl md:text-4xl lg:text-6xl font-quattrocento font-bold tracking-wider mb-2">
                        PLAY
                      </h2>
                      <p className="font-quattrocentoSans font-light text-sm md:text-sm lg:text-lg">
                        Play with new friends at your local golf courses.
                      </p>
                    </div>
                    
                    {/* Bullet Point */}
                    <div className="hidden md:block mx-4">
                      <div className="w-2 h-2 lg:w-3 lg:h-3 bg-white rounded-full"></div>
                    </div>
                    
                    {/* COMPETE Section */}
                    <div className="flex-1 px-4">
                      <h2 className="text-3xl md:text-4xl lg:text-6xl font-quattrocento font-bold tracking-wider mb-2">
                        COMPETE
                      </h2>
                      <p className="font-quattrocentoSans font-light text-sm md:text-sm lg:text-lg">
                        Track your progress on a <br />nation-wide leaderboard. 
                      </p>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
    </>
  );
};

export default FairPlaySection;