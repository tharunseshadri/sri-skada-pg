import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Check, ArrowLeft, CreditCard } from 'lucide-react';
import { loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe('pk_test_51BTUDGJAJfZb9HEBwDg86TN1KNprHjkfipXmEDMb0gSCassK5T32UwUSAZBwXF96hdgz8KQnmhDgdZDUPVB078ib00mPTA6Z7S');

const PaymentPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { roomType, price, date, time } = location.state || {};
  const [selectedMethod, setSelectedMethod] = useState(null);
  const [isProcessing, setIsProcessing] = useState(false);

  const paymentMethods = [
    {
      id: 'gpay',
      title: 'Google Pay',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Google_Pay_Logo_%282020%29.svg/2560px-Google_Pay_Logo_%282020%29.svg.png'
    },
    {
      id: 'phonepe',
      title: 'PhonePe',
      logo: 'https://download.logo.wine/logo/PhonePe/PhonePe-Logo.wine.png'
    },
    {
      id: 'paytm',
      title: 'Paytm',
      logo: 'https://download.logo.wine/logo/Paytm/Paytm-Logo.wine.png'
    },
    {
      id: 'card',
      title: 'Credit/Debit Card',
      icon: <CreditCard className="w-6 h-6" />
    }
  ];

  const handlePayment = async () => {
    if (!selectedMethod) {
      alert('Please select a payment method');
      return;
    }

    setIsProcessing(true);

    try {
      const stripe = await stripePromise;
      if (!stripe) {
        throw new Error('Stripe failed to load');
      }

      // Simulate payment processing
      await new Promise(resolve => setTimeout(resolve, 2000));

      // Navigate to success page with transaction details
      navigate('/payment-success', {
        state: {
          transactionId: 'TXN' + Math.random().toString(36).substring(2, 10).toUpperCase(),
          amount: price,
          roomType,
          date,
          time
        }
      });

    } catch (error) {
      console.error('Payment error:', error);
      alert('Payment failed. Please try again.');
      setIsProcessing(false);
    }
  };

  if (!roomType || !price || !date || !time) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Invalid Booking Details</h2>
          <button
            onClick={() => navigate('/')}
            className="inline-flex items-center gap-2 text-pink-500 hover:text-pink-600"
          >
            <ArrowLeft className="w-5 h-5" />
            Return to Home
          </button>
        </div>
      </div>
    );
  }

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

        <div className="bg-white rounded-lg shadow-lg p-8">
          <h1 className="text-2xl font-bold mb-8">Booking Summary</h1>
          
          <div className="space-y-6">
            <div className="flex justify-between pb-6 border-b">
              <div>
                <h2 className="text-xl font-semibold mb-2">{roomType}</h2>
                <p className="text-gray-600">
                  Date: {date}<br />
                  Time: {time}
                </p>
              </div>
              <div className="text-right">
                <p className="text-2xl font-bold text-pink-500">₹{price}</p>
                <p className="text-gray-500">/month</p>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="font-semibold">What's Included:</h3>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <Check className="w-5 h-5 text-green-500" />
                  <span>First Month Rent</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-5 h-5 text-green-500" />
                  <span>Security Deposit</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-5 h-5 text-green-500" />
                  <span>Maintenance Charges</span>
                </li>
              </ul>
            </div>

            {/* Payment Methods */}
            <div className="pt-6 border-t">
              <h3 className="font-semibold mb-4">Select Payment Method</h3>
              <div className="grid grid-cols-2 gap-4">
                {paymentMethods.map((method) => (
                  <button
                    key={method.id}
                    onClick={() => setSelectedMethod(method.id)}
                    disabled={isProcessing}
                    className={`p-4 border rounded-lg transition-all flex flex-col items-center justify-center h-24 ${
                      selectedMethod === method.id
                        ? 'border-pink-500 bg-pink-50'
                        : 'border-gray-200 hover:border-pink-200'
                    } ${isProcessing ? 'opacity-50 cursor-not-allowed' : ''}`}
                  >
                    {method.logo ? (
                      <img
                        src={method.logo}
                        alt={method.title}
                        className="h-12 object-contain mb-2"
                      />
                    ) : (
                      <div className={`mb-2 ${selectedMethod === method.id ? 'text-pink-500' : 'text-gray-400'}`}>
                        {method.icon}
                      </div>
                    )}
                    <span className="text-sm font-medium text-gray-700">{method.title}</span>
                  </button>
                ))}
              </div>
            </div>

            <div className="pt-6 border-t">
              <div className="flex justify-between mb-4">
                <span className="font-semibold">Total Amount</span>
                <span className="text-2xl font-bold text-pink-500">₹{price}</span>
              </div>
              <button
                onClick={handlePayment}
                disabled={!selectedMethod || isProcessing}
                className={`w-full py-4 rounded-lg transition-colors ${
                  selectedMethod && !isProcessing
                    ? 'bg-pink-500 text-white hover:bg-pink-600'
                    : 'bg-gray-100 text-gray-400 cursor-not-allowed'
                }`}
              >
                {isProcessing ? 'Processing...' : 'Proceed to Payment'}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentPage;