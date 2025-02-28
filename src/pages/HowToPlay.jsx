import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
// Images
import howToPlay_bg from "../assets/howToPlay-bg.svg";
import howToPlay_greenleft from "../assets/howToPlay-greenleft.svg";
import howToPlay_greenleft_mobile from "../assets/howToPlay-greenleft-mobile.svg";

import Mobile_Screen_Step_1 from "../assets/how-to-play-img/Mobile-Screen-Step-1.png";
import Mobile_Screen_Step_2 from "../assets/how-to-play-img/Mobile-Screen-Step-2.png";

const HowToPlay = () => {
  return (
    <>
      <Navbar />
      <section className="bg-gray-100 noise-bg relative flex flex-col md:min-h-[92vh] md:flex-row ">
        <div className="flex flex-col w-full justify-between md:justify-around  gap-24 md:flex-row max-w-[1700px] mx-auto">
          {/* Text Section */}
          <div className="relative flex flex-col justify-center items-start p-8 md:pl-10 md:p-0 xl:ml-20">
            <h1 className="font-quattrocento text-5xl lg:text-6xl xl:text-7xl font-bold mb-4">
              HOW TO PLAY
            </h1>
            <p className="sm:text-lg font-bold text-gray-600 leading-relaxed">
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
          className="absolute md:hidden -bottom-20 sm:-bottom-32 left-0 w-[350px] "
        />
      </section>

      <section className=" flex w-full">
        <div className="flex flex-col justify-center items-center w-full py-20 px-5">
          {/*  step 1 */}
          <div className="flex flex-col md:flex-row justify-center items-center md:justify-around w-full mx-auto max-w-screen-xl">
            <div className="flex flex-col   md:flex-row items-start md:space-x-4 lg:mt-32">
              <span className="w-8 h-10 rounded-full mb-4 bg-[#014D4E] text-white flex items-center justify-center text-lg font-semibold">
                1
              </span>
              <div>
                <h2 className="text-4xl max-w-80 font-quattrocento font-bold text-gray-900">
                  SPECIFY YOUR AVAILABILITY
                </h2>
                <p className="text-gray-700 text-sm text-wrap max-w-72">
                  In the app, specify your preferred dates and golf courses
                  where you can play at least 2 weeks in advance.
                </p>
              </div>
            </div>
            <div className="w-[80%] sm:w-2/5 md:w-[24vw] p-2 md:p-0">
              <img src={Mobile_Screen_Step_1} alt="Mobile_Screen_Step_1" />
            </div>
          </div>

          {/* step 2  */}

          <div className="flex flex-col md:flex-row-reverse justify-center md:justify-around w-full items-center mx-auto max-w-screen-xl">
            <div className="flex flex-col md:flex-row md:justify-between  items-start md:space-x-4 lg:mt-32">
              <span className="w-8 h-10 rounded-full mb-4 bg-[#014D4E] text-white flex items-center justify-center text-lg font-semibold">
                2
              </span>
              <div>
                <h2 className="text-4xl max-w-80 font-quattrocento font-bold text-gray-900">
                  GET MATCHED WITH OTHER PLAYERS
                </h2>
                <p className="text-gray-700 text-sm text-wrap max-w-72">
                  The app will notify you when you are matched with other
                  players for your next round. <br /> The match is made based on
                  the shared preferences for golf courses and dates.
                </p>
              </div>
            </div>
            <div className="w-[70%] sm:w-[35%] md:w-[20vw] p-4 md:p-0">
              <img src={Mobile_Screen_Step_2} alt="Mobile_Screen_Step_1" />
            </div>
          </div>

          {/* step 3  */}

          <div className="flex flex-col md:flex-row justify-center items-center md:justify-around w-full mx-auto max-w-screen-xl">
            <div className="flex flex-col  md:flex-row items-start md:space-x-4 lg:mt-32">
              <span className="w-8 h-10 rounded-full mb-4 bg-[#014D4E] text-white flex items-center justify-center text-lg font-semibold">
                3
              </span>
              <div>
                <h2 className="text-4xl max-w-80 font-quattrocento font-bold text-gray-900">
                  Finalize the plans with your group
                </h2>
                <p className="text-gray-700 text-sm text-wrap max-w-72">
                  Chat in the app with other players of your group to change or
                  finalize the date, course and tee time.
                  <br className="text-red-500" /> Please remember that no-shows
                  incur penalty points.
                </p>
              </div>
            </div>
            <div className="w-[80%] sm:w-2/5 md:w-[24vw] p-2 md:p-0">
              <img src={Mobile_Screen_Step_1} alt="Mobile_Screen_Step_1" />
            </div>
          </div>

          {/* step 4  */}

          <div className="flex flex-col md:flex-row-reverse justify-center items-center md:justify-around w-full mx-auto max-w-screen-xl">
            <div className="flex flex-col   md:flex-row items-start md:space-x-4 lg:mt-32">
              <span className="w-8 h-10 rounded-full mb-4 bg-[#014D4E] text-white flex items-center justify-center text-lg font-semibold">
                4
              </span>
              <div>
                <h2 className="text-4xl max-w-80 font-quattrocento font-bold text-gray-900">
                  Please remember that no-shows incur penalty points.
                </h2>
                <p className="text-gray-700 text-sm text-wrap max-w-72">
                  Exchange the player codes and enter it into the app to start
                  the round. The format to use is stroke play. <br />
                  Record your score in the GolfMeet app. When prompted, verify
                  the scores submitted by your group players.
                </p>
              </div>
            </div>
            <div className="w-[70%] sm:w-[35%] md:w-[20vw] p-4 md:p-0">
              <img src={Mobile_Screen_Step_2} alt="Mobile_Screen_Step_1" />
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default HowToPlay;
