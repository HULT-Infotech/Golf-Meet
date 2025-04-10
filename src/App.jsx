import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CachedHomePage from "./pages/CachedHomePage";
import HowToPlay from "./pages/HowToPlay";
import TournamentRule from "./pages/TournamentRule";
import FaQ from "./pages/FaQ";
import ScrollToTop from "./utils/ScrollToTop";
import CodeOfConduct from "./pages/CodeOfConduct";
import Terms from "./pages/TermsandCondition";
import Policy from "./pages/PrivacyPolicy";
import Leader from "./pages/Leaderboard";
import LoadingScreen from "./components/LoadingScreen";
function App() {
const [isLoading, setIsLoading] = useState(true);
useEffect(() => {
console.log("useEffect ran");
const simulateInitialLoad = async () => {
await new Promise((resolve) => setTimeout(resolve, 1500)); // Increased delay
setIsLoading(false);
console.log("isLoading set to false");
};
simulateInitialLoad();
}, []);
return (
<BrowserRouter>
{isLoading && <LoadingScreen />}
{!isLoading && (
<>
<Routes>
<Route path="/" element={<CachedHomePage />} />
<Route path="/home-to-play" element={<HowToPlay />} />
<Route path="/faq" element={<FaQ />} />
<Route path="/tournament-rules" element={<TournamentRule />} />
<Route path="/code-of-conduct" element={<CodeOfConduct />} />
<Route path="/terms-of-use" element={<Terms />} />
<Route path="/privacy-policy" element={<Policy />} />
<Route path="/leaderboard" element={<Leader />} />
</Routes>
<ScrollToTop />
</>
)}
</BrowserRouter>
);
}
export default App;