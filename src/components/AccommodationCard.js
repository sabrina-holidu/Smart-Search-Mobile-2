import React from 'react';

const AccommodationCard = ({ accommodation }) => {
  const getTagColor = (tag) => {
    switch (tag) {
      case 'Top rated':
        return 'bg-petrol-dark';
      case 'Good deal':
        return 'bg-success';
      case 'Great views':
        return 'bg-petrol-dark';
      case 'Star Host':
        return 'bg-gradient-to-r from-petrol-dark to-petrol via-petrol-dark';
      default:
        return 'bg-white text-error';
    }
  };

  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-200">
      {/* Image Section */}
      <div className="relative h-48">
        <img 
          src={accommodation.image} 
          alt={accommodation.title}
          className="w-full h-full object-cover"
        />
        
        {/* Tags */}
        {accommodation.tags.length > 0 && (
          <div className="absolute top-3 left-3">
            <div className={`px-2 py-1 rounded-lg ${getTagColor(accommodation.tags[0])}`}>
              <span className="text-xs font-bold text-white">
                {accommodation.tags[0]}
              </span>
            </div>
          </div>
        )}
        
        {/* Heart Icon */}
        <div className="absolute top-3 right-3 w-6 h-6">
          <svg viewBox="0 0 24 24" fill="none">
            <path 
              d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" 
              fill="white"
            />
          </svg>
        </div>
        
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
              <div className="w-4 h-4">
                <svg viewBox="0 0 16 16" fill="none">
                  <path d="M8 0l2.5 5.5L16 6.5l-4 4 1 5.5L8 14l-5 2.5 1-5.5L0 6.5l5.5-1L8 0z" fill="#FFD700"/>
                </svg>
              </div>
              <span className="text-lg font-bold text-gray-800">{accommodation.rating}</span>
            </div>
            <div className="bg-petrol-dark text-white px-2 py-1 rounded-full">
              <span className="text-xs font-bold">{accommodation.reviewText}</span>
            </div>
            <span className="text-sm text-gray-600">{accommodation.reviewCount} reviews</span>
            {accommodation.familyRated && (
              <div className="flex items-center gap-1">
                <div className="w-4 h-4">
                  <svg viewBox="0 0 16 16" fill="none">
                    <path d="M8 2C6.9 2 6 2.9 6 4s.9 2 2 2 2-.9 2-2-.9-2-2-2zm6 6c0-1.1-.9-2-2-2s-2 .9-2 2 .9 2 2 2 2-.9 2-2zM2 8c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2z" fill="#2B2926"/>
                  </svg>
                </div>
                <span className="text-sm text-gray-600">Top rated by families</span>
                <div className="w-3 h-3">
                  <svg viewBox="0 0 12 12" fill="none">
                    <path d="M6 0l1.5 4.5L12 6l-4.5 1.5L6 12l-1.5-4.5L0 6l4.5-1.5L6 0z" fill="#2B2926"/>
                  </svg>
                </div>
              </div>
            )}
          </div>
        )}
        
        {/* Location */}
        <div className="space-y-1">
          <div className="flex items-center gap-1">
            <div className="w-4 h-4">
              <svg viewBox="0 0 16 16" fill="none">
                <path d="M8 0C3.58 0 0 3.58 0 8c0 5.25 6 10 6 10s6-4.75 6-10c0-4.42-3.58-8-8-8zm0 11c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3z" fill="#2B2926"/>
              </svg>
            </div>
            <span className="text-sm text-gray-600">{accommodation.location}</span>
          </div>
          <div className="flex items-center gap-1">
            <div className="w-4 h-4">
              <svg viewBox="0 0 16 16" fill="none">
                <path d="M8 0C3.58 0 0 3.58 0 8s8 8 8 8 8-3.58 8-8-3.58-8-8-8zm0 12c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4z" fill="#2B2926"/>
              </svg>
            </div>
            <span className="text-sm text-gray-600">{accommodation.distance}</span>
          </div>
          {accommodation.skiDistance && (
            <div className="flex items-center gap-1">
              <div className="w-4 h-4">
                <svg viewBox="0 0 16 16" fill="none">
                  <path d="M8 2L6 6l-4 2 4 2 2 4 2-4 4-2-4-2-2-4z" fill="#2B2926"/>
                </svg>
              </div>
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
              <div className="w-4 h-4">
                <svg viewBox="0 0 16 16" fill="none">
                  <path d="M8 0C3.58 0 0 3.58 0 8s3.58 8 8 8 8-3.58 8-8-3.58-8-8-8zm0 14c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.69 6-6 6z" fill="#2B2926"/>
                </svg>
              </div>
              <span className="text-sm text-gray-600">Eco</span>
            </div>
          )}
        </div>
        
        {/* Multi Unit */}
        <div className="flex items-center gap-1">
          <div className="w-4 h-4">
            <svg viewBox="0 0 16 16" fill="none">
              <path d="M2 2h12v12H2V2zm2 2v8h8V4H4z" fill="#45423E"/>
            </svg>
          </div>
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





