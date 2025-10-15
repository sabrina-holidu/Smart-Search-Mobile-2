import React from 'react';

const MapSection = () => {
  return (
    <div className="relative">
      {/* Map Background - Using provided map image */}
      <div className="rounded-2xl h-16 w-full relative overflow-hidden">
        <img 
          src={require('../icons/Map.jpg')}
          alt="Map view" 
          className="absolute inset-0 w-full h-full object-cover rounded-2xl"
        />
      </div>
      
      {/* Map Button */}
      <div className="absolute top-2 left-1/2 transform -translate-x-1/2">
        <button className="bg-white border-2 border-[#eae5e0] rounded-lg px-6 py-2 flex items-center gap-2 shadow-sm hover:shadow-md transition-shadow">
          <span className="text-sm font-medium text-gray-800">View map</span>
        </button>
      </div>
    </div>
  );
};

export default MapSection;





