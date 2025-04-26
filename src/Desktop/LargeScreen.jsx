import React from "react";
import bottomGraphic from "./bottom-graphic.png";
import golfmeet_qr_code from "./golfmeet_qr_code.png";
import phoneimg from "./phone-img.png";
import Navbar from "../components/Navbar";

function LargeScreen() {
  return (
    <div className="noise-bg h-screen w-full relative overflow-hidden">
      <Navbar/>
      {/* Main content container */}
      <div 
        style={{ mixBlendMode: 'darken' }} 
        className="relative flex justify-center items-center mx-auto h-full z-20"
      >
        <div className="max-w-screen-xl w-full flex flex-wrap justify-center md:justify-between items-center px-4 sm:px-6 lg:px-8">
          {/* Phone image now positioned left on desktop */}
          <div className="md:order-1 md:flex-shrink-0 mb-12 md:-mb-16">
            <img 
              src={phoneimg} 
              className="w-[200px] sm:w-[190px] md:w-[200px] lg:w-[230px] xl:w-[240px] 2xl:w-[270px] h-auto" 
              alt="phoneimg" 
            />
          </div>

          {/* Text and QR code now positioned right on desktop */}
          <div className="md:order-2 flex flex-col justify-center items-center md:items-start gap-6 md:gap-8 lg:gap-10 md:ml-4">
            <h2 className="font-quattrocentoSans font-bold text-center md:text-left text-3xl sm:text-4xl md:text-[40px] lg:text-[44px] xl:text-[48px] leading-[110%] text-[#014D4E]">
              golfmeet.com is <br /> best experienced on <br /> your mobile phone.
            </h2>
            <img
              src={golfmeet_qr_code}
              className="w-24 sm:w-28 md:w-32 lg:w-36 xl:w-40 md:ml-2"
              alt="golfmeet_qr_code"
            />
          </div>
        </div>
      </div>

      {/* Bottom graphic with height control */}
      <img
        src={bottomGraphic}
        className="absolute w-full h-[50%] bottom-0 z-10"
        alt="bottomGraphic"
      />
    </div>
  );
}

export default LargeScreen;