"use client";

import React, { useState } from "react";

interface Verification {
  id: number;
  name: string;
  type: string;
  status: "Pending" | "Approved" | "Rejected";
  submitted: string;
  document?: string;
  notes?: string;
  email?: string;
  role?: string;
}

export default function Verifications() {
  const [searchTerm, setSearchTerm] = useState("");
  const [sortConfig, setSortConfig] = useState<{
    key: keyof Verification;
    direction: "asc" | "desc";
  } | null>(null);

  // Placeholder data for demonstration
  const [verifications] = useState<Verification[]>([
    {
      id: 1,
      name: "Jane Smith",
      type: "ID Card",
      status: "Pending",
      submitted: "2025-09-15",
      email: "jane@example.com",
      role: "Caregiver",
      document: "id_card.pdf",
      notes: "Awaiting document verification",
    },
    {
      id: 2,
      name: "John Doe",
      type: "Background Check",
      status: "Approved",
      submitted: "2025-09-10",
      email: "john@example.com",
      role: "Caregiver",
      document: "background_check.pdf",
      notes: "All documents verified",
    },
    {
      id: 3,
      name: "Alice Brown",
      type: "Certificate",
      status: "Rejected",
      submitted: "2025-09-12",
      email: "alice@example.com",
      role: "Caregiver",
      document: "certificate.pdf",
      notes: "Invalid certification",
    },
  ]);

  // Filter verifications based on search term
  const filteredVerifications = verifications.filter(
    (item) =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.type.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.status.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.email?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.notes?.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  // Sort verifications
  const sortedVerifications = [...filteredVerifications].sort((a, b) => {
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

  const requestSort = (key: keyof Verification) => {
    let direction: "asc" | "desc" = "asc";
    if (sortConfig?.key === key && sortConfig.direction === "asc") {
      direction = "desc";
    }
    setSortConfig({ key, direction });
  };

  // View document handler
  const handleView = (verification: Verification) => {
    // In a real app, this would open the document or show a modal
    console.log("Viewing document:", verification.document);
  };

  // Approve/Reject handlers
  const handleApprove = (verification: Verification) => {
    // In a real app, this would update the verification status
    console.log("Approving verification:", verification.id);
  };

  const handleReject = (verification: Verification) => {
    // In a real app, this would update the verification status
    console.log("Rejecting verification:", verification.id);
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
          Verification Requests
        </h1>
        <div className="flex items-center space-x-2">
          <span className="text-sm text-gray-500">
            Pending:{" "}
            {verifications.filter((v) => v.status === "Pending").length}
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
                  placeholder="Search verifications..."
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
              <span>Total: {filteredVerifications.length}</span>
            </div>
          </div>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
            <thead className="bg-gray-50 dark:bg-gray-700/50">
              <tr>
                <th
                  onClick={() => requestSort("name")}
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-600/50"
                >
                  <div className="flex items-center space-x-1">
                    <span>Applicant</span>
                    {sortConfig?.key === "name" && (
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
                  onClick={() => requestSort("type")}
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-600/50"
                >
                  <div className="flex items-center space-x-1">
                    <span>Type</span>
                    {sortConfig?.key === "type" && (
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
                  onClick={() => requestSort("submitted")}
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-600/50"
                >
                  <div className="flex items-center space-x-1">
                    <span>Submitted</span>
                    {sortConfig?.key === "submitted" && (
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
              {sortedVerifications.map((item) => (
                <tr
                  key={item.id}
                  className="hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors"
                >
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="flex-shrink-0 h-8 w-8 bg-primary-100 dark:bg-primary-900/20 rounded-full flex items-center justify-center">
                        <span className="text-sm font-medium text-primary-600 dark:text-primary-400">
                          {item.name.charAt(0)}
                        </span>
                      </div>
                      <div className="ml-4">
                        <div className="text-sm font-medium text-gray-900 dark:text-white">
                          {item.name}
                        </div>
                        <div className="text-xs text-gray-500 dark:text-gray-400">
                          {item.email}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900 dark:text-white">
                      {item.type}
                    </div>
                    <div className="text-xs text-gray-500 dark:text-gray-400">
                      {item.notes}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span
                      className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                        item.status === "Approved"
                          ? "bg-green-100 text-green-800"
                          : item.status === "Rejected"
                            ? "bg-red-100 text-red-800"
                            : "bg-yellow-100 text-yellow-800"
                      }`}
                    >
                      {item.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                    {item.submitted}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium space-x-2">
                    <button
                      onClick={() => handleView(item)}
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
                    {item.status === "Pending" && (
                      <>
                        <button
                          onClick={() => handleApprove(item)}
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
                        <button
                          onClick={() => handleReject(item)}
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
                              d="M6 18L18 6M6 6l12 12"
                            />
                          </svg>
                          Reject
                        </button>
                      </>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Empty state */}
        {sortedVerifications.length === 0 && (
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
                d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
              />
            </svg>
            <h3 className="mt-2 text-sm font-medium text-gray-900 dark:text-white">
              No verifications found
            </h3>
            <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
              {searchTerm
                ? "Try adjusting your search terms."
                : "New verification requests will appear here."}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
