import React from 'react';
import { useNavigate } from 'react-router-dom';

const Hero = () => {
  const navigate = useNavigate();

  const scrollToRooms = () => {
    const roomsSection = document.getElementById('rooms');
    if (roomsSection) {
      roomsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative h-[600px]">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: 'url(https://d2bxpw04qb5rhq.cloudfront.net/production/property_image/image/105032/a960cc40970e2cf2dd17457d1e1afff7372f91ef22542397a08bbe768c0bfefd18fb8b2ad7a0d024/1.jpg)'
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50" />
      </div>
      <div className="relative h-full flex items-center justify-center text-center">
        <div className="max-w-3xl px-4">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Welcome to Your Home Away From Home
          </h1>
          <p className="text-xl text-white mb-8">
            Experience comfortable living with premium amenities and a safe environment
          </p>
          <button 
            onClick={scrollToRooms}
            className="bg-pink-500 text-white px-8 py-3 rounded-md text-lg font-semibold hover:bg-pink-600 transition-all transform hover:scale-105 shadow-lg"
          >
            Book Your Stay
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;