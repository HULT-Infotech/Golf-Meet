import React from 'react';
import SignInIllustration from '../assets/personal.svg';

const LeftSection = () => {
  return (
    <div className="hidden lg:flex w-1/2 flex-col px-20 py-28 h-screen">
      {/* Text content */}
      <div className="mb-8 flex-shrink-0">
        <h1 className="text-[3.2rem] font-bold text-[#014D4E] mb-3 leading-tight font-quattrocento">
          LET'S GET YOU <br /> REGISTERED
        </h1>
        <p className="text-lg text-black font-semibold">
          The process is pretty simple 
        </p>
      </div>
      
      {/* Spacer to push illustration to bottom */}
      <div className="flex-grow"></div>
      
      {/* Illustration - positioned at bottom */}
      <div className="flex-shrink-0 pb-8">
        <div className="max-w-sm pl-12">
          <img 
            src={SignInIllustration}
            alt="Sign in illustration" 
            className="w-[100%] h-auto max-w-sm bottom-0 absolute mx-auto filter grayscale"
            style={{ 
              filter: 'grayscale(100%) contrast(1.2)',
              mixBlendMode: 'multiply'
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default LeftSection;