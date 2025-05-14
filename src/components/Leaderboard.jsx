import { div } from "framer-motion/client";
import React from "react";

const LeaderboardCard = () => {
  return (
    <>
    <div className="h-auto noise-bg-n bg-gray-100 pb-16   ">
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
        
        <p className="text-[.95rem] opacity-80 mb-4 max-w-72 mx-auto font-thin text-white font-sans">
          Since most golfers book their rounds through club memberships or as complementary rounds from credit cards, the Golf Meet tournament fee does not cover green fees.
        </p>
        
        <p className="text-[.95rem] max-w-72 opacity-80 mx-auto font-thin text-white font-sans">
          This also gives you and fellow contestants the freedom and flexibility to book your preferred tee time directly with the golf course.
        </p>
      </div>
    </div>
    </div>
    </>
  );
};

export default LeaderboardCard;