import React from 'react';
import AccommodationCard from './AccommodationCard';

const SearchResults: React.FC = () => {
  const accommodations = [
    {
      id: 1,
      image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=400&h=300&fit=crop',
      title: 'Apartment',
      location: 'Otterfing, Germany',
      distance: '2.3 km from Munich',
      skiDistance: '5.2 km to ski area',
      rating: 8.5,
      reviewCount: 13,
      reviewText: 'Very good',
      familyRated: true,
      price: '€4000',
      originalPrice: '€5000',
      discount: '-20%',
      nights: '14 nights',
      guests: 'Sleeps 2 pers.',
      bedrooms: '1 bedroom',
      size: '40m²',
      eco: true,
      multiUnit: '3 more units available',
      policy: 'Free cancellation · Mobile-only price',
      tags: []
    },
    {
      id: 2,
      image: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=400&h=300&fit=crop',
      title: 'Munich, Germany',
      location: 'Munich, Germany',
      distance: '2.3km from Bergen',
      rating: null,
      reviewCount: null,
      reviewText: null,
      familyRated: false,
      price: '€4000',
      originalPrice: '€5000',
      discount: '-20%',
      nights: '14 nights',
      guests: 'Sleeps 4 pers.',
      bedrooms: '2 bedroom',
      size: '861ft²',
      eco: false,
      multiUnit: '2.3km from Bergen',
      policy: 'Free cancellation',
      tags: ['Top rated']
    },
    {
      id: 3,
      image: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=400&h=300&fit=crop',
      title: 'Munich, Germany',
      location: 'Munich, Germany',
      distance: '2.3km from Bergen',
      rating: null,
      reviewCount: null,
      reviewText: null,
      familyRated: false,
      price: '€4000',
      originalPrice: '€5000',
      discount: '-20%',
      nights: '14 nights',
      guests: 'Sleeps 4 pers.',
      bedrooms: '2 bedroom',
      size: '1,399ft²',
      eco: false,
      multiUnit: '2.3km from Bergen',
      policy: 'Long stay deal · Free cancellation',
      tags: ['Good deal']
    },
    {
      id: 4,
      image: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=400&h=300&fit=crop',
      title: 'Munich, Germany',
      location: 'Munich, Germany',
      distance: '2.3km from Bergen',
      rating: null,
      reviewCount: null,
      reviewText: null,
      familyRated: false,
      price: '€4000',
      originalPrice: '€5000',
      discount: '-20%',
      nights: '14 nights',
      guests: 'Sleeps 4 pers.',
      bedrooms: '2 bedroom',
      size: '861ft²',
      eco: false,
      multiUnit: '2.3km from Bergen',
      policy: '',
      tags: ['Great views']
    },
    {
      id: 5,
      image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=400&h=300&fit=crop',
      title: 'Holiday apartment',
      location: 'Munich, Germany',
      distance: '2.3km from Bergen',
      rating: 8.5,
      reviewCount: 13,
      reviewText: 'Very good',
      familyRated: true,
      price: '€4000',
      originalPrice: '€5000',
      discount: '-20%',
      nights: '14 nights',
      guests: 'Sleeps 4 pers.',
      bedrooms: '2 bedroom',
      size: '861ft²',
      eco: true,
      multiUnit: '2.3km from Bergen',
      policy: 'Free cancellation · Mobile-only price',
      tags: ['Star Host']
    },
    {
      id: 6,
      image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=400&h=300&fit=crop',
      title: 'Munich, Germany',
      location: 'Munich, Germany',
      distance: '2.3km from Bergen',
      rating: null,
      reviewCount: null,
      reviewText: null,
      familyRated: false,
      price: '€4000',
      originalPrice: '€5000',
      discount: '-20%',
      nights: '14 nights',
      guests: 'Sleeps 4 pers.',
      bedrooms: '2 bedroom',
      size: '861ft²',
      eco: false,
      multiUnit: '2.3km from Bergen',
      policy: '',
      tags: ['Star Host']
    }
  ];

  return (
    <div className="space-y-4">
      {accommodations.map((accommodation) => (
        <AccommodationCard key={accommodation.id} accommodation={accommodation} />
      ))}
    </div>
  );
};

export default SearchResults;





