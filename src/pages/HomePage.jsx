import React, { useRef } from "react";
import LandingSection from "../components/LandingSection";
import Navbar from "../components/Navbar";
import HowItWorksSection from "../components/HowItWorksSection";
import FairPlaySection from "../components/FairPlaySection";
import Footer from "../components/Footer";
import VideoSection from "../components/VideoSection";

function HomePage({ cachedData }) {
  const triggerRef = useRef(null);

  return (
    <>
      <div className="md:hidden">
        <div ref={triggerRef}>
          <LandingSection {...cachedData.landingData} />
        </div>
        <Navbar triggerRef={triggerRef} {...cachedData.navbarData} />
        <HowItWorksSection {...cachedData.howItWorksData} />
        <div className="-mt-3">
          <VideoSection {...cachedData.videoSectionData} />
        </div>
        <FairPlaySection {...cachedData.fairPlaySectionData} />
        <Footer {...cachedData.footerData} />
      </div>
    </>
  );
}

export default HomePage;
