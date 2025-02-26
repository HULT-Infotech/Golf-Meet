import React from "react";
import howToPlay_bg from "../assets/howToPlay-bg.svg";
import Navbar from "../components/Navbar";
function HowToPlay() {
  return (
    <>
      <Navbar />
      <section className="min-h-[91vh]  bg-gray-100 noise-bg flex flex-col md:flex-row justify-evenly items-center">
        <div className="">
          <h1 className=" font-quattrocento lg:text-[7rem] font-bold">
            HOW TO PLAY
          </h1>
          <p className="text-lg font-bold  text-gray-600">
            After you have paid the tournament fees, <br /> log into the
            GolfMeet mobile app.
          </p>
        </div>
        <div className="flex    justify-center">
          <img
            src={howToPlay_bg}
            alt="howToPlay_bg "
            className=" absolute bottom-0 object-contain"
          />
        </div>
      </section>
    </>
  );
}

export default HowToPlay;
