import React from "react";
import landingRightImg from "../assets/landing_right_img.svg";
import landingLeftImg from "../assets/landing_left_img.svg";
import indiaFlag from "../assets/india_flag.png";
import INDIA_golfmeet_logo from "/favicons/favicon.svg";
import green_bg from "../assets/green.webp";

function Footer() {
  return (
    <footer className="w-full">
      {/* Third Section - Logo */}
      <section className="bg-gray-100 noise-bg-neww flex justify-center items-center w-full p-10 md:min-h-[350px] drop-shadow-2xl">
        <div className="w-[90vw] md:w-[30vw] transition-transform duration-500">
          <img
            draggable="false"
            src={INDIA_golfmeet_logo}
            alt="Golf Meet Logo"
            className="w-full h-full object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
          />
        </div>
      </section>
      
      {/* Main Footer Section - With reduced opacity gradient */}
      <section
        className="relative px-4 flex justify-between items-start min-h-96 shadow-[0_-15px_30px_-10px_rgba(0,0,0,0.3)]"
        style={{ 
          position: 'relative',
        }}
      >
        {/* Background with reduced opacity gradient */}
        <div 
          className="absolute inset-0 w-full h-full"
          style={{
            backgroundImage: `url(${green_bg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        ></div>

        {/* Gradient overlay with reduced opacity */}
        <div 
          className="absolute inset-0 w-full h-full"
          style={{
            backgroundImage: 'linear-gradient(to bottom, rgba(1, 77, 78, 0.6), rgba(0, 30, 31, 0.6))',
            zIndex: 2,
          }}
        ></div>
        
        {/* Additional shadow overlay at the top */}
        <div 
          className="absolute top-0 left-0 w-full h-16 bg-gradient-to-b from-black/30 to-transparent"
          style={{ zIndex: 5 }}
        ></div>

        {/* Left Illustration */}
        <div className="hidden lg:block absolute bottom-0 left-0 z-10">
          <img
            src={landingLeftImg}
            className="filter brightness-0 opacity-30"
            alt="Golfers Left"
          />
        </div>

        {/* Right Illustration */}
        <div className="hidden lg:block absolute bottom-0 right-0 z-10">
          <img
            src={landingRightImg}
            className="filter brightness-0 opacity-30"
            alt="Golfers Right"
          />
        </div>

        {/* Content Sections */}
        <div className="flex justify-between w-full max-w-7xl md:mx-auto md:items-center z-20 flex-col-reverse md:flex-row gap-20 md:gap-0 md:h-auto pt-16 relative">
          {/* Left Section - Site Language and Country of Play */}
          <div className="flex flex-col space-y-8 text-white">
            <div>
              
            </div>
          </div>

          {/* Middle Section - Frequently Asked Questions, Tournament Rules, etc. */}


          <div className="flex uppercase flex-col font-quattrocentoSans space-y-8 text-white text-left">
            <a href="/player-support" className="hover:underline">
              Player Support
            </a>
            <a href="/terms-of-use" className="hover:underline">
              Terms of Use
            </a>
            <a href="/privacy-policy" className="hover:underline">
              Privacy Policy
            </a>
          </div>
          <div className="flex flex-col uppercase space-y-8 font-quattrocentoSans text-white text-left">



            <a href="/leaderboard" className="hover:underline">
              LeaderBoard
            </a>
            <a href="/faq" className="hover:underline">
              Frequently Asked Questions
            </a>
            <a href="/tournament-rules" className="hover:underline">
              Tournament Rules
            </a>
            <a href="/code-of-conduct" className="hover:underline">
              Player Code of Conduct
            </a>
          </div>

          {/* Right Section - Player Support, Terms of Use, etc. */}
          
        </div>
      </section>

      {/* Bottom Gray Section */}
      <section className="bg-gray-100 noise-bg h-28 text-center flex justify-center items-center w-full">
        <p className="text-gray-600 text-sm">
          Copyright © 2024 Golfmeet LLP. All Rights Reserved.
        </p>
      </section>
    </footer>
  );
}

export default Footer;