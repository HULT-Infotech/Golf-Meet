import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const usePageTracking = () => {
  const location = useLocation();

  useEffect(() => {
    if (window.gtag) {
      window.gtag("config", "G-MMMSQ87MGK", {
        page_path: location.pathname + location.search,
      });
    }
  }, [location]);
};

export default usePageTracking;
