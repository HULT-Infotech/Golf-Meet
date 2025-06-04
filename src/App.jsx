import React, { Suspense, lazy } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "./utils/ScrollToTop";
import LoadingScreen from "./components/LoadingScreen";
import GoogleAnalytics from "./hooks/GoogleAnalytics";

const HomePage = lazy(() => import("./pages/HomePage"));
const Home = lazy(() => import("./pages/Home"));
const TournamentRule = lazy(() => import("./pages/TournamentRule"));
const FaQ = lazy(() => import("./pages/FaQ"));
const CodeOfConduct = lazy(() => import("./pages/CodeOfConduct"));
const Terms = lazy(() => import("./pages/TermsandCondition"));
const Policy = lazy(() => import("./pages/PrivacyPolicy"));
const Leader = lazy(() => import("./pages/LeaderPage"));
const Refund = lazy(() => import("./pages/Refund"));
const Redirect = lazy(() => import("./pages/Contact_Page_Desktop_layout"));
const Reg = lazy(() => import("./pages/Registration/Registration_Layout"));
const Paymentfail = lazy(() => import("./pages/Registration/pages/Paymentfail"));
const Problem = lazy(() => import("./pages/Registration/pages/Problem"));


function App() {
  return (
    <BrowserRouter>
      {/* Add Google Analytics - it will load on all pages */}
      <GoogleAnalytics />
      <Suspense fallback={<LoadingScreen />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/improve" element={<HomePage />} />
          <Route path="/reg" element={<Reg />} />
          {/* Use the lazily loaded HomePage */}
          <Route path="/faq" element={<FaQ />} />
          <Route path="/rules-regulations" element={<TournamentRule />} />
          <Route path="/code-of-conduct" element={<CodeOfConduct />} />
          <Route path="/terms-of-use" element={<Terms />} />
          <Route path="/privacy-policy" element={<Policy />} />
          <Route path="/ranking" element={<Leader />} />
          <Route path="/refund-policy" element={<Refund />} />
          <Route path="/contact" element={<Redirect />} />
          <Route path="/paymentfail" element={<Paymentfail />} /> 
          <Route path="/problem" element={<Problem />} /> 

        </Routes>
        <ScrollToTop />
      </Suspense>
    </BrowserRouter>
  );
}

export default App;