import React from "react";
import Illustration_Golfers_Mobile from "../assets/land.svg";
import fav from "../assets/favicon.webp";
import { Link } from "react-router-dom";
import landingImg from "../assets/full.svg";
import Illustration_Golfers_Mobiles from "../assets/Illustration_Golfers_Mobile.svg";

function LandingHomePage() {
  // Function to handle the WhatsApp button click
  const handleWhatsAppClick = () => {
    const phoneNumber = "918884844444";
    window.open(`https://wa.me/${phoneNumber}`, "_blank");
  };
  
  return (
    <>
    {/*Smaller Screen Layout */}
    <div className="md:hidden w-full text-center h-auto overflow-hidden">
      {/* First Section with noise background */}
      <div className="relative w-full bg-gray-50 noise-bg-n flex flex-col">
        {/* Top Navbar */}
        <div className="z-50 w-full flex justify-between items-center px-4 py-4">
          {/* Left Side - Register Button */}
          <button
            className="bg-gradient-to-b from-[#E5181A] via-[#CB1517] to-[#B21214]
                      px-4 py-2 rounded-md text-[#FFF7D9] uppercase tracking-[0.1em] font-quattrocento
                    [font-size:clamp(0.65rem,2.5vw,1rem)]
                    shadow-[0_2px_4px_rgba(0,0,0,0.55)]
                      hover:scale-105 hover:shadow-[0_4px_10px_rgba(0,0,0,0.45)] transition-all duration-300 ease-in-out"
            onClick={handleWhatsAppClick}
          >
            SIGN UP NOW
          </button>
          
          {/* Right Side - Leaderboard Link */}
          <Link
            to="/leaderboard"
            className="uppercase text-[#014D4E] font-quattrocentoSans font-bold tracking-[0.1em]
                      [font-size:clamp(0.65rem,2.5vw,1rem)] pointer-events-auto"
          >
            Ranking
          </Link>
        </div>
        
        {/* Main Content Area - Logo with margin-top */}
        <div className="flex flex-col items-center pt-4 px-4 mt-4 mb-12 xsm:mb-4">
          <img
            src="favicons/favicon.svg"
            alt="Golfmeet Logo"
            className="w-full sm:w-3/6 object-contain drop-shadow-2xl"
            draggable="false"
          />
        </div>
        
        {/* Content section with heading and text */}
        <div className="flex flex-col items-center px-4 mt-4 z-40 relative">
          {/* Gradient Heading */}
          <h1 
            className="text-[#014D4E] mt-4 text-5xl xsm:text-4xl xsm:leading-[50px] leading-[60px] font-quattrocento font-bold xsm:mb-3 mb-4"
            style={{
              background: 'linear-gradient(180deg, rgba(255, 180, 30, 0.9) 0%, #014D4E 27%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              textFillColor: 'transparent',
              textShadow: '0px 0px 1px rgba(0, 0, 0, 0.15)',
              filter: 'drop-shadow(0px 0.5px 0.5px rgba(0, 0, 0, 0.2))',
            }}
          >
            WHATS'S <br /> YOUR RANK?
          </h1>
          
          {/* Paragraph */}
          <p className="text-[#014D4E] text-2xl xsm:text-[22px] font-quattrocento mb-8 font-bold">
            AMONG AMATEUR <br /> GOLFERS IN INDIA
          </p>
        </div>
        
        {/* Bottom Image - Positioned absolutely at the bottom */}
        <div className="absolute bottom-0 left-0 right-0 w-full z-30">
          <img
            src={Illustration_Golfers_Mobile}
            alt="Golf Illustration"
            className="w-full object-contain opacity-65"
            draggable="false"
          />
        </div>
      </div>
      
      {/* Second Section - Leaderboard Card */}
      <div className="w-full flex justify-center bg-white relative -top-6">
        <div className="w-full max-w-md bg-white rounded-lg shadow-lg overflow-hidden z-40 mx-4">
          <div className="px-4 pt-3 pb-2">
            <div className="flex justify-between items-center border-b pb-2">
              <div className="text-sm font-bold text-[#014D4E]">RANK</div>
              <div className="text-sm font-bold text-[#014D4E]">NAME</div>
              <div className="text-sm font-bold text-[#014D4E]">NET</div>
            </div>
            
            {/* First Player Row */}
            <div className="py-3 border-b">
              <div className="flex justify-between items-center">
                <div className="w-10 flex items-center flex-col">
                  <div className="flex flex-col items-center">
                    <span className="text-lg font-bold leading-none text-[#014D4E]">1</span>
                    <div className="text-green-500 text-xs mt-1">
                      <span className="flex items-center">
                        <span className="mr-1">▲</span>
                        <span>+3</span>
                      </span>
                    </div>
                  </div>
                </div>
                
                <div className="flex flex-col items-start text-left flex-grow mx-4">
                  <span className="font-bold text-[#014D4E]">Srinivas Raaghav Kashyap</span>
                  <div className="text-xs text-gray-500">
                    +91 xxxxx x1234 · Bengaluru, IN
                  </div>
                  <div className="text-xs text-gray-400 mt-1">
                    ROUNDS: 123 · RAW SCORE: 9999
                  </div>
                </div>
                
                <div className="flex flex-col items-end">
                  <span className="text-lg font-medium text-[#014D4E]">9999</span>
                  <span className="text-xs text-[#014D4E] underline mt-1">Details &gt;</span>
                </div>
              </div>
            </div>
            
            {/* Second Player Row - Updated to match image */}
            <div className="py-3">
              <div className="flex justify-between items-center">
                <div className="w-10 flex items-center flex-col">
                  <div className="flex flex-col items-center">
                    <span className="text-lg font-bold text-gray-400 leading-none">2</span>
                    <div className="text-red-500 text-xs mt-1">
                      <span className="flex items-center">
                        <span className="mr-1">▼</span>
                        <span>-1</span>
                      </span>
                    </div>
                  </div>
                </div>
                
                <div className="flex flex-col items-start text-left flex-grow mx-4">
                  <span className="font-bold text-gray-400">Srinivas Raaghav Kashyap</span>
                  <div className="text-xs text-gray-400">
                    +91 xxxxx x1234 · Bengaluru, IN
                  </div>
                  <div className="text-xs text-gray-300 mt-1">
                    ROUNDS: 123 · RAW SCORE: 9999
                  </div>
                </div>
                
                <div className="flex flex-col items-end">
                  <span className="text-lg font-medium text-gray-400">9999</span>
                  <span className="text-xs text-[#014D4E] underline mt-1">Details &gt;</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Position the "VIEW INDIA RANKING" button to overlap between second and third sections */}
      <div className="w-full flex justify-center relative -top-10 z-50">
        <div className="w-full max-w-xs mx-4">
          <button 
            className="w-full py-3 rounded-md text-white font-bold tracking-wider uppercase"
            style={{
              background: 'linear-gradient(180deg, #029A9C 0%, #014D4E 100%)',
              boxShadow: '0px 2px 4px rgba(0,0,0,0.25)'
            }}
          >
            VIEW INDIA RANKING
          </button>
        </div>
      </div>
      
    </div>


    {/*Bigger Screen Layout */}
      <section className="text-center -mb-20 md:block hidden">
          {/* First section */}
          <div className="relative flex flex-col min-h-[80vh] xsh-landscape:min-h-[70vh]  xh:min-h-[50vh] xhhh:min-h-[78vh] xsh:min-h-[50vh] xhh:min-h-[50vh] bg-gray-50 z-0 noise-bg overflow-hidden">
            {/* Top Navbar */}
            <div className="md:absolute z-50 top-0 w-full flex justify-between items-center px-5 md:px-8 lg:px-10 py-8 md:py-10 flex-col-reverse md:flex-row">
              <div className="flex text-xsm lg:text-sm gap-6 md:gap-8 lg:gap-10 mt-4 md:mt-0 w-full md:w-auto">
                <Link
                  to="/contact"
                  className="flex items-center justify-center xhhh:text-sm md:text-xsm md:pt-3 font-quattrocento bg-gradient-to-b from-[#E5181A] via-[#CB1517] to-[#B21214] text-white px-2 py-1 md:px-4 lg:px-5 md:pb-2 rounded transition-all duration-300 ease-in-out shadow-[0px_2px_4px_0px_rgba(0,0,0,0.55)] hover:from-[#E5181A] hover:via-[#E51719] hover:to-[#CC1517] hover:shadow-[0px_2px_10px_0px_rgba(0,0,0,0.45)]"
                >
                  <span className="font-semibold text-[#FFF7D9] leading-none">
                    SIGN IN
                  </span>
                </Link>
                
                <a
                  href="/leaderboard"
                  className="  leading-4 text-[#211E16] font-semibold text-center my-auto"
                >
                  RANKING
                </a>
              </div>
              
              <div className="flex items-center text-xsm lg:text-sm w-full md:w-auto justify-between gap-8">
                <a
                  href="/faq"
                  className="  leading-4 text-[#211E16] font-semibold text-center my-auto"
                >
                  FAQS
                </a>
                
                <Link
                  to="/contact"
                  className="flex items-center gap-1.5 leading-4 text-[#211E16] my-auto font-semibold"
                >
                  PLAYER SUPPORT 
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="#211E16" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M20.4539 3.54523C18.2166 1.30547 15.2127 0.0416158 12.0438 0.0400635C5.4998 0.0400635 0.0869269 5.45296 0.0838222 12.0016C0.0823201 14.1248 0.650029 16.2013 1.73687 18.0248L0 24.0401L6.14574 22.3385C7.8999 23.3279 9.9468 23.8515 12.0376 23.8526H12.0438C18.5862 23.8526 24.0001 18.4387 24.0032 11.8901C24.0048 8.72789 22.691 5.78485 20.4539 3.54523ZM12.0438 21.8602H12.0387C10.1919 21.8591 8.38228 21.3564 6.80696 20.4171L6.45223 20.2092L2.79462 21.2002L3.80347 17.6327L3.57363 17.2644C2.54269 15.6302 1.9966 13.7413 1.99809 11.8021C2.00057 6.5512 6.44692 2.10486 12.049 2.10486C14.6839 2.10615 17.175 3.15511 19.0172 4.9994C20.8594 6.84368 21.9057 9.33741 21.9045 11.9796C21.902 17.2306 17.4552 21.8602 12.0438 21.8602ZM17.4846 14.5354C17.1869 14.3862 15.7074 13.6592 15.4332 13.5603C15.159 13.4614 14.9596 13.4116 14.7606 13.7099C14.5615 14.0081 13.9837 14.6843 13.8089 14.8834C13.634 15.0824 13.4591 15.1078 13.1613 14.9586C12.8636 14.8094 11.8851 14.4921 10.7169 13.447C9.80749 12.6297 9.18985 11.6283 9.01503 11.3301C8.84021 11.0319 8.99638 10.8713 9.1462 10.7228C9.28132 10.5879 9.44564 10.3726 9.59593 10.1977C9.74621 10.0229 9.79598 9.89919 9.89489 9.70011C9.99381 9.50104 9.94376 9.3262 9.86978 9.17697C9.79598 9.02758 9.17992 7.5473 8.93086 6.95076C8.6882 6.36925 8.44188 6.44707 8.2578 6.43901C8.08298 6.43142 7.88376 6.42992 7.68469 6.42992C7.48561 6.42992 7.16072 6.50388 6.88648 6.80209C6.61223 7.10029 5.83545 7.82742 5.83545 9.3077C5.83545 10.788 6.90963 12.2188 7.05976 12.4178C7.20989 12.6169 9.18726 15.6566 12.195 16.9607C12.943 17.2942 13.5294 17.4963 13.9897 17.6479C14.7687 17.8969 15.4753 17.8611 16.0349 17.7843C16.6602 17.699 17.8588 17.0565 18.1078 16.3616C18.3569 15.6667 18.3569 15.0701 18.2829 14.9331C18.209 14.7961 18.0095 14.7215 17.7118 14.5724L17.4846 14.5354Z"/>
                  </svg>
                </Link>
              </div>
            </div>
    
            {/*//! Hero Section for Tablets and Laptops */}
            <div className="md:flex hidden relative md:min-h-[74vh] xsh-landscape:min-h-[70vh] lg:min-h-[80vh] xhhh:min-h-[78vh] xh:min-h-[50vh] xsh:min-h-[50vh] xhh:min-h-[50vh] flex-col w-full items-center justify-center">
              {/* Full width image at bottom - positioned to touch both edges correctly */}
              <div className="absolute bottom-0 left-0 right-0 z-20 w-full">
                <img
                  src={landingImg}
                  alt="Golf Illustration Full Width"
                  className="w-full h-auto object-cover object-bottom  opacity-70"
                  draggable="false"
                />
              </div>
    
              {/* Center Logo - vertically centered */}
              <div
                className="absolute z-30 flex items-center justify-center"
                style={{ top: "35%", transform: "translateY(-40%)" }}
              >
                <img
                  src="favicons/favicon.svg"
                  alt="Golfmeet Logo"
                  className="w-48 object-contain md:w-[300px]  xh:w-[380px] xhhh:w-32vw xsh:w-[380px] xhh:w-[380px]  lg:w-[315px] xl:w-[27vw] xl:-mt-5 drop-shadow-[0_10px_10px_rgba(0,0,0,0.40)]"
                  draggable="false"
                />
              </div>

              {/* Gradient Heading below logo with proper spacing */}
              <div 
                className="absolute z-30 flex flex-col items-center px-4"
                style={{ top: "80%", transform: "translateY(-50%)" }}
              >
                <h1
                  className="text-[#014D4E] text-4xl md:text-5xl leading-tight font-quattrocento font-bold mb-4"
                  style={{
                    background: 'linear-gradient(180deg, rgba(255, 180, 30, 0.9) 0%, #014D4E 27%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                    textFillColor: 'transparent',
                    textShadow: '0px 0px 1px rgba(0, 0, 0, 0.15)',
                    filter: 'drop-shadow(0px 0.5px 0.5px rgba(0, 0, 0, 0.2))',
                  }}
                >
                  WHAT'S YOUR RANK?
                </h1>
                
                <p className="text-[#014D4E] text-xl md:text-2xl font-quattrocento font-bold text-center">
                  AMONG AMATEUR GOLFERS IN INDIA
                </p>
              </div>
            </div>
    
            {/*//! Mobile Design */}
            <div className="md:hidden relative  flex flex-col items-center">
              <img
                src="favicons/favicon.svg"
                alt="Golfmeet Logo"
                className="w-10/12 sm:w-3/6 object-contain drop-shadow-2xl"
                draggable="false"
              />
    
              <img
                src={Illustration_Golfers_Mobiles}
                alt="Golf Illustration"
                className="w-10/12 sm:w-3/6 mr-5"
                draggable="false"
              />
            </div>
          </div>
    
          {/* Second Section - Leaderboard Card */}
      <div className="w-full flex justify-center  relative noise-bg bg-gray-50 ">
        <div className="w-full max-w-5xl bg-white rounded-lg -mt-6 shadow-lg overflow-hidden z-40 mx-4">
          <div className="px-6 pt-4 pb-3">
            <div className="flex justify-between items-center border-b pb-3">
              <div className="text-sm font-bold text-[#014D4E] w-20 text-center">RANK</div>
              <div className="text-sm font-bold text-[#014D4E] flex-grow text-left pl-4">NAME</div>
              <div className="text-sm font-bold text-[#014D4E] w-20 text-center">NET</div>
            </div>
            
            {/* First Player Row */}
            <div className="py-4 border-b">
              <div className="flex justify-between items-center">
                <div className="w-20 flex items-center justify-center flex-col">
                  <div className="flex flex-col items-center">
                    <span className="text-lg font-bold leading-none text-[#014D4E]">1</span>
                    <div className="text-green-500 text-xs mt-1">
                      <span className="flex items-center">
                        <span className="mr-1">▲</span>
                        <span>+3</span>
                      </span>
                    </div>
                  </div>
                </div>
                
                <div className="flex flex-col items-start text-left flex-grow pl-4">
                  <span className="font-bold text-[#014D4E]">Srinivas Raaghav Kashyap</span>
                  <div className="text-xs text-gray-500">
                    +91 xxxxx x1234 · Bengaluru, IN
                  </div>
                  <div className="text-xs text-gray-400 mt-1">
                    ROUNDS: 123 · RAW SCORE: 9999
                  </div>
                </div>
                
                <div className="flex flex-col items-center w-20">
                  <span className="text-lg font-medium text-[#014D4E]">9999</span>
                  <span className="text-xs text-[#014D4E] underline mt-1">Details &gt;</span>
                </div>
              </div>
            </div>
            
            {/* Second Player Row - Updated to match image */}
            <div className="py-4">
              <div className="flex justify-between items-center">
                <div className="w-20 flex items-center justify-center flex-col">
                  <div className="flex flex-col items-center">
                    <span className="text-lg font-bold text-gray-400 leading-none">2</span>
                    <div className="text-red-500 text-xs mt-1">
                      <span className="flex items-center">
                        <span className="mr-1">▼</span>
                        <span>-1</span>
                      </span>
                    </div>
                  </div>
                </div>
                
                <div className="flex flex-col items-start text-left flex-grow pl-4">
                  <span className="font-bold text-gray-400">Srinivas Raaghav Kashyap</span>
                  <div className="text-xs text-gray-400">
                    +91 xxxxx x1234 · Bengaluru, IN
                  </div>
                  <div className="text-xs text-gray-300 mt-1">
                    ROUNDS: 123 · RAW SCORE: 9999
                  </div>
                </div>
                
                <div className="flex flex-col items-center w-20">
                  <span className="text-lg font-medium text-gray-400">9999</span>
                  <span className="text-xs text-[#014D4E] underline mt-1">Details &gt;</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Position the "VIEW INDIA RANKING" button to overlap between second and third sections */}
      <div className="w-full  flex justify-center relative -top-10 mt-6 z-50">
        <div className="w-full max-w-xs mx-4 ">
          <button 
            className="w-full py-3 rounded-md text-white font-bold tracking-wider uppercase"
            style={{
              background: 'linear-gradient(180deg, #029A9C 0%, #014D4E 100%)',
              boxShadow: '0px 2px 4px rgba(0,0,0,0.25)'
            }}
          >
            VIEW INDIA RANKING
          </button>
        </div>
      </div>
          
        </section>
        </>
  );
}

export default LandingHomePage;