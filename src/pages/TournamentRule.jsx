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
      <section className="bg-gray-100 noise-bg relative flex flex-col md:min-h-[92vh]  md:flex-row ">
        <div className="flex flex-col w-full justify-between md:justify-around  gap-24 md:flex-row max-w-[1700px] mx-auto">
          {/* Text Section */}
          <div className="relative flex flex-col justify-center items-start p-8 md:pl-10 md:p-0 xl:ml-20">
            <h1 className="font-quattrocento text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4">
              TOURNAMENT <br /> RULES
            </h1>
          </div>

          {/* Right Image Section */}
          <div className="flex items-end px-5 md:px-0">
            <img
              src={tr_bg}
              alt="Golfers Illustration"
              className=" w-full object-contain pointer-events-none"
            />
          </div>
        </div>
        {/* Decorative Green Element */}
        <img
          src={tr_greenleft}
          alt="Green left element"
          className=" hidden md:block absolute md:-bottom-12 left-0 w-[270px] md:w-[400px] lg:w-[550px] xl:w-[800px] xl:-bottom-20 lg:-bottom-16 object-contain pointer-events-none"
        />
        <img
          src={tr_greenleft}
          alt="Green left element"
          className="absolute md:hidden -bottom-10 sm:-bottom-20 left-0 w-[350px] "
        />
      </section>

      <section className="flex flex-col items-center justify-center mt-36 ">
        <div className="flex justify-between items-center  text-[#014D4E] bg-[#014D4E0D] w-[85%] p-7 rounded-md">
          <div className=" flex flex-col ">
            <h2 className=" text-5xl font-bold uppercase font-quattrocento">
              Player Code of Conduct
            </h2>
            <p className=" text-lg underline underline-offset-4">
              Please refer to the
              <strong> GolfMeet Player Code of Conduct </strong> here
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
                stroke-width="2"
              />
            </svg>
          </div>
        </div>

        <div className="flex max-w-screen-xl">
          <div 
            className="flex flex-col min-h-96 justify-between min-w-60 p-6 rounded-sm text-white mt-10 mr-20" 
            style={{ background: "linear-gradient(150deg, rgb(48, 92, 93) 0%, rgb(0, 54, 55) 50%, rgb(0, 53, 54) 100%)" }}
          >
            <h1 className="text-3xl font-medium mb-6">SECTIONS</h1>
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
              <article key={index} className="flex flex-col mb-3">
                <h2 className="text-base leading-relaxed underline underline-offset-4 font-medium">
                  {option.label}
                </h2>
              </article>
            ))}
          </div>
          <div className="flex flex-col gap-4 mt-10">
            {" "}
            <div className="mb-6">
              <h2 className="text-teal-800 font-semibold font-quattrocento text-4xl mb-4">
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
              <h2 className="text-teal-800 font-semibold font-quattrocento text-4xl mb-4">
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
                  app, your best 12 rounds will be considered for the
                  leaderboard.
                </li>
                <li className="mb-2">
                  You may play in any country, at a golf course listed on the
                  GolfMeet app. However, for your home country, rounds are only
                  considered when played in that country.
                </li>
              </ul>
            </div>
          </div>
        </div>

        <img src={tr_last} alt="tr_last" className=" w-full" />
      </section>
      <Footer />
    </>
  );
}

export default TournamentRule;