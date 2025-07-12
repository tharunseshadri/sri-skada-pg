import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Calendar, Clock, Users, CreditCard, ArrowRight, ArrowLeft } from 'lucide-react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

const BookingConfirmation = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    roomType: 'Two Sharing',
    checkInDate: new Date(),
    checkInTime: '10:00',
    numberOfGuests: 1
  });

  const roomPrices = {
    'Two Sharing': { min: 9000, max: 9500 },
    'Three Sharing': { min: 7500, max: 8000 },
    'Four Sharing': { min: 6500, max: 6500 }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/payment', {
      state: {
        roomType: formData.roomType,
        price: roomPrices[formData.roomType].min,
        date: formData.checkInDate.toLocaleDateString(),
        time: formData.checkInTime
      }
    });
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-3xl mx-auto">
        <button
          onClick={() => navigate('/')}
          className="inline-flex items-center gap-2 text-pink-500 hover:text-pink-600 mb-8"
        >
          <ArrowLeft className="w-5 h-5" />
          Back to Home
        </button>

        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="bg-pink-500 px-6 py-4">
            <h1 className="text-2xl font-bold text-white">Book Your Stay</h1>
          </div>

          <form onSubmit={handleSubmit} className="p-6 space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Room Type Selection */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Room Type
                </label>
                <select
                  value={formData.roomType}
                  onChange={(e) => setFormData({ ...formData, roomType: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-pink-500 focus:border-pink-500"
                >
                  <option value="Two Sharing">Two Sharing (₹9,000 - ₹9,500)</option>
                  <option value="Three Sharing">Three Sharing (₹7,500 - ₹8,000)</option>
                  <option value="Four Sharing">Four Sharing (₹6,500)</option>
                </select>
              </div>

              {/* Number of Guests */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Number of Guests
                </label>
                <select
                  value={formData.numberOfGuests}
                  onChange={(e) => setFormData({ ...formData, numberOfGuests: parseInt(e.target.value) })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-pink-500 focus:border-pink-500"
                >
                  <option value={1}>1 Person</option>
                  <option value={2}>2 People</option>
                </select>
              </div>

              {/* Check-in Date */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Check-in Date
                </label>
                <div className="relative">
                  <DatePicker
                    selected={formData.checkInDate}
                    onChange={(date) => setFormData({ ...formData, checkInDate: date })}
                    minDate={new Date()}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-pink-500 focus:border-pink-500"
                  />
                  <Calendar className="absolute right-3 top-2.5 h-5 w-5 text-gray-400" />
                </div>
              </div>

              {/* Check-in Time */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Check-in Time
                </label>
                <div className="relative">
                  <select
                    value={formData.checkInTime}
                    onChange={(e) => setFormData({ ...formData, checkInTime: e.target.value })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-pink-500 focus:border-pink-500"
                  >
                    <option value="10:00">10:00 AM</option>
                    <option value="11:00">11:00 AM</option>
                    <option value="12:00">12:00 PM</option>
                    <option value="14:00">2:00 PM</option>
                    <option value="15:00">3:00 PM</option>
                    <option value="16:00">4:00 PM</option>
                  </select>
                  <Clock className="absolute right-3 top-2.5 h-5 w-5 text-gray-400" />
                </div>
              </div>
            </div>

            {/* Summary */}
            <div className="bg-gray-50 p-6 rounded-lg mt-6">
              <h3 className="text-lg font-semibold mb-4">Booking Summary</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-600">Room Type</span>
                  <span className="font-medium">{formData.roomType}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Price Range</span>
                  <span className="font-medium">
                    {roomPrices[formData.roomType].min === roomPrices[formData.roomType].max
                      ? `₹${roomPrices[formData.roomType].min}`
                      : `₹${roomPrices[formData.roomType].min} - ₹${roomPrices[formData.roomType].max}`}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Check-in</span>
                  <span className="font-medium">
                    {formData.checkInDate.toLocaleDateString()} at {formData.checkInTime}
                  </span>
                </div>
              </div>
            </div>

            {/* Important Notes */}
            <div className="bg-pink-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold mb-4">Important Information</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-pink-500 mt-1">•</span>
                  <span>Advance payment of ₹3,000 required</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-pink-500 mt-1">•</span>
                  <span>Monthly maintenance fee of ₹1,000 (same for 1 month or 1 year)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-pink-500 mt-1">•</span>
                  <span>Returnable security deposit of ₹2,000</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-pink-500 mt-1">•</span>
                  <span>20 days notice period required before vacating</span>
                </li>
              </ul>
            </div>

            <button
              type="submit"
              className="w-full bg-pink-500 text-white py-3 rounded-lg font-semibold hover:bg-pink-600 transition-colors flex items-center justify-center gap-2"
            >
              Proceed to Payment
              <ArrowRight className="w-5 h-5" />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default BookingConfirmation;