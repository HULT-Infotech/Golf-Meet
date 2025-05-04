import React from "react";
import { Link } from "react-router-dom";
import qrCode from "../assets/redirect/qr.png";
import illustration from "../assets/redirect/illustration.webp";
import separatorLine from "../assets/redirect/vectorr.png";
import centralLogo from "/favicons/favicon.svg";

const handleWhatsAppClick = () => {
  const phoneNumber = "918884844444";
  window.open(`https://wa.me/${phoneNumber}`, "_blank");
};

function Redirect() {
  return (
    <>
      {/* Main Section with Integrated Header */}
      <section className="bg-gray-100 noise-bg relative flex min-h-screen flex-col">
        {/* Header Section */}
        <div className="flex items-center justify-between px-4 py-6">
          {/* Left Buttons */}
          <div className="flex items-center space-x-4 lg:space-x-7 mt-4 ml-2 lg:ml-4">
            <Link to="/" className="flex items-center">
              <span className="text-black mr-4 font-bold text-[16px]">←</span>
              <button
                className="text-black font-quattrocentoSans font-bold text-[14px] uppercase hover:underline"
              >
                Back to Golf Meet
              </button>
            </Link>
            <Link to="/leaderboard">
              <button
                className="text-black font-quattrocentoSans font-bold text-[14px] uppercase hover:underline"
              >
                Leaderboard
              </button>
            </Link>
          </div>

          {/* Center Logo */}
          <div className="absolute left-1/2 transform -translate-x-1/2 mt-6">
            <img
              src={centralLogo}
              alt="Golf Meet Logo"
              className="h-16 lg:h-20"
            />
          </div>

          {/* Right FAQ Button */}
          <div className="mt-4 mr-2 lg:mr-4">
            <Link to="/faq">
              <button
                className="text-black font-quattrocentoSans font-bold text-[14px] uppercase hover:underline"
              >
                FAQs
              </button>
            </Link>
          </div>
        </div>

        <div style={{ height: "80px" }} className="md:h-[90px] lg:h-[100px]" />

        {/* Content Section */}
        <div className="flex w-full md:flex-row max-w-[1700px] mx-auto flex-1 px-4">
          {/* Left Section - Text and QR Code */}
          <div className="relative w-full md:w-1/2 flex flex-col justify-center items-start p-4 md:p-8 lg:p-0 xl:ml-20 md:mb-40">
            <h1
              className="font-quattrocento font-bold text-[40px] sm:text-[48px] lg:text-[54px] text-[#201E15] leading-[100%] tracking-[0.025em] mb-4 uppercase"
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
              className="font-quattrocentoSans font-normal text-[14px] sm:text-[15px] lg:text-[16px] w-[80%] lg:w-[70%] mb-4 text-[#201E15]"
            >
              We noticed you're accessing Golf Meet from a desktop. If you don't have WhatsApp installed on your computer, you can simply scan the QR code below using your phone to continue. Alternatively, you may click on <b>"Continue with WhatsApp Web"</b>.
            </p>
            <img
              src={qrCode}
              alt="QR Code"
              className="w-[200px] sm:w-[220px] lg:w-[250px] h-[200px] sm:h-[220px] lg:h-[250px] object-contain mt-4"
            />
          </div>

          {/* Separator Line - Hidden on mobile */}
          <div className="hidden md:block w-[2px] bg-gray-300">
            <img
              src={separatorLine}
              alt="Separator Line"
              className="h-full w-full object-cover"
            />
          </div>

          {/* Right Section - Illustration and Button */}
          <div className="relative w-full md:w-1/2 flex flex-col items-center justify-center px-4 md:px-5 mt-8">
            <img
              src={illustration}
              alt="Golfers Illustration"
              className="w-full max-w-[450px] sm:max-w-[500px] lg:max-w-[550px] object-contain pointer-events-none z-0"
            />
            {/* WhatsApp Button Overlay */}
            <div className="absolute top-1/3 transform -translate-y-1/2 -translate-x-1/2 text-center z-10">
              <p
                className="font-quattrocentoSans font-bold text-[20px] sm:text-[22px] lg:text-[24px] text-[#014D4E] text-left mb-2"
              >
                Continue with <br /> Whatsapp Web
              </p>
              <button
                className="z-10 text-xs sm:text-sm bg-gradient-to-b from-[#E5181A] via-[#CB1517] to-[#B21214] text-white px-3 sm:px-4 py-1.5 sm:py-2 rounded shadow-[0px_2px_4px_0px_rgba(0,0,0,0.55)]"
                onClick={handleWhatsAppClick}
              >
                <span className="font-quattrocento text-[#FFF7D9]">
                  CONTINUE WITH WHATSAPP WEB
                </span>
              </button>
            </div>
          </div>
        </div>

        {/* Green Section with Bulge */}
        <div className="relative bg-[#014D4E] -mt-16">
          {/* Bulge Effect */}
          <div className="absolute top-0 left-0 w-full h-8 bg-gray-100 rounded-b-[50%] transform -translate-y-full"></div>
          {/* Green Content Area */}
          <div className="h-16 w-full"></div>
        </div>
      </section>
    </>
  );
}

export default Redirect;