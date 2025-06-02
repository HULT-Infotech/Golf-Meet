import React, { useState } from 'react';
import LeftSection from '../components/NumOtpLeft';
import RightSection from '../components/NumOtpRight';
import IndianFlag from "../assets/india.svg";

const PhoneVerificationPage = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [agreedToNotifications, setAgreedToNotifications] = useState(false);

  const handlePhoneSubmit = () => {
    if (phoneNumber.length !== 10) {
      setError('Please enter a valid 10-digit mobile number');
      return;
    }
    if (!agreedToNotifications) {
      setError('Please agree to receive notifications to continue');
      return;
    }
    setError('');
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      // Reset form
      setPhoneNumber('');
      setAgreedToNotifications(false);
    }, 1500);
  };

  return (
    <div className="min-h-screen gradient-noise-bg">
      {/* Mobile & Desktop Unified View */}
      <div className="min-h-screen relative">
        <div className="flex flex-col lg:flex-row min-h-screen">
          {/* Left Section Component - Desktop Only */}
          <LeftSection />

          {/* Right Section Component - Mobile & Desktop */}
          <RightSection 
            phoneNumber={phoneNumber}
            setPhoneNumber={setPhoneNumber}
            error={error}
            setError={setError}
            isLoading={isLoading}
            agreedToNotifications={agreedToNotifications}
            setAgreedToNotifications={setAgreedToNotifications}
            handlePhoneSubmit={handlePhoneSubmit}
          />
        </div>
        
        {/* Green section at bottom - full width - Desktop Only */}
        <div className="hidden lg:block absolute bottom-0 left-0 right-0 h-12 noise-bg-new bulge-topest z-0"></div>
      </div>
    </div>
  );
};

export default PhoneVerificationPage;