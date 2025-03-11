import React from "react";
import landingRightImg from "../assets/landing_right_img.svg";
import landingLeftImg from "../assets/landing_left_img.svg";
import indiaFlag from "../assets/india_flag.png";

import Illustration_Golfers_Mobile from "../assets/Illustration_Golfers_Mobile.svg";
import { Link } from "react-router-dom";

function LandingPage() {
  return (
    <section className="min-h-screen text-center mb-10">
      <div className="relative flex flex-col min-h-[70vh] bg-gray-50 noise-bg">
        {/* Top Navbar */}
        <div className="lg:absolute z-50 top-0 w-full flex justify-between items-center px-5 lg:px-10 py-10 flex-col-reverse md:flex-row">
          <div className="flex gap-10 mt-4 md:mt-0 w-full lg:w-auto">
            <button
              className="text-sm lg:text-base bg-gradient-to-b from-[#E5181A] via-[#CB1517] to-[#B21214] text-white px-2 py-1 md:px-5 md:py-2 rounded transition-all duration-300 ease-in-out shadow-[0px_2px_4px_0px_rgba(0,0,0,0.55)] 
  hover:from-[#E5181A] hover:via-[#E51719] hover:to-[#CC1517] hover:scale-110 hover:shadow-[0px_2px_10px_0px_rgba(0,0,0,0.45)]"
            >
              <span className="font-quattrocento text-[#FFF7D9]">
                REGISTER NOW
              </span>
            </button>

            <Link
              to="/home-to-play"
              className="text-base  leading-4 text-[#201E15] font-quattrocentoSans font-bold text-center my-auto "
            >
              HOW TO PLAY
            </Link>
            <a
              href="#"
              className="text-base leading-4  text-[#201E15] font-quattrocentoSans  my-auto font-bold"
            >
              PAY FEES
            </a>
          </div>
          <div className="flex items-center w-full md:w-auto justify-between gap-2">
            <div className="flex items-center gap-1">
              <img src={indiaFlag} alt="India Flag" className="w-6 h-5 mr-1" />
              <span className="font-quattrocento font-bold text-base">En</span>
            </div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 -960 960 960"
              width="24px"
              fill="#201E15"
            >
              <path d="M480-360 280-560h400L480-360Z" />
            </svg>
          </div>
        </div>

        {/*//! Hero Section Laptops */}
        <div className="hidden relative  lg:max-w-5xl  xl:max-w-[85vw] mx-auto  min-h-[70vh] lg:flex flex-col w-full items-center">
          <div className="absolute left-0 -bottom-2">
            <img
              src={landingLeftImg}
              alt="Golf Illustration Left"
              className="w-full lg:w-[350px]  xl:w-[28vw]"
              draggable="false"
            />
          </div>
          <div className="absolute right-2 -bottom-2">
            <img
              src={landingRightImg}
              alt="Golf Illustration Right"
              className="w-full lg:w-[380px]  xl:w-[30vw] "
              draggable="false"
            />
          </div>

          {/* Center Logo */}
          <div className="absolute lg:-bottom-14 xl:-bottom-20">
            <img
              src="favicons/favicon.svg"
              alt="Golfmeet Logo"
              className="w-48 object-contain lg:w-[380px]  xl:w-[35vw] drop-shadow-[0_10px_10px_rgba(0,0,0,0.40)]"
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
            className="w-10/12 sm:w-3/6 mr-5 "
            draggable="false"
          />
        </div>
      </div>
      {/* Title */}
      <h1 className="text-[90px] leading-[90px] tracking-[0.025em] mt-5 text-center w-[350px] md:w-auto mx-auto font-quattrocento md:text-6xl lg:text-7xl xl:text-[94px] md:leading-[106.37px] md:tracking-[0.025em] font-bold lg:mt-16 xl:mt-20">
        GOLF MEET INDIA 2025
      </h1>
      <p className="font-quattrocentoSans w-96 sm:w-auto font-normal text-[24px] leading-[26.59px] tracking-[-0.025em] text-center text-[#201E15] mt-4">
        The year-long amateur golf tournament
      </p>
      <p className="font-quattrocentoSans font-normal mt-1 text-[16px] leading-[17.73px] tracking-[-0.025em] text-center text-[#201E15] p-2">
        JANUARY 2025 - DECEMBER 2025
      </p>
      {/* Register Button */}
      <button className=" my-7  rounded-md bg-gray-800 backdrop-blur-lg px-6 py-2 text-base font-normal bg-gradient-to-b from-[#828282] via-[#333333] to-[#1A1A1A] shadow-[0px_2px_4px_0px_#0000008C] transition-all duration-500 hover:shadow-[0px_4px_10px_0px_#00000073] hover:bg-gradient-to-b hover:from-[#6C6C6C] hover:via-[#2F2F2F] hover:to-[#1A1A1A] ">
        <span className="text-lg text-[#FFF7D9] font-quattrocento">
          REGISTRATION OPEN
        </span>
        {/* <div className="absolute inset-0 flex h-full w-full justify-center [transform:skew(-13deg)_translateX(-100%)] group-hover/button:duration-1000 group-hover/button:[transform:skew(-13deg)_translateX(100%)]">
          <div className="relative h-full w-10 bg-white/20"></div>
        </div> */}
      </button>
    </section>
  );
}

export default LandingPage;
