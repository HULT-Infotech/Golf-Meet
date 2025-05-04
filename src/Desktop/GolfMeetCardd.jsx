import React from 'react';
import golfImage from '../assets/howdd.svg'; 
const GolfMeetCard = () => {
  return (
    <div className="w-full xl:-mt-10 pt-10 flex flex-col noise-bg bg-gray-50 relative">
      {/* Main container for proper stacking context */}
      <div className="flex flex-col w-full">
        {/* Image positioned as background */}
        <div className="w-full h-screen relative">
          <img 
            src={golfImage}
            className="absolute xl:top-16 md:top-28 lg:top-28 left-0 w-full h-full object-contain object-center"
            alt="Golf meet"
          />
          
          {/* Card positioned on top of the image */}
          <div className="relative w-full h-full flex items-center justify-center md:mt-8 lg:mt-24 p-4 ">
            <div className="xl:max-w-lg lg:max-w-md md:max-w-sm w-full bg-white shadow-lg p-9 md:p-8 z-30">
              <div className="mx-auto relative">
                <h6 className="text-base xsm:text-sm md:text-base font-semibold mb-6 relative z-10 text-center">
                  INTRODUCING
                </h6>
                 
                <h1
                  className="xsm:text-3xl font-quattrocento mb-4 text-4xl text-center md:text-4xl xl:text-6xl mx-auto uppercase font-bold tracking-wider relative z-10"
                  style={{
                    background: 'linear-gradient(180deg, rgba(255, 180, 30, 0.9) 0%, #014D4E 24%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                    textShadow: '0px 0px 1px rgba(0, 0, 0, 0.15)',
                    filter: 'drop-shadow(0px 0.5px 0.5px rgba(0, 0, 0, 0.2))',
                  }}
                >
                  The <br /> Golf Meet <br />
                  <span className="block mt-1 md:mt-2">Handicap</span>
                </h1>
              </div>
              
              <div className="bg-[#014D4E] px-1 mb-3 py-1 rounded-lg relative z-20">
                <h2 className="w-full text-center mx-auto text-base xsm:text-sm md:text-base  xl:text-2xl uppercase tracking-wide my-2 md:my-1 xl:my-3  text-white font-medium">
                  Play Fair. No More Handicap <br />Inflation!
                </h2>
              </div>
              
              <p className="mt-3 text-sm md:text-xs lg:text-sm my-3 md:my-4 opacity-85 mx-auto text-center">
                Golf Meet uses machine learning to compute the accurate handicap of
                each player, based on their scores on each hole of every course they
                have played.
              </p>
              
              <div className="mb-2 md:mb-4 text-center">
                <p className="font-semibold lg:w-[95%] text-lg xsm:text-base md:text-base lg:text-base mx-auto text-[#211E16]">
                  With the Golf Meet handicap, all<br /> that matters is your consistency.
                </p>
                <p className="mt-2 font-semibold text-lg xsm:text-base md:text-base lg:text-base mx-auto text-[#211E16]">
                  Not your age or gender.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Green section with tagline now properly positioned below */}

      {/* Top wavy section */}
<section className="w-full h-[300px] relative md:-mt-96 lg:-mt-80 z-0">
  {/* SVG wave at bottom of this section */}
  <svg
    className="absolute bottom-0 left-0 w-full"
    viewBox="0 0 1440 100"
    preserveAspectRatio="none"
  >
    <defs>
      {/* Create a pattern with noise for consistency */}
      <filter id="noiseFilterTop">
        <feTurbulence
          type="fractalNoise"
          baseFrequency="1.5"
          numOctaves="3"
          stitchTiles="stitch"
        />
      </filter>

      {/* Pattern with the base color and noise overlay */}
      <pattern id="noisePatternTop" patternUnits="userSpaceOnUse" width="100" height="100">
        <rect width="100" height="100" fill="#002327" />
        <rect width="100" height="100" filter="url(#noiseFilterTop)" opacity="0.23" />
      </pattern>
    </defs>
    
    <path
      d="M0,20 C300,-20 360,25 720,40 C1080,90 1260,80 1840,75 L1540,100 L0,100 Z"
      fill="url(#noisePatternTop)"
    />
  </svg>
</section>

{/* Main green section with the same background pattern */}
{/* Main green section with the same background pattern */}
<section className="w-full py-12 px-10 md:px-20 lg:h-[50vh] bulge-bottom-desk flex items-center justify-center relative z-10">
  {/* SVG background to apply the same noise pattern */}
  <svg
    className="absolute inset-0 w-full h-full z-[-1]"
    preserveAspectRatio="none"
  >
    <rect width="100%" height="100%" fill="url(#noisePatternTop)" />
  </svg>
  
  <div className="text-center text-white w-full max-w-4xl mx-auto">
    <div className="flex flex-col md:flex-row justify-center items-center space-y-8 md:space-y-0">
      {/* MEET Section */}
      <div className="flex-1  px-4">
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
          Play with new friends at your  local golf courses.
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
  );
};

export default GolfMeetCard;