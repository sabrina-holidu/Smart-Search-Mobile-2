import React, { useState, useEffect } from 'react';

// Mapping function to convert keywords to filter selections
const mapKeywordsToFilters = (keywords) => {
    const newFilters = {
      priceRanges: [],
      ratings: [],
      amenities: [],
      propertyTypes: [],
      instantBook: false,
      freeCancellation: false
    };

    keywords.forEach(keyword => {
      const lowerKeyword = keyword.toLowerCase();

      // Map to amenities
      if (lowerKeyword.includes('wi-fi') || lowerKeyword.includes('wifi')) {
        if (!newFilters.amenities.includes('Wi-Fi')) newFilters.amenities.push('Wi-Fi');
      }
      if (lowerKeyword.includes('parking')) {
        if (!newFilters.amenities.includes('Parking')) newFilters.amenities.push('Parking');
      }
      if (lowerKeyword.includes('pool') || lowerKeyword.includes('swimming pool') || lowerKeyword.includes('private pool')) {
        if (!newFilters.amenities.includes('Pool')) newFilters.amenities.push('Pool');
      }
      if (lowerKeyword.includes('kitchen')) {
        if (!newFilters.amenities.includes('Kitchen')) newFilters.amenities.push('Kitchen');
      }
      if (lowerKeyword.includes('air conditioning')) {
        if (!newFilters.amenities.includes('Air Conditioning')) newFilters.amenities.push('Air Conditioning');
      }
      if (lowerKeyword.includes('garden')) {
        if (!newFilters.amenities.includes('Garden')) newFilters.amenities.push('Garden');
      }
      if (lowerKeyword.includes('balcony')) {
        if (!newFilters.amenities.includes('Balcony')) newFilters.amenities.push('Balcony');
      }
      if (lowerKeyword.includes('terrace')) {
        if (!newFilters.amenities.includes('Terrace')) newFilters.amenities.push('Terrace');
      }
      if (lowerKeyword.includes('hot tub') || lowerKeyword.includes('jacuzzi')) {
        if (!newFilters.amenities.includes('Hot Tub')) newFilters.amenities.push('Hot Tub');
      }
      if (lowerKeyword.includes('gym') || lowerKeyword.includes('fitness')) {
        if (!newFilters.amenities.includes('Gym')) newFilters.amenities.push('Gym');
      }
      if (lowerKeyword.includes('spa')) {
        if (!newFilters.amenities.includes('Spa')) newFilters.amenities.push('Spa');
      }
      if (lowerKeyword.includes('sauna')) {
        if (!newFilters.amenities.includes('Sauna')) newFilters.amenities.push('Sauna');
      }
      if (lowerKeyword.includes('fireplace')) {
        if (!newFilters.amenities.includes('Fireplace')) newFilters.amenities.push('Fireplace');
      }
      if (lowerKeyword.includes('elevator')) {
        if (!newFilters.amenities.includes('Elevator')) newFilters.amenities.push('Elevator');
      }
      if (lowerKeyword.includes('laundry') || lowerKeyword.includes('washing machine')) {
        if (!newFilters.amenities.includes('Laundry')) newFilters.amenities.push('Laundry');
      }
      if (lowerKeyword.includes('dishwasher')) {
        if (!newFilters.amenities.includes('Dishwasher')) newFilters.amenities.push('Dishwasher');
      }
      if (lowerKeyword.includes('bbq') || lowerKeyword.includes('barbecue') || lowerKeyword.includes('grill')) {
        if (!newFilters.amenities.includes('BBQ')) newFilters.amenities.push('BBQ');
      }
      if (lowerKeyword.includes('outdoor dining')) {
        if (!newFilters.amenities.includes('Outdoor Dining')) newFilters.amenities.push('Outdoor Dining');
      }
      if (lowerKeyword.includes('patio')) {
        if (!newFilters.amenities.includes('Patio')) newFilters.amenities.push('Patio');
      }
      if (lowerKeyword.includes('deck')) {
        if (!newFilters.amenities.includes('Deck')) newFilters.amenities.push('Deck');
      }
      if (lowerKeyword.includes('rooftop')) {
        if (!newFilters.amenities.includes('Rooftop')) newFilters.amenities.push('Rooftop');
      }
      if (lowerKeyword.includes('beach access')) {
        if (!newFilters.amenities.includes('Beach Access')) newFilters.amenities.push('Beach Access');
      }

      // Map to property types
      if (lowerKeyword.includes('villa')) {
        if (!newFilters.propertyTypes.includes('Villa')) newFilters.propertyTypes.push('Villa');
      }
      if (lowerKeyword.includes('apartment')) {
        if (!newFilters.propertyTypes.includes('Apartment')) newFilters.propertyTypes.push('Apartment');
      }
      if (lowerKeyword.includes('hotel')) {
        if (!newFilters.propertyTypes.includes('Hotel')) newFilters.propertyTypes.push('Hotel');
      }
      if (lowerKeyword.includes('house') || lowerKeyword.includes('beach house') || lowerKeyword.includes('country house')) {
        if (!newFilters.propertyTypes.includes('House')) newFilters.propertyTypes.push('House');
      }
      if (lowerKeyword.includes('studio')) {
        if (!newFilters.propertyTypes.includes('Studio')) newFilters.propertyTypes.push('Studio');
      }
      if (lowerKeyword.includes('loft')) {
        if (!newFilters.propertyTypes.includes('Loft')) newFilters.propertyTypes.push('Loft');
      }
      if (lowerKeyword.includes('penthouse')) {
        if (!newFilters.propertyTypes.includes('Penthouse')) newFilters.propertyTypes.push('Penthouse');
      }
      if (lowerKeyword.includes('cottage') || lowerKeyword.includes('cabin') || lowerKeyword.includes('chalet')) {
        if (!newFilters.propertyTypes.includes('Cottage')) newFilters.propertyTypes.push('Cottage');
      }

      // Map to ratings
      if (lowerKeyword.includes('5 star') || lowerKeyword.includes('5-star')) {
        if (!newFilters.ratings.includes('5 Stars')) newFilters.ratings.push('5 Stars');
      } else if (lowerKeyword.includes('4+ stars') || lowerKeyword.includes('highly rated') || lowerKeyword.includes('top rated')) {
        if (!newFilters.ratings.includes('4+ Stars')) newFilters.ratings.push('4+ Stars');
      } else if (lowerKeyword.includes('3+ stars')) {
        if (!newFilters.ratings.includes('3+ Stars')) newFilters.ratings.push('3+ Stars');
      }

      // Map to price ranges
      if (lowerKeyword.includes('budget') || lowerKeyword.includes('cheap') || lowerKeyword.includes('affordable')) {
        if (!newFilters.priceRanges.includes('Under €50')) newFilters.priceRanges.push('Under €50');
      }
      if (lowerKeyword.includes('luxury') || lowerKeyword.includes('premium') || lowerKeyword.includes('expensive')) {
        if (!newFilters.priceRanges.includes('€500+')) newFilters.priceRanges.push('€500+');
      }
    });

    return newFilters;
};

const FiltersModal = ({ isOpen, onClose, onApplyFilters, extractedKeywords = [] }) => {
  const [filters, setFilters] = useState({
    priceRanges: [],
    ratings: [],
    amenities: [],
    propertyTypes: [],
    instantBook: false,
    freeCancellation: false
  });

  // Update filters when extractedKeywords change or when modal opens
  useEffect(() => {
    if (isOpen && extractedKeywords && extractedKeywords.length > 0) {
      const mappedFilters = mapKeywordsToFilters(extractedKeywords);
      setFilters(mappedFilters);
    }
  }, [isOpen, extractedKeywords]);

  const priceRanges = [
    'Under €50', '€50 - €100', '€100 - €200', '€200 - €300', '€300 - €500', '€500+'
  ];

  const ratings = [
    '1+ Stars', '2+ Stars', '3+ Stars', '4+ Stars', '5 Stars'
  ];

  const amenities = [
    'Wi-Fi', 'Parking', 'Pool', 'Kitchen', 'Air Conditioning', 'Garden', 'Balcony', 'Terrace',
    'Hot Tub', 'Gym', 'Spa', 'Sauna', 'Fireplace', 'Elevator', 'Laundry', 'Dishwasher',
    'BBQ', 'Outdoor Dining', 'Patio', 'Deck', 'Rooftop', 'Beach Access'
  ];

  const propertyTypes = [
    'Villa', 'Apartment', 'Hotel', 'House', 'Studio', 'Loft', 'Penthouse', 'Cottage'
  ];

  const handleAmenityToggle = (amenity) => {
    setFilters(prev => ({
      ...prev,
      amenities: prev.amenities.includes(amenity)
        ? prev.amenities.filter(a => a !== amenity)
        : [...prev.amenities, amenity]
    }));
  };

  const handlePropertyTypeToggle = (type) => {
    setFilters(prev => ({
      ...prev,
      propertyTypes: prev.propertyTypes.includes(type)
        ? prev.propertyTypes.filter(t => t !== type)
        : [...prev.propertyTypes, type]
    }));
  };

  const handleRatingToggle = (rating) => {
    setFilters(prev => ({
      ...prev,
      ratings: prev.ratings.includes(rating)
        ? prev.ratings.filter(r => r !== rating)
        : [...prev.ratings, rating]
    }));
  };

  const handlePriceRangeToggle = (range) => {
    setFilters(prev => ({
      ...prev,
      priceRanges: prev.priceRanges.includes(range)
        ? prev.priceRanges.filter(p => p !== range)
        : [...prev.priceRanges, range]
    }));
  };

  const handleApply = () => {
    onApplyFilters(filters);
    onClose();
  };

  const handleReset = () => {
    setFilters({
      priceRanges: [],
      ratings: [],
      amenities: [],
      propertyTypes: [],
      instantBook: false,
      freeCancellation: false
    });
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-2xl w-full max-w-sm mx-4 max-h-[90vh] overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-gray-200">
          <h2 className="text-lg font-semibold text-gray-800">Filters</h2>
          <button
            onClick={onClose}
            className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100"
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M15 5L5 15M5 5l10 10" stroke="#605C57" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>

        {/* Content */}
        <div className="p-4 space-y-6 overflow-y-auto max-h-[calc(90vh-140px)]">
          {/* Price Range */}
          <div>
            <h3 className="text-sm font-semibold text-gray-800 mb-3">Price Range</h3>
            <div className="grid grid-cols-2 gap-2">
              {priceRanges.map((range) => (
                <label key={range} className="flex items-center">
                  <input
                    type="checkbox"
                    checked={filters.priceRanges.includes(range)}
                    onChange={() => handlePriceRangeToggle(range)}
                    className="w-4 h-4 text-[#00809d] border-gray-300 rounded focus:ring-[#00809d]"
                  />
                  <span className="ml-2 text-sm text-gray-700">{range}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Rating */}
          <div>
            <h3 className="text-sm font-semibold text-gray-800 mb-3">Rating</h3>
            <div className="grid grid-cols-2 gap-2">
              {ratings.map((rating) => (
                <label key={rating} className="flex items-center">
                  <input
                    type="checkbox"
                    checked={filters.ratings.includes(rating)}
                    onChange={() => handleRatingToggle(rating)}
                    className="w-4 h-4 text-[#00809d] border-gray-300 rounded focus:ring-[#00809d]"
                  />
                  <span className="ml-2 text-sm text-gray-700">{rating}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Property Type */}
          <div>
            <h3 className="text-sm font-semibold text-gray-800 mb-3">Property Type</h3>
            <div className="grid grid-cols-2 gap-2">
              {propertyTypes.map((type) => (
                <label key={type} className="flex items-center">
                  <input
                    type="checkbox"
                    checked={filters.propertyTypes.includes(type)}
                    onChange={() => handlePropertyTypeToggle(type)}
                    className="w-4 h-4 text-[#00809d] border-gray-300 rounded focus:ring-[#00809d]"
                  />
                  <span className="ml-2 text-sm text-gray-700">{type}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Amenities */}
          <div>
            <h3 className="text-sm font-semibold text-gray-800 mb-3">Amenities</h3>
            <div className="grid grid-cols-2 gap-2">
              {amenities.map((amenity) => (
                <label key={amenity} className="flex items-center">
                  <input
                    type="checkbox"
                    checked={filters.amenities.includes(amenity)}
                    onChange={() => handleAmenityToggle(amenity)}
                    className="w-4 h-4 text-[#00809d] border-gray-300 rounded focus:ring-[#00809d]"
                  />
                  <span className="ml-2 text-sm text-gray-700">{amenity}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Quick Filters */}
          <div>
            <h3 className="text-sm font-semibold text-gray-800 mb-3">Quick Filters</h3>
            <div className="space-y-2">
              <label className="flex items-center">
                <input
                  type="checkbox"
                  checked={filters.instantBook}
                  onChange={(e) => setFilters(prev => ({
                    ...prev,
                    instantBook: e.target.checked
                  }))}
                  className="w-4 h-4 text-[#00809d] border-gray-300 rounded focus:ring-[#00809d]"
                />
                <span className="ml-2 text-sm text-gray-700">Instant Book</span>
              </label>
              <label className="flex items-center">
                <input
                  type="checkbox"
                  checked={filters.freeCancellation}
                  onChange={(e) => setFilters(prev => ({
                    ...prev,
                    freeCancellation: e.target.checked
                  }))}
                  className="w-4 h-4 text-[#00809d] border-gray-300 rounded focus:ring-[#00809d]"
                />
                <span className="ml-2 text-sm text-gray-700">Free Cancellation</span>
              </label>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between p-4 border-t border-gray-200 bg-gray-50">
          <button
            onClick={handleReset}
            className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-gray-900"
          >
            Reset all
          </button>
          <button
            onClick={handleApply}
            className="px-6 py-2 bg-[#00809d] text-white rounded-lg font-medium hover:bg-[#006d8a]"
          >
            Apply Filters
          </button>
        </div>
      </div>
    </div>
  );
};

export default FiltersModal;
