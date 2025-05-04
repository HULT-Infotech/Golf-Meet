import React from "react";
import coc_coins1 from "../assets/coc-coins1.svg";
import coc_coins2 from "../assets/coc-coins2.svg";
import coc_coins3 from "../assets/coc-coins3.svg";
import coc_coins4 from "../assets/coc-coins4.svg";
import coc_coins5 from "../assets/coc-coins5.svg";
import mcoc_coins1 from "../assets/m-coin.svg";
import mcoc_coins2 from "../assets/m-coin1.svg";
import mcoc_coins3 from "../assets/m-coin2.svg";
import mcoc_coins4 from "../assets/m-coin4.svg";
import Footer from "../components/Footer";
import code_of_conduct from "../assets/code-of-conduct/bg-code.png";
import { Link } from "react-router-dom";

function RefundPolicy() {
  return (
    <>
      <section className="relative px-4 flex items-center justify-center overflow-hidden">
        {/* Absolute background image container for desktop */}
        <div className="absolute inset-0 w-full z-6 h-full hidden md:block">
          <img
            src={code_of_conduct}
            alt="Refund Policy background"
            className="w-full h-full"
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
        <div className="relative bg-gray-100 mt-12 mb-20 xsm:mt-10 rounded-lg p-4 sm:p-6 md:p-8 w-[95%] sm:w-[90%] md:w-[85%] max-w-6xl shadow-gray-800 drop-shadow-2xl shadow z-20">
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

      <Footer />
    </>
  );
}

export default RefundPolicy;