import React from 'react';
import BackgroundImage from '../../../assets/payment/back.png';
import ProImage from '../../../assets/pro.svg';
import WhatsAppIcon from '../../../assets/payment/wha.png';
import LaunchIcon from '../../../assets/payment/launch.png';

const PaymentSuccess = () => {
  return (
    <div className="min-h-screen flex flex-col relative noise-bg-newest bg-[#014D4E]">
      {/* Background Image - Hidden on mobile */}
      <div 
        className="absolute inset-0 bg-contain bg-center bg-no-repeat hidden lg:block"
        style={{ backgroundImage: `url(${BackgroundImage})` }}
      ></div>

      {/* Desktop Layout */}
      <div className="hidden lg:flex flex-row min-h-screen items-center justify-center relative z-10">
        {/* Left Half: Logo */}
        <div className="w-1/2 flex justify-center">
          <img 
            src="/favicons/favicon.svg" 
            alt="Golf Meet Logo" 
            className="w-72 h-auto mr-40"
          />
        </div>

        {/* Right Half: Text and Button */}
        <div className="w-1/2 flex flex-col items-start pr-20">
          {/* Congratulations Heading */}
          <h1 
            className="text-[36px] font-bold mb-4 font-quattrocento"
            style={{
              background: 'linear-gradient(to right, #FFFFFF, #F4D455)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            CONGRATULATIONS!
          </h1>

          {/* Pro Image */}
          <div className="mb-8">
            <img 
              src={ProImage} 
              alt="Pro Image" 
              className="w-96 h-auto"
            />
          </div>

          {/* Payment Success Message */}
          <p className="text-[24px] font-semibold mb-2 text-white">
            Your payment was successful!
          </p>

          {/* Transaction ID and Invoice Info */}
          <p className="text-[18px] font-light mb-1 text-white">
            Transaction ID: 9348hfoi923hjsadb093as
          </p>
          <p className="text-[18px] font-light mb-7 text-white">
            You will receive the invoice via WhatsApp within 48 hours.
          </p>

          {/* Share Preferences Text */}
          <p className="text-[16px] font-normal mb-9 text-white">
            Please proceed to share your course and date <br/> preferences for the upcoming rounds via WhatsApp.
          </p>

          {/* Launch WhatsApp Button */}
          <button 
            className="text-lg px-6 py-3 rounded-full flex items-center w-80 h-14 shadow-lg"
            style={{
              background: 'linear-gradient(to right, #FFB41E, #FBE67B, #F7D14E, #D4A041)',
            }}
          >
            <img 
              src={WhatsAppIcon} 
              alt="WhatsApp Icon" 
              className="w-6 h-6 mr-3"
            />
            <span className="text-[#014D4E] font-quattrocentoSans">LAUNCH WHATSAPP</span>
            <div className="flex-1"></div>
            <img 
              src={LaunchIcon} 
              alt="Launch Icon" 
              className="w-8 h-8 ml-4"
            />
          </button>
        </div>
      </div>

      {/* Mobile Layout */}
      <div className="lg:hidden flex flex-col min-h-screen items-center justify-center relative z-10 px-6 py-8">
        {/* Logo */}
        <div className="mb-8">
          <img 
            src="/favicons/favicon.svg" 
            alt="Golf Meet Logo" 
            className="w-48 h-auto"
          />
        </div>

        {/* Congratulations Heading */}
        <h1 
          className="text-[24px] font-bold mb-6 font-quattrocento text-center"
          style={{
            background: 'linear-gradient(to right, #FFFFFF, #F4D455)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}
        >
          CONGRATULATIONS!
        </h1>

        {/* Pro Image */}
        <div className="mb-8">
          <img 
            src={ProImage} 
            alt="Pro Image" 
            className="w-80 h-auto max-w-full"
          />
        </div>

        {/* Payment Success Message */}
        <p className="text-[20px] font-semibold mb-4 text-white text-center">
          Your payment was successful!
        </p>

        {/* Transaction ID */}
        <p className="text-[16px] font-light mb-2 text-white text-center">
          Transaction ID: 9348hfoi923hjsadb093as
        </p>

        {/* Invoice Info */}
        <p className="text-[16px] font-light mb-6 text-white text-center">
          You will receive the invoice via WhatsApp within 48 hours.
        </p>

        {/* Share Preferences Text */}
        <p className="text-[14px] font-normal mb-20 text-white text-center max-w-sm">
          Please proceed to share your course and date preferences for the upcoming rounds via WhatsApp.
        </p>

        {/* Launch WhatsApp Button */}
        <button 
          className="text-lg px-6 py-3 rounded-full flex items-center w-full max-w-sm h-14 shadow-lg"
          style={{
            background: 'linear-gradient(to right, #FFB41E, #FBE67B, #F7D14E, #D4A041)',
          }}
        >
          <img 
            src={WhatsAppIcon} 
            alt="WhatsApp Icon" 
            className="w-6 h-6 mr-3"
          />
          <span className="text-[#014D4E] font-quattrocentoSans">LAUNCH WHATSAPP</span>
          <div className="flex-1"></div>
          <img 
            src={LaunchIcon} 
            alt="Launch Icon" 
            className="w-8 h-8 ml-4"
          />
        </button>
      </div>
    </div>
  );
};

export default PaymentSuccess;