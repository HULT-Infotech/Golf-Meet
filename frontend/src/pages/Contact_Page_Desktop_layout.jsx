import React from "react";
import { Link } from "react-router-dom";
import qrCode from "../assets/redirect/qr.png";
import illustration from "../assets/redirect/illustration.webp";
import centralLogo from "/favicons/favicon.svg";

const handleWhatsAppClick = () => {
  const phoneNumber = "918884844444";
  window.open(`https://wa.me/${phoneNumber}`, "_blank");
};

function Redirect() {
  return (
    <>
      {/* Main Section with Integrated Header */}
      <section className="bg-gray-100 hidden  noise-bg relative md:flex min-h-screen flex-col">
        {/* Header Section */}
        <header className="flex items-center justify-between md:p-3 sm:p-6 xl:px-8 lg:py-6">
          {/* Left Buttons */}
          <div className="flex items-center space-x-3 sm:space-x-5 lg:space-x-7 mt-2 ml-2 sm:ml-3 lg:ml-6">
            <Link to="/" className="flex items-center">
              <span className="text-black mr-3 font-bold text-[12px] sm:text-[14px] lg:text-[16px]">←</span>
              <button
                className="text-black font-quattrocentoSans font-bold text-[12px] sm:text-sm lg:text-base uppercase hover:underline"
              >
                Back to Golf Meet
              </button>
            </Link>
            <Link to="/leaderboard">
              <button
                className="text-black font-quattrocentoSans font-bold text-[12px] sm:text-sm lg:text-base uppercase hover:underline"
              >
                Leaderboard
              </button>
            </Link>
          </div>

          {/* Center Logo */}
          <div className="absolute left-1/2 transform -translate-x-1/2 mt-2">
            <Link to="/">
              <img
                src={centralLogo}
                alt="Golf Meet Logo"
                className="h-12 sm:h-15 md:h-16 lg:h-20 cursor-pointer"
              />
            </Link>
          </div>

          {/* Right FAQ Button */}
          <div className="mt-2 mr-2 sm:mr-3 lg:mr-6">
            <Link to="/faq">
              <button
                className="text-black font-quattrocentoSans font-bold text-[12px] sm:text-sm lg:text-base uppercase hover:underline"
              >
                FAQs
              </button>
            </Link>
          </div>
        </header>

        {/* Content Section */}
        <div className="flex w-full flex-col md:flex-row max-w-[1700px] mx-auto flex-1 px-4 sm:px-6 lg:px-8 relative">
          {/* Left Section - Text and QR Code */}
          <div className="relative w-full md:w-1/2 flex flex-col justify-center items-start p-4 md:p-6 lg:p-0 xl:ml-20">
            <h1
              className="font-quattrocento font-bold text-[28px] sm:text-[34px] md:text-[40px] lg:text-[44px] text-[#201E15] leading-[100%] tracking-[0.025em] mb-3 sm:mb-4 lg:mb-5 uppercase"
              style={{
                background:
                  "linear-gradient(180deg, rgba(255, 180, 30, 0.9) 0%, #014D4E 23%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                textFillColor: "transparent",
                textShadow: "0px 0px 1px rgba(0, 0, 0, 0.15)",
                filter: "drop-shadow(0px 0.5px 0.5px rgba(0, 0, 0, 0.2))",
              }}
            >
              Continue <br /> on Mobile
            </h1>
            <p
              className="font-quattrocentoSans font-normal text-xs sm:text-[13px] lg:text-[14px] w-full sm:w-[90%] md:w-[80%] lg:w-[70%] mb-3 sm:mb-4 lg:mb-5 text-[#201E15]"
            >
              We noticed you're accessing Golf Meet from a desktop. If you don't have WhatsApp installed on your computer, you can simply scan the QR code below using your phone to continue. Alternatively, you may click on <b>"Continue with WhatsApp Web"</b>.
            </p>
            <img
              src={qrCode}
              alt="QR Code"
              className="w-[140px] sm:w-[160px] md:w-[180px] lg:w-[200px] h-[140px] sm:h-[160px] md:h-[180px] lg:h-[200px] object-contain mt-2"
            />
          </div>

          {/* Vertical Dashed Line - Now CSS based */}
          <div className="hidden md:block absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 h-[70%]">
            <div 
              className="h-full w-px"
              style={{
                backgroundImage: 'linear-gradient(to bottom, #014D4E 50%, transparent 50%)',
                backgroundSize: '1px 10px',
                backgroundRepeat: 'repeat-y',
                opacity: 0.8
              }}
            />
          </div>

          {/* Right Section - Button and Bottom Illustration */}
          <div className="relative w-full md:w-1/2 flex flex-col items-center justify-center px-4 md:px-5 pt-8 md:pt-0">
            {/* WhatsApp Button centered in empty space */}
            <div className="text-center z-10 mb-8 md:mb-0 md:-mt-12 lg:-mt-14">
              <p
                className="font-quattrocentoSans font-bold text-sm sm:text-[16px] md:text-[18px] lg:text-[20px] text-[#014D4E] text-center mb-2 sm:mb-3"
              >
                Continue with <br /> Whatsapp Web
              </p>
              <button
                className="text-xs sm:text-sm md:text-base bg-gradient-to-b from-[#E5181A] via-[#CB1517] to-[#B21214] text-white px-3 sm:px-4 md:px-5 py-1.5 sm:py-2 md:py-2.5 rounded shadow-[0px_2px_4px_0px_rgba(0,0,0,0.55)] transition-transform hover:scale-105 active:scale-95"
                onClick={handleWhatsAppClick}
              >
                <span className="font-quattrocento text-[#FFF7D9]">
                  CONTINUE WITH WHATSAPP WEB
                </span>
              </button>
            </div>
            
            {/* Illustration at the very bottom */}
            <img
              src={illustration}
              alt="Golfers Illustration"
              className="w-full max-w-[280px] sm:max-w-[350px] md:max-w-[400px] lg:max-w-[450px] object-contain pointer-events-none absolute bottom-0 z-0"
            />
          </div>
        </div>

        {/* Green Section with Bulge */}
        <div className="relative -mt-4 sm:-mt-6 md:-mt-8 noise-bg-newest bulge-top-deskkk bg-[#014D4E]">
          {/* Green Content Area */}
          <div className="xl:h-20 md:h-12 sm:h-28 lg:h-16 w-full"></div>
        </div>
      </section>
    </>
  );
}

export default Redirect;