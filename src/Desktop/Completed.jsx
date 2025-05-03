import React from "react";
import golfIllustration from "../assets/HomePage/golfIllustration.svg";
import Illustration_Golf_Balls from "../assets/HomePage/Illustration_Golf_Balls.webp";
// import glow_yellow from "../assets/HomePage/glow_yellow.svg";

const CombinedGolfPage = () => {
  return (
    <>
      {/* CompletePage Section */}
      <div className="mx-auto relative bg-gray-50 -mt-8 noise-bg z-10 pt-10 md:pt-16 lg:pt-24">
        <div className="container mx-auto px-4 text-center mt-3 mb-12 md:mb-16 lg:mb-20 max-w-6xl">
          {/* Heading for Desktop & Tablets */}
          <h1 
            className="hidden md:block text-[60px] lg:text-[60px] xl:text-[70px] font-quattrocento font-bold leading-tight md:leading-tight lg:leading-tight tracking-[0.025em] text-center mb-8 lg:mb-12"
            style={{
              background: 'linear-gradient(180deg, rgba(255, 180, 30, 0.9) 0%, #014D4E 27%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              textFillColor: 'transparent',
              textShadow: '0px 0px 1px rgba(0, 0, 0, 0.15)',
              filter: 'drop-shadow(0px 0.5px 0.5px rgba(0, 0, 0, 0.2))',
            }}
          >
            COMPETE WITH <br />
            GOLFERS FROM<br />
            ALL OVER INDIA
          </h1>

          {/* Heading for Mobile */}
          <h1 
            className="block md:hidden text-[42px] leading-[45px] w-[95%] mx-auto mb-2 font-quattrocento font-bold tracking-[0.025em] text-center"
            style={{
              background: 'linear-gradient(180deg, rgba(255, 180, 30, 0.9) 0%, #014D4E 15%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              textFillColor: 'transparent',
              textShadow: '0px 0px 1px rgba(0, 0, 0, 0.15)',
              filter: 'drop-shadow(0px 0.5px 0.5px rgba(0, 0, 0, 0.2))',
            }}
          >
            COMPETE WITH <br />
            GOLFERS FROM<br />
            ALL OVER INDIA
          </h1>

          {/* Subheading for Mobile */}
          <h1 className="text-[20px] text-[#014D4E] max-w-md block md:hidden w-[90%] mx-auto mb-6 font-quattrocento font-bold text-center">
            EVEN AS YOU PLAY AT YOUR HOME COURSE.
          </h1>

          {/* Subheading for Tablets & Desktop */}
          <h1 className="text-[20px] md:text-[30px] lg:text-[25px] text-[#014D4E] max-w-3xl hidden md:block mx-auto -mt-3 mb-6 lg:mb-5 font-quattrocento font-bold text-center">
            EVEN AS YOU PLAY AT YOUR <br />  HOME COURSE.
          </h1>

          {/* Description paragraph */}
          <p className="text-teal-700 font-sans text-lg md:text-xl lg:text-[20px] mb-8 md:mb-12 p-4 max-w-[500px] md:max-w-2xl lg:max-w-3xl mx-auto">
            Unlike typical golf tournaments where the result depends <br />on your form on the tournament day, Golf Meet gives you <br />and everyone else a fair chance all year long.
          </p>

          {/* Golf balls illustration */}
          <div className="relative mb-8 md:mb-12 lg:mb-16 p-6 md:p-8 lg:p-10">
            <img
              src={Illustration_Golf_Balls}
              draggable="false"
              alt="Golf Balls"
              className="mx-auto w-full md:w-1/2 lg:w-2/5 xl:w-5/12"
            />
          </div>
        </div>

        {/* Leaderboard Card Section */}
        <div className="container mx-auto px-4 pb-16 max-w-3xl">
          <div className="rounded-2xl mx-auto max-w-xl md:max-w-3xl lg:max-w-3xl noise-bg-newest overflow-hidden shadow-lg" 
            style={{
              color: "white",
              padding: "2.5rem 2rem",
              textAlign: "center"
            }}
          >
            {/* Card Title */}
            <h2
              className="font-quattrocento font-bold mb-6 md:mb-8"
              style={{
                fontSize: "clamp(2.25rem, 9vw, 3.8rem)",
                background: "linear-gradient(180deg, #FFF2BF 0%, #F4D455 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                textFillColor: "transparent",
                lineHeight: "1.2",
                display: "inline-block",
              }}
            >
              PLAY UNLIMITED<br />
              ROUNDS.
            </h2>
            
            <div 
  className="w-[55%] h-px mb-4 mx-auto"
  style={{
    background: "linear-gradient(270deg, rgba(255, 255, 255, 0) 0%, #FFFFFF 50%, rgba(255, 255, 255, 0) 100%)"
  }}
></div>
            
            {/* Card Subtitle */}
            <div className="mb-4">
              <h3 className="text-white text-2xl md:text-3xl lg:text-4xl font-quattrocento font-semibold mb-4">
                THE BEST 12 MAKE<br />
                IT TO THE<br />
                LEADERBOARD.
              </h3>
              <div 
  className="w-[55%] h-px mb-4 mx-auto"
  style={{
    background: "linear-gradient(270deg, rgba(255, 255, 255, 0) 0%, #FFFFFF 50%, rgba(255, 255, 255, 0) 100%)"
  }}
></div>
            </div>
            
            {/* Important Section */}
            <div className="text-center mb-4">
              <p className="font-semibold font-sans text-lg md:text-xl mb-5 md:mb-6 text-white">IMPORTANT</p>
              
              <p className="text-base md:text-lg opacity-80 mb-5 max-w-sm md:max-w-lg lg:max-w-2xl mx-auto font-thin text-white font-sans">
                Since most golfers book their rounds through club memberships or as complementary rounds from credit cards, the Golf Meet tournament fee does not cover green fees.
              </p>
              
              <p className="text-base md:text-lg max-w-sm md:max-w-lg lg:max-w-2xl opacity-80 mx-auto font-thin text-white font-sans">
                This also gives you and fellow contestants the freedom and flexibility to book your preferred tee time directly with the golf course.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CombinedGolfPage;