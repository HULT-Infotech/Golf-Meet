import React from 'react';
import p_1 from "../assets/Photosection/p1.png";
import p_2 from "../assets/Photosection/p2.png";
import bg from "../assets/Cost/bg.png";

const EventsAndCostPage = () => {
  const handleWhatsAppClick = () => {
    const phoneNumber = "918884844444";
    window.open(`https://wa.me/${phoneNumber}`, "_blank");
  };

  return (
    <>
      {/* Photo Section */}
      <div className="w-full min-h-[70vh] bg-white relative">
        {/* Heading Section */}
        <div
          className="pt-8 pb-6 px-4 text-center font-quattrocento"
          style={{ fontWeight: "700" }}
        >
          <h1 className="text-3xl sm:text-4xl font-bold text-teal-800">ENJOY EXCLUSIVE</h1>
          <h1 className="text-3xl sm:text-4xl font-bold text-teal-800">CURATED EVENTS</h1>
        </div>
        
        {/* First Photo */}
        <div className="px-4 mb-4">
          <div className="rounded-lg overflow-hidden shadow-md">
            <img
              src={p_1}
              alt="People enjoying a social gathering at a golf club"
              className="w-full h-auto"
            />
          </div>
        </div>
        
        {/* Second Photo - Adding specific z-index to ensure it's above cost section */}
        <div className="px-4 relative z-30">
          <div className="rounded-lg overflow-hidden shadow-md">
            <img
              src={p_2}
              alt="Stand-up comedy event at an exclusive venue"
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>

      {/* Curved Container Section with Tournament Fee */}
      <div className="w-full">
        <div className="relative w-full h-auto py-12">
        <svg 
  className="absolute inset-0 w-full h-full" 
  viewBox="0 0 100 200" 
  preserveAspectRatio="none"
  style={{ zIndex: -1 }}
>
  <path 
    d="
      M0,20 
      C20,15 80,15 100,20 
      L100,180 
      C80,185 20,185 0,180 
      Z
    " 
    fill="#064e40"
  />
</svg>

          {/* Tournament Fee Content */}
          <div className="flex flex-col items-center justify-center px-6 text-white py-8">
            <h2 className="text-3xl font-bold tracking-wider mb-4">TOURNAMENT FEE</h2>
            
            <div className="flex items-center mb-1">
              <span className="text-4xl font-bold">₹</span>
              <span className="text-5xl font-bold">60,000</span>
            </div>
            
            <p className="text-sm mb-8 opacity-70">PER YEAR</p>
            
            <button 
              onClick={handleWhatsAppClick}
              className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-8 rounded-sm mb-10 tracking-wider text-lg"
            >
              APPLY VIA WHATSAPP
            </button>
            
            <h3 className="text-xl font-bold mb-4">IMPORTANT</h3>
            
            <p className="text-center opacity-85 mb-4 max-w-md">
              As many golfers use club memberships or complimentary rounds from credit 
              cards to book their games, the Golf Meet tournament fee does not include 
              green fees.
            </p>
            
            <p className="text-center opacity-85 max-w-md">
              This approach also gives you and your fellow players the flexibility to choose 
              and book your preferred tee times directly with the golf course.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default EventsAndCostPage;