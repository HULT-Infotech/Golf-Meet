import React, { useState } from "react";
import Navbar from "../components/Navbar";
import faq_bg from "../assets/faq/right-bg.svg";
import faq_greenleft from "../assets/faq/faq-green-left.svg";
import faq_greenleft_mobile from "../assets/faq/faq-green-left-mobile.svg";
import Footer from "../components/Footer";

const FaqItem = ({ question, answer, isOpen, toggleOpen }) => {
  return (
    <div className="border border-gray-300 rounded mb-4">
      <div 
        className="flex justify-between items-center p-4 cursor-pointer"
        onClick={toggleOpen}
      >
        <span className="text-sm">{question}</span>
        <span className="text-xl">{isOpen ? '−' : '+'}</span>
      </div>
      {isOpen && (
        <div className="p-4 text-sm text-gray-600 border-t border-gray-300">
          {answer}
        </div>
      )}
    </div>
  );
};

function FaQ() {
  const [openItems, setOpenItems] = useState({
    'email-alternative': true,
  });
  
  const [activeCategory, setActiveCategory] = useState('registration');

  const toggleItem = (id) => {
    setOpenItems(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const categoryData = [
    {
      id: 'registration',
      title: 'Registrations',
      items: [
        {
          id: 'one-time-password',
          question: 'I am not receiving the one-time password via SMS. What should I do?',
          answer: ''
        },
        {
          id: 'email-alternative',
          question: 'Can I use an email address instead of a mobile number to use the GolfMeet app?',
          answer: 'You must use a mobile number to register. The GolfMeet tournament requires you to use the GolfMeet mobile app. However, please be assured that your mobile number will not be shared with any third party under any circumstances.'
        },
        {
          id: 'different-country',
          question: 'Can I register from one country even if my mobile is from a different country?',
          answer: ''
        }
      ]
    },
    {
      id: 'tournament-fees',
      title: 'Tournament fees',
      items: [
        {
          id: 'discontinue-refund',
          question: 'I would like to discontinue my participation. Can I get a refund?',
          answer: ''
        },
        {
          id: 'banned-refund',
          question: 'I was banned for violating the code of conduct. Can I get a refund?',
          answer: ''
        }
      ]
    },
    {
      id: 'scheduling',
      title: 'Scheduling',
      items: [
        {
          id: 'change-date-scheduling',
          question: 'Can I change my preferred dates after I have been matched with a group?',
          answer: ''
        },
        {
          id: 'no-show-scheduling',
          question: "What happens if I do not show up after I had accepted the group's schedule?",
          answer: ''
        }
      ]
    },
    {
      id: 'scoring',
      title: 'Scoring',
      items: [
        {
          id: 'change-date-scoring',
          question: 'Can I change my preferred dates after I have been matched with a group?',
          answer: ''
        },
        {
          id: 'no-show-scoring',
          question: "What happens if I do not show up after I had accepted the group's schedule?",
          answer: ''
        }
      ]
    },
    {
      id: 'leaderboard',
      title: 'Leaderboard',
      items: [
        {
          id: 'change-date-leaderboard',
          question: 'Can I change my preferred dates after I have been matched with a group?',
          answer: ''
        }
      ]
    },
    {
      id: 'account-management',
      title: 'Account management',
      items: [
        {
          id: 'change-account-details',
          question: 'How do I change my account details?',
          answer: ''
        }
      ]
    }
  ];

  const handleCategoryClick = (categoryId) => {
    setActiveCategory(categoryId);
    // Optionally scroll to that category section
    document.getElementById(categoryId)?.scrollIntoView({ behavior: 'smooth' });
  };

  // Custom gradient style
  const categoryGradientStyle = {
    background: "linear-gradient(150deg, rgb(48, 92, 93) 0%, rgb(0, 54, 55) 50%, rgb(0, 53, 54) 100%)"


  };

  return (
    <>
      <Navbar />
      <section className="bg-gray-100 noise-bg relative flex flex-col md:min-h-[92vh] md:flex-row">
        <div className="flex flex-col w-full justify-between md:justify-around gap-24 md:flex-row max-w-[1700px] mx-auto">
          {/* Text Section */}
          <div className="relative flex flex-col justify-center items-start p-8 md:pl-10 md:p-0 xl:ml-20">
            <h1 className="font-quattrocento text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4">
              FREQUENTLY <br /> ASKED <br /> QUESTIONS
            </h1>
          </div>
          
          {/* Right Image Section */}
          <div className="flex items-end px-5 md:px-0">
            <img
              src={faq_bg}
              alt="Golfers Illustration"
              className="w-full object-contain pointer-events-none"
            />
          </div>
        </div>
        {/* Decorative Green Element */}
        <img
          src={faq_greenleft}
          alt="Green left element"
          className="hidden md:block absolute md:-bottom-12 left-0 w-[270px] md:w-[400px] lg:w-[550px] xl:w-[750px] xl:-bottom-24 lg:-bottom-16 object-contain pointer-events-none"
        />
        <img
          src={faq_greenleft_mobile}
          alt="Green left element"
          className="absolute md:hidden -bottom-10 sm:-bottom-20 left-0 w-[350px]"
        />
      </section>

      {/* FAQ Content Section */}
      <section className="py-16 px-4 bg-white">
        <div className="flex max-w-[1200px] mx-auto gap-6">
          {/* Left Sidebar - With the specified complex gradient */}
          <div 
            className="hidden md:block w-48 text-white p-4 rounded-lg self-start"
            style={categoryGradientStyle}
          >
            <h3 className="font-bold text-base mb-4 uppercase relative">
              CATEGORIES
              <span className="absolute left-0 bottom-[-8px] w-12 h-[2px] bg-white"></span>
            </h3>
            <ul className="text-sm mt-6">
              {categoryData.map(category => (
                <li 
                  key={category.id}
                  className={`py-2 px-2 cursor-pointer border-b border-[#02686A]/30 last:border-b-0 hover:text-[#8ED8B4] transition-colors duration-200 ${activeCategory === category.id ? 'text-[#8ED8B4]' : ''}`}
                  onClick={() => handleCategoryClick(category.id)}
                >
                  {category.title}
                </li>
              ))}
            </ul>
          </div>

          {/* Main Content */}
          <div className="flex-1">
            {categoryData.map(category => (
              <div id={category.id} key={category.id} className="mb-12">
                <h2 className="text-[#014D4E] text-2xl font-bold mb-6 uppercase">{category.title.toUpperCase()}</h2>
                {category.items.map(item => (
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