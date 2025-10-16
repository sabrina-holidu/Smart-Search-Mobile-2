import React from 'react';

const AccommodationCard = ({ accommodation }) => {

  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-200">
      {/* Image Section */}
      <div className="relative h-48">
        <img 
          src={accommodation.image} 
          alt={accommodation.title}
          className="w-full h-full object-cover"
        />
        
        
        
        {/* Price */}
        <div className="absolute bottom-3 right-3">
          <div className="bg-white rounded-full px-3 py-1 flex items-center gap-1">
            <span className="text-sm font-bold text-gray-800">{accommodation.price}</span>
            <span className="text-xs text-gray-600">·</span>
            <span className="text-xs text-gray-600">{accommodation.nights}</span>
          </div>
        </div>
      </div>
      
      {/* Content Section */}
      <div className="p-4 space-y-2">
        {/* Title */}
        <div className="text-sm font-bold text-gray-800">
          {accommodation.title}
        </div>
        
        {/* Reviews */}
        {accommodation.rating && (
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-1">
              <span className="text-lg font-bold text-gray-800">{accommodation.rating}</span>
            </div>
            <div className="bg-petrol-dark text-white px-2 py-1 rounded-full">
              <span className="text-xs font-bold">{accommodation.reviewText}</span>
            </div>
            <span className="text-sm text-gray-600">{accommodation.reviewCount} reviews</span>
            {accommodation.familyRated && (
              <div className="flex items-center gap-1">
                <span className="text-sm text-gray-600">Top rated by families</span>
              </div>
            )}
          </div>
        )}
        
        {/* Location */}
        <div className="space-y-1">
          <div className="flex items-center gap-1">
            <span className="text-sm text-gray-600">{accommodation.location}</span>
          </div>
          <div className="flex items-center gap-1">
            <span className="text-sm text-gray-600">{accommodation.distance}</span>
          </div>
          {accommodation.skiDistance && (
            <div className="flex items-center gap-1">
              <span className="text-sm text-gray-600">{accommodation.skiDistance}</span>
            </div>
          )}
        </div>
        
        {/* Property Details */}
        <div className="flex flex-wrap items-center gap-1">
          <span className="text-sm text-gray-600">
            {accommodation.guests} · {accommodation.bedrooms} · {accommodation.size}
          </span>
          {accommodation.eco && (
            <div className="flex items-center gap-1">
              <span className="text-sm text-gray-600">Eco</span>
            </div>
          )}
        </div>
        
        {/* Multi Unit */}
        <div className="flex items-center gap-1">
          <span className="text-sm font-semibold text-gray-700">{accommodation.multiUnit}</span>
        </div>
        
        {/* Policy */}
        {accommodation.policy && (
          <div className="text-sm font-bold text-success">
            {accommodation.policy}
          </div>
        )}
      </div>
    </div>
  );
};

export default AccommodationCard;





