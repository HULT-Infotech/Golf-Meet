import React from "react";
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
  return (
    <>
    <section className=" h-auto md:hidden">
        
    <Navbar/>
        <h1 className="font-quattrocento font-bold text-4xl mt-12 mb-2 text-center text-[#201E15]">LEADERBOARD</h1>
        <div className="flex items-center justify-center w-full whitespace-nowrap">
                        <div className="border-t-2 border-gray-300 flex-grow"></div>
                        <h2 className="px-2 font-quattrocento text-gray-500 text-sm font-normal mx-2">↓ Top 10 ranked players ↓</h2>
                        <div className="border-t-2 border-gray-300 flex-grow"></div>
                    </div>
                    <section className="flex flex-col items-center mx-auto my-12">
                    <div className="wrapper" style={{ 
                        width: 'clamp(280px, calc(100% - 24px), 370px)',
                        margin: '0 auto'
                        }}>
                        <div style={{ 
                            width: '100%', 
                            height: '140px'
                        }} className="bg-white mb-8 rounded-2xl shadow-xl relative">
                            <img src={l1} alt="placeholder" className="absolute -top-[0.6rem] left-8 z-20" />
                            <div style={{ 
                            width: '100%', 
                            height: '75px'
                            }} className="bg-[#01383A] z-10 noise-bg-green rounded-2xl flex items-center">
                            <span className="text-white left-28 relative">N. Ramachandra Rao</span>
                            </div>
                            <div className="flex justify-between px-8 pt-4 items-center">
                            <div className="flex items-center">
                                <span className="text-[#01383A] font-semibold text-xs mr-2">ROUNDS PLAYED:</span>
                                <div className="bg-[#014D4E1A] rounded-full px-4 py-1">
                                <span className="text-[#014D4E] text-sm font-bold">123</span>
                                </div>
                            </div>
                            <div className="flex items-center">
                                <span className="text-[#01383A] font-semibold text-xs mr-2">POINTS:</span>
                                <div className="bg-[#F4D455] rounded-full px-4 py-1">
                                <span className="text-[#014D4E] text-sm font-bold">9,999</span>
                                </div>
                            </div>
                            </div>
                        </div>
                    </div>
                    <div className="wrapper" style={{ 
                        width: 'clamp(280px, calc(100% - 24px), 370px)',
                        margin: '0 auto'
                        }}>
                        <div style={{ 
                            width: '100%', 
                            height: '140px'
                        }} className="bg-white mb-8 rounded-2xl shadow-xl relative">
                            <img src={l2} alt="placeholder" className="absolute -top-[0.6rem] left-8 z-20" />
                            <div style={{ 
                            width: '100%', 
                            height: '75px'
                            }} className="bg-[#01383A] z-10 noise-bg-green rounded-2xl flex items-center">
                            <span className="text-white left-28 relative">Golf Lee</span>
                            </div>
                            <div className="flex justify-between px-8 pt-4 items-center">
                            <div className="flex items-center">
                                <span className="text-[#01383A] font-semibold text-xs mr-2">ROUNDS PLAYED:</span>
                                <div className="bg-[#014D4E1A] rounded-full px-4 py-1">
                                <span className="text-[#014D4E] text-sm font-bold">123</span>
                                </div>
                            </div>
                            <div className="flex items-center">
                                <span className="text-[#01383A] font-semibold text-xs mr-2">POINTS:</span>
                                <div className="bg-[#F4D455] rounded-full px-4 py-1">
                                <span className="text-[#014D4E] text-sm font-bold">9,999</span>
                                </div>
                            </div>
                            </div>
                        </div>
                    </div>
                    <div className="wrapper" style={{ 
                        width: 'clamp(280px, calc(100% - 24px), 370px)',
                        margin: '0 auto'
                        }}>
                        <div style={{ 
                            width: '100%', 
                            height: '140px'
                        }} className="bg-white mb-8 rounded-2xl shadow-xl relative">
                            <img src={l3} alt="placeholder" className="absolute -top-[0.6rem] left-8 z-20" />
                            <div style={{ 
                            width: '100%', 
                            height: '75px'
                            }} className="bg-[#01383A] z-10 noise-bg-green rounded-2xl flex items-center">
                            <span className="text-white left-28 relative">Kim Clooney</span>
                            </div>
                            <div className="flex justify-between px-8 pt-4 items-center">
                            <div className="flex items-center">
                                <span className="text-[#01383A] font-semibold text-xs mr-2">ROUNDS PLAYED:</span>
                                <div className="bg-[#014D4E1A] rounded-full px-4 py-1">
                                <span className="text-[#014D4E] text-sm font-bold">123</span>
                                </div>
                            </div>
                            <div className="flex items-center">
                                <span className="text-[#01383A] font-semibold text-xs mr-2">POINTS:</span>
                                <div className="bg-[#F4D455] rounded-full px-4 py-1">
                                <span className="text-[#014D4E] text-sm font-bold">9,999</span>
                                </div>
                            </div>
                            </div>
                        </div>
                    </div>
                    <div className="wrapper" style={{ 
                        width: 'clamp(280px, calc(100% - 24px), 370px)',
                        margin: '0 auto'
                        }}>
                        <div style={{ 
                            width: '100%', 
                            height: '140px'
                        }} className="bg-white mb-8 rounded-2xl shadow-xl relative">
                            <img src={l4} alt="placeholder" className="absolute -top-[0.6rem] left-8 z-20" />
                            <div style={{ 
                            width: '100%', 
                            height: '75px'
                            }} className="bg-[#01383A] z-10 noise-bg-green rounded-2xl flex items-center">
                            <span className="text-white left-28 relative">Rajeev Menon</span>
                            </div>
                            <div className="flex justify-between px-8 pt-4 items-center">
                            <div className="flex items-center">
                                <span className="text-[#01383A] font-semibold text-xs mr-2">ROUNDS PLAYED:</span>
                                <div className="bg-[#014D4E1A] rounded-full px-4 py-1">
                                <span className="text-[#014D4E] text-sm font-bold">123</span>
                                </div>
                            </div>
                            <div className="flex items-center">
                                <span className="text-[#01383A] font-semibold text-xs mr-2">POINTS:</span>
                                <div className="bg-[#F4D455] rounded-full px-4 py-1">
                                <span className="text-[#014D4E] text-sm font-bold">9,999</span>
                                </div>
                            </div>
                            </div>
                        </div>
                    </div>
                    <div className="wrapper" style={{ 
                        width: 'clamp(280px, calc(100% - 24px), 370px)',
                        margin: '0 auto'
                        }}>
                        <div style={{ 
                            width: '100%', 
                            height: '140px'
                        }} className="bg-white mb-8 rounded-2xl shadow-xl relative">
                            <img src={l5} alt="placeholder" className="absolute -top-[0.6rem] left-8 z-20" />
                            <div style={{ 
                            width: '100%', 
                            height: '75px'
                            }} className="bg-[#01383A] z-10 noise-bg-green rounded-2xl flex items-center">
                            <span className="text-white left-28 relative">Amit Kumar</span>
                            </div>
                            <div className="flex justify-between px-8 pt-4 items-center">
                            <div className="flex items-center">
                                <span className="text-[#01383A] font-semibold text-xs mr-2">ROUNDS PLAYED:</span>
                                <div className="bg-[#014D4E1A] rounded-full px-4 py-1">
                                <span className="text-[#014D4E] text-sm font-bold">123</span>
                                </div>
                            </div>
                            <div className="flex items-center">
                                <span className="text-[#01383A] font-semibold text-xs mr-2">POINTS:</span>
                                <div className="bg-[#F4D455] rounded-full px-4 py-1">
                                <span className="text-[#014D4E] text-sm font-bold">9,999</span>
                                </div>
                            </div>
                            </div>
                        </div>
                    </div>
                    <div className="wrapper" style={{ 
                        width: 'clamp(280px, calc(100% - 24px), 370px)',
                        margin: '0 auto'
                        }}>
                        <div style={{ 
                            width: '100%', 
                            height: '140px'
                        }} className="bg-white mb-8 rounded-2xl shadow-xl relative">
                            <img src={l6} alt="placeholder" className="absolute -top-[0.6rem] left-8 z-20" />
                            <div style={{ 
                            width: '100%', 
                            height: '75px'
                            }} className="bg-[#01383A] z-10 noise-bg-green rounded-2xl flex items-center">
                            <span className="text-white left-28 relative">Dhadhichi</span>
                            </div>
                            <div className="flex justify-between px-8 pt-4 items-center">
                            <div className="flex items-center">
                                <span className="text-[#01383A] font-semibold text-xs mr-2">ROUNDS PLAYED:</span>
                                <div className="bg-[#014D4E1A] rounded-full px-4 py-1">
                                <span className="text-[#014D4E] text-sm font-bold">123</span>
                                </div>
                            </div>
                            <div className="flex items-center">
                                <span className="text-[#01383A] font-semibold text-xs mr-2">POINTS:</span>
                                <div className="bg-[#F4D455] rounded-full px-4 py-1">
                                <span className="text-[#014D4E] text-sm font-bold">9,999</span>
                                </div>
                            </div>
                            </div>
                        </div>
                    </div>
                    <div className="wrapper" style={{ 
                        width: 'clamp(280px, calc(100% - 24px), 370px)',
                        margin: '0 auto'
                        }}>
                        <div style={{ 
                            width: '100%', 
                            height: '140px'
                        }} className="bg-white mb-8 rounded-2xl shadow-xl relative">
                            <img src={l7} alt="placeholder" className="absolute -top-[0.6rem] left-8 z-20" />
                            <div style={{ 
                            width: '100%', 
                            height: '75px'
                            }} className="bg-[#01383A] z-10 noise-bg-green rounded-2xl flex items-center">
                            <span className="text-white left-28 relative">Tom</span>
                            </div>
                            <div className="flex justify-between px-8 pt-4 items-center">
                            <div className="flex items-center">
                                <span className="text-[#01383A] font-semibold text-xs mr-2">ROUNDS PLAYED:</span>
                                <div className="bg-[#014D4E1A] rounded-full px-4 py-1">
                                <span className="text-[#014D4E] text-sm font-bold">123</span>
                                </div>
                            </div>
                            <div className="flex items-center">
                                <span className="text-[#01383A] font-semibold text-xs mr-2">POINTS:</span>
                                <div className="bg-[#F4D455] rounded-full px-4 py-1">
                                <span className="text-[#014D4E] text-sm font-bold">9,999</span>
                                </div>
                            </div>
                            </div>
                        </div>
                    </div>
                    <div className="wrapper" style={{ 
                        width: 'clamp(280px, calc(100% - 24px), 370px)',
                        margin: '0 auto'
                        }}>
                        <div style={{ 
                            width: '100%', 
                            height: '140px'
                        }} className="bg-white mb-8 rounded-2xl shadow-xl relative">
                            <img src={l8} alt="placeholder" className="absolute -top-[0.6rem] left-8 z-20" />
                            <div style={{ 
                            width: '100%', 
                            height: '75px'
                            }} className="bg-[#01383A] z-10 noise-bg-green rounded-2xl flex items-center">
                            <span className="text-white left-28 relative">Alex</span>
                            </div>
                            <div className="flex justify-between px-8 pt-4 items-center">
                            <div className="flex items-center">
                                <span className="text-[#01383A] font-semibold text-xs mr-2">ROUNDS PLAYED:</span>
                                <div className="bg-[#014D4E1A] rounded-full px-4 py-1">
                                <span className="text-[#014D4E] text-sm font-bold">123</span>
                                </div>
                            </div>
                            <div className="flex items-center">
                                <span className="text-[#01383A] font-semibold text-xs mr-2">POINTS:</span>
                                <div className="bg-[#F4D455] rounded-full px-4 py-1">
                                <span className="text-[#014D4E] text-sm font-bold">9,999</span>
                                </div>
                            </div>
                            </div>
                        </div>
                    </div>
                    <div className="wrapper" style={{ 
                        width: 'clamp(280px, calc(100% - 24px), 370px)',
                        margin: '0 auto'
                        }}>
                        <div style={{ 
                            width: '100%', 
                            height: '140px'
                        }} className="bg-white mb-8 rounded-2xl shadow-xl relative">
                            <img src={l9} alt="placeholder" className="absolute -top-[0.6rem] left-8 z-20" />
                            <div style={{ 
                            width: '100%', 
                            height: '75px'
                            }} className="bg-[#01383A] z-10 noise-bg-green rounded-2xl flex items-center">
                            <span className="text-white left-28 relative">Neville</span>
                            </div>
                            <div className="flex justify-between px-8 pt-4 items-center">
                            <div className="flex items-center">
                                <span className="text-[#01383A] font-semibold text-xs mr-2">ROUNDS PLAYED:</span>
                                <div className="bg-[#014D4E1A] rounded-full px-4 py-1">
                                <span className="text-[#014D4E] text-sm font-bold">123</span>
                                </div>
                            </div>
                            <div className="flex items-center">
                                <span className="text-[#01383A] font-semibold text-xs mr-2">POINTS:</span>
                                <div className="bg-[#F4D455] rounded-full px-4 py-1">
                                <span className="text-[#014D4E] text-sm font-bold">9,999</span>
                                </div>
                            </div>
                            </div>
                        </div>
                    </div>
                    <div className="wrapper" style={{ 
                        width: 'clamp(280px, calc(100% - 24px), 370px)',
                        margin: '0 auto'
                        }}>
                        <div style={{ 
                            width: '100%', 
                            height: '140px'
                        }} className="bg-white mb-8 rounded-2xl shadow-xl relative">
                            <img src={l10} alt="placeholder" className="absolute -top-[0.6rem] left-8 z-20" />
                            <div style={{ 
                            width: '100%', 
                            height: '75px'
                            }} className="bg-[#01383A] z-10 noise-bg-green rounded-2xl flex items-center">
                            <span className="text-white left-28 relative">Kavitha</span>
                            </div>
                            <div className="flex justify-between px-8 pt-4 items-center">
                            <div className="flex items-center">
                                <span className="text-[#01383A] font-semibold text-xs mr-2">ROUNDS PLAYED:</span>
                                <div className="bg-[#014D4E1A] rounded-full px-4 py-1">
                                <span className="text-[#014D4E] text-sm font-bold">123</span>
                                </div>
                            </div>
                            <div className="flex items-center">
                                <span className="text-[#01383A] font-semibold text-xs mr-2">POINTS:</span>
                                <div className="bg-[#F4D455] rounded-full px-4 py-1">
                                <span className="text-[#014D4E] text-sm font-bold">9,999</span>
                                </div>
                            </div>
                            </div>
                        </div>
                    </div>
                    
        </section>

    </section>

      {/* Footer with improved top shadow */}
      <div className="relative">
  {/* Subtle bottom shadow that fades upward */}
  <div className="h-6 w-full bg-gradient-to-t from-gray-400 via-gray-100 to-transparent opacity-40"></div>
  {/* Footer component */}
  <Footer className=""/>
</div>
    </>
  );
}

export default LeaderPage;
