import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const GoogleAnalytics = () => {
  const location = useLocation();

  useEffect(() => {
    // Load GA script on first mount
    const firstScript = document.createElement('script');
    firstScript.async = true;
    firstScript.src = "https://www.googletagmanager.com/gtag/js?id=G-MMSQ87MGK";

    const secondScript = document.createElement('script');
    secondScript.innerHTML = `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-MMSQ87MGK');
    `;

    document.head.appendChild(firstScript);
    document.head.appendChild(secondScript);

    return () => {
      document.head.removeChild(firstScript);
      document.head.removeChild(secondScript);
    };
  }, []);

  useEffect(() => {
    if (window.gtag) {
      window.gtag('config', 'G-MMSQ87MGK', {
        page_path: location.pathname,
      });
    }
  }, [location]);

  return null;
};

export default GoogleAnalytics;
