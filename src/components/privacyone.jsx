import React from "react";
import { Link } from "react-router-dom";
import tr_bg from "../assets/tournament-rule/right-bg.svg";
import pr_m from "../assets/right-privacy.webp";
import Navbar from "../components/Navbar";

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
      
      {/* First section with min-h-screen, with padding-top to account for navbar */}
      <section className="sm:bg-gray-100 sm:noise-bg noise-bg-n min-h-[90vh] relative flex flex-col overflow-hidden ">
        {/* Content container */}
        <div className="flex flex-col md:flex-row w-full h-full">
          <div className="flex flex-col w-full grow justify-between md:justify-around gap-8 sm:gap-12 md:gap-16 lg:gap-20 md:flex-row max-w-[1700px] mx-auto relative pt-4 pb-16 md:py-16">
            {/* Text Section */}
            <div className="relative flex flex-col justify-center items-start p-8 md:pl-10 md:p-0 xl:ml-20 md:-mt-8 min-w-[300px] z-10">
              <h1 className="font-quattrocento font-bold text-5xl sm:text-5xl lg:text-[76px] leading-[100%] tracking-[0.025em] text-[#201E15] mb-4">
                PRIVACY <br /> POLICY
              </h1>
            </div>
          </div>
          
          {/* Desktop image container - fills full right side */}
          <div className="absolute bottom-0 right-0 hidden md:block">
            {/* <img
              src={tr_bg}
              alt="Golfers Illustration"
              className="h-auto object-contain pointer-events-none"
            /> */}
          </div>
          
          {/* Mobile image container - full width with right alignment */}
          <div className="absolute bottom-0 right-0 md:hidden w-full">
            <img
              src={pr_m}
              alt="Golfers Illustration Mobile"
              className="w-[87%] ml-auto object-contain pointer-events-none"
            />
          </div>
        </div>
      </section>

      <section className="flex flex-col items-center justify-center mt-20 md:mt-20 xl:mt-24 relative mb-6 sm:mb-0">
        <div className="flex justify-between items-center text-[#014D4E] bg-[#014D4E0D] w-[85%] p-7 rounded-md">
          <div className="flex flex-col">
            <h2 className="lg:text-5xl md:4xl text-[1.8rem] font-bold uppercase font-quattrocento">
              TERMS OF USE
            </h2>
            <Link to="/terms-of-use">
              <p className="lg:text-lg md:3xl tect-[1.5rem] underline underline-offset-4">
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

export default Policy;