import React from 'react';
import bgMedal from "../assets/Medal/medal.webp";

const Medal = () => {
  return (
    <div className="w-full h-[77vh] bg-white overflow-hidden">
      {/* Container for image and overlaid text */}
      <div className="relative w-full">
        {/* Medal Image - adjusted to touch both edges */}
        <img 
          src={bgMedal} 
          alt="Medal" 
          className="w-full right-0" 
          style={{ 
            height: '75vh',
            objectFit: 'contain', // Changed from contain to cover
            objectPosition: 'right',
            width: '100vw', // Using viewport width to ensure it touches both edges
            maxWidth: '100vw', // Prevent horizontal scrollbar
            marginLeft: '0', // Ensure no margins
            marginRight: '0' // Ensure no margins
          }} 
        />
        
        {/* Text Content - Positioned absolutely on top of the image */}
        <div className="absolute top-0 left-0 w-full flex flex-col items-center pt-[3.4rem] md:pt-24 text-[#014D4E]">
          <h3 className="mb-2 text-center"
            style={{
              fontSize: 'clamp(1.5rem, 7vw, 5rem)',
              fontFamily: 'Quattrocento, serif',
              fontWeight: 400,
              textAlign: 'center'
            }}>
            WIN EXCITING
          </h3>
          <h1 className="text-center text-[3.8rem] xsm:text-[3rem] leading-none"
          style={{
              fontFamily: 'Quattrocento, serif',
              fontWeight: 700,
              textAlign: 'center'
            }}>
            MONTHLY
          </h1>
          <h1 className="text-center text-[3.8rem] xsm:text-[3rem] leading-none"
          style={{
              fontFamily: 'Quattrocento, serif',
              fontWeight: 700,
              textAlign: 'center'
            }}>
            MEDALS
          </h1>
        </div>
      </div>
    </div>
  );
}

export default Medal;