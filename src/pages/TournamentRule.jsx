import React, { useState, useEffect, useRef } from "react";
import Navbar from "../components/Navbar";
import tr_bg from "../assets/tournament-rule/right-bg.svg";
import tr_greenleft from "../assets/tournament-rule/tr-green-left.svg";
import tr_last from "../assets/tournament-rule/tr-last.svg";
import Footer from "../components/Footer";

function TournamentRule() {
  const [activeSection, setActiveSection] = useState("home");
  const sidebarRef = useRef(null);
  const footerRef = useRef(null);
  
  const sections = [
    { id: "home", label: "Home country" },
    { id: "leaderboard", label: "Leaderboard criteria" },
    { id: "format", label: "Format of play" },
    { id: "local", label: "Local rules" },
    { id: "teebox", label: "Tee box" },
    { id: "marking", label: "Marking the ball" },
    { id: "scorecard", label: "Scorecard" },
    { id: "hole", label: "Hole not in play" },
    { id: "penalties", label: "Penalties" },
    { id: "mulligans", label: "Mulligans" },
  ];

  const handleSectionClick = (sectionId) => {
    setActiveSection(sectionId);
    // Scroll to that section
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
  };

  // Function to handle scrolling behavior - both for sticky behavior and section highlighting
  useEffect(() => {
    const sidebar = sidebarRef.current;
    const footer = footerRef.current;
    
    const handleScroll = () => {
      if (!sidebar || !footer) return;
      
      // Check if footer is visible in viewport for stopping the sidebar
      const rect = footer.getBoundingClientRect();
      const sidebarHeight = sidebar.offsetHeight;
      
      if (rect.top < window.innerHeight) {
        const footerTop = rect.top;
        const viewportHeight = window.innerHeight;
        const stopPosition = footerTop - viewportHeight + sidebarHeight;
        
        if (stopPosition < 0) {
          sidebar.style.transform = `translateY(${stopPosition}px)`;
        } else {
          sidebar.style.transform = 'translateY(0)';
        }
      } else {
        sidebar.style.transform = 'translateY(0)';
      }
      
      // Update active section based on scroll position
      // Get all section elements
      const sectionElements = sections.map(section => ({
        id: section.id,
        element: document.getElementById(section.id)
      })).filter(item => item.element);
      
      // Find which section is currently most visible in the viewport
      let currentSectionId = activeSection;
      
      for (const section of sectionElements) {
        const rect = section.element.getBoundingClientRect();
        // If section is in viewport and near the top
        if (rect.top <= 150 && rect.bottom > 150) {
          currentSectionId = section.id;
          break;
        }
      }
      
      // Update active section if changed
      if (currentSectionId !== activeSection) {
        setActiveSection(currentSectionId);
      }
    };

    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);
    
    // Initial check
    handleScroll();
    
    // Cleanup
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [activeSection, sections]);

  return (
    <>
      <Navbar />
      {/* Main container with 100vh height on larger screens */}
      <div className="md:h-[100vh] flex flex-col relative">
        {/* Hero section - maintaining original structure but reduced height */}
        <section className="bg-gray-100 noise-bg relative flex flex-col md:h-[65vh] md:flex-row">
          <div className="flex flex-col w-full justify-between md:justify-around gap-24 md:flex-row max-w-[1700px] mx-auto">
            {/* Text Section - positioned higher */}
            <div className="relative flex flex-col justify-center items-start p-8 md:pl-10 md:p-0 xl:ml-20 md:-mt-8">
              <h1 className="font-quattrocento font-bold text-4xl sm:text-5xl lg:text-[76px] leading-[100%] tracking-[0.025em] text-[#201E15] mb-4">
                TOURNAMENT <br /> RULES
              </h1>
            </div>

            {/* Right Image Section - Adjusted positioning */}
            <img
              src={tr_bg}
              alt="Golfers Illustration"
              className="w-full h-auto md:w-full md:h-auto pointer-events-none relative md:-bottom-[25px] md:right-0 md:mr-12"
            />
          </div>
          {/* Further reduced size of decorative elements while maintaining positioning */}
          <img
            src={tr_greenleft}
            alt="Green left element"
            className="hidden md:block absolute md:-bottom-4 left-0 w-[160px] md:w-[240px] lg:w-[360px] xl:w-[460px] lg:-bottom-8 object-contain pointer-events-none"
          />
          <img
            src={tr_greenleft}
            alt="Green left element"
            className="absolute md:hidden -bottom-8 sm:-bottom-12 left-0 w-[210px]"
          />
        </section>

        {/* Player Code of Conduct section - reduced size + added margin for bigger screens */}
        <div className="flex justify-between items-center text-[#014D4E] bg-[#014D4E0D] w-full max-w-7xl p-5 mx-auto mt-16 md:mt-20 md:mx-20 lg:mx-auto rounded-md">
          <div className="flex flex-col">
            <h2 className="text-3xl font-bold uppercase font-quattrocento">
              Player Code of Conduct
            </h2>
            <p className="text-base underline underline-offset-4">
              Please refer to the
              <strong> GolfMeet Player Code of Conduct </strong> here
            </p>
          </div>
          <div>
            <svg
              width="20"
              height="44"
              viewBox="0 0 25 47"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M1 1.5L23 23.5L1 45.5" stroke="#014D4E" strokeWidth="2" />
            </svg>
          </div>
        </div>
      </div>

      <section className="flex relative justify-center w-full mx-auto max-w-screen-xl">
        <div
          ref={sidebarRef}
          className="hidden md:block w-80 text-white p-6 rounded-md sticky top-28 self-start mt-10 mr-20 transition-transform"
          style={{
            background:
              "linear-gradient(150deg, rgb(48, 92, 93) 0%, rgb(0, 54, 55) 50%, rgb(0, 53, 54) 100%)",
          }}
        >
          <h3 className="font-bold text-[32px] leading-[100%] tracking-[0em] uppercase mb-6">
            SECTIONS
          </h3>
          <ul className="text-sm mt-6">
            {sections.map((section) => (
              <li
                key={section.id}
                className={`py-3 cursor-pointer transition-colors duration-200 relative ${
                  activeSection === section.id ? "font-bold" : ""
                }`}
                onClick={() => handleSectionClick(section.id)}
              >
                <span className="relative inline-block text-[#FFFFFFCC] after:content-[''] after:block after:w-full after:h-[1.4px] after:bg-white after:mt-1">
                  {section.label}
                </span>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-col gap-4 mt-10">
          <div className="mb-6 scroll-mt-32" id="home">
            <h2 className="text-teal-800 font-semibold font-quattrocento text-3xl mb-8">
              HOME COUNTRY
            </h2>
            <ul className="list-disc pl-6">
              <li className="mb-2">
                Home country is the country in which you paid the GolfMeet
                tournament fees.
              </li>
            </ul>
          </div>
          
          <div className="mb-6 scroll-mt-32" id="leaderboard">
            <h2 className="text-teal-800 font-semibold font-quattrocento text-3xl mb-8">
              LEADERBOARD CRITERIA
            </h2>
            <ul className="list-disc pl-6">
              <li className="mb-2">
                For your scores to be considered on the leaderboard, you must
                play at least 12 rounds of golf scheduled through the GolfMeet
                app.
              </li>
              <li className="mb-2">
                If you play more than 12 rounds scheduled through the GolfMeet
                app, your best 12 rounds will be considered for the leaderboard.
              </li>
              <li className="mb-2">
                You may play in any country, at a golf course listed on the
                GolfMeet app. However, for your home country, rounds are only
                considered when played in that country.
              </li>
            </ul>
          </div>
          
          <div className="mb-6 scroll-mt-32" id="format">
            <h2 className="text-teal-800 font-semibold font-quattrocento text-3xl mb-8">
              FORMAT OF PLAY
            </h2>
            <ul className="list-disc pl-6">
              <li className="mb-2">
                The tournament follows Stableford scoring format.
              </li>
              <li className="mb-2">
                Points are awarded based on your score relative to par on each hole.
              </li>
            </ul>
          </div>
          
          <div className="mb-6 scroll-mt-32" id="local">
            <h2 className="text-teal-800 font-semibold font-quattrocento text-3xl mb-8">
              LOCAL RULES
            </h2>
            <ul className="list-disc pl-6">
              <li className="mb-2">
                Each golf course may have its own specific local rules.
              </li>
              <li className="mb-2">
                Players should familiarize themselves with these rules before playing.
              </li>
            </ul>
          </div>
          
          <div className="mb-6 scroll-mt-32" id="teebox">
            <h2 className="text-teal-800 font-semibold font-quattrocento text-3xl mb-8">
              TEE BOX
            </h2>
            <ul className="list-disc pl-6">
              <li className="mb-2">
                Men must play from the white tees or equivalent.
              </li>
              <li className="mb-2">
                Women must play from the red tees or equivalent.
              </li>
            </ul>
          </div>
          
          <div className="mb-6 scroll-mt-32" id="marking">
            <h2 className="text-teal-800 font-semibold font-quattrocento text-3xl mb-8">
              MARKING THE BALL
            </h2>
            <ul className="list-disc pl-6">
              <li className="mb-2">
                All players must mark their golf balls clearly for identification.
              </li>
            </ul>
          </div>
          
          <div className="mb-6 scroll-mt-32" id="scorecard">
            <h2 className="text-teal-800 font-semibold font-quattrocento text-3xl mb-8">
              SCORECARD
            </h2>
            <ul className="list-disc pl-6">
              <li className="mb-2">
                Digital scorecards must be submitted through the GolfMeet app.
              </li>
              <li className="mb-2">
                All players in the group must verify scores before submission.
              </li>
            </ul>
          </div>
          
          <div className="mb-6 scroll-mt-32" id="hole">
            <h2 className="text-teal-800 font-semibold font-quattrocento text-3xl mb-8">
              HOLE NOT IN PLAY
            </h2>
            <ul className="list-disc pl-6">
              <li className="mb-2">
                If a hole is closed or under maintenance, follow local course instructions.
              </li>
            </ul>
          </div>
          
          <div className="mb-6 scroll-mt-32" id="penalties">
            <h2 className="text-teal-800 font-semibold font-quattrocento text-3xl mb-8">
              PENALTIES
            </h2>
            <ul className="list-disc pl-6">
              <li className="mb-2">
                Standard golf penalties apply according to official rules.
              </li>
              <li className="mb-2">
                Violations of the GolfMeet code of conduct may result in disqualification.
              </li>
            </ul>
          </div>
          
          <div className="mb-20 scroll-mt-32" id="mulligans">
            <h2 className="text-teal-800 font-semibold font-quattrocento text-3xl mb-8">
              MULLIGANS
            </h2>
            <ul className="list-disc pl-6">
              <li className="mb-2">
                No mulligans are allowed in tournament play.
              </li>
              <li className="mb-2">
                All strokes must be counted according to official golf rules.
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Fixed Mobile Navigation Button */}
      <div className="fixed bottom-4 right-4 md:hidden">
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="bg-[#014D4E] text-white p-3 rounded-full shadow-lg"
        >
          <svg
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 11l7-7 7 7M5 19l7-7 7 7"
            ></path>
          </svg>
        </button>
      </div>
      
      <div ref={footerRef}>
        <img src={tr_last} alt="tr_last" className="w-full" />
        <Footer />
      </div>
    </>
  );
}

export default TournamentRule;