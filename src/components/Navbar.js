import React from 'react';

const Navbar = () => {
  return (
    <div className="bg-petrol px-4 py-3">
      <div className="flex items-center justify-between">
        {/* Left Group - Logo */}
        <div className="flex items-center">
          <div className="text-white font-bold text-lg">
            holidu
          </div>
        </div>
        
        {/* Right Group - Icons */}
        <div className="flex items-center gap-4">
          {/* Heart Icon */}
          <div className="w-6 h-6">
            <svg viewBox="0 0 24 24" fill="none">
              <path 
                d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" 
                fill="white"
              />
            </svg>
          </div>
          
          {/* Menu Icon */}
          <div className="w-6 h-6">
            <svg viewBox="0 0 24 24" fill="none">
              <path d="M3 12h18M3 6h18M3 18h18" stroke="white" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;





