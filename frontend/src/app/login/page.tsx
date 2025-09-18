'use client'

import React, { useState } from 'react';
import LoginForm from '@/components/auth/LoginForm';

export default function Login() {
  const [userType, setUserType] = useState('family');

  const handleLogin = (email: string, password: string) => {
    // Login logic will be handled by backend team
    console.log('Login attempt:', { userType, email, password });
    // After successful login, redirect to dashboard
    window.location.href = '/dashboard';
  };

  const handleDemoLogin = (type: string) => {
    // Demo account login - simulate login and redirect to dashboard
    console.log('Demo login for:', type);

    // Simulate setting user type (in real app, this would come from authentication)
    localStorage.setItem('demoUserType', type);
    localStorage.setItem('demoUser', JSON.stringify({
      type: type,
      name: type === 'family' ? 'Demo Family' : type === 'caregiver' ? 'Demo Caregiver' : 'Demo Admin',
      email: `demo-${type}@carefinder.lk`
    }));

    // Redirect to dashboard
    window.location.href = '/dashboard';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 via-white to-secondary-50 dark:from-gray-900 dark:via-gray-950 dark:to-gray-900 flex items-center justify-center px-4">
      {/* Background effects */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary-200 dark:bg-primary-900/20 rounded-full blur-3xl opacity-20"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary-200 dark:bg-secondary-900/20 rounded-full blur-3xl opacity-20"></div>

      <div className="relative z-10">
        <LoginForm
          userType={userType}
          onUserTypeChange={setUserType}
          onLogin={handleLogin}
          onDemoLogin={handleDemoLogin}
        />
      </div>
    </div>
  );
}