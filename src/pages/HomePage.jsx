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

      <Footer />
    </>
  );
}

export default HomePage;
