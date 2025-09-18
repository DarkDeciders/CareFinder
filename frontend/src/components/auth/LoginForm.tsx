'use client'

import React, { useState } from 'react';

interface LoginFormProps {
  userType: string;
  onUserTypeChange: (type: string) => void;
  onLogin: (email: string, password: string) => void;
  onDemoLogin: (type: string) => void;
}

export default function LoginForm({ userType, onUserTypeChange, onLogin, onDemoLogin }: LoginFormProps) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onLogin(email, password);
  };

  return (
    <div className="w-full max-w-md mx-auto px-4 sm:px-0">
      <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-lg rounded-3xl shadow-soft-lg dark:shadow-2xl p-6 sm:p-8 border border-gray-100/50 dark:border-gray-700/50">
        {/* Logo */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <div className="w-10 h-10 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-lg flex items-center justify-center">
              <div className="w-5 h-5 bg-white rounded-sm"></div>
            </div>
            <div className="text-2xl font-display font-bold text-gray-900 dark:text-white">
              CareFinder
            </div>
          </div>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Welcome Back</h1>
          <p className="text-gray-600 dark:text-gray-300">Sign in to your account</p>
        </div>

        {/* User Type Selection */}
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">
            I am a...
          </label>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
            {[
              { key: 'family', label: 'Family', color: 'primary' },
              { key: 'caregiver', label: 'Caregiver', color: 'secondary' },
              { key: 'admin', label: 'Admin', color: 'warning' }
            ].map((type) => (
              <button
                key={type.key}
                type="button"
                onClick={() => onUserTypeChange(type.key)}
                className={`p-3 text-sm font-medium rounded-lg border transition-all ${
                  userType === type.key
                    ? `bg-${type.color}-50 border-${type.color}-200 text-${type.color}-700 dark:bg-${type.color}-900/20 dark:border-${type.color}-700 dark:text-${type.color}-400`
                    : 'bg-gray-50 border-gray-200 text-gray-600 hover:bg-gray-100 dark:bg-gray-700/50 dark:border-gray-600 dark:text-gray-300 dark:hover:bg-gray-600/50'
                }`}
              >
                {type.label}
              </button>
            ))}
          </div>
        </div>

        {/* Login Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Email
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-700/50 border border-gray-200 dark:border-gray-600 rounded-lg text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
              placeholder="Enter your email"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-700/50 border border-gray-200 dark:border-gray-600 rounded-lg text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
              placeholder="Enter your password"
              required
            />
          </div>

          <div className="flex items-center justify-between">
            <label className="flex items-center">
              <input type="checkbox" className="w-4 h-4 text-primary-600 bg-gray-100 border-gray-300 rounded focus:ring-primary-500" />
              <span className="ml-2 text-sm text-gray-600 dark:text-gray-300">Remember me</span>
            </label>
            <a href="#" className="text-sm text-primary-600 hover:text-primary-500">
              Forgot password?
            </a>
          </div>

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-primary-600 to-primary-700 hover:from-primary-700 hover:to-primary-800 text-white py-3 px-4 rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
          >
            Sign In
          </button>
        </form>

        {/* Demo Accounts */}
        <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-600">
          <p className="text-sm text-gray-600 dark:text-gray-400 text-center mb-3">Quick Demo Access:</p>
          <div className="space-y-2">
            <button
              onClick={() => onDemoLogin('family')}
              className="w-full py-2 px-4 text-sm bg-primary-50 hover:bg-primary-100 text-primary-700 rounded-lg border border-primary-200 transition-colors"
            >
              Demo Family Account
            </button>
            <button
              onClick={() => onDemoLogin('caregiver')}
              className="w-full py-2 px-4 text-sm bg-secondary-50 hover:bg-secondary-100 text-secondary-700 rounded-lg border border-secondary-200 transition-colors"
            >
              Demo Caregiver Account
            </button>
            <button
              onClick={() => onDemoLogin('admin')}
              className="w-full py-2 px-4 text-sm bg-warning-50 hover:bg-warning-100 text-warning-700 rounded-lg border border-warning-200 transition-colors"
            >
              Demo Admin Account
            </button>
          </div>
        </div>

        {/* Register Link */}
        <div className="mt-6 text-center">
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Don't have an account?{' '}
            <a href="/register" className="text-primary-600 hover:text-primary-500 font-medium">
              Sign up here
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}