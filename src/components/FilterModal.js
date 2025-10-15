import React, { useState, useRef } from 'react';

const FilterModal = ({ isOpen, onClose, onApplyFilters, onKeywordCountChange, onLocationDetected }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [highlightedText, setHighlightedText] = useState('');
  const [isHighlighted, setIsHighlighted] = useState(false);
  // const [cursorPosition, setCursorPosition] = useState(0); // Currently unused
  const [extractedKeywords, setExtractedKeywords] = useState([]);
  const [guestCount, setGuestCount] = useState(null);
  const textareaRef = useRef(null);

  // Keywords to detect and highlight
  const keywords = [
    // Guest count keywords
    'adults', 'adult', 'children', 'child', 'kids', 'kid', 'people', 'person', 'persons', 'guests', 'guest',
    'couple', 'family', 'families', 'group', 'groups', 'travelers', 'traveler',
    // Location keywords
    'spain', 'france', 'italy', 'germany', 'portugal', 'greece', 'netherlands', 'belgium', 'switzerland', 'austria',
    'majorca', 'mallorca', 'barcelona', 'madrid', 'paris', 'rome', 'florence', 'venice', 'milan', 'naples',
    'berlin', 'munich', 'hamburg', 'lisbon', 'porto', 'athens', 'santorini', 'mykonos', 'amsterdam', 'rotterdam',
    'brussels', 'antwerp', 'zurich', 'geneva', 'vienna', 'salzburg', 'london', 'edinburgh', 'dublin', 'cork',
    'prague', 'budapest', 'warsaw', 'krakow', 'stockholm', 'oslo', 'copenhagen', 'helsinki', 'reykjavik',
    'croatia', 'zagreb', 'dubrovnik', 'split', 'slovenia', 'ljubljana', 'montenegro', 'podgorica', 'budva',
    'turkey', 'istanbul', 'antalya', 'cappadocia', 'morocco', 'marrakech', 'casablanca', 'tunisia', 'tunis',
    'cyprus', 'nicosia', 'malta', 'valletta', 'luxembourg', 'monaco', 'monte carlo', 'liechtenstein', 'vaduz',
    'andorra', 'san marino', 'vatican', 'europe', 'mediterranean', 'alps', 'baltic', 'adriatic', 'atlantic',
    'beachfront', 'coastal', 'mountain', 'countryside', 'downtown', 'city center', 'old town', 'historic center',
    'amenities', 'facilities', 'views', 'scenery', 'ratings', 'stars', 'property types', 'villa', 'apartment', 'hotel',
    'features', 'pet-friendly', 'family-friendly', 'romantic', 'luxury', 'budget', 'eco-friendly', 'sustainable',
    // Amenities & Facilities
    'private pool', 'swimming pool', 'pool', 'wi-fi', 'wifi', 'parking', 'air conditioning', 'kitchen', 'garden', 'balcony', 'terrace',
    'hot tub', 'jacuzzi', 'gym', 'fitness', 'spa', 'sauna', 'fireplace', 'elevator', 'laundry', 'dishwasher', 'washing machine',
    'bbq', 'barbecue', 'grill', 'outdoor dining', 'patio', 'deck', 'rooftop', 'sun deck', 'poolside', 'beach access',
    
    // Views & Scenery
    'ocean view', 'sea view', 'beach view', 'waterfront', 'mountain view', 'city view', 'garden view', 'lake view', 'river view', 'forest view',
    'sunset view', 'sunrise view', 'panoramic view', 'scenic view', 'coastal view', 'harbor view', 'bay view', 'cliff view', 'valley view',
    'sunset', 'sunrise', 'oceanfront', 'beachfront', 'waterfront', 'seaside', 'coastal', 'mountain', 'hillside', 'valley',
    
    // Locations & Areas
    'beachfront', 'downtown', 'city center', 'near airport', 'near beach', 'near mountains', 'near lake', 'near park',
    'beach', 'coast', 'seaside', 'harbor', 'marina', 'downtown', 'old town', 'historic district', 'shopping district',
    'resort area', 'tourist area', 'quiet area', 'residential area', 'commercial area', 'business district',
    
    // Ratings & Quality
    '4+ stars', '5 star', '5-star', 'highly rated', 'excellent rating', 'top rated', 'best rated', 'luxury', 'premium',
    'award winning', 'recommended', 'popular', 'trending', 'featured', 'exclusive', 'boutique', 'designer',
    
    // Property Types
    'villa', 'apartment', 'hotel', 'cabin', 'house', 'condo', 'studio', 'penthouse', 'mansion', 'cottage',
    'bungalow', 'chalet', 'lodge', 'resort', 'hostel', 'guesthouse', 'bed and breakfast', 'bnb', 'suite', 'room',
    'beach house', 'mountain cabin', 'lake house', 'country house', 'townhouse', 'duplex', 'triplex',
    
    // Features & Characteristics
    'pet-friendly', 'family-friendly', 'romantic', 'business travel', 'luxury', 'budget', 'eco-friendly', 'historic',
    'modern', 'traditional', 'cozy', 'spacious', 'quiet', 'party-friendly', 'adults-only', 'child-friendly',
    'accessible', 'wheelchair accessible', 'smoking', 'non-smoking', 'all-inclusive', 'self-catering',
    'fully equipped', 'furnished', 'unfurnished', 'newly renovated', 'recently updated', 'vintage', 'contemporary',
    
    // Activities & Experiences
    'diving', 'snorkeling', 'surfing', 'swimming', 'fishing', 'hiking', 'cycling', 'biking', 'walking', 'jogging',
    'tennis', 'golf', 'sailing', 'boating', 'kayaking', 'paddleboarding', 'yoga', 'meditation', 'wellness', 'relaxation',
    'adventure', 'exploration', 'sightseeing', 'culture', 'history', 'art', 'music', 'nightlife', 'entertainment',
    
    // Seasons & Weather
    'summer', 'winter', 'spring', 'autumn', 'fall', 'seasonal', 'year-round', 'tropical', 'mediterranean', 'alpine',
    'warm', 'cool', 'sunny', 'shady', 'windy', 'sheltered', 'protected', 'exposed', 'south-facing', 'north-facing',
    
    // Special Occasions
    'honeymoon', 'anniversary', 'birthday', 'celebration', 'wedding', 'corporate', 'retreat', 'conference', 'meeting',
    'reunion', 'vacation', 'holiday', 'getaway', 'escape', 'break', 'trip', 'journey', 'adventure', 'experience'
  ];

  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    // Reset highlighting when user types
    if (isHighlighted) {
      setIsHighlighted(false);
      setHighlightedText('');
    }
  };

  // Function to handle clicking on highlighted text
  const handleHighlightedTextClick = (e) => {
    const textElement = e.currentTarget;
    const textContent = textElement.textContent || textElement.innerText;
    
    // Set cursor to end of text for reliable positioning
    const endPosition = textContent.length;
    setIsHighlighted(false);
    
    // Focus the textarea and set cursor position at the end
    setTimeout(() => {
      if (textareaRef.current) {
        textareaRef.current.focus();
        textareaRef.current.setSelectionRange(endPosition, endPosition);
      }
    }, 0);
  };

  // Function to highlight keywords in text
  const highlightKeywords = (text) => {
    if (!text) return text;
    
    let highlighted = text;
    keywords.forEach(keyword => {
      const regex = new RegExp(`\\b${keyword.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}\\b`, 'gi');
      highlighted = highlighted.replace(regex, `<span style="background-color: #dbeafe; color: #1e40af; padding: 1px 2px; border-radius: 2px;">$&</span>`);
    });
    return highlighted;
  };

  // Function to extract keywords from text (excluding guest-related keywords)
  const extractKeywords = (text) => {
    const foundKeywordsSet = new Set(); // Use Set to prevent duplicates
    const lowerText = text.toLowerCase();
    
    // Keywords to exclude from filter count
    const excludedKeywords = [
      // Guest-related keywords
      'adults', 'adult', 'children', 'child', 'kids', 'kid', 'people', 'person', 'persons', 'guests', 'guest',
      'couple', 'family', 'families', 'group', 'groups', 'travelers', 'traveler',
      // Location keywords
      'spain', 'france', 'italy', 'germany', 'portugal', 'greece', 'netherlands', 'belgium', 'switzerland', 'austria',
      'majorca', 'mallorca', 'barcelona', 'madrid', 'paris', 'rome', 'florence', 'venice', 'milan', 'naples',
      'berlin', 'munich', 'hamburg', 'lisbon', 'porto', 'athens', 'santorini', 'mykonos', 'amsterdam', 'rotterdam',
      'brussels', 'antwerp', 'zurich', 'geneva', 'vienna', 'salzburg', 'london', 'edinburgh', 'dublin', 'cork',
      'prague', 'budapest', 'warsaw', 'krakow', 'stockholm', 'oslo', 'copenhagen', 'helsinki', 'reykjavik',
      'croatia', 'zagreb', 'dubrovnik', 'split', 'slovenia', 'ljubljana', 'montenegro', 'podgorica', 'budva',
      'turkey', 'istanbul', 'antalya', 'cappadocia', 'morocco', 'marrakech', 'casablanca', 'tunisia', 'tunis',
      'cyprus', 'nicosia', 'malta', 'valletta', 'luxembourg', 'monaco', 'monte carlo', 'liechtenstein', 'vaduz',
      'andorra', 'san marino', 'vatican', 'europe', 'mediterranean', 'alps', 'baltic', 'adriatic', 'atlantic',
      'beachfront', 'coastal', 'mountain', 'countryside', 'downtown', 'city center', 'old town', 'historic center'
    ];
    
    keywords.forEach(keyword => {
      const lowerKeyword = keyword.toLowerCase();
      
      // Use word boundary regex to match complete words only
      // This prevents "spa" from matching in "spain"
      const regex = new RegExp(`\\b${lowerKeyword.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}\\b`, 'i');
      
      if (regex.test(lowerText) && !excludedKeywords.includes(lowerKeyword)) {
        foundKeywordsSet.add(keyword);
      }
    });
    
    return Array.from(foundKeywordsSet);
  };

  const extractGuestCount = (text) => {
    const lowerText = text.toLowerCase();
    
    // Check for "X adults and Y children" pattern (with or without "and")
    const adultsAndChildrenPattern = /(\d+)\s*(?:adults?|adult)\s*(?:and|&|,)?\s*(\d+)\s*(?:children?|child|kids?|kid)/i;
    const adultsAndChildrenMatch = lowerText.match(adultsAndChildrenPattern);
    if (adultsAndChildrenMatch) {
      return {
        adults: parseInt(adultsAndChildrenMatch[1]),
        children: parseInt(adultsAndChildrenMatch[2]),
        total: parseInt(adultsAndChildrenMatch[1]) + parseInt(adultsAndChildrenMatch[2])
      };
    }

    // Check for "X adults" pattern
    const adultsPattern = /(\d+)\s*(?:adults?|adult)/i;
    const adultsMatch = lowerText.match(adultsPattern);
    if (adultsMatch) {
      return {
        adults: parseInt(adultsMatch[1]),
        children: 0,
        total: parseInt(adultsMatch[1])
      };
    }

    // Check for "X children" pattern
    const childrenPattern = /(\d+)\s*(?:children?|child|kids?|kid)/i;
    const childrenMatch = lowerText.match(childrenPattern);
    if (childrenMatch) {
      return {
        adults: 0,
        children: parseInt(childrenMatch[1]),
        total: parseInt(childrenMatch[1])
      };
    }

    // Check for "X people/guests" pattern - assume all adults
    const peoplePattern = /(\d+)\s*(?:people|persons?|guests?|guest)/i;
    const peopleMatch = lowerText.match(peoplePattern);
    if (peopleMatch) {
      return {
        adults: parseInt(peopleMatch[1]),
        children: 0,
        total: parseInt(peopleMatch[1])
      };
    }

    // Check for "couple" - 2 adults
    if (lowerText.includes('couple')) {
      return {
        adults: 2,
        children: 0,
        total: 2
      };
    }

    // Check for "family" - 2 adults + 2 children
    if (lowerText.includes('family') || lowerText.includes('families')) {
      return {
        adults: 2,
        children: 2,
        total: 4
      };
    }

    // Check for "group of X"
    const groupPattern = /group\s*(?:of\s*)?(\d+)/i;
    const groupMatch = lowerText.match(groupPattern);
    if (groupMatch) {
      return {
        adults: parseInt(groupMatch[1]),
        children: 0,
        total: parseInt(groupMatch[1])
      };
    }
    
    return null;
  };

  const extractLocation = (text) => {
    const lowerText = text.toLowerCase();
    
    // Location mapping for better matching
    const locationMap = {
      // Countries
      'spain': { name: 'Spain', type: 'country' },
      'france': { name: 'France', type: 'country' },
      'italy': { name: 'Italy', type: 'country' },
      'germany': { name: 'Germany', type: 'country' },
      'portugal': { name: 'Portugal', type: 'country' },
      'greece': { name: 'Greece', type: 'country' },
      'netherlands': { name: 'Netherlands', type: 'country' },
      'belgium': { name: 'Belgium', type: 'country' },
      'switzerland': { name: 'Switzerland', type: 'country' },
      'austria': { name: 'Austria', type: 'country' },
      'croatia': { name: 'Croatia', type: 'country' },
      'slovenia': { name: 'Slovenia', type: 'country' },
      'montenegro': { name: 'Montenegro', type: 'country' },
      'turkey': { name: 'Turkey', type: 'country' },
      'morocco': { name: 'Morocco', type: 'country' },
      'tunisia': { name: 'Tunisia', type: 'country' },
      'cyprus': { name: 'Cyprus', type: 'country' },
      'malta': { name: 'Malta', type: 'country' },
      
      // Cities
      'majorca': { name: 'Majorca', type: 'island' },
      'mallorca': { name: 'Majorca', type: 'island' },
      'barcelona': { name: 'Barcelona', type: 'city' },
      'madrid': { name: 'Madrid', type: 'city' },
      'paris': { name: 'Paris', type: 'city' },
      'rome': { name: 'Rome', type: 'city' },
      'florence': { name: 'Florence', type: 'city' },
      'venice': { name: 'Venice', type: 'city' },
      'milan': { name: 'Milan', type: 'city' },
      'naples': { name: 'Naples', type: 'city' },
      'berlin': { name: 'Berlin', type: 'city' },
      'munich': { name: 'Munich', type: 'city' },
      'hamburg': { name: 'Hamburg', type: 'city' },
      'lisbon': { name: 'Lisbon', type: 'city' },
      'porto': { name: 'Porto', type: 'city' },
      'athens': { name: 'Athens', type: 'city' },
      'santorini': { name: 'Santorini', type: 'island' },
      'mykonos': { name: 'Mykonos', type: 'island' },
      'amsterdam': { name: 'Amsterdam', type: 'city' },
      'rotterdam': { name: 'Rotterdam', type: 'city' },
      'brussels': { name: 'Brussels', type: 'city' },
      'antwerp': { name: 'Antwerp', type: 'city' },
      'zurich': { name: 'Zurich', type: 'city' },
      'geneva': { name: 'Geneva', type: 'city' },
      'vienna': { name: 'Vienna', type: 'city' },
      'salzburg': { name: 'Salzburg', type: 'city' },
      'london': { name: 'London', type: 'city' },
      'edinburgh': { name: 'Edinburgh', type: 'city' },
      'dublin': { name: 'Dublin', type: 'city' },
      'cork': { name: 'Cork', type: 'city' },
      'prague': { name: 'Prague', type: 'city' },
      'budapest': { name: 'Budapest', type: 'city' },
      'warsaw': { name: 'Warsaw', type: 'city' },
      'krakow': { name: 'Krakow', type: 'city' },
      'stockholm': { name: 'Stockholm', type: 'city' },
      'oslo': { name: 'Oslo', type: 'city' },
      'copenhagen': { name: 'Copenhagen', type: 'city' },
      'helsinki': { name: 'Helsinki', type: 'city' },
      'reykjavik': { name: 'Reykjavik', type: 'city' },
      'zagreb': { name: 'Zagreb', type: 'city' },
      'dubrovnik': { name: 'Dubrovnik', type: 'city' },
      'split': { name: 'Split', type: 'city' },
      'ljubljana': { name: 'Ljubljana', type: 'city' },
      'podgorica': { name: 'Podgorica', type: 'city' },
      'budva': { name: 'Budva', type: 'city' },
      'istanbul': { name: 'Istanbul', type: 'city' },
      'antalya': { name: 'Antalya', type: 'city' },
      'cappadocia': { name: 'Cappadocia', type: 'region' },
      'marrakech': { name: 'Marrakech', type: 'city' },
      'casablanca': { name: 'Casablanca', type: 'city' },
      'tunis': { name: 'Tunis', type: 'city' },
      'nicosia': { name: 'Nicosia', type: 'city' },
      'valletta': { name: 'Valletta', type: 'city' },
      'luxembourg': { name: 'Luxembourg', type: 'city' },
      'monaco': { name: 'Monaco', type: 'city' },
      'monte carlo': { name: 'Monte Carlo', type: 'city' },
      'vaduz': { name: 'Vaduz', type: 'city' },
      'andorra': { name: 'Andorra', type: 'country' },
      'san marino': { name: 'San Marino', type: 'country' },
      'vatican': { name: 'Vatican City', type: 'city' }
    };

    // Check for exact matches first
    for (const [key, location] of Object.entries(locationMap)) {
      if (lowerText.includes(key)) {
        return location;
      }
    }

    return null;
  };

  const handleCheckmarkClick = () => {
    if (searchTerm.trim()) {
      const highlighted = highlightKeywords(searchTerm);
      const extracted = extractKeywords(searchTerm);
      const guestCount = extractGuestCount(searchTerm);
      const detectedLocation = extractLocation(searchTerm);
      setHighlightedText(highlighted);
      setExtractedKeywords(extracted);
      setGuestCount(guestCount);
      setIsHighlighted(true);
      
      // Notify parent component about keyword count, guest count, extracted keywords, and location
      if (onKeywordCountChange) {
        onKeywordCountChange(extracted.length, guestCount, extracted);
      }
      if (onLocationDetected && detectedLocation) {
        onLocationDetected(detectedLocation);
      }
    }
  };

  const handleApplyFilters = () => {
    onApplyFilters({ searchTerm });
    onClose();
  };

  const handleResetAll = () => {
    setSearchTerm('');
    setExtractedKeywords([]);
    setHighlightedText('');
    setIsHighlighted(false);
    
    // Notify parent component that count is reset
    if (onKeywordCountChange) {
      onKeywordCountChange(0);
    }
  };

  const handleRemoveKeyword = (keywordToRemove) => {
    // Remove the keyword from the extracted keywords list
    const updatedKeywords = extractedKeywords.filter(keyword => keyword !== keywordToRemove);
    setExtractedKeywords(updatedKeywords);
    
    // Remove the specific keyword from the search term
    const regex = new RegExp(`\\b${keywordToRemove.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}\\b`, 'gi');
    let updatedSearchTerm = searchTerm.replace(regex, '').replace(/\s+/g, ' ').trim();
    
    setSearchTerm(updatedSearchTerm);
    setIsHighlighted(false);
    setHighlightedText('');
    
    // Notify parent component about updated keyword count
    if (onKeywordCountChange) {
      onKeywordCountChange(updatedKeywords.length);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-30 flex items-start justify-center z-50 pt-4">
      <div className="border border-[#2b2926] border-solid relative rounded-2xl w-[343px] h-[648px] overflow-hidden">
        <div className="absolute content-stretch flex flex-col h-[648px] items-start left-0 overflow-hidden top-0 w-[343px]">
          {/* Modal Header */}
          <div className="bg-[rgba(0,0,0,0.3)] border-[#eae5e0] border-b border-solid box-border content-stretch flex flex-col items-start justify-end pb-0 pt-4 px-0 relative shrink-0 w-full">
            <div className="bg-white border-[#eae5e0] border-b border-solid box-border content-stretch flex items-center justify-between px-4 py-2.5 relative rounded-tl-2xl rounded-tr-2xl shrink-0 w-full">
              {/* Close Button */}
              <div className="box-border content-stretch flex gap-2.5 items-center p-2 relative rounded-full shrink-0">
                <div className="relative shrink-0 w-6 h-6">
                  <button
                    onClick={onClose}
                    className="w-6 h-6 flex items-center justify-center"
                  >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M18 6L6 18M6 6l12 12" stroke="#2B2926" strokeWidth="2" strokeLinecap="round"/>
                    </svg>
                  </button>
                </div>
              </div>
              
              {/* Empty space for center */}
              <p className="font-bold leading-7 not-italic relative shrink-0 text-[#2b2926] text-lg text-center text-nowrap tracking-[-0.252px] whitespace-pre">
                &nbsp;
              </p>
              
              {/* Reset All Button */}
              <div className="box-border content-stretch flex gap-2.5 items-center p-2 relative rounded-full shrink-0">
                <button
                  onClick={handleResetAll}
                  className="text-decoration-skip-ink-none text-underline-position-from-font decoration-solid font-semibold leading-6 not-italic relative shrink-0 text-[#2b2926] text-base text-nowrap tracking-[-0.176px] underline whitespace-pre"
                >
                  Reset all
                </button>
              </div>
            </div>
          </div>

          {/* Modal Body */}
          <div className="basis-0 bg-white box-border content-stretch flex flex-col gap-4 grow items-start min-h-px min-w-px px-4 py-6 relative shrink-0 w-full">
            {/* Title with Shine Icon */}
            <div className="content-stretch flex gap-2 items-center relative shrink-0 w-full">
              <div className="relative shrink-0 w-6 h-6">
                <img src={require('../icons/ai.jpg')} alt="AI" className="w-full h-full" />
              </div>
              <p className="basis-0 font-bold grow leading-6 min-h-px min-w-px not-italic relative shrink-0 text-[#2b2926] text-base">
                Tell us what you're looking for
              </p>
            </div>

            {/* Chips Container */}
            {(extractedKeywords.length > 0 || guestCount || searchTerm) && (
              <div className="flex flex-wrap gap-2 w-full">
                {/* Guest Chip */}
                {guestCount && (
                  <div className="bg-[#00809d] text-white px-3 py-1.5 rounded-full flex items-center text-sm font-medium">
                    <span>{guestCount.total} Guest{guestCount.total > 1 ? 's' : ''}</span>
                  </div>
                )}

                {/* Location Chip (if detected) */}
                {(() => {
                  const location = extractLocation(searchTerm);
                  return location ? (
                    <div className="bg-[#00809d] text-white px-3 py-1.5 rounded-full flex items-center text-sm font-medium">
                      <span>{location.name}</span>
                    </div>
                  ) : null;
                })()}

                {/* Keyword Pills */}
                {extractedKeywords.map((keyword, index) => (
                  <div
                    key={index}
                    className="bg-[#00809d] text-white px-3 py-1.5 rounded-full flex items-center gap-2 text-sm font-medium"
                  >
                    <span>{keyword}</span>
                    <button
                      onClick={() => handleRemoveKeyword(keyword)}
                      className="hover:bg-white hover:bg-opacity-20 rounded-full p-0.5 transition-colors"
                    >
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M18 6L6 18M6 6l12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                      </svg>
                    </button>
                  </div>
                ))}
              </div>
            )}

            {/* Input Field */}
            <div className="bg-white border border-[rgba(0,0,0,0.1)] border-solid box-border content-start flex flex-wrap gap-0.5 h-[190px] items-start p-4 relative rounded-xl shrink-0 w-full">
              {isHighlighted ? (
                <div 
                  className="font-normal leading-5 text-sm tracking-[-0.084px] w-full h-full whitespace-pre-wrap break-words overflow-auto cursor-text"
                  dangerouslySetInnerHTML={{ __html: highlightedText }}
                  onClick={handleHighlightedTextClick}
                />
              ) : (
                <textarea
                  ref={textareaRef}
                  placeholder="Write anything, e.g. Villa in Spain, 2 people, quiet area, big pool and amazing sunset views"
                  value={searchTerm}
                  onChange={handleSearchChange}
                  className="font-normal leading-5 text-sm tracking-[-0.084px] w-full h-full focus:outline-none bg-transparent resize-none"
                  rows={8}
                />
              )}
              
              {/* Blue Checkmark Button - appears when user starts typing */}
              {searchTerm.trim().length > 0 && !isHighlighted && (
                <button
                  onClick={handleCheckmarkClick}
                  className="absolute bg-[#00809d] box-border content-stretch flex items-center justify-center p-4 rounded-full shadow-[0px_3px_13px_0px_rgba(0,0,0,0.13)] w-11 h-11 right-4 bottom-4 hover:bg-[#006d8a] transition-colors"
                >
                  <div className="relative shrink-0 w-6 h-6">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M20 6L9 17l-5-5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                </button>
              )}
              
              {/* Edit button when highlighted */}
              {isHighlighted && (
                <button
                  onClick={() => setIsHighlighted(false)}
                  className="absolute bg-gray-500 box-border content-stretch flex items-center justify-center p-4 rounded-full shadow-[0px_3px_13px_0px_rgba(0,0,0,0.13)] w-11 h-11 right-4 bottom-4 hover:bg-gray-600 transition-colors"
                >
                  <div className="relative shrink-0 w-6 h-6">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                </button>
              )}
            </div>
          </div>

          {/* Modal Footer */}
          <div className="bg-white border-[#eae5e0] border-t border-solid box-border content-stretch flex flex-col gap-2 items-center px-6 py-4 relative shrink-0 w-full">
            <button
              onClick={handleApplyFilters}
              className="bg-[#00809d] box-border content-stretch flex items-center justify-center px-6 py-3 relative rounded-lg shrink-0 w-full"
            >
              <p className="font-semibold leading-6 not-italic relative shrink-0 text-base text-nowrap text-white tracking-[-0.176px] whitespace-pre">
                Search
              </p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterModal;
