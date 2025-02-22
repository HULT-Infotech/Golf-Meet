import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import HowToPlay from "./pages/HowToPlay";
import TournamentRule from "./pages/TournamentRule";
import FaQ from "./pages/FaQ";
import ScrollToTop from "./utils/ScrollToTop";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/home-to-play" element={<HowToPlay />} />
        <Route path="/faq" element={<FaQ />} />
        <Route path="/tournament-rule" element={<TournamentRule />} />
      </Routes>
      <ScrollToTop />
    </BrowserRouter>
  );
}

export default App;
