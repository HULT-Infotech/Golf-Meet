import React from "react";
import { Link } from "react-router-dom";
import indiaFlag from "../assets/india_flag.png";
import centralLogo from "/favicons/favicon.svg"; 

const Navbar = () => {
  return (
    <nav className="bg-gray-200  noise-bg shadow-md py-5 px-5 lg:px-10 flex flex-col-reverse md:flex-row items-center justify-between w-full 
        sticky top-0 z-50">
      
      {/* Left Section - Buttons */}
      <div className="flex gap-5 mt-4 md:mt-0 w-full lg:w-auto items-center">
        <button className="text-sm lg:text-base bg-red-600 font-quattrocento text-white px-3 py-2 md:px-5 md:py-2 rounded shadow-md hover:bg-red-700 transition">
          REGISTER NOW
        </button>
        <Link to="/home-to-play" className="text-sm md:text-base text-black font-poppins text-center font-medium">
          HOW TO PLAY
        </Link>
        <a href="#" className="text-sm md:text-base text-black font-poppins font-medium">
          PAY FEES
        </a>
      </div>

      {/* Center Section - Logo */}
      <div className="absolute left-1/2 transform -translate-x-1/2 top-2 md:top-2">
        <img src={centralLogo} alt="Central Logo" className="w-12 md:w-24" />
      </div>

      {/* Right Section - Language Selector */}
      <div className="flex items-center w-full md:w-auto justify-end gap-2">
        <div className="flex items-center gap-1">
          <img src={indiaFlag} alt="India Flag" className="w-6 h-5" />
          <span className="font-quattrocento font-semibold text-sm">En</span>
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
    </nav>
  );
};

export default Navbar;
