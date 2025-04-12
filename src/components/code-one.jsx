import React from "react";
import tr_bg from "../assets/tournament-rule/right-bg.svg";
import tr_bg_mobile from "../assets/check.webp";
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

      <section className="sm:bg-gray-100 sm:noise-bg noise-bg-n min-h-screen relative flex flex-col md:flex-row overflow-hidden pt-16"> {/* Added pt-16 to create space for fixed navbar */}
        {/* Main Content Container */}
        <div className="flex flex-col w-full grow justify-between md:justify-around gap-12 sm:gap-16 md:gap-20 lg:gap-24 md:flex-row max-w-[1700px] mx-auto relative pt-4 pb-16 md:py-16">
          <div className="relative flex flex-col justify-center items-center md:items-start p-8 md:pl-10 md:p-0 xl:ml-20 z-10">
            <h1
              className="font-quattrocento text-[2.97rem] md:text-6xl md:text-[37px] lg:text-[55px] xl:text-8xl max-w-2xl font-bold mb-4 mt-4 text-[#201E15] text-center md:text-left xl:text-[80px]"
              style={{lineHeight: "1.1" }}
            >
              <span className="whitespace-nowrap">PLAYER CODE</span>
              <br />
              OF CONDUCT
            </h1>
          </div>
        </div>
        
        {/* Right Image Section with position fixed to bottom */}
        <div className="absolute bottom-0 left-0 right-0 w-full">
          {/* Desktop image - hidden on mobile */}
          {/* <img
            src={tr_bg}
            alt="Golfers Illustration"
            className="w-full object-contain pointer-events-none hidden md:block"
          /> */}
          
          {/* Mobile image - hidden on desktop */}
          <img
            src={tr_bg_mobile}
            alt="Golfers Illustration Mobile"
            className="w-[92%] mx-auto object-contain pointer-events-none md:hidden"
          />
        </div>
      </section>

      <div className="top-0 -mt-1">
        <img
          src={tr_dec_mobile}
          alt="Mobile decorative element"
          className="absolute left-0 w-[270px] object-contain pointer-events-none md:hidden"
        />
      </div>

      <section className="flex flex-col items-center justify-center mt-20 md:mt-20 xl:mt-24 relative mb-6 sm:mb-0">
        <div className="flex justify-between items-center text-[#014D4E] bg-[#014D4E0D] w-[85%] p-7 rounded-md">
          <div className="flex flex-col">
            <h2 className="lg:text-5xl md:4xl text-[1.8rem] font-bold uppercase font-quattrocento">
              TOURNAMENT RULES
            </h2>
            <Link to="/tournament-rules">
              <p className="lg:text-lg md:3xl tect-[1.5rem] underline underline-offset-4">
                Please refer to the
                <strong> GolfMeet Tournament Rules </strong> here
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
                stroke="#014D4E"
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