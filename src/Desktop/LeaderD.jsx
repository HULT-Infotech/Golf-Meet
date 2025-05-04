import React, { useState, useEffect } from "react";
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
import l11 from "../assets/LeaderPage/noleader.svg";
import bgImage from "../assets/bgffff.png";
import bgImage1 from "../assets/bg1.svg";
import bgImage2 from "../assets/bg2.svg";

// Simple Loading Component
const LoadingScreen = () => {
  return (
    <div className="fixed top-0 left-0 w-full h-full bg-white flex justify-center items-center z-50">
      <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-emerald-500 border-solid border-emerald-300"></div>
    </div>
  );
};

function LeaderPage() {
  // Ref for search input to maintain focus
  const searchInputRef = React.useRef(null);
  // State for search functionality
  const [searchTerm, setSearchTerm] = useState("");
  // State for search loading
  const [isSearching, setIsSearching] = useState(false);
  // State to track if a search has been performed
  const [hasSearched, setHasSearched] = useState(false);
  
  // Mock player data - replace with your actual player data
  const playerData = [
    { id: 1, name: "Rohan Singh", rounds: 15, points: 320, gmHcp: 12, image: l1, phone: "+91 - XXXX XX0 912" },
    { id: 2, name: "Rohan Kumar", rounds: 12, points: 280, gmHcp: 18, image: l2, phone: "+91 - XXXX XX0 912" },
    { id: 3, name: "Rohan Gupta", rounds: 10, points: 240, gmHcp: 24, image: l3, phone: "+91 - XXXX XX0 912" },
    { id: 4, name: "TBD", rounds: 0, points: 0, gmHcp: 0, image: l4, phone: "+91 - XXXX XX0 912" },
    { id: 5, name: "TBD", rounds: 0, points: 0, gmHcp: 0, image: l5, phone: "+91 - XXXX XX0 912" },
    { id: 6, name: "TBD", rounds: 0, points: 0, gmHcp: 0, image: l6, phone: "+91 - XXXX XX0 912" },
    { id: 7, name: "TBD", rounds: 0, points: 0, gmHcp: 0, image: l7, phone: "+91 - XXXX XX0 912" },
    { id: 8, name: "TBD", rounds: 0, points: 0, gmHcp: 0, image: l8, phone: "+91 - XXXX XX0 912" },
    { id: 9, name: "TBD", rounds: 0, points: 0, gmHcp: 0, image: l9, phone: "+91 - XXXX XX0 912" },
    { id: 10, name: "TBD", rounds: 0, points: 0, gmHcp: 0, image: l10, phone: "+91 - XXXX XX0 912" },
    // Additional players that only appear in search results
    { id: 11, name: "Rohan Sharma", rounds: 123, points: 9999, gmHcp: 99, image: l11, phone: "+91 - XXXX XX0 912", rank: 1103 },
    { id: 12, name: "Rohan Mishra", rounds: 118, points: 9850, gmHcp: 95, image: l11, phone: "+91 - XXXX XX0 912", rank: 1104 },
    { id: 13, name: "Rohan Patel", rounds: 115, points: 9780, gmHcp: 88, image: l11, phone: "+91 - XXXX XX0 912", rank: 1105 },
    { id: 14, name: "Rohan Verma", rounds: 112, points: 9650, gmHcp: 90, image: l11, phone: "+91 - XXXX XX0 912", rank: 1106 },
    { id: 15, name: "Rohan Reddy", rounds: 110, points: 9500, gmHcp: 85, image: l11, phone: "+91 - XXXX XX0 912", rank: 1107 },
    { id: 16, name: "Rohan Chatterjee", rounds: 108, points: 9350, gmHcp: 82, image: l11, phone: "+91 - XXXX XX0 912", rank: 1108 },
    { id: 17, name: "Rohan Malhotra", rounds: 105, points: 9200, gmHcp: 79, image: l11, phone: "+91 - XXXX XX0 912", rank: 1109 },
    { id: 18, name: "Rohan Joshi", rounds: 103, points: 9100, gmHcp: 76, image: l11, phone: "+91 - XXXX XX0 912", rank: 1110 },
    { id: 19, name: "Rohan Khanna", rounds: 101, points: 8950, gmHcp: 72, image: l11, phone: "+91 - XXXX XX0 912", rank: 1111 },
    { id: 20, name: "Rohan Bansal", rounds: 99, points: 8800, gmHcp: 68, image: l11, phone: "+91 - XXXX XX0 912", rank: 1112 },
  ];

  // Filter players based on search term with improved handling for spaces
  const filteredPlayers = playerData.filter(player => {
    const normalizedPlayerName = player.name.toLowerCase().trim();
    const normalizedSearchTerm = searchTerm.toLowerCase().trim();
    return normalizedPlayerName.includes(normalizedSearchTerm);
  });

  // Handle search input change
  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
    if (e.target.value === "") {
      setHasSearched(false);
    }
  };
  
  // Handle search submission
  const handleSearch = (e) => {
    if (e) {
      e.preventDefault(); // Prevent form submission default behavior
      e.stopPropagation(); // Stop event propagation
    }
    
    // Simulate search loading
    setIsSearching(true);
    setTimeout(() => {
      setIsSearching(false);
      setHasSearched(true);
    }, 600);
    
    // Focus on the input field to keep keyboard open
    if (searchInputRef.current) {
      searchInputRef.current.focus();
    }
  };

  // Clear search
  const clearSearch = () => {
    setSearchTerm("");
    setHasSearched(false);
    if (searchInputRef.current) {
      searchInputRef.current.focus();
    }
  };

  // Render a player card
  const renderPlayerCard = (player) => {
    // Check if player has rank (additional players)
    if (player.rank) {
      // Updated design with the specific gradient and no rank text
      return (
        <div className="wrapper" key={player.id} style={{ 
          width: 'clamp(340px, calc(100% - 24px), 450px)',
          margin: '0 auto'
        }}>
          <div style={{ 
            width: '100%', 
            height: '160px'
          }} className="bg-white mb-8 rounded-2xl shadow-xl relative">
            {/* Using l11 image in same position as other avatars */}
            <img src={player.image} alt="placeholder" className="absolute -top-[0.6rem] left-8 z-20" />
            
            {/* Yellow gradient background with specific values */}
            <div style={{ 
              width: '100%', 
              height: '85px',
              background: 'linear-gradient(180deg, rgba(244, 212, 85, 0) 0%, #F4D455 100%)'
            }} className="z-10 rounded-2xl flex flex-col items-start justify-center pl-28">
              <span className="text-[#01383A] text-xs font-medium">RANK #{player.rank}</span>
              <span className="text-[#01383A] text-lg font-bold">{player.name}</span>
              <span className="text-[#01383A] text-xs opacity-75">{player.phone}</span>
            </div>
            
            {/* Bottom section - with 3 metrics including GM HCP */}
            <div className="flex justify-between px-6 pt-4 items-center">
              <div className="flex items-center">
                <span className="text-[#01383A] font-semibold text-xs mr-1">ROUNDS:</span>
                <div className="bg-[#014D4E1A] rounded-full px-3 py-1">
                  <span className="text-[#014D4E] text-sm font-bold">{player.rounds}</span>
                </div>
              </div>
              <div className="flex items-center">
                <span className="text-[#01383A] font-semibold text-xs mr-1">POINTS:</span>
                <div className="bg-[#F4D455] rounded-full px-3 py-1">
                  <span className="text-[#014D4E] text-sm font-bold">{player.points.toLocaleString()}</span>
                </div>
              </div>
              <div className="flex items-center">
                <span className="text-[#01383A] font-semibold text-xs mr-1">GM HCP:</span>
                <div className="bg-[#CCCCCC] rounded-full px-3 py-1">
                  <span className="text-[#014D4E] text-sm font-bold">{player.gmHcp}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    } else {
      // Original card design for top 10 players, now with GM HCP added
      return (
        <div className="wrapper" key={player.id} style={{ 
          width: 'clamp(340px, calc(100% - 24px), 450px)',
          margin: '0 auto'
        }}>
          <div style={{ 
            width: '100%', 
            height: '160px'
          }} className="bg-white mb-8 rounded-2xl shadow-xl relative">
            <img src={player.image} alt="placeholder" className="absolute -top-[0.6rem] left-8 z-20" />
            <div style={{ 
              width: '100%', 
              height: '85px'
            }} className="bg-[#01383A] z-10 noise-bg-green rounded-2xl flex flex-col items-start justify-center pl-28">
              <span className="text-white text-lg font-medium">{player.name}</span>
              <span className="text-white text-sm opacity-75">{player.phone}</span>
            </div>
            <div className="flex justify-between px-6 pt-4 items-center">
              <div className="flex items-center">
                <span className="text-[#01383A] font-semibold text-xs mr-1">ROUNDS:</span>
                <div className="bg-[#014D4E1A] rounded-full px-3 py-1">
                  <span className="text-[#014D4E] text-sm font-bold">{player.rounds}</span>
                </div>
              </div>
              <div className="flex items-center">
                <span className="text-[#01383A] font-semibold text-xs mr-1">POINTS:</span>
                <div className="bg-[#F4D455] rounded-full px-3 py-1">
                  <span className="text-[#014D4E] text-sm font-bold">{player.points}</span>
                </div>
              </div>
              <div className="flex items-center">
                <span className="text-[#01383A] font-semibold text-xs mr-1">GM HCP:</span>
                <div className="bg-[#CCCCCC] rounded-full px-3 py-1">
                  <span className="text-[#014D4E] text-sm font-bold">{player.gmHcp}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }
  };

  return (
    <>
      {/* Main section with background image and noise overlay */}
      <div className="relative min-h-screen noise-bg-newest">
        
      <Navbar/>
        {/* Background image for top half with gradient overlay */}
        <div className="absolute top-0 bulge-bottom left-0 w-full h-1/2 z-1 overflow-hidden">
          {/* Original background image */}
          <div
            style={{
              backgroundImage: `url(${bgImage})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              width: '100%',
              height: '100%',
              position: 'absolute',
              top: 0,
              left: 0
            }}
          ></div>
          
          {/* Sky blue gradient at the top */}
          <div
            style={{
              background: `linear-gradient(180deg, #87CEFA 0%, #ADE4FF 25%, #C1E8FF 40%, rgba(217, 243, 255, 0.8) 60%, rgba(235, 249, 255, 0.6) 75%, rgba(255, 255, 255, 0) 100%)`,
              width: '100%',
              height: '60%',
              position: 'absolute',
              top: 0,
              left: 0,
              opacity: 0.95
            }}
          ></div>
          
          {/* Very light white fade below the blue gradient */}
          <div
            style={{
              background: `linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.2) 20%, rgba(255, 255, 255, 0.15) 40%, rgba(255, 255, 255, 0.1) 60%, rgba(255, 255, 255, 0.05) 80%, rgba(255, 255, 255, 0) 100%)`,
              width: '100%',
              height: '40%',
              position: 'absolute',
              top: '60%',
              left: 0
            }}
          ></div>
        </div>
        
        {/* Noise background for bottom half with -mt-4 margin */}
        <div className="absolute -mt-4 bottom-0 left-0 w-full h-1/2 noise-bg-newest z-0"></div>
        
        {/* Corner image - restored to original */}
        <img 
          src={bgImage1} 
          alt="" 
          className="absolute bottom-0 left-0 w-[26rem] h-auto object-contain z-10"
        />
        
        <img 
          src={bgImage2} 
          alt="" 
          className="absolute bottom-0 right-0 w-[38rem] h-auto object-contain z-10"
        />
        
        {/* Content container */}
        <div className="relative z-10">
          <div style={{ height: "80px" }} className="md:h-[90px] lg:h-[100px]" />

          <h1 
            className="font-quattrocento font-bold text-5xl mt-16 mb-2 text-center"
            style={{
              background: 'linear-gradient(180deg, rgba(255, 180, 30, 0.9) 0%, #014D4E 45%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              textFillColor: 'transparent',
              textShadow: '0px 0px 1px rgba(0, 0, 0, 0.15)',
              filter: 'drop-shadow(0px 0.5px 0.5px rgba(0, 0, 0, 0.2))',
            }}
          >
            LEADERBOARD
          </h1>
          
          {/* Updated Search bar component with clear button */}
          <div className="flex flex-col items-center mb-6">
            <p className="text-gray-500 font-quattrocento text-sm mb-3">Scores updated on : Thursday, 1 May 2025</p>
            <div className="relative w-full max-w-md px-4">
              <div className="relative bg-white rounded-full shadow-lg overflow-hidden">
                <form onSubmit={handleSearch}>
                  <input 
                    ref={searchInputRef}
                    id="player-search"
                    type="text" 
                    name="search" 
                    placeholder="Search by player name" 
                    value={searchTerm}
                    onChange={handleSearchChange}
                    className="bg-white h-12 px-5 pr-12 rounded-full text-sm focus:outline-none w-full"
                    autoComplete="off"
                    onKeyDown={(e) => {
                      if (e.key === 'Enter') {
                        handleSearch(e);
                      }
                    }}
                  />
                  <button 
                    type="button" 
                    className="absolute right-0 top-0 h-12 w-12 flex items-center justify-center text-green-800"
                    onClick={hasSearched && searchTerm ? clearSearch : handleSearch}
                  >
                    {isSearching ? (
                      <div className="animate-spin h-5 w-5 border-2 border-green-800 rounded-full border-t-transparent"></div>
                    ) : hasSearched && searchTerm ? (
                      <svg className="h-5 w-5 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
                      </svg>
                    ) : (
                      <svg className="h-5 w-5 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/>
                      </svg>
                    )}
                  </button>
                </form>
              </div>
            </div>
          </div>
          
          {/* Search Results Info */}
          {hasSearched && searchTerm ? (
            <div className="flex items-center justify-center w-full whitespace-nowrap">
              <div className="border-t-2 border-gray-300 flex-grow"></div>
              <h2 className="px-2 font-quattrocento text-gray-500 text-sm font-normal mx-2">
                Showing {filteredPlayers.length} results for "{searchTerm}"
              </h2>
              <div className="border-t-2 border-gray-300 flex-grow"></div>
            </div>
          ) : (
            <div className="flex items-center justify-center w-full whitespace-nowrap">
              <div className="border-t-2 border-gray-300 flex-grow"></div>
              <h2 className="px-2 font-quattrocento text-gray-500 text-sm font-normal mx-2">↓ Top 10 ranked players ↓</h2>
              <div className="border-t-2 border-gray-300 flex-grow"></div>
            </div>
          )}
          
          {/* Player cards section */}
          <section className="flex flex-col items-center mx-auto my-12 pb-12 overflow-hidden">
            {/* Display only top 10 players if not searching */}
            {!hasSearched || !searchTerm
              ? filteredPlayers.slice(0, 10).map(player => renderPlayerCard(player))
              : filteredPlayers.map(player => renderPlayerCard(player))
            }
            
            {/* No more results message */}
            {hasSearched && searchTerm && filteredPlayers.length > 0 && (
              <div className="w-full text-center text-gray-500 font-quattrocento text-sm mt-4">
                No more results for "{searchTerm}"
              </div>
            )}
            
            {/* No results found message */}
            {hasSearched && searchTerm && filteredPlayers.length === 0 && (
              <div className="w-full text-center text-gray-500 font-quattrocento text-sm mt-4">
                No results found for "{searchTerm}"
              </div>
            )}
          </section>
        </div>
      </div>
    </>
  );
}

export default LeaderPage;