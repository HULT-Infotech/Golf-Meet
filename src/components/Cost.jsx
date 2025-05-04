import React from "react";
import bg from "../assets/Cost/bg.png"
const CostPage = () => {
  const handleWhatsAppClick = () => {
    const phoneNumber = "918884844444";
    window.open(`https://wa.me/${phoneNumber}`, "_blank");
  };

  return (
    <section
      className="relative w-full min-h-screen flex items-center justify-center bg-cover bg-center z-20"
      style={{ backgroundImage: `url(${bg})` }} 
    >
      {/* Noise Overlay */}
      <div className="absolute inset-0  opacity-20 pointer-events-none mix-blend-overlay"></div>

      {/* Main Content */}
      <div className="text-center px-6 max-w-xl z-10 text-white">
        <h2 className="uppercase text-white text-2xl font-semibold tracking-widest mb-4">
          TOURNAMENT FEE
        </h2>
        <div className="text-white mb-1">
          <span className="text-5xl font-bold">₹60,000</span>
        </div>
        <p className="uppercase text-xs tracking-widest text-gray-300 mb-8">
          Per Year
        </p>
        <button
          onClick={handleWhatsAppClick}
          className="bg-gradient-to-b from-[#E5181A] via-[#CB1517] to-[#B21214] text-white font-bold uppercase text-sm tracking-wider py-3 px-6 rounded shadow-md transition-transform hover:scale-105"
        >
          Apply via WhatsApp
        </button>
        <div className="mt-12 text-gray-200">
          <h3 className="font-semibold uppercase text-sm mb-2">Important</h3>
          <p className="text-sm leading-relaxed mb-2">
            As many golfers use club memberships or complimentary rounds from credit cards to book their games, the Golf Meet tournament fee does not include green fees.
          </p>
          <p className="text-sm leading-relaxed">
            This approach also gives you and your fellow players the flexibility to choose and book your preferred tee times directly with the golf course.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CostPage;
