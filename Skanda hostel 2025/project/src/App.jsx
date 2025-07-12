import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { BedDouble, Wifi, Coffee, UtensilsCrossed, Phone, Mail, MapPin, Shield, Users, Sparkles, Building2, DoorOpen, Home } from 'lucide-react';
import Header from './components/Header';
import Hero from './components/Hero';
import RoomCard from './components/RoomCard';
import Amenities from './components/Amenities';
import ContactForm from './components/ContactForm';
import LoginPage from './components/LoginPage';
import LocationMap from './components/LocationMap';
import PaymentPage from './components/PaymentPage';
import WelcomePage from './components/WelcomePage';
import BookingConfirmation from './components/BookingConfirmation';
import PaymentSuccess from './components/PaymentSuccess';

function HomePage({ isLoggedIn, onLogin }) {
  const rooms = [
    {
      id: 2,
      type: 'Two Sharing',
      price: 9000,
      features: [
        'Shared Room (2 Persons)',
        'Two Single Beds with Mattress & Pillows',
        'Personal Wardrobes',
        'Attached Western Toilets',
        '32" TV in Room',
        'Safety Lockers',
        'Electricity Included',
        'Food Included',
        'Security Deposit: ₹2,000',
        'Refund Amount: ₹1,000 Fixed',
        'Notice Period: 30 days'
      ]
    },
    {
      id: 3,
      type: 'Three Sharing',
      price: 7000,
      features: [
        'Shared Room (3 Persons)',
        'Three Single Beds with Mattress & Pillows',
        'Personal Wardrobes',
        'Attached Western Toilets',
        '32" TV in Room',
        'Safety Lockers',
        'Electricity Included',
        'Food Included',
        'Security Deposit: ₹2,000',
        'Refund Amount: ₹1,000 Fixed',
        'Notice Period: 30 days'
      ]
    },
    {
      id: 4,
      type: 'Four Sharing',
      price: 6500,
      features: [
        'Shared Room (4 Persons)',
        'Four Single Beds with Mattress & Pillows',
        'Personal Wardrobes',
        'Attached Western Toilets',
        '32" TV in Room',
        'Safety Lockers',
        'Electricity Included',
        'Food Included',
        'Security Deposit: ₹2,000',
        'Refund Amount: ₹1,000 Fixed',
        'Notice Period: 30 days'
      ]
    }
  ];

  const amenities = [
    { icon: <Wifi className="w-6 h-6" />, name: 'High-Speed WiFi' },
    { icon: <Coffee className="w-6 h-6" />, name: 'Coffee/Tea Station' },
    { icon: <UtensilsCrossed className="w-6 h-6" />, name: 'Modern Kitchen' },
    { icon: <Shield className="w-6 h-6" />, name: '24/7 Security' },
    { icon: <Users className="w-6 h-6" />, name: 'Common Area' },
    { icon: <Sparkles className="w-6 h-6" />, name: 'Daily Cleaning' }
  ];

  const hostelInfo = [
    { icon: <Building2 className="w-8 h-8" />, title: '4 Floors', description: 'Modern Building' },
    { icon: <DoorOpen className="w-8 h-8" />, title: '25 Rooms', description: 'Well-Furnished' },
    { icon: <Home className="w-8 h-8" />, title: '75 Capacity', description: 'Comfortable Living' }
  ];

  if (!isLoggedIn) {
    return <LoginPage onLogin={onLogin} />;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <Hero />
      
      {/* Rooms Section */}
      <section className="py-16 px-4 max-w-7xl mx-auto" id="rooms">
        <h2 className="text-3xl font-bold text-center mb-4">Our Rooms</h2>
        <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
          Choose from our variety of comfortable and well-furnished rooms designed to suit your preferences and budget
        </p>

        {/* Hostel Information */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {hostelInfo.map((info, index) => (
            <div key={index} className="bg-white rounded-lg p-6 shadow-md text-center transform hover:scale-105 transition-transform">
              <div className="flex justify-center mb-4 text-pink-500">{info.icon}</div>
              <h3 className="text-xl font-bold mb-2">{info.title}</h3>
              <p className="text-gray-600">{info.description}</p>
            </div>
          ))}
        </div>

        {/* Room Types */}
        <h3 className="text-2xl font-semibold text-center mb-8">Room Types</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {rooms.map(room => (
            <RoomCard key={room.id} {...room} />
          ))}
        </div>
      </section>

      {/* Amenities Section */}
      <Amenities amenities={amenities} />

      {/* Location Map */}
      <LocationMap />

      {/* Contact Section */}
      <ContactForm />

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
            <div className="space-y-2">
              <p className="flex items-center gap-2">
                <Phone className="w-5 h-5" />
                +91 98765 43210
              </p>
              <p className="flex items-center gap-2">
                <Mail className="w-5 h-5" />
                info@sriskandapg.com
              </p>
              <p className="flex items-center gap-2">
                <MapPin className="w-5 h-5" />
                Madhapur, Hyderabad - India
              </p>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#rooms" className="hover:text-pink-300">Rooms</a></li>
              <li><a href="#amenities" className="hover:text-pink-300">Amenities</a></li>
              <li><a href="#contact" className="hover:text-pink-300">Contact</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
            <div className="flex gap-4">
              <a href="#" className="hover:text-pink-300">Instagram</a>
              <a href="#" className="hover:text-pink-300">Facebook</a>
              <a href="#" className="hover:text-pink-300">Twitter</a>
            </div>
          </div>
        </div>
        <div className="text-center mt-8 pt-8 border-t border-gray-700">
          <p>&copy; 2024 Sri Skanda PG Women's Hostel. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showLoginPage, setShowLoginPage] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleWelcomeLogin = () => {
    setShowLoginPage(true);
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={
          showLoginPage ? 
            <HomePage isLoggedIn={isLoggedIn} onLogin={handleLogin} /> : 
            <WelcomePage onLogin={handleWelcomeLogin} />
        } />
        <Route path="/book" element={<BookingConfirmation />} />
        <Route path="/payment" element={<PaymentPage />} />
        <Route path="/payment-success" element={<PaymentSuccess />} />
      </Routes>
    </Router>
  );
}

export default App;