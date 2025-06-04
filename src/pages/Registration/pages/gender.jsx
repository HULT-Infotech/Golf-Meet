import React, { useState } from 'react';
import LeftSection from '../components/GenderLeft';
import RightSection from '../components/Gender'; // Keep original import path

const GolferMatchingPage = () => {
  const [dateOfBirth, setDateOfBirth] = useState('');
  const [selectedGender, setSelectedGender] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = () => {
    // Validate date of birth
    if (!dateOfBirth.trim()) {
      setError('Please select your date of birth');
      return;
    }

    // Validate gender selection
    if (!selectedGender) {
      setError('Please select your gender');
      return;
    }

    // Validate age (must be at least 13 years old for most platforms)
    const birthDate = new Date(dateOfBirth);
    const today = new Date();
    const age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();
    
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }

    if (age < 13) {
      setError('You must be at least 13 years old to continue');
      return;
    }

    if (age > 120) {
      setError('Please enter a valid date of birth');
      return;
    }

    setError('');
    setIsLoading(true);

    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      // Add your navigation logic here - proceed to next step
      console.log('Golfer matching data submitted:', {
        dateOfBirth,
        selectedGender,
        age
      });
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
            dateOfBirth={dateOfBirth}
            setDateOfBirth={setDateOfBirth}
            selectedGender={selectedGender}
            setSelectedGender={setSelectedGender}
            error={error}
            setError={setError}
            isLoading={isLoading}
            handleFormSubmit={handleSubmit}
            // Stage indicator props
            currentStage={4}
            totalStages={10}
            progressPercentage={40} // 40% for second step - golfer matching
          />
        </div>
        
        {/* Green section at bottom - full width - Desktop Only */}
        <div className="hidden lg:block absolute bottom-0 left-0 right-0 h-12 noise-bg-new bulge-topest z-0"></div>
      </div>
    </div>
  );
};

export default GolferMatchingPage;