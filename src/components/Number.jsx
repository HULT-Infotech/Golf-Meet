import React, { useState, useRef, useEffect } from 'react';
import IndianFlag from "../assets/India.svg";
import SignInIllustration from '../assets/signin-illustration.svg';

const OTPVerification = () => {
  const [step, setStep] = useState(1); // 1 for phone input, 2 for OTP input
  const [phoneNumber, setPhoneNumber] = useState('');
  const [otp, setOtp] = useState(['', '', '', '', '', '']);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [timer, setTimer] = useState(30);
  const [canResend, setCanResend] = useState(false);
  const [agreedToNotifications, setAgreedToNotifications] = useState(false);
  const otpInputs = useRef([]);

  const VALID_OTP = '123455';

  // Timer for resend OTP
  useEffect(() => {
    let interval = null;
    if (step === 2 && timer > 0) {
      interval = setInterval(() => {
        setTimer(timer => timer - 1);
      }, 1000);
    } else if (timer === 0) {
      setCanResend(true);
    }
    return () => clearInterval(interval);
  }, [step, timer]);

  const handlePhoneSubmit = () => {
    if (phoneNumber.length !== 10) {
      setError('Please enter a valid 10-digit mobile number');
      return;
    }
    setError('');
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      setStep(2);
      setTimer(30);
      setCanResend(false);
    }, 1500);
  };

  const handleOtpChange = (index, value) => {
    if (value.length > 1) return;
    if (!/^\d*$/.test(value)) return; // Only allow digits
    
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);
    setError(''); // Clear error when user types
    
    // Auto focus next input
    if (value && index < 5) {
      otpInputs.current[index + 1]?.focus();
    }
  };

  const handleOtpKeyDown = (index, e) => {
    if (e.key === 'Backspace' && !otp[index] && index > 0) {
      otpInputs.current[index - 1]?.focus();
    }
  };

  const handleOtpSubmit = () => {
    const otpString = otp.join('');
    
    if (otpString.length !== 6) {
      setError('Please enter complete OTP');
      return;
    }
    
    setIsLoading(true);
    
    // Simulate API verification
    setTimeout(() => {
      setIsLoading(false);
      if (otpString === VALID_OTP) {
        setError('');
        alert('OTP Verified Successfully! Welcome aboard!');
        // Reset form
        setStep(1);
        setPhoneNumber('');
        setOtp(['', '', '', '', '', '']);
        setAgreedToNotifications(false);
      } else {
        setError('Invalid OTP. Please check and try again.');
        // Clear OTP inputs for retry
        setOtp(['', '', '', '', '', '']);
        otpInputs.current[0]?.focus();
      }
    }, 1000);
  };

  const handleResendOtp = () => {
    if (!canResend) return;
    
    setOtp(['', '', '', '', '', '']);
    setError('');
    setTimer(30);
    setCanResend(false);
    alert('OTP has been resent to your mobile number');
    otpInputs.current[0]?.focus();
  };

  const handleChangeNumber = () => {
    setStep(1);
    setPhoneNumber('');
    setOtp(['', '', '', '', '', '']);
    setError('');
    setTimer(30);
    setCanResend(false);
  };

  return (
    <div className="min-h-screen gradient-noise-bg">
      {/* Mobile View */}
      <div className="block lg:hidden ">
        <div className="min-h-screen">
          {step === 1 ? (
            // Mobile Phone Number Step
            <div className="px-6 py-8">
              {/* Progress Bar */}
              <div className="mb-8">
                <div className="w-full bg-gray-200 h-1 rounded-full">
                  <div className="bg-teal-600 h-1 rounded-full w-1/3"></div>
                </div>
              </div>

              <div className="mb-8">
                <h1 className="text-2xl font-bold text-teal-700 mb-6 tracking-wide">
                  YOUR CONTACT<br />
                  INFORMATION
                </h1>
              </div>

              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-3 uppercase tracking-wide">
                    MOBILE NUMBER
                  </label>
                  <div className="relative">
                    <div className="flex border-2 border-teal-600 rounded-lg overflow-hidden bg-white">
                      <span className="inline-flex items-center px-3 py-3 bg-white text-gray-700 font-medium text-sm">
                        <img 
                          src={IndianFlag} 
                          alt="India Flag" 
                          className="w-6 h-4 mr-2 rounded-sm border border-gray-300 object-cover"
                        />
                        + 91
                      </span>
                      <input
                        type="tel"
                        value={phoneNumber}
                        onChange={(e) => {
                          const value = e.target.value.replace(/\D/g, '');
                          if (value.length <= 10) {
                            setPhoneNumber(value);
                            setError('');
                          }
                        }}
                        className="flex-1 px-3 py-3 text-base focus:outline-none bg-white"
                        placeholder=""
                        maxLength="10"
                      />
                    </div>
                  </div>
                  {error && (
                    <div className="mt-3 p-3 bg-red-50 border border-red-200 rounded-lg">
                      <p className="text-red-600 text-sm">{error}</p>
                    </div>
                  )}
                </div>

                <div className="mt-6">
                  <p className="text-sm text-gray-600 mb-4">
                    You will receive a verification code via <strong>SMS</strong> on this number.
                  </p>
                  
                  <div className="flex items-start space-x-3 mb-6">
                    <span className="text-red-500 mt-1">❤️</span>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      We understand how important your privacy is and assure you that communication will 
                      focus solely on what truly matters. Your comfort is our priority, and you can opt-out at any 
                      time you wish. Thank you for trusting us!
                    </p>
                  </div>

                  <div className="flex items-start space-x-3 mb-8">
                    <input
                      type="checkbox"
                      id="notifications"
                      checked={agreedToNotifications}
                      onChange={(e) => setAgreedToNotifications(e.target.checked)}
                      className="mt-1 w-4 h-4 text-teal-600 border-gray-300 rounded focus:ring-teal-500"
                    />
                    <label htmlFor="notifications" className="text-sm text-gray-600">
                      I agree to receive notifications for CollMeet via SMS, WhatsApp, Snapchat or Line.
                    </label>
                  </div>
                </div>

                <button
                  onClick={handlePhoneSubmit}
                  disabled={isLoading || phoneNumber.length !== 10}
                  className="w-full bg-gray-300 text-gray-500 py-4 px-6 rounded-full disabled:opacity-50 disabled:cursor-not-allowed transition-all font-medium text-base"
                >
                  {isLoading ? (
                    <div className="flex items-center justify-center">
                      <div className="w-5 h-5 border-2 border-gray-400 border-t-gray-600 rounded-full animate-spin mr-3"></div>
                      SENDING...
                    </div>
                  ) : 'PROCEED TO VERIFY'}
                  <span className="ml-2">→</span>
                </button>
              </div>
            </div>
          ) : (
            // Mobile OTP Step
            <div className="px-6 py-8">
              {/* Back Button */}
              <button onClick={handleChangeNumber} className="mb-6 p-2">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>

              {/* Progress Bar */}
              <div className="mb-8">
                <div className="w-full bg-gray-200 h-1 rounded-full">
                  <div className="bg-teal-600 h-1 rounded-full w-2/3"></div>
                </div>
              </div>

              <div className="mb-8">
                <h1 className="text-2xl font-bold text-teal-700 mb-6 tracking-wide">
                  YOUR CONTACT INFORMATION
                </h1>
                
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700 mb-3 uppercase tracking-wide">
                    MOBILE WITH COUNTRY CODE
                  </label>
                  <div className="flex border-2 border-teal-600 rounded-lg overflow-hidden bg-white">
                    <span className="inline-flex items-center px-3 py-3 bg-white text-gray-700 font-medium text-sm">
                      <img 
                        src={IndianFlag} 
                        alt="India Flag" 
                        className="w-6 h-4 mr-2 rounded-sm border border-gray-300 object-cover"
                      />
                      + 91
                    </span>
                  </div>
                </div>

                <p className="text-sm text-gray-600 mb-4">
                  You will receive a verification code via <strong>SMS</strong> on this number.
                </p>
                
                <div className="flex items-start space-x-3 mb-6">
                  <span className="text-red-500 mt-1">❤️</span>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    We understand how important your privacy is and assure you that communication will 
                    focus solely on what truly matters. Your comfort is our priority, and you can opt-out at any 
                    time you wish. Thank you for trusting us!
                  </p>
                </div>

                <div className="flex items-start space-x-3 mb-8">
                  <input
                    type="checkbox"
                    id="notifications-otp"
                    checked={true}
                    readOnly
                    className="mt-1 w-4 h-4 text-teal-600 border-gray-300 rounded focus:ring-teal-500"
                  />
                  <label className="text-sm text-gray-600">
                    I agree to receive notifications for CollMeet via SMS, WhatsApp, Snapchat or Line.
                  </label>
                </div>
              </div>

              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-4 uppercase tracking-wide">
                    ENTER OTP
                  </label>
                  <div className="flex gap-2 justify-center mb-4">
                    {otp.map((digit, index) => (
                      <input
                        key={index}
                        ref={(el) => (otpInputs.current[index] = el)}
                        type="text"
                        value={digit}
                        onChange={(e) => handleOtpChange(index, e.target.value)}
                        onKeyDown={(e) => handleOtpKeyDown(index, e)}
                        className="w-12 h-12 text-center text-lg font-bold border-2 border-gray-300 rounded-lg focus:border-teal-500 focus:ring-2 focus:ring-teal-200 outline-none transition-all"
                        maxLength="1"
                        inputMode="numeric"
                      />
                    ))}
                  </div>
                  
                  {/* Timer and Resend */}
                  <div className="text-center mb-4">
                    {!canResend ? (
                      <p className="text-sm text-gray-500">
                        Resend OTP in <span className="font-semibold text-teal-600">{timer}s</span>
                      </p>
                    ) : (
                      <button
                        onClick={handleResendOtp}
                        className="text-sm text-teal-600 hover:text-teal-700 font-semibold hover:underline"
                      >
                        RESEND OTP
                      </button>
                    )}
                  </div>

                  {error && (
                    <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-lg">
                      <p className="text-red-600 text-sm text-center">{error}</p>
                    </div>
                  )}
                  
                  {/* Demo info */}
                  <div className="mb-6 p-3 bg-blue-50 border border-blue-200 rounded-lg">
                    <p className="text-blue-800 text-sm text-center">
                      💡 Demo: Valid OTP is <span className="font-bold">123455</span>
                    </p>
                  </div>
                </div>

                <button
                  onClick={handleOtpSubmit}
                  disabled={isLoading || otp.join('').length !== 6}
                  className="w-full bg-gray-300 text-gray-500 py-4 px-6 rounded-full disabled:opacity-50 disabled:cursor-not-allowed transition-all font-medium text-base"
                >
                  {isLoading ? (
                    <div className="flex items-center justify-center">
                      <div className="w-5 h-5 border-2 border-gray-400 border-t-gray-600 rounded-full animate-spin mr-3"></div>
                      VERIFYING...
                    </div>
                  ) : 'PROCEED TO VERIFY'}
                  <span className="ml-2">→</span>
                </button>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Desktop View - Single Viewport Layout */}
      <div className="hidden lg:block min-h-screen relative">
        {/* Back arrow - positioned absolute */}
        {step === 2 && (
          <button 
            onClick={handleChangeNumber} 
            className="absolute top-12 left-12 p-2 hover:bg-white/20 rounded-full transition-colors z-20"
          >
            <svg className="w-8 h-8 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
        )}

        <div className="flex min-h-screen">
          {/* Left side - Text and Illustration */}
          <div className="w-1/2 flex flex-col px-16 py-16 h-screen">
            {/* Text content */}
            <div className="mb-8 flex-shrink-0">
              <h1 className="text-5xl font-bold text-teal-700 mb-3 leading-tight">
                LET'S GET YOU<br />
                SIGNED IN
              </h1>
              <p className="text-lg text-gray-800 font-normal">
                The process is pretty simple
              </p>
            </div>
            
            {/* Spacer to push illustration to bottom */}
            <div className="flex-grow"></div>
            
            {/* Illustration - positioned at bottom */}
            <div className="flex-shrink-0 pb-8">
              <div className="max-w-sm">
                <img 
                  src={SignInIllustration}
                  alt="Sign in illustration" 
                  className="w-[75%] h-auto max-w-xs bottom-0  absolute  mx-auto filter grayscale "
                  style={{ 
                    filter: 'grayscale(100%) contrast(1.2)',
                    mixBlendMode: 'multiply'
                  }}
                />
              </div>
            </div>
          </div>

          {/* Right side - Form */}
          <div className="w-1/2 flex flex-col justify-start px-16 py-16 h-screen overflow-y-auto">
            <div className="max-w-md mx-auto w-full">
              {/* Progress indicator line */}
              <div className="mb-8">
                <div className="flex items-center space-x-4">
                  <div className="flex-1 h-1 bg-teal-600 rounded-full"></div>
                  <div className={`flex-1 h-1 rounded-full ${step === 2 ? 'bg-teal-600' : 'bg-gray-200'}`}></div>
                </div>
              </div>

              <div className="mb-6">
                <h2 className="text-lg font-bold text-teal-700 mb-1 uppercase tracking-wider">
                  YOUR CONTACT INFORMATION
                </h2>
              </div>

              <div className="space-y-4">
                <div>
                  <label className="block text-xs font-medium text-gray-700 mb-2 uppercase tracking-wide">
                    MOBILE WITH COUNTRY CODE
                  </label>
                  <div className="relative">
                    <div className="flex border-2 border-teal-600 rounded-lg overflow-hidden bg-white">
                      <span className="inline-flex items-center px-4 py-4 bg-white text-gray-700 font-medium">
                        <img 
                          src={IndianFlag}
                          alt="India Flag" 
                          className="w-6 h-4 mr-2 rounded-sm border border-gray-300 object-cover"
                        />
                        + 91
                      </span>
                      {step === 1 && (
                        <input
                          type="tel"
                          value={phoneNumber}
                          onChange={(e) => {
                            const value = e.target.value.replace(/\D/g, '');
                            if (value.length <= 10) {
                              setPhoneNumber(value);
                              setError('');
                            }
                          }}
                          className="flex-1 px-4 py-4 text-base focus:outline-none bg-white"
                          placeholder=""
                          maxLength="10"
                        />
                      )}
                      {step === 2 && (
                        <div className="flex-1 px-4 py-4 text-base bg-white flex items-center justify-between">
                          <span>{phoneNumber}</span>
                          <button
                            onClick={handleChangeNumber}
                            className="text-teal-600 hover:text-teal-700 text-sm font-medium uppercase tracking-wide"
                          >
                            CHANGE
                          </button>
                        </div>
                      )}
                    </div>
                  </div>
                  {error && (
                    <div className="mt-3 p-3 bg-red-50 border border-red-200 rounded-lg">
                      <p className="text-red-600 text-sm">{error}</p>
                    </div>
                  )}
                </div>

                <div className="space-y-4">
                  <p className="text-sm text-gray-600">
                    You will receive a verification code via <strong>SMS</strong> on this number.
                  </p>
                  
                  <div className="flex items-start space-x-3">
                    <span className="text-red-500 mt-1">❤️</span>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      We understand how important your privacy is and assure you that communication will 
                      focus solely on what truly matters. Your comfort is our priority, and you can opt-out at any 
                      time you wish. Thank you for trusting us!
                    </p>
                  </div>

                  <div className="flex items-start space-x-3">
                    <input
                      type="checkbox"
                      id="notifications-desktop"
                      checked={step === 1 ? agreedToNotifications : true}
                      onChange={step === 1 ? (e) => setAgreedToNotifications(e.target.checked) : undefined}
                      readOnly={step === 2}
                      className="mt-1 w-4 h-4 text-teal-600 border-gray-300 rounded focus:ring-teal-500"
                    />
                    <label htmlFor="notifications-desktop" className="text-sm text-gray-600">
                      I agree to receive notifications for CollMeet via SMS, WhatsApp, Snapchat or Line.
                    </label>
                  </div>
                </div>

                {/* OTP Section - only show in step 2 */}
                {step === 2 && (
                  <div className="space-y-4">
                    <label className="block text-sm font-medium text-gray-700 uppercase tracking-wide">
                      ENTER OTP
                    </label>
                    <div className="flex gap-3 mb-4">
                      {otp.map((digit, index) => (
                        <input
                          key={index}
                          ref={(el) => (otpInputs.current[index] = el)}
                          type="text"
                          value={digit}
                          onChange={(e) => handleOtpChange(index, e.target.value)}
                          onKeyDown={(e) => handleOtpKeyDown(index, e)}
                          className="w-12 h-12 text-center text-lg font-bold border-2 border-gray-300 rounded-lg focus:border-teal-500 focus:ring-2 focus:ring-teal-200 outline-none transition-all"
                          maxLength="1"
                          inputMode="numeric"
                        />
                      ))}
                    </div>
                    
                    {/* Timer and Resend */}
                    <div className="text-left mb-4">
                      {!canResend ? (
                        <p className="text-sm text-gray-500">
                          Resend OTP in <span className="font-semibold text-teal-600">{timer}s</span>
                        </p>
                      ) : (
                        <button
                          onClick={handleResendOtp}
                          className="text-sm text-teal-600 hover:text-teal-700 font-semibold hover:underline uppercase tracking-wide"
                        >
                          RESEND OTP
                        </button>
                      )}
                    </div>

                    {/* Demo info */}
                    <div className="mb-4 p-3 bg-blue-50 border border-blue-200 rounded-lg">
                      <p className="text-blue-800 text-sm">
                        💡 Demo: Valid OTP is <span className="font-bold">123455</span>
                      </p>
                    </div>
                  </div>
                )}

                <button
                  onClick={step === 1 ? handlePhoneSubmit : handleOtpSubmit}
                  disabled={isLoading || (step === 1 && phoneNumber.length !== 10) || (step === 2 && otp.join('').length !== 6)}
                  className="w-full bg-gray-300 text-gray-500 py-4 px-6 rounded-full disabled:opacity-50 disabled:cursor-not-allowed transition-all font-medium text-base flex items-center justify-center"
                >
                  {isLoading ? (
                    <div className="flex items-center">
                      <div className="w-5 h-5 border-2 border-gray-400 border-t-gray-600 rounded-full animate-spin mr-3"></div>
                      {step === 1 ? 'SENDING...' : 'VERIFYING...'}
                    </div>
                  ) : (
                    <>
                      PROCEED TO VERIFY
                      <span className="ml-2">→</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
        
        {/* Green section at bottom - full width */}
        <div className="absolute bottom-0 left-0 right-0 h-12 noise-bg-new bulge-topest  z-0"></div>
      </div>
    </div>
  );
};

export default OTPVerification;