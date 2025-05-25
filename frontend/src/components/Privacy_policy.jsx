import React from "react";
import tr_bg from "../assets/tournament-rule/right-bg.svg";
import pr_m from "../assets/PV.webp";
import Navbar from "./Navbar";
import tr_bg_mobile from "../assets/check.webp";
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
import code_of_conduct from "../assets/code-of-conduct/bgmm.png";
import { Link } from "react-router-dom";

const handleWhatsAppClick = () => {
  // The phone number provided: +91-888 484 4444
  // Remove non-numeric characters for the WhatsApp link
  const phoneNumber = "918884844444"; // Added country code without + sign
  window.open(`https://wa.me/${phoneNumber}`, "_blank");
};

function Policy() {
  return (
    <>
    <div className="md:overflow-visible overflow-hidden">
      {/* Fixed Navbar that will be visible everywhere */}
      <div className="fixed top-0 left-0 right-0 z-50 w-full">
        <Navbar />
      </div>
      <div style={{ height: "80px" }} className="md:h-[90px] lg:h-[100px]" />

      {/* First section with min-h-screen, with padding-top to account for navbar */}
      <section className="sm:bg-gray-100 md:hidden sm:noise-bg noise-bg-n min-h-[90vh] relative flex flex-col overflow-hidden">
        {/* Content container with flex structure */}
        <div className="flex flex-col w-full flex-1 md:flex-row max-w-[1700px] mx-auto relative pt-4 md:pt-16">
          {/* Text Section */}
          <div className="relative flex flex-col justify-center items-start px-8 md:pl-10 md:p-0 xl:ml-20 md:mb-40">
            <h1 
              className="font-quattrocento font-bold xsm:text-[2.4rem] text-[2.9rem] text-[#201E15] sm:text-5xl lg:text-[80px] pt-8 leading-[100%] tracking-[0.025em] mb-4"
              style={{
                background: 'linear-gradient(180deg, rgba(255, 180, 30, 0.9) 0%, #014D4E 66%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                textFillColor: 'transparent',
                textShadow: '0px 0px 1px rgba(0, 0, 0, 0.15)',
                filter: 'drop-shadow(0px 0.5px 0.5px rgba(0, 0, 0, 0.2))',
              }}
            >
              PRIVACY <br />POLICY
            </h1>
            {/* Mobile-only text added here */}
            <div className="xsm:text-xs text-sm md:hidden mb-4 xsm:w-[90%] w-[98%]">
              Review the terms that govern your Golf Meet experience — crafted to ensure a trusted, respectful, and rewarding environment for every player.
            </div>
          </div>
          
          {/* Desktop image container - fills full right side */}
          <div className="hidden md:block relative bottom-0 right-0 md:w-1/2">
            <img
              src={tr_bg}
              alt="Golfers Illustration"
              className="w-[93%] h-auto object-contain pointer-events-none md:mr-12"
            />
          </div>
        </div>
        
        {/* Mobile image container - positioned at bottom */}
        <div className="md:hidden relative w-full flex justify-end mt-auto">
          <img
            src={pr_m}
            alt="Golfers Illustration Mobile"
            className="w-[87%] object-contain pointer-events-none"
          />
        </div>
      </section>

      <section className="md:hidden flex flex-col items-center justify-center xsm:pt-12 pt-16 bulge-top -mt-3 md:mt-12 relative noise-bg-new sm:mb-0">
        <div className="flex justify-between items-center font-medium xsm:text-lg text-white bg-[#FFFFFF0D] w-[85%] p-7 rounded-md">
          <div className="flex flex-col">
            <h2 className="lg:text-5xl md:4xl text-[1.8rem] uppercase font-quattrocento">
              TERMS OF USE
            </h2>
            <Link to="/code-of-conduct">
              <p className="lg:text-lg md:3xl w-[90%] xsm:text-xs xsm:pt-2 pt-2 underline underline-offset-4">
                Please refer to the 
                <strong> Terms of Use </strong> here
              </p>
            </Link>
          </div>
          <div>
            <svg
              width="22"
              height="42"
              viewBox="0 0 25 47"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1 1.5L23 23.5L1 45.5"
                stroke="#FFF"
                strokeWidth="2"
              />
            </svg>
          </div>
        </div>
      </section>
      <section
              className="bg-gray-100 noise-bg-optim  relative hidden md:flex flex-col md:min-h-[70vh] lg:min-h-[75vh] md:flex-row"
            >
              <div className="flex flex-col w-full justify-between md:justify-around md:flex-row max-w-[1700px] mx-auto">
                {/* Text Section */}
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
                    PRIVACY <br /> POLICY
                  </h1>
                  <div className="text-sm w-[95%]">
                  Review the terms that govern your Golf Meet experience — crafted to ensure a trusted, respectful, and rewarding environment for every player. 
                  </div>
                </div>
      
                {/* Right Image Section */}
                <div className="flex items-center justify-center px-5 md:px-0 md:items-end mt-8">
                  <img
                    src={tr_bg_mobile}
                    alt="Golfers Illustration"
                    className="xl:w-[60%] lg:w-[75%] md:w-[85%] object-contain pointer-events-none"
                  />
                </div>
              </div>
            </section>
            <section className=" md:z-10 md:flex hidden flex-col items-center justify-center -mt-2 relative sm:mb-0 w-full">
        <div 
          onClick={() => window.location.href = '/terms-of-use'}
          className="flex justify-between items-center text-white bg-[#014D4E0D] noise-bg-newest w-full md:px-8 lg:px-32 lg:py-10 md:py-6 cursor-pointer hover:opacity-90 transition-opacity"
        >
          <div className="flex flex-col">
            <h2 className="lg:text-4xl md:4xl text-[1.8rem] font-bold uppercase font-quattrocento">
            TERMS OF USE
            </h2>
            <p className="lg:text-base md:3xl tect-[1.5rem] underline underline-offset-4">
              Please refer to the
              <strong> GolfMeet Terms of Use </strong> here
            </p>
          </div>
          <div>
            <svg
              width="22"
              height="42"
              viewBox="0 0 25 47"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1 1.5L23 23.5L1 45.5"
                stroke="#FFF"
                strokeWidth="2"
              />
            </svg>
          </div>
        </div>
      </section>
      
    </div>
          <section className="md:overflow-visible relative px-4 flex items-center justify-center overflow-hidden">
        {/* Absolute background image container for desktop */}
        <div className="absolute top-[50%] left-0 w-full h-1/2 noise-bg-newest"></div>
        <div className="absolute -mt-32 inset-0 w-full z-0 h-full hidden md:block">
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
          className="absolute lg:top-[3%] top-[6%] -right-3 w-[150px] lg:w-[180px] lg:-right-6 xl:right-20 xl:w-[200px] z-30 hidden md:block"
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
          className="absolute bottom-[62%] left-0 xsm:w-[60px] w-[50px] z-30 md:hidden"
        />
        <img
          src={mcoc_coins3}
          alt="Coins"
          className="absolute xsm:top-[3%] top-[10%] right-0 w-[60px] z-30 md:hidden"
        />
        <img
          src={mcoc_coins4}
          alt="Coins"
          className="absolute xsm:top-[49%] top-[56%] right-0 w-[55px] z-30 md:hidden"
        />
        <img
          src={coc_coins2}
          alt="Coins"
          className="absolute top-[70%] -right-12 w-[130px] z-10 md:hidden"
        />
        <img
          src={coc_coins2}
          alt="Coins"
          className="absolute top-[18%] lg:top-[21%] left-0 w-[100px] lg:w-[120px] lg:left-0 xl:left-12 xl:w-[130px] z-30 hidden md:block"
        />
        <img
          src={coc_coins3}
          alt="Coins"
          className="absolute top-[68%] left-0 lg:left-12 xl-left-10 transform -translate-y-1/3 w-[150px] lg:w-[160px] xl-w-[220px] z-10 hidden md:block"
        />
        <img
          src={coc_coins4}
          alt="Coins"
          className="absolute w-[180px] bottom-[25%] right-0 xl:w-[200px] w-140px lg:w-[190px] z-10 hidden md:block"
        />
        <img
          src={coc_coins5}
          alt="Coins"
          className="absolute bottom-[14%] right-[5%] lg:w-[120px] w-[100px] xl:w-[130px] z-30 hidden md:block"
        />

        {/* Content Container */}
        <div className="relative bg-gray-100 mt-12 xhhh:max-w-[93rem] mb-20 xsm:mt-10 rounded-lg p-4 sm:p-6 md:p-8 w-[95%] sm:w-[90%] md:w-[85%] max-w-6xl shadow-gray-800 drop-shadow-2xl shadow z-20">
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
            Golf Meet (“we”, “us”, “our”) is committed to protecting the privacy and personal data of its users in
            accordance with the <b>Digital Personal Data Protection Act, 2023 (DPDP Act)</b> of India.
          </p>

          <p
            className="text-base sm:text-lg md:text-xl text-black leading-relaxed mb-8 md:mb-12 font-quattrocentoSans font- mx-auto"
            style={{ fontSize: "clamp(16px, 4vw, 24px)", lineHeight: "1.4", maxWidth: "100%" }}
          >
            This Privacy Policy explains how Golf Meet collects, uses, shares, stores, and protects your personal data
            when you use our services through our website, mobile application, phone calls, or instant messaging
            applications like WhatsApp. Golf Meet is operated in India by <b>Koll Corporate Services Private Limited.</b>
          </p>

          <div className="space-y-6 md:space-y-8 mx-auto" style={{ maxWidth: "100%" }}>
            <div>
              <h3
                className="text-lg sm:text-xl md:text-2xl font-bold text-black mb-2 md:mb-4 font-quattrocentoSans"
                style={{ fontSize: "clamp(18px, 5vw, 24px)" }}
              >
                1. Personal Data We Collect
              </h3>
              <p
                className="text-base sm:text-lg md:text-xl text-black leading-relaxed mb-4 font-quattrocentoSans font- mx-auto"
                style={{ fontSize: "clamp(16px, 4vw, 24px)", lineHeight: "1.4", maxWidth: "100%" }}
              >
                We collect the following personal data from you:
              </p>

              <ul
                className="space-y-2 sm:space-y-3 md:space-y-4 text-black font-quattrocentoSans text-base sm:text-lg pl-4 sm:pl-6 md:pl-8"
                style={{ fontSize: "clamp(16px, 4vw, 24px)", listStyleType: "disc" }}
              >
                <li style={{ paddingLeft: "5px", marginBottom: "10px" }}>
                  <span style={{ display: "block", marginLeft: "5px" }}>Full Name</span>
                </li>
                <li style={{ paddingLeft: "5px", marginBottom: "10px" }}>
                  <span style={{ display: "block", marginLeft: "5px" }}>
                    Contact Information (Phone number, Email, WhatsApp number, etc.)
                  </span>
                </li>
                <li style={{ paddingLeft: "5px", marginBottom: "10px" }}>
                  <span style={{ display: "block", marginLeft: "5px" }}>Preferred Golf Courses and Dates</span>
                </li>
                <li style={{ paddingLeft: "5px", marginBottom: "10px" }}>
                  <span style={{ display: "block", marginLeft: "5px" }}>Payment Details for Subscription</span>
                </li>
                <li style={{ paddingLeft: "5px", marginBottom: "10px" }}>
                  <span style={{ display: "block", marginLeft: "5px" }}>Golf Scores and Leaderboard Data</span>
                </li>
                <li style={{ paddingLeft: "5px", marginBottom: "10px" }}>
                  <span style={{ display: "block", marginLeft: "5px" }}>
                    Location (as may be required for scheduling)
                  </span>
                </li>
                <li style={{ paddingLeft: "5px", marginBottom: "10px" }}>
                  <span style={{ display: "block", marginLeft: "5px" }}>
                    Interests related to golfing and golf events
                  </span>
                </li>
              </ul>
              <p
                className="text-base sm:text-lg md:text-xl text-black leading-relaxed mb-4 font-quattrocentoSans font- mx-auto"
                style={{ fontSize: "clamp(16px, 4vw, 24px)", lineHeight: "1.4", maxWidth: "100%" }}
              >
                We may collect this data when you:
              </p>
              <ul
                className="space-y-2 sm:space-y-3 md:space-y-4 text-black font-quattrocentoSans text-base sm:text-lg pl-4 sm:pl-6 md:pl-8"
                style={{ fontSize: "clamp(16px, 4vw, 24px)", listStyleType: "disc" }}
              >
                <li style={{ paddingLeft: "5px", marginBottom: "10px" }}>
                  <span style={{ display: "block", marginLeft: "5px" }}>
                    Register via website, app, phone call, or WhatsApp
                  </span>
                </li>
                <li style={{ paddingLeft: "5px", marginBottom: "10px" }}>
                  <span style={{ display: "block", marginLeft: "5px" }}>Pay your subscription</span>
                </li>
                <li style={{ paddingLeft: "5px", marginBottom: "10px" }}>
                  <span style={{ display: "block", marginLeft: "5px" }}>Submit scores after rounds</span>
                </li>
                <li style={{ paddingLeft: "5px", marginBottom: "10px" }}>
                  <span style={{ display: "block", marginLeft: "5px" }}>
                    Interact with us for match scheduling or support
                  </span>
                </li>
              </ul>
            </div>

            <div>
              <h3
                className="text-lg sm:text-xl md:text-2xl font-bold text-black mb-2 md:mb-4 font-quattrocentoSans"
                style={{ fontSize: "clamp(18px, 5vw, 24px)" }}
              >
                2. Purpose of Processing
              </h3>
              <p
                className="text-base sm:text-lg md:text-xl text-black leading-relaxed mb-4 font-quattrocentoSans font- mx-auto"
                style={{ fontSize: "clamp(16px, 4vw, 24px)", lineHeight: "1.4", maxWidth: "100%" }}
              >
                We process your personal data for the following purposes:
              </p>
              <ul
                className="space-y-2 sm:space-y-3 md:space-y-4 text-black font-quattrocentoSans text-base sm:text-lg pl-4 sm:pl-6 md:pl-8"
                style={{ fontSize: "clamp(16px, 4vw, 24px)", listStyleType: "disc" }}
              >
                <li style={{ paddingLeft: "5px", marginBottom: "10px" }}>
                  <span style={{ display: "block", marginLeft: "5px" }}>
                    To match you with other golfers (amateur or professional)
                  </span>
                </li>
                <li style={{ paddingLeft: "5px", marginBottom: "10px" }}>
                  <span style={{ display: "block", marginLeft: "5px" }}>To process subscription payments</span>
                </li>
                <li style={{ paddingLeft: "5px", marginBottom: "10px" }}>
                  <span style={{ display: "block", marginLeft: "5px" }}>
                    To schedule and coordinate upcoming rounds
                  </span>
                </li>
                <li style={{ paddingLeft: "5px", marginBottom: "10px" }}>
                  <span style={{ display: "block", marginLeft: "5px" }}>
                    To maintain and display the annual leaderboard
                  </span>
                </li>
                <li style={{ paddingLeft: "5px", marginBottom: "10px" }}>
                  <span style={{ display: "block", marginLeft: "5px" }}>
                    To send service-related communications
                  </span>
                </li>
                <li style={{ paddingLeft: "5px", marginBottom: "10px" }}>
                  <span style={{ display: "block", marginLeft: "5px" }}>
                    To contact you with promotional offers (including from sponsors)
                  </span>
                </li>
                <li style={{ paddingLeft: "5px", marginBottom: "10px" }}>
                  <span style={{ display: "block", marginLeft: "5px" }}>
                    To conduct analytics, ad serving, and improve our services
                  </span>
                </li>
              </ul>
            </div>

            <div>
              <h3
                className="text-lg sm:text-xl md:text-2xl font-bold text-black mb-2 md:mb-4 font-quattrocentoSans"
                style={{ fontSize: "clamp(18px, 5vw, 24px)" }}
              >
                3. Legal Basis for Processing
              </h3>
              <p
                className="text-base sm:text-lg md:text-xl text-black leading-relaxed mb-8 md:mb-12 font-quattrocentoSans font- mx-auto"
                style={{ fontSize: "clamp(16px, 4vw, 24px)", lineHeight: "1.4", maxWidth: "100%" }}
              >
                We rely on your consent, which you provide by using our services and submitting your data. You may
                withdraw your consent at any time (see Section 8 below).
              </p>
            </div>

            <div>
              <h3
                className="text-lg sm:text-xl md:text-2xl font-bold text-black mb-2 md:mb-4 font-quattrocentoSans"
                style={{ fontSize: "clamp(18px, 5vw, 24px)" }}
              >
                4. Data Sharing and Disclosure
              </h3>
              <p
                className="text-base sm:text-lg md:text-xl text-black leading-relaxed mb-4 font-quattrocentoSans font- mx-auto"
                style={{ fontSize: "clamp(16px, 4vw, 24px)", lineHeight: "1.4", maxWidth: "100%" }}
              >
                We may share your personal data with the following:
              </p>
              <ul
                className="space-y-2 sm:space-y-3 md:space-y-4 text-black font-quattrocentoSans text-base sm:text-lg pl-4 sm:pl-6 md:pl-8"
                style={{ fontSize: "clamp(16px, 4vw, 24px)", listStyleType: "disc" }}
              >
                <li style={{ paddingLeft: "5px", marginBottom: "10px" }}>
                  <span style={{ display: "block", marginLeft: "5px" }}>
                    Matched Players: Your contact information is shared with matched players to help coordinate golf
                    rounds.
                  </span>
                </li>
                <li style={{ paddingLeft: "5px", marginBottom: "10px" }}>
                  <span style={{ display: "block", marginLeft: "5px" }}>
                    Sponsors: Select sponsors may receive limited personal data for marketing purposes.
                  </span>
                </li>
                <li style={{ paddingLeft: "5px", marginBottom: "10px" }}>
                  <span style={{ display: "block", marginLeft: "5px" }}>
                    Third-Party Service Providers: We use vendors for analytics, payment processing, and ad serving, who
                    are contractually bound to use data only for Golf Meet’s purposes and in compliance with the DPDP Act.
                  </span>
                </li>
                <li style={{ paddingLeft: "5px", marginBottom: "10px" }}>
                  <span style={{ display: "block", marginLeft: "5px" }}>
                    Leaderboard Display: Your name and scores are publicly displayed on the leaderboard for the relevant
                    calendar year.
                  </span>
                </li>
              </ul>
              <p
                className="text-base sm:text-lg md:text-xl text-black leading-relaxed mb-8 md:mb-12 font-quattrocentoSans font- mx-auto"
                style={{ fontSize: "clamp(16px, 4vw, 24px)", lineHeight: "1.4", maxWidth: "100%" }}
              >
                We do not sell your personal data to third parties.
              </p>
            </div>

            <div>
              <h3
                className="text-lg sm:text-xl md:text-2xl font-bold text-black mb-2 md:mb-4 font-quattrocentoSans"
                style={{ fontSize: "clamp(18px, 5vw, 24px)" }}
              >
                5. Data Retention
              </h3>
              <p
                className="text-base sm:text-lg md:text-xl text-black leading-relaxed mb-8 md:mb-12 font-quattrocentoSans font- mx-auto"
                style={{ fontSize: "clamp(16px, 4vw, 24px)", lineHeight: "1.4", maxWidth: "100%" }}
              >
                We retain personal data only for as long as necessary to fulfill the purposes stated above or as required
                by law. Leaderboard data is retained for one calendar year.
              </p>
            </div>

            <div>
              <h3
                className="text-lg sm:text-xl md:text-2xl font-bold text-black mb-2 md:mb-4 font-quattrocentoSans"
                style={{ fontSize: "clamp(18px, 5vw, 24px)" }}
              >
                6. Data Security
              </h3>
              <p
                className="text-base sm:text-lg md:text-xl text-black leading-relaxed mb-8 md:mb-12 font-quattrocentoSans font- mx-auto"
                style={{ fontSize: "clamp(16px, 4vw, 24px)", lineHeight: "1.4", maxWidth: "100%" }}
              >
                We implement appropriate technical and organizational measures to protect your personal data against
                unauthorized access, alteration, disclosure, or destruction.
              </p>
            </div>

            <div>
              <h3
                className="text-lg sm:text-xl md:text-2xl font-bold text-black mb-2 md:mb-4 font-quattrocentoSans"
                style={{ fontSize: "clamp(18px, 5vw, 24px)" }}
              >
                7. Your Rights Under the DPDP Act
              </h3>
              <p
                className="text-base sm:text-lg md:text-xl text-black leading-relaxed mb-4 font-quattrocentoSans font- mx-auto"
                style={{ fontSize: "clamp(16px, 4vw, 24px)", lineHeight: "1.4", maxWidth: "100%" }}
              >
                As a Data Principal under the DPDP Act, you have the following rights:
              </p>
              <ul
                className="space-y-2 sm:space-y-3 md:space-y-4 text-black font-quattrocentoSans text-base sm:text-lg pl-4 sm:pl-6 md:pl-8"
                style={{ fontSize: "clamp(16px, 4vw, 24px)", listStyleType: "disc" }}
              >
                <li style={{ paddingLeft: "5px", marginBottom: "10px" }}>
                  <span style={{ display: "block", marginLeft: "5px" }}>
                    <b>Right to Access:</b> Request a copy of your personal data.
                  </span>
                </li>
                <li style={{ paddingLeft: "5px", marginBottom: "10px" }}>
                  <span style={{ display: "block", marginLeft: "5px" }}>
                    <b>Right to Correction:</b> Request correction of inaccurate or outdated information.
                  </span>
                </li>
                <li style={{ paddingLeft: "5px", marginBottom: "10px" }}>
                  <span style={{ display: "block", marginLeft: "5px" }}>
                    <b>Right to Erasure:</b> Request deletion of your personal data.
                  </span>
                </li>
                <li style={{ paddingLeft: "5px", marginBottom: "10px" }}>
                  <span style={{ display: "block", marginLeft: "5px" }}>
                    <b>Right to Withdraw Consent:</b> Withdraw your consent at any time.
                  </span>
                </li>
              </ul>
            </div>

            <div>
              <h3
                className="text-lg sm:text-xl md:text-2xl font-bold text-black mb-2 md:mb-4 font-quattrocentoSans"
                style={{ fontSize: "clamp(18px, 5vw, 24px)" }}
              >
                8. How to Exercise Your Rights
              </h3>
              <p
                className="text-base sm:text-lg md:text-xl text-black leading-relaxed mb-8 md:mb-12 font-quattrocentoSans font- mx-auto"
                style={{ fontSize: "clamp(16px, 4vw, 24px)", lineHeight: "1.4", maxWidth: "100%" }}
              >
                You may request deletion of your personal data or exercise any other rights by contacting us via WhatsApp
                at <b>+91-8884844444</b>.
              </p>
            </div>

            <div>
              <h3
                className="text-lg sm:text-xl md:text-2xl font-bold text-black mb-2 md:mb-4 font-quattrocentoSans"
                style={{ fontSize: "clamp(18px, 5vw, 24px)" }}
              >
                9. Children’s Privacy
              </h3>
              <p
                className="text-base sm:text-lg md:text-xl text-black leading-relaxed mb-8 md:mb-12 font-quattrocentoSans font- mx-auto"
                style={{ fontSize: "clamp(16px, 4vw, 24px)", lineHeight: "1.4", maxWidth: "100%" }}
              >
                Golf Meet is not intended for use by individuals under the age of 18. We do not knowingly collect
                personal data from children.
              </p>
            </div>

            <div>
              <h3
                className="text-lg sm:text-xl md:text-2xl font-bold text-black mb-2 md:mb-4 font-quattrocentoSans"
                style={{ fontSize: "clamp(18px, 5vw, 24px)" }}
              >
                10. Grievance Officer
              </h3>
              <p
                className="text-base sm:text-lg md:text-xl text-black leading-relaxed mb-4 font-quattrocentoSans font- mx-auto"
                style={{ fontSize: "clamp(16px, 4vw, 24px)", lineHeight: "1.4", maxWidth: "100%" }}
              >
                For any concerns or grievances related to your personal data, you may contact our Grievance Officer:
              </p>
              <ul
                className="space-y-2 sm:space-y-3 md:space-y-4 text-black font-quattrocentoSans text-base sm:text-lg pl-4 sm:pl-6 md:pl-8"
                style={{ fontSize: "clamp(16px, 4vw, 24px)", listStyleType: "disc" }}
              >
                <li style={{ paddingLeft: "5px", marginBottom: "10px" }}>
                  <span style={{ display: "block", marginLeft: "5px" }}><b>Name:</b> Grievance officer</span>
                </li>
                <li style={{ paddingLeft: "5px", marginBottom: "10px" }}>
                  <span style={{ display: "block", marginLeft: "5px" }}><b>Email:</b> <a href="mailto:golfmeet.email@gmail.com" className="text-blue-600 underline ml-1">
    golfmeet.email@gmail.com
  </a>.</span>
                </li>
                <li style={{ paddingLeft: "5px", marginBottom: "10px" }}>
                  <span style={{ display: "block", marginLeft: "5px" }}><b>Phone:</b> +91-8884844444</span>
                </li>
                <li style={{ paddingLeft: "5px", marginBottom: "10px" }}>
                  <span style={{ display: "block", marginLeft: "5px" }}>
                    <b>Address:</b> Level 7, MFAR-Greenheart, Manyata Tech Park, Outer ring road, Hebbal, Bangalore, Karnataka,
                    India 560045
                  </span>
                </li>
              </ul>
            </div>

            <div>
              <h3
                className="text-lg sm:text-xl md:text-2xl font-bold text-black mb-2 md:mb-4 font-quattrocentoSans"
                style={{ fontSize: "clamp(18px, 5vw, 24px)" }}
              >
                11. Changes to this Policy
              </h3>
              <p
                className="text-base sm:text-lg md:text-xl text-black leading-relaxed mb-8 md:mb-12 font-quattrocentoSans font- mx-auto"
                style={{ fontSize: "clamp(16px, 4vw, 24px)", lineHeight: "1.4", maxWidth: "100%" }}
              >
                We may update this Privacy Policy from time to time. Any changes will be notified via our website or app.
                Continued use of the service implies your acceptance of the revised policy.
              </p>
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
                If you have any questions regarding this policy, contact us at:
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
<Footer />
</div>
</>
    
  );
}

export default Policy;