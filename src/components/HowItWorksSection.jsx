import React from "react";
import Illustration_Greens_mobile from "../assets/how.webp";

const HowItWorksSection = () => {
  return (
    <section className="relative bg-white text-black pt-16 ">
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
            style={{ textShadow: "0px 0px 6px #F4D4555C" }}
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
  );
};

export default HowItWorksSection;