import React from 'react';
import p_1 from "../assets/Photosection/p1.webp";
import p_2 from "../assets/Photosection/p2.webp";
import price_image1 from "../assets/pro.svg";
import price_image2 from "../assets/ama.svg";

const EventsAndCostPage = () => {
  const handleWhatsAppClick = () => {
    const phoneNumber = "918884844444";
    window.open(`https://wa.me/${phoneNumber}`, "_blank");
  };

  return (
    <>
      {/* Photo Section */}
      <div className="w-full min-h-[70vh] bg-white relative md:hidden">
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
  <div className="overflow-hidden flex justify-center">
    <img
      src={p_1}
      alt="People enjoying a social gathering at a golf club"
      className="w-full split:w-[80%] h-auto shadow-md rounded-lg"
    />
  </div>
</div>

<div className="px-4 relative z-30">
  <div className="rounded-lg overflow-hidden shadow-md flex justify-center">
    <img
      src={p_2}
      alt="Stand-up comedy event at an exclusive venue"
      className="w-full split:w-[80%] h-auto shadow-md rounded-lg"
    />
  </div>
</div>

      </div>

      {/* Curved Container Section with Tournament Fee - Modified to have only top curve */}
      <div className="w-full -mt-40 sm:-mt-36 md:-mt-44 relative z-20 bulge-bottom md:hidden">
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

            {/* Modified path with only top curve, flat bottom */}
            <path
              d="
                M0,20 
                C20,15 80,15 100,20 
                L100,200 
                L0,200 
                Z
              "
              fill="url(#noisePattern)"
            />
          </svg>

          {/* Tournament Fee Content - Completely responsive with clamp */}
          <div 
            className="flex flex-col items-center justify-center px-4 sm:px-6 text-white pt-20 pb-4 mt-20 sm:py-30 md:py-40"
            style={{
              '--heading-size': 'clamp(1.75rem, 5vw, 1.875rem)',
              '--price-rupee': 'clamp(1.75rem, 5vw, 2.25rem)',
              '--price-amount': 'clamp(2.5rem, 7vw, 3rem)',
              '--subtitle': 'clamp(0.75rem, 2vw, 0.875rem)',
              '--button-text': 'clamp(0.985rem, 3vw, 1.125rem)',
              '--important-heading': 'clamp(1.125rem, 4vw, 1.25rem)',
              '--paragraph': 'clamp(.898rem, 2.5vw, 1rem)',
              '--paragraphsmall': 'clamp(.8rem, 2.5vw, 1rem)',
              '--spacing-sm': 'clamp(1rem, 2vw, 1rem)',
              '--spacing-xsm': 'clamp(.5rem, 2vw, 1rem)',
              '--spacing-md': 'clamp(2rem, 4vw, 2rem)',
              '--spacing-lg': 'clamp(2.5rem, 5vw, 2.5rem)',
            }}
          >
            <h2 
              className="font-semibold tracking-wider mb-1"
              style={{ 
                fontSize: 'var(--heading-size)'
              }}
            >
              SUBSCRIPTION FEE
            </h2>
            <p className="text-center opacity-80 mb-8  max-w-[17rem] sm:max-w-sm md:max-w-md"
              style={{ 
                fontSize: 'var(--paragraphsmall)'
              }}>Participation fee must be paid every month for retaining your scores and position on the leaderboard that year.</p>
            
            <div className="flex flex-col md:flex-row items-center justify-center gap-6 mb-12">
              <div className="w-[110%] split:w-[115%]  md:w-56 rounded-lg overflow-hidden shadow-md">
                <img
                  src={price_image1}
                  alt="Golf Meet price information"
                  className="w-full h-auto"
                />
              </div>
              <div className="w-[110%] split:w-[115%] md:w-56 rounded-lg overflow-hidden shadow-md">
                <img
                  src={price_image2}
                  alt="Golf Meet membership benefits"
                  className="w-full h-auto"
                />
              </div>
            </div>
            
            <button 
              onClick={handleWhatsAppClick}
              className="bg-gradient-to-b from-[#E5181A] via-[#CB1517] to-[#B21214] shadow-xl font-quattrocento text-[#FFF7D9] font-bold py-2 mb-[3.7rem] sm:py-3 px-7 sm:px-8 rounded tracking-wider"
              style={{ 
                fontSize: 'var(--button-text)',
              }}
            >
              SIGN UP VIA WHATSAPP
            </button>
            
            <h3 
              className="font-semibold text-center"
              style={{ 
                fontSize: 'var(--important-heading)',
                marginBottom: 'var(--spacing-sm)'
              }}
            >
              IMPORTANT
            </h3>
            
            <p 
              className="text-center opacity-70 max-w-[20rem] sm:max-w-sm md:max-w-md"
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
      {/* Single Combined Section */}
            <div className="w-full -mt-20 sm:-mt-24 xsh-landscape:-mt-28 md:-mt-28 lg:-mt-24 xh:-mt-96 xsh:-mt-80 xhh:-mt-96 relative z-20 hidden md:block">
              <div className="relative w-full h-auto">
                {/* Combined Content in Single Div */}
                <div 
                  className="flex flex-col noise-bg-newest bulge-top pb-16 pt-10 items-center justify-center px-4 sm:px-6 lg:px-12 text-white mt-20"
                  style={{
                    '--heading-size': 'clamp(1.75rem, 5vw, 2.7rem)',
                    '--subheading-size': 'clamp(1.125rem, 4vw, 1.25rem)',
                    '--paragraph': 'clamp(.898rem, 2.5vw, 1rem)',
                    '--button-text': 'clamp(0.985rem, 3vw, 1.125rem)',
                    '--spacing-sm': 'clamp(1rem, 2vw, 1rem)',
                    '--spacing-md': 'clamp(2rem, 4vw, 2rem)',
                  }}
                >
                  {/* Subscription Fee Section */}
                  <h2 
                    className="font-semibold mt-7 tracking-wider mb-1"
                    style={{ 
                      fontSize: 'var(--heading-size)'
                    }}
                  >
                    SUBSCRIPTION FEE
                  </h2>
                  <p className="text-center opacity-80 mb-8 max-w-[13rem] sm:max-w-sm md:max-w-md"
                    style={{ 
                      fontSize: 'clamp(.8rem, 2.5vw, .9rem)'
                    }}>
                    Subscription fee must be paid every month for <br />retaining your scores and position on the <br /> leaderboard that year.
                  </p>
                  
                  <div className="flex flex-col md:flex-row items-center justify-center gap-6 mb-12">
                    <div className="w-[90%] md:w-64 lg:w-96 rounded-lg overflow-hidden">
                      <img
                        src={price_image1}
                        alt="Play with pros and amateurs - ₹5,000 +GST per month"
                        className="w-full h-auto"
                      />
                    </div>
                    <div className="w-[90%] md:w-64 lg:w-96 rounded-lg overflow-hidden">
                      <img
                        src={price_image2}
                        alt="Play with amateurs only - ₹2,000 +GST per month"
                        className="w-full h-auto"
                      />
                    </div>
                  </div>
                  
                  <button 
                    onClick={handleWhatsAppClick}
                    className="bg-gradient-to-b from-[#E5181A] via-[#CB1517] to-[#B21214] shadow-xl font-quattrocento text-[#FFF7D9] font-bold py-2 sm:py-3 px-7 sm:px-8 rounded tracking-wider mb-12"
                    style={{ 
                      fontSize: 'var(--button-text)',
                    }}
                  >
                    SIGN UP VIA WHATSAPP
                  </button>
                  
                  {/* Important Information Section */}
                  <div className="w-full max-w-2xl pt-4">
                    <h3 
                      className="font-semibold text-center mb-4"
                      style={{ 
                        fontSize: 'var(--subheading-size)',
                      }}
                    >
                      IMPORTANT
                    </h3>
                    
                    <p 
                      className="text-center opacity-70 max-w-[20rem] sm:max-w-sm md:max-w-md lg:max-w-2xl mx-auto"
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
                      className="text-center opacity-75 max-w-xs sm:max-w-sm md:max-w-md lg:max-w-2xl mx-auto"
                      style={{ fontSize: 'var(--paragraph)' }}
                    >
                      This approach also gives you and your fellow players the flexibility to choose 
                      and book your preferred tee times directly with the golf course.
                    </p>
                  </div>
                </div>
              </div>
            </div>
    </>
  );
};

export default EventsAndCostPage;