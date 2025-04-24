import React from 'react';
import bgPrize from "../assets/GolfPrize/bgPrize.png";
import flag from "../assets/GolfPrize/Vector.svg";

const GolfPrize = () => {
  return (
    <div className="relative w-full h-[75vh]">
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
          <img src={flag} alt="Golf Flag" className="w-8 h-8 mx-auto" />
        </div>
        
        {/* GRAND PRIZE Text */}
        <h1 className="mb-0 text-center"
            style={{
              fontSize: 'clamp(4.5rem, 8vw, 7.05rem)',  /* 64.71px at largest */
              fontFamily: 'Quattrocento, serif',
              fontWeight: 700,
              lineHeight: 'clamp(4.5rem, 8vw, 6rem)',  /* 64px at largest */
              letterSpacing: '0.025em',  /* 2.5% */
              textShadow: '0px 0px 14px rgba(255, 255, 255, 0.45)',
              color: 'white',
              textAlign: 'center'
            }}>
          GRAND
        </h1>
        <h1 className="mb-5 text-center"
            style={{
              fontSize: 'clamp(4.5rem, 8vw, 7.05rem)',  /* 64.71px at largest */
              fontFamily: 'Quattrocento, serif',
              fontWeight: 700,
              lineHeight: 'clamp(4.5rem, 8vw, 6rem)',  /* 64px at largest */
              letterSpacing: '0.025em',  /* 2.5% */
              textShadow: '0px 0px 14px rgba(255, 255, 255, 0.45)',
              color: 'white',
              textAlign: 'center'
            }}>
          PRIZE
        </h1>
        
        {/* Description */}
        <p className=" mb-5 max-w-md leading-relaxed"
           style={{ 
             fontSize: 'clamp(1rem, 4vw, 1.5rem)',
             fontFamily: 'Quattrocento, serif',
             fontWeight: 400,
             color: 'white'
           }}>
          The top 5 players from India
          <br />
          get an all-expense paid
        </p>
        
        {/* GOLF VACATION IN Text */}
        <h2 className="font-normal tracking-wider mb-0 leading-tight"
            style={{
              fontSize: 'clamp(2.3rem, 7vw, 4.5rem)',
              fontFamily: 'Quattrocento, serif',
             fontWeight: 400,
              color: 'white'
            }}>
          GOLF
        </h2>
        <h2 className="font-normal tracking-wider mb-2 leading-tight"
            style={{
              fontSize: 'clamp(2.3rem, 7vw, 4.5rem)',
              fontFamily: 'Quattrocento, serif',
             fontWeight: 400,
              color: 'white'
            }}>
          VACATION IN
        </h2>
        
        {/* VIETNAM Text */}
        <h2 
  className="font-normal tracking-widest leading-none"
  style={{
    fontSize: 'clamp(3.7rem, 15vw, 8.8rem)',
    textShadow: '2px 2px 14px rgba(255, 255, 255, 0.45), 0px 0px 14px rgba(255, 255, 255, 0.45)',
    fontFamily: 'Quattrocento, serif',
    fontWeight: 400,
    color: 'white'
  }}
>
  VIETNAM
</h2>
      </div>
    </div>
  );
};

export default GolfPrize;