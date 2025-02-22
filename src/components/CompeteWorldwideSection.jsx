import React from "react";

// Importing logos
import SPAIN_golfmeet_logo from "../assets/CompeteWorldWide-Img/SPAIN-golfmeet-logo.svg";
import USA_golfmeet_logo from "../assets/CompeteWorldWide-Img/USA-golfmeet-logo.svg";
import UK_golfmeet_logo from "../assets/CompeteWorldWide-Img/UK-golfmeet-logo.svg";
import UAE_golfmeet_logo from "../assets/CompeteWorldWide-Img/UAE-golfmeet-logo.svg";
import JAPAN_golfmeet_logo from "../assets/CompeteWorldWide-Img/JAPAN-golfmeet-logo.svg";
import THAILAND_golfmeet_logo from "../assets/CompeteWorldWide-Img/THAILAND-golfmeet-logo.svg";
import INDIA_golfmeet_logo from "/favicons/favicon.svg";

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
    <section className="bg-[#016769] min-h-[240px] noise-bg overflow-hidden">
      <div className="mx-auto px-4">
        {/* Title */}
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-quattrocento font-bold text-center text-neutral-50 mix-blend-screen pt-8 mb-12">
          COMPETE WORLDWIDE
        </h2>

        {/* Logos container with flexbox */}
        <div className="flex flex-wrap justify-center gap-4 md:gap-6 lg:gap-8 pb-8">
          {logos.map((logo, index) => (
            <div
              key={index}
              className="w-48 h-36 sm:w-36 sm:h-36 md:w-40 md:h-40 lg:w-36 lg:h-40 xl:w-48 xl:h-48 
                transition-transform duration-300 hover:scale-110"
            >
              <img
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
