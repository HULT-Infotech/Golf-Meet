import React from "react";

import Illustration_Golfers_Mobile from "../assets/Illustration_Golfers_Mobile.svg";

const FairPlaySection = () => {
  return (
    <>
      <section className=" relative bg-gray-100 noise-bg min-h-[93vh] drop-shadow-xl flex flex-col justify-between p-8 text-center">
        <div className=" absolute -z-10 bottom-0 -left-7 flex  justify-center align-center w-full opacity-30">
          <img
            src={Illustration_Golfers_Mobile}
            alt="Illustration_Golfers_Mobile"
            className=" w-[60vw] object-cover"
          />
        </div>
        <h2 className="text-sm md:text-lg lg:text-2xl uppercase tracking- my-10">
          Play Fair. No More Handicap Inflation!
        </h2>
        <div>
          <h6 className="text-base md:text-lg lg:text-xl xl:text-2xl">
            Introduction
          </h6>
          <h1 className="text-4xl lg:text-7xl max-w-xl mx-auto uppercase py-4 font-quattrocento tracking-wider font-bold mt-2">
            The GolfMeet
            <br />
            <span className="block mt-4">Handicap</span>
          </h1>
        </div>
        <p className="mt-4 text-[#014D4E] max-w-2xl text-2xl xl:text-3xl xl:max-w-4xl xl:p-3 my-10 mx-auto">
          GolfMeet uses machine learning to compute the accurate handicap of
          each player, based on their scores on each hole of every course they
          have played.
        </p>
        <div>
          <p className="my- font-semibold text-lg xl:text-3xl max-w-3xl xl:p-10 mx-auto text-[#014D4E]">
            With the GolfMeet handicap, all that matters is your consistency.
          </p>
          <p className="mb-20 font-semibold text-lg xl:text-xl max-w-md mx-auto text-[#014D4E]">
            Not your age or gender.
          </p>
        </div>
      </section>

      <section className="text-center flex flex-col justify-center  min-h-svh">
        <h2 className="text-2xl font-semibold lg:text-2xl mb-4">
          TOURNAMENT FEE
        </h2>
        <div className="md:text-7xl font-bold font-quattrocento  mb-2">
          ₹48,000
        </div>
        <p className="text-xs my-10 text-gray-500 uppercase mb-8">
          Fee is inclusive of 18% GST. Green fee is not included.
        </p>

        <h2 className="text-2xl font-semibold mb-16">
          AVAILABLE PAYMENT PLANS:
        </h2>

        <section className="flex justify-center gap-8">
          {[
            {
              installments: 1,
              installmentLabel: "Installment of",
              installmentPrice: "₹39,999",
              totalLabel: "Total",
              totalPrice: "₹39,999",
              savings: "YOU SAVE 16%",
            },
            {
              installments: 4,
              installmentLabel: "Installments of",
              installmentPrice: "₹10,699",
              totalLabel: "Total",
              totalPrice: "₹42,796",
              savings: "YOU SAVE 10%",
            },
            {
              installments: 12,
              installmentLabel: "Installments of",
              installmentPrice: "₹3,999",
              totalLabel: "Total",
              totalPrice: "₹  48,000",
              savings: "NO SAVINGS",
            },
          ].map((option, index) => (
            <article
              key={index}
              className="w-72 h-[430px] flex flex-col justify-evenly border-2 rounded border-black p-8 transition-all duration-300 hover:border-transparent hover:bg-[linear-gradient(to_bottom_right,#0d8488_0%,#014D4E_100%)] hover:text-white group"
            >
              <div className="text-5xl font-medium font-sans mb-4">
                {option.installments}
              </div>
              <div className="text-xl uppercase mb-4">
                {option.installmentLabel}
              </div>
              <div className="text-5xl font-quattrocento  font-bold mb-4">
                {option.installmentPrice}
              </div>
              <div className="border-t border-black/30 group-hover:border-white/30 pt-4 mb-4">
                <div className="uppercase">{option.totalLabel}</div>
                <div className="text-2xl font-quattrocento font-bold ">
                  {option.totalPrice}
                </div>
              </div>
              <div className="text-xl font-semibold">{option.savings}</div>
            </article>
          ))}
        </section>
      </section>
    </>
  );
};

export default FairPlaySection;
