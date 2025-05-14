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

<section className="relative px-4 flex items-center  justify-center overflow-x-hidden overflow-y-hidden">
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
<Footerr />
</div>
</>
  );
}

export default Common;