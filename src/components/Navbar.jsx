import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import indiaFlag from "../assets/india_flag.png";
import centralLogo from "/favicons/favicon.svg";

const Navbar = () => {
  const [visible, setVisible] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
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

  // Prevent body scrolling when sidebar is open
  useEffect(() => {
    if (sidebarOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [sidebarOpen]);

  return (
    <>
      <nav
        ref={navbarRef}
        className="bg-gray-200 noise-bg shadow-lg py-5 px-5 lg:px-10 flex items-center justify-between w-full sticky top-0 z-50"
        style={{ opacity: visible ? 1 : 0, transition: "opacity 0.3s ease-in-out" }}
      >
        {/* Mobile Layout */}
        <div className="flex justify-between items-center w-full md:hidden">
          {/* Register Button for Mobile */}
          <button className="text-sm bg-gradient-to-b from-[#E5181A] via-[#CB1517] to-[#B21214] text-white px-4 py-2 rounded transition-all duration-300 ease-in-out shadow-[0px_2px_4px_0px_rgba(0,0,0,0.55)]">
            <span className="font-quattrocento text-[#FFF7D9]">REGISTER</span>
          </button>

          {/* Center Logo */}
          <Link to="/" className="absolute left-1/2 transform -translate-x-1/2 -bottom-3">
            <img src={centralLogo} alt="Central Logo" className="w-20" />
          </Link>

          {/* Hamburger Menu */}
          <button
            onClick={() => setSidebarOpen(true)}
            className="text-gray-800 focus:outline-none"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>

        {/* Desktop Layout */}
        <div className="hidden md:flex gap-10 mt-4 md:mt-0 w-full lg:w-auto items-center">
          <button className="text-sm lg:text-base bg-gradient-to-b from-[#E5181A] via-[#CB1517] to-[#B21214] text-white px-2 py-1 md:px-5 md:py-2 rounded transition-all duration-300 ease-in-out shadow-[0px_2px_4px_0px_rgba(0,0,0,0.55)] hover:from-[#E5181A] hover:via-[#E51719] hover:to-[#CC1517] hover:scale-110 hover:shadow-[0px_2px_10px_0px_rgba(0,0,0,0.45)]">
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

        {/* Center Section - Logo (Desktop) */}
        <Link
          to="/"
          className="hidden md:block absolute left-2/3 md:left-2/4 transform -translate-x-1/2 top-2 md:top-2"
        >
          <img src={centralLogo} alt="Central Logo" className="w-12 md:w-24" />
        </Link>

        {/* Right Section - Language Selector (Desktop) */}
        <div className="hidden md:flex items-center w-full md:w-auto justify-end gap-2">
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

      {/* Mobile Sidebar */}
      <div
        className={`fixed inset-0 bg-gray-900 bg-opacity-50 z-50 transition-opacity duration-300 ${
          sidebarOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setSidebarOpen(false)}
      ></div>

      <div
        className={`fixed top-0 right-0 h-full w-full bg-gray-100 z-50 transform transition-transform duration-300 ease-in-out overflow-y-auto ${
          sidebarOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="p-4 flex justify-between items-center border-b border-gray-200">
          {/* Language Selector */}
          <div className="flex items-center gap-2 p-2 bg-white rounded shadow-sm">
            <img src={indiaFlag} alt="India Flag" className="w-6 h-5" />
            <span className="font-quattrocento font-semibold text-sm">En</span>
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

          {/* Close Button */}
          <button
            onClick={() => setSidebarOpen(false)}
            className="text-gray-800 focus:outline-none"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        {/* Mobile Menu Items */}
        <div className="flex flex-col p-4 space-y-4">
          <h2 className="text-center font-bold text-gray-800 text-lg py-2">HOW TO PLAY</h2>
          
          <Link to="/register" className="w-full">
            <button className="w-full text-center bg-gradient-to-b from-[#E5181A] via-[#CB1517] to-[#B21214] text-white py-3 rounded font-quattrocento text-[#FFF7D9]">
              REGISTER
            </button>
          </Link>
          
          <Link to="/pay-fees" className="text-gray-800 font-bold py-3 border-t border-b border-gray-300">
            PAY FEES
          </Link>
          
          <Link to="/faq" className="text-gray-800 font-bold py-3 border-b border-gray-300">
            FREQUENTLY ASKED QUESTIONS
          </Link>
          
          <Link to="/rules" className="text-gray-800 font-bold py-3 border-b border-gray-300">
            TOURNAMENT RULES
          </Link>
          
          <Link to="/code-of-conduct" className="text-gray-800 font-bold py-3 border-b border-gray-300">
            PLAYER CODE OF CONDUCT
          </Link>
          
          <Link to="/support" className="text-gray-800 font-bold py-3 border-b border-gray-300">
            PLAYER SUPPORT
          </Link>
          
          <Link to="/affiliate-login" className="text-gray-800 font-bold py-3 border-b border-gray-300">
            AFFILIATE LOGIN
          </Link>
          
          <Link to="/terms" className="text-gray-800 font-bold py-3 border-b border-gray-300">
            TERMS OF USE
          </Link>
          
          <Link to="/privacy" className="text-gray-800 font-bold py-3 border-b border-gray-300">
            PRIVACY POLICY
          </Link>
          
          <Link to="/sitemap" className="text-gray-800 font-bold py-3 border-b border-gray-300">
            SITE MAP
          </Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;