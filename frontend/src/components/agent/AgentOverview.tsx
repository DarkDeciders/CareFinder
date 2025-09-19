'use client'

import React from 'react';

export default function AgentOverview() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center space-y-3 sm:space-y-0">
        <h1 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white">Agent Overview</h1>
        <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-2 sm:space-y-0 sm:space-x-2">
          <div className="bg-success-100 dark:bg-success-900/20 px-3 py-1 rounded-full">
            <span className="text-success-700 dark:text-success-400 text-xs sm:text-sm font-medium">Active Agent</span>
          </div>
          <div className="bg-primary-100 dark:bg-primary-900/20 px-3 py-1 rounded-full">
            <span className="text-primary-700 dark:text-primary-400 text-xs sm:text-sm font-medium">Zone: Central Colombo</span>
          </div>
        </div>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        {/* Active Assignments */}
        <div className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-gray-200/50 dark:border-gray-700/50">
          <div className="flex items-center">
            <div className="p-2 bg-primary-100 dark:bg-primary-900/20 rounded-lg flex-shrink-0">
              <svg className="w-5 h-5 sm:w-6 sm:h-6 text-primary-600 dark:text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
              </svg>
            </div>
            <div className="ml-3 sm:ml-4 min-w-0">
              <p className="text-xs sm:text-sm font-medium text-gray-600 dark:text-gray-400">Active Assignments</p>
              <p className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 dark:text-white">4</p>
              <p className="text-xs text-gray-500 dark:text-gray-400">of 5 max capacity</p>
            </div>
          </div>
        </div>

        {/* Completed Today */}
        <div className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-gray-200/50 dark:border-gray-700/50">
          <div className="flex items-center">
            <div className="p-2 bg-success-100 dark:bg-success-900/20 rounded-lg flex-shrink-0">
              <svg className="w-5 h-5 sm:w-6 sm:h-6 text-success-600 dark:text-success-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div className="ml-3 sm:ml-4 min-w-0">
              <p className="text-xs sm:text-sm font-medium text-gray-600 dark:text-gray-400">Completed Today</p>
              <p className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 dark:text-white">2</p>
              <p className="text-xs text-gray-500 dark:text-gray-400">verifications done</p>
            </div>
          </div>
        </div>

        {/* Distance Traveled */}
        <div className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-gray-200/50 dark:border-gray-700/50">
          <div className="flex items-center">
            <div className="p-2 bg-secondary-100 dark:bg-secondary-900/20 rounded-lg flex-shrink-0">
              <svg className="w-5 h-5 sm:w-6 sm:h-6 text-secondary-600 dark:text-secondary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <div className="ml-3 sm:ml-4 min-w-0">
              <p className="text-xs sm:text-sm font-medium text-gray-600 dark:text-gray-400">Distance Today</p>
              <p className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 dark:text-white">23km</p>
              <p className="text-xs text-gray-500 dark:text-gray-400">average efficiency</p>
            </div>
          </div>
        </div>

        {/* Success Rate */}
        <div className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-gray-200/50 dark:border-gray-700/50">
          <div className="flex items-center">
            <div className="p-2 bg-warning-100 dark:bg-warning-900/20 rounded-lg flex-shrink-0">
              <svg className="w-5 h-5 sm:w-6 sm:h-6 text-warning-600 dark:text-warning-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
              </svg>
            </div>
            <div className="ml-3 sm:ml-4 min-w-0">
              <p className="text-xs sm:text-sm font-medium text-gray-600 dark:text-gray-400">Success Rate</p>
              <p className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 dark:text-white">97%</p>
              <p className="text-xs text-gray-500 dark:text-gray-400">this month</p>
            </div>
          </div>
        </div>
      </div>

      {/* Today's Schedule */}
      <div className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-gray-200/50 dark:border-gray-700/50">
        <h2 className="text-base sm:text-lg font-semibold text-gray-900 dark:text-white mb-4">Today&apos;s Schedule</h2>
        <div className="space-y-3 sm:space-y-4">
          {[
            {
              id: 1,
              time: '9:00 AM',
              address: '45 Galle Road, Colombo 03',
              family: 'The Perera Family',
              caregiver: 'Sarah Chen',
              status: 'completed',
              type: 'Child Care Verification'
            },
            {
              id: 2,
              time: '11:30 AM',
              address: '78 Bauddhaloka Mawatha, Colombo 07',
              family: 'The Silva Family',
              caregiver: 'Mike Johnson',
              status: 'completed',
              type: 'Elderly Care Check'
            },
            {
              id: 3,
              time: '2:00 PM',
              address: '12 Horton Place, Colombo 07',
              family: 'The Fernando Family',
              caregiver: 'Emma Williams',
              status: 'in-progress',
              type: 'Initial Assessment'
            },
            {
              id: 4,
              time: '4:30 PM',
              address: '23 Ward Place, Colombo 07',
              family: 'The Jayawardene Family',
              caregiver: 'David Lee',
              status: 'scheduled',
              type: 'Follow-up Check'
            }
          ].map((assignment) => (
            <div key={assignment.id} className="flex flex-col sm:flex-row sm:items-center sm:justify-between p-3 sm:p-4 bg-gray-50/50 dark:bg-gray-700/50 rounded-lg space-y-3 sm:space-y-0">
              <div className="flex items-start sm:items-center space-x-3 sm:space-x-4 flex-1 min-w-0">
                <div className={`w-3 h-3 rounded-full mt-1 sm:mt-0 flex-shrink-0 ${
                  assignment.status === 'completed' ? 'bg-success-500' :
                  assignment.status === 'in-progress' ? 'bg-warning-500' : 'bg-primary-500'
                }`}></div>
                <div className="min-w-0 flex-1">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-2 space-y-1 sm:space-y-0">
                    <h3 className="font-semibold text-gray-900 dark:text-white text-sm sm:text-base">{assignment.time}</h3>
                    <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full w-fit ${
                      assignment.status === 'completed' ? 'bg-success-100 text-success-800 dark:bg-success-900/20 dark:text-success-400' :
                      assignment.status === 'in-progress' ? 'bg-warning-100 text-warning-800 dark:bg-warning-900/20 dark:text-warning-400' :
                      'bg-primary-100 text-primary-800 dark:bg-primary-900/20 dark:text-primary-400'
                    }`}>
                      {assignment.status === 'completed' ? 'Completed' :
                       assignment.status === 'in-progress' ? 'In Progress' : 'Scheduled'}
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 font-medium">{assignment.type}</p>
                  <p className="text-xs text-gray-500 dark:text-gray-400 break-words">
                    {assignment.address} • {assignment.family} • Caregiver: {assignment.caregiver}
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-3 flex-shrink-0">
                <button className="text-primary-600 dark:text-primary-400 hover:text-primary-800 dark:hover:text-primary-300 text-xs sm:text-sm font-medium transition-colors">
                  View Details
                </button>
                {assignment.status === 'scheduled' && (
                  <button className="text-secondary-600 dark:text-secondary-400 hover:text-secondary-800 dark:hover:text-secondary-300 text-xs sm:text-sm font-medium transition-colors">
                    Navigate
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
        <div className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-gray-200/50 dark:border-gray-700/50 text-center hover:bg-white/80 dark:hover:bg-gray-800/80 transition-colors cursor-pointer">
          <div className="p-3 bg-primary-100 dark:bg-primary-900/20 rounded-lg w-fit mx-auto mb-4">
            <svg className="w-5 h-5 sm:w-6 sm:h-6 text-primary-600 dark:text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
            </svg>
          </div>
          <h3 className="font-semibold text-gray-900 dark:text-white mb-2 text-sm sm:text-base">Submit Report</h3>
          <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">Submit verification report</p>
        </div>

        <div className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-gray-200/50 dark:border-gray-700/50 text-center hover:bg-white/80 dark:hover:bg-gray-800/80 transition-colors cursor-pointer">
          <div className="p-3 bg-secondary-100 dark:bg-secondary-900/20 rounded-lg w-fit mx-auto mb-4">
            <svg className="w-5 h-5 sm:w-6 sm:h-6 text-secondary-600 dark:text-secondary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
            </svg>
          </div>
          <h3 className="font-semibold text-gray-900 dark:text-white mb-2 text-sm sm:text-base">Navigation</h3>
          <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">Get directions to next location</p>
        </div>

        <div className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-gray-200/50 dark:border-gray-700/50 text-center hover:bg-white/80 dark:hover:bg-gray-800/80 transition-colors cursor-pointer">
          <div className="p-3 bg-warning-100 dark:bg-warning-900/20 rounded-lg w-fit mx-auto mb-4">
            <svg className="w-5 h-5 sm:w-6 sm:h-6 text-warning-600 dark:text-warning-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
            </svg>
          </div>
          <h3 className="font-semibold text-gray-900 dark:text-white mb-2 text-sm sm:text-base">Report Issue</h3>
          <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">Report service quality issues</p>
        </div>
      </div>

      {/* Recent Activity */}
      <div className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-gray-200/50 dark:border-gray-700/50">
        <h2 className="text-base sm:text-lg font-semibold text-gray-900 dark:text-white mb-4">Recent Activity</h2>
        <div className="space-y-3">
          {[
            { action: 'Completed verification at The Perera Family', time: '30 minutes ago', type: 'success' },
            { action: 'Submitted quality assurance report for Emma Williams', time: '2 hours ago', type: 'info' },
            { action: 'Started route to The Silva Family residence', time: '3 hours ago', type: 'warning' },
            { action: 'Received new assignment for Central Colombo zone', time: '5 hours ago', type: 'info' },
          ].map((item, index) => (
            <div key={index} className="flex items-start space-x-3 p-3 bg-gray-50/50 dark:bg-gray-700/50 rounded-lg">
              <div className={`w-2 h-2 rounded-full mt-1.5 flex-shrink-0 ${
                item.type === 'success' ? 'bg-success-500' :
                item.type === 'warning' ? 'bg-warning-500' : 'bg-primary-500'
              }`}></div>
              <div className="flex-1 min-w-0">
                <p className="text-xs sm:text-sm text-gray-900 dark:text-white leading-relaxed">{item.action}</p>
                <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">{item.time}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}