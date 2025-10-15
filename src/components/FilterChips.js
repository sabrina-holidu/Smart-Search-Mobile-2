import React, { useState } from 'react';
import FiltersModal from './FiltersModal';
import GuestsModal from './GuestsModal';

const FilterChips = ({ keywordCount = 0, guestCount = null }) => {
  const [isFiltersModalOpen, setIsFiltersModalOpen] = useState(false);
  const [isGuestsModalOpen, setIsGuestsModalOpen] = useState(false);
  const [guests, setGuests] = useState({ adults: 0, children: 0, bedrooms: 0, pets: false });

  const handleFiltersClick = () => {
    setIsFiltersModalOpen(true);
  };

  const handleFiltersModalClose = () => {
    setIsFiltersModalOpen(false);
  };

  const handleApplyFilters = (filters) => {
    console.log('Applied filters:', filters);
    setIsFiltersModalOpen(false);
  };

  const handleGuestsClick = () => {
    setIsGuestsModalOpen(true);
  };

  const handleGuestsModalClose = () => {
    setIsGuestsModalOpen(false);
  };

  const handleApplyGuests = (newGuests) => {
    setGuests(newGuests);
    console.log('Applied guests:', newGuests);
    setIsGuestsModalOpen(false);
  };

  return (
    <>
      <div className="flex gap-2">
      {/* Guests Chip */}
      <div 
        className="bg-white border border-gray-300 rounded-full px-4 py-2 flex items-center gap-2 cursor-pointer hover:bg-gray-50"
        onClick={handleGuestsClick}
      >
        <div className="w-5 h-5 text-gray-800">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M6.6665 3.33301C5.28579 3.33301 4.1665 4.4523 4.1665 5.83301C4.1665 7.21372 5.28579 8.33301 6.6665 8.33301C8.04722 8.33301 9.1665 7.21372 9.1665 5.83301C9.1665 4.4523 8.04722 3.33301 6.6665 3.33301ZM5.83317 5.83301C5.83317 5.37277 6.20627 4.99967 6.6665 4.99967C7.12674 4.99967 7.49984 5.37277 7.49984 5.83301C7.49984 6.29325 7.12674 6.66634 6.6665 6.66634C6.20627 6.66634 5.83317 6.29325 5.83317 5.83301Z" fill="#2B2926"/>
            <path fillRule="evenodd" clipRule="evenodd" d="M1.6665 14.1663C1.6665 11.4049 3.90508 9.16634 6.6665 9.16634C9.42793 9.16634 11.6665 11.4049 11.6665 14.1663V14.4441C11.6665 15.2112 11.0447 15.833 10.2776 15.833H3.05539C2.28833 15.833 1.6665 15.2112 1.6665 14.4441V14.1663ZM6.6665 10.833C4.82556 10.833 3.33317 12.3254 3.33317 14.1663H9.99984C9.99984 12.3254 8.50745 10.833 6.6665 10.833Z" fill="#2B2926"/>
            <path fillRule="evenodd" clipRule="evenodd" d="M10.8332 5.83301C10.8332 4.4523 11.9525 3.33301 13.3332 3.33301C14.7139 3.33301 15.8332 4.4523 15.8332 5.83301C15.8332 7.21372 14.7139 8.33301 13.3332 8.33301C11.9525 8.33301 10.8332 7.21372 10.8332 5.83301ZM13.3332 4.99967C12.8729 4.99967 12.4998 5.37277 12.4998 5.83301C12.4998 6.29325 12.8729 6.66634 13.3332 6.66634C13.7934 6.66634 14.1665 6.29325 14.1665 5.83301C14.1665 5.37277 13.7934 4.99967 13.3332 4.99967Z" fill="#2B2926"/>
            <path d="M16.9443 15.833H13C13.213 15.4163 13.3332 14.9442 13.3332 14.4441V14.1663H16.6665C16.6665 12.3254 15.1741 10.833 13.3332 10.833C13.0457 10.833 12.7668 10.8694 12.5007 10.9378C12.2152 10.423 11.8635 9.94998 11.4572 9.53019C12.0365 9.29555 12.6697 9.16634 13.3332 9.16634C16.0946 9.16634 18.3332 11.4049 18.3332 14.1663V14.4441C18.3332 15.2112 17.7113 15.833 16.9443 15.833Z" fill="#2B2926"/>
          </svg>
        </div>
        <span className="text-sm font-medium text-gray-800">
          {guests.adults + guests.children > 0 ? `${guests.adults + guests.children} Guest${guests.adults + guests.children > 1 ? 's' : ''}` : 'Guests'}
        </span>
      </div>
      
      {/* Dates Chip */}
      <div className="bg-white border border-gray-300 rounded-full px-4 py-2 flex items-center gap-2">
        <div className="w-5 h-5 text-gray-800">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M6.24984 0.833008C6.71007 0.833008 7.08317 1.2061 7.08317 1.66634V2.49967H12.9165V1.66634C12.9165 1.2061 13.2896 0.833008 13.7498 0.833008C14.2101 0.833008 14.5832 1.2061 14.5832 1.66634V2.49967H14.9998C16.8408 2.49967 18.3332 3.99206 18.3332 5.83301V14.9997C18.3332 16.8406 16.8408 18.333 14.9998 18.333H4.99984C3.15889 18.333 1.6665 16.8406 1.6665 14.9997V5.83301C1.6665 3.99206 3.15889 2.49967 4.99984 2.49967H5.4165V1.66634C5.4165 1.2061 5.7896 0.833008 6.24984 0.833008ZM5.4165 4.16634H4.99984C4.07936 4.16634 3.33317 4.91253 3.33317 5.83301V7.49967H16.6665V5.83301C16.6665 4.91253 15.9203 4.16634 14.9998 4.16634H14.5832V5.37004C14.5832 5.83028 14.2101 6.20338 13.7498 6.20338C13.2896 6.20338 12.9165 5.83028 12.9165 5.37004V4.16634H7.08317V5.37004C7.08317 5.83028 6.71007 6.20338 6.24984 6.20338C5.7896 6.20338 5.4165 5.83028 5.4165 5.37004V4.16634ZM16.6665 9.16634H3.33317V14.9997C3.33317 15.9201 4.07936 16.6663 4.99984 16.6663H14.9998C15.9203 16.6663 16.6665 15.9201 16.6665 14.9997V9.16634Z" fill="#2B2926"/>
            <path d="M5.4165 10.833H7.08317V12.4997H5.4165V10.833Z" fill="#2B2926"/>
            <path d="M9.1665 10.833H10.8332V12.4997H9.1665V10.833Z" fill="#2B2926"/>
            <path d="M12.9165 10.833H14.5832V12.4997H12.9165V10.833Z" fill="#2B2926"/>
          </svg>
        </div>
        <span className="text-sm font-medium text-gray-800">Dates</span>
      </div>
      
      {/* Filters Chip */}
      <div 
        className="bg-white border border-gray-300 rounded-full px-4 py-2 flex items-center gap-2 relative cursor-pointer hover:bg-gray-50"
        onClick={handleFiltersClick}
      >
        <div className="w-5 h-5 text-gray-800">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M15.7126 5.83333H16.6667C17.125 5.83333 17.5 6.20833 17.5 6.66667C17.5 7.12501 17.125 7.5 16.6667 7.5L15.7124 7.50045C15.3537 8.70501 14.2378 9.58333 12.9167 9.58333C11.5957 9.58333 10.4798 8.70513 10.121 7.50071L3.33333 7.5C2.875 7.5 2.5 7.12501 2.5 6.66667C2.5 6.20833 2.875 5.83333 3.33333 5.83333H10.1208C10.4793 4.62855 11.5954 3.75 12.9167 3.75C14.2379 3.75 15.354 4.62855 15.7126 5.83333ZM11.9521 7.46178C11.7738 7.24571 11.6667 6.9687 11.6667 6.66667C11.6667 6.34652 11.787 6.05448 11.985 5.83333C12.2138 5.5776 12.5465 5.41667 12.9167 5.41667C13.2869 5.41667 13.6195 5.5776 13.8484 5.83333C13.8596 5.84585 13.8705 5.85859 13.8812 5.87155C14.0595 6.08762 14.1667 6.36464 14.1667 6.66667C14.1667 6.98725 14.046 7.27964 13.8476 7.5009C13.6187 7.75611 13.2864 7.91667 12.9167 7.91667C12.5283 7.91667 12.1814 7.73959 11.9521 7.46178Z" fill="#2B2926"/>
            <path fillRule="evenodd" clipRule="evenodd" d="M7.08333 16.25C8.40433 16.25 9.52022 15.3718 9.879 14.1674L16.6667 14.1667C17.125 14.1667 17.5 13.7917 17.5 13.3333C17.5 12.875 17.125 12.5 16.6667 12.5L9.8792 12.5C9.52063 11.2952 8.40457 10.4167 7.08333 10.4167C5.76209 10.4167 4.64603 11.2952 4.28746 12.5L3.33333 12.5C2.875 12.5 2.5 12.875 2.5 13.3333C2.5 13.7917 2.875 14.1667 3.33333 14.1667L4.28758 14.1671C4.64629 15.3717 5.76224 16.25 7.08333 16.25ZM7.08333 12.0833C7.45351 12.0833 7.78611 12.2442 8.01499 12.4999C8.21296 12.7211 8.33333 13.0132 8.33333 13.3333C8.33333 13.6539 8.21265 13.9463 8.01424 14.1676C7.78538 14.4228 7.45311 14.5833 7.08333 14.5833C6.71356 14.5833 6.38128 14.4228 6.15243 14.1676C5.95402 13.9463 5.83333 13.6539 5.83333 13.3333C5.83333 13.0132 5.95371 12.7211 6.15168 12.4999C6.38056 12.2442 6.71315 12.0833 7.08333 12.0833Z" fill="#2B2926"/>
          </svg>
        </div>
        <span className="text-sm font-medium text-gray-800">Filters</span>
        
        {/* Blue bubble indicator */}
        {keywordCount > 0 && (
          <div className="absolute -top-1 -right-1 bg-[#00809d] text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
            {keywordCount}
          </div>
        )}
      </div>
      </div>

      {/* Filters Modal */}
      <FiltersModal
        isOpen={isFiltersModalOpen}
        onClose={handleFiltersModalClose}
        onApplyFilters={handleApplyFilters}
      />

      {/* Guests Modal */}
      <GuestsModal
        isOpen={isGuestsModalOpen}
        onClose={handleGuestsModalClose}
        onApplyGuests={handleApplyGuests}
        initialGuests={guests}
      />
    </>
  );
};

export default FilterChips;





