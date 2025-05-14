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
import Footerr from "../Desktop/Footerr";
import code_of_conduct from "../assets/code-of-conduct/bgmm.png";
import { Link } from "react-router-dom";

function Common() {
  return (
    <>
      <section className="relative px-4 flex items-center justify-center overflow-hidden">
        {/* Absolute background image container for desktop */}
        <div className="absolute top-[50%] left-0 w-full h-1/2 noise-bg-newest"></div>
        <div className="absolute inset-0 w-full z-6 h-full -mt-32 hidden md:block">
          <img
            src={code_of_conduct}
            alt="Code of Conduct background"
            className="w-full h-full"
          />
        </div>

        {/* Background color for mobile/smaller screens */}
        <div className="absolute inset-0 w-full z-6 h-full md:hidden noise-bg-new"></div>

        {/* Coin Images - visible only on larger screens */}
        <img
          src={coc_coins1}
          alt="Coins"
          className="absolute lg:top-[5%] top-[%] right-6 w-[150px] lg:w-[180px] lg:-right-6 xl:right-20 xl:w-[200px] z-30 hidden md:block"
        />
        <img
          src={coc_coins2}
          alt="Coins"
          className="absolute top-[11%] left-4 w-[100px] lg:w-[120px] lg:left-2 xl:left-20 xl:w-[130px] z-30 hidden md:block"
        />
        <img
          src={mcoc_coins1}
          alt="Coins"
          className="absolute bottom-2 left-0 w-[120px] z-30 md:hidden"
        />
        <img
          src={mcoc_coins2}
          alt="Coins"
          className="absolute bottom-[60%] left-0 w-[60px] z-30 md:hidden"
        />
        <img
          src={mcoc_coins3}
          alt="Coins"
          className="absolute top-[5%] right-0 w-[60px] z-30 md:hidden"
        />
        <img
          src={mcoc_coins4}
          alt="Coins"
          className="absolute top-[51%] right-0 w-[55px] z-30 md:hidden"
        />
        <img
          src={coc_coins2}
          alt="Coins"
          className="absolute top-[70%] -right-12 w-[130px] z-10 md:hidden"
        />
        <img
          src={coc_coins2}
          alt="Coins"
          className="absolute top-[23%] lg:top-[27%] left-0 w-[100px] lg:w-[120px] lg:left-0 xl:left-12 xl:w-[130px] z-30 hidden md:block"
        />
        <img
          src={coc_coins3}
          alt="Coins"
          className="absolute top-[48%] left-0 lg:left-12 xl-left-10 transform -translate-y-1/3 w-[150px] lg:w-[160px] xl-w-[220px] z-10 hidden md:block"
        />
        <img
          src={coc_coins4}
          alt="Coins"
          className="absolute w-[180px] bottom-[25%] right-0 xl:w-[200px] w-140px lg:w-[190px] z-10 hidden md:block"
        />
        <img
          src={coc_coins5}
          alt="Coins"
          className="absolute bottom-[10%] right-[5%] lg:w-[120px] w-[100px] xl:w-[130px] z-30 hidden md:block"
        />

        {/* Content Container */}
        <div className="relative bg-gray-100 mt-12 mb-20 xsm:mt-10 rounded-lg p-4 sm:p-6 md:p-8 w-[95%] sm:w-[90%] md:w-[85%] max-w-6xl shadow-gray-800 drop-shadow-2xl shadow z-20">
          <p
            className="text-base sm:text-lg md:text-xl text-black leading-relaxed mb-8 md:mb-12 font-quattrocentoSans font-regular mx-auto text-center"
            style={{ fontSize: "clamp(16px, 4vw, 24px)", lineHeight: "1.4", maxWidth: "100%" }}
          >
            <b>Effective Date:</b> 1 May 2025
          </p>

          <p
            className="text-base sm:text-lg md:text-xl text-black leading-relaxed mb-8 md:mb-12 font-quattrocentoSans font-regular mx-auto"
            style={{ fontSize: "clamp(16px, 4vw, 24px)", lineHeight: "1.4", maxWidth: "100%" }}
          >
            Welcome to Golf Meet, a technology-led platform operated in India by <b>Koll Corporate Services Private Limited</b> (“Golf Meet”, “we”, “us”, “our”). These Terms of Use (“Terms”) govern your use of our services available via our website (<a href="http://www.golfmeet.com" className="text-blue-600 hover:underline">www.golfmeet.com</a>), mobile app, phone support, or WhatsApp communication.
          </p>

          <p
            className="text-base sm:text-lg md:text-xl text-black leading-relaxed mb-8 md:mb-12 font-quattrocentoSans font- mx-auto"
            style={{ fontSize: "clamp(16px, 4vw, 24px)", lineHeight: "1.4", maxWidth: "100%" }}
          >
            By registering for or using Golf Meet, you (“you”, “user”, or “golfer”) agree to these Terms and our Privacy Policy. If you do not agree with any part of these Terms, please do not use Golf Meet.
          </p>

          <div className="space-y-6 md:space-y-8 mx-auto" style={{ maxWidth: "100%" }}>
            <div>
              <h3
                className="text-lg sm:text-xl md:text-2xl font-bold text-black mb-2 md:mb-4 font-quattrocentoSans"
                style={{ fontSize: "clamp(18px, 5vw, 24px)" }}
              >
                1. Eligibility
              </h3>
              <p
                className="text-base sm:text-lg md:text-xl text-black leading-relaxed mb-8 md:mb-12 font-quattrocentoSans font- mx-auto"
                style={{ fontSize: "clamp(16px, 4vw, 24px)", lineHeight: "1.4", maxWidth: "100%" }}
              >
                You must be at least 18 years of age to use Golf Meet. By using our services, you confirm that you meet this requirement.
              </p>
            </div>

            <div>
              <h3
                className="text-lg sm:text-xl md:text-2xl font-bold text-black mb-2 md:mb-4 font-quattrocentoSans"
                style={{ fontSize: "clamp(18px, 5vw, 24px)" }}
              >
                2. Service Overview
              </h3>
              <p
                className="text-base sm:text-lg md:text-xl text-black leading-relaxed mb-8 md:mb-12 font-quattrocentoSans font- mx-auto"
                style={{ fontSize: "clamp(16px, 4vw, 24px)", lineHeight: "1.4", maxWidth: "100%" }}
              >
                Golf Meet helps amateur and professional golfers connect based on preferred golf courses, dates, and interests. Players are matched for rounds, and scores submitted are used to maintain a national leaderboard valid for the calendar year 2025. Only the top 12 scores of each golfer are counted for leaderboard purposes.
              </p>
            </div>

            <div>
              <h3
                className="text-lg sm:text-xl md:text-2xl font-bold text-black mb-2 md:mb-4 font-quattrocentoSans"
                style={{ fontSize: "clamp(18px, 5vw, 24px)" }}
              >
                3. Account Registration and Subscription
              </h3>
              <ul
                className="space-y-2 sm:space-y-3 md:space-y-4 text-black font-quattrocentoSans text-base sm:text-lg pl-4 sm:pl-6 md:pl-8"
                style={{ fontSize: "clamp(16px, 4vw, 24px)", listStyleType: "disc" }}
              >
                <li style={{ paddingLeft: "5px", marginBottom: "10px" }}>
                  <span style={{ display: "block", marginLeft: "5px" }}>
                    Users can register via our website, mobile app, phone, or WhatsApp.
                  </span>
                </li>
                <li style={{ paddingLeft: "5px", marginBottom: "10px" }}>
                  <span style={{ display: "block", marginLeft: "5px" }}>
                    Registration requires accurate and complete personal information.
                  </span>
                </li>
                <li style={{ paddingLeft: "5px", marginBottom: "10px" }}>
                  <span style={{ display: "block", marginLeft: "5px" }}>
                    A <b>monthly subscription fee</b> must be paid to participate in Golf Meet and be included on the leaderboard.
                  </span>
                </li>
                <li style={{ paddingLeft: "5px", marginBottom: "10px" }}>
                  <span style={{ display: "block", marginLeft: "5px" }}>
                    Subscription fees are <b>non-refundable</b>.
                  </span>
                </li>
                <li style={{ paddingLeft: "5px", marginBottom: "10px" }}>
                  <span style={{ display: "block", marginLeft: "5px" }}>
                    <b>Subscription does not include green fees</b>, which must be paid directly to golf courses.
                  </span>
                </li>
              </ul>
            </div>

            <div>
              <h3
                className="text-lg sm:text-xl md:text-2xl font-bold text-black mb-2 md:mb-4 font-quattrocentoSans"
                style={{ fontSize: "clamp(18px, 5vw, 24px)" }}
              >
                4. User Responsibilities
              </h3>
              <p
                className="text-base sm:text-lg md:text-xl text-black leading-relaxed mb-4 font-quattrocentoSans font- mx-auto"
                style={{ fontSize: "clamp(16px, 4vw, 24px)", lineHeight: "1.4", maxWidth: "100%" }}
              >
                By using Golf Meet, you agree to:
              </p>
              <ul
                className="space-y-2 sm:space-y-3 md:space-y-4 text-black font-quattrocentoSans text-base sm:text-lg pl-4 sm:pl-6 md:pl-8"
                style={{ fontSize: "clamp(16px, 4vw, 24px)", listStyleType: "disc" }}
              >
                <li style={{ paddingLeft: "5px", marginBottom: "10px" }}>
                  <span style={{ display: "block", marginLeft: "5px" }}>
                    Provide accurate information at all times.
                  </span>
                </li>
                <li style={{ paddingLeft: "5px", marginBottom: "10px" }}>
                  <span style={{ display: "block", marginLeft: "5px" }}>
                    Pay all applicable subscription fees on time.
                  </span>
                </li>
                <li style={{ paddingLeft: "5px", marginBottom: "10px" }}>
                  <span style={{ display: "block", marginLeft: "5px" }}>
                    Coordinate with matched players in a respectful and timely manner.
                  </span>
                </li>
                <li style={{ paddingLeft: "5px", marginBottom: "10px" }}>
                  <span style={{ display: "block", marginLeft: "5px" }}>
                    Refrain from using Golf Meet for unlawful or abusive purposes.
                  </span>
                </li>
              </ul>
            </div>

            <div>
              <h3
                className="text-lg sm:text-xl md:text-2xl font-bold text-black mb-2 md:mb-4 font-quattrocentoSans"
                style={{ fontSize: "clamp(18px, 5vw, 24px)" }}
              >
                5. Leaderboard and Score Submissions
              </h3>
              <p
                className="text-base sm:text-lg md:text-xl text-black leading-relaxed mb-4 font-quattrocentoSans font- mx-auto"
                style={{ fontSize: "clamp(16px, 4vw, 24px)", lineHeight: "1.4", maxWidth: "100%" }}
              >
                Your name and submitted scores will be publicly displayed on the Golf Meet leaderboard. The leaderboard is maintained on a calendar-year basis and reflects the best 12 scores submitted by each player. Scores must be genuine and submitted in good faith.
              </p>
              <ul
                className="space-y-2 sm:space-y-3 md:space-y-4 text-black font-quattrocentoSans text-base sm:text-lg pl-4 sm:pl-6 md:pl-8"
                style={{ fontSize: "clamp(16px, 4vw, 24px)", listStyleType: "disc" }}
              >
                <li style={{ paddingLeft: "5px", marginBottom: "10px" }}>
                  <span style={{ display: "block", marginLeft: "5px" }}>
                    Your name and submitted scores will be publicly displayed on the Golf Meet leaderboard.
                  </span>
                </li>
                <li style={{ paddingLeft: "5px", marginBottom: "10px" }}>
                  <span style={{ display: "block", marginLeft: "5px" }}>
                    The leaderboard is maintained on a calendar-year basis and reflects the best 12 scores submitted by each player.
                  </span>
                </li>
                <li style={{ paddingLeft: "5px", marginBottom: "10px" }}>
                  <span style={{ display: "block", marginLeft: "5px" }}>
                    Scores must be genuine and submitted in good faith.
                  </span>
                </li>
              </ul>
            </div>

            <div>
              <h3
                className="text-lg sm:text-xl md:text-2xl font-bold text-black mb-2 md:mb-4 font-quattrocentoSans"
                style={{ fontSize: "clamp(18px, 5vw, 24px)" }}
              >
                6. Data Collection and Use
              </h3>
              <p
                className="text-base sm:text-lg md:text-xl text-black leading-relaxed mb-4 font-quattrocentoSans font- mx-auto"
                style={{ fontSize: "clamp(16px, 4vw, 24px)", lineHeight: "1.4", maxWidth: "100%" }}
              >
                Golf Meet collects and uses personal data as described in our Privacy Policy, including:
              </p>
              <ul
                className="space-y-2 sm:space-y-3 md:space-y-4 text-black font-quattrocentoSans text-base sm:text-lg pl-4 sm:pl-6 md:pl-8"
                style={{ fontSize: "clamp(16px, 4vw, 24px)", listStyleType: "disc" }}
              >
                <li style={{ paddingLeft: "5px", marginBottom: "10px" }}>
                  <span style={{ display: "block", marginLeft: "5px" }}>
                    For processing subscription payments
                  </span>
                </li>
                <li style={{ paddingLeft: "5px", marginBottom: "10px" }}>
                  <span style={{ display: "block", marginLeft: "5px" }}>
                    For matching and scheduling games
                  </span>
                </li>
                <li style={{ paddingLeft: "5px", marginBottom: "10px" }}>
                  <span style={{ display: "block", marginLeft: "5px" }}>
                    For leaderboard display
                  </span>
                </li>
                <li style={{ paddingLeft: "5px", marginBottom: "10px" }}>
                  <span style={{ display: "block", marginLeft: "5px" }}>
                    For promotional outreach
                  </span>
                </li>
                <li style={{ paddingLeft: "5px", marginBottom: "10px" }}>
                  <span style={{ display: "block", marginLeft: "5px" }}>
                    For sharing with select sponsors and third-party service providers (bound by privacy agreements)
                  </span>
                </li>
              </ul>
              <p
                className="text-base sm:text-lg md:text-xl text-black leading-relaxed mb-4 font-quattrocentoSans font- mx-auto"
                style={{ fontSize: "clamp(16px, 4vw, 24px)", lineHeight: "1.4", maxWidth: "100%" }}
              >
                Matched players may receive each other’s contact information solely for scheduling purposes.
              </p>
              <p
                className="text-base sm:text-lg md:text-xl text-black leading-relaxed mb-4 font-quattrocentoSans font- mx-auto"
                style={{ fontSize: "clamp(16px, 4vw, 24px)", lineHeight: "1.4", maxWidth: "100%" }}
              >
                You may request the deletion of your personally identifiable information by contacting us via WhatsApp at <b>+91-8884844444</b>.
              </p>
            </div>

            <div>
              <h3
                className="text-lg sm:text-xl md:text-2xl font-bold text-black mb-2 md:mb-4 font-quattrocentoSans"
                style={{ fontSize: "clamp(18px, 5vw, 24px)" }}
              >
                7. Communications
              </h3>
              <p
                className="text-base sm:text-lg md:text-xl text-black leading-relaxed mb-4 font-quattrocentoSans font- mx-auto"
                style={{ fontSize: "clamp(16px, 4vw, 24px)", lineHeight: "1.4", maxWidth: "100%" }}
              >
                You agree to receive communications from Golf Meet, including:
              </p>
              <ul
                className="space-y-2 sm:space-y-3 md:space-y-4 text-black font-quattrocentoSans text-base sm:text-lg pl-4 sm:pl-6 md:pl-8"
                style={{ fontSize: "clamp(16px, 4vw, 24px)", listStyleType: "disc" }}
              >
                <li style={{ paddingLeft: "5px", marginBottom: "10px" }}>
                  <span style={{ display: "block", marginLeft: "5px" }}>
                    Match coordination and scheduling information
                  </span>
                </li>
                <li style={{ paddingLeft: "5px", marginBottom: "10px" }}>
                  <span style={{ display: "block", marginLeft: "5px" }}>
                    Service updates
                  </span>
                </li>
                <li style={{ paddingLeft: "5px", marginBottom: "10px" }}>
                  <span style={{ display: "block", marginLeft: "5px" }}>
                    Promotional offers from Golf Meet or its sponsors
                  </span>
                </li>
              </ul>
              <p
                className="text-base sm:text-lg md:text-xl text-black leading-relaxed mb-4 font-quattrocentoSans font- mx-auto"
                style={{ fontSize: "clamp(16px, 4vw, 24px)", lineHeight: "1.4", maxWidth: "100%" }}
              >
                You may opt out of promotional messages at any time.
              </p>
            </div>

            <div>
              <h3
                className="text-lg sm:text-xl md:text-2xl font-bold text-black mb-2 md:mb-4 font-quattrocentoSans"
                style={{ fontSize: "clamp(18px, 5vw, 24px)" }}
              >
                8. Third-Party Services
              </h3>
              <p
                className="text-base sm:text-lg md:text-xl text-black leading-relaxed mb-8 md:mb-12 font-quattrocentoSans font- mx-auto"
                style={{ fontSize: "clamp(16px, 4vw, 24px)", lineHeight: "1.4", maxWidth: "100%" }}
              >
                Golf Meet may use third-party providers for services like analytics, advertising, and payment processing. These parties are contractually obligated to use your data only as directed by Golf Meet and in compliance with applicable laws.
              </p>
            </div>

            <div>
              <h3
                className="text-lg sm:text-xl md:text-2xl font-bold text-black mb-2 md:mb-4 font-quattrocentoSans"
                style={{ fontSize: "clamp(18px, 5vw, 24px)" }}
              >
                9. Intellectual Property
              </h3>
              <p
                className="text-base sm:text-lg md:text-xl text-black leading-relaxed mb-8 md:mb-12 font-quattrocentoSans font- mx-auto"
                style={{ fontSize: "clamp(16px, 4vw, 24px)", lineHeight: "1.4", maxWidth: "100%" }}
              >
                All content, trademarks, software, and data associated with Golf Meet are the intellectual property of Golf Meet or its licensors. You may not reproduce, distribute, or create derivative works without prior written consent.
              </p>
            </div>

            <div>
              <h3
                className="text-lg sm:text-xl md:text-2xl font-bold text-black mb-2 md:mb-4 font-quattrocentoSans"
                style={{ fontSize: "clamp(18px, 5vw, 24px)" }}
              >
                10. Limitation of Liability
              </h3>
              <p
                className="text-base sm:text-lg md:text-xl text-black leading-relaxed mb-4 font-quattrocentoSans font- mx-auto"
                style={{ fontSize: "clamp(16px, 4vw, 24px)", lineHeight: "1.4", maxWidth: "100%" }}
              >
                Golf Meet provides its services on an "as-is" basis. We do not guarantee match availability, accuracy of leaderboard rankings, or uninterrupted access to services. Golf Meet shall not be liable for:
              </p>
              <ul
                className="space-y-2 sm:space-y-3 md:space-y-4 text-black font-quattrocentoSans text-base sm:text-lg pl-4 sm:pl-6 md:pl-8"
                style={{ fontSize: "clamp(16px, 4vw, 24px)", listStyleType: "disc" }}
              >
                <li style={{ paddingLeft: "5px", marginBottom: "10px" }}>
                  <span style={{ display: "block", marginLeft: "5px" }}>
                    Any disputes or issues between matched players
                  </span>
                </li>
                <li style={{ paddingLeft: "5px", marginBottom: "10px" }}>
                  <span style={{ display: "block", marginLeft: "5px" }}>
                    Unavailability of tee times or golf course access
                  </span>
                </li>
                <li style={{ paddingLeft: "5px", marginBottom: "10px" }}>
                  <span style={{ display: "block", marginLeft: "5px" }}>
                    Data loss or service interruptions
                  </span>
                </li>
                <li style={{ paddingLeft: "5px", marginBottom: "10px" }}>
                  <span style={{ display: "block", marginLeft: "5px" }}>
                    Any indirect, incidental, or consequential damages
                  </span>
                </li>
              </ul>
            </div>

            <div>
              <h3
                className="text-lg sm:text-xl md:text-2xl font-bold text-black mb-2 md:mb-4 font-quattrocentoSans"
                style={{ fontSize: "clamp(18px, 5vw, 24px)" }}
              >
                11. Termination
              </h3>
              <p
                className="text-base sm:text-lg md:text-xl text-black leading-relaxed mb-4 font-quattrocentoSans font- mx-auto"
                style={{ fontSize: "clamp(16px, 4vw, 24px)", lineHeight: "1.4", maxWidth: "100%" }}
              >
                We reserve the right to suspend or terminate your access to Golf Meet if:
              </p>
              <ul
                className="space-y-2 sm:space-y-3 md:space-y-4 text-black font-quattrocentoSans text-base sm:text-lg pl-4 sm:pl-6 md:pl-8"
                style={{ fontSize: "clamp(16px, 4vw, 24px)", listStyleType: "disc" }}
              >
                <li style={{ paddingLeft: "5px", marginBottom: "10px" }}>
                  <span style={{ display: "block", marginLeft: "5px" }}>
                    You violate these Terms
                  </span>
                </li>
                <li style={{ paddingLeft: "5px", marginBottom: "10px" }}>
                  <span style={{ display: "block", marginLeft: "5px" }}>
                    You misuse the service
                  </span>
                </li>
                <li style={{ paddingLeft: "5px", marginBottom: "10px" }}>
                  <span style={{ display: "block", marginLeft: "5px" }}>
                    You provide false information
                  </span>
                </li>
                <li style={{ paddingLeft: "5px", marginBottom: "10px" }}>
                  <span style={{ display: "block", marginLeft: "5px" }}>
                    You engage in behavior detrimental to other users or Golf Meet
                  </span>
                </li>
              </ul>
              <p
                className="text-base sm:text-lg md:text-xl text-black leading-relaxed mb-4 font-quattrocentoSans font- mx-auto"
                style={{ fontSize: "clamp(16px, 4vw, 24px)", lineHeight: "1.4", maxWidth: "100%" }}
              >
                Termination does not entitle you to a refund of subscription fees.
              </p>
            </div>

            <div>
              <h3
                className="text-lg sm:text-xl md:text-2xl font-bold text-black mb-2 md:mb-4 font-quattrocentoSans"
                style={{ fontSize: "clamp(18px, 5vw, 24px)" }}
              >
                12. Modifications to the Terms
              </h3>
              <p
                className="text-base sm:text-lg md:text-xl text-black leading-relaxed mb-8 md:mb-12 font-quattrocentoSans font- mx-auto"
                style={{ fontSize: "clamp(16px, 4vw, 24px)", lineHeight: "1.4", maxWidth: "100%" }}
              >
                Golf Meet may update these Terms from time to time. Users will be notified of significant changes via email, app notification, or WhatsApp. Continued use of the service after changes constitutes your acceptance.
              </p>
            </div>

            <div>
              <h3
                className="text-lg sm:text-xl md:text-2xl font-bold text-black mb-2 md:mb-4 font-quattrocentoSans"
                style={{ fontSize: "clamp(18px, 5vw, 24px)" }}
              >
                13. Governing Law and Jurisdiction
              </h3>
              <p
                className="text-base sm:text-lg md:text-xl text-black leading-relaxed mb-8 md:mb-12 font-quattrocentoSans font- mx-auto"
                style={{ fontSize: "clamp(16px, 4vw, 24px)", lineHeight: "1.4", maxWidth: "100%" }}
              >
                These Terms shall be governed by and construed in accordance with the laws of India. Any disputes shall be subject to the exclusive jurisdiction of the courts of Bengaluru, India.
              </p>
            </div>

            <div>
              <h3
                className="text-lg sm:text-xl md:text-2xl font-bold text-black mb-2 md:mb-4 font-quattrocentoSans"
                style={{ fontSize: "clamp(18px, 5vw, 24px)" }}
              >
                14. Grievance Redressal
              </h3>
              <p
                className="text-base sm:text-lg md:text-xl text-black leading-relaxed mb-4 font-quattrocentoSans font- mx-auto"
                style={{ fontSize: "clamp(16px, 4vw, 24px)", lineHeight: "1.4", maxWidth: "100%" }}
              >
                For any concerns or grievances, contact our Grievance Officer:
              </p>
              <ul
                className="space-y-2 sm:space-y-3 md:space-y-4 text-black font-quattrocentoSans text-base sm:text-lg pl-4 sm:pl-6 md:pl-8"
                style={{ fontSize: "clamp(16px, 4vw, 24px)", listStyleType: "disc" }}
              >
                <li style={{ paddingLeft: "5px", marginBottom: "10px" }}>
                  <span style={{ display: "block", marginLeft: "5px" }}><b>Name:</b> Grievance officer</span>
                </li>
                <li style={{ paddingLeft: "5px", marginBottom: "10px" }}>
                  <span style={{ display: "block", marginLeft: "5px" }}><b>Email:</b><a href="mailto:golfmeet.email@gmail.com" className="text-blue-600 underline ml-1">
    golfmeet.email@gmail.com
  </a>.</span>
                </li>
                <li style={{ paddingLeft: "5px", marginBottom: "10px" }}>
                  <span style={{ display: "block", marginLeft: "5px" }}><b>Phone:</b> +91-8884844444</span>
                </li>
                <li style={{ paddingLeft: "5px", marginBottom: "10px" }}>
                  <span style={{ display: "block", marginLeft: "5px" }}>
                    <b>Address:</b> Level 7, MFAR-Greenheart, Manyata Tech Park, Outer ring road, Hebbal, Bangalore, Karnataka, India 560045
                  </span>
                </li>
              </ul>
            </div>

            <div>
              <h3
                className="text-lg sm:text-xl md:text-2xl font-bold text-black mb-2 md:mb-4 font-quattrocentoSans"
                style={{ fontSize: "clamp(18px, 5vw, 24px)" }}
              >
                Contact Us
              </h3>
              <p
                className="text-base sm:text-lg md:text-xl text-black leading-relaxed mb-4 font-quattrocentoSans font- mx-auto"
                style={{ fontSize: "clamp(16px, 4vw, 24px)", lineHeight: "1.4", maxWidth: "100%" }}
              >
                For support or inquiries, reach out via WhatsApp at <b>+91-8884844444</b> or email us at <b>golfmeet.email@gmail.com</b>.
              </p>
              <ul
                className="space-y-2 sm:space-y-3 md:space-y-4 text-black font-quattrocentoSans text-base sm:text-lg pl-4 sm:pl-6 md:pl-8"
                style={{ fontSize: "clamp(16px, 4vw, 24px)", listStyleType: "disc" }}
              >
                <li style={{ paddingLeft: "5px", marginBottom: "10px" }}>
                  <span style={{ display: "block", marginLeft: "5px" }}><b>Email:</b> golfmeet.email@gmail.com</span>
                </li>
                <li style={{ paddingLeft: "5px", marginBottom: "10px" }}>
                  <span style={{ display: "block", marginLeft: "5px" }}><b>Phone:</b> +91-8884844444</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <div className="md:hidden">
<Footer />
</div>
<div className="md:block hidden">
<Footerr />
</div>
    </>
  );
}

export default Common;