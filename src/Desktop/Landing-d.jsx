import React from "react";
import landingImg from "../assets/full.svg";
import landingbg from "../assets/bgmen.svg";
import landingLeftImg from "../assets/landing_left_img.svg";
import indiaFlag from "../assets/india_flag.png";
import faq_bg_mobile from "../assets/paper.svg";
import Illustration_Golfers_Mobile from "../assets/Illustration_Golfers_Mobile.svg";
import { Link } from "react-router-dom";

function DesktopTabletLandingPage() {
  return (
    <section className="text-center">
      {/* First section */}
      <div className="relative flex flex-col min-h-[67vh] bg-gray-50 noise-bg overflow-hidden">
        {/* Top Navbar */}
        <div className="md:absolute z-50 top-0 w-full flex justify-between items-center px-5 md:px-8 lg:px-10 py-8 md:py-10 flex-col-reverse md:flex-row">
          <div className="flex gap-6 md:gap-8 lg:gap-10 mt-4 md:mt-0 w-full md:w-auto">
            <button
              className="text-sm md:text-base lg:text-base bg-gradient-to-b from-[#E5181A] via-[#CB1517] to-[#B21214] text-white px-2 py-1 md:px-4 lg:px-5 md:py-2 rounded transition-all duration-300 ease-in-out shadow-[0px_2px_4px_0px_rgba(0,0,0,0.55)] 
  hover:from-[#E5181A] hover:via-[#E51719] hover:to-[#CC1517] hover:scale-110 hover:shadow-[0px_2px_10px_0px_rgba(0,0,0,0.45)]"
            >
              <span className="font-quattrocento text-[#FFF7D9]">
                SIGN UP NOW
              </span>
            </button>

            <Link
              to="/home-to-play"
              className="text-sm md:text-base leading-4 text-[#201E15] font-quattrocentoSans font-bold text-center my-auto"
            >
              LEADERBOARD
            </Link>
            <a
              href="#"
              className="text-sm md:text-base leading-4 text-[#201E15] font-quattrocentoSans my-auto font-bold"
            >
              PAY FEES
            </a>
          </div>
          <div className="flex items-center w-full md:w-auto justify-between gap-2">
            <div className="flex items-center gap-1">
              <img src={indiaFlag} alt="India Flag" className="w-6 h-5 mr-1" />
              <span className="font-quattrocento font-bold text-base">En</span>
            </div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 -960 960 960"
              width="24px"
              fill="#201E15"
            >
              <path d="M480-360 280-560h400L480-360Z" />
            </svg>
          </div>
        </div>

        {/*//! Hero Section for Tablets and Laptops */}
        <div className="md:flex hidden relative min-h-[68vh] flex-col w-full items-center justify-center">
          {/* Full width image at bottom - positioned to touch both edges correctly */}
          <div className="absolute bottom-0 left-0 right-0 z-20 w-full">
            <img
              src={landingImg}
              alt="Golf Illustration Full Width"
              className="w-full h-auto object-cover object-bottom"
              draggable="false"
            />
          </div>

          {/* Center Logo - vertically centered */}
          <div
            className="absolute z-30 flex items-center justify-center"
            style={{ top: "50%", transform: "translateY(-50%)" }}
          >
            <img
              src="favicons/favicon.svg"
              alt="Golfmeet Logo"
              className="w-48 object-contain md:w-[320px] lg:w-[360px] xl:w-[34vw] drop-shadow-[0_10px_10px_rgba(0,0,0,0.40)]"
              draggable="false"
            />
          </div>
        </div>

        {/*//! Mobile Design */}
        <div className="md:hidden relative flex flex-col items-center">
          <img
            src="favicons/favicon.svg"
            alt="Golfmeet Logo"
            className="w-10/12 sm:w-3/6 object-contain drop-shadow-2xl"
            draggable="false"
          />

          <img
            src={Illustration_Golfers_Mobile}
            alt="Golf Illustration"
            className="w-10/12 sm:w-3/6 mr-5"
            draggable="false"
          />
        </div>
      </div>

      {/* Second section - no gap */}
      <section className="relative h-[113vh] w-full overflow-hidden noise-bg-new">
      
      {/* Content positioned above the image */}
      <div className="relative z-20 max-w-xl mx-auto px-4">
    {/* First Section */}
    <div>
      <h1 className="text-[40px] mt-10 md:text-[52px] lg:text-[61px] leading-tight tracking-normal text-center font-quattrocento font-bold">
        <span className="bg-gradient-to-t from-[#FFFFFF] to-[#FFE8C4] bg-clip-text text-transparent">GOLF MEET</span> <br />
        <span className="text-white"> PLAYERS.</span>
      </h1>
    </div>
    
    {/* Second Section with PLAY BETTER centered */}
    <div className="flex flex-col items-center justify-center py-8 md:py-12 lg:py-3">
      <p className="font-quattrocento text-[24px] md:text-[28px] leading-tight tracking-normal text-center text-white">
        PLAY BETTER.
      </p>
    </div>
    
    {/* Third Section */}
    <div>
    <p className="font-extrabold font-quattrocento text-2xl md:text-4xl drop-shadow-lg leading-normal tracking-normal lg:mt-32 bg-gradient-to-b from-[#FFF2BF] to-[#F4D455] text-transparent bg-clip-text text-center">
        Golf Meet matches you with <br /> new golfers every round.
      </p>
      <p className="font-quattrocento font-normal text-[20px] leading-normal tracking-normal text-center text-[#FFFFFF] opacity-70 mt-2">
      Players are matched based on <br /> their preferred courses and dates. 
      </p>
      
      {/* Register Button */}
      <div className="flex justify-center mt-6 md:mt-8">
      <button className="rounded-md bg-gradient-to-b from-white via-[#FBE67B] to-[#FFB41E] px-8 py-3 font-bold transition-all duration-300 hover:opacity-90 hover:shadow-md">
        <span className="text-[20px] md:text-base font-quattrocento text-[#014D4E] font-bold uppercase">
        SIGN UP VIA WHATSAPP 
        </span>
      </button>
      </div>
    </div>
  </div>
      
      {/* Full-width image positioned at bottom */}
      <img 
        src={landingbg}
        alt="Golf players" 
        className="absolute bottom-0 mt-10 left-0 w-full object-cover object-bottom z-10"
        style={{ maxHeight: '100%' }}
      />
    </section>
    </section>
  );
}

export default DesktopTabletLandingPage;