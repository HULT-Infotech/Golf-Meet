import React from "react";
import tr_bg from "../assets/tournament-rule/right-bg.svg";
import code_of_conduct_greenleft from "../assets/code-of-conduct/code-conduct-left.svg";
import code_of_conduct_greenleft_mobile from "../assets/code-of-conduct/code-conduct-left-mobile.svg";
import coc_coins1 from "../assets/coc-coins1.svg";
import coc_coins2 from "../assets/coc-coins2.svg";
import coc_coins3 from "../assets/coc-coins3.svg";
import coc_coins4 from "../assets/coc-coins4.svg";
import coc_coins5 from "../assets/coc-coins5.svg";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import code_of_conduct from "../assets/code-of-conduct/bg-code.png";

function CodeOfConduct() {
  return (
    <>
      <Navbar />
      <section className="bg-gray-100 noise-bg relative flex flex-col md:min-h-[70vh] md:flex-row ">
        <div className="flex flex-col w-full justify-between md:justify-around gap-24 md:flex-row max-w-[1700px] mx-auto">
          {/* Text Section */}
          <div className="relative flex flex-col justify-center items-start p-8 md:pl-10 md:p-0 xl:ml-20">
            <h1 className="font-quattrocento text-6xl lg:text-7xl xl:text-8xl max-w-2xl font-bold mb-4 text-[#201E15]" style={{ fontSize: "64px" }}>
              PLAYER CODE OF CONDUCT
            </h1>
          </div>

          {/* Right Image Section */}
          <div className="flex relative -bottom-3 items-end px-5 md:px-0">
            <img
              src={tr_bg}
              alt="Golfers Illustration"
              className="w-full object-contain pointer-events-none"
            />
          </div>
        </div>

        {/* Decorative Green Element */}
        <img
          src={code_of_conduct_greenleft}
          alt="Green left element"
          className="hidden md:block absolute md:-bottom-12 left-0 w-[270px] md:w-[400px] lg:-bottom-24 object-contain pointer-events-none"
        />
        <img
          src={code_of_conduct_greenleft_mobile}
          alt="Green left element"
          className="absolute md:hidden -bottom-20 sm:-bottom-20 left-0 w-[350px]"
        />
      </section>

      {/* Tournament Rules Section */}
      <section className="flex flex-col items-center justify-center mt-16 relative">
        <div className="flex justify-between items-center text-[#014D4E] bg-[#014D4E0D] w-[85%] p-7 rounded-md">
          <div className="flex flex-col">
            <h2 className="text-5xl font-bold uppercase font-quattrocento" style={{ fontSize: "52px" }}>
              TOURNAMENT RULES
            </h2>
            <p className="text-lg underline underline-offset-4" style={{ fontSize: "22px" }}>
              Please refer to the
              <strong> GolfMeet Tournament Rules </strong> here
            </p>
          </div>
          <div>
            <svg
              width="25"
              height="47"
              viewBox="0 0 25 47"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1 1.5L23 23.5L1 45.5"
                stroke="#014D4E"
                strokeWidth="2"
              />
            </svg>
          </div>
        </div>
      </section>

      {/* Code of Conduct Section */}
      <section className="relative mt-32 px-4 flex items-center justify-center">
        {/* Absolute background image container */}
        <div className="absolute inset-0 w-full z-6 h-full">
          <img
            src={code_of_conduct}
            alt="Code of Conduct background"
            className="w-full h-full"
          />
        </div>

        {/* Coin Images */}
        <img
          src={coc_coins1}
          alt="Coins"
          className="absolute top-[2%] right-20 w-[150px] md:w-[240px] z-30"
        />
        <img
          src={coc_coins2}
          alt="Coins"
          className="absolute top-[13%] left-20 w-[100px] md:w-[150px] z-30"
        />
        <img
          src={coc_coins2}
          alt="Coins"
          className="absolute top-[22%] left-16 w-[100px] md:w-[150px] z-10"
        />
        <img
          src={coc_coins3}
          alt="Coins"
          className="absolute top-[40%] left-8  transform -translate-y-1/3 w-[150px] md:w-[200px] z-10"
        />
        <img
          src={coc_coins4}
          alt="Coins"
          className="absolute bottom-[25%] right-0 w-[150px] md:w-[240px] z-10"
        />
        <img
          src={coc_coins5}
          alt="Coins"
          className="absolute bottom-[14%] right-[5%] w-[100px] md:w-[150px] z-30"
        />

        {/* Content Container */}
        <div className="relative bg-gray-100 bottom-20 rounded-lg p-8 w-[85%] max-w-6xl shadow-gray-800 drop-shadow-2xl shadow z-20">
          <p className="text-xl text-black leading-relaxed mb-12 font-quattrocentoSans font-bold max-w-4xl mx-auto" style={{ fontSize: "24px", lineHeight: "1.4" }}>
            As a participant in GolfMeet, you are expected to adhere to the
            highest standards of conduct both on and off the course. Your
            behavior should reflect the values of the game of golf—respect,
            integrity, and sportsmanship. This Code of Conduct is in place to
            ensure a fair and enjoyable experience for all players.
          </p>

          <div className="space-y-8 max-w-4xl mx-auto">
            <div>
              <h3 className="text-xl font-bold text-black mb-4 font-quattrocentoSans" style={{ fontSize: "24px" }}>
                1. General Conduct
              </h3>
              <ul className="space-y-4 text-black font-quattrocentoSans text-lg pl-8" style={{ fontSize: "22px", listStyleType: "disc" }}>
                <li style={{ paddingLeft: "10px" }}>
                  <span style={{ display: "block", marginLeft: "10px" }}>
                    Respect for Others: Treat fellow participants with respect and
                    courtesy at all times. Abusive language, disrespectful
                    behavior, or acts of aggression will result in penalties or
                    disqualification from GolfMeet.
                  </span>
                </li>
                <li style={{ paddingLeft: "10px" }}>
                  <span style={{ display: "block", marginLeft: "10px" }}>
                    Sportsmanship: Uphold the principles of sportsmanship by
                    displaying honesty, courtesy, and fairness. Accept the outcome
                    of each round and the tournament with grace and humility,
                    regardless of the result.
                  </span>
                </li>
                <li style={{ paddingLeft: "10px" }}>
                  <span style={{ display: "block", marginLeft: "10px" }}>
                    Compliance with Rules: Adhere to these rules and regulations,
                    as well as the local rules of the course. Any violation may
                    result in disqualification.
                  </span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-3xl font-bold text-black mb-4 font-quattrocentoSans" style={{ fontSize: "24px" }}>
                2. On the Course
              </h3>
              <ul className="space-y-4 text-black font-quattrocentoSans text-lg pl-8" style={{ fontSize: "22px", listStyleType: "disc" }}>
                <li style={{ paddingLeft: "10px" }}>
                  <span style={{ display: "block", marginLeft: "10px" }}>
                    Punctuality: Arrive at your scheduled tee time promptly.
                    Delays can disrupt the flow of the round and inconvenience
                    other participants. You could incur penalty points if your
                    group players complain about your delay.
                  </span>
                </li>
                <li style={{ paddingLeft: "10px" }}>
                  <span style={{ display: "block", marginLeft: "10px" }}>
                    Course Etiquette: Maintain proper etiquette at all times. This
                    includes repairing divots, fixing ball marks on greens, raking
                    bunkers, and keeping pace of play.
                  </span>
                </li>
                <li style={{ paddingLeft: "10px" }}>
                  <span style={{ display: "block", marginLeft: "10px" }}>
                    Quiet Please: Refrain from talking, moving, or making noise
                    while another player is preparing to hit or during their
                    swing.
                  </span>
                </li>
                <li style={{ paddingLeft: "10px" }}>
                  <span style={{ display: "block", marginLeft: "10px" }}>
                    Safety: Always ensure that no one is in the line of fire
                    before swinging. Be mindful of others' safety and well-being
                    at all times.
                  </span>
                </li>
                <li style={{ paddingLeft: "10px" }}>
                  <span style={{ display: "block", marginLeft: "10px" }}>
                    Scoring: Record the score for each hole as soon as you
                    complete the hole.
                  </span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-3xl font-bold text-black mb-4 font-quattrocentoSans" style={{ fontSize: "24px" }}>
                3. Behavior on the Course
              </h3>
              <ul className="space-y-4 text-black font-quattrocentoSans text-lg pl-8" style={{ fontSize: "22px", listStyleType: "disc" }}>
                <li style={{ paddingLeft: "10px" }}>
                  <span style={{ display: "block", marginLeft: "10px" }}>
                    No Cheating: Do not engage in any form of cheating, including
                    but not limited to altering your scorecard, improving your
                    lie, or using prohibited equipment. Violators will be
                    disqualified.
                  </span>
                </li>
                <li style={{ paddingLeft: "10px" }}>
                  <span style={{ display: "block", marginLeft: "10px" }}>
                    Dress Code: Adhere to the tournament's dress code of the
                    course, which may include wearing collared shirts, appropriate
                    shorts/pants, and golf shoes (spikeless or soft spikes may be
                    required).
                  </span>
                </li>
                <li style={{ paddingLeft: "10px" }}>
                  <span style={{ display: "block", marginLeft: "10px" }}>
                    Mobile Phones: You must carry your mobile phone for recording
                    scores in the GolfMeet app. However, please ensure that the
                    phone is set to silent or vibrate mode while on the course to
                    avoid disturbing play.
                  </span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-3xl font-bold text-black mb-4 font-quattrocentoSans" style={{ fontSize: "24px" }}>
                4. Dispute Resolution
              </h3>
              <ul className="space-y-4 text-black font-quattrocentoSans text-lg pl-8" style={{ fontSize: "22px", listStyleType: "disc" }}>
                <li style={{ paddingLeft: "10px" }}>
                  <span style={{ display: "block", marginLeft: "10px" }}>
                    Disputes: Any disputes regarding rulings or decisions should
                    be handled calmly and respectfully. In the event of a dispute,
                    players should register a request on the GolfMeet app for an
                    official and binding resolution.
                  </span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-3xl font-bold text-black mb-4 font-quattrocentoSans" style={{ fontSize: "24px" }}>
                5. Personal Responsibility
              </h3>
              <ul className="space-y-4 text-black font-quattrocentoSans text-lg pl-8" style={{ fontSize: "22px", listStyleType: "disc" }}>
                <li style={{ paddingLeft: "10px" }}>
                  <span style={{ display: "block", marginLeft: "10px" }}>
                    Environmental Respect: Take care to preserve the integrity of
                    the course by disposing of trash responsibly and avoiding
                    damage to the course or surrounding environment.
                  </span>
                </li>
                <li style={{ paddingLeft: "10px" }}>
                  <span style={{ display: "block", marginLeft: "10px" }}>
                    Attire and Equipment: Players are responsible for bringing
                    their own golf clubs, balls, and appropriate attire. GolfMeet
                    is not responsible for lost or damaged personal property.
                  </span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-3xl font-bold text-black mb-4 font-quattrocentoSans" style={{ fontSize: "24px" }}>
                6. Disqualification
              </h3>
              <p className="text-lg text-black mb-2 font-quattrocentoSans" style={{ fontSize: "22px" }}>
                Participants may be disqualified for any of the following
                reasons:
              </p>
              <ul className="space-y-4 text-black font-quattrocentoSans text-lg pl-8" style={{ fontSize: "22px", listStyleType: "disc" }}>
                <li style={{ paddingLeft: "10px" }}>
                  <span style={{ display: "block", marginLeft: "10px" }}>
                    Violation of any part of this Code of Conduct.
                  </span>
                </li>
                <li style={{ paddingLeft: "10px" }}>
                  <span style={{ display: "block", marginLeft: "10px" }}>
                    Deliberate rule violations or cheating.
                  </span>
                </li>
                <li style={{ paddingLeft: "10px" }}>
                  <span style={{ display: "block", marginLeft: "10px" }}>
                    Inappropriate or disruptive behavior.
                  </span>
                </li>
                <li style={{ paddingLeft: "10px" }}>
                  <span style={{ display: "block", marginLeft: "10px" }}>
                    Failure to follow directions from officials or staff.
                  </span>
                </li>
                <li style={{ paddingLeft: "10px" }}>
                  <span style={{ display: "block", marginLeft: "10px" }}>
                    Violating tournament-specific rules or dress codes.
                  </span>
                </li>
              </ul>
            </div>

            <p className="text-xl text-black leading-relaxed font-quattrocentoSans" style={{ fontSize: "24px" }}>
              <strong>By participating in GolfMeet, you agree to adhere to this Code of
              Conduct and contribute to making the tournament enjoyable for your
              fellow participants.</strong>
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default CodeOfConduct;