import React from "react";
import Privacyone from "../components/privacyone";
import  Ctwo from "../components/common";
import Navbar from "../components/Navbar";

function PrivacyPage() {
  return (
    <><div className="hidden">
      {/* Section 1  */}
      <Privacyone />
<Navbar />
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
