import React from "react";
import Illustration_Greens_mobile from "../assets/how.webp";
import bgI from "../assets/finallll.png";

const HowItWorksSection = () => {
  return (
    <>
    <section className="relative bg-white text-black pt-16 md:hidden ">
      {/* Steps */}
      <div className="relative overflow-hidden" style={{ 
  background: "linear-gradient(0deg, #ACF4FF 0%, #FFFFFF 100%)", 
  position: "relative"
}}>
  <div className="absolute top-0 left-0 right-0 h-40 w-full" style={{
    background: "radial-gradient(50% 50% at 50% 0%, #FFFFFF 0%, transparent 100%)"
  }}></div>

  {/* Add the white gradient at the bottom */}
  <div className="absolute bottom-0 left-0 noise-bg-n bg-gray-100 right-0 w-full" style={{
    height: "4%", 
  }}></div>

        <div className="pt-[20px] pb-0 relative">
          <h1
            className="text-[59px] xsm:text-[3rem] px-10 lg:mt-10 font-quattrocento font-bold md:text-[64px] leading-[70.91px] tracking-[0.025em] text-center text-[#014D4E] md:text-5xl mb-10 lg:mb-0"
            style={{
              background: 'linear-gradient(180deg, rgba(255, 180, 30, 0.9) 0%, #014D4E 29%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              textFillColor: 'transparent',
              textShadow: '0px 0px 1px rgba(0, 0, 0, 0.15)',
              filter: 'drop-shadow(0px 0.5px 0.5px rgba(0, 0, 0, 0.2))',}}
          >
            HOW IT WORKS
          </h1>
          
          <div className="flex flex-col gap-10 items-center justify-center sm:flex-wrap sm:flex-row sm:gap-10 xl:flex-nowrap lg:gap-10 relative z-20">
            {/*  Step 1 */}
            <div className="flex items-start space-x-4 lg:-mt-60">
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
            
            {/*  Step 2 */}
            <div className="flex items-start space-x-4 lg:mt-32b">
              <span className="w-8 h-10 rounded-full bg-[#014D4E] text-white flex items-center justify-center text-lg font-semibold">
                2
              </span>
              <div>
                <h3 className="text-gray-500 text-sm font-medium">
                Share preferences
                </h3>
                <h2 className="text-2xl font-bold font-quattrocento text-gray-900">
                Choose Courses & Dates
                </h2>
                <p className="text-gray-700 text-sm w-60">
                Golf Meet matches you with other players sharing similar preferences
                </p>
              </div>
            </div>
            
            {/*  Step 3 */}
            <div className="flex items-start space-x-4 lg:mt-96">
              <span className="w-8 h-10 rounded-full bg-[#014D4E] text-white flex items-center justify-center text-lg font-semibold">
                3
              </span>
              <div>
                <h3 className="text-gray-500 text-sm font-medium">
                  Play
                </h3>
                <h2 className="text-2xl font-bold font-quattrocento text-gray-900">
                Submit Scores
                </h2>
                <p className="text-gray-700 text-sm w-64">
                Book your tee time directly with the golf course, and submit your counterpart's scores
                </p>
              </div>
            </div>
          </div>

          <div className="relative md:py-0 z-20 mb-4 -my-16 bulge-bottom-image">
            <img
              src={Illustration_Greens_mobile}
              className="w-full relative z-20 md:hidden"
              alt="Illustration Greens mobile"
              style={{ marginBottom: "-2px" }}
            />
            {/* <img
              src={Illustration_Greens_Desktop}
              alt="Illustration_Greens_Desktop"
              draggable="false"
              className="w-full hidden md:block h-80v xl:-mt-4 object-cover z-0"
            /> */}
          </div>
        </div>
      </div>

      {/*  Section 4 */}

    </section> 
    <section className=" hidden md:block relative pt-16 lg:h-screen xhh:h-[40vh] xhhh:h-[85vh]  md: z-30 overflow-visible">
      <div
        className="absolute inset-0 w-full h-full bg-no-repeat bg-top bg-cover"
        style={{
          backgroundImage: `url(${bgI})`
        }}
      ></div>
    
    
          
          {/* Content positioned on top of the image */}
          <div className="relative z-10 container  mx-auto pb-12" style={{ pointerEvents: "none" }}>
            {/* Main heading */}
            <h1           className="text-[64px] xhhh:text-[75px] xhhh:mt-8 px-10 xl:mt-8 lg:mt-1  md:-mt-4 font-quattrocento font-bold md:text-[42px] lg:text-[50px] xl:text-[64px]  leading-[70.91px] tracking-[0.025em] text-center md:text-5xl mb-10 lg:mb-0"           style={{ textShadow: "0px 0px 1px rgba(0, 0, 0, 0.05)", pointerEvents: "auto",background:             "linear-gradient(180deg, rgba(255, 180, 30, 0.9) 0%, #014D4E 50%)",           WebkitBackgroundClip: "text",           WebkitTextFillColor: "transparent",           backgroundClip: "text",           textFillColor: "transparent",           textShadow: "0px 0px 1px rgba(0, 0, 0, 0.05)",           filter: "drop-shadow(0px 0.5px 0.5px rgba(0, 0, 0, 0.1))", }}         >           HOW IT WORKS         </h1>
            
            {/* Steps container */}
            <div className=" md:rounded-sm p pb-5 lg:rounded-none md:p-2 ] lg:p-0 flex flex-col gap-10 md:mt-4 lg:mt-32 items-center justify-center sm:flex-wrap sm:flex-row sm:gap-10 xl:flex-nowrap lg:gap-10">
              {/* Step 1 */}
              <div className="flex relative items-start space-x-4 md:-mt-10 lg:-mt-52 xhhh:-mt-40" style={{ pointerEvents: "auto" }}>
                <span className="lg:w-8 lg:h-10  xhhh:w-10 xhhh:h-12 xhhh:text-xl md:w-6 md:h-8 rounded-full bg-[#014D4E] text-white flex items-center justify-center text-lg font-semibold">
                  1
                </span>
                <div>
                  <h3 className="text-gray-500 text-sm xhhh:text-base  font-medium">Register via Whatsapp</h3>
                  <h2 className="text-2xl xhhh:text-3xl font-bold font-quattrocento text-gray-900">
                    Get Verified
                  </h2>
                  <p className="text-gray-700 xhhh:text-lg text-sm w-64">
                    All applicants are vetted to ensure a safe community of verified players
                  </p>
                </div>
              </div>
              
              {/* Step 2 */}
              <div className="md:bg-[#ffffff27] md:rounded-sm lg:rounded-none md:p-2 lg:bg-[#ffffff00] lg:p-0 flex items-start space-x-4 md:-mt-4 xl:mt-16 lg:mt-4 " style={{ pointerEvents: "auto" }}>
                <span className="lg:w-8 lg:h-10 xhhh:w-10 xhhh:h-12 xhhh:text-xl md:w-6 md:h-8 rounded-full bg-[#014D4E] text-white flex items-center justify-center text-lg font-semibold">
                  2
                </span>
                <div>
                  <h3 className="text-gray-500 text-sm xhhh:text-base font-medium">Store preferences</h3>
                  <h2 className="text-2xl xhhh:text-3xl font-bold font-quattrocento text-gray-900">
                    Choose Courses & Dates
                  </h2>
                  <p className="text-gray-700 xhhh:text-lg text-sm w-60">
                    Get ideal matches you with other players during similar times
                  </p>
                </div>
              </div>
              
              {/* Step 3 */}
              <div className="md:bg-[#ffffff27] md:rounded-sm lg:rounded-none md:p-2 lg:bg-[#ffffff00] lg:p-0   flex items-start space-x-4  lg:-mt-52 xhhh:-mt-40" style={{ pointerEvents: "auto" }}>
                <span className="lg:w-8 lg:h-10 xhhh:w-10 xhhh:h-12 xhhh:text-xl md:w-6 md:h-8 rounded-full bg-[#014D4E] text-white flex items-center justify-center text-lg font-semibold">
                  3
                </span>
                <div>
                  <h3 className="text-gray-500 text-sm xhhh:text-base font-medium">Play</h3>
                  <h2 className="text-2xl xhhh:text-3xl font-bold font-quattrocento text-gray-900">
                    Submit Scores
                  </h2>
                  <p className="text-gray-700 xhhh:text-lg text-sm w-64">
                    Book your tee time directly with the golf course, and submit your counterpart's scores
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        </>
  );
};

export default HowItWorksSection;