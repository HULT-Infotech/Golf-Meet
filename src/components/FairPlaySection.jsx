import React from "react";
import Illustration_Golfers_Mobile from "../assets/Illustration_Golfers_Mobile.svg";

const FairPlaySection = () => {
  // Function to handle the WhatsApp button click
  const handleWhatsAppClick = () => {
    // The phone number provided: +91-888 484 4444
    // Remove non-numeric characters for the WhatsApp link
    const phoneNumber = "918884844444"; // Added country code without + sign
    window.open(`https://wa.me/${phoneNumber}`, "_blank");
  };

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

        <h2 className="w-64 text-center mx-auto text-[1.3rem] font-medium md:text-xl md:w-auto uppercase tracking-wide my-4 md:my-6 lg:my-10">
          Play Fair. No More Handicap Inflation!
        </h2>

        <div className="mx-auto max-w-4xl relative">
          <h6 className="text-base mb-8 md:text-lg lg:text-xl relative z-10">
            Introduction
          </h6>
          <h1 className="text-5xl md:text-6xl lg:text-7xl mx-auto uppercase font-quattrocento font-bold xl:text-[96px] xl:leading-[106.37px] tracking-[0.025em] text-center relative z-10">
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
          <p className="font-semibold text-2xl mx-auto max-w-xs sm:max-w-sm md:max-w-lg lg:max-w-3xl lg:p-5 text-[#014D4E]">
            With the GolfMeet handicap, all that matters is your consistency.
          </p>
          <p className="mt-12  font-semibold text-xl max-w-xs sm:max-w-sm md:max-w-md mx-auto text-[#014D4E]">
            Not your age or gender.
          </p>
        </div>
      </section>

      {/* Second Section - Pricing - Exact Match to Image */}
      <section className="bg-[#004141] noise-bg-green w-full py-12">
        {/* Mobile Design - Exact Match */}
        <div className="flex flex-col items-center px-4 md:hidden">
          <h2 className="uppercase text-[1.6rem] font-bold tracking-wider text-white mb-6 ">
            TOURNAMENT FEE
          </h2>
          <div className="text-white mb-1">
            <span className="text-7xl font-bold flex justify-center">
              <span className="text-[2.8rem] mr-4">₹</span>
              <span className="text-6xl font-quattrocento">1000</span>
            </span>
          </div>
          <p className="uppercase text-xs tracking-wider text-gray-400 mb-10">
            PER ROUND
          </p>
          <button 
            className="text-[#FFF7D9] font-quattrocento font-bold py-3 px-3 w-full max-w-60 rounded uppercase text-[15px] tracking-wider shadow-xl border-red"
            style={{ background: 'linear-gradient(180deg, #E5181A 0%, #CB1517 50%, #B21214 100%)' }}
            onClick={handleWhatsAppClick}
          >
            REGISTER ON WHATSAPP
          </button>
        </div>
        
        {/* Desktop Design - Uses the same design but responsive */}
        <div className="hidden md:block">
          <div className="max-w-2xl mx-auto flex flex-col items-center">
            <h2 className="uppercase text-4xl font-bold tracking-wider text-white mb-6">
              TOURNAMENT FEE
            </h2>
            <div className="text-white mb-1">
              <span className="text-7xl font-bold flex items-center justify-center">
                <span className="text-5xl mr-4">₹</span>
                <span className="text-8xl font-quattrocento">1000</span>
              </span>
            </div>
            <p className="uppercase text-sm tracking-wider text-gray-400 mb-10">
              PER ROUND
            </p>
            <button 
              className="text-[#FFF7D9] font-quattrocento font-bold py-4 px-8 w-96 rounded uppercase text-xl tracking-wider shadow-lg border-b-4 border-[#B21214]"
              style={{ background: 'linear-gradient(180deg, #E5181A 0%, #CB1517 50%, #B21214 100%)' }}
              onClick={handleWhatsAppClick}
            >
              REGISTER ON WHATSAPP
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default FairPlaySection;