'use client'

import React, { useState } from 'react';

import AdminSettings from '../admin/AdminSettings';
import UserManagement from '../admin/UserManagement';
import Verifications from '../admin/Verifications';
import Bookings from '../admin/Bookings';
import Reports from '../admin/Reports';

export default function AdminDashboard() {
  const [activeSection, setActiveSection] = useState('overview');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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
          return <UserManagement />;
      case 'verifications':
          return <Verifications />;
      case 'bookings':
          return <Bookings />;
      case 'reports':
          return <Reports />;
      case 'settings':
        return <AdminSettings />;
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
    <div className="min-h-screen bg-gradient-to-br from-primary-50 via-white to-secondary-50 dark:from-gray-900 dark:via-gray-950 dark:to-gray-900 flex">
      {/* Sidebar */}
      <div className="hidden lg:block w-64 bg-white/80 dark:bg-gray-800/80 backdrop-blur-lg border-r border-gray-200 dark:border-gray-700">
        {/* Logo */}
        <div className="p-6">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-lg flex items-center justify-center">
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
                      ? 'bg-primary-100 dark:bg-primary-900/20 text-primary-700 dark:text-primary-400 border border-primary-200 dark:border-primary-700'
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
            <div className="w-8 h-8 bg-primary-100 dark:bg-primary-900/20 rounded-full flex items-center justify-center">
              <span className="text-primary-600 dark:text-primary-400 text-sm font-bold">A</span>
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
          <div className="px-4 sm:px-6 py-4">
            <div className="flex justify-between items-center">
              <div className="flex items-center space-x-4">
                {/* Mobile menu button */}
                <button
                  onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                  className="lg:hidden p-2 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                </button>
                <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
                  CareFinder Administration
                </h2>
              </div>
              <div className="flex items-center space-x-4">
                <div className="hidden sm:block text-sm text-gray-600 dark:text-gray-300">
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
                    window.location.href = '/login';
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

            {/* Mobile Navigation */}
            {mobileMenuOpen && (
              <div className="lg:hidden mt-4 border-t border-gray-200 dark:border-gray-600 pt-4">
                <nav className="grid grid-cols-2 gap-2">
                  {sidebarItems.map((item) => (
                    <button
                      key={item.key}
                      onClick={() => {
                        setActiveSection(item.key);
                        setMobileMenuOpen(false);
                      }}
                      className={`flex items-center px-3 py-2 text-sm font-medium rounded-lg transition-colors ${
                        activeSection === item.key
                          ? 'bg-primary-100 dark:bg-primary-900/20 text-primary-700 dark:text-primary-400'
                          : 'text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700/50'
                      }`}
                    >
                      <span className="mr-2">{item.icon}</span>
                      {item.label}
                    </button>
                  ))}
                </nav>
              </div>
            )}
          </div>
        </header>

        {/* Content */}
        <main className="p-4 sm:p-6">
          {renderContent()}
        </main>
      </div>
    </div>
  );
}