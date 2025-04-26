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
import Photosection from "../components/photo";
import Costsection from "../components/Cost";

function HomePage() {
  const triggerRef = useRef(null);

  return (
    <>
      <div className="md:hidden">
        <div className="z-20 relative" ref={triggerRef}>
          <LandingSection />
        </div>
        <Navbar triggerRef={triggerRef} />
        <div className="-mt-4 relative z-10 ">
        <GolfPrize />
        </div>
        <Medalsection />
        <HowItWorksSection />
        <div>
          <VideoSection />
        </div>
        <FairPlaySection />
        <div className="relative z-20">
        <Photosection />
        </div>
    <div className="relative z-10 -mt-8">
        <Footer />
        </div>
      </div>

      <div className="hidden md:block">
        <LargeScreen />
      </div>
    </>
  );
}

export default HomePage;
