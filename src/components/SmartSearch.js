import React, { useState } from 'react';
import DestinationModal from './DestinationModal';
import FilterModal from './FilterModal';

const SmartSearch = ({ onKeywordCountChange, onDestinationChange, onGuestCountChange, onLocationDetected, onKeywordsExtracted }) => {
  const [isDestinationModalOpen, setIsDestinationModalOpen] = useState(false);
  const [isFilterModalOpen, setIsFilterModalOpen] = useState(false);
  const [selectedDestination, setSelectedDestination] = useState(null);
  const [searchCriteria, setSearchCriteria] = useState(null);

  const handleDestinationClick = () => {
    setIsDestinationModalOpen(true);
  };

  const handleDestinationSelect = (destination) => {
    setSelectedDestination(destination);
    if (onDestinationChange) {
      onDestinationChange(destination.name);
    }
  };

  const handleDestinationModalClose = () => {
    setIsDestinationModalOpen(false);
  };

  const handleCriteriaClick = () => {
    setIsFilterModalOpen(true);
  };

  // const handleCriteriaSelect = (criteria) => {
  //   setSelectedCriteria(criteria);
  // };

  const handleFilterModalClose = () => {
    setIsFilterModalOpen(false);
  };


  const handleApplyFilters = (filters) => {
    // Handle the applied filters
    console.log('Applied filters:', filters);
    setSearchCriteria(filters.searchTerm);
  };


  const handleKeywordCountChange = (keywordCount, guestCount, extractedKeywords) => {
    if (onKeywordCountChange) {
      onKeywordCountChange(keywordCount);
    }
    if (onGuestCountChange && guestCount) {
      // guestCount is now an object: { adults: X, children: Y, total: Z }
      onGuestCountChange(guestCount);
    }
    if (onKeywordsExtracted && extractedKeywords && extractedKeywords.length > 0) {
      onKeywordsExtracted(extractedKeywords);
    }
  };

  const handleLocationDetected = (location) => {
    if (onLocationDetected) {
      onLocationDetected(location);
    }
    // Also update the selected destination
    setSelectedDestination(location);
    if (onDestinationChange) {
      onDestinationChange(location.name);
    }
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg border border-gray-300 overflow-hidden">
      {/* Destination Search */}
      <div 
        className="flex items-center gap-3 py-3 px-4 cursor-pointer hover:bg-gray-50"
        onClick={handleDestinationClick}
      >
        <div className="w-5 h-5 text-gray-600">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <mask id="path-1-inside-1_2120_28526" fill="white">
              <path fillRule="evenodd" clipRule="evenodd" d="M9.99984 3.33366C7.69531 3.33366 5.83317 5.1958 5.83317 7.50033C5.83317 8.75505 6.54013 10.4866 7.62888 12.3107C8.41023 13.6198 9.29811 14.8309 10.0026 15.7274C10.7054 14.8301 11.5913 13.6196 12.3715 12.3113C13.4595 10.4867 14.1665 8.75519 14.1665 7.50033C14.1665 5.1958 12.3044 3.33366 9.99984 3.33366ZM9.3665 17.592C7.84984 15.767 4.1665 10.9753 4.1665 7.50033C4.1665 4.27533 6.77484 1.66699 9.99984 1.66699C13.2248 1.66699 15.8332 4.27533 15.8332 7.50033C15.8332 10.9753 12.1498 15.767 10.6415 17.592C10.3082 17.992 9.69984 17.992 9.3665 17.592Z"/>
              <path fillRule="evenodd" clipRule="evenodd" d="M9.99984 8.33366C10.4601 8.33366 10.8332 7.96056 10.8332 7.50033C10.8332 7.04009 10.4601 6.66699 9.99984 6.66699C9.5396 6.66699 9.1665 7.04009 9.1665 7.50033C9.1665 7.96056 9.5396 8.33366 9.99984 8.33366ZM9.99984 10.0003C11.3805 10.0003 12.4998 8.88104 12.4998 7.50033C12.4998 6.11961 11.3805 5.00033 9.99984 5.00033C8.61913 5.00033 7.49984 6.11961 7.49984 7.50033C7.49984 8.88104 8.61913 10.0003 9.99984 10.0003Z"/>
            </mask>
            <path fillRule="evenodd" clipRule="evenodd" d="M9.99984 3.33366C7.69531 3.33366 5.83317 5.1958 5.83317 7.50033C5.83317 8.75505 6.54013 10.4866 7.62888 12.3107C8.41023 13.6198 9.29811 14.8309 10.0026 15.7274C10.7054 14.8301 11.5913 13.6196 12.3715 12.3113C13.4595 10.4867 14.1665 8.75519 14.1665 7.50033C14.1665 5.1958 12.3044 3.33366 9.99984 3.33366ZM9.3665 17.592C7.84984 15.767 4.1665 10.9753 4.1665 7.50033C4.1665 4.27533 6.77484 1.66699 9.99984 1.66699C13.2248 1.66699 15.8332 4.27533 15.8332 7.50033C15.8332 10.9753 12.1498 15.767 10.6415 17.592C10.3082 17.992 9.69984 17.992 9.3665 17.592Z" fill="#605C57"/>
            <path fillRule="evenodd" clipRule="evenodd" d="M9.99984 8.33366C10.4601 8.33366 10.8332 7.96056 10.8332 7.50033C10.8332 7.04009 10.4601 6.66699 9.99984 6.66699C9.5396 6.66699 9.1665 7.04009 9.1665 7.50033C9.1665 7.96056 9.5396 8.33366 9.99984 8.33366ZM9.99984 10.0003C11.3805 10.0003 12.4998 8.88104 12.4998 7.50033C12.4998 6.11961 11.3805 5.00033 9.99984 5.00033C8.61913 5.00033 7.49984 6.11961 7.49984 7.50033C7.49984 8.88104 8.61913 10.0003 9.99984 10.0003Z" fill="#605C57"/>
            <path d="M7.62888 12.3107L5.91153 13.3357L5.91153 13.3357L7.62888 12.3107ZM10.0026 15.7274L8.43006 16.9632L10.0052 18.9676L11.5771 16.9606L10.0026 15.7274ZM12.3715 12.3113L10.6537 11.287H10.6537L12.3715 12.3113ZM9.3665 17.592L7.82833 18.8703L7.83006 18.8724L9.3665 17.592ZM10.6415 17.592L12.178 18.8724L12.1831 18.8661L10.6415 17.592ZM5.83317 7.50033H7.83317C7.83317 6.30037 8.79988 5.33366 9.99984 5.33366V3.33366V1.33366C6.59074 1.33366 3.83317 4.09123 3.83317 7.50033H5.83317ZM7.62888 12.3107L9.34624 11.2857C8.28228 9.5031 7.83317 8.17459 7.83317 7.50033H5.83317H3.83317C3.83317 9.33551 4.79798 11.4701 5.91153 13.3357L7.62888 12.3107ZM10.0026 15.7274L11.5751 14.4917C10.902 13.6351 10.0691 12.4969 9.34624 11.2857L7.62888 12.3107L5.91153 13.3357C6.75132 14.7428 7.69421 16.0268 8.43006 16.9632L10.0026 15.7274ZM12.3715 12.3113L10.6537 11.287C9.93173 12.4977 9.10037 13.6358 8.42805 14.4942L10.0026 15.7274L11.5771 16.9606C12.3104 16.0245 13.251 14.7415 14.0893 13.3356L12.3715 12.3113ZM14.1665 7.50033H12.1665C12.1665 8.1749 11.7173 9.50341 10.6537 11.287L12.3715 12.3113L14.0893 13.3356C15.2017 11.4701 16.1665 9.33549 16.1665 7.50033H14.1665ZM9.99984 3.33366V5.33366C11.1998 5.33366 12.1665 6.30037 12.1665 7.50033H14.1665H16.1665C16.1665 4.09123 13.4089 1.33366 9.99984 1.33366V3.33366ZM4.1665 7.50033H2.1665C2.1665 9.81716 3.34399 12.286 4.4804 14.1899C5.66569 16.1758 7.03809 17.9194 7.82834 18.8703L9.3665 17.592L10.9047 16.3137C10.1783 15.4396 8.95065 13.8748 7.91511 12.1399C6.83068 10.323 6.1665 8.65849 6.1665 7.50033H4.1665ZM9.99984 1.66699V-0.333008C5.67027 -0.333008 2.1665 3.17076 2.1665 7.50033H4.1665H6.1665C6.1665 5.3799 7.87941 3.66699 9.99984 3.66699V1.66699ZM15.8332 7.50033H17.8332C17.8332 3.17076 14.3294 -0.333008 9.99984 -0.333008V1.66699V3.66699C12.1203 3.66699 13.8332 5.3799 13.8332 7.50033H15.8332ZM10.6415 17.592L12.1831 18.8661C12.9669 17.9178 14.3368 16.1747 15.5207 14.1892C16.6558 12.2858 17.8332 9.81699 17.8332 7.50033H15.8332H13.8332C13.8332 8.65867 13.1689 10.3232 12.0852 12.1406C11.0504 13.8759 9.82444 15.4412 9.09988 16.3179L10.6415 17.592ZM9.3665 17.592L7.83006 18.8724C8.96299 20.2319 11.045 20.2319 12.1779 18.8724L10.6415 17.592L9.10506 16.3116C9.57132 15.7521 10.4367 15.7521 10.9029 16.3116L9.3665 17.592ZM10.8332 7.50033H8.83317C8.83317 6.85599 9.3555 6.33366 9.99984 6.33366V8.33366V10.3337C11.5646 10.3337 12.8332 9.06513 12.8332 7.50033H10.8332ZM9.99984 6.66699V8.66699C9.3555 8.66699 8.83317 8.14466 8.83317 7.50033H10.8332H12.8332C12.8332 5.93552 11.5646 4.66699 9.99984 4.66699V6.66699ZM9.1665 7.50033H11.1665C11.1665 8.14466 10.6442 8.66699 9.99984 8.66699V6.66699V4.66699C8.43503 4.66699 7.1665 5.93552 7.1665 7.50033H9.1665ZM9.99984 8.33366V6.33366C10.6442 6.33366 11.1665 6.85599 11.1665 7.50033H9.1665H7.1665C7.1665 9.06513 8.43503 10.3337 9.99984 10.3337V8.33366ZM12.4998 7.50033H10.4998C10.4998 7.77647 10.276 8.00033 9.99984 8.00033V10.0003V12.0003C12.4851 12.0003 14.4998 9.98561 14.4998 7.50033H12.4998ZM9.99984 5.00033V7.00033C10.276 7.00033 10.4998 7.22418 10.4998 7.50033H12.4998H14.4998C14.4998 5.01504 12.4851 3.00033 9.99984 3.00033V5.00033ZM7.49984 7.50033H9.49984C9.49984 7.22418 9.72369 7.00033 9.99984 7.00033V5.00033V3.00033C7.51456 3.00033 5.49984 5.01504 5.49984 7.50033H7.49984ZM9.99984 10.0003V8.00033C9.72369 8.00033 9.49984 7.77647 9.49984 7.50033H7.49984H5.49984C5.49984 9.98561 7.51456 12.0003 9.99984 12.0003V10.0003Z" fill="#605C57" mask="url(#path-1-inside-1_2120_28526)"/>
          </svg>
        </div>
        <div className="flex-1">
          <span className={`font-medium ${selectedDestination ? 'text-gray-800' : 'text-gray-700'}`}>
            {selectedDestination ? selectedDestination.name : 'Search destinations'}
          </span>
        </div>
        <div className="w-4 h-4 text-gray-600">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4 6l4 4 4-4" stroke="#605C57" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
      </div>
      
      {/* Divider Line */}
      <div className="border-b border-gray-300"></div>
      
      {/* Search Input */}
      <div 
        className="flex items-center gap-3 py-3 px-4 cursor-pointer hover:bg-gray-50"
        onClick={handleCriteriaClick}
      >
        <div className="w-5 h-5 text-gray-600">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M19 19l-4.35-4.35M17 9A8 8 0 1 1 1 9a8 8 0 0 1 16 0z" stroke="#605C57" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
              <div className="flex-1">
                <span className={`font-medium ${searchCriteria ? 'text-gray-800' : 'text-gray-700'}`}>
                  {searchCriteria || "Tell us what you're looking for"}
                </span>
              </div>
        <div className="w-4 h-4 text-gray-600">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4 6l4 4 4-4" stroke="#605C57" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
      </div>
      
      {/* Search Button */}
      <div className="p-4">
        <button className="w-full bg-petrol text-white font-semibold py-3 px-4 rounded-xl">
          Search
        </button>
      </div>

      {/* Destination Modal */}
      <DestinationModal
        isOpen={isDestinationModalOpen}
        onClose={handleDestinationModalClose}
        onSelectDestination={handleDestinationSelect}
      />

      {/* Filter Modal */}
        <FilterModal
          isOpen={isFilterModalOpen}
          onClose={handleFilterModalClose}
          onApplyFilters={handleApplyFilters}
          onKeywordCountChange={handleKeywordCountChange}
          onLocationDetected={handleLocationDetected}
        />

    </div>
  );
};

export default SmartSearch;
