import React, { useState } from 'react';
import { MapPin, Navigation2 } from 'lucide-react';

const LocationMap = () => {
  const [showTooltip, setShowTooltip] = useState(false);

  const handleNavigate = () => {
    // Open in Google Maps with the exact coordinates
    window.open('https://maps.google.com/?q=17.4482,78.3832', '_blank');
  };

  return (
    <section className="py-16 bg-white relative" id="location">
      {/* Floating Navigation Button */}
      <button
        onClick={handleNavigate}
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
        className="fixed bottom-8 right-8 bg-pink-500 text-white p-4 rounded-full shadow-lg hover:bg-pink-600 transition-all hover:scale-110 z-50"
      >
        <Navigation2 className="w-6 h-6" />
        {showTooltip && (
          <div className="absolute bottom-full right-0 mb-2 whitespace-nowrap bg-gray-800 text-white text-sm py-2 px-4 rounded-lg">
            Navigate to Hostel
          </div>
        )}
      </button>

      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Our Location</h2>
          <p className="text-gray-600">Find us easily in Madhapur, Hyderabad</p>
        </div>

        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="p-8">
            <div className="flex flex-col md:flex-row items-start gap-8">
              <div className="flex-1 space-y-6">
                <div className="flex items-start gap-3">
                  <MapPin className="w-6 h-6 text-pink-500 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-xl mb-2">Sri Skanda PG Women's Hostel</h3>
                    <p className="text-gray-700 text-lg leading-relaxed">
                      1-24/A, Sri Ramnagar Colony,<br />
                      Metro pillar no. C 1717,<br />
                      Behind Friend Bawarchi Restaurant<br />
                      Guttala Begumpet, Madhapur-500081
                    </p>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <h4 className="font-semibold text-lg">Landmarks:</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Near Metro Pillar No. C 1717</li>
                    <li>• Behind Friend Bawarchi Restaurant</li>
                    <li>• Guttala Begumpet Area</li>
                    <li>• 10 minutes from Hitech City</li>
                  </ul>
                </div>

                <a
                  href="https://maps.google.com/?q=17.4482,78.3832"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-pink-500 text-white px-6 py-3 rounded-lg hover:bg-pink-600 transition-colors"
                >
                  <MapPin className="w-5 h-5" />
                  Open in Google Maps
                </a>
              </div>

              <div className="flex-1">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h4 className="font-semibold text-lg mb-4">How to Reach Us:</h4>
                  <div className="space-y-4">
                    <div>
                      <h5 className="font-medium mb-2">By Metro:</h5>
                      <p className="text-gray-700">Get down at Hitech City Metro Station. Take an auto or cab to Guttala Begumpet (5-7 minutes).</p>
                    </div>
                    <div>
                      <h5 className="font-medium mb-2">By Bus:</h5>
                      <p className="text-gray-700">Take any bus to Madhapur. Get down at Friend Bawarchi Restaurant stop.</p>
                    </div>
                    <div>
                      <h5 className="font-medium mb-2">By Car:</h5>
                      <p className="text-gray-700">Search for "Friend Bawarchi Restaurant" on Google Maps. We are located right behind it.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationMap;