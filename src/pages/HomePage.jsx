import React from "react";
import LandingSection from "../components/LandingSection";
import CompeteWorldwideSection from "../components/CompeteWorldwideSection";
import Navbar from "../components/Navbar";
import HowItWorksSection from "../components/HowItWorksSection";
import FairPlaySection from "../components/FairPlaySection";
import Footer from "../components/Footer";
import VideoSection from "../components/VideoSection";

function HomePage() {
  return (
    <>
      {/* Section 1  */}
      <LandingSection />

      {/* Section 2 */}
      <CompeteWorldwideSection />

      <Navbar />
      {/* Section 3 */}
      <HowItWorksSection />

      <VideoSection />

      {/* Section 4 */}
      <FairPlaySection />

      <div className="relative">
  {/* Subtle bottom shadow that fades upward */}
  <div className="h-6 w-full bg-gradient-to-t from-gray-400 via-gray-100 to-transparent opacity-40"></div>
  {/* Footer component */}
  <Footer className=""/>
</div>
    </>
  );
}

export default HomePage;
