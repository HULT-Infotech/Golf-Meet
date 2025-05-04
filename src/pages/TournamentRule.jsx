import React, { useState, useEffect, useRef } from "react";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";
import tr_greenleft from "../assets/tournament-rule/tr-green-left.svg";
import tr_greenleft_m from "../assets/tournament-rule/green-mobile.svg";
import tr_last from "../assets/tournament-rule/tr-last.svg";
import tr_mobile from "../assets/tournament-rule/tournaments-mobile.webp";
import Footer from "../components/Footer";
import gradientbox from "../assets/greenbox.png";
import land_m1 from "../assets/land-m.svg";
import land_m2 from "../assets/land-fm1.svg";
import tr_bg_mobile from "../assets/check.webp";

function TournamentRule() {
  const [activeSection, setActiveSection] = useState("home");
  const sidebarRef = useRef(null);
  const footerRef = useRef(null);
  const handleWhatsAppClick = () => {
    const phoneNumber = "918884844444";
    window.open(`https://wa.me/${phoneNumber}`, "_blank");
  };
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
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    const sidebar = sidebarRef.current;
    const footer = footerRef.current;

    const handleScroll = () => {
      if (!sidebar || !footer) return;

      const rect = footer.getBoundingClientRect();
      const sidebarHeight = sidebar.offsetHeight;

      if (rect.top < window.innerHeight) {
        const footerTop = rect.top;
        const viewportHeight = window.innerHeight;
        const stopPosition = footerTop - viewportHeight + sidebarHeight;

        if (stopPosition < 0) {
          sidebar.style.transform = `translateY(${stopPosition}px)`;
        } else {
          sidebar.style.transform = "translateY(0)";
        }
      } else {
        sidebar.style.transform = "translateY(0)";
      }

      const sectionElements = sections
        .map((section) => ({
          id: section.id,
          element: document.getElementById(section.id),
        }))
        .filter((item) => item.element);

      let currentSectionId = activeSection;

      for (const section of sectionElements) {
        const rect = section.element.getBoundingClientRect();
        if (rect.top <= 150 && rect.bottom > 150) {
          currentSectionId = section.id;
          break;
        }
      }

      if (currentSectionId !== activeSection) {
        setActiveSection(currentSectionId);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [activeSection, sections]);

  return (
    <>
      <style>
        {`
          .custom-margin {
            margin-top: -2rem;
          }

          @media (min-width: 375px) {
            .custom-margin {
              margin-top: -3rem;
            }
          }
          @media (min-width: 425px) {
            .custom-margin {
              margin-top: -3.8rem;
            }
          }
        `}
      </style>
      <Navbar />
      <div style={{ height: "80px" }} className="md:h-[90px] lg:h-[100px]" />

      {/* Desktop Hero Section - Visible only on medium screens and up */}
<section
        className="bg-gray-100 noise-bg relative hidden md:flex flex-col min-h-[90vh] md:flex-row"
      >
        <div className="flex flex-col w-full justify-between md:justify-around md:flex-row max-w-[1700px] mx-auto">
          {/* Text Section */}
          <div className="relative flex flex-col justify-center items-start p-8 md:pl-10 md:p-0 xl:ml-20 md:mb-40">
            <h1
              className="font-quattrocento -mt-28 font-bold text-[2.85rem] text-[#201E15] sm:text-5xl lg:text-[55px] xl:text-[65px] leading-[100%] tracking-[0.025em] mb-4"
              style={{
                background:
                  "linear-gradient(180deg, rgba(255, 180, 30, 0.9) 0%, #014D4E 23%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                textFillColor: "transparent",
                textShadow: "0px 0px 1px rgba(0, 0, 0, 0.15)",
                filter: "drop-shadow(0px 0.5px 0.5px rgba(0, 0, 0, 0.2))",
              }}
            >
              RULES & <br /> REGULATIONS
            </h1>
            <div className="text-sm w-[95%]">
            Play with confidence. Review the rules and guidelines designed to elevate your Golf Meet journey. 
            </div>
            <p className="font-semibold text-sm mt-4">
Need support? We’re just a message away.
            </p>
          </div>

          {/* Right Image Section */}
          <div className="flex items-center justify-center px-5 md:px-0 md:items-end mt-8">
            <img
              src={tr_bg_mobile}
              alt="Golfers Illustration"
              className="xl:w-[60%] lg:w-[75%] md:w-[85%] object-contain pointer-events-none"
            />
          </div>
        </div>
      </section>


      {/* Main container for mobile */}
      <div className="md:h-[108vh] flex flex-col relative md:hidden">
        {/* Hero section for mobile */}
        <section className="bg-gray-100 noise-bg-n relative min-h-[90vh] flex flex-col overflow-hidden">
          <div className="flex flex-col w-full flex-1 md:flex-row max-w-[1700px] mx-auto relative">
            {/* Text Section */}
            <div className="relative flex flex-col justify-center items-start p-8 md:pl-10 md:p-0 xl:ml-20 md:mb-40">
              <h1 
                className="font-quattrocento font-bold xsm:text-[2.2rem] text-[2.7rem] text-[#201E15] sm:text-5xl lg:text-[80px] pt-8 leading-[100%] tracking-[0.025em] mb-4"
                style={{
                  background: 'linear-gradient(180deg, rgba(255, 180, 30, 0.9) 0%, #014D4E 64%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  textFillColor: 'transparent',
                  textShadow: '0px 0px 1px rgba(0, 0, 0, 0.15)',
                  filter: 'drop-shadow(0px 0.5px 0.5px rgba(0, 0, 0, 0.2))',
                }}
              >
                RULES & <br /> REGULATIONS
              </h1>
              {/* Mobile-only text added here */}
              <div className="xsm:text-xs text-sm md:hidden mb-4 xsm:w-[85%] w-[95%]">
                Play with confidence. Review the rules and guidelines designed to elevate your Golf Meet journey.
              </div>
              <p className="font-semibold xsm:text-xs text-sm">Need support? We’re just a message away.</p>
            </div>
          </div>
          
          {/* Mobile image container - positioned at bottom */}
          <div className="relative bottom-0 pb-4 left-0 right-0 w-full md:hidden mt-auto">
            <img
              src={tr_bg_mobile}
              alt="Golfers Illustration Mobile"
              className="w-[90%] mx-auto object-contain pointer-events-none"
            />
          </div>
        </section>

        {/* Player Code of Conduct section */}
        <section className="flex flex-col items-center justify-center xsm:pt-12 pt-16 bulge-top -mt-8 md:mt-12 relative noise-bg-new sm:mb-0">
          <div className="flex justify-between items-center font-medium xsm:text-lg text-white bg-[#FFFFFF0D] w-[85%] p-7 rounded-md">
            <div className="flex flex-col">
              <h2 className="lg:text-5xl md:4xl text-[1.8rem] uppercase font-quattrocento">
                Player Code of Conduct
              </h2>
              <Link to="/code-of-conduct"><p className="lg:text-lg md:3xl xsm:text-xs xsm:pt-2 pt-2  underline underline-offset-4">
                Please refer to the
                <strong> GolfMeet Tournament Rules </strong> here
              </p></Link>
            </div>
            <div>
              <svg
                width="22"
                height="42"
                viewBox="0 0 25 47"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1 1.5L23 23.5L1 45.5"
                  stroke="#FFF"
                  strokeWidth="2"
                />
              </svg>
            </div>
          </div>
        </section>

        {/* Mobile Sections Navigation - Only visible on mobile */}
        <div
          className="md:hidden w-full pt-9 xsm:pt-5 xsm:pb-12 pb-16 relative noise-bg-new bulge-bottomm "
        >
          <h3 className="text-white text-xl xsm:text-lg  font-semibold uppercase text-center mb-4">
            SECTIONS
          </h3>

          <div className="overflow-x-auto">
            <div className="flex w-max px-4">
              {sections.map((section) => (
                <div
                  key={section.id}
                  className={`flex-shrink-0 font-normal xsm:text-sm cursor-pointer px-4 py-2 text-white text-center whitespace-nowrap ${
                    activeSection === section.id ? "font-bold" : "opacity-80"
                  }`}
                  onClick={() => handleSectionClick(section.id)}
                >
                  <span
                    className={`${
                      activeSection === section.id
                        ? "relative after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-full after:h-[2px] after:bg-white"
                        : ""
                    }`}
                  >
                    {section.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Main content section */}
      <section className="flex relative md:mt-12 justify-center w-full mx-auto max-w-screen-xl px-4 sm:px-6 md:px-8">
        {/* Sidebar */}
        <div
          ref={sidebarRef}
          className="hidden md:block w-80 text-white p-6 rounded-md sticky top-28 self-start mt-10 mr-20 transition-transform"
          style={{
            background: `url(${gradientbox})`,
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

        {/* Content */}
        <div className="flex flex-col gap-4 mt-10 w-full">
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
                Points are awarded based on your score relative to par on each
                hole.
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
                Players should familiarize themselves with these rules before
                playing.
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
                All players must mark their golf balls clearly for
                identification.
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
                If a hole is closed or under maintenance, follow local course
                instructions.
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
                Violations of the GolfMeet code of conduct may result in
                disqualification.
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

      <div ref={footerRef}>
        <img src={tr_last} alt="tr_last" className="md:block hidden w-full mb-8 " />
        
        <div className="relative">
          {/* Subtle bottom shadow that fades upward */}
          <div className="h-6 w-full bg-gradient-to-t from-gray-400 via-gray-100 to-transparent opacity-40"></div>
          {/* Footer component */}
          <Footer className=""/>
        </div>
      </div>

      <style jsx>{`
        @media (min-width: 2556px) {
          h1 {
            font-size: 180px;
          }
          h2 {
            font-size: 58px;
          }
          /* Right image (golfers illustration) */
          img[src="${tr_bg_mobile}"] {
            max-width: 1200px;
            margin-right: 6rem;
          }

          img[src="${tr_greenleft}"].hidden.md\\:block {
            width: 700px;
          }

          .player-code-of-conduct {
            margin-left: 4rem;
            padding: 3rem;
            max-width: 1000px;
          }
          .player-code-of-conduct h2 {
            font-size: 72px; /* Increased from 58px to 72px */
          }
          .player-code-of-conduct p {
            font-size: 30px;
            margin-top: 0.5rem;
          }
          .player-code-of-conduct svg {
            width: 40px;
            height: 80px;
          }
        }

        @media (max-width: 767px) {
          section {
            overflow: hidden;
          }
          .flex-col.h-full {
            position: relative;
            gap: 0;
          }
          img[src="${tr_mobile}"] {
            max-height: 60vh;
            object-fit: contain;
          }
          /* Updated mobile green element styling */
          img[src="${tr_greenleft_m}"] {
            width: 100vw;
            position: absolute;
            bottom: 0;
            left: 0;
            right: 0;
            z-index: 0;
          }
          /* Mobile sections navigation styling */
          .overflow-x-auto {
            -webkit-overflow-scrolling: touch;
            scrollbar-width: none; /* Firefox */
          }
          .overflow-x-auto::-webkit-scrollbar {
            display: none; /* Chrome, Safari, Edge */
          }
          .w-max {
            gap: 0.5rem;
          }
        }
      `}</style>
    </>
  );
}

export default TournamentRule;