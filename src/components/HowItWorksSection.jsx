import React from "react";
import golfIllustration from "../assets/golfIllustration.svg";
import golfFlag from "../assets/golf-flag.svg";
import Illustration_Golf_Balls from "../assets/Illustration_Golf_Balls.svg";
import Illustration_Greens_mobile from "../assets/Illustration_Greens_mobile.svg";
import Illustration_Greens_Desktop from "../assets/Illustration_Greens_Desktop.svg";
import video_section_right_bg_with_flag from "../assets/video-section.svg";
import glow_yellow from "../assets/glow_yellow.svg";
const HowItWorksSection = () => {
  return (
    <section className="relative bg-white text-black pt-16">
      {/* Steps */}

      <h1
        className="text-[64px] px-10 lg:mt-10 font-quattrocento font-bold md:text-[64px] leading-[70.91px] tracking-[0.025em] text-center  text-[#014D4E] md:text-5xl mb-10 lg:mb-0 "
        style={{ textShadow: "0px 0px 6px #F4D4555C" }}
      >
        HOW IT WORKS
      </h1>

      <div className="flex flex-col gap-10 items-center justify-center sm:flex-wrap sm:flex-row sm:gap-10 xl:flex-nowrap lg:gap-10">
        {/*  Step 1 */}
        <div className="flex items-start space-x-4 lg:-mt-60">
          <span className="w-8 h-10 rounded-full bg-[#014D4E] text-white flex items-center justify-center text-lg font-semibold">
            1
          </span>
          <div>
            <h3 className="text-gray-500 text-sm font-medium">Register</h3>
            <h2 className="text-2xl font-bold font-quattrocento text-gray-900">
              Register to Play
            </h2>
            <p className="text-gray-700 text-sm w-64">
              Grab your clubs and secure your spot on the course. Share basic
              details about you and your golf experience.
            </p>
          </div>
        </div>

        {/*  Step 2 */}
        <div className="flex items-start space-x-4 lg:mt-32b">
          <span className="w-8 h-10 rounded-full bg-[#014D4E] text-white flex items-center justify-center text-lg font-semibold">
            2
          </span>
          <div>
            <h3 className="text-gray-500 text-sm font-medium">
              Profile Approval
            </h3>
            <h2 className="text-2xl font-bold font-quattrocento text-gray-900">
              Get the Green Light
            </h2>
            <p className="text-gray-700 text-sm w-60">
              We will check your profile to ensure you’re a true amateur. Let’s
              keep the tournament authentic and exciting!
            </p>
          </div>
        </div>

        {/*  Step 3 */}
        <div className="flex items-start space-x-4 lg:mt-96">
          <span className="w-8 h-10 rounded-full bg-[#014D4E] text-white flex items-center justify-center text-lg font-semibold">
            3
          </span>
          <div>
            <h3 className="text-gray-500 text-sm font-medium">
              Pay Tournament Fees
            </h3>
            <h2 className="text-2xl font-bold font-quattrocento text-gray-900">
              Chip in for the game
            </h2>
            <p className="text-gray-700 text-sm w-64">
              Make your contribution to participate in the tournament.
              Convenient payment plans for everyone.
            </p>
          </div>
        </div>

        {/*  Step 4 */}
        <div className="flex items-start space-x-4">
          <span className="w-8 h-10 rounded-full bg-[#014D4E] text-white flex items-center justify-center text-lg font-semibold">
            4
          </span>
          <div>
            <h3 className="text-gray-500 text-sm font-medium">
              Play the Tournament
            </h3>
            <h2 className="text-2xl font-bold font-quattrocento text-gray-900">Hit the Fairway</h2>
            <p className="text-gray-700 text-sm w-64">
              Take your position on the fairway and bring your A-game to the
              tournament. It's time to show your skills and aim for the
              leaderboard!
            </p>
          </div>
        </div>
      </div>
      <div className="py-7 relative md:py-0">
        <img
          src={Illustration_Greens_mobile}
          className="w-full relative z-10 md:hidden "
          alt="Illustration Greens mobile"
        />
        <img
          src={Illustration_Greens_Desktop}
          alt="Illustration_Greens_Desktop"
          draggable="false"
          className="w-full hidden md:block h-80v  object-cover "
        />
        <div className="absolute bottom-0 left-0 w-full h-28 noise-bg md:hidden" />
      </div>

      {/*  Section 4 */}
      <div className="mx-auto noise-bg py-10 md:py-20">
        <div className="text-center mb-12">
          <h1 className="text-[50px] leading-[60px] w-auto mb-8  lg:text-[90px] font-quattrocento font-bold  md:leading-[106.37px] tracking-[0.025em] text-center">
            THE SOCIAL AMATEUR
            <br />
            TOURNAMENT WITH A<br />
            DIFFERENCE
          </h1>

          {/* Golf balls illustration */}
          <div className="relative h-30 mb-8 p-10 md:p-0">
            <img
              src={Illustration_Golf_Balls}
              draggable="false"
              alt="Golf Balls"
              className="mx-auto md:w-1/2 lg:w-[29%]"
            />
          </div>

          <p className="text-teal-700 font-sans text-xl mb-16 p-4 max-w-xl mx-auto">
            Unlike typical golf tournaments where the result depends on your
            form on the tournament day, GolfMeet gives you and everyone else a
            fair chance all year long.
          </p>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-10">
          <div className="w-10/12 md:w-1/3">
            {/* Golf bag illustration */}
            <img
              src={golfIllustration}
              draggable="false"
              alt="Golf Equipment Illustration"
              className="w-full"
            />
          </div>

          <div className="w-4/5 lg:max-w-[800px] mx-auto md:p-12">
            <h2 className="text-teal-700 text-2xl font-bold mb-4 md:text-4xl">
              Play any number of rounds within the year. Your best 12 rounds
              will get added to the leaderboard.*
            </h2>

            <p className="text-sm text-gray-600 md:text-lg  md:max-w-xl">
              *You can play unlimited rounds at any eligible golf course around
              the world. But at least 8 of your qualifying rounds must be played
              at golf courses within your home country.
            </p>
          </div>
        </div>
      </div>
      <div className="absolute flex justify-end  bottom-96  right-0 w-full">
        <img src={glow_yellow} alt="glow_yellow" className="w-1/2" />
      </div>
      <div className="absolute  -bottom-24 right-0  w-full ">
        <img
          src={video_section_right_bg_with_flag}
          draggable="false"
          alt="right_bg_with_flag "
          className="w-full"
        />
      </div>
    </section>
  );
};

export default HowItWorksSection;
