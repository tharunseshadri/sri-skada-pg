import React, { useState } from 'react';
import { Check, Info } from 'lucide-react';
import DatePicker from 'react-datepicker';
import { useNavigate } from 'react-router-dom';
import "react-datepicker/dist/react-datepicker.css";

const RoomCard = ({ type, price, image, features }) => {
  const [showBooking, setShowBooking] = useState(false);
  const [showPricing, setShowPricing] = useState(false);
  const [startDate, setStartDate] = useState(new Date());
  const [time, setTime] = useState('10:00');
  const navigate = useNavigate();

  const getPriceRange = () => {
    switch(type) {
      case "Two Sharing":
        return "₹9,000 - ₹9,500";
      case "Three Sharing":
        return "₹7,500 - ₹8,000";
      case "Four Sharing":
        return "₹6,500";
      default:
        return `₹${price}`;
    }
  };

  const handleProceedToPayment = () => {
    navigate('/payment', {
      state: {
        roomType: type,
        price: price,
        date: startDate.toLocaleDateString(),
        time: time
      }
    });
  };

  const PricingDetails = () => (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-8 max-w-md w-full mx-4">
        <h3 className="text-2xl font-bold mb-6 text-gray-800">Pricing Details</h3>
        <div className="space-y-4">
          <div className="bg-pink-50 p-4 rounded-lg">
            <h4 className="font-semibold text-lg mb-2">Room Rent</h4>
            <p className="text-gray-700">{getPriceRange()}/month</p>
          </div>
          
          <div className="space-y-2">
            <div className="flex justify-between py-2 border-b">
              <span>Advance</span>
              <span className="font-semibold">₹3,000</span>
            </div>
            <div className="flex justify-between py-2 border-b">
              <span>Maintenance</span>
              <span className="font-semibold">₹1,000/month</span>
            </div>
            <div className="flex justify-between py-2 border-b">
              <span>Returnable Amount</span>
              <span className="font-semibold">₹2,000</span>
            </div>
          </div>

          <div className="bg-gray-50 p-4 rounded-lg">
            <h4 className="font-semibold mb-2">Important Notes:</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>• Notice period: 20 days</li>
              <li>• Maintenance fee same for 1 month or 1 year</li>
              <li>• Security deposit is returnable</li>
            </ul>
          </div>

          <button
            onClick={() => setShowPricing(false)}
            className="w-full bg-pink-500 text-white py-3 rounded-lg font-bold hover:bg-pink-600 transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );

  const getImageSrc = () => {
    switch(type) {
      case "Two Sharing":
        return "/Sri Skanda PG Hostel 2 sharing copy.jpg";
      case "Three Sharing":
        return "https://images.unsplash.com/photo-1576678927484-cc907957088c?auto=format&fit=crop&q=80&w=1200";
      case "Four Sharing":
        return "https://images.unsplash.com/photo-1576678927484-cc907957088c?auto=format&fit=crop&q=80&w=1200";
      default:
        return "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&q=80&w=1200";
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105">
      <img
        src={getImageSrc()}
        alt={type}
        className="w-full h-48 object-cover"
      />
      <div className="p-6">
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-xl font-semibold">{type}</h3>
          <button
            onClick={() => setShowPricing(true)}
            className="text-pink-500 hover:text-pink-600"
          >
            <Info className="w-5 h-5" />
          </button>
        </div>
        <p className="text-2xl font-bold text-pink-500 mb-4">
          {getPriceRange()}<span className="text-sm text-gray-500">/month</span>
        </p>
        <ul className="space-y-2">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center gap-2">
              <Check className="w-5 h-5 text-green-500" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
        {!showBooking ? (
          <button 
            onClick={() => setShowBooking(true)}
            className="w-full mt-6 bg-pink-500 text-white py-2 rounded-md hover:bg-pink-600 transition-colors"
          >
            Book Now
          </button>
        ) : (
          <div className="mt-6 space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Select Date</label>
              <DatePicker
                selected={startDate}
                onChange={(date) => setStartDate(date)}
                minDate={new Date()}
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Select Time</label>
              <select
                value={time}
                onChange={(e) => setTime(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
              >
                <option value="10:00">10:00 AM</option>
                <option value="11:00">11:00 AM</option>
                <option value="12:00">12:00 PM</option>
                <option value="14:00">2:00 PM</option>
                <option value="15:00">3:00 PM</option>
                <option value="16:00">4:00 PM</option>
              </select>
            </div>
            <button
              onClick={handleProceedToPayment}
              className="w-full bg-pink-500 text-white py-2 rounded-md hover:bg-pink-600 transition-colors"
            >
              Proceed to Payment
            </button>
            <button
              onClick={() => setShowBooking(false)}
              className="w-full bg-gray-100 text-gray-700 py-2 rounded-md hover:bg-gray-200 transition-colors"
            >
              Cancel
            </button>
          </div>
        )}
      </div>
      {showPricing && <PricingDetails />}
    </div>
  );
};

export default RoomCard;