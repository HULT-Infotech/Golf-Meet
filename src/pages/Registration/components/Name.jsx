import React from 'react';
import StageIndicator from "../components/StageIndictor";

const RightSection = ({
  fullName,
  setFullName,
  error,
  setError,
  isLoading,
  handleSubmit,
  currentStage = 3,
  totalStages = 10,
  progressPercentage = 30
}) => {
  const showEmoji = fullName.trim().length > 2;

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
            YOUR CONTACT INFORMATION
          </h2>
        </div>

        <div className="space-y-6">
          {/* Input Field */}
          <div>
            <label className="block text-xs lg:text-xs font-medium text-[#000000] mb-3 uppercase tracking-wide">
              INDIVIDUAL NAME
            </label>
            <div className="relative w-full lg:max-w-md">
              <input
                type="text"
                value={fullName}
                onChange={(e) => {
                  setFullName(e.target.value);
                  setError('');
                }}
                className="w-full px-4 py-3 lg:py-4 pr-10 text-base border-2 border-[#014D4E] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#014D4E] focus:border-transparent"
                placeholder="Enter your full name"
              />
              {showEmoji && (
                <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-lg pointer-events-none">
                  😎
                </span>
              )}
            </div>
            {error && (
              <div className="mt-3 p-3 bg-red-50 border border-red-200 rounded-lg">
                <p className="text-red-600 text-sm">{error}</p>
              </div>
            )}
          </div>

          {/* Submit Button */}
          <div className="flex justify-center mt-24 mr-44">
            <div className="w-full flex justify-center">
              <button
                onClick={handleSubmit}
                disabled={isLoading || !fullName.trim()}
                className="w-full max-w-xs py-3 px-6 rounded-full disabled:opacity-50 disabled:cursor-not-allowed transition-all font-medium text-sm tracking-wide flex items-center justify-between"
                style={{
                  background:
                    fullName.trim() && !isLoading
                      ? 'linear-gradient(90deg, #1f6c5d 0%, #064c45 100%)'
                      : '#d1d5db',
                  color:
                    fullName.trim() && !isLoading
                      ? 'white'
                      : '#6b7280',
                  height: '48px',
                }}
              >
                {isLoading ? (
                  <div className="flex items-center justify-center w-full">
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                    <span className="text-white">SUBMITTING...</span>
                  </div>
                ) : (
                  <>
                    <span className="text-center flex-1">CONTINUE</span>
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
    </div>
  );
};

export default RightSection;
