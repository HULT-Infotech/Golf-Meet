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
            <h1 className="font-quattrocento text-5xl lg:text-6xl xl:text-7xl max-w-2xl font-bold mb-4">
              PLAYER CODE OF CONDUCT
            </h1>
            <p className="sm:text-lg font-bold text-gray-600 leading-relaxed">
              After you have paid the tournament fees,
              <br className="hidden md:block" />
              log into the GolfMeet mobile app.
            </p>
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
            <h2 className="text-5xl font-bold uppercase font-quattrocento">
              TOURNAMENT RULES
            </h2>
            <p className="text-lg underline underline-offset-4">
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
      <section className="relative my-16 px-4 flex items-center justify-center">
        {/* Absolute background image container */}
        <div className="absolute inset-0 w-full z-20 h-full">
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
          className="absolute top-0 right-0 w-[150px] md:w-[200px] z-50"
        />
        <img
          src={coc_coins2}
          alt="Coins"
          className="absolute top-[15%] left-0 w-[150px] md:w-[200px] z-20"
        />
        <img
          src={coc_coins3}
          alt="Coins"
          className="absolute left-0 top-1/2 transform -translate-y-1/3 w-[150px] md:w-[200px] z-20"
        />
        <img
          src={coc_coins4}
          alt="Coins"
          className="absolute bottom-[15%] right-0 w-[150px] md:w-[200px] z-50"
        />
        <img
          src={coc_coins5}
          alt="Coins"
          className="absolute bottom-[5%] right-[10%] w-[150px] md:w-[200px] z-10"
        />

        {/* Content Container */}
        <div className="relative z-30 bg-gray-100 shadow-2xl rounded-lg p-8 w-[85%] max-w-6xl shadow-gray-400 drop-shadow-2xl">
          <p className="text-lg text-gray-700 leading-relaxed mb-6 font-quattrocentoSans font-bold">
            As a participant in GolfMeet, you are expected to adhere to the
            highest standards of conduct both on and off the course. Your
            behavior should reflect the values of the game of golf—respect,
            integrity, and sportsmanship. This Code of Conduct is in place to
            ensure a fair and enjoyable experience for all players.
          </p>

          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-bold text-black mb-4 font-quattrocentoSans">
                1. General Conduct
              </h3>
              <ul className="list-disc list-inside space-y-2 text-gray-700 font-quattrocentoSans">
                <li>
                  Respect for Others: Treat fellow participants with respect and
                  courtesy at all times. Abusive language, disrespectful
                  behavior, or acts of aggression will result in penalties or
                  disqualification from GolfMeet.
                </li>
                <li>
                  Sportsmanship: Uphold the principles of sportsmanship by
                  displaying honesty, courtesy, and fairness. Accept the outcome
                  of each round and the tournament with grace and humility,
                  regardless of the result.
                </li>
                <li>
                  Compliance with Rules: Adhere to these rules and regulations,
                  as well as the local rules of the course. Any violation may
                  result in disqualification.
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-black mb-4 font-quattrocentoSans">
                2. On the Course
              </h3>
              <ul className="list-disc list-inside space-y-2 text-gray-700 font-quattrocentoSans">
                <li>
                  Punctuality: Arrive at your scheduled tee time promptly.
                  Delays can disrupt the flow of the round and inconvenience
                  other participants. You could incur penalty points if your
                  group players complain about your delay.
                </li>
                <li>
                  Course Etiquette: Maintain proper etiquette at all times. This
                  includes repairing divots, fixing ball marks on greens, raking
                  bunkers, and keeping pace of play.
                </li>
                <li>
                  Quiet Please: Refrain from talking, moving, or making noise
                  while another player is preparing to hit or during their
                  swing.
                </li>
                <li>
                  Safety: Always ensure that no one is in the line of fire
                  before swinging. Be mindful of others' safety and well-being
                  at all times.
                </li>
                <li>
                  Scoring: Record the score for each hole as soon as you
                  complete the hole.
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-black mb-4 font-quattrocentoSans">
                3. Behavior on the Course
              </h3>
              <ul className="list-disc list-inside space-y-2 text-gray-700 font-quattrocentoSans">
                <li>
                  No Cheating: Do not engage in any form of cheating, including
                  but not limited to altering your scorecard, improving your
                  lie, or using prohibited equipment. Violators will be
                  disqualified.
                </li>
                <li>
                  Dress Code: Adhere to the tournament's dress code of the
                  course, which may include wearing collared shirts, appropriate
                  shorts/pants, and golf shoes (spikeless or soft spikes may be
                  required).
                </li>
                <li>
                  Mobile Phones: You must carry your mobile phone for recording
                  scores in the GolfMeet app. However, please ensure that the
                  phone is set to silent or vibrate mode while on the course to
                  avoid disturbing play.
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-black mb-4 font-quattrocentoSans">
                4. Dispute Resolution
              </h3>
              <ul className="list-disc list-inside space-y-2 text-gray-700 font-quattrocentoSans">
                <li>
                  Disputes: Any disputes regarding rulings or decisions should
                  be handled calmly and respectfully. In the event of a dispute,
                  players should register a request on the GolfMeet app for an
                  official and binding resolution.
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-black mb-4 font-quattrocentoSans">
                5. Personal Responsibility
              </h3>
              <ul className="list-disc list-inside space-y-2 text-gray-700 font-quattrocentoSans">
                <li>
                  Environmental Respect: Take care to preserve the integrity of
                  the course by disposing of trash responsibly and avoiding
                  damage to the course or surrounding environment.
                </li>
                <li>
                  Attire and Equipment: Players are responsible for bringing
                  their own golf clubs, balls, and appropriate attire. GolfMeet
                  is not responsible for lost or damaged personal property.
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-black mb-4 font-quattrocentoSans">
                6. Disqualification
              </h3>
              <p className="text-gray-700 mb-2 font-quattrocentoSans">
                Participants may be disqualified for any of the following
                reasons:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 font-quattrocentoSans">
                <li>Violation of any part of this Code of Conduct.</li>
                <li>Deliberate rule violations or cheating.</li>
                <li>Inappropriate or disruptive behavior.</li>
                <li>Failure to follow directions from officials or staff.</li>
                <li>Violating tournament-specific rules or dress codes.</li>
              </ul>
            </div>

            <p className="text-lg text-gray-700 leading-relaxed font-quattrocentoSans">
              By participating in GolfMeet, you agree to adhere to this Code of
              Conduct and contribute to making the tournament enjoyable for your
              fellow participants.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default CodeOfConduct;
