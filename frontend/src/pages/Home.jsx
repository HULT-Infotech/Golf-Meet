import React, { useRef } from "react";
import Home_First_Section_mobile from "../components/Section_One_Home";
import Home_Two_Section_mobile from "../components/Section_Two_Home";
import Home_Three_Section_mobile from "../components/Section_Three_Home_mobile";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import GolfPrize from "../components/CommonGolfPrize";
import Photosection from "../components/Common_photo";

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

        <div className=" bulge-topp">
        <GolfPrize />
        </div>
        <div className="relative z-20 bulge-botto">
        <Photosection />
        </div>
    <div className="relative z-10 -mt-8">
        <Footer />
        </div>
      </div>

      
    </>
  );
}

export default Home;
