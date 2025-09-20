"use client";

import React, { useState } from "react";
import { getCurrentYear } from "../../lib/getCurrentYear";

export default function AgentProfile() {
  const [isEditing, setIsEditing] = useState(false);

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
          Agent Profile
        </h1>
        <button
          onClick={() => setIsEditing(!isEditing)}
          className="bg-primary-500 hover:bg-primary-600 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors"
        >
          {isEditing ? "Save Changes" : "Edit Profile"}
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Profile Image & Basic Info */}
        <div className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm rounded-2xl p-6 border border-gray-200/50 dark:border-gray-700/50">
          <div className="text-center">
            <div className="w-24 h-24 bg-gradient-to-br from-secondary-400 to-success-600 rounded-full mx-auto mb-4 flex items-center justify-center">
              <span className="text-white text-2xl font-bold">RJ</span>
            </div>
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
              Rohan Jayasinghe
            </h2>
            <p className="text-gray-600 dark:text-gray-400">
              Quality Assurance Agent
            </p>
            <div className="mt-4 flex items-center justify-center space-x-2">
              <div className="inline-flex items-center px-3 py-1 bg-success-100 dark:bg-success-900/20 text-success-700 dark:text-success-400 rounded-full text-sm">
                <div className="w-2 h-2 bg-success-500 rounded-full mr-2"></div>
                Active
              </div>
              <div className="inline-flex items-center px-3 py-1 bg-primary-100 dark:bg-primary-900/20 text-primary-700 dark:text-primary-400 rounded-full text-sm">
                Zone: Central
              </div>
            </div>
          </div>

          <div className="mt-6 space-y-3">
            <div className="flex items-center text-sm">
              <svg
                className="w-4 h-4 text-gray-400 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              <span className="text-gray-600 dark:text-gray-400">
                rohan.j@carefinder.lk
              </span>
            </div>
            <div className="flex items-center text-sm">
              <svg
                className="w-4 h-4 text-gray-400 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
              <span className="text-gray-600 dark:text-gray-400">
                +94 71 234 5678
              </span>
            </div>
            <div className="flex items-center text-sm">
              <svg
                className="w-4 h-4 text-gray-400 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
              <span className="text-gray-600 dark:text-gray-400">
                Colombo 07, Sri Lanka
              </span>
            </div>
            <div className="flex items-center text-sm">
              <svg
                className="w-4 h-4 text-gray-400 mr-2"
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
              <span className="text-gray-600 dark:text-gray-400">
                {`Joined March ${getCurrentYear()}`}
              </span>
            </div>
          </div>
        </div>

        {/* Professional Information */}
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm rounded-2xl p-6 border border-gray-200/50 dark:border-gray-700/50">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
              Professional Information
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Agent ID
                </label>
                <input
                  type="text"
                  value="AGT-2024-003"
                  disabled={!isEditing}
                  className="w-full bg-white/70 dark:bg-gray-800/70 border border-gray-300 dark:border-gray-600 rounded-lg px-3 py-2 text-sm disabled:opacity-60"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Department
                </label>
                <input
                  type="text"
                  value="Quality Assurance"
                  disabled={!isEditing}
                  className="w-full bg-white/70 dark:bg-gray-800/70 border border-gray-300 dark:border-gray-600 rounded-lg px-3 py-2 text-sm disabled:opacity-60"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Hire Date
                </label>
                <input
                  type="date"
                  value="2024-03-01"
                  disabled={!isEditing}
                  className="w-full bg-white/70 dark:bg-gray-800/70 border border-gray-300 dark:border-gray-600 rounded-lg px-3 py-2 text-sm disabled:opacity-60"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Coverage Zone
                </label>
                <input
                  type="text"
                  value="Central Colombo"
                  disabled={!isEditing}
                  className="w-full bg-white/70 dark:bg-gray-800/70 border border-gray-300 dark:border-gray-600 rounded-lg px-3 py-2 text-sm disabled:opacity-60"
                />
              </div>
            </div>
          </div>

          {/* Work Schedule & Availability */}
          <div className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm rounded-2xl p-6 border border-gray-200/50 dark:border-gray-700/50">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
              Work Schedule & Availability
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Working Hours
                </label>
                <input
                  type="text"
                  value="8:00 AM - 6:00 PM"
                  disabled={!isEditing}
                  className="w-full bg-white/70 dark:bg-gray-800/70 border border-gray-300 dark:border-gray-600 rounded-lg px-3 py-2 text-sm disabled:opacity-60"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Working Days
                </label>
                <input
                  type="text"
                  value="Monday - Friday"
                  disabled={!isEditing}
                  className="w-full bg-white/70 dark:bg-gray-800/70 border border-gray-300 dark:border-gray-600 rounded-lg px-3 py-2 text-sm disabled:opacity-60"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Max Daily Assignments
                </label>
                <input
                  type="number"
                  value="5"
                  disabled={!isEditing}
                  className="w-full bg-white/70 dark:bg-gray-800/70 border border-gray-300 dark:border-gray-600 rounded-lg px-3 py-2 text-sm disabled:opacity-60"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Travel Radius (km)
                </label>
                <input
                  type="number"
                  value="15"
                  disabled={!isEditing}
                  className="w-full bg-white/70 dark:bg-gray-800/70 border border-gray-300 dark:border-gray-600 rounded-lg px-3 py-2 text-sm disabled:opacity-60"
                />
              </div>
            </div>
          </div>

          {/* Emergency Contacts */}
          <div className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm rounded-2xl p-6 border border-gray-200/50 dark:border-gray-700/50">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
              Emergency Contacts
            </h3>
            <div className="space-y-3">
              {[
                {
                  name: "Supervisor - Priya Mendis",
                  phone: "+94 77 345 6789",
                  relationship: "Direct Supervisor",
                },
                {
                  name: "Admin Control Center",
                  phone: "+94 11 234 5678",
                  relationship: "Operations Center",
                },
                {
                  name: "Emergency Services",
                  phone: "119",
                  relationship: "Police Emergency",
                },
              ].map((contact, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between p-3 bg-gray-50/50 dark:bg-gray-700/50 rounded-lg"
                >
                  <div>
                    <h4 className="font-medium text-gray-900 dark:text-white">
                      {contact.name}
                    </h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {contact.relationship}
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-medium text-gray-900 dark:text-white">
                      {contact.phone}
                    </p>
                    <button className="text-xs text-primary-600 dark:text-primary-400 hover:underline">
                      Quick Call
                    </button>
                  </div>
                </div>
              ))}
            </div>
            {isEditing && (
              <button className="mt-3 text-primary-600 dark:text-primary-400 text-sm hover:underline">
                + Add Emergency Contact
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Performance Statistics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm rounded-2xl p-6 border border-gray-200/50 dark:border-gray-700/50 text-center">
          <div className="text-3xl font-bold text-primary-600 dark:text-primary-400">
            187
          </div>
          <div className="text-sm text-gray-600 dark:text-gray-400">
            Total Assignments
          </div>
        </div>
        <div className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm rounded-2xl p-6 border border-gray-200/50 dark:border-gray-700/50 text-center">
          <div className="text-3xl font-bold text-success-600 dark:text-success-400">
            97%
          </div>
          <div className="text-sm text-gray-600 dark:text-gray-400">
            Success Rate
          </div>
        </div>
        <div className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm rounded-2xl p-6 border border-gray-200/50 dark:border-gray-700/50 text-center">
          <div className="text-3xl font-bold text-warning-600 dark:text-warning-400">
            4.9
          </div>
          <div className="text-sm text-gray-600 dark:text-gray-400">
            Avg Rating
          </div>
        </div>
        <div className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm rounded-2xl p-6 border border-gray-200/50 dark:border-gray-700/50 text-center">
          <div className="text-3xl font-bold text-secondary-600 dark:text-secondary-400">
            2,340
          </div>
          <div className="text-sm text-gray-600 dark:text-gray-400">
            KM Traveled
          </div>
        </div>
      </div>

      {/* Recent Performance */}
      <div className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm rounded-2xl p-6 border border-gray-200/50 dark:border-gray-700/50">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
          Recent Performance
        </h3>
        <div className="space-y-4">
          {[
            {
              date: "2024-12-20",
              assignments: 4,
              satisfaction: 98,
              issues: 0,
              status: "excellent",
            },
            {
              date: "2024-12-19",
              assignments: 5,
              satisfaction: 94,
              issues: 1,
              status: "good",
            },
            {
              date: "2024-12-18",
              assignments: 3,
              satisfaction: 100,
              issues: 0,
              status: "excellent",
            },
            {
              date: "2024-12-17",
              assignments: 4,
              satisfaction: 92,
              issues: 0,
              status: "good",
            },
          ].map((day, index) => (
            <div
              key={index}
              className="flex items-center justify-between p-3 bg-gray-50/50 dark:bg-gray-700/50 rounded-lg"
            >
              <div className="flex items-center space-x-4">
                <div className="text-sm font-medium text-gray-900 dark:text-white">
                  {new Date(day.date).toLocaleDateString()}
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  {day.assignments} assignments
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  {day.satisfaction}% satisfaction
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  {day.issues} issues
                </div>
              </div>
              <span
                className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                  day.status === "excellent"
                    ? "bg-success-100 text-success-800 dark:bg-success-900/20 dark:text-success-400"
                    : "bg-primary-100 text-primary-800 dark:bg-primary-900/20 dark:text-primary-400"
                }`}
              >
                {day.status === "excellent" ? "Excellent" : "Good"}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Vehicle Information */}
      <div className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm rounded-2xl p-6 border border-gray-200/50 dark:border-gray-700/50">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
          Vehicle Information
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Vehicle Type
            </label>
            <input
              type="text"
              value="Motorcycle"
              disabled={!isEditing}
              className="w-full bg-white/70 dark:bg-gray-800/70 border border-gray-300 dark:border-gray-600 rounded-lg px-3 py-2 text-sm disabled:opacity-60"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              License Plate
            </label>
            <input
              type="text"
              value="CAR-2345"
              disabled={!isEditing}
              className="w-full bg-white/70 dark:bg-gray-800/70 border border-gray-300 dark:border-gray-600 rounded-lg px-3 py-2 text-sm disabled:opacity-60"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Insurance Valid Until
            </label>
            <input
              type="date"
              value="2025-06-15"
              disabled={!isEditing}
              className="w-full bg-white/70 dark:bg-gray-800/70 border border-gray-300 dark:border-gray-600 rounded-lg px-3 py-2 text-sm disabled:opacity-60"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
