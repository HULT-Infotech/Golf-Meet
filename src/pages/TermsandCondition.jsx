import React from "react";
import Termone from "../components/termone";
import  Ctwo from "../components/common";
import Navbar from "../components/Navbar";

function TermPage() {
  return (
    <>
      {/* Section 1  */}
      <Termone />
<Navbar />
      {/* Section 2
      <CompeteWorldwideSection /> */}

      
      {/* Section 3 */}
      <div className="md:overflow-visible overflow-hidden">
      <Ctwo />
      </div>
    </>
  );
}

export default TermPage;
