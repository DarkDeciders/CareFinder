"use client";

import React from "react";

export default function AdminOverview() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center space-y-3 sm:space-y-0">
        <h1 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white">
          Platform Overview
        </h1>
        <div className="flex items-center space-x-2 bg-success-100 dark:bg-success-900/20 px-3 py-1 rounded-full">
          <div className="w-2 h-2 bg-success-500 rounded-full animate-pulse"></div>
          <span className="text-xs text-success-700 dark:text-success-400 font-medium">
            System Operational
          </span>
        </div>
      </div>

      {/* Key Platform Metrics */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        <div className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-gray-200/50 dark:border-gray-700/50">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 font-medium">
                Total Users
              </p>
              <p className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white">
                2,847
              </p>
              <p className="text-xs text-success-600 dark:text-success-400">
                +12% this month
              </p>
            </div>
            <div className="p-2 sm:p-3 bg-primary-100 dark:bg-primary-900/20 rounded-lg">
              <svg
                className="w-5 h-5 sm:w-6 sm:h-6 text-primary-600 dark:text-primary-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z"
                />
              </svg>
            </div>
          </div>
        </div>

        <div className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-gray-200/50 dark:border-gray-700/50">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 font-medium">
                Active Bookings
              </p>
              <p className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white">
                1,342
              </p>
              <p className="text-xs text-success-600 dark:text-success-400">
                +8% this week
              </p>
            </div>
            <div className="p-2 sm:p-3 bg-secondary-100 dark:bg-secondary-900/20 rounded-lg">
              <svg
                className="w-5 h-5 sm:w-6 sm:h-6 text-secondary-600 dark:text-secondary-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
            </div>
          </div>
        </div>

        <div className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-gray-200/50 dark:border-gray-700/50">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 font-medium">
                Revenue (Monthly)
              </p>
              <p className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white">
                $84,950
              </p>
              <p className="text-xs text-success-600 dark:text-success-400">
                +15% vs last month
              </p>
            </div>
            <div className="p-2 sm:p-3 bg-success-100 dark:bg-success-900/20 rounded-lg">
              <svg
                className="w-5 h-5 sm:w-6 sm:h-6 text-success-600 dark:text-success-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"
                />
              </svg>
            </div>
          </div>
        </div>

        <div className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-gray-200/50 dark:border-gray-700/50">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 font-medium">
                Satisfaction Rate
              </p>
              <p className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white">
                94.8%
              </p>
              <p className="text-xs text-success-600 dark:text-success-400">
                +2.1% improvement
              </p>
            </div>
            <div className="p-2 sm:p-3 bg-warning-100 dark:bg-warning-900/20 rounded-lg">
              <svg
                className="w-5 h-5 sm:w-6 sm:h-6 text-warning-600 dark:text-warning-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* Platform Activity Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* User Types Breakdown */}
        <div className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-gray-200/50 dark:border-gray-700/50">
          <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
            User Distribution
          </h2>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-primary-500 rounded-full"></div>
                <span className="text-sm text-gray-700 dark:text-gray-300">
                  Families
                </span>
              </div>
              <div className="text-right">
                <p className="text-sm font-semibold text-gray-900 dark:text-white">
                  1,245
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  43.7%
                </p>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-secondary-500 rounded-full"></div>
                <span className="text-sm text-gray-700 dark:text-gray-300">
                  Caregivers
                </span>
              </div>
              <div className="text-right">
                <p className="text-sm font-semibold text-gray-900 dark:text-white">
                  987
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  34.7%
                </p>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-success-500 rounded-full"></div>
                <span className="text-sm text-gray-700 dark:text-gray-300">
                  Agents
                </span>
              </div>
              <div className="text-right">
                <p className="text-sm font-semibold text-gray-900 dark:text-white">
                  78
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-400">2.7%</p>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-warning-500 rounded-full"></div>
                <span className="text-sm text-gray-700 dark:text-gray-300">
                  Trainers
                </span>
              </div>
              <div className="text-right">
                <p className="text-sm font-semibold text-gray-900 dark:text-white">
                  45
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-400">1.6%</p>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-gray-500 rounded-full"></div>
                <span className="text-sm text-gray-700 dark:text-gray-300">
                  Admins
                </span>
              </div>
              <div className="text-right">
                <p className="text-sm font-semibold text-gray-900 dark:text-white">
                  12
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-400">0.4%</p>
              </div>
            </div>
          </div>
        </div>

        {/* Recent Activity */}
        <div className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-gray-200/50 dark:border-gray-700/50">
          <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
            Recent Platform Activity
          </h2>
          <div className="space-y-3">
            <div className="flex items-start space-x-3 p-3 bg-primary-50/50 dark:bg-primary-900/10 rounded-lg">
              <div className="w-2 h-2 bg-primary-500 rounded-full mt-2"></div>
              <div className="flex-1 min-w-0">
                <p className="text-sm text-gray-900 dark:text-white font-medium">
                  New caregiver registration
                </p>
                <p className="text-xs text-gray-600 dark:text-gray-400">
                  Sarah Johnson completed verification
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-500">
                  2 minutes ago
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-3 p-3 bg-secondary-50/50 dark:bg-secondary-900/10 rounded-lg">
              <div className="w-2 h-2 bg-secondary-500 rounded-full mt-2"></div>
              <div className="flex-1 min-w-0">
                <p className="text-sm text-gray-900 dark:text-white font-medium">
                  Booking confirmed
                </p>
                <p className="text-xs text-gray-600 dark:text-gray-400">
                  Family Martinez scheduled childcare
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-500">
                  5 minutes ago
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-3 p-3 bg-success-50/50 dark:bg-success-900/10 rounded-lg">
              <div className="w-2 h-2 bg-success-500 rounded-full mt-2"></div>
              <div className="flex-1 min-w-0">
                <p className="text-sm text-gray-900 dark:text-white font-medium">
                  Agent verification completed
                </p>
                <p className="text-xs text-gray-600 dark:text-gray-400">
                  Quality check passed for Thompson family
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-500">
                  12 minutes ago
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-3 p-3 bg-warning-50/50 dark:bg-warning-900/10 rounded-lg">
              <div className="w-2 h-2 bg-warning-500 rounded-full mt-2"></div>
              <div className="flex-1 min-w-0">
                <p className="text-sm text-gray-900 dark:text-white font-medium">
                  Training session scheduled
                </p>
                <p className="text-xs text-gray-600 dark:text-gray-400">
                  Elderly care training for 3 caregivers
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-500">
                  18 minutes ago
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* System Performance & Quick Actions */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* System Health */}
        <div className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-gray-200/50 dark:border-gray-700/50">
          <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
            System Health
          </h2>
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-700 dark:text-gray-300">
                Server Status
              </span>
              <span className="inline-flex items-center px-2 py-1 text-xs font-semibold rounded-full bg-success-100 text-success-800 dark:bg-success-900/20 dark:text-success-400">
                ✓ Online
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-700 dark:text-gray-300">
                Database
              </span>
              <span className="inline-flex items-center px-2 py-1 text-xs font-semibold rounded-full bg-success-100 text-success-800 dark:bg-success-900/20 dark:text-success-400">
                ✓ Healthy
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-700 dark:text-gray-300">
                API Response
              </span>
              <span className="inline-flex items-center px-2 py-1 text-xs font-semibold rounded-full bg-success-100 text-success-800 dark:bg-success-900/20 dark:text-success-400">
                125ms
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-700 dark:text-gray-300">
                Uptime
              </span>
              <span className="inline-flex items-center px-2 py-1 text-xs font-semibold rounded-full bg-success-100 text-success-800 dark:bg-success-900/20 dark:text-success-400">
                99.8%
              </span>
            </div>
          </div>
        </div>

        {/* Pending Actions */}
        <div className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-gray-200/50 dark:border-gray-700/50">
          <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
            Pending Actions
          </h2>
          <div className="space-y-3">
            <div className="flex items-center justify-between p-2 bg-warning-50/50 dark:bg-warning-900/10 rounded-lg">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-warning-500 rounded-full"></div>
                <span className="text-sm text-gray-700 dark:text-gray-300">
                  Verifications
                </span>
              </div>
              <span className="text-sm font-semibold text-warning-700 dark:text-warning-400">
                12
              </span>
            </div>
            <div className="flex items-center justify-between p-2 bg-primary-50/50 dark:bg-primary-900/10 rounded-lg">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
                <span className="text-sm text-gray-700 dark:text-gray-300">
                  User Reports
                </span>
              </div>
              <span className="text-sm font-semibold text-primary-700 dark:text-primary-400">
                8
              </span>
            </div>
            <div className="flex items-center justify-between p-2 bg-red-50/50 dark:bg-red-900/10 rounded-lg">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                <span className="text-sm text-gray-700 dark:text-gray-300">
                  Support Tickets
                </span>
              </div>
              <span className="text-sm font-semibold text-red-700 dark:text-red-400">
                4
              </span>
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-gray-200/50 dark:border-gray-700/50">
          <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
            Quick Actions
          </h2>
          <div className="space-y-2">
            <button className="w-full text-left p-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700/50 rounded-lg transition-colors">
              📊 Generate Monthly Report
            </button>
            <button className="w-full text-left p-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700/50 rounded-lg transition-colors">
              👥 Bulk User Management
            </button>
            <button className="w-full text-left p-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700/50 rounded-lg transition-colors">
              🔧 System Maintenance
            </button>
            <button className="w-full text-left p-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700/50 rounded-lg transition-colors">
              💬 Send Notifications
            </button>
          </div>
        </div>
      </div>

      {/* CareFinder Platform Insights */}
      <div className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-gray-200/50 dark:border-gray-700/50">
        <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
          CareFinder Platform Overview
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className="text-base font-medium text-gray-900 dark:text-white mb-3">
              Platform Capabilities
            </h3>
            <div className="space-y-3 text-sm text-gray-700 dark:text-gray-300">
              <div className="flex items-start space-x-2">
                <div className="w-2 h-2 bg-primary-500 rounded-full mt-1.5"></div>
                <div>
                  <span className="font-medium">Family Management:</span>{" "}
                  Families can search, book, and manage caregiver services with
                  real-time communication and scheduling
                </div>
              </div>
              <div className="flex items-start space-x-2">
                <div className="w-2 h-2 bg-secondary-500 rounded-full mt-1.5"></div>
                <div>
                  <span className="font-medium">Caregiver Platform:</span>{" "}
                  Caregivers manage their profiles, availability, job
                  applications, and client communications
                </div>
              </div>
              <div className="flex items-start space-x-2">
                <div className="w-2 h-2 bg-success-500 rounded-full mt-1.5"></div>
                <div>
                  <span className="font-medium">Quality Assurance:</span> Field
                  agents conduct on-site verifications and quality checks to
                  ensure service standards
                </div>
              </div>
              <div className="flex items-start space-x-2">
                <div className="w-2 h-2 bg-warning-500 rounded-full mt-1.5"></div>
                <div>
                  <span className="font-medium">Training System:</span>{" "}
                  Certified trainers provide skill development and assessment
                  programs for caregivers
                </div>
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-base font-medium text-gray-900 dark:text-white mb-3">
              Service Categories
            </h3>
            <div className="grid grid-cols-2 gap-3">
              <div className="p-3 bg-gradient-to-r from-primary-50 to-primary-100 dark:from-primary-900/20 dark:to-primary-800/20 rounded-lg">
                <div className="text-primary-600 dark:text-primary-400 text-sm font-medium">
                  Child Care
                </div>
                <div className="text-xs text-primary-600/80 dark:text-primary-400/80">
                  652 active bookings
                </div>
              </div>
              <div className="p-3 bg-gradient-to-r from-secondary-50 to-secondary-100 dark:from-secondary-900/20 dark:to-secondary-800/20 rounded-lg">
                <div className="text-secondary-600 dark:text-secondary-400 text-sm font-medium">
                  Elderly Care
                </div>
                <div className="text-xs text-secondary-600/80 dark:text-secondary-400/80">
                  490 active bookings
                </div>
              </div>
              <div className="p-3 bg-gradient-to-r from-success-50 to-success-100 dark:from-success-900/20 dark:to-success-800/20 rounded-lg">
                <div className="text-success-600 dark:text-success-400 text-sm font-medium">
                  Special Needs
                </div>
                <div className="text-xs text-success-600/80 dark:text-success-400/80">
                  156 active bookings
                </div>
              </div>
              <div className="p-3 bg-gradient-to-r from-warning-50 to-warning-100 dark:from-warning-900/20 dark:to-warning-800/20 rounded-lg">
                <div className="text-warning-600 dark:text-warning-400 text-sm font-medium">
                  Companion Care
                </div>
                <div className="text-xs text-warning-600/80 dark:text-warning-400/80">
                  44 active bookings
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
