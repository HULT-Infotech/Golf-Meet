import React, { useState } from 'react';
import RightSection from '../components/LocationRight'; // Adjust path as needed
import LeftSection from '../components/LocationAbout'; // Import your existing LeftSection component

const PinCodeLocationPage = () => {
  // PIN code state management
  const [pinCode, setPinCode] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Stage indicator props
  const currentStage = 2; // Assuming this is stage 2 of the process
  const totalStages = 10;
  const progressPercentage = 20;

  // Handle PIN code submission
  const handlePinSubmit = async () => {
    if (pinCode.length !== 6) {
      setError('Please enter a valid 6-digit PIN code');
      return;
    }

    setIsLoading(true);
    setError('');

    try {
      // Simulate API call for PIN validation/location lookup
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Simulate validation logic
      const validPinCodes = ['123456', '560001', '560002', '560003', '110001', '400001'];
      
      if (validPinCodes.includes(pinCode)) {
        setIsSubmitted(true);
        // Here you would typically navigate to the next step
        console.log('PIN validated successfully:', pinCode);
        // Example: navigate('/next-step');
      } else {
        setError('PIN code not found. Please enter a valid PIN code.');
      }
    } catch (err) {
      setError('Something went wrong. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  // Handle PIN code change with validation
  const handlePinCodeChange = (newPinCode) => {
    setPinCode(newPinCode);
    
    // Clear error when user starts typing
    if (error) {
      setError('');
    }
    
    // Reset submission state if user changes PIN after submission
    if (isSubmitted) {
      setIsSubmitted(false);
    }
  };

  // Reset form
  const resetForm = () => {
    setPinCode('');
    setError('');
    setIsLoading(false);
    setIsSubmitted(false);
  };

  return (
    <div className="min-h-screen gradient-noise-bg">
      {/* Back Button */}
      <div className="absolute top-4 left-4 z-50">
        <button
          onClick={() => window.history.back()}
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
          {/* Left Section - Using your existing LeftSection component */}
          <LeftSection />

          {/* Right Section - PIN Code Form */}
          <RightSection
            pinCode={pinCode}
            setPinCode={handlePinCodeChange}
            error={error}
            setError={setError}
            isLoading={isLoading}
            handlePinSubmit={handlePinSubmit}
            currentStage={currentStage}
            totalStages={totalStages}
            progressPercentage={progressPercentage}
          />
        </div>
        
        {/* Green section at bottom - full width - Desktop Only */}
        <div className="hidden lg:block absolute bottom-0 left-0 right-0 h-12 noise-bg-new bulge-topest z-0"></div>
      </div>

      {/* Success Modal/Overlay - Optional */}
      {isSubmitted && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg p-6 max-w-md w-full">
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#059669"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M20 6L9 17l-5-5" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                Location Confirmed!
              </h3>
              <p className="text-gray-600 mb-4">
                Your PIN code {pinCode} has been validated successfully.
              </p>
              <button
                onClick={() => {
                  setIsSubmitted(false);
                  // Here you would typically navigate to next step
                  console.log('Proceeding to next step...');
                }}
                className="w-full py-2 px-4 bg-[#014D4E] text-white rounded-lg hover:bg-[#013940] transition-colors"
              >
                Continue
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PinCodeLocationPage;