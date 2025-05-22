import React, { useRef } from "react";
import Home_First_Section_mobile from "../components/Section_One_Home";
import Home_Two_Section_mobile from "../components/Section_Two_Home";
import Home_Three_Section_mobile from "../components/Section_Three_Home_mobile";
import Navbar from "../components/Navbar";
import HowItWorksSection from "../components/HowItWorksSection";
import FairPlaySection from "../components/FairPlaySection";
import Footer from "../components/Footer";
import VideoSection from "../components/VideoSection";
import LargeScreen from "../Desktop/LargeScreen";
import LargeLanding from "../Desktop/Landing-d";
import Last from "../Desktop/final";
import Footerr from "../Desktop/Footerr";
import Prized from "../Desktop/Prize";
import Completed from "../Desktop/Completed";
import LargeHow from "../Desktop/Howitdesk";
import LargeGolf from "../Desktop/GolfMeetCardd";
import GolfPrize from "../components/GolfPrize";
import Medalsection from "../components/Medal";
import Photosection from "../components/photo";
import Completesection from "../components/Complete";
import Leaderboardsection from "../components/Leaderboard";

function Home() {
  const triggerRef = useRef(null);

  return (
    <>
      <div className="">
        <div className="z-20 relative" ref={triggerRef}>
          <Home_First_Section_mobile />
        </div>
        <Navbar triggerRef={triggerRef} />
        <div className="-mt-4 relative z-10 ">
        <Home_Two_Section_mobile />
        </div>
        <div className="-mt-4 relative z-10 ">
        <Home_Three_Section_mobile />
        </div>

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

      {/* <div className="hidden md:block">
        <div className="bulge-bottom relative z-30 ">
        <LargeLanding /></div>
        <div className=" relative bulge-bottom z-20 -mt-6">
        <LargeHow />
        </div>
        <div className=" relative z-10 -mt-4 ">
        <LargeGolf />
        
        </div>
        <div className="relative z-0">
        <Completed /></div>
        <div className="relative -z-10 -mt-6 ">
        <Prized />
        </div>
        <div className=" bulge-bottomm relative z-20">
        <Last />
        </div>
        <div className="relative z-10 -mt-8">
        <Footerr />
        </div>
      </div> */}
    </>
  );
}

export default Home;
