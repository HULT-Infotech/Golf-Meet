import React, { Suspense, lazy } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "./utils/ScrollToTop";
import LoadingScreen from "./components/LoadingScreen";
const HomePage = lazy(() => import("./pages/HomePage"));
const HowToPlay = lazy(() => import("./pages/HowToPlay"));
const TournamentRule = lazy(() => import("./pages/TournamentRule"));
const FaQ = lazy(() => import("./pages/FaQ"));
const CodeOfConduct = lazy(() => import("./pages/CodeOfConduct"));
const Terms = lazy(() => import("./pages/TermsandCondition"));
const Policy = lazy(() => import("./pages/PrivacyPolicy"));
const Leader = lazy(() => import("./pages/Leaderboard"));
const Refund = lazy(() => import("./pages/Refund"));
const Redirect = lazy(() => import("./pages/Redirect"));
function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<LoadingScreen />}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          {/* Use the lazily loaded HomePage */}
          <Route path="/home-to-play" element={<HowToPlay />} />
          <Route path="/faq" element={<FaQ />} />
          <Route path="/rules-regulations" element={<TournamentRule />} />
          <Route path="/code-of-conduct" element={<CodeOfConduct />} />
          <Route path="/terms-of-use" element={<Terms />} />
          <Route path="/privacy-policy" element={<Policy />} />
          <Route path="/leaderboard" element={<Leader />} />
          <Route path="/refund-policy" element={<Refund />} />
          <Route path="/redirect" element={<Redirect />} />
        </Routes>
        <ScrollToTop />
      </Suspense>
    </BrowserRouter>
  );
}
export default App;
