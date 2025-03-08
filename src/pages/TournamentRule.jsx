import React from "react";
import Navbar from "../components/Navbar";
import tr_bg from "../assets/tournament-rule/right-bg.svg";
import tr_greenleft from "../assets/tournament-rule/tr-green-left.svg";
import tr_last from "../assets/tournament-rule/tr-last.svg";
import Footer from "../components/Footer";

function TournamentRule() {
  return (
    <>
      <Navbar />
      {/* Main container with 100vh height on larger screens */}
      <div className="md:h-[100vh] flex flex-col relative">
        {/* Hero section - maintaining original structure but reduced height */}
        <section className="bg-gray-100 noise-bg relative flex flex-col md:h-[65vh] md:flex-row">
          <div className="flex flex-col w-full justify-between md:justify-around gap-24 md:flex-row max-w-[1700px] mx-auto">
            {/* Text Section - positioned higher */}
            <div className="relative flex flex-col justify-center items-start p-8 md:pl-10 md:p-0 xl:ml-20 md:-mt-8">
              <h1 className="font-quattrocento font-bold text-4xl sm:text-5xl lg:text-[76px] leading-[100%] tracking-[0.025em] text-[#201E15] mb-4">
                TOURNAMENT <br /> RULES
              </h1>
            </div>

            {/* Right Image Section - Adjusted positioning */}
            <img
            src={tr_bg}
            alt="Golfers Illustration"
            className="w-full h-auto md:w-full md:h-auto pointer-events-none relative md:-bottom-[25px] md:right-0 md:mr-12"
          />
          </div>
          {/* Further reduced size of decorative elements while maintaining positioning */}
          <img
            src={tr_greenleft}
            alt="Green left element"
            className="hidden md:block absolute md:-bottom-4 left-0 w-[150px] md:w-[240px] lg:w-[360px] xl:w-[460px] lg:-bottom-8 object-contain pointer-events-none"
          />
          <img
            src={tr_greenleft}
            alt="Green left element"
            className="absolute md:hidden -bottom-8 sm:-bottom-12 left-0 w-[200px]"
          />
        </section>

        {/* Player Code of Conduct section - reduced size + added margin for bigger screens */}
        <div className="flex justify-between items-center text-[#014D4E] bg-[#014D4E0D] w-full max-w-7xl p-5 mx-auto mt-12 md:mt-16 md:mx-16 lg:mx-auto rounded-md">
          <div className="flex flex-col">
            <h2 className="text-3xl font-bold uppercase font-quattrocento">
              Player Code of Conduct
            </h2>
            <p className="text-base underline underline-offset-4">
              Please refer to the
              <strong> GolfMeet Player Code of Conduct </strong> here
            </p>
          </div>
          <div>
            <svg
              width="16"
              height="32"
              viewBox="0 0 25 47"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M1 1.5L23 23.5L1 45.5" stroke="#014D4E" strokeWidth="2" />
            </svg>
          </div>
        </div>
      </div>

      <section className="flex relative justify-center w-full mx-auto max-w-screen-xl">
        <div
          className="flex flex-col max-h-max min-w-80 p-6 rounded-md sticky top-28 mt-10 mr-20"
          style={{
            background:
              "linear-gradient(150deg, rgb(48, 92, 93) 0%, rgb(0, 54, 55) 50%, rgb(0, 53, 54) 100%)",
          }}
        >
          <h1 className="text-3xl text-white font-medium mb-6">SECTIONS</h1>
          {[
            { id: "home", label: "Home country" },
            { id: "leaderboard", label: "Leaderboard criteria" },
            { id: "format", label: "Format of play" },
            { id: "local", label: "Local rules" },
            { id: "teebox", label: "Tee box" },
            { id: "marking", label: "Marking the ball" },
            { id: "scorecard", label: "Scorecard" },
            { id: "hole", label: "Hole not in play" },
            { id: "penalties", label: "Penalties" },
            { id: "mulligans", label: "Mulligans" },
          ].map((option, index) => (
            <article key={index} className="flex flex-col justify-between min-h-10 mb-3">
              <h2 className="font-quattrocentoSans font-semibold text-[20px] leading-[100%] tracking-[0em] text-[#FFFFFFCC] underline underline-offset-8">
                {option.label}
              </h2>
            </article>
          ))}
        </div>
        <div className="flex flex-col gap-4 mt-10">
          <div className="mb-6">
            <h2 className="text-teal-800 font-semibold font-quattrocento text-3xl mb-3">
              HOME COUNTRY
            </h2>
            <ul className="list-disc pl-6">
              <li className="mb-2">
                Home country is the country in which you paid the GolfMeet
                tournament fees.
              </li>
            </ul>
          </div>
          {/* Leaderboard Criteria Section */}
          <div>
            <h2 className="text-teal-800 font-semibold font-quattrocento text-3xl mb-3">
              LEADERBOARD CRITERIA
            </h2>
            <ul className="list-disc pl-6">
              <li className="mb-2">
                For your scores to be considered on the leaderboard, you must
                play at least 12 rounds of golf scheduled through the GolfMeet
                app.
              </li>
              <li className="mb-2">
                If you play more than 12 rounds scheduled through the GolfMeet
                app, your best 12 rounds will be considered for the leaderboard.
              </li>
              <li className="mb-2">
                You may play in any country, at a golf course listed on the
                GolfMeet app. However, for your home country, rounds are only
                considered when played in that country.
              </li>
            </ul>
          </div>
        </div>
      </section>
      <img src={tr_last} alt="tr_last" className="w-full" />
      <Footer />
    </>
  );
}

export default TournamentRule;