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
        if (rect.top <= 0) {
          setVisible(true);
        } else {
          setVisible(false);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
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

  // Handle escape key to close sidebar
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === 'Escape' && sidebarOpen) {
        setSidebarOpen(false);
      }
    };

    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
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
          <button className="text-xs sm:text-sm bg-gradient-to-b from-[#E5181A] via-[#CB1517] to-[#B21214] text-white px-3 sm:px-4 py-1.5 sm:py-2 rounded transition-all duration-300 ease-in-out shadow-[0px_2px_4px_0px_rgba(0,0,0,0.55)]">
            <span className="font-quattrocento text-[#FFF7D9]">REGISTER</span>
          </button>

          {/* Center Logo */}
          <Link to="/" className="absolute left-1/2 transform -translate-x-1/2 -bottom-3">
            <img src={centralLogo} alt="Central Logo" className="w-16 sm:w-20" />
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

        {/* Tablet and Desktop Layout */}
        <div className="hidden md:flex gap-3 lg:gap-10 mt-4 md:mt-0 w-full lg:w-auto items-center">
          <button className="text-xs lg:text-base bg-gradient-to-b from-[#E5181A] via-[#CB1517] to-[#B21214] text-white px-1 py-1 md:px-3 lg:px-5 md:py-2 rounded transition-all duration-300 ease-in-out shadow-[0px_2px_4px_0px_rgba(0,0,0,0.55)] hover:from-[#E5181A] hover:via-[#E51719] hover:to-[#CC1517] hover:scale-110 hover:shadow-[0px_2px_10px_0px_rgba(0,0,0,0.45)]">
            <span className="font-quattrocento text-[#FFF7D9]">REGISTER NOW</span>
          </button>

          <Link
            to="/home-to-play"
            className="text-sm lg:text-base leading-4 text-[#201E15] font-quattrocentoSans font-bold text-center my-auto"
          >
            HOW TO PLAY
          </Link>
          <a
            href="#"
            className="text-sm lg:text-base leading-4 text-[#201E15] font-quattrocentoSans my-auto font-bold"
          >
            PAY FEES
          </a>
        </div>

        {/* Center Section - Logo (Tablet and Desktop) */}
        <Link
          to="/"
          className="hidden md:block absolute left-1/2 transform -translate-x-1/2 -bottom-3"
        >
          <img src={centralLogo} alt="Central Logo" className="w-12 md:w-16 lg:w-24" />
        </Link>

        {/* Right Section - Language Selector (Tablet and Desktop) */}
        <div className="hidden md:flex items-center w-full md:w-auto justify-end gap-2">
          <div className="flex items-center gap-1">
            <img src={indiaFlag} alt="India Flag" className="w-5 lg:w-6 h-4 lg:h-5" />
            <span className="font-quattrocento font-semibold text-xs lg:text-sm">En</span>
          </div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="20px"
            viewBox="0 -960 960 960"
            width="20px"
            fill="#5f6368"
            className="w-5 h-5 lg:w-6 lg:h-6"
          >
            <path d="M480-360 280-560h400L480-360Z" />
          </svg>
        </div>
      </nav>

      {/* Mobile Sidebar Overlay with enhanced transition */}
      <div
        className="fixed inset-0 bg-gray-900 bg-opacity-60 z-50"
        style={{
          opacity: sidebarOpen ? 1 : 0,
          visibility: sidebarOpen ? 'visible' : 'hidden',
          transition: "opacity 0.5s cubic-bezier(0.19, 1, 0.22, 1), visibility 0.5s cubic-bezier(0.19, 1, 0.22, 1)",
          backdropFilter: 'blur(3px)',
          WebkitBackdropFilter: 'blur(3px)'
        }}
        onClick={() => setSidebarOpen(false)}
      ></div>

      {/* Enhanced Mobile Sidebar with smooth transition */}
      <div
        className="fixed top-0 right-0 h-full w-[85%] py-28 bg-gray-100 z-50 overflow-y-auto"
        style={{
          boxShadow: '-5px 0 25px rgba(0,0,0,0.2)',
          transform: sidebarOpen ? 'translateX(0)' : 'translateX(100%)',
          transition: 'transform 0.5s cubic-bezier(0.19, 1, 0.22, 1)',
          willChange: 'transform'
        }}
      >
        {/* Sidebar Header with Coin Image - NO ANIMATIONS */}
        <div className="relative">
          {/* Top Coin Image */}
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
            <img 
              src={centralLogo}
              alt="Gold Coin" 
              className="w-56 h-56" 
            />
          </div>
          
          {/* Close Button */}
          <div className="flex justify-end p-4">
            <button
              onClick={() => setSidebarOpen(false)}
              className="text-gray-800 focus:outline-none rounded-full p-2 hover:bg-gray-200"
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
        </div>

        {/* Register Now Button - NO ANIMATION */}
        <div className="px-4 mt-12">
          <Link to="/register" className="block">
            <button className="w-full text-center bg-gradient-to-b from-[#E5181A] via-[#CB1517] to-[#B21214] text-white py-3 rounded font-quattrocento text-lg uppercase">
              REGISTER NOW
            </button>
          </Link>
        </div>

        {/* Menu Items - NO ANIMATIONS */}
        <div className="flex flex-col p-4 mt-4">
          <Link to="/locations" className="text-gray-800 pl-6 font-bold py-6 text-left border-t border-b border-gray-300 hover:bg-gray-200">
            LEADERBOARD
          </Link>
          
          <Link to="/faq" className="text-gray-800 font-bold pt-6 pl-6 text-left hover:bg-gray-200">
            FREQUENTLY ASKED QUESTIONS
          </Link>
          
          <Link to="/rules" className="text-gray-800 font-bold pt-6 pl-6 text-left hover:bg-gray-200">
            TOURNAMENT RULES
          </Link>
          
          <Link to="/code-of-conduct" className="text-gray-800 font-bold pt-6 pl-6 text-left hover:bg-gray-200">
            PLAYER CODE OF CONDUCT
          </Link>
          
          <Link to="/support" className="text-gray-800 font-bold py-6 pl-6 text-left border-b border-gray-300 hover:bg-gray-200">
            PLAYER SUPPORT
          </Link>
          
          <Link to="/terms" className="text-gray-800 font-bold py-6 pl-6 text-left hover:bg-gray-200">
            TERMS OF USE
          </Link>
          
          <Link to="/privacy" className="text-gray-800 font-bold pl-6 text-left hover:bg-gray-200">
            PRIVACY POLICY
          </Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;