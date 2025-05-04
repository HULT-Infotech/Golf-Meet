import React from "react";
import Privacyone from "../components/privacyone";
import  Ctwo from "../components/privacy";
import Navbar from "../components/Navbar";

function PrivacyPage() {
  return (
    <><div className="">
      {/* Section 1  */}
      <Privacyone />
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

export default PrivacyPage;
