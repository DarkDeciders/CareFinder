'use client'

import React, { useState, useEffect } from 'react';

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    // Check for saved theme preference or default to light mode
    const savedTheme = localStorage.getItem('theme');

    if (savedTheme === 'dark') {
      setDarkMode(true);
      document.documentElement.classList.add('dark');
    } else {
      // Default to light mode
      setDarkMode(false);
      document.documentElement.classList.remove('dark');
    }
  }, []);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    if (!darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  return (
    <div className="min-h-screen bg-white dark:bg-gray-950 transition-colors duration-300">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/80 dark:bg-gray-950/80 backdrop-blur-lg border-b border-gray-200 dark:border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-lg flex items-center justify-center">
                <div className="w-4 h-4 bg-white rounded-sm"></div>
              </div>
              <div className="text-2xl font-display font-bold text-gray-900 dark:text-white">
                CareFinder
              </div>
            </div>

            <div className="hidden md:flex items-center space-x-8">
              <a href="#services" className="text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 font-medium transition-colors">Services</a>
              <a href="#how-it-works" className="text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 font-medium transition-colors">How it Works</a>
              <a href="#safety" className="text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 font-medium transition-colors">Safety</a>

              {/* Dark Mode Toggle */}
              <button
                onClick={toggleDarkMode}
                className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                aria-label="Toggle dark mode"
              >
                {darkMode ? (
                  <svg className="w-5 h-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRule="evenodd" />
                  </svg>
                ) : (
                  <svg className="w-5 h-5 text-gray-700" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                  </svg>
                )}
              </button>

              <button className="bg-primary-600 hover:bg-primary-700 text-white px-6 py-2 rounded-lg font-medium transition-colors shadow-sm">
                Sign In
              </button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center space-x-3">
              <button
                onClick={toggleDarkMode}
                className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
              >
                {darkMode ? (
                  <svg className="w-4 h-4 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRule="evenodd" />
                  </svg>
                ) : (
                  <svg className="w-4 h-4 text-gray-700" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                  </svg>
                )}
              </button>
              <button className="p-2">
                <svg className="w-6 h-6 text-gray-700 dark:text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary-50 via-white to-secondary-50 dark:from-gray-900 dark:via-gray-950 dark:to-gray-900"></div>
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary-200 dark:bg-primary-900/20 rounded-full blur-3xl opacity-20"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary-200 dark:bg-secondary-900/20 rounded-full blur-3xl opacity-20"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
          <div className="lg:grid lg:grid-cols-12 lg:gap-12 items-center">
            <div className="lg:col-span-7 animate-fade-in">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-gray-900 dark:text-white leading-tight">
                Find Trusted
                <span className="block text-transparent bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text">
                  Caregivers
                </span>
                for Your Family
              </h1>
              <p className="mt-6 text-xl text-gray-600 dark:text-gray-300 max-w-2xl leading-relaxed">
                Connect with verified, professional caregivers for childcare and elderly care services across Sri Lanka.
                Safe, reliable, and convenient care solutions with 24/7 support.
              </p>

              <div className="mt-10 flex flex-col sm:flex-row gap-4">
                <button className="group bg-gradient-to-r from-primary-600 to-primary-700 hover:from-primary-700 hover:to-primary-800 text-white px-8 py-4 rounded-xl text-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
                  Find a Caregiver
                  <svg className="inline-block ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </button>
                <button className="border-2 border-primary-600 dark:border-primary-400 text-primary-600 dark:text-primary-400 hover:bg-primary-50 dark:hover:bg-primary-900/20 px-8 py-4 rounded-xl text-lg font-semibold transition-all duration-300">
                  Become a Caregiver
                </button>
              </div>

              {/* Trust indicators */}
              <div className="mt-12 grid grid-cols-3 gap-8 text-center sm:text-left">
                <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-3">
                  <div className="w-12 h-12 bg-success-100 dark:bg-success-900/20 rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-success-600 dark:text-success-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-lg font-semibold text-gray-900 dark:text-white">Verified</div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">Background Checked</div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-3">
                  <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900/20 rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-primary-600 dark:text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-lg font-semibold text-gray-900 dark:text-white">Secure</div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">Protected Payments</div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-3">
                  <div className="w-12 h-12 bg-warning-100 dark:bg-warning-900/20 rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-warning-600 dark:text-warning-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-lg font-semibold text-gray-900 dark:text-white">24/7</div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">Support Available</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 mt-16 lg:mt-0">
              <div className="relative animate-slide-up">
                <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-soft-lg dark:shadow-2xl p-8 border border-gray-100 dark:border-gray-700">
                  <div className="text-center">
                    <div className="w-20 h-20 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-2xl mx-auto mb-6 flex items-center justify-center shadow-lg">
                      <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Quick Start</h3>

                    <div className="space-y-4">
                      <div className="flex items-center p-4 bg-gradient-to-r from-primary-50 to-primary-100 dark:from-primary-900/20 dark:to-primary-800/20 rounded-xl border border-primary-200 dark:border-primary-700/30">
                        <div className="w-10 h-10 bg-primary-500 text-white rounded-full flex items-center justify-center text-sm font-bold mr-4 shadow-md">1</div>
                        <span className="text-gray-700 dark:text-gray-300 font-medium">Search caregivers near you</span>
                      </div>

                      <div className="flex items-center p-4 bg-gradient-to-r from-secondary-50 to-secondary-100 dark:from-secondary-900/20 dark:to-secondary-800/20 rounded-xl border border-secondary-200 dark:border-secondary-700/30">
                        <div className="w-10 h-10 bg-secondary-500 text-white rounded-full flex items-center justify-center text-sm font-bold mr-4 shadow-md">2</div>
                        <span className="text-gray-700 dark:text-gray-300 font-medium">Review profiles & ratings</span>
                      </div>

                      <div className="flex items-center p-4 bg-gradient-to-r from-success-50 to-success-100 dark:from-success-900/20 dark:to-success-800/20 rounded-xl border border-success-200 dark:border-success-700/30">
                        <div className="w-10 h-10 bg-success-500 text-white rounded-full flex items-center justify-center text-sm font-bold mr-4 shadow-md">3</div>
                        <span className="text-gray-700 dark:text-gray-300 font-medium">Book & enjoy peace of mind</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-50 dark:bg-gray-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-gray-900 dark:text-white mb-4">
              Comprehensive Care Services
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Professional care solutions tailored to your family's unique needs
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Childcare */}
            <div className="group bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-soft hover:shadow-soft-lg dark:shadow-lg dark:hover:shadow-2xl transition-all duration-300 border border-gray-100 dark:border-gray-700 hover:border-primary-200 dark:hover:border-primary-700">
              <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-primary-600 rounded-2xl mb-6 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1a3 3 0 000-6h-1m4 6V4a3 3 0 013 3v2.5M15 11V9a3 3 0 00-3-3h-2m8 8v2a2 2 0 01-2 2H5a2 2 0 01-2-2v-2m0 0V9a2 2 0 012-2h14a2 2 0 012 2v2" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Childcare Services</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                Professional babysitters, nannies, and child companions for all ages with verified backgrounds and childcare training.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center text-sm text-gray-700 dark:text-gray-300">
                  <div className="w-2 h-2 bg-success-500 rounded-full mr-3"></div>
                  After-school care
                </li>
                <li className="flex items-center text-sm text-gray-700 dark:text-gray-300">
                  <div className="w-2 h-2 bg-success-500 rounded-full mr-3"></div>
                  Weekend babysitting
                </li>
                <li className="flex items-center text-sm text-gray-700 dark:text-gray-300">
                  <div className="w-2 h-2 bg-success-500 rounded-full mr-3"></div>
                  Full-time nanny services
                </li>
              </ul>
            </div>

            {/* Elderly Care */}
            <div className="group bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-soft hover:shadow-soft-lg dark:shadow-lg dark:hover:shadow-2xl transition-all duration-300 border border-gray-100 dark:border-gray-700 hover:border-secondary-200 dark:hover:border-secondary-700">
              <div className="w-16 h-16 bg-gradient-to-br from-secondary-500 to-secondary-600 rounded-2xl mb-6 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Elderly Care</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                Compassionate care for seniors including companionship, assistance with daily activities, and medical support.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center text-sm text-gray-700 dark:text-gray-300">
                  <div className="w-2 h-2 bg-success-500 rounded-full mr-3"></div>
                  Personal care assistance
                </li>
                <li className="flex items-center text-sm text-gray-700 dark:text-gray-300">
                  <div className="w-2 h-2 bg-success-500 rounded-full mr-3"></div>
                  Medication reminders
                </li>
                <li className="flex items-center text-sm text-gray-700 dark:text-gray-300">
                  <div className="w-2 h-2 bg-success-500 rounded-full mr-3"></div>
                  Companionship services
                </li>
              </ul>
            </div>

            {/* Special Needs */}
            <div className="group bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-soft hover:shadow-soft-lg dark:shadow-lg dark:hover:shadow-2xl transition-all duration-300 border border-gray-100 dark:border-gray-700 hover:border-success-200 dark:hover:border-success-700">
              <div className="w-16 h-16 bg-gradient-to-br from-success-500 to-success-600 rounded-2xl mb-6 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Special Needs Care</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                Specialized care for individuals with special needs, provided by trained and experienced caregivers.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center text-sm text-gray-700 dark:text-gray-300">
                  <div className="w-2 h-2 bg-success-500 rounded-full mr-3"></div>
                  Trained professionals
                </li>
                <li className="flex items-center text-sm text-gray-700 dark:text-gray-300">
                  <div className="w-2 h-2 bg-success-500 rounded-full mr-3"></div>
                  Customized care plans
                </li>
                <li className="flex items-center text-sm text-gray-700 dark:text-gray-300">
                  <div className="w-2 h-2 bg-success-500 rounded-full mr-3"></div>
                  24/7 availability
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-20 bg-white dark:bg-gray-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-gray-900 dark:text-white mb-4">
              How CareFinder Works
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">Simple steps to find the perfect caregiver</p>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-br from-primary-500 to-primary-600 rounded-full mx-auto mb-6 flex items-center justify-center text-white text-2xl font-bold shadow-lg group-hover:scale-110 transition-transform">
                1
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Search & Filter</h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                Browse verified caregivers in your area. Filter by services, experience, ratings, and availability to find the perfect match.
              </p>
            </div>

            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-br from-secondary-500 to-secondary-600 rounded-full mx-auto mb-6 flex items-center justify-center text-white text-2xl font-bold shadow-lg group-hover:scale-110 transition-transform">
                2
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Connect & Book</h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                Message caregivers directly, review their profiles and references, then book services that fit your schedule and budget.
              </p>
            </div>

            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-br from-success-500 to-success-600 rounded-full mx-auto mb-6 flex items-center justify-center text-white text-2xl font-bold shadow-lg group-hover:scale-110 transition-transform">
                3
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Enjoy Peace of Mind</h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                Receive quality care with secure payments, real-time updates, and 24/7 support. Rate your experience to help our community.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Safety Section */}
      <section id="safety" className="py-20 bg-gradient-to-br from-gray-50 to-primary-50 dark:from-gray-900 dark:to-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-display font-bold text-gray-900 dark:text-white mb-6">
                Your Safety is Our <span className="text-transparent bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text">Priority</span>
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                Every caregiver on our platform goes through a comprehensive verification process to ensure the highest standards of safety and professionalism.
              </p>

              <div className="space-y-6">
                <div className="flex items-start group">
                  <div className="w-12 h-12 bg-success-100 dark:bg-success-900/20 rounded-xl flex items-center justify-center mr-4 mt-1 group-hover:scale-110 transition-transform">
                    <svg className="w-6 h-6 text-success-600 dark:text-success-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-2 text-lg">Background Checks</h3>
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed">Police clearance certificates and comprehensive background verification for all caregivers.</p>
                  </div>
                </div>

                <div className="flex items-start group">
                  <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900/20 rounded-xl flex items-center justify-center mr-4 mt-1 group-hover:scale-110 transition-transform">
                    <svg className="w-6 h-6 text-primary-600 dark:text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-2 text-lg">Secure Payments</h3>
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed">Protected payments with escrow services and secure transaction processing through PayHere.</p>
                  </div>
                </div>

                <div className="flex items-start group">
                  <div className="w-12 h-12 bg-secondary-100 dark:bg-secondary-900/20 rounded-xl flex items-center justify-center mr-4 mt-1 group-hover:scale-110 transition-transform">
                    <svg className="w-6 h-6 text-secondary-600 dark:text-secondary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-2 text-lg">Professional References</h3>
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed">Verified work history and professional references from previous employers and families.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-12 lg:mt-0">
              <div className="bg-gradient-to-br from-primary-600 to-secondary-600 rounded-3xl p-8 text-white shadow-2xl">
                <h3 className="text-2xl font-bold mb-8">Platform Statistics</h3>
                <div className="grid grid-cols-2 gap-8">
                  <div className="text-center">
                    <div className="text-4xl font-bold mb-2 animate-pulse-soft">1000+</div>
                    <div className="text-primary-100">Verified Caregivers</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold mb-2 animate-pulse-soft">5000+</div>
                    <div className="text-primary-100">Happy Families</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold mb-2 animate-pulse-soft">4.9/5</div>
                    <div className="text-primary-100">Average Rating</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold mb-2 animate-pulse-soft">24/7</div>
                    <div className="text-primary-100">Support Available</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary-600 via-primary-700 to-secondary-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-white mb-6">
            Ready to Find Your Perfect Caregiver?
          </h2>
          <p className="text-xl text-primary-100 mb-10 leading-relaxed">
            Join thousands of families who trust CareFinder for their care needs. Get started today and experience the peace of mind you deserve.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="group bg-white text-primary-600 px-8 py-4 rounded-xl text-lg font-semibold hover:bg-gray-50 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
              Get Started Now
              <svg className="inline-block ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-xl text-lg font-semibold hover:bg-white/10 transition-all duration-300">
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 dark:bg-gray-950 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <div className="col-span-2 md:col-span-1">
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-lg flex items-center justify-center">
                  <div className="w-4 h-4 bg-white rounded-sm"></div>
                </div>
                <div className="text-2xl font-display font-bold">CareFinder</div>
              </div>
              <p className="text-gray-400 mb-6 leading-relaxed">
                Trusted care services connecting families with verified caregivers across Sri Lanka.
              </p>
              <div className="flex space-x-4">
                <div className="w-10 h-10 bg-primary-600 hover:bg-primary-700 rounded-lg flex items-center justify-center cursor-pointer transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                  </svg>
                </div>
                <div className="w-10 h-10 bg-primary-600 hover:bg-primary-700 rounded-lg flex items-center justify-center cursor-pointer transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"/>
                  </svg>
                </div>
                <div className="w-10 h-10 bg-primary-600 hover:bg-primary-700 rounded-lg flex items-center justify-center cursor-pointer transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </div>
              </div>
            </div>

            <div>
              <h3 className="font-semibold mb-4 text-lg">Services</h3>
              <ul className="space-y-3 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Childcare</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Elderly Care</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Special Needs</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Emergency Care</a></li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4 text-lg">Company</h3>
              <ul className="space-y-3 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-white transition-colors">How it Works</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Safety</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4 text-lg">Support</h3>
              <ul className="space-y-3 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact Us</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 text-center">
            <p className="text-gray-400">
              &copy; 2024 CareFinder. All rights reserved. | Built with care for Sri Lankan families.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}