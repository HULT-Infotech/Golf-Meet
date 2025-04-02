import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
// Images
import howToPlay_bg from "../assets/howToPlay-bg.svg";
import howToPlay_greenleft from "../assets/howToPlay-greenleft.svg";
import howToPlay_greenleft_mobile from "../assets/howToPlay-greenleft-mobile.svg";

import Mobile_Screen_Step_1 from "../assets/how-to-play-img/Mobile-Screen-Step-1.png";
import Mobile_Screen_Step_2 from "../assets/how-to-play-img/Mobile-Screen-Step-2.png";

import ground_1 from "../assets/how-to-play-img/ground-1.svg";
import ground_2 from "../assets/how-to-play-img/ground-2.svg";
import ground_3 from "../assets/how-to-play-img/ground-3.svg";
import ground_4 from "../assets/how-to-play-img/ground-4.svg";

import ground_1_mobile from "../assets/how-to-play-img/ground-1-mobile.svg";
import ground_2_mobile from "../assets/how-to-play-img/ground-2-mobile.svg";
import ground_3_mobile from "../assets/how-to-play-img/ground-3-mobile.svg";
import ground_4_mobile from "../assets/how-to-play-img/ground-4-mobile.svg";
import faq_bg_mobile from "../assets/paper.svg";

import gold_coins_3 from "../assets/how-to-play-img/3-gold-coins.svg";
import step_5_bg from "../assets/how-to-play-img/step_5_bg.webp";
import step_5_bg_mobile from "../assets/how-to-play-img/step_5_bg_mobile.png";

const HowToPlay = () => {
  return (
    <>
      <Navbar />
      <section 
        className="bg-gray-100 noise-bg relative flex flex-col md:min-h-[80vh] md:flex-row mb-12 md:mb-0"
      >
        <div className="flex flex-col w-full justify-between md:justify-around gap-24 md:flex-row max-w-[1700px] mx-auto">
          {/* Text Section */}
          <div className="relative flex flex-col justify-center sm:-mt-20 items-start p-8 md:pl-10 md:p-0 xl:ml-20">
            <h1 className="font-quattrocento font-bold text-4xl sm:text-5xl md:text-[3rem] lg:text-[clamp(70px,5vw+1.2rem,100px)] leading-[100%] tracking-[0.025em] whitespace-nowrap text-[#201E15]">
              HOW TO PLAY
            </h1>
            <p className="text-base sm:text-lg md:text-lg lg:text-xl font-semibold text-[#201E15] leading-relaxed">
              After you have paid the tournament fees,
              <br className="hidden lg:block" />
              log into the GolfMeet mobile app.
            </p>
          </div>

          {/* Right Image Section */}
          <div className="flex items-end px-5 md:px-0 xl:mt-4">
            <img
              src={howToPlay_bg}
              alt="Golfers Illustration"
              className="w-full object-contain pointer-events-none"
            />
          </div>
        </div>
        {/* Decorative Green Element */}
        <img
          src={howToPlay_greenleft}
          alt="Green left element"
          className="hidden md:block absolute md:-bottom-12 left-0 w-[270px] md:w-[400px] lg:w-[550px] lg:-bottom-16 object-contain pointer-events-none"
        />
        <img
          src={howToPlay_greenleft_mobile}
          alt="Green left element"
          className="absolute md:hidden -bottom-20 sm:-bottom-20 left-0 w-[350px]"
        />
      </section>

      <section className="flex flex-col w-full">
        {/* Step 1 */}
        <div 
  className="relative flex flex-col  items-center w-full py-10 md:p-5 px-5  md:mt-10
             md:h-[25rem] lg:h-[40rem]"
>
          <div className="flex flex-col md:flex-row justify-center items-center lg:items-start md:justify-between w-full mx-auto max-w-6xl">
            <div className="flex flex-col md:flex-row items-start md:space-x-8 lg:mt-36 w-full md:w-auto">
              <span className="w-[45px] h-[60px] md:w-[60px] md:h-[80px] lg:w-[clamp(45px,5vw,110px)] 
                 lg:h-[clamp(60px,7vw,120px)] rounded-full mb-4 bg-[#014D4E] text-white flex items-center font-quattrocentoSans justify-center text-3xl sm:text-5xl font-bold flex-shrink-0">
                1
              </span>
              <div className="md:mt-2 w-full">
                <h2 className="font-quattrocento font-bold text-3xl sm:text-5xl md:text-[40px] lg:text-[64px] leading-[100%] tracking-[0em] text-black max-w-80 md:max-w-xl">
                  SPECIFY YOUR AVAILABILITY
                </h2>

                <p className="mt-4 sm:mt-6 font-quattrocentoSans font-normal text-base sm:text-[20px] md:text-[22px] leading-[100%] tracking-[0em] text-black text-wrap max-w-[450px]">
                  In the app, specify your preferred dates and golf courses
                  where you can play at least 2 weeks in advance.
                </p>
              </div>
            </div>
            <div className="w-[85%] sm:w-[45%] md:w-[26vw] p-2 md:p-0 mt-6 md:mt-0">
              <img src={Mobile_Screen_Step_1} alt="Mobile_Screen_Step_1" />
            </div>
          </div>
          {/* Ground Images */}
          <img
            src={ground_1}
            alt="ground_1"
            className="absolute left-0 bottom-0 hidden md:block md:w-[300px] lg:w-auto md:mt-28"
          />
          <img
            src={ground_1_mobile}
            alt="ground_1"
            className="absolute left-0 bottom-0 md:hidden"
          />
        </div>

        {/* Step 2 */}
        <div className="flex relative flex-col justify-center items-center w-full py-10 md:p-5 px-5 lg:-mt-8
             md:h-[25rem] lg:h-[50rem]">
          <div className="flex flex-col md:flex-row-reverse justify-center items-center lg:items-start md:justify-between w-full mx-auto max-w-7xl">
            <div className="flex flex-col md:flex-row md:justify-between items-start md:space-x-8 lg:mt-32 w-full md:w-auto">
              <span className="w-[45px] h-[60px] md:w-[60px] md:h-[80px] lg:w-[clamp(45px,5vw,110px)] 
                 lg:h-[clamp(60px,7vw,120px)] rounded-full mb-4 bg-[#014D4E] text-white flex items-center font-quattrocentoSans justify-center text-3xl sm:text-5xl font-bold flex-shrink-0">
                2
              </span>
              <div className="md:mt-2 w-full">
                <h2 className="font-quattrocento font-bold text-3xl sm:text-5xl md:text-[40px] lg:text-[64px] leading-[100%] tracking-[0em] text-black max-w-80 md:max-w-2xl">
                  GET MATCHED WITH OTHER PLAYERS
                </h2>
                <p className="mt-4 sm:mt-6 font-quattrocentoSans font-normal text-base sm:text-[20px] md:text-[22px] leading-[100%] tracking-[0em] text-black text-wrap max-w-[550px]">
                  The app will notify you when you are matched with other
                  players for your next round.
                </p>
                <p className="mt-4 sm:mt-6 font-quattrocentoSans font-normal text-base sm:text-[20px] md:text-[22px] leading-[100%] tracking-[0em] text-black text-wrap max-w-[550px]">
                  The match is made based on the shared preferences for golf
                  courses and dates.
                </p>
              </div>
            </div>
            <div className="w-[75%] sm:w-[40%] md:w-[22vw] p-4 md:p-0 mt-6 md:mt-0">
              <img src={Mobile_Screen_Step_2} alt="Mobile_Screen_Step_2" />
            </div>
          </div>
          <img
            src={ground_2}
            alt="ground_2"
            className="absolute right-0 bottom-0 hidden md:block md:w-[300px] lg:w-auto md:mt-10"
          />
          <img
            src={ground_2_mobile}
            alt="ground_2_mobile"
            className="absolute right-0 bottom-0 md:hidden"
          />
        </div>

        {/* Step 3 */}
        <div className="flex relative flex-col justify-center md:h-[30rem] lg:h-[50rem] items-center w-full py-10 md:p-5 px-5 lg:-mt-12">
          <div className="flex flex-col md:flex-row justify-center items-center lg:items-start md:justify-between w-full mx-auto max-w-6xl">
            <div className="flex flex-col md:flex-row items-start md:space-x-8 lg:mt-32 w-full md:w-auto">
              <span className="w-[45px] h-[60px] md:w-[60px] md:h-[80px] lg:w-[clamp(45px,5vw,110px)] 
                 lg:h-[clamp(60px,7vw,120px)] rounded-full mb-4 bg-[#014D4E] text-white flex items-center font-quattrocentoSans justify-center text-3xl sm:text-5xl font-bold flex-shrink-0">
                3
              </span>
              <div className="md:mt-2 w-full">
                <h2 className="font-quattrocento uppercase font-bold text-3xl sm:text-5xl md:text-[40px] lg:text-[64px] leading-[100%] tracking-[0em] text-black max-w-80 md:max-w-4xl">
                  Finalize the plans with your group
                </h2>
                <p className="mt-4 sm:mt-6 font-quattrocentoSans font-normal text-base sm:text-[20px] md:text-[22px] leading-[100%] tracking-[0em] text-black text-wrap max-w-[450px]">
                  Chat in the app with other players of your group to change or
                  finalize the date, course and tee time.
                </p>
                <p className="text-[#E5181A] mt-4 sm:mt-6 font-quattrocentoSans font-normal text-base sm:text-[20px] md:text-[22px] leading-[100%] tracking-[0em] text-wrap max-w-[450px]">
                  Please remember that no-shows incur penalty points.
                </p>
              </div>
            </div>
            <div className="w-[75%] sm:w-[40%] md:w-[22vw] p-4 md:mt-20 md:p-0 mt-6">
              <img src={Mobile_Screen_Step_2} alt="Mobile_Screen_Step_2" />
            </div>
          </div>
          <img
            src={ground_3}
            alt="ground_3"
            className="absolute left-0 bottom-0 hidden md:block md:w-[300px] lg:w-auto md:mt-10"
          />
          <img
            src={ground_3_mobile}
            alt="ground_3_mobile"
            className="absolute left-0 bottom-0 md:hidden"
          />
        </div>

        {/* Step 4 */}
        <div className="flex relative flex-col justify-start md:h-[30rem] lg:h-[45rem] items-center w-full py-10 md:p-5 px-5 mb-10 lg:mt-24">
          <div className="flex flex-col md:flex-row-reverse justify-center items-center md:items-start md:justify-around w-full mx-auto max-w-screen-xl">
            <div className="flex flex-col md:flex-row items-start md:space-x-8 lg:mt-32 w-full md:w-auto">
              <span className="w-[45px] h-[60px] md:w-[60px] md:h-[80px] lg:w-[clamp(45px,5vw,110px)] 
                 lg:h-[clamp(60px,7vw,120px)] rounded-full mb-4 bg-[#014D4E] text-white flex items-center font-quattrocentoSans justify-center text-3xl sm:text-5xl font-bold flex-shrink-0">
                4
              </span>
              <div className="md:mt-2 w-full">
                <h2 className="font-quattrocento uppercase font-bold text-3xl sm:text-5xl md:text-[40px] lg:text-[64px] leading-[100%] tracking-[0em] text-black max-w-80 md:max-w-4xl">
                  Play your round and keep scores
                </h2>
                <p className="mt-4 sm:mt-6 font-quattrocentoSans font-normal text-base sm:text-[20px] md:text-[22px] leading-[100%] tracking-[0em] text-black text-wrap max-w-[460px]">
                  Exchange the player codes and enter it into the app to start
                  the round. The format to use is stroke play.
                </p>
                <p className="mt-4 sm:mt-6 font-quattrocentoSans font-normal text-base sm:text-[20px] md:text-[22px] leading-[100%] tracking-[0em] text-black text-wrap max-w-[520px]">
                  Record your score in the GolfMeet app. When prompted, verify
                  the scores submitted by your group players.
                </p>
              </div>
            </div>
            <div className="w-[85%] sm:w-[45%] md:w-[26vw] p-2 md:mt-14 md:p-0 mt-6s">
              <img src={Mobile_Screen_Step_1} alt="Mobile_Screen_Step_1" />
            </div>
          </div>
          <img
            src={ground_4}
            alt="ground_4"
            className="absolute right-0 bottom-10 md:w-[450px] lg:w-auto hidden sm:block"
          />
          <img
            src={ground_4_mobile}
            alt="ground_4_mobile"
            className="absolute right-0 bottom-0 sm:hidden"
          />
        </div>

        {/* Step 5 */}
        <div className="relative">
          <div className="w-full absolute hidden md:block mx-auto">
            <img src={step_5_bg} alt="step_5_bg" className="w-full" />
          </div>
          <div className="w-full absolute md:hidden">
            <img src={step_5_bg_mobile} alt="step_5_bg_mobile" className="w-full" />
          </div>
          <div className="relative -bottom-10 p-8 md:-bottom-16 lg:-left-8 xl:-left-4 flex flex-col md:flex-row justify-center items-center w-[90%] mx-auto min-h-[600px]">
            <div className="flex flex-col md:flex-row items-start md:space-x-8 w-full md:w-auto">
              <span className="w-[45px] font-quattrocentoSans h-[60px] md:w-[60px] md:h-[80px] lg:w-[clamp(45px,5vw,110px)] 
                 lg:h-[clamp(60px,7vw,120px)] rounded-full bg-white text-[#014D4E] flex items-center justify-center lg:ml-2 xl:ml-0 md:-mt-[17.4rem] lg:-mt-44 xl:mt-2 text-3xl sm:text-5xl font-bold flex-shrink-0">
                5
              </span>
              <div className="md:-mt-[17rem] lg:-mt-44 xl:mt-2 w-full">
                <h2 className="font-quattrocento uppercase font-bold text-3xl sm:text-5xl md:text-[40px] lg:text-[clamp(40px,5vw,64px)] leading-[100%] tracking-[0em] text-white max-w-80 md:max-w-2xl">
                  Earn your GolfMeet points
                </h2>
                <p className="mt-4 sm:mt-6 font-quattrocentoSans font-normal text-base sm:text-[20px] md:text-[18px] lg:text-[clamp(18px,3vw+0.5rem,22px)] leading-[100%] tracking-[0em] text-gray-300 text-wrap max-w-[520px]">
                  GolfMeet converts your scores into points. As you play more
                  rounds, GolfMeet calculates your handicap using a proprietary
                  method. This handicap is used to adjust your points further.
                </p>

                <p className="mt-4 sm:mt-6 font-quattrocentoSans font-normal text-base sm:text-[20px] md:text-[18px] lg:text-[clamp(18px,3vw+0.5rem,22px)] leading-[100%] tracking-[0em] text-gray-300 text-wrap max-w-[520px]">
                  The Leaderboard will reflect your standing based on your
                  points.
                </p>
              </div>
            </div>
            <div className="w-[80%] -rotate-3 sm:w-[45%] md:w-[26vw] p-2 md:p-0 mt-6 md:mt-0">
              <img src={gold_coins_3} alt="gold_coins_3" />
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default HowToPlay;