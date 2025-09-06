import React, { useState, useEffect } from 'react';
import logo from "../assets/logo.jpeg";

const Logo: React.FC = () => (
  <svg viewBox="0 0 1000 1000" role="presentation" aria-hidden="true" focusable="false" className="h-8 w-8 block" style={{ fill: "rgb(255, 56, 92)" }}>
    <path d="m499.3 736.7c-51-64-81-120.1-91-168.1-10-39-6-70 11-93 18-21 41-35 63-37 22-2 41 4 58 15 17 11 30 27 43 47 13-20 26-36 43-47 17-11 36-17 58-15 22 2 45 16 63 37 17 23 21 54 11 93-11 49-41 105-91 168.1-25 31-53 63-82 92-29-29-57-61-82-92zm0 263.3c-119.1-161.9-205.4-318.5-241.9-445.7-36.5-127.2-18.9-243.1 52.1-308.7 71-65.5 167.5-86.8 265.7-59.8 98.2 27 182.9 83.7 234.5 167.3 51.6 83.6 63.6 186.2 33.3 283.7-30.2 97.5-88.3 189.2-170.9 281.1-10.1 11.2-22.3 22.3-36.4 33.3-14.1-11-26.3-22.1-36.4-33.3z"></path>
  </svg>
);

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md' : 'bg-transparent'}`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <a href="#/" className="flex items-center gap-2">
            {/*<Logo />*/}
            <img
                src={logo}
                alt="River's Edge Logo"
                className="h-16 w-auto block"
            />
            {/*<span className="text-xl font-bold text-brand-pink hidden sm:block">RiversEdge</span>*/}
          </a>
          <nav className="flex items-center space-x-4">
            <a href="#amenities" className="text-gray-600 hover:text-brand-pink font-medium px-3 py-2 rounded-md">Amenities</a>
            <a href="#reviews" className="text-gray-600 hover:text-brand-pink font-medium px-3 py-2 rounded-md">Reviews</a>
            <a href="#booking" className="bg-brand-pink text-white font-bold px-4 py-2 rounded-full hover:bg-red-600 transition duration-300">
              Book Now
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
