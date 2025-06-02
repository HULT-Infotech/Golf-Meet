import React from 'react';
import IndianFlag from "../assets/india.svg";

const RightSection = ({ 
  phoneNumber, 
  setPhoneNumber, 
  error, 
  setError, 
  isLoading, 
  agreedToNotifications, 
  setAgreedToNotifications, 
  handlePhoneSubmit 
}) => {
  return (
    <div className="w-full lg:w-1/2 flex flex-col justify-start px-6 py-8 lg:px-16 lg:py-28 min-h-screen lg:h-screen overflow-y-auto">
      <div className="max-w-auto mx-auto w-full">
        {/* Progress indicator line */}
        <div className="mb-6 lg:mb-8">
          <div className="flex items-center space-x-4">
            <div className="flex-1 h-1 bg-teal-600 rounded-full"></div>
          </div>
        </div>

        <div className="mb-6 lg:mb-6">
          <h2 className="text-xl lg:text-2xl font-bold text-[#014D4E] font-quattrocento my-6 lg:my-10 uppercase tracking-wider">
            YOUR CONTACT INFORMATION
          </h2>
        </div>

        <div className="space-y-4">
          <div>
            <label className="block text-xs lg:text-xs font-medium text-[#000000] mb-3 uppercase tracking-wide">
              MOBILE WITH COUNTRY CODE
            </label>
            <div className="relative">
              <div className="flex border-2 w-full lg:max-w-md border-[#014D4E] rounded-lg overflow-hidden bg-white">
                <span className="inline-flex items-center px-3 lg:px-4 py-3 lg:py-4 bg-white text-gray-700 font-medium text-sm lg:text-base">
                  <img 
                    src={IndianFlag}
                    alt="India Flag" 
                    className="w-5 lg:w-6 h-3 lg:h-4 mr-2 rounded-sm border border-gray-300 object-cover"
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
                  className="flex-1 px-3 lg:px-4 py-3 lg:py-4 text-base focus:outline-none bg-white"
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

          <div className="space-y-4">
            <p className="text-sm text-gray-600 font-normal mt-1">
              You will receive a verification code via <strong>SMS</strong> on this number.
            </p>
            
            <div className="flex items-start space-x-3">
              <p className="text-sm max-w-xl mt-4 lg:mt-6 mb-3 text-gray-600 leading-relaxed">
                ❤️ We understand how important your privacy is and assure you that communication will 
                focus solely on what truly matters. Your comfort is our priority, and you can opt-out at any 
                time you wish. Thank you for trusting us!
              </p>
            </div>

            <div className="flex items-start space-x-3 lg:space-x-6 mb-8 lg:mb-40">
              <input
                type="checkbox"
                id="notifications-desktop"
                checked={agreedToNotifications}
                onChange={(e) => setAgreedToNotifications(e.target.checked)}
                className="mt-1 w-4 h-4 text-teal-600 border-gray-300 rounded focus:ring-teal-500 flex-shrink-0"
              />
              <label htmlFor="notifications-desktop" className="text-sm text-gray-600">
                I agree to receive notifications for CollMeet via SMS, WhatsApp, Snapchat or Line.
              </label>
            </div>
          </div>

          <button
            onClick={handlePhoneSubmit}
            disabled={isLoading || phoneNumber.length !== 10 || !agreedToNotifications}
            className="w-full lg:max-w-xs py-3 lg:py-3 px-6 rounded-full disabled:opacity-50 disabled:cursor-not-allowed transition-all font-medium text-sm lg:text-sm tracking-wide flex items-center justify-between lg:justify-between"
            style={{
              background: (phoneNumber.length === 10 && agreedToNotifications && !isLoading) 
                ? `linear-gradient(0deg, #014D4E, #014D4E), linear-gradient(279.93deg, rgba(255, 180, 30, 0) 70.48%, rgba(255, 180, 30, 0.3) 100%)`
                : '#d1d5db',
              color: (phoneNumber.length === 10 && agreedToNotifications && !isLoading) ? 'white' : '#6b7280'
            }}
          >
            {isLoading ? (
              <div className="flex items-center justify-center w-full">
                <div className="w-4 h-4 border-2 border-gray-400 border-t-white rounded-full animate-spin mr-2"></div>
                SUBMITTING...
              </div>
            ) : (
              <>
                <span className="text-center lg:text-left flex-1 lg:flex-none">PROCEED TO VERIFY</span>
                <div className="w-8 h-8 bg-teal-600 rounded-full flex items-center justify-center flex-shrink-0 ml-2 lg:ml-0">
                  <span className="text-white text-sm font-bold">→</span>
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