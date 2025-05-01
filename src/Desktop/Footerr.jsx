import React from "react";
import landingRightImg from "../assets/landing_right_img.svg";
import landingLeftImg from "../assets/landing_left_img.svg";
import indiaFlag from "../assets/india_flag.png";
import INDIA_golfmeet_logo from "/favicons/favicon.svg";
import green_bg from "../assets/green.webp";

function Footerr() {
  // Function to handle the WhatsApp button click
  const handleWhatsAppClick = () => {
    const phoneNumber = "918884844444";
    window.open(`https://wa.me/${phoneNumber}`, "_blank");
  };

  return (
    <footer className="w-full">
      {/* Third Section - Logo */}
      <section className="bg-gray-100 noise-bg-n flex justify-center items-center w-full p-10 md:min-h-[350px] drop-shadow-2xl">
        <div className="w-[90vw] md:w-[30vw] transition-transform duration-500">
          <img
            draggable="false"
            src={INDIA_golfmeet_logo}
            alt="Golf Meet Logo"
            className="w-full h-full object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
          />
        </div>
      </section>
      
      {/* Main Footer Section - With conditional background */}
      <section
        className="relative px-4 flex justify-between items-start min-h-96 shadow-[0_-15px_30px_-10px_rgba(0,0,0,0.3)] md:bg-transparent bg-none noise-bg-new md:noise-bg-none"
        style={{ 
          position: 'relative',
        }}
      >
        {/* Background image only visible on md screens and above */}
        <div 
          className="absolute inset-0 w-full h-full hidden md:block"
          style={{
            backgroundImage: `url(${green_bg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        ></div>

        {/* Gradient overlay with reduced opacity - only on md screens and above */}
        <div 
          className="absolute inset-0 w-full h-full hidden md:block"
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
        <div className="flex justify-between w-full max-w-7xl md:mx-auto md:items-start z-20 flex-col-reverse md:flex-row gap-20 md:gap-0 md:h-auto pt-16 pb-12 relative">
          {/* Desktop footer links - three column layout */}
          <div className="hidden md:flex md:flex-1 md:justify-between text-white">
            {/* Left column */}
            <div className="flex flex-col space-y-6 uppercase font-quattrocentoSans">
              <h3 className="uppercase font-bold text-xl tracking-wider mb-2">Navigation</h3>
              <a href="/leaderboard" className="hover:underline tracking-wide">
                Leaderboard
              </a>
              <button 
                onClick={handleWhatsAppClick} 
                className="hover:underline flex items-center text-white text-left uppercase font-quattrocentoSans"
              >
                <span className="flex items-center tracking-wide">
                  Contact Support <svg className="ml-3 w-5 h-5" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M20.4539 3.54523C18.2166 1.30547 15.2127 0.0416158 12.0438 0.0400635C5.4998 0.0400635 0.0869269 5.45296 0.0838222 12.0016C0.0823201 14.1248 0.650029 16.2013 1.73687 18.0248L0 24.0401L6.14574 22.3385C7.8999 23.3279 9.9468 23.8515 12.0376 23.8526H12.0438C18.5862 23.8526 24.0001 18.4387 24.0032 11.8901C24.0048 8.72789 22.691 5.78485 20.4539 3.54523ZM12.0438 21.8602H12.0387C10.1919 21.8591 8.38228 21.3564 6.80696 20.4171L6.45223 20.2092L2.79462 21.2002L3.80347 17.6327L3.57363 17.2644C2.54269 15.6302 1.9966 13.7413 1.99809 11.8021C2.00057 6.5512 6.44692 2.10486 12.049 2.10486C14.6839 2.10615 17.175 3.15511 19.0172 4.9994C20.8594 6.84368 21.9057 9.33741 21.9045 11.9796C21.902 17.2306 17.4552 21.8602 12.0438 21.8602ZM17.4846 14.5354C17.1869 14.3862 15.7074 13.6592 15.4332 13.5603C15.159 13.4614 14.9596 13.4116 14.7606 13.7099C14.5615 14.0081 13.9837 14.6843 13.8089 14.8834C13.634 15.0824 13.4591 15.1078 13.1613 14.9586C12.8636 14.8094 11.8851 14.4921 10.7169 13.447C9.80749 12.6297 9.18985 11.6283 9.01503 11.3301C8.84021 11.0319 8.99638 10.8713 9.1462 10.7228C9.28132 10.5879 9.44564 10.3726 9.59593 10.1977C9.74621 10.0229 9.79598 9.89919 9.89489 9.70011C9.99381 9.50104 9.94376 9.3262 9.86978 9.17697C9.79598 9.02758 9.17992 7.5473 8.93086 6.95076C8.6882 6.36925 8.44188 6.44707 8.2578 6.43901C8.08298 6.43142 7.88376 6.42992 7.68469 6.42992C7.48561 6.42992 7.16072 6.50388 6.88648 6.80209C6.61223 7.10029 5.83545 7.82742 5.83545 9.3077C5.83545 10.788 6.90963 12.2188 7.05976 12.4178C7.20989 12.6169 9.18726 15.6566 12.195 16.9607C12.943 17.2942 13.5294 17.4963 13.9897 17.6479C14.7687 17.8969 15.4753 17.8611 16.0349 17.7843C16.6602 17.699 17.8588 17.0565 18.1078 16.3616C18.3569 15.6667 18.3569 15.0701 18.2829 14.9331C18.209 14.7961 18.0095 14.7215 17.7118 14.5724L17.4846 14.5354Z"/>
                  </svg>
                </span>
              </button>
            </div>

            {/* Center column */}
            <div className="flex flex-col space-y-6 uppercase font-quattrocentoSans">
              <h3 className="uppercase font-bold text-xl tracking-wider mb-2">Information</h3>
              <a href="/faq" className="hover:underline tracking-wide">
                Frequently Asked Questions
              </a>
              <a href="/rules-regulations" className="hover:underline tracking-wide">
                Rules & Regulations
              </a>
              <a href="/code-of-conduct" className="hover:underline tracking-wide">
                Player Code of Conduct
              </a>
            </div>

            {/* Right column */}
            <div className="flex flex-col space-y-6 uppercase font-quattrocentoSans">
              <h3 className="uppercase font-bold text-xl tracking-wider mb-2">Legal</h3>
              <a href="/refund-policy" className="hover:underline tracking-wide">
                Refund Policy
              </a>
              <a href="/terms-of-use" className="hover:underline tracking-wide">
                Terms of Use
              </a>
              <a href="/privacy-policy" className="hover:underline tracking-wide">
                Privacy Policy
              </a>
            </div>
          </div>
          
          {/* Mobile links section - Exact match with design and WhatsApp icon */}
          <div className="md:hidden flex flex-col uppercase space-y-8 font-quattrocentoSans text-white text-left">
            <a href="/leaderboard" className="hover:underline">
              Leaderboard
            </a>
            <button 
              onClick={handleWhatsAppClick} 
              className="hover:underline flex items-center text-white text-left uppercase font-quattrocentoSans w-full"
            >
              <span className="flex items-center">
                Contact Support <svg className="ml-3 w-5 h-5" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" clipRule="evenodd" d="M20.4539 3.54523C18.2166 1.30547 15.2127 0.0416158 12.0438 0.0400635C5.4998 0.0400635 0.0869269 5.45296 0.0838222 12.0016C0.0823201 14.1248 0.650029 16.2013 1.73687 18.0248L0 24.0401L6.14574 22.3385C7.8999 23.3279 9.9468 23.8515 12.0376 23.8526H12.0438C18.5862 23.8526 24.0001 18.4387 24.0032 11.8901C24.0048 8.72789 22.691 5.78485 20.4539 3.54523ZM12.0438 21.8602H12.0387C10.1919 21.8591 8.38228 21.3564 6.80696 20.4171L6.45223 20.2092L2.79462 21.2002L3.80347 17.6327L3.57363 17.2644C2.54269 15.6302 1.9966 13.7413 1.99809 11.8021C2.00057 6.5512 6.44692 2.10486 12.049 2.10486C14.6839 2.10615 17.175 3.15511 19.0172 4.9994C20.8594 6.84368 21.9057 9.33741 21.9045 11.9796C21.902 17.2306 17.4552 21.8602 12.0438 21.8602ZM17.4846 14.5354C17.1869 14.3862 15.7074 13.6592 15.4332 13.5603C15.159 13.4614 14.9596 13.4116 14.7606 13.7099C14.5615 14.0081 13.9837 14.6843 13.8089 14.8834C13.634 15.0824 13.4591 15.1078 13.1613 14.9586C12.8636 14.8094 11.8851 14.4921 10.7169 13.447C9.80749 12.6297 9.18985 11.6283 9.01503 11.3301C8.84021 11.0319 8.99638 10.8713 9.1462 10.7228C9.28132 10.5879 9.44564 10.3726 9.59593 10.1977C9.74621 10.0229 9.79598 9.89919 9.89489 9.70011C9.99381 9.50104 9.94376 9.3262 9.86978 9.17697C9.79598 9.02758 9.17992 7.5473 8.93086 6.95076C8.6882 6.36925 8.44188 6.44707 8.2578 6.43901C8.08298 6.43142 7.88376 6.42992 7.68469 6.42992C7.48561 6.42992 7.16072 6.50388 6.88648 6.80209C6.61223 7.10029 5.83545 7.82742 5.83545 9.3077C5.83545 10.788 6.90963 12.2188 7.05976 12.4178C7.20989 12.6169 9.18726 15.6566 12.195 16.9607C12.943 17.2942 13.5294 17.4963 13.9897 17.6479C14.7687 17.8969 15.4753 17.8611 16.0349 17.7843C16.6602 17.699 17.8588 17.0565 18.1078 16.3616C18.3569 15.6667 18.3569 15.0701 18.2829 14.9331C18.209 14.7961 18.0095 14.7215 17.7118 14.5724L17.4846 14.5354Z"/>
                </svg>
              </span>
            </button>
            <div className="border-t border-gray-600 my-2"></div>
            <a href="/faq" className="hover:underline">
              Frequently Asked Questions
            </a>
            <a href="/rules-regulations" className="hover:underline">
              Rules & Regulations
            </a>
            <a href="code-of-conduct" className="hover:underline">
              Player Code of Conduct
            </a>
            <div className="border-t border-gray-600 my-2"></div>
            <a href="/refund-policy" className="hover:underline">
              Refund Policy
            </a>
            <a href="/terms-of-use" className="hover:underline">
              Terms of Use
            </a>
            <a href="/privacy-policy" className="hover:underline">
              Privacy Policy
            </a>
          </div>
        </div>
      </section>

      {/* Bottom Gray Section */}
      <section className="bg-gray-100 noise-bg h-28 text-center flex justify-center items-center w-full">
        <p className="text-gray-600 text-sm">
        Copyright © 2025 Golf Meet Foundation 
        All rights reserved. 
        </p>
      </section>
    </footer>
  );
}

export default Footerr;