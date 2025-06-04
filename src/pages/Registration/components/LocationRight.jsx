import React, { useState, useEffect } from 'react';
import StageIndicator from "../components/StageIndictor"; 

const RightSection = ({ 
  // PIN-related props
  pinCode = '',
  setPinCode,
  error = '',
  setError,
  isLoading = false,
  handlePinSubmit,
  // Stage indicator props
  currentStage = 1,
  totalStages = 10,
  progressPercentage = 10 
}) => {
  const [isValidPin, setIsValidPin] = useState(false);
  const [showLocationName, setShowLocationName] = useState(false);

  // Validate PIN code (assuming 6 digits based on images)
  useEffect(() => {
    const isValid = pinCode.length === 6 && /^\d{6}$/.test(pinCode);
    setIsValidPin(isValid);
    
    // Show location name when PIN is valid (simulating location lookup)
    if (isValid) {
      setShowLocationName(true);
    } else {
      setShowLocationName(false);
    }
  }, [pinCode]);

  const handlePinChange = (e) => {
    const value = e.target.value.replace(/\D/g, ''); // Only allow digits
    if (value.length <= 6) {
      setPinCode(value);
      if (setError) setError(''); // Clear error when user types
    }
  };

  const handleSubmit = () => {
    if (isValidPin && handlePinSubmit) {
      handlePinSubmit();
    }
  };

  return (
    <div className="w-full lg:w-1/2 flex flex-col justify-start px-6 py-8 lg:px-16 lg:py-28 min-h-screen lg:h-screen">
      <div className="max-w-auto mx-auto w-full">
        {/* Progress indicator */}
        <StageIndicator 
          currentStage={currentStage}
          totalStages={totalStages}
          progressPercentage={progressPercentage}
          showStageText={true}
        />

        <div className="mb-6 lg:mb-6">
          <h2 className="text-xl lg:text-2xl font-bold text-[#014D4E] font-quattrocento my-6 lg:my-10 uppercase tracking-wider">
            WHERE ARE YOU LOCATED?
          </h2>
        </div>

        <div className="space-y-4">
          <div>
            <label className="block text-xs lg:text-xs font-medium text-[#000000] mb-3 uppercase tracking-wide">
              ENTER YOUR PIN CODE
            </label>
            <div className="relative">
              <div className="flex border-2 w-full lg:max-w-md border-[#014D4E] rounded-lg overflow-hidden bg-white relative">
                <input
                  type="tel"
                  value={pinCode}
                  onChange={handlePinChange}
                  className="flex-1 px-3 lg:px-4 py-3 lg:py-4 text-base focus:outline-none bg-white pr-12"
                  placeholder=""
                  maxLength="6"
                />
                {/* Checkmark icon when PIN is valid */}
                {isValidPin && (
                  <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                    <div className="w-6 h-6 bg-[#014D4E] rounded-full flex items-center justify-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="12"
                        height="12"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="white"
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M20 6L9 17l-5-5" />
                      </svg>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Show location name when PIN is valid */}
            {showLocationName && !error && (
              <div className="mt-2">
                <p className="text-sm text-gray-600">
                  Bengaluru, Karnataka
                </p>
              </div>
            )}

            {/* Error message */}
            {error && (
              <div className="mt-3 p-3 bg-red-50 border border-red-200 rounded-lg">
                <p className="text-red-600 text-sm">{error}</p>
              </div>
            )}
          </div>

          {/* Spacer to push button to bottom */}
          <div className="flex-1 min-h-[200px] lg:min-h-[300px]"></div>

          {/* Continue Button */}
          <button
            onClick={handleSubmit}
            disabled={isLoading || !isValidPin}
            className="w-full lg:max-w-xs py-3 px-6 rounded-full disabled:opacity-50 disabled:cursor-not-allowed transition-all font-medium text-sm tracking-wide flex items-center justify-between"
            style={{
              background: isValidPin && !isLoading
                ? 'linear-gradient(90deg, #1f6c5d 0%, #064c45 100%)'
                : '#d1d5db',
              color: isValidPin && !isLoading
                ? 'white'
                : '#6b7280',
              height: '48px',
            }}
          >
            {isLoading ? (
              <>
                <div className="flex items-center justify-center w-full">
                  <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                  <span className="text-white">LOADING...</span>
                </div>
              </>
            ) : (
              <>
                <span className="text-center flex-1">CONTINUE</span>
                <div className="w-8 h-8 rounded-full flex items-center justify-center ml-2" 
                     style={{ backgroundColor: isValidPin ? '#5f8f91' : '#9ca3af' }}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke={isValidPin ? "#004042" : "#6b7280"}
                    strokeWidth="4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M5 12h14M13 6l6 6-6 6" />
                  </svg>
                </div>
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default RightSection;