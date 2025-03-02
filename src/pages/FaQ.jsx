import React from "react";
import Navbar from "../components/Navbar";
import faq_bg from "../assets/faq/right-bg.svg";
import faq_greenleft from "../assets/faq/faq-green-left.svg";

function FaQ() {
  return (
    <>
      <Navbar />
      <section className="bg-gray-100 noise-bg relative flex flex-col md:min-h-[92vh]  md:flex-row ">
        <div className="flex flex-col w-full justify-between md:justify-around  gap-24 md:flex-row max-w-[1700px] mx-auto">
          {/* Text Section */}
          <div className="relative flex flex-col justify-center items-start p-8 md:pl-10 md:p-0 xl:ml-20">
            <h1 className="font-quattrocento text-5xl lg:text-6xl xl:text-7xl font-bold mb-4">
              FREQUENTLY <br /> ASKED <br /> QUESTIONS
            </h1>
          </div>

          {/* Right Image Section */}
          <div className="flex items-end px-5 md:px-0">
            <img
              src={faq_bg}
              alt="Golfers Illustration"
              className=" w-full object-contain pointer-events-none"
            />
          </div>
        </div>
        {/* Decorative Green Element */}
        <img
          src={faq_greenleft}
          alt="Green left element"
          className=" hidden md:block absolute md:-bottom-12 left-0 w-[270px] md:w-[400px] lg:w-[550px] xl:w-[750px] xl:-bottom-24 lg:-bottom-16 object-contain pointer-events-none"
        />
        <img
          src={faq_greenleft}
          alt="Green left element"
          className="absolute md:hidden -bottom-20 sm:-bottom-20 left-0 w-[350px] "
        />
      </section>
    </>
  );
}

export default FaQ;
