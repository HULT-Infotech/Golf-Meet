import React from "react";

const LoadingScreen = () => {
  return (
    <div className="fixed top-0 left-0 w-full h-full bg-white flex justify-center items-center z-50">
      <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-emerald-500 border-solid border-emerald-300"></div>
    </div>
  );
};

export default LoadingScreen;