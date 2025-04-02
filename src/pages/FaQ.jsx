import React, { useState } from "react";
import Navbar from "../components/Navbar";
import faq_bg from "../assets/faq/right-bg.svg";
import faq_mobile_hero from "../assets/faq-m.svg";
import faq_greenleft from "../assets/faq/faq-green-left.svg";
import faq_greenleft_mobile from "../assets/faq/faq-green-left-mobile.svg";
import faq_gm from "../assets/f-gm.png";
import Footer from "../components/Footer";

const FaqItem = ({ question, answer, isOpen, toggleOpen }) => {
  return (
    <div
      className={`mb-4 border rounded-sm transition-all duration-300 ${
        isOpen ? "border-[rgb(1,77,78)] shadow-md" : "border-gray-200"
      }`}
    >
      <div
        className="flex justify-between items-center p-4 cursor-pointer bg-white rounded-lg"
        onClick={toggleOpen}
      >
        <span className="text-sm md:text-base pr-2 md:pr-0">{question}</span>
        <span className="text-xl flex-shrink-0">{isOpen ? "−" : "+"}</span>
      </div>
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out bg-white ${
          isOpen
            ? "max-h-[500px] opacity-100 p-4 border-t border-gray-200 rounded-b-lg"
            : "max-h-0 opacity-0 p-0"
        }`}
      >
        <p className="text-sm md:text-base text-gray-600">{answer}</p>
      </div>
    </div>
  );
};

function FaQ() {
  const [openItems, setOpenItems] = useState({
    "email-alternative": true,
  });

  const [activeCategory, setActiveCategory] = useState("registration");

  const toggleItem = (id) => {
    setOpenItems((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const categoryData = [
    {
      id: "registration",
      title: "Registrations",
      items: [
        {
          id: "one-time-password",
          question:
            "I am not receiving the one-time password via SMS. What should I do?",
          answer:
            "You must use a mobile number to register. The GolfMeet tournament requires you to use the GolfMeet mobile app. However, please be assured that your mobile number will not be shared with any third party under any circumstances.",
        },
        {
          id: "email-alternative",
          question:
            "Can I use an email address instead of a mobile number to use the GolfMeet app?",
          answer:
            "You must use a mobile number to register. The GolfMeet турни requires you to use the GolfMeet mobile app. However, please be assured that your mobile number will not be shared with any third party under any circumstances.",
        },
        {
          id: "different-country",
          question:
            "Can I register from one country even if my mobile is from a different country?",
          answer:
            "You must use a mobile number to register. The GolfMeet tournament requires you to use the GolfMeet mobile app. However, please be assured that your mobile number will not be shared with any third party under any circumstances.",
        },
      ],
    },
    {
      id: "tournament-fees",
      title: "Tournament fees",
      items: [
        {
          id: "discontinue-refund",
          question:
            "I would like to discontinue my participation. Can I get a refund?",
          answer:
            "You must use a mobile number to register. The GolfMeet tournament requires you to use the GolfMeet mobile app. However, please be assured that your mobile number will not be shared with any third party under any circumstances.",
        },
        {
          id: "banned-refund",
          question:
            "I was banned for violating the code of conduct. Can I get a refund?",
          answer:
            "You must use a mobile number to register. The GolfMeet tournament requires you to use the GolfMeet mobile app. However, please be assured that your mobile number will not be shared with any third party under any circumstances.",
        },
      ],
    },
    {
      id: "scheduling",
      title: "Scheduling",
      items: [
        {
          id: "change-date-scheduling",
          question:
            "Can I change my preferred dates after I have been matched with a group?",
          answer:
            "You must use a mobile number to register. The GolfMeet tournament requires you to use the GolfMeet mobile app. However, please be assured that your mobile number will not be shared with any third party under any circumstances.",
        },
        {
          id: "no-show-scheduling",
          question:
            "What happens if I do not show up after I had accepted the group's schedule?",
          answer:
            "You must use a mobile number to register. The GolfMeet tournament requires you to use the GolfMeet mobile app. However, please be assured that your mobile number will not be shared with any third party under any circumstances.",
        },
      ],
    },
    {
      id: "scoring",
      title: "Scoring",
      items: [
        {
          id: "change-date-scoring",
          question:
            "Can I change my preferred dates after I have been matched with a group?",
          answer:
            "You must use a mobile number to register. The GolfMeet tournament requires you to use the GolfMeet mobile app. However, please be assured that your mobile number will not be shared with any third party under any circumstances.",
        },
        {
          id: "no-show-scoring",
          question:
            "What happens if I do not show up after I had accepted the group's schedule?",
          answer:
            "You must use a mobile number to register. The GolfMeet tournament requires you to use the GolfMeet mobile app. However, please be assured that your mobile number will not be shared with any third party under any circumstances.",
        },
      ],
    },
    {
      id: "leaderboard",
      title: "Leaderboard",
      items: [
        {
          id: "change-date-leaderboard",
          question:
            "Can I change my preferred dates after I have been matched with a group?",
          answer:
            "You must use a mobile number to register. The GolfMeet tournament requires you to use the GolfMeet mobile app. However, please be assured that your mobile number will not be shared with any third party under any circumstances.",
        },
      ],
    },
    {
      id: "account-management",
      title: "Account management",
      items: [
        {
          id: "change-account-details",
          question: "How do I change my account details?",
          answer:
            "You must use a mobile number to register. The GolfMeet tournament requires you to use the GolfMeet mobile app. However, please be assured that your mobile number will not be shared with any third party under any circumstances.",
        },
      ],
    },
  ];

  const handleCategoryClick = (categoryId) => {
    setActiveCategory(categoryId);
    // Scroll to that category section
    document.getElementById(categoryId)?.scrollIntoView({ behavior: "smooth" });
  };

  const categoryGradientStyle = {
    background:
      "linear-gradient(150deg, rgb(48, 92, 93) 0%, rgb(0, 54, 55) 50%, rgb(0, 53, 54) 100%)",
  };

  return (
    <>
      <Navbar />
      <section 
        className="bg-gray-100 noise-bg relative flex flex-col h-auto md:min-h-[85vh] md:flex-row"
      >
        <div className="flex flex-col w-full justify-between md:justify-around md:flex-row max-w-[1700px] mx-auto">
          {/* Text Section */}
          <div className="relative flex flex-col justify-center items-start p-8 md:pl-10 md:p-0 xl:ml-20 md:mb-40">
            <h1 className="font-quattrocento font-bold text-[2.3rem] text-[#201E15] sm:text-5xl lg:text-[80px] leading-[100%] tracking-[0.025em] mb-4">
              FREQUENTLY <br /> ASKED <br /> QUESTIONS
            </h1>
            {/* Mobile-only text added here */}
            <div className="p-3 text-sm md:hidden mb-4 w-full">
              After you have paid the tournament fees, log into the GolfMeet
              mobile app.
            </div>
          </div>

          {/* Right Image Section */}
          <div className="flex items-center justify-center px-5 md:px-0 md:items-end sm:mt-0 -mt-8">
            {/* Desktop Image */}
            <img
              src={faq_bg}
              alt="Golfers Illustration"
              className="w-[80%] object-contain pointer-events-none hidden md:block"
            />
            
            {/* Mobile Image - Centered and reduced gap */}
            <img
              src={faq_mobile_hero}
              alt="Golfers Mobile Illustration"
              className="w-[75%] max-w-[400px] object-contain pointer-events-none md:hidden mx-auto"
            />
          </div>
        </div>
        {/* Decorative Green Element */}
        <img
          src={faq_greenleft}
          alt="Green left element"
          className="hidden md:block absolute md:-bottom-12 left-0 w-[250px] md:w-[400px] lg:w-[550px] xl:w-[750px] xl:-bottom-[90px] lg:-bottom-16 object-contain pointer-events-none"
        />
        <img
          src={faq_greenleft_mobile}
          alt="Green left element"
          className="absolute hidden -bottom-36 sm:-bottom-20 left-0 w-full"
        />
      </section>

      {/* New Full-width Mobile Image with higher z-index */}
      <div className="w-full md:hidden -mt-24 mb-4 relative z-10">
        <img
          src={faq_gm}
          alt="Full-width Golfers Illustration"
          className="w-full object-cover"
        />
      </div>

      <section className="py-8 md:py-16 px-6 md:px-8 bg-white mt-8 md:mt-24">
  <div className="flex flex-col md:flex-row max-w-[1300px] mx-auto gap-6 md:gap-12">
    {/* Left Sidebar - Using imported gradientbox image */}
    <div
      className="hidden md:block w-64 text-white p-4 md:p-6 rounded-md sticky top-32 self-start"
    >
      <h3 className="font-quattrocentoSans font-bold text-[32px] leading-[100%] tracking-[0em] uppercase mb-2 relative">
        CATEGORIES
      </h3>
      <ul className="text-sm mt-6">
        {categoryData.map((category) => (
          <li
            key={category.id}
            className={`py-3 cursor-pointer transition-colors duration-200 relative ${
              activeCategory === category.id ? "font-bold" : ""
            }`}
            onClick={() => handleCategoryClick(category.id)}
          >
            <span className="relative inline-block text-[#FFFFFFCC] after:content-[''] after:block after:w-full after:h-[1.4px] after:bg-white after:mt-1">
              {category.title}
            </span>
          </li>
        ))}
      </ul>
    </div>
          {/* Main Content */}
          <div className="flex-1">
            {categoryData.map((category) => (
              <div
                id={category.id}
                key={category.id}
                className="mb-12 scroll-mt-20"
              >
                <h2 className="text-[#014D4E] text-2xl md:text-4xl font-bold mb-6 font-quattrocento uppercase">
                  {category.title.toUpperCase()}
                </h2>
                {category.items.map((item) => (
                  <FaqItem
                    key={item.id}
                    question={item.question}
                    answer={item.answer}
                    isOpen={openItems[item.id] || false}
                    toggleOpen={() => toggleItem(item.id)}
                  />
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default FaQ;