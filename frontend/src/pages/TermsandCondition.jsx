import React from "react";
import Termone from "../components/Terms_of_Use";
import Ctwo from "../components/Terms_of_Use";
import Navbar from "../components/Navbar";

function TermPage() {
  return (
    <>
      <div className="">
        {/* Section 1  */}
        <Navbar />
        <div style={{ height: "80px" }} className="md:h-[90px] lg:h-[100px]" />

        <Termone />
      </div>
    </>
  );
}

export default TermPage;
