import React, { useState } from 'react';
import { Tv, Bath, Utensils, Waves, Coffee, UtensilsCrossed, Shield, Users, Sparkles, ChefHat, Camera, ArrowLeft } from 'lucide-react';

const FoodMenu = ({ onClose }) => {
  const menuItems = [
    {
      name: 'Breakfast',
      time: '8:00 AM to 10:00 AM',
      items: [
        'Idli with White Chutney',
        'Upma with White Chutney',
        'Uttapam with White Chutney',
        'Mysore Bonda with White Chutney',
        'Poori with Kurma',
        'Dosa with Tomato Chutney',
        'Lemon Rice with Mango Pickle'
      ]
    },
    {
      name: 'Lunch',
      time: '12:00 PM to 2:00 PM',
      items: [
        'Rice',
        'Dal (Daily different varieties - Palak Dal, Tomato Dal, Gongura Dal, Methi Dal, Bottle Gourd Dal)',
        'Potato Fry (Different varieties daily)',
        'Curd',
        'Pickle',
        'Tomato Chutney',
        'Rasam'
      ]
    },
    {
      name: 'Dinner',
      time: '8:00 PM to 10:00 PM',
      items: [
        'Chapati',
        'Curry (Rotating menu - Mixed Vegetable Curry, Chickpea Curry, Paneer Curry, Potato Capsicum Curry, Brinjal Masala, Cauliflower Potato Mix)',
        'White Rice',
        'Drumstick Sambar',
        'Rasam',
        'Buttermilk',
        'Mango Pickle',
        'Tomato Chutney'
      ]
    }
  ];

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-8 max-w-2xl w-full mx-4 max-h-[90vh] overflow-y-auto">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-2xl font-bold text-gray-800">Food Menu</h3>
          <button
            onClick={onClose}
            className="flex items-center text-gray-600 hover:text-pink-600 transition-colors"
          >
            <ArrowLeft className="w-5 h-5 mr-1" />
            Back
          </button>
        </div>
        <div className="space-y-8">
          {menuItems.map((meal, index) => (
            <div key={index} className="bg-gray-50 rounded-lg p-6">
              <div className="mb-4">
                <h4 className="font-bold text-xl text-pink-600">{meal.name}</h4>
                <p className="text-gray-600 text-sm mt-1">{meal.time}</p>
              </div>
              <ul className="space-y-2">
                {meal.items.map((item, idx) => (
                  <li key={idx} className="text-gray-700 flex items-start gap-2">
                    <span className="text-pink-500 mt-1">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const KitchenMenu = ({ onClose }) => {
  const menuItems = [
    { name: 'Bread Roast' },
    { name: 'Bread Omelet' },
    { name: 'Maggi' },
    { name: 'Boiled Egg' },
    { name: 'Noodles' },
    { name: 'Juices' },
    { name: 'Milk products - tea, coffee' }
  ];

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-8 max-w-md w-full mx-4">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-2xl font-bold text-gray-800">Self Kitchen Menu</h3>
          <button
            onClick={onClose}
            className="flex items-center text-gray-600 hover:text-pink-600 transition-colors"
          >
            <ArrowLeft className="w-5 h-5 mr-1" />
            Back
          </button>
        </div>
        <div className="space-y-4">
          {menuItems.map((item, index) => (
            <div key={index} className="flex justify-between items-center p-3 bg-gray-50 rounded-lg hover:bg-gray-100">
              <span className="font-medium">{item.name}</span>
              <span className="text-pink-500 font-semibold">{item.price}</span>
            </div>
          ))}
        </div>
        <p className="mt-6 text-sm text-gray-600">
          * All ingredients and cooking equipment provided
        </p>
      </div>
    </div>
  );
};

const Amenities = () => {
  const [showKitchenMenu, setShowKitchenMenu] = useState(false);
  const [showFoodMenu, setShowFoodMenu] = useState(false);

  const amenities = [
    { 
      icon: <Bath className="w-6 h-6" />, 
      name: 'Attached Washrooms',
      description: 'Modern & Clean'
    },
    { 
      icon: <Tv className="w-6 h-6" />, 
      name: '32" LCD TV',
      description: 'Entertainment'
    },
    { 
      icon: <Waves className="w-6 h-6" />, 
      name: 'Washing Machines',
      description: 'Free Service'
    },
    { 
      icon: <ChefHat className="w-6 h-6" />, 
      name: 'Self Kitchen',
      description: 'Cook Your Meals',
      action: () => setShowKitchenMenu(true),
      highlight: true
    },
    { 
      icon: <Shield className="w-6 h-6" />, 
      name: '24/7 Security',
      description: 'Safe & Secure'
    },
    { 
      icon: <Camera className="w-6 h-6" />, 
      name: 'CCTV Surveillance',
      description: '24/7 Monitoring'
    },
    { 
      icon: <Users className="w-6 h-6" />, 
      name: 'Common Area',
      description: 'Social Space'
    },
    { 
      icon: <Coffee className="w-6 h-6" />, 
      name: 'Coffee Station',
      description: 'Free Service'
    }
  ];

  return (
    <section className="py-16 bg-gray-100" id="amenities">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-4">Our Facilities</h2>
        <p className="text-gray-600 text-center mb-8 max-w-2xl mx-auto">
          Experience premium living with our modern amenities and facilities designed for your comfort
        </p>

        <button
          onClick={() => setShowFoodMenu(true)}
          className="mx-auto block mb-12 bg-pink-500 text-white px-8 py-3 rounded-lg font-bold hover:bg-pink-600 transition-all transform hover:scale-105 shadow-lg"
        >
          View Food Menu
        </button>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {amenities.map((amenity, index) => (
            <div
              key={index}
              onClick={amenity.action}
              className={`flex flex-col items-center text-center p-6 rounded-lg transition-all ${
                amenity.highlight
                  ? 'bg-pink-50 border-2 border-pink-200 shadow-lg hover:shadow-xl'
                  : 'bg-white shadow-sm hover:shadow-md'
              } ${amenity.action ? 'cursor-pointer transform hover:scale-105' : ''}`}
            >
              <div className={`mb-4 ${amenity.highlight ? 'text-pink-600' : 'text-pink-500'}`}>
                {amenity.icon}
              </div>
              <h3 className={`font-semibold mb-2 ${amenity.highlight ? 'text-pink-600' : ''}`}>
                {amenity.name}
              </h3>
              <p className="text-sm text-gray-600">{amenity.description}</p>
            </div>
          ))}
        </div>
      </div>

      {showKitchenMenu && (
        <div className="fixed inset-0 z-50">
          <KitchenMenu onClose={() => setShowKitchenMenu(false)} />
        </div>
      )}

      {showFoodMenu && (
        <div className="fixed inset-0 z-50">
          <FoodMenu onClose={() => setShowFoodMenu(false)} />
        </div>
      )}
    </section>
  );
};

export default Amenities;