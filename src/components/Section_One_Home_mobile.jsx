import React from "react";
import Illustration_Golfers_Mobile from "../assets/land.svg";
import fav from "../assets/favicon.webp";
import { Link } from "react-router-dom";

function LandingHomePage() {
  // Function to handle the WhatsApp button click
  const handleWhatsAppClick = () => {
    const phoneNumber = "918884844444";
    window.open(`https://wa.me/${phoneNumber}`, "_blank");
  };
  
  return (
    <div className="md:hidden w-full text-center h-auto overflow-hidden">
      {/* First Section with noise background */}
      <div className="relative w-full bg-gray-50 noise-bg-n flex flex-col">
        {/* Top Navbar */}
        <div className="z-50 w-full flex justify-between items-center px-4 py-4">
          {/* Left Side - Register Button */}
          <button
            className="bg-gradient-to-b from-[#E5181A] via-[#CB1517] to-[#B21214]
                      px-4 py-2 rounded-md text-[#FFF7D9] uppercase tracking-[0.1em] font-quattrocento
                    [font-size:clamp(0.65rem,2.5vw,1rem)]
                    shadow-[0_2px_4px_rgba(0,0,0,0.55)]
                      hover:scale-105 hover:shadow-[0_4px_10px_rgba(0,0,0,0.45)] transition-all duration-300 ease-in-out"
            onClick={handleWhatsAppClick}
          >
            SIGN UP NOW
          </button>
          
          {/* Right Side - Leaderboard Link */}
          <Link
            to="/leaderboard"
            className="uppercase text-[#014D4E] font-quattrocentoSans font-bold tracking-[0.1em]
                      [font-size:clamp(0.65rem,2.5vw,1rem)] pointer-events-auto"
          >
            Leaderboard
          </Link>
        </div>
        
        {/* Main Content Area - Logo with margin-top */}
        <div className="flex flex-col items-center pt-4 px-4 mt-4 mb-12 xsm:mb-4">
          <img
            src="favicons/favicon.svg"
            alt="Golfmeet Logo"
            className="w-full sm:w-3/6 object-contain drop-shadow-2xl"
            draggable="false"
          />
        </div>
        
        {/* Content section with heading and text */}
        <div className="flex flex-col items-center px-4 mt-4 z-40 relative">
          {/* Gradient Heading */}
          <h1 
            className="text-[#014D4E] mt-4 text-5xl xsm:text-4xl xsm:leading-[50px] leading-[60px] font-quattrocento font-bold xsm:mb-3 mb-4"
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
            WHATS'S <br /> YOUR RANK?
          </h1>
          
          {/* Paragraph */}
          <p className="text-[#014D4E] text-2xl xsm:text-[22px] font-quattrocento mb-8 font-bold">
            AMONG AMATEUR <br /> GOLFERS IN INDIA
          </p>
        </div>
        
        {/* Bottom Image - Positioned absolutely at the bottom */}
        <div className="absolute bottom-0 left-0 right-0 w-full z-30">
          <img
            src={Illustration_Golfers_Mobile}
            alt="Golf Illustration"
            className="w-full object-contain opacity-70"
            draggable="false"
          />
        </div>
      </div>
      
      {/* Second Section - Leaderboard Card */}
      <div className="w-full flex justify-center bg-white relative -top-6">
        <div className="w-full max-w-md bg-white rounded-lg shadow-lg overflow-hidden z-40 mx-4">
          <div className="px-4 pt-3 pb-2">
            <div className="flex justify-between items-center border-b pb-2">
              <div className="text-sm font-bold text-[#014D4E]">RANK</div>
              <div className="text-sm font-bold text-[#014D4E]">NAME</div>
              <div className="text-sm font-bold text-[#014D4E]">NET</div>
            </div>
            
            {/* First Player Row */}
            <div className="py-3 border-b">
              <div className="flex justify-between items-center">
                <div className="w-10 flex items-center flex-col">
                  <div className="flex flex-col items-center">
                    <span className="text-lg font-bold leading-none text-[#014D4E]">1</span>
                    <div className="text-green-500 text-xs mt-1">
                      <span className="flex items-center">
                        <span className="mr-1">▲</span>
                        <span>+3</span>
                      </span>
                    </div>
                  </div>
                </div>
                
                <div className="flex flex-col items-start text-left flex-grow mx-4">
                  <span className="font-bold text-[#014D4E]">Srinivas Raaghav Kashyap</span>
                  <div className="text-xs text-gray-500">
                    +91 xxxxx x1234 · Bengaluru, IN
                  </div>
                  <div className="text-xs text-gray-400 mt-1">
                    ROUNDS: 123 · RAW SCORE: 9999
                  </div>
                </div>
                
                <div className="flex flex-col items-end">
                  <span className="text-lg font-medium text-[#014D4E]">9999</span>
                  <span className="text-xs text-[#014D4E] underline mt-1">Details &gt;</span>
                </div>
              </div>
            </div>
            
            {/* Second Player Row - Updated to match image */}
            <div className="py-3">
              <div className="flex justify-between items-center">
                <div className="w-10 flex items-center flex-col">
                  <div className="flex flex-col items-center">
                    <span className="text-lg font-bold text-gray-400 leading-none">2</span>
                    <div className="text-red-500 text-xs mt-1">
                      <span className="flex items-center">
                        <span className="mr-1">▼</span>
                        <span>-1</span>
                      </span>
                    </div>
                  </div>
                </div>
                
                <div className="flex flex-col items-start text-left flex-grow mx-4">
                  <span className="font-bold text-gray-400">Srinivas Raaghav Kashyap</span>
                  <div className="text-xs text-gray-400">
                    +91 xxxxx x1234 · Bengaluru, IN
                  </div>
                  <div className="text-xs text-gray-300 mt-1">
                    ROUNDS: 123 · RAW SCORE: 9999
                  </div>
                </div>
                
                <div className="flex flex-col items-end">
                  <span className="text-lg font-medium text-gray-400">9999</span>
                  <span className="text-xs text-[#014D4E] underline mt-1">Details &gt;</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Position the "VIEW INDIA RANKING" button to overlap between second and third sections */}
      <div className="w-full flex justify-center relative -top-10 z-50">
        <div className="w-full max-w-xs mx-4">
          <button 
            className="w-full py-3 rounded-md text-white font-bold tracking-wider uppercase"
            style={{
              background: 'linear-gradient(180deg, #029A9C 0%, #014D4E 100%)',
              boxShadow: '0px 2px 4px rgba(0,0,0,0.25)'
            }}
          >
            VIEW INDIA RANKING
          </button>
        </div>
      </div>
    </div>
  );
}

export default LandingHomePage;