import React from 'react';
import p_1 from "../assets/Photosection/p1.png";
import p_2 from "../assets/Photosection/p2.png";
import { p } from 'framer-motion/client';
const ExclusiveEventsPage = () => {
  return (
    <div className="w-full min-h-screen bg-white">
      {/* Heading Section */}
      <div className="pt-8 pb-6 px-4 text-center font-quattrocento">
        <h1 className="text-3xl sm:text-4xl font-bold text-teal-800">ENJOY EXCLUSIVE</h1>
        <h1 className="text-3xl sm:text-4xl font-bold text-teal-800">CURATED EVENTS</h1>
      </div>
      
      {/* First Photo */}
      <div className="px-4 mb-4">
        <div className="rounded-lg overflow-hidden shadow-md">
          <img 
            src={p_1}
            alt="People enjoying a social gathering at a golf club" 
            className="w-full h-auto"
          />
        </div>
      </div>
      
      {/* Second Photo */}
      <div className="px-4">
        <div className="rounded-lg overflow-hidden shadow-md">
          <img 
            src={p_2} 
            alt="Stand-up comedy event at an exclusive venue" 
            className="w-full h-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default ExclusiveEventsPage;