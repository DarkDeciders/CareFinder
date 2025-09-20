"use client";

import React, { useState } from "react";

type CareRequest = {
  id: number;
  familyName: string;
  clientName: string;
  location: string;
  services: string[];
  date: string;
  time: string;
  rate: number;
  distance: string;
  urgency: "low" | "medium" | "high";
  description: string;
  requestedAt: string;
  status: "pending" | "accepted" | "rejected";
};

const incomingRequests: CareRequest[] = [
  {
    id: 1,
    familyName: "The Perera Family",
    clientName: "Mrs. Kamala Perera (82 years)",
    location: "Colombo 03",
    services: ["Elder Care", "Companion Care"],
    date: "2025-09-22",
    time: "9:00 AM - 5:00 PM",
    rate: 1100,
    distance: "2.5 km away",
    urgency: "high",
    description: "Looking for experienced caregiver for elderly mother. She needs help with daily activities and companionship.",
    requestedAt: "2 hours ago",
    status: "pending",
  },
  {
    id: 2,
    familyName: "Dr. Silva Family",
    clientName: "Arun Silva (8 years)",
    location: "Nugegoda",
    services: ["Childcare", "Tutoring"],
    date: "2025-09-25",
    time: "3:00 PM - 7:00 PM",
    rate: 1300,
    distance: "4 km away",
    urgency: "medium",
    description: "Need reliable childcare for our 8-year-old son. Help with homework and evening activities.",
    requestedAt: "5 hours ago",
    status: "pending",
  },
  {
    id: 3,
    familyName: "The Mendis Family",
    clientName: "Dinesha Mendis (Special Needs)",
    location: "Dehiwala",
    services: ["Special Needs Care"],
    date: "Weekdays",
    time: "8:00 AM - 4:00 PM",
    rate: 1500,
    distance: "6 km away",
    urgency: "low",
    description: "Seeking experienced caregiver for our daughter with special needs. Patience and understanding required.",
    requestedAt: "1 day ago",
    status: "pending",
  },
];

const ServiceTag = ({ service }: { service: string }) => {
  const colorMap: { [key: string]: string } = {
    Childcare: "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300",
    "Elder Care": "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300",
    "Companion Care": "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300",
    "Special Needs Care": "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300",
    Tutoring: "bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-300",
  };
  return (
    <span
      className={`text-xs font-medium mr-1 sm:mr-2 mb-1 px-2 sm:px-2.5 py-0.5 rounded-full ${colorMap[service] || "bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200"}`}
    >
      {service}
    </span>
  );
};

const UrgencyBadge = ({ urgency }: { urgency: "low" | "medium" | "high" }) => {
  const urgencyColors = {
    low: "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300",
    medium: "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300",
    high: "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300",
  };

  return (
    <span className={`text-xs font-medium px-2 py-1 rounded-full ${urgencyColors[urgency]}`}>
      {urgency.toUpperCase()} PRIORITY
    </span>
  );
};

export default function CaregiverRequests() {
  const [requests, setRequests] = useState(incomingRequests);
  const [filter, setFilter] = useState("pending");
  const [toast, setToast] = useState<string | null>(null);
  const [modalRequest, setModalRequest] = useState<CareRequest | null>(null);

  React.useEffect(() => {
    if (!toast) return;
    const t = window.setTimeout(() => setToast(null), 3000);
    return () => clearTimeout(t);
  }, [toast]);

  const handleRequestAction = (requestId: number, action: "accepted" | "rejected") => {
    setRequests(prev =>
      prev.map(req =>
        req.id === requestId ? { ...req, status: action } : req
      )
    );

    const request = requests.find(r => r.id === requestId);
    setToast(`Request from ${request?.familyName} ${action}`);
    if (modalRequest?.id === requestId) {
      setModalRequest(null);
    }
  };

  const filteredRequests = requests.filter(request =>
    filter === "all" || request.status === filter
  );

  const pendingCount = requests.filter(r => r.status === "pending").length;
  const acceptedCount = requests.filter(r => r.status === "accepted").length;
  const rejectedCount = requests.filter(r => r.status === "rejected").length;

  return (
    <div className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-gray-200/50 dark:border-gray-700/50">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4 sm:mb-6">
        <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-2 sm:mb-0">
          Care Requests
        </h2>
        <div className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-400">
          <span className="bg-primary-100 dark:bg-primary-900 text-primary-800 dark:text-primary-200 px-2 py-1 rounded-full font-medium">
            {pendingCount} Pending
          </span>
        </div>
      </div>

      {/* Filters */}
      <div className="flex flex-wrap gap-2 mb-4 sm:mb-6">
        <button
          onClick={() => setFilter("pending")}
          className={`px-3 sm:px-4 py-2 text-xs sm:text-sm rounded-full transition-colors ${filter === "pending" ? "bg-primary-600 text-white" : "bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600"}`}
        >
          Pending ({pendingCount})
        </button>
        <button
          onClick={() => setFilter("accepted")}
          className={`px-3 sm:px-4 py-2 text-xs sm:text-sm rounded-full transition-colors ${filter === "accepted" ? "bg-primary-600 text-white" : "bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600"}`}
        >
          Accepted ({acceptedCount})
        </button>
        <button
          onClick={() => setFilter("rejected")}
          className={`px-3 sm:px-4 py-2 text-xs sm:text-sm rounded-full transition-colors ${filter === "rejected" ? "bg-primary-600 text-white" : "bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600"}`}
        >
          Rejected ({rejectedCount})
        </button>
        <button
          onClick={() => setFilter("all")}
          className={`px-3 sm:px-4 py-2 text-xs sm:text-sm rounded-full transition-colors ${filter === "all" ? "bg-primary-600 text-white" : "bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600"}`}
        >
          All
        </button>
      </div>

      {/* Requests List */}
      <div className="space-y-3 sm:space-y-4">
        {filteredRequests.length === 0 ? (
          <div className="text-center py-8">
            <div className="text-gray-400 text-4xl mb-4">📭</div>
            <p className="text-gray-500 dark:text-gray-400">
              {filter === "pending" ? "No pending requests" : `No ${filter} requests`}
            </p>
          </div>
        ) : (
          filteredRequests.map((request) => (
            <div
              key={request.id}
              className={`border rounded-lg p-3 sm:p-4 transition-all hover:shadow-md ${
                request.status === "pending"
                  ? "border-gray-200 dark:border-gray-700 hover:border-primary-300 dark:hover:border-primary-600"
                  : request.status === "accepted"
                  ? "border-green-200 dark:border-green-700 bg-green-50/50 dark:bg-green-900/10"
                  : "border-red-200 dark:border-red-700 bg-red-50/50 dark:bg-red-900/10"
              }`}
            >
              <div className="flex flex-col lg:flex-row justify-between">
                <div className="flex-1 min-w-0">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                    <h3 className="text-base sm:text-lg font-semibold text-primary-700 dark:text-primary-400 truncate">
                      {request.familyName}
                    </h3>
                    <div className="flex items-center space-x-2 mt-1 sm:mt-0">
                      <UrgencyBadge urgency={request.urgency} />
                      <span className="text-xs text-gray-500 dark:text-gray-400">
                        {request.requestedAt}
                      </span>
                    </div>
                  </div>

                  <p className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Client: {request.clientName}
                  </p>

                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                    <span className="inline-block">{request.location}</span>
                    <span className="mx-2 text-gray-400">•</span>
                    <span className="font-medium text-gray-700 dark:text-gray-300">
                      {request.distance}
                    </span>
                  </p>

                  <div className="mb-2 flex flex-wrap gap-1">
                    {request.services.map((service) => (
                      <ServiceTag key={service} service={service} />
                    ))}
                  </div>

                  <p className="text-sm text-gray-600 dark:text-gray-400 line-clamp-2">
                    {request.description}
                  </p>
                </div>

                <div className="mt-3 lg:mt-0 lg:ml-4 lg:text-right flex-shrink-0">
                  <p className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white">
                    LKR {request.rate}/hr
                  </p>
                  <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 mt-1">
                    {request.date}
                  </p>
                  <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400">
                    {request.time}
                  </p>
                  {request.status !== "pending" && (
                    <div className="mt-2">
                      <span className={`text-xs font-medium px-2 py-1 rounded-full ${
                        request.status === "accepted"
                          ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300"
                          : "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300"
                      }`}>
                        {request.status.toUpperCase()}
                      </span>
                    </div>
                  )}
                </div>
              </div>

              {request.status === "pending" && (
                <div className="mt-3 sm:mt-4 pt-3 sm:pt-4 border-t border-gray-200 dark:border-gray-700 flex flex-col sm:flex-row gap-2">
                  <button
                    onClick={() => handleRequestAction(request.id, "accepted")}
                    className="w-full bg-green-600 hover:bg-green-700 text-white px-3 sm:px-4 py-2 rounded-lg font-medium transition-colors text-xs sm:text-sm"
                  >
                    ✓ Accept Request
                  </button>
                  <button
                    onClick={() => handleRequestAction(request.id, "rejected")}
                    className="w-full bg-red-600 hover:bg-red-700 text-white px-3 sm:px-4 py-2 rounded-lg font-medium transition-colors text-xs sm:text-sm"
                  >
                    ✗ Reject Request
                  </button>
                  <button
                    onClick={() => setModalRequest(request)}
                    className="w-full bg-gray-200 hover:bg-gray-300 dark:bg-gray-600 dark:hover:bg-gray-500 text-gray-800 dark:text-white px-3 sm:px-4 py-2 rounded-lg font-medium transition-colors text-xs sm:text-sm"
                  >
                    View Details
                  </button>
                </div>
              )}

              {request.status !== "pending" && (
                <div className="mt-3 sm:mt-4 pt-3 sm:pt-4 border-t border-gray-200 dark:border-gray-700 flex justify-end">
                  <button
                    onClick={() => setModalRequest(request)}
                    className="bg-gray-200 hover:bg-gray-300 dark:bg-gray-600 dark:hover:bg-gray-500 text-gray-800 dark:text-white px-3 sm:px-4 py-2 rounded-lg font-medium transition-colors text-xs sm:text-sm"
                  >
                    View Details
                  </button>
                </div>
              )}
            </div>
          ))
        )}
      </div>

      {/* Toast */}
      {toast && (
        <div className="fixed right-4 sm:right-6 bottom-4 sm:bottom-6 z-50">
          <div className="bg-primary-600 text-white px-3 sm:px-4 py-2 rounded-lg shadow-lg text-sm">
            {toast}
          </div>
        </div>
      )}

      {/* Modal */}
      {modalRequest && (
        <div className="fixed inset-0 z-40 flex items-center justify-center p-4">
          <div
            onClick={() => setModalRequest(null)}
            className="absolute inset-0 bg-black/40"
          />
          <div className="relative bg-white dark:bg-gray-800 rounded-lg p-4 sm:p-6 max-w-2xl w-full z-50 border border-gray-200 dark:border-gray-700 max-h-[90vh] overflow-y-auto">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  {modalRequest.familyName}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Requested {modalRequest.requestedAt}
                </p>
              </div>
              <UrgencyBadge urgency={modalRequest.urgency} />
            </div>

            <div className="space-y-4">
              <div>
                <p className="text-sm font-medium text-gray-800 dark:text-gray-200 mb-1">
                  Client
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {modalRequest.clientName}
                </p>
              </div>

              <div>
                <p className="text-sm font-medium text-gray-800 dark:text-gray-200 mb-1">
                  Location
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {modalRequest.location} • {modalRequest.distance}
                </p>
              </div>

              <div>
                <p className="text-sm font-medium text-gray-800 dark:text-gray-200 mb-2">
                  Services Needed
                </p>
                <div className="flex flex-wrap gap-1">
                  {modalRequest.services.map((s: string) => (
                    <ServiceTag key={s} service={s} />
                  ))}
                </div>
              </div>

              <div>
                <p className="text-sm font-medium text-gray-800 dark:text-gray-200 mb-1">
                  Rate
                </p>
                <p className="text-lg font-bold text-primary-600 dark:text-primary-400">
                  LKR {modalRequest.rate}/hr
                </p>
              </div>

              <div>
                <p className="text-sm font-medium text-gray-800 dark:text-gray-200 mb-1">
                  Schedule
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {modalRequest.date} • {modalRequest.time}
                </p>
              </div>

              <div>
                <p className="text-sm font-medium text-gray-800 dark:text-gray-200 mb-1">
                  Description
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {modalRequest.description}
                </p>
              </div>

              {modalRequest.status !== "pending" && (
                <div>
                  <p className="text-sm font-medium text-gray-800 dark:text-gray-200 mb-1">
                    Status
                  </p>
                  <span className={`text-sm font-medium px-3 py-1 rounded-full ${
                    modalRequest.status === "accepted"
                      ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300"
                      : "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300"
                  }`}>
                    {modalRequest.status.toUpperCase()}
                  </span>
                </div>
              )}
            </div>

            <div className="flex flex-col sm:flex-row justify-end gap-2 mt-6">
              <button
                onClick={() => setModalRequest(null)}
                className="px-4 py-2 rounded-md bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
              >
                Close
              </button>
              {modalRequest.status === "pending" && (
                <>
                  <button
                    onClick={() => handleRequestAction(modalRequest.id, "rejected")}
                    className="px-4 py-2 rounded-md bg-red-600 text-white hover:bg-red-700 transition-colors"
                  >
                    ✗ Reject
                  </button>
                  <button
                    onClick={() => handleRequestAction(modalRequest.id, "accepted")}
                    className="px-4 py-2 rounded-md bg-green-600 text-white hover:bg-green-700 transition-colors"
                  >
                    ✓ Accept
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}