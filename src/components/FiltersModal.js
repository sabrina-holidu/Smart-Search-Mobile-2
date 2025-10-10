import React, { useState } from 'react';

const FiltersModal = ({ isOpen, onClose, onApplyFilters }) => {
  const [filters, setFilters] = useState({
    priceRanges: [],
    ratings: [],
    amenities: [],
    propertyTypes: [],
    instantBook: false,
    freeCancellation: false
  });

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
