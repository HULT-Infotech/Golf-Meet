import React from "react";
import golfIllustration from "../assets/golfIllustration.svg";
import golfFlag from "../assets/golf-flag.svg";

const TournamentSection = () => {
  return (
    <section className="relative bg-white text-black py-16">
      {/* Steps */} 

    <h1 className="text-3xl sm:text-4xl px-10 lg:mt-10 font-quattrocento font-semibold text-center text-[#014D4E] md:text-5xl mb-10 lg:mb-0">HOW IT WORKS</h1>

      <div className="flex flex-col gap-10 items-center justify-center sm:flex-wrap sm:flex-row sm:gap-10 xl:flex-nowrap lg:gap-0">
        {/*  Step 1 */}
        <div className="flex items-start space-x-4 lg:-mt-60">
          <span className="w-8 h-10 rounded-full bg-[#014D4E] text-white flex items-center justify-center text-lg font-semibold">
            1
          </span>
          <div>
            <h3 className="text-gray-500 text-sm font-medium">Register</h3>   
            <h2 className="text-xl font-bold text-gray-900">
              Register to Play
            </h2>
            <p className="text-gray-700 text-sm w-60">
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
            <h2 className="text-xl font-bold text-gray-900">
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
            <h2 className="text-xl font-bold text-gray-900">
              Chip in for the game
            </h2>
            <p className="text-gray-700 text-sm w-60">
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
            <h2 className="text-xl font-bold text-gray-900">Hit the Fairway</h2>
            <p className="text-gray-700 text-sm w-60">
              Take your position on the fairway and bring your A-game to the
              tournament. It's time to show your skills and aim for the
              leaderboard!
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default TournamentSection;
