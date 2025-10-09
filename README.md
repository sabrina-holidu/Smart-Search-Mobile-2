# Smart Search Mobile - Travel Accommodation Prototype

A React-based mobile prototype for travel accommodation booking, built to match the Figma design specifications.

## Features

- **Smart Search Interface**: Clean search input with destination and criteria fields
- **Filter Chips**: Interactive filter options for guests, dates, and filters
- **Accommodation Listings**: Detailed property cards with images, ratings, and pricing
- **Map Integration**: Map view with toggle button
- **Responsive Design**: Mobile-first design with petrol color scheme
- **Interactive Elements**: Heart icons, tags, and policy information

## Design System

- **Colors**: 
  - Petrol: #00809D (primary)
  - Petrol Dark: #024251
  - Success: #028500
  - Error: #D73900
  - Gray tones for text and borders

- **Typography**: Inter font family with various weights
- **Components**: Reusable cards, chips, and navigation elements

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm start
```

3. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Project Structure

```
src/
├── components/
│   ├── Home.tsx              # Main layout component
│   ├── Navbar.tsx           # Navigation bar
│   ├── SmartSearch.tsx      # Search interface
│   ├── FilterChips.tsx      # Filter options
│   ├── MapSection.tsx       # Map view
│   ├── SearchResults.tsx    # Results container
│   └── AccommodationCard.tsx # Individual listing cards
├── App.tsx                   # Root component
├── index.tsx                 # Entry point
└── index.css                 # Global styles with Tailwind
```

## Components

### Home
Main container with petrol background and white content area

### SmartSearch
Search interface with destination and criteria inputs

### AccommodationCard
Individual property listings with:
- Property images
- Ratings and reviews
- Location details
- Pricing with discounts
- Property specifications
- Policy information
- Interactive elements (heart, tags)

## Styling

Built with Tailwind CSS for consistent styling and responsive design. Custom color palette matches the Figma design specifications.

## Browser Support

- Modern browsers with ES6+ support
- Mobile-first responsive design
- Touch-friendly interface elements





