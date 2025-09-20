"use client";

import React, { useState } from "react";

interface Booking {
  id: number;
  family: string;
  caregiver: string;
  date: string;
  status: "Confirmed" | "Pending" | "Refunded";
  amount: string;
  time?: string;
  duration?: string;
  location?: string;
  familyContact?: string;
  caregiverContact?: string;
  notes?: string;
}

export default function Bookings() {
  const [searchTerm, setSearchTerm] = useState("");
  const [sortConfig, setSortConfig] = useState<{
    key: keyof Booking;
    direction: "asc" | "desc";
  } | null>(null);

  // Placeholder data for demonstration
  const [bookings] = useState<Booking[]>([
    {
      id: 1,
      family: "John Family",
      caregiver: "Jane Smith",
      date: "2025-09-20",
      time: "09:00 AM",
      duration: "4 hours",
      status: "Confirmed",
      amount: "LKR 2,000",
      location: "Colombo 05",
      familyContact: "+94 71 234 5678",
      caregiverContact: "+94 72 345 6789",
      notes: "Elderly care assistance",
    },
    {
      id: 2,
      family: "Alice Family",
      caregiver: "John Doe",
      date: "2025-09-22",
      time: "02:00 PM",
      duration: "3 hours",
      status: "Pending",
      amount: "LKR 1,500",
      location: "Kandy",
      familyContact: "+94 71 345 6789",
      caregiverContact: "+94 72 456 7890",
      notes: "Child care",
    },
    {
      id: 3,
      family: "Bob Family",
      caregiver: "Alice Brown",
      date: "2025-09-18",
      time: "10:00 AM",
      duration: "6 hours",
      status: "Refunded",
      amount: "LKR 1,800",
      location: "Galle",
      familyContact: "+94 71 456 7890",
      caregiverContact: "+94 72 567 8901",
      notes: "Special needs care",
    },
  ]);

  // Filter bookings based on search term
  const filteredBookings = bookings.filter(
    (booking) =>
      booking.family.toLowerCase().includes(searchTerm.toLowerCase()) ||
      booking.caregiver.toLowerCase().includes(searchTerm.toLowerCase()) ||
      booking.status.toLowerCase().includes(searchTerm.toLowerCase()) ||
      booking.location?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      booking.notes?.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  // Sort bookings
  const sortedBookings = [...filteredBookings].sort((a, b) => {
    if (!sortConfig) return 0;

    const aValue = String(a[sortConfig.key]);
    const bValue = String(b[sortConfig.key]);

    if (aValue < bValue) {
      return sortConfig.direction === "asc" ? -1 : 1;
    }
    if (aValue > bValue) {
      return sortConfig.direction === "asc" ? 1 : -1;
    }
    return 0;
  });

  const requestSort = (key: keyof Booking) => {
    let direction: "asc" | "desc" = "asc";
    if (sortConfig?.key === key && sortConfig.direction === "asc") {
      direction = "desc";
    }
    setSortConfig({ key, direction });
  };

  // View booking handler
  const handleView = (booking: Booking) => {
    // In a real app, this would show a modal with booking details
    console.log("Viewing booking:", booking);
  };

  // Approve/Refund handlers
  const handleApprove = (booking: Booking) => {
    // In a real app, this would update the booking status
    console.log("Approving booking:", booking.id);
  };

  const handleRefund = (booking: Booking) => {
    // In a real app, this would process the refund
    console.log("Refunding booking:", booking.id);
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
          Booking Management
        </h1>
        <div className="flex items-center space-x-4">
          <span className="text-sm text-gray-500">
            Pending: {bookings.filter((b) => b.status === "Pending").length}
          </span>
          <span className="text-sm text-gray-500">
            Active: {bookings.filter((b) => b.status === "Confirmed").length}
          </span>
        </div>
      </div>

      <div className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm rounded-2xl border border-gray-200/50 dark:border-gray-700/50 overflow-hidden">
        {/* Search and filters */}
        <div className="p-6 border-b border-gray-200 dark:border-gray-700">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex-1">
              <div className="relative">
                <input
                  type="text"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  placeholder="Search bookings..."
                  className="w-full px-4 py-2 pl-10 pr-4 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                />
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <svg
                    className="h-5 w-5 text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                </div>
              </div>
            </div>
            <div className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-300">
              <span>Total: {filteredBookings.length}</span>
            </div>
          </div>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
            <thead className="bg-gray-50 dark:bg-gray-700/50">
              <tr>
                <th
                  onClick={() => requestSort("family")}
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-600/50"
                >
                  <div className="flex items-center space-x-1">
                    <span>Family</span>
                    {sortConfig?.key === "family" && (
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d={
                            sortConfig.direction === "asc"
                              ? "M8 9l4-4 4 4m0 6l-4 4-4-4"
                              : "M16 15l-4 4-4-4m0-6l4-4 4 4"
                          }
                        />
                      </svg>
                    )}
                  </div>
                </th>
                <th
                  onClick={() => requestSort("caregiver")}
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-600/50"
                >
                  <div className="flex items-center space-x-1">
                    <span>Caregiver</span>
                    {sortConfig?.key === "caregiver" && (
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d={
                            sortConfig.direction === "asc"
                              ? "M8 9l4-4 4 4m0 6l-4 4-4-4"
                              : "M16 15l-4 4-4-4m0-6l4-4 4 4"
                          }
                        />
                      </svg>
                    )}
                  </div>
                </th>
                <th
                  onClick={() => requestSort("date")}
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-600/50"
                >
                  <div className="flex items-center space-x-1">
                    <span>Schedule</span>
                    {sortConfig?.key === "date" && (
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d={
                            sortConfig.direction === "asc"
                              ? "M8 9l4-4 4 4m0 6l-4 4-4-4"
                              : "M16 15l-4 4-4-4m0-6l4-4 4 4"
                          }
                        />
                      </svg>
                    )}
                  </div>
                </th>
                <th
                  onClick={() => requestSort("status")}
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-600/50"
                >
                  <div className="flex items-center space-x-1">
                    <span>Status</span>
                    {sortConfig?.key === "status" && (
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d={
                            sortConfig.direction === "asc"
                              ? "M8 9l4-4 4 4m0 6l-4 4-4-4"
                              : "M16 15l-4 4-4-4m0-6l4-4 4 4"
                          }
                        />
                      </svg>
                    )}
                  </div>
                </th>
                <th
                  onClick={() => requestSort("amount")}
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-600/50"
                >
                  <div className="flex items-center space-x-1">
                    <span>Amount</span>
                    {sortConfig?.key === "amount" && (
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d={
                            sortConfig.direction === "asc"
                              ? "M8 9l4-4 4 4m0 6l-4 4-4-4"
                              : "M16 15l-4 4-4-4m0-6l4-4 4 4"
                          }
                        />
                      </svg>
                    )}
                  </div>
                </th>
                <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white/50 dark:bg-gray-800/50 divide-y divide-gray-200 dark:divide-gray-700">
              {sortedBookings.map((booking) => (
                <tr
                  key={booking.id}
                  className="hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors"
                >
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="flex-shrink-0 h-8 w-8 bg-primary-100 dark:bg-primary-900/20 rounded-full flex items-center justify-center">
                        <span className="text-sm font-medium text-primary-600 dark:text-primary-400">
                          {booking.family.charAt(0)}
                        </span>
                      </div>
                      <div className="ml-4">
                        <div className="text-sm font-medium text-gray-900 dark:text-white">
                          {booking.family}
                        </div>
                        <div className="text-xs text-gray-500 dark:text-gray-400">
                          {booking.location}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900 dark:text-white">
                      {booking.caregiver}
                    </div>
                    <div className="text-xs text-gray-500 dark:text-gray-400">
                      {booking.notes}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900 dark:text-white">
                      {booking.date}
                    </div>
                    <div className="text-xs text-gray-500 dark:text-gray-400">
                      {booking.time} • {booking.duration}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span
                      className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                        booking.status === "Confirmed"
                          ? "bg-green-100 text-green-800"
                          : booking.status === "Refunded"
                            ? "bg-red-100 text-red-800"
                            : "bg-yellow-100 text-yellow-800"
                      }`}
                    >
                      {booking.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-gray-900 dark:text-white">
                      {booking.amount}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium space-x-2">
                    <button
                      onClick={() => handleView(booking)}
                      className="inline-flex items-center text-primary-600 hover:text-primary-900 dark:hover:text-primary-400"
                    >
                      <svg
                        className="w-4 h-4 mr-1"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                        />
                      </svg>
                      View
                    </button>
                    {booking.status === "Pending" && (
                      <button
                        onClick={() => handleApprove(booking)}
                        className="inline-flex items-center text-green-600 hover:text-green-900"
                      >
                        <svg
                          className="w-4 h-4 mr-1"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        Approve
                      </button>
                    )}
                    {booking.status === "Confirmed" && (
                      <button
                        onClick={() => handleRefund(booking)}
                        className="inline-flex items-center text-red-600 hover:text-red-900"
                      >
                        <svg
                          className="w-4 h-4 mr-1"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M3 10h10a8 8 0 018 8v2M3 10l6 6m-6-6l6-6"
                          />
                        </svg>
                        Refund
                      </button>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Empty state */}
        {sortedBookings.length === 0 && (
          <div className="text-center py-12">
            <svg
              className="mx-auto h-12 w-12 text-gray-400"
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
            <h3 className="mt-2 text-sm font-medium text-gray-900 dark:text-white">
              No bookings found
            </h3>
            <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
              {searchTerm
                ? "Try adjusting your search terms."
                : "New bookings will appear here."}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
