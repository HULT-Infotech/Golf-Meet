import React from "react";
import Termone from "../components/termone";
import  Ctwo from "../components/common";
import Navbar from "../components/Navbar";

function TermPage() {
  return (
    <><div className="md:hidden">
      {/* Section 1  */}
<Navbar />
<div style={{ height: "80px" }} className="md:h-[90px] lg:h-[100px]" />

      <Termone />
      {/* Section 2
      <CompeteWorldwideSection /> */}

      
      {/* Section 3 */}
      <div className="md:overflow-visible overflow-hidden">
      <Ctwo />
      </div>
      </div>
    </>
  );
}

export default TermPage;
