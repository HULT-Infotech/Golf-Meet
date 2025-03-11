import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import indiaFlag from "../assets/india_flag.png";
import centralLogo from "/favicons/favicon.svg";

const Navbar = () => {
  const [visible, setVisible] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
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

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      {/* Mobile navbar styled to match the image */}
      <nav
        ref={navbarRef}
        className="bg-white shadow-md py-3 px-4 flex items-center justify-between w-full sticky top-0 z-50 md:hidden"
        style={{ opacity: visible ? 1 : 0, transition: "opacity 0.3s ease-in-out" }}
      >
        {/* Register button on the left */}
        <button
            className="text-sm lg:text-base bg-gradient-to-b from-[#E5181A] via-[#CB1517] to-[#B21214] text-white px-2 py-1 md:px-5 md:py-2 rounded transition-all duration-300 ease-in-out shadow-[0px_2px_4px_0px_rgba(0,0,0,0.55)] 
            hover:from-[#E5181A] hover:via-[#E51719] hover:to-[#CC1517] hover:scale-110 hover:shadow-[0px_2px_10px_0px_rgba(0,0,0,0.45)]"
          >
            <span className="font-quattrocento text-[#FFF7D9]">REGISTER</span>
          </button>
        
        {/* Logo centered on mobile */}
        <Link to="/" className="flex-1 flex justify-center items-center">
          <img src={centralLogo} alt="Central Logo" className="w-16 h-16" />
        </Link>
        
        {/* Hamburger Menu Button on the right */}
        <button
          onClick={toggleMenu}
          className="text-gray-800 focus:outline-none"
          aria-label="Toggle menu"
        >
          <svg 
            className="w-6 h-6" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24" 
            xmlns="http://www.w3.org/2000/svg"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d={menuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} 
            />
          </svg>
        </button>
      </nav>

      {/* Desktop navbar - keeping as is */}
      <nav
      ref={navbarRef}
        className="bg-gray-200 noise-bg shadow-lg py-5 px-5 lg:px-10 hidden md:flex flex-col-reverse sm:flex-row items-center justify-between w-full sticky top-0 z-50"
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
        <Link
          to="/"
          className="hidden md:block absolute left-1/2 md:left-2/4 transform -translate-x-1/2 top-2 md:top-2"
        >
          <img src={centralLogo} alt="Central Logo" className="w-16 md:w-24" />
        </Link>

        {/* Right Section - Language Selector */}
        <div className="flex items-center w-full md:w-auto justify-end gap-2">
          <div className="flex items-center gap-1 mr-10 md:mr-0">
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



      {/* Mobile Menu Sidebar that slides from right to left */}
      <div 
        className={`fixed top-0 right-0 h-full bg-white z-50 shadow-lg w-64 transform transition-transform duration-300 ease-in-out ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="p-5">
          <div className="flex justify-end mb-8">
            <button
              onClick={toggleMenu}
              className="text-gray-800 focus:outline-none"
              aria-label="Close menu"
            >
              <svg 
                className="w-6 h-6" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24" 
                xmlns="http://www.w3.org/2000/svg"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M6 18L18 6M6 6l12 12" 
                />
              </svg>
            </button>
          </div>

          <div className="flex flex-col gap-3">
            <button
              className="text-sm bg-gradient-to-b from-[#E5181A] via-[#CB1517] to-[#B21214] text-white px-4 py-2 rounded transition-all duration-300 ease-in-out shadow-[0px_2px_4px_0px_rgba(0,0,0,0.55)] w-full text-center"
            >
              <span className="font-quattrocento text-[#FFF7D9]">REGISTER</span>
            </button>

            <Link
              to="/home-to-play"
              className="text-base text-[#201E15] font-quattrocentoSans font-bold py-2 border-b border-gray-300"
              onClick={toggleMenu}
            >
              HOW TO PLAY
            </Link>
            <a
              href="#"
              className="text-base text-[#201E15] font-quattrocentoSans font-bold py-3 border-b border-gray-300"
              onClick={toggleMenu}
            >
              PAY FEES
            </a>
            <a
              href="#"
              className="text-base text-[#201E15] font-quattrocentoSans font-bold py-3 border-b border-gray-300"
              onClick={toggleMenu}
            >
              FREQUENTLY ASKED QUESTIONS
            </a>
            <a
              href="#"
              className="text-base text-[#201E15] font-quattrocentoSans font-bold py-3 border-b border-gray-300"
              onClick={toggleMenu}
            >
              TOURNAMENT RULES
            </a>
            <a
              href="#"
              className="text-base text-[#201E15] font-quattrocentoSans font-bold py-3 border-b border-gray-300"
              onClick={toggleMenu}
            >
              PLAYER CODE OF CONDUCT
            </a>
            <a
              href="#"
              className="text-base text-[#201E15] font-quattrocentoSans font-bold py-3 border-b border-gray-300"
              onClick={toggleMenu}
            >
              PLAYER SUPPORT
            </a>
            <a
              href="#"
              className="text-base text-[#201E15] font-quattrocentoSans font-bold py-3 border-b border-gray-300"
              onClick={toggleMenu}
            >
              AFFILIATE LOGIN
            </a>
            <a
              href="#"
              className="text-base text-[#201E15] font-quattrocentoSans font-bold py-3 border-b border-gray-300"
              onClick={toggleMenu}
            >
              TERMS OF USE
            </a>
            <a
              href="#"
              className="text-base text-[#201E15] font-quattrocentoSans font-bold py-3 border-b border-gray-300"
              onClick={toggleMenu}
            >
              PRIVACY POLICY
            </a>
            <a
              href="#"
              className="text-base text-[#201E15] font-quattrocentoSans font-bold py-3 border-b border-gray-300"
              onClick={toggleMenu}
            >
              SITE MAP
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;