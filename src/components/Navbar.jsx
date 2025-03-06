import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import indiaFlag from "../assets/india_flag.png";
import centralLogo from "/favicons/favicon.svg";

const Navbar = () => {
  const [visible, setVisible] = useState(false);
  const navbarRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (navbarRef.current) {
        const rect = navbarRef.current.getBoundingClientRect();
        // When the navbar's top reaches the viewport top, show its content.
        if (rect.top <= 0) {
          setVisible(true);
        } else {
          setVisible(false);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    // Call once to set the initial state.
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      ref={navbarRef}
      className="bg-gray-200 noise-bg shadow-lg py-5 px-5 lg:px-10 flex flex-col-reverse sm:flex-row items-center justify-between w-full sticky top-0 z-50"
      style={{ opacity: visible ? 1 : 0, transition: "opacity 0.3s ease-in-out" }}
    >
      {/* Left Section - Buttons */}
      <div className="flex gap-10 mt-4 md:mt-0 w-full lg:w-auto items-center">
        <button
          className="text-sm lg:text-base bg-gradient-to-b from-[#E5181A] via-[#CB1517] to-[#B21214] text-white px-2 py-1 md:px-5 md:py-2 rounded transition-all duration-300 ease-in-out shadow-[0px_2px_4px_0px_rgba(0,0,0,0.55)] 
          hover:from-[#E5181A] hover:via-[#E51719] hover:to-[#CC1517] hover:scale-110 hover:shadow-[0px_2px_10px_0px_rgba(0,0,0,0.45)]"
        >
          <span className="font-quattrocento text-[#FFF7D9]">REGISTER NOW</span>
        </button>

        <Link
          to="/home-to-play"
          className="text-base leading-4 text-[#201E15] font-quattrocentoSans font-bold text-center my-auto"
        >
          HOW TO PLAY
        </Link>
        <a
          href="#"
          className="text-base leading-4 text-[#201E15] font-quattrocentoSans my-auto font-bold"
        >
          PAY FEES
        </a>
      </div>

      {/* Center Section - Logo */}
      <div className="hidden md:block absolute left-2/3 md:left-2/4 transform -translate-x-1/2 top-2 md:top-2">
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
