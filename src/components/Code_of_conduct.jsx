import React from "react";
import tr_bg from "../assets/cdd.svg";
import tr_bg_mobile from "../assets/checkk.webp";
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

function CodeOne() {
  return (
    <>
    <div className="md:overflow-visible overflow-hidden">
      {/* Fixed Navbar at the top */}
        <Navbar />
      {/* Main Hero Section - Fixed overflow */}
      <section 
  className="bg-gray-100 mt-[10vh] noise-bg relative hidden md:flex flex-col min-h-[70vh] xhh:min-h-[50vh] xh:min-h-[50vh]  xsh:min-h-[60vh] xsh-landscape:min-h-[85vh] md:flex-row overflow-hidden"
>
<div className="relative flex flex-col justify-center mt-32 items-start p-8 md:pl-10 md:p-0 xl:ml-20 md:mb-40">
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
              PLAYER CODE OF <br />CONDUCT
            </h1>
            <div className="text-sm xl:w-[95%] lg:w-[85%] md:w-[80%]">Golf Meet is built on respect, trust, and the spirit of true sportsmanship. Review the player code that defines our community.
            </div>
            <p className="font-semibold text-sm mt-4">
            And if you have suggestions, we’re always ready to listen.
            </p>
          </div>
  
  {/* Right Image Section - Positioned at bottom-right */}
  <div className="absolute bottom-0 right-4 xl:w-5/12 h-auto">
    <img
      src={tr_bg}
      alt="Golfers Illustration"
      className="w-full h-auto object-contain object-bottom pointer-events-none"
    />
  </div>
</section>

{/* Code of Conduct Banner - Fixed overflow */}
<section className="md:flex hidden flex-col items-center justify-center -mt-4 mb-0 relative sm:mb-0 w-full">
  <div 
    onClick={() => window.location.href = '/code-of-conduct'}
    className="flex justify-between items-center text-white bg-[#014D4E0D] noise-bg-newest w-full md:px-8 lg:px-32 lg:py-10 md:py-6 cursor-pointer hover:opacity-90 transition-opacity"
  >
    <div className="flex flex-col">
      <h2 className="lg:text-4xl md:4xl text-[1.8rem] font-bold uppercase font-quattrocento">
      RULES & REGULATIONS
      </h2>
      <p className="lg:text-base md:3xl tect-[1.5rem] underline underline-offset-4">
        Please refer to the
        <strong> GolfMeet Rules & Regulations </strong> here
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
      <div style={{ height: "80px" }} className="md:h-[90px] lg:h-[100px]" />

      <section className="sm:bg-gray-100 md:hidden sm:noise-bg noise-bg-n min-h-[90vh] relative flex flex-col overflow-hidden">
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
              PLAYER CODE <br /> OF CONDUCT
            </h1>
            {/* Mobile-only text added here */}
            <div className="xsm:text-xs text-sm md:hidden mb-4 xsm:w-[85%] w-[95%]">
              Golf Meet is built on respect, trust, and the spirit of true sportsmanship. Review the player code that defines our community.
            </div>
            <p className="font-semibold xsm:text-xs text-sm xsm:w-[85%] w-[95%]">
              And if you have suggestions, we're always ready to listen.
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
        <div className="md:hidden relative w-full flex justify-start mt-auto left-0">
          <img
            src={tr_bg_mobile}
            alt="Golfers Illustration Mobile"
            className="w-[93%] object-contain pointer-events-none"
          />
        </div>
      </section>

      <section className="flex flex-col items-center md:hidden justify-center xsm:pt-12 pt-16 bulge-top -mt-4 md:mt-12 relative noise-bg-new sm:mb-0">
        <div className="flex justify-between items-center font-medium xsm:text-lg text-white bg-[#FFFFFF0D] w-[85%] p-7 rounded-md">
          <div className="flex flex-col">
            <h2 className="lg:text-5xl md:4xl text-[1.8rem] uppercase font-quattrocento">
              RULES & REGULATIONS
            </h2>
            <Link to="/code-of-conduct">
              <p className="lg:text-lg md:3xl xsm:text-xs xsm:pt-2 pt-2 underline underline-offset-4">
                Please refer to the
                <strong> GolfMeet Rules & Regulations </strong> here
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
    </div>
    <section className="md:-mt-28 lg:-mt-20 relative px-4 flex items-center  justify-center overflow-x-hidden overflow-y-hidden">
  <div className="absolute top-[50%] left-0 w-full h-1/2 noise-bg-newest"></div>
{/* Absolute background image container for desktop */}
<div className="absolute inset-0 w-full z-10 -mt-36 h-auto hidden md:block">
  <img
    src={code_of_conduct}
    alt="Code of Conduct background"
    className="w-full h-auto"
  />
</div>

{/* Background color for mobile/smaller screens */}
<div className="absolute inset-0 w-full z-6 h-full md:hidden noise-bg-new ">
</div>

{/* Coin Images - adjusted positioning */}
<img
  src={coc_coins1}
  alt="Coins"
  className="absolute md:top-[10%] top-[%] right-0 w-[150px] lg:w-[180px] xl:right-10 xl:w-[200px] z-30 hidden md:block"
/>
<img
  src={coc_coins2}
  alt="Coins"
  className="absolute top-[16%] left-0 w-[100px] lg:w-[120px] xl:left-10 xl:w-[130px] z-30 hidden md:block"
/>
<img
  src={coc_coins2}
  alt="Coins"
  className="absolute md:top-[28%] lg:top-[21%] left-0 w-[100px] lg:w-[120px] xl:left-5 xl:w-[130px] z-30 hidden md:block"
/>
<img
  src={coc_coins3}
  alt="Coins"
  className="absolute top-[43%] left-0 transform -translate-y-1/3 w-[150px] lg:w-[160px] xl:w-[220px] z-10 hidden md:block"
/>
<img
  src={coc_coins4}
  alt="Coins"
  className="absolute w-[180px] bottom-[40%] right-0 xl:w-[200px] lg:w-[190px] z-10 hidden md:block"
/>
<img
  src={coc_coins5}
  alt="Coins"
  className="absolute bottom-[14%] right-[4%] lg:w-[120px] w-[100px] xl:w-[130px] z-30 hidden md:block"
/>

{/* Mobile Coin Images - no change */}
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
  className="absolute top-[7%] right-0 w-[60px] z-30 md:hidden"
/>
<img
  src={mcoc_coins4}
  alt="Coins"
  className="absolute top-[48%] right-0 w-[55px] z-30 md:hidden"
/>
<img
  src={coc_coins2}
  alt="Coins"
  className="absolute top-[70%] -right-12 w-[130px] z-10 md:hidden"
/>


{/* Content Container */}
<div className="relative bg-gray-100 mt-12 mb-20 xsm:mt-10  rounded-lg xhhh:max-w-[95rem] p-4 sm:p-6 md:p-8 w-[95%] sm:w-[90%] md:w-[85%] max-w-6xl shadow-gray-800 drop-shadow-2xl shadow z-20">
  <p className="text-base sm:text-lg md:text-xl text-black leading-relaxed mb-8 md:mb-12 font-quattrocentoSans font-bold mx-auto" style={{ fontSize: "clamp(16px, 4vw, 24px)", lineHeight: "1.4", maxWidth: "100%" }}>
    As a participant in GolfMeet, you are expected to adhere to the
    highest standards of conduct both on and off the course. Your
    behavior should reflect the values of the game of golf—respect,
    integrity, and sportsmanship. This Code of Conduct is in place to
    ensure a fair and enjoyable experience for all players.
  </p>

  <div className="space-y-6 md:space-y-8 mx-auto" style={{ maxWidth: "100%" }}>
    <div>
      <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-black mb-2 md:mb-4 font-quattrocentoSans" style={{ fontSize: "clamp(18px, 5vw, 24px)" }}>
        1. General Conduct
      </h3>
      <ul className="space-y-2 sm:space-y-3 md:space-y-4 text-black font-quattrocentoSans text-base sm:text-lg pl-4 sm:pl-6 md:pl-8" style={{ fontSize: "clamp(14px, 3.5vw, 22px)", listStyleType: "disc" }}>
        <li style={{ paddingLeft: "5px", marginBottom: "10px" }}>
          <span style={{ display: "block", marginLeft: "5px" }}>
            Respect for Others: Treat fellow participants with respect and
            courtesy at all times. Abusive language, disrespectful
            behavior, or acts of aggression will result in penalties or
            disqualification from GolfMeet.
          </span>
        </li>
        <li style={{ paddingLeft: "5px", marginBottom: "10px" }}>
          <span style={{ display: "block", marginLeft: "5px" }}>
            Sportsmanship: Uphold the principles of sportsmanship by
            displaying honesty, courtesy, and fairness. Accept the outcome
            of each round and the tournament with grace and humility,
            regardless of the result.
          </span>
        </li>
        <li style={{ paddingLeft: "5px", marginBottom: "10px" }}>
          <span style={{ display: "block", marginLeft: "5px" }}>
            Compliance with Rules: Adhere to these rules and regulations,
            as well as the local rules of the course. Any violation may
            result in disqualification.
          </span>
        </li>
      </ul>
    </div>

    <div>
      <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-black mb-2 md:mb-4 font-quattrocentoSans" style={{ fontSize: "clamp(18px, 5vw, 24px)" }}>
        2. On the Course
      </h3>
      <ul className="space-y-2 sm:space-y-3 md:space-y-4 text-black font-quattrocentoSans text-base sm:text-lg pl-4 sm:pl-6 md:pl-8" style={{ fontSize: "clamp(14px, 3.5vw, 22px)", listStyleType: "disc" }}>
        <li style={{ paddingLeft: "5px", marginBottom: "10px" }}>
          <span style={{ display: "block", marginLeft: "5px" }}>
            Punctuality: Arrive at your scheduled tee time promptly.
            Delays can disrupt the flow of the round and inconvenience
            other participants. You could incur penalty points if your
            group players complain about your delay.
          </span>
        </li>
        <li style={{ paddingLeft: "5px", marginBottom: "10px" }}>
          <span style={{ display: "block", marginLeft: "5px" }}>
            Course Etiquette: Maintain proper etiquette at all times. This
            includes repairing divots, fixing ball marks on greens, raking
            bunkers, and keeping pace of play.
          </span>
        </li>
        <li style={{ paddingLeft: "5px", marginBottom: "10px" }}>
          <span style={{ display: "block", marginLeft: "5px" }}>
            Quiet Please: Refrain from talking, moving, or making noise
            while another player is preparing to hit or during their
            swing.
          </span>
        </li>
        <li style={{ paddingLeft: "5px", marginBottom: "10px" }}>
          <span style={{ display: "block", marginLeft: "5px" }}>
            Safety: Always ensure that no one is in the line of fire
            before swinging. Be mindful of others' safety and well-being
            at all times.
          </span>
        </li>
        <li style={{ paddingLeft: "5px", marginBottom: "10px" }}>
          <span style={{ display: "block", marginLeft: "5px" }}>
            Scoring: Record the score for each hole as soon as you
            complete the hole.
          </span>
        </li>
      </ul>
    </div>

    <div>
      <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-black mb-2 md:mb-4 font-quattrocentoSans" style={{ fontSize: "clamp(18px, 5vw, 24px)" }}>
        3. Behavior on the Course
      </h3>
      <ul className="space-y-2 sm:space-y-3 md:space-y-4 text-black font-quattrocentoSans text-base sm:text-lg pl-4 sm:pl-6 md:pl-8" style={{ fontSize: "clamp(14px, 3.5vw, 22px)", listStyleType: "disc" }}>
        <li style={{ paddingLeft: "5px", marginBottom: "10px" }}>
          <span style={{ display: "block", marginLeft: "5px" }}>
            No Cheating: Do not engage in any form of cheating, including
            but not limited to altering your scorecard, improving your
            lie, or using prohibited equipment. Violators will be
            disqualified.
          </span>
        </li>
        <li style={{ paddingLeft: "5px", marginBottom: "10px" }}>
          <span style={{ display: "block", marginLeft: "5px" }}>
            Dress Code: Adhere to the tournament's dress code of the
            course, which may include wearing collared shirts, appropriate
            shorts/pants, and golf shoes (spikeless or soft spikes may be
            required).
          </span>
        </li>
        <li style={{ paddingLeft: "5px", marginBottom: "10px" }}>
          <span style={{ display: "block", marginLeft: "5px" }}>
            Mobile Phones: You must carry your mobile phone for recording
            scores in the GolfMeet app. However, please ensure that the
            phone is set to silent or vibrate mode while on the course to
            avoid disturbing play.
          </span>
        </li>
      </ul>
    </div>

    <div>
      <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-black mb-2 md:mb-4 font-quattrocentoSans" style={{ fontSize: "clamp(18px, 5vw, 24px)" }}>
        4. Dispute Resolution
      </h3>
      <ul className="space-y-2 sm:space-y-3 md:space-y-4 text-black font-quattrocentoSans text-base sm:text-lg pl-4 sm:pl-6 md:pl-8" style={{ fontSize: "clamp(14px, 3.5vw, 22px)", listStyleType: "disc" }}>
        <li style={{ paddingLeft: "5px", marginBottom: "10px" }}>
          <span style={{ display: "block", marginLeft: "5px" }}>
            Disputes: Any disputes regarding rulings or decisions should
            be handled calmly and respectfully. In the event of a dispute,
            players should register a request on the GolfMeet app for an
            official and binding resolution.
          </span>
        </li>
      </ul>
    </div>

    <div>
      <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-black mb-2 md:mb-4 font-quattrocentoSans" style={{ fontSize: "clamp(18px, 5vw, 24px)" }}>
        5. Personal Responsibility
      </h3>
      <ul className="space-y-2 sm:space-y-3 md:space-y-4 text-black font-quattrocentoSans text-base sm:text-lg pl-4 sm:pl-6 md:pl-8" style={{ fontSize: "clamp(14px, 3.5vw, 22px)", listStyleType: "disc" }}>
        <li style={{ paddingLeft: "5px", marginBottom: "10px" }}>
          <span style={{ display: "block", marginLeft: "5px" }}>
            Environmental Respect: Take care to preserve the integrity of
            the course by disposing of trash responsibly and avoiding
            damage to the course or surrounding environment.
          </span>
        </li>
        <li style={{ paddingLeft: "5px", marginBottom: "10px" }}>
          <span style={{ display: "block", marginLeft: "5px" }}>
            Attire and Equipment: Players are responsible for bringing
            their own golf clubs, balls, and appropriate attire. GolfMeet
            is not responsible for lost or damaged personal property.
          </span>
        </li>
      </ul>
    </div>

    <div>
      <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-black mb-2 md:mb-4 font-quattrocentoSans" style={{ fontSize: "clamp(18px, 5vw, 24px)" }}>
        6. Disqualification
      </h3>
      <p className="text-base sm:text-lg text-black mb-2 sm:mb-3 md:mb-4 font-quattrocentoSans" style={{ fontSize: "clamp(14px, 3.5vw, 22px)" }}>
        Participants may be disqualified for any of the following
        reasons:
      </p>
      <ul className="space-y-2 sm:space-y-3 md:space-y-4 text-black font-quattrocentoSans text-base sm:text-lg pl-4 sm:pl-6 md:pl-8" style={{ fontSize: "clamp(14px, 3.5vw, 22px)", listStyleType: "disc" }}>
        <li style={{ paddingLeft: "5px", marginBottom: "10px" }}>
          <span style={{ display: "block", marginLeft: "5px" }}>
            Violation of any part of this Code of Conduct.
          </span>
        </li>
        <li style={{ paddingLeft: "5px", marginBottom: "10px" }}>
          <span style={{ display: "block", marginLeft: "5px" }}>
            Deliberate rule violations or cheating.
          </span>
        </li>
        <li style={{ paddingLeft: "5px", marginBottom: "10px" }}>
          <span style={{ display: "block", marginLeft: "5px" }}>
            Inappropriate or disruptive behavior.
          </span>
        </li>
        <li style={{ paddingLeft: "5px", marginBottom: "10px" }}>
          <span style={{ display: "block", marginLeft: "5px" }}>
            Failure to follow directions from officials or staff.
          </span>
        </li>
        <li style={{ paddingLeft: "5px", marginBottom: "10px" }}>
          <span style={{ display: "block", marginLeft: "5px" }}>
            Violating tournament-specific rules or dress codes.
          </span>
        </li>
      </ul>
    </div>

    <p className="text-base sm:text-lg md:text-xl text-black leading-relaxed font-quattrocentoSans font-bold" style={{ fontSize: "clamp(16px, 4vw, 24px)" }}>
      By participating in GolfMeet, you agree to adhere to this Code of
      Conduct and contribute to making the tournament enjoyable for your
      fellow participants.
    </p>
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

export default CodeOne;