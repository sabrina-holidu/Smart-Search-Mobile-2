import React from 'react';

const SmartSearch: React.FC = () => {
  return (
    <div className="bg-white rounded-2xl shadow-lg border border-gray-300 p-4">
      {/* Destination Search */}
      <div className="flex items-center gap-3 py-3 border-b border-gray-300">
        <div className="w-5 h-5">
          <svg viewBox="0 0 20 20" fill="none">
            <path 
              d="M10 2C6.686 2 4 4.686 4 8c0 5.25 6 10 6 10s6-4.75 6-10c0-3.314-2.686-6-6-6zm0 8.5c-1.38 0-2.5-1.12-2.5-2.5S8.62 5.5 10 5.5s2.5 1.12 2.5 2.5S11.38 10.5 10 10.5z" 
              fill="#605C57"
            />
          </svg>
        </div>
        <div className="flex-1">
          <span className="text-gray-700 font-medium">Search destinations</span>
        </div>
      </div>
      
      {/* Search Input */}
      <div className="flex items-center gap-3 py-3">
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
          <span className="text-gray-700 font-medium">Tell us what you're looking for</span>
        </div>
      </div>
      
      {/* Search Button */}
      <div className="pt-2">
        <button className="w-full bg-petrol text-white font-semibold py-3 px-4 rounded-xl">
          Search
        </button>
      </div>
    </div>
  );
};

export default SmartSearch;





