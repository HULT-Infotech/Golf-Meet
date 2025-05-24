import React from "react";
import Cone from "../components/code-one";
import  Ctwo from "../components/common";

function CodePage() {
  return (
    <>
    <div className="">
      {/* Section 1  */}
      <div className="md:-mb-28 lg:-mb-20 relative z-20">
      <Cone />
      </div>
      {/* Section 2
      <CompeteWorldwideSection /> */}

      
      {/* Section 3 */}
      <div className="md:overflow-visible overflow-hidden relative z-10">
      <Ctwo />
      </div>
      </div>
    </>
  );
}

export default CodePage;
