"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import FamilyDashboard from "@/components/dashboard/FamilyDashboard";
import CaregiverDashboard from "@/components/dashboard/CaregiverDashboard";
import AdminDashboard from "@/components/dashboard/AdminDashboard";
import TrainerDashboard from "@/components/dashboard/TrainerDashboard";
import AgentDashboard from "@/components/dashboard/AgentDashboard";

export default function Dashboard() {
  const [userType, setUserType] = useState("family");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check for demo user type or get from authentication
    const demoUserType = localStorage.getItem("demoUserType");
    if (demoUserType) {
      setUserType(demoUserType);
    }
    // In real app, this would check authentication status
    setLoading(false);
  }, []);

  const renderDashboard = () => {
    switch (userType) {
      case "family":
        return <FamilyDashboard />;
      case "caregiver":
        return <CaregiverDashboard />;
      case "admin":
        return <AdminDashboard />;
      case "trainer":
        return <TrainerDashboard />;
      case "agent":
        return <AgentDashboard />;
      default:
        return <FamilyDashboard />;
    }
  };

  if (loading) {
    return (
      <div className="h-screen bg-gradient-to-br from-primary-50 via-white to-secondary-50 dark:from-gray-900 dark:via-gray-950 dark:to-gray-900 flex items-center justify-center overflow-hidden">
        <div className="text-center">
          <div className="w-8 h-8 rounded-lg mx-auto mb-4 overflow-hidden">
            <Image
              src="/logo.png"
              alt="CareFinder Logo"
              width={32}
              height={32}
              className="w-full h-full object-contain"
            />
          </div>
          <p className="text-gray-600 dark:text-gray-300">
            Loading dashboard...
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="h-screen bg-gradient-to-br from-primary-50 via-white to-secondary-50 dark:from-gray-900 dark:via-gray-950 dark:to-gray-900 overflow-hidden">
      {renderDashboard()}
    </div>
  );
}
