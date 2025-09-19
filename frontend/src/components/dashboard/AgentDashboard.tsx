'use client'

import React, { useState } from 'react';
import AgentOverview from '../agent/AgentOverview';
import AgentAssignments from '../agent/AgentAssignments';
import AgentSchedule from '../agent/AgentSchedule';
import AgentReports from '../agent/AgentReports';
import AgentProfile from '../agent/AgentProfile';
import AgentNavigation from '../agent/AgentNavigation';
import ThemeToggle from '../common/ThemeToggle';

export default function AgentDashboard() {
  const [activeTab, setActiveTab] = useState('overview');

  const renderContent = () => {
    switch (activeTab) {
      case 'overview':
        return <AgentOverview />;
      case 'assignments':
        return <AgentAssignments />;
      case 'schedule':
        return <AgentSchedule />;
      case 'navigation':
        return <AgentNavigation />;
      case 'reports':
        return <AgentReports />;
      case 'profile':
        return <AgentProfile />;
      default:
        return <AgentOverview />;
    }
  };

  return (
    <div className="h-full flex flex-col">
      {/* Header */}
      <header className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-lg border-b border-gray-200 dark:border-gray-700 flex-shrink-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-secondary-500 to-success-500 rounded-lg flex items-center justify-center">
                <div className="w-4 h-4 bg-white rounded-sm"></div>
              </div>
              <div className="text-lg sm:text-xl font-display font-bold text-gray-900 dark:text-white">
                <span className="hidden sm:inline">CareFinder </span>Agent
              </div>
            </div>
            <div className="flex items-center space-x-2 sm:space-x-4">
              <div className="hidden md:block text-sm text-gray-600 dark:text-gray-300">
                Welcome, <span className="font-semibold">{
                  typeof window !== 'undefined' && localStorage.getItem('demoUser')
                    ? JSON.parse(localStorage.getItem('demoUser') || '{}').name
                    : 'Agent'
                }</span>
              </div>
              <div className="flex items-center space-x-1 sm:space-x-2 bg-success-100 dark:bg-success-900/20 px-2 sm:px-3 py-1 rounded-full">
                <div className="w-2 h-2 bg-success-500 rounded-full animate-pulse"></div>
                <span className="text-xs text-success-700 dark:text-success-400 font-medium">Active</span>
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
              { key: 'assignments', label: 'My Assignments', icon: '📋' },
              { key: 'schedule', label: 'Schedule', icon: '📅' },
              { key: 'navigation', label: 'Navigation', icon: '🗺️' },
              { key: 'reports', label: 'Submit Reports', icon: '📝' },
              { key: 'profile', label: 'Profile', icon: '👤' }
            ].map((tab) => (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key)}
                className={`py-3 sm:py-4 px-1 sm:px-2 border-b-2 font-medium text-xs sm:text-sm transition-colors whitespace-nowrap ${
                  activeTab === tab.key
                    ? 'border-secondary-500 text-secondary-600 dark:text-secondary-400'
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