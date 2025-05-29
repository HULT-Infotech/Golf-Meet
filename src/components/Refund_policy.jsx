import React from "react";
import tr_bg from "../assets/cdd.svg";
import tr_bg_mobile from "../assets/refund.webp";
import tr_dec_mobile from "../assets/green-m.svg";
import code_of_conduct_greenleft from "../assets/code-of-conduct/code-conduct-left.svg";
import Navbar from "./Navbar";
import coc_coins1 from "../assets/coc-coins1.svg";
import coc_coins2 from "../assets/coc-coins2.svg";
import coc_coins3 from "../assets/coc-coins3.svg";
import coc_coins4 from "../assets/coc-coins4.svg";
import coc_coins5 from "../assets/coc-coins5.svg";
import mcoc_coins1 from "../assets/m-coin.svg";
import mcoc_coins2 from "../assets/m-coin1.svg";
import mcoc_coins3 from "../assets/m-coin2.svg";
import mcoc_coins4 from "../assets/m-coin4.svg";
import Footer from "./Footer";
import Footerr from "../Desktop/Footerr";
import code_of_conduct from "../assets/code-of-conduct/bgmm.png";
import { Link } from "react-router-dom";

// Function to handle the WhatsApp button click
const handleWhatsAppClick = () => {
  // The phone number provided: +91-888 484 4444
  // Remove non-numeric characters for the WhatsApp link
  const phoneNumber = "918884844444"; // Added country code without + sign
  window.open(`https://wa.me/${phoneNumber}`, "_blank");
};

function RefundOne() {
  return (
    <>
    <div className="md:overflow-visible overflow-hidden">
      {/* Fixed Navbar at the top */}
      <div className="fixed top-0 left-0 right-0 z-50 w-full">
        <Navbar />
      </div>
      <div style={{ height: "80px" }} className="md:h-[90px] lg:h-[100px]" />

      <section className="sm:bg-gray-100 sm:noise-bg noise-bg-n min-h-[90vh] md:hidden relative flex flex-col overflow-hidden">
        {/* Content container with flex structure */}
        <div className="flex flex-col w-full flex-1 md:flex-row max-w-[1700px] mx-auto relative pt-4 md:pt-16">
          {/* Text Section */}
          <div className="relative flex flex-col justify-center items-start p-8 md:pl-10 md:p-0 xl:ml-20 md:mb-40">
            <h1 
              className="font-quattrocento font-bold xsm:text-[2.3rem] text-[2.9rem] text-[#201E15] sm:text-5xl lg:text-[80px] pt-8 leading-[100%] tracking-[0.025em] mb-4"
              style={{
                background: 'linear-gradient(180deg, rgba(255, 180, 30, 0.9) 0%, #014D4E 64%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                textFillColor: 'transparent',
                textShadow: '0px 0px 1px rgba(0, 0, 0, 0.15)',
                filter: 'drop-shadow(0px 0.5px 0.5px rgba(0, 0, 0, 0.2))',
              }}
            >
              REFUND <br /> POLICY
            </h1>
            {/* Mobile-only text added here */}
            <div className="xsm:text-xs text-sm md:hidden mb-4 xsm:w-[95%] w-[98%]">
            Learn about our refund guidelines designed to ensure transparency and fairness for every Golf Meet participant. 

</div>
            <p className="font-semibold xsm:text-xs text-sm ">Need assistance with a refund request? Our team is ready to support you.
            </p>
          </div>
          
          {/* Desktop image container - Right side (hidden on mobile) */}
          <div className="hidden md:block relative bottom-0 right-0 md:w-1/2">
            <img
              src={tr_bg}
              alt="Golfers Illustration"
              className="w-[93%] h-auto object-contain pointer-events-none md:mr-12"
            />
          </div>
        </div>
        
        {/* Mobile image container - positioned at bottom left */}
        <div className="md:hidden relative w-full flex justify-end mt-auto right-0">
          <img
            src={tr_bg_mobile}
            alt="Golfers Illustration Mobile"
            className="w-[98%] object-contain pointer-events-none"
          />
        </div>
      </section>
<section 
  className="bg-gray-100  noise-bg relative hidden md:flex  flex-col md:min-h-[70vh] lg:min-h-[85vh] md:flex-row overflow-hidden"
>
<div className="relative flex flex-col justify-center items-start p-8 md:pl-10 md:p-0 xl:ml-20 md:mb-40">
            <h1
              className="font-quattrocento -mt-28 font-bold text-[2.85rem] text-[#201E15] sm:text-5xl lg:text-[55px] xl:text-[65px] leading-[100%] tracking-[0.025em] mb-4"
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
              REFUND <br />
              POLICY
            </h1>
            <div className="text-sm lg:w-[95%] md:w-[80%]">
            Learn about our refund guidelines designed to ensure transparency and fairness for every Golf Meet participant. </div>
            <p className="font-semibold text-sm mt-4">
            Need assistance with a refund request? Our team is ready to support you.
            </p>
          </div>
  
  {/* Right Image Section - Positioned at bottom-right */}
  <div className="absolute bottom-0 right-4 w-1/2 h-auto">
    <img
      src={tr_bg}
      alt="Golfers Illustration"
      className="w-full h-auto object-contain object-bottom pointer-events-none"
    />
  </div>
</section>
    </div>
    <section className=" md:overflow-visible -mt-7 md:-mt-12 relative px-4 flex items-center justify-center overflow-hidden">
        {/* Absolute background image container for desktop */}
        <div className="absolute top-0 left-0 w-full h-full bulge-top noise-bg-newest"></div>
        <div className="absolute inset-0 w-full md:mt-32 z-6 h-full overflow-hidden hidden md:block">
          <img
            src={code_of_conduct}
            alt="Refund Policy background"
            className="w-full h-auto"
          />
        </div>

        {/* Background color for mobile/smaller screens */}
        <div className="absolute inset-0 w-full z-6 h-full md:hidden noise-bg-new"></div>

        {/* Coin Images - visible only on larger screens */}
        <img
          src={coc_coins1}
          alt="Coins"
          className="absolute lg:top-[10%] top-[4%] -right-3 xl:right-5 w-[150px] lg:w-[180px] lg:-right-6  xl:w-[200px] z-30 hidden md:block"
        />
        <img
          src={coc_coins2}
          alt="Coins"
          className="absolute top-[51%] left-4 w-[100px] lg:w-[120px] lg:left-2 xl:left-20 xl:w-[130px] z-30 hidden md:block"
        />
        <img
          src={mcoc_coins1}
          alt="Coins"
          className="absolute bottom-2 left-0 w-[120px] z-30 md:hidden"
        />
        <img
          src={mcoc_coins2}
          alt="Coins"
          className="absolute bottom-[68%] left-0 w-[60px] z-30 md:hidden"
        />
        <img
          src={mcoc_coins3}
          alt="Coins"
          className="absolute top-[10%] right-0 w-[60px] z-30 md:hidden"
        />
        <img
          src={mcoc_coins4}
          alt="Coins"
          className="absolute top-[48%] right-0 w-[55px] z-30 md:hidden"
        />
        <img
          src={coc_coins2}
          alt="Coins"
          className="absolute top-[60%] -right-12 w-[130px] z-10 md:hidden"
        />
        <img
          src={coc_coins2}
          alt="Coins"
          className="absolute top-[18%] lg:top-[21%] left-0 w-[100px] lg:w-[120px] lg:left-0 xl:left-12 xl:w-[130px] z-30 hidden md:block"
        />
        <img
          src={coc_coins3}
          alt="Coins"
          className="absolute top-[83%] left-0 lg:left-12 xl-left-10 transform -translate-y-1/3 w-[150px] lg:w-[160px] xl-w-[220px] z-10 hidden md:block"
        />
        {/* <img
          src={coc_coins4}
          alt="Coins"
          className="absolute w-[180px] bottom-[25%] right-0 xl:w-[200px] w-140px lg:w-[190px] z-10 hidden md:block"
        /> */}
        {/* <img
          src={coc_coins5}
          alt="Coins"
          className="absolute bottom-[14%] right-[5%] lg:w-[120px] w-[100px] xl:w-[130px] z-30 hidden md:block"
        /> */}

        {/* Content Container */}
        <div className="relative bg-gray-100 md:mt-32 mt-12 mb-20 xsm:mt-10 rounded-lg p-4 sm:p-6 md:p-8 w-[95%] sm:w-[90%] md:w-[85%]  max-w-6xl xhhh:max-w-[100rem] shadow-gray-800 drop-shadow-2xl shadow z-20">
          <div className="space-y-6 md:space-y-8 mx-auto" style={{ maxWidth: "100%" }}>
            <div>
              <h3
                className="text-lg sm:text-xl md:text-2xl font-bold text-black mb-2 md:mb-4 font-quattrocentoSans"
                style={{ fontSize: "clamp(18px, 5vw, 24px)" }}
              >
                1. No Refunds Policy
              </h3>
              <p
                className="text-base sm:text-lg md:text-xl text-black leading-relaxed mb-4 font-quattrocentoSans font- mx-auto"
                style={{ fontSize: "clamp(16px, 4vw, 24px)", lineHeight: "1.4", maxWidth: "100%" }}
              >
                Golf Meet follows a <b>strict no-refund policy</b> for all subscription fees paid by participating golfers. By subscribing to Golf Meet through our website, mobile app, WhatsApp, phone, or any other channel, you acknowledge and agree that:
              </p>
              <ul
                className="space-y-2 sm:space-y-3 md:space-y-4 text-black font-quattrocentoSans text-base sm:text-lg pl-4 sm:pl-6 md:pl-8"
                style={{ fontSize: "clamp(16px, 4vw, 24px)", listStyleType: "disc" }}
              >
                <li style={{ paddingLeft: "5px", marginBottom: "10px" }}>
                  <span style={{ display: "block", marginLeft: "5px" }}>
                    <b>Subscription fees are non-refundable</b>, regardless of usage, participation, or early cancellation.
                  </span>
                </li>
                <li style={{ paddingLeft: "5px", marginBottom: "10px" }}>
                  <span style={{ display: "block", marginLeft: "5px" }}>
                    Subscriptions are billed <b>monthly</b>, and players are required to pay the subscription fee for each month from the date of joining until the end of the current Golf Meet season.
                  </span>
                </li>
              </ul>
            </div>

            <div>
              <h3
                className="text-lg sm:text-xl md:text-2xl font-bold text-black mb-2 md:mb-4 font-quattrocentoSans"
                style={{ fontSize: "clamp(18px, 5vw, 24px)" }}
              >
                2. Golf Meet Season
              </h3>
              <p
                className="text-base sm:text-lg md:text-xl text-black leading-relaxed mb-8 md:mb-12 font-quattrocentoSans font- mx-auto"
                style={{ fontSize: "clamp(16px, 4vw, 24px)", lineHeight: "1.4", maxWidth: "100%" }}
              >
                The Golf Meet season runs from <b>January 1 to December 31</b>. Subscription fees apply for the full duration of a player's participation in a given season.
              </p>
            </div>

            <div>
              <h3
                className="text-lg sm:text-xl md:text-2xl font-bold text-black mb-2 md:mb-4 font-quattrocentoSans"
                style={{ fontSize: "clamp(18px, 5vw, 24px)" }}
              >
                3. Discretionary Refunds
              </h3>
              <p
                className="text-base sm:text-lg md:text-xl text-black leading-relaxed mb-4 font-quattrocentoSans font- mx-auto"
                style={{ fontSize: "clamp(16px, 4vw, 24px)", lineHeight: "1.4", maxWidth: "100%" }}
              >
                In exceptional cases, <b>Golf Meet may issue refunds at its sole discretion</b>, subject to the following conditions:
              </p>
              <ul
                className="space-y-2 sm:space-y-3 md:space-y-4 text-black font-quattrocentoSans text-base sm:text-lg pl-4 sm:pl-6 md:pl-8"
                style={{ fontSize: "clamp(16px, 4vw, 24px)", listStyleType: "disc" }}
              >
                <li style={{ paddingLeft: "5px", marginBottom: "10px" }}>
                  <span style={{ display: "block", marginLeft: "5px" }}>
                    The refund request is submitted in writing to Golf Meet via <b>WhatsApp at +91-8884844444</b>, or through an official email channel.
                  </span>
                </li>
                <li style={{ paddingLeft: "5px", marginBottom: "10px" }}>
                  <span style={{ display: "block", marginLeft: "5px" }}>
                    The request includes a clear explanation and any supporting documentation (if applicable).
                  </span>
                </li>
                <li style={{ paddingLeft: "5px", marginBottom: "10px" }}>
                  <span style={{ display: "block", marginLeft: "5px" }}>
                    Approval or denial of refund requests will be communicated within a reasonable time frame, and <b>Golf Meet's decision will be final</b>.
                  </span>
                </li>
              </ul>
            </div>

            <div>
              <h3
                className="text-lg sm:text-xl md:text-2xl font-bold text-black mb-2 md:mb-4 font-quattrocentoSans"
                style={{ fontSize: "clamp(18px, 5vw, 24px)" }}
              >
                4. Green Fees Excluded
              </h3>
              <p
                className="text-base sm:text-lg md:text-xl text-black leading-relaxed mb-8 md:mb-12 font-quattrocentoSans font- mx-auto"
                style={{ fontSize: "clamp(16px, 4vw, 24px)", lineHeight: "1.4", maxWidth: "100%" }}
              >
                Subscription fees paid to Golf Meet do <b>not include green fees</b>. Players are responsible for paying green fees directly to the golf courses they play at. No claims for refund of green fees will be entertained by Golf Meet.
              </p>
            </div>

            <div>
              <h3
                className="text-lg sm:text-xl md:text-2xl font-bold text-black mb-2 md:mb-4 font-quattrocentoSans"
                style={{ fontSize: "clamp(18px, 5vw, 24px)" }}
              >
                5. Changes to Policy
              </h3>
              <p
                className="text-base sm:text-lg md:text-xl text-black leading-relaxed mb-8 md:mb-12 font-quattrocentoSans font- mx-auto"
                style={{ fontSize: "clamp(16px, 4vw, 24px)", lineHeight: "1.4", maxWidth: "100%" }}
              >
                Golf Meet reserves the right to modify or update this Refund Policy at any time. Changes will be effective immediately upon being posted on (<a href="http://www.golfmeet.com" className="text-blue-600 hover:underline">www.golfmeet.com</a>) or communicated through official Golf Meet channels.
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="md:hidden">
<Footer />
</div>
<div className="md:block hidden">
<Footer />
</div>
</>
  );
}

export default RefundOne;