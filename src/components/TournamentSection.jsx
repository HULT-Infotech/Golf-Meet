import React from "react";
import golfIllustration from "../assets/golfIllustration.svg";
import golfFlag from "../assets/golf-flag.svg"; 

const TournamentSection = () => {
  return (
    <section className="relative bg-white text-black py-16">

      {/* Steps */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center relative z-10">
        <div>
          <h4 className="text-lg font-bold text-green-700">1. Register</h4>
          <p className="text-sm text-gray-600">
            Create an account and secure your spot on the tour.
          </p>
        </div>
        <div>
          <h4 className="text-lg font-bold text-green-700">2. Get the Green Light</h4>
          <p className="text-sm text-gray-600">
            Our team will verify your profile before approving your entry.
          </p>
        </div>
        <div>
          <h4 className="text-lg font-bold text-green-700">3. Chip in for the Game</h4>
          <p className="text-sm text-gray-600">
            Pay tournament fees and get access to exciting competitions.
          </p>
        </div>
        <div>
          <h4 className="text-lg font-bold text-green-700">4. Hit the Fairway</h4>
          <p className="text-sm text-gray-600">
            Play your best rounds and enter the leaderboard.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative text-center mt-12">
        <h2 className="text-3xl md:text-4xl font-bold font-serif">
          THE SOCIAL AMATEUR TOURNAMENT WITH A DIFFERENCE
        </h2>

        {/* Golf Balls */}
        <div className="flex justify-center gap-4 mt-4">
          <span className="w-5 h-5 bg-gray-300 rounded-full"></span>
          <span className="w-5 h-5 bg-gray-300 rounded-full"></span>
          <span className="w-5 h-5 bg-gray-300 rounded-full"></span>
        </div>

        {/* Description */}
        <p className="text-gray-700 text-lg max-w-2xl mx-auto mt-6">
          Unlike typical golf tournaments where the result depends on your form 
          on the tournament day, GolfMeet gives you and everyone else a fair 
          chance all year long.
        </p>
      </div>

      {/* Illustration + Play Info */}
      <div className="flex flex-col md:flex-row items-center justify-between mt-12">
        <img src={golfIllustration} alt="Golf Illustration" className="w-full md:w-1/3" />

        <div className="max-w-lg">
          <p className="text-xl font-bold text-green-700">
            Play any number of rounds within the year. Your best 12 rounds will get 
            added to the leaderboard.*
          </p>
          <p className="text-gray-600 text-sm mt-3">
            * You can play unlimited rounds at any eligible golf course around the world. 
            But at least 8 of your qualifying rounds must be played at golf courses 
            within your home country.
          </p>
        </div>
      </div>

      {/* Golf Flag */}
      <img src={golfFlag} alt="Golf Flag" className="absolute bottom-0 right-5 w-12" />
    </section>
  );
};

export default TournamentSection;
