import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
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
  // State for active tab
  const [activeTab, setActiveTab] = useState("BEST PLAYERS");
  
  // Mock player data with improvement numbers
  const playerData = [
    { 
      id: 1, 
      name: "Srinivas Raghav Kashyap", 
      rounds: 123, 
      points: 9999, 
      phone: "+91 xxxxx x9019", 
      location: "Gurgaon, IN", 
      rawScore: 9999, 
      rank: 1, 
      indicator: "▲", 
      indicatorColor: "text-green-500", 
      improvement: "3" 
    },
    { 
      id: 2, 
      name: "Aditi Sharma", 
      rounds: 95, 
      points: 8754, 
      phone: "+91 xxxxx x5018", 
      location: "Mumbai, IN", 
      rawScore: 9980, 
      rank: 2, 
      indicator: "▲", 
      indicatorColor: "text-green-500", 
      improvement: "4" 
    },
    { 
      id: 3, 
      name: "Rajesh Kumar", 
      rounds: 102, 
      points: 6543, 
      phone: "+91 xxxxx x9017", 
      location: "New Delhi, IN", 
      rawScore: 8765, 
      rank: 3, 
      indicator: "▼", 
      indicatorColor: "text-red-500", 
      improvement: "3" 
    },
    { 
      id: 4, 
      name: "Anjali Verma", 
      rounds: 87, 
      points: 4392, 
      phone: "+91 xxxxx x2345", 
      location: "Hyderabad, IN", 
      rawScore: 10400, 
      rank: 4, 
      indicator: "●", 
      indicatorColor: "text-gray-400", 
      improvement: "0" 
    },
    { 
      id: 5, 
      name: "Deepak Patil", 
      rounds: 76, 
      points: 3210, 
      phone: "+91 xxxxx x6739", 
      location: "Pune, IN", 
      rawScore: 9800, 
      rank: 5, 
      indicator: "▲", 
      indicatorColor: "text-green-500", 
      improvement: "1" 
    },
    { 
      id: 6, 
      name: "Meera Nair", 
      rounds: 91, 
      points: 5678, 
      phone: "+91 xxxxx x5432", 
      location: "Chennai, IN", 
      rawScore: 10100, 
      rank: 6, 
      indicator: "▲", 
      indicatorColor: "text-green-500", 
      improvement: "3" 
    },
    { 
      id: 7, 
      name: "Vikram Sinha", 
      rounds: 68, 
      points: 4321, 
      phone: "+91 xxxxx x7890", 
      location: "Kolkata, IN", 
      rawScore: 8950, 
      rank: 7, 
      indicator: "▲", 
      indicatorColor: "text-green-500", 
      improvement: "2" 
    },
    { 
      id: 8, 
      name: "Kabir Bhatia", 
      rounds: 113, 
      points: 9876, 
      phone: "+91 xxxxx x1357", 
      location: "Ahmedabad, IN", 
      rawScore: 10250, 
      rank: 8, 
      indicator: "▲", 
      indicatorColor: "text-green-500", 
      improvement: "4" 
    },
    { 
      id: 9, 
      name: "Nisha Gupta", 
      rounds: 104, 
      points: 2468, 
      phone: "+91 xxxxx x2468", 
      location: "Jaipur, IN", 
      rawScore: 9400, 
      rank: 9, 
      indicator: "▲", 
      indicatorColor: "text-green-500", 
      improvement: "1" 
    },
    { 
      id: 10, 
      name: "Arjun Malhotra", 
      rounds: 82, 
      points: 1357, 
      phone: "+91 xxxxx x3579", 
      location: "Surat, IN", 
      rawScore: 10000, 
      rank: 10, 
      indicator: "▲", 
      indicatorColor: "text-green-500", 
      improvement: "5" 
    },
    { 
      id: 11, 
      name: "Pooja Reddy", 
      rounds: 94, 
      points: 8642, 
      phone: "+91 xxxxx x9713", 
      location: "Cochin, IN", 
      rawScore: 9200, 
      rank: 11, 
      indicator: "▲", 
      indicatorColor: "text-green-500", 
      improvement: "1" 
    },
    { 
      id: 12, 
      name: "Suresh Iyer", 
      rounds: 126, 
      points: 7531, 
      phone: "+91 xxxxx x8024", 
      location: "Nagpur, IN", 
      rawScore: 9800, 
      rank: 12, 
      indicator: "▲", 
      indicatorColor: "text-green-500", 
      improvement: "2" 
    },
    { 
      id: 13, 
      name: "Aarav Mehta", 
      rounds: 81, 
      points: 1470, 
      phone: "+91 xxxxx x3691", 
      location: "Indore, IN", 
      rawScore: 10900, 
      rank: 13, 
      indicator: "▲", 
      indicatorColor: "text-green-500", 
      improvement: "4" 
    },
    { 
      id: 14, 
      name: "Tania Kapoor", 
      rounds: 103, 
      points: 2580, 
      phone: "+91 xxxxx x4782", 
      location: "Lucknow, IN", 
      rawScore: 10500, 
      rank: 14, 
      indicator: "▲", 
      indicatorColor: "text-green-500", 
      improvement: "5" 
    },
    { 
      id: 15, 
      name: "Raghav Joshi", 
      rounds: 97, 
      points: 3691, 
      phone: "+91 xxxxx x5893", 
      location: "Chandigarh, IN", 
      rawScore: 8700, 
      rank: 15, 
      indicator: "▲", 
      indicatorColor: "text-green-500", 
      improvement: "3" 
    },
    { 
      id: 16, 
      name: "Ananya Sethi", 
      rounds: 89, 
      points: 4802, 
      phone: "+91 xxxxx x6904", 
      location: "Chandigarh, IN", 
      rawScore: 11000, 
      rank: 16, 
      indicator: "▲", 
      indicatorColor: "text-green-500", 
      improvement: "2" 
    },
    { 
      id: 17, 
      name: "Karan Dhingra", 
      rounds: 134, 
      points: 5913, 
      phone: "+91 xxxxx x8015", 
      location: "Kanpur, IN", 
      rawScore: 9400, 
      rank: 17, 
      indicator: "▲", 
      indicatorColor: "text-green-500", 
      improvement: "1" 
    },
    { 
      id: 18, 
      name: "Neha Choudhury", 
      rounds: 88, 
      points: 7024, 
      phone: "+91 xxxxx x9126", 
      location: "Patna, IN", 
      rawScore: 9600, 
      rank: 18, 
      indicator: "▲", 
      indicatorColor: "text-green-500", 
      improvement: "3" 
    },
    { 
      id: 19, 
      name: "Samir Patel", 
      rounds: 98, 
      points: 8135, 
      phone: "+91 xxxxx x0237", 
      location: "Vadodara, IN", 
      rawScore: 10800, 
      rank: 19, 
      indicator: "▲", 
      indicatorColor: "text-green-500", 
      improvement: "1" 
    },
    { 
      id: 20, 
      name: "Priya Sharma", 
      rounds: 105, 
      points: 9246, 
      phone: "+91 xxxxx x1348", 
      location: "Bhopal, IN", 
      rawScore: 9300, 
      rank: 20, 
      indicator: "▲", 
      indicatorColor: "text-green-500", 
      improvement: "4" 
    },
  ];

  // Filter players based on search term
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
      e.preventDefault();
      e.stopPropagation();
    }
    
    setIsSearching(true);
    setTimeout(() => {
      setIsSearching(false);
      setHasSearched(true);
    }, 600);
    
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

  // Render player row for mobile list view
  const renderPlayerRow = (player) => {
    return (
      <div key={player.id} className="bg-white border-b border-gray-100 px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Left section - Rank and Name */}
          <div className="flex items-start space-x-3 flex-1">
            {/* Rank with indicator and improvement number */}
            <div className="flex flex-col items-center min-w-6">
              <span className="text-sm font-bold text-gray-800">{player.rank}</span>
              <div className="flex items-center space-x-0.5 mt-0.5">
                <span className={`text-xs ${player.indicatorColor}`}>{player.indicator}</span>
                <span className={`text-xs ${player.indicatorColor} font-medium`}>{player.improvement}</span>
              </div>
            </div>
            
            {/* Player info */}
            <div className="flex-1">
              <h3 className="font-medium text-gray-900 text-sm leading-tight">{player.name}</h3>
              <div className="flex items-center space-x-2 text-xs text-gray-500 mt-1">
                <span>{player.phone}</span>
                <span>•</span>
                <span>{player.location}</span>
              </div>
              <div className="flex items-center space-x-2 text-xs text-gray-600 mt-0.5">
                <span>ROUNDS: {player.rounds}</span>
                <span>•</span>
                <span>RAW SCORE: {player.rawScore?.toLocaleString()}</span>
              </div>
            </div>
          </div>
          
          {/* Right section - Points and Details */}
          <div className="flex items-center space-x-2">
            <div className="text-right">
              <div className="text-lg font-bold text-gray-900">{player.points?.toLocaleString()}</div>
            </div>
            <button className="text-teal-600 hover:text-teal-700 text-sm font-medium flex items-center">
              Details
              <svg className="w-3 h-3 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    );
  };

  return (
    <>
      <section className="min-h-screen bg-gray-50">
        <Navbar/>
        <div style={{ height: "80px" }} className="md:h-[90px] lg:h-[100px]" />

        {/* Header Section */}
        <div className="bg-white px-4 py-4">
          <h1 className="text-xl font-bold text-center text-teal-700 mb-1">
            GOLF MEET INDIA
          </h1>
          <h2 className="text-lg font-semibold text-center text-teal-700 mb-3">
            RANKINGS 2025
          </h2>
          <p className="text-center text-gray-500 text-xs">
            Scores updated on : Thursday, 1 May 2025
          </p>
        </div>

        {/* Search Section */}
        <div className="bg-white px-4 pb-3">
          <div className="relative">
            <form onSubmit={handleSearch}>
              <input 
                ref={searchInputRef}
                id="player-search"
                type="text" 
                name="search" 
                placeholder="Search by player name" 
                value={searchTerm}
                onChange={handleSearchChange}
                className="w-full h-10 px-4 pr-10 border border-gray-300 rounded-md text-sm focus:outline-none focus:border-teal-500"
                autoComplete="off"
                onKeyDown={(e) => {
                  if (e.key === 'Enter') {
                    handleSearch(e);
                  }
                }}
              />
              <button 
                type="button" 
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                onClick={hasSearched && searchTerm ? clearSearch : handleSearch}
              >
                {isSearching ? (
                  <div className="animate-spin h-4 w-4 border-2 border-teal-500 rounded-full border-t-transparent"></div>
                ) : hasSearched && searchTerm ? (
                  <svg className="h-4 w-4 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
                  </svg>
                ) : (
                  <svg className="h-4 w-4 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/>
                  </svg>
                )}
              </button>
            </form>
          </div>
        </div>

        {/* Filter Tabs */}
        <div className="bg-white px-4 py-3 border-b">
          <div className="flex items-center justify-between">
            <div className="flex bg-gray-100 rounded-lg p-1">
              <button 
                className={`px-4 py-2 rounded-md text-xs font-medium transition-all duration-200 ${
                  activeTab === "BEST PLAYERS" 
                    ? "bg-teal-600 text-white shadow-sm" 
                    : "text-gray-600 hover:text-gray-800"
                }`}
                onClick={() => setActiveTab("BEST PLAYERS")}
              >
                BEST PLAYERS
              </button>
              <button 
                className={`px-4 py-2 rounded-md text-xs font-medium transition-all duration-200 ${
                  activeTab === "MOST IMPROVED" 
                    ? "bg-teal-600 text-white shadow-sm" 
                    : "text-gray-600 hover:text-gray-800"
                }`}
                onClick={() => setActiveTab("MOST IMPROVED")}
              >
                MOST IMPROVED
              </button>
            </div>
            <button className="text-teal-600 text-sm font-medium underline">
              FILTER
            </button>
          </div>
        </div>

        {/* Table Header */}
        <div className="bg-gray-50 px-4 py-2.5 border-b border-gray-200">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <span className="text-xs font-medium text-gray-700 uppercase w-12">RANK</span>
              <span className="text-xs font-medium text-gray-700 uppercase ml-8">NAME</span>
            </div>
            <span className="text-xs font-medium text-gray-700 uppercase">NET</span>
          </div>
        </div>

        {/* Players List */}
        <div className="bg-white">
          {(hasSearched && searchTerm ? filteredPlayers : filteredPlayers.slice(0, 20)).map((player) => 
            renderPlayerRow(player)
          )}
        </div>

        {/* Search Results Info */}
        {hasSearched && searchTerm && filteredPlayers.length === 0 && (
          <div className="bg-white p-8 text-center">
            <p className="text-gray-500">No results found for "{searchTerm}"</p>
          </div>
        )}

        {/* Pagination */}
        <div className="bg-white px-4 py-6 border-t">
          <div className="flex items-center justify-between">
            <button className="flex items-center text-gray-500 text-sm">
              <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              GO TO FIRST
            </button>
            
            <div className="text-sm text-gray-600">
              <span className="font-medium">1</span> of <span className="font-medium">80</span>
            </div>
            
            <button className="flex items-center text-teal-700 text-sm font-medium">
              GO TO LAST
              <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
          
          <div className="flex items-center justify-center mt-4 space-x-4">
            <button className="text-gray-400 text-sm">PREV</button>
            <button className="text-teal-700 text-sm font-medium">NEXT</button>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default LeaderPage;