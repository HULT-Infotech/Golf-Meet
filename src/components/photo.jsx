import React from 'react';
import p_1 from "../assets/Photosection/p1.webp";
import p_2 from "../assets/Photosection/p2.webp";
import price_image1 from "../assets/Cost/pro.webp";
import price_image2 from "../assets/Cost/amature.webp";

const EventsAndCostPage = () => {
  const handleWhatsAppClick = () => {
    const phoneNumber = "918884844444";
    window.open(`https://wa.me/${phoneNumber}`, "_blank");
  };

  return (
    <>
      {/* Photo Section - Improved for larger screens */}
      <div className="w-full min-h-[70vh] bg-white relative">
        {/* Heading Section - Centered with improved spacing for larger screens */}
        <div
          className="pt-8 sm:pt-10 lg:pt-12 pb-6 sm:pb-8 px-4 text-center font-quattrocento"
          style={{ fontWeight: "700" }}
        >
          <h1 
            className="font-bold text-teal-800"
            style={{ fontSize: 'clamp(1.75rem, 5vw, 2.5rem)' }}
          >
            ENJOY EXCLUSIVE
          </h1>
          <h1 
            className="font-bold text-teal-800"
            style={{ fontSize: 'clamp(1.75rem, 5vw, 2.5rem)' }}
          >
            CURATED EVENTS
          </h1>
        </div>
        
        {/* Images Section - Flexbox for larger screens */}
        <div className="px-4 md:px-8 lg:px-16 xl:px-32 mb-6 md:mb-10">
          <div className="flex flex-col md:flex-row gap-4 md:gap-6 lg:gap-8">
            {/* First Photo */}
            <div className="w-full md:w-1/2 mb-6 md:mb-0">
              <div className="rounded-lg overflow-hidden shadow-md">
                <img
                  src={p_1}
                  alt="People enjoying a social gathering at a golf club"
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
            
            {/* Second Photo */}
            <div className="w-full md:w-1/2 relative z-30">
              <div className="rounded-lg overflow-hidden shadow-md">
                <img
                  src={p_2}
                  alt="Stand-up comedy event at an exclusive venue"
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Curved Container Section with Tournament Fee - Modified for larger screens */}
      <div className="w-full -mt-20 sm:-mt-24 md:-mt-28 lg:-mt-32 relative z-20 bulge-bottom">
        <div className="relative w-full h-auto py-10 sm:py-12 md:py-16 lg:py-20">
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

            {/* Modified path with curved top for large screens */}
            <path
              d="
                M0,20 
                C20,10 80,10 100,20 
                L100,200 
                L0,200 
                Z
              "
              fill="url(#noisePattern)"
            />
          </svg>

          {/* Tournament Fee Content - Improved for larger screens */}
          <div 
            className="flex flex-col items-center justify-center px-4 sm:px-6 md:px-10 lg:px-16 text-white pt-20 pb-10 mt-20 sm:mt-16"
          >
            <h2 
              className="font-semibold tracking-wider mb-2 text-2xl sm:text-3xl md:text-4xl"
            >
              SUBSCRIPTION FEE
            </h2>
            <p className="text-center opacity-80 mb-8 max-w-md md:max-w-lg lg:max-w-xl text-sm sm:text-base">
              Subscription fee must be paid every month for retaining your scores and position on the 
              leaderboard that year.
            </p>
            
            {/* Price Cards - Horizontal layout for larger screens */}
            <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-8 lg:gap-10 mb-12">
              {/* Pro Card */}
              <div className="w-[90%] md:w-72 lg:w-80 rounded-lg overflow-hidden shadow-lg relative">
                {/* Pro Card Background with radial lines */}
                <div className="absolute inset-0 bg-[#FFF7D9]">
                  <div className="absolute inset-0" style={{
                    backgroundImage: 'radial-gradient(circle at 50% 120%, transparent 20%, rgba(231, 201, 45, 0.15) 21%, rgba(231, 201, 45, 0.15) 23%, transparent 24%, transparent 30%, rgba(231, 201, 45, 0.15) 31%, rgba(231, 201, 45, 0.15) 33%, transparent 34%)',
                    backgroundSize: '240px 240px',
                  }} />
                </div>
                
                {/* Pro Card Content */}
                <div className="p-5 sm:p-6 relative z-10">
                  <h3 className="text-teal-800 font-bold text-xl sm:text-2xl text-center mb-2">
                    PLAY WITH<br />
                    PROS AND AMATEURS
                  </h3>
                  <p className="text-gray-700 text-sm text-center mb-4">*1 Round per month with a pro</p>
                  <div className="text-center mt-4">
                    <div className="flex items-center justify-center">
                      <span className="text-xl font-bold text-teal-800 mr-1">₹</span>
                      <span className="text-4xl sm:text-5xl font-bold text-teal-800">5,000</span>
                    </div>
                    <p className="text-gray-700 text-sm">+GST PER MONTH</p>
                  </div>
                </div>
              </div>
              
              {/* Amateur Card */}
              <div className="w-[90%] md:w-72 lg:w-80 rounded-lg overflow-hidden shadow-lg relative">
                {/* Amateur Card Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-gray-200 to-gray-300">
                  <div className="absolute inset-0 opacity-20" style={{
                    backgroundImage: 'linear-gradient(135deg, transparent 25%, rgba(0, 0, 0, 0.05) 25%, rgba(0, 0, 0, 0.05) 50%, transparent 50%, transparent 75%, rgba(0, 0, 0, 0.05) 75%)',
                    backgroundSize: '20px 20px',
                  }} />
                </div>
                
                {/* Amateur Card Content */}
                <div className="p-5 sm:p-6 relative z-10">
                  <h3 className="text-gray-700 font-bold text-xl sm:text-2xl text-center mb-6">
                    PLAY WITH<br />
                    AMATEURS ONLY
                  </h3>
                  <div className="text-center mt-4">
                    <div className="flex items-center justify-center">
                      <span className="text-xl font-bold text-gray-700 mr-1">₹</span>
                      <span className="text-4xl sm:text-5xl font-bold text-gray-700">2,000</span>
                    </div>
                    <p className="text-gray-600 text-sm">+GST PER MONTH</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Call-to-action Button - Larger for better visibility */}
            <button 
              onClick={handleWhatsAppClick}
              className="bg-gradient-to-b from-[#E5181A] via-[#CB1517] to-[#B21214] shadow-xl 
                        font-quattrocento text-[#FFF7D9] font-bold py-3 md:py-4 px-8 md:px-10 
                        rounded tracking-wider text-lg md:text-xl mb-16"
            >
              SIGN UP VIA WHATSAPP
            </button>
            
            {/* Important Information - Improved layout for larger screens */}
            <h3 
              className="font-semibold text-center text-xl md:text-2xl mb-4"
            >
              IMPORTANT
            </h3>
            
            {/* Important text in a max-width container for better readability on large screens */}
            <div className="max-w-2xl mx-auto">
              <p 
                className="text-center opacity-80 mb-6 text-base md:text-lg"
              >
                As many golfers use club memberships or complimentary rounds from credit 
                cards to book their games, the Golf Meet tournament fee does not include 
                green fees.
              </p>
              
              <p 
                className="text-center opacity-80 text-base md:text-lg"
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