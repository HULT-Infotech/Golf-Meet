import React, { useState } from 'react';
import StageIndicator from "../components/StageIndictor"; 

const RightSection = ({ 
  // New props for golfer matching
  dateOfBirth = '',
  setDateOfBirth,
  selectedGender = '',
  setSelectedGender,
  error = '',
  setError,
  isLoading = false,
  handleFormSubmit,
  // Stage indicator props
  currentStage = 2,
  totalStages = 10,
  progressPercentage = 20 
}) => {
  // Local state if parent doesn't provide state management
  const [localDateOfBirth, setLocalDateOfBirth] = useState('');
  const [localSelectedGender, setLocalSelectedGender] = useState('');
  
  // Use local state if parent state is not provided
  const currentDateOfBirth = setDateOfBirth ? dateOfBirth : localDateOfBirth;
  const currentSelectedGender = setSelectedGender ? selectedGender : localSelectedGender;
  
  const handleDateChange = (e) => {
    let value = e.target.value;
    
    // Allow backspace and deletion
    if (value.length < currentDateOfBirth.length) {
      if (setDateOfBirth) {
        setDateOfBirth(value);
      } else {
        setLocalDateOfBirth(value);
      }
      if (setError) setError('');
      return;
    }
    
    // Remove any non-numeric characters except -
    value = value.replace(/[^\d-]/g, '');
    
    // Auto-format as mm-dd-yyyy only when adding characters
    if (value.length === 2 && !value.includes('-')) {
      value = value + '-';
    } else if (value.length === 5 && value.split('-').length === 2) {
      value = value + '-';
    }
    
    // Limit to mm-dd-yyyy format
    if (value.length > 10) {
      value = value.substring(0, 10);
    }
    
    if (setDateOfBirth) {
      setDateOfBirth(value);
    } else {
      setLocalDateOfBirth(value);
    }
    
    // Validate format and show error if incorrect
    if (value.length === 10) {
      const isValidFormat = /^\d{2}-\d{2}-\d{4}$/.test(value);
      if (!isValidFormat) {
        if (setError) setError('Please enter date in MM-DD-YYYY format');
      } else {
        if (setError) setError('');
      }
    } else {
      if (setError) setError('');
    }
  };

  const handleGenderSelect = (gender) => {
    if (setSelectedGender) {
      setSelectedGender(gender);
    } else {
      setLocalSelectedGender(gender);
    }
    if (setError) setError('');
  };

  const formatDisplayDate = (dateString) => {
    if (!dateString || dateString.length < 10) return '';
    
    try {
      // Parse dd/mm/yyyy format
      const parts = dateString.split('/');
      if (parts.length !== 3) return '';
      
      const day = parseInt(parts[0]);
      const month = parseInt(parts[1]);
      const year = parseInt(parts[2]);
      
      // Basic validation
      if (day < 1 || day > 31 || month < 1 || month > 12 || year < 1900 || year > 2100) {
        return '';
      }
      
      // Create date object (month is 0-indexed in JS)
      const date = new Date(year, month - 1, day);
      
      // Check if date is valid
      if (isNaN(date.getTime()) || 
          date.getDate() !== day || 
          date.getMonth() !== month - 1 || 
          date.getFullYear() !== year) {
        return '';
      }
      
      const options = { day: 'numeric', month: 'long', year: 'numeric' };
      return date.toLocaleDateString('en-GB', options);
    } catch (error) {
      return '';
    }
  };

  const isFormValid = currentDateOfBirth && currentSelectedGender;

  const handleSubmit = () => {
    if (handleFormSubmit) {
      handleFormSubmit();
    } else {
      console.log('Form submitted with:', {
        dateOfBirth: currentDateOfBirth,
        gender: currentSelectedGender
      });
    }
  };

  // Material-UI style icons as SVG components
  const ManIcon = ({ color = "currentColor" }) => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill={color}>
      <path d="M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2ZM8.5 7C7.67 7 7 7.67 7 8.5V11H9V22H11V14H13V22H15V11H17V8.5C17 7.67 16.33 7 15.5 7H8.5Z" />
    </svg>
  );

  const WomanIcon = ({ color = "currentColor" }) => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill={color}>
      <path d="M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2ZM9 7C7.9 7 7 7.9 7 9V11C7 12.1 7.9 13 9 13H10V22H14V13H15C16.1 13 17 12.1 17 11V9C17 7.9 16.1 7 15 7H9Z" />
    </svg>
  );

  const BlockIcon = ({ color = "currentColor" }) => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2">
      <circle cx="12" cy="12" r="10"/>
      <path d="m4.9 4.9 14.2 14.2"/>
    </svg>
  );

  return (
    <div className="w-full lg:w-1/2 flex flex-col justify-start px-6 py-8 lg:px-16 lg:py-28 min-h-screen lg:h-screen overflow-y-auto">
      <div className="max-w-auto mx-auto w-full">
        {/* Progress indicator - now using StageIndicator component */}
        <StageIndicator 
          currentStage={currentStage}
          totalStages={totalStages}
          progressPercentage={progressPercentage}
          showStageText={true}
        />

        <div className="mb-6 lg:mb-6">
          <h2 className="text-xl lg:text-2xl font-bold text-[#014D4E] font-quattrocento my-6 lg:my-10 uppercase tracking-wider">
            MATCH WITH SIMILAR GOLFERS
          </h2>
        </div>

        <div className="space-y-4">
          <div>
            <div className="flex items-center mb-3">
              <div className="flex items-center mr-6">
                <span className="text-xl mr-3">🎂</span>
                <label className="text-xs lg:text-xs font-medium text-[#000000] uppercase tracking-wide whitespace-nowrap">
                  YOUR DATE OF BIRTH
                </label>
              </div>
              <div className="relative flex-1">
                <div className="border-2 w-full lg:max-w-md border-[#014D4E] rounded-lg overflow-hidden bg-white">
                  <input
                    type="text"
                    value={currentDateOfBirth}
                    onChange={handleDateChange}
                    className="flex-1 px-3 lg:px-4 py-3 lg:py-4 text-base focus:outline-none bg-white w-full font-medium text-[#014D4E]"
                    placeholder="dd/mm/yyyy"
                  />
                </div>
              </div>
            </div>
            {currentDateOfBirth && (
              <p className="text-sm text-gray-600 font-normal mt-1" style={{ marginLeft: '200px' }}>
                {formatDisplayDate(currentDateOfBirth)}
              </p>
            )}
            {error && (
              <div className="mt-3 p-3 bg-red-50 border border-red-200 rounded-lg">
                <p className="text-red-600 text-sm">{error}</p>
              </div>
            )}
          </div>

          <div className="space-y-4">
            <div className="flex items-center">
              <div className="flex items-center mr-6">
                <span className="text-xl mr-3">🏌️</span>
                <label className="text-xs lg:text-xs font-medium text-[#000000] uppercase tracking-wide whitespace-nowrap">
                  GENDER
                </label>
              </div>
              <div className="flex justify-start space-x-6 lg:space-x-8 flex-1">
                {/* Man Option */}
                <div 
                  className="flex flex-col items-center cursor-pointer transition-all"
                  onClick={() => handleGenderSelect('MAN')}
                >
                  <div className={`w-16 h-16 lg:w-20 lg:h-20 rounded-full flex items-center justify-center transition-all ${
                    currentSelectedGender === 'MAN' 
                      ? 'bg-[#014D4E]' 
                      : 'bg-gray-300'
                  }`}>
                    <ManIcon color={currentSelectedGender === 'MAN' ? 'white' : '#014D4E'} />
                  </div>
                  <span className="mt-2 text-xs font-medium text-gray-700 uppercase tracking-wide">MAN</span>
                </div>

                {/* Woman Option */}
                <div 
                  className="flex flex-col items-center cursor-pointer transition-all"
                  onClick={() => handleGenderSelect('WOMAN')}
                >
                  <div className={`w-16 h-16 lg:w-20 lg:h-20 rounded-full flex items-center justify-center transition-all ${
                    currentSelectedGender === 'WOMAN' 
                      ? 'bg-[#014D4E]' 
                      : 'bg-gray-300'
                  }`}>
                    <WomanIcon color={currentSelectedGender === 'WOMAN' ? 'white' : '#014D4E'} />
                  </div>
                  <span className="mt-2 text-xs font-medium text-gray-700 uppercase tracking-wide">WOMAN</span>
                </div>

                {/* Other Option */}
                <div 
                  className="flex flex-col items-center cursor-pointer transition-all"
                  onClick={() => handleGenderSelect('OTHER')}
                >
                  <div className={`w-16 h-16 lg:w-20 lg:h-20 rounded-full flex items-center justify-center transition-all ${
                    currentSelectedGender === 'OTHER' 
                      ? 'bg-[#014D4E]' 
                      : 'bg-gray-300'
                  }`}>
                    <BlockIcon color={currentSelectedGender === 'OTHER' ? 'white' : '#014D4E'} />
                  </div>
                  <span className="mt-2 text-xs font-medium text-gray-700 uppercase tracking-wide">OTHER</span>
                </div>
              </div>
            </div>

            <div className="flex items-start space-x-3 lg:space-x-6 mb-8 lg:mb-40">
            </div>
          </div>

          <button
            onClick={handleSubmit}
            disabled={isLoading || !isFormValid}
            className="w-full lg:max-w-xs py-3 px-6 rounded-full disabled:opacity-50 disabled:cursor-not-allowed transition-all font-medium text-sm tracking-wide flex items-center justify-between"
            style={{
              background:
                isFormValid && !isLoading
                  ? 'linear-gradient(90deg, #1f6c5d 0%, #064c45 100%)'
                  : '#d1d5db',
              color:
                isFormValid && !isLoading
                  ? 'white'
                  : '#6b7280',
              height: '48px', // Fix height to prevent resizing
            }}
          >
            {isLoading ? (
              <>
                <div className="flex items-center justify-center w-full">
                  <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                  <span className="text-white">PROCESSING...</span>
                </div>
              </>
            ) : (
              <>
                <span className="text-center flex-1">CONTINUE</span>
                <div className="w-8 h-8 rounded-full flex items-center justify-center ml-2" style={{ backgroundColor: '#5f8f91' }}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#004042"  // Dark teal color
                    strokeWidth="4"   // Thicker stroke
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