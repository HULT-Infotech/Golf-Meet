import React from "react";
import tr_bg from "../assets/tournament-rule/right-bg.svg";
import tr_bg_mobile from "../assets/checkk.webp";
import tr_dec_mobile from "../assets/green-m.svg";
import code_of_conduct_greenleft from "../assets/code-of-conduct/code-conduct-left.svg";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";

// Function to handle the WhatsApp button click
const handleWhatsAppClick = () => {
  // The phone number provided: +91-888 484 4444
  // Remove non-numeric characters for the WhatsApp link
  const phoneNumber = "918884844444"; // Added country code without + sign
  window.open(`https://wa.me/${phoneNumber}`, "_blank");
};

function CodeOne() {
  return (
    <div className="md:overflow-visible overflow-hidden">
      {/* Fixed Navbar at the top */}
      <div className="fixed top-0 left-0 right-0 z-50 w-full">
        <Navbar />
      </div>
      <div style={{ height: "80px" }} className="md:h-[90px] lg:h-[100px]" />

      <section className="sm:bg-gray-100 sm:noise-bg noise-bg-n min-h-[90vh] relative flex flex-col overflow-hidden">
        {/* Content container with flex structure */}
        <div className="flex flex-col w-full flex-1 md:flex-row max-w-[1700px] mx-auto relative pt-4 md:pt-16">
          {/* Text Section */}
          <div className="relative flex flex-col justify-center items-start p-8 md:pl-10 md:p-0 xl:ml-20 md:mb-40">
            <h1 
              className="font-quattrocento font-bold xsm:text-[2.3rem] text-[2.9rem] text-[#201E15] sm:text-5xl lg:text-[80px] pt-8 leading-[100%] tracking-[0.025em] mb-4"
              style={{
                background: 'linear-gradient(180deg, rgba(255, 180, 30, 0.9) 0%, #014D4E 64%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                textFillColor: 'transparent',
                textShadow: '0px 0px 1px rgba(0, 0, 0, 0.15)',
                filter: 'drop-shadow(0px 0.5px 0.5px rgba(0, 0, 0, 0.2))',
              }}
            >
              PLAYER CODE <br /> OF CONDUCT
            </h1>
            {/* Mobile-only text added here */}
            <div className="xsm:text-xs text-sm md:hidden mb-4 xsm:w-[85%] w-[95%]">
              Golf Meet is built on respect, trust, and the spirit of true sportsmanship. Review the player code that defines our community.
            </div>
            <p className="font-semibold xsm:text-xs text-sm xsm:w-[85%] w-[95%]">
              And if you have suggestions, we're always ready to listen.
            </p>
          </div>
          
          {/* Desktop image container - Right side (hidden on mobile) */}
          <div className="hidden md:block relative bottom-0 right-0 md:w-1/2">
            <img
              src={tr_bg}
              alt="Golfers Illustration"
              className="w-[93%] h-auto object-contain pointer-events-none md:mr-12"
            />
          </div>
        </div>
        
        {/* Mobile image container - positioned at bottom left */}
        <div className="md:hidden relative w-full flex justify-start mt-auto left-0">
          <img
            src={tr_bg_mobile}
            alt="Golfers Illustration Mobile"
            className="w-[93%] object-contain pointer-events-none"
          />
        </div>
      </section>

      <section className="flex flex-col items-center justify-center xsm:pt-12 pt-16 bulge-top -mt-4 md:mt-12 relative noise-bg-new sm:mb-0">
        <div className="flex justify-between items-center font-medium xsm:text-lg text-white bg-[#FFFFFF0D] w-[85%] p-7 rounded-md">
          <div className="flex flex-col">
            <h2 className="lg:text-5xl md:4xl text-[1.8rem] uppercase font-quattrocento">
              RULES & REGULATIONS
            </h2>
            <Link to="/code-of-conduct">
              <p className="lg:text-lg md:3xl xsm:text-xs xsm:pt-2 pt-2 underline underline-offset-4">
                Please refer to the
                <strong> GolfMeet Rules & Regulations </strong> here
              </p>
            </Link>
          </div>
          <div>
            <svg
              width="22"
              height="42"
              viewBox="0 0 25 47"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1 1.5L23 23.5L1 45.5"
                stroke="#FFF"
                strokeWidth="2"
              />
            </svg>
          </div>
        </div>
      </section>
    </div>
  );
}

export default CodeOne;