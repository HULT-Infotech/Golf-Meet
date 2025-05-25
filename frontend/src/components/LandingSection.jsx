import React from "react";
import Illustration_Golfers_Mobile from "../assets/HomePage/Illustration_Golfers_Mobile.webp";
import fav from "../assets/favicon.webp";
import FooterBanner from "../assets/HomePage/footer-banner.webp";
import { Link } from "react-router-dom";

function LandingPage() {
  // Function to handle the WhatsApp button click
  const handleWhatsAppClick = () => {
    const phoneNumber = "918884844444";
    window.open(`https://wa.me/${phoneNumber}`, "_blank");
  };
  
  return (
    <section className="min-h-screen text-center md:hidden">
      <div className="relative flex flex-col min-h-[70vh] -mb-2 bg-gray-50 noise-bg-n">
        {/* Top Navbar */}
        <div className="lg:absolute z-40 min-h-20 top-0 mt-2 w-full flex justify-between items-center 
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
            SIGN UP NOW
          </button>

          {/* Right Side - Leaderboard Link - Adding pointer-events-auto to ensure clicks work */}
          <Link
            to="/ranking"
            className="uppercase text-[#1C1C1C] font-quattrocentoSans font-bold tracking-[0.1em] 
            [font-size:clamp(0.65rem,2.5vw,1rem)] pointer-events-auto"
          >
            Ranking
          </Link>
        </div>

        {/*//! Hero Section Laptops */}
        <div className="hidden relative lg:max-w-5xl xl:max-w-[85vw] mx-auto min-h-[70vh] lg:flex flex-col w-full items-center">
          {/* Center Logo */}
          <div className="absolute lg:-bottom-14 xl:-bottom-20">
            <img
              src={fav}
              alt="Golfmeet Logo"
              className="w-48 object-contain lg:w-[380px] xl:w-[35vw] drop-shadow-[0_10px_10px_rgba(0,0,0,0.40)]"
              draggable="false"
            />
          </div>
        </div>

        {/*//! Design Mobile */}
        <div className="relative flex flex-col lg:hidden items-center">
          <img
            src="favicons/favicon.svg"
            alt="Golfmeet Logo"
            className="w-10/12 sm:w-3/6 object-contain drop-shadow-2xl"
            draggable="false"
          />
        <h1 className="text-[#014D4E] mt-10 text-[50px] xsm:text-[40px] xsm:leading-[50px] leading-[60px] font-quattrocento font-bold xsm:mb-3 mb-4"style={{
          background: 'linear-gradient(180deg, rgba(255, 180, 30, 0.9) 0%, #014D4E 27%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
          textFillColor: 'transparent',
          textShadow: '0px 0px 1px rgba(0, 0, 0, 0.15)',
          filter: 'drop-shadow(0px 0.5px 0.5px rgba(0, 0, 0, 0.2))',
        }}>MEET NEW <br /> GOLFERS.</h1>
        <p className="text-[#014D4E] text-[24px] xsm:text-[22px] font-quattrocento mb-8 font-bold">PLAY BETTER.</p>
          <img
            src={Illustration_Golfers_Mobile}
            alt="Golf Illustration"
            className="w-12/12 xsm:w-12/12 sm:w-3/6 mr-5"
            draggable="false"
          />
        </div>
      </div>
      
      {/* Title */}
{/* Section 1 */}
<div className="noise-bg-new md:py-0 pt-[4.8rem] xsm:pt-16 md:bg-transparent relative overflow-hidden bulge-topp">
  <div className="relative">
    {/* Center wrapper for heading */}
    <div className="flex justify-center">
      <h1 className="xsm:text-[40px] xsm:leading-[45px] text-[50px] leading-[60px] tracking-[0.025em] mt-5 text-center w-[350px] md:w-auto mx-auto font-quattrocento md:text-6xl lg:text-7xl xl:text-[94px] md:leading-[106.37px] md:tracking-[0.025em] font-bold lg:mt-16 xl:mt-20 bg-gradient-to-b from-[#FFF2BF] to-[#F4D455] text-transparent bg-clip-text">
      Golf Meet <br /> matches you <br /> with new <br /> golfers <br />
      every round. 
      </h1>
    </div>
    
    <p className="font-quattrocentoSans  w-80 mx-auto sm:w-auto font-normal opacity-85 xsm:text-[18px] pb-1 text-[20px] leading-[28.59px] tracking-[-0.025em] text-center text-[#ffff] mt-5">
    Players are matched based on their <br /> preferred courses and dates. 
          </p>
  </div>
  <div className="relative">
    {/* Register Button with gold gradient */}
    <div className="flex justify-center">
      <button
        className="mt-16 mb-[5.6rem] xsm:mb-[3rem] z-10 rounded-md px-10 py-2 font-normal bg-gradient-to-b from-[#FFFFFF] via-[#FBE67B] to-[#FFB41E] shadow-[0px_2px_4px_0px_#0000008C] transition-all duration-500 hover:shadow-[0px_4px_10px_0px_#00000073]"
        onClick={handleWhatsAppClick}
      >
        <span className="text-lg text-[#014D4E] font-quattrocento" style={{ fontWeight: "700" }}>
        SIGN UP VIA WHATSAPP 
        </span>
      </button>
    </div>
    
    {/* Bottom full-width image inside the section */}
    <div className="absolute z-0 -bottom-3  left-0 right-0 w-full">
      <img 
        src={FooterBanner} 
        alt="Golf Course Footer" 
        className="w-full object-cover h-full opacity-80 md:h-64 lg:h-80"
        draggable="false"
      />
    </div>
  </div>
</div>
    </section>
    
  );
}

export default LandingPage;