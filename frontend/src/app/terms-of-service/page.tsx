'use client'

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

export default function TermsOfService() {
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
      title: "Acceptance of Terms",
      content: [
        {
          subtitle: "Agreement to Terms",
          text: "By accessing and using CareFinder's website, mobile application, and related services (collectively, the 'Platform'), you agree to be bound by these Terms of Service ('Terms'). If you do not agree to these Terms, please do not use our Platform."
        },
        {
          subtitle: "Eligibility",
          text: "You must be at least 18 years old and have the legal capacity to enter into binding agreements to use our services. By using our Platform, you represent and warrant that you meet these eligibility requirements."
        },
        {
          subtitle: "Account Registration",
          text: "You must create an account to access most features of our Platform. You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account."
        }
      ]
    },
    {
      title: "Platform Services",
      content: [
        {
          subtitle: "Service Overview",
          text: "CareFinder provides a digital platform that connects families seeking care services with verified caregivers. We facilitate introductions, communications, scheduling, and payments, but we are not a direct provider of care services."
        },
        {
          subtitle: "Service Categories",
          text: "Our platform facilitates connections for childcare, elderly care, special needs care, and related support services. Each service category has specific requirements and verification processes for caregivers."
        },
        {
          subtitle: "Platform Availability",
          text: "We strive to maintain platform availability 24/7, but we do not guarantee uninterrupted access. We may perform maintenance, updates, or experience technical issues that temporarily affect service availability."
        },
        {
          subtitle: "Service Modifications",
          text: "We reserve the right to modify, suspend, or discontinue any part of our services at any time with reasonable notice to users. We may also update features, pricing, or policies as needed."
        }
      ]
    },
    {
      title: "User Responsibilities",
      content: [
        {
          subtitle: "Accurate Information",
          text: "You must provide accurate, current, and complete information when creating your account and using our services. You are responsible for updating your information when changes occur."
        },
        {
          subtitle: "Compliance with Laws",
          text: "You agree to comply with all applicable Sri Lankan laws and regulations, including those related to child protection, elderly care, employment, taxation, and data protection."
        },
        {
          subtitle: "Respectful Conduct",
          text: "You must treat all platform users with respect and professionalism. Harassment, discrimination, abusive language, or inappropriate behavior is strictly prohibited and may result in account termination."
        },
        {
          subtitle: "Safety and Security",
          text: "You are responsible for your own safety and the safety of others. This includes conducting appropriate interviews, checking references, and following safety guidelines when engaging with caregivers or families."
        }
      ]
    },
    {
      title: "Caregiver Terms",
      content: [
        {
          subtitle: "Verification Requirements",
          text: "Caregivers must complete our verification process, including identity verification, background checks, reference checks, and submission of relevant certifications or qualifications."
        },
        {
          subtitle: "Professional Standards",
          text: "Caregivers must maintain professional standards, arrive punctually, provide quality care services, communicate effectively, and follow care plans and family instructions."
        },
        {
          subtitle: "Independent Contractor Status",
          text: "Caregivers using our platform are independent contractors, not employees of CareFinder. You are responsible for your own taxes, insurance, and legal compliance as an independent service provider."
        },
        {
          subtitle: "Service Quality",
          text: "Caregivers must provide services with skill and care expected of professionals in their field. Consistent poor reviews or quality issues may result in platform suspension or removal."
        }
      ]
    },
    {
      title: "Family Terms",
      content: [
        {
          subtitle: "Caregiver Selection",
          text: "Families are responsible for selecting appropriate caregivers based on their specific needs, conducting interviews, and making informed decisions about care arrangements."
        },
        {
          subtitle: "Clear Communication",
          text: "Families must clearly communicate care requirements, expectations, schedules, and any special instructions to caregivers. Changes to care plans should be communicated promptly."
        },
        {
          subtitle: "Payment Obligations",
          text: "Families must pay caregivers promptly according to agreed rates and terms. Platform fees and transaction costs are the family's responsibility unless otherwise specified."
        },
        {
          subtitle: "Safe Environment",
          text: "Families must provide a safe working environment for caregivers, including safe facilities, necessary supplies, and clear emergency procedures and contact information."
        }
      ]
    },
    {
      title: "Payments and Fees",
      content: [
        {
          subtitle: "Platform Fees",
          text: "CareFinder charges service fees for facilitating connections and transactions. Current fee structures are available on our website and may be updated with reasonable notice."
        },
        {
          subtitle: "Payment Processing",
          text: "All payments are processed through secure third-party payment processors. We do not store complete payment card information and follow industry-standard security practices."
        },
        {
          subtitle: "Refund Policy",
          text: "Refunds for platform fees may be considered on a case-by-case basis for service failures or technical issues. Care service refunds are handled between families and caregivers."
        },
        {
          subtitle: "Tax Responsibilities",
          text: "Users are responsible for understanding and complying with their tax obligations related to payments made or received through the platform, including Sri Lankan tax requirements."
        }
      ]
    },
    {
      title: "Liability and Insurance",
      content: [
        {
          subtitle: "Platform Limitation of Liability",
          text: "CareFinder's liability is limited to the maximum extent permitted by Sri Lankan law. We are not liable for damages arising from user interactions, service quality issues, or third-party actions."
        },
        {
          subtitle: "Insurance Requirements",
          text: "Caregivers are strongly encouraged to maintain appropriate professional liability insurance. Families should verify their homeowner's or renter's insurance covers caregiver activities in their homes."
        },
        {
          subtitle: "Indemnification",
          text: "Users agree to indemnify and hold harmless CareFinder from any claims, damages, or expenses arising from their use of the platform or violation of these Terms."
        },
        {
          subtitle: "Third-Party Claims",
          text: "We are not responsible for disputes between users, property damage, injuries, or other issues that may arise from care service arrangements made through our platform."
        }
      ]
    },
    {
      title: "Intellectual Property",
      content: [
        {
          subtitle: "Platform Content",
          text: "All content on the CareFinder platform, including text, graphics, logos, images, software, and design elements, is owned by CareFinder or our licensors and is protected by copyright and other intellectual property laws."
        },
        {
          subtitle: "User Content License",
          text: "By posting content on our platform, you grant CareFinder a non-exclusive, worldwide, royalty-free license to use, display, and distribute your content in connection with providing our services."
        },
        {
          subtitle: "Trademark Rights",
          text: "CareFinder, our logo, and other trademarks are owned by us or our affiliates. You may not use our trademarks without our prior written permission."
        },
        {
          subtitle: "DMCA Compliance",
          text: "We respect intellectual property rights and respond to valid DMCA takedown notices. If you believe your copyright has been infringed, please contact us with the required information."
        }
      ]
    },
    {
      title: "Privacy and Data Protection",
      content: [
        {
          subtitle: "Privacy Policy",
          text: "Our collection, use, and protection of your personal information is governed by our Privacy Policy, which is incorporated into these Terms by reference."
        },
        {
          subtitle: "Data Security",
          text: "We implement appropriate technical and organizational measures to protect user data, but cannot guarantee absolute security. Users are responsible for protecting their account credentials."
        },
        {
          subtitle: "Communication Monitoring",
          text: "We may monitor communications on our platform for safety, quality assurance, and dispute resolution purposes, in accordance with our Privacy Policy and applicable laws."
        }
      ]
    },
    {
      title: "Termination and Suspension",
      content: [
        {
          subtitle: "Account Termination",
          text: "Either party may terminate their account at any time. You remain liable for any outstanding obligations, and certain provisions of these Terms will survive termination."
        },
        {
          subtitle: "Platform Suspension",
          text: "We may suspend or terminate accounts for violations of these Terms, illegal activities, safety concerns, or other reasons deemed necessary to protect our platform and users."
        },
        {
          subtitle: "Data Retention",
          text: "After account termination, we may retain certain information as required by law or for legitimate business purposes, as outlined in our Privacy Policy."
        }
      ]
    },
    {
      title: "Dispute Resolution",
      content: [
        {
          subtitle: "Initial Resolution",
          text: "We encourage users to first attempt to resolve disputes directly. If unsuccessful, users may contact our customer support team for assistance with mediation."
        },
        {
          subtitle: "Binding Arbitration",
          text: "For disputes that cannot be resolved through mediation, parties agree to binding arbitration under the rules of the Sri Lankan Arbitration Act, conducted in Colombo, Sri Lanka."
        },
        {
          subtitle: "Class Action Waiver",
          text: "To the extent permitted by law, parties waive the right to participate in class-action lawsuits or class-wide arbitration against CareFinder."
        },
        {
          subtitle: "Governing Law",
          text: "These Terms are governed by the laws of Sri Lanka. Any legal proceedings must be conducted in the courts of Colombo, Sri Lanka."
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
            Terms of{' '}
            <span className="text-transparent bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text">
              Service
            </span>
          </h1>
          <p className="mt-6 text-xl text-gray-600 dark:text-gray-300 leading-relaxed mb-8">
            Please read these terms carefully before using CareFinder's care services platform. 
            By using our services, you agree to be bound by these terms and conditions.
          </p>
          <div className="inline-flex items-center space-x-2 bg-white/70 dark:bg-gray-800/70 rounded-full px-6 py-3 shadow-soft">
            <div className="w-3 h-3 bg-success-500 rounded-full"></div>
            <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Effective: September 2024</span>
          </div>
        </div>
      </section>

      {/* Terms Content */}
      <section className="py-20 bg-white/20 dark:bg-gray-950/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Introduction */}
          <div className="bg-white/70 dark:bg-gray-800/70 rounded-2xl p-8 shadow-soft dark:shadow-lg border border-gray-100/50 dark:border-gray-700/50 mb-8">
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900/30 rounded-xl flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6 text-primary-600 dark:text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <div>
                <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Legal Agreement</h2>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  These Terms of Service ("Terms") constitute a legally binding agreement between you and CareFinder (Pvt) Ltd, 
                  a company registered in Sri Lanka. These Terms govern your access to and use of our care services platform, 
                  including our website, mobile applications, and related services. Please read these Terms carefully and contact 
                  us if you have any questions before using our platform.
                </p>
              </div>
            </div>
          </div>

          {/* Terms Sections */}
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
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">Questions About These Terms?</h2>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
              If you have any questions about these Terms of Service or need clarification on any provisions, 
              please contact our legal team:
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 bg-primary-100 dark:bg-primary-900/30 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-4 h-4 text-primary-600 dark:text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <div className="font-medium text-gray-900 dark:text-white">Legal Team</div>
                  <div className="text-gray-600 dark:text-gray-300">legal@carefinder.lk</div>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 bg-secondary-100 dark:bg-secondary-900/30 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-4 h-4 text-secondary-600 dark:text-secondary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <div className="font-medium text-gray-900 dark:text-white">Phone</div>
                  <div className="text-gray-600 dark:text-gray-300">+94 11 234 5678</div>
                </div>
              </div>
            </div>
          </div>

          {/* Important Notice */}
          <div className="bg-red-50/70 dark:bg-red-900/20 rounded-2xl p-8 mt-8 border border-red-200/50 dark:border-red-700/50">
            <div className="flex items-start space-x-4">
              <div className="w-10 h-10 bg-red-100 dark:bg-red-900/30 rounded-xl flex items-center justify-center flex-shrink-0">
                <svg className="w-5 h-5 text-red-600 dark:text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Important Legal Notice</h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  These Terms may be updated periodically to reflect changes in our services, legal requirements, 
                  or business practices. Material changes will be communicated to users via email or platform notifications. 
                  Continued use of our services after updates constitutes acceptance of the revised Terms. 
                  If you do not agree to updated Terms, you must discontinue use of our platform.
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
