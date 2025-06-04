import React, { useState } from 'react';
import LeftSection from '../components/NumOtpLeft';
import RightSection from '../components/OtpRight';

const OtpVerificationPage = () => {
  const [otp, setOtp] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [resendCooldown, setResendCooldown] = useState(0);

  const handleOtpSubmit = () => {
    if (otp.length !== 6) {
      setError('Please enter a valid 6-digit OTP');
      return;
    }
    setError('');
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      // Reset form
      setOtp('');
    }, 1500);
  };

  const handleResendOtp = () => {
    setResendCooldown(30);
    // Simulate resend API call
    const timer = setInterval(() => {
      setResendCooldown(prev => {
        if (prev <= 1) {
          clearInterval(timer);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
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
            otp={otp}
            setOtp={setOtp}
            error={error}
            setError={setError}
            isLoading={isLoading}
            resendCooldown={resendCooldown}
            handleOtpSubmit={handleOtpSubmit}
            handleResendOtp={handleResendOtp}
            // Stage indicator props
            currentStage={2}
            totalStages={5}
            progressPercentage={20} // 40% for OTP verification step
          />
        </div>
        
        {/* Green section at bottom - full width - Desktop Only */}
        <div className="hidden lg:block absolute bottom-0 left-0 right-0 h-12 noise-bg-new bulge-topest z-0"></div>
      </div>
    </div>
  );
};

export default OtpVerificationPage;