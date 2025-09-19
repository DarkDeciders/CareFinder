'use client'

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

export default function PrivacyPolicy() {
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

  const sections = [
    {
      title: "Information We Collect",
      content: [
        {
          subtitle: "Personal Information",
          text: "We collect information you provide directly, including your name, email address, phone number, address, date of birth, and identity verification documents. For caregivers, we also collect professional qualifications, certifications, and background check information."
        },
        {
          subtitle: "Usage Information",
          text: "We automatically collect information about your use of our platform, including IP address, browser type, device information, pages visited, time spent on pages, and interaction patterns to improve our services."
        },
        {
          subtitle: "Location Information", 
          text: "With your consent, we collect location data to match you with nearby caregivers and provide location-based services. You can disable location services in your device settings at any time."
        },
        {
          subtitle: "Communication Data",
          text: "We store messages, reviews, and other communications on our platform to facilitate services, resolve disputes, and maintain service quality. All communications are encrypted and securely stored."
        }
      ]
    },
    {
      title: "How We Use Your Information",
      content: [
        {
          subtitle: "Service Provision",
          text: "We use your information to provide care services, match caregivers with families, process payments, facilitate communications, and ensure platform functionality works seamlessly."
        },
        {
          subtitle: "Safety and Security",
          text: "Information is used to verify identities, conduct background checks, prevent fraud, ensure child and elderly safety, monitor service quality, and maintain platform security."
        },
        {
          subtitle: "Communication",
          text: "We may contact you about your account, service updates, safety alerts, promotional offers (with consent), and customer support matters through email, SMS, or in-app notifications."
        },
        {
          subtitle: "Legal Compliance",
          text: "We process information to comply with Sri Lankan laws, respond to legal requests, protect our rights and property, and cooperate with law enforcement when required."
        }
      ]
    },
    {
      title: "Information Sharing",
      content: [
        {
          subtitle: "Between Users",
          text: "We share necessary information between families and caregivers to facilitate care services, including contact details, service history, reviews, and scheduling information."
        },
        {
          subtitle: "Service Providers",
          text: "We share information with trusted third-party service providers who help operate our platform, including payment processors, background check companies, cloud storage providers, and customer support tools."
        },
        {
          subtitle: "Legal Requirements",
          text: "We may disclose information when required by Sri Lankan law, court orders, government requests, or to protect safety, prevent fraud, or defend our legal rights."
        },
        {
          subtitle: "Business Transfers",
          text: "In case of merger, acquisition, or sale of assets, user information may be transferred as part of the business transaction, with notice provided to users."
        }
      ]
    },
    {
      title: "Data Protection and Security",
      content: [
        {
          subtitle: "Security Measures",
          text: "We implement industry-standard security measures including encryption, secure servers, regular security audits, access controls, and secure payment processing to protect your information."
        },
        {
          subtitle: "Data Retention",
          text: "We retain personal information for as long as necessary to provide services, comply with legal obligations, resolve disputes, and enforce agreements. Inactive accounts may be deleted after 3 years."
        },
        {
          subtitle: "International Transfers",
          text: "Some data may be processed outside Sri Lanka by our service providers. We ensure appropriate safeguards are in place to protect your information during international transfers."
        },
        {
          subtitle: "Breach Notification",
          text: "In the unlikely event of a data breach, we will notify affected users within 72 hours and take immediate action to secure the platform and prevent further unauthorized access."
        }
      ]
    },
    {
      title: "Your Rights and Choices",
      content: [
        {
          subtitle: "Access and Correction",
          text: "You have the right to access, review, and correct your personal information at any time through your account settings or by contacting our support team."
        },
        {
          subtitle: "Data Portability",
          text: "You can request a copy of your data in a portable format and transfer it to other services. We will provide your data within 30 days of a verified request."
        },
        {
          subtitle: "Account Deletion",
          text: "You may delete your account at any time. Upon deletion, we will remove your personal information within 30 days, except where retention is required by law."
        },
        {
          subtitle: "Marketing Communications",
          text: "You can opt out of promotional emails and SMS messages at any time using unsubscribe links or updating your communication preferences in your account settings."
        }
      ]
    },
    {
      title: "Cookies and Tracking",
      content: [
        {
          subtitle: "Cookie Usage",
          text: "We use cookies to remember your preferences, maintain login sessions, analyze site usage, and provide personalized experiences. You can control cookie settings through your browser."
        },
        {
          subtitle: "Analytics",
          text: "We use analytics tools to understand user behavior, improve our platform, and measure marketing effectiveness. This data is aggregated and anonymized to protect individual privacy."
        },
        {
          subtitle: "Third-Party Cookies",
          text: "Some third-party services we use may set their own cookies. Please review their privacy policies to understand how they use your information."
        }
      ]
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

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-50/60 via-white/70 to-secondary-50/60 dark:from-gray-900/70 dark:via-gray-950/80 dark:to-gray-900/70"></div>
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary-200 dark:bg-primary-900/20 rounded-full blur-3xl opacity-20"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary-200 dark:bg-secondary-900/20 rounded-full blur-3xl opacity-20"></div>

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-gray-900 dark:text-white leading-tight mb-6">
            Privacy{' '}
            <span className="text-transparent bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text">
              Policy
            </span>
          </h1>
          <p className="mt-6 text-xl text-gray-600 dark:text-gray-300 leading-relaxed mb-8">
            Your privacy is important to us. This policy explains how CareFinder collects, uses, 
            and protects your personal information when using our care services platform.
          </p>
          <div className="inline-flex items-center space-x-2 bg-white/70 dark:bg-gray-800/70 rounded-full px-6 py-3 shadow-soft">
            <div className="w-3 h-3 bg-success-500 rounded-full"></div>
            <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Last updated: September 2024</span>
          </div>
        </div>
      </section>

      {/* Policy Content */}
      <section className="py-20 bg-white/20 dark:bg-gray-950/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Introduction */}
          <div className="bg-white/70 dark:bg-gray-800/70 rounded-2xl p-8 shadow-soft dark:shadow-lg border border-gray-100/50 dark:border-gray-700/50 mb-8">
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900/30 rounded-xl flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6 text-primary-600 dark:text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <div>
                <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Our Commitment to Your Privacy</h2>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  CareFinder ("we," "our," or "us") operates a care services platform that connects families with verified caregivers 
                  across Sri Lanka. We are committed to protecting your privacy and being transparent about how we collect, use, 
                  and share your personal information. This Privacy Policy applies to all users of our website, mobile application, 
                  and related services.
                </p>
              </div>
            </div>
          </div>

          {/* Policy Sections */}
          <div className="space-y-8">
            {sections.map((section, index) => (
              <div key={index} className="bg-white/70 dark:bg-gray-800/70 rounded-2xl p-8 shadow-soft dark:shadow-lg border border-gray-100/50 dark:border-gray-700/50">
                <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6 flex items-center">
                  <span className="w-8 h-8 bg-primary-100 dark:bg-primary-900/30 rounded-lg flex items-center justify-center text-sm font-bold text-primary-600 dark:text-primary-400 mr-3">
                    {index + 1}
                  </span>
                  {section.title}
                </h2>
                <div className="space-y-6">
                  {section.content.map((item, itemIndex) => (
                    <div key={itemIndex}>
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3 flex items-center">
                        <div className="w-2 h-2 bg-secondary-500 rounded-full mr-3"></div>
                        {item.subtitle}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300 leading-relaxed ml-5">
                        {item.text}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Contact Information */}
          <div className="bg-gradient-to-br from-primary-600/10 via-primary-500/5 to-secondary-600/10 dark:from-primary-900/20 dark:via-primary-800/10 dark:to-secondary-900/20 rounded-2xl p-8 mt-12 border border-primary-200/50 dark:border-primary-700/50">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">Contact Us About Privacy</h2>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
              If you have any questions, concerns, or requests regarding this Privacy Policy or how we handle your 
              personal information, please contact us using the information below:
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 bg-primary-100 dark:bg-primary-900/30 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-4 h-4 text-primary-600 dark:text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <div className="font-medium text-gray-900 dark:text-white">Email</div>
                  <div className="text-gray-600 dark:text-gray-300">privacy@carefinder.lk</div>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 bg-secondary-100 dark:bg-secondary-900/30 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-4 h-4 text-secondary-600 dark:text-secondary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <div className="font-medium text-gray-900 dark:text-white">Address</div>
                  <div className="text-gray-600 dark:text-gray-300">CareFinder (Pvt) Ltd<br />123 Galle Road, Colombo 03<br />Sri Lanka</div>
                </div>
              </div>
            </div>
          </div>

          {/* Updates Notice */}
          <div className="bg-amber-50/70 dark:bg-amber-900/20 rounded-2xl p-8 mt-8 border border-amber-200/50 dark:border-amber-700/50">
            <div className="flex items-start space-x-4">
              <div className="w-10 h-10 bg-amber-100 dark:bg-amber-900/30 rounded-xl flex items-center justify-center flex-shrink-0">
                <svg className="w-5 h-5 text-amber-600 dark:text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Policy Updates</h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  We may update this Privacy Policy from time to time to reflect changes in our practices, technology, 
                  or applicable laws. We will notify users of material changes via email or through our platform. 
                  Continued use of our services after updates constitutes acceptance of the revised policy.
                </p>
              </div>
            </div>
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
