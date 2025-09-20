"use client";

import React, { useState } from "react";
import Link from "next/link";
import RegisterForm from "@/components/auth/RegisterForm";
import ThemeToggle from "@/components/common/ThemeToggle";

export default function Register() {
  const [userType, setUserType] = useState("family");

  const handleRegister = (formData: {
    userType: string;
    name: string;
    email: string;
    password?: string;
    phone?: string;
    location?: string;
    agreeTerms?: boolean;
  }) => {
    // Registration logic will be handled by backend team
    console.log("Registration attempt:", formData);

    // After successful registration, simulate login and redirect
    localStorage.setItem("demoUserType", formData.userType);
    localStorage.setItem(
      "demoUser",
      JSON.stringify({
        type: formData.userType,
        name: formData.name,
        email: formData.email,
      }),
    );

    // Redirect to dashboard
    window.location.href = "/dashboard";
  };

  return (
    <div className="h-screen overflow-hidden bg-gradient-to-br from-primary-50 via-white to-secondary-50 dark:from-gray-900 dark:via-gray-950 dark:to-gray-900">
      {/* Background effects */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary-200 dark:bg-primary-900/20 rounded-full blur-3xl opacity-20"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary-200 dark:bg-secondary-900/20 rounded-full blur-3xl opacity-20"></div>

      <div className="absolute top-4 right-4 z-20">
        <ThemeToggle />
      </div>

      <div className="absolute top-4 left-4 z-20">
        <Link
          href="/"
          className="flex items-center space-x-2 px-3 py-2 bg-white/80 dark:bg-gray-800/80 border border-gray-200/50 dark:border-gray-700/50 rounded-full shadow-lg backdrop-blur-sm hover:bg-white dark:hover:bg-gray-700 transition-all duration-300 text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white text-sm"
        >
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
              d="M10 19l-7-7m0 0l7-7m-7 7h18"
            />
          </svg>
          <span>Home</span>
        </Link>
      </div>

      <div className="relative z-10 h-screen flex items-center justify-center py-4 px-4 lg:px-8">
        <RegisterForm
          userType={userType}
          onUserTypeChange={setUserType}
          onRegister={handleRegister}
        />
      </div>
    </div>
  );
}
