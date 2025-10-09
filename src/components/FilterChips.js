import React from 'react';

const FilterChips = () => {
  return (
    <div className="flex gap-2">
      {/* Guests Chip */}
      <div className="bg-white border border-gray-300 rounded-full px-4 py-2 flex items-center gap-2">
        <div className="w-5 h-5">
          <svg viewBox="0 0 20 20" fill="none">
            <path 
              d="M16 7c0-2.21-1.79-4-4-4S8 4.79 8 7s1.79 4 4 4 4-1.79 4-4zM2 21v-2c0-2.66 5.33-4 8-4s8 1.34 8 4v2H2z" 
              fill="#2B2926"
            />
          </svg>
        </div>
        <span className="text-sm font-medium text-gray-800">Guests</span>
      </div>
      
      {/* Dates Chip */}
      <div className="bg-white border border-gray-300 rounded-full px-4 py-2 flex items-center gap-2">
        <div className="w-5 h-5">
          <svg viewBox="0 0 20 20" fill="none">
            <path 
              d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zM7 10h5v5H7v-5z" 
              fill="#2B2926"
            />
          </svg>
        </div>
        <span className="text-sm font-medium text-gray-800">Dates</span>
      </div>
      
      {/* Filters Chip */}
      <div className="bg-white border border-gray-300 rounded-full px-4 py-2 flex items-center gap-2">
        <div className="w-5 h-5">
          <svg viewBox="0 0 20 20" fill="none">
            <path 
              d="M3 4h14l-1 7H4L3 4zm2 8h10M8 4V2h4v2" 
              stroke="#2B2926" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <span className="text-sm font-medium text-gray-800">Filters</span>
      </div>
    </div>
  );
};

export default FilterChips;





