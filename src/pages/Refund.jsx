import React from "react";
import Cone from "../components/refund-one";
import  Ctwo from "../components/common2";

function RefundPage() {
  return (
    <>
    <div className="">
      {/* Section 1  */}
      <Cone />
      {/* Section 2
      <CompeteWorldwideSection /> */}

      
      {/* Section 3 */}
      <div className="md:overflow-visible -mt-8 overflow-hidden">
      <Ctwo />
      </div>
      </div>
    </>
  );
}

export default RefundPage;
