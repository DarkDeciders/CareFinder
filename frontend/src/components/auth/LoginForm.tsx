'use client'

import React, { useState } from 'react';
import Image from 'next/image';

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
    <div className="w-full max-w-4xl mx-auto">
      <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-lg rounded-2xl shadow-soft-lg dark:shadow-2xl overflow-hidden border border-gray-100/50 dark:border-gray-700/50 flex max-h-[85vh]">
        {/* Left side - Image */}
        <div className="hidden lg:block lg:w-1/2 relative">
          <Image
            src="/auth.png"
            alt="CareFinder Authentication"
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Right side - Form Content */}
        <div className="w-full lg:w-1/2 p-3 sm:p-4">
        {/* Logo */}
        <div className="text-center mb-3">
          <div className="flex items-center justify-center space-x-2 mb-2">
            <div className="w-10 h-10 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-lg flex items-center justify-center">
              <div className="w-5 h-5 bg-white rounded-sm"></div>
            </div>
            <div className="text-2xl font-display font-bold text-gray-900 dark:text-white">
              CareFinder
            </div>
          </div>
          <h1 className="text-lg font-bold text-gray-900 dark:text-white mb-1">Welcome Back</h1>
          <p className="text-gray-600 dark:text-gray-300">Sign in to your account</p>
        </div>

        {/* User Type Selection */}
        <div className="mb-3">
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            I am a...
          </label>
          <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-2">
            {[
              { key: 'family', label: 'Family' },
              { key: 'caregiver', label: 'Caregiver' },
              { key: 'trainer', label: 'Trainer' },
              { key: 'agent', label: 'Agent' },
              { key: 'admin', label: 'Admin' }
            ].map((type) => {
              const activeClasses: Record<string, string> = {
                family: 'bg-primary-50 border-primary-200 text-primary-700 dark:bg-primary-900/20 dark:border-primary-700 dark:text-primary-400',
                caregiver: 'bg-secondary-50 border-secondary-200 text-secondary-700 dark:bg-secondary-900/20 dark:border-secondary-700 dark:text-secondary-400',
                trainer: 'bg-warning-50 border-warning-200 text-warning-700 dark:bg-warning-900/20 dark:border-warning-700 dark:text-warning-400',
                agent: 'bg-success-50 border-success-200 text-success-700 dark:bg-success-900/20 dark:border-success-700 dark:text-success-400',
                admin: 'bg-red-50 border-red-200 text-red-700 dark:bg-red-900/20 dark:border-red-700 dark:text-red-400'
              };

              const inactive = 'bg-gray-50 border-gray-200 text-gray-600 hover:bg-gray-100 dark:bg-gray-700/50 dark:border-gray-600 dark:text-gray-300 dark:hover:bg-gray-600/50';

              return (
                <button
                  key={type.key}
                  type="button"
                  onClick={() => onUserTypeChange(type.key)}
                  className={`p-2 text-xs font-medium rounded-md border transition-all ${userType === type.key ? activeClasses[type.key] : inactive}`}
                >
                  {type.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Login Form */}
        <form onSubmit={handleSubmit} className="space-y-2">
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Email
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-3 py-2 bg-gray-50 dark:bg-gray-700/50 border border-gray-200 dark:border-gray-600 rounded-lg text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
              placeholder="Enter your email"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-3 py-2 bg-gray-50 dark:bg-gray-700/50 border border-gray-200 dark:border-gray-600 rounded-lg text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
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
        <div className="mt-3 pt-3 border-t border-gray-200 dark:border-gray-600">
          <p className="text-xs text-gray-600 dark:text-gray-400 text-center mb-2">Quick Demo Access:</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
            <button
              onClick={() => onDemoLogin('family')}
              className="py-2 px-3 text-xs bg-primary-50 hover:bg-primary-100 text-primary-700 rounded-lg border border-primary-200 transition-colors"
            >
              Demo Family
            </button>
            <button
              onClick={() => onDemoLogin('caregiver')}
              className="py-2 px-3 text-xs bg-secondary-50 hover:bg-secondary-100 text-secondary-700 rounded-lg border border-secondary-200 transition-colors"
            >
              Demo Caregiver
            </button>
            <button
              onClick={() => onDemoLogin('trainer')}
              className="py-2 px-3 text-xs bg-warning-50 hover:bg-warning-100 text-warning-700 rounded-lg border border-warning-200 transition-colors"
            >
              Demo Trainer
            </button>
            <button
              onClick={() => onDemoLogin('agent')}
              className="py-2 px-3 text-xs bg-success-50 hover:bg-success-100 text-success-700 rounded-lg border border-success-200 transition-colors"
            >
              Demo Agent
            </button>
            <button
              onClick={() => onDemoLogin('admin')}
              className="py-2 px-3 text-xs bg-red-50 hover:bg-red-100 text-red-700 rounded-lg border border-red-200 transition-colors"
            >
              Demo Admin
            </button>
          </div>
        </div>

        {/* Register Link */}
        <div className="mt-3 text-center">
          <p className="text-xs text-gray-600 dark:text-gray-400">
            Don&apos;t have an account?{' '}
            <a href="/register" className="text-primary-600 hover:text-primary-500 font-medium">
              Sign up here
            </a>
          </p>
        </div>
        </div>
      </div>
    </div>
  );
}