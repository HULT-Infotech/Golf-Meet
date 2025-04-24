import React from 'react';
import bgPrize from "../assets/GolfPrize/bgPrize.png";
import flag from "../assets/GolfPrize/Vector.svg";

const GolfPrize = () => {
  return (
    <div className="relative w-full h-[70vh]">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${bgPrize})`,
        }}
      >
      </div>
      
      {/* Content */}
      <div className="relative h-full flex flex-col items-center justify-center text-white text-center px-6">
        {/* Golf Flag Icon */}
        <div className="mb-4">
          <img src={flag} alt="Golf Flag" className="w-6 h-6 mx-auto" />
        </div>
        
        {/* GRAND PRIZE Text */}
        <h1 className="font-normal tracking-widest mb-0 leading-tight"
            style={{
              fontSize: 'clamp(3rem, 10vw, 6rem)',
              textShadow: '0 0 6px rgba(255,255,255,0.4), 0 0 10px rgba(255,255,255,0.3)',
              fontFamily: 'serif'
            }}>
          GRAND
        </h1>
        <h1 className="font-normal tracking-widest mb-8 leading-tight"
            style={{
              fontSize: 'clamp(3rem, 10vw, 6rem)',
              textShadow: '0 0 6px rgba(255,255,255,0.4), 0 0 10px rgba(255,255,255,0.3)',
              fontFamily: 'serif'
            }}>
          PRIZE
        </h1>
        
        {/* Description */}
        <p className="font-normal mb-16 max-w-md leading-relaxed"
           style={{ 
             fontSize: 'clamp(1rem, 4vw, 1.5rem)',
             fontFamily: 'serif',
             textShadow: '0 0 3px rgba(255,255,255,0.3)'
           }}>
          The top 5 players from India
          <br />
          get an all-expense paid
        </p>
        
        {/* GOLF VACATION IN Text */}
        <h2 className="font-normal tracking-wider mb-0 leading-tight"
            style={{
              fontSize: 'clamp(2rem, 7vw, 4.5rem)',
              textShadow: '0 0 5px rgba(255,255,255,0.4), 0 0 8px rgba(255,255,255,0.3)',
              fontFamily: 'serif'
            }}>
          GOLF
        </h2>
        <h2 className="font-normal tracking-wider mb-2 leading-tight"
            style={{
              fontSize: 'clamp(2rem, 7vw, 4.5rem)',
              fontFamily: 'serif'
            }}>
          VACATION IN
        </h2>
        
        {/* VIETNAM Text */}
        <h2 className="font-normal tracking-widest leading-none"
            style={{
              fontSize: 'clamp(4rem, 15vw, 9rem)',
              textShadow: '0 0 6px rgba(255,255,255,0.4), 0 0 10px rgba(255,255,255,0.3)',
              fontFamily: 'serif'
            }}>
          VIETNAM
        </h2>
      </div>
    </div>
  );
};

export default GolfPrize;