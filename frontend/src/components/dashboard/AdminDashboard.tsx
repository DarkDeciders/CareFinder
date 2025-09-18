'use client'

import React, { useState } from 'react';

export default function AdminDashboard() {
  const [activeSection, setActiveSection] = useState('overview');

  const sidebarItems = [
    { key: 'overview', label: 'Overview', icon: '📊' },
    { key: 'users', label: 'User Management', icon: '👥' },
    { key: 'verifications', label: 'Verifications', icon: '✅' },
    { key: 'bookings', label: 'Bookings', icon: '📅' },
    { key: 'reports', label: 'Reports', icon: '📈' },
    { key: 'settings', label: 'Settings', icon: '⚙️' }
  ];

  const renderContent = () => {
    switch (activeSection) {
      case 'overview':
        return (
          <div className="space-y-6">
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Admin Overview</h1>
            <div className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm rounded-2xl p-6 border border-gray-200/50 dark:border-gray-700/50 min-h-[400px]">
              {/* Dashboard stats, system overview */}
            </div>
          </div>
        );
      case 'users':
        return (
          <div className="space-y-6">
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white">User Management</h1>
            <div className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm rounded-2xl p-6 border border-gray-200/50 dark:border-gray-700/50 min-h-[400px]">
              {/* User list, approve/suspend users */}
            </div>
          </div>
        );
      case 'verifications':
        return (
          <div className="space-y-6">
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Pending Verifications</h1>
            <div className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm rounded-2xl p-6 border border-gray-200/50 dark:border-gray-700/50 min-h-[400px]">
              {/* Document verification, background checks */}
            </div>
          </div>
        );
      case 'bookings':
        return (
          <div className="space-y-6">
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Booking Management</h1>
            <div className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm rounded-2xl p-6 border border-gray-200/50 dark:border-gray-700/50 min-h-[400px]">
              {/* All bookings, disputes, refunds */}
            </div>
          </div>
        );
      case 'reports':
        return (
          <div className="space-y-6">
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Reports & Analytics</h1>
            <div className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm rounded-2xl p-6 border border-gray-200/50 dark:border-gray-700/50 min-h-[400px]">
              {/* Analytics, revenue reports, user activity */}
            </div>
          </div>
        );
      case 'settings':
        return (
          <div className="space-y-6">
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white">System Settings</h1>
            <div className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm rounded-2xl p-6 border border-gray-200/50 dark:border-gray-700/50 min-h-[400px]">
              {/* Platform settings, configurations */}
            </div>
          </div>
        );
      default:
        return (
          <div className="space-y-6">
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Admin Overview</h1>
            <div className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm rounded-2xl p-6 border border-gray-200/50 dark:border-gray-700/50 min-h-[400px]">
              {/* Default dashboard content */}
            </div>
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-warning-50 via-white to-primary-50 dark:from-gray-900 dark:via-gray-950 dark:to-gray-900 flex">
      {/* Sidebar */}
      <div className="w-64 bg-white/80 dark:bg-gray-800/80 backdrop-blur-lg border-r border-gray-200 dark:border-gray-700">
        {/* Logo */}
        <div className="p-6">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-br from-warning-500 to-primary-500 rounded-lg flex items-center justify-center">
              <div className="w-4 h-4 bg-white rounded-sm"></div>
            </div>
            <div className="text-xl font-display font-bold text-gray-900 dark:text-white">
              Admin Panel
            </div>
          </div>
        </div>

        {/* Navigation */}
        <nav className="px-4 pb-4">
          <ul className="space-y-2">
            {sidebarItems.map((item) => (
              <li key={item.key}>
                <button
                  onClick={() => setActiveSection(item.key)}
                  className={`w-full flex items-center px-4 py-3 text-sm font-medium rounded-lg transition-colors ${
                    activeSection === item.key
                      ? 'bg-warning-100 dark:bg-warning-900/20 text-warning-700 dark:text-warning-400 border border-warning-200 dark:border-warning-700'
                      : 'text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700/50 hover:text-gray-900 dark:hover:text-white'
                  }`}
                >
                  <span className="mr-3">{item.icon}</span>
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
        </nav>

        {/* User Info */}
        <div className="absolute bottom-0 w-64 p-4 border-t border-gray-200 dark:border-gray-700">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-warning-100 dark:bg-warning-900/20 rounded-full flex items-center justify-center">
              <span className="text-warning-600 dark:text-warning-400 text-sm font-bold">A</span>
            </div>
            <div>
              <div className="text-sm font-medium text-gray-900 dark:text-white">
                {typeof window !== 'undefined' && localStorage.getItem('demoUser')
                  ? JSON.parse(localStorage.getItem('demoUser') || '{}').name
                  : 'Admin User'}
              </div>
              <div className="text-xs text-gray-500 dark:text-gray-400">Super Admin</div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1">
        {/* Header */}
        <header className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-lg border-b border-gray-200 dark:border-gray-700">
          <div className="px-6 py-4">
            <div className="flex justify-between items-center">
              <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
                CareFinder Administration
              </h2>
              <div className="flex items-center space-x-4">
                <div className="text-sm text-gray-600 dark:text-gray-300">
                  Welcome, <span className="font-semibold">{
                    typeof window !== 'undefined' && localStorage.getItem('demoUser')
                      ? JSON.parse(localStorage.getItem('demoUser') || '{}').name
                      : 'Admin'
                  }</span>
                </div>
                <button
                  onClick={() => {
                    localStorage.removeItem('demoUserType');
                    localStorage.removeItem('demoUser');
                    window.location.href = '/';
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

        {/* Content */}
        <main className="p-6">
          {renderContent()}
        </main>
      </div>
    </div>
  );
}