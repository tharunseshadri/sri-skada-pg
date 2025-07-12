import React, { useState } from 'react';
import { BedDouble, Mail, Phone, Lock, Eye, EyeOff } from 'lucide-react';

const LoginPage = ({ onLogin }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [loginMethod, setLoginMethod] = useState('email'); // 'email' or 'mobile'
  const [formData, setFormData] = useState({
    email: '',
    mobile: '',
    password: '',
    otp: ''
  });
  const [otpSent, setOtpSent] = useState(false);

  const handleSendOtp = (e) => {
    e.preventDefault();
    setOtpSent(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onLogin();
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 via-white to-purple-100 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="px-8 pt-8 pb-4">
            <div className="flex items-center justify-center mb-8">
              <BedDouble className="h-12 w-12 text-pink-500" />
            </div>
            <h1 className="text-2xl font-bold text-center text-gray-800 mb-2">
              Welcome to Sri Skanda
            </h1>
            <p className="text-center text-gray-600 mb-8">
              Please sign in to continue
            </p>
          </div>

          <div className="px-8 pb-8">
            {/* Login Method Toggle */}
            <div className="flex gap-4 mb-6">
              <button
                onClick={() => setLoginMethod('email')}
                className={`flex-1 py-2 text-center rounded-lg transition-colors ${
                  loginMethod === 'email'
                    ? 'bg-pink-500 text-white'
                    : 'bg-gray-100 text-gray-600'
                }`}
              >
                Email & Password
              </button>
              <button
                onClick={() => {
                  setLoginMethod('mobile');
                  setOtpSent(false);
                }}
                className={`flex-1 py-2 text-center rounded-lg transition-colors ${
                  loginMethod === 'mobile'
                    ? 'bg-pink-500 text-white'
                    : 'bg-gray-100 text-gray-600'
                }`}
              >
                Mobile & OTP
              </button>
            </div>

            {loginMethod === 'email' ? (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Mail className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                    placeholder="Email Address"
                    required
                  />
                </div>

                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Lock className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    type={showPassword ? "text" : "password"}
                    value={formData.password}
                    onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                    className="block w-full pl-10 pr-10 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                    placeholder="Password"
                    required
                  />
                  <button
                    type="button"
                    className="absolute inset-y-0 right-0 pr-3 flex items-center"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? (
                      <EyeOff className="h-5 w-5 text-gray-400 hover:text-gray-600" />
                    ) : (
                      <Eye className="h-5 w-5 text-gray-400 hover:text-gray-600" />
                    )}
                  </button>
                </div>

                <div className="flex items-center justify-between text-sm">
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      className="form-checkbox h-4 w-4 text-pink-500 rounded focus:ring-pink-500"
                    />
                    <span className="ml-2 text-gray-600">Remember me</span>
                  </label>
                  <a href="#" className="text-pink-500 hover:text-pink-600 font-medium">
                    Forgot Password?
                  </a>
                </div>

                <button
                  type="submit"
                  className="w-full bg-pink-500 text-white py-3 rounded-lg hover:bg-pink-600 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-offset-2 transform transition-all hover:scale-[1.02]"
                >
                  Sign In
                </button>
              </form>
            ) : (
              <form onSubmit={otpSent ? handleSubmit : handleSendOtp} className="space-y-6">
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Phone className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    type="tel"
                    value={formData.mobile}
                    onChange={(e) => setFormData({ ...formData, mobile: e.target.value })}
                    className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                    placeholder="Mobile Number"
                    required
                    pattern="[0-9]{10}"
                    maxLength="10"
                  />
                </div>

                {otpSent && (
                  <div className="relative">
                    <input
                      type="text"
                      value={formData.otp}
                      onChange={(e) => setFormData({ ...formData, otp: e.target.value })}
                      className="block w-full px-3 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                      placeholder="Enter OTP"
                      required
                      maxLength="6"
                    />
                  </div>
                )}

                <button
                  type="submit"
                  className="w-full bg-pink-500 text-white py-3 rounded-lg hover:bg-pink-600 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-offset-2 transform transition-all hover:scale-[1.02]"
                >
                  {otpSent ? 'Verify OTP' : 'Send OTP'}
                </button>
              </form>
            )}

            <p className="text-center text-gray-600 mt-6">
              Don't have an account?{' '}
              <a href="#" className="text-pink-500 hover:text-pink-600 font-medium">
                Sign up
              </a>
            </p>
          </div>
        </div>

        <p className="text-center text-gray-600 mt-8">
          © 2024 Sri Skanda PG Women's Hostel. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default LoginPage;