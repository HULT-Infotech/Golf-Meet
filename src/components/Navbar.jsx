import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import indiaFlag from "../assets/india_flag.png";
import centralLogo from "/favicons/favicon.svg";

const Navbar = ({ triggerRef }) => {
  const [visible, setVisible] = useState(!triggerRef);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    if (!triggerRef?.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setVisible(!entry.isIntersecting);
      },
      { threshold: 0 }
    );

    observer.observe(triggerRef.current);
    return () => observer.disconnect();
  }, [triggerRef]);

  useEffect(() => {
    document.body.style.overflow = sidebarOpen ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [sidebarOpen]);

  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape" && sidebarOpen) {
        setSidebarOpen(false);
      }
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [sidebarOpen]);

  const handleWhatsAppClick = () => {
    const phoneNumber = "918884844444";
    window.open(`https://wa.me/${phoneNumber}`, "_blank");
  };

  return (
    <>
      <nav
        className={`bg-gray-200 noise-bg-n shadow-lg mb-10 py-5 px-5 lg:px-10 flex items-center justify-between w-full fixed top-0 z-50 transition-opacity duration-500 ease-in-out ${
          visible ? "opacity-100" : "opacity-0"
        }`}
        style={{
          transform: "translateZ(0)",
          WebkitTransform: "translateZ(0)",
          willChange: "opacity, transform",
        }}
      >
        {/* Mobile Layout */}
        <div className="relative flex items-center justify-between w-full md:hidden [padding-left:clamp(0.1rem,2vw,0.75rem)] [padding-right:clamp(0.1rem,2vw,0.75rem)] py-3">
          <button className="z-10 text-xs sm:text-sm bg-gradient-to-b from-[#E5181A] via-[#CB1517] to-[#B21214] text-white px-3 sm:px-4 py-1.5 sm:py-2 rounded shadow-[0px_2px_4px_0px_rgba(0,0,0,0.55)]">
            <span className="font-quattrocento text-[#FFF7D9]" onClick={handleWhatsAppClick}>
              REGISTER
            </span>
          </button>
          <div className="absolute left-1/2 transform -translate-x-1/2">
            <Link to="/">
              <img
                src={centralLogo}
                alt="Central Logo"
                style={{ width: "clamp(64px, 21vw, 118px)" }}
                className="h-auto"
              />
            </Link>
          </div>
          <button onClick={() => setSidebarOpen(true)} className="z-10 text-gray-800 focus:outline-none">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Desktop Layout */}
        <div className="hidden md:flex gap-3 lg:gap-10 mt-4 md:mt-0 w-full lg:w-auto items-center">
          <button className="text-xs lg:text-base bg-gradient-to-b from-[#E5181A] via-[#CB1517] to-[#B21214] text-white px-1 py-1 md:px-3 lg:px-5 md:py-2 rounded transition-all duration-300 ease-in-out shadow-[0px_2px_4px_0px_rgba(0,0,0,0.55)] hover:from-[#E5181A] hover:via-[#E51719] hover:to-[#CC1517] hover:scale-110 hover:shadow-[0px_2px_10px_0px_rgba(0,0,0,0.45)]">
            <span className="font-quattrocento text-[#FFF7D9]" onClick={handleWhatsAppClick}>
              REGISTER NOW
            </span>
          </button>
          <Link to="/home-to-play" className="text-sm lg:text-base leading-4 text-[#201E15] font-quattrocentoSans font-bold text-center my-auto">
            HOW TO PLAY
          </Link>
          <a href="#" className="text-sm lg:text-base leading-4 text-[#201E15] font-quattrocentoSans my-auto font-bold">
            PAY FEES
          </a>
        </div>

        <Link to="/" className="hidden md:block absolute left-1/2 transform -translate-x-1/2 -bottom-3">
          <img src={centralLogo} alt="Central Logo" className="w-12 md:w-16 lg:w-24" />
        </Link>

        <div className="hidden md:flex items-center w-full md:w-auto justify-end gap-2">
          <div className="flex items-center gap-1">
            <img src={indiaFlag} alt="India Flag" className="w-5 lg:w-6 h-4 lg:h-5" />
            <span className="font-quattrocento font-semibold text-xs lg:text-sm">En</span>
          </div>
          <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px" fill="#5f6368" className="w-5 h-5 lg:w-6 lg:h-6">
            <path d="M480-360 280-560h400L480-360Z" />
          </svg>
        </div>
      </nav>

      {/* Enhanced Sidebar Animation - Only the slide motion is improved */}
      <AnimatePresence>
        {sidebarOpen && (
          <>
            <motion.div
              className="fixed inset-0 bg-gray-900 bg-opacity-60 z-50"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={() => setSidebarOpen(false)}
              style={{
                backdropFilter: "blur(4px)",
                WebkitBackdropFilter: "blur(4px)",
              }}
            />
            <motion.div
              className="fixed top-0 right-0 h-full w-[85%] py-28 bg-gray-100 noise-bg-n z-50 overflow-y-auto"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ 
                type: "spring", 
                stiffness: 450, 
                damping: 40,
                mass: 1.2,
                velocity: 15
              }}
              style={{ 
                boxShadow: "-5px 0 25px rgba(0,0,0,0.2)",
                willChange: "transform" 
              }}
            >
              <div className="relative">
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
                  <Link to="/" onClick={() => setSidebarOpen(false)}>
                    <img src={centralLogo} alt="Gold Coin" className="w-56 h-56" />
                  </Link>
                </div>
              </div>

              <div className="px-4 mt-32">
                <Link to="/register" className="block">
                  <button
                    className="w-full text-center bg-gradient-to-b from-[#E5181A] via-[#CB1517] to-[#B21214] text-white py-3 rounded font-quattrocento text-lg uppercase shadow-xl"
                    onClick={handleWhatsAppClick}
                  >
                    REGISTER NOW
                  </button>
                </Link>
              </div>

              <div className="flex flex-col p-4 mt-4">
                <Link to="/leaderboard" className="text-gray-800 pl-6 font-bold py-6 text-left border-t border-b border-gray-300 hover:bg-gray-200">LEADERBOARD</Link>
                <Link to="/faq" className="text-gray-800 font-bold py-6 pl-6 text-left hover:bg-gray-200">FREQUENTLY ASKED QUESTIONS</Link>
                <Link to="/tournament-rules" className="text-gray-800 font-bold py-6 pl-6 text-left hover:bg-gray-200">TOURNAMENT RULES</Link>
                <Link to="/code-of-conduct" className="text-gray-800 font-bold py-6 pl-6 text-left hover:bg-gray-200">PLAYER CODE OF CONDUCT</Link>
                <Link to="/support" className="text-gray-800 font-bold py-6 pl-6 text-left border-b border-gray-300 hover:bg-gray-200">PLAYER SUPPORT</Link>
                <Link to="/terms-of-use" className="text-gray-800 font-bold py-6 pl-6 text-left hover:bg-gray-200">TERMS OF USE</Link>
                <Link to="/privacy-policy" className="text-gray-800 font-bold pl-6 py-6 text-left hover:bg-gray-200">PRIVACY POLICY</Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;