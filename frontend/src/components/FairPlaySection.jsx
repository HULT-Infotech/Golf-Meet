import React from "react";
import Illustration_Golfers_Mobile from "../assets/fair.webp";
import Img from "../assets/video.svg";

const FairPlaySection = () => {
  return (
    <>
      {/* First Section - Introduction */}
      <section className="relative  bg-gray-100 pb-36 noise-bg-n md:min-h-[100vh] pt-10 drop-shadow-xl w-full flex flex-col justify-between p-4 sm:p-0 md:px-8 text-center">
        <div className="absolute z-10 bottom-0 left-0 right-0 flex justify-center items-center w-full">
          <img
            src={Illustration_Golfers_Mobile}
            alt="Illustration of Golfers"
            className="w-[86vw] md:w-[65vw] split:w-[60vw] object-contain"
          />
        </div>

        

        <div className="mx-auto max-w-4xl relative">
          <h6 className="xsm:text-lg text-xl font-semibold mb-10 md:text-lg lg:text-xl relative z-10">
          INTRODUCING
          </h6>
          <h1 className="xsm:text-5xl mb-6 text-6xl text-[#014D4E] md:text-6xl lg:text-7xl mx-auto uppercase font-quattrocento font-bold xl:text-[96px] xl:leading-[106.37px] tracking-[0.025em] text-center relative z-10"
          style={{
            background: 'linear-gradient(180deg, rgba(255, 180, 30, 0.9) 0%, #014D4E 24%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            textFillColor: 'transparent',
            textShadow: '0px 0px 1px rgba(0, 0, 0, 0.15)',
            filter: 'drop-shadow(0px 0.5px 0.5px rgba(0, 0, 0, 0.2))',}}>
            The <br /> Golf Meet
            <br />
            <span className="block mt-2 md:mt-4">Handicap</span>
          </h1>
        </div>
        <div className="bg-[#014D4E] px-1 mb-4 py-[.2rem] rounded-lg relative z-20 text-white">
        <h2 className="w-64 text-center mx-auto text-[1.3rem] xsm:font-medium font-medium text-2xl xsm:text-xl md:text-xl md:w-auto uppercase tracking-wide my-4 md:my-6 lg:my-10">
          Play Fair. No More Handicap Inflation!
        </h2>
        </div>
        <p className="mt-4 text-lg md:text-2xl my-4 md:my-6 lg:my-10 mx-auto max-w-sm xsm:text-sm sm:max-w-md md:max-w-2xl lg:max-w-3xl">
          Golf Meet uses machine learning to compute the accurate handicap of
          each player, based on their scores on each hole of every course they
          have played.
        </p>

        <div className="mb-3 md:mb-8 lg:mb-12">
          <p className="font-semibold text-[1.6rem] xsm:text-2xl mx-auto max-w-sm sm:max-w-sm md:max-w-lg lg:max-w-3xl lg:p-5 text-[#211E16]">
            With the Golf Meet handicap, <br /> all that matters is your <br /> consistency.
          </p>
          <p className="mt-3  font-semibold text-[1.6rem] xsm:text-2xl max-w-xs sm:max-w-sm md:max-w-md mx-auto text-[#211E16]">
            Not your age or gender.
          </p>
        </div>
        <img
              src={Img}
              alt=""
              className="w-[80%] split:hidden xsm:w-[92%] right-0 absolute z-20 [bottom:clamp(-4.6rem,-22vw,-10rem)] md:-bottom-32"
            />
      </section>
    </>
  );
};

export default FairPlaySection;