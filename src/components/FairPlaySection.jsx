import React from "react";

import Illustration_Golfers_Mobile from "../assets/Illustration_Golfers_Mobile.svg";

const FairPlaySection = () => {
  return (
    <>
      <section className=" relative bg-gray-100 noise-bg min-h-[90vh] drop-shadow-xl  p-6 text-center">
        <div className=" absolute -z-10 bottom-0 -left-7 flex  justify-center align-center w-full opacity-30">
          <img
            src={Illustration_Golfers_Mobile}
            alt="Illustration_Golfers_Mobile"
            className=" w-[60vw] object-cover"
          />
        </div>
        <h2 className="text-sm md:text-lg lg:text-2xl uppercase tracking-wide my-10">
          Play Fair. No More Handicap Inflation!
        </h2>

        <h6 className="text-base md:text-lg lg:text-xl">Introduction</h6>
        <h1 className="text-4xl lg:text-7xl uppercase py-4 font-quattrocento font-bold mt-2">
          The GolfMeet <br /> Handicap
        </h1>
        <p className="mt-4 text-[#014D4E] max-w-2xl text-2xl my-10 mx-auto">
          GolfMeet uses machine learning to compute the accurate handicap of
          each player, based on their scores on each hole of every course they
          have played.
        </p>
        <p className="mt-4 font-bold text-lg max-w-md mx-auto text-[#014D4E]">
          With the GolfMeet handicap, all that matters is your consistency.
        </p>
        <p className="mt-10 font-bold text-lg max-w-md mx-auto text-[#014D4E]">
          Not your age or gender.
        </p>
      </section>

      <section className="text-center flex flex-col justify-center  min-h-svh">
        <h2 className="text-2xl font-semibold mb-4">TOURNAMENT FEE</h2>
        <div className="text-6xl font-bold font-quattrocento  mb-2">
          ₹48,000
        </div>
        <p className="text-xs my-10 text-gray-500 uppercase mb-8">
          Fee is inclusive of 18% GST. Green fee is not included.
        </p>

        <h2 className="text-2xl font-semibold mb-8">AVAILABLE PAYMENT PLANS:</h2>

        <section className="flex justify-center gap-8">
          {/* Single Payment */}
          <article className="w-72 border-2 rounded border-black p-8 transition-all duration-300 hover:border-transparent hover:bg-teal-700 hover:text-white group">
            <div className="text-6xl font-bold mb-4">1</div>
            <div className="text-xl uppercase mb-4">Installment of</div>
            <div className="text-4xl font-bold mb-4">₹39,999</div>
            <div className="border-t border-black/30 group-hover:border-white/30 pt-4 mb-4">
              <div className="uppercase">Total</div>
              <div className="text-2xl">₹39,999</div>
            </div>
            <div className="text-xl">YOU SAVE 16%</div>
          </article>

          {/* 4 Installments */}
          <article className="w-72 border-2 rounded border-black p-8 transition-all duration-300 hover:bg-teal-700 hover:text-white hover:border-transparent group">
            <div className="text-6xl font-bold mb-4">4</div>
            <div className="text-xl uppercase mb-4">Installments of</div>
            <div className="text-4xl font-bold mb-4">₹10,699</div>
            <div className="border-t border-black/30 group-hover:border-white/30 pt-4 mb-4">
              <div className="uppercase">Total</div>
              <div className="text-2xl">₹42,796</div>
            </div>
            <div className="text-xl">YOU SAVE 10%</div>
          </article>

          {/* 12 Installments */}
          <article className="w-72 border-2 rounded border-black p-8 transition-all duration-300 hover:bg-teal-700 hover:text-white hover:border-transparent group">
            <div className="text-6xl font-bold mb-4">12</div>
            <div className="text-xl uppercase mb-4">Installments of</div>
            <div className="text-4xl font-bold mb-4">₹3,999</div>
            <div className="border-t border-black/30 group-hover:border-white/30 pt-4 mb-4">
              <div className="uppercase">Total</div>
              <div className="text-2xl">₹48,000</div>
            </div>
            <div className="text-xl">NO SAVINGS</div>
          </article>
        </section>
      </section>
    </>
  );
};

export default FairPlaySection;
