import React from "react";
import landingRightImg from "../assets/landing_right_img.svg";
import landingLeftImg from "../assets/landing_left_img.svg";
import indiaFlag from "../assets/india_flag.png"; 

function LandingPage() {
  return (
    <section className="relative min-h-screen bg-gray-100 flex flex-col items-center justify-center text-center">
      {/* Top Navbar */}
      <div className="absolute font-quattrocento top-0 w-full flex justify-between items-center px-10 py-5">
        <div className="flex gap-5">
          <button className="bg-red-600 text-white px-5 py-2 rounded shadow-md hover:bg-red-700 transition">
            REGISTER NOW
          </button>
          <a href="#" className="text-black font-medium">HOW TO PLAY</a>
          <a href="#" className="text-black font-medium">PAY FEES</a>
        </div>
        <div className="flex items-center gap-2">
          <img src={indiaFlag} alt="India Flag" className="w-5 h-5" />
          <span>En ▼</span>
        </div>
      </div>

      {/* Hero Section */}
      <div className="relative flex flex-col items-center">
        <div className="absolute left-0 top-10">
          <img src={landingLeftImg} alt="Golf Illustration Left" className="w-60" />
        </div>
        <div className="absolute right-0 top-10">
          <img src={landingRightImg} alt="Golf Illustration Right" className="w-60" />
        </div>

        {/* Center Logo */}
        <img src="favicons/favicon.svg" alt="Golfmeet Logo" className="w-48 md:w-72" />

        {/* Title */}
        <h1 className="text-4xl font-quattrocento md:text-6xl font-bold mt-5">GOLF MEET INDIA 2025</h1>
        <p className="text-gray-600 text-lg mt-2">
          The year-long amateur golf tournament
        </p>
        <p className="text-gray-500 text-sm">JANUARY 2025 - DECEMBER 2025</p>

        {/* Register Button */}
        <button className="mt-6 font-quattrocento bg-black text-white px-6 py-3 rounded shadow-lg hover:bg-gray-800 transition">
          REGISTRATION OPEN
        </button>
      </div>
    </section>
  );
}

export default LandingPage;
