import React, { useState } from 'react';
import Navbar from './Navbar';
import SmartSearch from './SmartSearch';
import SearchResults from './SearchResults';
import FilterChips from './FilterChips';
import MapSection from './MapSection';

const Home = () => {
  const [keywordCount, setKeywordCount] = useState(0);
  const [selectedDestination, setSelectedDestination] = useState(null);
  const [guestCount, setGuestCount] = useState(null); // Will be { adults: X, children: Y, total: Z }
  const [extractedKeywords, setExtractedKeywords] = useState([]);

  const getLocationCount = (destination) => {
    const locationCounts = {
      'Majorca': 127,
      'Barcelona': 89,
      'Paris': 156
    };
    return locationCounts[destination] || 239;
  };

  const handleKeywordsExtracted = (keywords) => {
    setExtractedKeywords(keywords);
  };

  return (
    <div className="bg-white min-h-screen">
      <div className="max-w-sm mx-auto bg-white rounded-2xl shadow-lg overflow-hidden">
        {/* Navigation Bar */}
        <Navbar />
        
        {/* Smart Search Component */}
        <div className="px-4 pt-4">
          <SmartSearch 
            onKeywordCountChange={setKeywordCount} 
            onDestinationChange={setSelectedDestination}
            onGuestCountChange={setGuestCount}
            onKeywordsExtracted={handleKeywordsExtracted}
            onLocationDetected={(location) => {
              setSelectedDestination(location.name);
            }}
          />
        </div>
        
        {/* Filter Chips */}
        <div className="px-4 py-4">
          <FilterChips 
            keywordCount={keywordCount} 
            guestCount={guestCount}
            extractedKeywords={extractedKeywords}
          />
        </div>
        
        {/* Search Results Header */}
        <div className="px-4 pb-2">
          <div className="flex justify-between items-center">
            <span className="text-sm font-semibold text-gray-800">
              {selectedDestination ? `${getLocationCount(selectedDestination)} accommodations in ${selectedDestination}` : '239 accommodations'}
            </span>
            <div className="flex items-center gap-1">
              <span className="text-xs text-gray-700">About these results</span>
              <div className="w-3.5 h-3.5">
                <svg viewBox="0 0 14 14" fill="none">
                  <path d="M7 0C3.134 0 0 3.134 0 7s3.134 7 7 7 7-3.134 7-7-3.134-7-7-7zm0 10.5c-.414 0-.75-.336-.75-.75s.336-.75.75-.75.75.336.75.75-.336.75-.75.75zm.75-3.75V7c0-.414-.336-.75-.75-.75s-.75.336-.75.75v.75c0 .414.336.75.75.75s.75-.336.75-.75z" fill="#605C57"/>
                </svg>
              </div>
            </div>
          </div>
        </div>
        
        {/* Map Section */}
        <div className="px-4 pb-4">
          <MapSection />
        </div>
        
        {/* Search Results */}
        <div className="px-4 pb-4">
          <SearchResults selectedDestination={selectedDestination} />
        </div>
      </div>
    </div>
  );
};

export default Home;
