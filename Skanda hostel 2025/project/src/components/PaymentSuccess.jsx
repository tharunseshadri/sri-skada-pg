import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { CheckCircle, ArrowLeft, Calendar, Clock, Home, CreditCard } from 'lucide-react';

const PaymentSuccess = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { transactionId, amount, roomType, date, time } = location.state || {};
  
  // Generate a random booking ID if not provided
  const bookingId = Math.random().toString(36).substring(2, 10).toUpperCase();

  if (!amount || !roomType) {
    navigate('/');
    return null;
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-2xl mx-auto">
        <button
          onClick={() => navigate('/')}
          className="inline-flex items-center gap-2 text-pink-500 hover:text-pink-600 mb-8"
        >
          <ArrowLeft className="w-5 h-5" />
          Back to Home
        </button>

        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          {/* Success Header */}
          <div className="bg-green-50 px-6 py-8 text-center">
            <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
            <h1 className="text-2xl font-bold text-gray-800 mb-2">Payment Successful!</h1>
            <p className="text-gray-600">Your booking has been confirmed</p>
          </div>

          {/* Booking Details */}
          <div className="p-6 space-y-6">
            {/* Transaction Info */}
            <div className="bg-gray-50 rounded-lg p-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-sm text-gray-600">Booking ID</p>
                  <p className="font-mono font-bold text-gray-800">{bookingId}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Transaction ID</p>
                  <p className="font-mono font-bold text-gray-800">
                    {transactionId || 'TXN' + Math.random().toString(36).substring(2, 10).toUpperCase()}
                  </p>
                </div>
              </div>
            </div>

            {/* Room Details */}
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Home className="w-5 h-5 text-gray-400 mt-1" />
                <div>
                  <p className="font-medium text-gray-800">{roomType}</p>
                  <p className="text-sm text-gray-600">Room Type</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Calendar className="w-5 h-5 text-gray-400 mt-1" />
                <div>
                  <p className="font-medium text-gray-800">{date}</p>
                  <p className="text-sm text-gray-600">Check-in Date</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-gray-400 mt-1" />
                <div>
                  <p className="font-medium text-gray-800">{time}</p>
                  <p className="text-sm text-gray-600">Check-in Time</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CreditCard className="w-5 h-5 text-gray-400 mt-1" />
                <div>
                  <p className="font-medium text-gray-800">₹{amount}</p>
                  <p className="text-sm text-gray-600">Amount Paid</p>
                </div>
              </div>
            </div>

            {/* Additional Information */}
            <div className="bg-pink-50 p-4 rounded-lg">
              <h3 className="font-semibold mb-2">Next Steps:</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• A confirmation email has been sent to your registered email address</li>
                <li>• Please arrive at the hostel on your check-in date with your booking ID</li>
                <li>• Bring a valid government ID for verification</li>
                <li>• For any queries, contact our support team</li>
              </ul>
            </div>

            {/* Download Button */}
            <button
              onClick={() => window.print()}
              className="w-full bg-pink-500 text-white py-3 rounded-lg font-semibold hover:bg-pink-600 transition-colors"
            >
              Download Receipt
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentSuccess;