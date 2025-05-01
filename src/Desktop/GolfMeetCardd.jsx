import React from 'react';
import golfImage from '../assets/howdd.svg'; 
const GolfMeetCard = () => {
  return (
    <div className="w-full -mt-10 pt-10 flex flex-col noise-bg bg-gray-50 relative">
      {/* Main container for proper stacking context */}
      <div className="flex flex-col w-full">
        {/* Image positioned as background */}
        <div className="w-full h-screen relative">
          <img 
            src={golfImage}
            className="absolute top-0 left-0 w-full h-full object-contain object-center"
            alt="Golf meet"
          />
          
          {/* Card positioned on top of the image */}
          <div className="relative w-full h-full flex items-center justify-center mt-24 p-4">
            <div className="max-w-lg w-full bg-white shadow-lg p-9 md:p-8 z-30">
              <div className="mx-auto relative">
                <h6 className="text-base xsm:text-sm md:text-base font-semibold mb-6 relative z-10 text-center">
                  INTRODUCING
                </h6>
                
                <h1
                  className="xsm:text-3xl font-quattrocento mb-4 text-4xl text-center md:text-4xl lg:text-6xl mx-auto uppercase font-bold tracking-wider relative z-10"
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
                <p className="font-semibold lg:w-[95%] text-lg xsm:text-base md:text-lg lg:text-base mx-auto text-[#211E16]">
                  With the Golf Meet handicap, all<br /> that matters is your consistency.
                </p>
                <p className="mt-2 font-semibold text-lg xsm:text-base md:text-lg lg:text-base mx-auto text-[#211E16]">
                  Not your age or gender.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Green section with tagline now properly positioned below */}

      <section className="w-full h-[300px]  relative -mt-80 z-0 ">
        {/* SVG wave at bottom of this section */}
        <svg
          className="absolute bottom-0  left-0 w-full "
          viewBox="0 0 1440 100"
          preserveAspectRatio="none"
          
        >
          
          <path
            d="M0,20 C300,-20 360,25 720,40 C1080,90 1260,80 1840,75 L1540,100 L0,100 Z"
            fill="#014D4E"
          />
        </svg>
      </section>

      {/* Main green section */}
      <section className="  bulge-bottom-desk noise-bg-new w-full min-h-[60vh] px-10 md:px-20 flex items-center justify-center relative z-10">
      <div className="text-center text-white py-10">
        <h2 className="text-5xl flex  flex-col md:flex-row  justify-center items-center gap-5 font-quattrocento md:text-5xl lg:text-6xl font-bold tracking-wider mb-4">
          <svg
            width="13"
            height="14"
            viewBox="0 0 13 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="inline-block mx-1"
          >
            <path
              d="M0.328125 7.072C0.328125 6.256 0.472125 5.464 0.760125 4.696C1.09612 3.928 1.55212 3.256 2.12812 2.68C2.70412 2.056 3.37613 1.576 4.14413 1.24C4.91213 0.856002 5.75213 0.664001 6.66412 0.664001C7.48013 0.664001 8.27213 0.856002 9.04013 1.24C9.80813 1.576 10.4801 2.056 11.0561 2.68C11.6321 3.256 12.0881 3.928 12.4241 4.696C12.8081 5.464 13.0001 6.256 13.0001 7.072C13.0001 8.896 12.3521 10.408 11.0561 11.608C9.76013 12.76 8.29613 13.336 6.66412 13.336C4.84013 13.336 3.32812 12.76 2.12812 11.608C0.928125 10.408 0.328125 8.896 0.328125 7.072Z"
              fill="#E5E5E5"
            />
          </svg>
          MEET
          <p className=" text-sm block md:hidden  ">Meet new golfers in your area.</p>
          <svg
            width="13"
            height="14"
            viewBox="0 0 13 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="inline-block mx-1"
          >
            <path
              d="M0.328125 7.072C0.328125 6.256 0.472125 5.464 0.760125 4.696C1.09612 3.928 1.55212 3.256 2.12812 2.68C2.70412 2.056 3.37613 1.576 4.14413 1.24C4.91213 0.856002 5.75213 0.664001 6.66412 0.664001C7.48013 0.664001 8.27213 0.856002 9.04013 1.24C9.80813 1.576 10.4801 2.056 11.0561 2.68C11.6321 3.256 12.0881 3.928 12.4241 4.696C12.8081 5.464 13.0001 6.256 13.0001 7.072C13.0001 8.896 12.3521 10.408 11.0561 11.608C9.76013 12.76 8.29613 13.336 6.66412 13.336C4.84013 13.336 3.32812 12.76 2.12812 11.608C0.928125 10.408 0.328125 8.896 0.328125 7.072Z"
              fill="#E5E5E5"
            />
          </svg>
          PLAY
          <p className=" text-sm block md:hidden">
            Make new friends and connections.
          </p>
          <svg
            width="13"
            height="14"
            viewBox="0 0 13 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="inline-block mx-1"
          >
            <path
              d="M0.328125 7.072C0.328125 6.256 0.472125 5.464 0.760125 4.696C1.09612 3.928 1.55212 3.256 2.12812 2.68C2.70412 2.056 3.37613 1.576 4.14413 1.24C4.91213 0.856002 5.75213 0.664001 6.66412 0.664001C7.48013 0.664001 8.27213 0.856002 9.04013 1.24C9.80813 1.576 10.4801 2.056 11.0561 2.68C11.6321 3.256 12.0881 3.928 12.4241 4.696C12.8081 5.464 13.0001 6.256 13.0001 7.072C13.0001 8.896 12.3521 10.408 11.0561 11.608C9.76013 12.76 8.29613 13.336 6.66412 13.336C4.84013 13.336 3.32812 12.76 2.12812 11.608C0.928125 10.408 0.328125 8.896 0.328125 7.072Z"
              fill="#E5E5E5"
            />
          </svg>
          COMPETE
          <p className=" text-sm block md:hidden">Compete with amateur golfers nationwide.</p>
          <svg
            width="13"
            height="14"
            viewBox="0 0 13 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="inline-block mx-1 "
          >
            <path
              d="M0.328125 7.072C0.328125 6.256 0.472125 5.464 0.760125 4.696C1.09612 3.928 1.55212 3.256 2.12812 2.68C2.70412 2.056 3.37613 1.576 4.14413 1.24C4.91213 0.856002 5.75213 0.664001 6.66412 0.664001C7.48013 0.664001 8.27213 0.856002 9.04013 1.24C9.80813 1.576 10.4801 2.056 11.0561 2.68C11.6321 3.256 12.0881 3.928 12.4241 4.696C12.8081 5.464 13.0001 6.256 13.0001 7.072C13.0001 8.896 12.3521 10.408 11.0561 11.608C9.76013 12.76 8.29613 13.336 6.66412 13.336C4.84013 13.336 3.32812 12.76 2.12812 11.608C0.928125 10.408 0.328125 8.896 0.328125 7.072Z"
              fill="#E5E5E5"
            />
          </svg>
        </h2>
        <p className=" md:block hidden font-quattrocentoSans font-light text-[20px] leading-[26.59px] tracking-[0.025em] text-center">
          Meet new golfers in your area. Make new friends. Compete with amateur
          golfers nationwide.
        </p>
      </div>
      </section>


      </div>
    </div>
  );
};

export default GolfMeetCard;