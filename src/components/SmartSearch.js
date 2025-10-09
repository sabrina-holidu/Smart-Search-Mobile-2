import React, { useState } from 'react';
import DestinationModal from './DestinationModal';
import SearchCriteriaModal from './SearchCriteriaModal';

const SmartSearch = () => {
  const [isDestinationModalOpen, setIsDestinationModalOpen] = useState(false);
  const [isCriteriaModalOpen, setIsCriteriaModalOpen] = useState(false);
  const [selectedDestination, setSelectedDestination] = useState(null);
  const [selectedCriteria, setSelectedCriteria] = useState(null);

  const handleDestinationClick = () => {
    setIsDestinationModalOpen(true);
  };

  const handleDestinationSelect = (destination) => {
    setSelectedDestination(destination);
  };

  const handleDestinationModalClose = () => {
    setIsDestinationModalOpen(false);
  };

  const handleCriteriaClick = () => {
    setIsCriteriaModalOpen(true);
  };

  const handleCriteriaSelect = (criteria) => {
    setSelectedCriteria(criteria);
  };

  const handleCriteriaModalClose = () => {
    setIsCriteriaModalOpen(false);
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg border border-gray-300 p-4">
      {/* Destination Search */}
      <div 
        className="flex items-center gap-3 py-3 border-b border-gray-300 cursor-pointer hover:bg-gray-50 rounded-lg px-2 -mx-2"
        onClick={handleDestinationClick}
      >
        <div className="w-5 h-5">
          <svg viewBox="0 0 20 20" fill="none">
            <path 
              d="M10 2C6.686 2 4 4.686 4 8c0 5.25 6 10 6 10s6-4.75 6-10c0-3.314-2.686-6-6-6zm0 8.5c-1.38 0-2.5-1.12-2.5-2.5S8.62 5.5 10 5.5s2.5 1.12 2.5 2.5S11.38 10.5 10 10.5z" 
              fill="#605C57"
            />
          </svg>
        </div>
        <div className="flex-1">
          <span className={`font-medium ${selectedDestination ? 'text-gray-800' : 'text-gray-700'}`}>
            {selectedDestination ? selectedDestination.name : 'Search destinations'}
          </span>
        </div>
        <div className="w-4 h-4">
          <svg viewBox="0 0 16 16" fill="none">
            <path d="M4 6l4 4 4-4" stroke="#605C57" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
      </div>
      
      {/* Search Input */}
      <div 
        className="flex items-center gap-3 py-3 cursor-pointer hover:bg-gray-50 rounded-lg px-2 -mx-2"
        onClick={handleCriteriaClick}
      >
        <div className="w-5 h-5">
          <svg viewBox="0 0 20 20" fill="none">
            <path 
              d="M19 19l-4.35-4.35M17 9A8 8 0 1 1 1 9a8 8 0 0 1 16 0z" 
              stroke="#605C57" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <div className="flex-1">
          <span className={`font-medium ${selectedCriteria ? 'text-gray-800' : 'text-gray-700'}`}>
            {selectedCriteria ? selectedCriteria.name : "Tell us what you're looking for"}
          </span>
        </div>
        <div className="w-4 h-4">
          <svg viewBox="0 0 16 16" fill="none">
            <path d="M4 6l4 4 4-4" stroke="#605C57" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
      </div>
      
      {/* Search Button */}
      <div className="pt-2">
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

      {/* Search Criteria Modal */}
      <SearchCriteriaModal
        isOpen={isCriteriaModalOpen}
        onClose={handleCriteriaModalClose}
        onSelectCriteria={handleCriteriaSelect}
      />
    </div>
  );
};

export default SmartSearch;
