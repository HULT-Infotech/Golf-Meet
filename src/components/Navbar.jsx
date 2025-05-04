import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import indiaFlag from "../assets/india_flag.png";
import centralLogo from "/favicons/favicon.svg";

const Navbar = ({ triggerRef }) => {
  const [visible, setVisible] = useState(!triggerRef);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const navigate = useNavigate();

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

  // Handle WhatsApp click for mobile
  const handleWhatsAppClick = (e) => {
    e.stopPropagation();
    const phoneNumber = "918884844444";
    window.open(`https://wa.me/${phoneNumber}`, "_blank");
  };

  // Handle redirect for desktop
  const handleRedirect = (e) => {
    e.stopPropagation();
    navigate('/redirect');
  };

  return (
    <>
      <nav
        className={`bg-gray-200 noise-bg-n rounded-b-3xl shadow-xl mb-10 py-8 px-5 lg:px-10 flex items-center justify-between w-full fixed top-0 z-50 transition-opacity duration-500 ease-in-out ${
          visible ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        style={{
          transform: "translateZ(0)",
          WebkitTransform: "translateZ(0)",
          willChange: "opacity, transform",
        }}
      >
        {/* Mobile Layout */}
        <div className="relative flex items-center justify-between w-full md:hidden [padding-left:clamp(0.1rem,2vw,0.75rem)] [padding-right:clamp(0.1rem,2vw,0.75rem)] py-1">
          <button 
            className="z-10 text-xs sm:text-sm bg-gradient-to-b from-[#E5181A] via-[#CB1517] to-[#B21214] text-white px-3 sm:px-4 py-1.5 sm:py-2 rounded shadow-[0px_2px_4px_0px_rgba(0,0,0,0.55)]"
            onClick={handleWhatsAppClick}
          >
            <span className="font-quattrocento text-[#FFF7D9]">
              SIGN UP
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
          
          {/* Menu button - precisely sized and explicitly separate from other elements */}
          <button 
            onClick={(e) => {
              e.stopPropagation();
              setSidebarOpen(true);
            }} 
            className="z-10 text-gray-800 focus:outline-none w-10 h-10 flex items-center justify-center"
            aria-label="Open menu"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Desktop Layout */}
        <div className="hidden md:flex text-xsm lg:text-sm gap-6 md:gap-8 lg:gap-10 mt-4 md:mt-0 w-full md:w-auto">
          <Link
            to="/redirect"
            className="md:text-xsm bg-gradient-to-b from-[#E5181A] via-[#CB1517] to-[#B21214] text-white px-2 py-1 md:px-4 lg:px-5 md:py-2 rounded transition-all duration-300 ease-in-out shadow-[0px_2px_4px_0px_rgba(0,0,0,0.55)] hover:from-[#E5181A] hover:via-[#E51719] hover:to-[#CC1517] hover:shadow-[0px_2px_10px_0px_rgba(0,0,0,0.45)]"
          >
            <span className="font-bold text-[#FFF7D9]">
              SIGN UP NOW
            </span>
          </Link>
          
          <Link
            to="/leaderboard"
            className="leading-4 text-[#211E16] font-bold text-center my-auto"
          >
            LEADERBOARD
          </Link>
        </div>

        <Link to="/" className="hidden md:block absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 top-1/2">
          <img src={centralLogo} alt="Central Logo" className="w-12 md:w-16 lg:w-24" />
        </Link>

        <div className="hidden md:flex items-center text-xsm lg:text-sm w-full md:w-auto justify-between gap-8">
          <div className="flex items-center gap-1">
            {/* Language dropdown placeholder */}
          </div>
          <Link
            to="/faq"
            className="leading-4 text-[#211E16] font-bold text-center my-auto"
          >
            FAQS
          </Link>
          
          <Link
            to="/redirect"
            className="flex items-center gap-1.5 leading-4 text-[#211E16] my-auto font-bold"
          >
            PLAYER SUPPORT 
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="#211E16" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" clipRule="evenodd" d="M20.4539 3.54523C18.2166 1.30547 15.2127 0.0416158 12.0438 0.0400635C5.4998 0.0400635 0.0869269 5.45296 0.0838222 12.0016C0.0823201 14.1248 0.650029 16.2013 1.73687 18.0248L0 24.0401L6.14574 22.3385C7.8999 23.3279 9.9468 23.8515 12.0376 23.8526H12.0438C18.5862 23.8526 24.0001 18.4387 24.0032 11.8901C24.0048 8.72789 22.691 5.78485 20.4539 3.54523ZM12.0438 21.8602H12.0387C10.1919 21.8591 8.38228 21.3564 6.80696 20.4171L6.45223 20.2092L2.79462 21.2002L3.80347 17.6327L3.57363 17.2644C2.54269 15.6302 1.9966 13.7413 1.99809 11.8021C2.00057 6.5512 6.44692 2.10486 12.049 2.10486C14.6839 2.10615 17.175 3.15511 19.0172 4.9994C20.8594 6.84368 21.9057 9.33741 21.9045 11.9796C21.902 17.2306 17.4552 21.8602 12.0438 21.8602ZM17.4846 14.5354C17.1869 14.3862 15.7074 13.6592 15.4332 13.5603C15.159 13.4614 14.9596 13.4116 14.7606 13.7099C14.5615 14.0081 13.9837 14.6843 13.8089 14.8834C13.634 15.0824 13.4591 15.1078 13.1613 14.9586C12.8636 14.8094 11.8851 14.4921 10.7169 13.447C9.80749 12.6297 9.18985 11.6283 9.01503 11.3301C8.84021 11.0319 8.99638 10.8713 9.1462 10.7228C9.28132 10.5879 9.44564 10.3726 9.59593 10.1977C9.74621 10.0229 9.79598 9.89919 9.89489 9.70011C9.99381 9.50104 9.94376 9.3262 9.86978 9.17697C9.79598 9.02758 9.17992 7.5473 8.93086 6.95076C8.6882 6.36925 8.44188 6.44707 8.2578 6.43901C8.08298 6.43142 7.88376 6.42992 7.68469 6.42992C7.48561 6.42992 7.16072 6.50388 6.88648 6.80209C6.61223 7.10029 5.83545 7.82742 5.83545 9.3077C5.83545 10.788 6.90963 12.2188 7.05976 12.4178C7.20989 12.6169 9.18726 15.6566 12.195 16.9607C12.943 17.2942 13.5294 17.4963 13.9897 17.6479C14.7687 17.8969 15.4753 17.8611 16.0349 17.7843C16.6602 17.699 17.8588 17.0565 18.1078 16.3616C18.3569 15.6667 18.3569 15.0701 18.2829 14.9331C18.209 14.7961 18.0095 14.7215 17.7118 14.5724L17.4846 14.5354Z"/>
            </svg>
          </Link>
        </div>
      </nav>

      {/* Sidebar Animation */}
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
              className="fixed top-0 right-0 h-full rounded-l-xl w-[85%] py-28 bg-gray-100 noise-bg-n z-50 overflow-y-auto"
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

              <div className="px-8 mt-32">
                <button
                  className="w-full text-center xsm:py-2 bg-gradient-to-b from-[#E5181A] via-[#CB1517] to-[#B21214] text-[#FFF7D9] py-3 rounded font-medium font-quattrocento text-xl uppercase shadow-[0px_2px_4px_0px_rgba(0,0,0,0.55)]"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleWhatsAppClick(e);
                    setSidebarOpen(false);
                  }}
                >
                  SIGN UP NOW
                </button>
              </div>

              <div className="flex flex-col p-4 mt-4">
                <Link 
                  to="/leaderboard" 
                  className="text-[#211E16] pl-6 font-bold py-6 text-left border-t border-gray-300 hover:bg-gray-200"
                  onClick={() => setSidebarOpen(false)}
                >
                  LEADERBOARD
                </Link>
                <button 
                  className="text-[#211E16] pl-6 font-bold pb-6 pt-3 text-left border-b border-gray-300 hover:bg-gray-200 flex items-center gap-2"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleWhatsAppClick(e);
                    setSidebarOpen(false);
                  }}
                >
                  PLAYER SUPPORT
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M20.4539 3.54523C18.2166 1.30547 15.2127 0.0416158 12.0438 0.0400635C5.4998 0.0400635 0.0869269 5.45296 0.0838222 12.0016C0.0823201 14.1248 0.650029 16.2013 1.73687 18.0248L0 24.0401L6.14574 22.3385C7.8999 23.3279 9.9468 23.8515 12.0376 23.8526H12.0438C18.5862 23.8526 24.0001 18.4387 24.0032 11.8901C24.0048 8.72789 22.691 5.78485 20.4539 3.54523ZM12.0438 21.8602H12.0387C10.1919 21.8591 8.38228 21.3564 6.80696 20.4171L6.45223 20.2092L2.79462 21.2002L3.80347 17.6327L3.57363 17.2644C2.54269 15.6302 1.9966 13.7413 1.99809 11.8021C2.00057 6.5512 6.44692 2.10486 12.049 2.10486C14.6839 2.10615 17.175 3.15511 19.0172 4.9994C20.8594 6.84368 21.9057 9.33741 21.9045 11.9796C21.902 17.2306 17.4552 21.8602 12.0438 21.8602ZM17.4846 14.5354C17.1869 14.3862 15.7074 13.6592 15.4332 13.5603C15.159 13.4614 14.9596 13.4116 14.7606 13.7099C14.5615 14.0081 13.9837 14.6843 13.8089 14.8834C13.634 15.0824 13.4591 15.1078 13.1613 14.9586C12.8636 14.8094 11.8851 14.4921 10.7169 13.447C9.80749 12.6297 9.18985 11.6283 9.01503 11.3301C8.84021 11.0319 8.99638 10.8713 9.1462 10.7228C9.28132 10.5879 9.44564 10.3726 9.59593 10.1977C9.74621 10.0229 9.79598 9.89919 9.89489 9.70011C9.99381 9.50104 9.94376 9.3262 9.86978 9.17697C9.79598 9.02758 9.17992 7.5473 8.93086 6.95076C8.6882 6.36925 8.44188 6.44707 8.2578 6.43901C8.08298 6.43142 7.88376 6.42992 7.68469 6.42992C7.48561 6.42992 7.16072 6.50388 6.88648 6.80209C6.61223 7.10029 5.83545 7.82742 5.83545 9.3077C5.83545 10.788 6.90963 12.2188 7.05976 12.4178C7.20989 12.6169 9.18726 15.6566 12.195 16.9607C12.943 17.2942 13.5294 17.4963 13.9897 17.6479C14.7687 17.8969 15.4753 17.8611 16.0349 17.7843C16.6602 17.699 17.8588 17.0565 18.1078 16.3616C18.3569 15.6667 18.3569 15.0701 18.2829 14.9331C18.209 14.7961 18.0095 14.7215 17.7118 14.5724L17.4846 14.5354Z"/>
                  </svg>
                </button>
                <Link 
                  to="/faq" 
                  className="text-[#211E16] font-bold py-6 pl-6 text-left hover:bg-gray-200"
                  onClick={() => setSidebarOpen(false)}
                >
                  FREQUENTLY ASKED QUESTIONS
                </Link>
                <Link 
                  to="/rules-regulations" 
                  className="text-[#211E16] font-bold pb-6 pt-3 pl-6 text-left hover:bg-gray-200"
                  onClick={() => setSidebarOpen(false)}
                >
                  RULES & REGULATIONS
                </Link>
                <Link 
                  to="/code-of-conduct" 
                  className="text-[#211E16] font-bold pb-6 pt-3 pl-6 text-left border-b border-gray-300 hover:bg-gray-200"
                  onClick={() => setSidebarOpen(false)}
                >
                  PLAYER CODE OF CONDUCT
                </Link>
                <Link 
                  to="/refund-policy" 
                  className="text-[#211E16] font-bold py-6 pl-6 text-left hover:bg-gray-200"
                  onClick={() => setSidebarOpen(false)}
                >
                  REFUND POLICY
                </Link>
                <Link 
                  to="/terms-of-use" 
                  className="text-[#211E16] font-bold pb-6 pt-3 pl-6 text-left hover:bg-gray-200"
                  onClick={() => setSidebarOpen(false)}
                >
                  TERMS OF USE
                  
                </Link>
                <Link 
                  to="/privacy-policy" 
                  className="text-[#211E16] font-bold pl-6 pb-6 pt-3 text-left hover:bg-gray-200"
                  onClick={() => setSidebarOpen(false)}
                >
                  PRIVACY POLICY
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;