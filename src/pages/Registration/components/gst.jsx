import React, { useState } from 'react';

const StageIndicator = ({ currentStage, totalStages, progressPercentage, showStageText }) => {
  return (
    <div className="mb-8">
      <div className="w-full bg-gray-200 rounded-full h-2">
        <div
          className="bg-[#014D4E] h-2 rounded-full transition-all duration-300"
          style={{ width: `${progressPercentage}%` }}
        ></div>
      </div>
    </div>
  );
};

const RightSection = () => {
  const [gstNumber, setGstNumber] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [validationState, setValidationState] = useState(''); // 'valid', 'invalid', or ''

  // GST number validation
  const validateGST = (value) => {
    // Basic GST format: 15 characters, alphanumeric
    const gstPattern = /^[0-9]{2}[A-Z]{5}[0-9]{4}[A-Z]{1}[1-9A-Z]{1}Z[0-9A-Z]{1}$/;
    return gstPattern.test(value.toUpperCase());
  };

  const handleInputChange = (e) => {
    const value = e.target.value.toUpperCase();
    setGstNumber(value);
    setError('');
    
    if (value.length === 0) {
      setValidationState('');
    } else if (value.length === 15) {
      if (validateGST(value)) {
        setValidationState('valid');
      } else {
        setValidationState('invalid');
        setError('This is not a valid GST number');
      }
    } else {
      setValidationState('');
    }
  };

  const handleSubmit = async () => {
    if (!gstNumber.trim()) {
      setError('Please enter a GST number');
      return;
    }

    if (!validateGST(gstNumber)) {
      setError('This is not a valid GST number');
      setValidationState('invalid');
      return;
    }

    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      // Handle successful submission
      console.log('GST number validated:', gstNumber);
    }, 2000);
  };

  const getInputBorderColor = () => {
    if (validationState === 'valid') return 'border-green-500';
    if (validationState === 'invalid') return 'border-red-500';
    return 'border-[#014D4E]';
  };

  const getButtonStyle = () => {
    const isValid = gstNumber.trim() && validateGST(gstNumber) && !isLoading;
    return {
      background: isValid
        ? 'linear-gradient(90deg, #1f6c5d 0%, #064c45 100%)'
        : '#d1d5db',
      color: isValid ? 'white' : '#6b7280',
      height: '48px',
    };
  };

  const getButtonText = () => {
    if (isLoading) return 'SUBMITTING...';
    if (validationState === 'valid') return 'CONTINUE';
    return 'SKIP';
  };

  return (
    <div className="w-full lg:w-1/2 flex flex-col justify-start px-6 py-8 lg:px-16 lg:py-28 min-h-screen lg:h-screen">
      <div className="max-w-auto mx-auto w-full">
        {/* Progress indicator */}
        <StageIndicator
          currentStage={3}
          totalStages={10}
          progressPercentage={30}
          showStageText={true}
        />

        <div className="mb-6 lg:mb-6">
          <h2 className="text-xl lg:text-2xl font-bold text-[#014D4E] font-quattrocento my-6 lg:my-10 uppercase tracking-wider">
            CLAIM GST
          </h2>
        </div>

        <div className="space-y-6">
          {/* Input Field */}
          <div>
            <label className="block text-xs lg:text-xs font-medium text-[#000000] mb-3 uppercase tracking-wide">
              ENTER YOUR GSTIN
            </label>
            <div className="relative w-full lg:max-w-md">
              <input
                type="text"
                value={gstNumber}
                onChange={handleInputChange}
                maxLength={15}
                className={`w-full px-4 py-3 lg:py-4 pr-10 text-base border-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#014D4E] focus:border-transparent ${getInputBorderColor()}`}
                placeholder="22AAAAA0000A1Z5"
              />
              {validationState === 'valid' && (
                <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-green-500 pointer-events-none">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M20 6L9 17l-5-5"/>
                  </svg>
                </span>
              )}
              {validationState === 'invalid' && (
                <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-red-500 pointer-events-none">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M18 6L6 18M6 6l12 12"/>
                  </svg>
                </span>
              )}
            </div>
            {validationState === 'valid' && (
              <div className="mt-3">
                <p className="text-green-600 text-sm">GST Number Validated Successfully! Get ready to claim GST with this GSTIN</p>
              </div>
            )}
            {error && (
              <div className="mt-3">
                <p className="text-red-600 text-sm">{error}</p>
              </div>
            )}
          </div>

          {/* Submit Button */}
          <div className="flex justify-center mt-24">
            <button
              onClick={handleSubmit}
              disabled={isLoading}
              className="w-full max-w-xs py-3 px-6 rounded-full disabled:opacity-50 disabled:cursor-not-allowed transition-all font-medium text-sm tracking-wide flex items-center justify-between lg:max-w-sm"
              style={getButtonStyle()}
            >
              {isLoading ? (
                <div className="flex items-center justify-center w-full">
                  <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                  <span className="text-white">SUBMITTING...</span>
                </div>
              ) : (
                <>
                  <span className="text-center flex-1">{getButtonText()}</span>
                  <div
                    className="w-8 h-8 rounded-full flex items-center justify-center ml-2"
                    style={{ backgroundColor: '#5f8f91' }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#004042"
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
    </div>
  );
};

export default RightSection;