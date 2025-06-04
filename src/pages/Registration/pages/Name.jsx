import React, { useState } from 'react';
import LeftSection from '../components/PersonalLeft';
import RightSection from '../components/Name';

const NameInputPage = () => {
  const [fullName, setFullName] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = () => {
    if (!fullName.trim()) {
      setError('Please enter your full name');
      return;
    }
    
    if (fullName.trim().length < 2) {
      setError('Name must be at least 2 characters long');
      return;
    }
    
    setError('');
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      // Add your navigation logic here - proceed to next step
      console.log('Name submitted:', fullName);
      // Example: navigate to next page
      // navigate('/next-step');
    }, 1500);
  };

  const handleBackClick = () => {
    // Add your navigation logic here
    window.history.back();
  };

  return (
    <div className="min-h-screen gradient-noise-bg">
      {/* Back Button */}
      <div className="absolute top-4 left-4 z-50">
        <button
          onClick={handleBackClick}
          className="md:flex hidden items-center justify-center w-10 h-8 text-black transition-colors"
        >
          <svg
            width="56"
            height="24"
            viewBox="0 0 32 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M28 12H5"/>
            <path d="m12 19-7-7 7-7"/>
          </svg>
        </button>
      </div>

      {/* Mobile & Desktop Unified View */}
      <div className="min-h-screen relative">
        <div className="flex flex-col lg:flex-row min-h-screen">
          {/* Left Section Component - Desktop Only */}
          <LeftSection />
          
          {/* Right Section Component - Mobile & Desktop */}
          <RightSection 
            fullName={fullName}
            setFullName={setFullName}
            error={error}
            setError={setError}
            isLoading={isLoading}
            handleSubmit={handleSubmit}
            // Stage indicator props
            currentStage={3}
            totalStages={5}
            progressPercentage={30} // 20% for first step - name input
          />
        </div>
        
        {/* Green section at bottom - full width - Desktop Only */}
        <div className="hidden lg:block absolute bottom-0 left-0 right-0 h-12 noise-bg-new bulge-topest z-0"></div>
      </div>
    </div>
  );
};

export default NameInputPage;