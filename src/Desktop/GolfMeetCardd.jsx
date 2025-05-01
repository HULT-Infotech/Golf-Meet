import React from 'react';
import golfImage from '../assets/howdd.svg'; 

const GolfMeetCard = () => {
  return (
    <div className="h-screen w-full flex items-center justify-center bg-gray-50 z-0 noise-bg p-4 relative overflow-hidden">
      {/* Full-width image positioned at top 50% - preserving original high resolution */}
      <img 
        src={golfImage}
        className="absolute top-10 left-0 right-0 w-full z-0"
        style={{
          height: '80vh', // 50% of viewport height
          objectFit: 'contain', // Don't resize or crop the image
          objectPosition: 'center bottom' // Position to show bottom half
        }}
      />

<div className="max-w-lg w-full lg:py-12 font-quattrocento  bg-white shadow-lg p-9 md:p-8 relative z-10">
        <div className="mx-auto relative">
          <h6 className="text-base xsm:text-sm md:text-base font-semibold mb-6 relative z-10 text-center">
            INTRODUCING
          </h6>
          
          <h1
            className="xsm:text-3xl mb-4 text-4xl text-center md:text-4xl lg:text-6xl mx-auto uppercase font-bold tracking-wider relative z-10"
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
          <h2 className="w-full text-center mx-auto text-base xsm:text-sm md:text-base lg:text-2xl uppercase tracking-wide my-2 md:my-3 text-white font-medium">
            Play Fair. No More Handicap <br />Inflation!
          </h2>
        </div>
        
        <p className="mt-3 text-sm lg:text-sm my-3 md:my-4 opacity-85 mx-auto text-center">
          Golf Meet uses machine learning to compute the accurate handicap of
          each player, based on their scores on each hole of every course they
          have played.
        </p>
        
        <div className="mb-2 md:mb-4 text-center">
          <p className="font-semibold lg:w-[95%] text-lg xsm:text-base md:text-lg  mx-auto text-[#211E16]">
            With the Golf Meet handicap, all<br /> that matters is your  consistency.
          </p>
          <p className="mt-2 font-semibold text-lg xsm:text-base md:text-lg  mx-auto text-[#211E16]">
            Not your age or gender.
          </p>
        </div>
      </div>
    </div>
  );
};

export default GolfMeetCard;