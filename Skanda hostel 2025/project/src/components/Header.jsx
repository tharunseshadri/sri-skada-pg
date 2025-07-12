import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { BedDouble, Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-24 py-4">
          <div className="flex items-center flex-shrink-0">
            <BedDouble className="h-10 w-10 text-pink-500" />
            <div className="ml-3">
              <h1 className="text-xl md:text-3xl font-extrabold text-gray-800 tracking-tight leading-none whitespace-nowrap">
                Sri Skanda{' '}
                <span className="bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">
                  PG Women's Hostel
                </span>
              </h1>
              <p className="text-sm md:text-base text-gray-600 font-medium mt-1.5 whitespace-nowrap">
                Madhapur, Hyderabad - India
              </p>
            </div>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#rooms" className="text-gray-600 hover:text-pink-500">Rooms</a>
            <a href="#amenities" className="text-gray-600 hover:text-pink-500">Amenities</a>
            <a href="#contact" className="text-gray-600 hover:text-pink-500">Contact</a>
            <button 
              onClick={() => navigate('/book')}
              className="bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-600 transition-colors"
            >
              Book Now
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-600 hover:text-pink-500"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a
                href="#rooms"
                className="block px-3 py-2 text-gray-600 hover:text-pink-500"
                onClick={() => setIsMenuOpen(false)}
              >
                Rooms
              </a>
              <a
                href="#amenities"
                className="block px-3 py-2 text-gray-600 hover:text-pink-500"
                onClick={() => setIsMenuOpen(false)}
              >
                Amenities
              </a>
              <a
                href="#contact"
                className="block px-3 py-2 text-gray-600 hover:text-pink-500"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </a>
              <button 
                onClick={() => {
                  setIsMenuOpen(false);
                  navigate('/book');
                }}
                className="w-full text-left bg-pink-500 text-white px-3 py-2 rounded-md hover:bg-pink-600 transition-colors"
              >
                Book Now
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;