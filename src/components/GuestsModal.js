import React, { useState } from 'react';

const GuestsModal = ({ isOpen, onClose, onApplyGuests, initialGuests = { adults: 0, children: 0, bedrooms: 0, pets: false } }) => {
  const [guests, setGuests] = useState(initialGuests);

  const handleIncrement = (type) => {
    setGuests(prev => ({
      ...prev,
      [type]: prev[type] + 1
    }));
  };

  const handleDecrement = (type) => {
    setGuests(prev => ({
      ...prev,
      [type]: Math.max(0, prev[type] - 1)
    }));
  };

  const handlePetToggle = () => {
    setGuests(prev => ({
      ...prev,
      pets: !prev.pets
    }));
  };

  const handleApply = () => {
    onApplyGuests(guests);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-30 flex items-start justify-center z-50 pt-4">
      <div className="absolute inset-0" onClick={onClose}></div>
      <div className="relative bg-white w-[343px] h-[648px] rounded-2xl shadow-lg flex flex-col overflow-hidden">
        {/* Modal Header */}
        <div className="bg-white border-b border-[#eae5e0] px-4 py-2.5">
          <div className="flex items-center justify-between">
            <button onClick={onClose} className="p-2 rounded-full hover:bg-gray-100">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15 5L5 15M5 5l10 10" stroke="#605C57" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            <h2 className="text-lg font-bold text-[#2b2926]">Guests</h2>
            <div className="w-10"></div> {/* Spacer for centering */}
          </div>
        </div>

        {/* Modal Content */}
        <div className="flex-1 px-6 py-3 overflow-y-auto">
          {/* Adults Picker */}
          <div className="flex items-center justify-between py-3">
            <p className="text-base font-normal text-[#1d1d1d]">Adults</p>
            <div className="flex items-center">
              <button
                onClick={() => handleDecrement('adults')}
                className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center hover:bg-gray-300 disabled:opacity-50 disabled:cursor-not-allowed"
                disabled={guests.adults === 0}
              >
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4 8h8" stroke="#1d1d1d" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </button>
              <span className="w-12 text-center text-2xl font-bold text-[#1d1d1d] mx-2">
                {guests.adults}
              </span>
              <button
                onClick={() => handleIncrement('adults')}
                className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center hover:bg-gray-300"
              >
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M8 4v8M4 8h8" stroke="#1d1d1d" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </button>
            </div>
          </div>

          {/* Children Picker */}
          <div className="flex items-center justify-between py-3">
            <p className="text-base font-normal text-[#1d1d1d]">Children</p>
            <div className="flex items-center">
              <button
                onClick={() => handleDecrement('children')}
                className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center hover:bg-gray-300 disabled:opacity-50 disabled:cursor-not-allowed"
                disabled={guests.children === 0}
              >
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4 8h8" stroke="#1d1d1d" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </button>
              <span className="w-12 text-center text-2xl font-bold text-[#1d1d1d] mx-2">
                {guests.children}
              </span>
              <button
                onClick={() => handleIncrement('children')}
                className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center hover:bg-gray-300"
              >
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M8 4v8M4 8h8" stroke="#1d1d1d" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </button>
            </div>
          </div>

          {/* Bedrooms Picker */}
          <div className="flex items-center justify-between py-3">
            <p className="text-base font-normal text-[#1d1d1d]">Bedrooms</p>
            <div className="flex items-center">
              <button
                onClick={() => handleDecrement('bedrooms')}
                className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center hover:bg-gray-300 disabled:opacity-50 disabled:cursor-not-allowed"
                disabled={guests.bedrooms === 0}
              >
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4 8h8" stroke="#1d1d1d" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </button>
              <span className="w-12 text-center text-2xl font-bold text-[#1d1d1d] mx-2">
                {guests.bedrooms}
              </span>
              <button
                onClick={() => handleIncrement('bedrooms')}
                className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center hover:bg-gray-300"
              >
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M8 4v8M4 8h8" stroke="#1d1d1d" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </button>
            </div>
          </div>

          {/* Pet Checkbox */}
          <div className="flex items-center justify-between py-3">
            <p className="text-base font-normal text-[#1d1d1d]">I'm traveling with a pet</p>
            <label className="flex items-center">
              <input
                type="checkbox"
                checked={guests.pets}
                onChange={handlePetToggle}
                className="w-6 h-6 text-[#00809d] border border-gray-300 rounded focus:ring-[#00809d] focus:ring-2"
              />
            </label>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="bg-white border-t border-[#eae5e0] px-6 py-4">
          <button
            onClick={handleApply}
            className="bg-[#00809d] text-white w-full py-3 px-6 rounded-lg font-semibold text-base hover:bg-[#006d8a] transition-colors"
          >
            Apply
          </button>
        </div>
      </div>
    </div>
  );
};

export default GuestsModal;
