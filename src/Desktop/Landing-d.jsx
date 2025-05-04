import React from "react";
import landingImg from "../assets/full.svg";
import landingbg from "../assets/bgmen.svg";
import landingLeftImg from "../assets/landing_left_img.svg";
import indiaFlag from "../assets/india_flag.png";
import faq_bg_mobile from "../assets/paper.svg";
import Illustration_Golfers_Mobile from "../assets/Illustration_Golfers_Mobile.svg";
import { Link } from "react-router-dom";

function DesktopTabletLandingPage() {
  // WhatsApp number
  const whatsappNumber = "918884844444";
  const whatsappLink = `https://wa.me/${whatsappNumber}`;
  
  return (
    <section className="text-center">
      {/* First section */}
      <div className="relative flex flex-col min-h-[72vh] bg-gray-50 z-0  noise-bg overflow-hidden">
        {/* Top Navbar */}
        <div className="md:absolute z-50 top-0 w-full flex justify-between items-center px-5 md:px-8 lg:px-10 py-8 md:py-10 flex-col-reverse md:flex-row">
      <div className="flex text-xsm lg:text-sm gap-6 md:gap-8 lg:gap-10 mt-4 md:mt-0 w-full md:w-auto">
        <a
          href={whatsappLink}
          className=" md:text-xsm   bg-gradient-to-b from-[#E5181A] via-[#CB1517] to-[#B21214] text-white px-2 py-1 md:px-4 lg:px-5 md:py-2 rounded transition-all duration-300 ease-in-out shadow-[0px_2px_4px_0px_rgba(0,0,0,0.55)] hover:from-[#E5181A] hover:via-[#E51719] hover:to-[#CC1517] hover:scale-110 hover:shadow-[0px_2px_10px_0px_rgba(0,0,0,0.45)]"
        >
          <span className="font-bold text-[#FFF7D9]">
            SIGN UP NOW
          </span>
        </a>
        
        <a
          href="/leaderboard"
          className="  leading-4 text-[#211E16] font-bold text-center my-auto"
        >
          LEADERBOARD
        </a>
      </div>
      
      <div className="flex items-center text-xsm lg:text-sm w-full md:w-auto justify-between gap-8">
        <div className="flex items-center gap-1">
          {/* Language dropdown placeholder */}
        </div>
        <a
          href="/faq"
          className="  leading-4 text-[#211E16] font-bold text-center my-auto"
        >
          FAQ
        </a>
        
        <a
          href={whatsappLink}
          className=" flex leading-4 text-[#211E16] my-auto font-bold"
        >
          
          Contact Support <svg className="ml-3 w-5 h-5" viewBox="0 0 24 24" fill="#211E16" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" clipRule="evenodd" d="M20.4539 3.54523C18.2166 1.30547 15.2127 0.0416158 12.0438 0.0400635C5.4998 0.0400635 0.0869269 5.45296 0.0838222 12.0016C0.0823201 14.1248 0.650029 16.2013 1.73687 18.0248L0 24.0401L6.14574 22.3385C7.8999 23.3279 9.9468 23.8515 12.0376 23.8526H12.0438C18.5862 23.8526 24.0001 18.4387 24.0032 11.8901C24.0048 8.72789 22.691 5.78485 20.4539 3.54523ZM12.0438 21.8602H12.0387C10.1919 21.8591 8.38228 21.3564 6.80696 20.4171L6.45223 20.2092L2.79462 21.2002L3.80347 17.6327L3.57363 17.2644C2.54269 15.6302 1.9966 13.7413 1.99809 11.8021C2.00057 6.5512 6.44692 2.10486 12.049 2.10486C14.6839 2.10615 17.175 3.15511 19.0172 4.9994C20.8594 6.84368 21.9057 9.33741 21.9045 11.9796C21.902 17.2306 17.4552 21.8602 12.0438 21.8602ZM17.4846 14.5354C17.1869 14.3862 15.7074 13.6592 15.4332 13.5603C15.159 13.4614 14.9596 13.4116 14.7606 13.7099C14.5615 14.0081 13.9837 14.6843 13.8089 14.8834C13.634 15.0824 13.4591 15.1078 13.1613 14.9586C12.8636 14.8094 11.8851 14.4921 10.7169 13.447C9.80749 12.6297 9.18985 11.6283 9.01503 11.3301C8.84021 11.0319 8.99638 10.8713 9.1462 10.7228C9.28132 10.5879 9.44564 10.3726 9.59593 10.1977C9.74621 10.0229 9.79598 9.89919 9.89489 9.70011C9.99381 9.50104 9.94376 9.3262 9.86978 9.17697C9.79598 9.02758 9.17992 7.5473 8.93086 6.95076C8.6882 6.36925 8.44188 6.44707 8.2578 6.43901C8.08298 6.43142 7.88376 6.42992 7.68469 6.42992C7.48561 6.42992 7.16072 6.50388 6.88648 6.80209C6.61223 7.10029 5.83545 7.82742 5.83545 9.3077C5.83545 10.788 6.90963 12.2188 7.05976 12.4178C7.20989 12.6169 9.18726 15.6566 12.195 16.9607C12.943 17.2942 13.5294 17.4963 13.9897 17.6479C14.7687 17.8969 15.4753 17.8611 16.0349 17.7843C16.6602 17.699 17.8588 17.0565 18.1078 16.3616C18.3569 15.6667 18.3569 15.0701 18.2829 14.9331C18.209 14.7961 18.0095 14.7215 17.7118 14.5724L17.4846 14.5354Z"/>
                </svg>
        </a>
      </div>
    </div>

        {/*//! Hero Section for Tablets and Laptops */}
        <div className="md:flex hidden relative md:min-h-[74vh] lg:min-h-[72vh] flex-col w-full items-center justify-center">
          {/* Full width image at bottom - positioned to touch both edges correctly */}
          <div className="absolute bottom-0 left-0 right-0 z-20 w-full">
            <img
              src={landingImg}
              alt="Golf Illustration Full Width"
              className="w-full h-auto object-cover object-bottom"
              draggable="false"
            />
          </div>

          {/* Center Logo - vertically centered */}
          <div
            className="absolute z-30 flex items-center justify-center"
            style={{ top: "50%", transform: "translateY(-50%)" }}
          >
            <img
              src="favicons/favicon.svg"
              alt="Golfmeet Logo"
              className="w-48 object-contain md:w-[300px] lg:w-[340px] xl:w-[31vw] xl:-mt-5 drop-shadow-[0_10px_10px_rgba(0,0,0,0.40)]"
              draggable="false"
            />
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
            src={Illustration_Golfers_Mobile}
            alt="Golf Illustration"
            className="w-10/12 sm:w-3/6 mr-5"
            draggable="false"
          />
        </div>
      </div>

      {/* Second section - no gap */}
      <section className="relative xl:h-[113vh] lg:h-[100vh] md:h-[78vh] bulge-top-desk -mt-8 z-10 w-full overflow-hidden noise-bg-newest">
      
      {/* Content positioned above the image */}
      <div className="relative z-20 max-w-xl mx-auto px-4">
    {/* First Section */}
    <div>
      <h1 className="text-[40px] mt-10 md:text-[48px] lg:text-[61px] leading-tight tracking-normal text-center font-quattrocento font-bold">
        <span className="bg-gradient-to-t from-[#FFFFFF] to-[#f0bb64] bg-clip-text text-transparent">GOLF MEET</span> <br />
        <span className="text-white"> PLAYERS.</span>
      </h1>
    </div>
    
    {/* Second Section with PLAY BETTER centered */}
    <div className="flex flex-col items-center justify-center py-10 md:py-5 lg:py-3">
      <p className="font-quattrocento text-[24px] md:text-[23.5px] lg:text-[28px] leading-tight tracking-normal text-center text-white">
        PLAY BETTER.
      </p>
    </div>
    
    {/* Third Section */}
    <div>
    <p className="font-extrabold font-quattrocento md:text-3xl lg:text-[2.5rem]  drop-shadow-lg lg:leading-[2.8rem] tracking-normal lg:mt-20 xl:mt-44 md:mt-4 bg-gradient-to-b from-[#FFF2BF] to-[#F4D455] text-transparent bg-clip-text text-center">
        Golf Meet matches you with <br /> new golfers every round.
      </p>
      <p className="font-quattrocento font-normal lg:text-[20px] md:text-[17px] leading-normal tracking-normal text-center text-[#FFFFFF] opacity-70 mt-3">
      Players are matched based on <br /> their preferred courses and dates. 
      </p>
      
      {/* Register Button */}
      <div className="flex justify-center md:mt-7 lg:mt-12">
      <a 
        href={whatsappLink}
        className="rounded-md bg-gradient-to-b from-white via-[#fce570] to-[#fcb017] px-8 py-3 font-bold transition-all duration-300 hover:opacity-90 hover:shadow-md"
      >
        <span className="text-[20px] md:text-sm lg:text-base font-quattrocento text-[#014D4E] font-bold uppercase">
        SIGN UP VIA WHATSAPP 
        </span>
      </a>
      </div>
    </div>
  </div>
      
      {/* Full-width image positioned at bottom */}
      <img 
        src={landingbg}
        alt="Golf players" 
        className="absolute bottom-0 mt-10 left-0 w-full object-cover object-bottom opacity-80 z-10"
        style={{ maxHeight: '100%' }}
      />
    </section>
    </section>
  );
}

export default DesktopTabletLandingPage;