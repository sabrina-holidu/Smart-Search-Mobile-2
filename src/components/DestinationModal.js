import React, { useState } from 'react';

const DestinationModal = ({ isOpen, onClose, onSelectDestination }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedDestination, setSelectedDestination] = useState(null);

  const destinations = [
    { id: 1, name: 'Munich, Germany', type: 'city' },
    { id: 2, name: 'Berlin, Germany', type: 'city' },
    { id: 3, name: 'Hamburg, Germany', type: 'city' },
    { id: 4, name: 'Cologne, Germany', type: 'city' },
    { id: 5, name: 'Frankfurt, Germany', type: 'city' },
    { id: 6, name: 'Germany', type: 'country' },
    { id: 7, name: 'France', type: 'country' },
    { id: 8, name: 'Italy', type: 'country' },
    { id: 9, name: 'Spain', type: 'country' },
    { id: 10, name: 'Sicily, Italy', type: 'island' },
    { id: 11, name: 'Sardinia, Italy', type: 'island' },
    { id: 12, name: 'Mallorca, Spain', type: 'island' },
    { id: 13, name: 'Ibiza, Spain', type: 'island' },
    { id: 14, name: 'Paris, France', type: 'city' },
    { id: 15, name: 'Rome, Italy', type: 'city' },
    { id: 16, name: 'Barcelona, Spain', type: 'city' },
    { id: 17, name: 'Amsterdam, Netherlands', type: 'city' },
    { id: 18, name: 'Vienna, Austria', type: 'city' },
    { id: 19, name: 'Prague, Czech Republic', type: 'city' },
    { id: 20, name: 'Budapest, Hungary', type: 'city' }
  ];

  const filteredDestinations = destinations.filter(dest =>
    dest.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleDestinationClick = (destination) => {
    setSelectedDestination(destination);
    onSelectDestination(destination);
    onClose();
  };

  const getTypeIcon = (type) => {
    switch (type) {
      case 'city':
        return (
          <div className="w-5 h-5">
            <svg viewBox="0 0 20 20" fill="none">
              <path d="M10 2C6.686 2 4 4.686 4 8c0 5.25 6 10 6 10s6-4.75 6-10c0-3.314-2.686-6-6-6zm0 8.5c-1.38 0-2.5-1.12-2.5-2.5S8.62 5.5 10 5.5s2.5 1.12 2.5 2.5S11.38 10.5 10 10.5z" fill="#605C57"/>
            </svg>
          </div>
        );
      case 'country':
        return (
          <div className="w-5 h-5">
            <svg viewBox="0 0 20 20" fill="none">
              <path d="M10 2C6.686 2 4 4.686 4 8c0 5.25 6 10 6 10s6-4.75 6-10c0-3.314-2.686-6-6-6zm0 8.5c-1.38 0-2.5-1.12-2.5-2.5S8.62 5.5 10 5.5s2.5 1.12 2.5 2.5S11.38 10.5 10 10.5z" fill="#605C57"/>
            </svg>
          </div>
        );
      case 'island':
        return (
          <div className="w-5 h-5">
            <svg viewBox="0 0 20 20" fill="none">
              <path d="M10 2C6.686 2 4 4.686 4 8c0 5.25 6 10 6 10s6-4.75 6-10c0-3.314-2.686-6-6-6zm0 8.5c-1.38 0-2.5-1.12-2.5-2.5S8.62 5.5 10 5.5s2.5 1.12 2.5 2.5S11.38 10.5 10 10.5z" fill="#605C57"/>
            </svg>
          </div>
        );
      default:
        return null;
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-start justify-center z-50 pt-4">
      <div className="bg-white rounded-2xl max-w-sm mx-auto bg-white shadow-lg overflow-hidden flex flex-col w-full mx-4">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-gray-200">
          <h2 className="text-lg font-semibold text-gray-800">Search destinations</h2>
          <button 
            onClick={onClose}
            className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M18 6L6 18M6 6l12 12" stroke="#605C57" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          </button>
        </div>

        {/* Search Input */}
        <div className="p-4 border-b border-gray-200">
          <div className="relative">
            <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M19 19l-4.35-4.35M17 9A8 8 0 1 1 1 9a8 8 0 0 1 16 0z" stroke="#605C57" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <input
              type="text"
              placeholder="Search cities, countries, islands..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-petrol focus:border-transparent"
              autoFocus
            />
          </div>
        </div>

        {/* Results */}
        <div className="flex-1 overflow-y-auto">
          {filteredDestinations.length > 0 ? (
            <div className="p-2">
              {filteredDestinations.map((destination) => (
                <button
                  key={destination.id}
                  onClick={() => handleDestinationClick(destination)}
                  className="w-full flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 text-left"
                >
                  {getTypeIcon(destination.type)}
                  <div className="flex-1">
                    <div className="font-medium text-gray-800">{destination.name}</div>
                    <div className="text-sm text-gray-500 capitalize">{destination.type}</div>
                  </div>
                </button>
              ))}
            </div>
          ) : (
            <div className="p-8 text-center text-gray-500">
              <div className="w-12 h-12 mx-auto mb-4">
                <svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
                  <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" stroke="#605C57" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <p>No destinations found</p>
              <p className="text-sm">Try a different search term</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default DestinationModal;





