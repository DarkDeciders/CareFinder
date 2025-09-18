'use client'

import React, { useState } from 'react';
import RegisterForm from '@/components/auth/RegisterForm';

export default function Register() {
  const [userType, setUserType] = useState('family');

  const handleRegister = (formData: { userType: string; name: string; email: string; password?: string; phone?: string; location?: string; agreeTerms?: boolean }) => {
    // Registration logic will be handled by backend team
    console.log('Registration attempt:', formData);

    // After successful registration, simulate login and redirect
    localStorage.setItem('demoUserType', formData.userType);
    localStorage.setItem('demoUser', JSON.stringify({
      type: formData.userType,
      name: formData.name,
      email: formData.email
    }));

    // Redirect to dashboard
    window.location.href = '/dashboard';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 via-white to-secondary-50 dark:from-gray-900 dark:via-gray-950 dark:to-gray-900 py-12 px-4">
      {/* Background effects */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary-200 dark:bg-primary-900/20 rounded-full blur-3xl opacity-20"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary-200 dark:bg-secondary-900/20 rounded-full blur-3xl opacity-20"></div>

      <div className="relative z-10">
        <RegisterForm
          userType={userType}
          onUserTypeChange={setUserType}
          onRegister={handleRegister}
        />
      </div>
    </div>
  );
}