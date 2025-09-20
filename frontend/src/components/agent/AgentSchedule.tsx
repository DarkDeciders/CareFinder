"use client";

import React, { useState } from "react";
import { getCurrentYear } from "../../lib/getCurrentYear";

interface Assignment {
  id: number;
  date: string;
  time: string;
  duration: number;
  family: string;
  address: string;
  type: string;
  status: string;
}

export default function AgentSchedule() {
  const [viewType, setViewType] = useState<"week" | "day">("week");

  const year = getCurrentYear();

  const assignments = [
    {
      id: 1,
      date: "2024-12-20",
      time: "09:00",
      duration: 45,
      family: "The Perera Family",
      address: "45 Galle Road, Colombo 03",
      type: "Child Care Verification",
      status: "scheduled",
    },
    {
      id: 2,
      date: "2024-12-20",
      time: "11:30",
      duration: 60,
      family: "The Silva Family",
      address: "78 Bauddhaloka Mawatha, Colombo 07",
      type: "Elderly Care Check",
      status: "scheduled",
    },
    {
      id: 3,
      date: "2024-12-20",
      time: "14:00",
      duration: 30,
      family: "The Fernando Family",
      address: "12 Horton Place, Colombo 07",
      type: "Initial Assessment",
      status: "scheduled",
    },
    {
      id: 4,
      date: "2024-12-20",
      time: "16:30",
      duration: 50,
      family: "The Jayawardene Family",
      address: "23 Ward Place, Colombo 07",
      type: "Follow-up Check",
      status: "scheduled",
    },
    {
      id: 5,
      date: "2024-12-21",
      time: "10:00",
      duration: 30,
      family: "The Rajapaksha Family",
      address: "56 Duplication Road, Colombo 04",
      type: "Routine Check",
      status: "scheduled",
    },
    {
      id: 6,
      date: "2024-12-21",
      time: "13:00",
      duration: 45,
      family: "The Bandara Family",
      address: "89 Baseline Road, Colombo 09",
      type: "Quality Assessment",
      status: "scheduled",
    },
  ];

  const timeSlots = Array.from({ length: 12 }, (_, i) => {
    const hour = 8 + i;
    return `${hour.toString().padStart(2, "0")}:00`;
  });

  const days = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];
  const weekDates = [
    `Dec 16, ${year}`,
    `Dec 17, ${year}`,
    `Dec 18, ${year}`,
    `Dec 19, ${year}`,
    `Dec 20, ${year}`,
    `Dec 21, ${year}`,
    `Dec 22, ${year}`,
  ];

  const getTotalWorkingHours = () => {
    return (
      assignments.reduce(
        (total, assignment) => total + assignment.duration,
        0,
      ) / 60
    );
  };

  const getAssignmentForTimeSlot = (
    dayIndex: number,
    time: string,
  ): Assignment | undefined => {
    const dateStr = `${year}-12-${String(16 + dayIndex).padStart(2, "0")}`;
    return assignments.find((a) => a.date === dateStr && a.time === time);
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center space-y-4 sm:space-y-0">
        <h1 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white">
          My Schedule
        </h1>
        <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-3 sm:space-y-0 sm:space-x-4">
          <div className="flex bg-gray-100 dark:bg-gray-700 rounded-lg p-1">
            <button
              onClick={() => setViewType("week")}
              className={`px-3 py-1 text-sm rounded-md transition-colors ${
                viewType === "week"
                  ? "bg-white dark:bg-gray-600 text-gray-900 dark:text-white shadow"
                  : "text-gray-600 dark:text-gray-400"
              }`}
            >
              Week
            </button>
            <button
              onClick={() => setViewType("day")}
              className={`px-3 py-1 text-sm rounded-md transition-colors ${
                viewType === "day"
                  ? "bg-white dark:bg-gray-600 text-gray-900 dark:text-white shadow"
                  : "text-gray-600 dark:text-gray-400"
              }`}
            >
              Day
            </button>
          </div>
          <div className="text-xs sm:text-sm text-gray-600 dark:text-gray-300">
            Total:{" "}
            <span className="font-semibold">
              {getTotalWorkingHours().toFixed(1)}h this week
            </span>
          </div>
        </div>
      </div>

      {/* Schedule Summary */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        <div className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-gray-200/50 dark:border-gray-700/50 text-center">
          <div className="text-2xl sm:text-3xl font-bold text-primary-600 dark:text-primary-400">
            6
          </div>
          <div className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">
            Assignments This Week
          </div>
        </div>
        <div className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-gray-200/50 dark:border-gray-700/50 text-center">
          <div className="text-2xl sm:text-3xl font-bold text-success-600 dark:text-success-400">
            {getTotalWorkingHours().toFixed(1)}
          </div>
          <div className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">
            Working Hours
          </div>
        </div>
        <div className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-gray-200/50 dark:border-gray-700/50 text-center">
          <div className="text-2xl sm:text-3xl font-bold text-warning-600 dark:text-warning-400">
            75
          </div>
          <div className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">
            KM This Week
          </div>
        </div>
        <div className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-gray-200/50 dark:border-gray-700/50 text-center">
          <div className="text-2xl sm:text-3xl font-bold text-secondary-600 dark:text-secondary-400">
            Central
          </div>
          <div className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">
            Coverage Zone
          </div>
        </div>
      </div>

      {/* Week Navigation */}
      <div className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-gray-200/50 dark:border-gray-700/50">
        <div className="flex justify-between items-center mb-4">
          <button className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors">
            <svg
              className="w-5 h-5 text-gray-600 dark:text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>
          <h2 className="text-base sm:text-lg font-semibold text-gray-900 dark:text-white text-center">
            {`December 16 - 22, ${year}`}
          </h2>
          <button className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors">
            <svg
              className="w-5 h-5 text-gray-600 dark:text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>

        {viewType === "week" ? (
          <>
            {/* Desktop Weekly Calendar Grid */}
            <div className="hidden lg:block">
              <div className="grid grid-cols-8 gap-2">
                {/* Header */}
                <div className="p-2"></div>
                {days.map((day, index) => (
                  <div
                    key={day}
                    className="p-3 text-center bg-gray-50 dark:bg-gray-700/50 rounded-lg"
                  >
                    <div className="font-semibold text-gray-800 dark:text-gray-200 text-sm">
                      {day.substring(0, 3)}
                    </div>
                    <div className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                      {weekDates[index]}
                    </div>
                  </div>
                ))}

                {/* Time slots */}
                {timeSlots.map((time) => (
                  <React.Fragment key={time}>
                    <div className="p-3 text-right text-sm font-medium text-gray-700 dark:text-gray-300 bg-gray-50 dark:bg-gray-700/50 rounded-lg flex items-center justify-end">
                      {time}
                    </div>
                    {days.map((day, dayIndex) => {
                      const assignment = getAssignmentForTimeSlot(
                        dayIndex,
                        time,
                      );
                      return (
                        <div
                          key={`${day}-${time}`}
                          className="p-1 min-h-[80px] border-2 border-gray-200 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors"
                        >
                          {assignment && (
                            <div className="p-2 bg-primary-50 text-primary-900 border-l-4 border-primary-400 dark:bg-primary-900/30 dark:text-primary-200 dark:border-primary-500 rounded-lg text-xs font-medium">
                              <div className="font-semibold text-xs">
                                {assignment.family
                                  .replace("The ", "")
                                  .replace(" Family", "")}
                              </div>
                              <div className="text-xs mt-1 opacity-90">
                                {assignment.type.split(" ")[0]}
                              </div>
                              <div className="text-xs mt-1 opacity-75">
                                {assignment.duration}min
                              </div>
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </React.Fragment>
                ))}
              </div>
            </div>

            {/* Mobile Weekly Calendar View */}
            <div className="lg:hidden">
              <div className="grid grid-cols-1 gap-3">
                {days.map((day, dayIndex) => {
                  const dayAssignments = assignments.filter((a) => {
                    const assignmentDate = new Date(a.date);
                    const currentDate = new Date(`${year}-12-${String(16 + dayIndex).padStart(2, "0")}`);
                    return assignmentDate.getTime() === currentDate.getTime();
                  });

                  return (
                    <div
                      key={day}
                      className="bg-gray-50 dark:bg-gray-700/50 rounded-lg p-4"
                    >
                      <div className="flex justify-between items-center mb-3">
                        <h3 className="font-semibold text-gray-900 dark:text-white">
                          {day}
                        </h3>
                        <span className="text-xs text-gray-500 dark:text-gray-400">
                          {weekDates[dayIndex]}
                        </span>
                      </div>
                      {dayAssignments.length > 0 ? (
                        <div className="space-y-2">
                          {dayAssignments.map((assignment) => (
                            <div
                              key={assignment.id}
                              className="p-3 bg-primary-50 text-primary-900 border-l-4 border-primary-400 dark:bg-primary-900/30 dark:text-primary-200 dark:border-primary-500 rounded-lg"
                            >
                              <div className="font-medium text-sm">
                                {assignment.family}
                              </div>
                              <div className="text-xs mt-1">
                                {assignment.type}
                              </div>
                              <div className="text-xs mt-1 font-medium">
                                {assignment.time} • {assignment.duration}min
                              </div>
                            </div>
                          ))}
                        </div>
                      ) : (
                        <p className="text-sm text-gray-500 dark:text-gray-400 italic">
                          No assignments scheduled
                        </p>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </>
        ) : (
          /* Daily Schedule */
          <div className="space-y-3 sm:space-y-4">
            <div className="text-center mb-4">
              <h3 className="text-base sm:text-lg font-semibold text-gray-900 dark:text-white">
                {`Today - December 20, ${year}`}
              </h3>
            </div>
            {assignments
              .filter((a) => a.date === `${year}-12-20`)
              .sort((a, b) => a.time.localeCompare(b.time))
              .map((assignment) => (
                <div
                  key={assignment.id}
                  className="flex flex-col sm:flex-row sm:items-center space-y-3 sm:space-y-0 sm:space-x-4 p-3 sm:p-4 bg-gray-50/80 dark:bg-gray-700/80 rounded-lg border border-gray-200 dark:border-gray-600"
                >
                  <div className="text-center sm:text-left min-w-[80px] flex-shrink-0">
                    <div className="text-base sm:text-lg font-bold text-gray-900 dark:text-white">
                      {assignment.time}
                    </div>
                    <div className="text-xs text-gray-500 dark:text-gray-400">
                      {assignment.duration}min
                    </div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="font-semibold text-gray-900 dark:text-white text-sm sm:text-base">
                      {assignment.family}
                    </h4>
                    <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 font-medium">
                      {assignment.type}
                    </p>
                    <p className="text-xs text-gray-500 dark:text-gray-400 break-words">
                      {assignment.address}
                    </p>
                  </div>
                  <div className="flex space-x-3 flex-shrink-0">
                    <button className="text-primary-600 dark:text-primary-400 hover:text-primary-800 dark:hover:text-primary-300 text-xs sm:text-sm font-medium transition-colors">
                      Details
                    </button>
                    <button className="text-secondary-600 dark:text-secondary-400 hover:text-secondary-800 dark:hover:text-secondary-300 text-xs sm:text-sm font-medium transition-colors">
                      Navigate
                    </button>
                  </div>
                </div>
              ))}
          </div>
        )}
      </div>

      {/* Availability Management */}
      <div className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-gray-200/50 dark:border-gray-700/50">
        <h2 className="text-base sm:text-lg font-semibold text-gray-900 dark:text-white mb-4">
          Availability Settings
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
          <div>
            <h3 className="font-medium text-gray-900 dark:text-white mb-3">
              Working Hours
            </h3>
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600 dark:text-gray-400">
                  Monday - Friday
                </span>
                <span className="text-sm text-gray-900 dark:text-white">
                  8:00 AM - 6:00 PM
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600 dark:text-gray-400">
                  Saturday
                </span>
                <span className="text-sm text-gray-900 dark:text-white">
                  9:00 AM - 2:00 PM
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600 dark:text-gray-400">
                  Sunday
                </span>
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  Not Available
                </span>
              </div>
            </div>
          </div>
          <div>
            <h3 className="font-medium text-gray-900 dark:text-white mb-3">
              Coverage Zone
            </h3>
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600 dark:text-gray-400">
                  Primary Zone
                </span>
                <span className="text-sm text-gray-900 dark:text-white">
                  Central Colombo
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600 dark:text-gray-400">
                  Secondary Zone
                </span>
                <span className="text-sm text-gray-900 dark:text-white">
                  Colombo 03, 04, 07
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600 dark:text-gray-400">
                  Max Distance
                </span>
                <span className="text-sm text-gray-900 dark:text-white">
                  15 km radius
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-4 flex justify-center sm:justify-end">
          <button className="bg-primary-500 hover:bg-primary-600 text-white px-4 py-2 rounded-lg text-xs sm:text-sm font-medium transition-colors w-full sm:w-auto">
            Update Availability
          </button>
        </div>
      </div>

      {/* Route Optimization */}
      <div className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-gray-200/50 dark:border-gray-700/50">
        <h2 className="text-base sm:text-lg font-semibold text-gray-900 dark:text-white mb-4">
          Route Optimization
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
          <div className="text-center">
            <div className="p-3 bg-success-100 dark:bg-success-900/20 rounded-lg w-fit mx-auto mb-3">
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
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                />
              </svg>
            </div>
            <h3 className="font-semibold text-gray-900 dark:text-white mb-2 text-sm sm:text-base">
              Optimized Route
            </h3>
            <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">
              Today&apos;s route optimized for minimal travel time
            </p>
          </div>
          <div className="text-center">
            <div className="p-3 bg-primary-100 dark:bg-primary-900/20 rounded-lg w-fit mx-auto mb-3">
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
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
              </svg>
            </div>
            <h3 className="font-semibold text-gray-900 dark:text-white mb-2 text-sm sm:text-base">
              23 KM Total
            </h3>
            <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">
              Estimated travel distance for today
            </p>
          </div>
          <div className="text-center">
            <div className="p-3 bg-warning-100 dark:bg-warning-900/20 rounded-lg w-fit mx-auto mb-3">
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
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <h3 className="font-semibold text-gray-900 dark:text-white mb-2 text-sm sm:text-base">
              3.5 Hours
            </h3>
            <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">
              Total working time today
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
