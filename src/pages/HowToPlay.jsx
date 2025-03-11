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

import gold_coins_3 from "../assets/how-to-play-img/3-gold-coins.svg";

const HowToPlay = () => {
  return (
    <>
      <Navbar />
      <section className="bg-gray-100 noise-bg relative flex flex-col md:min-h-[92vh] md:flex-row ">
        <div className="flex flex-col w-full justify-between md:justify-around  gap-24 md:flex-row max-w-[1700px] mx-auto">
          {/* Text Section */}
          <div className="relative flex flex-col justify-center items-start p-8 md:pl-10 md:p-0 xl:ml-20">
            <h1 className="font-quattrocento font-bold text-5xl lg:text-[96px] leading-[100%] tracking-[0.025em] whitespace-nowrap text-[#201E15]">
              HOW TO PLAY
            </h1>
            <p className="sm:text-lg md:text-xl font-semibold text-[#201E15] leading-relaxed">
              After you have paid the tournament fees,
              <br className="hidden md:block" />
              log into the GolfMeet mobile app.
            </p>
          </div>

          {/* Right Image Section */}
          <div className="flex items-end px-5 md:px-0">
            <img
              src={howToPlay_bg}
              alt="Golfers Illustration"
              className=" w-full object-contain pointer-events-none"
            />
          </div>
        </div>
        {/* Decorative Green Element */}
        <img
          src={howToPlay_greenleft}
          alt="Green left element"
          className=" hidden md:block absolute md:-bottom-12 left-0 w-[270px] md:w-[400px] lg:w-[550px] lg:-bottom-16 object-contain pointer-events-none"
        />
        <img
          src={howToPlay_greenleft_mobile}
          alt="Green left element"
          className="absolute md:hidden -bottom-20 sm:-bottom-20 left-0 w-[350px] "
        />
      </section>

      <section className=" flex flex-col w-full">
        <div className="relative flex flex-col justify-center items-center w-full py-10 md:p-5 px-5">
          {/*  step 1 */}
          <div className="flex flex-col md:flex-row justify-center items-center lg:items-start md:justify-between w-full mx-auto max-w-6xl">
            <div className="flex flex-col md:flex-row items-start md:space-x-8 lg:mt-36">
              <span className="w-[45px] h-[60px] md:w-[90px] md:h-[120px] rounded-full mb-4 bg-[#014D4E] text-white flex items-center font-quattrocentoSans justify-center text-5xl font-bold">
                1
              </span>
              <div className="md:mt-2">
                <h2 className="font-quattrocento font-bold text-4xl md:text-[64px] leading-[100%] tracking-[0em] text-black max-w-80 md:max-w-xl">
                  SPECIFY YOUR AVAILABILITY
                </h2>

                <p className="mt-6 font-quattrocentoSans font-normal text-[24px] leading-[100%] tracking-[0em] text-black text-wrap max-w-[450px]">
                  In the app, specify your preferred dates and golf courses
                  where you can play at least 2 weeks in advance.
                </p>
              </div>
            </div>
            <div className="w-[85%] sm:w-[45%] md:w-[26vw] p-2 md:p-0">
              <img src={Mobile_Screen_Step_1} alt="Mobile_Screen_Step_1" />
            </div>
          </div>
          {/* g1  */}
          <img
            src={ground_1}
            alt="ground_1"
            className="absolute left-0 bottom-0 hidden md:block"
          />
          <img
            src={ground_1_mobile}
            alt="ground_1"
            className="absolute left-0 bottom-0 md:hidden"
          />
        </div>
        {/* step 2  */}
        <div className="flex relative flex-col justify-center items-center w-full py-10 md:p-5 px-5">
          <div className="flex flex-col md:flex-row-reverse justify-center items-center lg:items-start md:justify-between w-full mx-auto max-w-7xl">
            <div className="flex flex-col md:flex-row md:justify-between items-start md:space-x-8 lg:mt-32">
              <span className="w-[45px] h-[60px] md:w-[90px] md:h-[120px] rounded-full mb-4 bg-[#014D4E] text-white flex items-center font-quattrocentoSans justify-center text-5xl font-bold">
                2
              </span>
              <div className="md:mt-2">
                <h2 className="font-quattrocento font-bold text-4xl md:text-[64px] leading-[100%] tracking-[0em] text-black max-w-80 md:max-w-2xl">
                  GET MATCHED WITH OTHER PLAYERS
                </h2>
                <p className="mt-6 font-quattrocentoSans font-normal text-[24px] leading-[100%] tracking-[0em] text-black text-wrap max-w-[550px]">
                  The app will notify you when you are matched with other
                  players for your next round.
                </p>
                <p className="mt-6 font-quattrocentoSans font-normal text-[24px] leading-[100%] tracking-[0em] text-black text-wrap max-w-[550px]">
                  The match is made based on the shared preferences for golf
                  courses and dates.
                </p>
              </div>
            </div>
            <div className="w-[75%] sm:w-[40%] md:w-[22vw] p-4 md:p-0">
              <img src={Mobile_Screen_Step_2} alt="Mobile_Screen_Step_1" />
            </div>
          </div>
          <img
            src={ground_2}
            alt="ground_2"
            className="absolute right-0 bottom-0 hidden md:block"
          />
          <img
            src={ground_2_mobile}
            alt="ground_3"
            className="absolute right-0 bottom-0 md:hidden"
          />
        </div>
        {/* step 3  */}
        <div className="flex relative flex-col justify-center md:min-h-[750px] items-center w-full py-10 md:p-5 px-5">
          <div className="flex flex-col md:flex-row justify-center items-center lg:items-start md:justify-between w-full mx-auto max-w-6xl">
            <div className="flex flex-col md:flex-row items-start md:space-x-8 lg:mt-32">
              <span className="w-[45px] h-[60px] md:w-[90px] md:h-[120px] rounded-full mb-4 bg-[#014D4E] text-white flex items-center font-quattrocentoSans justify-center text-5xl font-bold">
                3
              </span>
              <div className="md:mt-2">
                <h2 className="font-quattrocento font-bold uppercase text-4xl md:text-[64px] leading-[100%] tracking-[0em] text-black max-w-80 md:max-w-4xl">
                  Finalize the plans with your group
                </h2>
                <p className="mt-6 font-quattrocentoSans font-normal text-[24px] leading-[100%] tracking-[0em] text-black text-wrap max-w-[450px]">
                  Chat in the app with other players of your group to change or
                  finalize the date, course and tee time.
                </p>
                <p className="text-[#E5181A] mt-6 font-quattrocentoSans font-normal text-[24px] leading-[100%] tracking-[0em] text-wrap max-w-[450px]">
                  Please remember that no-shows incur penalty points.
                </p>
              </div>
            </div>
            <div className="w-[75%] sm:w-[40%] md:w-[22vw] p-4 md:mt-20 md:p-0">
              <img src={Mobile_Screen_Step_2} alt="Mobile_Screen_Step_1" />
            </div>
          </div>
          <img
            src={ground_3}
            alt="ground_3"
            className="absolute left-0 bottom-0 hidden md:block"
          />

          <img
            src={ground_3_mobile}
            alt="ground_3"
            className="absolute left-0 bottom-0 md:hidden"
          />
        </div>
        {/* step 4  */}
        <div className="flex relative flex-col justify-start md:min-h-[750px] items-center w-full py-10 md:p-5 px-5 mb-10">
          <div className="flex flex-col md:flex-row-reverse justify-center items-center md:items-start md:justify-around w-full mx-auto max-w-screen-xl">
            <div className="flex flex-col md:flex-row items-start md:space-x-8 lg:mt-32">
              <span className="w-[45px] h-[60px] md:w-[90px] md:h-[120px] rounded-full mb-4 bg-[#014D4E] text-white flex items-center font-quattrocentoSans justify-center text-5xl font-bold">
                4
              </span>
              <div className="md:mt-2">
                <h2 className="font-quattrocento uppercase font-bold text-4xl md:text-[64px] leading-[100%] tracking-[0em] text-black max-w-80 md:max-w-4xl">
                  Play your round and keep scores
                </h2>
                <p className="mt-6 font-quattrocentoSans font-normal text-[24px] leading-[100%] tracking-[0em] text-black text-wrap max-w-[460px]">
                  Exchange the player codes and enter it into the app to start
                  the round. The format to use is stroke play.
                </p>
                <p className="mt-6 font-quattrocentoSans font-normal text-[24px] leading-[100%] tracking-[0em] text-black text-wrap max-w-[520px]">
                  Record your score in the GolfMeet app. When prompted, verify
                  the scores submitted by your group players.
                </p>
              </div>
            </div>
            <div className="w-[85%] sm:w-[45%] md:w-[26vw] p-2 md:mt-14 md:p-0">
              <img src={Mobile_Screen_Step_1} alt="Mobile_Screen_Step_1" />
            </div>
          </div>
          <img
            src={ground_4}
            alt="ground_4"
            className="absolute right-0 bottom-10 hidden sm:block"
          />
          <img
            src={ground_4_mobile}
            alt="ground_5"
            className="absolute right-0 bottom-0 sm:hidden"
          />
        </div>

        {/* step 5 */}
        <div className="relative">
          <div className="relative -bottom-10 p-8 md:-bottom-16 lg:-left-8 xl:-left-4 flex flex-col rotate-3 rounded-md bg-[#014D4E] noise-bg md:flex-row justify-center shadow-2xl items-center w-[90%] mx-auto min-h-[600px]">
            <div className="flex flex-col -rotate-3 md:flex-row items-start md:space-x-8">
              <span className="w-[45px] font-quattrocentoSans h-[60px] md:w-[90px] md:h-[120px] rounded-full bg-white text-[#014D4E] flex items-center justify-center text-5xl font-bold">
                5
              </span>
              <div className="md:mt-2">
                <h2 className="font-quattrocento uppercase font-bold text-4xl md:text-[64px] leading-[100%] tracking-[0em] text-white max-w-80 md:max-w-2xl">
                  Earn your GolfMeet points
                </h2>
                <p className="mt-6 font-quattrocentoSans font-normal text-[24px] leading-[100%] tracking-[0em] text-gray-300 text-wrap max-w-[520px]">
                  GolfMeet converts your scores into points. As you play more
                  rounds, GolfMeet calculates your handicap using a proprietary
                  method. This handicap is used to adjust your points further.
                </p>

                <p className="mt-6 font-quattrocentoSans font-normal text-[24px] leading-[100%] tracking-[0em] text-gray-300 text-wrap max-w-[520px]">
                  The Leaderboard will reflect your standing based on your
                  points.
                </p>
              </div>
            </div>
            <div className="w-[85%] -rotate-3 sm:w-[45%] md:w-[26vw] p-2 md:p-0">
              <img src={gold_coins_3} alt="gold_coins_3" />
            </div>
          </div>
          <div className="absolute bg-[#014D4E] min-h-[400px] rotate-12 -z-10 w-2/3 md:w-[50%] top-4 rounded-md md:top-auto right-20 md:right-8 xl:right-14 md:bottom-0 noise-bg"></div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default HowToPlay;
