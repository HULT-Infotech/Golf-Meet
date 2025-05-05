import React from 'react';
import { useNavigate } from 'react-router-dom';
import price_image1 from "../assets/pro.svg";
import price_image2 from "../assets/ama.svg";

const EventsAndCostPage = () => {
  const navigate = useNavigate();

  const handleWhatsAppClick = () => {
    navigate('/redirect');
  };

  return (
    <>
      {/* Single Combined Section */}
      <div className="w-full -mt-20 sm:-mt-24 md:-mt-28 lg:-mt-32 xh:-mt-96 xsh:-mt-80 xhh:-mt-96 relative z-20">
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