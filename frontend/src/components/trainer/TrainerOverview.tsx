"use client";

import React from "react";

export default function TrainerOverview() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center space-y-3 sm:space-y-0">
        <h1 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white">
          Training Overview
        </h1>
        <div className="flex items-center space-x-2">
          <div className="bg-warning-100 dark:bg-warning-900/20 px-3 py-1 rounded-full">
            <span className="text-warning-700 dark:text-warning-400 text-xs sm:text-sm font-medium">
              Active Trainer
            </span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        {/* Active Trainees */}
        <div className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-gray-200/50 dark:border-gray-700/50">
          <div className="flex items-center">
            <div className="p-2 bg-primary-100 dark:bg-primary-900/20 rounded-lg flex-shrink-0">
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
            <div className="ml-3 sm:ml-4 min-w-0">
              <p className="text-xs sm:text-sm font-medium text-gray-600 dark:text-gray-400">
                Active Trainees
              </p>
              <p className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 dark:text-white">
                12
              </p>
            </div>
          </div>
        </div>

        {/* Completed Training */}
        <div className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-gray-200/50 dark:border-gray-700/50">
          <div className="flex items-center">
            <div className="p-2 bg-success-100 dark:bg-success-900/20 rounded-lg flex-shrink-0">
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
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <div className="ml-3 sm:ml-4 min-w-0">
              <p className="text-xs sm:text-sm font-medium text-gray-600 dark:text-gray-400">
                Completed
              </p>
              <p className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 dark:text-white">
                47
              </p>
            </div>
          </div>
        </div>

        {/* Success Rate */}
        <div className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-gray-200/50 dark:border-gray-700/50">
          <div className="flex items-center">
            <div className="p-2 bg-warning-100 dark:bg-warning-900/20 rounded-lg flex-shrink-0">
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
                  d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                />
              </svg>
            </div>
            <div className="ml-3 sm:ml-4 min-w-0">
              <p className="text-xs sm:text-sm font-medium text-gray-600 dark:text-gray-400">
                Success Rate
              </p>
              <p className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 dark:text-white">
                94%
              </p>
            </div>
          </div>
        </div>

        {/* Monthly Hours */}
        <div className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-gray-200/50 dark:border-gray-700/50">
          <div className="flex items-center">
            <div className="p-2 bg-secondary-100 dark:bg-secondary-900/20 rounded-lg flex-shrink-0">
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
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <div className="ml-3 sm:ml-4 min-w-0">
              <p className="text-xs sm:text-sm font-medium text-gray-600 dark:text-gray-400">
                This Month
              </p>
              <p className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 dark:text-white">
                142h
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Recent Activity */}
      <div className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-gray-200/50 dark:border-gray-700/50">
        <h2 className="text-base sm:text-lg font-semibold text-gray-900 dark:text-white mb-4">
          Recent Activity
        </h2>
        <div className="space-y-3 sm:space-y-4">
          {[
            {
              action: "Completed assessment for Sarah Chen",
              time: "2 hours ago",
              type: "success",
            },
            {
              action: "Started new training session with Mike Johnson",
              time: "4 hours ago",
              type: "info",
            },
            {
              action: "Submitted progress report for Emma Williams",
              time: "1 day ago",
              type: "warning",
            },
            {
              action: "Training completion certificate issued to David Lee",
              time: "2 days ago",
              type: "success",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="flex items-start sm:items-center space-x-3 p-3 bg-gray-50/50 dark:bg-gray-700/50 rounded-lg"
            >
              <div
                className={`w-2 h-2 rounded-full mt-1.5 sm:mt-0 flex-shrink-0 ${
                  item.type === "success"
                    ? "bg-success-500"
                    : item.type === "warning"
                      ? "bg-warning-500"
                      : "bg-primary-500"
                }`}
              ></div>
              <div className="flex-1 min-w-0">
                <p className="text-xs sm:text-sm text-gray-900 dark:text-white leading-relaxed">
                  {item.action}
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                  {item.time}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Upcoming Sessions */}
      <div className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-gray-200/50 dark:border-gray-700/50">
        <h2 className="text-base sm:text-lg font-semibold text-gray-900 dark:text-white mb-4">
          Upcoming Training Sessions
        </h2>
        <div className="space-y-3 sm:space-y-4">
          {[
            {
              trainee: "Lisa Rodriguez",
              type: "Child Care Basics",
              time: "Today 2:00 PM",
              location: "CareFinder Training Center",
            },
            {
              trainee: "Mark Thompson",
              type: "Elderly Care Assessment",
              time: "Tomorrow 10:00 AM",
              location: "Virtual Session",
            },
            {
              trainee: "Jessica Brown",
              type: "Emergency Procedures",
              time: "Dec 21, 3:00 PM",
              location: "CareFinder Training Center",
            },
          ].map((session, index) => (
            <div
              key={index}
              className="flex flex-col sm:flex-row sm:items-center sm:justify-between p-3 sm:p-4 bg-gray-50/50 dark:bg-gray-700/50 rounded-lg space-y-2 sm:space-y-0"
            >
              <div className="min-w-0 flex-1">
                <h3 className="font-medium text-gray-900 dark:text-white text-sm sm:text-base truncate">
                  {session.trainee}
                </h3>
                <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">
                  {session.type}
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-400 truncate">
                  {session.location}
                </p>
              </div>
              <div className="text-left sm:text-right flex-shrink-0">
                <p className="text-xs sm:text-sm font-medium text-primary-600 dark:text-primary-400">
                  {session.time}
                </p>
                <button className="text-xs text-primary-600 dark:text-primary-400 hover:underline transition-colors">
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
