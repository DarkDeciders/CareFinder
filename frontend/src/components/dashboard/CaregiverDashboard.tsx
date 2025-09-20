/**
 * CaregiverDashboard
 *
 * This module exports the CaregiverDashboard React component which provides the
 * top-level UI for a caregiver user. It contains a header with a logout action,
 * a tabbed navigation bar, and switches between subcomponents that implement
 * the dashboard sections (overview, jobs, calendar, messages, profile).
 *
 * The component is a client-side component ("use client") and uses local
 * storage to display a demo user's name when available.
 */
"use client";

import React, { useState } from "react";
import Image from "next/image";
import CaregiverProfile from "../caregiver/CaregiverProfile";
import CaregiverOverview from "../caregiver/CaregiverOverview";
import CaregiverJobs from "../caregiver/CaregiverJobs";
import CaregiverSchedule from "../caregiver/CaregiverSchedule";
import CaregiverTraining from "../caregiver/CaregiverTraining";
import CaregiverVerification from "../caregiver/CaregiverVerification";
import CaregiverMessages from "../caregiver/CaregiverMessages";
import CaregiverRequests from "../caregiver/CaregiverRequests";
import ThemeToggle from "../common/ThemeToggle";

/**
 * CaregiverDashboard component
 *
 * Renders the main dashboard layout for caregivers. The dashboard maintains a
 * single piece of state, `activeTab`, which controls which child section is
 * shown. Tabs are: 'overview', 'jobs', 'calendar', 'messages', 'profile'.
 *
 * Behaviour/Side effects:
 * - Reads `demoUser` from window.localStorage (only when window is defined) to
 *   display a welcome name in the header.
 * - On logout button click it removes demo user entries from localStorage and
 *   navigates to the `/login` page.
 *
 * Returns:
 * - JSX.Element: the dashboard UI.
 */
export default function CaregiverDashboard() {
  /**
   * activeTab: string
   * - current active tab key. Used to determine which dashboard section to
   *   render. Default is 'overview'.
   */
  const [activeTab, setActiveTab] = useState("overview");

  /**
   * renderContent
   *
   * Returns the JSX element for the currently active tab. Keeps the switch
   * logic centralised so the main render is concise.
   *
   * Edge cases:
   * - If an unknown tab key is set, it falls back to showing the Overview.
   */
  const renderContent = () => {
    switch (activeTab) {
      case "overview":
        return <CaregiverOverview />;
      case "requests":
        return <CaregiverRequests />;
      case "jobs":
        return <CaregiverJobs />;
      case "calendar":
        return <CaregiverSchedule />;
      case "training":
        return <CaregiverTraining />;
      case "verification":
        return <CaregiverVerification />;
      case "messages":
        return <CaregiverMessages />;
      case "profile":
        return <CaregiverProfile />;
      default:
        // Unknown tab -> fallback to overview
        return <CaregiverOverview />;
    }
  };

  return (
    <div className="h-full flex flex-col">
      {/* Header */}
      <header className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-lg border-b border-gray-200 dark:border-gray-700 flex-shrink-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 rounded-lg overflow-hidden">
                <Image
                  src="/logo.png"
                  alt="CareFinder Logo"
                  width={32}
                  height={32}
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="text-lg sm:text-xl font-display font-bold text-gray-900 dark:text-white">
                <span className="hidden sm:inline">CareFinder </span>Caregiver
              </div>
            </div>
            <div className="flex items-center space-x-2 sm:space-x-4">
              <div className="hidden md:block text-sm text-gray-600 dark:text-gray-300">
                Welcome,{" "}
                <span className="font-semibold">
                  {typeof window !== "undefined" &&
                  localStorage.getItem("demoUser")
                    ? JSON.parse(localStorage.getItem("demoUser") || "{}").name
                    : "Caregiver"}
                </span>
              </div>
              <div className="flex items-center space-x-1 sm:space-x-2 bg-success-100 dark:bg-success-900/20 px-2 sm:px-3 py-1 rounded-full">
                <div className="w-2 h-2 bg-success-500 rounded-full animate-pulse"></div>
                <span className="text-xs text-success-700 dark:text-success-400 font-medium">
                  Available
                </span>
              </div>
              <ThemeToggle />
              <button
                onClick={() => {
                  if (typeof window !== "undefined") {
                    // Remove demo user markers and redirect to login
                    localStorage.removeItem("demoUserType");
                    localStorage.removeItem("demoUser");
                    window.location.href = "/login";
                  }
                }}
                className="p-2 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors"
                title="Logout"
              >
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
                    d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Navigation Tabs */}
      <div className="bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm border-b border-gray-200 dark:border-gray-700 flex-shrink-0">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex overflow-x-auto space-x-4 sm:space-x-8 -mb-px scrollbar-hide">
            {[
              { key: "overview", label: "Overview", icon: "📊" },
              { key: "requests", label: "Requests", icon: "📥" },
              { key: "jobs", label: "Available Jobs", icon: "💼" },
              { key: "calendar", label: "My Schedule", icon: "📅" },
              { key: "training", label: "Training Status", icon: "🎓" },
              { key: "verification", label: "Agent Visits", icon: "✅" },
              { key: "messages", label: "Messages", icon: "💬" },
              { key: "profile", label: "Profile", icon: "👤" },
            ].map((tab) => (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key)}
                className={`py-3 sm:py-4 px-1 sm:px-2 border-b-2 font-medium text-xs sm:text-sm transition-colors whitespace-nowrap ${
                  activeTab === tab.key
                    ? "border-primary-500 text-primary-600 dark:text-primary-400"
                    : "border-transparent text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 hover:border-gray-300 dark:hover:border-gray-500"
                }`}
              >
                <span className="mr-1 sm:mr-2">{tab.icon}</span>
                <span className="hidden sm:inline text-xs sm:text-sm">
                  {tab.label}
                </span>
                <span className="sm:hidden text-xs">
                  {tab.label.split(" ")[0]}
                </span>
              </button>
            ))}
          </nav>
        </div>
      </div>

      {/* Main Content - Scrollable */}
      <main className="flex-1 overflow-y-auto">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6 lg:py-8">
          {renderContent()}
        </div>
      </main>
    </div>
  );
}
