import React from "react";

// Importing logos
import SPAIN_golfmeet_logo from "../assets/CompeteWorldWide-Img/SPAIN-golfmeet-logo.svg";
import USA_golfmeet_logo from "../assets/CompeteWorldWide-Img/USA-golfmeet-logo.svg";
import UK_golfmeet_logo from "../assets/CompeteWorldWide-Img/UK-golfmeet-logo.svg";
import UAE_golfmeet_logo from "../assets/CompeteWorldWide-Img/UAE-golfmeet-logo.svg";
import JAPAN_golfmeet_logo from "../assets/CompeteWorldWide-Img/JAPAN-golfmeet-logo.svg";
import THAILAND_golfmeet_logo from "../assets/CompeteWorldWide-Img/THAILAND-golfmeet-logo.svg";
import INDIA_golfmeet_logo from "/favicons/favicon.svg";
import green_bg from "../assets/green.webp";
// Array of logos
const logos = [
  SPAIN_golfmeet_logo,
  USA_golfmeet_logo,
  UK_golfmeet_logo,
  UAE_golfmeet_logo,
  JAPAN_golfmeet_logo,
  THAILAND_golfmeet_logo,
  INDIA_golfmeet_logo,
];

function CompeteWorldwideSection() {
  return (
    <section className="flex flex-col items-center justify-center min-h-[397px]  "  style={{ backgroundImage: `url(${green_bg})` }}>
      <div className="mx-auto px-4">
        {/* Title */}
        <h2 className="text-2xl md:text-3xl lg:text-5xl font-quattrocento font-bold text-center text-[#CCCCCC] mix-blend-overlay brightness-100  pt-8 mb-14">
          COMPETE WORLDWIDE
        </h2>

        {/* Logos container with flexbox */}
        <div className="flex flex-wrap justify-center gap-4 md:gap-6 lg:gap-8 pb-8">
          {logos.map((logo, index) => (
            <div
              key={index}
              className="w-36 h-36 md:w-40 md:h-40 lg:w-36 lg:h-40
                transition-transform duration-300 hover:scale-110"
            >
              <img
              draggable="false"
                src={logo}
                alt={`Golf Meet Logo ${index + 1}`}
                className="w-full h-full object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default CompeteWorldwideSection;
