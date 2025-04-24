import React from "react";
import bottomGraphic from "./bottom-graphic.png";
import golfmeet_qr_code from "./golfmeet_qr_code.png";
import phoneimg from "./phone-img.png";
function LargeScreen() {
  return (
    <div className="noise-bg h-screen">
      <div  style={{ mixBlendMode: 'darken' }} className=" relative flex justify-around items-center mx-auto h-full max-w-screen-lg z-20">
        <div >

        <img src={phoneimg} className="w-[329px] h-[681px]" alt="phoneimg" />
        </div>

        <div className="flex flex-col justify-center items-start gap-10">
          <h2 className="font-quattrocentoSans max-w-[426px] font-bold text-[48px] leading-[110%] text-[#014D4E] leading-trim text-edge-cap">
            golfmeet.com is <br /> best experienced on <br /> your mobile phone.
          </h2>
          <img
            src={golfmeet_qr_code}
            className="ml-2"
            alt="golfmeet_qr_code"
          />
        </div>
      </div>

      <img
        src={bottomGraphic}
        className=" absolute w-full bottom-0 2xl:fixed 2xl:-bottom-20 z-10"
        alt="bottomGraphic"
      />
    </div>
  );
}

export default LargeScreen;
