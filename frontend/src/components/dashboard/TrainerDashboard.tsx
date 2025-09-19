'use client'

import React, { useState } from 'react';
import TrainerOverview from '../trainer/TrainerOverview';
import TrainerTrainees from '../trainer/TrainerTrainees';
import TrainerSchedule from '../trainer/TrainerSchedule';
import TrainerProgress from '../trainer/TrainerProgress';
import TrainerProfile from '../trainer/TrainerProfile';
import TrainerReports from '../trainer/TrainerReports';
import ThemeToggle from '../common/ThemeToggle';

export default function TrainerDashboard() {
  const [activeTab, setActiveTab] = useState('overview');

  const renderContent = () => {
    switch (activeTab) {
      case 'overview':
        return <TrainerOverview />;
      case 'trainees':
        return <TrainerTrainees />;
      case 'schedule':
        return <TrainerSchedule />;
      case 'progress':
        return <TrainerProgress />;
      case 'reports':
        return <TrainerReports />;
      case 'profile':
        return <TrainerProfile />;
      default:
        return <TrainerOverview />;
    }
  };

  return (
    <div className="h-full flex flex-col">
      {/* Header */}
      <header className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-lg border-b border-gray-200 dark:border-gray-700 flex-shrink-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-warning-500 to-primary-500 rounded-lg flex items-center justify-center">
                <div className="w-4 h-4 bg-white rounded-sm"></div>
              </div>
              <div className="text-lg sm:text-xl font-display font-bold text-gray-900 dark:text-white">
                <span className="hidden sm:inline">CareFinder </span>Trainer
              </div>
            </div>
            <div className="flex items-center space-x-2 sm:space-x-4">
              <div className="hidden md:block text-sm text-gray-600 dark:text-gray-300">
                Welcome, <span className="font-semibold">{
                  typeof window !== 'undefined' && localStorage.getItem('demoUser')
                    ? JSON.parse(localStorage.getItem('demoUser') || '{}').name
                    : 'Trainer'
                }</span>
              </div>
              <ThemeToggle />
              <button
                onClick={() => {
                  if (typeof window !== 'undefined') {
                    localStorage.removeItem('demoUserType');
                    localStorage.removeItem('demoUser');
                    window.location.href = '/login';
                  }
                }}
                className="p-2 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors"
                title="Logout"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Navigation Tabs */}
      <div className="bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm border-b border-gray-200 dark:border-gray-700 flex-shrink-0">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex overflow-x-auto space-x-4 sm:space-x-8 -mb-px scrollbar-hide">
            {[
              { key: 'overview', label: 'Overview', icon: '📊' },
              { key: 'trainees', label: 'My Trainees', icon: '👥' },
              { key: 'schedule', label: 'Training Schedule', icon: '📅' },
              { key: 'progress', label: 'Progress Tracking', icon: '📈' },
              { key: 'reports', label: 'Reports', icon: '📋' },
              { key: 'profile', label: 'Profile', icon: '👤' }
            ].map((tab) => (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key)}
                className={`py-3 sm:py-4 px-1 sm:px-2 border-b-2 font-medium text-xs sm:text-sm transition-colors whitespace-nowrap ${
                  activeTab === tab.key
                    ? 'border-warning-500 text-warning-600 dark:text-warning-400'
                    : 'border-transparent text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 hover:border-gray-300 dark:hover:border-gray-500'
                }`}
              >
                <span className="mr-1 sm:mr-2">{tab.icon}</span>
                <span className="hidden sm:inline">{tab.label}</span>
                <span className="sm:hidden text-xs">{tab.label.split(' ')[0]}</span>
              </button>
            ))}
          </nav>
        </div>
      </div>

      {/* Main Content - Scrollable */}
      <main className="flex-1 overflow-y-auto">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6 lg:py-8">
          {renderContent()}
        </div>
      </main>
    </div>
  );
}