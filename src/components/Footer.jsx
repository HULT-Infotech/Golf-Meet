import React from "react";
import landingRightImg from "../assets/landing_right_img.svg";
import landingLeftImg from "../assets/landing_left_img.svg";
import indiaFlag from "../assets/india_flag.png";
function Footer() {
  return (
    <footer className="w-full">
      {/* Main Footer Section */}
      <section className="bg-[#134849] noise-bg relative py-6 px-4 flex justify-between items-center min-h-96">
        {/* Left Illustration */}
        <div className="absolute bottom-0 left-0">
          <img
            src={landingLeftImg}
            className="filter brightness-0 opacity-50"
            alt="Golfers Left"
          />
        </div>

        {/* Right Illustration */}
        <div className="absolute bottom-0 right-0">
          <img
            src={landingRightImg}
            className="filter brightness-0 opacity-50"
            alt="Golfers Right"
          />
        </div>

        {/* Content Sections */}
        <div className="flex justify-between w-full max-w-5xl mx-auto items-center z-10">
          {/* Left Section - Site Language and Country of Play */}
          <div className="flex flex-col space-y-4 text-white">
            <div>
              <label className="block text-sm font-medium mb-2">
                SITE LANGUAGE
              </label>
              <select className="bg-white font-quattrocento text-gray-800 p-2 rounded-md w-40">
                <option className="font-quattrocento">English</option>
                {/* Add more language options as needed */}
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">
                COUNTRY OF PLAY
              </label>
              <div className="bg-white  text-gray-800 p-2 rounded-md w-40 flex items-center">
                <img
                  src={indiaFlag}
                  alt="India Flag"
                  className="w-5 h-5 mr-2 inline-block"
                />
                <span className=" font-quattrocento">INDIA</span>
              </div>
            </div>
          </div>

          {/* Middle Section - Frequently Asked Questions, Tournament Rules, etc. */}
          <div className="flex flex-col uppercase space-y-4 text-white text-left">
            <a href="/faq" className="hover:underline">
              Frequently Asked Questions
            </a>
            <a href="/tournament-rules" className="hover:underline">
              Tournament Rules
            </a>
            <a href="/player-code" className="hover:underline">
              Player Code of Conduct
            </a>
            <a href="/affiliate-login" className="hover:underline">
              Affiliate Login
            </a>
          </div>

          {/* Right Section - Player Support, Terms of Use, etc. */}
          <div className="flex uppercase flex-col space-y-4 text-white text-left">
            <a href="/player-support" className="hover:underline">
              Player Support
            </a>
            <a href="/terms-of-use" className="hover:underline">
              Terms of Use
            </a>
            <a href="/privacy-policy" className="hover:underline">
              Privacy Policy
            </a>
            <a href="/site-map" className="hover:underline">
              Site Map
            </a>
          </div>
        </div>
      </section>

      {/* Bottom Gray Section */}
      <section className="bg-gray-100 noise-bg h-24 text-center flex justify-center items-center  w-full">
        <p className="text-gray-600 text-sm">Copyright © 2024 Golfmeet LLP. All Rights Reserved.</p>
      </section>
    </footer>
  );
}

export default Footer;
