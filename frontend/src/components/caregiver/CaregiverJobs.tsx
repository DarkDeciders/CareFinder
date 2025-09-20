"use client";

import React, { useState } from "react";

type Job = {
  id: number;
  familyName: string;
  location: string;
  services: string[];
  date: string;
  time: string;
  rate: number;
  distance: string;
  isDirectPost?: boolean; // Added to identify family-posted jobs
};

const availableJobs: Job[] = [
  // Family Posted Jobs (from FamilyPostJob component)
  {
    id: 1,
    familyName: "The Perera Family",
    location: "Colombo 03",
    services: ["Childcare", "Tutoring"],
    date: "2025-09-25",
    time: "3:00 PM - 7:00 PM",
    rate: 1200,
    distance: "2.5 km away",
    isDirectPost: true,
  },
  {
    id: 2,
    familyName: "Dr. Silva Family",
    location: "Dehiwala",
    services: ["Elder Care", "Companion Care"],
    date: "2025-09-22",
    time: "9:00 AM - 5:00 PM",
    rate: 1100,
    distance: "6 km away",
    isDirectPost: true,
  },
  // Regular Job Openings
  {
    id: 3,
    familyName: "The Jayasuriya Family",
    location: "Colombo 05",
    services: ["Childcare", "Tutoring"],
    date: "2025-09-25",
    time: "3:00 PM - 6:00 PM",
    rate: 1200,
    distance: "3 km away",
  },
  {
    id: 4,
    familyName: "Mr. Bandara",
    location: "Dehiwala",
    services: ["Elder Care"],
    date: "Weekends",
    time: "Flexible",
    rate: 900,
    distance: "8 km away",
  },
  {
    id: 5,
    familyName: "The Khan Family",
    location: "Wellawatte",
    services: ["Companion Care"],
    date: "2025-10-01 - 2025-10-05",
    time: "Morning Visits",
    rate: 800,
    distance: "5 km away",
  },
  {
    id: 6,
    familyName: "Dr. Fernando",
    location: "Colombo 07",
    services: ["Special Needs Care"],
    date: "Mon, Wed, Fri",
    time: "9:00 AM - 1:00 PM",
    rate: 1500,
    distance: "2 km away",
  },
  {
    id: 7,
    familyName: "The Alwis Family",
    location: "Nugegoda",
    services: ["Childcare", "Light Housekeeping"],
    date: "2025-09-28",
    time: "Full Day",
    rate: 1000,
    distance: "6 km away",
  },
  {
    id: 8,
    familyName: "Sunrise Care Center",
    location: "Colombo 06",
    services: ["Elder Care", "Companion Care"],
    date: "Flexible Schedule",
    time: "Part-time",
    rate: 850,
    distance: "4.5 km away",
  },
  {
    id: 9,
    familyName: "The Rodrigo Family",
    location: "Mount Lavinia",
    services: ["Special Needs Care"],
    date: "Mon-Fri",
    time: "10:00 AM - 2:00 PM",
    rate: 1600,
    distance: "7 km away",
  },
];

const ServiceTag = ({ service }: { service: string }) => {
  const colorMap: { [key: string]: string } = {
    Childcare: "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300",
    "Elder Care":
      "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300",
    "Companion Care":
      "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300",
    "Special Needs Care":
      "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300",
    Tutoring:
      "bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-300",
    "Light Housekeeping":
      "bg-pink-100 text-pink-800 dark:bg-pink-900 dark:text-pink-300",
  };
  return (
    <span
      className={`text-xs font-medium mr-1 sm:mr-2 mb-1 px-2 sm:px-2.5 py-0.5 rounded-full ${colorMap[service] || "bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200"}`}
    >
      {service}
    </span>
  );
};

export default function CaregiverJobs() {
  const [filter, setFilter] = useState("all");
  const [toast, setToast] = useState<string | null>(null);
  const [modalJob, setModalJob] = useState<Job | null>(null);

  React.useEffect(() => {
    if (!toast) return;
    const t = window.setTimeout(() => setToast(null), 2600);
    return () => clearTimeout(t);
  }, [toast]);

  const filteredJobs = availableJobs.filter(
    (job) =>
      filter === "all" ||
      job.services
        .map((s) => s.toLowerCase().replace(" ", "-"))
        .includes(filter),
  );

  return (
    <div className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-gray-200/50 dark:border-gray-700/50">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4">
        <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-2 sm:mb-0">
          Job Openings
        </h2>
        <div className="text-sm text-gray-600 dark:text-gray-400">
          <span className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-2 py-1 rounded-full font-medium">
            Apply to CareFinder Posts
          </span>
        </div>
      </div>

      {/* Filters */}
      <div className="flex flex-wrap gap-2 mb-4 sm:mb-6">
        <button
          onClick={() => setFilter("all")}
          className={`px-3 sm:px-4 py-2 text-xs sm:text-sm rounded-full transition-colors ${filter === "all" ? "bg-primary-600 text-white" : "bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600"}`}
        >
          All
        </button>
        <button
          onClick={() => setFilter("childcare")}
          className={`px-3 sm:px-4 py-2 text-xs sm:text-sm rounded-full transition-colors ${filter === "childcare" ? "bg-primary-600 text-white" : "bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600"}`}
        >
          Childcare
        </button>
        <button
          onClick={() => setFilter("elder-care")}
          className={`px-3 sm:px-4 py-2 text-xs sm:text-sm rounded-full transition-colors ${filter === "elder-care" ? "bg-primary-600 text-white" : "bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600"}`}
        >
          Elder Care
        </button>
        <button
          onClick={() => setFilter("special-needs-care")}
          className={`px-3 sm:px-4 py-2 text-xs sm:text-sm rounded-full transition-colors ${filter === "special-needs-care" ? "bg-primary-600 text-white" : "bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600"}`}
        >
          Special Needs
        </button>
      </div>

      {/* Jobs List */}
      <div className="space-y-3 sm:space-y-4">
        {filteredJobs.map((job) => (
          <div
            key={job.id}
            className="border border-gray-200 dark:border-gray-700 rounded-lg p-3 sm:p-4 transition-all hover:shadow-md hover:border-primary-300 dark:hover:border-primary-600"
          >
            <div className="flex flex-col lg:flex-row justify-between">
              <div className="flex-1 min-w-0">
                <h3 className="text-base sm:text-lg font-semibold text-primary-700 dark:text-primary-400 truncate">
                  {job.familyName}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                  <span className="inline-block">{job.location}</span>
                  <span className="mx-2 text-gray-400">•</span>
                  <span className="font-medium text-gray-700 dark:text-gray-300">
                    {job.distance}
                  </span>
                </p>
                <div className="mt-2 flex flex-wrap gap-1">
                  {job.services.map((service) => (
                    <ServiceTag key={service} service={service} />
                  ))}
                </div>
              </div>
              <div className="mt-3 lg:mt-0 lg:ml-4 lg:text-right flex-shrink-0">
                <p className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white">
                  LKR {job.rate}/hr
                </p>
                <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 mt-1">
                  {job.date}
                </p>
                <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400">
                  {job.time}
                </p>
              </div>
            </div>
            <div className="mt-3 sm:mt-4 pt-3 sm:pt-4 border-t border-gray-200 dark:border-gray-700">
              <div className="flex items-center justify-between mb-2">
                {job.isDirectPost ? (
                  <span className="text-xs text-green-600 dark:text-green-400 font-medium bg-green-50 dark:bg-green-900/30 px-2 py-1 rounded-full">
                    💚 Family Direct Post
                  </span>
                ) : (
                  <span className="text-xs text-blue-600 dark:text-blue-400 font-medium bg-blue-50 dark:bg-blue-900/30 px-2 py-1 rounded-full">
                    📋 Public Job Post
                  </span>
                )}
                <span className="text-xs text-gray-500 dark:text-gray-400">
                  Apply to be considered
                </span>
              </div>
              <div className="flex flex-col sm:flex-row gap-2">
                <button
                  onClick={() => setToast(`Applied to ${job.familyName}`)}
                  className="w-full bg-primary-600 hover:bg-primary-700 text-white px-3 sm:px-4 py-2 rounded-lg font-medium transition-colors text-xs sm:text-sm"
                >
                  📝 Apply Now
                </button>
                <button
                  onClick={() => setModalJob(job)}
                  className="w-full bg-gray-200 hover:bg-gray-300 dark:bg-gray-600 dark:hover:bg-gray-500 text-gray-800 dark:text-white px-3 sm:px-4 py-2 rounded-lg font-medium transition-colors text-xs sm:text-sm"
                >
                  View Details
                </button>
              </div>
            </div>
          </div>
        ))}
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
      {modalJob && (
        <div className="fixed inset-0 z-40 flex items-center justify-center p-4">
          <div
            onClick={() => setModalJob(null)}
            className="absolute inset-0 bg-black/40"
          />
          <div className="relative bg-white dark:bg-gray-800 rounded-lg p-4 sm:p-6 max-w-lg w-full z-50 border border-gray-200 dark:border-gray-700 max-h-[90vh] overflow-y-auto">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
              {modalJob.familyName}
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
              {modalJob.location} • {modalJob.distance}
            </p>
            <div className="mb-4">
              <p className="text-sm font-medium text-gray-800 dark:text-gray-200 mb-2">
                Services
              </p>
              <div className="flex flex-wrap gap-1">
                {modalJob.services.map((s: string) => (
                  <ServiceTag key={s} service={s} />
                ))}
              </div>
            </div>
            <div className="mb-4">
              <p className="text-sm font-medium text-gray-800 dark:text-gray-200 mb-1">
                Rate
              </p>
              <p className="text-lg font-bold text-primary-600 dark:text-primary-400">
                LKR {modalJob.rate}/hr
              </p>
            </div>
            <div className="mb-4">
              <p className="text-sm font-medium text-gray-800 dark:text-gray-200 mb-1">
                Schedule
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                {modalJob.date}
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                {modalJob.time}
              </p>
            </div>
            <div className="flex flex-col sm:flex-row justify-end gap-2">
              <button
                onClick={() => setModalJob(null)}
                className="px-4 py-2 rounded-md bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
              >
                Close
              </button>
              <button
                onClick={() => {
                  setToast(`Applied to ${modalJob.familyName}`);
                  setModalJob(null);
                }}
                className="px-4 py-2 rounded-md bg-primary-600 text-white hover:bg-primary-700 transition-colors"
              >
                📝 Apply
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
