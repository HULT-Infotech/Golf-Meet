import React from "react";
import bgI from "../assets/howbgd.svg";

const HowItWorksSection = () => {
  return (
    <section className="relative pt-16 -mt-16 z-30 overflow-visible">
      {/* Background image as a separate element */}
      <img
        src={bgI}
        alt="Golf course background"
        className="absolute top-0 left-0 w-full h-auto z-0"
        style={{
          objectFit: "contain",
          objectPosition: "center top"
        }}
      />
      
      {/* Content positioned on top of the image */}
      <div className="relative z-10 container mx-auto" style={{ pointerEvents: "none" }}>
        {/* Main heading */}
        <h1
          className="text-[64px] px-10 lg:mt-8 font-quattrocento font-bold md:text-[64px] leading-[70.91px] tracking-[0.025em] text-center text-[#014D4E] md:text-5xl mb-10 lg:mb-0"
          style={{ textShadow: "0px 0px 6px #F4D4555C", pointerEvents: "auto" }}
        >
          HOW IT WORKS
        </h1>
        
        {/* Steps container */}
        <div className="flex flex-col gap-10 mt-32 items-center justify-center sm:flex-wrap sm:flex-row sm:gap-10 xl:flex-nowrap lg:gap-10">
          {/* Step 1 */}
          <div className="flex relative items-start space-x-4 lg:-mt-52" style={{ pointerEvents: "auto" }}>
            <span className="w-8 h-10 rounded-full bg-[#014D4E] text-white flex items-center justify-center text-lg font-semibold">
              1
            </span>
            <div>
              <h3 className="text-gray-500 text-sm font-medium">Register via Whatsapp</h3>
              <h2 className="text-2xl font-bold font-quattrocento text-gray-900">
                Get Verified
              </h2>
              <p className="text-gray-700 text-sm w-64">
                All applicants are vetted to ensure a safe community of verified players
              </p>
            </div>
          </div>
          
          {/* Step 2 */}
          <div className="flex items-start space-x-4 lg:mt-16" style={{ pointerEvents: "auto" }}>
            <span className="w-8 h-10 rounded-full bg-[#014D4E] text-white flex items-center justify-center text-lg font-semibold">
              2
            </span>
            <div>
              <h3 className="text-gray-500 text-sm font-medium">Store preferences</h3>
              <h2 className="text-2xl font-bold font-quattrocento text-gray-900">
                Choose Courses & Dates
              </h2>
              <p className="text-gray-700 text-sm w-60">
                Get ideal matches you with other players during similar times
              </p>
            </div>
          </div>
          
          {/* Step 3 */}
          <div className="flex items-start space-x-4 lg:-mt-52" style={{ pointerEvents: "auto" }}>
            <span className="w-8 h-10 rounded-full bg-[#014D4E] text-white flex items-center justify-center text-lg font-semibold">
              3
            </span>
            <div>
              <h3 className="text-gray-500 text-sm font-medium">Play</h3>
              <h2 className="text-2xl font-bold font-quattrocento text-gray-900">
                Submit Scores
              </h2>
              <p className="text-gray-700 text-sm w-64">
                Book your tee time directly with the golf course, and submit your counterpart's scores
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;