import React from "react";

const CostPage = () => {
  // Function to handle the WhatsApp button click
  const handleWhatsAppClick = () => {
    // The phone number provided: +91-888 484 4444
    // Remove non-numeric characters for the WhatsApp link
    const phoneNumber = "918884844444"; // Added country code without + sign
    window.open(`https://wa.me/${phoneNumber}`, "_blank");
  };

  return (
    <section className="bg-[#004141] noise-bg-new w-full min-h-screen flex items-center justify-center py-12">
      {/* Mobile Design */}
      <div className="flex flex-col items-center px-4 md:hidden">
        <h2 className="uppercase text-[1.6rem] font-bold tracking-wider text-white mb-6">
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
      
      {/* Desktop Design */}
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
  );
};

export default CostPage;