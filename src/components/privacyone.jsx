import React from "react";
import { Link } from "react-router-dom";
import tr_bg from "../assets/tournament-rule/right-bg.svg";
import pr_m from "../assets/right-privacy.svg";
function Policy() {
  return (
    <div className="md:overflow-visible overflow-hidden">
      <section
  className="sm:bg-gray-100 sm:noise-bg noise-bg h-[85vh] relative flex flex-col md:min-h-[70vh] lg:min-h-[78vh] md:flex-row tr-bg-m overflow-hidden"
>
    <div className="lg:absolute z-50 min-h-20 top-0 w-full flex justify-between items-center 
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
  <div className="flex flex-col w-full h-full justify-between md:justify-around gap-12 sm:gap-16 md:gap-20 lg:gap-24 md:flex-row max-w-[1700px] mx-auto relative">
    {/* Text Section */}
    <div className="relative flex flex-col justify-center items-start p-8 md:pl-10 md:p-0 xl:ml-20 md:-mt-8 min-w-[300px] z-10">
      <h1 className="font-quattrocento font-bold text-5xl sm:text-5xl lg:text-[76px] leading-[100%] tracking-[0.025em] text-[#201E15] mb-4">
        PRIVACY <br /> POLICY
      </h1>
    </div>
  </div>

  {/* Desktop image container - fills full right side */}
  <div className="absolute bottom-0 right-0 hidden md:block" style={{ marginRight: "0px" }}>
    <img
      src={tr_bg}
      alt="Golfers Illustration"
      className="h-auto object-contain pointer-events-none"
    />
  </div>
  
  {/* Mobile image container - full width with right alignment */}
  <div className="absolute bottom-0 right-0 md:hidden" style={{ marginRight: "0px" }}>
  <img
    src={pr_m}
    alt="Golfers Illustration Mobile"
    className="w-[87%] ml-auto object-contain pointer-events-none"
  />
</div>
</section>
<section className="flex flex-col items-center justify-center  mt-20 md:mt-20 xl:mt-24 relative mb-6 sm:mb-0">
          <div className="flex justify-between items-center text-[#014D4E] bg-[#014D4E0D] w-[85%] p-7 rounded-md">
            <div className="flex flex-col">
              <h2 className="lg:text-5xl md:4xl text-[1.8rem]  font-bold uppercase font-quattrocento">
              TERMS OF USE
              </h2>
              <Link to="/terms-of-use"><p className="lg:text-lg md:3xl tect-[1.5rem]  underline underline-offset-4">
                Please refer to the
                <strong> Terms of Use </strong> here
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

export default Policy;