import React from "react";
import tr_bg from "../assets/tournament-rule/right-bg.svg";
import tr_bg_mobile from "../assets/check.webp";
import tr_dec_mobile from "../assets/green-m.svg";
import code_of_conduct_greenleft from "../assets/code-of-conduct/code-conduct-left.svg";
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
      <section className="sm:bg-gray-100 sm:noise-bg noise-bg-neww min-h-screen relative flex flex-col md:flex-row overflow-hidden">
  <div className="sticky top-0 z-50 w-full flex justify-between items-center
       [padding-left:clamp(1rem,5vw,3.5rem)]
       [padding-right:clamp(1rem,5vw,3.5rem)]
       [padding-top:clamp(1.5rem,5vw,2.5rem)]
       [padding-bottom:clamp(1.5rem,5vw,2.5rem)]">
    {/* Left Side - Register Button */}
    <button
      className="bg-gradient-to-b from-[#E5181A] via-[#CB1517] to-[#B21214]
       px-4 py-2 rounded-md text-[#FFF7D9] uppercase tracking-[0.1em] font-quattrocento
       [font-size:clamp(0.65rem,2.5vw,1rem)]
       shadow-[0_2px_4px_rgba(0,0,0,0.55)]
       hover:scale-105 hover:shadow-[0_4px_10px_rgba(0,0,0,0.45)] transition-all duration-300 ease-in-out"
      onClick={handleWhatsAppClick}
    >
      Register Now
    </button>
    
    {/* Right Side - Leaderboard Link */}
    <Link
      to="/leaderboard"
      className="uppercase text-[#1C1C1C] font-quattrocentoSans font-bold tracking-[0.1em]
       [font-size:clamp(0.65rem,2.5vw,1rem)]"
    >
      Leaderboard
    </Link>
  </div>

  {/* Main Content Container */}
  <div className="flex flex-col w-full grow justify-between md:justify-around gap-12 sm:gap-16 md:gap-20 lg:gap-24 md:flex-row max-w-[1700px] mx-auto relative pt-4 pb-16 md:py-16">
    <div className="relative flex flex-col justify-center items-center md:items-start p-8 md:pl-10 md:p-0 xl:ml-20 z-10">
      <h1
        className="font-quattrocento text-5xl md:text-6xl md:text-[37px] lg:text-[55px] xl:text-8xl max-w-2xl font-bold mb-4 mt-4 text-[#201E15] text-center md:text-left xl:text-[80px]"
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
  
  {/* Decorative Green Element */}
  {/* <img
    src={code_of_conduct_greenleft}
    alt="Green left element"
    className="hidden md:block absolute md:-bottom-20 left-0 w-[270px] lg:w-[400px] lg:-bottom-24 object-contain pointer-events-none"
  /> */}
    
  {/* Mobile decorative element - only visible on mobile */}

</section>
<div className="top-0">
<img
    src={tr_dec_mobile}
    alt="Mobile decorative element"
    className="absolute  left-0 w-[180px] object-contain pointer-events-none md:hidden"
  />
  </div>
<section className="flex flex-col items-center justify-center  mt-20 md:mt-20 xl:mt-24 relative mb-6 sm:mb-0">
          <div className="flex justify-between items-center text-[#014D4E] bg-[#014D4E0D] w-[85%] p-7 rounded-md">
            <div className="flex flex-col">
              <h2 className="lg:text-5xl md:4xl text-[1.8rem]  font-bold uppercase font-quattrocento">
              TOURNAMENT RULES
              </h2>
              <Link to="/tournament-rules"><p className="lg:text-lg md:3xl tect-[1.5rem]  underline underline-offset-4">
                Please refer to the
                <strong> GolfMeet Tournament Rules </strong> here
              </p></Link>
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