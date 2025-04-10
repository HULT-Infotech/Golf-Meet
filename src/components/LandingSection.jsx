import React from "react";
import Illustration_Golfers_Mobile from "../assets/HomePage/Illustration_Golfers_Mobile.webp";
import { Link } from "react-router-dom";

  // Function to handle the WhatsApp button click
  const handleWhatsAppClick = () => {
    const phoneNumber = "918884844444";
    window.open(`https://wa.me/${phoneNumber}`, "_blank");
  };
function LandingPage() {
  return (
    <section className="min-h-screen text-center">
<div className="relative flex flex-col min-h-[70vh] bg-gray-50 noise-bg">
  {/* Top Navbar */}
  <div className="lg:absolute z-50 min-h-20 top-0 w-full flex justify-between items-center 
    [padding-left:clamp(1rem,5vw,3.5rem)] 
    [padding-right:clamp(1rem,5vw,3.5rem)] 
    [padding-top:clamp(1.5rem,5vw,2.5rem)] 
    [padding-bottom:clamp(1.5rem,5vw,2.5rem)]">

    {/* Left Side - Register Button */}
    <button
      className="bg-gradient-to-b from-[#E5181A] via-[#CB1517] to-[#B21214] 
      px-4 py-2 rounded-md text-[#FFF7D9] uppercase tracking-[0.1em] font-quattrocento
      [font-size:clamp(0.65rem,2.5vw,1rem)]
      shadow-[0_2px_4px_rgba(0,0,0,0.55)] 
      hover:scale-105 hover:shadow-[0_4px_10px_rgba(0,0,0,0.45)] transition-all duration-300 ease-in-out"
      onClick={handleWhatsAppClick}
    >
      Register Now
    </button>

    {/* Right Side - Leaderboard Link */}
    <Link
      to="/leaderboard"
      className="uppercase text-[#1C1C1C] font-quattrocentoSans font-bold tracking-[0.1em] 
      [font-size:clamp(0.65rem,2.5vw,1rem)]"
    >
      Leaderboard
    </Link>
  </div>





        {/*//! Hero Section Laptops */}
        <div className="hidden relative  lg:max-w-5xl  xl:max-w-[85vw] mx-auto  min-h-[70vh] lg:flex flex-col w-full items-center">
          {/* <div className="absolute left-0 -bottom-2">
            <img
              src={landingLeftImg}
              alt="Golf Illustration Left"
              className="w-full lg:w-[350px]  xl:w-[28vw]"
              draggable="false"
            />
          </div>
          <div className="absolute right-2 -bottom-2">
            <img
              src={landingRightImg}
              alt="Golf Illustration Right"
              className="w-full lg:w-[380px]  xl:w-[30vw] "
              draggable="false"
            />
          </div> */}

          {/* Center Logo */}
          <div className="absolute lg:-bottom-14 xl:-bottom-20">
            <img
              src="favicons/favicon.svg"
              alt="Golfmeet Logo"
              className="w-48 object-contain lg:w-[380px]  xl:w-[35vw] drop-shadow-[0_10px_10px_rgba(0,0,0,0.40)]"
              draggable="false"
            />
          </div>
        </div>

        {/*//! Design Mobile */}
        <div className="relative flex flex-col gap-[4.3rem] lg:hidden items-center">
          <img
            src="favicons/favicon.svg"
            alt="Golfmeet Logo"
            className="w-10/12 sm:w-3/6   object-contain drop-shadow-2xl"
            draggable="false"
          />

          <img
            src={Illustration_Golfers_Mobile}
            alt="Golf Illustration"
            className="w-10/12 sm:w-3/6 mr-5 "
            draggable="false"
          />
        </div>
      </div>
      {/* Title */}
      <div className="bg-[#01383A] noise-bg-green md:py-0 py-12 md:bg-transparent relative overflow-hidden">

  {/* Keep original content with relative positioning so it appears above the texture */}
  <div className="relative">
    
    {/* Center wrapper for heading */}
    <div className="flex justify-center">
      <h1 className="text-[85px] leading-[90px] tracking-[0.025em] mt-5 text-center w-[350px] md:w-auto mx-auto font-quattrocento md:text-6xl lg:text-7xl xl:text-[94px] md:leading-[106.37px] md:tracking-[0.025em] font-bold lg:mt-16 xl:mt-20 bg-gradient-to-b from-[#FFF2BF] to-[#F4D455] text-transparent bg-clip-text">
        GOLF MEET INDIA 2025
      </h1>
    </div>

    <p className="font-quattrocentoSans w-80 mx-auto sm:w-auto font-normal text-[24px] leading-[26.59px] tracking-[-0.025em] text-center text-[#fff] mt-4">
      The year-long amateur golf tournament
    </p>

    <p className="font-quattrocentoSans font-normal mt-1 text-[16px] leading-[17.73px] tracking-[-0.025em] text-center text-[#fff] p-2">
      JANUARY 2025 - DECEMBER 2025
    </p>

    {/* Register Button with gold gradient */}
    <div className="flex justify-center">
      <button className="my-7 rounded-md px-10 py-2 font-normal bg-gradient-to-b from-[#FFFFFF] via-[#FBE67B] to-[#FFB41E] shadow-[0px_2px_4px_0px_#0000008C] transition-all duration-500 hover:shadow-[0px_4px_10px_0px_#00000073]">
        <span className="text-lg text-[#014D4E] font-quattrocento font-bold"
        onClick={handleWhatsAppClick}>
          REGISTER ON WHATSAPP
        </span>
      </button>
    </div>
  </div>
</div>

    </section>
  );
}

export default LandingPage;
