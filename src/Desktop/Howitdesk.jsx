import React from "react";
import bgI from "../assets/finallll.png";

const HowItWorksSection = () => {
  return (
<section className="relative pt-16 lg:h-screen xhh:h-[40vh] md:h-[50vh] md: z-30 overflow-visible">
  <div
    className="absolute inset-0 w-full h-full bg-no-repeat bg-top bg-cover"
    style={{
      backgroundImage: `url(${bgI})`
    }}
  ></div>


      
      {/* Content positioned on top of the image */}
      <div className="relative z-10 container mx-auto" style={{ pointerEvents: "none" }}>
        {/* Main heading */}
        <h1           className="text-[64px] px-10 xl:mt-8 lg:mt-1  md:-mt-4 font-quattrocento font-bold md:text-[42px] lg:text-[50px] xl:text-[64px]  leading-[70.91px] tracking-[0.025em] text-center md:text-5xl mb-10 lg:mb-0"           style={{ textShadow: "0px 0px 1px rgba(0, 0, 0, 0.05)", pointerEvents: "auto",background:             "linear-gradient(180deg, rgba(255, 180, 30, 0.9) 0%, #014D4E 50%)",           WebkitBackgroundClip: "text",           WebkitTextFillColor: "transparent",           backgroundClip: "text",           textFillColor: "transparent",           textShadow: "0px 0px 1px rgba(0, 0, 0, 0.05)",           filter: "drop-shadow(0px 0.5px 0.5px rgba(0, 0, 0, 0.1))", }}         >           HOW IT WORKS         </h1>
        
        {/* Steps container */}
        <div className="md:bg-[#ffffff27] md:rounded-sm lg:rounded-none md:p-2 lg:bg-[#ffffff00] lg:p-0 flex flex-col gap-10 md:mt-4 lg:mt-32 items-center justify-center sm:flex-wrap sm:flex-row sm:gap-10 xl:flex-nowrap lg:gap-10">
          {/* Step 1 */}
          <div className="flex relative items-start space-x-4 md:-mt-10 lg:-mt-52" style={{ pointerEvents: "auto" }}>
            <span className="lg:w-8 lg:h-10 md:w-6 md:h-8 rounded-full bg-[#014D4E] text-white flex items-center justify-center text-lg font-semibold">
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
          <div className="md:bg-[#ffffff27] md:rounded-sm lg:rounded-none md:p-2 lg:bg-[#ffffff00] lg:p-0 flex items-start space-x-4 md:-mt-4 xl:mt-16 lg:mt-4 " style={{ pointerEvents: "auto" }}>
            <span className="lg:w-8 lg:h-10 md:w-6 md:h-8 rounded-full bg-[#014D4E] text-white flex items-center justify-center text-lg font-semibold">
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
          <div className="md:bg-[#ffffff27] md:rounded-sm lg:rounded-none md:p-2 lg:bg-[#ffffff00] lg:p-0   flex items-start space-x-4  lg:-mt-52" style={{ pointerEvents: "auto" }}>
            <span className="lg:w-8 lg:h-10 md:w-6 md:h-8 rounded-full bg-[#014D4E] text-white flex items-center justify-center text-lg font-semibold">
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