import React, { useRef } from "react";
import LandingSection from "../components/Improve_Section_landing";
import Navbar from "../components/Navbar";
import HowItWorksSection from "../components/Improve_HowItWorksSection";
import FairPlaySection from "../components/Improve_section_handicap";
import Footer from "../components/Footer";
import VideoSection from "../components/VideoSection";
import GolfPrize from "../components/CommonGolfPrize";
import Medalsection from "../components/Medal";
import Photosection from "../components/Common_photo";
import Completesection from "../components/Improve_Section_completed";
import Leaderboardsection from "../components/Leaderboard";

function HomePage() {
  const triggerRef = useRef(null);

  return (
    <>
      <div className="">
        <div className="z-20 relative bulge-botto md:bulge-bottom md:z-30" ref={triggerRef}>
          <LandingSection />
        </div>
        <Navbar triggerRef={triggerRef} />
        <div className="-mt-4 relative z-10 md:bulge-bottom md:z-20 md:-mt-6 ">
        <HowItWorksSection />
        </div>
        
        <FairPlaySection />
        <div className="-mt-6 relative z-0 md:hidden">
          <VideoSection />
        </div>
        <div className="relative -z-10 -mt-8 md:z-0">
        <Completesection/>
        </div>
        <div className="w-full bg-gray-100 noise-bg-n md:hidden">
  <div className="mx-auto w-fit ">
    <Leaderboardsection />
  </div>
</div>

        <div className="-mt-2 md:bulge-topp">
        <GolfPrize />
        </div>
        <div className="md:hidden">
        <Medalsection />
        </div>
        <div className="relative z-20 md:bulge-bottomm">
        <Photosection />
        </div>
    <div className="relative z-10 -mt-8">
        <Footer />
        </div>
      </div>
    </>
  );
}

export default HomePage;
