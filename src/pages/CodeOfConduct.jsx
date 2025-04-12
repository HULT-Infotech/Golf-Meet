import React from "react";
import Cone from "../components/code-one";
import  Ctwo from "../components/common";

function CodePage() {
  return (
    <>
    <div className="md:hidden">
      {/* Section 1  */}
      <Cone />
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

export default CodePage;
