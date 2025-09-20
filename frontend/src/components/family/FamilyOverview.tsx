"use client";

import React from "react";

export default function FamilyOverview() {
  const stats = [
    { label: "Active Bookings", value: "3", icon: "📅", color: "primary" },
    { label: "Completed Services", value: "12", icon: "✅", color: "success" },
    { label: "Favorite Caregivers", value: "5", icon: "⭐", color: "warning" },
    {
      label: "Total Spent",
      value: "LKR 45,000",
      icon: "💰",
      color: "secondary",
    },
  ];

  const recentActivity = [
    {
      type: "booking",
      title: "Childcare booking confirmed",
      description: "Maria Silva will care for Emma on Dec 20th",
      time: "2 hours ago",
      status: "confirmed",
    },
    {
      type: "message",
      title: "New message from John Perera",
      description: "Regarding eldercare schedule changes",
      time: "5 hours ago",
      status: "unread",
    },
    {
      type: "review",
      title: "Review reminder",
      description: "Please review your session with Priya Fernando",
      time: "1 day ago",
      status: "pending",
    },
    {
      type: "payment",
      title: "Payment processed",
      description: "LKR 3,500 paid to Maria Silva",
      time: "2 days ago",
      status: "completed",
    },
  ];

  const upcomingBookings = [
    {
      caregiver: "Maria Silva",
      type: "Childcare",
      date: "Dec 20, 2024",
      time: "9:00 AM - 5:00 PM",
      children: ["Emma Johnson"],
      status: "confirmed",
    },
    {
      caregiver: "John Perera",
      type: "Elderly Care",
      date: "Dec 22, 2024",
      time: "2:00 PM - 6:00 PM",
      elderly: ["Grandmother"],
      status: "confirmed",
    },
    {
      caregiver: "Priya Fernando",
      type: "Babysitting",
      date: "Dec 25, 2024",
      time: "7:00 PM - 11:00 PM",
      children: ["Emma Johnson", "Liam Johnson"],
      status: "pending",
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "confirmed":
        return "text-success-600 bg-success-50";
      case "pending":
        return "text-warning-600 bg-warning-50";
      case "unread":
        return "text-primary-600 bg-primary-50";
      case "completed":
        return "text-gray-600 bg-gray-50 dark:text-gray-300 dark:bg-gray-700";
      default:
        return "text-gray-600 bg-gray-50 dark:text-gray-300 dark:bg-gray-700";
    }
  };

  const getStatColor = (color: string) => {
    switch (color) {
      case "primary":
        return "from-primary-500 to-primary-600";
      case "success":
        return "from-success-500 to-success-600";
      case "warning":
        return "from-warning-500 to-warning-600";
      case "secondary":
        return "from-secondary-500 to-secondary-600";
      default:
        return "from-gray-500 to-gray-600";
    }
  };

  return (
    <div className="space-y-6">
      {/* Welcome Header */}
      <div className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm rounded-2xl p-4 sm:p-6 border border-gray-200/50 dark:border-gray-700/50">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-2 sm:space-y-0">
          <div>
            <h1 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white">
              Good{" "}
              {new Date().getHours() < 12
                ? "Morning"
                : new Date().getHours() < 18
                  ? "Afternoon"
                  : "Evening"}
              , Sarah! 👋
            </h1>
            <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 mt-1">
              Here&apos;s what&apos;s happening with your care services today
            </p>
          </div>
          <div className="text-left sm:text-right">
            <p className="text-sm text-gray-600 dark:text-gray-300">Today</p>
            <p className="text-base sm:text-lg font-semibold text-gray-900 dark:text-white">
              {new Date().toLocaleDateString("en-US", {
                weekday: "long",
                month: "short",
                day: "numeric",
              })}
            </p>
          </div>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm rounded-2xl p-4 sm:p-6 border border-gray-200/50 dark:border-gray-700/50"
          >
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-2 sm:space-y-0">
              <div className="flex-1">
                <p className="text-xs sm:text-sm font-medium text-gray-600 dark:text-gray-300">
                  {stat.label}
                </p>
                <p className="text-lg sm:text-2xl font-bold text-gray-900 dark:text-white mt-1">
                  {stat.value}
                </p>
              </div>
              <div
                className={`w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br ${getStatColor(
                  stat.color,
                )} rounded-xl flex items-center justify-center text-white text-lg sm:text-xl self-end sm:self-auto`}
              >
                {stat.icon}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
        {/* Upcoming Bookings */}
        <div className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm rounded-2xl p-4 sm:p-6 border border-gray-200/50 dark:border-gray-700/50">
          <div className="flex items-center justify-between mb-4 sm:mb-6">
            <h3 className="text-base sm:text-lg font-semibold text-gray-900 dark:text-white">
              Upcoming Bookings
            </h3>
            <button className="text-primary-600 hover:text-primary-700 text-xs sm:text-sm font-medium">
              View All
            </button>
          </div>
          <div className="space-y-4">
            {upcomingBookings.map((booking, index) => (
              <div
                key={index}
                className="border border-gray-200 dark:border-gray-600 rounded-lg p-4"
              >
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <h4 className="font-medium text-gray-900 dark:text-white">
                      {booking.caregiver}
                    </h4>
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      {booking.type}
                    </p>
                  </div>
                  <span
                    className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(
                      booking.status,
                    )}`}
                  >
                    {booking.status}
                  </span>
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-300 space-y-1">
                  <p>📅 {booking.date}</p>
                  <p>🕒 {booking.time}</p>
                  {booking.children && <p>👶 {booking.children.join(", ")}</p>}
                  {booking.elderly && <p>👵 {booking.elderly.join(", ")}</p>}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Recent Activity */}
        <div className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm rounded-2xl p-4 sm:p-6 border border-gray-200/50 dark:border-gray-700/50">
          <div className="flex items-center justify-between mb-4 sm:mb-6">
            <h3 className="text-base sm:text-lg font-semibold text-gray-900 dark:text-white">
              Recent Activity
            </h3>
            <button className="text-primary-600 hover:text-primary-700 text-xs sm:text-sm font-medium">
              View All
            </button>
          </div>
          <div className="space-y-4">
            {recentActivity.map((activity, index) => (
              <div key={index} className="flex items-start space-x-3">
                <div className="flex-shrink-0">
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center text-xs ${getStatColor(
                      activity.status === "unread" ? "primary" : "secondary",
                    )}`}
                  >
                    {activity.type === "booking"
                      ? "📅"
                      : activity.type === "message"
                        ? "💬"
                        : activity.type === "review"
                          ? "⭐"
                          : "💰"}
                  </div>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between">
                    <p className="text-sm font-medium text-gray-900 dark:text-white truncate">
                      {activity.title}
                    </p>
                    <p className="text-xs text-gray-500 dark:text-gray-400 ml-2">
                      {activity.time}
                    </p>
                  </div>
                  <p className="text-xs text-gray-600 dark:text-gray-300 mt-1">
                    {activity.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm rounded-2xl p-4 sm:p-6 border border-gray-200/50 dark:border-gray-700/50">
        <h3 className="text-base sm:text-lg font-semibold text-gray-900 dark:text-white mb-4">
          Quick Actions
        </h3>
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
          <button className="p-3 sm:p-4 text-center border border-gray-200 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
            <div className="text-xl sm:text-2xl mb-1 sm:mb-2">🔍</div>
            <div className="text-xs sm:text-sm font-medium text-gray-900 dark:text-white">
              Find Caregiver
            </div>
          </button>
          <button className="p-3 sm:p-4 text-center border border-gray-200 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
            <div className="text-xl sm:text-2xl mb-1 sm:mb-2">📅</div>
            <div className="text-xs sm:text-sm font-medium text-gray-900 dark:text-white">
              Schedule Care
            </div>
          </button>
          <button className="p-3 sm:p-4 text-center border border-gray-200 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
            <div className="text-xl sm:text-2xl mb-1 sm:mb-2">💬</div>
            <div className="text-xs sm:text-sm font-medium text-gray-900 dark:text-white">
              Message
            </div>
          </button>
          <button className="p-3 sm:p-4 text-center border border-gray-200 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
            <div className="text-xl sm:text-2xl mb-1 sm:mb-2">⚙️</div>
            <div className="text-xs sm:text-sm font-medium text-gray-900 dark:text-white">
              Settings
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}
