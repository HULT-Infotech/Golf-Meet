import React, { useState, useEffect } from 'react';

// Mock StageIndicator component
const StageIndicator = ({ currentStage, totalStages, progressPercentage }) => (
  <div className="mb-8">
    <div className="w-full bg-gray-200 rounded-full h-1">
      <div 
        className="bg-teal-600 h-1 rounded-full transition-all duration-300" 
        style={{ width: `${progressPercentage}%` }}
      ></div>
    </div>
  </div>
);

const OtpRight = ({ 
  otpValue: propOtpValue = '',
  setOtpValue: propSetOtpValue,
  error: propError = '',
  setError: propSetError,
  isLoading: propIsLoading = false,
  phoneNumber = '9894394350',
  handleOtpSubmit: propHandleOtpSubmit,
  handleResendCode: propHandleResendCode,
  handleChangeNumber: propHandleChangeNumber,
  canResend: propCanResend = true,
  resendTimer: propResendTimer = 0,
  currentStage = 2,
  totalStages = 10,
  progressPercentage =20
}) => {
  // Internal state for demo purposes
  const [internalOtpValue, setInternalOtpValue] = useState('');
  const [internalError, setInternalError] = useState('');
  const [internalIsLoading, setInternalIsLoading] = useState(false);
  const [internalCanResend, setInternalCanResend] = useState(true);
  const [internalResendTimer, setInternalResendTimer] = useState(0);

  // Use props if provided, otherwise use internal state
  const otpValue = propOtpValue || internalOtpValue;
  const setOtpValue = propSetOtpValue || setInternalOtpValue;
  const error = propError || internalError;
  const setError = propSetError || setInternalError;
  const isLoading = propIsLoading || internalIsLoading;
  const canResend = propCanResend !== undefined ? propCanResend : internalCanResend;
  const resendTimer = propResendTimer || internalResendTimer;

  // Default handlers
  const handleOtpSubmit = propHandleOtpSubmit || (() => {
    if (otpValue.length === 6) {
      setInternalIsLoading(true);
      setInternalError('');
      // Simulate API call
      setTimeout(() => {
        if (otpValue === '123456') {
          alert('OTP Verified Successfully!');
        } else {
          setInternalError('Invalid OTP. Please try again.');
        }
        setInternalIsLoading(false);
      }, 2000);
    }
  });

  const handleResendCode = propHandleResendCode || (() => {
    setInternalCanResend(false);
    setInternalResendTimer(30);
    setInternalError('');
    alert('OTP resent successfully!');
  });

  const handleChangeNumber = propHandleChangeNumber || (() => {
    alert('Change number functionality');
  });

  // Resend timer countdown
  useEffect(() => {
    let interval;
    if (!canResend && resendTimer > 0) {
      interval = setInterval(() => {
        setInternalResendTimer(prev => {
          if (prev <= 1) {
            setInternalCanResend(true);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [canResend, resendTimer]);
  
  const handleOtpChange = (e) => {
    const value = e.target.value.replace(/\D/g, '');
    if (value.length <= 6) {
      setOtpValue(value);
      setError('');
    }
  };

  const handleOtpKeyDown = (e) => {
    if ([8, 9, 27, 13, 46].indexOf(e.keyCode) !== -1 ||
        (e.keyCode === 65 && e.ctrlKey) ||
        (e.keyCode === 67 && e.ctrlKey) ||
        (e.keyCode === 86 && e.ctrlKey) ||
        (e.keyCode === 88 && e.ctrlKey)) {
      return;
    }
    if ((e.shiftKey || (e.keyCode < 48 || e.keyCode > 57)) &&
        (e.keyCode < 96 || e.keyCode > 105)) {
      e.preventDefault();
    }
  };

  return (
    <div className="w-full lg:w-1/2 flex flex-col justify-start px-6 py-8 lg:px-16 lg:py-28 min-h-screen lg:h-screen">
      <div className="max-w-auto mx-auto w-full">
        <StageIndicator 
          currentStage={currentStage}
          totalStages={totalStages}
          progressPercentage={progressPercentage}
        />

        <div className="mb-6 lg:mb-6">
          <h2 className="text-xl lg:text-2xl font-bold text-[#014D4E] font-quattrocento my-6 lg:my-10 uppercase tracking-wider">
            YOUR CONTACT INFORMATION
          </h2>
        </div>

        <div className="space-y-4">
          <div>
            <p className="text-sm text-gray-600 mb-2">
              We have sent verification code to <strong>+91 {phoneNumber}</strong>
            </p>
            
            <button 
              onClick={handleChangeNumber}
              className="text-xs text-[#014D4E] hover:underline font-medium uppercase tracking-wide mb-6"
            >
              CHANGE MOBILE NUMBER
            </button>
            
            <div className="mb-4">
              <label className="block text-xs lg:text-xs font-medium text-[#000000] uppercase tracking-wide">
                ENTER VERIFICATION CODE
              </label>
            </div>

            <div className="relative mb-6">
              <input
                type="text"
                value={otpValue}
                onChange={handleOtpChange}
                onKeyDown={handleOtpKeyDown}
                className="w-full lg:max-w-md px-4 py-3 lg:py-4 text-lg font-mono tracking-[0.5em] text-center border-2 border-[#014D4E] rounded-lg focus:outline-none bg-white"
                placeholder="1 2 3 4 5 6"
                maxLength="6"
              />
            </div>

            {error && (
              <div className="mt-3 p-3 bg-red-50 border border-red-200 rounded-lg">
                <p className="text-red-600 text-sm">{error}</p>
              </div>
            )}

            <div className="space-y-4 mb-8 lg:mb-40">
              <p className="text-sm text-gray-600">
                Did not receive the verification code yet?
              </p>
              {canResend ? (
                <button
                  onClick={handleResendCode}
                  className="text-sm text-[#014D4E] hover:underline font-medium uppercase tracking-wide"
                >
                  RESEND CODE
                </button>
              ) : (
                <p className="text-sm text-gray-500">
                  Resend code in {resendTimer}s
                </p>
              )}
            </div>
          </div>

          <button
            onClick={handleOtpSubmit}
            disabled={isLoading || otpValue.length !== 6}
            className="w-full lg:max-w-xs py-3 px-6 rounded-full disabled:opacity-50 disabled:cursor-not-allowed transition-all font-medium text-sm tracking-wide flex items-center justify-between"
            style={{
              background:
                otpValue.length === 6 && !isLoading
                  ? 'linear-gradient(90deg, #1f6c5d 0%, #064c45 100%)'
                  : '#d1d5db',
              color:
                otpValue.length === 6 && !isLoading
                  ? 'white'
                  : '#6b7280',
              height: '48px',
            }}
          >
            {isLoading ? (
              <div className="flex items-center justify-center w-full">
                <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                <span className="text-white">VERIFYING...</span>
              </div>
            ) : (
              <>
                <span className="text-center flex-1">PROCEED TO VERIFY</span>
                <div className="w-8 h-8 rounded-full flex items-center justify-center ml-2" style={{ backgroundColor: '#5f8f91' }}>
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
  );
};

export default OtpRight;