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
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" clipRule="evenodd" d="M19.6602 3.98968C17.0202 2.18968 13.7602 3.02968 12.0002 5.08968C10.2402 3.02968 6.98021 2.17968 4.34021 3.98968C2.94021 4.94968 2.06021 6.56968 2.00021 8.27968C1.86021 12.1597 5.30021 15.2697 10.5502 20.0397L10.6502 20.1297C11.4102 20.8197 12.5802 20.8197 13.3402 20.1197L13.4502 20.0197C18.7002 15.2597 22.1302 12.1497 22.0002 8.26968C21.9402 6.56968 21.0602 4.94968 19.6602 3.98968ZM12.1002 18.5497L12.0002 18.6497L11.9002 18.5497C7.14021 14.2397 4.00021 11.3897 4.00021 8.49968C4.00021 6.49968 5.50021 4.99968 7.50021 4.99968C8.52688 4.99968 9.71688 5.78634 11.0702 7.35968L12.0002 8.35108L12.9402 7.35968C14.2869 5.78634 15.4735 4.99968 16.5002 4.99968C18.5002 4.99968 20.0002 6.49968 20.0002 8.49968C20.0002 11.3897 16.8602 14.2397 12.1002 18.5497Z" fill="white"/>
            </svg>
          </div>
          
          {/* Menu Icon */}
          <div className="w-6 h-6">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" clipRule="evenodd" d="M4 18H20C20.55 18 21 17.55 21 17C21 16.45 20.55 16 20 16H4C3.45 16 3 16.45 3 17C3 17.55 3.45 18 4 18ZM4 13H20C20.55 13 21 12.55 21 12C21 11.45 20.55 11 20 11H4C3.45 11 3 11.45 3 12C3 12.55 3.45 13 4 13ZM3 7C3 7.55 3.45 8 4 8H20C20.55 8 21 7.55 21 7C21 6.45 20.55 6 20 6H4C3.45 6 3 6.45 3 7Z" fill="white"/>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;





