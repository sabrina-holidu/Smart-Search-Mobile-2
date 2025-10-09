import React, { useState } from 'react';

const SearchCriteriaModal = ({ isOpen, onClose, onSelectCriteria }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCriteria, setSelectedCriteria] = useState(null);

  const searchCriteria = [
    { id: 1, name: 'Beach vacation', type: 'vacation', icon: '🏖️' },
    { id: 2, name: 'City break', type: 'vacation', icon: '🏙️' },
    { id: 3, name: 'Mountain retreat', type: 'vacation', icon: '🏔️' },
    { id: 4, name: 'Skiing holiday', type: 'sports', icon: '⛷️' },
    { id: 5, name: 'Romantic getaway', type: 'vacation', icon: '💕' },
    { id: 6, name: 'Family vacation', type: 'vacation', icon: '👨‍👩‍👧‍👦' },
    { id: 7, name: 'Business trip', type: 'business', icon: '💼' },
    { id: 8, name: 'Adventure travel', type: 'adventure', icon: '🧗‍♂️' },
    { id: 9, name: 'Cultural experience', type: 'culture', icon: '🏛️' },
    { id: 10, name: 'Wellness retreat', type: 'wellness', icon: '🧘‍♀️' },
    { id: 11, name: 'Food & wine tour', type: 'culinary', icon: '🍷' },
    { id: 12, name: 'Photography trip', type: 'hobby', icon: '📸' },
    { id: 13, name: 'Golf vacation', type: 'sports', icon: '⛳' },
    { id: 14, name: 'Hiking adventure', type: 'adventure', icon: '🥾' },
    { id: 15, name: 'Luxury escape', type: 'luxury', icon: '✨' },
    { id: 16, name: 'Budget travel', type: 'budget', icon: '💰' },
    { id: 17, name: 'Solo travel', type: 'travel', icon: '🧳' },
    { id: 18, name: 'Group travel', type: 'travel', icon: '👥' },
    { id: 19, name: 'Pet-friendly stay', type: 'special', icon: '🐕' },
    { id: 20, name: 'Eco-friendly accommodation', type: 'eco', icon: '🌱' }
  ];

  const filteredCriteria = searchCriteria.filter(criteria =>
    criteria.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleCriteriaClick = (criteria) => {
    setSelectedCriteria(criteria);
    onSelectCriteria(criteria);
    onClose();
  };

  const getTypeColor = (type) => {
    switch (type) {
      case 'vacation':
        return 'bg-blue-100 text-blue-800';
      case 'sports':
        return 'bg-green-100 text-green-800';
      case 'business':
        return 'bg-gray-100 text-gray-800';
      case 'adventure':
        return 'bg-orange-100 text-orange-800';
      case 'culture':
        return 'bg-purple-100 text-purple-800';
      case 'wellness':
        return 'bg-pink-100 text-pink-800';
      case 'culinary':
        return 'bg-red-100 text-red-800';
      case 'hobby':
        return 'bg-yellow-100 text-yellow-800';
      case 'luxury':
        return 'bg-indigo-100 text-indigo-800';
      case 'budget':
        return 'bg-emerald-100 text-emerald-800';
      case 'travel':
        return 'bg-cyan-100 text-cyan-800';
      case 'special':
        return 'bg-rose-100 text-rose-800';
      case 'eco':
        return 'bg-lime-100 text-lime-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-2xl w-full max-w-md mx-4 max-h-[80vh] flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-gray-200">
          <h2 className="text-lg font-semibold text-gray-800">What are you looking for?</h2>
          <button 
            onClick={onClose}
            className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100"
          >
            <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5">
              <path d="M18 6L6 18M6 6l12 12" stroke="#605C57" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          </button>
        </div>

        {/* Search Input */}
        <div className="p-4 border-b border-gray-200">
          <div className="relative">
            <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
              <svg viewBox="0 0 20 20" fill="none" className="w-5 h-5">
                <path d="M19 19l-4.35-4.35M17 9A8 8 0 1 1 1 9a8 8 0 0 1 16 0z" stroke="#605C57" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <input
              type="text"
              placeholder="Search for activities, experiences..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-petrol focus:border-transparent"
              autoFocus
            />
          </div>
        </div>

        {/* Results */}
        <div className="flex-1 overflow-y-auto">
          {filteredCriteria.length > 0 ? (
            <div className="p-2">
              {filteredCriteria.map((criteria) => (
                <button
                  key={criteria.id}
                  onClick={() => handleCriteriaClick(criteria)}
                  className="w-full flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 text-left"
                >
                  <div className="text-2xl">{criteria.icon}</div>
                  <div className="flex-1">
                    <div className="font-medium text-gray-800">{criteria.name}</div>
                    <div className={`inline-block px-2 py-1 rounded-full text-xs font-medium ${getTypeColor(criteria.type)}`}>
                      {criteria.type}
                    </div>
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
              <p>No criteria found</p>
              <p className="text-sm">Try a different search term</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SearchCriteriaModal;





