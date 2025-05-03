import React, { useState, useEffect } from "react";
import LeaderM from "../components/Leadermobile";
import LeaderPaged from "../Desktop/LeaderD"
// Simple Loading Component
function LeaderPage() {

  return (
    <>
      <div className="md:hidden">
        <LeaderM/>
      </div>

      <div className="hidden md:block">
        <LeaderPaged/>
      </div>
    </>
  );
}

export default LeaderPage;
