import React from "react";
import tr_bg from "../assets/tournament-rule/right-bg.svg";
import tr_mobile from "../assets/TR.webp";
import { Link } from "react-router-dom";
 

const handleWhatsAppClick = () => {
  // The phone number provided: +91-888 484 4444
  // Remove non-numeric characters for the WhatsApp link
  const phoneNumber = "918884844444"; // Added country code without + sign
  window.open(`https://wa.me/${phoneNumber}`, "_blank");
};
function Terms() {
  return (
    <div className="md:overflow-visible overflow-hidden">
<section className="bg-gray-100 noise-bg-n relative min-h-[90vh] md:h-[90vh] overflow-hidden ">
 

  <div className="flex flex-col w-full grow pb-24 md:py-0 md:flex-row max-w-[1700px] mx-auto relative h-full">
    {/* Text Section */}
    <div className="relative flex flex-col justify-center items-start p-8 md:pl-10 md:p-0 xl:ml-20 md:mb-40">
      <h1 className="font-quattrocento font-bold xsm:text-[2.4rem] text-[2.9rem] text-[#201E15] sm:text-5xl lg:text-[80px] pt-8 leading-[100%] tracking-[0.025em] mb-4"
      style={{
        background: 'linear-gradient(180deg, rgba(255, 180, 30, 0.9) 0%, #014D4E 66%)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        backgroundClip: 'text',
        textFillColor: 'transparent',
        textShadow: '0px 0px 1px rgba(0, 0, 0, 0.15)',
        filter: 'drop-shadow(0px 0.5px 0.5px rgba(0, 0, 0, 0.2))',}}>
        TERMS <br /> OF USE
      </h1>
      {/* Mobile-only text added here */}
      <div className="xsm:text-xs text-sm md:hidden mb-4 xsm:w-[90%] w-[98%]">Review the terms that govern your Golf Meet experience — crafted to ensure a trusted, respectful,
         and rewarding environment for every player. 


      </div>
    </div>
    
    {/* Right Image Section - Desktop only */}
    <div className="hidden md:flex items-end px-5 md:px-0">
      {/* <img
        src={tr_bg}
        alt="Golfers Illustration"
        className="w-full h-auto object-contain pointer-events-none md:mr-12 md:mt-4"
      /> */}
    </div>
    
    {/* Desktop Image Section - Positioned absolutely at bottom */}
    <div className="hidden md:block absolute bottom-0 right-0 md:w-1/2">
      <img
        src={tr_bg}
        alt="Golfers Illustration"
        className="w-[93%] h-auto  object-contain pointer-events-none md:mr-12"
      />
    </div>
  </div>
  
  {/* Mobile image - Positioned absolutely at bottom */}
  <div className="md:hidden absolute bottom-0 w-full flex justify-center">
    <img
      src={tr_mobile}
      alt="Mobile Golfers Illustration"
      className="xsm:w-[88%] w-[90%] h-auto p-3  pointer-events-none object-contain"
    />
  </div>
</section>
        <section className="flex flex-col items-center justify-center xsm:pt-12 pt-16 bulge-top -mt-4 md:mt-12 relative noise-bg-new sm:mb-0">
          <div className="flex justify-between items-center font-medium xsm:text-lg text-white bg-[#FFFFFF0D] w-[85%] p-7 rounded-md">
            <div className="flex flex-col">
              <h2 className="lg:text-5xl md:4xl text-[1.8rem] uppercase font-quattrocento">
              PRIVACY POLICY
              </h2>
              <Link to="/code-of-conduct"><p className="lg:text-lg md:3xl w-[90%] xsm:text-xs xsm:pt-2 pt-2  underline underline-offset-4">
                Please refer to the 
                <strong> Privacy Policy </strong> here
              </p></Link>
            </div>
            <div>
              <svg
                width="22"
                height="42"
                viewBox="0 0 25 47"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1 1.5L23 23.5L1 45.5"
                  stroke="#FFF"
                  strokeWidth="2"
                />
              </svg>
            </div>
          </div>
        </section>
    </div>
  );
}

export default Terms;