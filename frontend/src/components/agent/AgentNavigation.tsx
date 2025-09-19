'use client'

import React, { useState } from 'react';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
interface Assignment {
  id: number;
  family: string;
  address: string;
  coordinates: { lat: number; lng: number };
  time: string;
  status: string;
  distance: number;
  estimatedTravel: number;
}

export default function AgentNavigation() {
  const [selectedAssignment, setSelectedAssignment] = useState<number | null>(null);
  const [routeOptimized, setRouteOptimized] = useState(false);

  const assignments = [
    {
      id: 1,
      family: 'The Perera Family',
      address: '45 Galle Road, Colombo 03',
      coordinates: { lat: 6.9147, lng: 79.8522 },
      time: '09:00',
      status: 'next',
      distance: 2.3,
      estimatedTravel: 8
    },
    {
      id: 2,
      family: 'The Silva Family',
      address: '78 Bauddhaloka Mawatha, Colombo 07',
      coordinates: { lat: 6.9147, lng: 79.8612 },
      time: '11:30',
      status: 'scheduled',
      distance: 4.1,
      estimatedTravel: 12
    },
    {
      id: 3,
      family: 'The Fernando Family',
      address: '12 Horton Place, Colombo 07',
      coordinates: { lat: 6.9088, lng: 79.8653 },
      time: '14:00',
      status: 'scheduled',
      distance: 1.8,
      estimatedTravel: 6
    },
    {
      id: 4,
      family: 'The Jayawardene Family',
      address: '23 Ward Place, Colombo 07',
      coordinates: { lat: 6.9135, lng: 79.8634 },
      time: '16:30',
      status: 'scheduled',
      distance: 2.5,
      estimatedTravel: 9
    }
  ];

  const optimizeRoute = () => {
    setRouteOptimized(true);
    // In a real app, this would call a route optimization API
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Navigation & Routes</h1>
        <div className="flex items-center space-x-4">
          <button
            onClick={optimizeRoute}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
              routeOptimized
                ? 'bg-success-500 text-white'
                : 'bg-primary-500 hover:bg-primary-600 text-white'
            }`}
          >
            {routeOptimized ? '✓ Route Optimized' : 'Optimize Route'}
          </button>
        </div>
      </div>

      {/* Current Location & Status */}
      <div className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm rounded-2xl p-6 border border-gray-200/50 dark:border-gray-700/50">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Current Status</h2>
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-success-500 rounded-full animate-pulse"></div>
                <span className="text-sm text-gray-600 dark:text-gray-400">Active</span>
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">
                Current Location: Independence Square Area
              </div>
            </div>
          </div>
          <div className="text-right">
            <div className="text-sm text-gray-600 dark:text-gray-400">Next Assignment</div>
            <div className="text-lg font-semibold text-gray-900 dark:text-white">
              {assignments.find(a => a.status === 'next')?.time || 'No upcoming'}
            </div>
          </div>
        </div>
      </div>

      {/* Route Summary */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm rounded-2xl p-6 border border-gray-200/50 dark:border-gray-700/50 text-center">
          <div className="text-3xl font-bold text-primary-600 dark:text-primary-400">23.7</div>
          <div className="text-sm text-gray-600 dark:text-gray-400">Total KM Today</div>
        </div>
        <div className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm rounded-2xl p-6 border border-gray-200/50 dark:border-gray-700/50 text-center">
          <div className="text-3xl font-bold text-success-600 dark:text-success-400">35</div>
          <div className="text-sm text-gray-600 dark:text-gray-400">Travel Time (min)</div>
        </div>
        <div className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm rounded-2xl p-6 border border-gray-200/50 dark:border-gray-700/50 text-center">
          <div className="text-3xl font-bold text-warning-600 dark:text-warning-400">4</div>
          <div className="text-sm text-gray-600 dark:text-gray-400">Stops Remaining</div>
        </div>
        <div className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm rounded-2xl p-6 border border-gray-200/50 dark:border-gray-700/50 text-center">
          <div className="text-3xl font-bold text-secondary-600 dark:text-secondary-400">92%</div>
          <div className="text-sm text-gray-600 dark:text-gray-400">Route Efficiency</div>
        </div>
      </div>

      {/* Assignment Locations */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Map View (Placeholder) */}
        <div className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm rounded-2xl p-6 border border-gray-200/50 dark:border-gray-700/50">
          <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Route Map</h2>
          <div className="bg-gray-100 dark:bg-gray-700 rounded-lg h-64 flex items-center justify-center relative overflow-hidden">
            {/* Simplified map representation */}
            <div className="absolute inset-0 p-4">
              <div className="relative w-full h-full">
                {/* Roads/Paths */}
                <div className="absolute top-1/3 left-0 right-0 h-1 bg-gray-300 dark:bg-gray-600"></div>
                <div className="absolute left-1/3 top-0 bottom-0 w-1 bg-gray-300 dark:bg-gray-600"></div>
                <div className="absolute right-1/4 top-0 bottom-0 w-1 bg-gray-300 dark:bg-gray-600"></div>

                {/* Assignment Markers */}
                {assignments.map((assignment, index) => (
                  <div
                    key={assignment.id}
                    className={`absolute w-6 h-6 rounded-full flex items-center justify-center text-white text-xs font-bold cursor-pointer ${
                      assignment.status === 'next' ? 'bg-success-500' :
                      selectedAssignment === assignment.id ? 'bg-primary-600' : 'bg-primary-400'
                    }`}
                    style={{
                      left: `${20 + index * 20}%`,
                      top: `${30 + (index % 2) * 20}%`
                    }}
                    onClick={() => setSelectedAssignment(assignment.id)}
                  >
                    {index + 1}
                  </div>
                ))}

                {/* Current Location */}
                <div className="absolute w-4 h-4 bg-red-500 rounded-full left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 animate-pulse">
                  <div className="absolute inset-0 bg-red-500 rounded-full animate-ping opacity-75"></div>
                </div>
              </div>
            </div>
            <div className="text-center text-gray-500 dark:text-gray-400">
              <svg className="w-12 h-12 mx-auto mb-2 opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
              </svg>
              <p className="text-sm">Interactive Map View</p>
              <p className="text-xs">Click markers for details</p>
            </div>
          </div>
        </div>

        {/* Assignment List */}
        <div className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm rounded-2xl p-6 border border-gray-200/50 dark:border-gray-700/50">
          <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Today&apos;s Route</h2>
          <div className="space-y-4">
            {assignments.map((assignment, index) => (
              <div
                key={assignment.id}
                className={`p-4 rounded-lg border-2 transition-colors cursor-pointer ${
                  selectedAssignment === assignment.id
                    ? 'border-primary-300 bg-primary-50/50 dark:border-primary-600 dark:bg-primary-900/20'
                    : assignment.status === 'next'
                    ? 'border-success-300 bg-success-50/50 dark:border-success-600 dark:bg-success-900/20'
                    : 'border-gray-200 dark:border-gray-600 hover:border-gray-300 dark:hover:border-gray-500'
                }`}
                onClick={() => setSelectedAssignment(assignment.id)}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center text-white text-sm font-bold ${
                      assignment.status === 'next' ? 'bg-success-500' : 'bg-primary-500'
                    }`}>
                      {index + 1}
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-900 dark:text-white">{assignment.family}</h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400">{assignment.address}</p>
                      <div className="flex items-center space-x-3 mt-1">
                        <span className="text-xs text-gray-500 dark:text-gray-400">
                          {assignment.distance} km • {assignment.estimatedTravel} min
                        </span>
                        <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                          assignment.status === 'next'
                            ? 'bg-success-100 text-success-800 dark:bg-success-900/20 dark:text-success-400'
                            : 'bg-gray-100 text-gray-800 dark:bg-gray-900/20 dark:text-gray-400'
                        }`}>
                          {assignment.status === 'next' ? 'Next Stop' : assignment.time}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col space-y-2">
                    <button className="text-primary-600 dark:text-primary-400 hover:underline text-sm">
                      Navigate
                    </button>
                    <button className="text-secondary-600 dark:text-secondary-400 hover:underline text-sm">
                      Call Family
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Navigation Tools */}
      <div className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm rounded-2xl p-6 border border-gray-200/50 dark:border-gray-700/50">
        <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Navigation Tools</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center">
            <div className="p-4 bg-primary-100 dark:bg-primary-900/20 rounded-lg mb-3">
              <svg className="w-8 h-8 text-primary-600 dark:text-primary-400 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
              </svg>
            </div>
            <h3 className="font-medium text-gray-900 dark:text-white mb-2">Google Maps</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">Open in Google Maps for turn-by-turn navigation</p>
            <button className="bg-primary-500 hover:bg-primary-600 text-white px-4 py-2 rounded-lg text-sm transition-colors">
              Open Maps
            </button>
          </div>

          <div className="text-center">
            <div className="p-4 bg-success-100 dark:bg-success-900/20 rounded-lg mb-3">
              <svg className="w-8 h-8 text-success-600 dark:text-success-400 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            </div>
            <h3 className="font-medium text-gray-900 dark:text-white mb-2">Call Family</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">Contact family before arrival or for verification</p>
            <button className="bg-success-500 hover:bg-success-600 text-white px-4 py-2 rounded-lg text-sm transition-colors">
              Quick Call
            </button>
          </div>

          <div className="text-center">
            <div className="p-4 bg-warning-100 dark:bg-warning-900/20 rounded-lg mb-3">
              <svg className="w-8 h-8 text-warning-600 dark:text-warning-400 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
              </svg>
            </div>
            <h3 className="font-medium text-gray-900 dark:text-white mb-2">Report Issue</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">Report navigation problems or delays</p>
            <button className="bg-warning-500 hover:bg-warning-600 text-white px-4 py-2 rounded-lg text-sm transition-colors">
              Report Issue
            </button>
          </div>
        </div>
      </div>

      {/* Traffic & Route Conditions */}
      <div className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm rounded-2xl p-6 border border-gray-200/50 dark:border-gray-700/50">
        <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Current Conditions</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className="font-medium text-gray-900 dark:text-white mb-3">Traffic Status</h3>
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600 dark:text-gray-400">Galle Road</span>
                <span className="inline-flex px-2 py-1 text-xs font-semibold rounded-full bg-success-100 text-success-800 dark:bg-success-900/20 dark:text-success-400">
                  Clear
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600 dark:text-gray-400">Bauddhaloka Mawatha</span>
                <span className="inline-flex px-2 py-1 text-xs font-semibold rounded-full bg-warning-100 text-warning-800 dark:bg-warning-900/20 dark:text-warning-400">
                  Moderate
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600 dark:text-gray-400">Horton Place</span>
                <span className="inline-flex px-2 py-1 text-xs font-semibold rounded-full bg-success-100 text-success-800 dark:bg-success-900/20 dark:text-success-400">
                  Clear
                </span>
              </div>
            </div>
          </div>
          <div>
            <h3 className="font-medium text-gray-900 dark:text-white mb-3">Weather & Alerts</h3>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <svg className="w-4 h-4 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRule="evenodd" />
                </svg>
                <span className="text-sm text-gray-600 dark:text-gray-400">Sunny, 28°C</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span className="text-sm text-gray-600 dark:text-gray-400">No weather alerts</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <span className="text-sm text-gray-600 dark:text-gray-400">Good visibility</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}