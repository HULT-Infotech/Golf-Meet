import React, { useState, useEffect } from "react";
import LeaderM from "../components/Leadermobile";
import Navbar from "../components/Navbar";
import LeaderPaged from "../Desktop/LeaderD"
import Prized from "../Desktop/Prize";
import Footer from "../Desktop/Footerr";
// Simple Loading Component
function LeaderPage() {

  return (
    <>
      <div className="md:hidden">
        <LeaderM/>
      </div>

      <div className="hidden md:block">
      <Navbar/>
      <div className="relative z-10">
        <LeaderPaged/>
        </div>
        <div className="relative z-20 bulge-top-others -mt-28">
        <Prized/>
        </div>

      {/* Footer section */}
      <div className="relative">
        {/* Subtle bottom shadow that fades upward */}
        <div className="h-6 w-full bg-gradient-to-t from-gray-400 via-gray-100 to-transparent opacity-40"></div>
        {/* Footer component */}
        <Footer className=""/>
      </div>
      </div>
    </>
  );
}

export default LeaderPage;
