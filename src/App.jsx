import React, { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ScrollToTop from "./utils/ScrollToTop";
import Loading from "./components/Loading";

const HowToPlay = lazy(() => import("./pages/HowToPlay"));
const TournamentRule = lazy(() => import("./pages/TournamentRule"));
const FaQ = lazy(() => import("./pages/FaQ"));
const CodeOfConduct = lazy(() => import("./pages/CodeOfConduct"));

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/home-to-play" element={<HowToPlay />} />
          <Route path="/faq" element={<FaQ />} />
          <Route path="/tournament-rules" element={<TournamentRule />} />
          <Route path="/code-of-conduct" element={<CodeOfConduct />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
