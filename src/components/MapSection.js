import React from 'react';

const MapSection = () => {
  return (
    <div className="relative">
      {/* Map Background */}
      <div className="bg-gray-200 rounded-2xl h-16 w-full flex items-center justify-center">
        <div className="text-gray-500 text-sm">Map View</div>
      </div>
      
      {/* Map Button */}
      <div className="absolute top-2 left-1/2 transform -translate-x-1/2">
        <button className="bg-white border-2 border-gray-200 rounded-lg px-6 py-2 flex items-center gap-2 shadow-sm">
          <div className="w-4 h-4">
            <svg viewBox="0 0 16 16" fill="none">
              <path 
                d="M8 0C3.58 0 0 3.58 0 8s8 8 8 8 8-3.58 8-8-3.58-8-8-8zm0 12c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4z" 
                fill="#2B2926"
              />
            </svg>
          </div>
          <span className="text-sm font-medium text-gray-800">View map</span>
        </button>
      </div>
    </div>
  );
};

export default MapSection;





