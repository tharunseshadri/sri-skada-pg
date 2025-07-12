import React from 'react';
import { BedDouble } from 'lucide-react';

const WelcomePage = ({ onLogin }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 via-white to-purple-100 flex items-center justify-center p-4">
      <div className="w-full max-w-lg text-center">
        <div className="flex justify-center mb-6">
          <BedDouble className="h-16 w-16 text-pink-500" />
        </div>
        
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-4">
          Sri Skanda Women's PG Hostel
        </h1>
        
        <p className="text-2xl md:text-3xl font-bold text-pink-500 mb-12">
          We With You!
        </p>

        <button
          onClick={onLogin}
          className="bg-pink-500 text-white px-12 py-4 rounded-lg text-lg font-semibold hover:bg-pink-600 transform transition-all hover:scale-105 shadow-lg"
        >
          Visit Us
        </button>
      </div>
    </div>
  );
};

export default WelcomePage;