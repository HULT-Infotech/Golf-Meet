import React from "react";
import Illustration_Golfers_Mobile from "../assets/Illustration_Golfers_Mobile.svg";

const FairPlaySection = () => {
  return (
    <>
      {/* First Section - Introduction */}
      <section className="relative bg-gray-100 noise-bg md:min-h-[96vh] drop-shadow-xl w-full flex flex-col justify-between p-4 sm:p-0 md:px-8 text-center">
        <div className="absolute z-10 bottom-0 left-0 right-0 flex justify-center items-center w-full opacity-30">
          <img
            src={Illustration_Golfers_Mobile}
            alt="Illustration of Golfers"
            className="w-[100vw] md:w-[65vw] object-contain"
          />
        </div>

        <h2 className="text-sm md:text-lg lg:text-xl uppercase tracking-wide my-4 md:my-6 lg:my-10">
          Play Fair. No More Handicap Inflation!
        </h2>

        <div className="mx-auto max-w-4xl">
          <h6 className="text-base md:text-lg lg:text-xl">Introduction</h6>
          <h1 className="text-5xl md:text-6xl lg:text-7xl mx-auto uppercase  font-quattrocento font-bold xl:text-[96px] leading-[106.37px] tracking-[0.025em] text-center">
            The GolfMeet
            <br />
            <span className="block mt-2 md:mt-4">Handicap</span>
          </h1>
        </div>

        <p className="mt-4 text-[#014D4E] text-xl md:text-2xl my-4 md:my-6 lg:my-10 mx-auto max-w-xs sm:max-w-md md:max-w-2xl lg:max-w-3xl">
          GolfMeet uses machine learning to compute the accurate handicap of
          each player, based on their scores on each hole of every course they
          have played.
        </p>

        <div className="mb-4 md:mb-8 lg:mb-12">
          <p className="font-semibold text-lg md:text-xl lg:text-2xl mx-auto max-w-xs sm:max-w-sm md:max-w-lg lg:max-w-3xl lg:p-5 text-[#014D4E]">
            With the GolfMeet handicap, all that matters is your consistency.
          </p>
          <p className="mt-12  font-semibold text-base md:text-lg xl:text-xl max-w-xs sm:max-w-sm md:max-w-md mx-auto text-[#014D4E]">
            Not your age or gender.
          </p>
        </div>
      </section>

      {/* Second Section - Pricing */}
      <section className="text-center flex flex-col justify-center p-4 sm:p-8 lg:p-16 xl:p-20 w-full">
        <h2 className="text-xl md:text-2xl font-semibold mb-4">
          TOURNAMENT FEE
        </h2>

        <div className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold font-quattrocento mb-2">
          ₹48,000
        </div>

        <p className="text-xs my-4 md:my-6 lg:my-8 xl:my-10 text-gray-500 uppercase mb-4 md:mb-6 lg:mb-8">
          Fee is inclusive of 18% GST. Green fee is not included.
        </p>

        <h2 className="text-xl md:text-2xl font-semibold mb-8 md:mb-12 lg:mb-16">
          AVAILABLE PAYMENT PLANS:
        </h2>

        <div className="flex flex-col md:flex-row justify-center items-center gap-6 md:gap-8 w-full overflow-x-auto">
          {[
            {
              installments: 1,
              installmentLabel: "Installment of",
              installmentPrice: "₹ 39,999",
              totalLabel: "Total",
              totalPrice: "₹ 39,999",
              savings: "YOU SAVE 16%",
            },
            {
              installments: 4,
              installmentLabel: "Installments of",
              installmentPrice: "₹ 10,699",
              totalLabel: "Total",
              totalPrice: "₹ 42,796",
              savings: "YOU SAVE 10%",
            },
            {
              installments: 12,
              installmentLabel: "Installments of",
              installmentPrice: "₹ 3,999",
              totalLabel: "Total",
              totalPrice: "₹ 48,000",
              savings: "NO SAVINGS",
            },
          ].map((option, index) => (
            <article
              key={index}
              className={`w-full max-w-xs h-auto min-h-[500px] md:w-64 lg:w-96 flex flex-col justify-evenly border-2 rounded border-black p-4 md:p-6 lg:p-14 mb-4 md:mb-0 transition-all duration-300 group ${
                index === 0
                  ? "bg-[linear-gradient(to_bottom_right,#0d8488_0%,#014D4E_100%)] text-white border-transparent"
                  : ""
              }`}
            >
              <div className="text-4xl md:text-4xl font-normal font-sans mb-2 md:mb-4">
                {option.installments}
              </div>
              <div className="text-lg md:text-xl uppercase mb-2 md:mb-4">
                {option.installmentLabel}
              </div>
              <div className="text-4xl md:text-5xl font-quattrocento font-bold mb-2 md:mb-4">
                {option.installmentPrice}
              </div>
              <div
                className={`border-t ${
                  index === 0 ? "border-white/30" : "border-black/30"
                } pt-3 md:pt-4 mb-2 md:mb-4`}
              >
                <div className="uppercase">{option.totalLabel}</div>
                <div className="text-xl md:text-2xl font-quattrocento font-bold">
                  {option.totalPrice}
                </div>
              </div>
              <div className="text-lg md:text-xl font-semibold">
                {option.savings}
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
};

export default FairPlaySection;
