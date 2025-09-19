'use client'

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

export default function ChildcareService() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      setDarkMode(true);
      document.documentElement.classList.add('dark');
    } else {
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

  const services = [
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      ),
      title: "After-School Care",
      description: "Safe supervision and educational activities for school-age children from 3:00 PM to 7:00 PM."
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1a3 3 0 000-6h-1m4 6V4a3 3 0 013 3v2.5" />
        </svg>
      ),
      title: "Weekend Babysitting",
      description: "Flexible weekend care allowing parents time for personal activities or date nights."
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3a4 4 0 118 0v4m-8 0h8m-8 0H4a2 2 0 00-2 2v10a2 2 0 002 2h16a2 2 0 002-2V9a2 2 0 00-2-2h-4m-8 0V9" />
        </svg>
      ),
      title: "Holiday Care",
      description: "Full-day care during school holidays with engaging activities and educational programs."
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
      title: "Educational Support",
      description: "Homework assistance, reading support, and creative learning activities to enhance development."
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
        </svg>
      ),
      title: "Meal Preparation",
      description: "Nutritious meal planning and preparation following dietary requirements and preferences."
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7a4 4 0 108 0m0 0v10a2 2 0 01-2 2H10a2 2 0 01-2-2V7m8 0V5a2 2 0 00-2-2H10a2 2 0 00-2 2v2m8 0h2a2 2 0 012 2v2M4 9h2a2 2 0 012 2v2" />
        </svg>
      ),
      title: "Transportation",
      description: "Safe transportation to and from school, activities, and appointments with verified drivers."
    }
  ];

  const ageGroups = [
    {
      title: "Infants & Toddlers (6 months - 3 years)",
      features: [
        "Gentle sleep routines and feeding schedules",
        "Sensory play and early development activities",
        "Diaper changing and potty training support",
        "Safety-focused environment with childproofed spaces",
        "Regular communication with parents about milestones"
      ],
      color: "from-pink-500 to-rose-500"
    },
    {
      title: "Preschoolers (3 - 5 years)",
      features: [
        "Creative arts and crafts activities",
        "Basic reading and number recognition",
        "Social skills development through play",
        "Outdoor activities and nature exploration",
        "Preparation for school readiness"
      ],
      color: "from-blue-500 to-indigo-500"
    },
    {
      title: "School-Age Children (5 - 12 years)",
      features: [
        "Homework assistance and study support",
        "After-school activity coordination",
        "Sports and physical activity engagement",
        "Technology balance and screen time management",
        "Peer interaction and social development"
      ],
      color: "from-green-500 to-emerald-500"
    }
  ];

  return (
    <div className="min-h-screen transition-colors duration-300">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/80 dark:bg-gray-950/80 backdrop-blur-lg border-b border-gray-200 dark:border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-lg flex items-center justify-center">
                <div className="w-4 h-4 bg-white rounded-sm"></div>
              </div>
              <div className="text-2xl font-display font-bold text-gray-900 dark:text-white">
                CareFinder
              </div>
            </Link>

            <div className="flex items-center space-x-6">
              <Link href="/" className="text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 font-medium transition-colors">
                Home
              </Link>
              <Link href="/services" className="text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 font-medium transition-colors">
                Services
              </Link>
              <Link href="/about" className="text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 font-medium transition-colors">
                About
              </Link>
              <Link href="/contact" className="text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 font-medium transition-colors">
                Contact
              </Link>

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

              <Link href="/login" className="bg-primary-600 hover:bg-primary-700 text-white px-6 py-2 rounded-lg font-medium transition-colors shadow-sm">
                Sign In
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Breadcrumb */}
      <div className="bg-gray-50 dark:bg-gray-900/50 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center space-x-2 text-sm">
            <Link href="/" className="text-gray-500 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400">
              Home
            </Link>
            <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
            <Link href="/services" className="text-gray-500 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400">
              Services
            </Link>
            <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
            <span className="text-primary-600 dark:text-primary-400 font-medium">Childcare</span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/60 via-white/70 to-indigo-50/60 dark:from-gray-900/70 dark:via-gray-950/80 dark:to-gray-900/70"></div>
        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-200 dark:bg-blue-900/20 rounded-full blur-3xl opacity-20"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-indigo-200 dark:bg-indigo-900/20 rounded-full blur-3xl opacity-20"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
            <div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-gray-900 dark:text-white leading-tight mb-6">
                Professional{' '}
                <span className="text-transparent bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text">
                  Childcare
                </span>{' '}
                Services
              </h1>
              <p className="mt-6 text-xl text-gray-600 dark:text-gray-300 leading-relaxed mb-8">
                Safe, nurturing, and educational childcare solutions for busy families. Our experienced 
                caregivers provide personalized attention to help your children thrive.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/register" className="group bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-8 py-4 rounded-xl text-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 text-center">
                  Find Childcare Providers
                  <svg className="inline-block ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </Link>
                <Link href="/contact" className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-4 rounded-xl text-lg font-semibold transition-all duration-300 text-center">
                  Learn More
                </Link>
              </div>
            </div>

            <div className="mt-12 lg:mt-0">
              <div className="bg-white/70 dark:bg-gray-800/70 rounded-3xl p-8 shadow-soft dark:shadow-lg border border-gray-100/50 dark:border-gray-700/50">
                <div className="aspect-w-16 aspect-h-12 bg-gradient-to-br from-blue-100 to-indigo-200 dark:from-gray-700 dark:to-gray-800 rounded-2xl flex items-center justify-center mb-6">
                  <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center text-white shadow-2xl">
                    <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1a3 3 0 000-6h-1m4 6V4a3 3 0 013 3v2.5" />
                    </svg>
                  </div>
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                  Trusted by 500+ Families
                </h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  Join hundreds of Sri Lankan families who trust CareFinder for their childcare needs. 
                  Our background-checked caregivers provide peace of mind and exceptional care.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-white/20 dark:bg-gray-950/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-gray-900 dark:text-white mb-4">
              Comprehensive Childcare Services
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              From after-school supervision to weekend care, we provide flexible solutions for every family&apos;s needs
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="group bg-white/70 dark:bg-gray-800/70 rounded-2xl p-8 shadow-soft dark:shadow-lg border border-gray-100/50 dark:border-gray-700/50 hover:shadow-xl dark:hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl mb-6 flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">{service.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Age-Specific Care */}
      <section className="py-20 bg-white/10 dark:bg-gray-950/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-gray-900 dark:text-white mb-4">
              Age-Appropriate Care Programs
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Tailored care approaches designed for each developmental stage of childhood
            </p>
          </div>

          <div className="space-y-8">
            {ageGroups.map((group, index) => (
              <div key={index} className="bg-white/70 dark:bg-gray-800/70 rounded-3xl p-8 shadow-soft dark:shadow-lg border border-gray-100/50 dark:border-gray-700/50">
                <div className="lg:grid lg:grid-cols-3 lg:gap-8 items-center">
                  <div>
                    <div className={`w-16 h-16 bg-gradient-to-br ${group.color} rounded-2xl mb-6 flex items-center justify-center text-white shadow-lg`}>
                      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                      </svg>
                    </div>
                    <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                      {group.title}
                    </h3>
                  </div>

                  <div className="lg:col-span-2 mt-8 lg:mt-0">
                    <div className="grid md:grid-cols-2 gap-4">
                      {group.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-start">
                          <div className="w-2 h-2 bg-blue-500 rounded-full mr-3 mt-3 flex-shrink-0"></div>
                          <span className="text-gray-600 dark:text-gray-300">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Our Childcare */}
      <section className="py-20 bg-white/20 dark:bg-gray-950/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-gray-900 dark:text-white mb-4">
              Why Parents Choose CareFinder
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              We understand that choosing childcare is one of the most important decisions you&apos;ll make
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                ),
                title: "Verified Caregivers",
                description: "All childcare providers undergo comprehensive background checks, reference verification, and child safety training."
              },
              {
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                ),
                title: "Flexible Scheduling",
                description: "Book care for a few hours, full days, or regular weekly schedules that fit your family's routine."
              },
              {
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                ),
                title: "Educational Focus",
                description: "Our caregivers incorporate learning activities, homework help, and developmental play into every session."
              },
              {
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
                  </svg>
                ),
                title: "Real-Time Updates",
                description: "Receive photos, updates, and detailed reports about your child's activities and progress throughout the day."
              },
              {
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064" />
                  </svg>
                ),
                title: "Emergency Prepared",
                description: "All caregivers are first aid certified and trained in emergency procedures for child safety."
              },
              {
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                ),
                title: "Family-Centered Care",
                description: "We work closely with parents to maintain routines, values, and parenting approaches that matter to your family."
              }
            ].map((item, index) => (
              <div key={index} className="group text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl mx-auto mb-6 flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform">
                  {item.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">{item.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600/70 via-blue-700/70 to-indigo-600/70 backdrop-blur-sm">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-white mb-6">
            Ready to Find Trusted Childcare?
          </h2>
          <p className="text-xl text-blue-100 mb-10 leading-relaxed">
            Join hundreds of Sri Lankan families who&apos;ve found peace of mind with our verified childcare providers. 
            Quality care for your children is just a few clicks away.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/register" className="group bg-white text-blue-600 px-8 py-4 rounded-xl text-lg font-semibold hover:bg-gray-50 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 text-center">
              Find Childcare Providers
              <svg className="inline-block ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
            <Link href="/contact" className="border-2 border-white text-white px-8 py-4 rounded-xl text-lg font-semibold hover:bg-white/10 transition-all duration-300 text-center">
              Contact Us
            </Link>
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
            </div>

            <div>
              <h3 className="font-semibold mb-4 text-lg">Company</h3>
              <ul className="space-y-3 text-gray-400">
                <li><Link href="/about" className="hover:text-white transition-colors">About Us</Link></li>
                <li><Link href="/careers" className="hover:text-white transition-colors">Careers</Link></li>
                <li><Link href="/contact" className="hover:text-white transition-colors">Contact</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4 text-lg">Services</h3>
              <ul className="space-y-3 text-gray-400">
                <li><Link href="/services/childcare" className="hover:text-white transition-colors">Childcare</Link></li>
                <li><Link href="/services/elderly-care" className="hover:text-white transition-colors">Elderly Care</Link></li>
                <li><Link href="/services/special-needs" className="hover:text-white transition-colors">Special Needs</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4 text-lg">Support</h3>
              <ul className="space-y-3 text-gray-400">
                <li><Link href="/help" className="hover:text-white transition-colors">Help Center</Link></li>
                <li><Link href="/contact" className="hover:text-white transition-colors">Contact Us</Link></li>
                <li><Link href="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
                <li><Link href="/terms-of-service" className="hover:text-white transition-colors">Terms of Service</Link></li>
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
