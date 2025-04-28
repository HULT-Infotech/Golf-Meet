import React from "react";
import golfIllustration from "../assets/HomePage/golfIllustration.svg";
import Illustration_Golf_Balls from "../assets/HomePAge/Illustration_Golf_Balls.webp";
import glow_yellow from "../assets/HomePage/glow_yellow.svg";

const CompletePage = () => {
  return (
    <>
      <div className="mx-auto relative bg-gray-100 -mt-8 noise-bg-n z-10 py-10 md:py-20">
        <div className="text-center mt-8 mb-12">
          <h1 className="text-[40px] leading-[40px] hidden md:block w-auto mb-8 lg:text-[90px] font-quattrocento font-bold md:leading-[106.37px] tracking-[0.025em] text-center">
            COMPETE WITH <br />
            GOLFERS FROM<br />
            ALL OVER INDIA
          </h1>
          <h1 className="text-[42px] text-[#014D4E] leading-[45px] block md:hidden w-[95%] mx-auto mb-4 lg:text-[90px] font-quattrocento font-bold md:leading-[106.37px] tracking-[0.025em] text-center">
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
          {/* Leaderboard Card */}
          <div className="px-4 md:px-0 mb-[8.3rem]">
            <LeaderboardCard />
          </div>
        </div>
        <div className="flex flex-col md:flex-row items-center justify-between gap-10">
          {/* Content for this flex container */}
        </div>
      </div>
      <div className="absolute z-30 flex justify-end bottom-[60rem] opacity-85 right-0 w-full">
        <img src={glow_yellow} alt="glow_yellow" className="w-2/3" />
      </div>
    </>
  );
};

const LeaderboardCard = () => {
  return (
    <div className="max-w-md mx-auto rounded-2xl bg-[#01383A] noise-bg-new overflow-hidden shadow-lg" style={{
      color: "white",
      padding: "2rem 1.5rem",
      textAlign: "center"
    }}>
      {/* Card Title */}
      <h2 
        className="font-quattrocento font-bold mb-7" 
        style={{
          fontSize: "clamp(2.25rem, 12vw, 5rem)", // reduced min for small screens
          background: "linear-gradient(180deg, #FFF2BF 0%, #F4D455 100%)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          backgroundClip: "text",
          textFillColor: "transparent",
          lineHeight: "1.3",
          display: "inline-block",
        }}
      >
        PLAY<br />
        UNLIMITED<br />
        ROUNDS.
      </h2>
      
      <div className="w-full h-px mb-4" style={{
        background: "linear-gradient(270deg, rgba(255, 255, 255, 0) 0%, #FFFFFF 50%, rgba(255, 255, 255, 0) 100%)"
      }}></div>
      
      {/* Card Subtitle */}
      <div className="mb-4">
        <h3 className="text-white text-3xl font-quattrocento font-semibold mb-4">
          THE BEST 12 MAKE<br />
          IT TO THE<br />
          LEADERBOARD.
        </h3>
        <div className="w-full h-px mb-12" style={{
          background: "linear-gradient(270deg, rgba(255, 255, 255, 0) 0%, #FFFFFF 50%, rgba(255, 255, 255, 0) 100%)"
        }}></div>
      </div>
      
      {/* Important Section */}
      <div className="text-center mb-4">
        <p className="font-semibold font-sans text-[1.1rem] mb-5 text-white">IMPORTANT</p>
        
        <p className="text-[.95rem] mb-4 max-w-72 mx-auto font-thin text-white font-sans">
          Since most golfers book their rounds through club memberships or as complementary rounds from credit cards, the Golf Meet tournament fee does not cover green fees.
        </p>
        
        <p className="text-[.95rem] max-w-72 mx-auto font-thin text-white font-sans">
          This also gives you and fellow contestants the freedom and flexibility to book your preferred tee time directly with the golf course.
        </p>
      </div>
    </div>
  );
};

export default CompletePage;