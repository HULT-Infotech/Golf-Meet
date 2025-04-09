import { div } from "framer-motion/client";
import React from "react";

function VideoSection() {
  return (
    <section className="bg-[#014D4E] h-[75vh] noise-bg-green flex flex-col items-center justify-center pt-10 md:p-20 relative clip-slant z-20">

      {/* Video player container with border */}
  
      

      {/* Tagline and description */}
      <div className="text-center text-white py-0">
        <h2 className="text-5xl flex  flex-col md:flex-row  justify-center items-center gap-5 font-quattrocento md:text-5xl lg:text-6xl font-bold tracking-wider mb-4">
          <svg
            width="13"
            height="14"
            viewBox="0 0 13 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="inline-block mx-1"
          >
            <path
              d="M0.328125 7.072C0.328125 6.256 0.472125 5.464 0.760125 4.696C1.09612 3.928 1.55212 3.256 2.12812 2.68C2.70412 2.056 3.37613 1.576 4.14413 1.24C4.91213 0.856002 5.75213 0.664001 6.66412 0.664001C7.48013 0.664001 8.27213 0.856002 9.04013 1.24C9.80813 1.576 10.4801 2.056 11.0561 2.68C11.6321 3.256 12.0881 3.928 12.4241 4.696C12.8081 5.464 13.0001 6.256 13.0001 7.072C13.0001 8.896 12.3521 10.408 11.0561 11.608C9.76013 12.76 8.29613 13.336 6.66412 13.336C4.84013 13.336 3.32812 12.76 2.12812 11.608C0.928125 10.408 0.328125 8.896 0.328125 7.072Z"
              fill="#E5E5E5"
            />
          </svg>
          MEET
          <p className=" text-sm block md:hidden  ">Meet new golfers in your area.</p>
          <svg
            width="13"
            height="14"
            viewBox="0 0 13 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="inline-block mx-1"
          >
            <path
              d="M0.328125 7.072C0.328125 6.256 0.472125 5.464 0.760125 4.696C1.09612 3.928 1.55212 3.256 2.12812 2.68C2.70412 2.056 3.37613 1.576 4.14413 1.24C4.91213 0.856002 5.75213 0.664001 6.66412 0.664001C7.48013 0.664001 8.27213 0.856002 9.04013 1.24C9.80813 1.576 10.4801 2.056 11.0561 2.68C11.6321 3.256 12.0881 3.928 12.4241 4.696C12.8081 5.464 13.0001 6.256 13.0001 7.072C13.0001 8.896 12.3521 10.408 11.0561 11.608C9.76013 12.76 8.29613 13.336 6.66412 13.336C4.84013 13.336 3.32812 12.76 2.12812 11.608C0.928125 10.408 0.328125 8.896 0.328125 7.072Z"
              fill="#E5E5E5"
            />
          </svg>
          PLAY
          <p className=" text-sm block md:hidden">
            Make new friends and connections.
          </p>
          <svg
            width="13"
            height="14"
            viewBox="0 0 13 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="inline-block mx-1"
          >
            <path
              d="M0.328125 7.072C0.328125 6.256 0.472125 5.464 0.760125 4.696C1.09612 3.928 1.55212 3.256 2.12812 2.68C2.70412 2.056 3.37613 1.576 4.14413 1.24C4.91213 0.856002 5.75213 0.664001 6.66412 0.664001C7.48013 0.664001 8.27213 0.856002 9.04013 1.24C9.80813 1.576 10.4801 2.056 11.0561 2.68C11.6321 3.256 12.0881 3.928 12.4241 4.696C12.8081 5.464 13.0001 6.256 13.0001 7.072C13.0001 8.896 12.3521 10.408 11.0561 11.608C9.76013 12.76 8.29613 13.336 6.66412 13.336C4.84013 13.336 3.32812 12.76 2.12812 11.608C0.928125 10.408 0.328125 8.896 0.328125 7.072Z"
              fill="#E5E5E5"
            />
          </svg>
          COMPETE
          <p className=" text-sm block md:hidden">Compete with amateur golfers nationwide.</p>
          <svg
            width="13"
            height="14"
            viewBox="0 0 13 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="inline-block mx-1 "
          >
            <path
              d="M0.328125 7.072C0.328125 6.256 0.472125 5.464 0.760125 4.696C1.09612 3.928 1.55212 3.256 2.12812 2.68C2.70412 2.056 3.37613 1.576 4.14413 1.24C4.91213 0.856002 5.75213 0.664001 6.66412 0.664001C7.48013 0.664001 8.27213 0.856002 9.04013 1.24C9.80813 1.576 10.4801 2.056 11.0561 2.68C11.6321 3.256 12.0881 3.928 12.4241 4.696C12.8081 5.464 13.0001 6.256 13.0001 7.072C13.0001 8.896 12.3521 10.408 11.0561 11.608C9.76013 12.76 8.29613 13.336 6.66412 13.336C4.84013 13.336 3.32812 12.76 2.12812 11.608C0.928125 10.408 0.328125 8.896 0.328125 7.072Z"
              fill="#E5E5E5"
            />
          </svg>
        </h2>
        <p className=" md:block hidden font-quattrocentoSans font-light text-[20px] leading-[26.59px] tracking-[0.025em] text-center">
          Meet new golfers in your area. Make new friends. Compete with amateur
          golfers nationwide.
        </p>
      </div>
    </section>
  );
}

export default VideoSection;
