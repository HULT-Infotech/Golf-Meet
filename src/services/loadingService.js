// src/services/loadingService.js
import React, { createContext, useContext, useState, useEffect } from 'react';

// Create the loading context
const LoadingContext = createContext({
  isLoading: true,
  setIsLoading: () => {},
  progress: 0,
  setProgress: () => {},
});

// Loading provider component
export const LoadingProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  return (
    <LoadingContext.Provider value={{ isLoading, setIsLoading, progress, setProgress }}>
      {children}
    </LoadingContext.Provider>
  );
};

// Custom hook to use the loading context
export const useLoading = () => useContext(LoadingContext);

// Cache service using localStorage
export const CacheService = {
  // Set data in cache with expiration time (default 1 hour)
  set: (key, data, expirationMinutes = 60) => {
    const item = {
      value: data,
      expiry: new Date().getTime() + expirationMinutes * 60 * 1000,
    };
    localStorage.setItem(`cache_${key}`, JSON.stringify(item));
  },

  // Get data from cache, return null if expired or not found
  get: (key) => {
    const itemStr = localStorage.getItem(`cache_${key}`);
    if (!itemStr) return null;

    const item = JSON.parse(itemStr);
    const now = new Date().getTime();

    // Check if item is expired
    if (now > item.expiry) {
      localStorage.removeItem(`cache_${key}`);
      return null;
    }

    return item.value;
  },

  // Clear specific item from cache
  clear: (key) => {
    localStorage.removeItem(`cache_${key}`);
  },

  // Clear all cache
  clearAll: () => {
    const keys = Object.keys(localStorage);
    keys.forEach(key => {
      if (key.startsWith('cache_')) {
        localStorage.removeItem(key);
      }
    });
  }
};

// Asset preloader hook
export const useAssetPreloader = (assetUrls) => {
  const { setProgress, setIsLoading } = useLoading();
  
  useEffect(() => {
    if (!assetUrls || assetUrls.length === 0) {
      setIsLoading(false);
      return;
    }
    
    let loadedCount = 0;
    const totalAssets = assetUrls.length;
    
    // Function to update progress
    const updateProgress = () => {
      loadedCount++;
      const progressPercent = Math.floor((loadedCount / totalAssets) * 100);
      setProgress(progressPercent);
      
      if (loadedCount === totalAssets) {
        setIsLoading(false);
      }
    };
    
    // Preload all assets
    assetUrls.forEach(url => {
      // For images
      if (url.match(/\.(jpeg|jpg|gif|png|svg)$/i)) {
        const img = new Image();
        img.onload = updateProgress;
        img.onerror = updateProgress; // Count errors as loaded to prevent getting stuck
        img.src = url;
      } 
      // For fonts and other file types
      else if (url.match(/\.(woff|woff2|ttf|eot)$/i)) {
        fetch(url)
          .then(() => updateProgress())
          .catch(() => updateProgress());
      } 
      // For other assets like JS, CSS
      else {
        fetch(url)
          .then(() => updateProgress())
          .catch(() => updateProgress());
      }
    });
    
  }, [assetUrls, setProgress, setIsLoading]);
};

// Data fetcher hook with caching
export const useCachedFetch = (url, expirationMinutes = 60) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  useEffect(() => {
    const fetchData = async () => {
      if (!url) {
        setLoading(false);
        return;
      }
      
      try {
        // Check cache first
        const cachedData = CacheService.get(url);
        if (cachedData) {
          setData(cachedData);
          setLoading(false);
          return;
        }
        
        // Fetch fresh data if not in cache
        const response = await fetch(url);
        if (!response.ok) throw new Error('Network response was not ok');
        
        const responseData = await response.json();
        
        // Cache the data
        CacheService.set(url, responseData, expirationMinutes);
        
        setData(responseData);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };
    
    fetchData();
  }, [url, expirationMinutes]);
  
  return { data, loading, error };
};

// Loading screen component - customize to match your design
export const LoadingScreen = () => {
  const { progress } = useLoading();
  
  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center bg-gray-100 noise-bg z-50">
      <div className="text-3xl font-bold mb-6 font-quattrocento text-[#201E15]">Loading Tournament...</div>
      <div className="w-64 h-2 bg-gray-300 rounded-full overflow-hidden">
        <div 
          className="h-full bg-gradient-to-r from-[#E5181A] to-[#B21214] transition-all duration-300 ease-out"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
      <div className="mt-2 text-[#201E15]">{progress}%</div>
    </div>
  );
};

// Main App wrapper to implement loading and caching
export const AppLoader = ({ children, assetUrls = [] }) => {
  const { isLoading } = useLoading();
  
  // Preload assets
  useAssetPreloader(assetUrls);
  
  return (
    <>
      {isLoading && <LoadingScreen />}
      <div className={isLoading ? 'hidden' : 'block'}>
        {children}
      </div>
    </>
  );
};