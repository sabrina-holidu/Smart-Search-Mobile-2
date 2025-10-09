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
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M19.6602 3.98968C17.0202 2.18968 13.7602 3.02968 12.0002 5.08968C10.2402 3.02968 6.98021 2.17968 4.34021 3.98968C2.94021 4.94968 2.06021 6.56968 2.00021 8.27968C1.86021 12.1597 5.30021 15.2697 10.5502 20.0397L10.6502 20.1297C11.4102 20.8197 12.5802 20.8197 13.3402 20.1197L13.4502 20.0197C18.7002 15.2597 22.1302 12.1497 22.0002 8.26968C21.9402 6.56968 21.0602 4.94968 19.6602 3.98968ZM12.1002 18.5497L12.0002 18.6497L11.9002 18.5497C7.14021 14.2397 4.00021 11.3897 4.00021 8.49968C4.00021 6.49968 5.50021 4.99968 7.50021 4.99968C8.52688 4.99968 9.71688 5.78634 11.0702 7.35968L12.0002 8.35108L12.9402 7.35968C14.2869 5.78634 15.4735 4.99968 16.5002 4.99968C18.5002 4.99968 20.0002 6.49968 20.0002 8.49968C20.0002 11.3897 16.8602 14.2397 12.1002 18.5497Z" fill="white"/>
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
              <div className="w-4 h-4 text-yellow-500">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
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





