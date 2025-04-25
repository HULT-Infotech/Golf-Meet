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
        {/* Heading Section - Improved fluid typography */}
        <div
          className="pt-6 sm:pt-8 pb-4 sm:pb-6 px-4 text-center font-quattrocento"
          style={{ fontWeight: "700" }}
        >
          <h1 
            className="font-bold text-teal-800"
            style={{ fontSize: 'clamp(1.75rem, 5vw, 2.25rem)' }}
          >
            ENJOY EXCLUSIVE
          </h1>
          <h1 
            className="font-bold text-teal-800"
            style={{ fontSize: 'clamp(1.75rem, 5vw, 2.25rem)' }}
          >
            CURATED EVENTS
          </h1>
        </div>
        
        {/* First Photo */}
        <div className="px-4 mb-6">
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
      <div className="w-full -mt-32 sm:-mt-36 md:-mt-44 relative z-20">
        <div className="relative w-full h-auto py-8 sm:py-10 md:py-12">
          <svg
            className="absolute inset-0 w-full h-full z-[-1]"
            viewBox="0 0 100 200"
            preserveAspectRatio="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              {/* High-quality fractal noise filter */}
              <filter id="noiseFilter">
                <feTurbulence
                  type="fractalNoise"
                  baseFrequency="1.5"
                  numOctaves="3"
                  stitchTiles="stitch"
                />
              </filter>

              {/* Pattern with dark base and optimized noise overlay */}
              <pattern id="noisePattern" patternUnits="userSpaceOnUse" width="100" height="100">
                <rect width="100" height="100" fill="#00292D" />
                <rect width="100" height="100" filter="url(#noiseFilter)" opacity="0.078" />
              </pattern>
            </defs>

            {/* Decorative shape with textured background */}
            <path
              d="
                M0,20 
                C20,15 80,15 100,20 
                L100,180 
                C80,185 20,185 0,180 
                Z
              "
              fill="url(#noisePattern)"
            />
          </svg>

          {/* Tournament Fee Content - Completely responsive with clamp */}
          <div 
            className="flex flex-col items-center justify-center px-4 sm:px-6 text-white py-20 my-16 sm:py-30 md:py-40"
            style={{
              '--heading-size': 'clamp(1.75rem, 5vw, 1.875rem)',
              '--price-rupee': 'clamp(1.75rem, 5vw, 2.25rem)',
              '--price-amount': 'clamp(2.5rem, 7vw, 3rem)',
              '--subtitle': 'clamp(0.75rem, 2vw, 0.875rem)',
              '--button-text': 'clamp(0.985rem, 3vw, 1.125rem)',
              '--important-heading': 'clamp(1.125rem, 4vw, 1.25rem)',
              '--paragraph': 'clamp(.898rem, 2.5vw, 1rem)',
              '--spacing-sm': 'clamp(1rem, 2vw, 1rem)',
              '--spacing-md': 'clamp(2rem, 4vw, 2rem)',
              '--spacing-lg': 'clamp(2.5rem, 5vw, 2.5rem)',
            }}
          >
            <h2 
              className="font-bold tracking-wider"
              style={{ 
                fontSize: 'var(--heading-size)',
                marginBottom: 'var(--spacing-sm)'
              }}
            >
              TOURNAMENT FEE
            </h2>
            
            <div className="flex items-center mb-1">
              <span 
                className="font-bold font-quattrocentoSans"
                style={{ fontSize: 'var(--price-rupee)' }}
              >
                ₹
              </span>
              <span 
                className="font-bold font-quattrocentoSans"
                style={{ fontSize: 'var(--price-amount)' }}
              >
                60,000
              </span>
            </div>
            
            <p 
              className="opacity-40"
              style={{ 
                fontSize: 'var(--subtitle)',
                marginBottom: 'var(--spacing-md)'
              }}
            >
              PER YEAR
            </p>
            
            <button 
              onClick={handleWhatsAppClick}
              className="bg-red-600 hover:bg-red-700 shadow-xl text-white font-bold py-2 sm:py-3 px-7 sm:px-8 rounded-sm tracking-wider"
              style={{ 
                fontSize: 'var(--button-text)',
                marginBottom: 'var(--spacing-lg)'
              }}
            >
              APPLY VIA WHATSAPP
            </button>
            
            <h3 
              className="font-bold text-center"
              style={{ 
                fontSize: 'var(--important-heading)',
                marginBottom: 'var(--spacing-sm)'
              }}
            >
              IMPORTANT
            </h3>
            
            <p 
              className="text-center opacity-75 max-w-[20rem] sm:max-w-sm md:max-w-md"
              style={{ 
                fontSize: 'var(--paragraph)',
                marginBottom: 'var(--spacing-sm)'
              }}
            >
              As many golfers use club memberships or complimentary rounds from credit 
              cards to book their games, the Golf Meet tournament fee does not include 
              green fees.
            </p>
            
            <p 
              className="text-center opacity-75 max-w-xs sm:max-w-sm md:max-w-md"
              style={{ fontSize: 'var(--paragraph)' }}
            >
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