import React from "react";
import landingRightImg from "../assets/landing_right_img.svg";
import landingLeftImg from "../assets/landing_left_img.svg";
import indiaFlag from "../assets/india_flag.png";

import Illustration_Golfers_Mobile from "../assets/Illustration_Golfers_Mobile.svg";

function LandingPage() {
  return (
    <section className="min-h-screen p-2 text-center">
      <div className="relative flex flex-col min-h-[60vh] bg-gray-50 noise-bg">
        <style>
          {`
          .noise-bg {
            background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='200' height='200' filter='url(%23noiseFilter)' opacity='0.1'/%3E%3C/svg%3E");
            background-repeat: repeat;
          }
        `}
        </style>
        {/* Top Navbar */}
        <div className="lg:absolute top-0 w-full flex justify-between items-center px-5 lg:px-10 py-5 flex-col-reverse md:flex-row">
          <div className="flex gap-5 mt-4 md:mt-0 w-full lg:w-auto">
            <button className="text-sm lg:text-base bg-red-600 font-quattrocento text-white px-2 py-1 md:px-5 md:py-2 rounded shadow-md hover:bg-red-700 transition drop-shadow-2xl">
              REGISTER NOW
            </button>
            <a href="#" className="text-sm md:text-base text-black font-poppins text-center my-auto font-medium">
              HOW TO PLAY
            </a>
            <a href="#" className="text-sm md:text-base text-black font-poppins  my-auto font-medium">
              PAY FEES
            </a>
          </div>
          <div className="flex items-center w-full md:w-auto justify-between gap-2">
            <div className="flex items-center gap-1">
              <img src={indiaFlag} alt="India Flag" className="w-6 h-5" />
              <span className="font-quattrocento font-semibold text-sm">
                En
              </span>
            </div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 -960 960 960"
              width="24px"
              fill="#5f6368"
            >
              <path d="M480-360 280-560h400L480-360Z" />
            </svg>
          </div>
        </div>

        {/*//! Hero Section Laptops */}
        <div className="hidden relative  lg:max-w-5xl  xl:max-w-7xl mx-auto  min-h-[60vh] lg:flex flex-col w-full items-center">
          <div className="absolute left-0 -bottom-2">
            <img
              src={landingLeftImg}
              alt="Golf Illustration Left"
              className="w-full lg:w-[350px]  xl:w-[460px] "
              draggable="false"
            />
          </div>
          <div className="absolute right-2 -bottom-2">
            <img
              src={landingRightImg}
              alt="Golf Illustration Right"
              className="w-full lg:w-[380px]  xl:w-[500px] "
              draggable="false"
            />
          </div>

          {/* Center Logo */}
          <div className="absolute lg:-bottom-14 xl:-bottom-16">
            <img
              src="favicons/favicon.svg"
              alt="Golfmeet Logo"
              className="w-48 object-contain lg:w-[380px]  xl:w-[500px] drop-shadow-2xl"
              draggable="false"
            />
          </div>
        </div>

        {/*//! Design Mobile */}
        <div className="relative flex flex-col lg:hidden items-center">
          <img
            src="favicons/favicon.svg"
            alt="Golfmeet Logo"
            className="w-10/12 sm:w-3/6   object-contain drop-shadow-2xl"
            draggable="false"
          />

          <img
            src={Illustration_Golfers_Mobile}
            alt="Golf Illustration"
            className="w-10/12 sm:w-3/6  "
            draggable="false"
          />
        </div>
      </div>
      {/* Title */}
      <h1 className="text-3xl sm:text-4xl mt-5 font-quattrocento md:text-6xl xl:text-7xl font-bold lg:mt-16 xl:mt-20">
        GOLF MEET INDIA 2025
      </h1>
      <p className="text-gray-600 text-lg mt-2">
        The year-long amateur golf tournament
      </p>
      <p className="text-gray-500 text-sm">JANUARY 2025 - DECEMBER 2025</p>

      {/* Register Button */}
      <button className=" mt-5 group/button relative inline-flex items-center justify-center overflow-hidden rounded-md bg-gray-800 backdrop-blur-lg px-6 py-2 text-base font-semibold text-white transition-all duration-300 ease-in-out hover:scale-110 hover:shadow-xl hover:shadow-gray-600/50 border border-white/20">
        <span className="text-lg font-quattrocento"> REGISTRATION OPEN</span>
        <div className="absolute inset-0 flex h-full w-full justify-center [transform:skew(-13deg)_translateX(-100%)] group-hover/button:duration-1000 group-hover/button:[transform:skew(-13deg)_translateX(100%)]">
          <div className="relative h-full w-10 bg-white/20"></div>
        </div>
      </button>
    </section>
  );
}

export default LandingPage;
