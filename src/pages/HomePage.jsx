import React, { useRef } from "react";
import LandingSection from "../components/LandingSection";
import Navbar from "../components/Navbar";
import HowItWorksSection from "../components/HowItWorksSection";
import FairPlaySection from "../components/FairPlaySection";
import Footer from "../components/Footer";
import VideoSection from "../components/VideoSection";
import LargeScreen from "../Desktop/LargeScreen";
import LargeLanding from "../Desktop/Landing-d";
import LargeHow from "../Desktop/Howitdesk";
import LargeGolf from "../Desktop/GolfMeetCardd";
import GolfPrize from "../components/GolfPrize";
import Medalsection from "../components/Medal";
import Photosection from "../components/photo";
import Completesection from "../components/Complete";
import Leaderboardsection from "../components/Leaderboard";

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
        <HowItWorksSection />
        </div>
        
        <FairPlaySection />
        <div className="-mt-6 relative z-0">
          <VideoSection />
        </div>
        <div className="relative -z-10 -mt-8">
        <Completesection/>
        </div>
        <Leaderboardsection/>
        <div className="-mt-2">
        <GolfPrize />
        </div>
        <Medalsection />
        <div className="relative z-20">
        <Photosection />
        </div>
    <div className="relative z-10 -mt-8">
        <Footer />
        </div>
      </div>

      <div className="hidden md:block">
      <div className="z-20 relative" ref={triggerRef}>
        <LargeLanding />
        </div>
        <Navbar triggerRef={triggerRef} />
        <LargeHow />
        <div className="lg:mt-96">
        <LargeGolf />
        </div>
      </div>
    </>
  );
}

export default HomePage;
