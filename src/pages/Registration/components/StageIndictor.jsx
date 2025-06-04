import React from 'react';

const StageIndicator = ({ 
  currentStage = 1, 
  totalStages = 5, 
  progressPercentage = null,
  className = ""
}) => {
  // Calculate progress percentage if not provided
  const calculatedProgress = progressPercentage !== null 
    ? progressPercentage 
    : (currentStage / totalStages) * 100;

  return (
    <div className={`mb-6 lg:mb-8 ${className}`}>
      <div className="flex items-center">
        {/* Progress bar - full width, no text */}
        <div className="flex-1 h-1 bg-gray-200 rounded-full overflow-hidden">
          <div 
            className="h-full bg-teal-600 rounded-full transition-all duration-500 ease-out"
            style={{ width: `${Math.min(Math.max(calculatedProgress, 0), 100)}%` }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default StageIndicator;