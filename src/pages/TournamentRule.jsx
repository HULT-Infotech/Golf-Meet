import React from "react";
import Navbar from "../components/Navbar";
import tr_bg from "../assets/tournament-rule/right-bg.svg";
import tr_greenleft from "../assets/tournament-rule/tr-green-left.svg";
import tr_last from "../assets/tournament-rule/tr-last.svg";
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
        <div className=" flex flex-col justify-center  text-[#014D4E] bg-[#014D4E0D] w-[85%] p-7 rounded-md">
          <h2 className=" text-5xl font-bold uppercase font-quattrocento">Player Code of Conduct </h2>
          <p className=" text-lg underline underline-offset-4">
            Please refer to the
            <strong> GolfMeet Player Code of Conduct </strong> here
          </p>
        </div>

        <img src={tr_last} alt="tr_last" className=" w-full" />
      </section>
    </>
  );
}

export default TournamentRule;
