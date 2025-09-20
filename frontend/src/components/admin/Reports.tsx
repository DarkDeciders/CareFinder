"use client";

import React, { useState } from "react";

interface Report {
  id: number;
  title: string;
  date: string;
  type: string;
  status: "Generated" | "Pending";
  description?: string;
  period?: string;
  frequency?: string;
  generatedBy?: string;
  fileSize?: string;
  downloadUrl?: string;
}

export default function Reports() {
  const [searchTerm, setSearchTerm] = useState("");
  const [sortConfig, setSortConfig] = useState<{
    key: keyof Report;
    direction: "asc" | "desc";
  } | null>(null);

  // Placeholder data for demonstration
  const [reports] = useState<Report[]>([
    {
      id: 1,
      title: "Monthly Revenue Report",
      date: "2025-09-01",
      type: "Revenue",
      status: "Generated",
      description:
        "Detailed revenue analysis including bookings, commissions, and refunds",
      period: "August 2025",
      frequency: "Monthly",
      generatedBy: "System",
      fileSize: "2.4 MB",
      downloadUrl: "#",
    },
    {
      id: 2,
      title: "User Activity Analysis",
      date: "2025-09-10",
      type: "Activity",
      status: "Generated",
      description:
        "User engagement metrics, active users, and platform usage statistics",
      period: "Last 30 days",
      frequency: "Monthly",
      generatedBy: "System",
      fileSize: "1.8 MB",
      downloadUrl: "#",
    },
    {
      id: 3,
      title: "Dispute Resolution Summary",
      date: "2025-09-15",
      type: "Dispute",
      status: "Pending",
      description:
        "Overview of customer disputes, resolutions, and pending cases",
      period: "September 2025",
      frequency: "Monthly",
      generatedBy: "Admin",
      fileSize: "Pending",
    },
  ]);

  // Filter reports based on search term
  const filteredReports = reports.filter(
    (report) =>
      report.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      report.type.toLowerCase().includes(searchTerm.toLowerCase()) ||
      report.description?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      report.period?.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  // Sort reports
  const sortedReports = [...filteredReports].sort((a, b) => {
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

  const requestSort = (key: keyof Report) => {
    let direction: "asc" | "desc" = "asc";
    if (sortConfig?.key === key && sortConfig.direction === "asc") {
      direction = "desc";
    }
    setSortConfig({ key, direction });
  };

  // View report handler
  const handleView = (report: Report) => {
    if (report.downloadUrl) {
      window.open(report.downloadUrl, "_blank");
    }
  };

  // Generate report handler
  const handleGenerate = (report: Report) => {
    // In a real app, this would trigger report generation
    console.log("Generating report:", report.id);
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
          Reports & Analytics
        </h1>
        <button className="inline-flex items-center px-4 py-2 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500">
          <svg
            className="w-4 h-4 mr-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 4v16m8-8H4"
            />
          </svg>
          New Custom Report
        </button>
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
                  placeholder="Search reports..."
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
              <span>Total: {filteredReports.length}</span>
            </div>
          </div>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
            <thead className="bg-gray-50 dark:bg-gray-700/50">
              <tr>
                <th
                  onClick={() => requestSort("title")}
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-600/50"
                >
                  <div className="flex items-center space-x-1">
                    <span>Title</span>
                    {sortConfig?.key === "title" && (
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
                  onClick={() => requestSort("date")}
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-600/50"
                >
                  <div className="flex items-center space-x-1">
                    <span>Date</span>
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
                <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white/50 dark:bg-gray-800/50 divide-y divide-gray-200 dark:divide-gray-700">
              {sortedReports.map((report) => (
                <tr
                  key={report.id}
                  className="hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors"
                >
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="flex-shrink-0 h-8 w-8 bg-primary-100 dark:bg-primary-900/20 rounded-lg flex items-center justify-center">
                        <svg
                          className="w-4 h-4 text-primary-600 dark:text-primary-400"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          {report.type === "Revenue" ? (
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                            />
                          ) : report.type === "Activity" ? (
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                            />
                          ) : (
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                            />
                          )}
                        </svg>
                      </div>
                      <div className="ml-4">
                        <div className="text-sm font-medium text-gray-900 dark:text-white">
                          {report.title}
                        </div>
                        <div className="text-xs text-gray-500 dark:text-gray-400">
                          {report.period} • {report.frequency}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900 dark:text-white">
                      {report.type}
                    </div>
                    <div className="text-xs text-gray-500 dark:text-gray-400">
                      By {report.generatedBy}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900 dark:text-white">
                      {report.date}
                    </div>
                    <div className="text-xs text-gray-500 dark:text-gray-400">
                      {report.fileSize}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span
                      className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                        report.status === "Generated"
                          ? "bg-green-100 text-green-800"
                          : "bg-yellow-100 text-yellow-800"
                      }`}
                    >
                      {report.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium space-x-2">
                    <button
                      onClick={() => handleView(report)}
                      className="inline-flex items-center text-primary-600 hover:text-primary-900 dark:hover:text-primary-400"
                    >
                      {report.status === "Generated" ? (
                        <>
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
                              d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                            />
                          </svg>
                          Download
                        </>
                      ) : (
                        <>
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
                        </>
                      )}
                    </button>
                    {report.status === "Pending" && (
                      <button
                        onClick={() => handleGenerate(report)}
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
                            d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                          />
                        </svg>
                        Generate
                      </button>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Empty state */}
        {sortedReports.length === 0 && (
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
                d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
              />
            </svg>
            <h3 className="mt-2 text-sm font-medium text-gray-900 dark:text-white">
              No reports found
            </h3>
            <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
              {searchTerm
                ? "Try adjusting your search terms."
                : "Create a new report to get started."}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
