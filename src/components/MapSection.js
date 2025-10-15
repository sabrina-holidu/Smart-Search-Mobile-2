import React from 'react';

const MapSection = () => {
  return (
    <div className="relative">
      {/* Map Background - Using actual map image from Figma */}
      <div className="rounded-2xl h-16 w-full relative overflow-hidden">
        <img 
          src="http://localhost:3845/assets/72bd2149c5227d73a7f2b7d33b7fe6e4ab0594b7.png" 
          alt="Map view" 
          className="absolute inset-0 w-full h-full object-cover rounded-2xl"
        />
      </div>
      
      {/* Map Button */}
      <div className="absolute top-2 left-1/2 transform -translate-x-1/2">
        <button className="bg-white border-2 border-[#eae5e0] rounded-lg px-6 py-2 flex items-center gap-2 shadow-sm hover:shadow-md transition-shadow">
          <div className="w-4 h-4 text-gray-800">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M8 0C3.58 0 0 3.58 0 8s8 8 8 8 8-3.58 8-8-3.58-8-8-8zm0 12c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4z" fill="#2B2926"/>
            </svg>
          </div>
          <span className="text-sm font-medium text-gray-800">View map</span>
        </button>
      </div>
    </div>
  );
};

export default MapSection;





