import React, { useState, useEffect } from "react";
import HomePage from "./HomePage";

const CACHE_KEY = "homePageCache";
const CACHE_TIME = 60 * 60 * 1000; // 1 hour

function CachedHomePage() {
  const [cachedData, setCachedData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadCachedData = () => {
      const storedData = localStorage.getItem(CACHE_KEY);
      if (storedData) {
        const { data, timestamp } = JSON.parse(storedData);
        if (Date.now() - timestamp < CACHE_TIME) {
          console.log("Loaded HomePage data from cache");
          setCachedData(data);
          setIsLoading(false);
          return true;
        } else {
          console.log("Cached HomePage data expired");
          localStorage.removeItem(CACHE_KEY);
        }
      }
      return false;
    };

    const fetchData = async () => {
      setIsLoading(true);
      setError(null);
      try {
        // Simulate fetching data needed for HomePage components
        await new Promise((resolve) => setTimeout(resolve, 1500));
        const data = {
          landingData: {
            landingTitle: "GOLF MEET INDIA 2025",
            landingSubtitle: "The year-long amateur golf tournament",
            landingDates: "JANUARY 2025 - DECEMBER 2025",
            // Add other data for LandingSection
          },
          navbarData: {
            // If your Navbar needs dynamic data, add it here
          },
          howItWorksData: {
            howItWorksTitle: "HOW IT WORKS",
            steps: [
              {
                id: 1,
                title: "Register",
                subtitle: "Register to Play",
                description: "Sign up for the fairest social golf tournament easily via Whatsapp",
              },
              {
                id: 2,
                title: "Availability",
                subtitle: "Choose Course & Dates",
                description: "Inform GolfMeet team your preferred golf courses & available dates.",
              },
              {
                id: 3,
                title: "Play",
                subtitle: "Play and Submit Scores",
                description: "Play with the group selected by GolfMeet and submit your scores.",
              },
            ],
            socialTournamentTitle: "THE SOCIAL AMATEUR TOURNAMENT WITH A DIFFERENCE",
            socialTournamentDescription: "Unlike typical golf tournaments where the result depends on your form on the tournament day, GolfMeet gives you and everyone else a fair chance all year long.",
            playAndLeaderboardText: "Play any number of rounds within the year. Your best 12 rounds will get added to the leaderboard.*",
            playAndLeaderboardNote: "*You can play unlimited rounds at any eligible golf course around the world. But at least 8 of your qualifying rounds must be played at golf courses within your home country.",
          },
          videoSectionData: {
            meetPlayCompeteText: ["MEET", "PLAY", "COMPETE"],
            description: "Meet new golfers in your area. Make new friends. Compete with amateur golfers nationwide.",
          },
          fairPlaySectionData: {
            introTitle: "Play Fair. No More Handicap Inflation!",
            handicapTitle: "The GolfMeet Handicap",
            handicapDescription: "GolfMeet uses machine learning to compute the accurate handicap of each player, based on their scores on each hole of every course they have played.",
            consistencyText: "With the GolfMeet handicap, all that matters is your consistency.",
            notAgeOrGenderText: "Not your age or gender.",
            tournamentFee: "1000",
            perRoundText: "PER ROUND",
          },
          footerData: {
            copyrightText: "Copyright © 2024 Golfmeet LLP. All Rights Reserved.",
            // Add any dynamic links or content for the footer if needed
          },
          // Add data for other sections if they become dynamic
        };
        setCachedData(data);
        localStorage.setItem(CACHE_KEY, JSON.stringify({ data, timestamp: Date.now() }));
        console.log("Fetched and cached HomePage data");
      } catch (err) {
        setError(err.message);
        console.error("Error fetching HomePage data:", err);
      } finally {
        setIsLoading(false);
      }
    };

    if (!loadCachedData()) {
      fetchData();
    }
  }, []);

  if (isLoading) {
    return (
      <div className="fixed top-0 left-0 w-full h-full bg-white flex justify-center items-center z-50">
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-emerald-500 border-solid border-emerald-300"></div>
      </div>
    );
  }

  if (error) {
    return <div className="text-red-500">Error loading data: {error}</div>;
  }

  if (!cachedData) {
    return null;
  }

  return <HomePage cachedData={cachedData} />;
}

export default CachedHomePage;