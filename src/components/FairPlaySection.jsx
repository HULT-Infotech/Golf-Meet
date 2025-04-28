import React from "react";
import Illustration_Golfers_Mobile from "../assets/fair.png";
import Img from "../assets/video.svg";

const FairPlaySection = () => {
  return (
    <>
      {/* First Section - Introduction */}
      <section className="relative  bg-gray-100 noise-bg-n md:min-h-[96vh] drop-shadow-xl w-full flex flex-col justify-between p-4 sm:p-0 md:px-8 text-center">
        <div className="absolute z-10 bottom-0 left-0 right-0 flex justify-center items-center w-full opacity-90">
          <img
            src={Illustration_Golfers_Mobile}
            alt="Illustration of Golfers"
            className="w-[90vw] md:w-[65vw] object-contain"
          />
        </div>

        <h2 className="w-64 text-center mx-auto text-[1.3rem] font-medium md:text-xl md:w-auto uppercase tracking-wide my-4 md:my-6 lg:my-10">
          Play Fair. No More Handicap Inflation!
        </h2>

        <div className="mx-auto max-w-4xl relative">
          <h6 className="text-base mb-8 md:text-lg lg:text-xl relative z-10">
          Introducing
          </h6>
          <h1 className="text-5xl md:text-6xl lg:text-7xl mx-auto uppercase font-quattrocento font-bold xl:text-[96px] xl:leading-[106.37px] tracking-[0.025em] text-center relative z-10">
            The Golf Meet
            <br />
            <span className="block mt-2 md:mt-4">Handicap</span>
          </h1>
        </div>

        <p className="mt-4 text-[#014D4E] text-xl md:text-2xl my-4 md:my-6 lg:my-10 mx-auto max-w-xs sm:max-w-md md:max-w-2xl lg:max-w-3xl">
          Golf Meet uses machine learning to compute the accurate handicap of
          each player, based on their scores on each hole of every course they
          have played.
        </p>

        <div className="mb-4 md:mb-8 lg:mb-12">
          <p className="font-semibold text-2xl mx-auto max-w-xs sm:max-w-sm md:max-w-lg lg:max-w-3xl lg:p-5 text-[#014D4E]">
            With the Golf Meet handicap, all that matters is your consistency.
          </p>
          <p className="mt-12  font-semibold text-xl max-w-xs sm:max-w-sm md:max-w-md mx-auto text-[#014D4E]">
            Not your age or gender.
          </p>
        </div>
        <img
              src={Img}
              alt=""
              className="w-[80%] xsm:w-[92%] right-0 absolute z-20 [bottom:clamp(-12rem,-22vw,-10rem)] md:-bottom-32"
            />
      </section>
    </>
  );
};

export default FairPlaySection;