"use client";

import React from "react";

export default function TrainerSchedule() {
  const sessions = [
    {
      id: 1,
      trainee: "Sarah Chen",
      type: "Child Care Basics",
      date: "2024-12-20",
      time: "14:00",
      duration: 120,
      location: "Training Center A",
      status: "scheduled",
    },
    {
      id: 2,
      trainee: "Mike Johnson",
      type: "Elderly Care Assessment",
      date: "2024-12-21",
      time: "10:00",
      duration: 90,
      location: "Virtual",
      status: "scheduled",
    },
    {
      id: 3,
      trainee: "Emma Williams",
      type: "Final Assessment",
      date: "2024-12-22",
      time: "15:00",
      duration: 180,
      location: "Training Center B",
      status: "assessment",
    },
  ];

  const timeSlots = Array.from({ length: 10 }, (_, i) => {
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

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center space-y-3 sm:space-y-0">
        <h1 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white">
          Training Schedule
        </h1>
        <div className="flex items-center space-x-4">
          <button className="bg-primary-500 hover:bg-primary-600 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors">
            Schedule Session
          </button>
        </div>
      </div>

      {/* Week Navigation */}
      <div className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm rounded-2xl p-6 border border-gray-200/50 dark:border-gray-700/50">
        <div className="flex justify-between items-center mb-4">
          <button className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg">
            <svg
              className="w-5 h-5"
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
          <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
            December 16 - 22, 2024
          </h2>
          <button className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg">
            <svg
              className="w-5 h-5"
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

        {/* Desktop Calendar Grid */}
        <div className="hidden lg:block">
          <div className="grid grid-cols-8 gap-2">
            {/* Header */}
            <div className="p-2"></div>
            {days.map((day) => (
              <div
                key={day}
                className="p-3 text-center font-semibold text-gray-800 dark:text-gray-200 text-sm bg-gray-50 dark:bg-gray-700/50 rounded-lg"
              >
                {day.substring(0, 3)}
              </div>
            ))}

            {/* Time slots */}
            {timeSlots.map((time) => (
              <React.Fragment key={time}>
                <div className="p-3 text-right text-sm font-medium text-gray-700 dark:text-gray-300 bg-gray-50 dark:bg-gray-700/50 rounded-lg flex items-center justify-end">
                  {time}
                </div>
                {days.map((day, dayIndex) => {
                  const session = sessions.find((s) => {
                    const sessionDate = new Date(s.date);
                    return (
                      sessionDate.getDay() === (dayIndex + 1) % 7 &&
                      s.time === time
                    );
                  });

                  return (
                    <div
                      key={`${day}-${time}`}
                      className="p-1 min-h-[80px] border-2 border-gray-200 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors"
                    >
                      {session && (
                        <div
                          className={`p-2 rounded-lg text-xs font-medium border-l-4 ${
                            session.status === "assessment"
                              ? "bg-warning-50 text-warning-900 border-warning-400 dark:bg-warning-900/30 dark:text-warning-200 dark:border-warning-500"
                              : "bg-primary-50 text-primary-900 border-primary-400 dark:bg-primary-900/30 dark:text-primary-200 dark:border-primary-500"
                          }`}
                        >
                          <div className="font-semibold text-xs">
                            {session.trainee}
                          </div>
                          <div className="text-xs mt-1 opacity-90">
                            {session.type}
                          </div>
                          <div className="text-xs mt-1 opacity-75">
                            {session.duration}min
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

        {/* Mobile Calendar View */}
        <div className="lg:hidden">
          <div className="grid grid-cols-1 gap-3">
            {days.map((day, dayIndex) => {
              const daySessions = sessions.filter((s) => {
                const sessionDate = new Date(s.date);
                return sessionDate.getDay() === (dayIndex + 1) % 7;
              });

              return (
                <div
                  key={day}
                  className="bg-gray-50 dark:bg-gray-700/50 rounded-lg p-4"
                >
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-3">
                    {day}
                  </h3>
                  {daySessions.length > 0 ? (
                    <div className="space-y-2">
                      {daySessions.map((session) => (
                        <div
                          key={session.id}
                          className={`p-3 rounded-lg border-l-4 ${
                            session.status === "assessment"
                              ? "bg-warning-50 text-warning-900 border-warning-400 dark:bg-warning-900/30 dark:text-warning-200 dark:border-warning-500"
                              : "bg-primary-50 text-primary-900 border-primary-400 dark:bg-primary-900/30 dark:text-primary-200 dark:border-primary-500"
                          }`}
                        >
                          <div className="font-medium text-sm">
                            {session.trainee}
                          </div>
                          <div className="text-xs mt-1">{session.type}</div>
                          <div className="text-xs mt-1 font-medium">
                            {session.time} • {session.duration}min
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <p className="text-sm text-gray-500 dark:text-gray-400 italic">
                      No sessions scheduled
                    </p>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Upcoming Sessions */}
      <div className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-gray-200/50 dark:border-gray-700/50">
        <h2 className="text-base sm:text-lg font-semibold text-gray-900 dark:text-white mb-4">
          Upcoming Sessions
        </h2>
        <div className="space-y-3 sm:space-y-4">
          {sessions.map((session) => (
            <div
              key={session.id}
              className="flex flex-col sm:flex-row sm:items-center sm:justify-between p-4 bg-gray-50/80 dark:bg-gray-700/80 rounded-lg border border-gray-200 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
            >
              <div className="flex items-start sm:items-center space-x-4">
                <div
                  className={`w-4 h-4 rounded-full mt-0.5 sm:mt-0 flex-shrink-0 ${
                    session.status === "assessment"
                      ? "bg-warning-500"
                      : "bg-primary-500"
                  }`}
                ></div>
                <div className="min-w-0">
                  <h3 className="font-semibold text-gray-900 dark:text-white text-sm sm:text-base">
                    {session.trainee}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 font-medium">
                    {session.type}
                  </p>
                  <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                    {session.location} • {session.duration} minutes
                  </p>
                </div>
              </div>
              <div className="mt-3 sm:mt-0 sm:text-right flex-shrink-0">
                <p className="text-sm font-bold text-gray-900 dark:text-white">
                  {new Date(session.date).toLocaleDateString()} at{" "}
                  {session.time}
                </p>
                <div className="flex space-x-3 mt-2">
                  <button className="text-xs font-medium text-primary-600 dark:text-primary-400 hover:text-primary-800 dark:hover:text-primary-300 transition-colors">
                    Edit
                  </button>
                  <button className="text-xs font-medium text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 transition-colors">
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
        <div className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-gray-200/50 dark:border-gray-700/50 text-center hover:bg-white/90 dark:hover:bg-gray-800/90 transition-colors cursor-pointer">
          <div className="p-3 bg-primary-100 dark:bg-primary-900/20 rounded-lg w-fit mx-auto mb-4">
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
                d="M12 6v6m0 0v6m0-6h6m-6 0H6"
              />
            </svg>
          </div>
          <h3 className="font-semibold text-gray-900 dark:text-white mb-2 text-sm sm:text-base">
            Add Session
          </h3>
          <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">
            Schedule a new training session
          </p>
        </div>

        <div className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-gray-200/50 dark:border-gray-700/50 text-center hover:bg-white/90 dark:hover:bg-gray-800/90 transition-colors cursor-pointer">
          <div className="p-3 bg-warning-100 dark:bg-warning-900/20 rounded-lg w-fit mx-auto mb-4">
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
                d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
              />
            </svg>
          </div>
          <h3 className="font-semibold text-gray-900 dark:text-white mb-2 text-sm sm:text-base">
            Assessments
          </h3>
          <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">
            Schedule final assessments
          </p>
        </div>

        <div className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-gray-200/50 dark:border-gray-700/50 text-center hover:bg-white/90 dark:hover:bg-gray-800/90 transition-colors cursor-pointer">
          <div className="p-3 bg-success-100 dark:bg-success-900/20 rounded-lg w-fit mx-auto mb-4">
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
                d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
          </div>
          <h3 className="font-semibold text-gray-900 dark:text-white mb-2 text-sm sm:text-base">
            Availability
          </h3>
          <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">
            Manage your availability
          </p>
        </div>
      </div>
    </div>
  );
}
