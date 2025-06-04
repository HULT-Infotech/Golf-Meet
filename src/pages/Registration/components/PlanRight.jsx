import React, { useState } from 'react';
import prosAmateursImage from '../assets/pros-amateurs-plan.svg';
import amateursOnlyImage from '../assets/amateurs-only-plan.svg';
import StageIndicator from "../components/StageIndictor";

// Fallback placeholder images
const prosAmateursImageFallback = "https://via.placeholder.com/400x200/FFB300/1A1A1A?text=PLAY+WITH+PROS+AND+AMATEURS";
const amateursOnlyImageFallback = "https://via.placeholder.com/400x200/757575/FFFFFF?text=PLAY+WITH+AMATEURS+ONLY";

const SubscriptionSelector = ({ 
  selectedPlan, 
  setSelectedPlan, 
  onProceed,
  currentStage = 2,
  totalStages = 10,
  progressPercentage = 20 
}) => {
  const [isLoading, setIsLoading] = useState(false);
  const [localSelectedPlan, setLocalSelectedPlan] = useState(selectedPlan || null);

  const plans = [
    {
      id: 'pros-amateurs',
      image: prosAmateursImage || prosAmateursImageFallback,
      alt: 'Play with Pros and Amateurs Plan - ₹5,000 per month'
    },
    {
      id: 'amateurs-only',
      image: amateursOnlyImage || amateursOnlyImageFallback,
      alt: 'Play with Amateurs Only Plan - ₹2,000 per month'
    }
  ];

  const handlePlanSelect = (planId) => {
    setLocalSelectedPlan(planId);
    if (setSelectedPlan) {
      setSelectedPlan(planId);
    }
  };

  const handleProceed = async () => {
    const currentPlan = selectedPlan || localSelectedPlan;
    if (!currentPlan) return;
    
    setIsLoading(true);
    try {
      await onProceed(currentPlan);
    } finally {
      setIsLoading(false);
    }
  };

  const currentSelectedPlan = selectedPlan || localSelectedPlan;

  return (
    <div className="min-h-screen py-8">
      <div className="max-w-6xl mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Progress indicator */}
          <StageIndicator
            currentStage={currentStage}
            totalStages={totalStages}
            progressPercentage={progressPercentage}
            showStageText={true}
          />

          {/* Header */}
          <div className="mb-8 text-center lg:text-left">
            <h2 className="text-xl lg:text-2xl font-bold text-[#014D4E] font-quattrocento my-6 lg:my-10 uppercase tracking-wider">
              Choose Your Plan
            </h2>
            <p className="text-gray-600 mb-6 leading-relaxed max-w-2xl text-sm">
              Subscription fee must be paid for each month to track your rank throughout the year.
            </p>
          </div>

          {/* Plan Image Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8 px-6">
            {plans.map((plan) => {
              const isSelected = currentSelectedPlan === plan.id;
              
              return (
                <div
                  key={plan.id}
                  className={`relative cursor-pointer transition-all duration-300 rounded-2xl ${
                    isSelected 
                      ? 'border-4 border-green-400 shadow-lg' 
                      : 'border-2 border-transparent shadow-md'
                  }`}
                  onClick={() => handlePlanSelect(plan.id)}
                  style={{ position: 'relative', overflow: 'visible' }}
                >
                  {/* Selection Indicator */}
                  {isSelected && (
                    <div 
                      className="absolute z-50 bg-white rounded-full w-10 h-10 flex items-center justify-center shadow-lg"
                      style={{
                        top: '50%',
                        left: '-20px',
                        transform: 'translateY(-50%)'
                      }}
                    >
                      <svg className="w-6 h-6 text-green-500" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                      </svg>
                    </div>
                  )}
                  
                  {/* Plan Image */}
                  <div className="rounded-2xl overflow-hidden">
                    <img
                      src={plan.image}
                      alt={plan.alt}
                      className="w-full h-auto block transition-all duration-300 relative z-10"
                      loading="lazy"
                    />
                  </div>
                </div>
              );
            })}
          </div>

          {/* Important Section */}
          <div className="mb-8">
            <h3 className="text-sm font-semibold text-gray-700 mb-4 tracking-wider uppercase">
              Important
            </h3>
            <div className="space-y-3 text-sm text-gray-600 leading-relaxed">
              <p>
                Golf Meet does not offer membership or complimentary rounds from 
                credit cards to book their games; the Golf Meet tournament fee does 
                not include green fees.
              </p>
              <p>
                This approach gives you and your fellow players the flexibility to 
                choose and book your preferred tee times directly with the golf course.
              </p>
            </div>
          </div>

          {/* Proceed Button */}
          <div className="flex justify-center lg:justify-start mt-12">
            <button
              onClick={handleProceed}
              disabled={!currentSelectedPlan || isLoading}
              className="w-full max-w-xs py-3 px-6 rounded-full disabled:opacity-50 disabled:cursor-not-allowed transition-all font-medium text-sm tracking-wide flex items-center justify-between"
              style={{
                background:
                  currentSelectedPlan && !isLoading
                    ? 'linear-gradient(90deg, #1f6c5d 0%, #064c45 100%)'
                    : '#d1d5db',
                color:
                  currentSelectedPlan && !isLoading
                    ? 'white'
                    : '#6b7280',
                height: '48px',
              }}
            >
              {isLoading ? (
                <div className="flex items-center justify-center w-full">
                  <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                  <span className="text-white">PROCESSING...</span>
                </div>
              ) : (
                <>
                  <span className="text-center flex-1">SEE PAYMENT OPTIONS</span>
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

export default SubscriptionSelector;