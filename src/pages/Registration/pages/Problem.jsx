import React from 'react';
import BallImage from '../../../assets/payment/ballright.png';
import LogoImage from '../../../assets/payment/Logo Frame.png';
import VectorIcon from '../../../assets/payment/Vector.png';
import CloseIcon from '../../../assets/payment/x.png';
import WhatsAppIcon from '../../../assets/payment/whatsapp.png';

const Paymentfail = () => {
  return (
    <div className="min-h-screen bg-gray-100 noise-bg flex flex-col relative">
      {/* Logo at the top */}
      <div className="absolute top-8 left-1/2 transform -translate-x-1/2 z-10 lg:absolute lg:top-4 lg:left-1/2 lg:transform lg:-translate-x-1/2">
        <img src={LogoImage} alt="Golf Meet Logo" className="w-40 h-auto sm:w-44 lg:w-36" />
      </div>

      {/* Mobile layout - stacked vertically */}
      <div className="lg:hidden flex flex-col items-center px-4 pt-56 pb-12">
        {/* Payment Failed message */}
        <h1 className="text-2xl sm:text-3xl font-bold text-red-600 mb-3 font-quattrocento text-center">
          THERE WAS A PROBLEM!
        </h1>
        <p className="text-gray-600 text-base sm:text-lg mb-8 text-center max-w-sm">
          We did not receive a response from your bank or service provider.
        </p>

        {/* Ball image for mobile - flipped horizontally */}
        <div className="mb-4">
          <img src={BallImage} alt="Golf ball near hole" className="w-48 sm:w-56 h-auto transform scale-x-[-1]" />
        </div>

        <p className="text-[#014D4E] text-lg sm:text-xl mb-6 font-semibold text-center">
          Don't worry!
        </p>
        <p className="text-black text-sm mb-6 text-center max-w-sm">
          Sometimes bank servers take up to 48 hours to respond. In the mean time, please proceed to enjoy Golf Meet.
        </p>
        <p className="text-black font-semibold text-sm mb-8 text-center max-w-sm">
          Please proceed to share your course and date preferences for the upcoming rounds via WhatsApp.
        </p>

        {/* Buttons for mobile */}
        <div className="flex flex-col space-y-4 w-full max-w-sm">
          <button 
            className="text-base sm:text-lg text-white px-6 py-3 rounded-full flex items-center hover:bg-[#013f40] h-12 sm:h-14 justify-center shadow-lg"
            style={{
              background: 'linear-gradient(to right, #FFB41E 0%, #014D4E 10%, #014D4E 100%)',
            }}
          >
            <img 
              src={WhatsAppIcon} 
              alt="WhatsApp Icon" 
              className="w-6 h-6 sm:w-8 sm:h-8 mr-3"
            />
            LAUNCH WHATSAPP
            <img 
              src={VectorIcon} 
              alt="Vector Icon" 
              className="w-6 h-6 sm:w-8 sm:h-8 opacity-40 ml-24"
            />
          </button>
          
        </div>
      </div>

      {/* Desktop layout: Split into two halves */}
      <div className="hidden lg:flex lg:flex-row lg:min-h-screen lg:items-center lg:justify-center">
        {/* Left half: Larger ball image - flipped horizontally */}
        <div className="w-1/2 flex justify-center mt-40">
          <img src={BallImage} alt="Golf ball near hole" className="w-68 h-auto transform scale-x-[-1]" />
        </div>

        {/* Right half: Text and buttons */}
        <div className="w-1/2 flex flex-col items-start pr-20 mt-32">
          {/* Payment Failed message */}
          <h1 className="text-4xl font-bold text-red-600 mb-4 font-quattrocento">
            THERE WAS A PROBLEM!
          </h1>
          <p className="text-gray-600 text-xl mb-1">
            We did not receive a response from your bank or 
          </p>
          <p className="text-gray-600 text-xl mb-4">
            service provider.
          </p>
          <p className="text-[#014D4E] text-xl mb-4 font-semibold">
            Don't worry!
          </p>
          <p className="text-black text-sm mb-1">
            Sometimes bank servers take up to 48 hours to respond.
          </p>
          <p className="text-black text-sm mb-6">
            In the mean time, please proceed to enjoy Golf Meet.
          </p>
          <p className="text-black font-semibold text-sm mb-1">
            Please proceed to share your course and date 
          </p>
          <p className="text-black font-semibold text-sm mb-8">
            preferences for the upcoming rounds via WhatsApp.
          </p>

          {/* Buttons: Vertically stacked */}
          <div className="flex flex-col space-y-4">
            <button 
              className="text-lg text-white px-6 py-2 rounded-full flex items-center hover:bg-[#013f40] w-80 h-14 shadow-lg"
              style={{
                background: 'linear-gradient(to right, #FFB41E 0%, #014D4E 10%, #014D4E 100%)',
              }}
            >
              <img 
                src={WhatsAppIcon} 
                alt="WhatsApp Icon" 
                className="w-8 h-8 mr-4"
              />
              <span>LAUNCH WHATSAPP</span>
              <div className="flex-1"></div>
              <img 
                src={VectorIcon} 
                alt="Vector Icon" 
                className="w-8 h-8 opacity-40"
              />
            </button>
            
          </div>
        </div>
      </div>

      {/* Green section at bottom - only on desktop */}
      <div className="hidden lg:block relative -mt-8 noise-bg-newest bulge-topest bg-[#014D4E]">
        <div className="h-12 w-full"></div>
      </div>
    </div>
  );
};

export default Paymentfail;