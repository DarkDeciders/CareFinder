"use client";

import React, { useState } from "react";

interface Report {
  id: number;
  type: string;
  assignmentId: string;
  family: string;
  caregiver: string;
  date: string;
  time: string;
  status: string;
  result: string;
  issues: string[];
  notes: string;
}

interface AssignmentDetails {
  address: string;
  serviceType: string;
  duration: number;
}

export default function AgentReports() {
  const [selectedReport, setSelectedReport] = useState<Report | null>(null);
  const [newReportType, setNewReportType] = useState("verification");

  const reports = [
    {
      id: 1,
      type: "verification",
      assignmentId: "VER-2024-1201",
      family: "The Perera Family",
      caregiver: "Sarah Chen",
      date: "2024-12-20",
      time: "09:30",
      status: "submitted",
      result: "satisfactory",
      issues: [],
      notes:
        "Caregiver arrived on time and demonstrated excellent care standards. Child appeared happy and well-cared for.",
    },
    {
      id: 2,
      type: "quality_issue",
      assignmentId: "VER-2024-1199",
      family: "The Silva Family",
      caregiver: "Mike Johnson",
      date: "2024-12-19",
      time: "14:45",
      status: "under_review",
      result: "requires_attention",
      issues: ["cleanliness", "communication"],
      notes:
        "Observed minor cleanliness issues in elderly care area. Caregiver communication with family needs improvement. Recommended additional training.",
    },
    {
      id: 3,
      type: "incident",
      assignmentId: "VER-2024-1195",
      family: "The Fernando Family",
      caregiver: "Emma Williams",
      date: "2024-12-18",
      time: "11:20",
      status: "resolved",
      result: "incident_handled",
      issues: ["emergency_response"],
      notes:
        "Minor incident - child fell while playing. Caregiver responded appropriately with first aid and contacted parents immediately. No serious injury.",
    },
  ];

  const assignmentDetails: Record<string, AssignmentDetails> = {
    "VER-2024-1201": {
      address: "45 Galle Road, Colombo 03",
      serviceType: "Child Care",
      duration: 45,
    },
    "VER-2024-1199": {
      address: "78 Bauddhaloka Mawatha, Colombo 07",
      serviceType: "Elderly Care",
      duration: 60,
    },
    "VER-2024-1195": {
      address: "12 Horton Place, Colombo 07",
      serviceType: "Child Care",
      duration: 30,
    },
  };

  const getStatusColor = (status: string): string => {
    switch (status) {
      case "submitted":
        return "bg-primary-100 text-primary-800 dark:bg-primary-900/20 dark:text-primary-400";
      case "under_review":
        return "bg-warning-100 text-warning-800 dark:bg-warning-900/20 dark:text-warning-400";
      case "resolved":
        return "bg-success-100 text-success-800 dark:bg-success-900/20 dark:text-success-400";
      default:
        return "bg-gray-100 text-gray-800 dark:bg-gray-900/20 dark:text-gray-400";
    }
  };

  const getResultColor = (result: string): string => {
    switch (result) {
      case "satisfactory":
        return "bg-success-100 text-success-800 dark:bg-success-900/20 dark:text-success-400";
      case "requires_attention":
        return "bg-warning-100 text-warning-800 dark:bg-warning-900/20 dark:text-warning-400";
      case "incident_handled":
        return "bg-blue-100 text-blue-800 dark:bg-blue-900/20 dark:text-blue-400";
      default:
        return "bg-gray-100 text-gray-800 dark:bg-gray-900/20 dark:text-gray-400";
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
          Reports & Documentation
        </h1>
        <button className="bg-primary-500 hover:bg-primary-600 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors">
          Create New Report
        </button>
      </div>

      {/* Report Summary */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm rounded-2xl p-6 border border-gray-200/50 dark:border-gray-700/50 text-center">
          <div className="text-3xl font-bold text-primary-600 dark:text-primary-400">
            3
          </div>
          <div className="text-sm text-gray-600 dark:text-gray-400">
            Reports This Week
          </div>
        </div>
        <div className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm rounded-2xl p-6 border border-gray-200/50 dark:border-gray-700/50 text-center">
          <div className="text-3xl font-bold text-success-600 dark:text-success-400">
            1
          </div>
          <div className="text-sm text-gray-600 dark:text-gray-400">
            Satisfactory Results
          </div>
        </div>
        <div className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm rounded-2xl p-6 border border-gray-200/50 dark:border-gray-700/50 text-center">
          <div className="text-3xl font-bold text-warning-600 dark:text-warning-400">
            1
          </div>
          <div className="text-sm text-gray-600 dark:text-gray-400">
            Under Review
          </div>
        </div>
        <div className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm rounded-2xl p-6 border border-gray-200/50 dark:border-gray-700/50 text-center">
          <div className="text-3xl font-bold text-secondary-600 dark:text-secondary-400">
            97%
          </div>
          <div className="text-sm text-gray-600 dark:text-gray-400">
            Response Rate
          </div>
        </div>
      </div>

      {/* Reports List */}
      <div className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm rounded-2xl border border-gray-200/50 dark:border-gray-700/50 overflow-hidden">
        <div className="p-6 border-b border-gray-200 dark:border-gray-600">
          <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
            Recent Reports
          </h2>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50/50 dark:bg-gray-700/50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  Report Details
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  Assignment
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  Date & Time
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  Result
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 dark:divide-gray-600">
              {reports.map((report) => (
                <tr
                  key={report.id}
                  className="hover:bg-gray-50/50 dark:hover:bg-gray-700/50"
                >
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div>
                      <div className="text-sm font-medium text-gray-900 dark:text-white">
                        {report.type === "verification"
                          ? "Verification Report"
                          : report.type === "quality_issue"
                            ? "Quality Issue Report"
                            : "Incident Report"}
                      </div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">
                        {report.family} • {report.caregiver}
                      </div>
                      {report.issues.length > 0 && (
                        <div className="text-xs text-warning-600 dark:text-warning-400 mt-1">
                          Issues: {report.issues.join(", ")}
                        </div>
                      )}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900 dark:text-white">
                      {report.assignmentId}
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">
                      {assignmentDetails[report.assignmentId]?.address}
                    </div>
                    <div className="text-xs text-gray-500 dark:text-gray-400">
                      {assignmentDetails[report.assignmentId]?.serviceType}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900 dark:text-white">
                      {new Date(report.date).toLocaleDateString()}
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">
                      {report.time}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span
                      className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(report.status)}`}
                    >
                      {report.status === "under_review"
                        ? "Under Review"
                        : report.status === "submitted"
                          ? "Submitted"
                          : "Resolved"}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span
                      className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getResultColor(report.result)}`}
                    >
                      {report.result === "satisfactory"
                        ? "Satisfactory"
                        : report.result === "requires_attention"
                          ? "Needs Attention"
                          : "Incident Handled"}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    <div className="flex space-x-2">
                      <button
                        onClick={() => setSelectedReport(report)}
                        className="text-primary-600 dark:text-primary-400 hover:text-primary-900 dark:hover:text-primary-300"
                      >
                        View
                      </button>
                      <button className="text-secondary-600 dark:text-secondary-400 hover:text-secondary-900 dark:hover:text-secondary-300">
                        Download
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Report Details Modal */}
      {selectedReport && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 max-w-2xl w-full max-h-[80vh] overflow-y-auto">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
                Report Details
              </h2>
              <button
                onClick={() => setSelectedReport(null)}
                className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
              >
                <svg
                  className="w-6 h-6"
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
              </button>
            </div>

            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                    Assignment ID
                  </label>
                  <p className="text-sm text-gray-900 dark:text-white">
                    {selectedReport.assignmentId}
                  </p>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                    Date & Time
                  </label>
                  <p className="text-sm text-gray-900 dark:text-white">
                    {new Date(selectedReport.date).toLocaleDateString()} at{" "}
                    {selectedReport.time}
                  </p>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                    Family
                  </label>
                  <p className="text-sm text-gray-900 dark:text-white">
                    {selectedReport.family}
                  </p>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                    Caregiver
                  </label>
                  <p className="text-sm text-gray-900 dark:text-white">
                    {selectedReport.caregiver}
                  </p>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Report Notes
                </label>
                <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
                  <p className="text-sm text-gray-900 dark:text-white">
                    {selectedReport.notes}
                  </p>
                </div>
              </div>

              {selectedReport.issues.length > 0 && (
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Issues Identified
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {selectedReport.issues.map((issue, index) => (
                      <span
                        key={index}
                        className="inline-flex px-3 py-1 bg-warning-100 text-warning-800 dark:bg-warning-900/20 dark:text-warning-400 rounded-full text-sm"
                      >
                        {issue
                          .replace("_", " ")
                          .replace(/\b\w/g, (l) => l.toUpperCase())}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              <div className="flex justify-end space-x-3 pt-4 border-t border-gray-200 dark:border-gray-600">
                <button
                  onClick={() => setSelectedReport(null)}
                  className="px-4 py-2 text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200"
                >
                  Close
                </button>
                <button className="bg-primary-500 hover:bg-primary-600 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors">
                  Download PDF
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Quick Report Form */}
      <div className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm rounded-2xl p-6 border border-gray-200/50 dark:border-gray-700/50">
        <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
          Create New Report
        </h2>
        <form className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Report Type
              </label>
              <select
                value={newReportType}
                onChange={(e) => setNewReportType(e.target.value)}
                className="w-full bg-white/70 dark:bg-gray-800/70 border border-gray-300 dark:border-gray-600 rounded-lg px-3 py-2 text-sm"
              >
                <option value="verification">Verification Report</option>
                <option value="quality_issue">Quality Issue Report</option>
                <option value="incident">Incident Report</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Assignment ID
              </label>
              <select className="w-full bg-white/70 dark:bg-gray-800/70 border border-gray-300 dark:border-gray-600 rounded-lg px-3 py-2 text-sm">
                <option>Select Assignment</option>
                <option>VER-2024-1204</option>
                <option>VER-2024-1205</option>
              </select>
            </div>
          </div>

          {newReportType === "quality_issue" && (
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Issues Identified
              </label>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                {[
                  "Cleanliness",
                  "Communication",
                  "Punctuality",
                  "Safety",
                  "Professionalism",
                  "Other",
                ].map((issue) => (
                  <label key={issue} className="flex items-center">
                    <input
                      type="checkbox"
                      className="mr-2 rounded border-gray-300"
                    />
                    <span className="text-sm text-gray-700 dark:text-gray-300">
                      {issue}
                    </span>
                  </label>
                ))}
              </div>
            </div>
          )}

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Report Details
            </label>
            <textarea
              className="w-full bg-white/70 dark:bg-gray-800/70 border border-gray-300 dark:border-gray-600 rounded-lg px-3 py-2 text-sm h-32"
              placeholder="Provide detailed observations and notes..."
            ></textarea>
          </div>

          <div className="flex justify-end space-x-3">
            <button
              type="button"
              className="px-4 py-2 text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200"
            >
              Save Draft
            </button>
            <button
              type="submit"
              className="bg-primary-500 hover:bg-primary-600 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors"
            >
              Submit Report
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
