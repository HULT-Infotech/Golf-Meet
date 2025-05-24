import React from "react";
import { Link } from "react-router-dom";
import tr_bg from "../assets/tournament-rule/right-bg.svg";
import pr_m from "../assets/PV.webp";
import Navbar from "./Navbar";
import tr_bg_mobile from "../assets/check.webp";
const handleWhatsAppClick = () => {
  // The phone number provided: +91-888 484 4444
  // Remove non-numeric characters for the WhatsApp link
  const phoneNumber = "918884844444"; // Added country code without + sign
  window.open(`https://wa.me/${phoneNumber}`, "_blank");
};

function Policy() {
  return (
    <div className="md:overflow-visible overflow-hidden">
      {/* Fixed Navbar that will be visible everywhere */}
      <div className="fixed top-0 left-0 right-0 z-50 w-full">
        <Navbar />
      </div>
      <div style={{ height: "80px" }} className="md:h-[90px] lg:h-[100px]" />

      {/* First section with min-h-screen, with padding-top to account for navbar */}
      <section className="sm:bg-gray-100 md:hidden sm:noise-bg noise-bg-n min-h-[90vh] relative flex flex-col overflow-hidden">
        {/* Content container with flex structure */}
        <div className="flex flex-col w-full flex-1 md:flex-row max-w-[1700px] mx-auto relative pt-4 md:pt-16">
          {/* Text Section */}
          <div className="relative flex flex-col justify-center items-start px-8 md:pl-10 md:p-0 xl:ml-20 md:mb-40">
            <h1 
              className="font-quattrocento font-bold xsm:text-[2.4rem] text-[2.9rem] text-[#201E15] sm:text-5xl lg:text-[80px] pt-8 leading-[100%] tracking-[0.025em] mb-4"
              style={{
                background: 'linear-gradient(180deg, rgba(255, 180, 30, 0.9) 0%, #014D4E 66%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                textFillColor: 'transparent',
                textShadow: '0px 0px 1px rgba(0, 0, 0, 0.15)',
                filter: 'drop-shadow(0px 0.5px 0.5px rgba(0, 0, 0, 0.2))',
              }}
            >
              PRIVACY <br />POLICY
            </h1>
            {/* Mobile-only text added here */}
            <div className="xsm:text-xs text-sm md:hidden mb-4 xsm:w-[90%] w-[98%]">
              Review the terms that govern your Golf Meet experience — crafted to ensure a trusted, respectful, and rewarding environment for every player.
            </div>
          </div>
          
          {/* Desktop image container - fills full right side */}
          <div className="hidden md:block relative bottom-0 right-0 md:w-1/2">
            <img
              src={tr_bg}
              alt="Golfers Illustration"
              className="w-[93%] h-auto object-contain pointer-events-none md:mr-12"
            />
          </div>
        </div>
        
        {/* Mobile image container - positioned at bottom */}
        <div className="md:hidden relative w-full flex justify-end mt-auto">
          <img
            src={pr_m}
            alt="Golfers Illustration Mobile"
            className="w-[87%] object-contain pointer-events-none"
          />
        </div>
      </section>

      <section className="md:hidden flex flex-col items-center justify-center xsm:pt-12 pt-16 bulge-top -mt-3 md:mt-12 relative noise-bg-new sm:mb-0">
        <div className="flex justify-between items-center font-medium xsm:text-lg text-white bg-[#FFFFFF0D] w-[85%] p-7 rounded-md">
          <div className="flex flex-col">
            <h2 className="lg:text-5xl md:4xl text-[1.8rem] uppercase font-quattrocento">
              TERMS OF USE
            </h2>
            <Link to="/code-of-conduct">
              <p className="lg:text-lg md:3xl w-[90%] xsm:text-xs xsm:pt-2 pt-2 underline underline-offset-4">
                Please refer to the 
                <strong> Terms of Use </strong> here
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
      <section
              className="bg-gray-100 noise-bg-optim  relative hidden md:flex flex-col md:min-h-[70vh] lg:min-h-[75vh] md:flex-row"
            >
              <div className="flex flex-col w-full justify-between md:justify-around md:flex-row max-w-[1700px] mx-auto">
                {/* Text Section */}
                <div className="relative flex flex-col justify-center items-start p-8 md:pl-10 md:p-0 xl:ml-20 md:mb-40">
                  <h1
                    className="font-quattrocento -mt-28 font-bold text-[2.85rem] text-[#201E15] sm:text-5xl lg:text-[55px] xl:text-[65px] leading-[100%] tracking-[0.025em] mb-4"
                    style={{
                      background:
                        "linear-gradient(180deg, rgba(255, 180, 30, 0.9) 0%, #014D4E 23%)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                      textFillColor: "transparent",
                      textShadow: "0px 0px 1px rgba(0, 0, 0, 0.15)",
                      filter: "drop-shadow(0px 0.5px 0.5px rgba(0, 0, 0, 0.2))",
                    }}
                  >
                    PRIVACY <br /> POLICY
                  </h1>
                  <div className="text-sm w-[95%]">
                  Review the terms that govern your Golf Meet experience — crafted to ensure a trusted, respectful, and rewarding environment for every player. 
                  </div>
                </div>
      
                {/* Right Image Section */}
                <div className="flex items-center justify-center px-5 md:px-0 md:items-end mt-8">
                  <img
                    src={tr_bg_mobile}
                    alt="Golfers Illustration"
                    className="xl:w-[60%] lg:w-[75%] md:w-[85%] object-contain pointer-events-none"
                  />
                </div>
              </div>
            </section>
            <section className="md:flex hidden flex-col items-center justify-center -mt-2 relative sm:mb-0 w-full">
        <div 
          onClick={() => window.location.href = '/terms-of-use'}
          className="flex justify-between items-center text-white bg-[#014D4E0D] noise-bg-newest w-full md:px-8 lg:px-32 lg:py-10 md:py-6 cursor-pointer hover:opacity-90 transition-opacity"
        >
          <div className="flex flex-col">
            <h2 className="lg:text-4xl md:4xl text-[1.8rem] font-bold uppercase font-quattrocento">
            TERMS OF USE
            </h2>
            <p className="lg:text-base md:3xl tect-[1.5rem] underline underline-offset-4">
              Please refer to the
              <strong> GolfMeet Terms of Use </strong> here
            </p>
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

export default Policy;