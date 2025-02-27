import React from "react";
import Navbar from "../components/Navbar";

// Images
import howToPlay_bg from "../assets/howToPlay-bg.svg";
import howToPlay_greenleft from "../assets/howToPlay-greenleft.svg";
import howToPlay_greenleft_mobile from "../assets/howToPlay-greenleft-mobile.svg";

const HowToPlay = () => {
  return (
    <>
      <Navbar />
      <section className="bg-gray-100 noise-bg relative flex flex-col md:min-h-[92vh] md:flex-row ">
        <div className="flex flex-col w-full justify-between md:justify-around  gap-24 md:flex-row max-w-[1700px] mx-auto">
          {/* Text Section */}
          <div className="relative flex flex-col justify-center items-start p-8 md:pl-10 md:p-0 xl:ml-20">
            <h1 className="font-quattrocento text-5xl lg:text-6xl xl:text-7xl font-bold mb-4">
              HOW TO PLAY
            </h1>
            <p className="sm:text-lg font-bold text-gray-600 leading-relaxed">
              After you have paid the tournament fees,
              <br className="hidden md:block" />
              log into the GolfMeet mobile app.
            </p>
          </div>

          {/* Right Image Section */}
          <div className="flex items-end px-5 md:px-0">
            <img
              src={howToPlay_bg}
              alt="Golfers Illustration"
              className=" w-full object-contain pointer-events-none"
            />
          </div>
        </div>
        {/* Decorative Green Element */}
        <img
          src={howToPlay_greenleft}
          alt="Green left element"
          className=" hidden md:block absolute md:-bottom-12 left-0 w-[270px] md:w-[400px] lg:w-[550px] lg:-bottom-16 object-contain pointer-events-none"
        />
        <img
          src={howToPlay_greenleft_mobile}
          alt="Green left element"
          className="absolute md:hidden -bottom-20 sm:-bottom-32 left-0 w-[350px] "
        />
      </section>

      <section className=" flex w-full">
        <div className="flex"></div>
        <div>
          <img src="" alt="" />
        </div>
      </section>
    </>
  );
};

export default HowToPlay;
