import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import l1 from "../assets/LeaderPage/leader1.svg";
import l2 from "../assets/LeaderPage/leader2.svg";
import l3 from "../assets/LeaderPage/leader3.svg";
import l4 from "../assets/LeaderPage/leader4.svg";
import l5 from "../assets/LeaderPage/leader5.svg";
import l6 from "../assets/LeaderPage/leader6.svg";
import l7 from "../assets/LeaderPage/leader7.svg";
import l8 from "../assets/LeaderPage/leader8.svg";
import l9 from "../assets/LeaderPage/leader9.svg";
import l10 from "../assets/LeaderPage/leader10.svg";

function LeaderPage() {
  // State for search functionality
  const [searchTerm, setSearchTerm] = useState("");
  
  // Mock player data - replace with your actual player data
  const playerData = [
    { id: 1, name: "TBD", rounds: 0, points: 0, image: l1 },
    { id: 2, name: "TBD", rounds: 0, points: 0, image: l2 },
    { id: 3, name: "TBD", rounds: 0, points: 0, image: l3 },
    { id: 4, name: "TBD", rounds: 0, points: 0, image: l4 },
    { id: 5, name: "TBD", rounds: 0, points: 0, image: l5 },
    { id: 6, name: "TBD", rounds: 0, points: 0, image: l6 },
    { id: 7, name: "TBD", rounds: 0, points: 0, image: l7 },
    { id: 8, name: "TBD", rounds: 0, points: 0, image: l8 },
    { id: 9, name: "TBD", rounds: 0, points: 0, image: l9 },
    { id: 10, name: "TBD", rounds: 0, points: 0, image: l10 },
  ];

  // Filter players based on search term
  const filteredPlayers = playerData.filter(player =>
    player.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Handle search input change
  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  // Render a player card
  const renderPlayerCard = (player) => (
    <div className="wrapper" key={player.id} style={{ 
      width: 'clamp(280px, calc(100% - 24px), 370px)',
      margin: '0 auto'
    }}>
      <div style={{ 
        width: '100%', 
        height: '140px'
      }} className="bg-white mb-8 rounded-2xl shadow-xl relative">
        <img src={player.image} alt="placeholder" className="absolute -top-[0.6rem] left-8 z-20" />
        <div style={{ 
          width: '100%', 
          height: '75px'
        }} className="bg-[#01383A] z-10 noise-bg-green rounded-2xl flex items-center">
          <span className="text-white left-28 relative">{player.name}</span>
        </div>
        <div className="flex justify-between px-8 pt-4 items-center">
          <div className="flex items-center">
            <span className="text-[#01383A] font-semibold text-xs mr-2">ROUNDS PLAYED:</span>
            <div className="bg-[#014D4E1A] rounded-full px-4 py-1">
              <span className="text-[#014D4E] text-sm font-bold">{player.rounds}</span>
            </div>
          </div>
          <div className="flex items-center">
            <span className="text-[#01383A] font-semibold text-xs mr-2">POINTS:</span>
            <div className="bg-[#F4D455] rounded-full px-4 py-1">
              <span className="text-[#014D4E] text-sm font-bold">{player.points}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <>
    <section className="h-auto md:hidden noise-bg-n pb-12">
        
    <Navbar/>
    <div style={{ height: "80px" }} className=" md:h-[90px] lg:h-[100px]" />

        <h1 className="font-quattrocento font-bold text-4xl mt-16 mb-2 text-center text-[#201E15]">LEADERBOARD</h1>
        
        
        {/* Updated Search bar component that matches the image exactly */}
        <div className="flex flex-col items-center mb-6">
          <p className="text-gray-500 font-quattrocento text-sm mb-3">Scores updated on : Thursday, 1 May 2025</p>
          <div className="relative w-full max-w-md px-4">
            <div className="relative bg-white rounded-full shadow-lg overflow-hidden">
              <input 
                type="text" 
                name="search" 
                placeholder="Search by player name" 
                value={searchTerm}
                onChange={handleSearchChange}
                className="bg-white h-12 px-5 pr-12 rounded-full text-sm focus:outline-none w-full"
                autoComplete="off"
              />
              <button 
                type="button" 
                className="absolute right-0 top-0 h-12 w-12 flex items-center justify-center text-green-800"
                onClick={(e) => {
                  e.preventDefault(); // Prevent default to avoid keyboard closing
                  // Keep focus on input
                  e.currentTarget.previousSibling.focus();
                }}
              >
                <svg className="h-5 w-5 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/>
                </svg>
              </button>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center w-full whitespace-nowrap">
          <div className="border-t-2 border-gray-300 flex-grow"></div>
          <h2 className="px-2 font-quattrocento text-gray-500 text-sm font-normal mx-2">↓ Top 10 ranked players ↓</h2>
          <div className="border-t-2 border-gray-300 flex-grow"></div>
        </div>
        
        <section className="flex flex-col items-center mx-auto my-12">
          {filteredPlayers.map(player => renderPlayerCard(player))}
        </section>

    </section>

      {/* Footer with improved top shadow */}
      <div className="relative -mt-20">
        {/* Subtle bottom shadow that fades upward */}
        <div className="h-6 w-full bg-gradient-to-t from-gray-400 via-gray-100 to-transparent opacity-40"></div>
        {/* Footer component */}
        <Footer className=""/>
      </div>
    </>
  );
}

export default LeaderPage;