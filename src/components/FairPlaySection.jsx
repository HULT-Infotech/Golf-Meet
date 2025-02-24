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

      <div className="mt-10">
        <h3 className="text-lg font-semibold">Tournament Fee</h3>
        <p className="text-3xl font-bold">₹48,000</p>
        <p className="text-xs text-gray-500">
          Fee is inclusive of 18% GST. Green fee is not included.
        </p>
      </div>

      <h3 className="mt-6 text-lg font-semibold">Available Payment Plans:</h3>
      <div className="flex justify-center gap-6 mt-6">
        {/* Single Installment */}
        <div className="bg-green-700 text-white p-6 rounded-lg w-64">
          <p className="text-lg font-semibold">1 Installment of</p>
          <p className="text-2xl font-bold">₹39,999</p>
          <p className="mt-2">Total ₹39,999</p>
          <p className="mt-1 text-sm">You Save 16%</p>
        </div>

        {/* 4 Installments */}
        <div className="border p-6 rounded-lg w-64">
          <p className="text-lg font-semibold">4 Installments of</p>
          <p className="text-2xl font-bold">₹10,699</p>
          <p className="mt-2">Total ₹42,796</p>
          <p className="mt-1 text-sm">You Save 10%</p>
        </div>

        {/* 12 Installments */}
        <div className="border p-6 rounded-lg w-64">
          <p className="text-lg font-semibold">12 Installments of</p>
          <p className="text-2xl font-bold">₹3,999</p>
          <p className="mt-2">Total ₹48,000</p>
          <p className="mt-1 text-sm">No Savings</p>
        </div>
      </div>
    </>
  );
};

export default FairPlaySection;
