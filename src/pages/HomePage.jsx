import React, { useRef } from "react";
import LandingSection from "../components/LandingSection";
import Navbar from "../components/Navbar";
import HowItWorksSection from "../components/HowItWorksSection";
import FairPlaySection from "../components/FairPlaySection";
import Footer from "../components/Footer";
import VideoSection from "../components/VideoSection";
import LargeScreen from "../Desktop/LargeScreen";
import GolfPrize from "../components/GolfPrize";
import Medalsection from "../components/Medal";

function HomePage() {
  const triggerRef = useRef(null);

  return (
    <>
      <div className="md:hidden">
        <div ref={triggerRef}>
          <LandingSection/>
        </div>
        <Navbar triggerRef={triggerRef}/>
        <GolfPrize/>
        <Medalsection/>
        <HowItWorksSection/>
        <div className="-mt-3">
          <VideoSection/>
        </div>
        <FairPlaySection/>
        <Footer/>
      </div>

      <div className="hidden md:block">
        <LargeScreen/>
      </div>
    </>
  );
}

export default HomePage;
