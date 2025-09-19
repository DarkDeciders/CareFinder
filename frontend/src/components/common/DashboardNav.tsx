'use client'

import React from 'react';
import ThemeToggle from './ThemeToggle';

interface DashboardNavProps {
  userType: string;
  userName?: string;
  onLogout: () => void;
}

export default function DashboardNav({ userType, userName, onLogout }: DashboardNavProps) {
  const getUserTypeLabel = (type: string) => {
    switch (type) {
      case 'family':
        return 'CareFinder Family';
      case 'caregiver':
        return 'CareFinder Caregiver';
      case 'admin':
        return 'CareFinder Admin';
      case 'agent':
        return 'CareFinder Agent';
      case 'trainer':
        return 'CareFinder Trainer';
      default:
        return 'CareFinder';
    }
  };

  const getDisplayName = () => {
    if (userName) return userName;
    if (typeof window !== 'undefined' && localStorage.getItem('demoUser')) {
      return JSON.parse(localStorage.getItem('demoUser') || '{}').name;
    }
    return `${userType.charAt(0).toUpperCase() + userType.slice(1)} User`;
  };

  return (
    <header className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-lg border-b border-gray-200 dark:border-gray-700 sticky top-0 z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-lg flex items-center justify-center">
              <div className="w-4 h-4 bg-white rounded-sm"></div>
            </div>
            <div className="text-xl font-display font-bold text-gray-900 dark:text-white">
              {getUserTypeLabel(userType)}
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <div className="text-sm text-gray-600 dark:text-gray-300">
              Welcome,{' '}
              <span className="font-semibold">
                {getDisplayName()}
              </span>
            </div>
            <ThemeToggle />
            <button
              onClick={onLogout}
              className="p-2 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700"
              title="Logout"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}